import { VocabularyItem } from '../types';

export const vocabulary: VocabularyItem[] = [
  // ==================== SEMI-TRAILER & MANUFACTURING VOCABULARY ====================
    {
    id: 'vocab_tech_001',
    word: 'chassis',
    ipa: '/ˈʃæsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The base frame of a vehicle on which the body is mounted',
        example: 'The chassis is constructed from S700 high-strength steel.',
        turkishMeaning: 'şasi'
      }
    ],
    imageUrl: '/images/vocab/chassis.jpg',
    examples: ['The chassis is constructed from S700 high-strength steel.'],
    collocations: ['chassis frame', 'chassis design', 'strengthen the chassis'],
    synonyms: ['frame', 'undercarriage'],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'vehicle-parts'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_002',
    word: 'axle',
    ipa: '/ˈæksl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A rod or spindle passing through the centre of a wheel',
        example: 'This lowbed has three axles with air suspension.',
        turkishMeaning: 'dingil, aks'
      }
    ],
    imageUrl: '/images/vocab/axle.jpg',
    examples: ['This lowbed has three axles with air suspension.'],
    collocations: ['rear axle', 'front axle', 'axle load', 'axle configuration'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'vehicle-parts'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_003',
    word: 'hydraulic',
    ipa: '/haɪˈdrɒlɪk/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Operated by liquid moving under pressure',
        example: 'The hydraulic system provides smooth lifting motion.',
        turkishMeaning: 'hidrolik'
      }
    ],
    imageUrl: '/images/vocab/hydraulic.jpg',
    examples: ['The hydraulic system provides smooth lifting motion.'],
    collocations: ['hydraulic cylinder', 'hydraulic pump', 'hydraulic pressure', 'hydraulic system'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'hydraulics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_004',
    word: 'payload',
    ipa: '/ˈpeɪləʊd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The carrying capacity of a vehicle, excluding its own weight',
        example: 'The maximum payload is 35 tonnes.',
        turkishMeaning: 'yük kapasitesi, taşıma kapasitesi'
      }
    ],
    imageUrl: '/images/vocab/payload.jpg',
    examples: ['The maximum payload is 35 tonnes.'],
    collocations: ['maximum payload', 'useful payload', 'payload capacity'],
    synonyms: ['cargo', 'load'],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_005',
    word: 'suspension',
    ipa: '/səˈspenʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The system of springs and shock absorbers connecting wheels to the vehicle',
        example: 'Air suspension provides a smoother ride for delicate cargo.',
        turkishMeaning: 'süspansiyon'
      }
    ],
    imageUrl: '/images/vocab/suspension.jpg',
    examples: ['Air suspension provides a smoother ride for delicate cargo.'],
    collocations: ['air suspension', 'leaf suspension', 'suspension system'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'vehicle-parts'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_006',
    word: 'kingpin',
    ipa: '/ˈkɪŋpɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The main pivot pin that connects a semi-trailer to a tractor unit',
        example: 'The kingpin position can be adjusted for different truck configurations.',
        turkishMeaning: 'pim, bağlantı pimi'
      }
    ],
    imageUrl: '/images/vocab/kingpin.jpg',
    examples: ['The kingpin position can be adjusted for different truck configurations.'],
    collocations: ['kingpin setting', 'kingpin plate', 'adjust the kingpin'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_007',
    word: 'fifth wheel',
    ipa: '/fɪfθ wiːl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The coupling device on a tractor that connects to the kingpin',
        example: 'The fifth wheel coupling must be properly greased.',
        turkishMeaning: 'beşinci teker, çekici tablası'
      }
    ],
    imageUrl: '/images/vocab/fifth-wheel.jpg',
    examples: ['The fifth wheel coupling must be properly greased.'],
    collocations: ['fifth wheel coupling', 'fifth wheel height'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'vehicle-parts'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_008',
    word: 'wheelbase',
    ipa: '/ˈwiːlbeɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The distance between the front and rear axles of a vehicle',
        example: 'A longer wheelbase improves stability at high speeds.',
        turkishMeaning: 'dingil mesafesi'
      }
    ],
    imageUrl: '/images/vocab/wheelbase.jpg',
    examples: ['A longer wheelbase improves stability at high speeds.'],
    collocations: ['extended wheelbase', 'short wheelbase'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'vehicle-parts'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_009',
    word: 'tare weight',
    ipa: '/teə weɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The weight of an empty vehicle without cargo',
        example: 'The tare weight of this trailer is 7.5 tonnes.',
        turkishMeaning: 'dara ağırlığı, boş ağırlık'
      }
    ],
    imageUrl: '/images/vocab/tare-weight.jpg',
    examples: ['The tare weight of this trailer is 7.5 tonnes.'],
    collocations: ['low tare weight', 'reduce tare weight'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_010',
    word: 'gross vehicle weight',
    ipa: '/ɡrəʊs ˈviːɪkl weɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The maximum allowable total weight of a vehicle including cargo',
        example: 'The GVW rating is 44 tonnes for this combination.',
        turkishMeaning: 'brüt araç ağırlığı'
      }
    ],
    imageUrl: '/images/vocab/gvw.jpg',
    examples: ['The GVW rating is 44 tonnes for this combination.'],
    collocations: ['GVW rating', 'maximum GVW'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_011',
    word: 'ramp',
    ipa: '/ræmp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An inclined surface for loading vehicles or cargo',
        example: 'The hydraulic ramps allow for easy vehicle loading.',
        turkishMeaning: 'rampa'
      }
    ],
    imageUrl: '/images/vocab/ramp.jpg',
    examples: ['The hydraulic ramps allow for easy vehicle loading.'],
    collocations: ['loading ramp', 'rear ramp', 'hydraulic ramp'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_012',
    word: 'deck',
    ipa: '/dek/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The floor or platform surface of a trailer',
        example: 'The upper deck can carry four additional cars.',
        turkishMeaning: 'platform, döşeme'
      }
    ],
    imageUrl: '/images/vocab/deck.jpg',
    examples: ['The upper deck can carry four additional cars.'],
    collocations: ['upper deck', 'lower deck', 'deck height'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_013',
    word: 'outrigger',
    ipa: '/ˈaʊtrɪɡə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An extending support beam for stability',
        example: 'Extend the outriggers before operating the crane.',
        turkishMeaning: 'yan destek, stabilizatör'
      }
    ],
    imageUrl: '/images/vocab/outrigger.jpg',
    examples: ['Extend the outriggers before operating the crane.'],
    collocations: ['hydraulic outriggers', 'extend the outriggers'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_014',
    word: 'landing gear',
    ipa: '/ˈlændɪŋ ɡɪə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The support legs that hold up the front of a trailer when detached',
        example: 'Lower the landing gear before uncoupling from the tractor.',
        turkishMeaning: 'ayak takımı, destek ayakları'
      }
    ],
    imageUrl: '/images/vocab/landing-gear.jpg',
    examples: ['Lower the landing gear before uncoupling from the tractor.'],
    collocations: ['retract landing gear', 'landing gear crank'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'vehicle-parts'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_015',
    word: 'tailboard',
    ipa: '/ˈteɪlbɔːd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The rear panel or gate of a truck or trailer',
        example: 'The tailboard folds down to create a loading platform.',
        turkishMeaning: 'arka kapak, kuyruk kapağı'
      }
    ],
    imageUrl: '/images/vocab/tailboard.jpg',
    examples: ['The tailboard folds down to create a loading platform.'],
    collocations: ['drop the tailboard', 'hydraulic tailboard'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },

  // ==================== BUSINESS VOCABULARY ====================
    {
    id: 'vocab_biz_001',
    word: 'quotation',
    ipa: '/kwəʊˈteɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A formal statement of the price for goods or services',
        example: 'I will send you a detailed quotation by Friday.',
        turkishMeaning: 'teklif, fiyat teklifi'
      }
    ],
    imageUrl: '/images/vocab/quotation.jpg',
    examples: ['I will send you a detailed quotation by Friday.'],
    collocations: ['formal quotation', 'competitive quotation', 'request a quotation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_biz_002',
    word: 'lead time',
    ipa: '/liːd taɪm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The time between ordering and delivery',
        example: 'The lead time for custom orders is typically 10-12 weeks.',
        turkishMeaning: 'teslim süresi'
      }
    ],
    imageUrl: '/images/vocab/lead-time.jpg',
    examples: ['The lead time for custom orders is typically 10-12 weeks.'],
    collocations: ['reduce lead time', 'standard lead time'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_biz_003',
    word: 'specifications',
    ipa: '/ˌspesɪfɪˈkeɪʃənz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Detailed description of design, materials, and requirements',
        example: 'Please review the specifications before placing your order.',
        turkishMeaning: 'teknik özellikler, şartname'
      }
    ],
    imageUrl: '/images/vocab/specifications.jpg',
    examples: ['Please review the specifications before placing your order.'],
    collocations: ['technical specifications', 'meet specifications', 'according to specifications'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_biz_004',
    word: 'warranty',
    ipa: '/ˈwɒrənti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A written guarantee promising to repair or replace if needed',
        example: 'All our trailers come with a two-year warranty.',
        turkishMeaning: 'garanti'
      }
    ],
    imageUrl: '/images/vocab/warranty.jpg',
    examples: ['All our trailers come with a two-year warranty.'],
    collocations: ['extended warranty', 'warranty period', 'under warranty'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_biz_005',
    word: 'compliance',
    ipa: '/kəmˈplaɪəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Acting in accordance with rules, regulations, or standards',
        example: 'Our products are in full compliance with EU regulations.',
        turkishMeaning: 'uyumluluk, uygunluk'
      }
    ],
    imageUrl: '/images/vocab/compliance.jpg',
    examples: ['Our products are in full compliance with EU regulations.'],
    collocations: ['regulatory compliance', 'ensure compliance', 'compliance certificate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_biz_006',
    word: 'FOB',
    ipa: '/ef əʊ biː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Free On Board - seller delivers to the port of shipment',
        example: 'The price is FOB Istanbul, excluding shipping.',
        turkishMeaning: 'FOB (gemide teslim)'
      }
    ],
    imageUrl: '/images/vocab/fob.jpg',
    examples: ['The price is FOB Istanbul, excluding shipping.'],
    collocations: ['FOB terms', 'FOB price', 'FOB port'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_biz_007',
    word: 'CIF',
    ipa: '/siː aɪ ef/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cost, Insurance, and Freight - price includes shipping',
        example: 'We can offer CIF Rotterdam for an additional €2,000.',
        turkishMeaning: 'CIF (mal bedeli, sigorta ve navlun dahil)'
      }
    ],
    imageUrl: '/images/vocab/cif.jpg',
    examples: ['We can offer CIF Rotterdam for an additional €2,000.'],
    collocations: ['CIF terms', 'CIF price', 'CIF destination'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_biz_008',
    word: 'invoice',
    ipa: '/ˈɪnvɔɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A document listing goods sent or services provided with amounts due',
        example: 'We will send the proforma invoice once you confirm the order.',
        turkishMeaning: 'fatura'
      }
    ],
    imageUrl: '/images/vocab/invoice.jpg',
    examples: ['We will send the proforma invoice once you confirm the order.'],
    collocations: ['proforma invoice', 'commercial invoice', 'issue an invoice'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_biz_009',
    word: 'deposit',
    ipa: '/dɪˈpɒzɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An initial payment as part of a larger amount due',
        example: 'We require a 30% deposit to begin production.',
        turkishMeaning: 'depozito, peşinat'
      }
    ],
    imageUrl: '/images/vocab/deposit.jpg',
    examples: ['We require a 30% deposit to begin production.'],
    collocations: ['pay a deposit', 'initial deposit', 'refundable deposit'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_biz_010',
    word: 'tender',
    ipa: '/ˈtendə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A formal offer to supply goods or services at a stated price',
        example: 'We submitted our tender before the deadline.',
        turkishMeaning: 'ihale, teklif'
      }
    ],
    imageUrl: '/images/vocab/tender.jpg',
    examples: ['We submitted our tender before the deadline.'],
    collocations: ['submit a tender', 'win the tender', 'tender process'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales', 'finance'],
    category: 'business'
  },

  // ==================== TRAVEL VOCABULARY ====================
    {
    id: 'vocab_travel_001',
    word: 'boarding pass',
    ipa: '/ˈbɔːdɪŋ pɑːs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A pass for boarding an aircraft',
        example: 'Please have your boarding pass and passport ready.',
        turkishMeaning: 'biniş kartı'
      }
    ],
    imageUrl: '/images/vocab/boarding-pass.jpg',
    examples: ['Please have your boarding pass and passport ready.'],
    collocations: ['mobile boarding pass', 'print boarding pass'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_002',
    word: 'customs',
    ipa: '/ˈkʌstəmz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The government department that checks goods entering a country',
        example: 'You need to go through customs after collecting your luggage.',
        turkishMeaning: 'gümrük'
      }
    ],
    imageUrl: '/images/vocab/customs.jpg',
    examples: ['You need to go through customs after collecting your luggage.'],
    collocations: ['clear customs', 'customs officer', 'customs declaration'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_003',
    word: 'departure lounge',
    ipa: '/dɪˈpɑːtʃə laʊndʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The area where passengers wait before boarding',
        example: 'I will be waiting in the departure lounge near Gate 15.',
        turkishMeaning: 'gidiş salonu'
      }
    ],
    imageUrl: '/images/vocab/departure-lounge.jpg',
    examples: ['I will be waiting in the departure lounge near Gate 15.'],
    collocations: ['business lounge', 'airport lounge'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_004',
    word: 'layover',
    ipa: '/ˈleɪəʊvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A period of time between connecting flights',
        example: 'I have a three-hour layover in Munich.',
        turkishMeaning: 'aktarma bekleme süresi'
      }
    ],
    imageUrl: '/images/vocab/layover.jpg',
    examples: ['I have a three-hour layover in Munich.'],
    collocations: ['long layover', 'short layover', 'overnight layover'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_005',
    word: 'jet lag',
    ipa: '/ˈdʒet læɡ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Tiredness and confusion after a long flight across time zones',
        example: 'I usually suffer from jet lag for a couple of days.',
        turkishMeaning: 'jet lag, saat farkı yorgunluğu'
      }
    ],
    imageUrl: '/images/vocab/jet-lag.jpg',
    examples: ['I usually suffer from jet lag for a couple of days.'],
    collocations: ['suffer from jet lag', 'overcome jet lag'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },

  // ==================== SOCIAL / DINING VOCABULARY ====================
    {
    id: 'vocab_social_001',
    word: 'starter',
    ipa: '/ˈstɑːtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A small dish served before the main course (British English)',
        example: 'Would you like to order a starter before the main course?',
        turkishMeaning: 'başlangıç yemeği, meze'
      }
    ],
    imageUrl: '/images/vocab/starter.jpg',
    examples: ['Would you like to order a starter before the main course?'],
    collocations: ['order a starter', 'share a starter'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_002',
    word: 'main course',
    ipa: '/meɪn kɔːs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The principal dish of a meal',
        example: 'For my main course, I will have the lamb.',
        turkishMeaning: 'ana yemek'
      }
    ],
    imageUrl: '/images/vocab/main-course.jpg',
    examples: ['For my main course, I will have the lamb.'],
    collocations: ['choose a main course', 'skip the main course'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_003',
    word: 'dessert',
    ipa: '/dɪˈzɜːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A sweet dish served at the end of a meal',
        example: 'Shall we look at the dessert menu?',
        turkishMeaning: 'tatlı'
      }
    ],
    imageUrl: '/images/vocab/dessert.jpg',
    examples: ['Shall we look at the dessert menu?'],
    collocations: ['dessert menu', 'skip dessert', 'share a dessert'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_004',
    word: 'tip',
    ipa: '/tɪp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Extra money given to service staff as a reward',
        example: 'In the UK, it is customary to leave a 10-15% tip.',
        turkishMeaning: 'bahşiş'
      }
    ],
    imageUrl: '/images/vocab/tip.jpg',
    examples: ['In the UK, it is customary to leave a 10-15% tip.'],
    collocations: ['leave a tip', 'generous tip', 'service charge'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_005',
    word: 'sparkling water',
    ipa: '/ˈspɑːklɪŋ ˈwɔːtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Water containing dissolved carbon dioxide gas',
        example: 'Could I have sparkling water with ice and lemon?',
        turkishMeaning: 'gazlı su, maden suyu'
      }
    ],
    imageUrl: '/images/vocab/sparkling-water.jpg',
    examples: ['Could I have sparkling water with ice and lemon?'],
    collocations: ['still or sparkling', 'bottle of sparkling water'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_006',
    word: 'reservation',
    ipa: '/ˌrezəˈveɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An arrangement to have a table kept for you',
        example: 'I have a reservation under my name.',
        turkishMeaning: 'rezervasyon'
      }
    ],
    imageUrl: '/images/vocab/reservation.jpg',
    examples: ['I have a reservation under my name.'],
    collocations: ['make a reservation', 'cancel a reservation', 'confirm a reservation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },

  // ==================== MORE BUSINESS VOCABULARY ====================
    {
    id: 'vocab_biz_011',
    word: 'schedule',
    ipa: '/ˈʃedjuːl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A plan of things to be done and the times when they will be done',
        example: 'Could you send me the meeting schedule for next week?',
        turkishMeaning: 'program, takvim'
      }
    ],
    imageUrl: '/images/vocab/schedule.jpg',
    examples: ['Could you send me the meeting schedule for next week?'],
    collocations: ['tight schedule', 'busy schedule', 'according to schedule'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_biz_012',
    word: 'deadline',
    ipa: '/ˈdedlaɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A time or date by which something must be finished',
        example: 'The deadline for the project is Friday at 5pm.',
        turkishMeaning: 'son teslim tarihi'
      }
    ],
    imageUrl: '/images/vocab/deadline.jpg',
    examples: ['The deadline for the project is Friday at 5pm.'],
    collocations: ['meet a deadline', 'miss a deadline', 'tight deadline'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_biz_013',
    word: 'colleague',
    ipa: '/ˈkɒliːɡ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Someone you work with, especially in a profession',
        example: 'I\'d like to introduce you to my colleague, Sarah.',
        turkishMeaning: 'meslektaş, iş arkadaşı'
      }
    ],
    imageUrl: '/images/vocab/colleague.jpg',
    examples: ['I\'d like to introduce you to my colleague, Sarah.'],
    collocations: ['senior colleague', 'work colleague', 'former colleague'],
    synonyms: ['coworker', 'associate'],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'workplace'],
    category: 'business'
  },
  {
    id: 'vocab_biz_014',
    word: 'appointment',
    ipa: '/əˈpɔɪntmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'An arrangement to meet someone at a particular time',
        example: 'I have an appointment with the client at 2 o\'clock.',
        turkishMeaning: 'randevu'
      }
    ],
    imageUrl: '/images/vocab/appointment.jpg',
    examples: ['I have an appointment with the client at 2 o\'clock.'],
    collocations: ['make an appointment', 'cancel an appointment', 'keep an appointment'],
    synonyms: ['meeting', 'arrangement'],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'workplace'],
    category: 'business'
  },
    {
    id: 'vocab_biz_015',
    word: 'negotiate',
    ipa: '/nɪˈɡəʊʃieɪt/',
    partOfSpeech: 'verb',
    definitions: [
      {
        meaning: 'To try to reach an agreement by formal discussion',
        example: 'We need to negotiate better terms with our suppliers.',
        turkishMeaning: 'müzakere etmek, pazarlık yapmak'
      }
    ],
    imageUrl: '/images/vocab/negotiate.jpg',
    examples: ['We need to negotiate better terms with our suppliers.'],
    collocations: ['negotiate a deal', 'negotiate terms', 'negotiate a contract'],
    synonyms: ['discuss', 'bargain'],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_biz_016',
    word: 'turnover',
    ipa: '/ˈtɜːnəʊvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The amount of business done in a period, measured in money',
        example: 'The company reported an annual turnover of £2 million.',
        turkishMeaning: 'ciro'
      }
    ],
    imageUrl: '/images/vocab/turnover.jpg',
    examples: ['The company reported an annual turnover of £2 million.'],
    collocations: ['annual turnover', 'staff turnover', 'high turnover'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_biz_017',
    word: 'redundant',
    ipa: '/rɪˈdʌndənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'No longer employed because there is no more work (British)',
        example: 'Many workers were made redundant due to restructuring.',
        turkishMeaning: 'işten çıkarılmış'
      }
    ],
    imageUrl: '/images/vocab/redundant.jpg',
    examples: ['Many workers were made redundant due to restructuring.'],
    collocations: ['make someone redundant', 'redundancy payment'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_biz_018',
    word: 'stakeholder',
    ipa: '/ˈsteɪkhəʊldə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A person with an interest in a business',
        example: 'We need to consult all stakeholders before making this decision.',
        turkishMeaning: 'paydaş'
      }
    ],
    imageUrl: '/images/vocab/stakeholder.jpg',
    examples: ['We need to consult all stakeholders before making this decision.'],
    collocations: ['key stakeholder', 'engage stakeholders', 'stakeholder meeting'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_biz_019',
    word: 'forecast',
    ipa: '/ˈfɔːkɑːst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'To predict or estimate a future event',
        example: 'We forecast a 20% increase in sales next quarter.',
        turkishMeaning: 'tahmin etmek, öngörmek'
      }
    ],
    imageUrl: '/images/vocab/forecast.jpg',
    examples: ['We forecast a 20% increase in sales next quarter.'],
    collocations: ['sales forecast', 'forecast growth', 'revenue forecast'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_biz_020',
    word: 'liaise',
    ipa: '/liˈeɪz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'To communicate and maintain contact with',
        example: 'I\'ll liaise with the marketing team about the launch.',
        turkishMeaning: 'irtibat kurmak, koordine olmak'
      }
    ],
    imageUrl: '/images/vocab/liaise.jpg',
    examples: ['I\'ll liaise with the marketing team about the launch.'],
    collocations: ['liaise with', 'liaise between', 'close liaison'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },

  // ==================== MORE TECHNICAL VOCABULARY ====================
    {
    id: 'vocab_tech_016',
    word: 'software',
    ipa: '/ˈsɒftweə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Programs used by a computer',
        example: 'We need to update the accounting software.',
        turkishMeaning: 'yazılım'
      }
    ],
    imageUrl: '/images/vocab/software.jpg',
    examples: ['We need to update the accounting software.'],
    collocations: ['software update', 'software developer', 'install software'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_017',
    word: 'database',
    ipa: '/ˈdeɪtəbeɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An organized collection of data stored electronically',
        example: 'All customer information is stored in our database.',
        turkishMeaning: 'veritabanı'
      }
    ],
    imageUrl: '/images/vocab/database.jpg',
    examples: ['All customer information is stored in our database.'],
    collocations: ['database management', 'database administrator', 'access a database'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_018',
    word: 'password',
    ipa: '/ˈpɑːswɜːd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A secret word or phrase used to gain access',
        example: 'Please enter your username and password.',
        turkishMeaning: 'şifre'
      }
    ],
    imageUrl: '/images/vocab/password.jpg',
    examples: ['Please enter your username and password.'],
    collocations: ['change password', 'strong password', 'password reset'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_019',
    word: 'network',
    ipa: '/ˈnetwɜːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A system of computers connected together',
        example: 'The file is available on the company network.',
        turkishMeaning: 'ağ, network'
      }
    ],
    imageUrl: '/images/vocab/network.jpg',
    examples: ['The file is available on the company network.'],
    collocations: ['network connection', 'network administrator', 'wireless network'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_020',
    word: 'download',
    ipa: '/ˌdaʊnˈləʊd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'To copy data from the internet to your computer',
        example: 'You can download the report from the shared drive.',
        turkishMeaning: 'indirmek'
      }
    ],
    imageUrl: '/images/vocab/download.jpg',
    examples: ['You can download the report from the shared drive.'],
    collocations: ['download speed', 'download file', 'download app'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_021',
    word: 'implement',
    ipa: '/ˈɪmplɪment/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'To put a plan or system into operation',
        example: 'We will implement the new system next month.',
        turkishMeaning: 'uygulamak, hayata geçirmek'
      }
    ],
    imageUrl: '/images/vocab/implement.jpg',
    examples: ['We will implement the new system next month.'],
    collocations: ['implement changes', 'implement a solution', 'implement a strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_022',
    word: 'infrastructure',
    ipa: '/ˈɪnfrəstrʌktʃə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The basic systems and facilities needed to function',
        example: 'We need to invest in our IT infrastructure.',
        turkishMeaning: 'altyapı'
      }
    ],
    imageUrl: '/images/vocab/infrastructure.jpg',
    examples: ['We need to invest in our IT infrastructure.'],
    collocations: ['IT infrastructure', 'network infrastructure', 'infrastructure upgrade'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_023',
    word: 'troubleshoot',
    ipa: '/ˈtrʌblʃuːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'To solve problems in a system or machine',
        example: 'The technician is troubleshooting the server issue.',
        turkishMeaning: 'sorun gidermek, arıza tespit etmek'
      }
    ],
    imageUrl: '/images/vocab/troubleshoot.jpg',
    examples: ['The technician is troubleshooting the server issue.'],
    collocations: ['troubleshoot problems', 'troubleshoot issues', 'troubleshooting guide'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_024',
    word: 'bandwidth',
    ipa: '/ˈbændwɪdθ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The amount of data transmitted in a fixed time',
        example: 'We need more bandwidth to handle the increased traffic.',
        turkishMeaning: 'bant genişliği'
      }
    ],
    imageUrl: '/images/vocab/bandwidth.jpg',
    examples: ['We need more bandwidth to handle the increased traffic.'],
    collocations: ['bandwidth limit', 'high bandwidth', 'bandwidth usage'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_025',
    word: 'configure',
    ipa: '/kənˈfɪɡə/',
    partOfSpeech: 'verb',
    definitions: [
      {
        meaning: 'To set up or arrange something in a particular way',
        example: 'You need to configure the settings before using the application.',
        turkishMeaning: 'yapılandırmak, ayarlamak'
      }
    ],
    imageUrl: '/images/vocab/configure.jpg',
    examples: ['You need to configure the settings before using the application.'],
    collocations: ['configure settings', 'configure system', 'network configuration'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },

  // ==================== MORE TRAVEL VOCABULARY ====================
    {
    id: 'vocab_travel_006',
    word: 'luggage',
    ipa: '/ˈlʌɡɪdʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Bags and cases that you carry when travelling (British)',
        example: 'Please collect your luggage from the baggage claim.',
        turkishMeaning: 'bagaj'
      }
    ],
    imageUrl: '/images/vocab/luggage.jpg',
    examples: ['Please collect your luggage from the baggage claim.'],
    collocations: ['hand luggage', 'check luggage', 'luggage allowance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_007',
    word: 'accommodation',
    ipa: '/əˌkɒməˈdeɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A place where you stay when travelling',
        example: 'The company will arrange accommodation for you.',
        turkishMeaning: 'konaklama'
      }
    ],
    imageUrl: '/images/vocab/accommodation.jpg',
    examples: ['The company will arrange accommodation for you.'],
    collocations: ['book accommodation', 'temporary accommodation', 'hotel accommodation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'accommodation'],
    category: 'travel'
  },
  {
    id: 'vocab_travel_008',
    word: 'itinerary',
    ipa: '/aɪˈtɪnərəri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A plan of a journey including the route and places to visit',
        example: 'I\'ll email you the full itinerary for the trip.',
        turkishMeaning: 'seyahat programı, güzergah'
      }
    ],
    imageUrl: '/images/vocab/itinerary.jpg',
    examples: ['I\'ll email you the full itinerary for the trip.'],
    collocations: ['travel itinerary', 'detailed itinerary', 'flight itinerary'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_009',
    word: 'commute',
    ipa: '/kəˈmjuːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'To travel regularly between work and home',
        example: 'I commute to London every day by train.',
        turkishMeaning: 'işe gidip gelmek'
      }
    ],
    imageUrl: '/images/vocab/commute.jpg',
    examples: ['I commute to London every day by train.'],
    collocations: ['daily commute', 'commute time', 'commute to work'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_010',
    word: 'complimentary',
    ipa: '/ˌkɒmplɪˈmentəri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Given free of charge',
        example: 'Breakfast is complimentary for hotel guests.',
        turkishMeaning: 'ücretsiz, ikram'
      }
    ],
    imageUrl: '/images/vocab/complimentary.jpg',
    examples: ['Breakfast is complimentary for hotel guests.'],
    collocations: ['complimentary breakfast', 'complimentary upgrade', 'complimentary service'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_011',
    word: 'enquiry',
    ipa: '/ɪnˈkwaɪəri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A request for information (British spelling)',
        example: 'For booking enquiries, please call our helpline.',
        turkishMeaning: 'soru, talep'
      }
    ],
    imageUrl: '/images/vocab/enquiry.jpg',
    examples: ['For booking enquiries, please call our helpline.'],
    collocations: ['make an enquiry', 'general enquiries', 'booking enquiry'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_012',
    word: 'refund',
    ipa: '/ˈriːfʌnd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Money that is paid back to you',
        example: 'You can request a refund if you cancel within 24 hours.',
        turkishMeaning: 'para iadesi'
      }
    ],
    imageUrl: '/images/vocab/refund.jpg',
    examples: ['You can request a refund if you cancel within 24 hours.'],
    collocations: ['request a refund', 'full refund', 'refund policy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_013',
    word: 'departure',
    ipa: '/dɪˈpɑːtʃə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The act of leaving',
        example: 'The departure time is 10:30 AM.',
        turkishMeaning: 'kalkış, hareket'
      }
    ],
    imageUrl: '/images/vocab/departure.jpg',
    examples: ['The departure time is 10:30 AM.'],
    collocations: ['departure gate', 'departure lounge', 'time of departure'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel'],
    category: 'travel'
  },
  {
    id: 'vocab_travel_014',
    word: 'voucher',
    ipa: '/ˈvaʊtʃə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A document exchanged for goods or services',
        example: 'Here\'s a voucher for a free drink at the bar.',
        turkishMeaning: 'kupon, fiş'
      }
    ],
    imageUrl: '/images/vocab/voucher.jpg',
    examples: ['Here\'s a voucher for a free drink at the bar.'],
    collocations: ['gift voucher', 'discount voucher', 'voucher code'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_015',
    word: 'vicinity',
    ipa: '/vəˈsɪnəti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The area near or surrounding a place',
        example: 'There are several restaurants in the vicinity of the hotel.',
        turkishMeaning: 'yakın çevre, civar'
      }
    ],
    imageUrl: '/images/vocab/vicinity.jpg',
    examples: ['There are several restaurants in the vicinity of the hotel.'],
    collocations: ['in the vicinity', 'immediate vicinity', 'within the vicinity'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel'],
    category: 'travel'
  },

  // ==================== DAILY LIFE VOCABULARY (British English) ====================
  {
    id: 'vocab_daily_001',
    word: 'queue',
    ipa: '/kjuː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A line of people waiting for something (British)',
        example: 'There\'s quite a long queue at the post office.',
        turkishMeaning: 'kuyruk, sıra'
      }
    ],
    imageUrl: '/images/vocab/queue.jpg',
    examples: ['There\'s quite a long queue at the post office.'],
    collocations: ['join the queue', 'queue up', 'long queue'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_002',
    word: 'flat',
    ipa: '/flæt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A set of rooms for living in on one floor (British)',
        example: 'I rent a two-bedroom flat in central London.',
        turkishMeaning: 'daire'
      }
    ],
    imageUrl: '/images/vocab/flat.jpg',
    examples: ['I rent a two-bedroom flat in central London.'],
    collocations: ['ground floor flat', 'rent a flat', 'flat share'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_003',
    word: 'fortnight',
    ipa: '/ˈfɔːtnaɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A period of two weeks (British)',
        example: 'I\'ll be on holiday for a fortnight.',
        turkishMeaning: 'iki hafta'
      }
    ],
    imageUrl: '/images/vocab/fortnight.jpg',
    examples: ['I\'ll be on holiday for a fortnight.'],
    collocations: ['in a fortnight', 'last fortnight', 'every fortnight'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_004',
    word: 'rubbish',
    ipa: '/ˈrʌbɪʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Waste material (British)',
        example: 'Please put the rubbish in the bin.',
        turkishMeaning: 'çöp'
      }
    ],
    imageUrl: '/images/vocab/rubbish.jpg',
    examples: ['Please put the rubbish in the bin.'],
    collocations: ['rubbish bin', 'take out the rubbish', 'household rubbish'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_005',
    word: 'brilliant',
    ipa: '/ˈbrɪliənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Extremely good, excellent (British informal)',
        example: 'That\'s a brilliant idea!',
        turkishMeaning: 'harika, muhteşem'
      }
    ],
    imageUrl: '/images/vocab/brilliant.jpg',
    examples: ['That\'s a brilliant idea!'],
    collocations: ['absolutely brilliant', 'brilliant performance', 'brilliant idea'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_006',
    word: 'chuffed',
    ipa: '/tʃʌft/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very pleased or happy (British informal)',
        example: 'I\'m absolutely chuffed with my exam results!',
        turkishMeaning: 'çok memnun, mutlu'
      }
    ],
    imageUrl: '/images/vocab/chuffed.jpg',
    examples: ['I\'m absolutely chuffed with my exam results!'],
    collocations: ['chuffed to bits', 'dead chuffed', 'absolutely chuffed'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_007',
    word: 'reckon',
    ipa: '/ˈrekən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'To think or suppose (British informal)',
        example: 'I reckon we should leave by 6 o\'clock.',
        turkishMeaning: 'sanmak, düşünmek'
      }
    ],
    imageUrl: '/images/vocab/reckon.jpg',
    examples: ['I reckon we should leave by 6 o\'clock.'],
    collocations: ['I reckon', 'what do you reckon', 'reckon on'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_008',
    word: 'knackered',
    ipa: '/ˈnækəd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Extremely tired (British slang)',
        example: 'I\'m absolutely knackered after that long meeting.',
        turkishMeaning: 'bitkin, çok yorgun'
      }
    ],
    imageUrl: '/images/vocab/knackered.jpg',
    examples: ['I\'m absolutely knackered after that long meeting.'],
    collocations: ['absolutely knackered', 'feel knackered', 'dead knackered'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_009',
    word: 'proper',
    ipa: '/ˈprɒpə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Real, genuine (British informal)',
        example: 'That was a proper cup of tea!',
        turkishMeaning: 'gerçek, düzgün'
      }
    ],
    imageUrl: '/images/vocab/proper.jpg',
    examples: ['That was a proper cup of tea!'],
    collocations: ['proper job', 'proper meal', 'proper good'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_010',
    word: 'sorted',
    ipa: '/ˈsɔːtɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Organized or arranged (British informal)',
        example: 'Don\'t worry, everything\'s sorted for tomorrow.',
        turkishMeaning: 'halledilmiş, ayarlanmış'
      }
    ],
    imageUrl: '/images/vocab/sorted.jpg',
    examples: ['Don\'t worry, everything\'s sorted for tomorrow.'],
    collocations: ['get sorted', 'all sorted', 'sorted out'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_011',
    word: 'keen',
    ipa: '/kiːn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very interested or enthusiastic (British)',
        example: 'I\'m very keen to visit the new office.',
        turkishMeaning: 'istekli, hevesli'
      }
    ],
    imageUrl: '/images/vocab/keen.jpg',
    examples: ['I\'m very keen to visit the new office.'],
    collocations: ['keen on', 'keen to', 'very keen'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_012',
    word: 'lovely',
    ipa: '/ˈlʌvli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very pleasant or attractive (British)',
        example: 'What a lovely day!',
        turkishMeaning: 'hoş, güzel'
      }
    ],
    imageUrl: '/images/vocab/lovely.jpg',
    examples: ['What a lovely day!'],
    collocations: ['lovely weather', 'lovely to meet you', 'how lovely'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_013',
    word: 'mate',
    ipa: '/meɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Friend (British informal)',
        example: 'I\'m meeting some mates for a drink after work.',
        turkishMeaning: 'arkadaş, ahbap'
      }
    ],
    imageUrl: '/images/vocab/mate.jpg',
    examples: ['I\'m meeting some mates for a drink after work.'],
    collocations: ['good mate', 'work mate', 'old mate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_014',
    word: 'quid',
    ipa: '/kwɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'One pound sterling (British slang)',
        example: 'That costs twenty quid.',
        turkishMeaning: 'bir sterlin'
      }
    ],
    imageUrl: '/images/vocab/quid.jpg',
    examples: ['That costs twenty quid.'],
    collocations: ['a few quid', 'fifty quid', 'worth a quid'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_015',
    word: 'takeaway',
    ipa: '/ˈteɪkəweɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Food bought from a restaurant to eat elsewhere (British)',
        example: 'Shall we order a takeaway tonight?',
        turkishMeaning: 'paket yemek'
      }
    ],
    imageUrl: '/images/vocab/takeaway.jpg',
    examples: ['Shall we order a takeaway tonight?'],
    collocations: ['get a takeaway', 'takeaway menu', 'Chinese takeaway'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_016',
    word: 'petrol',
    ipa: '/ˈpetrəl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Fuel for cars (British)',
        example: 'I need to stop for petrol.',
        turkishMeaning: 'benzin'
      }
    ],
    imageUrl: '/images/vocab/petrol.jpg',
    examples: ['I need to stop for petrol.'],
    collocations: ['petrol station', 'unleaded petrol', 'petrol price'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_017',
    word: 'motorway',
    ipa: '/ˈməʊtəweɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A major road designed for fast traffic (British)',
        example: 'Take the M25 motorway towards London.',
        turkishMeaning: 'otoyol'
      }
    ],
    imageUrl: '/images/vocab/motorway.jpg',
    examples: ['Take the M25 motorway towards London.'],
    collocations: ['motorway services', 'join the motorway', 'motorway traffic'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_018',
    word: 'whilst',
    ipa: '/waɪlst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'While (British formal)',
        example: 'Whilst I understand your concerns, we must proceed.',
        turkishMeaning: 'iken, esnasında'
      }
    ],
    imageUrl: '/images/vocab/whilst.jpg',
    examples: ['Whilst I understand your concerns, we must proceed.'],
    collocations: ['whilst working', 'whilst in London'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },

  // ==================== ADDITIONAL BUSINESS VOCABULARY ====================
    {
    id: 'vocab_business_021',
    word: 'turnover',
    ipa: '/ˈtɜːnəʊvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The total amount of money taken by a business in a particular period',
        example: 'Our annual turnover has increased by 15%.',
        turkishMeaning: 'ciro, hasılat'
      }
    ],
    imageUrl: '/images/vocab/turnover.jpg',
    examples: ['Our annual turnover has increased by 15%.'],
    collocations: ['annual turnover', 'increase turnover', 'turnover rate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_business_022',
    word: 'franchise',
    ipa: '/ˈfræntʃaɪz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Authorization granted to sell a company\'s goods or services',
        example: 'We are looking to expand through franchise opportunities.',
        turkishMeaning: 'franchise, bayilik'
      }
    ],
    imageUrl: '/images/vocab/franchise.jpg',
    examples: ['We are looking to expand through franchise opportunities.'],
    collocations: ['franchise agreement', 'franchise fee', 'franchise owner'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_023',
    word: 'merger',
    ipa: '/ˈmɜːdʒə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A combination of two companies into one',
        example: 'The merger was completed in the first quarter.',
        turkishMeaning: 'birleşme, füzyon'
      }
    ],
    imageUrl: '/images/vocab/merger.jpg',
    examples: ['The merger was completed in the first quarter.'],
    collocations: ['merger agreement', 'merger talks', 'announce a merger'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_024',
    word: 'leverage',
    ipa: '/ˈliːvərɪdʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The power to influence a person or situation',
        example: 'We can leverage our market position to negotiate better terms.',
        turkishMeaning: 'kaldıraç etkisi, etki gücü'
      }
    ],
    imageUrl: '/images/vocab/leverage.jpg',
    examples: ['We can leverage our market position to negotiate better terms.'],
    collocations: ['leverage assets', 'financial leverage', 'gain leverage'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_025',
    word: 'incentive',
    ipa: '/ɪnˈsentɪv/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Something that motivates or encourages someone to do something',
        example: 'We offer performance incentives to our sales team.',
        turkishMeaning: 'teşvik, prim, ikramiye'
      }
    ],
    imageUrl: '/images/vocab/incentive.jpg',
    examples: ['We offer performance incentives to our sales team.'],
    collocations: ['financial incentive', 'incentive scheme', 'provide incentives'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_026',
    word: 'redundancy',
    ipa: '/rɪˈdʌndənsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Loss of job due to company restructuring (British)',
        example: 'Fifty staff were made redundant last month.',
        turkishMeaning: 'işten çıkarma, personel fazlalığı'
      }
    ],
    imageUrl: '/images/vocab/redundancy.jpg',
    examples: ['Fifty staff were made redundant last month.'],
    collocations: ['voluntary redundancy', 'redundancy payment', 'face redundancy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_027',
    word: 'procurement',
    ipa: '/prəˈkjʊəmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'The action of obtaining or procuring something',
        example: 'Our procurement department handles all supplier contracts.',
        turkishMeaning: 'tedarik, satın alma'
      }
    ],
    imageUrl: '/images/vocab/procurement.jpg',
    examples: ['Our procurement department handles all supplier contracts.'],
    collocations: ['procurement process', 'procurement manager', 'procurement strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_028',
    word: 'compliance',
    ipa: '/kəmˈplaɪəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The action of complying with a rule or regulation',
        example: 'We ensure full compliance with industry regulations.',
        turkishMeaning: 'uyum, uygunluk'
      }
    ],
    imageUrl: '/images/vocab/compliance.jpg',
    examples: ['We ensure full compliance with industry regulations.'],
    collocations: ['regulatory compliance', 'compliance officer', 'ensure compliance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_business_029',
    word: 'accountable',
    ipa: '/əˈkaʊntəbl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Required to explain actions or decisions',
        example: 'Managers are accountable for their team\'s performance.',
        turkishMeaning: 'sorumlu, hesap verebilir'
      }
    ],
    imageUrl: '/images/vocab/accountable.jpg',
    examples: ['Managers are accountable for their team\'s performance.'],
    collocations: ['hold accountable', 'accountable for', 'remain accountable'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_030',
    word: 'stakeholder',
    ipa: '/ˈsteɪkhəʊldə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A person with an interest in a business',
        example: 'We need to consult all stakeholders before making this decision.',
        turkishMeaning: 'paydaş'
      }
    ],
    imageUrl: '/images/vocab/stakeholder.jpg',
    examples: ['We need to consult all stakeholders before making this decision.'],
    collocations: ['key stakeholder', 'stakeholder engagement', 'stakeholder meeting'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_031',
    word: 'liability',
    ipa: '/ˌlaɪəˈbɪləti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The state of being legally responsible for something',
        example: 'The company has limited liability for damages.',
        turkishMeaning: 'sorumluluk, yükümlülük'
      }
    ],
    imageUrl: '/images/vocab/liability.jpg',
    examples: ['The company has limited liability for damages.'],
    collocations: ['legal liability', 'limited liability', 'liability insurance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_032',
    word: 'overheads',
    ipa: '/ˈəʊvəhedz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Ongoing business expenses not directly attributed to creating a product',
        example: 'We need to reduce our overheads to improve profitability.',
        turkishMeaning: 'genel giderler'
      }
    ],
    imageUrl: '/images/vocab/overheads.jpg',
    examples: ['We need to reduce our overheads to improve profitability.'],
    collocations: ['reduce overheads', 'overhead costs', 'administrative overheads'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_033',
    word: 'quarterly',
    ipa: '/ˈkwɔːtəli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Done or produced four times a year',
        example: 'We publish quarterly reports for our investors.',
        turkishMeaning: 'üç aylık, çeyrek dönemlik'
      }
    ],
    imageUrl: '/images/vocab/quarterly.jpg',
    examples: ['We publish quarterly reports for our investors.'],
    collocations: ['quarterly report', 'quarterly meeting', 'quarterly results'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_034',
    word: 'feasibility',
    ipa: '/ˌfiːzəˈbɪləti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The state of being possible or practical to do easily',
        example: 'We conducted a feasibility study before starting the project.',
        turkishMeaning: 'fizibilite, uygulanabilirlik'
      }
    ],
    imageUrl: '/images/vocab/feasibility.jpg',
    examples: ['We conducted a feasibility study before starting the project.'],
    collocations: ['feasibility study', 'assess feasibility', 'technical feasibility'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_035',
    word: 'synergy',
    ipa: '/ˈsɪnədʒi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The interaction of elements that produce a greater effect together',
        example: 'The merger will create synergy between the two companies.',
        turkishMeaning: 'sinerji'
      }
    ],
    imageUrl: '/images/vocab/synergy.jpg',
    examples: ['The merger will create synergy between the two companies.'],
    collocations: ['create synergy', 'synergy effects', 'team synergy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_036',
    word: 'benchmark',
    ipa: '/ˈbentʃmɑːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A standard against which things may be compared',
        example: 'We use industry benchmarks to measure our performance.',
        turkishMeaning: 'kıyaslama standardı, referans noktası'
      }
    ],
    imageUrl: '/images/vocab/benchmark.jpg',
    examples: ['We use industry benchmarks to measure our performance.'],
    collocations: ['industry benchmark', 'set a benchmark', 'benchmark against'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_037',
    word: 'portfolio',
    ipa: '/pɔːtˈfəʊliəʊ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A range of products or investments',
        example: 'We have a diverse portfolio of products.',
        turkishMeaning: 'portföy'
      }
    ],
    imageUrl: '/images/vocab/portfolio.jpg',
    examples: ['We have a diverse portfolio of products.'],
    collocations: ['product portfolio', 'investment portfolio', 'portfolio management'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_038',
    word: 'subsidiary',
    ipa: '/səbˈsɪdiəri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A company controlled by another company',
        example: 'The factory operates as a subsidiary of the parent company.',
        turkishMeaning: 'bağlı şirket, yan kuruluş'
      }
    ],
    imageUrl: '/images/vocab/subsidiary.jpg',
    examples: ['The factory operates as a subsidiary of the parent company.'],
    collocations: ['wholly-owned subsidiary', 'parent company and subsidiaries'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_039',
    word: 'redundant',
    ipa: '/rɪˈdʌndənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'No longer needed or useful (or made unemployed - British)',
        example: 'The new system makes the old process redundant.',
        turkishMeaning: 'gereksiz, fazla (işten çıkarılmış)'
      }
    ],
    imageUrl: '/images/vocab/redundant.jpg',
    examples: ['The new system makes the old process redundant.'],
    collocations: ['make redundant', 'become redundant', 'redundant systems'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_040',
    word: 'liquidate',
    ipa: '/ˈlɪkwɪdeɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'To close down a business and sell its assets',
        example: 'The company was forced to liquidate its assets.',
        turkishMeaning: 'tasfiye etmek'
      }
    ],
    imageUrl: '/images/vocab/liquidate.jpg',
    examples: ['The company was forced to liquidate its assets.'],
    collocations: ['liquidate assets', 'liquidate stock', 'liquidation process'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },

  // ==================== ADDITIONAL TECHNICAL VOCABULARY ====================
    {
    id: 'vocab_tech_026',
    word: 'algorithm',
    ipa: '/ˈælɡərɪðəm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A process or set of rules to be followed in calculations',
        example: 'The algorithm optimises the route for fuel efficiency.',
        turkishMeaning: 'algoritma'
      }
    ],
    imageUrl: '/images/vocab/algorithm.jpg',
    examples: ['The algorithm optimises the route for fuel efficiency.'],
    collocations: ['machine learning algorithm', 'search algorithm', 'optimize algorithm'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_027',
    word: 'bandwidth',
    ipa: '/ˈbændwɪdθ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The maximum rate of data transfer across a network',
        example: 'We need more bandwidth to handle the increased traffic.',
        turkishMeaning: 'bant genişliği'
      }
    ],
    imageUrl: '/images/vocab/bandwidth.jpg',
    examples: ['We need more bandwidth to handle the increased traffic.'],
    collocations: ['internet bandwidth', 'bandwidth capacity', 'high bandwidth'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_028',
    word: 'firmware',
    ipa: '/ˈfɜːmweə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Permanent software programmed into read-only memory',
        example: 'You need to update the firmware to fix the bug.',
        turkishMeaning: 'donanım yazılımı'
      }
    ],
    imageUrl: '/images/vocab/firmware.jpg',
    examples: ['You need to update the firmware to fix the bug.'],
    collocations: ['firmware update', 'install firmware', 'firmware version'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_029',
    word: 'encryption',
    ipa: '/ɪnˈkrɪpʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The process of converting information into a code',
        example: 'All data is protected by 256-bit encryption.',
        turkishMeaning: 'şifreleme'
      }
    ],
    imageUrl: '/images/vocab/encryption.jpg',
    examples: ['All data is protected by 256-bit encryption.'],
    collocations: ['data encryption', 'encryption key', 'end-to-end encryption'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_030',
    word: 'interface',
    ipa: '/ˈɪntəfeɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A point where two systems meet and interact',
        example: 'The user interface is intuitive and easy to navigate.',
        turkishMeaning: 'arayüz'
      }
    ],
    imageUrl: '/images/vocab/interface.jpg',
    examples: ['The user interface is intuitive and easy to navigate.'],
    collocations: ['user interface', 'interface design', 'graphical interface'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_031',
    word: 'diagnostics',
    ipa: '/ˌdaɪəɡˈnɒstɪks/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The process of identifying the nature of a problem',
        example: 'Run a diagnostics check to identify the fault.',
        turkishMeaning: 'teşhis, tanılama'
      }
    ],
    imageUrl: '/images/vocab/diagnostics.jpg',
    examples: ['Run a diagnostics check to identify the fault.'],
    collocations: ['run diagnostics', 'diagnostics tool', 'system diagnostics'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_032',
    word: 'threshold',
    ipa: '/ˈθreʃhəʊld/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A level or point at which something starts or changes',
        example: 'The sensor triggers when the temperature exceeds the threshold.',
        turkishMeaning: 'eşik,临界值'
      }
    ],
    imageUrl: '/images/vocab/threshold.jpg',
    examples: ['The sensor triggers when the temperature exceeds the threshold.'],
    collocations: ['threshold level', 'exceed threshold', 'set threshold'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_033',
    word: 'protocol',
    ipa: '/ˈprəʊtəkɒl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A set of rules governing data transmission',
        example: 'We use HTTPS protocol for secure communication.',
        turkishMeaning: 'protokol'
      }
    ],
    imageUrl: '/images/vocab/protocol.jpg',
    examples: ['We use HTTPS protocol for secure communication.'],
    collocations: ['communication protocol', 'network protocol', 'follow protocol'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_034',
    word: 'redundancy',
    ipa: '/rɪˈdʌndənsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Backup systems to prevent failure',
        example: 'The system has built-in redundancy for reliability.',
        turkishMeaning: 'yedeklilik'
      }
    ],
    imageUrl: '/images/vocab/redundancy.jpg',
    examples: ['The system has built-in redundancy for reliability.'],
    collocations: ['system redundancy', 'redundancy backup', 'data redundancy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_035',
    word: 'latency',
    ipa: '/ˈleɪtənsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The delay before a transfer of data begins',
        example: 'Low latency is crucial for real-time applications.',
        turkishMeaning: 'gecikme süresi'
      }
    ],
    imageUrl: '/images/vocab/latency.jpg',
    examples: ['Low latency is crucial for real-time applications.'],
    collocations: ['network latency', 'reduce latency', 'latency issues'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_036',
    word: 'scalability',
    ipa: '/ˌskeɪləˈbɪləti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The capacity to be changed in size or scale',
        example: 'The platform offers excellent scalability for growing businesses.',
        turkishMeaning: 'ölçeklenebilirlik'
      }
    ],
    imageUrl: '/images/vocab/scalability.jpg',
    examples: ['The platform offers excellent scalability for growing businesses.'],
    collocations: ['system scalability', 'scalability issues', 'improve scalability'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_037',
    word: 'middleware',
    ipa: '/ˈmɪdlweə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Software that acts as a bridge between systems',
        example: 'The middleware handles communication between the database and application.',
        turkishMeaning: 'ara yazılım'
      }
    ],
    imageUrl: '/images/vocab/middleware.jpg',
    examples: ['The middleware handles communication between the database and application.'],
    collocations: ['middleware layer', 'integration middleware', 'install middleware'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_038',
    word: 'parameter',
    ipa: '/pəˈræmɪtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A numerical or other measurable factor',
        example: 'Adjust the parameters to optimise performance.',
        turkishMeaning: 'parametre'
      }
    ],
    imageUrl: '/images/vocab/parameter.jpg',
    examples: ['Adjust the parameters to optimise performance.'],
    collocations: ['set parameters', 'system parameters', 'parameter values'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_039',
    word: 'calibration',
    ipa: '/ˌkælɪˈbreɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The process of adjusting the accuracy of equipment',
        example: 'The sensors require regular calibration for accuracy.',
        turkishMeaning: 'kalibrasyon'
      }
    ],
    imageUrl: '/images/vocab/calibration.jpg',
    examples: ['The sensors require regular calibration for accuracy.'],
    collocations: ['calibration process', 'require calibration', 'calibration certificate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_040',
    word: 'throughput',
    ipa: '/ˈθruːpʊt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The amount of material or items passing through a system',
        example: 'The system can handle a throughput of 1000 transactions per second.',
        turkishMeaning: 'verim, işlem kapasitesi'
      }
    ],
    imageUrl: '/images/vocab/throughput.jpg',
    examples: ['The system can handle a throughput of 1000 transactions per second.'],
    collocations: ['network throughput', 'increase throughput', 'throughput capacity'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_041',
    word: 'deployment',
    ipa: '/dɪˈplɔɪmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'The action of bringing resources into effective action',
        example: 'The software deployment is scheduled for next week.',
        turkishMeaning: 'dağıtım, konuşlandırma'
      }
    ],
    imageUrl: '/images/vocab/deployment.jpg',
    examples: ['The software deployment is scheduled for next week.'],
    collocations: ['software deployment', 'deployment process', 'rapid deployment'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_042',
    word: 'iteration',
    ipa: '/ˌɪtəˈreɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The repetition of a process or cycle',
        example: 'Each iteration brings us closer to the final product.',
        turkishMeaning: 'yineleme, tekrarlama'
      }
    ],
    imageUrl: '/images/vocab/iteration.jpg',
    examples: ['Each iteration brings us closer to the final product.'],
    collocations: ['next iteration', 'iteration cycle', 'design iteration'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_043',
    word: 'repository',
    ipa: '/rɪˈpɒzətri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A central location for storing and managing data',
        example: 'All code is stored in the Git repository.',
        turkishMeaning: 'depo, veri deposu'
      }
    ],
    imageUrl: '/images/vocab/repository.jpg',
    examples: ['All code is stored in the Git repository.'],
    collocations: ['code repository', 'data repository', 'central repository'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_044',
    word: 'bottleneck',
    ipa: '/ˈbɒtlnek/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A point of congestion in a system',
        example: 'The database is causing a bottleneck in performance.',
        turkishMeaning: 'darboğaz, tıkanıklık'
      }
    ],
    imageUrl: '/images/vocab/bottleneck.jpg',
    examples: ['The database is causing a bottleneck in performance.'],
    collocations: ['performance bottleneck', 'identify bottleneck', 'remove bottleneck'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_045',
    word: 'compliance',
    ipa: '/kəmˈplaɪəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Meeting specified requirements or standards',
        example: 'The system meets all ISO compliance standards.',
        turkishMeaning: 'uyumluluk'
      }
    ],
    imageUrl: '/images/vocab/compliance.jpg',
    examples: ['The system meets all ISO compliance standards.'],
    collocations: ['regulatory compliance', 'compliance testing', 'ensure compliance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'safety'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_046',
    word: 'optimize',
    ipa: '/ˈɒptɪmaɪz/',
    partOfSpeech: 'verb',
    definitions: [
      {
        meaning: 'Make the best or most effective use of',
        example: 'We need to optimize the code for better performance.',
        turkishMeaning: 'optimize etmek, en iyi hale getirmek'
      }
    ],
    imageUrl: '/images/vocab/optimize.jpg',
    examples: ['We need to optimize the code for better performance.'],
    collocations: ['optimize performance', 'optimize process', 'optimize efficiency'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_047',
    word: 'configuration',
    ipa: '/kənˌfɪɡəˈreɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The arrangement of elements in a particular form',
        example: 'Check the network configuration settings.',
        turkishMeaning: 'yapılandırma, konfigürasyon'
      }
    ],
    imageUrl: '/images/vocab/configuration.jpg',
    examples: ['Check the network configuration settings.'],
    collocations: ['system configuration', 'configuration file', 'default configuration'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_048',
    word: 'compatibility',
    ipa: '/kəmˌpætəˈbɪləti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The ability of systems to work together',
        example: 'The software has backward compatibility with older versions.',
        turkishMeaning: 'uyumluluk'
      }
    ],
    imageUrl: '/images/vocab/compatibility.jpg',
    examples: ['The software has backward compatibility with older versions.'],
    collocations: ['backward compatibility', 'ensure compatibility', 'compatibility issues'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_049',
    word: 'bandwidth',
    ipa: '/ˈbændwɪdθ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The range of frequencies or data capacity',
        example: 'Higher bandwidth allows faster data transfer.',
        turkishMeaning: 'bant genişliği'
      }
    ],
    imageUrl: '/images/vocab/bandwidth.jpg',
    examples: ['Higher bandwidth allows faster data transfer.'],
    collocations: ['available bandwidth', 'bandwidth limitation', 'increase bandwidth'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_050',
    word: 'specification',
    ipa: '/ˌspesɪfɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A detailed description of design criteria',
        example: 'Please refer to the technical specification document.',
        turkishMeaning: 'şartname, spesifikasyon'
      }
    ],
    imageUrl: '/images/vocab/specification.jpg',
    examples: ['Please refer to the technical specification document.'],
    collocations: ['technical specification', 'meet specifications', 'product specification'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_051',
    word: 'implement',
    ipa: '/ˈɪmplɪment/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Put a decision or plan into effect',
        example: 'We will implement the new system next month.',
        turkishMeaning: 'uygulamak, hayata geçirmek'
      }
    ],
    imageUrl: '/images/vocab/implement.jpg',
    examples: ['We will implement the new system next month.'],
    collocations: ['implement changes', 'implement system', 'implement solution'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },

  // ==================== ADDITIONAL TRAVEL VOCABULARY ====================
    {
    id: 'vocab_travel_016',
    word: 'itinerary',
    ipa: '/aɪˈtɪnərəri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A planned route or journey',
        example: 'Please send me the itinerary for the business trip.',
        turkishMeaning: 'güzergah, seyahat programı'
      }
    ],
    imageUrl: '/images/vocab/itinerary.jpg',
    examples: ['Please send me the itinerary for the business trip.'],
    collocations: ['travel itinerary', 'detailed itinerary', 'flexible itinerary'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_017',
    word: 'layover',
    ipa: '/ˈleɪəʊvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A period of rest during a journey',
        example: 'We have a three-hour layover in Amsterdam.',
        turkishMeaning: 'aktarmalı uçuşta bekleme'
      }
    ],
    imageUrl: '/images/vocab/layover.jpg',
    examples: ['We have a three-hour layover in Amsterdam.'],
    collocations: ['short layover', 'overnight layover', 'layover time'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_018',
    word: 'customs',
    ipa: '/ˈkʌstəmz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The official department that administers duties on imports',
        example: 'You must declare these items at customs.',
        turkishMeaning: 'gümrük'
      }
    ],
    imageUrl: '/images/vocab/customs.jpg',
    examples: ['You must declare these items at customs.'],
    collocations: ['pass through customs', 'customs declaration', 'customs officer'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_019',
    word: 'visa',
    ipa: '/ˈviːzə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An endorsement on a passport allowing entry to a country',
        example: 'I need to apply for a business visa.',
        turkishMeaning: 'vize'
      }
    ],
    imageUrl: '/images/vocab/visa.jpg',
    examples: ['I need to apply for a business visa.'],
    collocations: ['visa application', 'tourist visa', 'visa requirements'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_020',
    word: 'accommodation',
    ipa: '/əˌkɒməˈdeɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A place to live or stay',
        example: 'The company will arrange accommodation for the conference.',
        turkishMeaning: 'konaklama'
      }
    ],
    imageUrl: '/images/vocab/accommodation.jpg',
    examples: ['The company will arrange accommodation for the conference.'],
    collocations: ['book accommodation', 'hotel accommodation', 'suitable accommodation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'accommodation'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_021',
    word: 'boarding',
    ipa: '/ˈbɔːdɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The process of getting on a plane, ship, or train',
        example: 'Boarding will begin at gate 24 in 30 minutes.',
        turkishMeaning: 'biniş'
      }
    ],
    imageUrl: '/images/vocab/boarding.jpg',
    examples: ['Boarding will begin at gate 24 in 30 minutes.'],
    collocations: ['boarding pass', 'boarding gate', 'priority boarding'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_022',
    word: 'baggage',
    ipa: '/ˈbæɡɪdʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Personal belongings packed for travelling',
        example: 'Your baggage allowance is 23 kilograms.',
        turkishMeaning: 'bagaj'
      }
    ],
    imageUrl: '/images/vocab/baggage.jpg',
    examples: ['Your baggage allowance is 23 kilograms.'],
    collocations: ['baggage claim', 'excess baggage', 'baggage allowance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_023',
    word: 'terminal',
    ipa: '/ˈtɜːmɪnl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'A departure and arrival building at an airport',
        example: 'International flights depart from Terminal 5.',
        turkishMeaning: 'terminal'
      }
    ],
    imageUrl: '/images/vocab/terminal.jpg',
    examples: ['International flights depart from Terminal 5.'],
    collocations: ['airport terminal', 'departure terminal', 'change terminals'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_024',
    word: 'departure',
    ipa: '/dɪˈpɑːtʃə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The action of leaving, especially to start a journey',
        example: 'The departure time is 14:30.',
        turkishMeaning: 'kalkış, hareket'
      }
    ],
    imageUrl: '/images/vocab/departure.jpg',
    examples: ['The departure time is 14:30.'],
    collocations: ['departure gate', 'departure lounge', 'departure time'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_025',
    word: 'transit',
    ipa: '/ˈtrænzɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The carrying of people or things from one place to another',
        example: 'Passengers in transit do not need to collect their luggage.',
        turkishMeaning: 'transit, geçiş'
      }
    ],
    imageUrl: '/images/vocab/transit.jpg',
    examples: ['Passengers in transit do not need to collect their luggage.'],
    collocations: ['in transit', 'transit visa', 'transit passenger'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_026',
    word: 'voucher',
    ipa: '/ˈvaʊtʃə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A small printed piece of paper that entitles you to something',
        example: 'Here is your hotel voucher.',
        turkishMeaning: 'kupon, fiş'
      }
    ],
    imageUrl: '/images/vocab/voucher.jpg',
    examples: ['Here is your hotel voucher.'],
    collocations: ['hotel voucher', 'meal voucher', 'gift voucher'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_027',
    word: 'surcharge',
    ipa: '/ˈsɜːtʃɑːdʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An additional charge or payment',
        example: 'There is a £50 surcharge for excess baggage.',
        turkishMeaning: 'ek ücret'
      }
    ],
    imageUrl: '/images/vocab/surcharge.jpg',
    examples: ['There is a £50 surcharge for excess baggage.'],
    collocations: ['fuel surcharge', 'additional surcharge', 'surcharge fee'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_028',
    word: 'currency',
    ipa: '/ˈkʌrənsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A system of money in general use',
        example: 'What is the local currency in Turkey?',
        turkishMeaning: 'para birimi'
      }
    ],
    imageUrl: '/images/vocab/currency.jpg',
    examples: ['What is the local currency in Turkey?'],
    collocations: ['foreign currency', 'currency exchange', 'local currency'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_029',
    word: 'embassy',
    ipa: '/ˈembəsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The official residence of an ambassador',
        example: 'Contact the British Embassy if you lose your passport.',
        turkishMeaning: 'büyükelçilik'
      }
    ],
    imageUrl: '/images/vocab/embassy.jpg',
    examples: ['Contact the British Embassy if you lose your passport.'],
    collocations: ['British embassy', 'contact embassy', 'embassy staff'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_030',
    word: 'stopover',
    ipa: '/ˈstɒpəʊvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A break in a journey',
        example: 'We made a stopover in Dubai.',
        turkishMeaning: 'mola, durak'
      }
    ],
    imageUrl: '/images/vocab/stopover.jpg',
    examples: ['We made a stopover in Dubai.'],
    collocations: ['brief stopover', 'overnight stopover', 'make a stopover'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },

  // ==================== ADDITIONAL DAILY VOCABULARY ====================
  {
    id: 'vocab_daily_019',
    word: 'kettle',
    ipa: '/ˈketl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A container for boiling water (British)',
        example: 'Put the kettle on, I\'ll make some tea.',
        turkishMeaning: 'su ısıtıcısı'
      }
    ],
    imageUrl: '/images/vocab/kettle.jpg',
    examples: ['Put the kettle on, I\'ll make some tea.'],
    collocations: ['boil the kettle', 'electric kettle', 'kettle\'s boiling'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_020',
    word: 'hoover',
    ipa: '/ˈhuːvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'To vacuum (British - brand name used as verb)',
        example: 'I need to hoover the living room.',
        turkishMeaning: 'elektrikli süpürge ile temizlemek'
      }
    ],
    imageUrl: '/images/vocab/hoover.jpg',
    examples: ['I need to hoover the living room.'],
    collocations: ['hoover the carpet', 'hoover up', 'do the hoovering'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_021',
    word: 'brolly',
    ipa: '/ˈbrɒli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An umbrella (British informal)',
        example: 'It\'s raining, you\'d better take a brolly.',
        turkishMeaning: 'şemsiye'
      }
    ],
    imageUrl: '/images/vocab/brolly.jpg',
    examples: ['It\'s raining, you\'d better take a brolly.'],
    collocations: ['bring a brolly', 'forgot my brolly', 'put up a brolly'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_022',
    word: 'chemist',
    ipa: '/ˈkemɪst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A pharmacy (British)',
        example: 'You can buy that medicine at the chemist.',
        turkishMeaning: 'eczane'
      }
    ],
    imageUrl: '/images/vocab/chemist.jpg',
    examples: ['You can buy that medicine at the chemist.'],
    collocations: ['local chemist', 'chemist shop', 'go to the chemist'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_023',
    word: 'queue',
    ipa: '/kjuː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A line of people waiting (British)',
        example: 'There\'s quite a long queue at the post office.',
        turkishMeaning: 'kuyruk, sıra'
      }
    ],
    imageUrl: '/images/vocab/queue.jpg',
    examples: ['There\'s quite a long queue at the post office.'],
    collocations: ['join the queue', 'queue up', 'long queue'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_024',
    word: 'trousers',
    ipa: '/ˈtraʊzəz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An outer garment covering the legs (British)',
        example: 'I need to buy a new pair of trousers.',
        turkishMeaning: 'pantolon'
      }
    ],
    imageUrl: '/images/vocab/trousers.jpg',
    examples: ['I need to buy a new pair of trousers.'],
    collocations: ['pair of trousers', 'smart trousers', 'casual trousers'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_025',
    word: 'jumper',
    ipa: '/ˈdʒʌmpə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A knitted garment (sweater - British)',
        example: 'It\'s cold, you should wear a jumper.',
        turkishMeaning: 'kazak'
      }
    ],
    imageUrl: '/images/vocab/jumper.jpg',
    examples: ['It\'s cold, you should wear a jumper.'],
    collocations: ['woollen jumper', 'warm jumper', 'put on a jumper'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_026',
    word: 'trainers',
    ipa: '/ˈtreɪnəz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Sports shoes (British)',
        example: 'I wear trainers to the gym.',
        turkishMeaning: 'spor ayakkabı'
      }
    ],
    imageUrl: '/images/vocab/trainers.jpg',
    examples: ['I wear trainers to the gym.'],
    collocations: ['pair of trainers', 'running trainers', 'new trainers'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_027',
    word: 'torch',
    ipa: '/tɔːtʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A portable electric lamp (flashlight - British)',
        example: 'I keep a torch in the car for emergencies.',
        turkishMeaning: 'el feneri'
      }
    ],
    imageUrl: '/images/vocab/torch.jpg',
    examples: ['I keep a torch in the car for emergencies.'],
    collocations: ['shine a torch', 'torch battery', 'handheld torch'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_028',
    word: 'lorry',
    ipa: '/ˈlɒri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A large vehicle for transporting goods (truck - British)',
        example: 'The lorry is delivering our furniture.',
        turkishMeaning: 'kamyon'
      }
    ],
    imageUrl: '/images/vocab/lorry.jpg',
    examples: ['The lorry is delivering our furniture.'],
    collocations: ['delivery lorry', 'lorry driver', 'heavy lorry'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_029',
    word: 'rubbish',
    ipa: '/ˈrʌbɪʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Waste material; garbage (British)',
        example: 'Put the rubbish in the bin.',
        turkishMeaning: 'çöp'
      }
    ],
    imageUrl: '/images/vocab/rubbish.jpg',
    examples: ['Put the rubbish in the bin.'],
    collocations: ['rubbish bin', 'take out rubbish', 'collect rubbish'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_030',
    word: 'bin',
    ipa: '/bɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A container for rubbish (British)',
        example: 'Throw it in the bin, please.',
        turkishMeaning: 'çöp kutusu'
      }
    ],
    imageUrl: '/images/vocab/bin.jpg',
    examples: ['Throw it in the bin, please.'],
    collocations: ['rubbish bin', 'recycling bin', 'wheelie bin'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_031',
    word: 'lift',
    ipa: '/lɪft/',
    partOfSpeech: 'verb',
    definitions: [
      {
        meaning: 'An elevator (British)',
        example: 'Take the lift to the fifth floor.',
        turkishMeaning: 'asansör'
      }
    ],
    imageUrl: '/images/vocab/lift.jpg',
    examples: ['Take the lift to the fifth floor.'],
    collocations: ['take the lift', 'lift doors', 'lift button'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_032',
    word: 'ground floor',
    ipa: '/ɡraʊnd flɔː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The floor of a building at ground level (British)',
        example: 'The reception is on the ground floor.',
        turkishMeaning: 'zemin kat'
      }
    ],
    imageUrl: '/images/vocab/ground-floor.jpg',
    examples: ['The reception is on the ground floor.'],
    collocations: ['ground floor flat', 'ground floor entrance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_033',
    word: 'first floor',
    ipa: '/fɜːst flɔː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The floor above ground level (British)',
        example: 'My office is on the first floor.',
        turkishMeaning: 'birinci kat'
      }
    ],
    imageUrl: '/images/vocab/first-floor.jpg',
    examples: ['My office is on the first floor.'],
    collocations: ['first floor office', 'first floor window'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_034',
    word: 'timetable',
    ipa: '/ˈtaɪmteɪbl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'A schedule of times (British)',
        example: 'Check the train timetable before you leave.',
        turkishMeaning: 'zaman çizelgesi, tarife'
      }
    ],
    imageUrl: '/images/vocab/timetable.jpg',
    examples: ['Check the train timetable before you leave.'],
    collocations: ['train timetable', 'bus timetable', 'check the timetable'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_035',
    word: 'booking',
    ipa: '/ˈbʊkɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A reservation (British)',
        example: 'I\'ve made a booking for 7 o\'clock.',
        turkishMeaning: 'rezervasyon'
      }
    ],
    imageUrl: '/images/vocab/booking.jpg',
    examples: ['I\'ve made a booking for 7 o\'clock.'],
    collocations: ['make a booking', 'hotel booking', 'booking reference'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_036',
    word: 'terribly',
    ipa: '/ˈterəbli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very (British informal intensifier)',
        example: 'I\'m terribly sorry about the delay.',
        turkishMeaning: 'son derece, çok'
      }
    ],
    imageUrl: '/images/vocab/terribly.jpg',
    examples: ['I\'m terribly sorry about the delay.'],
    collocations: ['terribly sorry', 'terribly important', 'terribly cold'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_037',
    word: 'proper',
    ipa: '/ˈprɒpə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Real, genuine (British informal)',
        example: 'Let\'s go for a proper English breakfast.',
        turkishMeaning: 'gerçek, düzgün'
      }
    ],
    imageUrl: '/images/vocab/proper.jpg',
    examples: ['Let\'s go for a proper English breakfast.'],
    collocations: ['proper job', 'proper meal', 'do it proper'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_038',
    word: 'fortnight',
    ipa: '/ˈfɔːtnaɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Two weeks (British)',
        example: 'I\'ll be away for a fortnight.',
        turkishMeaning: 'iki hafta'
      }
    ],
    imageUrl: '/images/vocab/fortnight.jpg',
    examples: ['I\'ll be away for a fortnight.'],
    collocations: ['in a fortnight', 'last fortnight', 'fortnight\'s time'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_039',
    word: 'chuffed',
    ipa: '/tʃʌft/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very pleased (British informal)',
        example: 'I\'m chuffed with the results!',
        turkishMeaning: 'çok memnun'
      }
    ],
    imageUrl: '/images/vocab/chuffed.jpg',
    examples: ['I\'m chuffed with the results!'],
    collocations: ['really chuffed', 'chuffed to bits', 'dead chuffed'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_040',
    word: 'gutted',
    ipa: '/ˈɡʌtɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very disappointed (British informal)',
        example: 'I was gutted when I heard the news.',
        turkishMeaning: 'çok hayal kırıklığına uğramış'
      }
    ],
    imageUrl: '/images/vocab/gutted.jpg',
    examples: ['I was gutted when I heard the news.'],
    collocations: ['absolutely gutted', 'feel gutted', 'gutted about'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_041',
    word: 'knackered',
    ipa: '/ˈnækəd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Extremely tired (British informal)',
        example: 'I\'m absolutely knackered after that long journey.',
        turkishMeaning: 'bitkin, çok yorgun'
      }
    ],
    imageUrl: '/images/vocab/knackered.jpg',
    examples: ['I\'m absolutely knackered after that long journey.'],
    collocations: ['absolutely knackered', 'feel knackered', 'totally knackered'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_042',
    word: 'dodgy',
    ipa: '/ˈdɒdʒi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Unreliable or suspicious (British informal)',
        example: 'That website looks a bit dodgy.',
        turkishMeaning: 'şüpheli, güvenilmez'
      }
    ],
    imageUrl: '/images/vocab/dodgy.jpg',
    examples: ['That website looks a bit dodgy.'],
    collocations: ['dodgy deal', 'dodgy character', 'bit dodgy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_043',
    word: 'faffing',
    ipa: '/ˈfæfɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Wasting time on unimportant things (British informal)',
        example: 'Stop faffing about and get ready!',
        turkishMeaning: 'oyalanma, zaman kaybetme'
      }
    ],
    imageUrl: '/images/vocab/faffing.jpg',
    examples: ['Stop faffing about and get ready!'],
    collocations: ['faff about', 'stop faffing', 'faffing around'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },

  // ==================== ADDITIONAL SOCIAL VOCABULARY ====================
    {
    id: 'vocab_social_007',
    word: 'mate',
    ipa: '/meɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Friend (British informal)',
        example: 'Alright, mate? How are you?',
        turkishMeaning: 'arkadaş, dostum'
      }
    ],
    imageUrl: '/images/vocab/mate.jpg',
    examples: ['Alright, mate? How are you?'],
    collocations: ['good mate', 'me mate', 'old mate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_008',
    word: 'bloke',
    ipa: '/bləʊk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A man (British informal)',
        example: 'He\'s a nice bloke.',
        turkishMeaning: 'adam, herif'
      }
    ],
    imageUrl: '/images/vocab/bloke.jpg',
    examples: ['He\'s a nice bloke.'],
    collocations: ['nice bloke', 'ordinary bloke', 'young bloke'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_009',
    word: 'cheers',
    ipa: '/tʃɪəz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Thank you or goodbye (British informal)',
        example: 'Cheers for helping me with that!',
        turkishMeaning: 'teşekkürler, hoşçakal'
      }
    ],
    imageUrl: '/images/vocab/cheers.jpg',
    examples: ['Cheers for helping me with that!'],
    collocations: ['cheers mate', 'say cheers', 'cheers then'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_010',
    word: 'fancy',
    ipa: '/ˈfænsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Want or like (British informal)',
        example: 'Do you fancy a cup of tea?',
        turkishMeaning: 'istemek, canı çekmek'
      }
    ],
    imageUrl: '/images/vocab/fancy.jpg',
    examples: ['Do you fancy a cup of tea?'],
    collocations: ['fancy a drink', 'fancy that', 'fancy going'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_011',
    word: 'reckon',
    ipa: '/ˈrekən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Think or suppose (British informal)',
        example: 'I reckon we should leave now.',
        turkishMeaning: 'sanmak, düşünmek'
      }
    ],
    imageUrl: '/images/vocab/reckon.jpg',
    examples: ['I reckon we should leave now.'],
    collocations: ['I reckon', 'reckon so', 'what do you reckon'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_012',
    word: 'keen',
    ipa: '/kiːn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Eager or enthusiastic',
        example: 'I\'m quite keen on trying that new restaurant.',
        turkishMeaning: 'istekli, hevesli'
      }
    ],
    imageUrl: '/images/vocab/keen.jpg',
    examples: ['I\'m quite keen on trying that new restaurant.'],
    collocations: ['keen on', 'very keen', 'keen to'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_013',
    word: 'brilliant',
    ipa: '/ˈbrɪliənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Excellent or great (British informal)',
        example: 'That\'s brilliant news!',
        turkishMeaning: 'harika, muhteşem'
      }
    ],
    imageUrl: '/images/vocab/brilliant.jpg',
    examples: ['That\'s brilliant news!'],
    collocations: ['absolutely brilliant', 'brilliant idea', 'brilliant work'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_014',
    word: 'sorted',
    ipa: '/ˈsɔːtɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Organized or arranged (British informal)',
        example: 'Don\'t worry, it\'s all sorted.',
        turkishMeaning: 'halledilmiş, ayarlanmış'
      }
    ],
    imageUrl: '/images/vocab/sorted.jpg',
    examples: ['Don\'t worry, it\'s all sorted.'],
    collocations: ['all sorted', 'get sorted', 'sorted out'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_015',
    word: 'lovely',
    ipa: '/ˈlʌvli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very pleasant or attractive (British)',
        example: 'It\'s a lovely day today!',
        turkishMeaning: 'hoş, güzel'
      }
    ],
    imageUrl: '/images/vocab/lovely.jpg',
    examples: ['It\'s a lovely day today!'],
    collocations: ['lovely weather', 'lovely time', 'lovely to meet you'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_016',
    word: 'pop',
    ipa: '/pɒp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Go somewhere briefly (British informal)',
        example: 'I\'ll just pop to the shops.',
        turkishMeaning: 'uğramak, gitmek'
      }
    ],
    imageUrl: '/images/vocab/pop.jpg',
    examples: ['I\'ll just pop to the shops.'],
    collocations: ['pop in', 'pop round', 'pop over'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_tech_052',
    word: 'rollout',
    ipa: '/ˈrəʊlaʊt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The official launch or introduction of a new product or service',
        example: 'The rollout of the new software begins next quarter.',
        turkishMeaning: 'piyasaya sürme, yaygınlaştırma'
      }
    ],
    imageUrl: '/images/vocab/rollout.jpg',
    examples: ['The rollout of the new software begins next quarter.'],
    collocations: ['product rollout', 'rollout strategy', 'phased rollout'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_business_041',
    word: 'downturn',
    ipa: '/ˈdaʊntɜːn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A decline in economic or business activity',
        example: 'The company struggled during the economic downturn.',
        turkishMeaning: 'düşüş, gerileme'
      }
    ],
    imageUrl: '/images/vocab/downturn.jpg',
    examples: ['The company struggled during the economic downturn.'],
    collocations: ['economic downturn', 'market downturn', 'weather the downturn'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_daily_044',
    word: 'nought',
    ipa: '/nɔːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Zero (British)',
        example: 'The phone number is oh-seven-nought-three.',
        turkishMeaning: 'sıfır'
      }
    ],
    imageUrl: '/images/vocab/nought.jpg',
    examples: ['The phone number is oh-seven-nought-three.'],
    collocations: ['nought point five', 'from nought'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_business_042',
    word: 'invoice',
    ipa: '/ˈɪnvɔɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A bill for goods or services',
        example: 'Please send me the invoice for last month.',
        turkishMeaning: 'fatura'
      }
    ],
    imageUrl: '/images/vocab/invoice.jpg',
    examples: ['Please send me the invoice for last month.'],
    collocations: ['send invoice', 'invoice number', 'pay the invoice'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },

  // ==================== MORE BUSINESS VOCABULARY ====================
    {
    id: 'vocab_business_043',
    word: 'quotation',
    ipa: '/kwəʊˈteɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A statement of the price of goods or services',
        example: 'We received three quotations for the project.',
        turkishMeaning: 'fiyat teklifi, kotasyon'
      }
    ],
    imageUrl: '/images/vocab/quotation.jpg',
    examples: ['We received three quotations for the project.'],
    collocations: ['request quotation', 'provide quotation', 'detailed quotation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_044',
    word: 'tender',
    ipa: '/ˈtendə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A formal offer to supply goods or services at a stated price',
        example: 'We submitted a tender for the government contract.',
        turkishMeaning: 'ihale teklifi'
      }
    ],
    imageUrl: '/images/vocab/tender.jpg',
    examples: ['We submitted a tender for the government contract.'],
    collocations: ['tender process', 'submit tender', 'competitive tender'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_045',
    word: 'audit',
    ipa: '/ˈɔːdɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An official inspection of accounts',
        example: 'The company undergoes an annual audit.',
        turkishMeaning: 'denetim, revizyon'
      }
    ],
    imageUrl: '/images/vocab/audit.jpg',
    examples: ['The company undergoes an annual audit.'],
    collocations: ['financial audit', 'internal audit', 'conduct audit'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_046',
    word: 'dividend',
    ipa: '/ˈdɪvɪdend/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A sum of money paid to shareholders',
        example: 'Shareholders will receive a dividend of 50p per share.',
        turkishMeaning: 'temettü, kâr payı'
      }
    ],
    imageUrl: '/images/vocab/dividend.jpg',
    examples: ['Shareholders will receive a dividend of 50p per share.'],
    collocations: ['pay dividend', 'dividend yield', 'annual dividend'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_047',
    word: 'equity',
    ipa: '/ˈekwəti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The value of shares issued by a company',
        example: 'The company raised £2 million in equity funding.',
        turkishMeaning: 'öz sermaye, hisse'
      }
    ],
    imageUrl: '/images/vocab/equity.jpg',
    examples: ['The company raised £2 million in equity funding.'],
    collocations: ['equity stake', 'private equity', 'equity investment'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_048',
    word: 'liability',
    ipa: '/ˌlaɪəˈbɪləti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A financial obligation or debt',
        example: 'Assets exceeded liabilities by £5 million.',
        turkishMeaning: 'borç, yükümlülük'
      }
    ],
    imageUrl: '/images/vocab/liability.jpg',
    examples: ['Assets exceeded liabilities by £5 million.'],
    collocations: ['financial liability', 'reduce liabilities', 'current liabilities'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_049',
    word: 'expenditure',
    ipa: '/ɪkˈspendɪtʃə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The action of spending money',
        example: 'Capital expenditure increased by 20% last year.',
        turkishMeaning: 'harcama, masraf'
      }
    ],
    imageUrl: '/images/vocab/expenditure.jpg',
    examples: ['Capital expenditure increased by 20% last year.'],
    collocations: ['capital expenditure', 'reduce expenditure', 'government expenditure'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_050',
    word: 'forecasting',
    ipa: '/ˈfɔːkɑːstɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Predicting future business conditions',
        example: 'Accurate forecasting is essential for planning.',
        turkishMeaning: 'tahmin, öngörü'
      }
    ],
    imageUrl: '/images/vocab/forecasting.jpg',
    examples: ['Accurate forecasting is essential for planning.'],
    collocations: ['sales forecasting', 'financial forecasting', 'demand forecasting'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_051',
    word: 'outsourcing',
    ipa: '/ˈaʊtsɔːsɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Obtaining goods or services from an outside supplier',
        example: 'The company is considering outsourcing its IT support.',
        turkishMeaning: 'dış kaynak kullanımı'
      }
    ],
    imageUrl: '/images/vocab/outsourcing.jpg',
    examples: ['The company is considering outsourcing its IT support.'],
    collocations: ['outsourcing strategy', 'offshore outsourcing', 'outsourcing contract'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_052',
    word: 'inventory',
    ipa: '/ˈɪnvəntri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A complete list of items such as stock',
        example: 'We need to reduce our inventory levels.',
        turkishMeaning: 'envanter, stok'
      }
    ],
    imageUrl: '/images/vocab/inventory.jpg',
    examples: ['We need to reduce our inventory levels.'],
    collocations: ['inventory management', 'stock inventory', 'inventory control'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_053',
    word: 'markup',
    ipa: '/ˈmɑːkʌp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The amount added to the cost price to determine selling price',
        example: 'The markup on these products is 40%.',
        turkishMeaning: 'kâr marjı'
      }
    ],
    imageUrl: '/images/vocab/markup.jpg',
    examples: ['The markup on these products is 40%.'],
    collocations: ['markup percentage', 'standard markup', 'apply markup'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_054',
    word: 'kickoff',
    ipa: '/ˈkɪkɒf/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The start or beginning of a project',
        example: 'The project kickoff meeting is scheduled for Monday.',
        turkishMeaning: 'başlangıç, start'
      }
    ],
    imageUrl: '/images/vocab/kickoff.jpg',
    examples: ['The project kickoff meeting is scheduled for Monday.'],
    collocations: ['kickoff meeting', 'project kickoff', 'kickoff call'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_055',
    word: 'milestone',
    ipa: '/ˈmaɪlstəʊn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An important stage or event in a project',
        example: 'We reached a major milestone this quarter.',
        turkishMeaning: 'dönüm noktası, kilometre taşı'
      }
    ],
    imageUrl: '/images/vocab/milestone.jpg',
    examples: ['We reached a major milestone this quarter.'],
    collocations: ['key milestone', 'project milestone', 'achieve milestone'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_056',
    word: 'deliverable',
    ipa: '/dɪˈlɪvərəbl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'A tangible or intangible output of a project',
        example: 'The main deliverables are due next month.',
        turkishMeaning: 'teslim edilebilir çıktı'
      }
    ],
    imageUrl: '/images/vocab/deliverable.jpg',
    examples: ['The main deliverables are due next month.'],
    collocations: ['project deliverable', 'key deliverables', 'final deliverable'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_057',
    word: 'outreach',
    ipa: '/ˈaʊtriːtʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The extent or length of reaching out',
        example: 'Our outreach programme targets small businesses.',
        turkishMeaning: 'erişim, ulaşma'
      }
    ],
    imageUrl: '/images/vocab/outreach.jpg',
    examples: ['Our outreach programme targets small businesses.'],
    collocations: ['community outreach', 'outreach program', 'marketing outreach'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_058',
    word: 'retention',
    ipa: '/rɪˈtenʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The continued possession or use of something',
        example: 'Customer retention is a key priority.',
        turkishMeaning: 'elde tutma, muhafaza'
      }
    ],
    imageUrl: '/images/vocab/retention.jpg',
    examples: ['Customer retention is a key priority.'],
    collocations: ['customer retention', 'employee retention', 'retention rate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_059',
    word: 'churn',
    ipa: '/tʃɜːn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The rate at which customers stop using a service',
        example: 'We need to reduce customer churn.',
        turkishMeaning: 'müşteri kaybı oranı'
      }
    ],
    imageUrl: '/images/vocab/churn.jpg',
    examples: ['We need to reduce customer churn.'],
    collocations: ['customer churn', 'churn rate', 'reduce churn'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_060',
    word: 'overhead',
    ipa: '/ˈəʊvəhed/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Ongoing business expenses',
        example: 'Rent and utilities are part of our overhead.',
        turkishMeaning: 'genel gider'
      }
    ],
    imageUrl: '/images/vocab/overhead.jpg',
    examples: ['Rent and utilities are part of our overhead.'],
    collocations: ['overhead costs', 'reduce overhead', 'overhead expenses'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_061',
    word: 'breakeven',
    ipa: '/ˌbreɪkˈiːvn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The point where revenue equals costs',
        example: 'We expect to breakeven within 18 months.',
        turkishMeaning: 'başabaş noktası'
      }
    ],
    imageUrl: '/images/vocab/breakeven.jpg',
    examples: ['We expect to breakeven within 18 months.'],
    collocations: ['breakeven point', 'reach breakeven', 'breakeven analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_062',
    word: 'bottleneck',
    ipa: '/ˈbɒtlnek/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A point of congestion that slows progress',
        example: 'The approval process is a major bottleneck.',
        turkishMeaning: 'darboğaz'
      }
    ],
    imageUrl: '/images/vocab/bottleneck.jpg',
    examples: ['The approval process is a major bottleneck.'],
    collocations: ['production bottleneck', 'identify bottleneck', 'remove bottleneck'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_063',
    word: 'upskilling',
    ipa: '/ˈʌpskɪlɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Teaching employees new skills',
        example: 'The company invested in upskilling programmes.',
        turkishMeaning: 'yetenek geliştirme'
      }
    ],
    imageUrl: '/images/vocab/upskilling.jpg',
    examples: ['The company invested in upskilling programmes.'],
    collocations: ['upskilling initiative', 'employee upskilling', 'digital upskilling'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_064',
    word: 'workforce',
    ipa: '/ˈwɜːkfɔːs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The people engaged in work',
        example: 'Our workforce comprises 500 employees.',
        turkishMeaning: 'işgücü'
      }
    ],
    imageUrl: '/images/vocab/workforce.jpg',
    examples: ['Our workforce comprises 500 employees.'],
    collocations: ['skilled workforce', 'workforce planning', 'diverse workforce'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_065',
    word: 'streamline',
    ipa: '/ˈstriːmlaɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Make a process more efficient',
        example: 'We need to streamline our operations.',
        turkishMeaning: 'basitleştirmek, verimleştirmek'
      }
    ],
    imageUrl: '/images/vocab/streamline.jpg',
    examples: ['We need to streamline our operations.'],
    collocations: ['streamline process', 'streamline operations', 'streamline workflow'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_066',
    word: 'initiative',
    ipa: '/ɪˈnɪʃətɪv/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'A new plan or action to achieve something',
        example: 'The company launched a green initiative.',
        turkishMeaning: 'girişim, inisiyatif'
      }
    ],
    imageUrl: '/images/vocab/initiative.jpg',
    examples: ['The company launched a green initiative.'],
    collocations: ['strategic initiative', 'take initiative', 'new initiative'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_067',
    word: 'delegation',
    ipa: '/ˌdelɪˈɡeɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The assignment of responsibility to another person',
        example: 'Effective delegation is crucial for managers.',
        turkishMeaning: 'devretme, yetki devri'
      }
    ],
    imageUrl: '/images/vocab/delegation.jpg',
    examples: ['Effective delegation is crucial for managers.'],
    collocations: ['delegation skills', 'delegation of authority', 'effective delegation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },

  // ==================== MORE TECHNICAL VOCABULARY ====================
    {
    id: 'vocab_tech_053',
    word: 'backend',
    ipa: '/ˌbækˈend/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The server-side of a system',
        example: 'The backend handles all data processing.',
        turkishMeaning: 'arka uç, sunucu tarafı'
      }
    ],
    imageUrl: '/images/vocab/backend.jpg',
    examples: ['The backend handles all data processing.'],
    collocations: ['backend developer', 'backend system', 'backend API'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_054',
    word: 'frontend',
    ipa: '/ˌfrʌntˈend/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The client-side of a system',
        example: 'The frontend provides the user interface.',
        turkishMeaning: 'ön uç, istemci tarafı'
      }
    ],
    imageUrl: '/images/vocab/frontend.jpg',
    examples: ['The frontend provides the user interface.'],
    collocations: ['frontend developer', 'frontend framework', 'frontend design'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_055',
    word: 'database',
    ipa: '/ˈdeɪtəbeɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A structured set of data',
        example: 'All customer information is stored in the database.',
        turkishMeaning: 'veritabanı'
      }
    ],
    imageUrl: '/images/vocab/database.jpg',
    examples: ['All customer information is stored in the database.'],
    collocations: ['database management', 'database query', 'relational database'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_056',
    word: 'server',
    ipa: '/ˈsɜːvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A computer that provides data to other computers',
        example: 'The server went down for maintenance.',
        turkishMeaning: 'sunucu'
      }
    ],
    imageUrl: '/images/vocab/server.jpg',
    examples: ['The server went down for maintenance.'],
    collocations: ['web server', 'server maintenance', 'dedicated server'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_057',
    word: 'framework',
    ipa: '/ˈfreɪmwɜːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A basic structure underlying a system',
        example: 'We use React as our frontend framework.',
        turkishMeaning: 'çatı, framework'
      }
    ],
    imageUrl: '/images/vocab/framework.jpg',
    examples: ['We use React as our frontend framework.'],
    collocations: ['software framework', 'development framework', 'framework architecture'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_058',
    word: 'authentication',
    ipa: '/ɔːˌθentɪˈkeɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The process of verifying identity',
        example: 'Two-factor authentication provides extra security.',
        turkishMeaning: 'kimlik doğrulama'
      }
    ],
    imageUrl: '/images/vocab/authentication.jpg',
    examples: ['Two-factor authentication provides extra security.'],
    collocations: ['user authentication', 'authentication token', 'multi-factor authentication'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_059',
    word: 'authorization',
    ipa: '/ˌɔːθəraɪˈzeɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The process of granting permissions',
        example: 'You need authorization to access this resource.',
        turkishMeaning: 'yetkilendirme'
      }
    ],
    imageUrl: '/images/vocab/authorization.jpg',
    examples: ['You need authorization to access this resource.'],
    collocations: ['authorization code', 'user authorization', 'authorization level'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_060',
    word: 'debugging',
    ipa: '/diːˈbʌɡɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Finding and fixing errors in software',
        example: 'Debugging took longer than expected.',
        turkishMeaning: 'hata ayıklama'
      }
    ],
    imageUrl: '/images/vocab/debugging.jpg',
    examples: ['Debugging took longer than expected.'],
    collocations: ['debugging tools', 'debugging process', 'remote debugging'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_061',
    word: 'compile',
    ipa: '/kəmˈpaɪl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Convert source code into executable code',
        example: 'The code failed to compile due to syntax errors.',
        turkishMeaning: 'derlemek'
      }
    ],
    imageUrl: '/images/vocab/compile.jpg',
    examples: ['The code failed to compile due to syntax errors.'],
    collocations: ['compile code', 'compile time', 'compile error'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_062',
    word: 'syntax',
    ipa: '/ˈsɪntæks/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The set of rules for writing code',
        example: 'There is a syntax error on line 42.',
        turkishMeaning: 'sözdizimi'
      }
    ],
    imageUrl: '/images/vocab/syntax.jpg',
    examples: ['There is a syntax error on line 42.'],
    collocations: ['syntax error', 'syntax highlighting', 'correct syntax'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_063',
    word: 'variable',
    ipa: '/ˈveəriəbl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'A storage location with a name',
        example: 'Declare the variable before using it.',
        turkishMeaning: 'değişken'
      }
    ],
    imageUrl: '/images/vocab/variable.jpg',
    examples: ['Declare the variable before using it.'],
    collocations: ['global variable', 'local variable', 'variable name'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_064',
    word: 'array',
    ipa: '/əˈreɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A data structure containing multiple values',
        example: 'Store the results in an array.',
        turkishMeaning: 'dizi'
      }
    ],
    imageUrl: '/images/vocab/array.jpg',
    examples: ['Store the results in an array.'],
    collocations: ['array element', 'array index', 'empty array'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_065',
    word: 'function',
    ipa: '/ˈfʌŋkʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A reusable block of code',
        example: 'Call the function with the correct parameters.',
        turkishMeaning: 'fonksiyon'
      }
    ],
    imageUrl: '/images/vocab/function.jpg',
    examples: ['Call the function with the correct parameters.'],
    collocations: ['function call', 'callback function', 'function definition'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_066',
    word: 'snippet',
    ipa: '/ˈsnɪpɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A small piece of reusable code',
        example: 'I found a useful snippet on Stack Overflow.',
        turkishMeaning: 'kod parçası'
      }
    ],
    imageUrl: '/images/vocab/snippet.jpg',
    examples: ['I found a useful snippet on Stack Overflow.'],
    collocations: ['code snippet', 'snippet library', 'reusable snippet'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_067',
    word: 'refactoring',
    ipa: '/ˌriːˈfæktərɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Restructuring code without changing its behaviour',
        example: 'The code needs refactoring to improve readability.',
        turkishMeaning: 'yeniden yapılandırma'
      }
    ],
    imageUrl: '/images/vocab/refactoring.jpg',
    examples: ['The code needs refactoring to improve readability.'],
    collocations: ['code refactoring', 'refactoring tools', 'refactoring process'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_068',
    word: 'legacy',
    ipa: '/ˈleɡəsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Old technology or code still in use',
        example: 'We are still maintaining legacy systems.',
        turkishMeaning: 'eski sistem, miras'
      }
    ],
    imageUrl: '/images/vocab/legacy.jpg',
    examples: ['We are still maintaining legacy systems.'],
    collocations: ['legacy code', 'legacy system', 'legacy software'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_069',
    word: 'migration',
    ipa: '/maɪˈɡreɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Moving data from one system to another',
        example: 'The database migration is scheduled for this weekend.',
        turkishMeaning: 'göç, aktarma'
      }
    ],
    imageUrl: '/images/vocab/migration.jpg',
    examples: ['The database migration is scheduled for this weekend.'],
    collocations: ['data migration', 'migration strategy', 'cloud migration'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_070',
    word: 'backup',
    ipa: '/ˈbækʌp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A copy of data for recovery purposes',
        example: 'Always create a backup before updating.',
        turkishMeaning: 'yedek'
      }
    ],
    imageUrl: '/images/vocab/backup.jpg',
    examples: ['Always create a backup before updating.'],
    collocations: ['backup copy', 'backup system', 'automatic backup'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
  {
    id: 'vocab_tech_071',
    word: 'restore',
    ipa: '/rɪˈstɔː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Recover data from a backup',
        example: 'We had to restore the database from yesterday\'s backup.',
        turkishMeaning: 'geri yüklemek'
      }
    ],
    imageUrl: '/images/vocab/restore.jpg',
    examples: ['We had to restore the database from yesterday\'s backup.'],
    collocations: ['restore backup', 'restore data', 'restore point'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_072',
    word: 'downtime',
    ipa: '/ˈdaʊntaɪm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Time when a system is unavailable',
        example: 'We experienced two hours of downtime.',
        turkishMeaning: 'kesinti süresi'
      }
    ],
    imageUrl: '/images/vocab/downtime.jpg',
    examples: ['We experienced two hours of downtime.'],
    collocations: ['minimize downtime', 'scheduled downtime', 'downtime cost'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_073',
    word: 'uptime',
    ipa: '/ˈʌptaɪm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Time when a system is operational',
        example: 'The server has 99.9% uptime.',
        turkishMeaning: 'çalışma süresi'
      }
    ],
    imageUrl: '/images/vocab/uptime.jpg',
    examples: ['The server has 99.9% uptime.'],
    collocations: ['uptime guarantee', 'maximum uptime', 'uptime monitoring'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_074',
    word: 'endpoint',
    ipa: '/ˈendpɔɪnt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A URL where an API can be accessed',
        example: 'The API endpoint is /api/users.',
        turkishMeaning: 'uç nokta'
      }
    ],
    imageUrl: '/images/vocab/endpoint.jpg',
    examples: ['The API endpoint is /api/users.'],
    collocations: ['API endpoint', 'endpoint URL', 'REST endpoint'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_075',
    word: 'payload',
    ipa: '/ˈpeɪləʊd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The actual data transmitted',
        example: 'The payload contains user information.',
        turkishMeaning: 'veri yükü'
      }
    ],
    imageUrl: '/images/vocab/payload.jpg',
    examples: ['The payload contains user information.'],
    collocations: ['request payload', 'payload data', 'JSON payload'],
    synonyms: ['cargo', 'load'],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_076',
    word: 'webhook',
    ipa: '/ˈwebhʊk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A callback triggered by an event',
        example: 'Set up a webhook to receive notifications.',
        turkishMeaning: 'web kancası'
      }
    ],
    imageUrl: '/images/vocab/webhook.jpg',
    examples: ['Set up a webhook to receive notifications.'],
    collocations: ['webhook URL', 'webhook notification', 'configure webhook'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_077',
    word: 'caching',
    ipa: '/ˈkæʃɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Storing data temporarily for faster access',
        example: 'Caching improves page load times.',
        turkishMeaning: 'önbellekleme'
      }
    ],
    imageUrl: '/images/vocab/caching.jpg',
    examples: ['Caching improves page load times.'],
    collocations: ['caching strategy', 'browser caching', 'cache memory'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },

  // ==================== MORE TRAVEL VOCABULARY ====================
    {
    id: 'vocab_travel_031',
    word: 'porter',
    ipa: '/ˈpɔːtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A person employed to carry luggage',
        example: 'The porter helped us with our bags.',
        turkishMeaning: 'hamal'
      }
    ],
    imageUrl: '/images/vocab/porter.jpg',
    examples: ['The porter helped us with our bags.'],
    collocations: ['hotel porter', 'call a porter', 'tip the porter'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_032',
    word: 'concierge',
    ipa: '/ˌkɒnsiˈeəʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A hotel employee who assists guests',
        example: 'Ask the concierge for restaurant recommendations.',
        turkishMeaning: 'konsiyerj'
      }
    ],
    imageUrl: '/images/vocab/concierge.jpg',
    examples: ['Ask the concierge for restaurant recommendations.'],
    collocations: ['concierge desk', 'concierge service', 'speak to concierge'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel', 'accommodation'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_033',
    word: 'receptionist',
    ipa: '/rɪˈsepʃənɪst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A person who receives guests',
        example: 'The receptionist checked us in.',
        turkishMeaning: 'resepsiyonist'
      }
    ],
    imageUrl: '/images/vocab/receptionist.jpg',
    examples: ['The receptionist checked us in.'],
    collocations: ['hotel receptionist', 'receptionist desk', 'ask the receptionist'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_034',
    word: 'amenities',
    ipa: '/əˈmiːnətiz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Useful or pleasant facilities',
        example: 'The hotel offers excellent amenities.',
        turkishMeaning: 'olanaaklar, imkanlar'
      }
    ],
    imageUrl: '/images/vocab/amenities.jpg',
    examples: ['The hotel offers excellent amenities.'],
    collocations: ['hotel amenities', 'complimentary amenities', 'modern amenities'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_035',
    word: 'complimentary',
    ipa: '/ˌkɒmplɪˈmentri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Given free as a courtesy',
        example: 'Breakfast is complimentary.',
        turkishMeaning: 'ücretsiz, ikram'
      }
    ],
    imageUrl: '/images/vocab/complimentary.jpg',
    examples: ['Breakfast is complimentary.'],
    collocations: ['complimentary breakfast', 'complimentary upgrade', 'complimentary service'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_036',
    word: 'overbooked',
    ipa: '/ˌəʊvəˈbʊkt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Having accepted more reservations than available',
        example: 'The flight was overbooked.',
        turkishMeaning: 'fazla rezervasyon yapılmış'
      }
    ],
    imageUrl: '/images/vocab/overbooked.jpg',
    examples: ['The flight was overbooked.'],
    collocations: ['overbooked flight', 'hotel overbooked', 'overbooked situation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel', 'accommodation'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_037',
    word: 'cancellation',
    ipa: '/ˌkænsəˈleɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The act of calling off a reservation',
        example: 'There is a cancellation fee.',
        turkishMeaning: 'iptal'
      }
    ],
    imageUrl: '/images/vocab/cancellation.jpg',
    examples: ['There is a cancellation fee.'],
    collocations: ['cancellation policy', 'free cancellation', 'cancellation fee'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'accommodation'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_038',
    word: 'refund',
    ipa: '/ˈriːfʌnd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Money returned after cancellation',
        example: 'You can request a full refund.',
        turkishMeaning: 'para iadesi'
      }
    ],
    imageUrl: '/images/vocab/refund.jpg',
    examples: ['You can request a full refund.'],
    collocations: ['full refund', 'refund policy', 'request refund'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_039',
    word: 'upgrade',
    ipa: '/ˈʌpɡreɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Moving to a better class of service',
        example: 'We got a free upgrade to business class.',
        turkishMeaning: 'yükseltme'
      }
    ],
    imageUrl: '/images/vocab/upgrade.jpg',
    examples: ['We got a free upgrade to business class.'],
    collocations: ['free upgrade', 'upgrade to', 'room upgrade'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
  {
    id: 'vocab_travel_040',
    word: 'jet lag',
    ipa: '/ˈdʒet læɡ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Tiredness from flying across time zones',
        example: 'I\'m still suffering from jet lag.',
        turkishMeaning: 'jet lag, saat farkı yorgunluğu'
      }
    ],
    imageUrl: '/images/vocab/jetlag.jpg',
    examples: ['I\'m still suffering from jet lag.'],
    collocations: ['suffer jet lag', 'overcome jet lag', 'jet lag symptoms'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_041',
    word: 'carry-on',
    ipa: '/ˈkæri ɒn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Luggage taken into the aircraft cabin',
        example: 'You can take one carry-on bag.',
        turkishMeaning: 'el bagajı'
      }
    ],
    imageUrl: '/images/vocab/carryon.jpg',
    examples: ['You can take one carry-on bag.'],
    collocations: ['carry-on luggage', 'carry-on bag', 'carry-on allowance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_042',
    word: 'check-in',
    ipa: '/ˈtʃek ɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The process of registering arrival',
        example: 'Online check-in opens 24 hours before departure.',
        turkishMeaning: 'check-in, giriş kaydı'
      }
    ],
    imageUrl: '/images/vocab/checkin.jpg',
    examples: ['Online check-in opens 24 hours before departure.'],
    collocations: ['online check-in', 'check-in counter', 'check-in time'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel', 'accommodation'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_043',
    word: 'check-out',
    ipa: '/ˈtʃek aʊt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The process of leaving a hotel',
        example: 'Check-out time is 11 AM.',
        turkishMeaning: 'check-out, çıkış'
      }
    ],
    imageUrl: '/images/vocab/checkout.jpg',
    examples: ['Check-out time is 11 AM.'],
    collocations: ['check-out time', 'late check-out', 'express check-out'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel', 'accommodation'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_044',
    word: 'reconfirm',
    ipa: '/ˌriːkənˈfɜːm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Confirm something again',
        example: 'Please reconfirm your flight 24 hours in advance.',
        turkishMeaning: 'tekrar teyit etmek'
      }
    ],
    imageUrl: '/images/vocab/reconfirm.jpg',
    examples: ['Please reconfirm your flight 24 hours in advance.'],
    collocations: ['reconfirm booking', 'reconfirm reservation', 'reconfirm flight'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_045',
    word: 'sightseeing',
    ipa: '/ˈsaɪtsiːɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Visiting places of interest',
        example: 'We spent the day sightseeing in London.',
        turkishMeaning: 'turistik gezi'
      }
    ],
    imageUrl: '/images/vocab/sightseeing.jpg',
    examples: ['We spent the day sightseeing in London.'],
    collocations: ['sightseeing tour', 'go sightseeing', 'sightseeing bus'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },

  // ==================== MORE DAILY VOCABULARY ====================
  {
    id: 'vocab_daily_045',
    word: 'keen',
    ipa: '/kiːn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very interested or eager (British)',
        example: 'I\'m quite keen on photography.',
        turkishMeaning: 'istekli, hevesli'
      }
    ],
    imageUrl: '/images/vocab/keen.jpg',
    examples: ['I\'m quite keen on photography.'],
    collocations: ['keen on', 'very keen', 'keen interest'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_046',
    word: 'fancy',
    ipa: '/ˈfænsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'To want or desire (British informal)',
        example: 'Do you fancy going to the cinema?',
        turkishMeaning: 'istemek'
      }
    ],
    imageUrl: '/images/vocab/fancy.jpg',
    examples: ['Do you fancy going to the cinema?'],
    collocations: ['fancy doing', 'fancy a drink', 'don\'t fancy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_047',
    word: 'knackered',
    ipa: '/ˈnækəd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Extremely tired (British slang)',
        example: 'I\'m absolutely knackered after that hike.',
        turkishMeaning: 'bitkin'
      }
    ],
    imageUrl: '/images/vocab/knackered.jpg',
    examples: ['I\'m absolutely knackered after that hike.'],
    collocations: ['absolutely knackered', 'feel knackered', 'dead knackered'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_048',
    word: 'dodgy',
    ipa: '/ˈdɒdʒi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Unreliable or suspicious (British)',
        example: 'That website looks a bit dodgy.',
        turkishMeaning: 'şüpheli'
      }
    ],
    imageUrl: '/images/vocab/dodgy.jpg',
    examples: ['That website looks a bit dodgy.'],
    collocations: ['bit dodgy', 'dodgy character', 'dodgy deal'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_049',
    word: 'gobsmacked',
    ipa: '/ˈɡɒbsmækt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Utterly astonished (British slang)',
        example: 'I was gobsmacked by the news.',
        turkishMeaning: 'şaşkına dönmüş'
      }
    ],
    imageUrl: '/images/vocab/gobsmacked.jpg',
    examples: ['I was gobsmacked by the news.'],
    collocations: ['absolutely gobsmacked', 'completely gobsmacked', 'left gobsmacked'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_050',
    word: 'peckish',
    ipa: '/ˈpekɪʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Slightly hungry (British)',
        example: 'I\'m feeling a bit peckish.',
        turkishMeaning: 'hafif aç'
      }
    ],
    imageUrl: '/images/vocab/peckish.jpg',
    examples: ['I\'m feeling a bit peckish.'],
    collocations: ['bit peckish', 'feeling peckish', 'getting peckish'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_051',
    word: 'knickers',
    ipa: '/ˈnɪkəz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Women\'s underwear (British)',
        example: 'She bought a new pair of knickers.',
        turkishMeaning: 'kadın iç çamaşırı'
      }
    ],
    imageUrl: '/images/vocab/knickers.jpg',
    examples: ['She bought a new pair of knickers.'],
    collocations: ['pair of knickers', 'cotton knickers'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_052',
    word: 'pants',
    ipa: '/pænts/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Underwear or trousers (British)',
        example: 'He needs to buy some new pants.',
        turkishMeaning: 'iç çamaşırı (erkek)'
      }
    ],
    imageUrl: '/images/vocab/pants.jpg',
    examples: ['He needs to buy some new pants.'],
    collocations: ['pair of pants', 'boxer pants'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_053',
    word: 'waistcoat',
    ipa: '/ˈweɪskəʊt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A vest worn over a shirt (British)',
        example: 'He wore a waistcoat with his suit.',
        turkishMeaning: 'yelek'
      }
    ],
    imageUrl: '/images/vocab/waistcoat.jpg',
    examples: ['He wore a waistcoat with his suit.'],
    collocations: ['smart waistcoat', 'tweed waistcoat', 'wear waistcoat'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_054',
    word: 'trolley',
    ipa: '/ˈtrɒli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A wheeled cart for shopping (British)',
        example: 'Grab a trolley from the entrance.',
        turkishMeaning: 'alışveriş arabası'
      }
    ],
    imageUrl: '/images/vocab/trolley.jpg',
    examples: ['Grab a trolley from the entrance.'],
    collocations: ['shopping trolley', 'luggage trolley', 'push the trolley'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_055',
    word: 'carpark',
    ipa: '/ˈkɑːpɑːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A parking lot (British)',
        example: 'The carpark is at the rear of the building.',
        turkishMeaning: 'otopark'
      }
    ],
    imageUrl: '/images/vocab/carpark.jpg',
    examples: ['The carpark is at the rear of the building.'],
    collocations: ['multi-storey carpark', 'carpark ticket', 'underground carpark'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_056',
    word: 'pavement',
    ipa: '/ˈpeɪvmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'A footpath beside a road (British)',
        example: 'Walk on the pavement, not the road.',
        turkishMeaning: 'kaldırım'
      }
    ],
    imageUrl: '/images/vocab/pavement.jpg',
    examples: ['Walk on the pavement, not the road.'],
    collocations: ['on the pavement', 'narrow pavement', 'pavement edge'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_057',
    word: 'roundabout',
    ipa: '/ˈraʊndəbaʊt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A circular junction (British)',
        example: 'Take the second exit at the roundabout.',
        turkishMeaning: 'dönel kavşak'
      }
    ],
    imageUrl: '/images/vocab/roundabout.jpg',
    examples: ['Take the second exit at the roundabout.'],
    collocations: ['busy roundabout', 'mini roundabout', 'approach roundabout'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_058',
    word: 'zebra crossing',
    ipa: '/ˌzebrə ˈkrɒsɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A pedestrian crossing with stripes (British)',
        example: 'Use the zebra crossing to cross the road.',
        turkishMeaning: 'yaya geçidi'
      }
    ],
    imageUrl: '/images/vocab/zebra-crossing.jpg',
    examples: ['Use the zebra crossing to cross the road.'],
    collocations: ['at the zebra crossing', 'cross at zebra crossing'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_059',
    word: 'anticlockwise',
    ipa: '/ˌæntɪˈklɒkwaɪz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'In the opposite direction to clock hands (British)',
        example: 'Turn the knob anticlockwise.',
        turkishMeaning: 'saat yönünün tersi'
      }
    ],
    imageUrl: '/images/vocab/anticlockwise.jpg',
    examples: ['Turn the knob anticlockwise.'],
    collocations: ['turn anticlockwise', 'rotate anticlockwise', 'move anticlockwise'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_060',
    word: 'fortnight',
    ipa: '/ˈfɔːtnaɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Two weeks (British)',
        example: 'I\'ll see you in a fortnight.',
        turkishMeaning: 'iki hafta'
      }
    ],
    imageUrl: '/images/vocab/fortnight.jpg',
    examples: ['I\'ll see you in a fortnight.'],
    collocations: ['in a fortnight', 'last fortnight', 'fortnight ago'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_061',
    word: 'holiday',
    ipa: '/ˈhɒlədeɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A vacation (British)',
        example: 'We\'re going on holiday to Spain.',
        turkishMeaning: 'tatil'
      }
    ],
    imageUrl: '/images/vocab/holiday.jpg',
    examples: ['We\'re going on holiday to Spain.'],
    collocations: ['on holiday', 'summer holiday', 'holiday destination'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_062',
    word: 'autumn',
    ipa: '/ˈɔːtəm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The season between summer and winter (British)',
        example: 'The leaves turn brown in autumn.',
        turkishMeaning: 'sonbahar'
      }
    ],
    imageUrl: '/images/vocab/autumn.jpg',
    examples: ['The leaves turn brown in autumn.'],
    collocations: ['in autumn', 'autumn leaves', 'autumn weather'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_063',
    word: 'post',
    ipa: '/pəʊst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Mail (British)',
        example: 'Has the post arrived yet?',
        turkishMeaning: 'posta'
      }
    ],
    imageUrl: '/images/vocab/post.jpg',
    examples: ['Has the post arrived yet?'],
    collocations: ['by post', 'post office', 'morning post'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_064',
    word: 'postman',
    ipa: '/ˈpəʊstmən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A mail carrier (British)',
        example: 'The postman delivers at 9 AM.',
        turkishMeaning: 'postacı'
      }
    ],
    imageUrl: '/images/vocab/postman.jpg',
    examples: ['The postman delivers at 9 AM.'],
    collocations: ['postman delivers', 'wait for postman', 'postman rang'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_065',
    word: 'estate agent',
    ipa: '/ɪˈsteɪt ˌeɪdʒənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'A realtor (British)',
        example: 'Contact the estate agent about the flat.',
        turkishMeaning: 'emlakçı'
      }
    ],
    imageUrl: '/images/vocab/estate-agent.jpg',
    examples: ['Contact the estate agent about the flat.'],
    collocations: ['estate agent office', 'register with estate agent', 'estate agent fees'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_066',
    word: 'solicitor',
    ipa: '/səˈlɪsɪtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A lawyer (British)',
        example: 'I need to speak to my solicitor.',
        turkishMeaning: 'avukat'
      }
    ],
    imageUrl: '/images/vocab/solicitor.jpg',
    examples: ['I need to speak to my solicitor.'],
    collocations: ['family solicitor', 'consult solicitor', 'solicitor\'s office'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_067',
    word: 'barrister',
    ipa: '/ˈbærɪstə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A court lawyer (British)',
        example: 'The barrister presented the case.',
        turkishMeaning: 'mahkeme avukatı'
      }
    ],
    imageUrl: '/images/vocab/barrister.jpg',
    examples: ['The barrister presented the case.'],
    collocations: ['criminal barrister', 'hire barrister', 'barrister\'s chambers'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_068',
    word: 'chap',
    ipa: '/tʃæp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A man or boy (British informal)',
        example: 'He\'s a decent chap.',
        turkishMeaning: 'adam, herif'
      }
    ],
    imageUrl: '/images/vocab/chap.jpg',
    examples: ['He\'s a decent chap.'],
    collocations: ['nice chap', 'old chap', 'young chap'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_069',
    word: 'cheerio',
    ipa: '/ˌtʃɪəriˈəʊ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Goodbye (British informal)',
        example: 'Cheerio! See you tomorrow.',
        turkishMeaning: 'hoşça kal, güle güle'
      }
    ],
    imageUrl: '/images/vocab/cheerio.jpg',
    examples: ['Cheerio! See you tomorrow.'],
    collocations: ['say cheerio', 'cheerio then'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },

  // ==================== MORE SOCIAL VOCABULARY ====================
    {
    id: 'vocab_social_017',
    word: 'chit-chat',
    ipa: '/ˈtʃɪt tʃæt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Light informal conversation',
        example: 'We had a nice chit-chat over coffee.',
        turkishMeaning: 'sohbet, muhabbet'
      }
    ],
    imageUrl: '/images/vocab/chitchat.jpg',
    examples: ['We had a nice chit-chat over coffee.'],
    collocations: ['have a chit-chat', 'just chit-chat', 'friendly chit-chat'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_018',
    word: 'catch up',
    ipa: '/kætʃ ʌp/',
    partOfSpeech: 'phrasal-verb',
    definitions: [
      {
        meaning: 'Meet to exchange news',
        example: 'Let\'s catch up over lunch.',
        turkishMeaning: 'sohbet etmek, haberleşmek'
      }
    ],
    imageUrl: '/images/vocab/catchup.jpg',
    examples: ['Let\'s catch up over lunch.'],
    collocations: ['catch up with', 'catch up soon', 'catch up over'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_019',
    word: 'hang out',
    ipa: '/hæŋ aʊt/',
    partOfSpeech: 'phrasal-verb',
    definitions: [
      {
        meaning: 'Spend time together casually',
        example: 'Do you want to hang out this weekend?',
        turkishMeaning: 'takılmak'
      }
    ],
    imageUrl: '/images/vocab/hangout.jpg',
    examples: ['Do you want to hang out this weekend?'],
    collocations: ['hang out with', 'hang out together', 'hang out at'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_020',
    word: 'get together',
    ipa: '/ɡet təˈɡeðə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Meet socially',
        example: 'We should get together sometime.',
        turkishMeaning: 'bir araya gelmek'
      }
    ],
    imageUrl: '/images/vocab/gettogether.jpg',
    examples: ['We should get together sometime.'],
    collocations: ['get together for', 'get together with', 'family get together'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_021',
    word: 'turn up',
    ipa: '/tɜːn ʌp/',
    partOfSpeech: 'phrasal-verb',
    definitions: [
      {
        meaning: 'Arrive or appear',
        example: 'He didn\'t turn up to the meeting.',
        turkishMeaning: 'gelmek, ortaya çıkmak'
      }
    ],
    imageUrl: '/images/vocab/turnup.jpg',
    examples: ['He didn\'t turn up to the meeting.'],
    collocations: ['turn up late', 'didn\'t turn up', 'turn up at'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_022',
    word: 'bump into',
    ipa: '/bʌmp ˈɪntə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Meet someone unexpectedly',
        example: 'I bumped into an old friend yesterday.',
        turkishMeaning: 'rastlamak'
      }
    ],
    imageUrl: '/images/vocab/bumpinto.jpg',
    examples: ['I bumped into an old friend yesterday.'],
    collocations: ['bump into someone', 'bumped into', 'bump into each other'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_023',
    word: 'drop by',
    ipa: '/drɒp baɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Visit informally',
        example: 'Feel free to drop by anytime.',
        turkishMeaning: 'uğramak'
      }
    ],
    imageUrl: '/images/vocab/dropby.jpg',
    examples: ['Feel free to drop by anytime.'],
    collocations: ['drop by later', 'drop by sometime', 'drop by the office'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_024',
    word: 'fall out',
    ipa: '/fɔːl aʊt/',
    partOfSpeech: 'phrasal-verb',
    definitions: [
      {
        meaning: 'Have an argument and stop being friends',
        example: 'They fell out over money.',
        turkishMeaning: 'araları açılmak'
      }
    ],
    imageUrl: '/images/vocab/fallout.jpg',
    examples: ['They fell out over money.'],
    collocations: ['fall out with', 'fell out over', 'falling out'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_025',
    word: 'make up',
    ipa: '/meɪk ʌp/',
    partOfSpeech: 'phrasal-verb',
    definitions: [
      {
        meaning: 'Reconcile after an argument',
        example: 'They had a fight but made up quickly.',
        turkishMeaning: 'barışmak'
      }
    ],
    imageUrl: '/images/vocab/makeup.jpg',
    examples: ['They had a fight but made up quickly.'],
    collocations: ['make up with', 'kiss and make up', 'making up'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_026',
    word: 'get along',
    ipa: '/ɡet əˈlɒŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Have a good relationship',
        example: 'We get along really well.',
        turkishMeaning: 'geçinmek'
      }
    ],
    imageUrl: '/images/vocab/getalong.jpg',
    examples: ['We get along really well.'],
    collocations: ['get along with', 'get along well', 'don\'t get along'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },

  // ==================== ADDITIONAL BUSINESS VOCABULARY (Part 3) ====================
    {
    id: 'vocab_business_068',
    word: 'turnover',
    ipa: '/ˈtɜːnəʊvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Staff leaving and being replaced',
        example: 'High staff turnover is affecting productivity.',
        turkishMeaning: 'personel devir hızı'
      }
    ],
    imageUrl: '/images/vocab/turnover2.jpg',
    examples: ['High staff turnover is affecting productivity.'],
    collocations: ['staff turnover', 'high turnover', 'reduce turnover'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_069',
    word: 'pipeline',
    ipa: '/ˈpaɪplaɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Potential business opportunities in progress',
        example: 'We have several deals in the pipeline.',
        turkishMeaning: 'potansiyel iş fırsatları'
      }
    ],
    imageUrl: '/images/vocab/pipeline.jpg',
    examples: ['We have several deals in the pipeline.'],
    collocations: ['sales pipeline', 'in the pipeline', 'pipeline management'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_070',
    word: 'revenue',
    ipa: '/ˈrevənjuː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Income generated from business activities',
        example: 'Annual revenue increased by 15%.',
        turkishMeaning: 'gelir, hasılat'
      }
    ],
    imageUrl: '/images/vocab/revenue.jpg',
    examples: ['Annual revenue increased by 15%.'],
    collocations: ['revenue growth', 'generate revenue', 'revenue stream'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_071',
    word: 'expenditure',
    ipa: '/ɪkˈspendɪtʃə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Money spent or costs incurred',
        example: 'We need to control our expenditure.',
        turkishMeaning: 'masraf, harcama'
      }
    ],
    imageUrl: '/images/vocab/expenditure2.jpg',
    examples: ['We need to control our expenditure.'],
    collocations: ['capital expenditure', 'reduce expenditure', 'expenditure budget'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_072',
    word: 'profit margin',
    ipa: '/ˈprɒfɪt ˌmɑːdʒɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The difference between cost and selling price',
        example: 'Our profit margin is 25%.',
        turkishMeaning: 'kâr marjı'
      }
    ],
    imageUrl: '/images/vocab/profit-margin.jpg',
    examples: ['Our profit margin is 25%.'],
    collocations: ['net profit margin', 'increase margin', 'slim margin'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_073',
    word: 'write-off',
    ipa: '/ˈraɪt ɒf/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A reduction in asset value or cancellation of debt',
        example: 'The company wrote off £2 million in bad debts.',
        turkishMeaning: 'zarar yazma, silme'
      }
    ],
    imageUrl: '/images/vocab/writeoff.jpg',
    examples: ['The company wrote off £2 million in bad debts.'],
    collocations: ['tax write-off', 'debt write-off', 'write off losses'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_074',
    word: 'takeover',
    ipa: '/ˈteɪkəʊvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Acquisition of one company by another',
        example: 'The takeover was completed last month.',
        turkishMeaning: 'devralma, satın alma'
      }
    ],
    imageUrl: '/images/vocab/takeover.jpg',
    examples: ['The takeover was completed last month.'],
    collocations: ['hostile takeover', 'takeover bid', 'complete takeover'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_075',
    word: 'bailout',
    ipa: '/ˈbeɪlaʊt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Financial assistance to prevent failure',
        example: 'The government provided a bailout for the airline.',
        turkishMeaning: 'kurtarma paketi'
      }
    ],
    imageUrl: '/images/vocab/bailout.jpg',
    examples: ['The government provided a bailout for the airline.'],
    collocations: ['government bailout', 'bailout package', 'financial bailout'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_076',
    word: 'bankrupt',
    ipa: '/ˈbæŋkrʌpt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Unable to pay debts',
        example: 'The company went bankrupt last year.',
        turkishMeaning: 'iflas etmiş'
      }
    ],
    imageUrl: '/images/vocab/bankrupt.jpg',
    examples: ['The company went bankrupt last year.'],
    collocations: ['go bankrupt', 'declare bankrupt', 'bankrupt company'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_077',
    word: 'recession',
    ipa: '/rɪˈseʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A period of economic decline',
        example: 'Many businesses struggled during the recession.',
        turkishMeaning: 'durgunluk, resesyon'
      }
    ],
    imageUrl: '/images/vocab/recession.jpg',
    examples: ['Many businesses struggled during the recession.'],
    collocations: ['economic recession', 'deep recession', 'recession period'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_078',
    word: 'assets',
    ipa: '/ˈæsets/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Property or resources owned by a company',
        example: 'The company has assets worth £50 million.',
        turkishMeaning: 'varlıklar, aktifler'
      }
    ],
    imageUrl: '/images/vocab/assets.jpg',
    examples: ['The company has assets worth £50 million.'],
    collocations: ['company assets', 'fixed assets', 'liquid assets'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_079',
    word: 'liabilities',
    ipa: '/ˌlaɪəˈbɪlətiz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Financial obligations or debts',
        example: 'Total liabilities exceeded £10 million.',
        turkishMeaning: 'yükümlülükler, borçlar'
      }
    ],
    imageUrl: '/images/vocab/liabilities.jpg',
    examples: ['Total liabilities exceeded £10 million.'],
    collocations: ['current liabilities', 'reduce liabilities', 'financial liabilities'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_080',
    word: 'invoice',
    ipa: '/ˈɪnvɔɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A bill for goods or services supplied',
        example: 'Please settle the invoice within 30 days.',
        turkishMeaning: 'fatura'
      }
    ],
    imageUrl: '/images/vocab/invoice2.jpg',
    examples: ['Please settle the invoice within 30 days.'],
    collocations: ['send invoice', 'pay invoice', 'invoice number'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_081',
    word: 'ledger',
    ipa: '/ˈledʒə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A book of financial accounts',
        example: 'All transactions are recorded in the ledger.',
        turkishMeaning: 'defter, muhasebe defteri'
      }
    ],
    imageUrl: '/images/vocab/ledger.jpg',
    examples: ['All transactions are recorded in the ledger.'],
    collocations: ['general ledger', 'ledger entry', 'accounting ledger'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_082',
    word: 'quotation',
    ipa: '/kwəʊˈteɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A statement of price for work to be done',
        example: 'Can you send me a quotation?',
        turkishMeaning: 'fiyat teklifi'
      }
    ],
    imageUrl: '/images/vocab/quotation2.jpg',
    examples: ['Can you send me a quotation?'],
    collocations: ['request quotation', 'written quotation', 'price quotation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_083',
    word: 'wholesaler',
    ipa: '/ˈhəʊlseɪlə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A person or company selling goods in large quantities',
        example: 'We buy from a wholesaler to reduce costs.',
        turkishMeaning: 'toptancı'
      }
    ],
    imageUrl: '/images/vocab/wholesaler.jpg',
    examples: ['We buy from a wholesaler to reduce costs.'],
    collocations: ['wholesaler prices', 'contact wholesaler', 'wholesale market'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_084',
    word: 'retailer',
    ipa: '/ˈriːteɪlə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A business selling goods to the public',
        example: 'The product is available from major retailers.',
        turkishMeaning: 'perakendeci'
      }
    ],
    imageUrl: '/images/vocab/retailer.jpg',
    examples: ['The product is available from major retailers.'],
    collocations: ['online retailer', 'retail store', 'major retailer'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_085',
    word: 'distributor',
    ipa: '/dɪˈstrɪbjʊtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An agent who supplies goods to retailers',
        example: 'We work with distributors across Europe.',
        turkishMeaning: 'distribütör, dağıtıcı'
      }
    ],
    imageUrl: '/images/vocab/distributor.jpg',
    examples: ['We work with distributors across Europe.'],
    collocations: ['exclusive distributor', 'distributor network', 'authorized distributor'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_086',
    word: 'supplier',
    ipa: '/səˈplaɪə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A company providing goods or services',
        example: 'We need to find a reliable supplier.',
        turkishMeaning: 'tedarikçi'
      }
    ],
    imageUrl: '/images/vocab/supplier.jpg',
    examples: ['We need to find a reliable supplier.'],
    collocations: ['key supplier', 'supplier contract', 'supplier relationship'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_087',
    word: 'patent',
    ipa: '/ˈpætnt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Exclusive right to make or sell an invention',
        example: 'The company filed a patent for the new technology.',
        turkishMeaning: 'patent'
      }
    ],
    imageUrl: '/images/vocab/patent.jpg',
    examples: ['The company filed a patent for the new technology.'],
    collocations: ['patent application', 'patent rights', 'file patent'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_088',
    word: 'trademark',
    ipa: '/ˈtreɪdmɑːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A symbol or name identifying a product',
        example: 'The logo is a registered trademark.',
        turkishMeaning: 'ticari marka'
      }
    ],
    imageUrl: '/images/vocab/trademark.jpg',
    examples: ['The logo is a registered trademark.'],
    collocations: ['registered trademark', 'trademark protection', 'trademark infringement'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_089',
    word: 'copyright',
    ipa: '/ˈkɒpiraɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Exclusive legal right to publish work',
        example: 'All content is protected by copyright.',
        turkishMeaning: 'telif hakkı'
      }
    ],
    imageUrl: '/images/vocab/copyright.jpg',
    examples: ['All content is protected by copyright.'],
    collocations: ['copyright protection', 'copyright holder', 'copyright infringement'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_090',
    word: 'logistics',
    ipa: '/ləˈdʒɪstɪks/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The organization of moving and storing goods',
        example: 'Our logistics department handles all deliveries.',
        turkishMeaning: 'lojistik'
      }
    ],
    imageUrl: '/images/vocab/logistics.jpg',
    examples: ['Our logistics department handles all deliveries.'],
    collocations: ['logistics company', 'logistics management', 'supply chain logistics'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_091',
    word: 'shipment',
    ipa: '/ˈʃɪpmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Goods transported',
        example: 'The shipment arrived yesterday.',
        turkishMeaning: 'sevkiyat, gönderi'
      }
    ],
    imageUrl: '/images/vocab/shipment.jpg',
    examples: ['The shipment arrived yesterday.'],
    collocations: ['international shipment', 'track shipment', 'shipment delay'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_092',
    word: 'warehouse',
    ipa: '/ˈweəhaʊs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A building for storing goods',
        example: 'All stock is kept in our warehouse.',
        turkishMeaning: 'depo'
      }
    ],
    imageUrl: '/images/vocab/warehouse.jpg',
    examples: ['All stock is kept in our warehouse.'],
    collocations: ['warehouse storage', 'warehouse manager', 'distribution warehouse'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },

  // ==================== ADDITIONAL TECHNICAL VOCABULARY (Part 3) ====================
    {
    id: 'vocab_tech_078',
    word: 'download',
    ipa: '/ˌdaʊnˈləʊd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Transfer data from internet to computer',
        example: 'You can download the app from our website.',
        turkishMeaning: 'indirmek'
      }
    ],
    imageUrl: '/images/vocab/download.jpg',
    examples: ['You can download the app from our website.'],
    collocations: ['download file', 'download speed', 'free download'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_079',
    word: 'upload',
    ipa: '/ˌʌpˈləʊd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Transfer data from computer to internet',
        example: 'Please upload your documents here.',
        turkishMeaning: 'yüklemek'
      }
    ],
    imageUrl: '/images/vocab/upload.jpg',
    examples: ['Please upload your documents here.'],
    collocations: ['upload file', 'upload image', 'upload document'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_080',
    word: 'login',
    ipa: '/ˈlɒɡɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Process of accessing a system',
        example: 'Enter your login credentials.',
        turkishMeaning: 'giriş yapma'
      }
    ],
    imageUrl: '/images/vocab/login.jpg',
    examples: ['Enter your login credentials.'],
    collocations: ['login page', 'login details', 'login credentials'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
  {
    id: 'vocab_tech_081',
    word: 'logout',
    ipa: '/ˈlɒɡaʊt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Process of exiting a system',
        example: 'Don\'t forget to logout when finished.',
        turkishMeaning: 'çıkış yapma'
      }
    ],
    imageUrl: '/images/vocab/logout.jpg',
    examples: ['Don\'t forget to logout when finished.'],
    collocations: ['logout button', 'secure logout', 'logout process'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_082',
    word: 'password',
    ipa: '/ˈpɑːswɜːd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Secret word for authentication',
        example: 'Create a strong password.',
        turkishMeaning: 'şifre'
      }
    ],
    imageUrl: '/images/vocab/password.jpg',
    examples: ['Create a strong password.'],
    collocations: ['reset password', 'strong password', 'password protection'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_083',
    word: 'username',
    ipa: '/ˈjuːzəneɪm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Identification name for a system',
        example: 'Enter your username and password.',
        turkishMeaning: 'kullanıcı adı'
      }
    ],
    imageUrl: '/images/vocab/username.jpg',
    examples: ['Enter your username and password.'],
    collocations: ['unique username', 'username field', 'choose username'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_084',
    word: 'browser',
    ipa: '/ˈbraʊzə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Software for accessing websites',
        example: 'Which browser do you use?',
        turkishMeaning: 'tarayıcı'
      }
    ],
    imageUrl: '/images/vocab/browser.jpg',
    examples: ['Which browser do you use?'],
    collocations: ['web browser', 'browser window', 'update browser'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_085',
    word: 'malware',
    ipa: '/ˈmælweə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Malicious software designed to harm systems',
        example: 'Install antivirus to protect against malware.',
        turkishMeaning: 'zararlı yazılım'
      }
    ],
    imageUrl: '/images/vocab/malware.jpg',
    examples: ['Install antivirus to protect against malware.'],
    collocations: ['malware attack', 'malware protection', 'detect malware'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_086',
    word: 'virus',
    ipa: '/ˈvaɪrəs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Malicious code that replicates itself',
        example: 'The computer has a virus.',
        turkishMeaning: 'virüs'
      }
    ],
    imageUrl: '/images/vocab/virus.jpg',
    examples: ['The computer has a virus.'],
    collocations: ['computer virus', 'virus scan', 'virus protection'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_087',
    word: 'firewall',
    ipa: '/ˈfaɪəwɔːl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Security system protecting a network',
        example: 'The firewall blocks unauthorized access.',
        turkishMeaning: 'güvenlik duvarı'
      }
    ],
    imageUrl: '/images/vocab/firewall.jpg',
    examples: ['The firewall blocks unauthorized access.'],
    collocations: ['firewall protection', 'configure firewall', 'network firewall'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'surface-treatment'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_088',
    word: 'spam',
    ipa: '/spæm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Unwanted email messages',
        example: 'The email went to the spam folder.',
        turkishMeaning: 'istenmeyen e-posta'
      }
    ],
    imageUrl: '/images/vocab/spam.jpg',
    examples: ['The email went to the spam folder.'],
    collocations: ['spam filter', 'spam folder', 'block spam'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_089',
    word: 'attachment',
    ipa: '/əˈtætʃmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'A file sent with an email',
        example: 'Please see the attachment for details.',
        turkishMeaning: 'ek dosya'
      }
    ],
    imageUrl: '/images/vocab/attachment.jpg',
    examples: ['Please see the attachment for details.'],
    collocations: ['email attachment', 'open attachment', 'send attachment'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_090',
    word: 'folder',
    ipa: '/ˈfəʊldə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A container for organizing files',
        example: 'Save the file in a new folder.',
        turkishMeaning: 'klasör'
      }
    ],
    imageUrl: '/images/vocab/folder.jpg',
    examples: ['Save the file in a new folder.'],
    collocations: ['create folder', 'shared folder', 'folder structure'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_091',
    word: 'install',
    ipa: '/ɪnˈstɔːl/',
    partOfSpeech: 'verb',
    definitions: [
      {
        meaning: 'Set up software on a device',
        example: 'How do I install this application?',
        turkishMeaning: 'kurmak, yüklemek'
      }
    ],
    imageUrl: '/images/vocab/install.jpg',
    examples: ['How do I install this application?'],
    collocations: ['install software', 'easy to install', 'installation process'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_092',
    word: 'uninstall',
    ipa: '/ˌʌnɪnˈstɔːl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Remove software from a device',
        example: 'You can uninstall unused programs.',
        turkishMeaning: 'kaldırmak'
      }
    ],
    imageUrl: '/images/vocab/uninstall.jpg',
    examples: ['You can uninstall unused programs.'],
    collocations: ['uninstall program', 'uninstall app', 'uninstall completely'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_093',
    word: 'reboot',
    ipa: '/ˌriːˈbuːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Restart a computer system',
        example: 'Please reboot your computer.',
        turkishMeaning: 'yeniden başlatmak'
      }
    ],
    imageUrl: '/images/vocab/reboot.jpg',
    examples: ['Please reboot your computer.'],
    collocations: ['reboot system', 'need to reboot', 'automatic reboot'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_094',
    word: 'crash',
    ipa: '/kræʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Sudden failure of a system',
        example: 'The application crashed unexpectedly.',
        turkishMeaning: 'çökmek'
      }
    ],
    imageUrl: '/images/vocab/crash.jpg',
    examples: ['The application crashed unexpectedly.'],
    collocations: ['system crash', 'application crash', 'crash report'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_095',
    word: 'freeze',
    ipa: '/friːz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Stop responding temporarily',
        example: 'The screen froze for a few seconds.',
        turkishMeaning: 'donmak'
      }
    ],
    imageUrl: '/images/vocab/freeze.jpg',
    examples: ['The screen froze for a few seconds.'],
    collocations: ['screen freeze', 'system freeze', 'freeze up'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_096',
    word: 'update',
    ipa: '/ˌʌpˈdeɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Install the latest version',
        example: 'Please update your software.',
        turkishMeaning: 'güncellemek'
      }
    ],
    imageUrl: '/images/vocab/update.jpg',
    examples: ['Please update your software.'],
    collocations: ['software update', 'automatic update', 'install update'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_097',
    word: 'patch',
    ipa: '/pætʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A software update fixing problems',
        example: 'Download the latest security patch.',
        turkishMeaning: 'yama, güncelleme'
      }
    ],
    imageUrl: '/images/vocab/patch.jpg',
    examples: ['Download the latest security patch.'],
    collocations: ['security patch', 'install patch', 'patch update'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_098',
    word: 'bug',
    ipa: '/bʌɡ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An error in software code',
        example: 'We found a bug in the code.',
        turkishMeaning: 'hata, bug'
      }
    ],
    imageUrl: '/images/vocab/bug.jpg',
    examples: ['We found a bug in the code.'],
    collocations: ['software bug', 'fix bug', 'report bug'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
  {
    id: 'vocab_tech_099',
    word: 'glitch',
    ipa: '/ɡlɪtʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A minor technical problem',
        example: 'There\'s a glitch in the system.',
        turkishMeaning: 'küçük teknik sorun'
      }
    ],
    imageUrl: '/images/vocab/glitch.jpg',
    examples: ['There\'s a glitch in the system.'],
    collocations: ['technical glitch', 'minor glitch', 'glitch in'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_100',
    word: 'pixel',
    ipa: '/ˈpɪksl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The smallest unit of a digital image',
        example: 'The image is 1920 pixels wide.',
        turkishMeaning: 'piksel'
      }
    ],
    imageUrl: '/images/vocab/pixel.jpg',
    examples: ['The image is 1920 pixels wide.'],
    collocations: ['pixel density', 'pixel resolution', 'high pixel'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_101',
    word: 'resolution',
    ipa: '/ˌrezəˈluːʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The detail an image holds',
        example: 'The screen has high resolution.',
        turkishMeaning: 'çözünürlük'
      }
    ],
    imageUrl: '/images/vocab/resolution.jpg',
    examples: ['The screen has high resolution.'],
    collocations: ['screen resolution', 'high resolution', 'image resolution'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
  {
    id: 'vocab_tech_102',
    word: 'screenshot',
    ipa: '/ˈskriːnʃɒt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An image of what\'s on screen',
        example: 'Take a screenshot of the error message.',
        turkishMeaning: 'ekran görüntüsü'
      }
    ],
    imageUrl: '/images/vocab/screenshot.jpg',
    examples: ['Take a screenshot of the error message.'],
    collocations: ['take screenshot', 'screenshot tool', 'capture screenshot'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },

  // ==================== ADDITIONAL TRAVEL VOCABULARY (Part 3) ====================
    {
    id: 'vocab_travel_046',
    word: 'backpacker',
    ipa: '/ˈbækpækə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A person travelling with a backpack',
        example: 'The hostel is popular with backpackers.',
        turkishMeaning: 'sırt çantalı gezgin'
      }
    ],
    imageUrl: '/images/vocab/backpacker.jpg',
    examples: ['The hostel is popular with backpackers.'],
    collocations: ['backpacker hostel', 'backpacker route', 'budget backpacker'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_047',
    word: 'excursion',
    ipa: '/ɪkˈskɜːʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A short journey for pleasure',
        example: 'We booked a day excursion to the island.',
        turkishMeaning: 'gezi, gezinti'
      }
    ],
    imageUrl: '/images/vocab/excursion.jpg',
    examples: ['We booked a day excursion to the island.'],
    collocations: ['day excursion', 'group excursion', 'excursion ticket'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel'],
    category: 'travel'
  },
  {
    id: 'vocab_travel_048',
    word: 'destination',
    ipa: '/ˌdestɪˈneɪʃn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'The place where someone is going',
        example: 'What\'s your final destination?',
        turkishMeaning: 'varış noktası, hedef'
      }
    ],
    imageUrl: '/images/vocab/destination.jpg',
    examples: ['What\'s your final destination?'],
    collocations: ['travel destination', 'final destination', 'popular destination'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_049',
    word: 'souvenir',
    ipa: '/ˌsuːvəˈnɪə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An item kept as a reminder of a place',
        example: 'I bought some souvenirs for my family.',
        turkishMeaning: 'hatıra'
      }
    ],
    imageUrl: '/images/vocab/souvenir.jpg',
    examples: ['I bought some souvenirs for my family.'],
    collocations: ['souvenir shop', 'buy souvenirs', 'souvenir gift'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_050',
    word: 'guidebook',
    ipa: '/ˈɡaɪdbʊk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A book of information about a place',
        example: 'I bought a guidebook about London.',
        turkishMeaning: 'rehber kitap'
      }
    ],
    imageUrl: '/images/vocab/guidebook.jpg',
    examples: ['I bought a guidebook about London.'],
    collocations: ['travel guidebook', 'guidebook recommendations', 'refer to guidebook'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_051',
    word: 'landmark',
    ipa: '/ˈlændmɑːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A recognizable feature or building',
        example: 'Big Ben is a famous London landmark.',
        turkishMeaning: 'işaret noktası, anıt'
      }
    ],
    imageUrl: '/images/vocab/landmark.jpg',
    examples: ['Big Ben is a famous London landmark.'],
    collocations: ['famous landmark', 'historic landmark', 'visit landmark'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_052',
    word: 'tourist',
    ipa: '/ˈtʊərɪst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A person travelling for pleasure',
        example: 'The area is popular with tourists.',
        turkishMeaning: 'turist'
      }
    ],
    imageUrl: '/images/vocab/tourist.jpg',
    examples: ['The area is popular with tourists.'],
    collocations: ['tourist attraction', 'tourist season', 'foreign tourist'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_053',
    word: 'traveller',
    ipa: '/ˈtrævələ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A person who travels (British spelling)',
        example: 'The airport was busy with travellers.',
        turkishMeaning: 'yolcu, gezgin'
      }
    ],
    imageUrl: '/images/vocab/traveller.jpg',
    examples: ['The airport was busy with travellers.'],
    collocations: ['frequent traveller', 'business traveller', 'solo traveller'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel'],
    category: 'travel'
  },
  {
    id: 'vocab_travel_054',
    word: 'passport',
    ipa: '/ˈpɑːspɔːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An official travel document',
        example: 'Don\'t forget your passport.',
        turkishMeaning: 'pasaport'
      }
    ],
    imageUrl: '/images/vocab/passport.jpg',
    examples: ['Don\'t forget your passport.'],
    collocations: ['passport control', 'valid passport', 'passport holder'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A1',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_055',
    word: 'delay',
    ipa: '/dɪˈleɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A period of waiting',
        example: 'The flight was delayed by two hours.',
        turkishMeaning: 'gecikme'
      }
    ],
    imageUrl: '/images/vocab/delay.jpg',
    examples: ['The flight was delayed by two hours.'],
    collocations: ['flight delay', 'delayed departure', 'weather delay'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_056',
    word: 'reschedule',
    ipa: '/ˌriːˈʃedjuːl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Arrange a new time',
        example: 'We had to reschedule our flight.',
        turkishMeaning: 'yeniden planlamak'
      }
    ],
    imageUrl: '/images/vocab/reschedule.jpg',
    examples: ['We had to reschedule our flight.'],
    collocations: ['reschedule appointment', 'reschedule meeting', 'need to reschedule'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_057',
    word: 'direct flight',
    ipa: '/dəˈrekt flaɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A flight with no stops',
        example: 'Is there a direct flight to New York?',
        turkishMeaning: 'direkt uçuş'
      }
    ],
    imageUrl: '/images/vocab/direct-flight.jpg',
    examples: ['Is there a direct flight to New York?'],
    collocations: ['book direct flight', 'prefer direct flight', 'direct flight available'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_058',
    word: 'connecting flight',
    ipa: '/kəˈnektɪŋ flaɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A flight requiring a change of planes',
        example: 'My connecting flight is in two hours.',
        turkishMeaning: 'aktarmalı uçuş'
      }
    ],
    imageUrl: '/images/vocab/connecting-flight.jpg',
    examples: ['My connecting flight is in two hours.'],
    collocations: ['miss connecting flight', 'tight connection', 'connecting flight time'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_059',
    word: 'aisle seat',
    ipa: '/aɪl siːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A seat next to the walkway',
        example: 'I prefer an aisle seat.',
        turkishMeaning: 'koridor koltuğu'
      }
    ],
    imageUrl: '/images/vocab/aisle-seat.jpg',
    examples: ['I prefer an aisle seat.'],
    collocations: ['aisle or window', 'book aisle seat', 'prefer aisle'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_060',
    word: 'window seat',
    ipa: '/ˈwɪndəʊ siːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A seat next to the window',
        example: 'Can I have a window seat?',
        turkishMeaning: 'pencere koltuğu'
      }
    ],
    imageUrl: '/images/vocab/window-seat.jpg',
    examples: ['Can I have a window seat?'],
    collocations: ['window seat view', 'request window seat', 'prefer window'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },

  // ==================== ADDITIONAL DAILY VOCABULARY (Part 3) ====================
    {
    id: 'vocab_daily_070',
    word: 'blimey',
    ipa: '/ˈblaɪmi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An expression of surprise (British)',
        example: 'Blimey! That was close!',
        turkishMeaning: 'vay canına, hay aksi'
      }
    ],
    imageUrl: '/images/vocab/blimey.jpg',
    examples: ['Blimey! That was close!'],
    collocations: ['blimey indeed', 'oh blimey'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_071',
    word: 'crikey',
    ipa: '/ˈkraɪki/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'An expression of surprise (British)',
        example: 'Crikey! I forgot my keys!',
        turkishMeaning: 'aman Allah'
      }
    ],
    imageUrl: '/images/vocab/crikey.jpg',
    examples: ['Crikey! I forgot my keys!'],
    collocations: ['crikey moses', 'oh crikey'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_072',
    word: 'bloke',
    ipa: '/bləʊk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A man (British informal)',
        example: 'That bloke over there is my neighbour.',
        turkishMeaning: 'adam, tip'
      }
    ],
    imageUrl: '/images/vocab/bloke2.jpg',
    examples: ['That bloke over there is my neighbour.'],
    collocations: ['nice bloke', 'funny bloke', 'regular bloke'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_073',
    word: 'loo',
    ipa: '/luː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Toilet (British informal)',
        example: 'Where\'s the loo?',
        turkishMeaning: 'tuvalet'
      }
    ],
    imageUrl: '/images/vocab/loo.jpg',
    examples: ['Where\'s the loo?'],
    collocations: ['use the loo', 'go to the loo', 'ladies\' loo'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_074',
    word: 'quid',
    ipa: '/kwɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'One pound sterling (British slang)',
        example: 'That costs twenty quid.',
        turkishMeaning: 'bir sterlin'
      }
    ],
    imageUrl: '/images/vocab/quid.jpg',
    examples: ['That costs twenty quid.'],
    collocations: ['a few quid', 'fifty quid', 'cost quid'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_075',
    word: 'fiver',
    ipa: '/ˈfaɪvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A five-pound note (British)',
        example: 'Can you lend me a fiver?',
        turkishMeaning: 'beş sterlinlik banknot'
      }
    ],
    imageUrl: '/images/vocab/fiver.jpg',
    examples: ['Can you lend me a fiver?'],
    collocations: ['lend a fiver', 'spare fiver', 'cost a fiver'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_076',
    word: 'tenner',
    ipa: '/ˈtenə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A ten-pound note (British)',
        example: 'I only have a tenner on me.',
        turkishMeaning: 'on sterlinlik banknot'
      }
    ],
    imageUrl: '/images/vocab/tenner.jpg',
    examples: ['I only have a tenner on me.'],
    collocations: ['tenner note', 'cost a tenner', 'give a tenner'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_077',
    word: 'chippy',
    ipa: '/ˈtʃɪpi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A fish and chip shop (British)',
        example: 'Let\'s get dinner from the chippy.',
        turkishMeaning: 'balık ekmek dükkanı'
      }
    ],
    imageUrl: '/images/vocab/chippy.jpg',
    examples: ['Let\'s get dinner from the chippy.'],
    collocations: ['local chippy', 'chippy tea', 'go to chippy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_078',
    word: 'pub',
    ipa: '/pʌb/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A public house serving drinks (British)',
        example: 'Fancy going to the pub?',
        turkishMeaning: 'bar, meyhane'
      }
    ],
    imageUrl: '/images/vocab/pub.jpg',
    examples: ['Fancy going to the pub?'],
    collocations: ['local pub', 'pub food', 'go to pub'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_079',
    word: 'takeaway',
    ipa: '/ˈteɪkəweɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Food to be eaten elsewhere (British)',
        example: 'Shall we get a takeaway tonight?',
        turkishMeaning: 'paket servis'
      }
    ],
    imageUrl: '/images/vocab/takeaway.jpg',
    examples: ['Shall we get a takeaway tonight?'],
    collocations: ['Chinese takeaway', 'order takeaway', 'takeaway menu'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_080',
    word: 'biscuit',
    ipa: '/ˈbɪskɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A sweet baked snack (British)',
        example: 'Would you like a biscuit with your tea?',
        turkishMeaning: 'bisküvi'
      }
    ],
    imageUrl: '/images/vocab/biscuit.jpg',
    examples: ['Would you like a biscuit with your tea?'],
    collocations: ['chocolate biscuit', 'packet of biscuits', 'biscuit tin'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_081',
    word: 'cuppa',
    ipa: '/ˈkʌpə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A cup of tea (British informal)',
        example: 'Fancy a cuppa?',
        turkishMeaning: 'bir fincan çay'
      }
    ],
    imageUrl: '/images/vocab/cuppa.jpg',
    examples: ['Fancy a cuppa?'],
    collocations: ['nice cuppa', 'have a cuppa', 'make a cuppa'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_082',
    word: 'mates rates',
    ipa: '/meɪts reɪts/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A special price for friends (British)',
        example: 'I\'ll give you mates rates.',
        turkishMeaning: 'arkadaş fiyatı'
      }
    ],
    imageUrl: '/images/vocab/mates-rates.jpg',
    examples: ['I\'ll give you mates rates.'],
    collocations: ['do mates rates', 'charge mates rates', 'special mates rates'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_083',
    word: 'skint',
    ipa: '/skɪnt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Having no money (British slang)',
        example: 'I\'m completely skint this month.',
        turkishMeaning: 'meteliksiz, züğürt'
      }
    ],
    imageUrl: '/images/vocab/skint.jpg',
    examples: ['I\'m completely skint this month.'],
    collocations: ['totally skint', 'bit skint', 'feel skint'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_084',
    word: 'daft',
    ipa: '/dɑːft/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Silly or foolish (British)',
        example: 'Don\'t be daft!',
        turkishMeaning: 'aptal, ahmak'
      }
    ],
    imageUrl: '/images/vocab/daft.jpg',
    examples: ['Don\'t be daft!'],
    collocations: ['daft idea', 'don\'t be daft', 'bit daft'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_085',
    word: 'naff',
    ipa: '/næf/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Lacking taste or style (British)',
        example: 'That shirt is a bit naff.',
        turkishMeaning: 'zevksiz, dandik'
      }
    ],
    imageUrl: '/images/vocab/naff.jpg',
    examples: ['That shirt is a bit naff.'],
    collocations: ['naff design', 'bit naff', 'naff idea'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_086',
    word: 'posh',
    ipa: '/pɒʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Elegant or upper class (British)',
        example: 'They live in a posh neighbourhood.',
        turkishMeaning: 'lüks, kibar'
      }
    ],
    imageUrl: '/images/vocab/posh.jpg',
    examples: ['They live in a posh neighbourhood.'],
    collocations: ['posh restaurant', 'posh area', 'posh accent'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_087',
    word: 'grotty',
    ipa: '/ˈɡrɒti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Unpleasant or dirty (British)',
        example: 'The hotel room was really grotty.',
        turkishMeaning: 'pis, iğrenç'
      }
    ],
    imageUrl: '/images/vocab/grotty.jpg',
    examples: ['The hotel room was really grotty.'],
    collocations: ['grotty place', 'bit grotty', 'grotty weather'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_088',
    word: 'cheeky',
    ipa: '/ˈtʃiːki/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Impudent or playfully rude (British)',
        example: 'Don\'t be cheeky!',
        turkishMeaning: 'küstah, arsız'
      }
    ],
    imageUrl: '/images/vocab/cheeky.jpg',
    examples: ['Don\'t be cheeky!'],
    collocations: ['cheeky smile', 'bit cheeky', 'cheeky comment'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_089',
    word: 'chuffed',
    ipa: '/tʃʌft/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very pleased (British informal)',
        example: 'I\'m dead chuffed with the result.',
        turkishMeaning: 'çok memnun'
      }
    ],
    imageUrl: '/images/vocab/chuffed2.jpg',
    examples: ['I\'m dead chuffed with the result.'],
    collocations: ['dead chuffed', 'really chuffed', 'chuffed to bits'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_090',
    word: 'knackered',
    ipa: '/ˈnækəd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very tired (British slang)',
        example: 'I\'m absolutely knackered.',
        turkishMeaning: 'çok yorgun'
      }
    ],
    imageUrl: '/images/vocab/knackered2.jpg',
    examples: ['I\'m absolutely knackered.'],
    collocations: ['absolutely knackered', 'feel knackered', 'totally knackered'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_091',
    word: 'miffed',
    ipa: '/mɪft/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Slightly annoyed (British informal)',
        example: 'He was a bit miffed about missing the party.',
        turkishMeaning: 'bozulmuş, kırılmış'
      }
    ],
    imageUrl: '/images/vocab/miffed.jpg',
    examples: ['He was a bit miffed about missing the party.'],
    collocations: ['bit miffed', 'feel miffed', 'miffed about'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_092',
    word: 'narked',
    ipa: '/nɑːkt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Annoyed or irritated (British slang)',
        example: 'He got narked when I was late.',
        turkishMeaning: 'sinirlenmiş'
      }
    ],
    imageUrl: '/images/vocab/narked.jpg',
    examples: ['He got narked when I was late.'],
    collocations: ['get narked', 'bit narked', 'narked off'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_093',
    word: 'faff',
    ipa: '/fæf/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Waste time on trivial things (British)',
        example: 'Stop faffing about and get ready!',
        turkishMeaning: 'oyalanmak'
      }
    ],
    imageUrl: '/images/vocab/faff.jpg',
    examples: ['Stop faffing about and get ready!'],
    collocations: ['faff about', 'faff around', 'stop faffing'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_094',
    word: 'wonky',
    ipa: '/ˈwɒŋki/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Unsteady or not straight (British)',
        example: 'The table is a bit wonky.',
        turkishMeaning: 'çarpık, eğri'
      }
    ],
    imageUrl: '/images/vocab/wonky.jpg',
    examples: ['The table is a bit wonky.'],
    collocations: ['bit wonky', 'wonky table', 'wonky tooth'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },

  // ==================== ADDITIONAL SOCIAL VOCABULARY (Part 3) ====================
  {
    id: 'vocab_social_027',
    word: 'mate',
    ipa: '/meɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Friend (British informal)',
        example: 'He\'s a good mate of mine.',
        turkishMeaning: 'arkadaş'
      }
    ],
    imageUrl: '/images/vocab/mate2.jpg',
    examples: ['He\'s a good mate of mine.'],
    collocations: ['good mate', 'old mate', 'top mate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_028',
    word: 'chum',
    ipa: '/tʃʌm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A close friend (British informal)',
        example: 'We\'ve been chums since childhood.',
        turkishMeaning: 'yakın arkadaş'
      }
    ],
    imageUrl: '/images/vocab/chum.jpg',
    examples: ['We\'ve been chums since childhood.'],
    collocations: ['old chum', 'chum around', 'best chum'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_029',
    word: 'pal',
    ipa: '/pæl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'A friend (informal)',
        example: 'He\'s an old pal of mine.',
        turkishMeaning: 'arkadaş, dost'
      }
    ],
    imageUrl: '/images/vocab/pal.jpg',
    examples: ['He\'s an old pal of mine.'],
    collocations: ['old pal', 'pen pal', 'pal around'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_030',
    word: 'chap',
    ipa: '/tʃæp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A man or fellow (British)',
        example: 'He\'s a decent chap.',
        turkishMeaning: 'adam, herif'
      }
    ],
    imageUrl: '/images/vocab/chap2.jpg',
    examples: ['He\'s a decent chap.'],
    collocations: ['nice chap', 'old chap', 'good chap'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_031',
    word: 'natter',
    ipa: '/ˈnætə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Chat casually (British)',
        example: 'We had a good natter over coffee.',
        turkishMeaning: 'çene çalmak'
      }
    ],
    imageUrl: '/images/vocab/natter.jpg',
    examples: ['We had a good natter over coffee.'],
    collocations: ['have a natter', 'natter away', 'long natter'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_032',
    word: 'chin wag',
    ipa: '/tʃɪn wæɡ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'A chat or conversation (British)',
        example: 'Let\'s have a chin wag later.',
        turkishMeaning: 'sohbet, muhabbet'
      }
    ],
    imageUrl: '/images/vocab/chin-wag.jpg',
    examples: ['Let\'s have a chin wag later.'],
    collocations: ['have a chin wag', 'good chin wag', 'quick chin wag'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_033',
    word: 'gossip',
    ipa: '/ˈɡɒsɪp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Casual talk about others',
        example: 'She loves to gossip about celebrities.',
        turkishMeaning: 'dedikodu'
      }
    ],
    imageUrl: '/images/vocab/gossip.jpg',
    examples: ['She loves to gossip about celebrities.'],
    collocations: ['gossip about', 'office gossip', 'spread gossip'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_034',
    word: 'eavesdrop',
    ipa: '/ˈiːvzdrɒp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Listen secretly to a conversation',
        example: 'I didn\'t mean to eavesdrop.',
        turkishMeaning: 'gizlice dinlemek'
      }
    ],
    imageUrl: '/images/vocab/eavesdrop.jpg',
    examples: ['I didn\'t mean to eavesdrop.'],
    collocations: ['eavesdrop on', 'caught eavesdropping', 'eavesdrop conversation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_035',
    word: 'mingle',
    ipa: '/ˈmɪŋɡl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Mix socially with others',
        example: 'Feel free to mingle with other guests.',
        turkishMeaning: 'kaynaşmak'
      }
    ],
    imageUrl: '/images/vocab/mingle.jpg',
    examples: ['Feel free to mingle with other guests.'],
    collocations: ['mingle with', 'mingle at party', 'time to mingle'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_036',
    word: 'acquaintance',
    ipa: '/əˈkweɪntəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Someone you know slightly',
        example: 'He\'s just an acquaintance, not a friend.',
        turkishMeaning: 'tanıdık'
      }
    ],
    imageUrl: '/images/vocab/acquaintance.jpg',
    examples: ['He\'s just an acquaintance, not a friend.'],
    collocations: ['casual acquaintance', 'make acquaintance', 'old acquaintance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['social'],
    category: 'social'
  },

  // ==================== BATCH 5: 100 MORE WORDS ====================

  // BUSINESS (25 words)
    {
    id: 'vocab_business_093',
    word: 'negotiate',
    ipa: '/nɪˈɡəʊʃieɪt/',
    partOfSpeech: 'verb',
    definitions: [
      {
        meaning: 'Discuss to reach an agreement',
        example: 'We need to negotiate better terms with our suppliers.',
        turkishMeaning: 'müzakere etmek'
      }
    ],
    imageUrl: '/images/vocab/negotiate.jpg',
    examples: ['We need to negotiate better terms with our suppliers.'],
    collocations: ['negotiate a deal', 'negotiate terms', 'negotiate price'],
    synonyms: ['discuss', 'bargain'],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_094',
    word: 'collaborate',
    ipa: '/kəˈlæbəreɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Work jointly on an activity',
        example: 'Our teams collaborate on several projects.',
        turkishMeaning: 'işbirliği yapmak'
      }
    ],
    imageUrl: '/images/vocab/collaborate.jpg',
    examples: ['Our teams collaborate on several projects.'],
    collocations: ['collaborate with', 'collaborate on project', 'close collaboration'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_095',
    word: 'delegate',
    ipa: '/ˈdelɪɡeɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Assign responsibility to another person',
        example: 'Good managers know how to delegate tasks effectively.',
        turkishMeaning: 'devretmek, yetki vermek'
      }
    ],
    imageUrl: '/images/vocab/delegate.jpg',
    examples: ['Good managers know how to delegate tasks effectively.'],
    collocations: ['delegate authority', 'delegate tasks', 'delegate responsibility'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_096',
    word: 'prioritise',
    ipa: '/praɪˈɒrɪtaɪz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Arrange in order of importance (British spelling)',
        example: 'We need to prioritise customer satisfaction.',
        turkishMeaning: 'önceliklendirmek'
      }
    ],
    imageUrl: '/images/vocab/prioritise.jpg',
    examples: ['We need to prioritise customer satisfaction.'],
    collocations: ['prioritise tasks', 'prioritise work', 'must prioritise'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_097',
    word: 'redundancy',
    ipa: '/rɪˈdʌndənsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Job loss due to position no longer being needed (British)',
        example: 'The company announced 50 redundancies.',
        turkishMeaning: 'işten çıkarma, fazlalık'
      }
    ],
    imageUrl: '/images/vocab/redundancy.jpg',
    examples: ['The company announced 50 redundancies.'],
    collocations: ['voluntary redundancy', 'redundancy package', 'face redundancy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_098',
    word: 'resign',
    ipa: '/rɪˈzaɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Voluntarily leave a job',
        example: 'She resigned from her position last month.',
        turkishMeaning: 'istifa etmek'
      }
    ],
    imageUrl: '/images/vocab/resign.jpg',
    examples: ['She resigned from her position last month.'],
    collocations: ['resign from', 'forced to resign', 'decide to resign'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_business_099',
    word: 'recruit',
    ipa: '/rɪˈkruːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Hire new employees',
        example: 'We\'re recruiting for three new positions.',
        turkishMeaning: 'işe almak'
      }
    ],
    imageUrl: '/images/vocab/recruit.jpg',
    examples: ['We\'re recruiting for three new positions.'],
    collocations: ['recruit staff', 'recruit candidates', 'recruitment process'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_business_100',
    word: 'appraisal',
    ipa: '/əˈpreɪzl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Formal assessment of an employee\'s performance',
        example: 'I have my annual appraisal next week.',
        turkishMeaning: 'performans değerlendirmesi'
      }
    ],
    imageUrl: '/images/vocab/appraisal.jpg',
    examples: ['I have my annual appraisal next week.'],
    collocations: ['performance appraisal', 'annual appraisal', 'appraisal meeting'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_101',
    word: 'overtime',
    ipa: '/ˈəʊvətaɪm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Time worked beyond normal hours',
        example: 'I did three hours of overtime yesterday.',
        turkishMeaning: 'fazla mesai'
      }
    ],
    imageUrl: '/images/vocab/overtime.jpg',
    examples: ['I did three hours of overtime yesterday.'],
    collocations: ['work overtime', 'overtime pay', 'overtime hours'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_102',
    word: 'freelance',
    ipa: '/ˈfriːlɑːns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Self-employed and working for different companies',
        example: 'She works as a freelance designer.',
        turkishMeaning: 'serbest çalışan'
      }
    ],
    imageUrl: '/images/vocab/freelance.jpg',
    examples: ['She works as a freelance designer.'],
    collocations: ['freelance work', 'go freelance', 'freelance career'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_103',
    word: 'contract',
    ipa: '/ˈkɒntrækt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Written agreement between parties',
        example: 'Please sign the contract and return it.',
        turkishMeaning: 'sözleşme'
      }
    ],
    imageUrl: '/images/vocab/contract.jpg',
    examples: ['Please sign the contract and return it.'],
    collocations: ['sign contract', 'contract terms', 'employment contract'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'contracts'],
    category: 'business'
  },
  {
    id: 'vocab_business_104',
    word: 'agenda',
    ipa: '/əˈdʒendə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'List of items to discuss in a meeting',
        example: 'What\'s on the agenda for today\'s meeting?',
        turkishMeaning: 'gündem'
      }
    ],
    imageUrl: '/images/vocab/agenda.jpg',
    examples: ['What\'s on the agenda for today\'s meeting?'],
    collocations: ['meeting agenda', 'on the agenda', 'agenda item'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'workplace'],
    category: 'business'
  },
    {
    id: 'vocab_business_105',
    word: 'minutes',
    ipa: '/ˈmɪnɪts/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Written record of a meeting',
        example: 'Could you take the minutes for this meeting?',
        turkishMeaning: 'tutanak'
      }
    ],
    imageUrl: '/images/vocab/minutes.jpg',
    examples: ['Could you take the minutes for this meeting?'],
    collocations: ['meeting minutes', 'take minutes', 'read the minutes'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_106',
    word: 'venue',
    ipa: '/ˈvenjuː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Place where an event is held',
        example: 'The venue for the conference has been changed.',
        turkishMeaning: 'mekan, toplantı yeri'
      }
    ],
    imageUrl: '/images/vocab/venue.jpg',
    examples: ['The venue for the conference has been changed.'],
    collocations: ['conference venue', 'change venue', 'suitable venue'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_107',
    word: 'tender',
    ipa: '/ˈtendə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Formal offer to supply goods or services',
        example: 'We submitted a tender for the project.',
        turkishMeaning: 'ihale, teklif'
      }
    ],
    imageUrl: '/images/vocab/tender.jpg',
    examples: ['We submitted a tender for the project.'],
    collocations: ['submit tender', 'tender process', 'competitive tender'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_108',
    word: 'outsource',
    ipa: '/ˈaʊtsɔːs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Contract work to external company',
        example: 'Many companies outsource their IT support.',
        turkishMeaning: 'dış kaynak kullanmak'
      }
    ],
    imageUrl: '/images/vocab/outsource.jpg',
    examples: ['Many companies outsource their IT support.'],
    collocations: ['outsource services', 'outsource production', 'outsource work'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_109',
    word: 'downsize',
    ipa: '/ˈdaʊnsaɪz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Reduce the size of a company',
        example: 'The company was forced to downsize.',
        turkishMeaning: 'küçültmek, işten çıkarmak'
      }
    ],
    imageUrl: '/images/vocab/downsize.jpg',
    examples: ['The company was forced to downsize.'],
    collocations: ['downsize workforce', 'downsize operations', 'need to downsize'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_110',
    word: 'expand',
    ipa: '/ɪkˈspænd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Make or become larger',
        example: 'We plan to expand into European markets.',
        turkishMeaning: 'genişletmek'
      }
    ],
    imageUrl: '/images/vocab/expand.jpg',
    examples: ['We plan to expand into European markets.'],
    collocations: ['expand business', 'expand operations', 'expand market'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_111',
    word: 'monopoly',
    ipa: '/məˈnɒpəli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Exclusive control over a market',
        example: 'The company has a monopoly on this service.',
        turkishMeaning: 'tekel'
      }
    ],
    imageUrl: '/images/vocab/monopoly.jpg',
    examples: ['The company has a monopoly on this service.'],
    collocations: ['hold monopoly', 'monopoly power', 'break monopoly'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_112',
    word: 'competitor',
    ipa: '/kəmˈpetɪtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Rival business',
        example: 'Our main competitor has launched a new product.',
        turkishMeaning: 'rakip'
      }
    ],
    imageUrl: '/images/vocab/competitor.jpg',
    examples: ['Our main competitor has launched a new product.'],
    collocations: ['main competitor', 'beat competitors', 'competitor analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_business_113',
    word: 'market share',
    ipa: '/ˈmɑːkɪt ʃeə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Percentage of market controlled by a company',
        example: 'We\'ve increased our market share by 5%.',
        turkishMeaning: 'pazar payı'
      }
    ],
    imageUrl: '/images/vocab/market-share.jpg',
    examples: ['We\'ve increased our market share by 5%.'],
    collocations: ['gain market share', 'increase market share', 'market share growth'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
  {
    id: 'vocab_business_114',
    word: 'launch',
    ipa: '/lɔːntʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Introduce a new product',
        example: 'We\'ll launch the new product next month.',
        turkishMeaning: 'piyasaya sürmek'
      }
    ],
    imageUrl: '/images/vocab/launch.jpg',
    examples: ['We\'ll launch the new product next month.'],
    collocations: ['product launch', 'launch campaign', 'successful launch'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_115',
    word: 'recall',
    ipa: '/rɪˈkɔːl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Request return of faulty products',
        example: 'The manufacturer had to recall 10,000 units.',
        turkishMeaning: 'geri çağırmak'
      }
    ],
    imageUrl: '/images/vocab/recall.jpg',
    examples: ['The manufacturer had to recall 10,000 units.'],
    collocations: ['product recall', 'recall order', 'issue recall'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_116',
    word: 'warranty',
    ipa: '/ˈwɒrənti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Written guarantee for a product',
        example: 'The laptop comes with a two-year warranty.',
        turkishMeaning: 'garanti'
      }
    ],
    imageUrl: '/images/vocab/warranty.jpg',
    examples: ['The laptop comes with a two-year warranty.'],
    collocations: ['warranty period', 'under warranty', 'warranty claim'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_117',
    word: 'refund',
    ipa: '/ˈriːfʌnd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Money returned to customer',
        example: 'You can get a full refund within 30 days.',
        turkishMeaning: 'geri ödeme, iade'
      }
    ],
    imageUrl: '/images/vocab/refund.jpg',
    examples: ['You can get a full refund within 30 days.'],
    collocations: ['full refund', 'request refund', 'refund policy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'sales'],
    category: 'business'
  },

  // TECHNICAL (25 words)
    {
    id: 'vocab_tech_103',
    word: 'upgrade',
    ipa: '/ˈʌpɡreɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Improve to a better version',
        example: 'We need to upgrade our software.',
        turkishMeaning: 'yükseltmek'
      }
    ],
    imageUrl: '/images/vocab/upgrade.jpg',
    examples: ['We need to upgrade our software.'],
    collocations: ['software upgrade', 'upgrade system', 'free upgrade'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_104',
    word: 'downgrade',
    ipa: '/ˈdaʊnɡreɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Reduce to a lower version or standard',
        example: 'I had to downgrade to the previous version.',
        turkishMeaning: 'düşürmek, eski sürüme geçmek'
      }
    ],
    imageUrl: '/images/vocab/downgrade.jpg',
    examples: ['I had to downgrade to the previous version.'],
    collocations: ['downgrade software', 'forced to downgrade', 'downgrade version'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'safety'],
    category: 'technical'
  },
  {
    id: 'vocab_tech_105',
    word: 'sync',
    ipa: '/sɪŋk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Synchronize data across devices',
        example: 'My phone won\'t sync with the cloud.',
        turkishMeaning: 'senkronize etmek'
      }
    ],
    imageUrl: '/images/vocab/sync.jpg',
    examples: ['My phone won\'t sync with the cloud.'],
    collocations: ['sync data', 'auto sync', 'sync devices'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_106',
    word: 'bandwidth',
    ipa: '/ˈbændwɪdθ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Data transfer capacity',
        example: 'We need more bandwidth for video calls.',
        turkishMeaning: 'bant genişliği'
      }
    ],
    imageUrl: '/images/vocab/bandwidth.jpg',
    examples: ['We need more bandwidth for video calls.'],
    collocations: ['high bandwidth', 'bandwidth limit', 'insufficient bandwidth'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_107',
    word: 'latency',
    ipa: '/ˈleɪtənsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Delay in data transmission',
        example: 'High latency can affect online gaming.',
        turkishMeaning: 'gecikme'
      }
    ],
    imageUrl: '/images/vocab/latency.jpg',
    examples: ['High latency can affect online gaming.'],
    collocations: ['low latency', 'network latency', 'reduce latency'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_108',
    word: 'encryption',
    ipa: '/ɪnˈkrɪpʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Converting data into code',
        example: 'All messages use end-to-end encryption.',
        turkishMeaning: 'şifreleme'
      }
    ],
    imageUrl: '/images/vocab/encryption.jpg',
    examples: ['All messages use end-to-end encryption.'],
    collocations: ['data encryption', 'encryption key', 'strong encryption'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_109',
    word: 'decrypt',
    ipa: '/diːˈkrɪpt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Convert encrypted data to readable form',
        example: 'You need a key to decrypt the files.',
        turkishMeaning: 'şifreyi çözmek'
      }
    ],
    imageUrl: '/images/vocab/decrypt.jpg',
    examples: ['You need a key to decrypt the files.'],
    collocations: ['decrypt data', 'decrypt message', 'decrypt file'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
  {
    id: 'vocab_tech_110',
    word: 'cache',
    ipa: '/kæʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Temporary storage for quick access',
        example: 'Clear your browser cache if the page won\'t load.',
        turkishMeaning: 'önbellek'
      }
    ],
    imageUrl: '/images/vocab/cache.jpg',
    examples: ['Clear your browser cache if the page won\'t load.'],
    collocations: ['clear cache', 'cache memory', 'browser cache'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_111',
    word: 'router',
    ipa: '/ˈruːtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Device that forwards data between networks',
        example: 'Try restarting the router.',
        turkishMeaning: 'yönlendirici'
      }
    ],
    imageUrl: '/images/vocab/router.jpg',
    examples: ['Try restarting the router.'],
    collocations: ['wifi router', 'router settings', 'restart router'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_112',
    word: 'modem',
    ipa: '/ˈməʊdem/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Device that connects to internet',
        example: 'The modem needs to be connected to the phone line.',
        turkishMeaning: 'modem'
      }
    ],
    imageUrl: '/images/vocab/modem.jpg',
    examples: ['The modem needs to be connected to the phone line.'],
    collocations: ['cable modem', 'modem router', 'modem light'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_113',
    word: 'streaming',
    ipa: '/ˈstriːmɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Continuous transmission of audio/video',
        example: 'I prefer streaming to downloading.',
        turkishMeaning: 'yayın akışı'
      }
    ],
    imageUrl: '/images/vocab/streaming.jpg',
    examples: ['I prefer streaming to downloading.'],
    collocations: ['video streaming', 'streaming service', 'live streaming'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_114',
    word: 'buffering',
    ipa: '/ˈbʌfərɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Loading data before playback',
        example: 'The video keeps buffering.',
        turkishMeaning: 'ara belleğe alma'
      }
    ],
    imageUrl: '/images/vocab/buffering.jpg',
    examples: ['The video keeps buffering.'],
    collocations: ['constant buffering', 'buffering issue', 'stop buffering'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_115',
    word: 'cloud',
    ipa: '/klaʊd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Online storage and computing services',
        example: 'All my photos are stored in the cloud.',
        turkishMeaning: 'bulut'
      }
    ],
    imageUrl: '/images/vocab/cloud.jpg',
    examples: ['All my photos are stored in the cloud.'],
    collocations: ['cloud storage', 'cloud computing', 'cloud backup'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_116',
    word: 'backup',
    ipa: '/ˈbækʌp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Copy of data for safety',
        example: 'Make sure you backup your files regularly.',
        turkishMeaning: 'yedek'
      }
    ],
    imageUrl: '/images/vocab/backup.jpg',
    examples: ['Make sure you backup your files regularly.'],
    collocations: ['backup data', 'create backup', 'backup copy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'safety'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_117',
    word: 'restore',
    ipa: '/rɪˈstɔː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Recover data from backup',
        example: 'I need to restore my contacts from backup.',
        turkishMeaning: 'geri yüklemek'
      }
    ],
    imageUrl: '/images/vocab/restore.jpg',
    examples: ['I need to restore my contacts from backup.'],
    collocations: ['restore backup', 'restore data', 'restore settings'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
  {
    id: 'vocab_tech_118',
    word: 'format',
    ipa: '/ˈfɔːmæt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Prepare storage device by erasing data',
        example: 'You\'ll need to format the USB drive.',
        turkishMeaning: 'biçimlendirmek'
      }
    ],
    imageUrl: '/images/vocab/format.jpg',
    examples: ['You\'ll need to format the USB drive.'],
    collocations: ['format drive', 'quick format', 'format disk'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_119',
    word: 'partition',
    ipa: '/pɑːˈtɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Divided section of a hard drive',
        example: 'Create a separate partition for your data.',
        turkishMeaning: 'bölüm'
      }
    ],
    imageUrl: '/images/vocab/partition.jpg',
    examples: ['Create a separate partition for your data.'],
    collocations: ['disk partition', 'create partition', 'partition table'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_120',
    word: 'compress',
    ipa: '/kəmˈpres/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Reduce file size',
        example: 'Compress the files before sending them.',
        turkishMeaning: 'sıkıştırmak'
      }
    ],
    imageUrl: '/images/vocab/compress.jpg',
    examples: ['Compress the files before sending them.'],
    collocations: ['compress file', 'compress data', 'compress image'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_121',
    word: 'extract',
    ipa: '/ɪkˈstrækt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Decompress archived files',
        example: 'Extract the ZIP file to this folder.',
        turkishMeaning: 'çıkartmak, açmak'
      }
    ],
    imageUrl: '/images/vocab/extract.jpg',
    examples: ['Extract the ZIP file to this folder.'],
    collocations: ['extract files', 'extract archive', 'extract here'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_122',
    word: 'archive',
    ipa: '/ˈɑːkaɪv/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Store files for long-term keeping',
        example: 'Archive old emails to save space.',
        turkishMeaning: 'arşivlemek'
      }
    ],
    imageUrl: '/images/vocab/archive.jpg',
    examples: ['Archive old emails to save space.'],
    collocations: ['archive data', 'archive files', 'email archive'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_123',
    word: 'toggle',
    ipa: '/ˈtɒɡl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Switch between two states',
        example: 'Toggle the dark mode in settings.',
        turkishMeaning: 'değiştirmek'
      }
    ],
    imageUrl: '/images/vocab/toggle.jpg',
    examples: ['Toggle the dark mode in settings.'],
    collocations: ['toggle switch', 'toggle mode', 'toggle settings'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_124',
    word: 'shortcut',
    ipa: '/ˈʃɔːtkʌt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Quick way to access something',
        example: 'Press Ctrl+C as a shortcut for copy.',
        turkishMeaning: 'kısayol'
      }
    ],
    imageUrl: '/images/vocab/shortcut.jpg',
    examples: ['Press Ctrl+C as a shortcut for copy.'],
    collocations: ['keyboard shortcut', 'create shortcut', 'desktop shortcut'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_125',
    word: 'icon',
    ipa: '/ˈaɪkɒn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Small picture representing a program',
        example: 'Click the icon to open the application.',
        turkishMeaning: 'simge'
      }
    ],
    imageUrl: '/images/vocab/icon.jpg',
    examples: ['Click the icon to open the application.'],
    collocations: ['app icon', 'desktop icon', 'icon size'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_126',
    word: 'widget',
    ipa: '/ˈwɪdʒɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Small application or tool',
        example: 'Add a weather widget to your home screen.',
        turkishMeaning: 'widget, araç'
      }
    ],
    imageUrl: '/images/vocab/widget.jpg',
    examples: ['Add a weather widget to your home screen.'],
    collocations: ['add widget', 'weather widget', 'widget settings'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_127',
    word: 'plugin',
    ipa: '/ˈplʌɡɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Software component that adds features',
        example: 'Install this plugin for extra functionality.',
        turkishMeaning: 'eklenti'
      }
    ],
    imageUrl: '/images/vocab/plugin.jpg',
    examples: ['Install this plugin for extra functionality.'],
    collocations: ['browser plugin', 'install plugin', 'plugin settings'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },

  // TRAVEL (15 words)
  {
    id: 'vocab_travel_061',
    word: 'departure lounge',
    ipa: '/dɪˈpɑːtʃə laʊndʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Waiting area at an airport',
        example: 'I\'ll meet you at the departure lounge.',
        turkishMeaning: 'bekleme salonu'
      }
    ],
    imageUrl: '/images/vocab/departure-lounge.jpg',
    examples: ['I\'ll meet you at the departure lounge.'],
    collocations: ['wait in departure lounge', 'departure lounge access', 'VIP lounge'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_062',
    word: 'gate',
    ipa: '/ɡeɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Airport entrance to board plane',
        example: 'Your flight departs from gate 15.',
        turkishMeaning: 'kapı'
      }
    ],
    imageUrl: '/images/vocab/gate.jpg',
    examples: ['Your flight departs from gate 15.'],
    collocations: ['boarding gate', 'gate number', 'gate closes'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_063',
    word: 'runway',
    ipa: '/ˈrʌnweɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Strip where planes take off and land',
        example: 'The plane is taxiing to the runway.',
        turkishMeaning: 'pist'
      }
    ],
    imageUrl: '/images/vocab/runway.jpg',
    examples: ['The plane is taxiing to the runway.'],
    collocations: ['runway lights', 'on the runway', 'runway clearance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_064',
    word: 'turbulence',
    ipa: '/ˈtɜːbjələns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Irregular air movement during flight',
        example: 'We experienced some turbulence during landing.',
        turkishMeaning: 'türbülans'
      }
    ],
    imageUrl: '/images/vocab/turbulence.jpg',
    examples: ['We experienced some turbulence during landing.'],
    collocations: ['severe turbulence', 'hit turbulence', 'turbulence warning'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_065',
    word: 'cabin crew',
    ipa: '/ˈkæbɪn kruː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Flight attendants (British)',
        example: 'The cabin crew were very helpful.',
        turkishMeaning: 'kabin görevlileri'
      }
    ],
    imageUrl: '/images/vocab/cabin-crew.jpg',
    examples: ['The cabin crew were very helpful.'],
    collocations: ['cabin crew member', 'cabin crew announcement', 'experienced cabin crew'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_066',
    word: 'hand luggage',
    ipa: '/hænd ˈlʌɡɪdʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Bags carried onto plane (British)',
        example: 'You can take one piece of hand luggage.',
        turkishMeaning: 'el bagajı'
      }
    ],
    imageUrl: '/images/vocab/hand-luggage.jpg',
    examples: ['You can take one piece of hand luggage.'],
    collocations: ['hand luggage allowance', 'hand luggage only', 'hand luggage size'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_067',
    word: 'duty free',
    ipa: '/ˌdjuːti ˈfriː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Goods sold without tax at airport',
        example: 'I bought perfume at duty free.',
        turkishMeaning: 'gümrüksüz'
      }
    ],
    imageUrl: '/images/vocab/duty-free.jpg',
    examples: ['I bought perfume at duty free.'],
    collocations: ['duty free shop', 'duty free allowance', 'buy duty free'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_068',
    word: 'quarantine',
    ipa: '/ˈkwɒrəntiːn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Isolation period after travel',
        example: 'You must quarantine for 10 days.',
        turkishMeaning: 'karantina'
      }
    ],
    imageUrl: '/images/vocab/quarantine.jpg',
    examples: ['You must quarantine for 10 days.'],
    collocations: ['in quarantine', 'quarantine period', 'quarantine hotel'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_069',
    word: 'tourist trap',
    ipa: '/ˈtʊərɪst træp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Overpriced place targeting tourists',
        example: 'That restaurant is a tourist trap.',
        turkishMeaning: 'turist tuzağı'
      }
    ],
    imageUrl: '/images/vocab/tourist-trap.jpg',
    examples: ['That restaurant is a tourist trap.'],
    collocations: ['avoid tourist traps', 'obvious tourist trap', 'tourist trap area'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_070',
    word: 'off the beaten track',
    ipa: '/ɒf ðə ˈbiːtən træk/',
    partOfSpeech: 'phrasal-verb',
    definitions: [
      {
        meaning: 'Away from tourist areas',
        example: 'We prefer places off the beaten track.',
        turkishMeaning: 'kalabalıktan uzak'
      }
    ],
    imageUrl: '/images/vocab/off-beaten-track.jpg',
    examples: ['We prefer places off the beaten track.'],
    collocations: ['go off beaten track', 'destination off beaten track', 'explore off beaten track'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_071',
    word: 'package holiday',
    ipa: '/ˈpækɪdʒ ˈhɒlədeɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'All-inclusive vacation (British)',
        example: 'We booked a package holiday to Spain.',
        turkishMeaning: 'paket tatil'
      }
    ],
    imageUrl: '/images/vocab/package-holiday.jpg',
    examples: ['We booked a package holiday to Spain.'],
    collocations: ['package holiday deal', 'cheap package holiday', 'book package holiday'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
  {
    id: 'vocab_travel_072',
    word: 'city break',
    ipa: '/ˈsɪti breɪk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Short holiday to a city (British)',
        example: 'We\'re going on a city break to Paris.',
        turkishMeaning: 'şehir tatili'
      }
    ],
    imageUrl: '/images/vocab/city-break.jpg',
    examples: ['We\'re going on a city break to Paris.'],
    collocations: ['weekend city break', 'city break destination', 'European city break'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_073',
    word: 'camping site',
    ipa: '/ˈkæmpɪŋ saɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Area for camping (British: campsite)',
        example: 'We found a lovely camping site by the lake.',
        turkishMeaning: 'kamp alanı'
      }
    ],
    imageUrl: '/images/vocab/camping-site.jpg',
    examples: ['We found a lovely camping site by the lake.'],
    collocations: ['camping site facilities', 'book camping site', 'camping site pitch'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_074',
    word: 'hostel',
    ipa: '/ˈhɒstl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Budget accommodation with shared rooms',
        example: 'I stayed in a hostel to save money.',
        turkishMeaning: 'hostel, pansiyon'
      }
    ],
    imageUrl: '/images/vocab/hostel.jpg',
    examples: ['I stayed in a hostel to save money.'],
    collocations: ['youth hostel', 'hostel dorm', 'book hostel'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'accommodation'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_075',
    word: 'lodge',
    ipa: '/lɒdʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Small house or hotel in countryside',
        example: 'We stayed at a mountain lodge.',
        turkishMeaning: 'dağ evi, köşk'
      }
    ],
    imageUrl: '/images/vocab/lodge.jpg',
    examples: ['We stayed at a mountain lodge.'],
    collocations: ['ski lodge', 'hunting lodge', 'mountain lodge'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel', 'accommodation'],
    category: 'travel'
  },

  // DAILY (25 words)
  {
    id: 'vocab_daily_095',
    word: 'reckon',
    ipa: '/ˈrekən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Think or suppose (British)',
        example: 'I reckon it\'ll rain later.',
        turkishMeaning: 'sanmak, düşünmek'
      }
    ],
    imageUrl: '/images/vocab/reckon.jpg',
    examples: ['I reckon it\'ll rain later.'],
    collocations: ['I reckon', 'reckon so', 'what do you reckon'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_096',
    word: 'proper',
    ipa: '/ˈprɒpə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Real or genuine (British)',
        example: 'That was a proper meal!',
        turkishMeaning: 'gerçek, düzgün'
      }
    ],
    imageUrl: '/images/vocab/proper.jpg',
    examples: ['That was a proper meal!'],
    collocations: ['proper job', 'proper meal', 'proper cup of tea'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_097',
    word: 'lovely',
    ipa: '/ˈlʌvli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very pleasant (British)',
        example: 'What a lovely day!',
        turkishMeaning: 'güzel, hoş'
      }
    ],
    imageUrl: '/images/vocab/lovely.jpg',
    examples: ['What a lovely day!'],
    collocations: ['lovely weather', 'lovely to see you', 'how lovely'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_098',
    word: 'brilliant',
    ipa: '/ˈbrɪliənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Excellent (British)',
        example: 'That\'s brilliant news!',
        turkishMeaning: 'harika'
      }
    ],
    imageUrl: '/images/vocab/brilliant.jpg',
    examples: ['That\'s brilliant news!'],
    collocations: ['absolutely brilliant', 'brilliant idea', 'brilliant performance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_099',
    word: 'gutted',
    ipa: '/ˈɡʌtɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very disappointed (British)',
        example: 'I was gutted when they cancelled the concert.',
        turkishMeaning: 'çok üzgün'
      }
    ],
    imageUrl: '/images/vocab/gutted.jpg',
    examples: ['I was gutted when they cancelled the concert.'],
    collocations: ['absolutely gutted', 'feel gutted', 'gutted about'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_100',
    word: 'chuffed',
    ipa: '/tʃʌft/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Very pleased (British)',
        example: 'I\'m really chuffed with my new car.',
        turkishMeaning: 'çok memnun'
      }
    ],
    imageUrl: '/images/vocab/chuffed.jpg',
    examples: ['I\'m really chuffed with my new car.'],
    collocations: ['chuffed to bits', 'really chuffed', 'chuffed about'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_101',
    word: 'knackered',
    ipa: '/ˈnækəd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Extremely tired (British)',
        example: 'I\'m absolutely knackered after that workout.',
        turkishMeaning: 'bitkin'
      }
    ],
    imageUrl: '/images/vocab/knackered.jpg',
    examples: ['I\'m absolutely knackered after that workout.'],
    collocations: ['absolutely knackered', 'feel knackered', 'totally knackered'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_102',
    word: 'gobsmacked',
    ipa: '/ˈɡɒbsmækt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Utterly astonished (British)',
        example: 'I was gobsmacked when I heard the news.',
        turkishMeaning: 'şok olmuş'
      }
    ],
    imageUrl: '/images/vocab/gobsmacked.jpg',
    examples: ['I was gobsmacked when I heard the news.'],
    collocations: ['absolutely gobsmacked', 'left gobsmacked', 'gobsmacked by'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_103',
    word: 'dodgy',
    ipa: '/ˈdɒdʒi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Suspicious or unreliable (British)',
        example: 'That website looks a bit dodgy.',
        turkishMeaning: 'şüpheli, güvenilmez'
      }
    ],
    imageUrl: '/images/vocab/dodgy.jpg',
    examples: ['That website looks a bit dodgy.'],
    collocations: ['dodgy deal', 'bit dodgy', 'dodgy character'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_104',
    word: 'posh',
    ipa: '/pɒʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Elegant or upper-class (British)',
        example: 'They live in a posh neighbourhood.',
        turkishMeaning: 'lüks, kibar'
      }
    ],
    imageUrl: '/images/vocab/posh.jpg',
    examples: ['They live in a posh neighbourhood.'],
    collocations: ['posh accent', 'posh restaurant', 'very posh'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_105',
    word: 'grotty',
    ipa: '/ˈɡrɒti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Unpleasant or dirty (British)',
        example: 'What a grotty hotel!',
        turkishMeaning: 'pis, kötü'
      }
    ],
    imageUrl: '/images/vocab/grotty.jpg',
    examples: ['What a grotty hotel!'],
    collocations: ['grotty room', 'grotty place', 'bit grotty'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_106',
    word: 'naff',
    ipa: '/næf/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Unfashionable or tacky (British)',
        example: 'Those decorations are a bit naff.',
        turkishMeaning: 'bayağı, kötü zevkli'
      }
    ],
    imageUrl: '/images/vocab/naff.jpg',
    examples: ['Those decorations are a bit naff.'],
    collocations: ['bit naff', 'naff design', 'naff idea'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_107',
    word: 'faff',
    ipa: '/fæf/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Waste time on trivial things (British)',
        example: 'Stop faffing about and get ready!',
        turkishMeaning: 'oyalanmak'
      }
    ],
    imageUrl: '/images/vocab/faff.jpg',
    examples: ['Stop faffing about and get ready!'],
    collocations: ['faff about', 'faff around', 'stop faffing'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_108',
    word: 'wonky',
    ipa: '/ˈwɒŋki/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Crooked or unsteady (British)',
        example: 'This table is a bit wonky.',
        turkishMeaning: 'eğri, dengesiz'
      }
    ],
    imageUrl: '/images/vocab/wonky.jpg',
    examples: ['This table is a bit wonky.'],
    collocations: ['bit wonky', 'wonky table', 'wonky wheel'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_109',
    word: 'cheeky',
    ipa: '/ˈtʃiːki/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Playfully rude (British)',
        example: 'Don\'t be cheeky!',
        turkishMeaning: 'arsız, küstah (şakacı anlamda)'
      }
    ],
    imageUrl: '/images/vocab/cheeky.jpg',
    examples: ['Don\'t be cheeky!'],
    collocations: ['cheeky smile', 'cheeky comment', 'bit cheeky'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_110',
    word: 'miffed',
    ipa: '/mɪft/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Slightly annoyed (British)',
        example: 'She was a bit miffed about not being invited.',
        turkishMeaning: 'kırgın, bozuk'
      }
    ],
    imageUrl: '/images/vocab/miffed.jpg',
    examples: ['She was a bit miffed about not being invited.'],
    collocations: ['bit miffed', 'feel miffed', 'miffed about'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_111',
    word: 'narked',
    ipa: '/nɑːkt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Annoyed or irritated (British)',
        example: 'He gets narked easily.',
        turkishMeaning: 'sinirli'
      }
    ],
    imageUrl: '/images/vocab/narked.jpg',
    examples: ['He gets narked easily.'],
    collocations: ['get narked', 'bit narked', 'narked off'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_112',
    word: 'skint',
    ipa: '/skɪnt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Having no money (British)',
        example: 'I can\'t go out, I\'m skint.',
        turkishMeaning: 'meteliksiz'
      }
    ],
    imageUrl: '/images/vocab/skint.jpg',
    examples: ['I can\'t go out, I\'m skint.'],
    collocations: ['totally skint', 'bit skint', 'always skint'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_113',
    word: 'quid',
    ipa: '/kwɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'One pound sterling (British slang)',
        example: 'Can you lend me 20 quid?',
        turkishMeaning: 'sterlin'
      }
    ],
    imageUrl: '/images/vocab/quid.jpg',
    examples: ['Can you lend me 20 quid?'],
    collocations: ['20 quid', 'few quid', 'cost 50 quid'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_114',
    word: 'fiver',
    ipa: '/ˈfaɪvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Five-pound note (British)',
        example: 'I only have a fiver on me.',
        turkishMeaning: '5 sterlin'
      }
    ],
    imageUrl: '/images/vocab/fiver.jpg',
    examples: ['I only have a fiver on me.'],
    collocations: ['lend me a fiver', 'cost a fiver', 'spare fiver'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_115',
    word: 'tenner',
    ipa: '/ˈtenə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Ten-pound note (British)',
        example: 'I\'ll give you a tenner for it.',
        turkishMeaning: '10 sterlin'
      }
    ],
    imageUrl: '/images/vocab/tenner.jpg',
    examples: ['I\'ll give you a tenner for it.'],
    collocations: ['lend me a tenner', 'spare tenner', 'cost a tenner'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_116',
    word: 'loo',
    ipa: '/luː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Toilet (British)',
        example: 'Where\'s the loo?',
        turkishMeaning: 'tuvalet'
      }
    ],
    imageUrl: '/images/vocab/loo.jpg',
    examples: ['Where\'s the loo?'],
    collocations: ['go to loo', 'use the loo', 'loo roll'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_117',
    word: 'chippy',
    ipa: '/ˈtʃɪpi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Fish and chip shop (British)',
        example: 'Let\'s get dinner from the chippy.',
        turkishMeaning: 'balık-patates dükkanı'
      }
    ],
    imageUrl: '/images/vocab/chippy.jpg',
    examples: ['Let\'s get dinner from the chippy.'],
    collocations: ['local chippy', 'go to chippy', 'chippy tea'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_118',
    word: 'takeaway',
    ipa: '/ˈteɪkəweɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Food ordered to eat elsewhere (British)',
        example: 'Shall we get a takeaway tonight?',
        turkishMeaning: 'paket servis'
      }
    ],
    imageUrl: '/images/vocab/takeaway.jpg',
    examples: ['Shall we get a takeaway tonight?'],
    collocations: ['get takeaway', 'order takeaway', 'Chinese takeaway'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_119',
    word: 'cuppa',
    ipa: '/ˈkʌpə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cup of tea (British)',
        example: 'Fancy a cuppa?',
        turkishMeaning: 'bir fincan çay'
      }
    ],
    imageUrl: '/images/vocab/cuppa.jpg',
    examples: ['Fancy a cuppa?'],
    collocations: ['nice cuppa', 'make a cuppa', 'cuppa tea'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },

  // SOCIAL (10 words)
  {
    id: 'vocab_social_037',
    word: 'bloke',
    ipa: '/bləʊk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Man or guy (British)',
        example: 'He\'s a nice bloke.',
        turkishMeaning: 'adam, herif'
      }
    ],
    imageUrl: '/images/vocab/bloke.jpg',
    examples: ['He\'s a nice bloke.'],
    collocations: ['nice bloke', 'some bloke', 'old bloke'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_038',
    word: 'mates',
    ipa: '/meɪts/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Friends (British)',
        example: 'I\'m going out with my mates tonight.',
        turkishMeaning: 'arkadaşlar'
      }
    ],
    imageUrl: '/images/vocab/mates.jpg',
    examples: ['I\'m going out with my mates tonight.'],
    collocations: ['best mates', 'school mates', 'work mates'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_039',
    word: 'mate',
    ipa: '/meɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Friend or form of address (British)',
        example: 'Alright, mate?',
        turkishMeaning: 'dostum, arkadaş'
      }
    ],
    imageUrl: '/images/vocab/mate.jpg',
    examples: ['Alright, mate?'],
    collocations: ['cheers mate', 'thanks mate', 'good mate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_040',
    word: 'pop round',
    ipa: '/pɒp raʊnd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Visit briefly (British)',
        example: 'I\'ll pop round later.',
        turkishMeaning: 'uğramak'
      }
    ],
    imageUrl: '/images/vocab/pop-round.jpg',
    examples: ['I\'ll pop round later.'],
    collocations: ['pop round later', 'pop round for', 'pop round tomorrow'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_041',
    word: 'catch up',
    ipa: '/kætʃ ʌp/',
    partOfSpeech: 'phrasal-verb',
    definitions: [
      {
        meaning: 'Meet to exchange news',
        example: 'Let\'s catch up over coffee.',
        turkishMeaning: 'buluşmak, haberleşmek'
      }
    ],
    imageUrl: '/images/vocab/catch-up.jpg',
    examples: ['Let\'s catch up over coffee.'],
    collocations: ['catch up with', 'catch up soon', 'have a catch up'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_042',
    word: 'get together',
    ipa: '/ɡet təˈɡeðə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Social gathering',
        example: 'We\'re having a get together this weekend.',
        turkishMeaning: 'toplanmak'
      }
    ],
    imageUrl: '/images/vocab/get-together.jpg',
    examples: ['We\'re having a get together this weekend.'],
    collocations: ['family get together', 'have a get together', 'informal get together'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_043',
    word: 'turn up',
    ipa: '/tɜːn ʌp/',
    partOfSpeech: 'phrasal-verb',
    definitions: [
      {
        meaning: 'Arrive or appear',
        example: 'He didn\'t turn up to the party.',
        turkishMeaning: 'gelmek, ortaya çıkmak'
      }
    ],
    imageUrl: '/images/vocab/turn-up.jpg',
    examples: ['He didn\'t turn up to the party.'],
    collocations: ['turn up late', 'turn up early', 'didn\'t turn up'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_044',
    word: 'fall out',
    ipa: '/fɔːl aʊt/',
    partOfSpeech: 'phrasal-verb',
    definitions: [
      {
        meaning: 'Have an argument and stop being friends',
        example: 'They fell out over money.',
        turkishMeaning: 'bozuşmak'
      }
    ],
    imageUrl: '/images/vocab/fall-out.jpg',
    examples: ['They fell out over money.'],
    collocations: ['fall out with', 'fall out over', 'had a falling out'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_045',
    word: 'make up',
    ipa: '/meɪk ʌp/',
    partOfSpeech: 'phrasal-verb',
    definitions: [
      {
        meaning: 'Reconcile after argument',
        example: 'They had a fight but made up quickly.',
        turkishMeaning: 'barışmak'
      }
    ],
    imageUrl: '/images/vocab/make-up.jpg',
    examples: ['They had a fight but made up quickly.'],
    collocations: ['make up with', 'kiss and make up', 'make up after'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_046',
    word: 'get along',
    ipa: '/ɡet əˈlɒŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Have a friendly relationship',
        example: 'I get along well with my colleagues.',
        turkishMeaning: 'geçinmek'
      }
    ],
    imageUrl: '/images/vocab/get-along.jpg',
    examples: ['I get along well with my colleagues.'],
    collocations: ['get along with', 'get along well', 'don\'t get along'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },

  // ==================== BATCH 6: 100 MORE WORDS ====================

  // BUSINESS (25 words)
    {
    id: 'vocab_business_118',
    word: 'deadline',
    ipa: '/ˈdedlaɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Time limit for completion',
        example: 'We need to meet the deadline.',
        turkishMeaning: 'son tarih'
      }
    ],
    imageUrl: '/images/vocab/deadline.jpg',
    examples: ['We need to meet the deadline.'],
    collocations: ['meet deadline', 'tight deadline', 'miss deadline'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_119',
    word: 'objective',
    ipa: '/əbˈdʒektɪv/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Goal or target',
        example: 'Our main objective is customer satisfaction.',
        turkishMeaning: 'hedef, amaç'
      }
    ],
    imageUrl: '/images/vocab/objective.jpg',
    examples: ['Our main objective is customer satisfaction.'],
    collocations: ['business objective', 'achieve objective', 'main objective'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_120',
    word: 'strategy',
    ipa: '/ˈstrætədʒi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Plan to achieve goals',
        example: 'We need a new marketing strategy.',
        turkishMeaning: 'strateji'
      }
    ],
    imageUrl: '/images/vocab/strategy.jpg',
    examples: ['We need a new marketing strategy.'],
    collocations: ['business strategy', 'marketing strategy', 'develop strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_business_121',
    word: 'implement',
    ipa: '/ˈɪmplɪment/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Put into action',
        example: 'We\'ll implement the changes next month.',
        turkishMeaning: 'uygulamak'
      }
    ],
    imageUrl: '/images/vocab/implement.jpg',
    examples: ['We\'ll implement the changes next month.'],
    collocations: ['implement changes', 'implement strategy', 'implement plan'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_122',
    word: 'evaluate',
    ipa: '/ɪˈvæljueɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Assess the value or quality',
        example: 'We need to evaluate the results.',
        turkishMeaning: 'değerlendirmek'
      }
    ],
    imageUrl: '/images/vocab/evaluate.jpg',
    examples: ['We need to evaluate the results.'],
    collocations: ['evaluate performance', 'evaluate results', 'evaluate options'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_123',
    word: 'annual',
    ipa: '/ˈænjuəl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Happening once a year',
        example: 'We have our annual review next week.',
        turkishMeaning: 'yıllık'
      }
    ],
    imageUrl: '/images/vocab/annual.jpg',
    examples: ['We have our annual review next week.'],
    collocations: ['annual report', 'annual meeting', 'annual revenue'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_124',
    word: 'quarterly',
    ipa: '/ˈkwɔːtəli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Every three months',
        example: 'The quarterly results were excellent.',
        turkishMeaning: 'üç aylık'
      }
    ],
    imageUrl: '/images/vocab/quarterly.jpg',
    examples: ['The quarterly results were excellent.'],
    collocations: ['quarterly report', 'quarterly earnings', 'quarterly review'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_125',
    word: 'merger',
    ipa: '/ˈmɜːdʒə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Combination of two companies',
        example: 'The merger was announced yesterday.',
        turkishMeaning: 'birleşme'
      }
    ],
    imageUrl: '/images/vocab/merger.jpg',
    examples: ['The merger was announced yesterday.'],
    collocations: ['company merger', 'merger deal', 'merger announcement'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_126',
    word: 'acquisition',
    ipa: '/ˌækwɪˈzɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Purchase of another company',
        example: 'The acquisition cost £50 million.',
        turkishMeaning: 'satın alma'
      }
    ],
    imageUrl: '/images/vocab/acquisition.jpg',
    examples: ['The acquisition cost £50 million.'],
    collocations: ['company acquisition', 'acquisition deal', 'acquisition strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_127',
    word: 'shareholder',
    ipa: '/ˈʃeəhəʊldə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Owner of company shares',
        example: 'Shareholders will vote on the proposal.',
        turkishMeaning: 'hissedar'
      }
    ],
    imageUrl: '/images/vocab/shareholder.jpg',
    examples: ['Shareholders will vote on the proposal.'],
    collocations: ['shareholder meeting', 'major shareholder', 'shareholder value'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_128',
    word: 'dividend',
    ipa: '/ˈdɪvɪdend/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Share of profits paid to shareholders',
        example: 'The company pays dividends twice a year.',
        turkishMeaning: 'temettü'
      }
    ],
    imageUrl: '/images/vocab/dividend.jpg',
    examples: ['The company pays dividends twice a year.'],
    collocations: ['dividend payment', 'dividend yield', 'pay dividend'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_129',
    word: 'audit',
    ipa: '/ˈɔːdɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Official examination of accounts',
        example: 'We have an audit next month.',
        turkishMeaning: 'denetim'
      }
    ],
    imageUrl: '/images/vocab/audit.jpg',
    examples: ['We have an audit next month.'],
    collocations: ['financial audit', 'audit report', 'conduct audit'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_130',
    word: 'turnover',
    ipa: '/ˈtɜːnəʊvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Total revenue or rate of staff leaving (British)',
        example: 'Our turnover increased by 15%.',
        turkishMeaning: 'ciro, personel devir hızı'
      }
    ],
    imageUrl: '/images/vocab/turnover.jpg',
    examples: ['Our turnover increased by 15%.'],
    collocations: ['annual turnover', 'staff turnover', 'turnover rate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_131',
    word: 'margin',
    ipa: '/ˈmɑːdʒɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Difference between cost and selling price',
        example: 'We need to increase our profit margins.',
        turkishMeaning: 'kar marjı'
      }
    ],
    imageUrl: '/images/vocab/margin.jpg',
    examples: ['We need to increase our profit margins.'],
    collocations: ['profit margin', 'safety margin', 'narrow margin'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_132',
    word: 'forecast',
    ipa: '/ˈfɔːkɑːst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Prediction of future trends',
        example: 'Sales forecasts look promising.',
        turkishMeaning: 'tahmin'
      }
    ],
    imageUrl: '/images/vocab/forecast.jpg',
    examples: ['Sales forecasts look promising.'],
    collocations: ['sales forecast', 'weather forecast', 'forecast growth'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_133',
    word: 'budget',
    ipa: '/ˈbʌdʒɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Financial plan',
        example: 'We need to stay within budget.',
        turkishMeaning: 'bütçe'
      }
    ],
    imageUrl: '/images/vocab/budget.jpg',
    examples: ['We need to stay within budget.'],
    collocations: ['annual budget', 'budget cut', 'over budget'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_134',
    word: 'cashflow',
    ipa: '/ˈkæʃfləʊ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Movement of money in and out',
        example: 'We have cashflow problems.',
        turkishMeaning: 'nakit akışı'
      }
    ],
    imageUrl: '/images/vocab/cashflow.jpg',
    examples: ['We have cashflow problems.'],
    collocations: ['cashflow forecast', 'positive cashflow', 'cashflow statement'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_135',
    word: 'overhead',
    ipa: '/ˈəʊvəhed/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Ongoing business expenses',
        example: 'We need to reduce overheads.',
        turkishMeaning: 'genel giderler'
      }
    ],
    imageUrl: '/images/vocab/overhead.jpg',
    examples: ['We need to reduce overheads.'],
    collocations: ['overhead costs', 'reduce overheads', 'overhead expenses'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_136',
    word: 'inventory',
    ipa: '/ˈɪnvəntri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Stock of goods',
        example: 'We need to check the inventory.',
        turkishMeaning: 'envanter'
      }
    ],
    imageUrl: '/images/vocab/inventory.jpg',
    examples: ['We need to check the inventory.'],
    collocations: ['inventory management', 'inventory control', 'inventory level'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_137',
    word: 'sustainable',
    ipa: '/səˈsteɪnəbl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Able to continue long-term',
        example: 'We focus on sustainable business practices.',
        turkishMeaning: 'sürdürülebilir'
      }
    ],
    imageUrl: '/images/vocab/sustainable.jpg',
    examples: ['We focus on sustainable business practices.'],
    collocations: ['sustainable growth', 'sustainable development', 'sustainable practice'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_138',
    word: 'diversify',
    ipa: '/daɪˈvɜːsɪfaɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Vary products or investments',
        example: 'We need to diversify our product range.',
        turkishMeaning: 'çeşitlendirmek'
      }
    ],
    imageUrl: '/images/vocab/diversify.jpg',
    examples: ['We need to diversify our product range.'],
    collocations: ['diversify portfolio', 'diversify products', 'diversify business'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_139',
    word: 'innovation',
    ipa: '/ˌɪnəˈveɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'New method or product',
        example: 'Innovation drives our success.',
        turkishMeaning: 'yenilik'
      }
    ],
    imageUrl: '/images/vocab/innovation.jpg',
    examples: ['Innovation drives our success.'],
    collocations: ['product innovation', 'drive innovation', 'innovation strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_business_140',
    word: 'entrepreneur',
    ipa: '/ˌɒntrəprəˈnɜː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Person who starts businesses',
        example: 'She\'s a successful entrepreneur.',
        turkishMeaning: 'girişimci'
      }
    ],
    imageUrl: '/images/vocab/entrepreneur.jpg',
    examples: ['She\'s a successful entrepreneur.'],
    collocations: ['successful entrepreneur', 'entrepreneur spirit', 'social entrepreneur'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_141',
    word: 'startup',
    ipa: '/ˈstɑːtʌp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Newly established business',
        example: 'He works for a tech startup.',
        turkishMeaning: 'yeni kurulan şirket'
      }
    ],
    imageUrl: '/images/vocab/startup.jpg',
    examples: ['He works for a tech startup.'],
    collocations: ['startup company', 'tech startup', 'startup funding'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_business_142',
    word: 'pitch',
    ipa: '/pɪtʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Present a business proposal',
        example: 'We\'re pitching to investors tomorrow.',
        turkishMeaning: 'sunum yapmak'
      }
    ],
    imageUrl: '/images/vocab/pitch.jpg',
    examples: ['We\'re pitching to investors tomorrow.'],
    collocations: ['sales pitch', 'pitch idea', 'pitch presentation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },

  // TECHNICAL (25 words)
    {
    id: 'vocab_tech_128',
    word: 'algorithm',
    ipa: '/ˈælɡərɪðəm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Set of rules for solving problems',
        example: 'The algorithm sorts the data efficiently.',
        turkishMeaning: 'algoritma'
      }
    ],
    imageUrl: '/images/vocab/algorithm.jpg',
    examples: ['The algorithm sorts the data efficiently.'],
    collocations: ['search algorithm', 'sorting algorithm', 'algorithm design'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_129',
    word: 'interface',
    ipa: '/ˈɪntəfeɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Point where systems meet and interact',
        example: 'The user interface is very intuitive.',
        turkishMeaning: 'arayüz'
      }
    ],
    imageUrl: '/images/vocab/interface.jpg',
    examples: ['The user interface is very intuitive.'],
    collocations: ['user interface', 'interface design', 'graphical interface'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_130',
    word: 'database',
    ipa: '/ˈdeɪtəbeɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Organized collection of data',
        example: 'The database stores customer information.',
        turkishMeaning: 'veritabanı'
      }
    ],
    imageUrl: '/images/vocab/database.jpg',
    examples: ['The database stores customer information.'],
    collocations: ['database management', 'database query', 'database server'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_131',
    word: 'network',
    ipa: '/ˈnetwɜːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Connected computer systems',
        example: 'The network is down.',
        turkishMeaning: 'ağ'
      }
    ],
    imageUrl: '/images/vocab/network.jpg',
    examples: ['The network is down.'],
    collocations: ['network connection', 'wireless network', 'network security'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_132',
    word: 'server',
    ipa: '/ˈsɜːvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Computer providing services to others',
        example: 'The server crashed last night.',
        turkishMeaning: 'sunucu'
      }
    ],
    imageUrl: '/images/vocab/server.jpg',
    examples: ['The server crashed last night.'],
    collocations: ['web server', 'server down', 'server maintenance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_133',
    word: 'processor',
    ipa: '/ˈprəʊsesə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Computer chip that processes data',
        example: 'This laptop has a fast processor.',
        turkishMeaning: 'işlemci'
      }
    ],
    imageUrl: '/images/vocab/processor.jpg',
    examples: ['This laptop has a fast processor.'],
    collocations: ['fast processor', 'processor speed', 'dual processor'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_134',
    word: 'memory',
    ipa: '/ˈmeməri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Computer storage capacity',
        example: 'My computer needs more memory.',
        turkishMeaning: 'bellek'
      }
    ],
    imageUrl: '/images/vocab/memory.jpg',
    examples: ['My computer needs more memory.'],
    collocations: ['memory card', 'memory upgrade', 'low memory'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_135',
    word: 'storage',
    ipa: '/ˈstɔːrɪdʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Space for keeping data',
        example: 'I need more storage space.',
        turkishMeaning: 'depolama'
      }
    ],
    imageUrl: '/images/vocab/storage.jpg',
    examples: ['I need more storage space.'],
    collocations: ['cloud storage', 'storage capacity', 'storage device'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_136',
    word: 'hardware',
    ipa: '/ˈhɑːdweə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Physical computer equipment',
        example: 'We need to upgrade the hardware.',
        turkishMeaning: 'donanım'
      }
    ],
    imageUrl: '/images/vocab/hardware.jpg',
    examples: ['We need to upgrade the hardware.'],
    collocations: ['computer hardware', 'hardware upgrade', 'hardware failure'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_137',
    word: 'software',
    ipa: '/ˈsɒftweə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Computer programs',
        example: 'Install the latest software updates.',
        turkishMeaning: 'yazılım'
      }
    ],
    imageUrl: '/images/vocab/software.jpg',
    examples: ['Install the latest software updates.'],
    collocations: ['software update', 'software installation', 'antivirus software'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_138',
    word: 'application',
    ipa: '/ˌæplɪˈkeɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Software program',
        example: 'Download the mobile application.',
        turkishMeaning: 'uygulama'
      }
    ],
    imageUrl: '/images/vocab/application.jpg',
    examples: ['Download the mobile application.'],
    collocations: ['mobile application', 'application software', 'web application'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_139',
    word: 'operating system',
    ipa: '/ˈɒpəreɪtɪŋ ˈsɪstəm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Main software managing computer',
        example: 'Which operating system do you use?',
        turkishMeaning: 'işletim sistemi'
      }
    ],
    imageUrl: '/images/vocab/operating-system.jpg',
    examples: ['Which operating system do you use?'],
    collocations: ['operating system update', 'install operating system', 'operating system crash'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
  {
    id: 'vocab_tech_140',
    word: 'coding',
    ipa: '/ˈkəʊdɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Writing computer programs',
        example: 'I\'m learning coding.',
        turkishMeaning: 'kodlama'
      }
    ],
    imageUrl: '/images/vocab/coding.jpg',
    examples: ['I\'m learning coding.'],
    collocations: ['coding skills', 'coding language', 'learn coding'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_141',
    word: 'debugging',
    ipa: '/diːˈbʌɡɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Finding and fixing software errors',
        example: 'I spent hours debugging the code.',
        turkishMeaning: 'hata ayıklama'
      }
    ],
    imageUrl: '/images/vocab/debugging.jpg',
    examples: ['I spent hours debugging the code.'],
    collocations: ['debugging process', 'debugging tools', 'debugging session'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_142',
    word: 'cybersecurity',
    ipa: '/ˌsaɪbəsɪˈkjʊərəti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Protection from digital attacks',
        example: 'Cybersecurity is a top priority.',
        turkishMeaning: 'siber güvenlik'
      }
    ],
    imageUrl: '/images/vocab/cybersecurity.jpg',
    examples: ['Cybersecurity is a top priority.'],
    collocations: ['cybersecurity threat', 'cybersecurity measures', 'cybersecurity expert'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'surface-treatment'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_143',
    word: 'phishing',
    ipa: '/ˈfɪʃɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Fraudulent attempt to obtain sensitive data',
        example: 'Beware of phishing emails.',
        turkishMeaning: 'oltalama'
      }
    ],
    imageUrl: '/images/vocab/phishing.jpg',
    examples: ['Beware of phishing emails.'],
    collocations: ['phishing attack', 'phishing email', 'phishing scam'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_144',
    word: 'ransomware',
    ipa: '/ˈrænsəmweə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Malware that demands payment',
        example: 'The company was hit by ransomware.',
        turkishMeaning: 'fidye yazılımı'
      }
    ],
    imageUrl: '/images/vocab/ransomware.jpg',
    examples: ['The company was hit by ransomware.'],
    collocations: ['ransomware attack', 'ransomware protection', 'ransomware threat'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_145',
    word: 'VPN',
    ipa: '/ˌviː piː ˈen/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Virtual Private Network for secure connection',
        example: 'Use a VPN for privacy.',
        turkishMeaning: 'sanal özel ağ'
      }
    ],
    imageUrl: '/images/vocab/vpn.jpg',
    examples: ['Use a VPN for privacy.'],
    collocations: ['VPN connection', 'VPN service', 'use VPN'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_146',
    word: 'API',
    ipa: '/ˌeɪ piː ˈaɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Application Programming Interface',
        example: 'We integrate using their API.',
        turkishMeaning: 'uygulama programlama arayüzü'
      }
    ],
    imageUrl: '/images/vocab/api.jpg',
    examples: ['We integrate using their API.'],
    collocations: ['API integration', 'API key', 'API request'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_147',
    word: 'open source',
    ipa: '/ˌəʊpən ˈsɔːs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Software with publicly accessible code',
        example: 'This is open source software.',
        turkishMeaning: 'açık kaynak'
      }
    ],
    imageUrl: '/images/vocab/open-source.jpg',
    examples: ['This is open source software.'],
    collocations: ['open source project', 'open source software', 'open source community'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_148',
    word: 'repository',
    ipa: '/rɪˈpɒzɪtri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Storage location for code',
        example: 'Check the GitHub repository.',
        turkishMeaning: 'kod deposu'
      }
    ],
    imageUrl: '/images/vocab/repository.jpg',
    examples: ['Check the GitHub repository.'],
    collocations: ['code repository', 'GitHub repository', 'repository management'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_149',
    word: 'version control',
    ipa: '/ˈvɜːʃən kənˈtrəʊl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'System tracking code changes',
        example: 'We use Git for version control.',
        turkishMeaning: 'sürüm kontrolü'
      }
    ],
    imageUrl: '/images/vocab/version-control.jpg',
    examples: ['We use Git for version control.'],
    collocations: ['version control system', 'version control software', 'use version control'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_150',
    word: 'deployment',
    ipa: '/dɪˈplɔɪmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Making software available for use',
        example: 'The deployment was successful.',
        turkishMeaning: 'dağıtım'
      }
    ],
    imageUrl: '/images/vocab/deployment.jpg',
    examples: ['The deployment was successful.'],
    collocations: ['software deployment', 'deployment process', 'deployment pipeline'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_151',
    word: 'responsive',
    ipa: '/rɪˈspɒnsɪv/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Adapting to different screen sizes',
        example: 'The website is fully responsive.',
        turkishMeaning: 'duyarlı, uyarlanabilir'
      }
    ],
    imageUrl: '/images/vocab/responsive.jpg',
    examples: ['The website is fully responsive.'],
    collocations: ['responsive design', 'responsive website', 'responsive layout'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_152',
    word: 'pixel',
    ipa: '/ˈpɪksl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Smallest unit of digital image',
        example: 'The image is 1920 pixels wide.',
        turkishMeaning: 'piksel'
      }
    ],
    imageUrl: '/images/vocab/pixel.jpg',
    examples: ['The image is 1920 pixels wide.'],
    collocations: ['pixel density', 'pixel perfect', 'pixel size'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },

  // TRAVEL (15 words)
    {
    id: 'vocab_travel_076',
    word: 'embark',
    ipa: '/ɪmˈbɑːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Board a ship or aircraft',
        example: 'Passengers will embark at 3pm.',
        turkishMeaning: 'gemiye binmek'
      }
    ],
    imageUrl: '/images/vocab/embark.jpg',
    examples: ['Passengers will embark at 3pm.'],
    collocations: ['embark on journey', 'embark passengers', 'embark ship'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_077',
    word: 'disembark',
    ipa: '/ˌdɪsɪmˈbɑːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Leave a ship or aircraft',
        example: 'Please wait to disembark.',
        turkishMeaning: 'gemiden inmek'
      }
    ],
    imageUrl: '/images/vocab/disembark.jpg',
    examples: ['Please wait to disembark.'],
    collocations: ['disembark passengers', 'disembark safely', 'disembark ship'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_078',
    word: 'cruise',
    ipa: '/kruːz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Voyage on a ship for pleasure',
        example: 'We went on a Mediterranean cruise.',
        turkishMeaning: 'gemi turu'
      }
    ],
    imageUrl: '/images/vocab/cruise.jpg',
    examples: ['We went on a Mediterranean cruise.'],
    collocations: ['cruise ship', 'go on cruise', 'cruise holiday'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_079',
    word: 'seasick',
    ipa: '/ˈsiːsɪk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Nauseous from ship motion',
        example: 'I felt seasick on the ferry.',
        turkishMeaning: 'deniz tutması'
      }
    ],
    imageUrl: '/images/vocab/seasick.jpg',
    examples: ['I felt seasick on the ferry.'],
    collocations: ['feel seasick', 'get seasick', 'seasick tablet'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
  {
    id: 'vocab_travel_080',
    word: 'jetlag',
    ipa: '/ˈdʒetlæɡ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Tiredness from time zone changes',
        example: 'I\'m suffering from jetlag.',
        turkishMeaning: 'jet lag, uçuş yorgunluğu'
      }
    ],
    imageUrl: '/images/vocab/jetlag.jpg',
    examples: ['I\'m suffering from jetlag.'],
    collocations: ['suffer from jetlag', 'jetlag symptoms', 'overcome jetlag'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_081',
    word: 'passport control',
    ipa: '/ˈpɑːspɔːt kənˈtrəʊl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Airport checkpoint for passports',
        example: 'Join the queue at passport control.',
        turkishMeaning: 'pasaport kontrolü'
      }
    ],
    imageUrl: '/images/vocab/passport-control.jpg',
    examples: ['Join the queue at passport control.'],
    collocations: ['pass through passport control', 'passport control queue', 'at passport control'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel', 'air-travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_082',
    word: 'immigration',
    ipa: '/ˌɪmɪˈɡreɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Entry control at borders',
        example: 'Go through immigration first.',
        turkishMeaning: 'göçmenlik, giriş kontrolü'
      }
    ],
    imageUrl: '/images/vocab/immigration.jpg',
    examples: ['Go through immigration first.'],
    collocations: ['immigration officer', 'pass immigration', 'immigration desk'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_083',
    word: 'baggage claim',
    ipa: '/ˈbæɡɪdʒ kleɪm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Area to collect luggage',
        example: 'Meet me at baggage claim.',
        turkishMeaning: 'bagaj teslim'
      }
    ],
    imageUrl: '/images/vocab/baggage-claim.jpg',
    examples: ['Meet me at baggage claim.'],
    collocations: ['baggage claim area', 'at baggage claim', 'baggage claim carousel'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_084',
    word: 'overhead locker',
    ipa: '/ˌəʊvəhed ˈlɒkə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Storage compartment above seats (British)',
        example: 'Put your bag in the overhead locker.',
        turkishMeaning: 'üst bagaj bölmesi'
      }
    ],
    imageUrl: '/images/vocab/overhead-locker.jpg',
    examples: ['Put your bag in the overhead locker.'],
    collocations: ['overhead locker space', 'overhead locker full', 'store in overhead locker'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_085',
    word: 'aisle seat',
    ipa: '/aɪl siːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Seat next to passage',
        example: 'I prefer an aisle seat.',
        turkishMeaning: 'koridor koltuğu'
      }
    ],
    imageUrl: '/images/vocab/aisle-seat.jpg',
    examples: ['I prefer an aisle seat.'],
    collocations: ['request aisle seat', 'aisle seat or window', 'aisle seat preference'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_086',
    word: 'window seat',
    ipa: '/ˈwɪndəʊ siːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Seat next to window',
        example: 'Can I have a window seat?',
        turkishMeaning: 'pencere koltuğu'
      }
    ],
    imageUrl: '/images/vocab/window-seat.jpg',
    examples: ['Can I have a window seat?'],
    collocations: ['window seat view', 'request window seat', 'prefer window seat'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_087',
    word: 'fasten seatbelt',
    ipa: '/ˈfɑːsən ˈsiːtbelt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Secure safety belt',
        example: 'Please fasten your seatbelt.',
        turkishMeaning: 'emniyet kemerini bağlamak'
      }
    ],
    imageUrl: '/images/vocab/fasten-seatbelt.jpg',
    examples: ['Please fasten your seatbelt.'],
    collocations: ['fasten seatbelt sign', 'please fasten seatbelt', 'fasten seatbelt securely'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_088',
    word: 'emergency exit',
    ipa: '/ɪˈmɜːdʒənsi ˈeksɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Exit for urgent evacuation',
        example: 'Locate your nearest emergency exit.',
        turkishMeaning: 'acil çıkış'
      }
    ],
    imageUrl: '/images/vocab/emergency-exit.jpg',
    examples: ['Locate your nearest emergency exit.'],
    collocations: ['emergency exit row', 'emergency exit location', 'use emergency exit'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_089',
    word: 'life jacket',
    ipa: '/laɪf ˈdʒækɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Safety flotation device',
        example: 'Your life jacket is under your seat.',
        turkishMeaning: 'can yeleği'
      }
    ],
    imageUrl: '/images/vocab/life-jacket.jpg',
    examples: ['Your life jacket is under your seat.'],
    collocations: ['put on life jacket', 'life jacket demonstration', 'inflate life jacket'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },
    {
    id: 'vocab_travel_090',
    word: 'travel insurance',
    ipa: '/ˈtrævl ɪnˈʃʊərəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Insurance covering travel risks',
        example: 'Always buy travel insurance.',
        turkishMeaning: 'seyahat sigortası'
      }
    ],
    imageUrl: '/images/vocab/travel-insurance.jpg',
    examples: ['Always buy travel insurance.'],
    collocations: ['travel insurance policy', 'buy travel insurance', 'comprehensive travel insurance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['travel'],
    category: 'travel'
  },

  // DAILY (25 words)
    {
    id: 'vocab_daily_120',
    word: 'biscuit',
    ipa: '/ˈbɪskɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cookie (British)',
        example: 'Would you like a biscuit with your tea?',
        turkishMeaning: 'bisküvi'
      }
    ],
    imageUrl: '/images/vocab/biscuit.jpg',
    examples: ['Would you like a biscuit with your tea?'],
    collocations: ['chocolate biscuit', 'biscuit tin', 'digestive biscuit'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_121',
    word: 'rubbish',
    ipa: '/ˈrʌbɪʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Garbage or nonsense (British)',
        example: 'Take the rubbish out.',
        turkishMeaning: 'çöp, saçmalık'
      }
    ],
    imageUrl: '/images/vocab/rubbish.jpg',
    examples: ['Take the rubbish out.'],
    collocations: ['rubbish bin', 'take out rubbish', 'talk rubbish'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_122',
    word: 'bin',
    ipa: '/bɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Rubbish container (British)',
        example: 'Put it in the bin.',
        turkishMeaning: 'çöp kutusu'
      }
    ],
    imageUrl: '/images/vocab/bin.jpg',
    examples: ['Put it in the bin.'],
    collocations: ['rubbish bin', 'recycling bin', 'wheelie bin'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_123',
    word: 'flat',
    ipa: '/flæt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Apartment (British)',
        example: 'I live in a two-bedroom flat.',
        turkishMeaning: 'daire'
      }
    ],
    imageUrl: '/images/vocab/flat.jpg',
    examples: ['I live in a two-bedroom flat.'],
    collocations: ['flat share', 'rent flat', 'ground floor flat'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_124',
    word: 'estate agent',
    ipa: '/ɪˈsteɪt ˈeɪdʒənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Real estate agent (British)',
        example: 'I spoke to the estate agent yesterday.',
        turkishMeaning: 'emlakçı'
      }
    ],
    imageUrl: '/images/vocab/estate-agent.jpg',
    examples: ['I spoke to the estate agent yesterday.'],
    collocations: ['estate agent office', 'contact estate agent', 'estate agent fee'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_125',
    word: 'solicitor',
    ipa: '/səˈlɪsɪtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Lawyer (British)',
        example: 'I need to speak to my solicitor.',
        turkishMeaning: 'avukat'
      }
    ],
    imageUrl: '/images/vocab/solicitor.jpg',
    examples: ['I need to speak to my solicitor.'],
    collocations: ['solicitor advice', 'hire solicitor', 'solicitor fees'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_126',
    word: 'barrister',
    ipa: '/ˈbærɪstə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Court lawyer (British)',
        example: 'She works as a barrister.',
        turkishMeaning: 'mahkeme avukatı'
      }
    ],
    imageUrl: '/images/vocab/barrister.jpg',
    examples: ['She works as a barrister.'],
    collocations: ['barrister chambers', 'hire barrister', 'barrister wig'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_127',
    word: 'chemist',
    ipa: '/ˈkemɪst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Pharmacy (British)',
        example: 'I need to pop to the chemist.',
        turkishMeaning: 'eczane'
      }
    ],
    imageUrl: '/images/vocab/chemist.jpg',
    examples: ['I need to pop to the chemist.'],
    collocations: ['go to chemist', 'chemist shop', 'local chemist'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_128',
    word: 'queue',
    ipa: '/kjuː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Line of people waiting (British)',
        example: 'Join the queue at the back.',
        turkishMeaning: 'kuyruk, sıra'
      }
    ],
    imageUrl: '/images/vocab/queue.jpg',
    examples: ['Join the queue at the back.'],
    collocations: ['join queue', 'long queue', 'queue up'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_129',
    word: 'pavement',
    ipa: '/ˈpeɪvmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Sidewalk (British)',
        example: 'Walk on the pavement.',
        turkishMeaning: 'kaldırım'
      }
    ],
    imageUrl: '/images/vocab/pavement.jpg',
    examples: ['Walk on the pavement.'],
    collocations: ['on the pavement', 'pavement cafe', 'uneven pavement'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_130',
    word: 'zebra crossing',
    ipa: '/ˌzebrə ˈkrɒsɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Pedestrian crossing (British)',
        example: 'Use the zebra crossing.',
        turkishMeaning: 'yaya geçidi'
      }
    ],
    imageUrl: '/images/vocab/zebra-crossing.jpg',
    examples: ['Use the zebra crossing.'],
    collocations: ['cross at zebra crossing', 'zebra crossing stripes', 'wait at zebra crossing'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_131',
    word: 'roundabout',
    ipa: '/ˈraʊndəbaʊt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Circular road junction (British)',
        example: 'Take the third exit at the roundabout.',
        turkishMeaning: 'dönel kavşak'
      }
    ],
    imageUrl: '/images/vocab/roundabout.jpg',
    examples: ['Take the third exit at the roundabout.'],
    collocations: ['mini roundabout', 'roundabout exit', 'approach roundabout'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_132',
    word: 'motorway',
    ipa: '/ˈməʊtəweɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Highway (British)',
        example: 'Take the motorway to London.',
        turkishMeaning: 'otoyol'
      }
    ],
    imageUrl: '/images/vocab/motorway.jpg',
    examples: ['Take the motorway to London.'],
    collocations: ['motorway services', 'motorway junction', 'join motorway'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_133',
    word: 'petrol',
    ipa: '/ˈpetrəl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Gasoline (British)',
        example: 'I need to get petrol.',
        turkishMeaning: 'benzin'
      }
    ],
    imageUrl: '/images/vocab/petrol.jpg',
    examples: ['I need to get petrol.'],
    collocations: ['petrol station', 'petrol prices', 'run out of petrol'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_134',
    word: 'carpark',
    ipa: '/ˈkɑːpɑːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Parking lot (British)',
        example: 'The carpark is full.',
        turkishMeaning: 'otopark'
      }
    ],
    imageUrl: '/images/vocab/carpark.jpg',
    examples: ['The carpark is full.'],
    collocations: ['multistorey carpark', 'carpark charges', 'carpark ticket'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_135',
    word: 'boot',
    ipa: '/buːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Car trunk (British)',
        example: 'Put the shopping in the boot.',
        turkishMeaning: 'bagaj'
      }
    ],
    imageUrl: '/images/vocab/boot.jpg',
    examples: ['Put the shopping in the boot.'],
    collocations: ['car boot', 'boot space', 'open boot'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_136',
    word: 'bonnet',
    ipa: '/ˈbɒnɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Car hood (British)',
        example: 'Open the bonnet.',
        turkishMeaning: 'kaput'
      }
    ],
    imageUrl: '/images/vocab/bonnet.jpg',
    examples: ['Open the bonnet.'],
    collocations: ['car bonnet', 'under bonnet', 'bonnet release'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_137',
    word: 'windscreen',
    ipa: '/ˈwɪndskriːn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Car windshield (British)',
        example: 'The windscreen is dirty.',
        turkishMeaning: 'ön cam'
      }
    ],
    imageUrl: '/images/vocab/windscreen.jpg',
    examples: ['The windscreen is dirty.'],
    collocations: ['windscreen wipers', 'cracked windscreen', 'clean windscreen'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_138',
    word: 'indicator',
    ipa: '/ˈɪndɪkeɪtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Turn signal (British)',
        example: 'Use your indicator.',
        turkishMeaning: 'sinyal'
      }
    ],
    imageUrl: '/images/vocab/indicator.jpg',
    examples: ['Use your indicator.'],
    collocations: ['indicator light', 'left indicator', 'indicator signal'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_139',
    word: 'anticlockwise',
    ipa: '/ˌæntɪˈklɒkwaɪz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Counterclockwise (British)',
        example: 'Turn it anticlockwise.',
        turkishMeaning: 'saat yönünün tersi'
      }
    ],
    imageUrl: '/images/vocab/anticlockwise.jpg',
    examples: ['Turn it anticlockwise.'],
    collocations: ['rotate anticlockwise', 'anticlockwise direction', 'turn anticlockwise'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_140',
    word: 'fortnight',
    ipa: '/ˈfɔːtnaɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Two weeks (British)',
        example: 'I\'ll see you in a fortnight.',
        turkishMeaning: 'iki hafta'
      }
    ],
    imageUrl: '/images/vocab/fortnight.jpg',
    examples: ['I\'ll see you in a fortnight.'],
    collocations: ['in a fortnight', 'fortnight ago', 'fortnight holiday'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_141',
    word: 'autumn',
    ipa: '/ˈɔːtəm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Fall season (British)',
        example: 'The leaves turn golden in autumn.',
        turkishMeaning: 'sonbahar'
      }
    ],
    imageUrl: '/images/vocab/autumn.jpg',
    examples: ['The leaves turn golden in autumn.'],
    collocations: ['autumn leaves', 'autumn weather', 'early autumn'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
  {
    id: 'vocab_daily_142',
    word: 'holiday',
    ipa: '/ˈhɒlədeɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Vacation (British)',
        example: 'I\'m going on holiday next week.',
        turkishMeaning: 'tatil'
      }
    ],
    imageUrl: '/images/vocab/holiday.jpg',
    examples: ['I\'m going on holiday next week.'],
    collocations: ['summer holiday', 'on holiday', 'holiday destination'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_143',
    word: 'post',
    ipa: '/pəʊst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Mail (British)',
        example: 'Has the post arrived?',
        turkishMeaning: 'posta'
      }
    ],
    imageUrl: '/images/vocab/post.jpg',
    examples: ['Has the post arrived?'],
    collocations: ['morning post', 'post office', 'send by post'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },
    {
    id: 'vocab_daily_144',
    word: 'postman',
    ipa: '/ˈpəʊstmən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Mail carrier (British)',
        example: 'The postman came early today.',
        turkishMeaning: 'postacı'
      }
    ],
    imageUrl: '/images/vocab/postman.jpg',
    examples: ['The postman came early today.'],
    collocations: ['postman delivery', 'postman arrives', 'local postman'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['daily'],
    category: 'daily'
  },

  // SOCIAL (10 words)
    {
    id: 'vocab_social_047',
    word: 'socialise',
    ipa: '/ˈsəʊʃəlaɪz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Mix socially (British spelling)',
        example: 'I like to socialise after work.',
        turkishMeaning: 'sosyalleşmek'
      }
    ],
    imageUrl: '/images/vocab/socialise.jpg',
    examples: ['I like to socialise after work.'],
    collocations: ['socialise with', 'socialise colleagues', 'enjoy socialising'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_048',
    word: 'introduce',
    ipa: '/ˌɪntrəˈdjuːs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Present someone to another',
        example: 'Let me introduce you to my friend.',
        turkishMeaning: 'tanıştırmak'
      }
    ],
    imageUrl: '/images/vocab/introduce.jpg',
    examples: ['Let me introduce you to my friend.'],
    collocations: ['introduce yourself', 'introduce someone', 'introduction needed'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_049',
    word: 'fancy',
    ipa: '/ˈfænsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Want or like (British)',
        example: 'Do you fancy a coffee?',
        turkishMeaning: 'istemek, canı çekmek'
      }
    ],
    imageUrl: '/images/vocab/fancy.jpg',
    examples: ['Do you fancy a coffee?'],
    collocations: ['fancy doing', 'fancy a drink', 'fancy going'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_050',
    word: 'keen',
    ipa: '/kiːn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Eager or enthusiastic (British)',
        example: 'I\'m keen to meet them.',
        turkishMeaning: 'hevesli, istekli'
      }
    ],
    imageUrl: '/images/vocab/keen.jpg',
    examples: ['I\'m keen to meet them.'],
    collocations: ['keen on', 'keen to', 'very keen'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_051',
    word: 'sorted',
    ipa: '/ˈsɔːtɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Arranged or organized (British)',
        example: 'Don\'t worry, it\'s all sorted.',
        turkishMeaning: 'halledilmiş'
      }
    ],
    imageUrl: '/images/vocab/sorted.jpg',
    examples: ['Don\'t worry, it\'s all sorted.'],
    collocations: ['all sorted', 'get sorted', 'sorted out'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_052',
    word: 'cheers',
    ipa: '/tʃɪəz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Thank you or toast (British)',
        example: 'Cheers for the help!',
        turkishMeaning: 'teşekkürler, şerefe'
      }
    ],
    imageUrl: '/images/vocab/cheers.jpg',
    examples: ['Cheers for the help!'],
    collocations: ['cheers mate', 'cheers everyone', 'say cheers'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_053',
    word: 'apologies',
    ipa: '/əˈpɒlədʒiz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Expression of regret',
        example: 'My apologies for being late.',
        turkishMeaning: 'özür'
      }
    ],
    imageUrl: '/images/vocab/apologies.jpg',
    examples: ['My apologies for being late.'],
    collocations: ['sincere apologies', 'offer apologies', 'accept apologies'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_054',
    word: 'pardon',
    ipa: '/ˈpɑːdn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Request to repeat (British polite)',
        example: 'Pardon? I didn\'t catch that.',
        turkishMeaning: 'affedersiniz, efendim'
      }
    ],
    imageUrl: '/images/vocab/pardon.jpg',
    examples: ['Pardon? I didn\'t catch that.'],
    collocations: ['beg your pardon', 'pardon me', 'I beg your pardon'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['social'],
    category: 'social'
  },
    {
    id: 'vocab_social_055',
    word: 'compliment',
    ipa: '/ˈkɒmplɪmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Express praise or admiration',
        example: 'She paid me a lovely compliment.',
        turkishMeaning: 'iltifat'
      }
    ],
    imageUrl: '/images/vocab/compliment.jpg',
    examples: ['She paid me a lovely compliment.'],
    collocations: ['pay compliment', 'receive compliment', 'nice compliment'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },
  {
    id: 'vocab_social_056',
    word: 'offend',
    ipa: '/əˈfend/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cause hurt or upset',
        example: 'I didn\'t mean to offend you.',
        turkishMeaning: 'gücendirmek'
      }
    ],
    imageUrl: '/images/vocab/offend.jpg',
    examples: ['I didn\'t mean to offend you.'],
    collocations: ['offend someone', 'easily offended', 'might offend'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['social'],
    category: 'social'
  },

  // ==================== BATCH 7: 100 TECHNICAL ENGINEERING WORDS ====================

    {
    id: 'vocab_tech_153',
    word: 'torque',
    ipa: '/tɔːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Rotational force',
        example: 'Apply 50 Nm of torque to the bolt.',
        turkishMeaning: 'tork'
      }
    ],
    imageUrl: '/images/vocab/torque.jpg',
    examples: ['Apply 50 Nm of torque to the bolt.'],
    collocations: ['torque wrench', 'torque setting', 'apply torque'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_154',
    word: 'welding',
    ipa: '/ˈweldɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Joining metals by heat',
        example: 'Welding is required for this joint.',
        turkishMeaning: 'kaynak'
      }
    ],
    imageUrl: '/images/vocab/welding.jpg',
    examples: ['Welding is required for this joint.'],
    collocations: ['welding torch', 'welding seam', 'arc welding'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'manufacturing'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_155',
    word: 'casting',
    ipa: '/ˈkɑːstɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Pouring molten metal into mould',
        example: 'The part is made by casting.',
        turkishMeaning: 'döküm'
      }
    ],
    imageUrl: '/images/vocab/casting.jpg',
    examples: ['The part is made by casting.'],
    collocations: ['die casting', 'sand casting', 'casting process'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'manufacturing'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_156',
    word: 'forging',
    ipa: '/ˈfɔːdʒɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Shaping metal by hammering',
        example: 'Forging increases metal strength.',
        turkishMeaning: 'dövme'
      }
    ],
    imageUrl: '/images/vocab/forging.jpg',
    examples: ['Forging increases metal strength.'],
    collocations: ['hot forging', 'cold forging', 'forging press'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'manufacturing'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_157',
    word: 'tolerance',
    ipa: '/ˈtɒlərəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Acceptable dimensional variation',
        example: 'The tolerance is ±0.1mm.',
        turkishMeaning: 'tolerans'
      }
    ],
    imageUrl: '/images/vocab/tolerance.jpg',
    examples: ['The tolerance is ±0.1mm.'],
    collocations: ['tight tolerance', 'tolerance range', 'dimensional tolerance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_158',
    word: 'calibration',
    ipa: '/ˌkælɪˈbreɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Adjusting accuracy of instruments',
        example: 'The equipment needs calibration.',
        turkishMeaning: 'kalibrasyon'
      }
    ],
    imageUrl: '/images/vocab/calibration.jpg',
    examples: ['The equipment needs calibration.'],
    collocations: ['calibration certificate', 'calibration procedure', 'annual calibration'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_159',
    word: 'precision',
    ipa: '/prɪˈsɪʒən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Exactness of measurement',
        example: 'This requires high precision.',
        turkishMeaning: 'hassasiyet'
      }
    ],
    imageUrl: '/images/vocab/precision.jpg',
    examples: ['This requires high precision.'],
    collocations: ['precision engineering', 'precision measurement', 'high precision'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_160',
    word: 'accuracy',
    ipa: '/ˈækjərəsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Correctness of measurement',
        example: 'The accuracy is within 0.01mm.',
        turkishMeaning: 'doğruluk'
      }
    ],
    imageUrl: '/images/vocab/accuracy.jpg',
    examples: ['The accuracy is within 0.01mm.'],
    collocations: ['measurement accuracy', 'high accuracy', 'accuracy level'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_161',
    word: 'blueprint',
    ipa: '/ˈbluːprɪnt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Technical drawing',
        example: 'Follow the blueprint exactly.',
        turkishMeaning: 'teknik çizim'
      }
    ],
    imageUrl: '/images/vocab/blueprint.jpg',
    examples: ['Follow the blueprint exactly.'],
    collocations: ['blueprint drawing', 'read blueprint', 'blueprint specification'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_162',
    word: 'schematic',
    ipa: '/skiːˈmætɪk/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Diagram showing system layout',
        example: 'Check the schematic diagram.',
        turkishMeaning: 'şematik'
      }
    ],
    imageUrl: '/images/vocab/schematic.jpg',
    examples: ['Check the schematic diagram.'],
    collocations: ['schematic diagram', 'electrical schematic', 'schematic drawing'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_163',
    word: 'assembly',
    ipa: '/əˈsembli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Putting parts together',
        example: 'The assembly process takes 2 hours.',
        turkishMeaning: 'montaj'
      }
    ],
    imageUrl: '/images/vocab/assembly.jpg',
    examples: ['The assembly process takes 2 hours.'],
    collocations: ['assembly line', 'assembly instructions', 'final assembly'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_164',
    word: 'disassembly',
    ipa: '/ˌdɪsəˈsembli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Taking parts apart',
        example: 'Complete disassembly is required.',
        turkishMeaning: 'demontaj'
      }
    ],
    imageUrl: '/images/vocab/disassembly.jpg',
    examples: ['Complete disassembly is required.'],
    collocations: ['disassembly procedure', 'disassembly instructions', 'careful disassembly'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_165',
    word: 'component',
    ipa: '/kəmˈpəʊnənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Part of a system',
        example: 'Replace the faulty component.',
        turkishMeaning: 'parça, bileşen'
      }
    ],
    imageUrl: '/images/vocab/component.jpg',
    examples: ['Replace the faulty component.'],
    collocations: ['component failure', 'electronic component', 'component part'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_166',
    word: 'prototype',
    ipa: '/ˈprəʊtətaɪp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'First model for testing',
        example: 'We built a prototype for testing.',
        turkishMeaning: 'prototip'
      }
    ],
    imageUrl: '/images/vocab/prototype.jpg',
    examples: ['We built a prototype for testing.'],
    collocations: ['prototype testing', 'prototype development', 'working prototype'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_167',
    word: 'fabrication',
    ipa: '/ˌfæbrɪˈkeɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Manufacturing process',
        example: 'The fabrication is complete.',
        turkishMeaning: 'imalat'
      }
    ],
    imageUrl: '/images/vocab/fabrication.jpg',
    examples: ['The fabrication is complete.'],
    collocations: ['metal fabrication', 'fabrication process', 'fabrication shop'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'manufacturing'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_168',
    word: 'machining',
    ipa: '/məˈʃiːnɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Shaping by cutting tools',
        example: 'The part requires precision machining.',
        turkishMeaning: 'talaşlı imalat'
      }
    ],
    imageUrl: '/images/vocab/machining.jpg',
    examples: ['The part requires precision machining.'],
    collocations: ['CNC machining', 'machining operation', 'machining center'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_169',
    word: 'lathe',
    ipa: '/leɪð/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Machine for rotating workpieces',
        example: 'Use the lathe to turn the shaft.',
        turkishMeaning: 'torna'
      }
    ],
    imageUrl: '/images/vocab/lathe.jpg',
    examples: ['Use the lathe to turn the shaft.'],
    collocations: ['lathe machine', 'lathe operation', 'CNC lathe'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_170',
    word: 'milling',
    ipa: '/ˈmɪlɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cutting with rotating tool',
        example: 'Milling creates flat surfaces.',
        turkishMeaning: 'freze'
      }
    ],
    imageUrl: '/images/vocab/milling.jpg',
    examples: ['Milling creates flat surfaces.'],
    collocations: ['milling machine', 'milling cutter', 'face milling'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_171',
    word: 'drilling',
    ipa: '/ˈdrɪlɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Making holes',
        example: 'Drilling requires correct speed.',
        turkishMeaning: 'delme'
      }
    ],
    imageUrl: '/images/vocab/drilling.jpg',
    examples: ['Drilling requires correct speed.'],
    collocations: ['drilling operation', 'drilling machine', 'deep hole drilling'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_172',
    word: 'grinding',
    ipa: '/ˈɡraɪndɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Abrasive finishing process',
        example: 'Grinding achieves fine surface finish.',
        turkishMeaning: 'taşlama'
      }
    ],
    imageUrl: '/images/vocab/grinding.jpg',
    examples: ['Grinding achieves fine surface finish.'],
    collocations: ['grinding wheel', 'surface grinding', 'grinding machine'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_173',
    word: 'polishing',
    ipa: '/ˈpɒlɪʃɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Creating smooth shiny surface',
        example: 'The part needs polishing.',
        turkishMeaning: 'parlatma'
      }
    ],
    imageUrl: '/images/vocab/polishing.jpg',
    examples: ['The part needs polishing.'],
    collocations: ['polishing compound', 'mirror polishing', 'polishing wheel'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_174',
    word: 'finishing',
    ipa: '/ˈfɪnɪʃɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Final surface treatment',
        example: 'Apply the finishing coat.',
        turkishMeaning: 'son işlem'
      }
    ],
    imageUrl: '/images/vocab/finishing.jpg',
    examples: ['Apply the finishing coat.'],
    collocations: ['surface finishing', 'finishing process', 'finishing operation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_175',
    word: 'coating',
    ipa: '/ˈkəʊtɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Protective layer on surface',
        example: 'Apply protective coating.',
        turkishMeaning: 'kaplama'
      }
    ],
    imageUrl: '/images/vocab/coating.jpg',
    examples: ['Apply protective coating.'],
    collocations: ['protective coating', 'powder coating', 'coating thickness'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'surface-treatment'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_176',
    word: 'heat treatment',
    ipa: '/hiːt ˈtriːtmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Heating to alter properties',
        example: 'Heat treatment increases hardness.',
        turkishMeaning: 'ısıl işlem'
      }
    ],
    imageUrl: '/images/vocab/heat-treatment.jpg',
    examples: ['Heat treatment increases hardness.'],
    collocations: ['heat treatment process', 'heat treatment cycle', 'heat treatment furnace'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_177',
    word: 'annealing',
    ipa: '/əˈniːlɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Heating and slow cooling',
        example: 'Annealing softens the metal.',
        turkishMeaning: 'tavlama'
      }
    ],
    imageUrl: '/images/vocab/annealing.jpg',
    examples: ['Annealing softens the metal.'],
    collocations: ['annealing process', 'annealing temperature', 'full annealing'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_178',
    word: 'hardening',
    ipa: '/ˈhɑːdənɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Increasing material hardness',
        example: 'The part underwent hardening.',
        turkishMeaning: 'sertleştirme'
      }
    ],
    imageUrl: '/images/vocab/hardening.jpg',
    examples: ['The part underwent hardening.'],
    collocations: ['hardening process', 'case hardening', 'surface hardening'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_179',
    word: 'tempering',
    ipa: '/ˈtempərɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Reheating after hardening',
        example: 'Tempering reduces brittleness.',
        turkishMeaning: 'menevişleme'
      }
    ],
    imageUrl: '/images/vocab/tempering.jpg',
    examples: ['Tempering reduces brittleness.'],
    collocations: ['tempering temperature', 'tempering process', 'tempering time'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_180',
    word: 'quenching',
    ipa: '/ˈkwentʃɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Rapid cooling in liquid',
        example: 'Quenching in oil is preferred.',
        turkishMeaning: 'su verme'
      }
    ],
    imageUrl: '/images/vocab/quenching.jpg',
    examples: ['Quenching in oil is preferred.'],
    collocations: ['quenching medium', 'water quenching', 'oil quenching'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_181',
    word: 'corrosion',
    ipa: '/kəˈrəʊʒən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Chemical degradation of metal',
        example: 'Prevent corrosion with coating.',
        turkishMeaning: 'korozyon'
      }
    ],
    imageUrl: '/images/vocab/corrosion.jpg',
    examples: ['Prevent corrosion with coating.'],
    collocations: ['corrosion resistance', 'corrosion protection', 'corrosion damage'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'manufacturing', 'surface-treatment'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_182',
    word: 'rust',
    ipa: '/rʌst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Iron oxide corrosion',
        example: 'Remove rust before painting.',
        turkishMeaning: 'pas'
      }
    ],
    imageUrl: '/images/vocab/rust.jpg',
    examples: ['Remove rust before painting.'],
    collocations: ['rust removal', 'rust prevention', 'rust inhibitor'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical', 'surface-treatment'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_183',
    word: 'lubrication',
    ipa: '/ˌluːbrɪˈkeɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Reducing friction with oil',
        example: 'Regular lubrication is essential.',
        turkishMeaning: 'yağlama'
      }
    ],
    imageUrl: '/images/vocab/lubrication.jpg',
    examples: ['Regular lubrication is essential.'],
    collocations: ['lubrication system', 'lubrication oil', 'automatic lubrication'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_184',
    word: 'friction',
    ipa: '/ˈfrɪkʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Resistance between surfaces',
        example: 'Reduce friction with grease.',
        turkishMeaning: 'sürtünme'
      }
    ],
    imageUrl: '/images/vocab/friction.jpg',
    examples: ['Reduce friction with grease.'],
    collocations: ['friction force', 'reduce friction', 'friction coefficient'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_185',
    word: 'wear',
    ipa: '/weə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Material loss from friction',
        example: 'Check for wear on the bearing.',
        turkishMeaning: 'aşınma'
      }
    ],
    imageUrl: '/images/vocab/wear.jpg',
    examples: ['Check for wear on the bearing.'],
    collocations: ['wear resistance', 'wear rate', 'excessive wear'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_186',
    word: 'fatigue',
    ipa: '/fəˈtiːɡ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Material failure from cycles',
        example: 'The component failed by fatigue.',
        turkishMeaning: 'yorulma'
      }
    ],
    imageUrl: '/images/vocab/fatigue.jpg',
    examples: ['The component failed by fatigue.'],
    collocations: ['fatigue failure', 'fatigue crack', 'fatigue strength'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_187',
    word: 'stress',
    ipa: '/stres/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Internal force per unit area',
        example: 'Calculate the maximum stress.',
        turkishMeaning: 'gerilim'
      }
    ],
    imageUrl: '/images/vocab/stress.jpg',
    examples: ['Calculate the maximum stress.'],
    collocations: ['stress analysis', 'stress concentration', 'tensile stress'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_188',
    word: 'strain',
    ipa: '/streɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Deformation from stress',
        example: 'Measure the strain with a gauge.',
        turkishMeaning: 'birim uzama'
      }
    ],
    imageUrl: '/images/vocab/strain.jpg',
    examples: ['Measure the strain with a gauge.'],
    collocations: ['strain gauge', 'strain measurement', 'strain rate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_189',
    word: 'tension',
    ipa: '/ˈtenʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Pulling force',
        example: 'The cable is under tension.',
        turkishMeaning: 'çekme'
      }
    ],
    imageUrl: '/images/vocab/tension.jpg',
    examples: ['The cable is under tension.'],
    collocations: ['tension test', 'tension force', 'under tension'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_190',
    word: 'compression',
    ipa: '/kəmˈpreʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Pushing force',
        example: 'The column resists compression.',
        turkishMeaning: 'basma'
      }
    ],
    imageUrl: '/images/vocab/compression.jpg',
    examples: ['The column resists compression.'],
    collocations: ['compression force', 'compression test', 'compression strength'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_191',
    word: 'shear',
    ipa: '/ʃɪə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cutting force',
        example: 'The bolt failed in shear.',
        turkishMeaning: 'kesme'
      }
    ],
    imageUrl: '/images/vocab/shear.jpg',
    examples: ['The bolt failed in shear.'],
    collocations: ['shear force', 'shear stress', 'shear strength'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_192',
    word: 'bending',
    ipa: '/ˈbendɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Curving under load',
        example: 'The beam is bending.',
        turkishMeaning: 'bükme'
      }
    ],
    imageUrl: '/images/vocab/bending.jpg',
    examples: ['The beam is bending.'],
    collocations: ['bending moment', 'bending stress', 'bending test'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_193',
    word: 'torsion',
    ipa: '/ˈtɔːʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Twisting force',
        example: 'The shaft is under torsion.',
        turkishMeaning: 'burulma'
      }
    ],
    imageUrl: '/images/vocab/torsion.jpg',
    examples: ['The shaft is under torsion.'],
    collocations: ['torsion test', 'torsional stress', 'torsion spring'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_194',
    word: 'load',
    ipa: '/ləʊd/',
    partOfSpeech: 'verb',
    definitions: [
      {
        meaning: 'Applied force or weight',
        example: 'The maximum load is 500kg.',
        turkishMeaning: 'yük'
      }
    ],
    imageUrl: '/images/vocab/load.jpg',
    examples: ['The maximum load is 500kg.'],
    collocations: ['load capacity', 'maximum load', 'load bearing'],
    synonyms: [],
    antonyms: ['unload'],
    difficulty: 'B1',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_195',
    word: 'bearing',
    ipa: '/ˈbeərɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Support for rotating shaft',
        example: 'Replace the worn bearing.',
        turkishMeaning: 'rulman, yatak'
      }
    ],
    imageUrl: '/images/vocab/bearing.jpg',
    examples: ['Replace the worn bearing.'],
    collocations: ['ball bearing', 'roller bearing', 'bearing failure'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_196',
    word: 'shaft',
    ipa: '/ʃɑːft/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Rotating cylindrical rod',
        example: 'The shaft transmits power.',
        turkishMeaning: 'mil'
      }
    ],
    imageUrl: '/images/vocab/shaft.jpg',
    examples: ['The shaft transmits power.'],
    collocations: ['drive shaft', 'shaft diameter', 'rotating shaft'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_197',
    word: 'gear',
    ipa: '/ɡɪə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Toothed wheel for transmission',
        example: 'The gear ratio is 3:1.',
        turkishMeaning: 'dişli'
      }
    ],
    imageUrl: '/images/vocab/gear.jpg',
    examples: ['The gear ratio is 3:1.'],
    collocations: ['gear box', 'gear ratio', 'gear wheel'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'vehicle-parts'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_198',
    word: 'pulley',
    ipa: '/ˈpʊli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Wheel for belt drive',
        example: 'The pulley drives the belt.',
        turkishMeaning: 'kasnak'
      }
    ],
    imageUrl: '/images/vocab/pulley.jpg',
    examples: ['The pulley drives the belt.'],
    collocations: ['pulley system', 'drive pulley', 'pulley wheel'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'vehicle-parts'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_199',
    word: 'belt',
    ipa: '/belt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Flexible power transmission',
        example: 'The belt needs tightening.',
        turkishMeaning: 'kayış'
      }
    ],
    imageUrl: '/images/vocab/belt.jpg',
    examples: ['The belt needs tightening.'],
    collocations: ['drive belt', 'timing belt', 'belt tension'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_200',
    word: 'chain',
    ipa: '/tʃeɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Linked metal transmission',
        example: 'Lubricate the chain regularly.',
        turkishMeaning: 'zincir'
      }
    ],
    imageUrl: '/images/vocab/chain.jpg',
    examples: ['Lubricate the chain regularly.'],
    collocations: ['drive chain', 'chain drive', 'chain sprocket'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical', 'manufacturing'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_201',
    word: 'sprocket',
    ipa: '/ˈsprɒkɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Toothed wheel for chain',
        example: 'The sprocket engages the chain.',
        turkishMeaning: 'zincir dişlisi'
      }
    ],
    imageUrl: '/images/vocab/sprocket.jpg',
    examples: ['The sprocket engages the chain.'],
    collocations: ['sprocket wheel', 'chain sprocket', 'drive sprocket'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'vehicle-parts'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_202',
    word: 'coupling',
    ipa: '/ˈkʌplɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Device connecting two shafts',
        example: 'Install a flexible coupling.',
        turkishMeaning: 'kaplin'
      }
    ],
    imageUrl: '/images/vocab/coupling.jpg',
    examples: ['Install a flexible coupling.'],
    collocations: ['shaft coupling', 'flexible coupling', 'rigid coupling'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_203',
    word: 'clutch',
    ipa: '/klʌtʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Engagement device for power',
        example: 'The clutch is slipping.',
        turkishMeaning: 'kavrama'
      }
    ],
    imageUrl: '/images/vocab/clutch.jpg',
    examples: ['The clutch is slipping.'],
    collocations: ['clutch plate', 'clutch disc', 'engage clutch'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_204',
    word: 'brake',
    ipa: '/breɪk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Device for stopping motion',
        example: 'Apply the emergency brake.',
        turkishMeaning: 'fren'
      }
    ],
    imageUrl: '/images/vocab/brake.jpg',
    examples: ['Apply the emergency brake.'],
    collocations: ['brake system', 'brake pad', 'disc brake'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical', 'vehicle-parts'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_205',
    word: 'valve',
    ipa: '/vælv/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Flow control device',
        example: 'Close the safety valve.',
        turkishMeaning: 'valf'
      }
    ],
    imageUrl: '/images/vocab/valve.jpg',
    examples: ['Close the safety valve.'],
    collocations: ['control valve', 'safety valve', 'pressure valve'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'hydraulics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_206',
    word: 'pump',
    ipa: '/pʌmp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Device for moving fluids',
        example: 'The pump is not working.',
        turkishMeaning: 'pompa'
      }
    ],
    imageUrl: '/images/vocab/pump.jpg',
    examples: ['The pump is not working.'],
    collocations: ['water pump', 'hydraulic pump', 'centrifugal pump'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['technical', 'hydraulics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_207',
    word: 'compressor',
    ipa: '/kəmˈpresə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Device for compressing gas',
        example: 'The air compressor is running.',
        turkishMeaning: 'kompresör'
      }
    ],
    imageUrl: '/images/vocab/compressor.jpg',
    examples: ['The air compressor is running.'],
    collocations: ['air compressor', 'compressor unit', 'compressor pressure'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_208',
    word: 'turbine',
    ipa: '/ˈtɜːbaɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Rotary engine driven by fluid',
        example: 'The turbine generates electricity.',
        turkishMeaning: 'türbin'
      }
    ],
    imageUrl: '/images/vocab/turbine.jpg',
    examples: ['The turbine generates electricity.'],
    collocations: ['gas turbine', 'steam turbine', 'turbine blade'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_209',
    word: 'generator',
    ipa: '/ˈdʒenəreɪtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Device producing electricity',
        example: 'The generator provides backup power.',
        turkishMeaning: 'jeneratör'
      }
    ],
    imageUrl: '/images/vocab/generator.jpg',
    examples: ['The generator provides backup power.'],
    collocations: ['diesel generator', 'power generator', 'generator set'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_210',
    word: 'transformer',
    ipa: '/trænsˈfɔːmə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Device changing voltage',
        example: 'The transformer is overheating.',
        turkishMeaning: 'trafo'
      }
    ],
    imageUrl: '/images/vocab/transformer.jpg',
    examples: ['The transformer is overheating.'],
    collocations: ['power transformer', 'transformer station', 'step-down transformer'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_211',
    word: 'circuit',
    ipa: '/ˈsɜːkɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Complete electrical path',
        example: 'Check the electrical circuit.',
        turkishMeaning: 'devre'
      }
    ],
    imageUrl: '/images/vocab/circuit.jpg',
    examples: ['Check the electrical circuit.'],
    collocations: ['circuit board', 'electrical circuit', 'short circuit'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_212',
    word: 'resistor',
    ipa: '/rɪˈzɪstə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Component limiting current',
        example: 'Replace the burnt resistor.',
        turkishMeaning: 'direnç'
      }
    ],
    imageUrl: '/images/vocab/resistor.jpg',
    examples: ['Replace the burnt resistor.'],
    collocations: ['resistor value', 'variable resistor', 'resistor color code'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_213',
    word: 'capacitor',
    ipa: '/kəˈpæsɪtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Component storing charge',
        example: 'The capacitor is faulty.',
        turkishMeaning: 'kondansatör'
      }
    ],
    imageUrl: '/images/vocab/capacitor.jpg',
    examples: ['The capacitor is faulty.'],
    collocations: ['capacitor value', 'electrolytic capacitor', 'capacitor bank'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_214',
    word: 'inductor',
    ipa: '/ɪnˈdʌktə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Component storing energy',
        example: 'The inductor filters noise.',
        turkishMeaning: 'bobin'
      }
    ],
    imageUrl: '/images/vocab/inductor.jpg',
    examples: ['The inductor filters noise.'],
    collocations: ['inductor coil', 'inductor value', 'choke inductor'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_215',
    word: 'transistor',
    ipa: '/trænˈzɪstə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Semiconductor switching device',
        example: 'The transistor amplifies the signal.',
        turkishMeaning: 'transistör'
      }
    ],
    imageUrl: '/images/vocab/transistor.jpg',
    examples: ['The transistor amplifies the signal.'],
    collocations: ['transistor circuit', 'power transistor', 'transistor switch'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_216',
    word: 'diode',
    ipa: '/ˈdaɪəʊd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'One-way current device',
        example: 'The diode prevents reverse flow.',
        turkishMeaning: 'diyot'
      }
    ],
    imageUrl: '/images/vocab/diode.jpg',
    examples: ['The diode prevents reverse flow.'],
    collocations: ['LED diode', 'diode bridge', 'zener diode'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_217',
    word: 'relay',
    ipa: '/ˈriːleɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Electromagnetic switch',
        example: 'The relay controls the motor.',
        turkishMeaning: 'röle'
      }
    ],
    imageUrl: '/images/vocab/relay.jpg',
    examples: ['The relay controls the motor.'],
    collocations: ['relay switch', 'control relay', 'relay contact'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_218',
    word: 'fuse',
    ipa: '/fjuːz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Overcurrent protection device',
        example: 'The fuse has blown.',
        turkishMeaning: 'sigorta'
      }
    ],
    imageUrl: '/images/vocab/fuse.jpg',
    examples: ['The fuse has blown.'],
    collocations: ['fuse box', 'fuse rating', 'replace fuse'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'surface-treatment'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_219',
    word: 'sensor',
    ipa: '/ˈsensə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Device detecting physical changes',
        example: 'The temperature sensor is faulty.',
        turkishMeaning: 'sensör'
      }
    ],
    imageUrl: '/images/vocab/sensor.jpg',
    examples: ['The temperature sensor is faulty.'],
    collocations: ['temperature sensor', 'pressure sensor', 'sensor signal'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_220',
    word: 'actuator',
    ipa: '/ˈæktʃueɪtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Device creating motion',
        example: 'The hydraulic actuator moves the arm.',
        turkishMeaning: 'aktüatör'
      }
    ],
    imageUrl: '/images/vocab/actuator.jpg',
    examples: ['The hydraulic actuator moves the arm.'],
    collocations: ['hydraulic actuator', 'linear actuator', 'actuator valve'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_221',
    word: 'controller',
    ipa: '/kənˈtrəʊlə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Device managing system operation',
        example: 'Program the PLC controller.',
        turkishMeaning: 'kontrol cihazı'
      }
    ],
    imageUrl: '/images/vocab/controller.jpg',
    examples: ['Program the PLC controller.'],
    collocations: ['PLC controller', 'motor controller', 'controller unit'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_222',
    word: 'feedback',
    ipa: '/ˈfiːdbæk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Return signal for control',
        example: 'The system uses position feedback.',
        turkishMeaning: 'geri besleme'
      }
    ],
    imageUrl: '/images/vocab/feedback.jpg',
    examples: ['The system uses position feedback.'],
    collocations: ['feedback loop', 'feedback signal', 'negative feedback'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_223',
    word: 'servo',
    ipa: '/ˈsɜːvəʊ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Precise position control system',
        example: 'The servo motor is precise.',
        turkishMeaning: 'servo'
      }
    ],
    imageUrl: '/images/vocab/servo.jpg',
    examples: ['The servo motor is precise.'],
    collocations: ['servo motor', 'servo drive', 'servo system'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_224',
    word: 'stepper motor',
    ipa: '/ˈstepə ˈməʊtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Motor moving in steps',
        example: 'The stepper motor is accurate.',
        turkishMeaning: 'step motor'
      }
    ],
    imageUrl: '/images/vocab/stepper-motor.jpg',
    examples: ['The stepper motor is accurate.'],
    collocations: ['stepper motor driver', 'stepper motor control', 'bipolar stepper'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_225',
    word: 'conveyor',
    ipa: '/kənˈveɪə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Belt system for transport',
        example: 'The conveyor moves parts.',
        turkishMeaning: 'konveyör'
      }
    ],
    imageUrl: '/images/vocab/conveyor.jpg',
    examples: ['The conveyor moves parts.'],
    collocations: ['conveyor belt', 'conveyor system', 'roller conveyor'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_226',
    word: 'automation',
    ipa: '/ˌɔːtəˈmeɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Automatic control of processes',
        example: 'Factory automation increases efficiency.',
        turkishMeaning: 'otomasyon'
      }
    ],
    imageUrl: '/images/vocab/automation.jpg',
    examples: ['Factory automation increases efficiency.'],
    collocations: ['industrial automation', 'automation system', 'factory automation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_227',
    word: 'robotics',
    ipa: '/rəʊˈbɒtɪks/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Science of robots',
        example: 'Robotics is advancing rapidly.',
        turkishMeaning: 'robotik'
      }
    ],
    imageUrl: '/images/vocab/robotics.jpg',
    examples: ['Robotics is advancing rapidly.'],
    collocations: ['industrial robotics', 'robotics system', 'robotics engineer'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_228',
    word: 'CNC',
    ipa: '/ˌsiː en ˈsiː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Computer Numerical Control',
        example: 'Program the CNC machine.',
        turkishMeaning: 'CNC'
      }
    ],
    imageUrl: '/images/vocab/cnc.jpg',
    examples: ['Program the CNC machine.'],
    collocations: ['CNC machine', 'CNC programming', 'CNC operator'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_229',
    word: 'CAD',
    ipa: '/kæd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Computer-Aided Design',
        example: 'Draw it in CAD software.',
        turkishMeaning: 'CAD'
      }
    ],
    imageUrl: '/images/vocab/cad.jpg',
    examples: ['Draw it in CAD software.'],
    collocations: ['CAD software', 'CAD drawing', 'CAD design'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_230',
    word: 'CAM',
    ipa: '/kæm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Computer-Aided Manufacturing',
        example: 'Use CAM for toolpath generation.',
        turkishMeaning: 'CAM'
      }
    ],
    imageUrl: '/images/vocab/cam.jpg',
    examples: ['Use CAM for toolpath generation.'],
    collocations: ['CAM software', 'CAM programming', 'CAD/CAM system'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'manufacturing'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_231',
    word: 'lean manufacturing',
    ipa: '/liːn ˌmænjuˈfæktʃərɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Waste reduction methodology',
        example: 'We implement lean manufacturing.',
        turkishMeaning: 'yalın üretim'
      }
    ],
    imageUrl: '/images/vocab/lean-manufacturing.jpg',
    examples: ['We implement lean manufacturing.'],
    collocations: ['lean manufacturing principles', 'lean manufacturing system', 'lean production'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'manufacturing'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_232',
    word: 'Six Sigma',
    ipa: '/sɪks ˈsɪɡmə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Quality improvement methodology',
        example: 'Six Sigma reduces defects.',
        turkishMeaning: 'Six Sigma'
      }
    ],
    imageUrl: '/images/vocab/six-sigma.jpg',
    examples: ['Six Sigma reduces defects.'],
    collocations: ['Six Sigma certification', 'Six Sigma project', 'Six Sigma methodology'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical', 'safety'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_233',
    word: 'Kaizen',
    ipa: '/ˈkaɪzen/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Continuous improvement philosophy',
        example: 'Kaizen drives daily improvements.',
        turkishMeaning: 'Kaizen'
      }
    ],
    imageUrl: '/images/vocab/kaizen.jpg',
    examples: ['Kaizen drives daily improvements.'],
    collocations: ['Kaizen event', 'Kaizen approach', 'Kaizen methodology'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_234',
    word: '5S',
    ipa: '/faɪv es/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Workplace organization method',
        example: 'Implement 5S in the workshop.',
        turkishMeaning: '5S'
      }
    ],
    imageUrl: '/images/vocab/5s.jpg',
    examples: ['Implement 5S in the workshop.'],
    collocations: ['5S methodology', '5S implementation', '5S audit'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_235',
    word: 'Just-in-time',
    ipa: '/ˌdʒʌst ɪn ˈtaɪm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Production on demand',
        example: 'Just-in-time reduces inventory.',
        turkishMeaning: 'tam zamanında'
      }
    ],
    imageUrl: '/images/vocab/just-in-time.jpg',
    examples: ['Just-in-time reduces inventory.'],
    collocations: ['Just-in-time production', 'Just-in-time delivery', 'JIT system'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_236',
    word: 'quality control',
    ipa: '/ˈkwɒləti kənˈtrəʊl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Process ensuring standards',
        example: 'Quality control is essential.',
        turkishMeaning: 'kalite kontrol'
      }
    ],
    imageUrl: '/images/vocab/quality-control.jpg',
    examples: ['Quality control is essential.'],
    collocations: ['quality control inspector', 'quality control process', 'quality control standards'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'safety'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_237',
    word: 'inspection',
    ipa: '/ɪnˈspekʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Careful examination',
        example: 'Perform final inspection.',
        turkishMeaning: 'muayene'
      }
    ],
    imageUrl: '/images/vocab/inspection.jpg',
    examples: ['Perform final inspection.'],
    collocations: ['visual inspection', 'inspection report', 'quality inspection'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_238',
    word: 'defect',
    ipa: '/ˈdiːfekt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Fault or imperfection',
        example: 'Report any defects immediately.',
        turkishMeaning: 'hata, kusur'
      }
    ],
    imageUrl: '/images/vocab/defect.jpg',
    examples: ['Report any defects immediately.'],
    collocations: ['defect rate', 'manufacturing defect', 'detect defect'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_239',
    word: 'specification',
    ipa: '/ˌspesɪfɪˈkeɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Detailed requirement',
        example: 'Check the technical specification.',
        turkishMeaning: 'şartname'
      }
    ],
    imageUrl: '/images/vocab/specification.jpg',
    examples: ['Check the technical specification.'],
    collocations: ['technical specification', 'product specification', 'specification sheet'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_240',
    word: 'documentation',
    ipa: '/ˌdɒkjumenˈteɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Written technical information',
        example: 'Maintain proper documentation.',
        turkishMeaning: 'dokümantasyon'
      }
    ],
    imageUrl: '/images/vocab/documentation.jpg',
    examples: ['Maintain proper documentation.'],
    collocations: ['technical documentation', 'documentation process', 'documentation requirements'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_241',
    word: 'maintenance',
    ipa: '/ˈmeɪntənəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Keeping equipment functional',
        example: 'Schedule preventive maintenance.',
        turkishMeaning: 'bakım'
      }
    ],
    imageUrl: '/images/vocab/maintenance.jpg',
    examples: ['Schedule preventive maintenance.'],
    collocations: ['preventive maintenance', 'maintenance schedule', 'maintenance engineer'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_242',
    word: 'troubleshooting',
    ipa: '/ˈtrʌblʃuːtɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Finding and fixing problems',
        example: 'Use the troubleshooting guide.',
        turkishMeaning: 'arıza tespiti'
      }
    ],
    imageUrl: '/images/vocab/troubleshooting.jpg',
    examples: ['Use the troubleshooting guide.'],
    collocations: ['troubleshooting guide', 'troubleshooting process', 'troubleshooting steps'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_243',
    word: 'overhaul',
    ipa: '/ˈəʊvəhɔːl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Complete examination and repair',
        example: 'The engine needs an overhaul.',
        turkishMeaning: 'kapsamlı bakım'
      }
    ],
    imageUrl: '/images/vocab/overhaul.jpg',
    examples: ['The engine needs an overhaul.'],
    collocations: ['major overhaul', 'overhaul procedure', 'complete overhaul'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_244',
    word: 'retrofit',
    ipa: '/ˈretrəʊfɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Add new features to old equipment',
        example: 'We retrofit old machines.',
        turkishMeaning: 'modernizasyon'
      }
    ],
    imageUrl: '/images/vocab/retrofit.jpg',
    examples: ['We retrofit old machines.'],
    collocations: ['retrofit kit', 'retrofit installation', 'retrofit upgrade'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_245',
    word: 'commissioning',
    ipa: '/kəˈmɪʃənɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Testing before operation',
        example: 'Commissioning starts next week.',
        turkishMeaning: 'devreye alma'
      }
    ],
    imageUrl: '/images/vocab/commissioning.jpg',
    examples: ['Commissioning starts next week.'],
    collocations: ['commissioning process', 'commissioning test', 'commissioning phase'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_246',
    word: 'decommissioning',
    ipa: '/ˌdiːkəˈmɪʃənɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Taking equipment out of service',
        example: 'Plan the decommissioning carefully.',
        turkishMeaning: 'devre dışı bırakma'
      }
    ],
    imageUrl: '/images/vocab/decommissioning.jpg',
    examples: ['Plan the decommissioning carefully.'],
    collocations: ['decommissioning process', 'decommissioning plan', 'safe decommissioning'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_247',
    word: 'efficiency',
    ipa: '/ɪˈfɪʃənsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Output versus input ratio',
        example: 'Improve the system efficiency.',
        turkishMeaning: 'verimlilik'
      }
    ],
    imageUrl: '/images/vocab/efficiency.jpg',
    examples: ['Improve the system efficiency.'],
    collocations: ['energy efficiency', 'efficiency improvement', 'high efficiency'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_248',
    word: 'optimization',
    ipa: '/ˌɒptɪmaɪˈzeɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Making most effective',
        example: 'Focus on process optimization.',
        turkishMeaning: 'optimizasyon'
      }
    ],
    imageUrl: '/images/vocab/optimization.jpg',
    examples: ['Focus on process optimization.'],
    collocations: ['process optimization', 'optimization technique', 'performance optimization'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_249',
    word: 'throughput',
    ipa: '/ˈθruːpʊt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Amount processed per time',
        example: 'Increase the production throughput.',
        turkishMeaning: 'üretim hızı'
      }
    ],
    imageUrl: '/images/vocab/throughput.jpg',
    examples: ['Increase the production throughput.'],
    collocations: ['production throughput', 'throughput rate', 'maximum throughput'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_250',
    word: 'downtime',
    ipa: '/ˈdaʊntaɪm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Period when not operating',
        example: 'Minimize equipment downtime.',
        turkishMeaning: 'arıza süresi'
      }
    ],
    imageUrl: '/images/vocab/downtime.jpg',
    examples: ['Minimize equipment downtime.'],
    collocations: ['reduce downtime', 'downtime cost', 'unplanned downtime'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_251',
    word: 'bottleneck',
    ipa: '/ˈbɒtlnek/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Point limiting flow',
        example: 'Identify the production bottleneck.',
        turkishMeaning: 'darboğaz'
      }
    ],
    imageUrl: '/images/vocab/bottleneck.jpg',
    examples: ['Identify the production bottleneck.'],
    collocations: ['production bottleneck', 'bottleneck analysis', 'eliminate bottleneck'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['technical'],
    category: 'technical'
  },
    {
    id: 'vocab_tech_252',
    word: 'capacity',
    ipa: '/kəˈpæsəti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Maximum output ability',
        example: 'The plant runs at full capacity.',
        turkishMeaning: 'kapasite'
      }
    ],
    imageUrl: '/images/vocab/capacity.jpg',
    examples: ['The plant runs at full capacity.'],
    collocations: ['production capacity', 'maximum capacity', 'capacity utilization'],
    synonyms: ['capability', 'volume'],
    antonyms: [],
    difficulty: 'B1',
    tags: ['technical', 'logistics'],
    category: 'technical'
  },

  // ==================== BATCH 8: 100 BUSINESS WORDS - SEMI-TRAILER SALES & PROJECTS ====================

    {
    id: 'vocab_business_143',
    word: 'quotation',
    ipa: '/kwəʊˈteɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Formal price offer',
        example: 'We sent you a quotation yesterday.',
        turkishMeaning: 'fiyat teklifi'
      }
    ],
    imageUrl: '/images/vocab/quotation.jpg',
    examples: ['We sent you a quotation yesterday.'],
    collocations: ['request quotation', 'quotation price', 'final quotation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_144',
    word: 'proposal',
    ipa: '/prəˈpəʊzəl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Business offer or plan',
        example: 'Please review our proposal.',
        turkishMeaning: 'teklif, öneri'
      }
    ],
    imageUrl: '/images/vocab/proposal.jpg',
    examples: ['Please review our proposal.'],
    collocations: ['business proposal', 'project proposal', 'submit proposal'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_145',
    word: 'bid',
    ipa: '/bɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Competitive price offer',
        example: 'We are bidding for this project.',
        turkishMeaning: 'teklif vermek'
      }
    ],
    imageUrl: '/images/vocab/bid.jpg',
    examples: ['We are bidding for this project.'],
    collocations: ['submit bid', 'winning bid', 'bid price'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_146',
    word: 'terms and conditions',
    ipa: '/tɜːmz ənd kənˈdɪʃənz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Agreement rules',
        example: 'Please read the terms and conditions.',
        turkishMeaning: 'şartlar ve koşullar'
      }
    ],
    imageUrl: '/images/vocab/terms-conditions.jpg',
    examples: ['Please read the terms and conditions.'],
    collocations: ['accept terms', 'terms and conditions apply', 'payment terms'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_147',
    word: 'payment terms',
    ipa: '/ˈpeɪmənt tɜːmz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Agreed payment conditions',
        example: 'Our payment terms are 30 days net.',
        turkishMeaning: 'ödeme şartları'
      }
    ],
    imageUrl: '/images/vocab/payment-terms.jpg',
    examples: ['Our payment terms are 30 days net.'],
    collocations: ['payment terms agreement', 'flexible payment terms', 'standard payment terms'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'contracts', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_148',
    word: 'down payment',
    ipa: '/daʊn ˈpeɪmənt/',
    partOfSpeech: 'phrasal-verb',
    definitions: [
      {
        meaning: 'Initial partial payment',
        example: 'We require 30% down payment.',
        turkishMeaning: 'ön ödeme, kapora'
      }
    ],
    imageUrl: '/images/vocab/down-payment.jpg',
    examples: ['We require 30% down payment.'],
    collocations: ['down payment required', 'down payment amount', 'pay down payment'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_149',
    word: 'instalment',
    ipa: '/ɪnˈstɔːlmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Part of payment in series (British)',
        example: 'Payment in 12 monthly instalments.',
        turkishMeaning: 'taksit'
      }
    ],
    imageUrl: '/images/vocab/instalment.jpg',
    examples: ['Payment in 12 monthly instalments.'],
    collocations: ['monthly instalment', 'instalment plan', 'pay in instalments'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_150',
    word: 'deposit',
    ipa: '/dɪˈpɒzɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Money paid in advance',
        example: 'Please pay 20% deposit.',
        turkishMeaning: 'depozito, pey'
      }
    ],
    imageUrl: '/images/vocab/deposit.jpg',
    examples: ['Please pay 20% deposit.'],
    collocations: ['security deposit', 'deposit payment', 'refundable deposit'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_151',
    word: 'advance payment',
    ipa: '/ədˈvɑːns ˈpeɪmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Payment before delivery',
        example: 'We need advance payment.',
        turkishMeaning: 'peşin ödeme'
      }
    ],
    imageUrl: '/images/vocab/advance-payment.jpg',
    examples: ['We need advance payment.'],
    collocations: ['advance payment required', 'advance payment terms', 'request advance payment'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_152',
    word: 'credit terms',
    ipa: '/ˈkredɪt tɜːmz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Payment delay conditions',
        example: 'We offer 60-day credit terms.',
        turkishMeaning: 'kredi şartları'
      }
    ],
    imageUrl: '/images/vocab/credit-terms.jpg',
    examples: ['We offer 60-day credit terms.'],
    collocations: ['credit terms agreement', 'extend credit terms', 'credit terms approval'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_153',
    word: 'letter of credit',
    ipa: '/ˈletə əv ˈkredɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Bank payment guarantee',
        example: 'Payment by letter of credit.',
        turkishMeaning: 'akreditif'
      }
    ],
    imageUrl: '/images/vocab/letter-of-credit.jpg',
    examples: ['Payment by letter of credit.'],
    collocations: ['irrevocable letter of credit', 'open letter of credit', 'letter of credit terms'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
  {
    id: 'vocab_business_154',
    word: 'proforma invoice',
    ipa: '/prəʊˈfɔːmə ˈɪnvɔɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Preliminary bill',
        example: 'I\'ll send the proforma invoice today.',
        turkishMeaning: 'proforma fatura'
      }
    ],
    imageUrl: '/images/vocab/proforma-invoice.jpg',
    examples: ['I\'ll send the proforma invoice today.'],
    collocations: ['proforma invoice details', 'issue proforma invoice', 'proforma invoice number'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_155',
    word: 'commercial invoice',
    ipa: '/kəˈmɜːʃəl ˈɪnvɔɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Official bill for customs',
        example: 'Attach the commercial invoice.',
        turkishMeaning: 'ticari fatura'
      }
    ],
    imageUrl: '/images/vocab/commercial-invoice.jpg',
    examples: ['Attach the commercial invoice.'],
    collocations: ['commercial invoice copy', 'commercial invoice value', 'customs commercial invoice'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_156',
    word: 'purchase order',
    ipa: '/ˈpɜːtʃəs ˈɔːdə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Official buying document',
        example: 'Please send your purchase order.',
        turkishMeaning: 'satın alma siparişi'
      }
    ],
    imageUrl: '/images/vocab/purchase-order.jpg',
    examples: ['Please send your purchase order.'],
    collocations: ['purchase order number', 'issue purchase order', 'purchase order confirmation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_business_157',
    word: 'sales order',
    ipa: '/seɪlz ˈɔːdə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Seller\'s order confirmation',
        example: 'The sales order is confirmed.',
        turkishMeaning: 'satış siparişi'
      }
    ],
    imageUrl: '/images/vocab/sales-order.jpg',
    examples: ['The sales order is confirmed.'],
    collocations: ['sales order confirmation', 'sales order number', 'process sales order'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_158',
    word: 'delivery note',
    ipa: '/dɪˈlɪvəri nəʊt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Document with shipment',
        example: 'Sign the delivery note please.',
        turkishMeaning: 'teslimat belgesi'
      }
    ],
    imageUrl: '/images/vocab/delivery-note.jpg',
    examples: ['Sign the delivery note please.'],
    collocations: ['delivery note copy', 'signed delivery note', 'delivery note number'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_159',
    word: 'packing list',
    ipa: '/ˈpækɪŋ lɪst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Shipment contents document',
        example: 'Check the packing list.',
        turkishMeaning: 'paketleme listesi'
      }
    ],
    imageUrl: '/images/vocab/packing-list.jpg',
    examples: ['Check the packing list.'],
    collocations: ['detailed packing list', 'packing list attached', 'packing list items'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_160',
    word: 'bill of lading',
    ipa: '/bɪl əv ˈleɪdɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Shipping document',
        example: 'The bill of lading is ready.',
        turkishMeaning: 'konşimento'
      }
    ],
    imageUrl: '/images/vocab/bill-of-lading.jpg',
    examples: ['The bill of lading is ready.'],
    collocations: ['bill of lading copy', 'original bill of lading', 'bill of lading number'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_161',
    word: 'certificate of origin',
    ipa: '/səˌtɪfɪkət əv ˈɒrɪdʒɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Product origin document',
        example: 'Provide certificate of origin.',
        turkishMeaning: 'menşe belgesi'
      }
    ],
    imageUrl: '/images/vocab/certificate-of-origin.jpg',
    examples: ['Provide certificate of origin.'],
    collocations: ['certificate of origin required', 'certificate of origin copy', 'issue certificate of origin'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_162',
    word: 'warranty certificate',
    ipa: '/ˈwɒrənti səˌtɪfɪkət/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Guarantee document',
        example: 'Keep your warranty certificate.',
        turkishMeaning: 'garanti belgesi'
      }
    ],
    imageUrl: '/images/vocab/warranty-certificate.jpg',
    examples: ['Keep your warranty certificate.'],
    collocations: ['warranty certificate copy', 'warranty certificate valid', 'original warranty certificate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_163',
    word: 'specifications sheet',
    ipa: '/ˌspesɪfɪˈkeɪʃənz ʃiːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Technical details document',
        example: 'Review the specifications sheet.',
        turkishMeaning: 'teknik özellikler sayfası'
      }
    ],
    imageUrl: '/images/vocab/specifications-sheet.jpg',
    examples: ['Review the specifications sheet.'],
    collocations: ['product specifications sheet', 'technical specifications sheet', 'specifications sheet attached'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_164',
    word: 'lead time',
    ipa: '/liːd taɪm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Production and delivery period',
        example: 'The lead time is 8 weeks.',
        turkishMeaning: 'teslim süresi'
      }
    ],
    imageUrl: '/images/vocab/lead-time.jpg',
    examples: ['The lead time is 8 weeks.'],
    collocations: ['lead time estimate', 'production lead time', 'delivery lead time'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_165',
    word: 'delivery schedule',
    ipa: '/dɪˈlɪvəri ˈʃedjuːl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Planned delivery times',
        example: 'See the delivery schedule.',
        turkishMeaning: 'teslimat programı'
      }
    ],
    imageUrl: '/images/vocab/delivery-schedule.jpg',
    examples: ['See the delivery schedule.'],
    collocations: ['delivery schedule confirmed', 'delivery schedule changes', 'planned delivery schedule'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_166',
    word: 'shipment',
    ipa: '/ˈʃɪpmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Goods being transported',
        example: 'Your shipment is ready.',
        turkishMeaning: 'sevkiyat'
      }
    ],
    imageUrl: '/images/vocab/shipment.jpg',
    examples: ['Your shipment is ready.'],
    collocations: ['shipment tracking', 'shipment details', 'shipment arrival'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_167',
    word: 'freight',
    ipa: '/freɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Transport cost or cargo',
        example: 'Freight is included in price.',
        turkishMeaning: 'navlun, yük'
      }
    ],
    imageUrl: '/images/vocab/freight.jpg',
    examples: ['Freight is included in price.'],
    collocations: ['freight cost', 'freight charges', 'air freight'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_168',
    word: 'FOB',
    ipa: '/ˌef əʊ ˈbiː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Free On Board shipping term',
        example: 'Price is FOB Istanbul.',
        turkishMeaning: 'FOB (gemide teslim)'
      }
    ],
    imageUrl: '/images/vocab/fob.jpg',
    examples: ['Price is FOB Istanbul.'],
    collocations: ['FOB price', 'FOB terms', 'FOB delivery'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_169',
    word: 'CIF',
    ipa: '/ˌsiː aɪ ˈef/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cost Insurance Freight term',
        example: 'We quote CIF Hamburg.',
        turkishMeaning: 'CIF (sigorta navlun dahil)'
      }
    ],
    imageUrl: '/images/vocab/cif.jpg',
    examples: ['We quote CIF Hamburg.'],
    collocations: ['CIF price', 'CIF terms', 'CIF value'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_170',
    word: 'EXW',
    ipa: '/ˌiː eks ˈdʌbljuː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Ex Works shipping term',
        example: 'Price is EXW factory.',
        turkishMeaning: 'EXW (fabrika teslim)'
      }
    ],
    imageUrl: '/images/vocab/exw.jpg',
    examples: ['Price is EXW factory.'],
    collocations: ['EXW price', 'EXW terms', 'EXW delivery'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_171',
    word: 'Incoterms',
    ipa: '/ˈɪŋkəʊtɜːmz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'International trade terms',
        example: 'We use standard Incoterms.',
        turkishMeaning: 'uluslararası ticaret terimleri'
      }
    ],
    imageUrl: '/images/vocab/incoterms.jpg',
    examples: ['We use standard Incoterms.'],
    collocations: ['Incoterms rules', 'Incoterms 2020', 'Incoterms agreement'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_172',
    word: 'customs clearance',
    ipa: '/ˈkʌstəmz ˈklɪərəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Import/export authorization',
        example: 'Customs clearance takes 3 days.',
        turkishMeaning: 'gümrük muafiyeti'
      }
    ],
    imageUrl: '/images/vocab/customs-clearance.jpg',
    examples: ['Customs clearance takes 3 days.'],
    collocations: ['customs clearance process', 'customs clearance documents', 'customs clearance fee'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_173',
    word: 'import duty',
    ipa: '/ˈɪmpɔːt ˈdjuːti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Tax on imported goods',
        example: 'Import duty is 10%.',
        turkishMeaning: 'ithalat vergisi'
      }
    ],
    imageUrl: '/images/vocab/import-duty.jpg',
    examples: ['Import duty is 10%.'],
    collocations: ['import duty rate', 'import duty payment', 'import duty exemption'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_174',
    word: 'VAT',
    ipa: '/ˌviː eɪ ˈtiː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Value Added Tax (British)',
        example: 'Price excludes VAT.',
        turkishMeaning: 'KDV'
      }
    ],
    imageUrl: '/images/vocab/vat.jpg',
    examples: ['Price excludes VAT.'],
    collocations: ['VAT rate', 'VAT inclusive', 'VAT number'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_175',
    word: 'discount',
    ipa: '/ˈdɪskaʊnt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Price reduction',
        example: 'We offer 5% discount.',
        turkishMeaning: 'indirim'
      }
    ],
    imageUrl: '/images/vocab/discount.jpg',
    examples: ['We offer 5% discount.'],
    collocations: ['volume discount', 'discount rate', 'special discount'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_176',
    word: 'unit price',
    ipa: '/ˈjuːnɪt praɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Price per single item',
        example: 'The unit price is €25,000.',
        turkishMeaning: 'birim fiyat'
      }
    ],
    imageUrl: '/images/vocab/unit-price.jpg',
    examples: ['The unit price is €25,000.'],
    collocations: ['unit price calculation', 'unit price list', 'unit price discount'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_177',
    word: 'total cost',
    ipa: '/ˈtəʊtəl kɒst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Complete price amount',
        example: 'The total cost is €100,000.',
        turkishMeaning: 'toplam maliyet'
      }
    ],
    imageUrl: '/images/vocab/total-cost.jpg',
    examples: ['The total cost is €100,000.'],
    collocations: ['total cost breakdown', 'total cost estimate', 'total cost calculation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_178',
    word: 'net price',
    ipa: '/net praɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Price after deductions',
        example: 'Our net price is final.',
        turkishMeaning: 'net fiyat'
      }
    ],
    imageUrl: '/images/vocab/net-price.jpg',
    examples: ['Our net price is final.'],
    collocations: ['net price offer', 'net price calculation', 'net price list'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_179',
    word: 'gross price',
    ipa: '/ɡrəʊs praɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Price before deductions',
        example: 'Gross price includes all taxes.',
        turkishMeaning: 'brüt fiyat'
      }
    ],
    imageUrl: '/images/vocab/gross-price.jpg',
    examples: ['Gross price includes all taxes.'],
    collocations: ['gross price total', 'gross price calculation', 'gross price amount'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_180',
    word: 'price list',
    ipa: '/praɪs lɪst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Document showing prices',
        example: 'See attached price list.',
        turkishMeaning: 'fiyat listesi'
      }
    ],
    imageUrl: '/images/vocab/price-list.jpg',
    examples: ['See attached price list.'],
    collocations: ['current price list', 'price list 2025', 'updated price list'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_181',
    word: 'catalogue',
    ipa: '/ˈkætəlɒɡ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Product list with details (British)',
        example: 'Request our product catalogue.',
        turkishMeaning: 'katalog'
      }
    ],
    imageUrl: '/images/vocab/catalogue.jpg',
    examples: ['Request our product catalogue.'],
    collocations: ['product catalogue', 'catalogue request', 'digital catalogue'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_182',
    word: 'brochure',
    ipa: '/ˈbrəʊʃə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Promotional booklet',
        example: 'Download our brochure.',
        turkishMeaning: 'broşür'
      }
    ],
    imageUrl: '/images/vocab/brochure.jpg',
    examples: ['Download our brochure.'],
    collocations: ['product brochure', 'brochure download', 'brochure PDF'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_183',
    word: 'enquiry',
    ipa: '/ɪnˈkwaɪəri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Request for information (British)',
        example: 'Thank you for your enquiry.',
        turkishMeaning: 'talep, soru'
      }
    ],
    imageUrl: '/images/vocab/enquiry.jpg',
    examples: ['Thank you for your enquiry.'],
    collocations: ['product enquiry', 'enquiry form', 'respond to enquiry'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_business_184',
    word: 'follow-up',
    ipa: '/ˈfɒləʊ ʌp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Subsequent contact',
        example: 'I\'ll follow-up next week.',
        turkishMeaning: 'takip'
      }
    ],
    imageUrl: '/images/vocab/follow-up.jpg',
    examples: ['I\'ll follow-up next week.'],
    collocations: ['follow-up call', 'follow-up email', 'follow-up meeting'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_185',
    word: 'demonstration',
    ipa: '/ˌdemənˈstreɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Product showing',
        example: 'We can arrange a demonstration.',
        turkishMeaning: 'gösteri, demo'
      }
    ],
    imageUrl: '/images/vocab/demonstration.jpg',
    examples: ['We can arrange a demonstration.'],
    collocations: ['product demonstration', 'demonstration unit', 'live demonstration'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_186',
    word: 'trial period',
    ipa: '/ˈtraɪəl ˈpɪəriəd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Testing time',
        example: 'We offer 30-day trial period.',
        turkishMeaning: 'deneme süresi'
      }
    ],
    imageUrl: '/images/vocab/trial-period.jpg',
    examples: ['We offer 30-day trial period.'],
    collocations: ['trial period offer', 'trial period terms', 'extended trial period'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_187',
    word: 'after-sales service',
    ipa: '/ˈɑːftə seɪlz ˈsɜːvɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Post-purchase support',
        example: 'We provide excellent after-sales service.',
        turkishMeaning: 'satış sonrası servis'
      }
    ],
    imageUrl: '/images/vocab/after-sales-service.jpg',
    examples: ['We provide excellent after-sales service.'],
    collocations: ['after-sales service support', 'after-sales service team', 'after-sales service quality'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_188',
    word: 'spare parts',
    ipa: '/speə pɑːts/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Replacement components',
        example: 'Spare parts are always available.',
        turkishMeaning: 'yedek parçalar'
      }
    ],
    imageUrl: '/images/vocab/spare-parts.jpg',
    examples: ['Spare parts are always available.'],
    collocations: ['spare parts availability', 'spare parts stock', 'spare parts service'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_189',
    word: 'maintenance contract',
    ipa: '/ˈmeɪntənəns ˈkɒntrækt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Service agreement',
        example: 'Sign the maintenance contract.',
        turkishMeaning: 'bakım sözleşmesi'
      }
    ],
    imageUrl: '/images/vocab/maintenance-contract.jpg',
    examples: ['Sign the maintenance contract.'],
    collocations: ['maintenance contract terms', 'annual maintenance contract', 'maintenance contract renewal'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_190',
    word: 'trade-in',
    ipa: '/treɪd ɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Exchange old for discount',
        example: 'We accept trade-in vehicles.',
        turkishMeaning: 'takas'
      }
    ],
    imageUrl: '/images/vocab/trade-in.jpg',
    examples: ['We accept trade-in vehicles.'],
    collocations: ['trade-in value', 'trade-in offer', 'trade-in allowance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_191',
    word: 'testimonial',
    ipa: '/ˌtestɪˈməʊniəl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Customer recommendation',
        example: 'Read our customer testimonials.',
        turkishMeaning: 'referans mektubu'
      }
    ],
    imageUrl: '/images/vocab/testimonial.jpg',
    examples: ['Read our customer testimonials.'],
    collocations: ['customer testimonial', 'testimonial letter', 'video testimonial'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_192',
    word: 'reference',
    ipa: '/ˈrefrəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Customer recommendation contact',
        example: 'We can provide references.',
        turkishMeaning: 'referans'
      }
    ],
    imageUrl: '/images/vocab/reference.jpg',
    examples: ['We can provide references.'],
    collocations: ['customer reference', 'reference list', 'reference check'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_193',
    word: 'case study',
    ipa: '/keɪs ˈstʌdi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Detailed customer example',
        example: 'Download our case studies.',
        turkishMeaning: 'vaka çalışması'
      }
    ],
    imageUrl: '/images/vocab/case-study.jpg',
    examples: ['Download our case studies.'],
    collocations: ['case study example', 'case study report', 'customer case study'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_194',
    word: 'partnership',
    ipa: '/ˈpɑːtnəʃɪp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Business cooperation',
        example: 'We seek long-term partnership.',
        turkishMeaning: 'ortaklık'
      }
    ],
    imageUrl: '/images/vocab/partnership.jpg',
    examples: ['We seek long-term partnership.'],
    collocations: ['strategic partnership', 'partnership agreement', 'business partnership'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_195',
    word: 'dealership',
    ipa: '/ˈdiːləʃɪp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Authorized seller status',
        example: 'Apply for dealership.',
        turkishMeaning: 'bayilik'
      }
    ],
    imageUrl: '/images/vocab/dealership.jpg',
    examples: ['Apply for dealership.'],
    collocations: ['exclusive dealership', 'dealership agreement', 'dealership network'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_196',
    word: 'distributor',
    ipa: '/dɪˈstrɪbjətə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Regional seller',
        example: 'We need distributors in Europe.',
        turkishMeaning: 'distribütör'
      }
    ],
    imageUrl: '/images/vocab/distributor.jpg',
    examples: ['We need distributors in Europe.'],
    collocations: ['authorized distributor', 'distributor network', 'distributor agreement'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_197',
    word: 'exclusivity',
    ipa: '/ˌekskluːˈsɪvəti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Sole rights agreement',
        example: 'We offer exclusivity in your region.',
        turkishMeaning: 'münhasırlık'
      }
    ],
    imageUrl: '/images/vocab/exclusivity.jpg',
    examples: ['We offer exclusivity in your region.'],
    collocations: ['exclusivity agreement', 'exclusivity rights', 'exclusivity period'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_198',
    word: 'territory',
    ipa: '/ˈterətri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Sales region',
        example: 'Your territory is Eastern Europe.',
        turkishMeaning: 'bölge'
      }
    ],
    imageUrl: '/images/vocab/territory.jpg',
    examples: ['Your territory is Eastern Europe.'],
    collocations: ['sales territory', 'exclusive territory', 'territory rights'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_199',
    word: 'commission',
    ipa: '/kəˈmɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Sales percentage payment',
        example: 'Commission is 5% of sales.',
        turkishMeaning: 'komisyon'
      }
    ],
    imageUrl: '/images/vocab/commission.jpg',
    examples: ['Commission is 5% of sales.'],
    collocations: ['commission rate', 'sales commission', 'commission payment'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'sales', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_business_200',
    word: 'target',
    ipa: '/ˈtɑːɡɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Sales goal',
        example: 'Our annual target is 100 units.',
        turkishMeaning: 'hedef'
      }
    ],
    imageUrl: '/images/vocab/target.jpg',
    examples: ['Our annual target is 100 units.'],
    collocations: ['sales target', 'target achievement', 'target setting'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_201',
    word: 'milestone',
    ipa: '/ˈmaɪlstəʊn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Project achievement point',
        example: 'We reached an important milestone.',
        turkishMeaning: 'dönüm noktası'
      }
    ],
    imageUrl: '/images/vocab/milestone.jpg',
    examples: ['We reached an important milestone.'],
    collocations: ['project milestone', 'milestone payment', 'milestone achievement'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_202',
    word: 'deliverable',
    ipa: '/dɪˈlɪvərəbl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Project output item',
        example: 'List all project deliverables.',
        turkishMeaning: 'teslim edilebilir'
      }
    ],
    imageUrl: '/images/vocab/deliverable.jpg',
    examples: ['List all project deliverables.'],
    collocations: ['project deliverable', 'deliverable timeline', 'key deliverable'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_203',
    word: 'scope of work',
    ipa: '/skəʊp əv wɜːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Project tasks definition',
        example: 'Define the scope of work clearly.',
        turkishMeaning: 'iş kapsamı'
      }
    ],
    imageUrl: '/images/vocab/scope-of-work.jpg',
    examples: ['Define the scope of work clearly.'],
    collocations: ['scope of work agreement', 'scope of work document', 'scope of work changes'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_business_204',
    word: 'timeline',
    ipa: '/ˈtaɪmlaɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Project schedule',
        example: 'Here\'s the project timeline.',
        turkishMeaning: 'zaman çizelgesi'
      }
    ],
    imageUrl: '/images/vocab/timeline.jpg',
    examples: ['Here\'s the project timeline.'],
    collocations: ['project timeline', 'timeline schedule', 'timeline update'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_205',
    word: 'stakeholder',
    ipa: '/ˈsteɪkhəʊldə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Interested party',
        example: 'Inform all stakeholders.',
        turkishMeaning: 'paydaş'
      }
    ],
    imageUrl: '/images/vocab/stakeholder.jpg',
    examples: ['Inform all stakeholders.'],
    collocations: ['key stakeholder', 'stakeholder meeting', 'stakeholder engagement'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_206',
    word: 'handover',
    ipa: '/ˈhændəʊvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Transfer of responsibility',
        example: 'Schedule the project handover.',
        turkishMeaning: 'devir teslim'
      }
    ],
    imageUrl: '/images/vocab/handover.jpg',
    examples: ['Schedule the project handover.'],
    collocations: ['handover process', 'handover meeting', 'handover documents'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_207',
    word: 'phase',
    ipa: '/feɪz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Project stage',
        example: 'We completed phase one.',
        turkishMeaning: 'aşama'
      }
    ],
    imageUrl: '/images/vocab/phase.jpg',
    examples: ['We completed phase one.'],
    collocations: ['project phase', 'phase completion', 'next phase'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_208',
    word: 'approval',
    ipa: '/əˈpruːvəl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Official acceptance',
        example: 'We need your approval.',
        turkishMeaning: 'onay'
      }
    ],
    imageUrl: '/images/vocab/approval.jpg',
    examples: ['We need your approval.'],
    collocations: ['approval process', 'awaiting approval', 'final approval'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_209',
    word: 'sign-off',
    ipa: '/saɪn ɒf/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Final approval signature',
        example: 'Get client sign-off.',
        turkishMeaning: 'imza onayı'
      }
    ],
    imageUrl: '/images/vocab/sign-off.jpg',
    examples: ['Get client sign-off.'],
    collocations: ['project sign-off', 'sign-off document', 'awaiting sign-off'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_210',
    word: 'amendment',
    ipa: '/əˈmendmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Contract change',
        example: 'Contract amendment is required.',
        turkishMeaning: 'değişiklik'
      }
    ],
    imageUrl: '/images/vocab/amendment.jpg',
    examples: ['Contract amendment is required.'],
    collocations: ['contract amendment', 'amendment request', 'amendment approval'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_211',
    word: 'addendum',
    ipa: '/əˈdendəm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Contract addition',
        example: 'Sign the contract addendum.',
        turkishMeaning: 'ek'
      }
    ],
    imageUrl: '/images/vocab/addendum.jpg',
    examples: ['Sign the contract addendum.'],
    collocations: ['contract addendum', 'addendum agreement', 'addendum clause'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_212',
    word: 'clause',
    ipa: '/klɔːz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Contract provision',
        example: 'Read clause 5 carefully.',
        turkishMeaning: 'madde'
      }
    ],
    imageUrl: '/images/vocab/clause.jpg',
    examples: ['Read clause 5 carefully.'],
    collocations: ['contract clause', 'penalty clause', 'termination clause'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_213',
    word: 'penalty',
    ipa: '/ˈpenəlti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Fine for breach',
        example: 'Late delivery incurs penalty.',
        turkishMeaning: 'ceza'
      }
    ],
    imageUrl: '/images/vocab/penalty.jpg',
    examples: ['Late delivery incurs penalty.'],
    collocations: ['penalty clause', 'penalty fee', 'penalty payment'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_214',
    word: 'breach of contract',
    ipa: '/briːtʃ əv ˈkɒntrækt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Contract violation',
        example: 'This is breach of contract.',
        turkishMeaning: 'sözleşme ihlali'
      }
    ],
    imageUrl: '/images/vocab/breach-of-contract.jpg',
    examples: ['This is breach of contract.'],
    collocations: ['breach of contract claim', 'breach of contract penalty', 'material breach'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_215',
    word: 'termination',
    ipa: '/ˌtɜːmɪˈneɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Contract ending',
        example: 'Contract termination is possible.',
        turkishMeaning: 'fesih'
      }
    ],
    imageUrl: '/images/vocab/termination.jpg',
    examples: ['Contract termination is possible.'],
    collocations: ['contract termination', 'termination notice', 'termination clause'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_216',
    word: 'renewal',
    ipa: '/rɪˈnjuːəl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Contract extension',
        example: 'Contract renewal is automatic.',
        turkishMeaning: 'yenileme'
      }
    ],
    imageUrl: '/images/vocab/renewal.jpg',
    examples: ['Contract renewal is automatic.'],
    collocations: ['contract renewal', 'renewal terms', 'renewal option'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_217',
    word: 'confidentiality',
    ipa: '/ˌkɒnfɪdenʃiˈæləti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Information secrecy',
        example: 'Sign the confidentiality agreement.',
        turkishMeaning: 'gizlilik'
      }
    ],
    imageUrl: '/images/vocab/confidentiality.jpg',
    examples: ['Sign the confidentiality agreement.'],
    collocations: ['confidentiality agreement', 'confidentiality clause', 'maintain confidentiality'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_218',
    word: 'NDA',
    ipa: '/ˌen diː ˈeɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Non-Disclosure Agreement',
        example: 'Please sign the NDA.',
        turkishMeaning: 'gizlilik sözleşmesi'
      }
    ],
    imageUrl: '/images/vocab/nda.jpg',
    examples: ['Please sign the NDA.'],
    collocations: ['NDA agreement', 'sign NDA', 'NDA terms'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_219',
    word: 'compliance',
    ipa: '/kəmˈplaɪəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Following rules',
        example: 'Ensure regulatory compliance.',
        turkishMeaning: 'uyumluluk'
      }
    ],
    imageUrl: '/images/vocab/compliance.jpg',
    examples: ['Ensure regulatory compliance.'],
    collocations: ['compliance requirements', 'compliance certificate', 'regulatory compliance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_220',
    word: 'certification',
    ipa: '/ˌsɜːtɪfɪˈkeɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Official qualification',
        example: 'ISO certification is required.',
        turkishMeaning: 'belgelendirme'
      }
    ],
    imageUrl: '/images/vocab/certification.jpg',
    examples: ['ISO certification is required.'],
    collocations: ['quality certification', 'certification process', 'ISO certification'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_221',
    word: 'accreditation',
    ipa: '/əˌkredɪˈteɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Official authorization',
        example: 'We have full accreditation.',
        turkishMeaning: 'akreditasyon'
      }
    ],
    imageUrl: '/images/vocab/accreditation.jpg',
    examples: ['We have full accreditation.'],
    collocations: ['accreditation certificate', 'accreditation body', 'accreditation process'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_222',
    word: 'competitive advantage',
    ipa: '/kəmˌpetətɪv ədˈvɑːntɪdʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Business superiority',
        example: 'Our competitive advantage is quality.',
        turkishMeaning: 'rekabet avantajı'
      }
    ],
    imageUrl: '/images/vocab/competitive-advantage.jpg',
    examples: ['Our competitive advantage is quality.'],
    collocations: ['competitive advantage strategy', 'competitive advantage analysis', 'sustainable competitive advantage'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_223',
    word: 'value proposition',
    ipa: '/ˈvæljuː ˌprɒpəˈzɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Customer benefit offer',
        example: 'Our value proposition is clear.',
        turkishMeaning: 'değer teklifi'
      }
    ],
    imageUrl: '/images/vocab/value-proposition.jpg',
    examples: ['Our value proposition is clear.'],
    collocations: ['unique value proposition', 'value proposition statement', 'value proposition design'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_224',
    word: 'ROI',
    ipa: '/ˌɑːr əʊ ˈaɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Return On Investment',
        example: 'Calculate the ROI carefully.',
        turkishMeaning: 'yatırım getirisi'
      }
    ],
    imageUrl: '/images/vocab/roi.jpg',
    examples: ['Calculate the ROI carefully.'],
    collocations: ['ROI calculation', 'ROI analysis', 'positive ROI'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_225',
    word: 'payback period',
    ipa: '/ˈpeɪbæk ˈpɪəriəd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Investment recovery time',
        example: 'The payback period is 18 months.',
        turkishMeaning: 'geri ödeme süresi'
      }
    ],
    imageUrl: '/images/vocab/payback-period.jpg',
    examples: ['The payback period is 18 months.'],
    collocations: ['payback period calculation', 'short payback period', 'payback period analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_226',
    word: 'feasibility study',
    ipa: '/ˌfiːzəˈbɪləti ˈstʌdi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Project viability analysis',
        example: 'Complete the feasibility study.',
        turkishMeaning: 'fizibilite çalışması'
      }
    ],
    imageUrl: '/images/vocab/feasibility-study.jpg',
    examples: ['Complete the feasibility study.'],
    collocations: ['feasibility study report', 'feasibility study analysis', 'conduct feasibility study'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_227',
    word: 'risk assessment',
    ipa: '/rɪsk əˈsesmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Danger evaluation',
        example: 'Prepare risk assessment report.',
        turkishMeaning: 'risk değerlendirmesi'
      }
    ],
    imageUrl: '/images/vocab/risk-assessment.jpg',
    examples: ['Prepare risk assessment report.'],
    collocations: ['risk assessment process', 'risk assessment matrix', 'risk assessment report'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_228',
    word: 'contingency plan',
    ipa: '/kənˈtɪndʒənsi plæn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Backup strategy',
        example: 'We have a contingency plan.',
        turkishMeaning: 'yedek plan'
      }
    ],
    imageUrl: '/images/vocab/contingency-plan.jpg',
    examples: ['We have a contingency plan.'],
    collocations: ['contingency plan activation', 'contingency plan development', 'contingency plan strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_229',
    word: 'due diligence',
    ipa: '/djuː ˈdɪlɪdʒəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Thorough investigation',
        example: 'Conduct due diligence before purchase.',
        turkishMeaning: 'gerekli özen'
      }
    ],
    imageUrl: '/images/vocab/due-diligence.jpg',
    examples: ['Conduct due diligence before purchase.'],
    collocations: ['due diligence process', 'due diligence report', 'due diligence checklist'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_230',
    word: 'benchmark',
    ipa: '/ˈbentʃmɑːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Performance standard',
        example: 'Set clear benchmarks.',
        turkishMeaning: 'kıyaslama standardı'
      }
    ],
    imageUrl: '/images/vocab/benchmark.jpg',
    examples: ['Set clear benchmarks.'],
    collocations: ['benchmark performance', 'benchmark analysis', 'industry benchmark'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_231',
    word: 'KPI',
    ipa: '/ˌkeɪ piː ˈaɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Key Performance Indicator',
        example: 'Monitor all KPIs monthly.',
        turkishMeaning: 'temel performans göstergesi'
      }
    ],
    imageUrl: '/images/vocab/kpi.jpg',
    examples: ['Monitor all KPIs monthly.'],
    collocations: ['KPI tracking', 'KPI dashboard', 'KPI targets'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_232',
    word: 'SLA',
    ipa: '/ˌes el ˈeɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Service Level Agreement',
        example: 'Review the SLA terms.',
        turkishMeaning: 'hizmet seviyesi anlaşması'
      }
    ],
    imageUrl: '/images/vocab/sla.jpg',
    examples: ['Review the SLA terms.'],
    collocations: ['SLA agreement', 'SLA compliance', 'SLA monitoring'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'contracts'],
    category: 'business'
  },
    {
    id: 'vocab_business_233',
    word: 'upselling',
    ipa: '/ˈʌpselɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Selling higher value items',
        example: 'Focus on upselling opportunities.',
        turkishMeaning: 'üst satış'
      }
    ],
    imageUrl: '/images/vocab/upselling.jpg',
    examples: ['Focus on upselling opportunities.'],
    collocations: ['upselling strategy', 'upselling techniques', 'upselling success'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_234',
    word: 'cross-selling',
    ipa: '/krɒs ˈselɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Selling related products',
        example: 'Implement cross-selling strategy.',
        turkishMeaning: 'çapraz satış'
      }
    ],
    imageUrl: '/images/vocab/cross-selling.jpg',
    examples: ['Implement cross-selling strategy.'],
    collocations: ['cross-selling opportunities', 'cross-selling strategy', 'cross-selling products'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_235',
    word: 'retention',
    ipa: '/rɪˈtenʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Keeping customers',
        example: 'Customer retention is crucial.',
        turkishMeaning: 'elde tutma'
      }
    ],
    imageUrl: '/images/vocab/retention.jpg',
    examples: ['Customer retention is crucial.'],
    collocations: ['customer retention', 'retention rate', 'retention strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_236',
    word: 'churn rate',
    ipa: '/tʃɜːn reɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Customer loss percentage',
        example: 'Reduce the churn rate.',
        turkishMeaning: 'müşteri kaybı oranı'
      }
    ],
    imageUrl: '/images/vocab/churn-rate.jpg',
    examples: ['Reduce the churn rate.'],
    collocations: ['churn rate analysis', 'churn rate reduction', 'customer churn rate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_237',
    word: 'pipeline',
    ipa: '/ˈpaɪplaɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Potential sales list',
        example: 'Our sales pipeline is strong.',
        turkishMeaning: 'satış hattı'
      }
    ],
    imageUrl: '/images/vocab/pipeline.jpg',
    examples: ['Our sales pipeline is strong.'],
    collocations: ['sales pipeline', 'pipeline management', 'pipeline forecast'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_238',
    word: 'conversion rate',
    ipa: '/kənˈvɜːʃən reɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Success percentage',
        example: 'Improve conversion rate.',
        turkishMeaning: 'dönüşüm oranı'
      }
    ],
    imageUrl: '/images/vocab/conversion-rate.jpg',
    examples: ['Improve conversion rate.'],
    collocations: ['conversion rate optimization', 'conversion rate increase', 'conversion rate tracking'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_239',
    word: 'closing',
    ipa: '/ˈkləʊzɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Finalizing sale',
        example: 'Work on closing the deal.',
        turkishMeaning: 'satış kapama'
      }
    ],
    imageUrl: '/images/vocab/closing.jpg',
    examples: ['Work on closing the deal.'],
    collocations: ['closing techniques', 'closing deal', 'closing rate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_240',
    word: 'cold calling',
    ipa: '/kəʊld ˈkɔːlɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Unsolicited sales contact',
        example: 'Cold calling requires skill.',
        turkishMeaning: 'soğuk arama'
      }
    ],
    imageUrl: '/images/vocab/cold-calling.jpg',
    examples: ['Cold calling requires skill.'],
    collocations: ['cold calling strategy', 'cold calling techniques', 'cold calling success'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_business_241',
    word: 'networking',
    ipa: '/ˈnetwɜːkɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Building business relationships',
        example: 'Networking events are valuable.',
        turkishMeaning: 'iş ağı kurma'
      }
    ],
    imageUrl: '/images/vocab/networking.jpg',
    examples: ['Networking events are valuable.'],
    collocations: ['business networking', 'networking event', 'networking opportunities'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_business_242',
    word: 'B2B',
    ipa: '/ˌbiː tuː ˈbiː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Business to Business',
        example: 'We focus on B2B sales.',
        turkishMeaning: 'işletmeler arası'
      }
    ],
    imageUrl: '/images/vocab/b2b.jpg',
    examples: ['We focus on B2B sales.'],
    collocations: ['B2B sales', 'B2B market', 'B2B customer'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },

  // ==================== BATCH 9: 100 BUSINESS DINING WORDS ====================

    {
    id: 'vocab_dining_001',
    word: 'reservation',
    ipa: '/ˌrezəˈveɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Booking a table in advance',
        example: 'I made a reservation for four people.',
        turkishMeaning: 'rezervasyon'
      }
    ],
    imageUrl: '/images/vocab/reservation.jpg',
    examples: ['I made a reservation for four people.'],
    collocations: ['make reservation', 'book reservation', 'reservation confirmed'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_002',
    word: 'table',
    ipa: '/ˈteɪbəl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Dining surface in restaurant',
        example: 'We have a table by the window.',
        turkishMeaning: 'masa'
      }
    ],
    imageUrl: '/images/vocab/table.jpg',
    examples: ['We have a table by the window.'],
    collocations: ['reserve table', 'table for two', 'window table'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_003',
    word: 'menu',
    ipa: '/ˈmenjuː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'List of available dishes',
        example: 'May I see the menu, please?',
        turkishMeaning: 'menü'
      }
    ],
    imageUrl: '/images/vocab/menu.jpg',
    examples: ['May I see the menu, please?'],
    collocations: ['lunch menu', 'set menu', 'à la carte menu'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_004',
    word: 'waiter',
    ipa: '/ˈweɪtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Male server in restaurant',
        example: 'The waiter brought our drinks.',
        turkishMeaning: 'garson'
      }
    ],
    imageUrl: '/images/vocab/waiter.jpg',
    examples: ['The waiter brought our drinks.'],
    collocations: ['call waiter', 'waiter service', 'experienced waiter'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_005',
    word: 'waitress',
    ipa: '/ˈweɪtrəs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Female server in restaurant',
        example: 'The waitress recommended the fish.',
        turkishMeaning: 'garson (bayan)'
      }
    ],
    imageUrl: '/images/vocab/waitress.jpg',
    examples: ['The waitress recommended the fish.'],
    collocations: ['friendly waitress', 'waitress service', 'call waitress'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_006',
    word: 'appetizer',
    ipa: '/ˈæpɪtaɪzə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Small dish before main course',
        example: 'Would you like an appetizer?',
        turkishMeaning: 'meze, başlangıç'
      }
    ],
    imageUrl: '/images/vocab/appetizer.jpg',
    examples: ['Would you like an appetizer?'],
    collocations: ['cold appetizer', 'hot appetizer', 'share appetizer'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_007',
    word: 'starter',
    ipa: '/ˈstɑːtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'First course of meal',
        example: 'The soup is a lovely starter.',
        turkishMeaning: 'başlangıç yemeği'
      }
    ],
    imageUrl: '/images/vocab/starter.jpg',
    examples: ['The soup is a lovely starter.'],
    collocations: ['light starter', 'traditional starter', 'starter selection'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_008',
    word: 'main course',
    ipa: '/meɪn kɔːs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Principal dish of meal',
        example: 'For my main course, I\'ll have the steak.',
        turkishMeaning: 'ana yemek'
      }
    ],
    imageUrl: '/images/vocab/main-course.jpg',
    examples: ['For my main course, I\'ll have the steak.'],
    collocations: ['main course selection', 'main course option', 'main course special'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_009',
    word: 'dessert',
    ipa: '/dɪˈzɜːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Sweet course after main meal',
        example: 'Would you like to see the dessert menu?',
        turkishMeaning: 'tatlı'
      }
    ],
    imageUrl: '/images/vocab/dessert.jpg',
    examples: ['Would you like to see the dessert menu?'],
    collocations: ['dessert menu', 'chocolate dessert', 'skip dessert'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_010',
    word: 'beverage',
    ipa: '/ˈbevərɪdʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Drink of any type',
        example: 'What beverage would you prefer?',
        turkishMeaning: 'içecek'
      }
    ],
    imageUrl: '/images/vocab/beverage.jpg',
    examples: ['What beverage would you prefer?'],
    collocations: ['alcoholic beverage', 'soft beverage', 'beverage menu'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_011',
    word: 'wine',
    ipa: '/waɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Alcoholic drink from grapes',
        example: 'Would you like red or white wine?',
        turkishMeaning: 'şarap'
      }
    ],
    imageUrl: '/images/vocab/wine.jpg',
    examples: ['Would you like red or white wine?'],
    collocations: ['wine list', 'house wine', 'wine pairing'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_012',
    word: 'cocktail',
    ipa: '/ˈkɒkteɪl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Mixed alcoholic drink',
        example: 'Shall we start with cocktails?',
        turkishMeaning: 'kokteyl'
      }
    ],
    imageUrl: '/images/vocab/cocktail.jpg',
    examples: ['Shall we start with cocktails?'],
    collocations: ['cocktail bar', 'signature cocktail', 'cocktail hour'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_013',
    word: 'soft drink',
    ipa: '/sɒft drɪŋk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Non-alcoholic beverage',
        example: 'I\'ll have a soft drink, please.',
        turkishMeaning: 'alkolsüz içecek'
      }
    ],
    imageUrl: '/images/vocab/soft-drink.jpg',
    examples: ['I\'ll have a soft drink, please.'],
    collocations: ['soft drink selection', 'soft drink option', 'order soft drink'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_014',
    word: 'bill',
    ipa: '/bɪl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Payment request for meal',
        example: 'Could we have the bill, please?',
        turkishMeaning: 'hesap'
      }
    ],
    imageUrl: '/images/vocab/bill.jpg',
    examples: ['Could we have the bill, please?'],
    collocations: ['ask for bill', 'pay bill', 'split bill'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_dining_015',
    word: 'tip',
    ipa: '/tɪp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Extra money for service',
        example: 'We left a generous tip.',
        turkishMeaning: 'bahşiş'
      }
    ],
    imageUrl: '/images/vocab/tip.jpg',
    examples: ['We left a generous tip.'],
    collocations: ['leave tip', 'generous tip', 'tip included'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_016',
    word: 'service charge',
    ipa: '/ˈsɜːvɪs tʃɑːdʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Mandatory fee for service',
        example: 'Is service charge included?',
        turkishMeaning: 'servis ücreti'
      }
    ],
    imageUrl: '/images/vocab/service-charge.jpg',
    examples: ['Is service charge included?'],
    collocations: ['service charge included', 'service charge added', 'service charge rate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_017',
    word: 'napkin',
    ipa: '/ˈnæpkɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cloth for wiping during meal',
        example: 'Place your napkin on your lap.',
        turkishMeaning: 'peçete'
      }
    ],
    imageUrl: '/images/vocab/napkin.jpg',
    examples: ['Place your napkin on your lap.'],
    collocations: ['cloth napkin', 'paper napkin', 'napkin holder'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_018',
    word: 'cutlery',
    ipa: '/ˈkʌtləri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Knives, forks, and spoons',
        example: 'The cutlery is laid out properly.',
        turkishMeaning: 'çatal bıçak takımı'
      }
    ],
    imageUrl: '/images/vocab/cutlery.jpg',
    examples: ['The cutlery is laid out properly.'],
    collocations: ['cutlery set', 'silver cutlery', 'clean cutlery'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_019',
    word: 'fork',
    ipa: '/fɔːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Eating utensil with prongs',
        example: 'Use the smaller fork for salad.',
        turkishMeaning: 'çatal'
      }
    ],
    imageUrl: '/images/vocab/fork.jpg',
    examples: ['Use the smaller fork for salad.'],
    collocations: ['salad fork', 'dinner fork', 'fork and knife'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_020',
    word: 'knife',
    ipa: '/naɪf/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cutting utensil',
        example: 'The steak knife is very sharp.',
        turkishMeaning: 'bıçak'
      }
    ],
    imageUrl: '/images/vocab/knife.jpg',
    examples: ['The steak knife is very sharp.'],
    collocations: ['steak knife', 'butter knife', 'sharp knife'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_021',
    word: 'spoon',
    ipa: '/spuːn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Utensil for liquids',
        example: 'You\'ll need a spoon for the soup.',
        turkishMeaning: 'kaşık'
      }
    ],
    imageUrl: '/images/vocab/spoon.jpg',
    examples: ['You\'ll need a spoon for the soup.'],
    collocations: ['soup spoon', 'tea spoon', 'dessert spoon'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_022',
    word: 'plate',
    ipa: '/pleɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Flat dish for food',
        example: 'The food is served on warm plates.',
        turkishMeaning: 'tabak'
      }
    ],
    imageUrl: '/images/vocab/plate.jpg',
    examples: ['The food is served on warm plates.'],
    collocations: ['dinner plate', 'side plate', 'clean plate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_023',
    word: 'glass',
    ipa: '/ɡlɑːs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Drinking vessel',
        example: 'May I have a glass of water?',
        turkishMeaning: 'bardak'
      }
    ],
    imageUrl: '/images/vocab/glass.jpg',
    examples: ['May I have a glass of water?'],
    collocations: ['wine glass', 'water glass', 'raise glass'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_024',
    word: 'toast',
    ipa: '/təʊst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Celebratory drinking ritual',
        example: 'Let me propose a toast to our success.',
        turkishMeaning: 'kadeh kaldırma'
      }
    ],
    imageUrl: '/images/vocab/toast.jpg',
    examples: ['Let me propose a toast to our success.'],
    collocations: ['propose toast', 'make toast', 'toast success'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_025',
    word: 'cheers',
    ipa: '/tʃɪəz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Expression when toasting',
        example: 'Cheers to our partnership!',
        turkishMeaning: 'şerefe'
      }
    ],
    imageUrl: '/images/vocab/cheers.jpg',
    examples: ['Cheers to our partnership!'],
    collocations: ['say cheers', 'cheers everyone', 'cheers mate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_026',
    word: 'recommend',
    ipa: '/ˌrekəˈmend/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Suggest something favorably',
        example: 'What would you recommend?',
        turkishMeaning: 'önermek, tavsiye etmek'
      }
    ],
    imageUrl: '/images/vocab/recommend.jpg',
    examples: ['What would you recommend?'],
    collocations: ['highly recommend', 'recommend dish', 'recommend restaurant'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_027',
    word: 'suggest',
    ipa: '/səˈdʒest/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Put forward for consideration',
        example: 'May I suggest the lamb?',
        turkishMeaning: 'önermek'
      }
    ],
    imageUrl: '/images/vocab/suggest.jpg',
    examples: ['May I suggest the lamb?'],
    collocations: ['suggest option', 'suggest alternative', 'suggest restaurant'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_028',
    word: 'order',
    ipa: '/ˈɔːdə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Request food or drink',
        example: 'Are you ready to order?',
        turkishMeaning: 'sipariş vermek'
      }
    ],
    imageUrl: '/images/vocab/order.jpg',
    examples: ['Are you ready to order?'],
    collocations: ['place order', 'take order', 'order meal'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_029',
    word: 'chef',
    ipa: '/ʃef/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Professional cook',
        example: 'The chef prepares excellent dishes.',
        turkishMeaning: 'şef'
      }
    ],
    imageUrl: '/images/vocab/chef.jpg',
    examples: ['The chef prepares excellent dishes.'],
    collocations: ['head chef', 'chef special', 'chef recommendation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_030',
    word: 'sommelier',
    ipa: '/ˌsɒməlˈjeɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Wine expert and server',
        example: 'Ask the sommelier for wine pairing.',
        turkishMeaning: 'şarap uzmanı'
      }
    ],
    imageUrl: '/images/vocab/sommelier.jpg',
    examples: ['Ask the sommelier for wine pairing.'],
    collocations: ['consult sommelier', 'sommelier recommendation', 'sommelier service'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_031',
    word: 'delicious',
    ipa: '/dɪˈlɪʃəs/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Very tasty',
        example: 'This meal is absolutely delicious.',
        turkishMeaning: 'lezzetli'
      }
    ],
    imageUrl: '/images/vocab/delicious.jpg',
    examples: ['This meal is absolutely delicious.'],
    collocations: ['delicious food', 'delicious meal', 'absolutely delicious'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_032',
    word: 'tasty',
    ipa: '/ˈteɪsti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Having good flavor',
        example: 'The appetizer was very tasty.',
        turkishMeaning: 'lezzetli'
      }
    ],
    imageUrl: '/images/vocab/tasty.jpg',
    examples: ['The appetizer was very tasty.'],
    collocations: ['tasty dish', 'tasty food', 'very tasty'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_033',
    word: 'tender',
    ipa: '/ˈtendə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Soft and easy to chew',
        example: 'The meat is perfectly tender.',
        turkishMeaning: 'yumuşak'
      }
    ],
    imageUrl: '/images/vocab/tender.jpg',
    examples: ['The meat is perfectly tender.'],
    collocations: ['tender meat', 'tender chicken', 'perfectly tender'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_034',
    word: 'crispy',
    ipa: '/ˈkrɪspi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Firm and crunchy',
        example: 'The chips are nice and crispy.',
        turkishMeaning: 'çıtır'
      }
    ],
    imageUrl: '/images/vocab/crispy.jpg',
    examples: ['The chips are nice and crispy.'],
    collocations: ['crispy chips', 'crispy chicken', 'crispy vegetables'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_035',
    word: 'bland',
    ipa: '/blænd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Lacking flavor',
        example: 'This soup is rather bland.',
        turkishMeaning: 'tatsız'
      }
    ],
    imageUrl: '/images/vocab/bland.jpg',
    examples: ['This soup is rather bland.'],
    collocations: ['bland taste', 'bland food', 'rather bland'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_036',
    word: 'spicy',
    ipa: '/ˈspaɪsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Having hot flavor',
        example: 'Is this dish very spicy?',
        turkishMeaning: 'baharatlı, acı'
      }
    ],
    imageUrl: '/images/vocab/spicy.jpg',
    examples: ['Is this dish very spicy?'],
    collocations: ['spicy food', 'too spicy', 'mildly spicy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_037',
    word: 'grilled',
    ipa: '/ɡrɪld/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cooked over direct heat',
        example: 'I\'ll have the grilled salmon.',
        turkishMeaning: 'ızgara'
      }
    ],
    imageUrl: '/images/vocab/grilled.jpg',
    examples: ['I\'ll have the grilled salmon.'],
    collocations: ['grilled chicken', 'grilled fish', 'grilled vegetables'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_038',
    word: 'roasted',
    ipa: '/ˈrəʊstɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cooked in oven with dry heat',
        example: 'The roasted vegetables are lovely.',
        turkishMeaning: 'fırınlanmış'
      }
    ],
    imageUrl: '/images/vocab/roasted.jpg',
    examples: ['The roasted vegetables are lovely.'],
    collocations: ['roasted chicken', 'roasted potatoes', 'roasted lamb'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_039',
    word: 'fried',
    ipa: '/fraɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cooked in hot oil',
        example: 'Would you like fried or boiled?',
        turkishMeaning: 'kızarmış'
      }
    ],
    imageUrl: '/images/vocab/fried.jpg',
    examples: ['Would you like fried or boiled?'],
    collocations: ['fried chicken', 'fried fish', 'deep fried'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_040',
    word: 'steamed',
    ipa: '/stiːmd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cooked with steam',
        example: 'Steamed fish is healthier.',
        turkishMeaning: 'buğulanmış'
      }
    ],
    imageUrl: '/images/vocab/steamed.jpg',
    examples: ['Steamed fish is healthier.'],
    collocations: ['steamed vegetables', 'steamed fish', 'steamed rice'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_041',
    word: 'baked',
    ipa: '/beɪkt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Cooked in oven',
        example: 'Baked potatoes are a classic.',
        turkishMeaning: 'fırında pişmiş'
      }
    ],
    imageUrl: '/images/vocab/baked.jpg',
    examples: ['Baked potatoes are a classic.'],
    collocations: ['baked potato', 'baked salmon', 'freshly baked'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_042',
    word: 'sauce',
    ipa: '/sɔːs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Liquid seasoning for food',
        example: 'What sauce would you like?',
        turkishMeaning: 'sos'
      }
    ],
    imageUrl: '/images/vocab/sauce.jpg',
    examples: ['What sauce would you like?'],
    collocations: ['sauce option', 'special sauce', 'sauce on side'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_043',
    word: 'dressing',
    ipa: '/ˈdresɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Sauce for salad',
        example: 'Would you like dressing on your salad?',
        turkishMeaning: 'salata sosu'
      }
    ],
    imageUrl: '/images/vocab/dressing.jpg',
    examples: ['Would you like dressing on your salad?'],
    collocations: ['salad dressing', 'vinaigrette dressing', 'dressing on side'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_044',
    word: 'garnish',
    ipa: '/ˈɡɑːnɪʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Decorative food element',
        example: 'The dish comes with a garnish.',
        turkishMeaning: 'garnitür'
      }
    ],
    imageUrl: '/images/vocab/garnish.jpg',
    examples: ['The dish comes with a garnish.'],
    collocations: ['garnish plate', 'fresh garnish', 'decorative garnish'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_045',
    word: 'side dish',
    ipa: '/saɪd dɪʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Food served alongside main',
        example: 'Chips come as a side dish.',
        turkishMeaning: 'yan yemek'
      }
    ],
    imageUrl: '/images/vocab/side-dish.jpg',
    examples: ['Chips come as a side dish.'],
    collocations: ['side dish option', 'side dish selection', 'side dish included'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_046',
    word: 'portion',
    ipa: '/ˈpɔːʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Serving size',
        example: 'The portions are quite generous.',
        turkishMeaning: 'porsiyon'
      }
    ],
    imageUrl: '/images/vocab/portion.jpg',
    examples: ['The portions are quite generous.'],
    collocations: ['large portion', 'portion size', 'generous portion'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_047',
    word: 'vegetarian',
    ipa: '/ˌvedʒɪˈteəriən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Diet without meat',
        example: 'Do you have vegetarian options?',
        turkishMeaning: 'vejetaryen'
      }
    ],
    imageUrl: '/images/vocab/vegetarian.jpg',
    examples: ['Do you have vegetarian options?'],
    collocations: ['vegetarian option', 'vegetarian menu', 'vegetarian dish'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_048',
    word: 'vegan',
    ipa: '/ˈviːɡən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Diet without animal products',
        example: 'We offer vegan alternatives.',
        turkishMeaning: 'vegan'
      }
    ],
    imageUrl: '/images/vocab/vegan.jpg',
    examples: ['We offer vegan alternatives.'],
    collocations: ['vegan option', 'vegan menu', 'vegan friendly'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_049',
    word: 'allergy',
    ipa: '/ˈælədʒi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Food sensitivity',
        example: 'I have a nut allergy.',
        turkishMeaning: 'alerji'
      }
    ],
    imageUrl: '/images/vocab/allergy.jpg',
    examples: ['I have a nut allergy.'],
    collocations: ['food allergy', 'allergy information', 'nut allergy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_050',
    word: 'dietary requirements',
    ipa: '/ˈdaɪətəri rɪˈkwaɪəmənts/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Special food needs',
        example: 'Please inform us of any dietary requirements.',
        turkishMeaning: 'diyet gereksinimleri'
      }
    ],
    imageUrl: '/images/vocab/dietary-requirements.jpg',
    examples: ['Please inform us of any dietary requirements.'],
    collocations: ['dietary requirements met', 'special dietary requirements', 'dietary requirements information'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_051',
    word: 'host',
    ipa: '/həʊst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Person paying for meal',
        example: 'I\'ll be the host today.',
        turkishMeaning: 'ev sahibi'
      }
    ],
    imageUrl: '/images/vocab/host.jpg',
    examples: ['I\'ll be the host today.'],
    collocations: ['host dinner', 'host meal', 'host guest'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_052',
    word: 'guest',
    ipa: '/ɡest/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Person being hosted',
        example: 'We have two guests joining us.',
        turkishMeaning: 'misafir'
      }
    ],
    imageUrl: '/images/vocab/guest.jpg',
    examples: ['We have two guests joining us.'],
    collocations: ['welcome guest', 'guest arrival', 'special guest'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_053',
    word: 'treat',
    ipa: '/triːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Pay for someone\'s meal',
        example: 'Let me treat you to lunch.',
        turkishMeaning: 'ısmarlamak'
      }
    ],
    imageUrl: '/images/vocab/treat.jpg',
    examples: ['Let me treat you to lunch.'],
    collocations: ['treat someone', 'my treat', 'treat lunch'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_054',
    word: 'split the bill',
    ipa: '/splɪt ðə bɪl/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Share payment equally',
        example: 'Shall we split the bill?',
        turkishMeaning: 'hesabı bölüşmek'
      }
    ],
    imageUrl: '/images/vocab/split-bill.jpg',
    examples: ['Shall we split the bill?'],
    collocations: ['split bill evenly', 'split bill equally', 'prefer split bill'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
  {
    id: 'vocab_dining_055',
    word: 'go Dutch',
    ipa: '/ɡəʊ dʌtʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Each pay for own meal',
        example: 'Let\'s go Dutch on this one.',
        turkishMeaning: 'herkes kendi hesabını ödemek'
      }
    ],
    imageUrl: '/images/vocab/go-dutch.jpg',
    examples: ['Let\'s go Dutch on this one.'],
    collocations: ['go Dutch style', 'prefer go Dutch', 'go Dutch arrangement'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_056',
    word: 'fine dining',
    ipa: '/faɪn ˈdaɪnɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'High-quality restaurant experience',
        example: 'This is a fine dining establishment.',
        turkishMeaning: 'gurme yemek'
      }
    ],
    imageUrl: '/images/vocab/fine-dining.jpg',
    examples: ['This is a fine dining establishment.'],
    collocations: ['fine dining restaurant', 'fine dining experience', 'fine dining establishment'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_057',
    word: 'casual dining',
    ipa: '/ˈkæʒuəl ˈdaɪnɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Informal restaurant setting',
        example: 'It\'s a casual dining venue.',
        turkishMeaning: 'rahat yemek ortamı'
      }
    ],
    imageUrl: '/images/vocab/casual-dining.jpg',
    examples: ['It\'s a casual dining venue.'],
    collocations: ['casual dining restaurant', 'casual dining atmosphere', 'casual dining option'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_058',
    word: 'bistro',
    ipa: '/ˈbiːstrəʊ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Small informal restaurant',
        example: 'There\'s a nice bistro nearby.',
        turkishMeaning: 'bistro'
      }
    ],
    imageUrl: '/images/vocab/bistro.jpg',
    examples: ['There\'s a nice bistro nearby.'],
    collocations: ['French bistro', 'bistro style', 'bistro menu'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_059',
    word: 'brasserie',
    ipa: '/ˈbræsəri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'French-style restaurant',
        example: 'The brasserie serves excellent food.',
        turkishMeaning: 'brasserie'
      }
    ],
    imageUrl: '/images/vocab/brasserie.jpg',
    examples: ['The brasserie serves excellent food.'],
    collocations: ['French brasserie', 'brasserie style', 'brasserie cuisine'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_060',
    word: 'ambience',
    ipa: '/ˈæmbiəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Atmosphere of place',
        example: 'The ambience is very pleasant.',
        turkishMeaning: 'ortam, ambiyans'
      }
    ],
    imageUrl: '/images/vocab/ambience.jpg',
    examples: ['The ambience is very pleasant.'],
    collocations: ['pleasant ambience', 'ambience setting', 'romantic ambience'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_061',
    word: 'cuisine',
    ipa: '/kwɪˈziːn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Style of cooking',
        example: 'They serve Italian cuisine.',
        turkishMeaning: 'mutfak'
      }
    ],
    imageUrl: '/images/vocab/cuisine.jpg',
    examples: ['They serve Italian cuisine.'],
    collocations: ['Italian cuisine', 'French cuisine', 'local cuisine'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_062',
    word: 'specialty',
    ipa: '/ˈspeʃəlti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Restaurant\'s best dish',
        example: 'What\'s the house specialty?',
        turkishMeaning: 'özel yemek'
      }
    ],
    imageUrl: '/images/vocab/specialty.jpg',
    examples: ['What\'s the house specialty?'],
    collocations: ['house specialty', 'chef specialty', 'specialty dish'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_063',
    word: 'à la carte',
    ipa: '/ˌɑː lɑː ˈkɑːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Ordering individual items',
        example: 'You can order à la carte.',
        turkishMeaning: 'alakart'
      }
    ],
    imageUrl: '/images/vocab/a-la-carte.jpg',
    examples: ['You can order à la carte.'],
    collocations: ['à la carte menu', 'à la carte option', 'à la carte selection'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_064',
    word: 'set menu',
    ipa: '/set ˈmenjuː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Fixed-price meal selection',
        example: 'The set menu is excellent value.',
        turkishMeaning: 'sabit menü'
      }
    ],
    imageUrl: '/images/vocab/set-menu.jpg',
    examples: ['The set menu is excellent value.'],
    collocations: ['set menu option', 'set menu price', 'set menu choice'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_dining_065',
    word: 'tasting menu',
    ipa: '/ˈteɪstɪŋ ˈmenjuː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Multiple small courses',
        example: 'We offer a tasting menu.',
        turkishMeaning: 'tadım menüsü'
      }
    ],
    imageUrl: '/images/vocab/tasting-menu.jpg',
    examples: ['We offer a tasting menu.'],
    collocations: ['tasting menu experience', 'tasting menu option', 'chef tasting menu'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_066',
    word: 'course',
    ipa: '/kɔːs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Part of multi-dish meal',
        example: 'This is a five-course meal.',
        turkishMeaning: 'servis'
      }
    ],
    imageUrl: '/images/vocab/course.jpg',
    examples: ['This is a five-course meal.'],
    collocations: ['first course', 'main course', 'three-course meal'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_067',
    word: 'lunch',
    ipa: '/lʌntʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Midday meal',
        example: 'Shall we have lunch together?',
        turkishMeaning: 'öğle yemeği'
      }
    ],
    imageUrl: '/images/vocab/lunch.jpg',
    examples: ['Shall we have lunch together?'],
    collocations: ['business lunch', 'lunch meeting', 'lunch break'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_068',
    word: 'dinner',
    ipa: '/ˈdɪnə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Evening meal',
        example: 'Let\'s arrange a dinner meeting.',
        turkishMeaning: 'akşam yemeği'
      }
    ],
    imageUrl: '/images/vocab/dinner.jpg',
    examples: ['Let\'s arrange a dinner meeting.'],
    collocations: ['business dinner', 'dinner invitation', 'dinner reservation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_069',
    word: 'brunch',
    ipa: '/brʌntʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Late morning meal',
        example: 'We could meet for brunch.',
        turkishMeaning: 'geç kahvaltı'
      }
    ],
    imageUrl: '/images/vocab/brunch.jpg',
    examples: ['We could meet for brunch.'],
    collocations: ['Sunday brunch', 'brunch menu', 'brunch meeting'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_070',
    word: 'appetite',
    ipa: '/ˈæpɪtaɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Desire to eat',
        example: 'I hope you have a good appetite!',
        turkishMeaning: 'iştah'
      }
    ],
    imageUrl: '/images/vocab/appetite.jpg',
    examples: ['I hope you have a good appetite!'],
    collocations: ['good appetite', 'healthy appetite', 'lose appetite'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_071',
    word: 'palate',
    ipa: '/ˈpælət/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Sense of taste',
        example: 'This wine suits every palate.',
        turkishMeaning: 'damak zevki'
      }
    ],
    imageUrl: '/images/vocab/palate.jpg',
    examples: ['This wine suits every palate.'],
    collocations: ['refined palate', 'palate cleanser', 'suit palate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_072',
    word: 'compliments',
    ipa: '/ˈkɒmplɪmənts/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Praise for food',
        example: 'My compliments to the chef.',
        turkishMeaning: 'kompliman'
      }
    ],
    imageUrl: '/images/vocab/compliments.jpg',
    examples: ['My compliments to the chef.'],
    collocations: ['compliments to chef', 'send compliments', 'receive compliments'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_073',
    word: 'exquisite',
    ipa: '/ɪkˈskwɪzɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Extremely delicious',
        example: 'The meal was exquisite.',
        turkishMeaning: 'enfes, mükemmel'
      }
    ],
    imageUrl: '/images/vocab/exquisite.jpg',
    examples: ['The meal was exquisite.'],
    collocations: ['exquisite taste', 'exquisite meal', 'exquisite presentation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_074',
    word: 'presentation',
    ipa: '/ˌprezənˈteɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Visual arrangement of food',
        example: 'The presentation is beautiful.',
        turkishMeaning: 'sunum'
      }
    ],
    imageUrl: '/images/vocab/presentation.jpg',
    examples: ['The presentation is beautiful.'],
    collocations: ['food presentation', 'presentation style', 'presentation quality'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_075',
    word: 'aroma',
    ipa: '/əˈrəʊmə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Pleasant food smell',
        example: 'The aroma is wonderful.',
        turkishMeaning: 'aroma'
      }
    ],
    imageUrl: '/images/vocab/aroma.jpg',
    examples: ['The aroma is wonderful.'],
    collocations: ['pleasant aroma', 'aroma therapy', 'coffee aroma'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_076',
    word: 'texture',
    ipa: '/ˈtekstʃə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Food\'s physical quality',
        example: 'The texture is perfect.',
        turkishMeaning: 'doku'
      }
    ],
    imageUrl: '/images/vocab/texture.jpg',
    examples: ['The texture is perfect.'],
    collocations: ['smooth texture', 'texture quality', 'texture contrast'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_077',
    word: 'flavour',
    ipa: '/ˈfleɪvə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Taste characteristic',
        example: 'The flavour is exceptional.',
        turkishMeaning: 'tat, lezzet'
      }
    ],
    imageUrl: '/images/vocab/flavour.jpg',
    examples: ['The flavour is exceptional.'],
    collocations: ['rich flavour', 'subtle flavour', 'flavour combination'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_078',
    word: 'savory',
    ipa: '/ˈseɪvəri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Not sweet, salty taste',
        example: 'I prefer savory dishes.',
        turkishMeaning: 'tuzlu (tatlı olmayan)'
      }
    ],
    imageUrl: '/images/vocab/savory.jpg',
    examples: ['I prefer savory dishes.'],
    collocations: ['savory dish', 'savory option', 'savory taste'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_079',
    word: 'pairing',
    ipa: '/ˈpeərɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Matching food with drink',
        example: 'Wine pairing is included.',
        turkishMeaning: 'eşleştirme'
      }
    ],
    imageUrl: '/images/vocab/pairing.jpg',
    examples: ['Wine pairing is included.'],
    collocations: ['wine pairing', 'food pairing', 'pairing suggestion'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_080',
    word: 'accompaniment',
    ipa: '/əˈkʌmpənimənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Food served alongside',
        example: 'Vegetables are a perfect accompaniment.',
        turkishMeaning: 'eşlik eden yemek'
      }
    ],
    imageUrl: '/images/vocab/accompaniment.jpg',
    examples: ['Vegetables are a perfect accompaniment.'],
    collocations: ['perfect accompaniment', 'accompaniment dish', 'accompaniment selection'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_081',
    word: 'etiquette',
    ipa: '/ˈetɪket/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Proper dining manners',
        example: 'Follow proper dining etiquette.',
        turkishMeaning: 'görgü kuralları'
      }
    ],
    imageUrl: '/images/vocab/etiquette.jpg',
    examples: ['Follow proper dining etiquette.'],
    collocations: ['dining etiquette', 'business etiquette', 'etiquette rules'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_082',
    word: 'manners',
    ipa: '/ˈmænəz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Polite behavior',
        example: 'He has excellent table manners.',
        turkishMeaning: 'görgü'
      }
    ],
    imageUrl: '/images/vocab/manners.jpg',
    examples: ['He has excellent table manners.'],
    collocations: ['table manners', 'good manners', 'manners etiquette'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_083',
    word: 'discuss',
    ipa: '/dɪˈskʌs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Talk about business matters',
        example: 'We can discuss the proposal over lunch.',
        turkishMeaning: 'tartışmak'
      }
    ],
    imageUrl: '/images/vocab/discuss.jpg',
    examples: ['We can discuss the proposal over lunch.'],
    collocations: ['discuss business', 'discuss proposal', 'discuss details'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_084',
    word: 'network',
    ipa: '/ˈnetwɜːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Build business connections',
        example: 'Dinner is a great opportunity to network.',
        turkishMeaning: 'iş bağlantısı kurmak'
      }
    ],
    imageUrl: '/images/vocab/network.jpg',
    examples: ['Dinner is a great opportunity to network.'],
    collocations: ['network opportunity', 'network event', 'network contacts'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_085',
    word: 'small talk',
    ipa: '/smɔːl tɔːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Casual conversation',
        example: 'Start with some small talk.',
        turkishMeaning: 'sohbet'
      }
    ],
    imageUrl: '/images/vocab/small-talk.jpg',
    examples: ['Start with some small talk.'],
    collocations: ['make small talk', 'small talk topics', 'engage small talk'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_086',
    word: 'rapport',
    ipa: '/ræˈpɔː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Harmonious relationship',
        example: 'Build rapport over dinner.',
        turkishMeaning: 'uyum, samimiyet'
      }
    ],
    imageUrl: '/images/vocab/rapport.jpg',
    examples: ['Build rapport over dinner.'],
    collocations: ['build rapport', 'establish rapport', 'good rapport'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_087',
    word: 'invitation',
    ipa: '/ˌɪnvɪˈteɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Request to join meal',
        example: 'Thank you for the lunch invitation.',
        turkishMeaning: 'davet'
      }
    ],
    imageUrl: '/images/vocab/invitation.jpg',
    examples: ['Thank you for the lunch invitation.'],
    collocations: ['dinner invitation', 'accept invitation', 'invitation extended'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_088',
    word: 'accept',
    ipa: '/əkˈsept/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Agree to invitation',
        example: 'I\'m happy to accept your invitation.',
        turkishMeaning: 'kabul etmek'
      }
    ],
    imageUrl: '/images/vocab/accept.jpg',
    examples: ['I\'m happy to accept your invitation.'],
    collocations: ['accept invitation', 'accept offer', 'gladly accept'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_089',
    word: 'decline',
    ipa: '/dɪˈklaɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Politely refuse',
        example: 'I must decline the dessert.',
        turkishMeaning: 'kibarca reddetmek'
      }
    ],
    imageUrl: '/images/vocab/decline.jpg',
    examples: ['I must decline the dessert.'],
    collocations: ['politely decline', 'decline offer', 'decline invitation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_090',
    word: 'punctual',
    ipa: '/ˈpʌŋktʃuəl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Arriving on time',
        example: 'Please be punctual for dinner.',
        turkishMeaning: 'dakik'
      }
    ],
    imageUrl: '/images/vocab/punctual.jpg',
    examples: ['Please be punctual for dinner.'],
    collocations: ['be punctual', 'punctual arrival', 'punctual person'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_091',
    word: 'dress code',
    ipa: '/dres kəʊd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Required clothing standard',
        example: 'The restaurant has a dress code.',
        turkishMeaning: 'kıyafet kuralı'
      }
    ],
    imageUrl: '/images/vocab/dress-code.jpg',
    examples: ['The restaurant has a dress code.'],
    collocations: ['formal dress code', 'dress code requirement', 'dress code policy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_092',
    word: 'formal',
    ipa: '/ˈfɔːməl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Official and dressy',
        example: 'It\'s a formal dinner event.',
        turkishMeaning: 'resmi'
      }
    ],
    imageUrl: '/images/vocab/formal.jpg',
    examples: ['It\'s a formal dinner event.'],
    collocations: ['formal attire', 'formal occasion', 'formal dinner'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_093',
    word: 'casual',
    ipa: '/ˈkæʒuəl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Informal and relaxed',
        example: 'The lunch will be casual.',
        turkishMeaning: 'gündelik'
      }
    ],
    imageUrl: '/images/vocab/casual.jpg',
    examples: ['The lunch will be casual.'],
    collocations: ['casual attire', 'casual atmosphere', 'casual meeting'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_094',
    word: 'refreshments',
    ipa: '/rɪˈfreʃmənts/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Light food and drinks',
        example: 'Refreshments will be served.',
        turkishMeaning: 'ikramlar'
      }
    ],
    imageUrl: '/images/vocab/refreshments.jpg',
    examples: ['Refreshments will be served.'],
    collocations: ['light refreshments', 'refreshments provided', 'refreshments served'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_095',
    word: 'catering',
    ipa: '/ˈkeɪtərɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Food service provision',
        example: 'We need catering for the event.',
        turkishMeaning: 'catering, yemek servisi'
      }
    ],
    imageUrl: '/images/vocab/catering.jpg',
    examples: ['We need catering for the event.'],
    collocations: ['catering service', 'catering company', 'catering arrangement'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_096',
    word: 'banquet',
    ipa: '/ˈbæŋkwɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Formal large meal',
        example: 'The banquet is for 100 guests.',
        turkishMeaning: 'ziyafet'
      }
    ],
    imageUrl: '/images/vocab/banquet.jpg',
    examples: ['The banquet is for 100 guests.'],
    collocations: ['banquet hall', 'banquet dinner', 'banquet event'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_097',
    word: 'reception',
    ipa: '/rɪˈsepʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Formal gathering with food',
        example: 'There\'s a reception after the meeting.',
        turkishMeaning: 'resepsiyon'
      }
    ],
    imageUrl: '/images/vocab/reception.jpg',
    examples: ['There\'s a reception after the meeting.'],
    collocations: ['reception event', 'reception dinner', 'cocktail reception'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_098',
    word: 'venue',
    ipa: '/ˈvenjuː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Location for event',
        example: 'The venue is excellent for dining.',
        turkishMeaning: 'mekan'
      }
    ],
    imageUrl: '/images/vocab/venue.jpg',
    examples: ['The venue is excellent for dining.'],
    collocations: ['venue selection', 'venue booking', 'dining venue'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_dining_099',
    word: 'atmosphere',
    ipa: '/ˈætməsfɪə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'General feeling of place',
        example: 'The atmosphere is very professional.',
        turkishMeaning: 'atmosfer'
      }
    ],
    imageUrl: '/images/vocab/atmosphere.jpg',
    examples: ['The atmosphere is very professional.'],
    collocations: ['pleasant atmosphere', 'relaxed atmosphere', 'atmosphere quality'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_dining_100',
    word: 'impression',
    ipa: '/ɪmˈpreʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Effect on someone\'s opinion',
        example: 'Make a good impression at dinner.',
        turkishMeaning: 'izlenim'
      }
    ],
    imageUrl: '/images/vocab/impression.jpg',
    examples: ['Make a good impression at dinner.'],
    collocations: ['good impression', 'first impression', 'make impression'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },

  // ==================== BATCH 10: 100 COMPETITION & COMPARISON WORDS ====================

    {
    id: 'vocab_competition_001',
    word: 'competitor',
    ipa: '/kəmˈpetɪtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Business rival in same market',
        example: 'Our main competitor launched a new product.',
        turkishMeaning: 'rakip'
      }
    ],
    imageUrl: '/images/vocab/competitor.jpg',
    examples: ['Our main competitor launched a new product.'],
    collocations: ['main competitor', 'strong competitor', 'competitor analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_002',
    word: 'rival',
    ipa: '/ˈraɪvəl/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Person or company competing',
        example: 'They are our biggest rival.',
        turkishMeaning: 'rakip, yarışmacı'
      }
    ],
    imageUrl: '/images/vocab/rival.jpg',
    examples: ['They are our biggest rival.'],
    collocations: ['business rival', 'rival company', 'rival product'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_003',
    word: 'competition',
    ipa: '/ˌkɒmpəˈtɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Rivalry in business',
        example: 'Competition in this market is fierce.',
        turkishMeaning: 'rekabet'
      }
    ],
    imageUrl: '/images/vocab/competition.jpg',
    examples: ['Competition in this market is fierce.'],
    collocations: ['fierce competition', 'healthy competition', 'face competition'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_004',
    word: 'competitive',
    ipa: '/kəmˈpetətɪv/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Involving strong competition',
        example: 'Our prices are very competitive.',
        turkishMeaning: 'rekabetçi'
      }
    ],
    imageUrl: '/images/vocab/competitive.jpg',
    examples: ['Our prices are very competitive.'],
    collocations: ['competitive price', 'competitive market', 'competitive advantage'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_competition_005',
    word: 'compare',
    ipa: '/kəmˈpeə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Examine similarities and differences',
        example: 'Let\'s compare our products with theirs.',
        turkishMeaning: 'karşılaştırmak'
      }
    ],
    imageUrl: '/images/vocab/compare.jpg',
    examples: ['Let\'s compare our products with theirs.'],
    collocations: ['compare prices', 'compare products', 'compare performance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_competition_006',
    word: 'comparison',
    ipa: '/kəmˈpærɪsən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Act of comparing',
        example: 'The comparison shows we\'re ahead.',
        turkishMeaning: 'karşılaştırma'
      }
    ],
    imageUrl: '/images/vocab/comparison.jpg',
    examples: ['The comparison shows we\'re ahead.'],
    collocations: ['price comparison', 'comparison chart', 'make comparison'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_007',
    word: 'benchmark',
    ipa: '/ˈbentʃmɑːk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Standard for comparison',
        example: 'We use industry benchmarks.',
        turkishMeaning: 'kıyaslama standardı'
      }
    ],
    imageUrl: '/images/vocab/benchmark.jpg',
    examples: ['We use industry benchmarks.'],
    collocations: ['industry benchmark', 'benchmark performance', 'benchmark against'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_008',
    word: 'market share',
    ipa: '/ˈmɑːkɪt ʃeə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Percentage of total market',
        example: 'We increased our market share by 5%.',
        turkishMeaning: 'pazar payı'
      }
    ],
    imageUrl: '/images/vocab/market-share.jpg',
    examples: ['We increased our market share by 5%.'],
    collocations: ['market share growth', 'gain market share', 'market share leader'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_009',
    word: 'outperform',
    ipa: '/ˌaʊtpəˈfɔːm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Perform better than others',
        example: 'We outperformed our competitors.',
        turkishMeaning: 'daha iyi performans göstermek'
      }
    ],
    imageUrl: '/images/vocab/outperform.jpg',
    examples: ['We outperformed our competitors.'],
    collocations: ['outperform competitors', 'outperform market', 'outperform expectations'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_010',
    word: 'superior',
    ipa: '/suːˈpɪəriə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Better in quality',
        example: 'Our product quality is superior.',
        turkishMeaning: 'üstün, daha iyi'
      }
    ],
    imageUrl: '/images/vocab/superior.jpg',
    examples: ['Our product quality is superior.'],
    collocations: ['superior quality', 'superior performance', 'superior product'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_011',
    word: 'inferior',
    ipa: '/ɪnˈfɪəriə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Lower in quality',
        example: 'Their service is inferior to ours.',
        turkishMeaning: 'düşük kaliteli'
      }
    ],
    imageUrl: '/images/vocab/inferior.jpg',
    examples: ['Their service is inferior to ours.'],
    collocations: ['inferior quality', 'inferior product', 'inferior performance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_012',
    word: 'advantage',
    ipa: '/ədˈvɑːntɪdʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Beneficial position',
        example: 'We have a competitive advantage.',
        turkishMeaning: 'avantaj'
      }
    ],
    imageUrl: '/images/vocab/advantage.jpg',
    examples: ['We have a competitive advantage.'],
    collocations: ['competitive advantage', 'advantage over', 'take advantage'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_013',
    word: 'disadvantage',
    ipa: '/ˌdɪsədˈvɑːntɪdʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Unfavourable position',
        example: 'Their location is a disadvantage.',
        turkishMeaning: 'dezavantaj'
      }
    ],
    imageUrl: '/images/vocab/disadvantage.jpg',
    examples: ['Their location is a disadvantage.'],
    collocations: ['competitive disadvantage', 'disadvantage compared to', 'major disadvantage'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_014',
    word: 'differentiation',
    ipa: '/ˌdɪfərenʃiˈeɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Making product distinct',
        example: 'Product differentiation is key.',
        turkishMeaning: 'farklılaştırma'
      }
    ],
    imageUrl: '/images/vocab/differentiation.jpg',
    examples: ['Product differentiation is key.'],
    collocations: ['product differentiation', 'differentiation strategy', 'competitive differentiation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_015',
    word: 'positioning',
    ipa: '/pəˈzɪʃənɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Market placement strategy',
        example: 'Our brand positioning is premium.',
        turkishMeaning: 'konumlandırma'
      }
    ],
    imageUrl: '/images/vocab/positioning.jpg',
    examples: ['Our brand positioning is premium.'],
    collocations: ['brand positioning', 'market positioning', 'positioning strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_016',
    word: 'market leader',
    ipa: '/ˈmɑːkɪt ˈliːdə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Top company in market',
        example: 'We are the market leader.',
        turkishMeaning: 'pazar lideri'
      }
    ],
    imageUrl: '/images/vocab/market-leader.jpg',
    examples: ['We are the market leader.'],
    collocations: ['market leader position', 'become market leader', 'market leader status'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_017',
    word: 'challenger',
    ipa: '/ˈtʃælɪndʒə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Company challenging leader',
        example: 'We are a strong challenger brand.',
        turkishMeaning: 'meydan okuyan'
      }
    ],
    imageUrl: '/images/vocab/challenger.jpg',
    examples: ['We are a strong challenger brand.'],
    collocations: ['challenger brand', 'challenger position', 'challenger strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_018',
    word: 'follower',
    ipa: '/ˈfɒləʊə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Company following market trends',
        example: 'They are market followers.',
        turkishMeaning: 'takipçi'
      }
    ],
    imageUrl: '/images/vocab/follower.jpg',
    examples: ['They are market followers.'],
    collocations: ['market follower', 'follower strategy', 'follower position'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_019',
    word: 'niche',
    ipa: '/niːʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Specialized market segment',
        example: 'We target a niche market.',
        turkishMeaning: 'niş pazar'
      }
    ],
    imageUrl: '/images/vocab/niche.jpg',
    examples: ['We target a niche market.'],
    collocations: ['niche market', 'niche product', 'niche strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_020',
    word: 'undercut',
    ipa: '/ˌʌndəˈkʌt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Offer lower price than rival',
        example: 'They undercut our prices.',
        turkishMeaning: 'daha ucuza satmak'
      }
    ],
    imageUrl: '/images/vocab/undercut.jpg',
    examples: ['They undercut our prices.'],
    collocations: ['undercut prices', 'undercut competitors', 'undercut market'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_competition_021',
    word: 'outbid',
    ipa: '/ˌaʊtˈbɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Offer more than competitor',
        example: 'We were outbid by a rival.',
        turkishMeaning: 'daha yüksek teklif vermek'
      }
    ],
    imageUrl: '/images/vocab/outbid.jpg',
    examples: ['We were outbid by a rival.'],
    collocations: ['outbid competitor', 'outbid rival', 'outbid offer'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_022',
    word: 'overtake',
    ipa: '/ˌəʊvəˈteɪk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Surpass in market position',
        example: 'We overtook our main rival.',
        turkishMeaning: 'geçmek, sollamak'
      }
    ],
    imageUrl: '/images/vocab/overtake.jpg',
    examples: ['We overtook our main rival.'],
    collocations: ['overtake competitor', 'overtake market share', 'overtake sales'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_023',
    word: 'analysis',
    ipa: '/əˈnæləsɪs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Detailed examination',
        example: 'We conducted a competitor analysis.',
        turkishMeaning: 'analiz'
      }
    ],
    imageUrl: '/images/vocab/analysis.jpg',
    examples: ['We conducted a competitor analysis.'],
    collocations: ['competitor analysis', 'market analysis', 'analysis report'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_024',
    word: 'evaluate',
    ipa: '/ɪˈvæljueɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Assess quality or value',
        example: 'We need to evaluate their strengths.',
        turkishMeaning: 'değerlendirmek'
      }
    ],
    imageUrl: '/images/vocab/evaluate.jpg',
    examples: ['We need to evaluate their strengths.'],
    collocations: ['evaluate performance', 'evaluate competitors', 'evaluate options'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_competition_025',
    word: 'assessment',
    ipa: '/əˈsesmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Evaluation process',
        example: 'Our assessment shows we\'re stronger.',
        turkishMeaning: 'değerlendirme'
      }
    ],
    imageUrl: '/images/vocab/assessment.jpg',
    examples: ['Our assessment shows we\'re stronger.'],
    collocations: ['competitive assessment', 'assessment report', 'assessment criteria'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_026',
    word: 'strengths',
    ipa: '/streŋθs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Positive attributes',
        example: 'Our strengths include quality and service.',
        turkishMeaning: 'güçlü yönler'
      }
    ],
    imageUrl: '/images/vocab/strengths.jpg',
    examples: ['Our strengths include quality and service.'],
    collocations: ['core strengths', 'competitive strengths', 'strengths and weaknesses'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_027',
    word: 'weaknesses',
    ipa: '/ˈwiːknəsɪz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Negative attributes',
        example: 'We identified their weaknesses.',
        turkishMeaning: 'zayıf yönler'
      }
    ],
    imageUrl: '/images/vocab/weaknesses.jpg',
    examples: ['We identified their weaknesses.'],
    collocations: ['competitive weaknesses', 'weaknesses analysis', 'exploit weaknesses'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_028',
    word: 'opportunities',
    ipa: '/ˌɒpəˈtjuːnɪtiz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Favourable situations',
        example: 'Market opportunities are growing.',
        turkishMeaning: 'fırsatlar'
      }
    ],
    imageUrl: '/images/vocab/opportunities.jpg',
    examples: ['Market opportunities are growing.'],
    collocations: ['market opportunities', 'identify opportunities', 'opportunities analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_029',
    word: 'threats',
    ipa: '/θrets/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Potential dangers',
        example: 'New competitors pose threats.',
        turkishMeaning: 'tehditler'
      }
    ],
    imageUrl: '/images/vocab/threats.jpg',
    examples: ['New competitors pose threats.'],
    collocations: ['competitive threats', 'external threats', 'threats analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_030',
    word: 'SWOT',
    ipa: '/swɒt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Strengths Weaknesses Opportunities Threats',
        example: 'We prepared a SWOT analysis.',
        turkishMeaning: 'SWOT analizi'
      }
    ],
    imageUrl: '/images/vocab/swot.jpg',
    examples: ['We prepared a SWOT analysis.'],
    collocations: ['SWOT analysis', 'SWOT matrix', 'conduct SWOT'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_031',
    word: 'premium',
    ipa: '/ˈpriːmiəm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'High-quality and expensive',
        example: 'We offer premium products.',
        turkishMeaning: 'premium, üst segment'
      }
    ],
    imageUrl: '/images/vocab/premium.jpg',
    examples: ['We offer premium products.'],
    collocations: ['premium quality', 'premium price', 'premium brand'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_032',
    word: 'budget',
    ipa: '/ˈbʌdʒɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Low-cost option',
        example: 'They target the budget segment.',
        turkishMeaning: 'ekonomik, bütçe dostu'
      }
    ],
    imageUrl: '/images/vocab/budget.jpg',
    examples: ['They target the budget segment.'],
    collocations: ['budget option', 'budget friendly', 'budget range'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_competition_033',
    word: 'value for money',
    ipa: '/ˈvæljuː fɔː ˈmʌni/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Good quality at fair price',
        example: 'Our product offers excellent value for money.',
        turkishMeaning: 'paranın karşılığı'
      }
    ],
    imageUrl: '/images/vocab/value-for-money.jpg',
    examples: ['Our product offers excellent value for money.'],
    collocations: ['value for money proposition', 'excellent value for money', 'value for money product'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_competition_034',
    word: 'pricing strategy',
    ipa: '/ˈpraɪsɪŋ ˈstrætədʒi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Price setting approach',
        example: 'Our pricing strategy is competitive.',
        turkishMeaning: 'fiyatlandırma stratejisi'
      }
    ],
    imageUrl: '/images/vocab/pricing-strategy.jpg',
    examples: ['Our pricing strategy is competitive.'],
    collocations: ['pricing strategy development', 'competitive pricing strategy', 'pricing strategy analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_competition_035',
    word: 'penetration',
    ipa: '/ˌpenɪˈtreɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Entering a market',
        example: 'Market penetration is increasing.',
        turkishMeaning: 'pazara giriş'
      }
    ],
    imageUrl: '/images/vocab/penetration.jpg',
    examples: ['Market penetration is increasing.'],
    collocations: ['market penetration', 'penetration strategy', 'penetration rate'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_036',
    word: 'edge',
    ipa: '/edʒ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Competitive superiority',
        example: 'We have an edge over competitors.',
        turkishMeaning: 'üstünlük, avantaj'
      }
    ],
    imageUrl: '/images/vocab/edge.jpg',
    examples: ['We have an edge over competitors.'],
    collocations: ['competitive edge', 'gain edge', 'edge over'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_037',
    word: 'dominate',
    ipa: '/ˈdɒmɪneɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Control market completely',
        example: 'They dominate the market.',
        turkishMeaning: 'hakim olmak'
      }
    ],
    imageUrl: '/images/vocab/dominate.jpg',
    examples: ['They dominate the market.'],
    collocations: ['dominate market', 'dominate industry', 'dominate sector'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_038',
    word: 'monopoly',
    ipa: '/məˈnɒpəli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Exclusive market control',
        example: 'They have a monopoly position.',
        turkishMeaning: 'tekel'
      }
    ],
    imageUrl: '/images/vocab/monopoly.jpg',
    examples: ['They have a monopoly position.'],
    collocations: ['monopoly power', 'monopoly position', 'monopoly market'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
  {
    id: 'vocab_competition_039',
    word: 'duopoly',
    ipa: '/djuːˈɒpəli/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Market controlled by two companies',
        example: 'It\'s a duopoly market.',
        turkishMeaning: 'iki şirket tekeli'
      }
    ],
    imageUrl: '/images/vocab/duopoly.jpg',
    examples: ['It\'s a duopoly market.'],
    collocations: ['duopoly market', 'duopoly situation', 'duopoly control'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_040',
    word: 'saturated',
    ipa: '/ˈsætʃəreɪtɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Market at maximum capacity',
        example: 'The market is saturated.',
        turkishMeaning: 'doymuş'
      }
    ],
    imageUrl: '/images/vocab/saturated.jpg',
    examples: ['The market is saturated.'],
    collocations: ['saturated market', 'market saturation', 'saturated industry'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_041',
    word: 'emerging',
    ipa: '/ɪˈmɜːdʒɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'New and developing',
        example: 'We target emerging markets.',
        turkishMeaning: 'gelişmekte olan'
      }
    ],
    imageUrl: '/images/vocab/emerging.jpg',
    examples: ['We target emerging markets.'],
    collocations: ['emerging market', 'emerging trend', 'emerging competitor'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_042',
    word: 'disruptive',
    ipa: '/dɪsˈrʌptɪv/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Radically changing industry',
        example: 'Their technology is disruptive.',
        turkishMeaning: 'yıkıcı, değiştirici'
      }
    ],
    imageUrl: '/images/vocab/disruptive.jpg',
    examples: ['Their technology is disruptive.'],
    collocations: ['disruptive innovation', 'disruptive technology', 'disruptive competitor'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_043',
    word: 'innovative',
    ipa: '/ˈɪnəvətɪv/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Introducing new ideas',
        example: 'We are more innovative.',
        turkishMeaning: 'yenilikçi'
      }
    ],
    imageUrl: '/images/vocab/innovative.jpg',
    examples: ['We are more innovative.'],
    collocations: ['innovative product', 'innovative approach', 'innovative solution'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_competition_044',
    word: 'unique selling point',
    ipa: '/juːˈniːk ˈselɪŋ pɔɪnt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Distinctive product feature',
        example: 'What\'s your unique selling point?',
        turkishMeaning: 'benzersiz satış noktası'
      }
    ],
    imageUrl: '/images/vocab/unique-selling-point.jpg',
    examples: ['What\'s your unique selling point?'],
    collocations: ['unique selling point development', 'strong unique selling point', 'unique selling point analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_045',
    word: 'USP',
    ipa: '/ˌjuː es ˈpiː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Unique Selling Proposition',
        example: 'Our USP is quality service.',
        turkishMeaning: 'USP'
      }
    ],
    imageUrl: '/images/vocab/usp.jpg',
    examples: ['Our USP is quality service.'],
    collocations: ['USP development', 'strong USP', 'USP strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_046',
    word: 'performance',
    ipa: '/pəˈfɔːməns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'How well something functions',
        example: 'Our performance exceeds theirs.',
        turkishMeaning: 'performans'
      }
    ],
    imageUrl: '/images/vocab/performance.jpg',
    examples: ['Our performance exceeds theirs.'],
    collocations: ['performance metrics', 'performance comparison', 'performance analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_047',
    word: 'metrics',
    ipa: '/ˈmetrɪks/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Measurement standards',
        example: 'We track key metrics.',
        turkishMeaning: 'metrikler, ölçütler'
      }
    ],
    imageUrl: '/images/vocab/metrics.jpg',
    examples: ['We track key metrics.'],
    collocations: ['performance metrics', 'key metrics', 'metrics analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_048',
    word: 'exceed',
    ipa: '/ɪkˈsiːd/',
    partOfSpeech: 'verb',
    definitions: [
      {
        meaning: 'Go beyond a limit',
        example: 'We exceeded their sales figures.',
        turkishMeaning: 'aşmak'
      }
    ],
    imageUrl: '/images/vocab/exceed.jpg',
    examples: ['We exceeded their sales figures.'],
    collocations: ['exceed expectations', 'exceed targets', 'exceed performance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_049',
    word: 'lag behind',
    ipa: '/læɡ bɪˈhaɪnd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Fall behind competitors',
        example: 'They are lagging behind us.',
        turkishMeaning: 'geride kalmak'
      }
    ],
    imageUrl: '/images/vocab/lag-behind.jpg',
    examples: ['They are lagging behind us.'],
    collocations: ['lag behind competitors', 'lag behind market', 'lag behind industry'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_050',
    word: 'gain ground',
    ipa: '/ɡeɪn ɡraʊnd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Make progress against rivals',
        example: 'We are gaining ground.',
        turkishMeaning: 'zemin kazanmak'
      }
    ],
    imageUrl: '/images/vocab/gain-ground.jpg',
    examples: ['We are gaining ground.'],
    collocations: ['gain ground on', 'gain ground quickly', 'gain ground steadily'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_051',
    word: 'lose ground',
    ipa: '/luːz ɡraʊnd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Fall behind in competition',
        example: 'They are losing ground.',
        turkishMeaning: 'zemin kaybetmek'
      }
    ],
    imageUrl: '/images/vocab/lose-ground.jpg',
    examples: ['They are losing ground.'],
    collocations: ['lose ground to', 'lose ground rapidly', 'lose ground slowly'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_competition_052',
    word: 'market intelligence',
    ipa: '/ˈmɑːkɪt ɪnˈtelɪdʒəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Information about market conditions',
        example: 'Market intelligence shows we\'re ahead.',
        turkishMeaning: 'pazar istihbaratı'
      }
    ],
    imageUrl: '/images/vocab/market-intelligence.jpg',
    examples: ['Market intelligence shows we\'re ahead.'],
    collocations: ['market intelligence gathering', 'market intelligence analysis', 'market intelligence report'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_053',
    word: 'insight',
    ipa: '/ˈɪnsaɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Deep understanding',
        example: 'We gained valuable insights.',
        turkishMeaning: 'içgörü, anlayış'
      }
    ],
    imageUrl: '/images/vocab/insight.jpg',
    examples: ['We gained valuable insights.'],
    collocations: ['market insight', 'customer insight', 'competitive insight'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_054',
    word: 'trend',
    ipa: '/trend/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'General direction of change',
        example: 'Market trends favour our approach.',
        turkishMeaning: 'trend, eğilim'
      }
    ],
    imageUrl: '/images/vocab/trend.jpg',
    examples: ['Market trends favour our approach.'],
    collocations: ['market trend', 'industry trend', 'trend analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_055',
    word: 'forecast',
    ipa: '/ˈfɔːkɑːst/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Prediction of future',
        example: 'Our forecast is optimistic.',
        turkishMeaning: 'tahmin, öngörü'
      }
    ],
    imageUrl: '/images/vocab/forecast.jpg',
    examples: ['Our forecast is optimistic.'],
    collocations: ['sales forecast', 'market forecast', 'forecast accuracy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_056',
    word: 'projection',
    ipa: '/prəˈdʒekʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Estimated future figure',
        example: 'Projections show strong growth.',
        turkishMeaning: 'projeksiyon'
      }
    ],
    imageUrl: '/images/vocab/projection.jpg',
    examples: ['Projections show strong growth.'],
    collocations: ['sales projection', 'growth projection', 'projection analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_057',
    word: 'survey',
    ipa: '/ˈsɜːveɪ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Research questionnaire',
        example: 'The survey shows customer preference.',
        turkishMeaning: 'anket'
      }
    ],
    imageUrl: '/images/vocab/survey.jpg',
    examples: ['The survey shows customer preference.'],
    collocations: ['customer survey', 'market survey', 'survey results'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_058',
    word: 'feedback',
    ipa: '/ˈfiːdbæk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Information about reactions',
        example: 'Customer feedback is positive.',
        turkishMeaning: 'geri bildirim'
      }
    ],
    imageUrl: '/images/vocab/feedback.jpg',
    examples: ['Customer feedback is positive.'],
    collocations: ['customer feedback', 'feedback analysis', 'feedback comparison'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_059',
    word: 'rating',
    ipa: '/ˈreɪtɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Quality assessment score',
        example: 'Our rating is higher than theirs.',
        turkishMeaning: 'değerlendirme, puan'
      }
    ],
    imageUrl: '/images/vocab/rating.jpg',
    examples: ['Our rating is higher than theirs.'],
    collocations: ['customer rating', 'rating comparison', 'rating score'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_competition_060',
    word: 'review',
    ipa: '/rɪˈvjuː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Critical assessment',
        example: 'Reviews show we\'re better.',
        turkishMeaning: 'inceleme, değerlendirme'
      }
    ],
    imageUrl: '/images/vocab/review.jpg',
    examples: ['Reviews show we\'re better.'],
    collocations: ['customer review', 'product review', 'review comparison'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_061',
    word: 'reputation',
    ipa: '/ˌrepjuˈteɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Overall public opinion',
        example: 'Our reputation is stronger.',
        turkishMeaning: 'itibar, ün'
      }
    ],
    imageUrl: '/images/vocab/reputation.jpg',
    examples: ['Our reputation is stronger.'],
    collocations: ['brand reputation', 'reputation management', 'reputation comparison'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_062',
    word: 'brand loyalty',
    ipa: '/brænd ˈlɔɪəlti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Customer commitment to brand',
        example: 'We have higher brand loyalty.',
        turkishMeaning: 'marka sadakati'
      }
    ],
    imageUrl: '/images/vocab/brand-loyalty.jpg',
    examples: ['We have higher brand loyalty.'],
    collocations: ['brand loyalty rate', 'brand loyalty programme', 'brand loyalty comparison'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_063',
    word: 'retention',
    ipa: '/rɪˈtenʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Keeping customers',
        example: 'Our customer retention is better.',
        turkishMeaning: 'elde tutma'
      }
    ],
    imageUrl: '/images/vocab/retention.jpg',
    examples: ['Our customer retention is better.'],
    collocations: ['customer retention', 'retention rate', 'retention strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_064',
    word: 'acquisition',
    ipa: '/ˌækwɪˈzɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Gaining new customers',
        example: 'Customer acquisition costs are lower.',
        turkishMeaning: 'edinme, kazanma'
      }
    ],
    imageUrl: '/images/vocab/acquisition.jpg',
    examples: ['Customer acquisition costs are lower.'],
    collocations: ['customer acquisition', 'acquisition cost', 'acquisition strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_065',
    word: 'switch',
    ipa: '/swɪtʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Change to different provider',
        example: 'Customers switch to us.',
        turkishMeaning: 'değiştirmek, geçmek'
      }
    ],
    imageUrl: '/images/vocab/switch.jpg',
    examples: ['Customers switch to us.'],
    collocations: ['switch supplier', 'switch provider', 'switch brand'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_066',
    word: 'poach',
    ipa: '/pəʊtʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Take customers from rivals',
        example: 'They are poaching our clients.',
        turkishMeaning: 'çalmak (müşteri)'
      }
    ],
    imageUrl: '/images/vocab/poach.jpg',
    examples: ['They are poaching our clients.'],
    collocations: ['poach customers', 'poach clients', 'poach staff'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_067',
    word: 'steal market share',
    ipa: '/stiːl ˈmɑːkɪt ʃeə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Take customers from competitors',
        example: 'We are stealing market share.',
        turkishMeaning: 'pazar payı çalmak'
      }
    ],
    imageUrl: '/images/vocab/steal-market-share.jpg',
    examples: ['We are stealing market share.'],
    collocations: ['steal market share from', 'steal significant market share', 'steal market share aggressively'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_068',
    word: 'defend',
    ipa: '/dɪˈfend/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Protect market position',
        example: 'We must defend our position.',
        turkishMeaning: 'korumak'
      }
    ],
    imageUrl: '/images/vocab/defend.jpg',
    examples: ['We must defend our position.'],
    collocations: ['defend market share', 'defend position', 'defend territory'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_competition_069',
    word: 'attack',
    ipa: '/əˈtæk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Aggressive competitive action',
        example: 'We attack competitors on price.',
        turkishMeaning: 'saldırmak'
      }
    ],
    imageUrl: '/images/vocab/attack.jpg',
    examples: ['We attack competitors on price.'],
    collocations: ['attack strategy', 'attack competitor', 'attack market'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_070',
    word: 'aggressive',
    ipa: '/əˈɡresɪv/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Forceful and determined',
        example: 'They have an aggressive strategy.',
        turkishMeaning: 'agresif'
      }
    ],
    imageUrl: '/images/vocab/aggressive.jpg',
    examples: ['They have an aggressive strategy.'],
    collocations: ['aggressive pricing', 'aggressive marketing', 'aggressive strategy'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_071',
    word: 'defensive',
    ipa: '/dɪˈfensɪv/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Protective approach',
        example: 'Our defensive strategy is working.',
        turkishMeaning: 'savunmacı'
      }
    ],
    imageUrl: '/images/vocab/defensive.jpg',
    examples: ['Our defensive strategy is working.'],
    collocations: ['defensive strategy', 'defensive position', 'defensive marketing'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_072',
    word: 'combat',
    ipa: '/ˈkɒmbæt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Fight against competition',
        example: 'We combat competition with innovation.',
        turkishMeaning: 'mücadele etmek'
      }
    ],
    imageUrl: '/images/vocab/combat.jpg',
    examples: ['We combat competition with innovation.'],
    collocations: ['combat competition', 'combat rival', 'combat threat'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_073',
    word: 'counter',
    ipa: '/ˈkaʊntə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Respond to competitor action',
        example: 'We counter their moves quickly.',
        turkishMeaning: 'karşı koymak'
      }
    ],
    imageUrl: '/images/vocab/counter.jpg',
    examples: ['We counter their moves quickly.'],
    collocations: ['counter strategy', 'counter attack', 'counter move'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_074',
    word: 'retaliate',
    ipa: '/rɪˈtælieɪt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Fight back against rival',
        example: 'We will retaliate with better pricing.',
        turkishMeaning: 'misilleme yapmak'
      }
    ],
    imageUrl: '/images/vocab/retaliate.jpg',
    examples: ['We will retaliate with better pricing.'],
    collocations: ['retaliate against', 'retaliate quickly', 'retaliate aggressively'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_075',
    word: 'price war',
    ipa: '/praɪs wɔː/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Aggressive price competition',
        example: 'We avoid price wars.',
        turkishMeaning: 'fiyat savaşı'
      }
    ],
    imageUrl: '/images/vocab/price-war.jpg',
    examples: ['We avoid price wars.'],
    collocations: ['price war situation', 'price war tactics', 'avoid price war'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business', 'finance'],
    category: 'business'
  },
    {
    id: 'vocab_competition_076',
    word: 'match',
    ipa: '/mætʃ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Equal competitor offering',
        example: 'We match their prices.',
        turkishMeaning: 'eşleştirmek'
      }
    ],
    imageUrl: '/images/vocab/match.jpg',
    examples: ['We match their prices.'],
    collocations: ['match price', 'match offer', 'match quality'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_077',
    word: 'beat',
    ipa: '/biːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Defeat in competition',
        example: 'We beat them on quality.',
        turkishMeaning: 'yenmek'
      }
    ],
    imageUrl: '/images/vocab/beat.jpg',
    examples: ['We beat them on quality.'],
    collocations: ['beat competitor', 'beat price', 'beat performance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_078',
    word: 'win',
    ipa: '/wɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Gain success over rivals',
        example: 'We win more contracts.',
        turkishMeaning: 'kazanmak'
      }
    ],
    imageUrl: '/images/vocab/win.jpg',
    examples: ['We win more contracts.'],
    collocations: ['win customer', 'win contract', 'win business'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_079',
    word: 'lose',
    ipa: '/luːz/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Fail to win',
        example: 'We rarely lose to competitors.',
        turkishMeaning: 'kaybetmek'
      }
    ],
    imageUrl: '/images/vocab/lose.jpg',
    examples: ['We rarely lose to competitors.'],
    collocations: ['lose customer', 'lose contract', 'lose business'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_competition_080',
    word: 'rivalry',
    ipa: '/ˈraɪvəlri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Ongoing competition',
        example: 'There\'s fierce rivalry between us.',
        turkishMeaning: 'rekabet, çekişme'
      }
    ],
    imageUrl: '/images/vocab/rivalry.jpg',
    examples: ['There\'s fierce rivalry between us.'],
    collocations: ['fierce rivalry', 'business rivalry', 'competitive rivalry'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_081',
    word: 'substitute',
    ipa: '/ˈsʌbstɪtjuːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Alternative product',
        example: 'Their product is a substitute.',
        turkishMeaning: 'ikame ürün'
      }
    ],
    imageUrl: '/images/vocab/substitute.jpg',
    examples: ['Their product is a substitute.'],
    collocations: ['substitute product', 'substitute offering', 'substitute threat'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_082',
    word: 'alternative',
    ipa: '/ɔːlˈtɜːnətɪv/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Different option available',
        example: 'We offer a better alternative.',
        turkishMeaning: 'alternatif'
      }
    ],
    imageUrl: '/images/vocab/alternative.jpg',
    examples: ['We offer a better alternative.'],
    collocations: ['alternative product', 'alternative solution', 'alternative supplier'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_083',
    word: 'comparison chart',
    ipa: '/kəmˈpærɪsən tʃɑːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Visual feature comparison',
        example: 'The comparison chart shows our advantages.',
        turkishMeaning: 'karşılaştırma tablosu'
      }
    ],
    imageUrl: '/images/vocab/comparison-chart.jpg',
    examples: ['The comparison chart shows our advantages.'],
    collocations: ['comparison chart analysis', 'comparison chart presentation', 'comparison chart study'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_competition_084',
    word: 'side by side',
    ipa: '/saɪd baɪ saɪd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Direct comparison',
        example: 'Let\'s compare them side by side.',
        turkishMeaning: 'yan yana'
      }
    ],
    imageUrl: '/images/vocab/side-by-side.jpg',
    examples: ['Let\'s compare them side by side.'],
    collocations: ['side by side comparison', 'side by side analysis', 'side by side review'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_085',
    word: 'versus',
    ipa: '/ˈvɜːsəs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Against or compared to',
        example: 'Our product versus theirs.',
        turkishMeaning: 'karşı, karşısında'
      }
    ],
    imageUrl: '/images/vocab/versus.jpg',
    examples: ['Our product versus theirs.'],
    collocations: ['versus competitor', 'versus comparison', 'versus analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_086',
    word: 'relative',
    ipa: '/ˈrelətɪv/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Compared to something else',
        example: 'Our relative position is strong.',
        turkishMeaning: 'göreceli'
      }
    ],
    imageUrl: '/images/vocab/relative.jpg',
    examples: ['Our relative position is strong.'],
    collocations: ['relative performance', 'relative strength', 'relative position'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_competition_087',
    word: 'absolute',
    ipa: '/ˈæbsəluːt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Not comparative, independent',
        example: 'In absolute terms, we\'re better.',
        turkishMeaning: 'mutlak'
      }
    ],
    imageUrl: '/images/vocab/absolute.jpg',
    examples: ['In absolute terms, we\'re better.'],
    collocations: ['absolute performance', 'absolute terms', 'absolute value'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_088',
    word: 'criteria',
    ipa: '/kraɪˈtɪəriə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Standards for comparison',
        example: 'We meet all criteria better.',
        turkishMeaning: 'kriterler'
      }
    ],
    imageUrl: '/images/vocab/criteria.jpg',
    examples: ['We meet all criteria better.'],
    collocations: ['selection criteria', 'comparison criteria', 'evaluation criteria'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_089',
    word: 'parameter',
    ipa: '/pəˈræmɪtə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Measurable factor',
        example: 'On every parameter, we excel.',
        turkishMeaning: 'parametre'
      }
    ],
    imageUrl: '/images/vocab/parameter.jpg',
    examples: ['On every parameter, we excel.'],
    collocations: ['key parameter', 'parameter comparison', 'parameter analysis'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_090',
    word: 'rank',
    ipa: '/ræŋk/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Position in order',
        example: 'We rank first in quality.',
        turkishMeaning: 'sıralama, derece'
      }
    ],
    imageUrl: '/images/vocab/rank.jpg',
    examples: ['We rank first in quality.'],
    collocations: ['rank higher', 'rank position', 'rank comparison'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_competition_091',
    word: 'tier',
    ipa: '/tɪə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Level or category',
        example: 'We\'re in the top tier.',
        turkishMeaning: 'kademe, seviye'
      }
    ],
    imageUrl: '/images/vocab/tier.jpg',
    examples: ['We\'re in the top tier.'],
    collocations: ['top tier', 'tier ranking', 'tier position'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
  {
    id: 'vocab_competition_092',
    word: 'league',
    ipa: '/liːɡ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Group at similar level',
        example: 'We\'re in a different league.',
        turkishMeaning: 'lig, sınıf'
      }
    ],
    imageUrl: '/images/vocab/league.jpg',
    examples: ['We\'re in a different league.'],
    collocations: ['top league', 'league position', 'league table'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_093',
    word: 'excel',
    ipa: '/ɪkˈsel/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Be exceptionally good',
        example: 'We excel in customer service.',
        turkishMeaning: 'üstün olmak'
      }
    ],
    imageUrl: '/images/vocab/excel.jpg',
    examples: ['We excel in customer service.'],
    collocations: ['excel at', 'excel in', 'excel over'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_094',
    word: 'surpass',
    ipa: '/səˈpɑːs/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Do better than',
        example: 'We surpass all competitors.',
        turkishMeaning: 'geçmek, aşmak'
      }
    ],
    imageUrl: '/images/vocab/surpass.jpg',
    examples: ['We surpass all competitors.'],
    collocations: ['surpass expectations', 'surpass competitors', 'surpass performance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_095',
    word: 'trailing',
    ipa: '/ˈtreɪlɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Behind in competition',
        example: 'They are trailing in sales.',
        turkishMeaning: 'geride kalan'
      }
    ],
    imageUrl: '/images/vocab/trailing.jpg',
    examples: ['They are trailing in sales.'],
    collocations: ['trailing competitor', 'trailing position', 'trailing performance'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_096',
    word: 'leading',
    ipa: '/ˈliːdɪŋ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Ahead in competition',
        example: 'We are the leading supplier.',
        turkishMeaning: 'önde olan, lider'
      }
    ],
    imageUrl: '/images/vocab/leading.jpg',
    examples: ['We are the leading supplier.'],
    collocations: ['leading position', 'leading competitor', 'leading brand'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_097',
    word: 'gap',
    ipa: '/ɡæp/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Difference between competitors',
        example: 'The gap is widening.',
        turkishMeaning: 'fark, açık'
      }
    ],
    imageUrl: '/images/vocab/gap.jpg',
    examples: ['The gap is widening.'],
    collocations: ['performance gap', 'gap analysis', 'close gap'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_098',
    word: 'margin',
    ipa: '/ˈmɑːdʒɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Amount of difference',
        example: 'We lead by a wide margin.',
        turkishMeaning: 'marj, fark'
      }
    ],
    imageUrl: '/images/vocab/margin.jpg',
    examples: ['We lead by a wide margin.'],
    collocations: ['profit margin', 'margin difference', 'narrow margin'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_099',
    word: 'parity',
    ipa: '/ˈpærəti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Equal standing',
        example: 'We achieved parity with them.',
        turkishMeaning: 'eşitlik'
      }
    ],
    imageUrl: '/images/vocab/parity.jpg',
    examples: ['We achieved parity with them.'],
    collocations: ['competitive parity', 'price parity', 'parity position'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_competition_100',
    word: 'leapfrog',
    ipa: '/ˈliːpfrɒɡ/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Jump ahead of competitors',
        example: 'We leapfrogged the competition.',
        turkishMeaning: 'sıçrayarak geçmek'
      }
    ],
    imageUrl: '/images/vocab/leapfrog.jpg',
    examples: ['We leapfrogged the competition.'],
    collocations: ['leapfrog competitor', 'leapfrog strategy', 'leapfrog innovation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },

  // ==================== BATCH 11: 16 CUSTOMER DEMAND WORDS ====================

    {
    id: 'vocab_demand_001',
    word: 'demand',
    ipa: '/dɪˈmɑːnd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Customer request or need',
        example: 'Customer demand is increasing.',
        turkishMeaning: 'talep'
      }
    ],
    imageUrl: '/images/vocab/demand.jpg',
    examples: ['Customer demand is increasing.'],
    collocations: ['customer demand', 'meet demand', 'demand increase'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_demand_002',
    word: 'requirement',
    ipa: '/rɪˈkwaɪəmənt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Necessary condition',
        example: 'What are your requirements?',
        turkishMeaning: 'gereksinim, şart'
      }
    ],
    imageUrl: '/images/vocab/requirement.jpg',
    examples: ['What are your requirements?'],
    collocations: ['customer requirement', 'technical requirement', 'meet requirement'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_003',
    word: 'request',
    ipa: '/rɪˈkwest/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Formal asking for something',
        example: 'We received your request.',
        turkishMeaning: 'istek, talep'
      }
    ],
    imageUrl: '/images/vocab/request.jpg',
    examples: ['We received your request.'],
    collocations: ['customer request', 'request information', 'special request'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_004',
    word: 'inquiry',
    ipa: '/ɪnˈkwaɪəri/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Question or request for information',
        example: 'Thank you for your inquiry.',
        turkishMeaning: 'soru, talep'
      }
    ],
    imageUrl: '/images/vocab/inquiry.jpg',
    examples: ['Thank you for your inquiry.'],
    collocations: ['sales inquiry', 'inquiry form', 'respond to inquiry'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_005',
    word: 'specification',
    ipa: '/ˌspesɪfɪˈkeɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Detailed requirement description',
        example: 'Please send the specifications.',
        turkishMeaning: 'şartname, özellik'
      }
    ],
    imageUrl: '/images/vocab/specification.jpg',
    examples: ['Please send the specifications.'],
    collocations: ['technical specification', 'product specification', 'specification sheet'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_006',
    word: 'customization',
    ipa: '/ˌkʌstəmaɪˈzeɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Modification to meet specific needs',
        example: 'We offer full customization.',
        turkishMeaning: 'özelleştirme'
      }
    ],
    imageUrl: '/images/vocab/customization.jpg',
    examples: ['We offer full customization.'],
    collocations: ['product customization', 'customization options', 'customization service'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_007',
    word: 'urgency',
    ipa: '/ˈɜːdʒənsi/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Need for immediate action',
        example: 'We understand the urgency.',
        turkishMeaning: 'aciliyet'
      }
    ],
    imageUrl: '/images/vocab/urgency.jpg',
    examples: ['We understand the urgency.'],
    collocations: ['matter of urgency', 'urgency level', 'urgency request'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_008',
    word: 'deadline',
    ipa: '/ˈdedlaɪn/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Time limit for completion',
        example: 'Can you meet the deadline?',
        turkishMeaning: 'son tarih'
      }
    ],
    imageUrl: '/images/vocab/deadline.jpg',
    examples: ['Can you meet the deadline?'],
    collocations: ['tight deadline', 'meet deadline', 'deadline extension'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_009',
    word: 'priority',
    ipa: '/praɪˈɒrəti/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Level of importance',
        example: 'This is our top priority.',
        turkishMeaning: 'öncelik'
      }
    ],
    imageUrl: '/images/vocab/priority.jpg',
    examples: ['This is our top priority.'],
    collocations: ['top priority', 'priority order', 'priority customer'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_010',
    word: 'complaint',
    ipa: '/kəmˈpleɪnt/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Expression of dissatisfaction',
        example: 'We take complaints seriously.',
        turkishMeaning: 'şikayet'
      }
    ],
    imageUrl: '/images/vocab/complaint.jpg',
    examples: ['We take complaints seriously.'],
    collocations: ['customer complaint', 'handle complaint', 'complaint resolution'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_011',
    word: 'claim',
    ipa: '/kleɪm/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Request for compensation',
        example: 'Please submit your claim.',
        turkishMeaning: 'talep, iddia'
      }
    ],
    imageUrl: '/images/vocab/claim.jpg',
    examples: ['Please submit your claim.'],
    collocations: ['warranty claim', 'insurance claim', 'process claim'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_012',
    word: 'expectation',
    ipa: '/ˌekspekˈteɪʃən/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'What customer anticipates',
        example: 'We exceed customer expectations.',
        turkishMeaning: 'beklenti'
      }
    ],
    imageUrl: '/images/vocab/expectation.jpg',
    examples: ['We exceed customer expectations.'],
    collocations: ['customer expectation', 'meet expectation', 'exceed expectation'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business', 'sales'],
    category: 'business'
  },
    {
    id: 'vocab_demand_013',
    word: 'preference',
    ipa: '/ˈprefrəns/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Favoured choice',
        example: 'What is your preference?',
        turkishMeaning: 'tercih'
      }
    ],
    imageUrl: '/images/vocab/preference.jpg',
    examples: ['What is your preference?'],
    collocations: ['customer preference', 'preference setting', 'preference survey'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_014',
    word: 'need',
    ipa: '/niːd/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Essential requirement',
        example: 'We understand your needs.',
        turkishMeaning: 'ihtiyaç'
      }
    ],
    imageUrl: '/images/vocab/need.jpg',
    examples: ['We understand your needs.'],
    collocations: ['customer need', 'business need', 'meet need'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_015',
    word: 'want',
    ipa: '/wɒnt/',
    partOfSpeech: 'adjective',
    definitions: [
      {
        meaning: 'Desired but not essential',
        example: 'Tell us what you want.',
        turkishMeaning: 'istek'
      }
    ],
    imageUrl: '/images/vocab/want.jpg',
    examples: ['Tell us what you want.'],
    collocations: ['customer want', 'want list', 'want versus need'],
    synonyms: [],
    antonyms: [],
    difficulty: 'A2',
    tags: ['business'],
    category: 'business'
  },
    {
    id: 'vocab_demand_016',
    word: 'desire',
    ipa: '/dɪˈzaɪə/',
    partOfSpeech: 'noun',
    definitions: [
      {
        meaning: 'Strong wish',
        example: 'We fulfil customer desires.',
        turkishMeaning: 'arzu, istek'
      }
    ],
    imageUrl: '/images/vocab/desire.jpg',
    examples: ['We fulfil customer desires.'],
    collocations: ['customer desire', 'desire for quality', 'desire fulfillment'],
    synonyms: [],
    antonyms: [],
    difficulty: 'B1',
    tags: ['business'],
    category: 'business'
  }
];

export const getVocabularyByCategory = (category: string): VocabularyItem[] => {
  return vocabulary.filter(item => item.category === category);
};

export const getVocabularyByDifficulty = (difficulty: string): VocabularyItem[] => {
  return vocabulary.filter(item => item.difficulty === difficulty);
};

export const searchVocabulary = (query: string): VocabularyItem[] => {
  const lowerQuery = query.toLowerCase();
  return vocabulary.filter(item =>
    item.word.toLowerCase().includes(lowerQuery) ||
    item.definitions.some(def => def.meaning.toLowerCase().includes(lowerQuery)) ||
    item.definitions.some(def => def.turkishMeaning?.toLowerCase().includes(lowerQuery))
  );
};

export default vocabulary;
