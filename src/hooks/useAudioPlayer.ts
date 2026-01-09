import { useState, useEffect, useCallback, useRef } from 'react'
import { AudioState } from '@/types'

interface UseAudioPlayerOptions {
  onEnded?: () => void
  onError?: (error: string) => void
  onTimeUpdate?: (currentTime: number) => void
  onLoadedMetadata?: (duration: number) => void
}

interface UseAudioPlayerReturn {
  audioState: AudioState
  play: () => Promise<void>
  pause: () => void
  stop: () => void
  seek: (time: number) => void
  setVolume: (volume: number) => void
  setPlaybackRate: (rate: number) => void
  loadAudio: (url: string) => void
  togglePlay: () => Promise<void>
  error: string | null
}

export function useAudioPlayer(
  options: UseAudioPlayerOptions = {}
): UseAudioPlayerReturn {
  const { onEnded, onError, onTimeUpdate, onLoadedMetadata } = options

  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false,
    isPaused: false,
    isRecording: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    playbackRate: 1,
  })
  
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio()
    audio.preload = 'metadata'
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  // Set up event listeners
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => {
      setAudioState(prev => ({ ...prev, currentTime: audio.currentTime }))
      onTimeUpdate?.(audio.currentTime)
    }

    const handleLoadedMetadata = () => {
      setAudioState(prev => ({ ...prev, duration: audio.duration }))
      onLoadedMetadata?.(audio.duration)
    }

    const handleEnded = () => {
      setAudioState(prev => ({
        ...prev,
        isPlaying: false,
        isPaused: false,
        currentTime: 0,
      }))
      onEnded?.()
    }

    const handleError = () => {
      const errorMessage = getAudioErrorMessage(audio.error)
      setError(errorMessage)
      setAudioState(prev => ({ ...prev, isPlaying: false, isPaused: false }))
      onError?.(errorMessage)
    }

    const handlePlay = () => {
      setAudioState(prev => ({ ...prev, isPlaying: true, isPaused: false }))
    }

    const handlePause = () => {
      setAudioState(prev => ({ ...prev, isPlaying: false, isPaused: true }))
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [onEnded, onError, onTimeUpdate, onLoadedMetadata])

  const loadAudio = useCallback((url: string) => {
    const audio = audioRef.current
    if (!audio) return

    setError(null)
    audio.src = url
    audio.load()
    
    setAudioState(prev => ({
      ...prev,
      currentTime: 0,
      isPlaying: false,
      isPaused: false,
    }))
  }, [])

  const play = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || !audio.src) return

    try {
      await audio.play()
      setError(null)
    } catch (err) {
      const errorMessage = 'Failed to play audio. Please try again.'
      setError(errorMessage)
      onError?.(errorMessage)
    }
  }, [onError])

  const pause = useCallback(() => {
    const audio = audioRef.current
    if (audio) {
      audio.pause()
    }
  }, [])

  const stop = useCallback(() => {
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.currentTime = 0
      setAudioState(prev => ({
        ...prev,
        isPlaying: false,
        isPaused: false,
        currentTime: 0,
      }))
    }
  }, [])

  const seek = useCallback((time: number) => {
    const audio = audioRef.current
    if (audio && audio.duration) {
      const clampedTime = Math.max(0, Math.min(time, audio.duration))
      audio.currentTime = clampedTime
      setAudioState(prev => ({ ...prev, currentTime: clampedTime }))
    }
  }, [])

  const setVolume = useCallback((volume: number) => {
    const audio = audioRef.current
    if (audio) {
      const clampedVolume = Math.max(0, Math.min(1, volume))
      audio.volume = clampedVolume
      setAudioState(prev => ({ ...prev, volume: clampedVolume }))
    }
  }, [])

  const setPlaybackRate = useCallback((rate: number) => {
    const audio = audioRef.current
    if (audio) {
      const clampedRate = Math.max(0.25, Math.min(2, rate))
      audio.playbackRate = clampedRate
      setAudioState(prev => ({ ...prev, playbackRate: clampedRate }))
    }
  }, [])

  const togglePlay = useCallback(async () => {
    if (audioState.isPlaying) {
      pause()
    } else {
      await play()
    }
  }, [audioState.isPlaying, pause, play])

  return {
    audioState,
    play,
    pause,
    stop,
    seek,
    setVolume,
    setPlaybackRate,
    loadAudio,
    togglePlay,
    error,
  }
}

function getAudioErrorMessage(error: MediaError | null): string {
  if (!error) return 'An unknown error occurred'
  
  switch (error.code) {
    case MediaError.MEDIA_ERR_ABORTED:
      return 'Audio playback was aborted'
    case MediaError.MEDIA_ERR_NETWORK:
      return 'A network error occurred while loading the audio'
    case MediaError.MEDIA_ERR_DECODE:
      return 'The audio file could not be decoded'
    case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
      return 'The audio format is not supported'
    default:
      return 'An error occurred while playing the audio'
  }
}

export default useAudioPlayer
