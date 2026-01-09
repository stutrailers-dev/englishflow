import { Chunk } from '../types';

export const chunks: Chunk[] = [
  // ==================== TRAVEL / AIRPORT CHUNKS ====================
  {
    id: 'travel_001',
    category: 'travel',
    subcategory: 'airport',
    chunk: "Could I have an aisle seat, please?",
    ipa: "/kʊd aɪ hæv ən aɪl siːt pliːz/",
    context: "Check-in desk - requesting seat preference",
    example: "Good morning. Could I have an aisle seat, please? I prefer to stretch my legs on long flights.",
    turkishEquivalent: "Koridor tarafı koltuk alabilir miyim, lütfen?",
    variations: [
      "I'd prefer an aisle seat if possible",
      "Is there an aisle seat available?",
      "Would it be possible to get an aisle seat?"
    ],
    difficulty: 'A2',
    tags: ['airport', 'check-in', 'polite-request']
  },
  {
    id: 'travel_002',
    category: 'travel',
    subcategory: 'immigration',
    chunk: "I'm travelling on business",
    ipa: "/aɪm ˈtrævəlɪŋ ɒn ˈbɪznəs/",
    context: "Immigration/customs - stating purpose of visit",
    example: "I'm travelling on business. I'm here to meet with clients in the manufacturing sector.",
    turkishEquivalent: "İş seyahati yapıyorum",
    variations: [
      "I'm here on business",
      "This is a business trip",
      "I'm visiting for work purposes"
    ],
    difficulty: 'A2',
    tags: ['airport', 'immigration', 'business']
  },
  {
    id: 'travel_003',
    category: 'travel',
    subcategory: 'airport',
    chunk: "Where can I collect my luggage?",
    ipa: "/weə kæn aɪ kəˈlekt maɪ ˈlʌɡɪdʒ/",
    context: "After landing - finding baggage claim",
    example: "Excuse me, where can I collect my luggage? My flight was from Istanbul.",
    turkishEquivalent: "Bagajımı nereden alabilirim?",
    variations: [
      "Which carousel is for flight TK1234?",
      "Where's the baggage claim area?",
      "Could you direct me to baggage reclaim?"
    ],
    difficulty: 'A2',
    tags: ['airport', 'baggage', 'directions']
  },
  {
    id: 'travel_004',
    category: 'travel',
    subcategory: 'customs',
    chunk: "I'd like to declare these items",
    ipa: "/aɪd laɪk tə dɪˈkleə ðiːz ˈaɪtəmz/",
    context: "Customs - declaring goods",
    example: "I'd like to declare these items. I'm carrying product samples for a trade show.",
    turkishEquivalent: "Bu ürünleri beyan etmek istiyorum",
    variations: [
      "I have something to declare",
      "I need to declare some goods",
      "These are commercial samples"
    ],
    difficulty: 'B1',
    tags: ['airport', 'customs', 'formal']
  },
  {
    id: 'travel_005',
    category: 'travel',
    subcategory: 'directions',
    chunk: "Could you tell me the way to...?",
    ipa: "/kʊd juː tel miː ðə weɪ tuː/",
    context: "Asking for directions anywhere",
    example: "Excuse me, could you tell me the way to the taxi rank? I need to get to the city centre.",
    turkishEquivalent: "Bana ... yolunu söyleyebilir misiniz?",
    variations: [
      "How do I get to...?",
      "Which way is...?",
      "Could you point me in the direction of...?"
    ],
    difficulty: 'A2',
    tags: ['travel', 'directions', 'polite-request']
  },
  {
    id: 'travel_006',
    category: 'travel',
    subcategory: 'problems',
    chunk: "My flight has been delayed",
    ipa: "/maɪ flaɪt həz biːn dɪˈleɪd/",
    context: "Informing someone about travel disruption",
    example: "I'm afraid my flight has been delayed. I'll be arriving about two hours later than planned.",
    turkishEquivalent: "Uçuşum ertelendi",
    variations: [
      "There's been a delay with my flight",
      "My flight's running late",
      "I've been delayed at the airport"
    ],
    difficulty: 'B1',
    tags: ['travel', 'problems', 'notification']
  },
  {
    id: 'travel_007',
    category: 'travel',
    subcategory: 'transport',
    chunk: "I've booked a transfer to the hotel",
    ipa: "/aɪv bʊkt ə ˈtrænsfɜː tə ðə həʊˈtel/",
    context: "Arranging ground transportation",
    example: "I've booked a transfer to the hotel already, but thank you for offering.",
    turkishEquivalent: "Otele transfer ayarladım",
    variations: [
      "I've arranged a pickup",
      "There's a car waiting for me",
      "I've got transport sorted"
    ],
    difficulty: 'B1',
    tags: ['travel', 'transport', 'arrangements']
  },
  {
    id: 'travel_008',
    category: 'travel',
    subcategory: 'practical',
    chunk: "Is there anywhere to charge my phone?",
    ipa: "/ɪz ðeər ˈeniweə tə tʃɑːdʒ maɪ fəʊn/",
    context: "Airport/lounge - practical needs",
    example: "Is there anywhere to charge my phone? I need to make some calls before my meeting.",
    turkishEquivalent: "Telefonumu şarj edebileceğim bir yer var mı?",
    variations: [
      "Where can I find a charging point?",
      "Are there any power outlets available?",
      "Could I charge my phone somewhere?"
    ],
    difficulty: 'A2',
    tags: ['travel', 'practical', 'question']
  },
  {
    id: 'travel_009',
    category: 'travel',
    subcategory: 'immigration',
    chunk: "I'll be staying for three days",
    ipa: "/aɪl biː ˈsteɪɪŋ fə θriː deɪz/",
    context: "Immigration - duration of stay",
    example: "I'll be staying for three days. I have meetings on Monday and Tuesday, then I fly back.",
    turkishEquivalent: "Üç gün kalacağım",
    variations: [
      "My visit is for three days",
      "I'm here until Thursday",
      "I'll be leaving on the 15th"
    ],
    difficulty: 'A2',
    tags: ['airport', 'immigration', 'duration']
  },
  {
    id: 'travel_010',
    category: 'travel',
    subcategory: 'practical',
    chunk: "Could I have a receipt for this, please?",
    ipa: "/kʊd aɪ hæv ə rɪˈsiːt fə ðɪs pliːz/",
    context: "Any transaction - requesting documentation",
    example: "Could I have a receipt for this, please? I need it for my expense report.",
    turkishEquivalent: "Bunun için fiş alabilir miyim, lütfen?",
    variations: [
      "May I have a receipt?",
      "I'll need a receipt for that",
      "Could you provide a receipt?"
    ],
    difficulty: 'A2',
    tags: ['travel', 'business', 'practical']
  },
  {
    id: 'travel_011',
    category: 'travel',
    subcategory: 'hotel',
    chunk: "I have a reservation under the name...",
    ipa: "/aɪ hæv ə ˌrezəˈveɪʃən ˈʌndə ðə neɪm/",
    context: "Hotel check-in",
    example: "Good evening. I have a reservation under the name Yilmaz for two nights.",
    turkishEquivalent: "... adına rezervasyonum var",
    variations: [
      "I've booked a room under...",
      "There should be a booking for...",
      "I made a reservation online"
    ],
    difficulty: 'A2',
    tags: ['hotel', 'check-in', 'reservation']
  },
  {
    id: 'travel_012',
    category: 'travel',
    subcategory: 'hotel',
    chunk: "Could I have a room with a view?",
    ipa: "/kʊd aɪ hæv ə ruːm wɪð ə vjuː/",
    context: "Hotel - room preference",
    example: "Could I have a room with a view, if one's available? I'd love to see the city skyline.",
    turkishEquivalent: "Manzaralı bir oda alabilir miyim?",
    variations: [
      "Is there a room overlooking...?",
      "I'd prefer a room with a view",
      "Do you have any rooms facing...?"
    ],
    difficulty: 'B1',
    tags: ['hotel', 'request', 'preference']
  },
  {
    id: 'travel_013',
    category: 'travel',
    subcategory: 'hotel',
    chunk: "What time is breakfast served?",
    ipa: "/wɒt taɪm ɪz ˈbrekfəst sɜːvd/",
    context: "Hotel - asking about services",
    example: "What time is breakfast served? I have an early meeting tomorrow.",
    turkishEquivalent: "Kahvaltı saat kaçta servis ediliyor?",
    variations: [
      "When does breakfast start?",
      "What are the breakfast hours?",
      "Is breakfast included in my rate?"
    ],
    difficulty: 'A2',
    tags: ['hotel', 'services', 'question']
  },
  {
    id: 'travel_014',
    category: 'travel',
    subcategory: 'hotel',
    chunk: "Could you arrange a wake-up call?",
    ipa: "/kʊd juː əˈreɪndʒ ə weɪk ʌp kɔːl/",
    context: "Hotel - requesting service",
    example: "Could you arrange a wake-up call for 6 AM? I have an early flight to catch.",
    turkishEquivalent: "Uyandırma servisi ayarlayabilir misiniz?",
    variations: [
      "I'd like a wake-up call at...",
      "Could you wake me at...?",
      "Is there a wake-up call service?"
    ],
    difficulty: 'A2',
    tags: ['hotel', 'service', 'request']
  },
  {
    id: 'travel_015',
    category: 'travel',
    subcategory: 'hotel',
    chunk: "I'd like to extend my stay",
    ipa: "/aɪd laɪk tə ɪkˈstend maɪ steɪ/",
    context: "Hotel - extending reservation",
    example: "I'd like to extend my stay by one more night, if possible. The meetings are running over.",
    turkishEquivalent: "Kalış süremimi uzatmak istiyorum",
    variations: [
      "Could I stay an extra night?",
      "Is it possible to extend my booking?",
      "I need to add another night"
    ],
    difficulty: 'B1',
    tags: ['hotel', 'reservation', 'request']
  },
  {
    id: 'travel_016',
    category: 'travel',
    subcategory: 'transport',
    chunk: "How long does it take to get to...?",
    ipa: "/haʊ lɒŋ dʌz ɪt teɪk tə ɡet tuː/",
    context: "Asking about travel time",
    example: "How long does it take to get to the city centre from here? Is traffic usually heavy?",
    turkishEquivalent: "... gitmek ne kadar sürer?",
    variations: [
      "What's the journey time to...?",
      "How far is it to...?",
      "How long is the trip to...?"
    ],
    difficulty: 'A2',
    tags: ['transport', 'directions', 'question']
  },
  {
    id: 'travel_017',
    category: 'travel',
    subcategory: 'transport',
    chunk: "Could you drop me off at...?",
    ipa: "/kʊd juː drɒp miː ɒf æt/",
    context: "Taxi/car - requesting destination",
    example: "Could you drop me off at the main entrance, please? I'm meeting someone there.",
    turkishEquivalent: "Beni ... bırakabilir misiniz?",
    variations: [
      "Please take me to...",
      "I'd like to go to...",
      "Can you stop at...?"
    ],
    difficulty: 'A2',
    tags: ['transport', 'taxi', 'request']
  },
  {
    id: 'travel_018',
    category: 'travel',
    subcategory: 'problems',
    chunk: "I'm having trouble with...",
    ipa: "/aɪm ˈhævɪŋ ˈtrʌbl wɪð/",
    context: "Explaining a problem",
    example: "I'm having trouble with my boarding pass. The app won't display the QR code.",
    turkishEquivalent: "... ile ilgili sorun yaşıyorum",
    variations: [
      "I seem to be having issues with...",
      "There's a problem with...",
      "I can't seem to get... to work"
    ],
    difficulty: 'A2',
    tags: ['problems', 'practical', 'help']
  },
  {
    id: 'travel_019',
    category: 'travel',
    subcategory: 'airport',
    chunk: "Where's the nearest currency exchange?",
    ipa: "/weəz ðə ˈnɪərɪst ˈkʌrənsi ɪksˈtʃeɪndʒ/",
    context: "Airport - finding services",
    example: "Excuse me, where's the nearest currency exchange? I need to get some pounds.",
    turkishEquivalent: "En yakın döviz bürosu nerede?",
    variations: [
      "Is there a bureau de change nearby?",
      "Where can I change money?",
      "Do you know where I can exchange currency?"
    ],
    difficulty: 'A2',
    tags: ['airport', 'money', 'directions']
  },
  {
    id: 'travel_020',
    category: 'travel',
    subcategory: 'airport',
    chunk: "I need to catch a connecting flight",
    ipa: "/aɪ niːd tə kætʃ ə kəˈnektɪŋ flaɪt/",
    context: "Airport - explaining urgency",
    example: "I need to catch a connecting flight to Manchester. Can you tell me which terminal I need?",
    turkishEquivalent: "Aktarmalı bir uçuş yakalamam gerekiyor",
    variations: [
      "I have a connection to...",
      "My connecting flight is...",
      "I'm transferring to another flight"
    ],
    difficulty: 'B1',
    tags: ['airport', 'connection', 'travel']
  },

  // ==================== TECHNICAL / BUSINESS CHUNKS ====================
  {
    id: 'tech_001',
    category: 'technical',
    subcategory: 'presentations',
    chunk: "I'd like to walk you through the specifications",
    ipa: "/aɪd laɪk tə wɔːk juː θruː ðə ˌspesɪfɪˈkeɪʃənz/",
    context: "Presenting technical details to a client",
    example: "I'd like to walk you through the specifications of our 14.7 cubic metre concrete mixer.",
    turkishEquivalent: "Sizinle teknik özellikleri incelemek isterim",
    variations: [
      "Let me walk you through the specs",
      "Allow me to explain the technical details",
      "I'll take you through the specifications"
    ],
    difficulty: 'B1',
    tags: ['presentation', 'formal', 'client-facing']
  },
  {
    id: 'tech_002',
    category: 'technical',
    subcategory: 'specifications',
    chunk: "The load capacity is rated at...",
    ipa: "/ðə ləʊd kəˈpæsəti ɪz ˈreɪtɪd æt/",
    context: "Discussing trailer specifications",
    example: "The load capacity is rated at 45 tonnes, which exceeds the European standard.",
    turkishEquivalent: "Yük kapasitesi ... olarak derecelendirilmiştir",
    variations: [
      "It's rated to carry...",
      "The maximum load is...",
      "It can handle up to..."
    ],
    difficulty: 'B1',
    tags: ['technical', 'specifications', 'semi-trailer']
  },
  {
    id: 'tech_003',
    category: 'technical',
    subcategory: 'features',
    chunk: "This model features a hydraulic system that...",
    ipa: "/ðɪs ˈmɒdl ˈfiːtʃəz ə haɪˈdrɒlɪk ˈsɪstəm ðæt/",
    context: "Explaining product features",
    example: "This model features a hydraulic system that provides smooth and precise control.",
    turkishEquivalent: "Bu model, ... bir hidrolik sisteme sahiptir",
    variations: [
      "It comes equipped with...",
      "The hydraulic system includes...",
      "One key feature is the hydraulic..."
    ],
    difficulty: 'B1',
    tags: ['technical', 'features', 'hydraulic']
  },
  {
    id: 'tech_004',
    category: 'technical',
    subcategory: 'meetings',
    chunk: "Could you clarify what you mean by...?",
    ipa: "/kʊd juː ˈklærɪfaɪ wɒt juː miːn baɪ/",
    context: "Asking for clarification in meetings",
    example: "Could you clarify what you mean by 'extended warranty'? Does that cover all components?",
    turkishEquivalent: "... ile ne demek istediğinizi açıklayabilir misiniz?",
    variations: [
      "What exactly do you mean by...?",
      "Could you elaborate on...?",
      "I'm not quite sure I follow - could you explain...?"
    ],
    difficulty: 'B1',
    tags: ['meeting', 'clarification', 'professional']
  },
  {
    id: 'tech_005',
    category: 'technical',
    subcategory: 'meetings',
    chunk: "Let me check with our engineering team",
    ipa: "/let miː tʃek wɪð aʊər ˌendʒɪˈnɪərɪŋ tiːm/",
    context: "Deferring technical questions appropriately",
    example: "That's a very specific question. Let me check with our engineering team and get back to you.",
    turkishEquivalent: "Mühendislik ekibimize danışmama izin verin",
    variations: [
      "I'll need to consult with our engineers",
      "Let me confirm that with the technical team",
      "I'll get our engineers to verify that"
    ],
    difficulty: 'B1',
    tags: ['meeting', 'professional', 'deferring']
  },
  {
    id: 'tech_006',
    category: 'technical',
    subcategory: 'delivery',
    chunk: "The delivery timeline would be approximately...",
    ipa: "/ðə dɪˈlɪvəri ˈtaɪmlaɪn wʊd biː əˈprɒksɪmətli/",
    context: "Discussing production and delivery",
    example: "The delivery timeline would be approximately 8-10 weeks from order confirmation.",
    turkishEquivalent: "Teslimat süresi yaklaşık ... olacaktır",
    variations: [
      "We're looking at roughly...",
      "Lead time is typically...",
      "You can expect delivery in..."
    ],
    difficulty: 'B1',
    tags: ['business', 'delivery', 'timeline']
  },
  {
    id: 'tech_007',
    category: 'technical',
    subcategory: 'compliance',
    chunk: "This complies with EU regulations",
    ipa: "/ðɪs kəmˈplaɪz wɪð ˌiːˈjuː ˌreɡjʊˈleɪʃənz/",
    context: "Discussing regulatory compliance",
    example: "This complies with EU regulations, specifically the 96/53/EC directive on weights and dimensions.",
    turkishEquivalent: "Bu, AB yönetmeliklerine uygundur",
    variations: [
      "It meets all EU standards",
      "We're fully compliant with...",
      "This is certified to EU specifications"
    ],
    difficulty: 'B1',
    tags: ['technical', 'compliance', 'regulations']
  },
  {
    id: 'tech_008',
    category: 'technical',
    subcategory: 'quotations',
    chunk: "Would you like me to prepare a detailed quotation?",
    ipa: "/wʊd juː laɪk miː tə prɪˈpeə ə ˈdiːteɪld kwəʊˈteɪʃən/",
    context: "Offering to follow up with pricing",
    example: "Would you like me to prepare a detailed quotation based on the specifications we discussed?",
    turkishEquivalent: "Detaylı bir teklif hazırlamamı ister misiniz?",
    variations: [
      "Shall I send over a quote?",
      "I can put together a formal offer",
      "Would a detailed proposal be helpful?"
    ],
    difficulty: 'B1',
    tags: ['business', 'sales', 'follow-up']
  },
  {
    id: 'tech_009',
    category: 'technical',
    subcategory: 'materials',
    chunk: "The chassis is constructed from high-strength steel",
    ipa: "/ðə ˈʃæsi ɪz kənˈstrʌktɪd frɒm haɪ streŋθ stiːl/",
    context: "Describing construction materials",
    example: "The chassis is constructed from high-strength steel, S700 grade, which reduces weight while maintaining durability.",
    turkishEquivalent: "Şasi, yüksek mukavemetli çelikten imal edilmiştir",
    variations: [
      "It's built using...",
      "We use high-grade steel for...",
      "The frame is made from..."
    ],
    difficulty: 'B1',
    tags: ['technical', 'materials', 'construction']
  },
  {
    id: 'tech_010',
    category: 'technical',
    subcategory: 'requirements',
    chunk: "What are your requirements in terms of...?",
    ipa: "/wɒt ɑː jɔː rɪˈkwaɪəmənts ɪn tɜːmz ɒv/",
    context: "Understanding customer needs",
    example: "What are your requirements in terms of axle configuration? Do you need air suspension?",
    turkishEquivalent: "... açısından gereksinimleriniz nelerdir?",
    variations: [
      "What do you need regarding...?",
      "What are you looking for in terms of...?",
      "Could you tell me your requirements for...?"
    ],
    difficulty: 'B1',
    tags: ['meeting', 'requirements', 'questions']
  },
  {
    id: 'tech_011',
    category: 'technical',
    subcategory: 'documentation',
    chunk: "I'll send you the technical drawings",
    ipa: "/aɪl send juː ðə ˈteknɪkəl ˈdrɔːɪŋz/",
    context: "Following up with documentation",
    example: "I'll send you the technical drawings and the GA layout by end of day tomorrow.",
    turkishEquivalent: "Size teknik çizimleri göndereceğim",
    variations: [
      "I'll email the CAD files",
      "Let me share the drawings with you",
      "I'll get the documentation over to you"
    ],
    difficulty: 'B1',
    tags: ['business', 'documentation', 'follow-up']
  },
  {
    id: 'tech_012',
    category: 'technical',
    subcategory: 'factory',
    chunk: "Could we schedule a factory visit?",
    ipa: "/kʊd wiː ˈʃedjuːl ə ˈfæktri ˈvɪzɪt/",
    context: "Inviting clients to see production",
    example: "Could we schedule a factory visit? I think it would be valuable for you to see our production process.",
    turkishEquivalent: "Bir fabrika ziyareti planlayabilir miyiz?",
    variations: [
      "Would you like to visit our facility?",
      "Perhaps a site tour would be helpful?",
      "I'd like to invite you to our factory"
    ],
    difficulty: 'B1',
    tags: ['business', 'invitation', 'sales']
  },
  {
    id: 'tech_013',
    category: 'technical',
    subcategory: 'specifications',
    chunk: "The turning radius is optimised for...",
    ipa: "/ðə ˈtɜːnɪŋ ˈreɪdiəs ɪz ˈɒptɪmaɪzd fɔː/",
    context: "Discussing vehicle manoeuvrability",
    example: "The turning radius is optimised for urban deliveries, which is crucial for construction sites.",
    turkishEquivalent: "Dönüş yarıçapı ... için optimize edilmiştir",
    variations: [
      "It's designed for tight turns",
      "The steering geometry allows for...",
      "Manoeuvrability is enhanced by..."
    ],
    difficulty: 'B2',
    tags: ['technical', 'specifications', 'vehicle-dynamics']
  },
  {
    id: 'tech_014',
    category: 'technical',
    subcategory: 'customisation',
    chunk: "We can customise this to your specifications",
    ipa: "/wiː kæn ˈkʌstəmaɪz ðɪs tə jɔː ˌspesɪfɪˈkeɪʃənz/",
    context: "Offering bespoke solutions",
    example: "We can customise this to your specifications. What modifications would you need?",
    turkishEquivalent: "Bunu sizin özelliklerinize göre özelleştirebiliriz",
    variations: [
      "This can be tailored to your needs",
      "We offer bespoke solutions",
      "We're flexible on the configuration"
    ],
    difficulty: 'B1',
    tags: ['business', 'customisation', 'sales']
  },
  {
    id: 'tech_015',
    category: 'technical',
    subcategory: 'demonstration',
    chunk: "Let me demonstrate how this works",
    ipa: "/let miː ˈdemənstreɪt haʊ ðɪs wɜːks/",
    context: "Starting a product demonstration",
    example: "Let me demonstrate how this works. If you look at the control panel here...",
    turkishEquivalent: "Bunun nasıl çalıştığını göstereyim",
    variations: [
      "Allow me to show you",
      "I'll walk you through the operation",
      "Let me give you a demonstration"
    ],
    difficulty: 'B1',
    tags: ['presentation', 'demonstration', 'factory-visit']
  },
  {
    id: 'tech_016',
    category: 'technical',
    subcategory: 'meetings',
    chunk: "I think there might be a misunderstanding",
    ipa: "/aɪ θɪŋk ðeə maɪt biː ə ˌmɪsʌndəˈstændɪŋ/",
    context: "Addressing confusion diplomatically",
    example: "I think there might be a misunderstanding. We agreed on CIF terms, not FOB.",
    turkishEquivalent: "Bir yanlış anlaşılma olduğunu düşünüyorum",
    variations: [
      "There seems to be some confusion",
      "I believe we may have miscommunicated",
      "Perhaps there's been a mix-up"
    ],
    difficulty: 'B1',
    tags: ['business', 'diplomacy', 'problems']
  },
  {
    id: 'tech_017',
    category: 'technical',
    subcategory: 'meetings',
    chunk: "Let me see if I've understood correctly",
    ipa: "/let miː siː ɪf aɪv ˌʌndəˈstʊd kəˈrektli/",
    context: "Confirming understanding",
    example: "Let me see if I've understood correctly. You need delivery by the 15th, is that right?",
    turkishEquivalent: "Doğru anladıysam kontrol edeyim",
    variations: [
      "So, if I understand correctly...",
      "Just to confirm...",
      "Let me make sure I've got this right"
    ],
    difficulty: 'B1',
    tags: ['communication', 'confirmation', 'professional']
  },
  {
    id: 'tech_018',
    category: 'technical',
    subcategory: 'follow-up',
    chunk: "I'll look into it and get back to you",
    ipa: "/aɪl lʊk ˈɪntə ɪt ænd ɡet bæk tə juː/",
    context: "Promising follow-up on an issue",
    example: "That's a good question. I'll look into it and get back to you by tomorrow morning.",
    turkishEquivalent: "İnceleyip size döneceğim",
    variations: [
      "Let me investigate and follow up",
      "I'll find out and let you know",
      "Give me some time to check on that"
    ],
    difficulty: 'B1',
    tags: ['business', 'follow-up', 'professional']
  },
  {
    id: 'tech_019',
    category: 'technical',
    subcategory: 'comparison',
    chunk: "Compared to the previous model, this offers...",
    ipa: "/kəmˈpeəd tə ðə ˈpriːviəs ˈmɒdl ðɪs ˈɒfəz/",
    context: "Product comparison",
    example: "Compared to the previous model, this offers 15% greater fuel efficiency and improved safety features.",
    turkishEquivalent: "Önceki modelle karşılaştırıldığında, bu ... sunuyor",
    variations: [
      "The main improvements over the old model are...",
      "Unlike the previous version...",
      "This has been enhanced with..."
    ],
    difficulty: 'B1',
    tags: ['technical', 'comparison', 'sales']
  },
  {
    id: 'tech_020',
    category: 'technical',
    subcategory: 'warranty',
    chunk: "The warranty covers...",
    ipa: "/ðə ˈwɒrənti ˈkʌvəz/",
    context: "Explaining warranty terms",
    example: "The warranty covers all mechanical components for 24 months or 200,000 kilometres, whichever comes first.",
    turkishEquivalent: "Garanti ... kapsar",
    variations: [
      "You're covered for...",
      "The guarantee includes...",
      "Under the warranty, you're entitled to..."
    ],
    difficulty: 'B1',
    tags: ['technical', 'warranty', 'after-sales']
  },

  // ==================== SOCIAL / DINING CHUNKS ====================
  {
    id: 'social_001',
    category: 'social',
    subcategory: 'greeting',
    chunk: "It's lovely to finally meet you in person",
    ipa: "/ɪts ˈlʌvli tə ˈfaɪnəli miːt juː ɪn ˈpɜːsən/",
    context: "First in-person meeting after calls/emails",
    example: "It's lovely to finally meet you in person! We've been emailing for months.",
    turkishEquivalent: "Sonunda sizinle yüz yüze tanışmak çok güzel",
    variations: [
      "Great to put a face to the name",
      "Wonderful to meet you at last",
      "So nice to finally meet face to face"
    ],
    difficulty: 'B1',
    tags: ['social', 'greeting', 'first-meeting']
  },
  {
    id: 'social_002',
    category: 'social',
    subcategory: 'small-talk',
    chunk: "How was your journey?",
    ipa: "/haʊ wɒz jɔː ˈdʒɜːni/",
    context: "Small talk when greeting a visitor",
    example: "How was your journey? I hope the traffic wasn't too bad from the airport.",
    turkishEquivalent: "Yolculuğunuz nasıldı?",
    variations: [
      "Did you have a good trip?",
      "How was the flight?",
      "Was the journey alright?"
    ],
    difficulty: 'A2',
    tags: ['social', 'small-talk', 'greeting']
  },
  {
    id: 'social_003',
    category: 'social',
    subcategory: 'dining',
    chunk: "Shall we grab a bite to eat?",
    ipa: "/ʃæl wiː ɡræb ə baɪt tə iːt/",
    context: "Suggesting food informally",
    example: "Shall we grab a bite to eat? There's a nice Italian place around the corner.",
    turkishEquivalent: "Bir şeyler yiyelim mi?",
    variations: [
      "Fancy getting some lunch?",
      "Would you like to get something to eat?",
      "How about we get dinner?"
    ],
    difficulty: 'B1',
    tags: ['social', 'food', 'invitation']
  },
  {
    id: 'social_004',
    category: 'social',
    subcategory: 'dining',
    chunk: "I'll have whatever you're having",
    ipa: "/aɪl hæv wɒtˈevə jɔː ˈhævɪŋ/",
    context: "Ordering food when unsure",
    example: "I'm not sure what to order. I'll have whatever you're having - you know the local cuisine better.",
    turkishEquivalent: "Ben de sizin alacağınızdan alayım",
    variations: [
      "I'll follow your lead",
      "What would you recommend?",
      "I'll try what you suggest"
    ],
    difficulty: 'B1',
    tags: ['social', 'restaurant', 'ordering']
  },
  {
    id: 'social_005',
    category: 'social',
    subcategory: 'dining',
    chunk: "This is on me",
    ipa: "/ðɪs ɪz ɒn miː/",
    context: "Offering to pay the bill",
    example: "Please, this is on me. You can get the next one when you visit Konya.",
    turkishEquivalent: "Hesap benden",
    variations: [
      "Let me get this",
      "I'll take care of the bill",
      "It's my treat"
    ],
    difficulty: 'A2',
    tags: ['social', 'restaurant', 'paying']
  },
  {
    id: 'social_006',
    category: 'social',
    subcategory: 'preferences',
    chunk: "I'm not fussy about food",
    ipa: "/aɪm nɒt ˈfʌsi əˈbaʊt fuːd/",
    context: "Being flexible about dining choices",
    example: "I'm not fussy about food, so wherever you'd like to go is fine with me.",
    turkishEquivalent: "Yemek konusunda seçici değilim",
    variations: [
      "I'm easy-going about food",
      "I'll eat pretty much anything",
      "I'm not picky"
    ],
    difficulty: 'B1',
    tags: ['social', 'food', 'preferences']
  },
  {
    id: 'social_007',
    category: 'social',
    subcategory: 'dining',
    chunk: "Could I get the bill, please?",
    ipa: "/kʊd aɪ ɡet ðə bɪl pliːz/",
    context: "Asking for the restaurant bill",
    example: "Excuse me, could I get the bill, please? We have an early start tomorrow.",
    turkishEquivalent: "Hesabı alabilir miyim, lütfen?",
    variations: [
      "May we have the bill?",
      "Could we settle up?",
      "The bill when you're ready, please"
    ],
    difficulty: 'A2',
    tags: ['social', 'restaurant', 'paying']
  },
  {
    id: 'social_008',
    category: 'social',
    subcategory: 'small-talk',
    chunk: "What do you do when you're not working?",
    ipa: "/wɒt duː juː duː wen jɔː nɒt ˈwɜːkɪŋ/",
    context: "Small talk - asking about hobbies",
    example: "What do you do when you're not working? Do you have any hobbies?",
    turkishEquivalent: "Çalışmadığınız zamanlarda ne yaparsınız?",
    variations: [
      "What are your interests outside work?",
      "How do you spend your free time?",
      "Any hobbies or interests?"
    ],
    difficulty: 'A2',
    tags: ['social', 'small-talk', 'hobbies']
  },
  {
    id: 'social_009',
    category: 'social',
    subcategory: 'preferences',
    chunk: "I'm afraid I don't drink alcohol",
    ipa: "/aɪm əˈfreɪd aɪ dəʊnt drɪŋk ˈælkəhɒl/",
    context: "Politely declining alcohol",
    example: "I'm afraid I don't drink alcohol, but please don't let me stop you. I'll have sparkling water.",
    turkishEquivalent: "Maalesef alkol almıyorum",
    variations: [
      "I don't drink, but thank you",
      "I'll stick to soft drinks",
      "Just water for me, thanks"
    ],
    difficulty: 'A2',
    tags: ['social', 'restaurant', 'preferences']
  },
  {
    id: 'social_010',
    category: 'social',
    subcategory: 'farewell',
    chunk: "It's been a pleasure doing business with you",
    ipa: "/ɪts biːn ə ˈpleʒə ˈduːɪŋ ˈbɪznəs wɪð juː/",
    context: "Closing a successful meeting",
    example: "It's been a pleasure doing business with you. I look forward to a long partnership.",
    turkishEquivalent: "Sizinle iş yapmak bir zevkti",
    variations: [
      "I've really enjoyed working with you",
      "This has been a great partnership",
      "It's been wonderful working together"
    ],
    difficulty: 'B1',
    tags: ['social', 'business', 'closing']
  },
  {
    id: 'social_011',
    category: 'social',
    subcategory: 'small-talk',
    chunk: "The weather's been rather unpredictable lately",
    ipa: "/ðə ˈweðəz biːn ˈrɑːðər ˌʌnprɪˈdɪktəbl ˈleɪtli/",
    context: "Classic British small talk about weather",
    example: "The weather's been rather unpredictable lately, hasn't it? Sunshine one minute, rain the next!",
    turkishEquivalent: "Son günlerde hava oldukça değişken",
    variations: [
      "Bit of a mixed bag weather-wise",
      "The weather can't make up its mind",
      "Typical British weather, isn't it?"
    ],
    difficulty: 'B1',
    tags: ['social', 'small-talk', 'british']
  },
  {
    id: 'social_012',
    category: 'social',
    subcategory: 'dining',
    chunk: "I must say, that was absolutely delicious",
    ipa: "/aɪ mʌst seɪ ðæt wɒz ˌæbsəˈluːtli dɪˈlɪʃəs/",
    context: "Complimenting food",
    example: "I must say, that was absolutely delicious. I'll have to come back here next time I'm in town.",
    turkishEquivalent: "Söylemeliyim ki, gerçekten muhteşemdi",
    variations: [
      "That was lovely",
      "Absolutely superb meal",
      "I thoroughly enjoyed that"
    ],
    difficulty: 'B1',
    tags: ['social', 'restaurant', 'compliments']
  },
  {
    id: 'social_013',
    category: 'social',
    subcategory: 'dining',
    chunk: "Would you mind if we split the bill?",
    ipa: "/wʊd juː maɪnd ɪf wiː splɪt ðə bɪl/",
    context: "Suggesting to share the cost",
    example: "Would you mind if we split the bill? It seems only fair since this is a working dinner.",
    turkishEquivalent: "Hesabı bölüşmemizin sakıncası var mı?",
    variations: [
      "Shall we go halves?",
      "Happy to split it",
      "How about we share the bill?"
    ],
    difficulty: 'B1',
    tags: ['social', 'restaurant', 'paying']
  },
  {
    id: 'social_014',
    category: 'social',
    subcategory: 'dining',
    chunk: "I couldn't possibly eat another bite",
    ipa: "/aɪ ˈkʊdnt ˈpɒsəbli iːt əˈnʌðə baɪt/",
    context: "Politely declining more food",
    example: "Thank you, but I couldn't possibly eat another bite. That was very generous of you.",
    turkishEquivalent: "Bir lokma daha yiyemem",
    variations: [
      "I'm absolutely stuffed",
      "I'm full to bursting",
      "That was more than enough, thank you"
    ],
    difficulty: 'B1',
    tags: ['social', 'food', 'polite-decline']
  },
  {
    id: 'social_015',
    category: 'social',
    subcategory: 'farewell',
    chunk: "Let's keep in touch",
    ipa: "/lets kiːp ɪn tʌtʃ/",
    context: "Ending a meeting with future contact",
    example: "Let's keep in touch. Feel free to call me if you have any questions about the proposal.",
    turkishEquivalent: "İletişimde kalalım",
    variations: [
      "Do stay in contact",
      "Don't be a stranger",
      "Let's not lose touch"
    ],
    difficulty: 'A2',
    tags: ['social', 'farewell', 'business']
  },
  {
    id: 'social_016',
    category: 'social',
    subcategory: 'invitation',
    chunk: "I was wondering if you'd like to...",
    ipa: "/aɪ wɒz ˈwʌndərɪŋ ɪf juːd laɪk tuː/",
    context: "Making polite suggestions",
    example: "I was wondering if you'd like to join us for dinner this evening?",
    turkishEquivalent: "Acaba ... ister misiniz diye merak ediyordum",
    variations: [
      "Would you be interested in...?",
      "Perhaps you might like to...?",
      "Would you fancy...?"
    ],
    difficulty: 'B1',
    tags: ['social', 'invitations', 'polite']
  },
  {
    id: 'social_017',
    category: 'social',
    subcategory: 'response',
    chunk: "That sounds absolutely lovely",
    ipa: "/ðæt saʊndz ˌæbsəˈluːtli ˈlʌvli/",
    context: "Expressing enthusiasm",
    example: "A dinner at that new restaurant? That sounds absolutely lovely!",
    turkishEquivalent: "Kulağa harika geliyor",
    variations: [
      "That sounds wonderful",
      "That sounds fantastic",
      "What a lovely idea"
    ],
    difficulty: 'B1',
    tags: ['social', 'response', 'positive']
  },
  {
    id: 'social_018',
    category: 'social',
    subcategory: 'timing',
    chunk: "Shall we say around seven?",
    ipa: "/ʃæl wiː seɪ əˈraʊnd ˈsevən/",
    context: "Suggesting a meeting time",
    example: "Shall we say around seven? That should give us enough time after the meeting.",
    turkishEquivalent: "Yedi gibi diyelim mi?",
    variations: [
      "How about around...?",
      "Would ... work for you?",
      "Does ... suit you?"
    ],
    difficulty: 'B1',
    tags: ['social', 'suggestions', 'time']
  },
  {
    id: 'social_019',
    category: 'social',
    subcategory: 'clarification',
    chunk: "Could you repeat that, please? I didn't quite catch it",
    ipa: "/kʊd juː rɪˈpiːt ðæt pliːz aɪ ˈdɪdnt kwaɪt kætʃ ɪt/",
    context: "Asking for repetition",
    example: "I'm sorry, could you repeat that, please? I didn't quite catch it. The connection seems a bit fuzzy.",
    turkishEquivalent: "Tekrar edebilir misiniz? Tam anlayamadım",
    variations: [
      "Sorry, I missed that",
      "Could you say that again?",
      "Would you mind repeating that?"
    ],
    difficulty: 'A2',
    tags: ['communication', 'clarification', 'polite']
  },
  {
    id: 'social_020',
    category: 'social',
    subcategory: 'gratitude',
    chunk: "I really appreciate you taking the time",
    ipa: "/aɪ ˈrɪəli əˈpriːʃieɪt juː ˈteɪkɪŋ ðə taɪm/",
    context: "Expressing gratitude",
    example: "I really appreciate you taking the time to show us around. It's been most informative.",
    turkishEquivalent: "Zaman ayırdığınız için gerçekten minnettarım",
    variations: [
      "Thank you so much for your time",
      "I'm grateful for your time",
      "Thanks for making time for us"
    ],
    difficulty: 'B1',
    tags: ['social', 'gratitude', 'professional']
  },

  // ==================== BUSINESS CHUNKS ====================
  {
    id: 'business_001',
    category: 'business',
    subcategory: 'negotiation',
    chunk: "We might be able to offer a discount if...",
    ipa: "/wiː maɪt biː ˈeɪbl tə ˈɒfər ə ˈdɪskaʊnt ɪf/",
    context: "Negotiating terms",
    example: "We might be able to offer a discount if you commit to a larger order quantity.",
    turkishEquivalent: "Eğer ... ise indirim yapabiliriz",
    variations: [
      "There may be room for a discount if...",
      "We could consider a better price if...",
      "We're open to negotiation if..."
    ],
    difficulty: 'B1',
    tags: ['business', 'negotiation', 'pricing']
  },
  {
    id: 'business_002',
    category: 'business',
    subcategory: 'negotiation',
    chunk: "What sort of budget are you working with?",
    ipa: "/wɒt sɔːt ɒv ˈbʌdʒɪt ɑː juː ˈwɜːkɪŋ wɪð/",
    context: "Understanding client budget",
    example: "Before we go further, what sort of budget are you working with? That will help me tailor our proposal.",
    turkishEquivalent: "Ne tür bir bütçeyle çalışıyorsunuz?",
    variations: [
      "What's your budget for this project?",
      "Do you have a figure in mind?",
      "What are you looking to spend?"
    ],
    difficulty: 'B1',
    tags: ['business', 'budget', 'sales']
  },
  {
    id: 'business_003',
    category: 'business',
    subcategory: 'email',
    chunk: "I'm writing to follow up on our meeting",
    ipa: "/aɪm ˈraɪtɪŋ tə ˈfɒləʊ ʌp ɒn aʊə ˈmiːtɪŋ/",
    context: "Email follow-up",
    example: "I'm writing to follow up on our meeting last Thursday regarding the semi-trailer specifications.",
    turkishEquivalent: "Toplantımızla ilgili takip etmek için yazıyorum",
    variations: [
      "Further to our meeting...",
      "Following on from our discussion...",
      "As discussed in our meeting..."
    ],
    difficulty: 'B1',
    tags: ['business', 'email', 'follow-up']
  },
  {
    id: 'business_004',
    category: 'business',
    subcategory: 'meeting',
    chunk: "Shall we move on to the next item?",
    ipa: "/ʃæl wiː muːv ɒn tə ðə nekst ˈaɪtəm/",
    context: "Managing meeting flow",
    example: "If there are no more questions on that, shall we move on to the next item on the agenda?",
    turkishEquivalent: "Bir sonraki konuya geçelim mi?",
    variations: [
      "Let's proceed to the next point",
      "Can we move on?",
      "If we're all happy, let's continue"
    ],
    difficulty: 'B1',
    tags: ['business', 'meeting', 'facilitation']
  },
  {
    id: 'business_005',
    category: 'business',
    subcategory: 'agreement',
    chunk: "We're happy to proceed on those terms",
    ipa: "/wɪər ˈhæpi tə prəˈsiːd ɒn ðəʊz tɜːmz/",
    context: "Agreeing to business terms",
    example: "After discussing with my team, we're happy to proceed on those terms. When can we sign?",
    turkishEquivalent: "Bu şartlarla devam etmekten memnunuz",
    variations: [
      "We're in agreement",
      "Those terms work for us",
      "We can accept those conditions"
    ],
    difficulty: 'B1',
    tags: ['business', 'agreement', 'negotiation']
  },
  {
    id: 'business_006',
    category: 'business',
    subcategory: 'payment',
    chunk: "What are your payment terms?",
    ipa: "/wɒt ɑː jɔː ˈpeɪmənt tɜːmz/",
    context: "Discussing payment conditions",
    example: "What are your payment terms? Do you require a deposit upfront?",
    turkishEquivalent: "Ödeme koşullarınız nelerdir?",
    variations: [
      "What payment options do you offer?",
      "How do you prefer to handle payment?",
      "Can you tell me about your payment terms?"
    ],
    difficulty: 'B1',
    tags: ['business', 'payment', 'negotiation']
  },
  {
    id: 'business_007',
    category: 'business',
    subcategory: 'email',
    chunk: "Please find attached...",
    ipa: "/pliːz faɪnd əˈtætʃt/",
    context: "Email with attachments",
    example: "Please find attached the revised quotation and updated technical specifications.",
    turkishEquivalent: "Ekte ... bulabilirsiniz",
    variations: [
      "I've attached...",
      "Attached you will find...",
      "The attached document contains..."
    ],
    difficulty: 'B1',
    tags: ['business', 'email', 'formal']
  },
  {
    id: 'business_008',
    category: 'business',
    subcategory: 'scheduling',
    chunk: "Would it be convenient to schedule a call?",
    ipa: "/wʊd ɪt biː kənˈviːniənt tə ˈʃedjuːl ə kɔːl/",
    context: "Arranging a phone meeting",
    example: "Would it be convenient to schedule a call next week to discuss the proposal in detail?",
    turkishEquivalent: "Bir görüşme ayarlamak uygun olur mu?",
    variations: [
      "Could we arrange a call?",
      "When would be a good time to talk?",
      "Shall we set up a meeting?"
    ],
    difficulty: 'B1',
    tags: ['business', 'scheduling', 'meeting']
  },
  {
    id: 'business_009',
    category: 'business',
    subcategory: 'deadline',
    chunk: "When would you need this by?",
    ipa: "/wen wʊd juː niːd ðɪs baɪ/",
    context: "Understanding deadlines",
    example: "When would you need this by? We want to make sure we meet your timeline.",
    turkishEquivalent: "Bunu ne zaman istiyorsunuz?",
    variations: [
      "What's your deadline?",
      "When do you need delivery?",
      "What timeframe are we looking at?"
    ],
    difficulty: 'B1',
    tags: ['business', 'deadline', 'planning']
  },
  {
    id: 'business_010',
    category: 'business',
    subcategory: 'confirmation',
    chunk: "Just to confirm, we agreed on...",
    ipa: "/dʒʌst tə kənˈfɜːm wiː əˈɡriːd ɒn/",
    context: "Confirming agreement",
    example: "Just to confirm, we agreed on delivery by the end of March with CIF Rotterdam terms.",
    turkishEquivalent: "Onaylamak gerekirse, ... üzerinde anlaştık",
    variations: [
      "To summarise what we agreed...",
      "So we're in agreement that...",
      "Let me confirm the details..."
    ],
    difficulty: 'B1',
    tags: ['business', 'confirmation', 'meeting']
  },
  {
    id: 'business_011',
    category: 'business',
    subcategory: 'apology',
    chunk: "I apologise for the delay in getting back to you",
    ipa: "/aɪ əˈpɒlədʒaɪz fə ðə dɪˈleɪ ɪn ˈɡetɪŋ bæk tə juː/",
    context: "Apologising for late response",
    example: "I apologise for the delay in getting back to you. I've been travelling and only just got your message.",
    turkishEquivalent: "Size geç dönüş yaptığım için özür dilerim",
    variations: [
      "Sorry for the late reply",
      "Please accept my apologies for the delay",
      "I'm sorry it took me so long to respond"
    ],
    difficulty: 'B1',
    tags: ['business', 'apology', 'email']
  },
  {
    id: 'business_012',
    category: 'business',
    subcategory: 'introduction',
    chunk: "Allow me to introduce myself",
    ipa: "/əˈlaʊ miː tə ˌɪntrəˈdjuːs maɪˈself/",
    context: "Self-introduction in business",
    example: "Allow me to introduce myself. I'm Ahmet Yilmaz, Export Sales Manager at Krone Trailer.",
    turkishEquivalent: "Kendimi tanıtmama izin verin",
    variations: [
      "Let me introduce myself",
      "I'd like to introduce myself",
      "I should introduce myself"
    ],
    difficulty: 'B1',
    tags: ['business', 'introduction', 'formal']
  },
  {
    id: 'business_013',
    category: 'business',
    subcategory: 'closing',
    chunk: "I look forward to hearing from you",
    ipa: "/aɪ lʊk ˈfɔːwəd tə ˈhɪərɪŋ frɒm juː/",
    context: "Email closing",
    example: "I look forward to hearing from you at your earliest convenience.",
    turkishEquivalent: "Sizden haber bekliyorum",
    variations: [
      "I await your reply",
      "Please don't hesitate to contact me",
      "I hope to hear from you soon"
    ],
    difficulty: 'B1',
    tags: ['business', 'email', 'closing']
  },
  {
    id: 'business_014',
    category: 'business',
    subcategory: 'referral',
    chunk: "I was referred to you by...",
    ipa: "/aɪ wɒz rɪˈfɜːd tə juː baɪ/",
    context: "Mentioning a referral",
    example: "I was referred to you by John Smith from the Birmingham trade show. He mentioned you might be interested in our products.",
    turkishEquivalent: "... tarafından size yönlendirildim",
    variations: [
      "... suggested I contact you",
      "... gave me your details",
      "I got your contact from..."
    ],
    difficulty: 'B1',
    tags: ['business', 'networking', 'introduction']
  },
  {
    id: 'business_015',
    category: 'business',
    subcategory: 'urgency',
    chunk: "This is a matter of some urgency",
    ipa: "/ðɪs ɪz ə ˈmætər ɒv sʌm ˈɜːdʒənsi/",
    context: "Expressing urgency professionally",
    example: "This is a matter of some urgency. Our client needs a response by Friday at the latest.",
    turkishEquivalent: "Bu oldukça acil bir konu",
    variations: [
      "We need to address this urgently",
      "Time is of the essence",
      "We're working to a tight deadline"
    ],
    difficulty: 'B2',
    tags: ['business', 'urgency', 'professional']
  },

  // ==================== DAILY CHUNKS ====================
  {
    id: 'daily_001',
    category: 'daily',
    subcategory: 'shopping',
    chunk: "I'm just looking, thank you",
    ipa: "/aɪm dʒʌst ˈlʊkɪŋ θæŋk juː/",
    context: "Responding to shop assistant",
    example: "I'm just looking, thank you. I'll let you know if I need any help.",
    turkishEquivalent: "Sadece bakıyorum, teşekkürler",
    variations: [
      "Just browsing, thanks",
      "I'm fine, just having a look",
      "I'll come find you if I need help"
    ],
    difficulty: 'A2',
    tags: ['daily', 'shopping', 'polite']
  },
  {
    id: 'daily_002',
    category: 'daily',
    subcategory: 'requests',
    chunk: "Would you mind if I...?",
    ipa: "/wʊd juː maɪnd ɪf aɪ/",
    context: "Polite requests",
    example: "Would you mind if I opened the window? It's getting rather warm in here.",
    turkishEquivalent: "... sakıncası var mı?",
    variations: [
      "Do you mind if I...?",
      "Is it alright if I...?",
      "Would it be okay if I...?"
    ],
    difficulty: 'B1',
    tags: ['daily', 'requests', 'polite']
  },
  {
    id: 'daily_003',
    category: 'daily',
    subcategory: 'directions',
    chunk: "I'm afraid I'm not from around here",
    ipa: "/aɪm əˈfreɪd aɪm nɒt frɒm əˈraʊnd hɪə/",
    context: "Unable to give directions",
    example: "I'm afraid I'm not from around here, but I think there's a map over there.",
    turkishEquivalent: "Maalesef bu civarda oturmuyorum",
    variations: [
      "Sorry, I'm not local",
      "I'm not familiar with this area",
      "I'm a visitor here myself"
    ],
    difficulty: 'A2',
    tags: ['daily', 'directions', 'apology']
  },
  {
    id: 'daily_004',
    category: 'daily',
    subcategory: 'telephone',
    chunk: "I'm afraid they're not available at the moment",
    ipa: "/aɪm əˈfreɪd ðeə nɒt əˈveɪləbl ət ðə ˈməʊmənt/",
    context: "Phone call - person unavailable",
    example: "I'm afraid they're not available at the moment. Would you like to leave a message?",
    turkishEquivalent: "Maalesef şu anda müsait değiller",
    variations: [
      "They're in a meeting right now",
      "They're not at their desk",
      "They've just stepped out"
    ],
    difficulty: 'B1',
    tags: ['daily', 'telephone', 'formal']
  },
  {
    id: 'daily_005',
    category: 'daily',
    subcategory: 'apology',
    chunk: "I'm terribly sorry, I didn't mean to...",
    ipa: "/aɪm ˈterəbli ˈsɒri aɪ ˈdɪdnt miːn tuː/",
    context: "Apologising for a mistake",
    example: "I'm terribly sorry, I didn't mean to bump into you. Are you alright?",
    turkishEquivalent: "Çok özür dilerim, ... istememiştim",
    variations: [
      "I do apologise",
      "I'm so sorry about that",
      "Please forgive me"
    ],
    difficulty: 'B1',
    tags: ['daily', 'apology', 'polite']
  },
  {
    id: 'daily_006',
    category: 'daily',
    subcategory: 'coffee',
    chunk: "Could I have a flat white, please?",
    ipa: "/kʊd aɪ hæv ə flæt waɪt pliːz/",
    context: "Ordering coffee",
    example: "Could I have a flat white, please? And one of those chocolate croissants.",
    turkishEquivalent: "Bir flat white alabilir miyim, lütfen?",
    variations: [
      "I'd like a...",
      "Can I get a...",
      "May I have a..."
    ],
    difficulty: 'A2',
    tags: ['daily', 'cafe', 'ordering']
  },
  {
    id: 'daily_007',
    category: 'daily',
    subcategory: 'preferences',
    chunk: "I'd rather have... if you don't mind",
    ipa: "/aɪd ˈrɑːðər hæv ɪf juː dəʊnt maɪnd/",
    context: "Expressing preference politely",
    example: "I'd rather have tea, if you don't mind. Coffee keeps me up at night.",
    turkishEquivalent: "Sakıncası yoksa ... tercih ederim",
    variations: [
      "If it's all the same to you...",
      "I think I'd prefer...",
      "I'd be happier with..."
    ],
    difficulty: 'B1',
    tags: ['daily', 'preferences', 'polite']
  },
  {
    id: 'daily_008',
    category: 'daily',
    subcategory: 'health',
    chunk: "I'm feeling a bit under the weather",
    ipa: "/aɪm ˈfiːlɪŋ ə bɪt ˈʌndə ðə ˈweðə/",
    context: "Describing feeling unwell",
    example: "I'm feeling a bit under the weather today. I think I might be coming down with something.",
    turkishEquivalent: "Biraz hastaymış gibi hissediyorum",
    variations: [
      "I'm not feeling too well",
      "I'm a bit off colour",
      "I'm not quite myself today"
    ],
    difficulty: 'B1',
    tags: ['daily', 'health', 'british']
  },
  {
    id: 'daily_009',
    category: 'daily',
    subcategory: 'queue',
    chunk: "Excuse me, is this the queue for...?",
    ipa: "/ɪkˈskjuːz miː ɪz ðɪs ðə kjuː fɔː/",
    context: "Asking about queues",
    example: "Excuse me, is this the queue for the tills? I wasn't sure where it started.",
    turkishEquivalent: "Affedersiniz, bu ... için sıra mı?",
    variations: [
      "Are you in the queue?",
      "Is this where the queue ends?",
      "Am I in the right line for...?"
    ],
    difficulty: 'A2',
    tags: ['daily', 'queue', 'polite']
  },
  {
    id: 'daily_010',
    category: 'daily',
    subcategory: 'gratitude',
    chunk: "That's very kind of you",
    ipa: "/ðæts ˈveri kaɪnd ɒv juː/",
    context: "Expressing gratitude",
    example: "That's very kind of you to offer. I really appreciate it.",
    turkishEquivalent: "Çok naziksiniz",
    variations: [
      "How thoughtful of you",
      "That's so sweet of you",
      "You're too kind"
    ],
    difficulty: 'A2',
    tags: ['daily', 'gratitude', 'polite']
  },
  {
    id: 'daily_011',
    category: 'daily',
    subcategory: 'permission',
    chunk: "Do you mind if I sit here?",
    ipa: "/duː juː maɪnd ɪf aɪ sɪt hɪə/",
    context: "Asking permission politely",
    example: "Do you mind if I sit here? All the other tables seem to be taken.",
    turkishEquivalent: "Buraya otursam sakıncası var mı?",
    variations: [
      "Is this seat taken?",
      "Is anyone sitting here?",
      "May I join you?"
    ],
    difficulty: 'A2',
    tags: ['daily', 'permission', 'polite']
  },
  {
    id: 'daily_012',
    category: 'daily',
    subcategory: 'assistance',
    chunk: "Could you give me a hand with this?",
    ipa: "/kʊd juː ɡɪv miː ə hænd wɪð ðɪs/",
    context: "Asking for help",
    example: "Could you give me a hand with this luggage? It's rather heavy.",
    turkishEquivalent: "Bu konuda bana yardım eder misiniz?",
    variations: [
      "Would you mind helping me with...?",
      "Could you help me out?",
      "I could use some help with..."
    ],
    difficulty: 'A2',
    tags: ['daily', 'help', 'request']
  },
  {
    id: 'daily_013',
    category: 'daily',
    subcategory: 'weather',
    chunk: "Lovely day, isn't it?",
    ipa: "/ˈlʌvli deɪ ˈɪznt ɪt/",
    context: "Small talk about weather",
    example: "Lovely day, isn't it? Makes a nice change from all that rain we've been having.",
    turkishEquivalent: "Güzel bir gün, değil mi?",
    variations: [
      "Beautiful weather today",
      "Nice weather we're having",
      "What a gorgeous day"
    ],
    difficulty: 'A2',
    tags: ['daily', 'small-talk', 'british']
  },
  {
    id: 'daily_014',
    category: 'daily',
    subcategory: 'farewell',
    chunk: "It was lovely to see you",
    ipa: "/ɪt wɒz ˈlʌvli tə siː juː/",
    context: "Saying goodbye warmly",
    example: "It was lovely to see you. We must do this again sometime.",
    turkishEquivalent: "Sizi görmek çok güzeldi",
    variations: [
      "It's been great catching up",
      "Lovely seeing you",
      "So nice to see you again"
    ],
    difficulty: 'A2',
    tags: ['daily', 'farewell', 'social']
  },
  {
    id: 'daily_015',
    category: 'daily',
    subcategory: 'plans',
    chunk: "I'm afraid I've already got plans",
    ipa: "/aɪm əˈfreɪd aɪv ɔːlˈredi ɡɒt plænz/",
    context: "Declining invitation politely",
    example: "I'm afraid I've already got plans for Saturday, but thank you for thinking of me.",
    turkishEquivalent: "Maalesef zaten planlarım var",
    variations: [
      "I'm already booked that day",
      "I've got something on then",
      "Unfortunately, I'm not free"
    ],
    difficulty: 'B1',
    tags: ['daily', 'decline', 'polite']
  },
  {
    id: 'business_016',
    category: 'business',
    subcategory: 'negotiation',
    chunk: "I think we can find a middle ground",
    ipa: "/aɪ θɪŋk wiː kæn faɪnd ə ˈmɪdl ɡraʊnd/",
    context: "Finding compromise in negotiation",
    example: "I think we can find a middle ground. What if we adjusted the payment terms?",
    turkishEquivalent: "Orta bir yol bulabileceğimizi düşünüyorum",
    variations: [
      "Perhaps we can meet in the middle",
      "There's room for compromise",
      "Let's see if we can reach a compromise"
    ],
    difficulty: 'B1',
    tags: ['business', 'negotiation', 'compromise']
  },
  {
    id: 'business_017',
    category: 'business',
    subcategory: 'meeting',
    chunk: "Could I add something to that?",
    ipa: "/kʊd aɪ æd ˈsʌmθɪŋ tə ðæt/",
    context: "Interjecting politely in meeting",
    example: "Could I add something to that? I think there's another factor we should consider.",
    turkishEquivalent: "Buna bir şey ekleyebilir miyim?",
    variations: [
      "If I may add...",
      "Building on that point...",
      "To add to what was just said..."
    ],
    difficulty: 'B1',
    tags: ['business', 'meeting', 'participation']
  },
  {
    id: 'business_018',
    category: 'business',
    subcategory: 'closing',
    chunk: "Thank you for your time today",
    ipa: "/θæŋk juː fə jɔː taɪm təˈdeɪ/",
    context: "Ending a meeting gracefully",
    example: "Thank you for your time today. I'll send the meeting notes by end of day.",
    turkishEquivalent: "Bugün ayırdığınız zaman için teşekkür ederim",
    variations: [
      "Thanks for taking the time to meet",
      "I appreciate you meeting with us",
      "Thank you for a productive meeting"
    ],
    difficulty: 'A2',
    tags: ['business', 'farewell', 'meeting']
  },
  {
    id: 'business_019',
    category: 'business',
    subcategory: 'proposal',
    chunk: "We'd like to propose the following...",
    ipa: "/wiːd laɪk tə prəˈpəʊz ðə ˈfɒləʊɪŋ/",
    context: "Presenting a formal proposal",
    example: "We'd like to propose the following solution: a phased delivery schedule over three months.",
    turkishEquivalent: "Şunu önermek istiyoruz...",
    variations: [
      "Our proposal is as follows...",
      "We suggest the following approach...",
      "What we're proposing is..."
    ],
    difficulty: 'B1',
    tags: ['business', 'proposal', 'formal']
  },
  {
    id: 'business_020',
    category: 'business',
    subcategory: 'follow-up',
    chunk: "I wanted to touch base regarding...",
    ipa: "/aɪ ˈwɒntɪd tə tʌtʃ beɪs rɪˈɡɑːdɪŋ/",
    context: "Following up on previous discussion",
    example: "I wanted to touch base regarding the proposal we discussed last week.",
    turkishEquivalent: "... hakkında görüşmek istedim",
    variations: [
      "I'm following up on...",
      "I wanted to check in about...",
      "Just checking on the status of..."
    ],
    difficulty: 'B1',
    tags: ['business', 'follow-up', 'email']
  },
  {
    id: 'daily_016',
    category: 'daily',
    subcategory: 'transport',
    chunk: "Is this seat taken?",
    ipa: "/ɪz ðɪs siːt ˈteɪkən/",
    context: "Asking about available seat",
    example: "Excuse me, is this seat taken? May I sit here?",
    turkishEquivalent: "Bu koltuk dolu mu?",
    variations: [
      "Is anyone sitting here?",
      "May I sit here?",
      "Is this free?"
    ],
    difficulty: 'A2',
    tags: ['daily', 'transport', 'polite']
  },
  {
    id: 'daily_017',
    category: 'daily',
    subcategory: 'shopping',
    chunk: "Do you have this in a different size?",
    ipa: "/duː juː hæv ðɪs ɪn ə ˈdɪfrənt saɪz/",
    context: "Asking about product availability",
    example: "Do you have this in a different size? I need a medium, please.",
    turkishEquivalent: "Bunun farklı bedeni var mı?",
    variations: [
      "Is this available in...?",
      "Could I try this in a larger size?",
      "Do you have this in stock in...?"
    ],
    difficulty: 'A2',
    tags: ['daily', 'shopping', 'question']
  },
  {
    id: 'daily_018',
    category: 'daily',
    subcategory: 'directions',
    chunk: "You can't miss it",
    ipa: "/juː kɑːnt mɪs ɪt/",
    context: "Assuring directions are clear",
    example: "It's just around the corner on your left. You can't miss it.",
    turkishEquivalent: "Kaçırmazsınız / Hemen görürsünüz",
    variations: [
      "It's easy to find",
      "It's right there",
      "You'll see it straight away"
    ],
    difficulty: 'A2',
    tags: ['daily', 'directions', 'reassurance']
  },
  {
    id: 'daily_019',
    category: 'daily',
    subcategory: 'gratitude',
    chunk: "I really couldn't have done it without you",
    ipa: "/aɪ ˈrɪəli ˈkʊdnt həv dʌn ɪt wɪðˈaʊt juː/",
    context: "Expressing sincere gratitude",
    example: "I really couldn't have done it without you. Thank you for all your help.",
    turkishEquivalent: "Sensiz gerçekten yapamadım",
    variations: [
      "I owe you one",
      "I'm so grateful for your help",
      "You've been incredibly helpful"
    ],
    difficulty: 'B1',
    tags: ['daily', 'gratitude', 'sincere']
  },
  {
    id: 'daily_020',
    category: 'daily',
    subcategory: 'parting',
    chunk: "Take care of yourself",
    ipa: "/teɪk keər ɒv jɔːˈself/",
    context: "Warm farewell",
    example: "It was great seeing you. Take care of yourself!",
    turkishEquivalent: "Kendine iyi bak",
    variations: [
      "Look after yourself",
      "Take care",
      "Mind how you go"
    ],
    difficulty: 'A2',
    tags: ['daily', 'farewell', 'warm']
  },

  // ==================== CONDITIONAL CHUNKS ====================
  // Zero Conditional
  {
    id: 'conditional_001',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If you need any assistance, please let me know",
    ipa: "/ɪf juː niːd ˈeni əˈsɪstəns pliːz let miː nəʊ/",
    context: "Zero conditional - offering help",
    example: "If you need any assistance with the installation, please let me know immediately.",
    turkishEquivalent: "Herhangi bir yardıma ihtiyacınız olursa, lütfen bana bildirin",
    variations: [
      "If you require assistance, don't hesitate to contact me",
      "Should you need help, I'm here",
      "If assistance is needed, feel free to reach out"
    ],
    difficulty: 'B1',
    tags: ['conditional', 'zero', 'business', 'assistance']
  },
  {
    id: 'conditional_002',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If the order exceeds expectations, we receive repeat business",
    ipa: "/ɪf ðə ˈɔːdər ɪkˈsiːdz ˌekspekˈteɪʃənz wiː rɪˈsiːv rɪˈpiːt ˈbɪznəs/",
    context: "Zero conditional - business principle",
    example: "If the order exceeds expectations, we receive repeat business from satisfied clients.",
    turkishEquivalent: "Sipariş beklentileri aşarsa, tekrar iş alırız",
    variations: [
      "When we exceed expectations, clients come back",
      "If quality surpasses standards, we get recurring orders",
      "Exceeding expectations brings repeat customers"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'zero', 'business', 'quality']
  },
  {
    id: 'conditional_003',
    category: 'technical',
    subcategory: 'conditional',
    chunk: "If the temperature drops below zero, the system shuts down automatically",
    ipa: "/ɪf ðə ˈtemprətʃə drɒps bɪˈləʊ ˈzɪərəʊ ðə ˈsɪstəm ʃʌts daʊn ˌɔːtəˈmætɪkli/",
    context: "Zero conditional - technical specification",
    example: "If the temperature drops below zero, the system shuts down automatically as a safety measure.",
    turkishEquivalent: "Sıcaklık sıfırın altına düşerse, sistem otomatik olarak kapanır",
    variations: [
      "When temperature falls below zero, automatic shutdown occurs",
      "If it gets too cold, the system stops automatically",
      "Below-zero temperatures trigger automatic shutdown"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'zero', 'technical', 'safety']
  },

  // First Conditional
  {
    id: 'conditional_004',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If we receive the payment today, we'll ship tomorrow",
    ipa: "/ɪf wiː rɪˈsiːv ðə ˈpeɪmənt təˈdeɪ wiːl ʃɪp təˈmɒrəʊ/",
    context: "First conditional - shipment promise",
    example: "If we receive the payment today, we'll ship tomorrow morning on the first lorry.",
    turkishEquivalent: "Bugün ödemeyi alırsak, yarın göndeririz",
    variations: [
      "Once payment arrives today, we'll dispatch tomorrow",
      "If payment comes through today, shipment goes out tomorrow",
      "Payment today means shipment tomorrow"
    ],
    difficulty: 'B1',
    tags: ['conditional', 'first', 'business', 'payment']
  },
  {
    id: 'conditional_005',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If you sign the contract this week, we'll start production immediately",
    ipa: "/ɪf juː saɪn ðə ˈkɒntrækt ðɪs wiːk wiːl stɑːt prəˈdʌkʃən ɪˈmiːdiətli/",
    context: "First conditional - commitment",
    example: "If you sign the contract this week, we'll start production immediately with your specifications.",
    turkishEquivalent: "Bu hafta sözleşmeyi imzalarsanız, hemen üretime başlarız",
    variations: [
      "Sign this week and we'll begin production straight away",
      "A signature this week means immediate production start",
      "If the contract is signed this week, production begins at once"
    ],
    difficulty: 'B1',
    tags: ['conditional', 'first', 'business', 'contract']
  },
  {
    id: 'conditional_006',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If the quality isn't satisfactory, we'll offer a full refund",
    ipa: "/ɪf ðə ˈkwɒləti ˈɪznt ˌsætɪsˈfæktəri wiːl ˈɒfər ə fʊl ˈriːfʌnd/",
    context: "First conditional - guarantee",
    example: "If the quality isn't satisfactory, we'll offer a full refund with no questions asked.",
    turkishEquivalent: "Kalite tatmin edici değilse, tam geri ödeme yaparız",
    variations: [
      "Unsatisfactory quality means full money back",
      "If you're not satisfied with quality, full refund guaranteed",
      "Quality issues result in complete refund"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'first', 'business', 'guarantee']
  },
  {
    id: 'conditional_007',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If you place a bulk order, we'll give you a substantial discount",
    ipa: "/ɪf juː pleɪs ə bʌlk ˈɔːdə wiːl ɡɪv juː ə səbˈstænʃəl ˈdɪskaʊnt/",
    context: "First conditional - special offer",
    example: "If you place a bulk order of fifty units or more, we'll give you a substantial discount.",
    turkishEquivalent: "Toplu sipariş verirseniz, önemli bir indirim yaparız",
    variations: [
      "Bulk orders receive significant discounts",
      "If you order in bulk, you'll get a major price reduction",
      "Large quantities mean considerable savings"
    ],
    difficulty: 'B1',
    tags: ['conditional', 'first', 'business', 'discount']
  },
  {
    id: 'conditional_008',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If they accept our proposal, we'll become exclusive suppliers",
    ipa: "/ɪf ðeɪ əkˈsept aʊə prəˈpəʊzəl wiːl bɪˈkʌm ɪkˈskluːsɪv səˈplaɪəz/",
    context: "First conditional - business opportunity",
    example: "If they accept our proposal, we'll become exclusive suppliers for their entire operation.",
    turkishEquivalent: "Teklifimizi kabul ederlerse, münhasır tedarikçi olacağız",
    variations: [
      "Acceptance of our proposal means exclusive supply rights",
      "If they say yes, we'll have exclusive supplier status",
      "Proposal approval leads to exclusive partnership"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'first', 'business', 'partnership']
  },

  // Second Conditional
  {
    id: 'conditional_009',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If I were you, I'd accept their offer",
    ipa: "/ɪf aɪ wɜː juː aɪd əkˈsept ðeər ˈɒfə/",
    context: "Second conditional - giving advice",
    example: "If I were you, I'd accept their offer. It's a very competitive price for this quality.",
    turkishEquivalent: "Yerinde olsaydım, tekliflerini kabul ederdim",
    variations: [
      "In your position, I'd take the offer",
      "If it were me, I'd accept",
      "Were I in your shoes, I'd say yes"
    ],
    difficulty: 'B1',
    tags: ['conditional', 'second', 'business', 'advice']
  },
  {
    id: 'conditional_010',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If we had more capacity, we could meet the demand",
    ipa: "/ɪf wiː hæd mɔː kəˈpæsəti wiː kʊd miːt ðə dɪˈmɑːnd/",
    context: "Second conditional - hypothetical capacity",
    example: "If we had more capacity, we could meet the demand for these popular models.",
    turkishEquivalent: "Daha fazla kapasitemiz olsaydı, talebi karşılayabilirdik",
    variations: [
      "More capacity would enable us to meet demand",
      "If capacity were higher, we'd fulfil all orders",
      "Greater capacity means meeting customer needs"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'second', 'business', 'capacity']
  },
  {
    id: 'conditional_011',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If they reduced the price by ten percent, we'd order immediately",
    ipa: "/ɪf ðeɪ rɪˈdjuːst ðə praɪs baɪ ten pəˈsent wiːd ˈɔːdər ɪˈmiːdiətli/",
    context: "Second conditional - negotiation",
    example: "If they reduced the price by ten percent, we'd order five hundred units immediately.",
    turkishEquivalent: "Fiyatı yüzde on düşürselerdi, hemen sipariş verirdik",
    variations: [
      "A ten percent reduction would secure our order",
      "If the price dropped by ten percent, we'd buy straight away",
      "Ten percent off means immediate purchase"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'second', 'business', 'negotiation']
  },
  {
    id: 'conditional_012',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If we invested in automation, production would be more efficient",
    ipa: "/ɪf wiː ɪnˈvestɪd ɪn ˌɔːtəˈmeɪʃən prəˈdʌkʃən wʊd biː mɔːr ɪˈfɪʃənt/",
    context: "Second conditional - improvement possibility",
    example: "If we invested in automation, production would be more efficient and cost-effective.",
    turkishEquivalent: "Otomasyona yatırım yapsaydık, üretim daha verimli olurdu",
    variations: [
      "Automation investment would boost efficiency",
      "If we automated, we'd produce more efficiently",
      "Investing in automation means better productivity"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'second', 'business', 'automation']
  },

  // Third Conditional
  {
    id: 'conditional_013',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If we'd received the order earlier, we'd have delivered on time",
    ipa: "/ɪf wiːd rɪˈsiːvd ðə ˈɔːdər ˈɜːliə wiːd hæv dɪˈlɪvəd ɒn taɪm/",
    context: "Third conditional - regret about timing",
    example: "If we'd received the order earlier, we'd have delivered on time without any delay.",
    turkishEquivalent: "Siparişi daha erken almış olsaydık, zamanında teslim ederdik",
    variations: [
      "Earlier receipt would have meant timely delivery",
      "If the order had come sooner, delivery would've been on schedule",
      "Had we received it earlier, we'd have met the deadline"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'third', 'business', 'regret']
  },
  {
    id: 'conditional_014',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If they'd accepted our proposal, we'd have started production last month",
    ipa: "/ɪf ðeɪd əkˈseptɪd aʊə prəˈpəʊzəl wiːd hæv ˈstɑːtɪd prəˈdʌkʃən lɑːst mʌnθ/",
    context: "Third conditional - missed opportunity",
    example: "If they'd accepted our proposal, we'd have started production last month as planned.",
    turkishEquivalent: "Teklifimizi kabul etmiş olsalardı, geçen ay üretime başlamış olurduk",
    variations: [
      "Proposal acceptance would have meant production start last month",
      "Had they said yes, we'd have begun manufacturing already",
      "If they'd agreed, production would've started by now"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'third', 'business', 'opportunity']
  },
  {
    id: 'conditional_015',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If I'd known about the meeting, I wouldn't have missed it",
    ipa: "/ɪf aɪd nəʊn əˈbaʊt ðə ˈmiːtɪŋ aɪ ˈwʊdnt hæv mɪst ɪt/",
    context: "Third conditional - past mistake",
    example: "If I'd known about the meeting, I wouldn't have missed it. I had no notification.",
    turkishEquivalent: "Toplantıdan haberdar olsaydım, kaçırmazdım",
    variations: [
      "Had I been informed, I'd have attended",
      "If someone had told me, I'd have been there",
      "Knowledge of the meeting would have ensured my attendance"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'third', 'business', 'mistake']
  },
  {
    id: 'conditional_016',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If we'd checked the quality earlier, we'd have caught the defects",
    ipa: "/ɪf wiːd tʃekt ðə ˈkwɒləti ˈɜːliə wiːd hæv kɔːt ðə ˈdiːfekts/",
    context: "Third conditional - quality control regret",
    example: "If we'd checked the quality earlier, we'd have caught the defects before shipment.",
    turkishEquivalent: "Kaliteyi daha erken kontrol etmiş olsaydık, kusurları yakalamış olurduk",
    variations: [
      "Earlier inspection would have revealed the problems",
      "Had we tested sooner, we'd have found the faults",
      "If quality checks had been earlier, defects wouldn't have shipped"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'third', 'business', 'quality']
  },

  // Mixed Conditional
  {
    id: 'conditional_017',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If we'd signed the contract last year, we'd be their supplier now",
    ipa: "/ɪf wiːd saɪnd ðə ˈkɒntrækt lɑːst jɪə wiːd biː ðeə səˈplaɪə naʊ/",
    context: "Mixed conditional - past decision affecting present",
    example: "If we'd signed the contract last year, we'd be their main supplier now with regular orders.",
    turkishEquivalent: "Geçen yıl sözleşmeyi imzalamış olsaydık, şimdi onların tedarikçisi olurduk",
    variations: [
      "Last year's signature would make us current suppliers",
      "Had we signed then, we'd have supplier status now",
      "If the contract had been signed, we'd be supplying them today"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'mixed', 'business', 'partnership']
  },
  {
    id: 'conditional_018',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If I'd studied engineering, I'd understand these specifications now",
    ipa: "/ɪf aɪd ˈstʌdid ˌendʒɪˈnɪərɪŋ aɪd ˌʌndəˈstænd ðiːz ˌspesɪfɪˈkeɪʃənz naʊ/",
    context: "Mixed conditional - education affecting present",
    example: "If I'd studied engineering, I'd understand these technical specifications now without help.",
    turkishEquivalent: "Mühendislik okumuş olsaydım, şimdi bu teknik özellikleri anlardım",
    variations: [
      "An engineering degree would help me understand this now",
      "Had I studied engineering, I'd grasp these specs today",
      "If I'd taken that path, I'd comprehend this currently"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'mixed', 'technical', 'education']
  },

  // Additional Zero Conditional
  {
    id: 'conditional_019',
    category: 'business',
    subcategory: 'conditional',
    chunk: "When customers complain, we investigate immediately",
    ipa: "/wen ˈkʌstəməz kəmˈpleɪn wiː ɪnˈvestɪɡeɪt ɪˈmiːdiətli/",
    context: "Zero conditional - company policy",
    example: "When customers complain, we investigate immediately to resolve any issues quickly.",
    turkishEquivalent: "Müşteriler şikayet ettiğinde, hemen araştırırız",
    variations: [
      "If clients raise issues, we look into them straight away",
      "Customer complaints trigger immediate investigation",
      "Whenever there's a complaint, we investigate at once"
    ],
    difficulty: 'B1',
    tags: ['conditional', 'zero', 'business', 'customer-service']
  },
  {
    id: 'conditional_020',
    category: 'technical',
    subcategory: 'conditional',
    chunk: "If you press this button, the machine stops automatically",
    ipa: "/ɪf juː pres ðɪs ˈbʌtn ðə məˈʃiːn stɒps ˌɔːtəˈmætɪkli/",
    context: "Zero conditional - machine operation",
    example: "If you press this red button, the machine stops automatically for emergency situations.",
    turkishEquivalent: "Bu butona basarsanız, makine otomatik olarak durur",
    variations: [
      "Pressing this button causes automatic shutdown",
      "If this button is pressed, automatic stop occurs",
      "This button triggers immediate machine stop"
    ],
    difficulty: 'B1',
    tags: ['conditional', 'zero', 'technical', 'operation']
  },
  {
    id: 'conditional_021',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If payment is late, we charge a penalty fee",
    ipa: "/ɪf ˈpeɪmənt ɪz leɪt wiː tʃɑːdʒ ə ˈpenəlti fiː/",
    context: "Zero conditional - payment terms",
    example: "If payment is late, we charge a penalty fee of five percent per month overdue.",
    turkishEquivalent: "Ödeme geç kalırsa, ceza ücreti alırız",
    variations: [
      "Late payments incur penalty charges",
      "If you pay late, additional fees apply",
      "Overdue payments result in penalties"
    ],
    difficulty: 'B1',
    tags: ['conditional', 'zero', 'business', 'payment']
  },

  // Additional First Conditional
  {
    id: 'conditional_022',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If you need technical support, we'll send our engineers",
    ipa: "/ɪf juː niːd ˈteknɪkəl səˈpɔːt wiːl send aʊər ˌendʒɪˈnɪəz/",
    context: "First conditional - service offer",
    example: "If you need technical support, we'll send our engineers to your site within 24 hours.",
    turkishEquivalent: "Teknik desteğe ihtiyacınız olursa, mühendislerimizi göndereceğiz",
    variations: [
      "Technical issues mean we'll dispatch our team",
      "If support is needed, our engineers will come out",
      "We'll send specialists if you require assistance"
    ],
    difficulty: 'B1',
    tags: ['conditional', 'first', 'business', 'support']
  },
  {
    id: 'conditional_023',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If the shipment arrives late, we'll compensate you accordingly",
    ipa: "/ɪf ðə ˈʃɪpmənt əˈraɪvz leɪt wiːl ˈkɒmpenseɪt juː əˈkɔːdɪŋli/",
    context: "First conditional - compensation promise",
    example: "If the shipment arrives late, we'll compensate you accordingly with a discount on your next order.",
    turkishEquivalent: "Sevkiyat geç gelirse, size uygun şekilde tazmin edeceğiz",
    variations: [
      "Late delivery means financial compensation",
      "If it's delayed, you'll receive compensation",
      "Delays result in appropriate reimbursement"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'first', 'business', 'compensation']
  },
  {
    id: 'conditional_024',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If we expand our factory, we'll meet higher demand",
    ipa: "/ɪf wiː ɪkˈspænd aʊə ˈfæktəri wiːl miːt ˈhaɪə dɪˈmɑːnd/",
    context: "First conditional - expansion plan",
    example: "If we expand our factory next year, we'll be able to meet higher demand from European markets.",
    turkishEquivalent: "Fabrikamızı genişletirsek, daha yüksek talebi karşılayacağız",
    variations: [
      "Factory expansion will enable greater output",
      "If we scale up, we'll handle more orders",
      "Expanding means meeting increased demand"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'first', 'business', 'expansion']
  },
  {
    id: 'conditional_025',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If you provide the specifications, we'll prepare a detailed quotation",
    ipa: "/ɪf juː prəˈvaɪd ðə ˌspesɪfɪˈkeɪʃənz wiːl prɪˈpeə ə ˈdiːteɪld kwəʊˈteɪʃən/",
    context: "First conditional - quotation process",
    example: "If you provide the specifications, we'll prepare a detailed quotation within 48 hours.",
    turkishEquivalent: "Teknik özellikleri verirseniz, detaylı bir teklif hazırlarız",
    variations: [
      "Specifications lead to detailed pricing",
      "If you send specs, you'll receive our quote",
      "Providing requirements means getting our quotation"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'first', 'business', 'quotation']
  },

  // Additional Second Conditional
  {
    id: 'conditional_026',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If I had more experience, I'd handle this project myself",
    ipa: "/ɪf aɪ hæd mɔːr ɪkˈspɪəriəns aɪd ˈhændl ðɪs ˈprɒdʒekt maɪˈself/",
    context: "Second conditional - ability limitation",
    example: "If I had more experience in logistics, I'd handle this complex project myself without help.",
    turkishEquivalent: "Daha fazla deneyimim olsaydı, bu projeyi kendim idare ederdim",
    variations: [
      "More experience would enable solo management",
      "If I were more experienced, I'd do it alone",
      "Greater expertise means independent handling"
    ],
    difficulty: 'B1',
    tags: ['conditional', 'second', 'business', 'experience']
  },
  {
    id: 'conditional_027',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If market conditions were better, we'd expand internationally",
    ipa: "/ɪf ˈmɑːkɪt kənˈdɪʃənz wɜː ˈbetə wiːd ɪkˈspænd ˌɪntəˈnæʃnəli/",
    context: "Second conditional - market strategy",
    example: "If market conditions were better, we'd expand internationally to Asia and the Americas.",
    turkishEquivalent: "Piyasa koşulları daha iyi olsaydı, uluslararası genişlerdik",
    variations: [
      "Better markets would mean global expansion",
      "If conditions improved, we'd go international",
      "Favourable markets enable overseas growth"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'second', 'business', 'strategy']
  },
  {
    id: 'conditional_028',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If we had more storage space, we could keep larger inventories",
    ipa: "/ɪf wiː hæd mɔː ˈstɔːrɪdʒ speɪs wiː kʊd kiːp ˈlɑːdʒər ˈɪnvəntriz/",
    context: "Second conditional - capacity issue",
    example: "If we had more storage space, we could keep larger inventories and fulfil orders faster.",
    turkishEquivalent: "Daha fazla depolama alanımız olsaydı, daha büyük stoklar tutabilirdik",
    variations: [
      "More space would enable bigger stock levels",
      "If storage were larger, we'd hold more inventory",
      "Greater capacity means maintaining larger stocks"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'second', 'business', 'capacity']
  },
  {
    id: 'conditional_029',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If transport costs were lower, our products would be more competitive",
    ipa: "/ɪf ˈtrænspɔːt kɒsts wɜː ˈləʊə aʊə ˈprɒdʌkts wʊd biː mɔː kəmˈpetətɪv/",
    context: "Second conditional - pricing strategy",
    example: "If transport costs were lower, our products would be more competitive in distant markets.",
    turkishEquivalent: "Nakliye maliyetleri daha düşük olsaydı, ürünlerimiz daha rekabetçi olurdu",
    variations: [
      "Lower shipping means better prices",
      "If delivery were cheaper, we'd compete better",
      "Reduced transport costs boost competitiveness"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'second', 'business', 'pricing']
  },

  // Additional Third Conditional
  {
    id: 'conditional_030',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If we'd invested in automation, we'd have saved considerable money",
    ipa: "/ɪf wiːd ɪnˈvestɪd ɪn ˌɔːtəˈmeɪʃən wiːd hæv seɪvd kənˈsɪdərəbl ˈmʌni/",
    context: "Third conditional - investment regret",
    example: "If we'd invested in automation five years ago, we'd have saved considerable money on labour costs.",
    turkishEquivalent: "Otomasyona yatırım yapmış olsaydık, önemli miktarda para tasarruf etmiş olurduk",
    variations: [
      "Automation investment would have reduced costs significantly",
      "Had we automated earlier, savings would be substantial",
      "If we'd mechanised then, we'd have saved considerably"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'third', 'business', 'investment']
  },
  {
    id: 'conditional_031',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If they'd informed us sooner, we'd have adjusted the schedule",
    ipa: "/ɪf ðeɪd ɪnˈfɔːmd ʌs ˈsuːnə wiːd hæv əˈdʒʌstɪd ðə ˈʃedjuːl/",
    context: "Third conditional - communication issue",
    example: "If they'd informed us sooner about the changes, we'd have adjusted the production schedule.",
    turkishEquivalent: "Bize daha erken haber verselerdi, programı ayarlamış olurduk",
    variations: [
      "Earlier notification would have enabled schedule changes",
      "Had they told us sooner, we'd have rearranged things",
      "If we'd known earlier, the schedule would've been modified"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'third', 'business', 'communication']
  },
  {
    id: 'conditional_032',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If I'd read the contract carefully, I'd have noticed the mistake",
    ipa: "/ɪf aɪd red ðə ˈkɒntrækt ˈkeəfəli aɪd hæv ˈnəʊtɪst ðə mɪˈsteɪk/",
    context: "Third conditional - oversight",
    example: "If I'd read the contract more carefully, I'd have noticed the mistake in the delivery terms.",
    turkishEquivalent: "Sözleşmeyi dikkatlice okumuş olsaydım, hatayı fark etmiş olurdum",
    variations: [
      "Careful reading would have revealed the error",
      "Had I been more thorough, I'd have spotted it",
      "If I'd checked properly, the mistake wouldn't have slipped through"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'third', 'business', 'contract']
  },
  {
    id: 'conditional_033',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If we'd negotiated better terms, we'd have made more profit",
    ipa: "/ɪf wiːd nɪˈɡəʊʃieɪtɪd ˈbetə tɜːmz wiːd hæv meɪd mɔː ˈprɒfɪt/",
    context: "Third conditional - negotiation regret",
    example: "If we'd negotiated better terms on that contract, we'd have made significantly more profit.",
    turkishEquivalent: "Daha iyi şartlar pazarlık etmiş olsaydık, daha fazla kar elde etmiş olurduk",
    variations: [
      "Better negotiation would have increased profits",
      "Had we bargained harder, profits would be higher",
      "If terms had been better, we'd have earned more"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'third', 'business', 'negotiation']
  },

  // Additional Mixed Conditional
  {
    id: 'conditional_034',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If we'd invested in marketing, we'd have more customers today",
    ipa: "/ɪf wiːd ɪnˈvestɪd ɪn ˈmɑːkɪtɪŋ wiːd hæv mɔː ˈkʌstəməz təˈdeɪ/",
    context: "Mixed conditional - marketing impact",
    example: "If we'd invested heavily in marketing last year, we'd have considerably more customers today.",
    turkishEquivalent: "Pazarlamaya yatırım yapmış olsaydık, bugün daha fazla müşterimiz olurdu",
    variations: [
      "Marketing investment would bring current customer growth",
      "Had we marketed better, we'd have a larger client base now",
      "If we'd promoted ourselves, today's situation would be better"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'mixed', 'business', 'marketing']
  },
  {
    id: 'conditional_035',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If they'd chosen our company, we'd still be working together",
    ipa: "/ɪf ðeɪd ˈtʃəʊzən aʊə ˈkʌmpəni wiːd stɪl biː ˈwɜːkɪŋ təˈɡeðə/",
    context: "Mixed conditional - partnership lost",
    example: "If they'd chosen our company instead of our competitor, we'd still be working together profitably.",
    turkishEquivalent: "Şirketimizi seçmiş olsalardı, hala birlikte çalışıyor olurduk",
    variations: [
      "Their choice of us would mean current partnership",
      "Had they selected us, we'd be partners today",
      "If we'd won the contract, we'd be collaborating now"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'mixed', 'business', 'partnership']
  },

  // More Business Conditionals
  {
    id: 'conditional_036',
    category: 'business',
    subcategory: 'conditional',
    chunk: "Unless you confirm by Friday, we'll cancel the order",
    ipa: "/ʌnˈles juː kənˈfɜːm baɪ ˈfraɪdeɪ wiːl ˈkænsəl ðə ˈɔːdə/",
    context: "First conditional - deadline warning",
    example: "Unless you confirm the delivery details by Friday, we'll have to cancel the order unfortunately.",
    turkishEquivalent: "Cuma'ya kadar onaylamazsanız, siparişi iptal edeceğiz",
    variations: [
      "If confirmation doesn't arrive by Friday, cancellation occurs",
      "Friday confirmation is needed or we'll cancel",
      "Without Friday confirmation, the order gets cancelled"
    ],
    difficulty: 'B1',
    tags: ['conditional', 'first', 'business', 'deadline']
  },
  {
    id: 'conditional_037',
    category: 'business',
    subcategory: 'conditional',
    chunk: "Provided that quality meets our standards, we'll place regular orders",
    ipa: "/prəˈvaɪdɪd ðæt ˈkwɒləti miːts aʊə ˈstændədz wiːl pleɪs ˈreɡjələr ˈɔːdəz/",
    context: "First conditional - quality condition",
    example: "Provided that quality consistently meets our high standards, we'll place regular monthly orders.",
    turkishEquivalent: "Kalite standartlarımızı karşıladığı sürece, düzenli sipariş vereceğiz",
    variations: [
      "If quality is satisfactory, regular orders follow",
      "Meeting standards means ongoing business",
      "Quality compliance ensures repeat orders"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'first', 'business', 'quality']
  },
  {
    id: 'conditional_038',
    category: 'business',
    subcategory: 'conditional',
    chunk: "As long as delivery is reliable, we'll continue our partnership",
    ipa: "/æz lɒŋ æz dɪˈlɪvəri ɪz rɪˈlaɪəbl wiːl kənˈtɪnjuː aʊə ˈpɑːtnəʃɪp/",
    context: "First conditional - ongoing relationship",
    example: "As long as delivery remains reliable and on schedule, we'll continue our successful partnership.",
    turkishEquivalent: "Teslimat güvenilir olduğu sürece, ortaklığımızı sürdüreceğiz",
    variations: [
      "Reliable delivery ensures continued cooperation",
      "If deliveries stay dependable, we'll keep working together",
      "Consistency maintains our business relationship"
    ],
    difficulty: 'B1',
    tags: ['conditional', 'first', 'business', 'reliability']
  },
  {
    id: 'conditional_039',
    category: 'technical',
    subcategory: 'conditional',
    chunk: "In case of system failure, the backup activates automatically",
    ipa: "/ɪn keɪs əv ˈsɪstəm ˈfeɪljə ðə ˈbækʌp ˈæktɪveɪts ˌɔːtəˈmætɪkli/",
    context: "Zero conditional - safety system",
    example: "In case of primary system failure, the backup generator activates automatically within seconds.",
    turkishEquivalent: "Sistem arızası durumunda, yedek otomatik olarak devreye girer",
    variations: [
      "If the system fails, backup starts automatically",
      "System failure triggers automatic backup",
      "When systems crash, backup takes over"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'zero', 'technical', 'safety']
  },
  {
    id: 'conditional_040',
    category: 'business',
    subcategory: 'conditional',
    chunk: "Should any problems arise, please contact us immediately",
    ipa: "/ʃʊd ˈeni ˈprɒbləmz əˈraɪz pliːz ˈkɒntækt ʌs ɪˈmiːdiətli/",
    context: "First conditional - formal problem reporting",
    example: "Should any technical problems arise during installation, please contact our support team immediately.",
    turkishEquivalent: "Herhangi bir sorun çıkarsa, lütfen derhal bize ulaşın",
    variations: [
      "If problems occur, contact us straight away",
      "Any issues mean immediate contact needed",
      "When difficulties appear, reach out at once"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'first', 'business', 'support']
  },
  {
    id: 'conditional_041',
    category: 'business',
    subcategory: 'conditional',
    chunk: "Were we to lower the price, margins would become unsustainable",
    ipa: "/wɜː wiː tə ˈləʊə ðə praɪs ˈmɑːdʒɪnz wʊd bɪˈkʌm ˌʌnsəˈsteɪnəbl/",
    context: "Second conditional - pricing limits",
    example: "Were we to lower the price any further, our profit margins would become completely unsustainable.",
    turkishEquivalent: "Fiyatı düşürsek, kar marjları sürdürülemez hale gelirdi",
    variations: [
      "If we reduced prices, margins wouldn't be viable",
      "Lower pricing would make profits impossible",
      "Price cuts mean unsustainable business"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'second', 'business', 'pricing']
  },
  {
    id: 'conditional_042',
    category: 'business',
    subcategory: 'conditional',
    chunk: "Had I known the requirements, I'd have prepared better",
    ipa: "/hæd aɪ nəʊn ðə rɪˈkwaɪəmənts aɪd hæv prɪˈpeəd ˈbetə/",
    context: "Third conditional - preparation regret",
    example: "Had I known all the client requirements in advance, I'd have prepared far better for the presentation.",
    turkishEquivalent: "Gereksinimleri bilseydim, daha iyi hazırlanırdım",
    variations: [
      "If I'd understood the needs, preparation would've been better",
      "Knowing requirements would have improved my prep",
      "Had requirements been clear, I'd have done better"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'third', 'business', 'preparation']
  },
  {
    id: 'conditional_043',
    category: 'business',
    subcategory: 'conditional',
    chunk: "Suppose they reject our offer, what's our backup plan?",
    ipa: "/səˈpəʊz ðeɪ rɪˈdʒekt aʊər ˈɒfə wɒts aʊə ˈbækʌp plæn/",
    context: "Second conditional - contingency planning",
    example: "Suppose they reject our offer, what's our backup plan for securing this important contract?",
    turkishEquivalent: "Teklifimizi reddetseler, yedek planımız nedir?",
    variations: [
      "If they say no, what do we do next?",
      "What if they refuse our proposal?",
      "In case of rejection, what's plan B?"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'second', 'business', 'planning']
  },
  {
    id: 'conditional_044',
    category: 'business',
    subcategory: 'conditional',
    chunk: "Imagine we secured that contract, we'd be market leaders",
    ipa: "/ɪˈmædʒɪn wiː sɪˈkjʊəd ðæt ˈkɒntrækt wiːd biː ˈmɑːkɪt ˈliːdəz/",
    context: "Second conditional - aspirational thinking",
    example: "Imagine we secured that major contract with the government, we'd immediately become market leaders.",
    turkishEquivalent: "O sözleşmeyi alsak, pazar lideri olurduk",
    variations: [
      "If we won that deal, we'd lead the market",
      "That contract would make us industry leaders",
      "Securing it means market dominance"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'second', 'business', 'aspiration']
  },
  {
    id: 'conditional_045',
    category: 'business',
    subcategory: 'conditional',
    chunk: "What if costs rise? We'll need to adjust our pricing",
    ipa: "/wɒt ɪf kɒsts raɪz wiːl niːd tə əˈdʒʌst aʊə ˈpraɪsɪŋ/",
    context: "First conditional - cost management",
    example: "What if raw material costs rise next quarter? We'll need to adjust our pricing structure accordingly.",
    turkishEquivalent: "Maliyetler artarsa ne olur? Fiyatlandırmamızı ayarlamamız gerekecek",
    variations: [
      "If expenses increase, prices must change",
      "Rising costs mean pricing adjustments",
      "Should costs go up, we'll revise prices"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'first', 'business', 'costs']
  },
  {
    id: 'conditional_046',
    category: 'business',
    subcategory: 'conditional',
    chunk: "Even if they offer better terms, loyalty matters",
    ipa: "/ˈiːvən ɪf ðeɪ ˈɒfə ˈbetə tɜːmz ˈlɔɪəlti ˈmætəz/",
    context: "First conditional - relationship value",
    example: "Even if competitors offer slightly better terms, customer loyalty and relationships matter enormously.",
    turkishEquivalent: "Daha iyi şartlar sunsalar bile, sadakat önemlidir",
    variations: [
      "If they provide better deals, we still value loyalty",
      "Better offers don't always mean switching",
      "Though terms might improve elsewhere, relationships count"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'first', 'business', 'loyalty']
  },
  {
    id: 'conditional_047',
    category: 'business',
    subcategory: 'conditional',
    chunk: "Only if the terms are favourable will we proceed",
    ipa: "/ˈəʊnli ɪf ðə tɜːmz ɑː ˈfeɪvərəbl wɪl wiː prəˈsiːd/",
    context: "First conditional - strict condition",
    example: "Only if the payment terms are truly favourable will we proceed with this substantial investment.",
    turkishEquivalent: "Sadece şartlar elverişliyse ilerleyeceğiz",
    variations: [
      "We'll only move forward if terms suit us",
      "If conditions aren't good, we won't continue",
      "Favourable terms are essential for proceeding"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'first', 'business', 'terms']
  },
  {
    id: 'conditional_048',
    category: 'business',
    subcategory: 'conditional',
    chunk: "Whether they agree or not, we've done our best",
    ipa: "/ˈweðə ðeɪ əˈɡriː ɔː nɒt wiːv dʌn aʊə best/",
    context: "Second conditional - acceptance of outcome",
    example: "Whether they agree to our proposal or not, we've done our absolute best with this negotiation.",
    turkishEquivalent: "Kabul etseler de etmeseler de, elimizden gelenin en iyisini yaptık",
    variations: [
      "If they accept or refuse, we tried our hardest",
      "Agreement or not, we've given it our all",
      "Regardless of their decision, we did well"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'second', 'business', 'acceptance']
  },
  {
    id: 'conditional_049',
    category: 'business',
    subcategory: 'conditional',
    chunk: "If only we'd started earlier, we'd be ahead now",
    ipa: "/ɪf ˈəʊnli wiːd ˈstɑːtɪd ˈɜːliə wiːd biː əˈhed naʊ/",
    context: "Mixed conditional - timing regret",
    example: "If only we'd started this project six months earlier, we'd be well ahead of the competition now.",
    turkishEquivalent: "Keşke daha erken başlasaydık, şimdi önde olurduk",
    variations: [
      "Had we begun sooner, we'd lead currently",
      "Earlier start would put us ahead today",
      "If we'd moved faster, we'd be winning now"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'mixed', 'business', 'timing']
  },
  {
    id: 'conditional_050',
    category: 'business',
    subcategory: 'conditional',
    chunk: "I wish we'd known sooner, we'd have made different decisions",
    ipa: "/aɪ wɪʃ wiːd nəʊn ˈsuːnə wiːd hæv meɪd ˈdɪfrənt dɪˈsɪʒənz/",
    context: "Third conditional - decision regret",
    example: "I wish we'd known about the market changes sooner, we'd have made completely different strategic decisions.",
    turkishEquivalent: "Keşke daha erken bilseydik, farklı kararlar alırdık",
    variations: [
      "Had we known earlier, decisions would've been different",
      "Earlier knowledge would have changed our choices",
      "If we'd been informed sooner, we'd have acted differently"
    ],
    difficulty: 'B2',
    tags: ['conditional', 'third', 'business', 'regret']
  }
];

export const getChunksByCategory = (category: string): Chunk[] => {
  return chunks.filter(chunk => chunk.category === category);
};

export const getChunksByDifficulty = (difficulty: string): Chunk[] => {
  return chunks.filter(chunk => chunk.difficulty === difficulty);
};

export const searchChunks = (query: string): Chunk[] => {
  const lowerQuery = query.toLowerCase();
  return chunks.filter(chunk =>
    chunk.chunk.toLowerCase().includes(lowerQuery) ||
    chunk.context.toLowerCase().includes(lowerQuery) ||
    chunk.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    chunk.turkishEquivalent.toLowerCase().includes(lowerQuery)
  );
};

export default chunks;
