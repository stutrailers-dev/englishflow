// ==========================================
// Conversation Scenarios for EnglishFlow
// Tailored for business travel & technical contexts
// ==========================================

import type { Scenario } from '@/types'

export const scenarios: Scenario[] = [
  // ==========================================
  // AIRPORT SCENARIOS
  // ==========================================
  {
    id: 'airport_checkin_001',
    title: 'Airport Check-in',
    titleTurkish: 'Havalimanı Check-in',
    setting: 'You are at the British Airways check-in counter at Istanbul Airport, flying to London Heathrow for a business meeting.',
    settingTurkish: 'İstanbul Havalimanı\'nda British Airways check-in konterındasınız. İş toplantısı için Londra Heathrow\'a uçuyorsunuz.',
    difficulty: 'B1',
    category: 'airport',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Successfully check in for your flight',
        descriptionTurkish: 'Uçuşunuz için başarıyla check-in yapın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Request a window seat',
        descriptionTurkish: 'Pencere kenarı koltuk isteyin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Confirm your luggage allowance',
        descriptionTurkish: 'Bagaj hakkınızı onaylayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good morning, sir. May I see your passport and booking reference, please?',
        hints: ['Greet them back', 'Hand over your documents'],
        expectedResponses: [
          { text: 'Good morning. Here you are.', score: 100 },
          { text: 'Morning. Here\'s my passport and booking.', score: 95 },
          { text: 'Hello. Here is my passport.', score: 85 }
        ],
        acceptableKeywords: ['morning', 'hello', 'here', 'passport']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Say good morning', 'Offer your documents']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Thank you. I can see you\'re on flight BA678 to London Heathrow, departing at 10:45. Would you like a window or aisle seat?',
        hints: ['Express your preference clearly'],
        expectedResponses: [
          { text: 'I\'d like a window seat, please.', score: 100 },
          { text: 'Window seat, please.', score: 90 },
          { text: 'Can I have a window seat?', score: 95 },
          { text: 'I\'d prefer an aisle seat, please.', score: 100 },
          { text: 'Aisle seat, please.', score: 90 },
          { text: 'Can I have an aisle seat?', score: 95 }
        ],
        acceptableKeywords: ['window', 'aisle', 'please', 'like', 'prefer'],
        choiceKeywords: ['window', 'aisle']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Request window or aisle seat', 'Be polite']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Certainly. I\'ve allocated you seat {{SEAT_NUMBER}}, which is {{SEAT_LOCATION}}. Are you checking in any luggage today?',
        hints: ['Confirm your luggage', 'Mention if you have a suitcase or not'],
        expectedResponses: [
          { text: 'Yes, I have one suitcase to check in.', score: 100 },
          { text: 'Yes, just one bag, please.', score: 95 },
          { text: 'I\'d like to check in one piece of luggage.', score: 100 },
          { text: 'No, I only have hand luggage.', score: 100 },
          { text: 'No luggage to check in, just my carry-on.', score: 95 },
          { text: 'Just hand luggage, thank you.', score: 90 }
        ],
        acceptableKeywords: ['yes', 'no', 'one', 'suitcase', 'bag', 'luggage', 'check', 'hand', 'carry'],
        choiceKeywords: ['window', 'aisle'],
        dynamicReplacements: {
          'window': { 'SEAT_NUMBER': '14A', 'SEAT_LOCATION': 'by the window' },
          'aisle': { 'SEAT_NUMBER': '14C', 'SEAT_LOCATION': 'on the aisle' }
        }
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Say if you have luggage to check in']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: '{{LUGGAGE_RESPONSE}} Here\'s your boarding pass. Boarding starts at 10:15 from Gate B24. Have a pleasant flight.',
        hints: ['Thank them', 'Confirm the gate'],
        expectedResponses: [
          { text: 'Thank you very much. Gate B24, correct?', score: 100 },
          { text: 'Thanks. Which gate was that again?', score: 90 },
          { text: 'Brilliant, thank you. B24, got it.', score: 100 }
        ],
        acceptableKeywords: ['thank', 'gate', 'B24'],
        choiceKeywords: ['yes', 'no', 'hand', 'carry', 'luggage'],
        dynamicReplacements: {
          'yes': { 'LUGGAGE_RESPONSE': 'Perfect. Please place it on the belt. Your allowance is 23 kilograms. It weighs 19.5 kilograms, so that\'s fine.' },
          'no': { 'LUGGAGE_RESPONSE': 'No problem, hand luggage only. That\'s all sorted then.' },
          'hand': { 'LUGGAGE_RESPONSE': 'No problem, hand luggage only. That\'s all sorted then.' },
          'carry': { 'LUGGAGE_RESPONSE': 'No problem, hand luggage only. That\'s all sorted then.' }
        }
      }
    ],
    vocabulary: ['boarding pass', 'check-in', 'luggage allowance', 'aisle', 'window seat', 'departing'],
    chunks: ['I\'d like...', 'Here you are', 'May I see...', 'Have a pleasant flight']
  },

  {
    id: 'passport_control_001',
    title: 'Passport Control at Heathrow',
    titleTurkish: 'Heathrow\'da Pasaport Kontrolü',
    setting: 'You have just landed at London Heathrow and are going through UK Border Control. The immigration officer will ask you about your visit.',
    settingTurkish: 'Londra Heathrow\'a indiniz ve İngiltere sınır kontrolünden geçiyorsunuz. Görevli size ziyaretiniz hakkında sorular soracak.',
    difficulty: 'B1',
    category: 'airport',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Answer questions about the purpose of your visit',
        descriptionTurkish: 'Ziyaret amacınız hakkındaki soruları cevaplayın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Provide information about your stay duration',
        descriptionTurkish: 'Kalış süreniz hakkında bilgi verin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Answer questions about your accommodation',
        descriptionTurkish: 'Konaklama yeriniz hakkındaki soruları cevaplayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good afternoon. Passport, please. What is the purpose of your visit to the United Kingdom?',
        hints: ['State your purpose clearly', 'Mention business if applicable'],
        expectedResponses: [
          { text: 'Good afternoon. I\'m here on business. I have meetings with clients in Birmingham.', score: 100 },
          { text: 'Hello. It\'s a business trip. I\'m visiting clients.', score: 95 },
          { text: 'Business. I\'m meeting clients this week.', score: 85 }
        ],
        acceptableKeywords: ['business', 'meeting', 'clients', 'work', 'trip']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['State business purpose', 'Be clear and direct']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'I see. And how long are you planning to stay in the UK?',
        hints: ['Give specific duration', 'Mention departure date if known'],
        expectedResponses: [
          { text: 'I\'ll be staying for five days. I\'m flying back on Friday.', score: 100 },
          { text: 'Five days. My return flight is on Friday morning.', score: 95 },
          { text: 'Until Friday. About five days in total.', score: 90 }
        ],
        acceptableKeywords: ['days', 'Friday', 'week', 'return', 'flying', 'staying']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Mention duration', 'Include return date']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Where will you be staying during your visit?',
        hints: ['Name your hotel', 'Mention the city'],
        expectedResponses: [
          { text: 'I\'ll be staying at the Grand Hotel in Birmingham. I have a reservation.', score: 100 },
          { text: 'At a hotel in Birmingham. The Grand Hotel, near the city centre.', score: 95 },
          { text: 'The Grand Hotel, Birmingham. It\'s booked for five nights.', score: 90 }
        ],
        acceptableKeywords: ['hotel', 'Birmingham', 'staying', 'reservation', 'booked']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Name your hotel', 'Mention location']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'And what company do you work for?',
        hints: ['Name your company', 'Briefly mention what you do'],
        expectedResponses: [
          { text: 'I work for STU Trailer in Turkey. We manufacture semi-trailers.', score: 100 },
          { text: 'STU Trailer. We\'re a trailer manufacturing company based in Konya, Turkey.', score: 95 },
          { text: 'I\'m with STU Trailer. We make commercial vehicles.', score: 90 }
        ],
        acceptableKeywords: ['STU', 'Trailer', 'Turkey', 'company', 'manufacture', 'work']
      },
      {
        id: 'turn_8',
        role: 'user',
        text: '',
        hints: ['Name your company', 'Mention your industry']
      },
      {
        id: 'turn_9',
        role: 'agent',
        text: 'Is this your first visit to the UK?',
        hints: ['Answer honestly', 'You can mention previous visits'],
        expectedResponses: [
          { text: 'No, I\'ve been here several times before for business.', score: 100 },
          { text: 'No, I visit quite regularly. About three or four times a year.', score: 95 },
          { text: 'I\'ve visited before, yes. This is my third trip this year.', score: 90 }
        ],
        acceptableKeywords: ['no', 'before', 'times', 'visited', 'regularly', 'trip']
      },
      {
        id: 'turn_10',
        role: 'user',
        text: '',
        hints: ['Mention previous visits if any']
      },
      {
        id: 'turn_11',
        role: 'agent',
        text: 'Very well. Do you have anything to declare? Any goods over the duty-free allowance?',
        hints: ['Answer clearly', 'Mention if you have nothing to declare'],
        expectedResponses: [
          { text: 'No, nothing to declare. Just personal belongings and business documents.', score: 100 },
          { text: 'No, I don\'t have anything to declare.', score: 95 },
          { text: 'Nothing to declare. Only my personal items.', score: 90 }
        ],
        acceptableKeywords: ['no', 'nothing', 'declare', 'personal', 'belongings']
      },
      {
        id: 'turn_12',
        role: 'user',
        text: '',
        hints: ['State you have nothing to declare']
      },
      {
        id: 'turn_13',
        role: 'agent',
        text: 'That\'s fine. Welcome to the United Kingdom. Enjoy your stay.',
        hints: ['Thank them politely'],
        expectedResponses: [
          { text: 'Thank you very much. Have a good day.', score: 100 },
          { text: 'Thank you. I appreciate it.', score: 95 },
          { text: 'Thanks. Cheers.', score: 85 }
        ],
        acceptableKeywords: ['thank', 'cheers', 'appreciate']
      }
    ],
    vocabulary: ['border control', 'immigration officer', 'purpose of visit', 'duration', 'accommodation', 'duty-free allowance', 'declare', 'belongings'],
    chunks: ['I\'m here on business', 'I\'ll be staying for...', 'Nothing to declare', 'I work for...', 'Welcome to the UK']
  },

  {
    id: 'airport_security_001',
    title: 'Going Through Security',
    titleTurkish: 'Güvenlik Kontrolünden Geçiş',
    setting: 'You are passing through airport security at London Heathrow. You need to follow instructions and answer any questions.',
    settingTurkish: 'Londra Heathrow\'da güvenlik kontrolünden geçiyorsunuz. Talimatları takip etmeniz ve soruları cevaplamanız gerekiyor.',
    difficulty: 'B1',
    category: 'airport',
    duration: 4,
    objectives: [
      {
        id: 'obj_1',
        description: 'Follow security instructions correctly',
        descriptionTurkish: 'Güvenlik talimatlarını doğru şekilde takip edin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Answer questions about your belongings',
        descriptionTurkish: 'Eşyalarınız hakkındaki soruları cevaplayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Please remove your laptop and any liquids from your bag. Place them in a separate tray.',
        hints: ['Acknowledge the instruction', 'Comply politely'],
        expectedResponses: [
          { text: 'Of course. Just a moment.', score: 100 },
          { text: 'Yes, no problem.', score: 95 },
          { text: 'Sure, I\'ll do that now.', score: 95 }
        ],
        acceptableKeywords: ['yes', 'course', 'sure', 'okay', 'moment']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Acknowledge and comply']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Is this your bag, sir? We need to check it. There seems to be something metallic inside.',
        hints: ['Confirm it\'s yours', 'Explain what might be metallic'],
        expectedResponses: [
          { text: 'Yes, that\'s mine. It might be my tablet charger.', score: 100 },
          { text: 'Yes, it\'s my bag. I have some cables inside.', score: 95 },
          { text: 'That\'s my bag. Could be my power bank.', score: 90 }
        ],
        acceptableKeywords: ['yes', 'mine', 'my', 'bag', 'charger', 'cable', 'power']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Confirm ownership', 'Suggest what it might be']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Ah yes, it\'s a power bank. That\'s fine. You\'re all clear. Have a good flight.',
        hints: ['Thank them'],
        expectedResponses: [
          { text: 'Thank you. Have a nice day.', score: 100 },
          { text: 'Thanks very much.', score: 95 },
          { text: 'Cheers, thanks.', score: 90 }
        ],
        acceptableKeywords: ['thank', 'cheers']
      }
    ],
    vocabulary: ['tray', 'liquids', 'metallic', 'power bank', 'security check'],
    chunks: ['Just a moment', 'That\'s mine', 'You\'re all clear']
  },

  // ==========================================
  // BUSINESS MEETING SCENARIOS
  // ==========================================
  {
    id: 'business_meeting_001',
    title: 'Technical Presentation Opening',
    titleTurkish: 'Teknik Sunum Açılışı',
    setting: 'You are at a client\'s office in Birmingham, about to present your company\'s concrete mixer semi-trailer specifications.',
    settingTurkish: 'Birmingham\'da bir müşterinin ofisindeyseniz. Şirketinizin beton mikseri yarı römork teknik özelliklerini sunmak üzeresiniz.',
    difficulty: 'B1',
    category: 'technical-presentation',
    duration: 8,
    objectives: [
      {
        id: 'obj_1',
        description: 'Introduce yourself and your company professionally',
        descriptionTurkish: 'Kendinizi ve şirketinizi profesyonelce tanıtın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Present key specifications clearly',
        descriptionTurkish: 'Temel teknik özellikleri açıkça sunun',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Handle a technical question',
        descriptionTurkish: 'Teknik bir soruyu cevaplayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good afternoon. You must be {{USER_NAME}} from STU Trailer. Please, take a seat. We\'re looking forward to hearing about your products.',
        hints: ['Greet them', 'Thank them for the opportunity'],
        expectedResponses: [
          { text: 'Good afternoon. Yes, I\'m {{USER_NAME}} from STU Trailer. Thank you for having us today.', score: 100 },
          { text: 'Afternoon. That\'s right. Thank you for the opportunity to present.', score: 95 },
          { text: 'Hello. Yes, thank you. I\'m pleased to be here.', score: 90 }
        ],
        acceptableKeywords: ['afternoon', 'hello', 'thank', 'STU', 'pleased']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Professional greeting', 'Introduce yourself']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Excellent. So, what can you tell us about your concrete mixer range?',
        hints: ['Start with an overview', 'Mention key selling points'],
        expectedResponses: [
          { text: 'I\'d like to walk you through our concrete mixer semi-trailer range. Our flagship model is the 14.7 cubic metre unit.', score: 100 },
          { text: 'Let me start with an overview. We specialise in 12 to 15 cubic metre concrete mixers.', score: 95 },
          { text: 'We manufacture concrete mixer semi-trailers in various capacities, from 10 to 15 cubic metres.', score: 90 }
        ],
        acceptableKeywords: ['concrete', 'mixer', 'cubic', 'metre', 'range', 'capacity']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Introduce the product range', 'Mention capacity']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'That\'s interesting. What\'s the drum rotation speed, and what kind of discharge rate can we expect?',
        hints: ['Give specific technical data', 'Be confident with numbers'],
        expectedResponses: [
          { text: 'The drum rotation speed is between 0 and 14 RPM. The discharge rate is approximately 1.5 cubic metres per minute.', score: 100 },
          { text: 'We achieve 0 to 14 RPM for rotation, with a discharge rate of around 1.5 cubic metres per minute.', score: 95 },
          { text: 'The rotation is up to 14 RPM, and discharge is about 1.5 cubic metres per minute.', score: 90 }
        ],
        acceptableKeywords: ['RPM', 'rotation', 'discharge', 'cubic', 'minute', 'speed']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Provide specific numbers', 'Mention units']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Very good. And what about the hydraulic system? Is it compatible with standard European truck connections?',
        hints: ['Confirm compatibility', 'Mention the system type'],
        expectedResponses: [
          { text: 'Yes, absolutely. We use ISO-standard hydraulic connections, fully compatible with all major European truck brands.', score: 100 },
          { text: 'The hydraulic system is ISO-compliant and works with all standard European trucks.', score: 95 },
          { text: 'It\'s fully compatible. We follow European ISO standards for all connections.', score: 90 }
        ],
        acceptableKeywords: ['ISO', 'compatible', 'European', 'standard', 'hydraulic']
      },
      {
        id: 'turn_8',
        role: 'user',
        text: '',
        hints: ['Confirm compatibility', 'Mention ISO standards']
      },
      {
        id: 'turn_9',
        role: 'agent',
        text: 'Excellent. That all sounds very promising. Could you send us a detailed quotation by next Friday?',
        hints: ['Confirm you can do this', 'Be professional'],
        expectedResponses: [
          { text: 'Certainly. I\'ll prepare a detailed quotation and send it to you by Thursday.', score: 100 },
          { text: 'Of course. You\'ll have it on your desk by Friday morning.', score: 95 },
          { text: 'No problem. I\'ll have that ready for you before Friday.', score: 90 }
        ],
        acceptableKeywords: ['certainly', 'yes', 'quotation', 'Friday', 'send']
      }
    ],
    vocabulary: ['specifications', 'drum rotation', 'discharge rate', 'hydraulic system', 'quotation', 'ISO-standard'],
    chunks: ['I\'d like to walk you through...', 'Let me start with...', 'You\'ll have it by...', 'No problem']
  },

  {
    id: 'factory_visit_001',
    title: 'Factory Tour with Client',
    titleTurkish: 'Müşteri ile Fabrika Turu',
    setting: 'A British client is visiting your factory in Konya. You are showing them the production line.',
    settingTurkish: 'İngiliz bir müşteri Konya\'daki fabrikanızı ziyaret ediyor. Üretim hattını gezdiriyorsunuz.',
    difficulty: 'B1',
    category: 'factory-visit',
    duration: 7,
    objectives: [
      {
        id: 'obj_1',
        description: 'Welcome the client professionally',
        descriptionTurkish: 'Müşteriyi profesyonelce karşılayın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Explain a production process',
        descriptionTurkish: 'Bir üretim sürecini açıklayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Answer questions about quality control',
        descriptionTurkish: 'Kalite kontrol hakkındaki soruları cevaplayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good morning! Thank you for the invitation to visit your facility. I\'ve been looking forward to seeing your production process.',
        hints: ['Welcome them warmly', 'Express your pleasure'],
        expectedResponses: [
          { text: 'Good morning! Welcome to STU Trailer. We\'re delighted to have you here. Let me give you a tour of our facility.', score: 100 },
          { text: 'Morning! Great to have you. I\'m excited to show you around our factory.', score: 95 },
          { text: 'Welcome! Thank you for coming. Please, follow me and I\'ll show you our production line.', score: 90 }
        ],
        acceptableKeywords: ['welcome', 'delighted', 'tour', 'show', 'facility']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Welcome warmly', 'Offer a tour']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'This is impressive. Can you tell me about this welding station? What process do you use?',
        hints: ['Explain the welding process', 'Mention the technique'],
        expectedResponses: [
          { text: 'This is our MIG welding station. We use robotic welding for the main frame to ensure consistency and strength.', score: 100 },
          { text: 'We use MIG welding here. The robot welds the main chassis components for maximum precision.', score: 95 },
          { text: 'This station handles the frame welding. It\'s automated MIG welding for quality and speed.', score: 90 }
        ],
        acceptableKeywords: ['MIG', 'welding', 'robotic', 'frame', 'automated', 'precision']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Explain the process', 'Mention automation']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'I see. And what quality control measures do you have in place?',
        hints: ['Explain your QC system', 'Mention specific checks'],
        expectedResponses: [
          { text: 'We have a 6-gate quality system. Each trailer passes through inspection points at key stages of production.', score: 100 },
          { text: 'Our quality control includes multiple inspection gates. We check welds, dimensions, and finish at each stage.', score: 95 },
          { text: 'We inspect at six different gates during production. Nothing leaves without final approval.', score: 90 }
        ],
        acceptableKeywords: ['quality', 'inspection', 'gate', 'check', 'control', 'stages']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Describe QC process', 'Mention gate system']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'That\'s reassuring. What\'s your typical lead time from order to delivery?',
        hints: ['Give a realistic timeframe', 'Be specific'],
        expectedResponses: [
          { text: 'Our standard lead time is 8 to 10 weeks from order confirmation to delivery.', score: 100 },
          { text: 'Typically, we deliver within 8 to 10 weeks of receiving the order.', score: 95 },
          { text: 'You can expect delivery in about two months after placing the order.', score: 85 }
        ],
        acceptableKeywords: ['weeks', 'lead time', 'delivery', 'order', 'months']
      }
    ],
    vocabulary: ['production line', 'welding station', 'quality control', 'lead time', 'MIG welding', 'inspection'],
    chunks: ['Let me give you a tour...', 'We have...in place', 'Our standard...is', 'You can expect...']
  },

  // ==========================================
  // RESTAURANT / SOCIAL SCENARIOS
  // ==========================================
  {
    id: 'restaurant_001',
    title: 'Business Dinner',
    titleTurkish: 'İş Yemeği',
    setting: 'You are at a restaurant in London with a potential client. It\'s time to order food and engage in small talk.',
    settingTurkish: 'Londra\'da bir restoranda potansiyel müşteriyle yemektesiniz. Yemek siparişi ve sohbet zamanı.',
    difficulty: 'B1',
    category: 'restaurant',
    duration: 6,
    objectives: [
      {
        id: 'obj_1',
        description: 'Order food confidently',
        descriptionTurkish: 'Özgüvenli bir şekilde yemek sipariş edin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Engage in appropriate small talk',
        descriptionTurkish: 'Uygun konuşma konularıyla sohbet edin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Handle a dietary preference politely',
        descriptionTurkish: 'Yemek tercihini nazikçe belirtin',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'This is a lovely restaurant. I come here quite often. Have you decided what you\'d like to order?',
        hints: ['Comment on the restaurant', 'Mention what you\'re considering'],
        expectedResponses: [
          { text: 'It\'s very nice indeed. I\'m thinking of trying the lamb. What would you recommend?', score: 100 },
          { text: 'Yes, it\'s wonderful. I\'m leaning towards the fish. What do you usually have?', score: 95 },
          { text: 'Lovely place. I\'m still deciding. The steak looks good. Any suggestions?', score: 90 }
        ],
        acceptableKeywords: ['nice', 'lovely', 'recommend', 'thinking', 'suggest', 'looking']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Compliment the venue', 'Ask for recommendation']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'The lamb is excellent here. By the way, how was your journey from Konya? I imagine it\'s quite a long trip.',
        hints: ['Answer about your journey', 'Be conversational'],
        expectedResponses: [
          { text: 'It was quite smooth, actually. The flight from Istanbul to Heathrow took about four hours.', score: 100 },
          { text: 'Not too bad. Direct flight to Heathrow. I managed to catch up on some reading.', score: 95 },
          { text: 'The journey was fine. About four hours flying time. I\'m used to it now.', score: 90 }
        ],
        acceptableKeywords: ['flight', 'journey', 'hours', 'smooth', 'fine', 'Heathrow']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Describe your journey', 'Keep it light']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Would you like some wine with dinner? They have an excellent selection here.',
        hints: ['Politely decline or accept', 'Give a reason if declining'],
        expectedResponses: [
          { text: 'Thank you, but I don\'t drink alcohol. I\'d be happy with sparkling water, please.', score: 100 },
          { text: 'That\'s kind of you, but I\'ll stick to water. I have an early meeting tomorrow.', score: 95 },
          { text: 'I appreciate the offer, but just water for me. I prefer to keep a clear head.', score: 95 }
        ],
        acceptableKeywords: ['thank', 'water', 'appreciate', 'don\'t', 'prefer']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Decline politely if appropriate', 'Offer an alternative']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Of course, no problem at all. So tell me, how did you get into the trailer manufacturing business?',
        hints: ['Share your background briefly', 'Be engaging'],
        expectedResponses: [
          { text: 'Well, I\'ve always been interested in engineering. I joined STU Trailer in 2019 when it was founded.', score: 100 },
          { text: 'I have a background in mechanical engineering. The opportunity came up to help build something from scratch.', score: 95 },
          { text: 'It started with my engineering background. I saw an opportunity in the export market.', score: 90 }
        ],
        acceptableKeywords: ['engineering', 'founded', 'background', 'opportunity', 'started']
      }
    ],
    vocabulary: ['sparkling water', 'selection', 'recommendation', 'journey', 'leaning towards'],
    chunks: ['I\'m thinking of...', 'What would you recommend?', 'I don\'t drink...', 'I\'d be happy with...']
  },

  {
    id: 'small_talk_001',
    title: 'Coffee Break Conversation',
    titleTurkish: 'Kahve Molası Sohbeti',
    setting: 'During a break in negotiations, you\'re having coffee with a British colleague. Time for some casual conversation.',
    settingTurkish: 'Görüşmeler arasındaki molada İngiliz bir meslektaşınızla kahve içiyorsunuz. Günlük sohbet zamanı.',
    difficulty: 'B1',
    category: 'small-talk',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Discuss weather appropriately (classic British topic)',
        descriptionTurkish: 'Hava durumu hakkında uygun şekilde konuşun (klasik İngiliz konusu)',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Talk about weekend plans',
        descriptionTurkish: 'Hafta sonu planları hakkında konuşun',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Show interest in British culture',
        descriptionTurkish: 'İngiliz kültürüne ilgi gösterin',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Bit grey today, isn\'t it? Typical British weather, I\'m afraid. Is it very different in Turkey?',
        hints: ['Agree about the weather', 'Compare with Turkey'],
        expectedResponses: [
          { text: 'Yes, it is rather grey. Konya tends to be much sunnier at this time of year, actually.', score: 100 },
          { text: 'It is, yes. We get a lot more sunshine in Turkey, especially in central Anatolia.', score: 95 },
          { text: 'Quite different from home. Konya has a continental climate - colder winters but more sun.', score: 90 }
        ],
        acceptableKeywords: ['grey', 'sunny', 'different', 'Turkey', 'Konya', 'sunshine']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Acknowledge the weather', 'Compare with home']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'I\'ve always wanted to visit Turkey. Any plans for the weekend while you\'re here?',
        hints: ['Mention something you might do', 'Keep it casual'],
        expectedResponses: [
          { text: 'I\'m thinking of visiting the British Museum. I\'ve heard it\'s quite impressive.', score: 100 },
          { text: 'I might explore the city a bit. Any recommendations for things to see?', score: 95 },
          { text: 'Not much planned. Perhaps I\'ll take a walk around central London. Any suggestions?', score: 90 }
        ],
        acceptableKeywords: ['thinking', 'visit', 'explore', 'museum', 'recommendations', 'walk']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Mention weekend plans', 'Ask for suggestions']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Oh, the British Museum is brilliant. Free entry too! Do you follow football at all?',
        hints: ['Show interest', 'Be honest about your knowledge'],
        expectedResponses: [
          { text: 'I follow it a bit. I know the Premier League is very popular. Do you support a team?', score: 100 },
          { text: 'A little, yes. I\'ve watched some matches. Which team do you follow?', score: 95 },
          { text: 'Not closely, but I know it\'s huge here. Who\'s your team?', score: 90 }
        ],
        acceptableKeywords: ['follow', 'team', 'Premier League', 'watch', 'support']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Show interest', 'Ask about their team']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'I\'m a Manchester United fan, for my sins! Anyway, shall we head back? I think they\'re ready to continue.',
        hints: ['Wrap up the conversation', 'Agree to return'],
        expectedResponses: [
          { text: 'Ah, Manchester United - a big club! Yes, let\'s go. It was nice chatting.', score: 100 },
          { text: 'Good choice! Yes, we should head back. Thanks for the coffee break.', score: 95 },
          { text: 'Right, let\'s continue. Good to chat with you.', score: 90 }
        ],
        acceptableKeywords: ['yes', 'let\'s', 'nice', 'chatting', 'good', 'head back']
      }
    ],
    vocabulary: ['grey', 'typical', 'continental climate', 'free entry', 'brilliant', 'head back'],
    chunks: ['Bit...today, isn\'t it?', 'I\'m thinking of...', 'Do you follow...?', 'Shall we...?']
  },

  // ==========================================
  // PHONE CALL SCENARIOS
  // ==========================================
  {
    id: 'phone_call_001',
    title: 'Scheduling a Meeting',
    titleTurkish: 'Toplantı Planlama',
    setting: 'You are calling a UK client to schedule a technical meeting for next month.',
    settingTurkish: 'Gelecek ay için teknik bir toplantı planlamak üzere İngiltere\'deki bir müşteriyi arıyorsunuz.',
    difficulty: 'B1',
    category: 'phone-call',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Introduce yourself clearly on the phone',
        descriptionTurkish: 'Telefonda kendinizi açıkça tanıtın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Propose meeting dates',
        descriptionTurkish: 'Toplantı tarihleri önerin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Confirm the arrangement',
        descriptionTurkish: 'Düzenlemeyi onaylayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Hello, Thompson Engineering, Sarah speaking. How can I help you?',
        hints: ['Introduce yourself', 'State your purpose'],
        expectedResponses: [
          { text: 'Good afternoon, Sarah. This is {{USER_NAME}} from STU Trailer calling in Turkey. I\'m calling to arrange a meeting with Mr Thompson.', score: 100 },
          { text: 'Hello Sarah. I\'m from STU Trailer. I\'d like to schedule a meeting with your team.', score: 95 },
          { text: 'Hi, I\'m from STU Trailer. I was hoping to set up a meeting to discuss our products.', score: 90 }
        ],
        acceptableKeywords: ['STU', 'meeting', 'arrange', 'schedule']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Introduce yourself', 'State reason for calling']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Of course. Let me check his diary. When would suit you best?',
        hints: ['Suggest specific dates', 'Be flexible'],
        expectedResponses: [
          { text: 'I\'ll be in the UK the week of the 15th. Would Monday or Tuesday work for you?', score: 100 },
          { text: 'I was thinking sometime during the third week of February. Is that possible?', score: 95 },
          { text: 'Any day between the 15th and 20th would work for me. What\'s available?', score: 90 }
        ],
        acceptableKeywords: ['week', 'Monday', 'Tuesday', 'February', 'available', 'possible']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Propose dates', 'Show flexibility']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Tuesday the 17th looks good. Would 10 o\'clock work? We\'ll need about two hours, I imagine.',
        hints: ['Confirm or suggest alternative', 'Agree on duration'],
        expectedResponses: [
          { text: 'Tuesday at 10 works perfectly. Yes, two hours should be sufficient for the presentation.', score: 100 },
          { text: 'That sounds ideal. 10 o\'clock is fine. Two hours will give us plenty of time.', score: 95 },
          { text: 'Perfect. I\'ll be there at 10. Two hours sounds about right.', score: 90 }
        ],
        acceptableKeywords: ['Tuesday', 'works', 'perfect', 'hours', 'time', '10']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Confirm the time', 'Agree on duration']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Excellent. I\'ll send you a calendar invite and directions to our office. Is there anything you\'ll need for the presentation?',
        hints: ['Mention any requirements', 'Thank them'],
        expectedResponses: [
          { text: 'Just a screen to connect my laptop would be great. Thank you for arranging this, Sarah.', score: 100 },
          { text: 'A projector or screen would be helpful. I appreciate your help with this.', score: 95 },
          { text: 'If you have a display I can connect to, that\'s all I need. Thanks very much.', score: 90 }
        ],
        acceptableKeywords: ['screen', 'projector', 'laptop', 'thank', 'appreciate']
      }
    ],
    vocabulary: ['diary', 'calendar invite', 'arrange', 'sufficient', 'directions'],
    chunks: ['This is...calling from...', 'Would...work for you?', 'That sounds ideal', 'I appreciate your help']
  },

  // ==========================================
  // HOTEL SCENARIOS
  // ==========================================
  {
    id: 'hotel_checkin_001',
    title: 'Hotel Check-in',
    titleTurkish: 'Otel Check-in',
    setting: 'You\'ve just arrived at your hotel in Manchester after a long journey. Time to check in.',
    settingTurkish: 'Uzun bir yolculuğun ardından Manchester\'daki otelinize ulaştınız. Check-in zamanı.',
    difficulty: 'B1',
    category: 'hotel',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Check in smoothly',
        descriptionTurkish: 'Sorunsuz check-in yapın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Request room preferences',
        descriptionTurkish: 'Oda tercihlerinizi belirtin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Ask about facilities',
        descriptionTurkish: 'Otel olanakları hakkında sorun',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good evening, sir. Welcome to the Grand Hotel Manchester. Do you have a reservation?',
        hints: ['Confirm your reservation', 'Provide your name'],
        expectedResponses: [
          { text: 'Good evening. Yes, I have a booking under my name for three nights.', score: 100 },
          { text: 'Evening. Yes, the reservation should be under my name. I\'m staying until Thursday.', score: 95 },
          { text: 'Hello. Yes, I booked online. The name is {{USER_NAME}}.', score: 90 }
        ],
        acceptableKeywords: ['yes', 'booking', 'reservation', '{{USER_NAME}}', 'nights']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Confirm booking', 'Give your name']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Yes, here it is. A standard room for three nights. Would you prefer a higher floor or a quieter room at the back?',
        hints: ['State your preference', 'Be polite'],
        expectedResponses: [
          { text: 'A quieter room would be lovely, please. I have early meetings and need good rest.', score: 100 },
          { text: 'I\'d prefer a quiet room if possible. I\'m here for business.', score: 95 },
          { text: 'Quiet room, please. The back of the hotel sounds perfect.', score: 90 }
        ],
        acceptableKeywords: ['quiet', 'prefer', 'please', 'back', 'room']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Express preference', 'Explain why if appropriate']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'No problem. I\'ve put you in room 412 on the fourth floor, nice and quiet. Breakfast is served from 6:30 to 10. Is there anything else you need to know?',
        hints: ['Ask about facilities', 'Thank them'],
        expectedResponses: [
          { text: 'Thank you. Could you tell me if there\'s a gym in the hotel?', score: 100 },
          { text: 'That\'s great. Is there Wi-Fi in the room, and what\'s the password?', score: 95 },
          { text: 'Perfect. What time does the restaurant close in the evening?', score: 90 }
        ],
        acceptableKeywords: ['thank', 'gym', 'Wi-Fi', 'restaurant', 'facilities']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Ask about facilities', 'Thank the receptionist']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Yes, the gym is on the ground floor, open 24 hours. The Wi-Fi password is on a card in your room. Enjoy your stay!',
        hints: ['Thank them', 'Take your key'],
        expectedResponses: [
          { text: 'Wonderful. Thank you very much for your help.', score: 100 },
          { text: 'That\'s great, thank you. I appreciate it.', score: 95 },
          { text: 'Perfect. Thanks a lot. Have a good evening.', score: 95 }
        ],
        acceptableKeywords: ['thank', 'wonderful', 'appreciate', 'great']
      }
    ],
    vocabulary: ['reservation', 'higher floor', 'facilities', 'ground floor', 'enjoy your stay'],
    chunks: ['I have a booking under...', 'I\'d prefer...', 'Could you tell me...', 'Thank you for your help']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 1
  // ==========================================
  {
    id: 'airport_delay_001',
    title: 'Flight Delay Enquiry',
    titleTurkish: 'Uçuş Gecikmesi Sorgusu',
    setting: 'Your flight to Birmingham has been delayed. You approach the airline desk to get more information.',
    settingTurkish: 'Birmingham uçuşunuz gecikti. Daha fazla bilgi almak için havayolu masasına gidiyorsunuz.',
    difficulty: 'B1',
    category: 'airport',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Politely enquire about the delay',
        descriptionTurkish: 'Gecikme hakkında nazikçe bilgi alın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Ask about alternative options',
        descriptionTurkish: 'Alternatif seçenekleri sorun',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Request compensation or assistance',
        descriptionTurkish: 'Tazminat veya yardım talep edin',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good afternoon. How can I help you today?',
        hints: ['Explain your situation', 'Mention the delayed flight'],
        expectedResponses: [
          { text: 'Good afternoon. I\'m on flight BA234 to Birmingham and I\'ve noticed it\'s been delayed. Could you tell me what\'s happening?', score: 100 },
          { text: 'Hello. My flight to Birmingham seems to be delayed. Can you give me more information?', score: 95 },
          { text: 'Hi. I\'m waiting for the Birmingham flight and it says delayed. What\'s going on?', score: 85 }
        ],
        acceptableKeywords: ['flight', 'delayed', 'Birmingham', 'information', 'happening']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['State your flight', 'Ask about the delay']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'I\'m sorry about that. There\'s been a technical issue with the aircraft. We\'re expecting a delay of approximately two hours.',
        hints: ['Express understanding', 'Ask about alternatives'],
        expectedResponses: [
          { text: 'I see. That\'s quite a long wait. Are there any alternative flights I could take?', score: 100 },
          { text: 'Two hours is quite long. Is there an earlier flight I could be transferred to?', score: 95 },
          { text: 'I understand. Could you check if there are other options available?', score: 90 }
        ],
        acceptableKeywords: ['alternative', 'earlier', 'flight', 'options', 'transfer']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Ask about alternatives', 'Be polite but firm']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Unfortunately, this is the only direct flight today. However, we can offer you a meal voucher for the wait. Would that help?',
        hints: ['Accept or ask for more', 'Thank them'],
        expectedResponses: [
          { text: 'Yes, that would be helpful, thank you. Where can I use the voucher?', score: 100 },
          { text: 'I\'d appreciate that. Is the lounge available as well for business class passengers?', score: 95 },
          { text: 'Thank you, that\'s kind. A meal voucher would be great.', score: 90 }
        ],
        acceptableKeywords: ['thank', 'helpful', 'appreciate', 'voucher', 'lounge']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Accept the offer', 'Ask where to use it']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'You can use it at any restaurant in Terminal 3. We\'ll announce boarding as soon as the aircraft is ready. Apologies again for the inconvenience.',
        hints: ['Thank them', 'Confirm you understand'],
        expectedResponses: [
          { text: 'Thank you for your help. I\'ll head to the restaurant then. Could you confirm the new boarding time?', score: 100 },
          { text: 'I appreciate it. So boarding will be around 4 o\'clock then?', score: 95 },
          { text: 'Thanks. I\'ll listen for the announcement.', score: 85 }
        ],
        acceptableKeywords: ['thank', 'appreciate', 'boarding', 'time', 'announcement']
      }
    ],
    vocabulary: ['technical issue', 'meal voucher', 'inconvenience', 'transferred', 'boarding time'],
    chunks: ['Could you tell me...', 'I\'d appreciate that', 'Apologies for the inconvenience', 'Is there an alternative...']
  },

  {
    id: 'hotel_complaint_001',
    title: 'Room Issue Complaint',
    titleTurkish: 'Oda Sorunu Şikayeti',
    setting: 'You\'ve checked into your hotel room but discovered the air conditioning isn\'t working properly. You call reception.',
    settingTurkish: 'Otel odanıza yerleştiniz ama klimanın düzgün çalışmadığını fark ettiniz. Resepsiyonu arıyorsunuz.',
    difficulty: 'B1',
    category: 'hotel',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Explain the problem clearly',
        descriptionTurkish: 'Sorunu açıkça anlatın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Request a solution politely',
        descriptionTurkish: 'Nazikçe bir çözüm isteyin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Confirm the resolution',
        descriptionTurkish: 'Çözümü onaylayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Reception, how may I assist you?',
        hints: ['State your room number', 'Explain the problem'],
        expectedResponses: [
          { text: 'Hello, this is room 412. I\'m afraid the air conditioning doesn\'t seem to be working properly.', score: 100 },
          { text: 'Hi, I\'m in room 412. There\'s an issue with the air conditioning - it\'s not cooling the room.', score: 95 },
          { text: 'Good evening. Room 412 here. The AC isn\'t working.', score: 85 }
        ],
        acceptableKeywords: ['room', '412', 'air conditioning', 'working', 'problem', 'issue']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Give room number', 'Describe the issue']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'I\'m terribly sorry to hear that, sir. Could you describe what\'s happening? Is it not turning on at all, or is it making a noise?',
        hints: ['Describe the specific problem', 'Be clear'],
        expectedResponses: [
          { text: 'It turns on, but it\'s only blowing warm air. The room is quite stuffy.', score: 100 },
          { text: 'It switches on but doesn\'t cool. The temperature hasn\'t changed at all.', score: 95 },
          { text: 'It\'s running but there\'s no cold air coming out.', score: 90 }
        ],
        acceptableKeywords: ['warm', 'air', 'cool', 'running', 'temperature', 'stuffy']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Describe what the AC is doing', 'Mention the temperature']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'I understand. I can send our maintenance team up right away, or I can offer you a different room on the same floor. Which would you prefer?',
        hints: ['Choose an option', 'Express your preference'],
        expectedResponses: [
          { text: 'I\'d prefer a different room if one is available. I\'ve already unpacked, but I\'d rather have working air conditioning.', score: 100 },
          { text: 'A room change would be better, I think. Could it be a quiet room as well?', score: 95 },
          { text: 'Let me have a different room, please. I need to get some rest tonight.', score: 90 }
        ],
        acceptableKeywords: ['prefer', 'different', 'room', 'change', 'available']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['State your preference', 'Explain why if needed']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Of course. I have room 418 available, which is an identical room with a city view. I\'ll send someone up to help you move. Again, my sincere apologies.',
        hints: ['Thank them', 'Confirm the new room'],
        expectedResponses: [
          { text: 'Thank you, I appreciate you sorting this out so quickly. Room 418 sounds fine.', score: 100 },
          { text: 'That\'s very helpful, thank you. I\'ll get my things ready.', score: 95 },
          { text: 'Thanks for your help. 418 it is then.', score: 90 }
        ],
        acceptableKeywords: ['thank', 'appreciate', '418', 'helpful', 'ready']
      }
    ],
    vocabulary: ['maintenance team', 'stuffy', 'sincere apologies', 'city view', 'identical room'],
    chunks: ['I\'m afraid...', 'Could you describe...', 'I\'d prefer...', 'I appreciate you sorting this out']
  },

  {
    id: 'business_meeting_negotiation_001',
    title: 'Price Negotiation',
    titleTurkish: 'Fiyat Pazarlığı',
    setting: 'You are in a meeting with a UK distributor discussing pricing for your trailer products.',
    settingTurkish: 'İngiltere\'deki bir distribütörle römork ürünlerinizin fiyatlandırmasını görüşüyorsunuz.',
    difficulty: 'B2',
    category: 'business-meeting',
    duration: 7,
    objectives: [
      {
        id: 'obj_1',
        description: 'Present your pricing structure',
        descriptionTurkish: 'Fiyat yapınızı sunun',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Handle a discount request professionally',
        descriptionTurkish: 'İndirim talebini profesyonelce karşılayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Reach a mutually beneficial agreement',
        descriptionTurkish: 'Karşılıklı faydalı bir anlaşmaya varın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'So, let\'s talk numbers. What kind of pricing are we looking at for a bulk order of curtainsiders?',
        hints: ['State your base price', 'Mention volume considerations'],
        expectedResponses: [
          { text: 'For our standard 13.6 metre curtainsider, the base price is €28,000. For orders over 10 units, we can discuss volume discounts.', score: 100 },
          { text: 'Our curtainsiders start at €28,000 per unit. Larger orders would qualify for better pricing.', score: 95 },
          { text: 'The unit price is €28,000, but we offer discounts for bulk purchases.', score: 90 }
        ],
        acceptableKeywords: ['price', '28,000', 'unit', 'discount', 'volume', 'orders']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['State the price clearly', 'Mention bulk discount possibility']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'That\'s a bit higher than we were hoping. Our current supplier offers similar specs at €26,000. Can you match that?',
        hints: ['Respond professionally', 'Highlight your value proposition'],
        expectedResponses: [
          { text: 'I understand price is important. However, our trailers come with a 5-year chassis warranty and full ADR certification, which adds significant value.', score: 100 },
          { text: 'I appreciate the comparison. Our pricing reflects the quality - we use Hardox steel and offer comprehensive after-sales support.', score: 95 },
          { text: 'We may not be the cheapest, but our build quality and warranty package make it excellent value.', score: 90 }
        ],
        acceptableKeywords: ['warranty', 'quality', 'value', 'certification', 'support', 'understand']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Justify your price', 'Mention unique selling points']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'The warranty is appealing. If we commit to 20 units this year, what\'s the best you can do?',
        hints: ['Calculate a fair discount', 'Show willingness to negotiate'],
        expectedResponses: [
          { text: 'For a commitment of 20 units, I can offer €27,000 per unit, which is a 3.5% discount. That\'s our best rate for this volume.', score: 100 },
          { text: 'With 20 units, we could bring it down to €27,000. That includes free delivery to your depot.', score: 95 },
          { text: 'I\'d need to check with my management, but I believe we could do €27,000 for that quantity.', score: 90 }
        ],
        acceptableKeywords: ['27,000', 'discount', 'units', 'offer', 'delivery', 'rate']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Offer a reasonable discount', 'Be specific with numbers']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'That sounds reasonable. And what about payment terms? We typically work on 60-day terms.',
        hints: ['Discuss payment terms', 'Be flexible but protect your interests'],
        expectedResponses: [
          { text: 'We can accommodate 60-day terms for established customers. For the first order, we\'d ask for 30% upfront and the balance on delivery.', score: 100 },
          { text: 'Our standard is 30 days, but we could do 45 days for a partnership of this size. The first order would need a deposit.', score: 95 },
          { text: 'I\'m sure we can work something out. Let me propose 30% deposit and 60 days for the remainder.', score: 90 }
        ],
        acceptableKeywords: ['terms', 'days', 'deposit', 'upfront', 'delivery', 'balance']
      },
      {
        id: 'turn_8',
        role: 'user',
        text: '',
        hints: ['Discuss payment terms', 'Suggest a compromise']
      },
      {
        id: 'turn_9',
        role: 'agent',
        text: 'That works for us. Shall we put together a formal proposal then?',
        hints: ['Confirm next steps', 'Show enthusiasm'],
        expectedResponses: [
          { text: 'Absolutely. I\'ll have a detailed proposal on your desk by Friday. Thank you for a productive discussion.', score: 100 },
          { text: 'Yes, let\'s do that. I\'ll prepare everything and send it over early next week.', score: 95 },
          { text: 'Sounds good. I\'ll draft the proposal and we can review it together.', score: 90 }
        ],
        acceptableKeywords: ['proposal', 'Friday', 'send', 'productive', 'prepare', 'draft']
      }
    ],
    vocabulary: ['curtainsider', 'bulk order', 'volume discount', 'payment terms', 'upfront', 'ADR certification'],
    chunks: ['What kind of pricing are we looking at...', 'The best I can do is...', 'That works for us', 'Shall we put together...']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 2
  // ==========================================
  {
    id: 'restaurant_ordering_001',
    title: 'Ordering at a Pub',
    titleTurkish: 'Pub\'da Sipariş Verme',
    setting: 'You\'re at a traditional British pub in Birmingham with colleagues after a factory visit. Time to order food and drinks.',
    settingTurkish: 'Fabrika ziyaretinden sonra meslektaşlarınızla Birmingham\'da geleneksel bir İngiliz pub\'ındasınız. Yemek ve içecek sipariş zamanı.',
    difficulty: 'B1',
    category: 'restaurant',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Order food and drinks confidently',
        descriptionTurkish: 'Özgüvenle yemek ve içecek sipariş edin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Ask about menu items',
        descriptionTurkish: 'Menü hakkında soru sorun',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Handle the bill appropriately',
        descriptionTurkish: 'Hesabı uygun şekilde halledin',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good evening! Welcome to The Crown. Are you ready to order, or would you like a few more minutes?',
        hints: ['Ask about recommendations', 'Show interest in local food'],
        expectedResponses: [
          { text: 'Good evening. We\'re nearly ready. Could you tell us what the pie of the day is?', score: 100 },
          { text: 'Evening. Yes, almost ready. What would you recommend from the menu?', score: 95 },
          { text: 'Hello. Could we have a few more minutes, please? We\'re still deciding.', score: 85 }
        ],
        acceptableKeywords: ['evening', 'ready', 'recommend', 'pie', 'menu', 'minutes']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Greet them', 'Ask about specials']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Today\'s pie is steak and ale - it\'s very popular. Comes with mash and gravy. Can I get you some drinks while you decide?',
        hints: ['Order drinks', 'Comment on the food'],
        expectedResponses: [
          { text: 'That sounds lovely. I\'ll have a sparkling water, please. And the pie sounds good - I\'ll go with that.', score: 100 },
          { text: 'The pie sounds great. Could I have a lemonade, please? And I\'ll try the pie.', score: 95 },
          { text: 'I\'ll have water please. And yes, I\'d like to try the steak and ale pie.', score: 90 }
        ],
        acceptableKeywords: ['water', 'lemonade', 'pie', 'sounds', 'please', 'try']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Order a drink', 'Decide on food']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Excellent choice. And for your colleagues?',
        hints: ['Help your colleagues order', 'Translate if needed'],
        expectedResponses: [
          { text: 'My colleague would like the fish and chips, and he\'ll have a cola. Is the fish battered or breaded?', score: 100 },
          { text: 'He\'ll have the burger, please. Medium well. And a sparkling water.', score: 95 },
          { text: 'Two fish and chips for them, please. And two lemonades.', score: 90 }
        ],
        acceptableKeywords: ['colleague', 'fish', 'chips', 'burger', 'cola', 'water']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Order for colleagues', 'Ask any questions']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'It\'s beer-battered. Lovely and crispy. So that\'s one pie, one fish and chips. I\'ll bring your drinks right away.',
        hints: ['Confirm the order', 'Thank them'],
        expectedResponses: [
          { text: 'Perfect, thank you. Oh, and could we have some extra napkins, please?', score: 100 },
          { text: 'Great, thank you. How long will the food be?', score: 95 },
          { text: 'Lovely, thanks very much.', score: 90 }
        ],
        acceptableKeywords: ['thank', 'perfect', 'napkins', 'long', 'great']
      }
    ],
    vocabulary: ['pie of the day', 'steak and ale', 'mash', 'gravy', 'beer-battered', 'crispy'],
    chunks: ['Could you tell us...', 'That sounds lovely', 'I\'ll go with that', 'My colleague would like...']
  },

  {
    id: 'phone_complaint_001',
    title: 'Following Up on a Delivery Issue',
    titleTurkish: 'Teslimat Sorunu Takibi',
    setting: 'You need to call a UK supplier about a delayed shipment of parts for your production line.',
    settingTurkish: 'Üretim hattınız için geciken parça sevkiyatı hakkında İngiltere\'deki tedarikçiyi aramanız gerekiyor.',
    difficulty: 'B1',
    category: 'phone-call',
    duration: 6,
    objectives: [
      {
        id: 'obj_1',
        description: 'Explain the issue clearly',
        descriptionTurkish: 'Sorunu açıkça anlatın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Request urgent action',
        descriptionTurkish: 'Acil işlem talep edin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Confirm the solution and next steps',
        descriptionTurkish: 'Çözümü ve sonraki adımları onaylayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good morning, Harrison Parts, Claire speaking. How can I help?',
        hints: ['Introduce yourself', 'Reference your order'],
        expectedResponses: [
          { text: 'Good morning, Claire. This is {{USER_NAME}} from STU Trailer in Turkey. I\'m calling about order number HP-4521. It was due last week but hasn\'t arrived.', score: 100 },
          { text: 'Morning. {{USER_NAME}} here from STU Trailer. I need to check on a delayed order - reference HP-4521.', score: 95 },
          { text: 'Hello Claire. I\'m calling from STU Trailer about a late delivery. Order HP-4521.', score: 90 }
        ],
        acceptableKeywords: ['{{USER_NAME}}', 'STU', 'order', 'HP-4521', 'delayed', 'arrived']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['State your name and company', 'Give the order reference']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Let me pull that up... Yes, I can see it here. It looks like there was a delay at our warehouse. I\'m sorry about that. It\'s scheduled to ship today.',
        hints: ['Express urgency', 'Explain the impact'],
        expectedResponses: [
          { text: 'I appreciate you checking. The problem is, we need those axle components urgently. Our production line is waiting on them.', score: 100 },
          { text: 'Thank you. However, this delay is causing problems for us. We\'ve had to pause production.', score: 95 },
          { text: 'I see. This is quite urgent for us - we can\'t continue without those parts.', score: 90 }
        ],
        acceptableKeywords: ['urgent', 'production', 'need', 'waiting', 'problem', 'parts']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Explain why it\'s urgent', 'Mention production impact']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'I completely understand. Would express shipping help? We could upgrade to next-day delivery at no extra cost to make up for the delay.',
        hints: ['Accept the offer', 'Confirm the timeline'],
        expectedResponses: [
          { text: 'That would be very helpful, thank you. So we should receive it by Thursday then?', score: 100 },
          { text: 'Yes please, that would help a lot. Can you confirm when exactly it will arrive?', score: 95 },
          { text: 'I\'d appreciate that. When can we expect delivery?', score: 90 }
        ],
        acceptableKeywords: ['helpful', 'thank', 'Thursday', 'confirm', 'arrive', 'expect']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Accept the solution', 'Confirm the delivery date']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Yes, it should arrive Thursday morning your time. I\'ll email you the tracking number within the hour. Is there anything else I can help with?',
        hints: ['Thank them', 'Confirm your email'],
        expectedResponses: [
          { text: 'That\'s great, thank you for sorting this out. My email is contact@stutrailer.com. I\'ll look out for the tracking details.', score: 100 },
          { text: 'Perfect. Please send it to contact@stutrailer.com. Thanks for your help, Claire.', score: 95 },
          { text: 'No, that\'s everything. Thank you for resolving this quickly.', score: 90 }
        ],
        acceptableKeywords: ['thank', 'email', 'tracking', 'perfect', 'help']
      }
    ],
    vocabulary: ['shipment', 'warehouse', 'express shipping', 'tracking number', 'next-day delivery'],
    chunks: ['I\'m calling about...', 'Our production line is waiting...', 'That would be very helpful', 'I\'ll look out for...']
  },

  {
    id: 'factory_quality_001',
    title: 'Quality Discussion During Factory Visit',
    titleTurkish: 'Fabrika Ziyaretinde Kalite Görüşmesi',
    setting: 'A quality manager from a UK client is visiting your factory and asking detailed questions about your quality processes.',
    settingTurkish: 'İngiliz bir müşterinin kalite müdürü fabrikanızı ziyaret ediyor ve kalite süreçleriniz hakkında detaylı sorular soruyor.',
    difficulty: 'B2',
    category: 'factory-visit',
    duration: 7,
    objectives: [
      {
        id: 'obj_1',
        description: 'Explain your quality management system',
        descriptionTurkish: 'Kalite yönetim sisteminizi açıklayın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Discuss certifications and standards',
        descriptionTurkish: 'Sertifikalar ve standartları tartışın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Address concerns professionally',
        descriptionTurkish: 'Endişeleri profesyonelce karşılayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'This is impressive. Can you walk me through your quality management system? What certifications do you hold?',
        hints: ['List your certifications', 'Explain your QMS'],
        expectedResponses: [
          { text: 'Certainly. We\'re ISO 9001:2015 certified, and we also hold ISO 3834 for welding quality. Our QMS covers everything from incoming materials to final inspection.', score: 100 },
          { text: 'Of course. We maintain ISO 9001 certification and are audited annually. We also have specific welding certifications.', score: 95 },
          { text: 'We\'re ISO 9001 certified. Our quality system includes documented procedures for every production stage.', score: 90 }
        ],
        acceptableKeywords: ['ISO', '9001', 'certified', 'QMS', 'welding', 'inspection']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Mention certifications', 'Describe your system']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Good to hear. How do you handle non-conformances? What happens if a defect is found during production?',
        hints: ['Explain your NCR process', 'Give specific steps'],
        expectedResponses: [
          { text: 'We have a formal NCR process. Any defect is documented, quarantined immediately, and analysed for root cause. We use the 8D methodology for problem-solving.', score: 100 },
          { text: 'When we find a defect, it\'s tagged and removed from the line. We investigate the root cause and implement corrective actions.', score: 95 },
          { text: 'Defects are recorded in our system and the part is isolated. We then analyse what went wrong and how to prevent it.', score: 90 }
        ],
        acceptableKeywords: ['NCR', 'defect', 'root cause', 'quarantine', 'corrective', '8D']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Describe NCR process', 'Mention root cause analysis']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'I noticed you use both robotic and manual welding. How do you ensure consistent weld quality across both methods?',
        hints: ['Explain weld inspection', 'Mention qualifications'],
        expectedResponses: [
          { text: 'All our welders are certified to EN ISO 9606. For critical welds, we use ultrasonic testing. The robotic cells are programmed with validated parameters and checked daily.', score: 100 },
          { text: 'Our manual welders hold European certifications. We inspect welds visually and with NDT methods. Robots are calibrated regularly.', score: 95 },
          { text: 'Every welder is qualified and tested. We do regular inspections including some non-destructive testing on structural welds.', score: 90 }
        ],
        acceptableKeywords: ['certified', 'welders', 'ultrasonic', 'NDT', 'inspection', 'calibrated']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Mention welder certifications', 'Explain inspection methods']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Very thorough. One last question - what\'s your defect rate, and how has it trended over the past year?',
        hints: ['Give honest figures', 'Show improvement'],
        expectedResponses: [
          { text: 'Our current defect rate is below 0.5%. We\'ve reduced it by 30% over the past year through continuous improvement initiatives.', score: 100 },
          { text: 'We\'re currently at 0.4% defect rate, down from 0.6% last year. We run monthly quality reviews to identify improvement areas.', score: 95 },
          { text: 'The rate is around half a percent. It\'s been improving steadily as we\'ve invested in training and equipment.', score: 90 }
        ],
        acceptableKeywords: ['defect rate', 'percent', 'reduced', 'improvement', 'training']
      }
    ],
    vocabulary: ['non-conformance', 'NCR', '8D methodology', 'ultrasonic testing', 'NDT', 'root cause analysis', 'defect rate'],
    chunks: ['Can you walk me through...', 'We have a formal process for...', 'All our welders are certified to...', 'We\'ve reduced it by...']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 3
  // ==========================================
  {
    id: 'small_talk_networking_001',
    title: 'Networking at a Trade Fair',
    titleTurkish: 'Ticaret Fuarında Networking',
    setting: 'You\'re at the Commercial Vehicle Show in Birmingham and strike up a conversation with another exhibitor during a coffee break.',
    settingTurkish: 'Birmingham\'daki Ticari Araç Fuarı\'ndasınız ve kahve molasında başka bir katılımcıyla sohbet başlatıyorsunuz.',
    difficulty: 'B1',
    category: 'small-talk',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Introduce yourself and your company naturally',
        descriptionTurkish: 'Kendinizi ve şirketinizi doğal bir şekilde tanıtın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Show interest in the other person\'s business',
        descriptionTurkish: 'Karşınızdakinin işiyle ilgilenin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Exchange contact information',
        descriptionTurkish: 'İletişim bilgisi değişimi yapın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Quite a busy show this year, isn\'t it? I don\'t think we\'ve met. I\'m James, from Axle Solutions.',
        hints: ['Introduce yourself', 'Mention your company'],
        expectedResponses: [
          { text: 'Yes, it\'s been hectic! I\'m {{USER_NAME}} from STU Trailer. We\'re a Turkish manufacturer - this is our first time exhibiting here.', score: 100 },
          { text: 'Indeed it is. Nice to meet you, James. I\'m {{USER_NAME}}. We make trailers in Turkey - STU Trailer.', score: 95 },
          { text: 'Very busy, yes. From STU Trailer in Turkey. Pleased to meet you.', score: 85 }
        ],
        acceptableKeywords: ['{{USER_NAME}}', 'STU', 'trailer', 'Turkey', 'manufacturer', 'meet']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Introduce yourself', 'Mention where you\'re from']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Turkey! Interesting. The Turkish trailer industry has grown enormously. What type of trailers do you specialise in?',
        hints: ['Describe your products', 'Show enthusiasm'],
        expectedResponses: [
          { text: 'We focus on curtainsiders and concrete mixers mainly. We\'ve seen good growth in the European market recently.', score: 100 },
          { text: 'Primarily curtainsiders, but we also do flatbeds and tippers. How about Axle Solutions - what\'s your speciality?', score: 95 },
          { text: 'Semi-trailers - curtainsiders and specialized vehicles. We export to about 15 countries now.', score: 90 }
        ],
        acceptableKeywords: ['curtainsiders', 'trailers', 'mixers', 'market', 'specialise', 'export']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Describe your products', 'Ask about their business']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'We supply axles and suspension systems to trailer manufacturers. Actually, we might be able to work together. Do you source your axles locally or import them?',
        hints: ['Answer honestly', 'Show interest in potential partnership'],
        expectedResponses: [
          { text: 'We currently use a German supplier, but we\'re always open to alternatives. What brands do you carry?', score: 100 },
          { text: 'We import from Europe at the moment. I\'d be interested to hear more about what you offer.', score: 95 },
          { text: 'A mix of both, actually. If you have competitive pricing, we\'d definitely consider it.', score: 90 }
        ],
        acceptableKeywords: ['supplier', 'import', 'interested', 'alternatives', 'offer', 'pricing']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Answer the question', 'Show openness to discussion']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'We distribute BPW and SAF-Holland. Look, I\'d love to chat more, but I need to get back to the stand. Could I give you my card?',
        hints: ['Accept and exchange cards', 'Suggest follow-up'],
        expectedResponses: [
          { text: 'Of course. Here\'s mine as well. Perhaps we could arrange a call next week to discuss further?', score: 100 },
          { text: 'Please do. Let me give you my card too. I\'ll drop you an email after the show.', score: 95 },
          { text: 'Yes, thank you. Here\'s my card. It was good meeting you, James.', score: 90 }
        ],
        acceptableKeywords: ['card', 'call', 'email', 'discuss', 'meeting', 'arrange']
      }
    ],
    vocabulary: ['trade fair', 'exhibitor', 'networking', 'business card', 'distributor', 'partnership'],
    chunks: ['I don\'t think we\'ve met', 'This is our first time...', 'I\'d be interested to hear more', 'Could I give you my card?']
  },

  {
    id: 'technical_presentation_specs_001',
    title: 'Presenting Technical Specifications',
    titleTurkish: 'Teknik Özellikleri Sunma',
    setting: 'You are presenting the technical specifications of your tipper semi-trailer to a fleet manager in the UK.',
    settingTurkish: 'İngiltere\'deki bir filo yöneticisine damperli yarı römork teknik özelliklerini sunuyorsunuz.',
    difficulty: 'B2',
    category: 'technical-presentation',
    duration: 7,
    objectives: [
      {
        id: 'obj_1',
        description: 'Present key specifications clearly',
        descriptionTurkish: 'Temel teknik özellikleri açıkça sunun',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Answer technical questions confidently',
        descriptionTurkish: 'Teknik soruları güvenle cevaplayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Highlight competitive advantages',
        descriptionTurkish: 'Rekabet avantajlarını vurgulayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Right, so tell me about this tipper. We need something robust for aggregate transport. What\'s the body capacity?',
        hints: ['Give specific capacity figures', 'Mention material'],
        expectedResponses: [
          { text: 'This model has a body capacity of 25 cubic metres with a hardox steel body. It\'s designed specifically for heavy aggregate work.', score: 100 },
          { text: 'The capacity is 25 cubic metres. We use Hardox 450 steel for the body, which gives excellent wear resistance.', score: 95 },
          { text: 'It\'s a 25 cubic metre tipper with a reinforced steel body, ideal for aggregates.', score: 90 }
        ],
        acceptableKeywords: ['25', 'cubic', 'metres', 'Hardox', 'steel', 'capacity', 'aggregate']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['State the capacity', 'Mention the material']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Hardox is good. What about the tipping mechanism? We\'ve had issues with slow tipping times in the past.',
        hints: ['Explain the hydraulic system', 'Give tipping time'],
        expectedResponses: [
          { text: 'We use a front-mounted telescopic cylinder with a 5-stage hydraulic ram. Full tipping takes approximately 25 seconds, which is faster than most competitors.', score: 100 },
          { text: 'The hydraulic system is Italian-made - very reliable. Tipping time is around 25 seconds from flat to full tip.', score: 95 },
          { text: 'It\'s a telescopic cylinder system. Full tip in about 25 seconds. Very smooth operation.', score: 90 }
        ],
        acceptableKeywords: ['hydraulic', 'telescopic', 'cylinder', 'seconds', 'tipping', 'fast']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Describe the tipping system', 'Mention the speed']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'That\'s decent. What\'s the unladen weight? We need to maximise payload.',
        hints: ['Give the weight', 'Explain how you keep it light'],
        expectedResponses: [
          { text: 'The unladen weight is 6.2 tonnes. We\'ve optimised the chassis design to reduce weight without compromising strength. That gives you a payload of around 29 tonnes.', score: 100 },
          { text: 'It weighs 6.2 tonnes empty. We use high-strength steel in the chassis which keeps weight down while maintaining durability.', score: 95 },
          { text: 'About 6.2 tonnes unladen. So with a 44-tonne GVW, you\'re looking at nearly 29 tonnes payload.', score: 90 }
        ],
        acceptableKeywords: ['tonnes', 'weight', 'payload', 'chassis', 'unladen', '6.2']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['State the weight', 'Mention payload capacity']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Good payload. One more thing - what warranty do you offer, and do you have service support in the UK?',
        hints: ['Explain warranty terms', 'Mention UK support'],
        expectedResponses: [
          { text: 'We offer a 2-year warranty on the chassis and 1 year on hydraulics. We have a service partnership with a UK company for parts and support.', score: 100 },
          { text: 'The standard warranty is 24 months. For UK customers, we work with a local partner who can provide spare parts within 48 hours.', score: 95 },
          { text: 'Two years on the chassis. We\'ve recently set up a UK support network, so parts availability isn\'t an issue.', score: 90 }
        ],
        acceptableKeywords: ['warranty', 'years', 'months', 'service', 'parts', 'support', 'UK']
      }
    ],
    vocabulary: ['tipper', 'aggregate', 'body capacity', 'Hardox', 'telescopic cylinder', 'unladen weight', 'payload', 'GVW'],
    chunks: ['This model has...', 'It\'s designed specifically for...', 'We\'ve optimised...', 'We offer a...warranty']
  },

  {
    id: 'airport_taxi_001',
    title: 'Taking a Taxi from the Airport',
    titleTurkish: 'Havalimanından Taksi',
    setting: 'You\'ve just arrived at Birmingham Airport and need to take a taxi to your hotel in the city centre.',
    settingTurkish: 'Birmingham Havalimanı\'na yeni indiniz ve şehir merkezindeki otelinize taksi ile gitmeniz gerekiyor.',
    difficulty: 'A2',
    category: 'airport',
    duration: 4,
    objectives: [
      {
        id: 'obj_1',
        description: 'Tell the driver your destination',
        descriptionTurkish: 'Şoföre gideceğiniz yeri söyleyin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Confirm the fare',
        descriptionTurkish: 'Ücreti onaylayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Make small talk during the journey',
        descriptionTurkish: 'Yolculuk sırasında sohbet edin',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Hello there! Where can I take you today?',
        hints: ['State your destination clearly', 'Mention the hotel name'],
        expectedResponses: [
          { text: 'Good afternoon. Could you take me to the Grand Hotel in the city centre, please?', score: 100 },
          { text: 'Hello. The Grand Hotel, Birmingham city centre, please.', score: 95 },
          { text: 'Hi. I need to go to the Grand Hotel. Do you know it?', score: 85 }
        ],
        acceptableKeywords: ['Grand Hotel', 'city centre', 'please', 'take me']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Say where you\'re going', 'Be polite']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'The Grand Hotel, yes I know it well. That\'ll be about 25 pounds. Should take around 20 minutes depending on traffic. Is that alright?',
        hints: ['Confirm you\'re happy with the price', 'You can ask about payment'],
        expectedResponses: [
          { text: 'That\'s fine, thank you. Do you accept card payments?', score: 100 },
          { text: 'Yes, that sounds reasonable. Can I pay by card?', score: 95 },
          { text: '25 pounds is okay. Is there much traffic at this time?', score: 90 }
        ],
        acceptableKeywords: ['fine', 'okay', 'card', 'payment', 'reasonable', 'thank']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Agree to the price', 'Ask about payment method']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Yes, card is fine. So, business or pleasure? You sound like you\'ve travelled a fair way.',
        hints: ['Answer naturally', 'Mention where you\'re from'],
        expectedResponses: [
          { text: 'Business, actually. I\'m from Turkey - here for some meetings with clients.', score: 100 },
          { text: 'I\'m here on business. Flying in from Istanbul. It\'s my first time in Birmingham.', score: 95 },
          { text: 'Business trip. I work for a trailer company in Turkey.', score: 90 }
        ],
        acceptableKeywords: ['business', 'Turkey', 'Istanbul', 'meetings', 'clients', 'work']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Say why you\'re visiting', 'Mention where you\'re from']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Turkey, lovely! Right, here we are - the Grand Hotel. That\'s 24 pounds on the meter. Shall I get your bag from the boot?',
        hints: ['Pay and thank them', 'Accept help with luggage'],
        expectedResponses: [
          { text: 'Here\'s 25, keep the change. Yes please, that would be helpful. Thank you very much.', score: 100 },
          { text: 'Thank you. Here you go - keep the change. Yes, if you don\'t mind getting the bag.', score: 95 },
          { text: 'Thanks. I\'ll pay by card. And yes, help with the bag would be great.', score: 90 }
        ],
        acceptableKeywords: ['thank', 'change', 'bag', 'helpful', 'card', 'keep']
      }
    ],
    vocabulary: ['fare', 'meter', 'boot', 'traffic', 'city centre', 'card payment'],
    chunks: ['Could you take me to...', 'That sounds reasonable', 'Keep the change', 'That would be helpful']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 4
  // ==========================================
  {
    id: 'hotel_checkout_001',
    title: 'Hotel Checkout',
    titleTurkish: 'Otelden Çıkış',
    setting: 'Your business trip is over and you\'re checking out of your hotel in Birmingham. You need to settle the bill and arrange transport.',
    settingTurkish: 'İş geziniz sona erdi ve Birmingham\'daki otelinizden çıkış yapıyorsunuz. Hesabı kapatmanız ve ulaşım ayarlamanız gerekiyor.',
    difficulty: 'B1',
    category: 'hotel',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Check out smoothly',
        descriptionTurkish: 'Sorunsuz çıkış yapın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Query a charge on the bill',
        descriptionTurkish: 'Faturadaki bir ücreti sorgulayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Arrange airport transport',
        descriptionTurkish: 'Havalimanı ulaşımı ayarlayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good morning, sir. Checking out today?',
        hints: ['Confirm checkout', 'Give your room number'],
        expectedResponses: [
          { text: 'Good morning. Yes, I\'m checking out. Room 412, under my name.', score: 100 },
          { text: 'Morning. Yes please. Room 412.', score: 95 },
          { text: 'That\'s right. I\'m in room 412.', score: 90 }
        ],
        acceptableKeywords: ['yes', 'checking out', 'room', '412', 'name']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Confirm you\'re checking out', 'Give room number']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Let me pull up your bill. That\'s three nights, plus the restaurant charges and minibar. The total comes to £485.',
        hints: ['Check the bill', 'Query if something seems wrong'],
        expectedResponses: [
          { text: 'Could I see an itemised bill, please? I don\'t think I used the minibar.', score: 100 },
          { text: 'Hmm, I didn\'t use the minibar. Could you check that charge?', score: 95 },
          { text: 'May I see the breakdown? I\'m not sure about the minibar charge.', score: 90 }
        ],
        acceptableKeywords: ['itemised', 'bill', 'minibar', 'check', 'charge', 'breakdown']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Ask to see the bill details', 'Query the minibar']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Of course. Let me check... You\'re right, that was a system error. I\'ll remove it. The new total is £467. How would you like to pay?',
        hints: ['Confirm payment method', 'Thank them for correcting'],
        expectedResponses: [
          { text: 'Thank you for correcting that. I\'ll pay by credit card, please.', score: 100 },
          { text: 'I appreciate that. Card payment, please. Could I have a receipt for my company?', score: 95 },
          { text: 'Thanks. Credit card. And I\'ll need an invoice for expenses.', score: 90 }
        ],
        acceptableKeywords: ['thank', 'card', 'credit', 'receipt', 'invoice', 'pay']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Thank them', 'State payment method']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Certainly. Here\'s your receipt. Is there anything else I can help with? Do you need transport to the airport?',
        hints: ['Ask about taxi', 'Confirm your flight time'],
        expectedResponses: [
          { text: 'Yes please. Could you arrange a taxi to Birmingham Airport? My flight is at 2 o\'clock.', score: 100 },
          { text: 'That would be helpful. I need to be at the airport by noon. Can you book a taxi?', score: 95 },
          { text: 'Actually, yes. How much would a taxi to the airport cost?', score: 90 }
        ],
        acceptableKeywords: ['taxi', 'airport', 'flight', 'book', 'arrange', 'noon']
      },
      {
        id: 'turn_8',
        role: 'user',
        text: '',
        hints: ['Request transport', 'Mention your flight time']
      },
      {
        id: 'turn_9',
        role: 'agent',
        text: 'I\'ll book one for 11:30, that should give you plenty of time. It\'ll wait outside the main entrance. Have a safe journey!',
        hints: ['Thank them', 'Confirm the arrangement'],
        expectedResponses: [
          { text: 'Perfect, thank you. 11:30 at the main entrance. Thank you for everything, it\'s been a pleasant stay.', score: 100 },
          { text: 'Wonderful. Thanks for all your help. I\'ve enjoyed staying here.', score: 95 },
          { text: 'Great, thank you very much. Goodbye.', score: 85 }
        ],
        acceptableKeywords: ['thank', 'perfect', 'wonderful', 'stay', 'goodbye']
      }
    ],
    vocabulary: ['itemised bill', 'minibar', 'receipt', 'invoice', 'system error', 'main entrance'],
    chunks: ['Could I see an itemised bill...', 'I\'ll pay by...', 'Could you arrange...', 'It\'s been a pleasant stay']
  },

  {
    id: 'business_meeting_followup_001',
    title: 'Follow-up Meeting Discussion',
    titleTurkish: 'Takip Toplantısı Görüşmesi',
    setting: 'You\'re in a follow-up meeting with a UK client to discuss the progress of an order and address some concerns.',
    settingTurkish: 'Bir siparişin ilerleyişini tartışmak ve bazı endişeleri gidermek için İngiliz bir müşteriyle takip toplantısındasınız.',
    difficulty: 'B2',
    category: 'business-meeting',
    duration: 7,
    objectives: [
      {
        id: 'obj_1',
        description: 'Provide a clear status update',
        descriptionTurkish: 'Net bir durum güncellemesi verin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Address client concerns professionally',
        descriptionTurkish: 'Müşteri endişelerini profesyonelce karşılayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Agree on next steps',
        descriptionTurkish: 'Sonraki adımlar üzerinde anlaşın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Thanks for coming in. So, where are we with our order? The 15 curtainsiders we ordered last month.',
        hints: ['Give a clear status update', 'Be specific about progress'],
        expectedResponses: [
          { text: 'Thank you for having me. The order is progressing well. We\'ve completed the chassis assembly on 12 units, and the remaining 3 are in the welding stage.', score: 100 },
          { text: 'Good to be here. Production is on track. Twelve trailers are through chassis assembly, and three more are being welded now.', score: 95 },
          { text: 'Everything is going to plan. We\'re about 80% through production. Should be ready on time.', score: 85 }
        ],
        acceptableKeywords: ['progressing', 'completed', 'assembly', 'units', 'welding', 'track']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Update on production status', 'Give specific numbers']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Good to hear. We did have one concern though - your quality manager mentioned there was a weld issue on a previous batch. Has that been addressed?',
        hints: ['Acknowledge the concern', 'Explain what you\'ve done'],
        expectedResponses: [
          { text: 'Yes, we took that very seriously. We\'ve implemented additional weld inspection points and retrained the team. I can share the corrective action report with you.', score: 100 },
          { text: 'Absolutely. We conducted a root cause analysis and introduced extra quality checks. The issue won\'t recur.', score: 95 },
          { text: 'We\'ve addressed it. Extra inspections are now in place, and our defect rate has dropped significantly.', score: 90 }
        ],
        acceptableKeywords: ['seriously', 'implemented', 'inspection', 'corrective', 'quality', 'addressed']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Take responsibility', 'Explain corrective actions']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'That\'s reassuring. Now, regarding delivery - we\'re a bit concerned about the timeline. Can you still hit the March 15th deadline?',
        hints: ['Confirm or explain any changes', 'Be honest'],
        expectedResponses: [
          { text: 'Yes, we\'re confident we can meet the deadline. In fact, the first 10 units will be ready for shipping by March 10th.', score: 100 },
          { text: 'We\'re on track for March 15th. We might even be able to deliver earlier if the shipping schedule allows.', score: 95 },
          { text: 'March 15th is achievable. We\'ve allocated extra resources to ensure we meet the deadline.', score: 90 }
        ],
        acceptableKeywords: ['confident', 'meet', 'deadline', 'March', 'track', 'shipping']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Confirm the timeline', 'Provide reassurance']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Excellent. One more thing - we\'re considering increasing next quarter\'s order to 25 units. Would that be feasible for you?',
        hints: ['Show enthusiasm', 'Discuss capacity'],
        expectedResponses: [
          { text: 'That\'s great news. Yes, 25 units is well within our capacity. We could discuss the delivery schedule and any volume pricing adjustments.', score: 100 },
          { text: 'We\'d welcome that. Our production line can handle 25 units per quarter comfortably. Shall I prepare a revised quotation?', score: 95 },
          { text: 'Definitely feasible. We have capacity for growth. Let me send you a proposal for the increased volume.', score: 90 }
        ],
        acceptableKeywords: ['capacity', 'welcome', 'feasible', 'quotation', 'proposal', 'volume']
      }
    ],
    vocabulary: ['status update', 'corrective action', 'root cause analysis', 'deadline', 'feasible', 'capacity'],
    chunks: ['The order is progressing well', 'We took that very seriously', 'We\'re confident we can meet...', 'That\'s well within our capacity']
  },

  {
    id: 'restaurant_bill_001',
    title: 'Asking for the Bill',
    titleTurkish: 'Hesap İsteme',
    setting: 'You\'ve finished dinner with a client at a restaurant in London. It\'s time to pay the bill and wrap up the evening.',
    settingTurkish: 'Londra\'da bir restoranda müşteriyle akşam yemeğini bitirdiniz. Hesabı ödeme ve geceyi sonlandırma zamanı.',
    difficulty: 'B1',
    category: 'restaurant',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Ask for the bill politely',
        descriptionTurkish: 'Hesabı nazikçe isteyin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Handle paying as the host',
        descriptionTurkish: 'Ev sahibi olarak ödemeyi yapın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'End the evening professionally',
        descriptionTurkish: 'Geceyi profesyonelce sonlandırın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'That was a lovely meal. Shall we get the bill?',
        hints: ['Agree and offer to pay', 'Be the gracious host'],
        expectedResponses: [
          { text: 'Yes, let me get this. It\'s been a pleasure having dinner with you. Excuse me, could we have the bill, please?', score: 100 },
          { text: 'Allow me - this is on us. Waiter, the bill please when you have a moment.', score: 95 },
          { text: 'I\'ll take care of it. Let me call the waiter over.', score: 90 }
        ],
        acceptableKeywords: ['bill', 'please', 'pleasure', 'let me', 'waiter']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Offer to pay', 'Call the waiter']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Oh, that\'s very kind of you. Are you sure? I\'m happy to split it.',
        hints: ['Politely insist on paying', 'It\'s business etiquette'],
        expectedResponses: [
          { text: 'No, no, I insist. You\'re our guest in London. Please, it\'s the least we can do.', score: 100 },
          { text: 'Absolutely, I insist. It\'s been a productive meeting, and we appreciate your business.', score: 95 },
          { text: 'Please, allow me. You can get the next one when I visit your office.', score: 90 }
        ],
        acceptableKeywords: ['insist', 'guest', 'please', 'appreciate', 'allow']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Politely insist', 'Make it a gesture of goodwill']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Well, thank you very much. That\'s very generous. I\'ve really enjoyed this evening.',
        hints: ['Express that you enjoyed it too', 'Look forward to future cooperation'],
        expectedResponses: [
          { text: 'So have I. It\'s been wonderful getting to know you better. I\'m looking forward to working together on this project.', score: 100 },
          { text: 'The pleasure is mine. I think this partnership will be very successful. Let\'s stay in touch.', score: 95 },
          { text: 'Me too. Thank you for your time. I\'m excited about the opportunities ahead.', score: 90 }
        ],
        acceptableKeywords: ['enjoyed', 'pleasure', 'looking forward', 'partnership', 'working together']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Express enjoyment', 'Look forward to cooperation']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Definitely. Right, I should probably head off - early start tomorrow. Thank you again for dinner.',
        hints: ['Say goodbye professionally', 'Mention next steps'],
        expectedResponses: [
          { text: 'Of course. Safe journey home. I\'ll send over the proposal first thing Monday morning. Have a good evening.', score: 100 },
          { text: 'Absolutely. Let me walk you out. I\'ll follow up by email tomorrow. Goodnight!', score: 95 },
          { text: 'Thank you for joining me. I\'ll be in touch next week. Take care.', score: 90 }
        ],
        acceptableKeywords: ['safe', 'journey', 'proposal', 'follow up', 'email', 'touch', 'goodnight']
      }
    ],
    vocabulary: ['bill', 'split the bill', 'generous', 'head off', 'follow up', 'proposal'],
    chunks: ['Let me get this', 'I insist', 'It\'s been a pleasure', 'I\'ll send over the proposal', 'Safe journey home']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 5
  // ==========================================
  {
    id: 'phone_reschedule_001',
    title: 'Rescheduling a Meeting',
    titleTurkish: 'Toplantıyı Erteleme',
    setting: 'You need to call a UK client to reschedule a meeting due to a flight delay.',
    settingTurkish: 'Uçuş gecikmesi nedeniyle bir toplantıyı ertelemek için İngiltere\'deki müşteriyi aramanız gerekiyor.',
    difficulty: 'B1',
    category: 'phone-call',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Apologise for the inconvenience',
        descriptionTurkish: 'Rahatsızlık için özür dileyin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Explain the situation clearly',
        descriptionTurkish: 'Durumu açıkça anlatın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Propose a new time',
        descriptionTurkish: 'Yeni bir zaman önerin',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good morning, David Richards speaking.',
        hints: ['Introduce yourself', 'Apologise for calling with bad news'],
        expectedResponses: [
          { text: 'Good morning, David. This is {{USER_NAME}} from STU Trailer. I\'m afraid I\'m calling with some bad news about our meeting today.', score: 100 },
          { text: 'Morning David. {{USER_NAME}} here from STU Trailer. I\'m sorry to say I need to reschedule our meeting.', score: 95 },
          { text: 'Hello David. It\'s {{USER_NAME}}. Unfortunately, I have to cancel our meeting today.', score: 85 }
        ],
        acceptableKeywords: ['{{USER_NAME}}', 'STU', 'meeting', 'sorry', 'afraid', 'reschedule']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Introduce yourself', 'Indicate the problem']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Oh, that\'s a shame. What\'s happened?',
        hints: ['Explain the situation', 'Be apologetic'],
        expectedResponses: [
          { text: 'My flight from Istanbul has been delayed by four hours due to weather. I won\'t arrive in Birmingham until this evening. I\'m really sorry for the inconvenience.', score: 100 },
          { text: 'There\'s been a delay at Istanbul Airport - technical issues. I\'m not going to make it in time. I apologise for the short notice.', score: 95 },
          { text: 'Flight problems, I\'m afraid. I\'m stuck in Istanbul and won\'t arrive until tonight.', score: 85 }
        ],
        acceptableKeywords: ['flight', 'delayed', 'Istanbul', 'sorry', 'apologise', 'weather']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Explain what happened', 'Apologise sincerely']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'These things happen. Don\'t worry about it. When would you be able to reschedule?',
        hints: ['Propose alternative times', 'Show flexibility'],
        expectedResponses: [
          { text: 'Thank you for understanding. I\'m free tomorrow afternoon, or we could do Thursday morning if that works better for you.', score: 100 },
          { text: 'I appreciate that. Would tomorrow at 2pm work? Or I\'m available any time Thursday.', score: 95 },
          { text: 'I could do tomorrow or Thursday. What suits you best?', score: 90 }
        ],
        acceptableKeywords: ['tomorrow', 'Thursday', 'afternoon', 'morning', 'available', 'works']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Offer alternative dates', 'Be flexible']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Thursday morning would actually work better for me. Shall we say 10 o\'clock?',
        hints: ['Confirm the new time', 'Thank them for flexibility'],
        expectedResponses: [
          { text: 'Thursday at 10 is perfect. Thank you for being so understanding, David. I\'ll see you then.', score: 100 },
          { text: 'That works well. I really appreciate your flexibility. See you Thursday at 10.', score: 95 },
          { text: '10 o\'clock Thursday, confirmed. Thanks again, and sorry for the trouble.', score: 90 }
        ],
        acceptableKeywords: ['Thursday', '10', 'perfect', 'thank', 'appreciate', 'confirmed']
      }
    ],
    vocabulary: ['reschedule', 'inconvenience', 'short notice', 'flexibility', 'delay', 'technical issues'],
    chunks: ['I\'m afraid I\'m calling with...', 'I apologise for the short notice', 'Thank you for understanding', 'Would...work for you?']
  },

  {
    id: 'small_talk_hotel_breakfast_001',
    title: 'Breakfast Conversation at Hotel',
    titleTurkish: 'Otelde Kahvaltı Sohbeti',
    setting: 'You\'re having breakfast at your hotel and a British business traveller sits at the next table. You strike up a conversation.',
    settingTurkish: 'Otelinizde kahvaltı yapıyorsunuz ve İngiliz bir iş seyahatçisi yan masaya oturuyor. Sohbet başlatıyorsunuz.',
    difficulty: 'B1',
    category: 'small-talk',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Start a conversation naturally',
        descriptionTurkish: 'Doğal bir şekilde sohbet başlatın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Find common ground',
        descriptionTurkish: 'Ortak nokta bulun',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Exchange professional information',
        descriptionTurkish: 'Profesyonel bilgi alışverişi yapın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Morning! The coffee here is quite good, isn\'t it?',
        hints: ['Agree and continue the conversation', 'Be friendly'],
        expectedResponses: [
          { text: 'Good morning! Yes, it\'s excellent. Much better than I expected. Are you here for business as well?', score: 100 },
          { text: 'Morning! Yes, surprisingly good. Are you staying here for work?', score: 95 },
          { text: 'It is, yes. Nice hotel overall. Business trip?', score: 85 }
        ],
        acceptableKeywords: ['morning', 'yes', 'good', 'business', 'work', 'hotel']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Agree about the coffee', 'Ask about their purpose']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Yes, I\'m visiting a supplier in the area. What about you? Your accent - let me guess, somewhere Mediterranean?',
        hints: ['Confirm where you\'re from', 'Explain your visit'],
        expectedResponses: [
          { text: 'Close! I\'m from Turkey. I\'m here to meet clients - I work in the trailer manufacturing industry.', score: 100 },
          { text: 'Turkey, actually. I\'m visiting some potential customers. We manufacture semi-trailers.', score: 95 },
          { text: 'Not quite - Turkey. Here for business meetings in the automotive sector.', score: 90 }
        ],
        acceptableKeywords: ['Turkey', 'business', 'clients', 'manufacturing', 'trailers', 'meetings']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Say where you\'re from', 'Mention your industry']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Trailers? That\'s interesting. I\'m in logistics myself - we run a haulage company. Always looking for reliable equipment.',
        hints: ['Show interest', 'This could be a business opportunity'],
        expectedResponses: [
          { text: 'Really? What a coincidence! We export curtainsiders and tippers mainly. Which types of trailers do you use in your fleet?', score: 100 },
          { text: 'That\'s a great coincidence. We specialise in curtainsiders. Do you purchase or lease your trailers?', score: 95 },
          { text: 'Small world! We might be able to help each other. What kind of trailers does your company use?', score: 90 }
        ],
        acceptableKeywords: ['coincidence', 'curtainsiders', 'fleet', 'trailers', 'purchase', 'specialise']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Show interest in their business', 'See if there\'s opportunity']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Mostly curtainsiders, actually. We buy about 10 new ones a year. Here\'s my card - give me a call if you\'d like to discuss further.',
        hints: ['Accept the card', 'Offer yours in return'],
        expectedResponses: [
          { text: 'Thank you, I\'d like that. Here\'s my card as well. I\'ll send you our catalogue and price list. It was lovely meeting you.', score: 100 },
          { text: 'That\'s great, thank you. Let me give you mine too. I\'ll be in touch after I\'m back in Turkey.', score: 95 },
          { text: 'Brilliant, thanks. Here\'s mine. Perhaps we can arrange a proper meeting next time I\'m in the UK.', score: 90 }
        ],
        acceptableKeywords: ['thank', 'card', 'catalogue', 'meeting', 'touch', 'lovely']
      }
    ],
    vocabulary: ['haulage', 'logistics', 'fleet', 'coincidence', 'supplier', 'Mediterranean'],
    chunks: ['What a coincidence!', 'Small world!', 'Give me a call if...', 'It was lovely meeting you']
  },

  {
    id: 'factory_safety_001',
    title: 'Safety Briefing for Visitors',
    titleTurkish: 'Ziyaretçiler İçin Güvenlik Brifingi',
    setting: 'UK clients are visiting your factory. Before the tour, you need to give them a safety briefing.',
    settingTurkish: 'İngiliz müşteriler fabrikanızı ziyaret ediyor. Turdan önce onlara güvenlik brifingi vermeniz gerekiyor.',
    difficulty: 'B1',
    category: 'factory-visit',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Explain safety requirements clearly',
        descriptionTurkish: 'Güvenlik gerekliliklerini açıkça anlatın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Provide safety equipment',
        descriptionTurkish: 'Güvenlik ekipmanı sağlayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Answer safety-related questions',
        descriptionTurkish: 'Güvenlikle ilgili soruları cevaplayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Thank you for visiting STU Trailer. Before we start the tour, I believe there\'s a safety briefing?',
        hints: ['Confirm and begin the briefing', 'Be professional'],
        expectedResponses: [
          { text: 'Yes, that\'s right. Safety is our top priority. Before we enter the production area, I need to go through a few important points with you.', score: 100 },
          { text: 'Absolutely. Let me quickly run through our safety procedures before we go onto the shop floor.', score: 95 },
          { text: 'Yes, I\'ll give you a brief safety overview. It won\'t take long, but it\'s essential.', score: 90 }
        ],
        acceptableKeywords: ['safety', 'priority', 'procedures', 'production', 'briefing', 'important']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Confirm safety briefing', 'Emphasise importance']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Of course. What do we need to know?',
        hints: ['Explain PPE requirements', 'Cover main safety rules'],
        expectedResponses: [
          { text: 'First, you\'ll need to wear these high-visibility vests and safety glasses at all times. We also ask that you stay within the marked walkways and follow me closely.', score: 100 },
          { text: 'Please put on these hi-vis vests and safety glasses. Keep to the yellow walkways, and don\'t touch any machinery unless I say it\'s safe.', score: 95 },
          { text: 'You\'ll need PPE - here are vests and glasses. Please stay with the group and don\'t wander off the marked paths.', score: 90 }
        ],
        acceptableKeywords: ['vests', 'glasses', 'safety', 'walkways', 'PPE', 'machinery']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Explain what PPE is needed', 'Mention walkways']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Understood. Are there any particular hazards we should be aware of?',
        hints: ['Mention specific hazards', 'Explain precautions'],
        expectedResponses: [
          { text: 'Yes, in the welding area there will be bright flashes, so please don\'t look directly at the welding arcs. Also, some areas have overhead cranes, so watch for warning lights and alarms.', score: 100 },
          { text: 'The main hazards are the welding stations - avoid looking at the arcs - and the paint shop, where we ask you not to use phones or cameras due to fumes.', score: 95 },
          { text: 'Be careful around the welding area - bright lights. And watch out for forklift trucks in the assembly section.', score: 90 }
        ],
        acceptableKeywords: ['welding', 'hazards', 'cranes', 'warning', 'forklifts', 'arcs']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Mention specific hazards', 'Give clear warnings']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Good to know. And if there\'s an emergency?',
        hints: ['Explain emergency procedures', 'Point out exits'],
        expectedResponses: [
          { text: 'If you hear the alarm, please follow me immediately to the nearest assembly point. The exits are marked with green signs. Don\'t worry, I\'ll guide you throughout the tour.', score: 100 },
          { text: 'In case of emergency, follow the green exit signs. The assembly point is in the car park. Stay calm and stay with me.', score: 95 },
          { text: 'Just follow me to the exits if the alarm sounds. The assembly point is outside. You\'ll be safe with me.', score: 90 }
        ],
        acceptableKeywords: ['alarm', 'assembly point', 'exits', 'emergency', 'green', 'follow']
      }
    ],
    vocabulary: ['high-visibility vest', 'PPE', 'walkways', 'hazards', 'assembly point', 'overhead crane'],
    chunks: ['Safety is our top priority', 'Please stay within...', 'In case of emergency...', 'I\'ll guide you throughout']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 6
  // ==========================================
  {
    id: 'technical_presentation_qa_001',
    title: 'Handling Q&A After Presentation',
    titleTurkish: 'Sunum Sonrası Soru-Cevap',
    setting: 'You\'ve just finished presenting your product range to a UK audience. Now it\'s time to handle questions from the attendees.',
    settingTurkish: 'İngiliz bir izleyici kitlesine ürün yelpazenizi sundunuz. Şimdi katılımcıların sorularını yanıtlama zamanı.',
    difficulty: 'B2',
    category: 'technical-presentation',
    duration: 6,
    objectives: [
      {
        id: 'obj_1',
        description: 'Handle technical questions confidently',
        descriptionTurkish: 'Teknik soruları güvenle cevaplayın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Admit when you don\'t know something',
        descriptionTurkish: 'Bilmediğiniz bir şey olduğunda kabul edin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Offer to follow up with more information',
        descriptionTurkish: 'Daha fazla bilgi ile takip teklif edin',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Thank you for that presentation. I have a question about the axle configuration. Can you use disc brakes instead of drum brakes on your trailers?',
        hints: ['Answer technically', 'Explain the options'],
        expectedResponses: [
          { text: 'Yes, absolutely. We offer both options. Disc brakes are standard on our premium range, and they can be specified on any model for an additional cost.', score: 100 },
          { text: 'Good question. We can fit disc brakes on any of our trailers. They\'re actually becoming more popular with UK customers.', score: 95 },
          { text: 'We offer disc brakes as an option. They add about €800 per axle but give better performance.', score: 90 }
        ],
        acceptableKeywords: ['disc brakes', 'option', 'standard', 'premium', 'model', 'cost']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Confirm availability', 'Mention costs if relevant']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Good to know. Another question - what\'s the typical lifespan of your trailer floors? We\'ve had issues with rotting on other brands.',
        hints: ['Explain the floor construction', 'Highlight durability'],
        expectedResponses: [
          { text: 'Our floors use 28mm hardwood with a phenolic coating, which is highly resistant to moisture. Under normal use, you can expect 15 to 20 years before replacement is needed.', score: 100 },
          { text: 'We use treated hardwood flooring with anti-rot coating. Most of our customers report 15+ years of service life without major issues.', score: 95 },
          { text: 'The floors are made from high-quality hardwood. They\'re designed to last at least 15 years with proper maintenance.', score: 90 }
        ],
        acceptableKeywords: ['hardwood', 'coating', 'years', 'resistant', 'lifespan', 'maintenance']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Explain the material', 'Give lifespan estimate']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Impressive. One more - do you have crash test certification for the rear underrun protection?',
        hints: ['If unsure, admit it professionally', 'Offer to check'],
        expectedResponses: [
          { text: 'Yes, all our rear underrun guards are tested and certified to ECE R58. I can send you the test certificates if you\'d like to review them.', score: 100 },
          { text: 'That\'s a good question. I believe we\'re ECE R58 certified, but let me confirm the exact details and send you the documentation.', score: 95 },
          { text: 'I\'d need to check the specific certification reference. Can I get back to you on that with the full documentation?', score: 85 }
        ],
        acceptableKeywords: ['certified', 'ECE', 'R58', 'documentation', 'send', 'confirm']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Answer if you know', 'Offer to follow up if unsure']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'That would be helpful. Are there any other questions from the floor? No? Well, thank you all for your attention.',
        hints: ['Thank the audience', 'Offer further contact'],
        expectedResponses: [
          { text: 'Thank you all for your excellent questions. Please feel free to contact me directly if you have any further queries. I\'ll be here for the next hour if anyone wants to discuss anything one-to-one.', score: 100 },
          { text: 'Thank you for listening. My contact details are on the last slide. Don\'t hesitate to reach out if you need any more information.', score: 95 },
          { text: 'Thanks everyone. I\'m happy to chat individually afterwards, and you can always email me with questions.', score: 90 }
        ],
        acceptableKeywords: ['thank', 'contact', 'questions', 'email', 'reach out', 'discuss']
      }
    ],
    vocabulary: ['axle configuration', 'disc brakes', 'drum brakes', 'phenolic coating', 'underrun protection', 'ECE R58'],
    chunks: ['Good question...', 'I\'d need to check...', 'Can I get back to you on that?', 'Please feel free to contact me']
  },

  {
    id: 'airport_lost_luggage_001',
    title: 'Reporting Lost Luggage',
    titleTurkish: 'Kayıp Bagaj Bildirimi',
    setting: 'You\'ve arrived at Manchester Airport but your suitcase hasn\'t appeared on the carousel. You need to report it missing.',
    settingTurkish: 'Manchester Havalimanı\'na vardınız ama valiziniz banttan çıkmadı. Kayıp olarak bildirmeniz gerekiyor.',
    difficulty: 'B1',
    category: 'airport',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Report the missing luggage clearly',
        descriptionTurkish: 'Kayıp bagajı açıkça bildirin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Describe your bag accurately',
        descriptionTurkish: 'Çantanızı doğru şekilde tanımlayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Provide contact details for delivery',
        descriptionTurkish: 'Teslimat için iletişim bilgilerini verin',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good evening, sir. How can I help you?',
        hints: ['Explain your problem', 'Mention your flight'],
        expectedResponses: [
          { text: 'Good evening. I\'ve just arrived on flight TK1990 from Istanbul, but my suitcase hasn\'t come through on the carousel.', score: 100 },
          { text: 'Hello. My luggage seems to be missing. I was on the Istanbul flight - TK1990.', score: 95 },
          { text: 'Hi. I can\'t find my bag. I flew in from Istanbul about an hour ago.', score: 85 }
        ],
        acceptableKeywords: ['luggage', 'suitcase', 'missing', 'flight', 'Istanbul', 'carousel']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['State the problem', 'Give flight details']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'I\'m sorry to hear that. Can you describe your bag for me? Size, colour, any distinguishing features?',
        hints: ['Describe your bag in detail', 'Mention any tags or marks'],
        expectedResponses: [
          { text: 'It\'s a large black Samsonite suitcase with four wheels. It has a red ribbon tied to the handle and a blue luggage tag with my name on it.', score: 100 },
          { text: 'A black hard-shell case, medium to large size. Samsonite brand. I put a coloured strap around it - orange.', score: 95 },
          { text: 'Black suitcase, quite large. It has my company logo sticker on the side - STU Trailer.', score: 90 }
        ],
        acceptableKeywords: ['black', 'Samsonite', 'large', 'wheels', 'ribbon', 'tag']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Describe size and colour', 'Mention any identifying marks']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Thank you. And do you have your baggage claim ticket? It should be attached to your boarding pass.',
        hints: ['Provide the ticket', 'Or explain if you don\'t have it'],
        expectedResponses: [
          { text: 'Yes, here it is. The number is MAN-784521.', score: 100 },
          { text: 'I\'ve got it here somewhere... Yes, here. It says MAN-784521.', score: 95 },
          { text: 'Let me check... Yes, I have it. Here you go.', score: 90 }
        ],
        acceptableKeywords: ['yes', 'here', 'number', 'ticket', 'claim']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Hand over the claim ticket', 'Read out the number']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Perfect. We\'ll track it down. Where are you staying? We can deliver it once it\'s located.',
        hints: ['Give your hotel details', 'Provide contact number'],
        expectedResponses: [
          { text: 'I\'m staying at the Hilton Manchester for the next three nights. My mobile number is 07700 900123. Please call me as soon as you find it.', score: 100 },
          { text: 'The Radisson Blu, central Manchester. Room will be under my name. My phone number is 07700 900123.', score: 95 },
          { text: 'I\'ll be at the Hilton. Here\'s my business card with my mobile number.', score: 90 }
        ],
        acceptableKeywords: ['hotel', 'Hilton', 'mobile', 'number', 'call', 'staying']
      }
    ],
    vocabulary: ['carousel', 'baggage claim', 'distinguishing features', 'hard-shell', 'luggage tag', 'track down'],
    chunks: ['My luggage seems to be missing', 'It has...tied to the handle', 'Please call me as soon as...', 'Here\'s my business card']
  },

  {
    id: 'hotel_concierge_001',
    title: 'Asking the Concierge for Help',
    titleTurkish: 'Otel Görevlisinden Yardım İsteme',
    setting: 'You need help from the hotel concierge to find a good restaurant and arrange theatre tickets for entertaining a client.',
    settingTurkish: 'Bir müşteriyi ağırlamak için iyi bir restoran bulmak ve tiyatro bileti ayarlamak için otel görevlisinden yardım istiyorsunuz.',
    difficulty: 'B1',
    category: 'hotel',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Ask for restaurant recommendations',
        descriptionTurkish: 'Restoran önerileri isteyin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Request help with bookings',
        descriptionTurkish: 'Rezervasyon konusunda yardım isteyin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Arrange entertainment for a client',
        descriptionTurkish: 'Müşteri için eğlence ayarlayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good afternoon, sir. How may I assist you today?',
        hints: ['Explain what you need', 'Mention it\'s for a client'],
        expectedResponses: [
          { text: 'Good afternoon. I\'m entertaining an important client tomorrow evening and I need some help. Could you recommend a nice restaurant nearby?', score: 100 },
          { text: 'Hello. I\'m looking for a good restaurant to take a business client to tomorrow. Somewhere impressive but not too formal.', score: 95 },
          { text: 'Hi. I need to find a restaurant for a business dinner tomorrow. Any recommendations?', score: 85 }
        ],
        acceptableKeywords: ['restaurant', 'client', 'recommend', 'business', 'dinner', 'tomorrow']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Explain the occasion', 'Ask for recommendations']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Of course. What type of cuisine does your client prefer? We have excellent Italian, British, and Asian options within walking distance.',
        hints: ['State your preference', 'Consider your client'],
        expectedResponses: [
          { text: 'British would be perfect, actually. Something traditional but high quality. My client is visiting from overseas, so an authentic experience would be ideal.', score: 100 },
          { text: 'I think British cuisine would work well. He\'s never been to the UK before, so something quintessentially English.', score: 95 },
          { text: 'Let\'s go with British. Something classic. What would you suggest?', score: 90 }
        ],
        acceptableKeywords: ['British', 'traditional', 'quality', 'authentic', 'English', 'suggest']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Choose a cuisine type', 'Explain why']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'I\'d recommend The Ivy. Excellent British menu, beautiful setting, very popular with business clients. Shall I make a reservation for you?',
        hints: ['Accept and specify details', 'Give time and party size'],
        expectedResponses: [
          { text: 'That sounds perfect. Yes please, could you book a table for two at 7:30? Somewhere quiet if possible - we\'ll be discussing business.', score: 100 },
          { text: 'Yes, please. A table for two, around 7:30 tomorrow evening. Could we get a private area?', score: 95 },
          { text: 'Wonderful. Please book for two people, 7:30pm. A good table if you can.', score: 90 }
        ],
        acceptableKeywords: ['book', 'table', 'two', '7:30', 'quiet', 'please']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Confirm booking', 'Specify time and party size']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Certainly. And would you like me to arrange anything else? Theatre tickets perhaps, or a car service?',
        hints: ['Consider theatre tickets', 'Or politely decline'],
        expectedResponses: [
          { text: 'Theatre tickets would be wonderful, actually. Is there anything good on tomorrow night? Something light, perhaps a musical or comedy?', score: 100 },
          { text: 'What\'s on at the theatre tomorrow? If there\'s a good show, that could be a nice ending to the evening.', score: 95 },
          { text: 'That\'s all for now, thank you. But I\'ll let you know if we need anything else.', score: 85 }
        ],
        acceptableKeywords: ['theatre', 'tickets', 'show', 'musical', 'tomorrow', 'thank']
      }
    ],
    vocabulary: ['concierge', 'entertaining', 'cuisine', 'reservation', 'quintessentially', 'car service'],
    chunks: ['I\'m entertaining a client', 'Could you recommend...', 'Shall I make a reservation?', 'That sounds perfect']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 7 (FINAL)
  // ==========================================
  {
    id: 'restaurant_dietary_001',
    title: 'Handling Dietary Requirements',
    titleTurkish: 'Diyet Gereksinimleri',
    setting: 'You\'re at a restaurant with colleagues and need to explain your dietary requirements to the waiter.',
    settingTurkish: 'Meslektaşlarınızla bir restorandasınız ve garsona diyet gereksinimlerinizi açıklamanız gerekiyor.',
    difficulty: 'B1',
    category: 'restaurant',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Explain dietary requirements politely',
        descriptionTurkish: 'Diyet gereksinimlerini nazikçe açıklayın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Ask about ingredients',
        descriptionTurkish: 'İçerikler hakkında sorun',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Make a suitable choice',
        descriptionTurkish: 'Uygun bir seçim yapın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good evening. Are you ready to order, or do you have any questions about the menu?',
        hints: ['Mention your dietary needs', 'Ask for help'],
        expectedResponses: [
          { text: 'Good evening. Yes, I have a question. I don\'t eat pork for religious reasons. Could you tell me which dishes are suitable?', score: 100 },
          { text: 'Hello. I need to avoid pork - could you recommend something? What\'s in the chef\'s special?', score: 95 },
          { text: 'Evening. I have some dietary restrictions. Is there pork in any of these dishes?', score: 90 }
        ],
        acceptableKeywords: ['pork', 'dietary', 'suitable', 'recommend', 'restrictions', 'dishes']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Explain your requirement', 'Ask for suitable options']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Of course, no problem at all. The lamb shank, the grilled salmon, and the chicken supreme are all pork-free. Would any of those interest you?',
        hints: ['Ask about a specific dish', 'Check the preparation'],
        expectedResponses: [
          { text: 'The lamb shank sounds good. Could you tell me how it\'s prepared? And does the sauce contain any alcohol?', score: 100 },
          { text: 'I\'m interested in the chicken. What does it come with? And is it cooked in any wine or alcohol?', score: 95 },
          { text: 'The salmon sounds nice. Is it grilled with butter or oil?', score: 90 }
        ],
        acceptableKeywords: ['lamb', 'chicken', 'salmon', 'prepared', 'sauce', 'alcohol']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Ask about preparation', 'Check for alcohol if needed']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'The lamb is slow-cooked in a rosemary and garlic jus - no wine. It comes with roasted vegetables and mashed potato. Shall I put that order in for you?',
        hints: ['Confirm your order', 'Thank them for their help'],
        expectedResponses: [
          { text: 'That sounds perfect, thank you. Yes, I\'ll have the lamb, please. And could I have a glass of sparkling water?', score: 100 },
          { text: 'Lovely, I\'ll go with that. Thank you for checking those details for me.', score: 95 },
          { text: 'Yes please. The lamb sounds delicious. Thanks for your help.', score: 90 }
        ],
        acceptableKeywords: ['lamb', 'please', 'thank', 'perfect', 'water', 'sounds']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Confirm your choice', 'Order a drink']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Certainly. Sparkling water and the lamb shank. I\'ll make a note about your dietary requirements for the kitchen. Is there anything else?',
        hints: ['Thank them', 'Confirm you\'re all set'],
        expectedResponses: [
          { text: 'No, that\'s everything. I really appreciate you being so helpful with the dietary questions. Thank you.', score: 100 },
          { text: 'That\'s all for now, thank you. I appreciate your patience with my questions.', score: 95 },
          { text: 'We\'re all set, thanks. Very helpful of you.', score: 90 }
        ],
        acceptableKeywords: ['thank', 'appreciate', 'helpful', 'everything', 'set']
      }
    ],
    vocabulary: ['dietary requirements', 'pork-free', 'slow-cooked', 'jus', 'ingredients', 'preparation'],
    chunks: ['I don\'t eat...for religious reasons', 'Could you tell me which dishes...', 'Does it contain...', 'I really appreciate you being so helpful']
  },

  {
    id: 'business_closing_deal_001',
    title: 'Closing a Deal',
    titleTurkish: 'Anlaşmayı Kapatma',
    setting: 'After several meetings, you\'re ready to close a deal with a UK distributor for 50 trailers.',
    settingTurkish: 'Birkaç toplantının ardından İngiliz bir distribütörle 50 römork için anlaşmayı kapatmaya hazırsınız.',
    difficulty: 'B2',
    category: 'business-meeting',
    duration: 7,
    objectives: [
      {
        id: 'obj_1',
        description: 'Summarise the agreed terms',
        descriptionTurkish: 'Mutabık kalınan şartları özetleyin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Address any final concerns',
        descriptionTurkish: 'Son endişeleri giderin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Confirm the deal professionally',
        descriptionTurkish: 'Anlaşmayı profesyonelce onaylayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Right, I think we\'ve covered everything. Before we sign, shall we just run through the key terms one more time?',
        hints: ['Agree and summarise', 'Be clear and professional'],
        expectedResponses: [
          { text: 'Yes, good idea. So we\'ve agreed on 50 curtainsiders at €26,500 per unit, with delivery in two batches - 25 in March and 25 in May.', score: 100 },
          { text: 'Absolutely. To summarise: 50 units, €26,500 each, split delivery over March and May, payment 30% upfront and 70% on delivery.', score: 95 },
          { text: 'Of course. Fifty trailers at the agreed price, delivered in two phases. Is that your understanding as well?', score: 90 }
        ],
        acceptableKeywords: ['50', 'curtainsiders', '26,500', 'delivery', 'March', 'May', 'summarise']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Summarise the key terms', 'Mention quantity, price, delivery']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'That\'s correct. And the warranty is 3 years on the chassis, 2 years on everything else. One last thing - what happens if there are any quality issues after delivery?',
        hints: ['Reassure them about quality support', 'Explain the process'],
        expectedResponses: [
          { text: 'We take quality very seriously. If any issues arise, we\'ll send a technician within 48 hours, or we\'ll cover the cost of local repairs. It\'s all in the warranty agreement.', score: 100 },
          { text: 'We have a dedicated after-sales team. Any defects within warranty are repaired at our cost. We can also arrange a UK service partner for faster response.', score: 95 },
          { text: 'We\'ll handle it promptly. Warranty claims are processed within a week, and we cover all repair costs.', score: 90 }
        ],
        acceptableKeywords: ['quality', 'technician', 'warranty', 'repairs', 'after-sales', 'cost']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Reassure about support', 'Explain warranty process']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'That\'s reassuring. I\'m happy with everything. I think we have a deal.',
        hints: ['Express satisfaction', 'Confirm the partnership'],
        expectedResponses: [
          { text: 'Excellent! I\'m delighted we\'ve reached an agreement. This is the beginning of what I hope will be a long and successful partnership.', score: 100 },
          { text: 'Wonderful. I\'m very pleased. Thank you for your trust in STU Trailer. We won\'t let you down.', score: 95 },
          { text: 'Fantastic. I\'m confident this will be a great partnership. Shall we sign the contract?', score: 90 }
        ],
        acceptableKeywords: ['delighted', 'pleased', 'partnership', 'agreement', 'trust', 'sign']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Express your satisfaction', 'Mention partnership']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Indeed. Let me sign here... and here. There we go. Welcome aboard! Shall we celebrate with a drink?',
        hints: ['Accept or politely decline', 'Express gratitude'],
        expectedResponses: [
          { text: 'Thank you! I\'d love that. This calls for a celebration. Here\'s to a successful partnership!', score: 100 },
          { text: 'That\'s very kind. I\'ll have a coffee if that\'s alright. Here\'s to working together!', score: 95 },
          { text: 'Thank you. A sparkling water for me, but yes, let\'s toast to our new partnership!', score: 90 }
        ],
        acceptableKeywords: ['thank', 'celebration', 'partnership', 'toast', 'working together']
      }
    ],
    vocabulary: ['key terms', 'warranty agreement', 'after-sales', 'partnership', 'close the deal', 'sign the contract'],
    chunks: ['Shall we run through...', 'We take...very seriously', 'I\'m delighted we\'ve reached an agreement', 'Here\'s to a successful partnership']
  },

  {
    id: 'small_talk_weekend_001',
    title: 'Monday Morning Chat',
    titleTurkish: 'Pazartesi Sabahı Sohbeti',
    setting: 'It\'s Monday morning at your UK client\'s office. Before the meeting starts, you chat with colleagues about the weekend.',
    settingTurkish: 'İngiliz müşterinizin ofisinde pazartesi sabahı. Toplantı başlamadan önce meslektaşlarınızla hafta sonu hakkında sohbet ediyorsunuz.',
    difficulty: 'A2',
    category: 'small-talk',
    duration: 4,
    objectives: [
      {
        id: 'obj_1',
        description: 'Respond to small talk about the weekend',
        descriptionTurkish: 'Hafta sonu hakkındaki sohbete katılın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Ask about their weekend',
        descriptionTurkish: 'Onların hafta sonunu sorun',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Transition smoothly to business',
        descriptionTurkish: 'İşe sorunsuz geçiş yapın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Morning! Good to see you again. Did you have a good weekend? Did you get to do anything nice while you were here?',
        hints: ['Respond warmly', 'Share what you did'],
        expectedResponses: [
          { text: 'Good morning! Yes, it was lovely, thank you. I visited the British Museum on Saturday - it was fascinating. How was your weekend?', score: 100 },
          { text: 'Morning! Yes, very nice. I explored the city a bit - saw some sights. What about you, did you do anything special?', score: 95 },
          { text: 'Hello! Yes, good thanks. Mostly rested, but I walked around the city centre. And you?', score: 85 }
        ],
        acceptableKeywords: ['morning', 'lovely', 'visited', 'museum', 'weekend', 'you']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Share your weekend', 'Ask about theirs']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'The British Museum is wonderful, isn\'t it? I spent the weekend with the family - took the kids to a football match on Sunday. Do you follow football?',
        hints: ['Show interest', 'Be honest about your knowledge'],
        expectedResponses: [
          { text: 'That sounds lovely! A family day out. I follow it a little - I know the Premier League is very popular. Which team did you see?', score: 100 },
          { text: 'How nice for the kids! I don\'t follow it closely, but I enjoy watching big matches. Who was playing?', score: 95 },
          { text: 'That must have been fun. I\'m not a huge football fan, but I know it\'s a big deal here!', score: 85 }
        ],
        acceptableKeywords: ['lovely', 'family', 'football', 'Premier League', 'team', 'match']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Show interest', 'Ask a follow-up question']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'We saw Manchester City play. They won 3-1, so the kids were happy! Anyway, shall we grab a coffee before the others arrive?',
        hints: ['Respond positively', 'Agree to coffee'],
        expectedResponses: [
          { text: 'Brilliant! Glad the kids enjoyed it. Yes, a coffee would be great. I could use one after the early start this morning.', score: 100 },
          { text: 'Wonderful result! Yes please, coffee sounds perfect. Then we can go through the agenda.', score: 95 },
          { text: 'Nice! Yes, let\'s get a coffee. It\'ll help me wake up properly!', score: 90 }
        ],
        acceptableKeywords: ['brilliant', 'coffee', 'great', 'perfect', 'agenda', 'enjoyed']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Accept the coffee offer', 'Be friendly']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'How do you take yours? Milk? Sugar?',
        hints: ['State your preference', 'Thank them'],
        expectedResponses: [
          { text: 'Just black for me, please. No sugar. Thank you very much.', score: 100 },
          { text: 'White with one sugar, please. That\'s very kind of you.', score: 95 },
          { text: 'Milk, no sugar please. Thanks!', score: 90 }
        ],
        acceptableKeywords: ['black', 'white', 'milk', 'sugar', 'please', 'thank']
      }
    ],
    vocabulary: ['small talk', 'sights', 'Premier League', 'family day out', 'grab a coffee', 'agenda'],
    chunks: ['Did you have a good weekend?', 'That sounds lovely', 'What about you?', 'Shall we grab a coffee?']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 8
  // ==========================================
  {
    id: 'phone_order_confirmation_001',
    title: 'Confirming an Order by Phone',
    titleTurkish: 'Telefonla Sipariş Onayı',
    setting: 'You\'re calling a UK client to confirm the details of their recent trailer order before production begins.',
    settingTurkish: 'Üretim başlamadan önce İngiliz bir müşterinin son römork siparişinin detaylarını onaylamak için arıyorsunuz.',
    difficulty: 'B1',
    category: 'phone-call',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Confirm order specifications',
        descriptionTurkish: 'Sipariş özelliklerini onaylayın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Clarify any unclear details',
        descriptionTurkish: 'Belirsiz detayları netleştirin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Confirm delivery timeline',
        descriptionTurkish: 'Teslimat zamanlamasını onaylayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Hello, Mike Stevens speaking.',
        hints: ['Introduce yourself', 'State the purpose of your call'],
        expectedResponses: [
          { text: 'Good morning, Mike. This is {{USER_NAME}} from STU Trailer. I\'m calling to confirm the details of your order before we start production.', score: 100 },
          {
            text: 'Morning Mike. {{USER_NAME}} here from STU Trailer. I just wanted to go through your order to make sure everything is correct.', score: 95
          },
          { text: 'Hello Mike. It\'s {{USER_NAME}} from STU. I\'m calling about your recent order - just need to confirm a few things.', score: 90 }
        ],
        acceptableKeywords: ['{{USER_NAME}}', 'STU', 'order', 'confirm', 'production', 'details']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Introduce yourself', 'Explain why you\'re calling']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Ah yes, perfect timing. Go ahead.',
        hints: ['Confirm the main specifications', 'Be systematic'],
        expectedResponses: [
          { text: 'So we have 10 curtainsiders, 13.6 metres, with BPW axles and disc brakes. The colour is RAL 9010 white. Is that all correct?', score: 100 },
          { text: 'I\'ve got 10 units, curtainsider type, 13.6 metre length, white finish RAL 9010, BPW running gear with disc brakes. Can you confirm?', score: 95 },
          { text: 'Your order shows 10 curtainsiders in white with disc brakes. Does that match your requirements?', score: 85 }
        ],
        acceptableKeywords: ['10', 'curtainsiders', '13.6', 'BPW', 'disc brakes', 'white', 'RAL']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['List the specifications', 'Ask for confirmation']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'That\'s correct, except we\'d like to change the colour to RAL 5010 blue. Is that possible at this stage?',
        hints: ['Confirm you can accommodate the change', 'Note the new requirement'],
        expectedResponses: [
          { text: 'Yes, that\'s no problem at all. I\'ll update the order to RAL 5010 blue. Any other changes you\'d like to make?', score: 100 },
          { text: 'Absolutely, we can do that. RAL 5010 blue, noted. The price remains the same. Anything else?', score: 95 },
          { text: 'Sure, we can change it to blue. I\'ll make that amendment now. Is everything else okay?', score: 90 }
        ],
        acceptableKeywords: ['yes', 'no problem', 'update', 'blue', '5010', 'change', 'noted']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Confirm you can make the change', 'Ask about other changes']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'No, that\'s everything. When can we expect delivery?',
        hints: ['Confirm the delivery schedule', 'Be specific'],
        expectedResponses: [
          { text: 'Production will take 8 weeks from today. So delivery should be around the 15th of March. We\'ll confirm the exact date once shipping is arranged.', score: 100 },
          { text: 'We\'re looking at 8 weeks for production, so mid-March for delivery. I\'ll send you a confirmed date by email next week.', score: 95 },
          { text: 'Expect delivery in about 8 weeks, around mid-March. I\'ll keep you updated on progress.', score: 90 }
        ],
        acceptableKeywords: ['8 weeks', 'March', 'delivery', 'production', 'confirm', 'date']
      }
    ],
    vocabulary: ['order confirmation', 'specifications', 'RAL colour', 'running gear', 'amendment', 'production schedule'],
    chunks: ['I\'m calling to confirm...', 'Is that all correct?', 'That\'s no problem at all', 'I\'ll keep you updated']
  },

  {
    id: 'factory_production_capacity_001',
    title: 'Discussing Production Capacity',
    titleTurkish: 'Üretim Kapasitesi Görüşmesi',
    setting: 'A potential UK client is asking about your factory\'s production capacity during their visit.',
    settingTurkish: 'Potansiyel bir İngiliz müşteri, fabrika ziyareti sırasında üretim kapasitenizi soruyor.',
    difficulty: 'B2',
    category: 'factory-visit',
    duration: 6,
    objectives: [
      {
        id: 'obj_1',
        description: 'Explain your production capacity clearly',
        descriptionTurkish: 'Üretim kapasitenizi açıkça anlatın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Discuss lead times',
        descriptionTurkish: 'Teslim sürelerini tartışın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Address concerns about meeting demand',
        descriptionTurkish: 'Talep karşılama endişelerini giderin',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'This is an impressive facility. What\'s your annual production capacity here?',
        hints: ['Give specific numbers', 'Mention different product types'],
        expectedResponses: [
          { text: 'Thank you. Our annual capacity is around 2,500 units. That breaks down to roughly 150 curtainsiders, 50 tippers, and 30 specialized vehicles per month.', score: 100 },
          { text: 'We can produce approximately 2,500 trailers per year across all types. Currently we\'re running at about 80% capacity.', score: 95 },
          { text: 'Our capacity is 2,500 units annually. We have flexibility to increase this if needed by adding shifts.', score: 90 }
        ],
        acceptableKeywords: ['2,500', 'capacity', 'units', 'month', 'annually', 'curtainsiders']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['State your capacity', 'Give specific numbers']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'That\'s substantial. If we were to place a large order - say 100 units - what would the lead time be?',
        hints: ['Calculate realistically', 'Explain factors that affect timing'],
        expectedResponses: [
          { text: 'For 100 units, we\'d be looking at 12 to 14 weeks from order confirmation. We could potentially do phased deliveries - 50 units at week 10, and 50 at week 14.', score: 100 },
          { text: 'A hundred units would take approximately 3 months. We\'d schedule it across our production line to ensure quality isn\'t compromised.', score: 95 },
          { text: 'Lead time for 100 units would be around 12 weeks. We can discuss delivery in batches if that helps your planning.', score: 90 }
        ],
        acceptableKeywords: ['weeks', 'months', 'lead time', 'deliveries', 'batches', 'phased']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Give realistic lead time', 'Mention phased delivery option']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'What if we needed to rush an order? Can you expedite production if we pay extra?',
        hints: ['Explain your options', 'Be honest about limitations'],
        expectedResponses: [
          { text: 'We can offer expedited production by running weekend shifts. That could reduce lead time by 2-3 weeks. There would be an additional charge of around 5% for overtime costs.', score: 100 },
          { text: 'Yes, we can expedite orders. We\'d need to add overtime shifts, which increases costs by about 5%, but we could cut 2-3 weeks off the schedule.', score: 95 },
          { text: 'Rush orders are possible with extra shifts. It adds some cost but can speed things up by a few weeks.', score: 85 }
        ],
        acceptableKeywords: ['expedited', 'weekend', 'shifts', 'overtime', 'weeks', 'cost', '5%']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Explain expedite options', 'Mention additional costs']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Good to know. And your workforce - do you have enough skilled workers to maintain quality at high volumes?',
        hints: ['Reassure about quality and workforce', 'Mention training'],
        expectedResponses: [
          { text: 'Absolutely. We have 350 employees, including 120 certified welders. All staff go through our in-house training programme, and we maintain ISO 9001 standards regardless of volume.', score: 100 },
          { text: 'Yes, quality is consistent at all volumes. Our team is fully trained and certified. We\'ve invested heavily in workforce development.', score: 95 },
          { text: 'We have a skilled team of over 300 workers. Quality checks happen at every stage, so high volume doesn\'t affect our standards.', score: 90 }
        ],
        acceptableKeywords: ['employees', 'certified', 'welders', 'training', 'ISO', 'quality', 'standards']
      }
    ],
    vocabulary: ['production capacity', 'lead time', 'expedited', 'phased delivery', 'overtime', 'workforce'],
    chunks: ['Our annual capacity is...', 'We\'d be looking at...weeks', 'We can offer expedited production', 'Quality is consistent at all volumes']
  },

  {
    id: 'airport_car_rental_001',
    title: 'Renting a Car at the Airport',
    titleTurkish: 'Havalimanında Araba Kiralama',
    setting: 'You\'ve arrived at Birmingham Airport and need to rent a car for your business trip around the Midlands.',
    settingTurkish: 'Birmingham Havalimanı\'na vardınız ve Midlands bölgesindeki iş geziniz için araba kiralamanız gerekiyor.',
    difficulty: 'B1',
    category: 'airport',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Collect your pre-booked rental car',
        descriptionTurkish: 'Önceden rezerve edilmiş kiralık aracı teslim alın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Understand the rental terms',
        descriptionTurkish: 'Kiralama şartlarını anlayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Ask about GPS and fuel policy',
        descriptionTurkish: 'GPS ve yakıt politikası hakkında sorun',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good afternoon! Welcome to Europcar. Do you have a reservation?',
        hints: ['Confirm your booking', 'Provide your name'],
        expectedResponses: [
          { text: 'Good afternoon. Yes, I have a booking under my name. I reserved a mid-size car for four days.', score: 100 },
          { text: 'Hello. Yes, the reservation is under my name. I booked online for four days.', score: 95 },
          { text: 'Hi. Yes, I booked a car. Name is {{USER_NAME}}, for four days.', score: 85 }
        ],
        acceptableKeywords: ['booking', 'reservation', '{{USER_NAME}}', 'four days', 'car']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Confirm your reservation', 'Give your name']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Yes, here it is. A Ford Focus for four days, returning Sunday. Can I see your driving licence and a credit card for the deposit?',
        hints: ['Provide the documents', 'Ask any questions'],
        expectedResponses: [
          { text: 'Of course, here they are. My licence is Turkish but I have an International Driving Permit as well. Do you need both?', score: 100 },
          { text: 'Here\'s my licence and credit card. I have an international permit too if you need it.', score: 95 },
          { text: 'Sure. Here you go. Is my Turkish licence okay, or do you need the international one?', score: 90 }
        ],
        acceptableKeywords: ['licence', 'credit card', 'Turkish', 'international', 'permit']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Hand over documents', 'Mention international permit']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Both would be great, thank you. Now, would you like to add a GPS navigation system? It\'s £8 per day.',
        hints: ['Decide on GPS', 'Ask about alternatives'],
        expectedResponses: [
          { text: 'Yes, I\'ll take the GPS please. I\'m not familiar with the roads here. Does it have UK maps pre-loaded?', score: 100 },
          { text: 'I\'ll add the GPS, thanks. I\'ll be driving to several different locations. Is it easy to use?', score: 95 },
          { text: 'Yes please, I\'ll need the GPS. I have meetings in different cities.', score: 90 }
        ],
        acceptableKeywords: ['GPS', 'yes', 'please', 'navigation', 'maps', 'driving']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Decide on GPS', 'Ask about it']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Yes, all UK and European maps. One last thing - the fuel policy is full-to-full. Please return it with a full tank to avoid refuelling charges. Any questions?',
        hints: ['Confirm you understand', 'Ask about return location'],
        expectedResponses: [
          { text: 'Understood - return with a full tank. Where exactly do I return the car on Sunday? Is it the same location?', score: 100 },
          { text: 'Full-to-full, got it. And where\'s the nearest petrol station to the airport for when I return it?', score: 95 },
          { text: 'No problem. Full tank on return. What time do I need to bring it back on Sunday?', score: 90 }
        ],
        acceptableKeywords: ['full tank', 'return', 'understood', 'Sunday', 'location', 'petrol']
      }
    ],
    vocabulary: ['reservation', 'driving licence', 'International Driving Permit', 'GPS navigation', 'fuel policy', 'full-to-full', 'deposit'],
    chunks: ['I have a booking under...', 'Do you need both?', 'I\'ll take the...please', 'Where exactly do I return...']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 9
  // ==========================================
  {
    id: 'technical_demo_001',
    title: 'Product Demonstration',
    titleTurkish: 'Ürün Demonstrasyonu',
    setting: 'You\'re demonstrating a trailer\'s features to potential buyers at a trade show in the UK.',
    settingTurkish: 'İngiltere\'deki bir ticaret fuarında potansiyel alıcılara bir römorkun özelliklerini gösteriyorsunuz.',
    difficulty: 'B2',
    category: 'technical-presentation',
    duration: 6,
    objectives: [
      {
        id: 'obj_1',
        description: 'Demonstrate key features effectively',
        descriptionTurkish: 'Temel özellikleri etkili bir şekilde gösterin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Explain technical benefits',
        descriptionTurkish: 'Teknik faydaları açıklayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Handle questions during the demo',
        descriptionTurkish: 'Demo sırasında soruları cevaplayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'This curtainsider looks well-built. Can you show us how the sliding roof works?',
        hints: ['Demonstrate the feature', 'Explain the mechanism'],
        expectedResponses: [
          { text: 'Of course. Watch this - the roof slides back in about 30 seconds using this handle here. It\'s a single-person operation, no tools required.', score: 100 },
          { text: 'Certainly. Let me show you. You simply release this catch and slide it back. One person can do it easily in under a minute.', score: 95 },
          { text: 'Yes, I\'ll demonstrate. See how smooth it is? The sliding mechanism is German-engineered for durability.', score: 90 }
        ],
        acceptableKeywords: ['roof', 'slides', 'seconds', 'handle', 'operation', 'demonstrate']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Show the feature', 'Explain how it works']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'That is smooth. What about the curtain tensioning system? We\'ve had problems with loose curtains on other trailers.',
        hints: ['Explain the tensioning system', 'Address their concern'],
        expectedResponses: [
          { text: 'Good question. We use a ratchet tensioning system here at the bottom. You can see these buckles - they keep the curtain tight even after years of use. Let me show you how to adjust it.', score: 100 },
          { text: 'Our curtains use a heavy-duty ratchet system. These tensioners here maintain pressure automatically. Very reliable - we rarely get complaints.', score: 95 },
          { text: 'We addressed that with this ratchet system. Pull here to tighten. It\'s much more secure than the older buckle designs.', score: 90 }
        ],
        acceptableKeywords: ['ratchet', 'tensioning', 'buckles', 'tight', 'adjust', 'secure']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Explain the system', 'Demonstrate if possible']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Impressive. And the floor - is it suitable for forklift loading?',
        hints: ['Confirm floor strength', 'Give specifications'],
        expectedResponses: [
          { text: 'Absolutely. The floor is 28mm hardwood on galvanised steel crossmembers. It\'s rated for forklift traffic up to 7 tonnes axle load. We also offer optional aluminium floors for weight savings.', score: 100 },
          { text: 'Yes, it\'s designed for heavy forklift use. Hardwood floor, steel subframe. Can handle 7-tonne forklifts without any issues.', score: 95 },
          { text: 'The floor is forklift-rated, yes. 28mm hardwood, very robust. We\'ve tested it extensively.', score: 90 }
        ],
        acceptableKeywords: ['floor', 'hardwood', 'forklift', 'tonnes', 'steel', 'rated']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Confirm forklift suitability', 'Give specifications']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Very thorough. Do you have any literature we can take away? Spec sheets, pricing?',
        hints: ['Offer materials', 'Suggest next steps'],
        expectedResponses: [
          { text: 'Yes, here\'s our product brochure with full specifications. I\'ll also give you my card - email me and I\'ll send you a detailed quotation tailored to your needs.', score: 100 },
          { text: 'Absolutely. Take this brochure. For pricing, I\'d need to know your specific requirements. Let me get your contact details and I\'ll follow up.', score: 95 },
          { text: 'Here\'s our catalogue. Prices depend on configuration. Give me your email and I\'ll send a quote this week.', score: 90 }
        ],
        acceptableKeywords: ['brochure', 'specifications', 'quotation', 'card', 'email', 'catalogue']
      }
    ],
    vocabulary: ['sliding roof', 'curtain tensioning', 'ratchet system', 'crossmembers', 'galvanised', 'spec sheet'],
    chunks: ['Let me show you...', 'It\'s a single-person operation', 'It\'s rated for...', 'I\'ll send you a detailed quotation']
  },

  {
    id: 'small_talk_delays_001',
    title: 'Chatting About Travel Delays',
    titleTurkish: 'Seyahat Gecikmeleri Hakkında Sohbet',
    setting: 'Your meeting was delayed because the client was stuck in traffic. You chat while waiting for others to arrive.',
    settingTurkish: 'Müşteri trafikte kaldığı için toplantı ertelendi. Diğerlerini beklerken sohbet ediyorsunuz.',
    difficulty: 'B1',
    category: 'small-talk',
    duration: 4,
    objectives: [
      {
        id: 'obj_1',
        description: 'Sympathise about travel problems',
        descriptionTurkish: 'Seyahat sorunları hakkında empati kurun',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Share your own travel experiences',
        descriptionTurkish: 'Kendi seyahat deneyimlerinizi paylaşın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Keep the conversation light',
        descriptionTurkish: 'Sohbeti hafif tutun',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Sorry I\'m late. The M6 was absolutely dreadful this morning. Roadworks everywhere!',
        hints: ['Show understanding', 'Sympathise'],
        expectedResponses: [
          { text: 'No problem at all. These things happen. The M6 does have a reputation, doesn\'t it? I hope it wasn\'t too stressful.', score: 100 },
          { text: 'Don\'t worry about it. Traffic can be unpredictable. I\'ve heard the M6 is notorious for delays.', score: 95 },
          { text: 'That\'s fine. Roadworks are a nightmare. At least you made it safely.', score: 90 }
        ],
        acceptableKeywords: ['no problem', 'happen', 'traffic', 'M6', 'delays', 'safely']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Show understanding', 'Don\'t make them feel bad']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'It is notorious! Do you drive much when you\'re here, or do you prefer the train?',
        hints: ['Share your preference', 'Explain why'],
        expectedResponses: [
          { text: 'I usually rent a car for flexibility, but I have to admit the trains are very efficient here. I took the train to London last month - much more relaxing than driving.', score: 100 },
          { text: 'A bit of both, actually. The train is great for London, but for visiting clients outside the city, a car is more practical.', score: 95 },
          { text: 'I prefer driving - gives me more freedom. But UK motorways can be challenging during rush hour!', score: 90 }
        ],
        acceptableKeywords: ['car', 'train', 'driving', 'flexibility', 'practical', 'London']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Share your transport preference', 'Give reasons']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'The trains are good, yes. How do you find driving on the left? Must be quite an adjustment!',
        hints: ['Be honest about the challenge', 'Keep it light-hearted'],
        expectedResponses: [
          { text: 'It was strange at first, especially roundabouts! But I\'m used to it now. The GPS helps a lot - I just follow the instructions.', score: 100 },
          { text: 'Ha! The first time was terrifying. I kept going to the wrong side of the car! Now it feels almost natural.', score: 95 },
          { text: 'I\'ve got used to it over the years. The hardest part is remembering which way to look at pedestrian crossings.', score: 90 }
        ],
        acceptableKeywords: ['strange', 'roundabouts', 'used to', 'GPS', 'first', 'natural']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Be honest', 'Add some humour if appropriate']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Ha! I can imagine. Oh, looks like the others are arriving now. Shall we head to the meeting room?',
        hints: ['Agree to move', 'End the small talk naturally'],
        expectedResponses: [
          { text: 'Yes, let\'s go. It was nice chatting. At least the delay gave us a chance to catch up!', score: 100 },
          { text: 'Perfect timing. After you. Thanks for the chat - always good to hear about the local roads!', score: 95 },
          { text: 'Yes, let\'s get started. Good to chat with you.', score: 85 }
        ],
        acceptableKeywords: ['yes', 'go', 'nice', 'chatting', 'started', 'perfect']
      }
    ],
    vocabulary: ['dreadful', 'roadworks', 'notorious', 'rush hour', 'roundabouts', 'adjustment'],
    chunks: ['These things happen', 'I have to admit...', 'I\'ve got used to it', 'At least the delay gave us a chance to...']
  },

  {
    id: 'hotel_room_service_001',
    title: 'Ordering Room Service',
    titleTurkish: 'Oda Servisi Siparişi',
    setting: 'After a long day of meetings, you\'re too tired to go out. You call room service to order dinner.',
    settingTurkish: 'Uzun bir toplantı gününün ardından dışarı çıkamayacak kadar yorgunsunuz. Akşam yemeği için oda servisi arıyorsunuz.',
    difficulty: 'A2',
    category: 'hotel',
    duration: 4,
    objectives: [
      {
        id: 'obj_1',
        description: 'Order food and drinks clearly',
        descriptionTurkish: 'Yiyecek ve içecekleri net sipariş edin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Make special requests',
        descriptionTurkish: 'Özel isteklerde bulunun',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Confirm delivery time',
        descriptionTurkish: 'Teslimat süresini onaylayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Room service, good evening. How can I help you?',
        hints: ['State your room number', 'Say you want to order'],
        expectedResponses: [
          { text: 'Good evening. This is room 412. I\'d like to order some dinner, please.', score: 100 },
          { text: 'Hello. Room 412 here. Could I order something to eat?', score: 95 },
          { text: 'Evening. I\'m in room 412 and I\'d like to order room service.', score: 90 }
        ],
        acceptableKeywords: ['room', '412', 'order', 'dinner', 'eat', 'please']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Give room number', 'Say you want to order']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Of course. What would you like this evening?',
        hints: ['Order your food', 'Be specific'],
        expectedResponses: [
          { text: 'I\'d like the grilled chicken with vegetables, please. And could I also have a side salad?', score: 100 },
          { text: 'Could I have the club sandwich and some chips? And a bottle of still water, please.', score: 95 },
          { text: 'I\'ll have the pasta with tomato sauce. Is the portion size large?', score: 90 }
        ],
        acceptableKeywords: ['chicken', 'sandwich', 'pasta', 'salad', 'please', 'water']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Order your main course', 'Add sides or drinks']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Certainly. The grilled chicken with vegetables and a side salad. Any drinks with that?',
        hints: ['Order a drink', 'Ask about options if needed'],
        expectedResponses: [
          { text: 'Yes, a pot of English breakfast tea, please. And could I have some milk on the side?', score: 100 },
          { text: 'Just some sparkling water, please. Oh, and do you have any fresh fruit for dessert?', score: 95 },
          { text: 'A bottle of water, still please. That\'s all.', score: 90 }
        ],
        acceptableKeywords: ['tea', 'water', 'milk', 'sparkling', 'still', 'please']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Order drinks', 'Ask any questions']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Of course. So that\'s grilled chicken, side salad, and tea with milk. It\'ll be with you in about 25 minutes. Is there anything else?',
        hints: ['Confirm the order', 'Thank them'],
        expectedResponses: [
          { text: 'That\'s perfect, thank you. 25 minutes is fine. Could you add it to my room bill?', score: 100 },
          { text: 'No, that\'s everything. Thank you. Just charge it to the room, please.', score: 95 },
          { text: 'That\'s all, thanks. I\'ll be waiting.', score: 85 }
        ],
        acceptableKeywords: ['perfect', 'thank', 'room', 'bill', 'everything', 'charge']
      }
    ],
    vocabulary: ['room service', 'side salad', 'still water', 'sparkling water', 'room bill', 'pot of tea'],
    chunks: ['I\'d like to order...', 'Could I also have...', 'Charge it to the room', 'That\'s perfect, thank you']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 10
  // ==========================================
  {
    id: 'phone_support_call_001',
    title: 'Following Up on Warranty',
    titleTurkish: 'Garanti Takibi',
    setting: 'A UK customer calls you about a warranty claim they submitted last week. You need to provide an update.',
    settingTurkish: 'Bir İngiliz müşteri geçen hafta gönderdiği garanti talebi hakkında sizi arıyor. Güncelleme sağlamanız gerekiyor.',
    difficulty: 'B1',
    category: 'phone-call',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Acknowledge the customer\'s concern',
        descriptionTurkish: 'Müşterinin endişesini kabul edin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Provide a clear status update',
        descriptionTurkish: 'Net bir durum güncellemesi sağlayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Offer a solution or next steps',
        descriptionTurkish: 'Bir çözüm veya sonraki adımları sunun',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Hello, this is James from Fleet Solutions. I submitted a warranty claim for one of our trailers last week and haven\'t heard back. Can you help?',
        hints: ['Apologise for the delay', 'Ask for details'],
        expectedResponses: [
          { text: 'Good morning, James. I apologise for the delay. Let me look into that for you right away. Could you give me the claim reference number?', score: 100 },
          { text: 'Hello James. Sorry you haven\'t had an update. I\'ll check the system now. What\'s your reference number, please?', score: 95 },
          { text: 'Hi James. Sorry about that. Let me find your claim. Do you have the reference number?', score: 90 }
        ],
        acceptableKeywords: ['apologise', 'sorry', 'delay', 'check', 'reference', 'number']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Apologise for the wait', 'Ask for reference number']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'It\'s WC-2024-0847. The issue is with the rear door hinges - they\'re not closing properly.',
        hints: ['Confirm you found the claim', 'Explain the status'],
        expectedResponses: [
          { text: 'Thank you. Yes, I can see your claim here. It\'s been approved and we\'ve ordered the replacement hinges. They should arrive at your depot within 5 working days.', score: 100 },
          { text: 'Right, I\'ve found it. Good news - your claim was approved on Monday. The parts have been dispatched and should reach you by Friday.', score: 95 },
          { text: 'Got it. Let me see... Yes, the claim is approved. New hinges are on the way. Delivery within a week.', score: 90 }
        ],
        acceptableKeywords: ['claim', 'approved', 'hinges', 'replacement', 'days', 'dispatched']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Confirm you found it', 'Give the status update']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'That\'s a relief. Will someone come to fit them, or do we need to arrange that ourselves?',
        hints: ['Explain the installation process', 'Offer assistance'],
        expectedResponses: [
          { text: 'We can arrange for one of our service partners in your area to fit them. There\'s no charge - it\'s all covered under warranty. Shall I book that now?', score: 100 },
          { text: 'The warranty includes installation. I\'ll arrange for a technician to visit once the parts arrive. Would mornings or afternoons suit you better?', score: 95 },
          { text: 'We\'ll send a technician to install them. It\'s included in the warranty. When would be convenient for you?', score: 90 }
        ],
        acceptableKeywords: ['service', 'fit', 'charge', 'warranty', 'technician', 'arrange']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Explain installation is included', 'Offer to arrange it']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'That\'s excellent service, thank you. Mornings work better for us. Can you send me a confirmation email?',
        hints: ['Confirm the arrangement', 'Promise to send confirmation'],
        expectedResponses: [
          { text: 'Absolutely. I\'ll book a morning slot and send you a confirmation email with all the details today. Is there anything else I can help with?', score: 100 },
          { text: 'Of course. I\'ll email you the confirmation within the hour. You\'ll receive a text reminder the day before as well.', score: 95 },
          { text: 'Yes, I\'ll send that right after this call. Morning appointment confirmed. Thanks for your patience, James.', score: 90 }
        ],
        acceptableKeywords: ['book', 'email', 'confirmation', 'details', 'morning', 'send']
      }
    ],
    vocabulary: ['warranty claim', 'reference number', 'replacement parts', 'service partner', 'depot', 'technician'],
    chunks: ['I apologise for the delay', 'Let me look into that', 'It\'s all covered under warranty', 'Shall I book that now?']
  },

  {
    id: 'factory_inspection_001',
    title: 'Quality Inspection Visit',
    titleTurkish: 'Kalite Denetim Ziyareti',
    setting: 'A UK client visits your factory to conduct a quality inspection before placing a large order.',
    settingTurkish: 'Bir İngiliz müşteri büyük bir sipariş vermeden önce kalite denetimi yapmak için fabrikanızı ziyaret ediyor.',
    difficulty: 'B2',
    category: 'factory-visit',
    duration: 7,
    objectives: [
      {
        id: 'obj_1',
        description: 'Welcome the inspector professionally',
        descriptionTurkish: 'Denetçiyi profesyonelce karşılayın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Explain quality control processes',
        descriptionTurkish: 'Kalite kontrol süreçlerini açıklayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Address any concerns confidently',
        descriptionTurkish: 'Endişeleri güvenle ele alın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good morning. I\'m Sarah Mitchell, Quality Assurance Manager from TransportCo. We\'re here for the factory inspection we arranged.',
        hints: ['Welcome them warmly', 'Introduce yourself'],
        expectedResponses: [
          { text: 'Good morning, Ms Mitchell. Welcome to STU Trailer. I\'m {{USER_NAME}} from the quality department. We\'ve been expecting you. Let me show you around.', score: 100 },
          { text: 'Welcome! I\'m {{USER_NAME}}, I\'ll be your guide today. We\'re delighted to have you here. Shall we start with the production line?', score: 95 },
          { text: 'Good morning. Welcome to our facility. I\'m {{USER_NAME}}. We\'re ready for the inspection. Where would you like to begin?', score: 90 }
        ],
        acceptableKeywords: ['welcome', '{{USER_NAME}}', 'quality', 'expecting', 'show', 'begin']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Welcome them', 'Introduce yourself and your role']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Thank you. I\'d like to see your welding stations first, and understand your quality control checkpoints. How do you ensure weld consistency?',
        hints: ['Explain the welding QC process', 'Be specific'],
        expectedResponses: [
          { text: 'Of course. We use certified welders and every weld is inspected twice - first by the welder, then by our QC team. We also conduct random X-ray tests on critical joints. Let me show you.', score: 100 },
          { text: 'We have a multi-stage inspection process. All welders are EN certified, and we test 100% of structural welds. We also do periodic destructive testing on sample joints.', score: 95 },
          { text: 'Our welders are all certified. We inspect every weld visually and use ultrasonic testing on the chassis welds. Follow me to the welding area.', score: 90 }
        ],
        acceptableKeywords: ['certified', 'welders', 'inspected', 'QC', 'testing', 'joints']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Explain the welding quality process', 'Mention certifications']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Impressive. I notice you\'re using robotic welding here. What happens if the robot detects an anomaly?',
        hints: ['Explain the error detection system', 'Show the safety measures'],
        expectedResponses: [
          { text: 'Good question. The robot stops automatically and alerts the operator. The faulty section is marked and manually re-welded by a senior technician. Nothing proceeds without sign-off from QC.', score: 100 },
          { text: 'If there\'s any irregularity, the system flags it immediately. The part is removed from the line and inspected. We don\'t compromise on safety.', score: 95 },
          { text: 'The robot has sensors that detect problems. When that happens, we stop and fix it manually. All repairs are documented.', score: 90 }
        ],
        acceptableKeywords: ['stops', 'alerts', 'marked', 'inspected', 'QC', 'documented']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Explain the error handling process', 'Emphasise quality standards']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Very thorough. One more thing - can I see your traceability records? We need to ensure full component traceability for our fleet.',
        hints: ['Confirm traceability system exists', 'Explain how it works'],
        expectedResponses: [
          { text: 'Absolutely. Every trailer has a unique build file with full traceability - from steel batch numbers to component suppliers. I\'ll show you the system and provide sample documentation.', score: 100 },
          { text: 'Yes, we have complete traceability. Each chassis is laser-etched with a serial number linked to all component records. I can show you the database now.', score: 95 },
          { text: 'Of course. We track everything from raw materials to final assembly. All records are kept for 15 years. Let me pull up an example.', score: 90 }
        ],
        acceptableKeywords: ['traceability', 'build file', 'serial', 'records', 'component', 'documentation']
      }
    ],
    vocabulary: ['quality assurance', 'weld consistency', 'QC checkpoints', 'destructive testing', 'traceability', 'anomaly'],
    chunks: ['We\'ve been expecting you', 'Let me show you...', 'We don\'t compromise on...', 'I\'ll provide sample documentation']
  },

  {
    id: 'restaurant_business_lunch_001',
    title: 'Hosting a Business Lunch',
    titleTurkish: 'İş Yemeği Ev Sahipliği',
    setting: 'You\'re hosting a UK client for a business lunch at a restaurant near your hotel.',
    settingTurkish: 'Otelinizin yakınındaki bir restoranda bir İngiliz müşteriye iş yemeği ev sahipliği yapıyorsunuz.',
    difficulty: 'B1',
    category: 'restaurant',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Make your guest feel welcome',
        descriptionTurkish: 'Misafirinizi hoş karşılayın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Guide the ordering process as host',
        descriptionTurkish: 'Ev sahibi olarak sipariş sürecini yönlendirin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Handle the bill professionally',
        descriptionTurkish: 'Hesabı profesyonelce halledin',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'This is a lovely restaurant. Thank you for the invitation.',
        hints: ['Respond graciously', 'Explain why you chose it'],
        expectedResponses: [
          { text: 'You\'re very welcome. I\'ve heard good things about this place - apparently their fish is excellent. I thought it would be nice to discuss our project over a proper lunch.', score: 100 },
          { text: 'My pleasure. The hotel concierge recommended it. They specialise in British cuisine. Shall we look at the menu?', score: 95 },
          { text: 'Glad you like it. I wanted somewhere quiet where we could talk. What would you like to drink?', score: 90 }
        ],
        acceptableKeywords: ['welcome', 'recommended', 'excellent', 'lunch', 'menu', 'drink']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Thank them', 'Explain your choice of restaurant']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'The fish does look tempting. What are you going to have?',
        hints: ['Share your choice', 'Ask if they have questions about the menu'],
        expectedResponses: [
          { text: 'I think I\'ll try the grilled sea bass. But please, order whatever you like - the lamb looks wonderful too. Would you like some wine, or perhaps sparkling water?', score: 100 },
          { text: 'I\'m leaning towards the fish and chips, actually. A British classic! Feel free to order anything you fancy. Should we get a bottle of water for the table?', score: 95 },
          { text: 'The salmon for me, I think. What about you? And please don\'t worry about the prices - this is on STU Trailer.', score: 90 }
        ],
        acceptableKeywords: ['sea bass', 'salmon', 'fish', 'order', 'wine', 'water']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Say what you\'re ordering', 'Encourage them to order freely']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Sparkling water would be lovely. This is very generous of you. Shall we discuss the project details while we wait for the food?',
        hints: ['Agree to discuss business', 'Make a smooth transition'],
        expectedResponses: [
          { text: 'Absolutely. So, regarding the delivery schedule we discussed - I\'ve spoken to our production team and we can bring forward the first batch by two weeks.', score: 100 },
          { text: 'Yes, let\'s. I wanted to update you on the pricing. We\'ve managed to reduce the unit cost by 3% thanks to our new production line.', score: 95 },
          { text: 'Good idea. I have some good news about the specifications you requested. We can include the extra features at no additional cost.', score: 90 }
        ],
        acceptableKeywords: ['delivery', 'production', 'pricing', 'specifications', 'schedule', 'update']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Agree to talk business', 'Share some positive news']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'That\'s excellent news! Oh, the food is here. This looks delicious. Shall we continue our discussion after lunch?',
        hints: ['Agree', 'Enjoy the meal'],
        expectedResponses: [
          { text: 'Yes, let\'s enjoy the meal first. We can go over the contract details back at the office. Please, dig in - I hope you enjoy it!', score: 100 },
          { text: 'Of course. Business can wait - let\'s enjoy this wonderful food. We\'ll have plenty of time to discuss the details later.', score: 95 },
          { text: 'Good idea. The food looks fantastic. Please, start - and let me know if you\'d like anything else.', score: 90 }
        ],
        acceptableKeywords: ['enjoy', 'meal', 'contract', 'details', 'later', 'dig in']
      }
    ],
    vocabulary: ['invitation', 'specialise', 'tempting', 'generous', 'dig in', 'contract details'],
    chunks: ['I\'ve heard good things about...', 'Please, order whatever you like', 'This is on...', 'Shall we continue our discussion...']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 11
  // ==========================================
  {
    id: 'business_meeting_intro_001',
    title: 'Introducing Your Company',
    titleTurkish: 'Şirketinizi Tanıtma',
    setting: 'You\'re at a first meeting with a potential UK partner. You need to introduce your company and its capabilities.',
    settingTurkish: 'Potansiyel bir İngiliz ortakla ilk toplantıdasınız. Şirketinizi ve yeteneklerini tanıtmanız gerekiyor.',
    difficulty: 'B1',
    category: 'business-meeting',
    duration: 6,
    objectives: [
      {
        id: 'obj_1',
        description: 'Present your company professionally',
        descriptionTurkish: 'Şirketinizi profesyonelce tanıtın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Highlight key strengths and capabilities',
        descriptionTurkish: 'Temel güçlü yönleri ve yetenekleri vurgulayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Answer questions about your business',
        descriptionTurkish: 'İşiniz hakkındaki soruları cevaplayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Thank you for coming in today. Before we discuss potential collaboration, could you tell us a bit about STU Trailer?',
        hints: ['Give a brief company overview', 'Mention key facts'],
        expectedResponses: [
          { text: 'Of course. STU Trailer was founded in 1995 and we\'re now one of the leading trailer manufacturers in Turkey. We produce around 3,000 units annually, primarily curtainsiders and refrigerated trailers.', score: 100 },
          { text: 'Certainly. We\'re a Turkish manufacturer specialising in semi-trailers. We\'ve been in business for nearly 30 years and export to over 20 countries across Europe and the Middle East.', score: 95 },
          { text: 'Yes. STU Trailer is based in Istanbul. We manufacture curtainsiders, flatbeds, and reefers. We have about 500 employees.', score: 90 }
        ],
        acceptableKeywords: ['founded', 'manufacturer', 'trailers', 'Turkey', 'units', 'export']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Introduce your company', 'Mention size and products']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Impressive. What would you say sets you apart from other manufacturers in the market?',
        hints: ['Highlight your competitive advantages', 'Be specific'],
        expectedResponses: [
          { text: 'I\'d say it\'s our combination of quality and value. We use German and Italian components, but our labour costs are lower, so we can offer premium quality at competitive prices. We also have very short lead times.', score: 100 },
          { text: 'Our flexibility is a key differentiator. We can customise trailers to exact specifications and deliver within 8 weeks. We also offer comprehensive after-sales support across Europe.', score: 95 },
          { text: 'Quality and reliability. All our products are TÜV certified and we have a 3-year warranty on the chassis. Our repeat customer rate is over 70%.', score: 90 }
        ],
        acceptableKeywords: ['quality', 'competitive', 'components', 'flexibility', 'certified', 'warranty']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Explain your competitive advantages', 'Give specific examples']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'That\'s good to know. Do you have any existing presence in the UK market?',
        hints: ['Be honest about your UK experience', 'Show your interest'],
        expectedResponses: [
          { text: 'We\'ve had some success with individual orders, but we\'re looking to establish a stronger presence. That\'s why we\'re here - we believe a local partnership would help us serve UK customers better.', score: 100 },
          { text: 'Currently limited, to be honest. We\'ve sold a few units through trade shows, but we recognise we need local representation to grow. We\'re committed to investing in the UK market.', score: 95 },
          { text: 'Not yet, but we\'re very interested. The UK is a priority market for us. We\'re prepared to set up proper support infrastructure.', score: 90 }
        ],
        acceptableKeywords: ['presence', 'partnership', 'UK', 'customers', 'market', 'support']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Be honest about current UK presence', 'Show commitment to growing']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'I appreciate the honesty. What kind of partnership model are you looking for?',
        hints: ['Explain what you\'re seeking', 'Be open to discussion'],
        expectedResponses: [
          { text: 'We\'re flexible on the model. Ideally, an exclusive distributor who can handle sales and after-sales in the UK. We\'d provide full training, marketing support, and competitive dealer margins.', score: 100 },
          { text: 'We\'re open to different arrangements. Whether it\'s a dealership, joint venture, or even just an initial trial period - we\'re keen to find the right fit.', score: 95 },
          { text: 'We\'d like a partner who knows the UK market well. We can discuss exclusivity, territories, and terms. What would work best for you?', score: 90 }
        ],
        acceptableKeywords: ['flexible', 'distributor', 'partner', 'training', 'support', 'arrangements']
      }
    ],
    vocabulary: ['collaboration', 'competitive advantage', 'lead times', 'after-sales support', 'distributor', 'dealer margins'],
    chunks: ['I\'d say it\'s our...', 'That\'s why we\'re here', 'We\'re flexible on...', 'We\'re keen to find the right fit']
  },

  {
    id: 'small_talk_culture_001',
    title: 'Discussing British Culture',
    titleTurkish: 'İngiliz Kültürü Hakkında Sohbet',
    setting: 'During a coffee break at a conference, you chat with a British colleague about cultural differences.',
    settingTurkish: 'Bir konferanstaki kahve molasında, bir İngiliz meslektaşınızla kültürel farklılıklar hakkında sohbet ediyorsunuz.',
    difficulty: 'B1',
    category: 'small-talk',
    duration: 4,
    objectives: [
      {
        id: 'obj_1',
        description: 'Share observations about British culture',
        descriptionTurkish: 'İngiliz kültürü hakkındaki gözlemlerinizi paylaşın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Ask questions about cultural norms',
        descriptionTurkish: 'Kültürel normlar hakkında sorular sorun',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Share aspects of your own culture',
        descriptionTurkish: 'Kendi kültürünüzden örnekler paylaşın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Is this your first time in the UK? What do you make of it so far?',
        hints: ['Share your impressions', 'Be positive but genuine'],
        expectedResponses: [
          { text: 'No, I\'ve been several times, but I always enjoy it. I really appreciate the politeness here - everyone queues so patiently! And the countryside is beautiful.', score: 100 },
          { text: 'It\'s my third visit. I love it. The pubs are wonderful - such a different atmosphere to bars back home. And people are very friendly once you get chatting.', score: 95 },
          { text: 'I\'ve been a few times now. It\'s very different from Turkey, but in a good way. I like the sense of humour here.', score: 90 }
        ],
        acceptableKeywords: ['enjoy', 'appreciate', 'politeness', 'pubs', 'friendly', 'humour']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Share your impressions', 'Mention something you like']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Ha! Yes, we do love our queues. Is queueing not such a big thing in Turkey?',
        hints: ['Compare cultures politely', 'Be self-deprecating if appropriate'],
        expectedResponses: [
          { text: 'Not really, to be honest! We\'re a bit more... enthusiastic, shall we say. If you don\'t push a little, you might be waiting forever! But I\'ve learned to adapt here.', score: 100 },
          { text: 'Ha, no - we\'re more chaotic. It\'s not rudeness, just a different approach. Though I have to say, the British way is quite relaxing once you get used to it.', score: 95 },
          { text: 'We queue, but perhaps with less patience! It\'s interesting to see how something so simple reflects cultural differences.', score: 90 }
        ],
        acceptableKeywords: ['honest', 'enthusiastic', 'chaotic', 'adapt', 'different', 'patience']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Compare queueing cultures', 'Keep it light-hearted']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'That\'s fascinating. What about food? Have you tried any traditional British dishes?',
        hints: ['Share your food experiences', 'Ask a question back'],
        expectedResponses: [
          { text: 'Yes! I had fish and chips last night - delicious with the malt vinegar. And I\'ve tried a full English breakfast. Very filling! Do you have a favourite British dish?', score: 100 },
          { text: 'I\'ve been enjoying the pub food - shepherd\'s pie, Sunday roast. The portions are generous! Though I do miss Turkish coffee. Your coffee is... different.', score: 95 },
          { text: 'A few things. I liked the afternoon tea experience. Very elegant. What would you recommend I try before I leave?', score: 90 }
        ],
        acceptableKeywords: ['fish and chips', 'breakfast', 'pie', 'roast', 'tea', 'recommend']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Share your food experiences', 'Ask about their favourites']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'You should try a proper cream tea if you get the chance! Oh, looks like the session is starting again. Nice chatting with you.',
        hints: ['Express interest', 'End the conversation warmly'],
        expectedResponses: [
          { text: 'Cream tea - I\'ll definitely try that! Thank you for the recommendation. It was lovely chatting with you. Shall we grab a coffee later and continue?', score: 100 },
          { text: 'I\'ll add it to my list! This has been really enjoyable. Perhaps we can continue the conversation over dinner tonight?', score: 95 },
          { text: 'Thanks for the tip! Yes, nice chatting. I\'ve learned a lot. See you after the session.', score: 90 }
        ],
        acceptableKeywords: ['cream tea', 'recommendation', 'lovely', 'enjoyable', 'continue', 'chatting']
      }
    ],
    vocabulary: ['queueing', 'self-deprecating', 'cream tea', 'full English', 'cultural differences', 'light-hearted'],
    chunks: ['What do you make of...', 'To be honest', 'Shall we say', 'Nice chatting with you']
  },

  {
    id: 'airport_security_001',
    title: 'Going Through Security',
    titleTurkish: 'Güvenlik Kontrolünden Geçme',
    setting: 'You\'re going through airport security at Heathrow and need to follow instructions and answer questions.',
    settingTurkish: 'Heathrow\'da havalimanı güvenlik kontrolünden geçiyorsunuz ve talimatları takip etmeniz ve soruları cevaplamanız gerekiyor.',
    difficulty: 'A2',
    category: 'airport',
    duration: 4,
    objectives: [
      {
        id: 'obj_1',
        description: 'Follow security instructions',
        descriptionTurkish: 'Güvenlik talimatlarını takip edin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Answer questions clearly',
        descriptionTurkish: 'Soruları net cevaplayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Handle any issues calmly',
        descriptionTurkish: 'Sorunları sakin bir şekilde halledin',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good morning. Laptop out of the bag, please. Liquids in a clear bag. Any large electronics?',
        hints: ['Confirm and comply', 'Answer the question'],
        expectedResponses: [
          { text: 'Good morning. Yes, I have my laptop here, and a tablet as well. Shall I put them both in separate trays?', score: 100 },
          { text: 'Morning. Here\'s my laptop. I also have a Kindle - does that need to come out too?', score: 95 },
          { text: 'Just my laptop. Here it is. My liquids are already in this bag.', score: 90 }
        ],
        acceptableKeywords: ['laptop', 'tablet', 'Kindle', 'trays', 'liquids', 'bag']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Show your electronics', 'Ask if needed']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Yes, both in separate trays please. Jacket and belt off as well. Walk through when you\'re ready.',
        hints: ['Confirm you understand', 'Comply with instructions'],
        expectedResponses: [
          { text: 'Of course. Just a moment - there we go. Belt and jacket in the tray. Ready now.', score: 100 },
          { text: 'Right, taking those off now. Should I remove my shoes as well?', score: 95 },
          { text: 'Okay, done. Walking through now.', score: 90 }
        ],
        acceptableKeywords: ['of course', 'belt', 'jacket', 'tray', 'ready', 'shoes']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Confirm and comply', 'Ask about shoes if unsure']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Sir, the scanner flagged something. Could you step aside please? Is there anything in your pockets?',
        hints: ['Stay calm', 'Check your pockets'],
        expectedResponses: [
          { text: 'Oh, I\'m sorry - I think I forgot to take out my coins. Let me check... Yes, here they are. Shall I go through again?', score: 100 },
          { text: 'Apologies, I may have left my watch on. Here it is. Do you need me to walk through once more?', score: 95 },
          { text: 'Oh dear. Let me see... I think there might be some change in here. Sorry about that.', score: 90 }
        ],
        acceptableKeywords: ['sorry', 'forgot', 'coins', 'watch', 'again', 'apologies']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Apologise', 'Identify what caused the alert']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'That\'s fine, it happens all the time. Pop those in the tray and go through again. Have a good flight.',
        hints: ['Thank them', 'Wish them well'],
        expectedResponses: [
          { text: 'Thank you. Sorry for the trouble. Have a good day!', score: 100 },
          { text: 'Thanks very much. I\'ll be more careful next time. Cheers!', score: 95 },
          { text: 'Thank you. Goodbye.', score: 85 }
        ],
        acceptableKeywords: ['thank', 'sorry', 'trouble', 'careful', 'goodbye', 'cheers']
      }
    ],
    vocabulary: ['security checkpoint', 'scanner', 'tray', 'flagged', 'liquids', 'clear bag'],
    chunks: ['Shall I put them in...', 'Just a moment', 'Sorry for the trouble', 'Have a good day']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 12
  // ==========================================
  {
    id: 'factory_logistics_001',
    title: 'Discussing Logistics & Shipping',
    titleTurkish: 'Lojistik ve Nakliye Görüşmesi',
    setting: 'A UK client visits your factory to discuss shipping arrangements and delivery logistics for their order.',
    settingTurkish: 'Bir İngiliz müşteri siparişlerinin nakliye düzenlemeleri ve teslimat lojistiğini görüşmek için fabrikanızı ziyaret ediyor.',
    difficulty: 'B1',
    category: 'factory-visit',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Explain shipping options clearly',
        descriptionTurkish: 'Nakliye seçeneklerini net açıklayın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Discuss delivery timelines',
        descriptionTurkish: 'Teslimat zaman çizelgelerini tartışın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Address customs and documentation',
        descriptionTurkish: 'Gümrük ve belgeleri ele alın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Now that we\'ve agreed on the order, let\'s discuss delivery. How do you usually handle shipping from Turkey?',
        hints: ['Explain your shipping process', 'Mention options'],
        expectedResponses: [
          { text: 'We typically use RoRo ferries from Istanbul to Trieste, then road transport to the UK. It takes about 10-12 days door to door. We can also arrange direct trucking if you prefer.', score: 100 },
          { text: 'We have two main options: ferry via Italy, which takes about two weeks, or direct road transport through Europe, which is faster but slightly more expensive.', score: 95 },
          { text: 'We ship by road through Europe. The trailers are driven directly to your depot. Usually takes around 10 days from dispatch.', score: 90 }
        ],
        acceptableKeywords: ['RoRo', 'ferry', 'road', 'days', 'transport', 'trucking']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Explain shipping methods', 'Give timeframes']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'RoRo sounds efficient. What about customs clearance? Will we need to handle that ourselves?',
        hints: ['Explain customs process', 'Offer to help'],
        expectedResponses: [
          { text: 'We handle all export documentation from our side. For UK import, you\'ll need a customs broker, but we can recommend one we\'ve worked with. All our paperwork is prepared to make clearance smooth.', score: 100 },
          { text: 'The export side is taken care of by us. You\'ll need to arrange import clearance, but it\'s straightforward - we provide all the certificates and documentation you need.', score: 95 },
          { text: 'We prepare all the customs documents. You just need a broker on your end. We can send you a checklist of what\'s required.', score: 90 }
        ],
        acceptableKeywords: ['customs', 'documentation', 'broker', 'export', 'import', 'certificates']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Explain customs responsibilities', 'Offer assistance']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'That\'s helpful. And if we need to track the shipment, is there a system for that?',
        hints: ['Explain tracking capabilities', 'Reassure them'],
        expectedResponses: [
          { text: 'Absolutely. Once the trailer leaves our facility, we send you tracking details. You can follow the journey in real-time. We also send updates at key checkpoints - departure, ferry boarding, and estimated arrival.', score: 100 },
          { text: 'Yes, we use GPS tracking on all shipments. You\'ll receive a link to monitor progress, and our logistics team will keep you updated by email at each stage.', score: 95 },
          { text: 'We provide full tracking. You\'ll get updates when it leaves, when it reaches the ferry, and when it\'s in the UK.', score: 90 }
        ],
        acceptableKeywords: ['tracking', 'GPS', 'real-time', 'updates', 'checkpoints', 'monitor']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Explain tracking system', 'Mention update frequency']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Excellent. One last thing - what happens if there are any delays or damage during transit?',
        hints: ['Explain insurance and delay handling', 'Reassure them'],
        expectedResponses: [
          { text: 'All shipments are fully insured. If there\'s any damage, we handle the claim and arrange repairs or replacement. For delays, we communicate proactively and can expedite if needed.', score: 100 },
          { text: 'We have comprehensive transit insurance. Any issues are covered, and we take responsibility for resolving them quickly. Delays are rare, but we always keep you informed.', score: 95 },
          { text: 'Insurance covers everything in transit. If there\'s a problem, we sort it out. We pride ourselves on reliable delivery.', score: 90 }
        ],
        acceptableKeywords: ['insured', 'insurance', 'damage', 'claim', 'delays', 'covered']
      }
    ],
    vocabulary: ['RoRo ferry', 'customs clearance', 'documentation', 'transit insurance', 'logistics', 'dispatch'],
    chunks: ['Door to door', 'We handle all...from our side', 'You can follow in real-time', 'We take responsibility for...']
  },

  {
    id: 'technical_troubleshooting_001',
    title: 'Remote Technical Support',
    titleTurkish: 'Uzaktan Teknik Destek',
    setting: 'A UK customer calls with a technical issue on their trailer. You need to troubleshoot the problem remotely.',
    settingTurkish: 'Bir İngiliz müşteri römorkla ilgili teknik bir sorun için arıyor. Sorunu uzaktan gidermeniz gerekiyor.',
    difficulty: 'B2',
    category: 'technical-presentation',
    duration: 6,
    objectives: [
      {
        id: 'obj_1',
        description: 'Gather information about the problem',
        descriptionTurkish: 'Sorun hakkında bilgi toplayın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Guide the customer through diagnostics',
        descriptionTurkish: 'Müşteriyi teşhis sürecinde yönlendirin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Provide a solution or next steps',
        descriptionTurkish: 'Bir çözüm veya sonraki adımları sağlayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Hello, this is Dave from Northern Haulage. We\'ve got an issue with one of your curtainsiders - the EBS warning light keeps coming on.',
        hints: ['Acknowledge the problem', 'Ask for more details'],
        expectedResponses: [
          { text: 'Hello Dave, sorry to hear that. Let me help you diagnose this. Can you tell me - does the light come on constantly, or only when braking?', score: 100 },
          { text: 'Thanks for calling, Dave. The EBS light can indicate several things. First, is it a solid light or is it flashing? And when did you first notice it?', score: 95 },
          { text: 'Hello Dave. Let\'s figure this out. What\'s the trailer model and when did this start happening?', score: 90 }
        ],
        acceptableKeywords: ['diagnose', 'light', 'braking', 'flashing', 'model', 'notice']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Acknowledge the issue', 'Ask diagnostic questions']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'It\'s a solid light, comes on after about 10 minutes of driving. The brakes seem to work fine otherwise.',
        hints: ['Narrow down the cause', 'Suggest a check'],
        expectedResponses: [
          { text: 'That pattern suggests it might be a sensor issue rather than the braking system itself. Can you check if there\'s any damage to the wheel speed sensor cables? They\'re located behind each wheel hub.', score: 100 },
          { text: 'Interesting. If the brakes are working, it\'s likely a sensor fault. The most common cause is a damaged ABS sensor wire. Have you noticed any loose cables near the axles?', score: 95 },
          { text: 'A solid light after 10 minutes usually points to a sensor problem. Check the connections at the EBS modulator - it\'s the black box near the rear axle.', score: 90 }
        ],
        acceptableKeywords: ['sensor', 'cables', 'wheel', 'ABS', 'connections', 'modulator']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Suggest possible cause', 'Guide them to check something']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Hang on, let me check... Actually yes, there\'s a cable hanging loose on the nearside rear. Looks like it\'s been caught on something.',
        hints: ['Confirm the diagnosis', 'Explain the fix'],
        expectedResponses: [
          { text: 'That\'ll be it. The good news is it\'s an easy fix. The cable just needs to be reconnected and secured. If the connector is damaged, it\'s a standard part - any truck electrician can replace it.', score: 100 },
          { text: 'Right, that\'s your problem. Reconnect that cable and secure it with cable ties so it doesn\'t happen again. The warning light should clear after you cycle the ignition.', score: 95 },
          { text: 'Found it! Just reconnect that sensor cable. If the plug is okay, you should be good to go. Restart the truck to reset the light.', score: 90 }
        ],
        acceptableKeywords: ['reconnect', 'fix', 'cable', 'connector', 'secure', 'reset']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Confirm the cause', 'Explain how to fix it']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Brilliant, we\'ll sort that out now. Thanks for your help - saved us a garage visit!',
        hints: ['Acknowledge their thanks', 'Offer further support'],
        expectedResponses: [
          { text: 'No problem at all, happy to help. If the light doesn\'t clear after reconnecting, give us a call back and we\'ll arrange a technician visit. Safe travels!', score: 100 },
          { text: 'You\'re welcome, Dave. Glad we could resolve it quickly. Don\'t hesitate to call if you have any other issues. Take care!', score: 95 },
          { text: 'Anytime. Just secure that cable properly and you should be fine. Call us if you need anything else.', score: 90 }
        ],
        acceptableKeywords: ['happy', 'help', 'call', 'technician', 'welcome', 'resolve']
      }
    ],
    vocabulary: ['EBS', 'warning light', 'wheel speed sensor', 'ABS', 'modulator', 'diagnostics'],
    chunks: ['Let me help you diagnose this', 'That pattern suggests...', 'The good news is...', 'Don\'t hesitate to call']
  },

  {
    id: 'phone_inquiry_001',
    title: 'Making a Product Inquiry',
    titleTurkish: 'Ürün Sorgulaması Yapma',
    setting: 'You receive a call from a potential UK customer asking about your trailer range and availability.',
    settingTurkish: 'Potansiyel bir İngiliz müşteriden römork seriniz ve müsaitliği hakkında bir arama alıyorsunuz.',
    difficulty: 'A2',
    category: 'phone-call',
    duration: 4,
    objectives: [
      {
        id: 'obj_1',
        description: 'Answer questions about products',
        descriptionTurkish: 'Ürünler hakkındaki soruları cevaplayın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Provide pricing information',
        descriptionTurkish: 'Fiyat bilgisi sağlayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Arrange follow-up',
        descriptionTurkish: 'Takip görüşmesi ayarlayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good morning. I\'m calling from Smith Transport in Leeds. We\'re looking for new curtainsiders. Do you supply to the UK?',
        hints: ['Confirm you supply to UK', 'Show interest'],
        expectedResponses: [
          { text: 'Good morning! Yes, we do supply to the UK. Thank you for calling. How many units are you looking for, and what specifications do you need?', score: 100 },
          { text: 'Morning! Yes, absolutely - we have several UK customers. I\'d be happy to help. What kind of curtainsiders are you after?', score: 95 },
          { text: 'Hello! Yes, we export to the UK. What type of trailer do you need?', score: 90 }
        ],
        acceptableKeywords: ['yes', 'UK', 'supply', 'units', 'specifications', 'help']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Confirm UK supply', 'Ask about their needs']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'We need five standard curtainsiders, 13.6 metres. What\'s your lead time and roughly what price are we looking at?',
        hints: ['Give lead time', 'Provide price indication'],
        expectedResponses: [
          { text: 'For five units, our lead time is around 6-8 weeks. Price-wise, a standard 13.6m curtainsider starts at around €24,000, but the exact price depends on the specification. I can prepare a detailed quote if you like.', score: 100 },
          { text: 'We can deliver within 8 weeks. Prices for standard spec start around €24,000 per unit. Would you like me to email you our specification sheet and a formal quotation?', score: 95 },
          { text: 'Lead time is about two months. Prices vary, but roughly €24-26,000 each. Can I take your email to send more details?', score: 90 }
        ],
        acceptableKeywords: ['weeks', 'lead time', 'price', '24,000', 'quote', 'specification']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Give lead time', 'Indicate pricing']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'That sounds reasonable. Yes, please send a quote. My email is j.smith@smithtransport.co.uk.',
        hints: ['Confirm the email', 'Say what you\'ll send'],
        expectedResponses: [
          { text: 'Perfect. That\'s j.smith@smithtransport.co.uk. I\'ll send you our product brochure and a quotation by end of day. Is there a good number to reach you for a follow-up call?', score: 100 },
          { text: 'Got it - j.smith at smithtransport.co.uk. I\'ll email the quote today along with our specifications. Should I include delivery costs to Leeds?', score: 95 },
          { text: 'Thank you. I\'ll send that over today. What specifications would you like - sliding roof, fixed roof?', score: 90 }
        ],
        acceptableKeywords: ['email', 'brochure', 'quotation', 'today', 'specifications', 'delivery']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Confirm email', 'Mention what you\'ll send']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Yes, include delivery please. My direct number is 0113 555 7890. Look forward to your email.',
        hints: ['Confirm and thank them', 'End professionally'],
        expectedResponses: [
          { text: 'Excellent. I\'ll include UK delivery in the quote. Thank you for your interest, Mr Smith. I\'ll be in touch soon. Have a good day!', score: 100 },
          { text: 'Perfect. I\'ve noted your number. You\'ll have the quote by this afternoon. Thank you for calling - speak to you soon.', score: 95 },
          { text: 'Great. I\'ll send everything today. Thank you for calling. Goodbye!', score: 90 }
        ],
        acceptableKeywords: ['delivery', 'quote', 'thank', 'soon', 'afternoon', 'touch']
      }
    ],
    vocabulary: ['lead time', 'quotation', 'specification', 'curtainsider', 'brochure', 'follow-up'],
    chunks: ['I\'d be happy to help', 'Price-wise...', 'I\'ll be in touch soon', 'Have a good day']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 13
  // ==========================================
  {
    id: 'hotel_wifi_001',
    title: 'Asking About WiFi & Business Centre',
    titleTurkish: 'WiFi ve İş Merkezi Hakkında Sorma',
    setting: 'You need to work from your hotel and ask reception about WiFi access and business facilities.',
    settingTurkish: 'Otelinizden çalışmanız gerekiyor ve resepsiyona WiFi erişimi ve iş olanaklarını soruyorsunuz.',
    difficulty: 'A2',
    category: 'hotel',
    duration: 4,
    objectives: [
      {
        id: 'obj_1',
        description: 'Ask about WiFi connection',
        descriptionTurkish: 'WiFi bağlantısı hakkında sorun',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Inquire about business facilities',
        descriptionTurkish: 'İş olanakları hakkında bilgi alın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Get the information you need',
        descriptionTurkish: 'İhtiyacınız olan bilgiyi alın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good morning, sir. How can I help you today?',
        hints: ['Ask about WiFi', 'Explain your need'],
        expectedResponses: [
          { text: 'Good morning. I need to do some work from my room. Could you tell me how to connect to the WiFi?', score: 100 },
          { text: 'Morning. I\'m trying to get online but I can\'t find the WiFi password. Can you help?', score: 95 },
          { text: 'Hello. What\'s the WiFi password please? I need to send some emails.', score: 90 }
        ],
        acceptableKeywords: ['WiFi', 'connect', 'password', 'work', 'online', 'internet']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Ask about WiFi', 'Mention you need to work']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Of course. The network name is "HotelGuest" and the password is on this card. It\'s valid for your entire stay. Is the connection for work purposes?',
        hints: ['Confirm and ask about speed', 'Mention video calls if needed'],
        expectedResponses: [
          { text: 'Yes, I have some video calls today. Is the connection fast enough for that? I need a stable connection.', score: 100 },
          { text: 'Thank you. Yes, I need to join a video conference. Will the WiFi be reliable enough?', score: 95 },
          { text: 'Yes, for work. Is the internet speed good here?', score: 90 }
        ],
        acceptableKeywords: ['video', 'calls', 'fast', 'stable', 'reliable', 'speed']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Confirm it\'s for work', 'Ask about speed/reliability']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'The WiFi should be fine, but if you need a guaranteed connection, we have a business centre on the first floor with high-speed ethernet and private meeting rooms.',
        hints: ['Ask about the business centre', 'Check availability'],
        expectedResponses: [
          { text: 'That sounds useful. Is the business centre free for guests? And do I need to book a room in advance?', score: 100 },
          { text: 'Good to know. What facilities are in the business centre? Is there a printer I could use?', score: 95 },
          { text: 'Where exactly is that? And is there a charge to use it?', score: 90 }
        ],
        acceptableKeywords: ['business centre', 'free', 'book', 'facilities', 'printer', 'charge']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Ask about facilities', 'Check if it\'s free or needs booking']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'It\'s complimentary for guests. There\'s a printer, scanner, and two private pods you can use. No booking needed - just turn up. Would you like me to show you where it is?',
        hints: ['Accept or decline the offer', 'Thank them'],
        expectedResponses: [
          { text: 'That would be great, thank you. I might use it for my afternoon call. I appreciate your help.', score: 100 },
          { text: 'No need, I\'ll find it. First floor, you said? Thank you very much for the information.', score: 95 },
          { text: 'Thanks, I\'ll check it out later. The WiFi card is enough for now.', score: 90 }
        ],
        acceptableKeywords: ['thank', 'great', 'appreciate', 'find', 'first floor', 'help']
      }
    ],
    vocabulary: ['WiFi', 'ethernet', 'business centre', 'complimentary', 'private pods', 'high-speed'],
    chunks: ['Could you tell me how to...', 'Is the connection fast enough for...', 'Is there a charge to...', 'I appreciate your help']
  },

  {
    id: 'restaurant_reservation_001',
    title: 'Making a Reservation by Phone',
    titleTurkish: 'Telefonla Rezervasyon Yapma',
    setting: 'You call a restaurant in London to make a reservation for a business dinner with your UK clients.',
    settingTurkish: 'İngiliz müşterilerinizle bir iş yemeği için Londra\'daki bir restorana rezervasyon yapmak üzere arıyorsunuz.',
    difficulty: 'B1',
    category: 'restaurant',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Make a reservation clearly',
        descriptionTurkish: 'Net bir şekilde rezervasyon yapın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Specify your requirements',
        descriptionTurkish: 'Gereksinimlerinizi belirtin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Confirm all details',
        descriptionTurkish: 'Tüm detayları onaylayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Good afternoon, The Grill Room. How may I help you?',
        hints: ['State you want to make a reservation', 'Give basic details'],
        expectedResponses: [
          { text: 'Good afternoon. I\'d like to make a reservation for dinner, please. It\'s for four people, this Friday evening.', score: 100 },
          { text: 'Hello. I\'m calling to book a table for Friday night. There will be four of us. Do you have availability?', score: 95 },
          { text: 'Hi. Can I book a table for four on Friday? Around 7 o\'clock?', score: 90 }
        ],
        acceptableKeywords: ['reservation', 'book', 'table', 'four', 'Friday', 'dinner']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Say you want to book', 'Give date and party size']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Friday evening, party of four. What time would you like? We have availability at 7pm or 8:30pm.',
        hints: ['Choose a time', 'Explain if you have a preference'],
        expectedResponses: [
          { text: '7pm would be perfect. It\'s a business dinner, so we\'d prefer to finish at a reasonable hour. Could we have a quiet table, away from the bar?', score: 100 },
          { text: 'Let\'s go with 7pm please. Actually, is it possible to get a private area? We\'ll be discussing business.', score: 95 },
          { text: '7 o\'clock works. Can we have a table somewhere quiet?', score: 90 }
        ],
        acceptableKeywords: ['7pm', 'perfect', 'business', 'quiet', 'table', 'private']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Choose a time', 'Request a quiet table for business']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Certainly, I can seat you in our Garden Room - it\'s quieter. May I take a name and contact number for the booking?',
        hints: ['Give your name', 'Provide contact details'],
        expectedResponses: [
          { text: 'Yes, my name - L-E-W-I-S. My mobile number is 07700 900123. Could you also note that we may need to order some wine in advance?', score: 100 },
          { text: 'It\'s under my name. My number is 07700 900123. By the way, do you have a set menu for business dinners?', score: 95 },
          { text: 'My number is 07700 900123. Thank you.', score: 90 }
        ],
        acceptableKeywords: ['{{USER_NAME}}', 'number', 'mobile', 'wine', 'menu', 'thank']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Give your name and number', 'Ask any additional questions']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Perfect. So that\'s Friday at 7pm, party of four, Garden Room, under my name. We\'ll send a confirmation to your mobile. Is there anything else?',
        hints: ['Confirm the details', 'Thank them'],
        expectedResponses: [
          { text: 'That\'s correct. Just one more thing - one of my guests is vegetarian. Will that be a problem?', score: 100 },
          { text: 'Perfect, thank you. Actually, what\'s your cancellation policy, just in case plans change?', score: 95 },
          { text: 'That\'s everything. Thank you very much. See you Friday.', score: 90 }
        ],
        acceptableKeywords: ['correct', 'thank', 'vegetarian', 'cancellation', 'Friday', 'perfect']
      }
    ],
    vocabulary: ['reservation', 'party of four', 'private area', 'set menu', 'cancellation policy', 'confirmation'],
    chunks: ['I\'d like to make a reservation', 'Could we have a quiet table', 'May I take a name...', 'Is there anything else?']
  },

  {
    id: 'business_video_call_001',
    title: 'Joining a Video Conference',
    titleTurkish: 'Video Konferansa Katılma',
    setting: 'You\'re joining a video call with your UK clients to discuss project progress. You need to handle technical issues and present updates.',
    settingTurkish: 'Proje ilerlemesini görüşmek için İngiliz müşterilerinizle bir video görüşmesine katılıyorsunuz. Teknik sorunları halletmeniz ve güncellemeler sunmanız gerekiyor.',
    difficulty: 'B1',
    category: 'business-meeting',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Handle technical issues professionally',
        descriptionTurkish: 'Teknik sorunları profesyonelce halledin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Give a clear project update',
        descriptionTurkish: 'Net bir proje güncellemesi verin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Respond to questions effectively',
        descriptionTurkish: 'Soruları etkili bir şekilde cevaplayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Hello, can you hear me? Your video seems to be frozen.',
        hints: ['Acknowledge the issue', 'Try to fix it'],
        expectedResponses: [
          { text: 'Hello! Sorry about that - let me turn my camera off and on again. Can you hear me clearly now? How about the video?', score: 100 },
          { text: 'Apologies, my connection is a bit unstable. Let me try refreshing. Is this better? Can you see me now?', score: 95 },
          { text: 'Yes, I can hear you. Let me check my camera. One moment please.', score: 90 }
        ],
        acceptableKeywords: ['sorry', 'camera', 'connection', 'hear', 'see', 'better']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Apologise for technical issues', 'Try to resolve it']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Yes, that\'s much better now. Right, shall we get started? Can you give us an update on the production schedule?',
        hints: ['Give a clear update', 'Be structured'],
        expectedResponses: [
          { text: 'Of course. So, we\'re currently on track. The first batch of 25 units is in final assembly and will be ready for dispatch next Monday. The second batch will follow two weeks later.', score: 100 },
          { text: 'Certainly. Good news - production is progressing well. We\'ve completed 20 units so far, with the remaining 5 finishing this week. We\'re on schedule for the agreed delivery date.', score: 95 },
          { text: 'Yes. Production is going well. We should have everything ready on time. No delays at the moment.', score: 90 }
        ],
        acceptableKeywords: ['track', 'units', 'assembly', 'dispatch', 'schedule', 'delivery']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Give production update', 'Mention specific numbers and dates']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'That\'s great to hear. We noticed a slight change in the specification sheet you sent. Can you clarify what\'s different?',
        hints: ['Explain the change clearly', 'Reassure them if needed'],
        expectedResponses: [
          { text: 'Yes, good spot. We made a small improvement to the door seal design - it\'s now more weatherproof. It doesn\'t affect the price or delivery. I should have flagged it earlier, apologies.', score: 100 },
          { text: 'You\'re right, we updated the axle specification. We switched to BPW axles as they offer better availability. Same quality, just a different supplier. Is that acceptable?', score: 95 },
          { text: 'Ah yes, a minor change to the lighting position. It\'s an improvement based on driver feedback. Shall I send you the details?', score: 90 }
        ],
        acceptableKeywords: ['change', 'improvement', 'design', 'specification', 'price', 'details']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Explain what changed', 'Reassure them it\'s positive or neutral']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'No problem, that sounds fine. Before we wrap up, is there anything else you need from our side?',
        hints: ['Check if you need anything', 'Confirm next steps'],
        expectedResponses: [
          { text: 'Actually yes - could you confirm the delivery address and contact person for the first batch? I want to make sure our logistics team has the correct details.', score: 100 },
          { text: 'Just one thing - I\'ll send you photos of the completed units before dispatch. Could you confirm receipt when you get them?', score: 95 },
          { text: 'I think we\'re all set. I\'ll send a summary email after this call. Let\'s schedule another update in two weeks?', score: 90 }
        ],
        acceptableKeywords: ['delivery', 'address', 'photos', 'email', 'schedule', 'confirm']
      }
    ],
    vocabulary: ['video conference', 'frozen', 'production schedule', 'dispatch', 'specification', 'wrap up'],
    chunks: ['Can you hear me?', 'Let me try...', 'We\'re currently on track', 'Before we wrap up...']
  },

  // ==========================================
  // NEW SCENARIOS - BATCH 14
  // ==========================================
  {
    id: 'factory_meeting_room_001',
    title: 'Meeting in the Factory Boardroom',
    titleTurkish: 'Fabrika Toplantı Odasında Görüşme',
    setting: 'After the factory tour, you sit down with UK clients in the boardroom to discuss next steps and answer their questions.',
    settingTurkish: 'Fabrika turundan sonra, sonraki adımları görüşmek ve sorularını cevaplamak için İngiliz müşterilerle toplantı odasına oturuyorsunuz.',
    difficulty: 'B1',
    category: 'factory-visit',
    duration: 5,
    objectives: [
      {
        id: 'obj_1',
        description: 'Summarise the factory tour highlights',
        descriptionTurkish: 'Fabrika turu önemli noktalarını özetleyin',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Answer follow-up questions',
        descriptionTurkish: 'Takip sorularını cevaplayın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Discuss next steps',
        descriptionTurkish: 'Sonraki adımları tartışın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'That was a very informative tour. I\'m impressed with your facilities. Shall we sit down and discuss what we\'ve seen?',
        hints: ['Agree and offer refreshments', 'Set a positive tone'],
        expectedResponses: [
          { text: 'Thank you, I\'m glad you found it useful. Please, have a seat. Can I get you a coffee or tea before we continue?', score: 100 },
          { text: 'Yes, let\'s. Please make yourselves comfortable. Would anyone like something to drink? We have coffee, tea, and water.', score: 95 },
          { text: 'Of course. Please sit down. I hope the tour answered some of your questions.', score: 90 }
        ],
        acceptableKeywords: ['thank', 'seat', 'coffee', 'tea', 'comfortable', 'glad']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Thank them', 'Offer refreshments']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'Coffee would be lovely, thanks. Now, I was particularly impressed by your paint shop. Can you tell me more about the coating process?',
        hints: ['Explain the process', 'Highlight quality aspects'],
        expectedResponses: [
          { text: 'Of course. We use a three-stage process - first a zinc primer for corrosion protection, then a powder coat, and finally the top colour coat. Everything is oven-cured for durability. The result lasts 10-15 years in normal conditions.', score: 100 },
          { text: 'Yes, we\'re proud of our paint facility. It\'s fully automated with robotic sprayers. We use marine-grade coatings that resist salt and weather damage. Very important for UK conditions.', score: 95 },
          { text: 'The coating is a multi-layer system. Primer, base coat, and clear coat. All environmentally compliant and very durable.', score: 90 }
        ],
        acceptableKeywords: ['process', 'primer', 'coat', 'corrosion', 'durable', 'automated']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Explain the coating process', 'Mention durability']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'That\'s reassuring. One concern we have is after-sales support in the UK. How would that work?',
        hints: ['Explain your UK support structure', 'Reassure them'],
        expectedResponses: [
          { text: 'Great question. We have a network of service partners across the UK. For warranty work, you simply contact our UK office and they\'ll arrange everything. We also stock common spare parts at our Birmingham warehouse for quick dispatch.', score: 100 },
          { text: 'We understand that\'s crucial. We\'re partnered with three service centres in England - one in the Midlands, one in the North, and one in the South. Response time is typically 24-48 hours.', score: 95 },
          { text: 'We have UK-based support. Our service partners can handle repairs, and we ship parts within 2-3 days from Turkey for anything not in stock locally.', score: 90 }
        ],
        acceptableKeywords: ['service', 'partners', 'UK', 'warranty', 'spare parts', 'response']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Explain UK support network', 'Mention response times']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'That sounds comprehensive. So, what would be the next step if we wanted to proceed?',
        hints: ['Outline the next steps', 'Be proactive'],
        expectedResponses: [
          { text: 'I\'d suggest we put together a formal quotation based on your specifications. Once you\'re happy with that, we can discuss payment terms and delivery scheduling. I can have the quote with you by Friday.', score: 100 },
          { text: 'The next step would be for me to send you a detailed proposal. Then, if you\'re interested, we can arrange a trial order - perhaps 2-3 units to start. That way you can evaluate quality before committing to a larger order.', score: 95 },
          { text: 'I\'ll prepare a quotation and send it this week. You can review it with your team, and we can schedule a follow-up call to discuss any questions.', score: 90 }
        ],
        acceptableKeywords: ['quotation', 'proposal', 'specifications', 'Friday', 'follow-up', 'order']
      }
    ],
    vocabulary: ['boardroom', 'coating process', 'corrosion protection', 'after-sales support', 'service partners', 'formal quotation'],
    chunks: ['I\'m glad you found it useful', 'Can I get you a...', 'Great question', 'I\'d suggest we...']
  },

  {
    id: 'technical_training_001',
    title: 'Conducting Product Training',
    titleTurkish: 'Ürün Eğitimi Verme',
    setting: 'You\'re training UK customers on how to operate and maintain their new trailers after delivery.',
    settingTurkish: 'Teslimat sonrasında İngiliz müşterilere yeni römorkların nasıl kullanılacağı ve bakımının yapılacağı konusunda eğitim veriyorsunuz.',
    difficulty: 'B1',
    category: 'technical-presentation',
    duration: 6,
    objectives: [
      {
        id: 'obj_1',
        description: 'Explain operating procedures clearly',
        descriptionTurkish: 'Çalıştırma prosedürlerini net açıklayın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Demonstrate maintenance tasks',
        descriptionTurkish: 'Bakım görevlerini gösterin',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Answer trainee questions',
        descriptionTurkish: 'Eğitim alan kişilerin sorularını cevaplayın',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Right, we\'ve got the trailers. Before we put them into service, what do we need to know about daily checks?',
        hints: ['Explain daily inspection routine', 'Be clear and practical'],
        expectedResponses: [
          { text: 'Good question. Every day before use, your drivers should do a walk-around check. That means checking tyre condition and pressure, lights, brake connections, and making sure the curtains are secure. It takes about 5 minutes.', score: 100 },
          { text: 'Daily checks are essential. I\'ll show you our checklist - it covers tyres, lights, brakes, and load security. Your drivers should complete this before every journey. Let me demonstrate.', score: 95 },
          { text: 'Before each trip, check the tyres, lights, and coupling. Make sure the curtain straps are tight. I\'ll give you a printed checklist to keep in each cab.', score: 90 }
        ],
        acceptableKeywords: ['daily', 'check', 'tyres', 'lights', 'brakes', 'curtains']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Explain daily checks', 'Mention key items to inspect']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'That\'s helpful. What about the sliding roof? Any special instructions for operating it?',
        hints: ['Explain roof operation', 'Mention safety points'],
        expectedResponses: [
          { text: 'Yes, a few things. Always make sure the trailer is stationary and the handbrake is on before opening the roof. Release these two catches here, then slide the front section back first. Never force it - if it sticks, check for debris in the runners.', score: 100 },
          { text: 'The roof is straightforward but there are some safety points. Keep fingers away from the edges when sliding. Check the runners are clear before operating. And in windy conditions, be extra careful - the panels can catch the wind.', score: 95 },
          { text: 'It\'s a simple mechanism. Pull these handles to release, then slide back. Just make sure nothing is blocking the tracks. I\'ll show you now.', score: 90 }
        ],
        acceptableKeywords: ['roof', 'stationary', 'catches', 'slide', 'safety', 'runners']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Explain roof operation', 'Mention safety precautions']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Got it. And what about regular maintenance? What\'s the service schedule?',
        hints: ['Explain maintenance intervals', 'Mention key service items'],
        expectedResponses: [
          { text: 'We recommend a full service every 12 months or 100,000 kilometres, whichever comes first. That includes brake adjustment, wheel bearing check, and lubrication of all moving parts. Between services, grease the door hinges monthly.', score: 100 },
          { text: 'Annual servicing is the minimum. Your local service partner can do this. Key items are brakes, axles, and suspension. We also suggest checking the curtain tensioners every six months - they can loosen over time.', score: 95 },
          { text: 'Service it once a year. Brakes, bearings, and lights need checking. We\'ll provide a maintenance schedule with the documentation.', score: 90 }
        ],
        acceptableKeywords: ['service', 'months', 'kilometres', 'brakes', 'lubrication', 'annual']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Explain service intervals', 'Mention key maintenance items']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'Perfect. One last thing - if something goes wrong on the road, who do we call?',
        hints: ['Provide emergency contact information', 'Explain the process'],
        expectedResponses: [
          { text: 'You\'ll have our 24-hour helpline number - it\'s in the documentation pack. Call that first and they\'ll either talk you through a fix or dispatch a technician. For breakdowns in the UK, we aim for a 4-hour response.', score: 100 },
          { text: 'There\'s a sticker inside the front locker with all emergency numbers. Call our UK support line first. They\'re available 24/7 and can arrange roadside assistance anywhere in the country.', score: 95 },
          { text: 'Call our support number - it\'s on the trailer documentation. We have breakdown cover included in the warranty for the first year.', score: 90 }
        ],
        acceptableKeywords: ['helpline', '24-hour', 'technician', 'breakdown', 'support', 'emergency']
      }
    ],
    vocabulary: ['walk-around check', 'tyre pressure', 'sliding roof', 'service schedule', 'lubrication', 'breakdown cover'],
    chunks: ['Every day before use...', 'Always make sure...', 'We recommend...', 'Call that first and...']
  },

  {
    id: 'small_talk_sports_001',
    title: 'Talking About Football',
    titleTurkish: 'Futbol Hakkında Konuşma',
    setting: 'During a break in meetings, your UK client starts talking about football. You join the conversation.',
    settingTurkish: 'Toplantı arasında İngiliz müşteriniz futbol hakkında konuşmaya başlıyor. Sohbete katılıyorsunuz.',
    difficulty: 'A2',
    category: 'small-talk',
    duration: 4,
    objectives: [
      {
        id: 'obj_1',
        description: 'Engage in sports small talk',
        descriptionTurkish: 'Spor sohbetine katılın',
        completed: false
      },
      {
        id: 'obj_2',
        description: 'Share your own interests',
        descriptionTurkish: 'Kendi ilgi alanlarınızı paylaşın',
        completed: false
      },
      {
        id: 'obj_3',
        description: 'Keep the conversation friendly',
        descriptionTurkish: 'Sohbeti samimi tutun',
        completed: false
      }
    ],
    dialogue: [
      {
        id: 'turn_1',
        role: 'agent',
        text: 'Did you catch the match last night? Liverpool against Manchester City - what a game!',
        hints: ['Respond even if you didn\'t watch', 'Show interest'],
        expectedResponses: [
          { text: 'I didn\'t see it, unfortunately - the time difference makes it difficult. But I heard it was exciting! What was the score?', score: 100 },
          { text: 'No, I missed it. I follow Turkish football more closely, but I know those two teams are rivals. Was it a good game?', score: 95 },
          { text: 'I saw the highlights this morning. Great goals! Do you support one of those teams?', score: 90 }
        ],
        acceptableKeywords: ['missed', 'score', 'exciting', 'highlights', 'teams', 'follow']
      },
      {
        id: 'turn_2',
        role: 'user',
        text: '',
        hints: ['Respond to the football topic', 'Show interest even if you didn\'t watch']
      },
      {
        id: 'turn_3',
        role: 'agent',
        text: 'It ended 2-2, very tense! I\'m a Liverpool fan myself. Do you follow any English teams?',
        hints: ['Answer honestly', 'Share your football interest'],
        expectedResponses: [
          { text: 'I\'ve always liked Manchester United, actually - from the Ferguson era. But in Turkey, I support Galatasaray. Do you know any Turkish teams?', score: 100 },
          { text: 'Not closely, but I watch the Premier League sometimes. It\'s very popular in Turkey. I\'m more of a Fenerbahçe fan myself.', score: 95 },
          { text: 'I know the big teams - Arsenal, Chelsea, Manchester. But I don\'t have a favourite. Football is huge in Turkey too.', score: 90 }
        ],
        acceptableKeywords: ['United', 'Galatasaray', 'Fenerbahçe', 'Premier League', 'Turkey', 'teams']
      },
      {
        id: 'turn_4',
        role: 'user',
        text: '',
        hints: ['Share your football preferences', 'Mention Turkish football']
      },
      {
        id: 'turn_5',
        role: 'agent',
        text: 'Galatasaray - yes, I\'ve heard of them! They play in Europe sometimes, don\'t they? The atmosphere at Turkish matches looks incredible.',
        hints: ['Agree and elaborate', 'Invite them to experience it'],
        expectedResponses: [
          { text: 'Yes, the atmosphere is amazing - very passionate fans! If you ever visit Istanbul, I\'d be happy to take you to a match. It\'s quite an experience!', score: 100 },
          { text: 'It really is! Turkish fans are very loud and loyal. The derbies between the big Istanbul clubs are legendary. You should see one sometime.', score: 95 },
          { text: 'The fans are crazy in a good way! Very loud, lots of singing. Different from England, I think.', score: 90 }
        ],
        acceptableKeywords: ['atmosphere', 'fans', 'passionate', 'Istanbul', 'match', 'experience']
      },
      {
        id: 'turn_6',
        role: 'user',
        text: '',
        hints: ['Describe Turkish football atmosphere', 'Invite them to a match']
      },
      {
        id: 'turn_7',
        role: 'agent',
        text: 'I\'d love that! Right, we should probably get back to business. But let\'s definitely talk more about football over dinner later.',
        hints: ['Agree to continue later', 'Transition back to work'],
        expectedResponses: [
          { text: 'Absolutely! I\'ll tell you about the Istanbul derby over dinner. But yes, let\'s get back to work. Where were we?', score: 100 },
          { text: 'Sounds good! Football is always a good topic. Okay, back to business - shall we look at the delivery schedule?', score: 95 },
          { text: 'Yes, let\'s do that. Good chat! Now, what\'s next on the agenda?', score: 90 }
        ],
        acceptableKeywords: ['dinner', 'derby', 'business', 'work', 'schedule', 'agenda']
      }
    ],
    vocabulary: ['match', 'score', 'fan', 'derby', 'atmosphere', 'Premier League'],
    chunks: ['Did you catch...', 'I\'ve always liked...', 'If you ever visit...', 'Back to business']
  }
]

export default scenarios
