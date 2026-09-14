export type Locale = "en" | "ta";

const tamil: Record<string, string> = {
  "Dwarak Foundations": "துவாரக் ஃபவுண்டேஷன்ஸ்",
  "Dwarak Foundations Chennai LLP": "துவாரக் ஃபவுண்டேஷன்ஸ் சென்னை LLP",
  "Dwarak Foundations creates thoughtfully designed homes and enduring residential buildings across Chennai. Building with care since 1998.": "துவாரக் ஃபவுண்டேஷன்ஸ் சென்னை முழுவதும் சிந்தனையுடன் வடிவமைக்கப்பட்ட இல்லங்களையும் நீடித்த குடியிருப்புகளையும் உருவாக்குகிறது. 1998 முதல் அக்கறையுடன் கட்டுகிறோம்.",
  "Learn about Dwarak Foundations Chennai LLP, a client-focused Chennai construction company established by Varadharajan Ramasamy in 1998.": "1998-இல் வரதராஜன் ராமசாமியால் தொடங்கப்பட்ட, வாடிக்கையாளரை மையமாகக் கொண்ட சென்னை கட்டுமான நிறுவனமான துவாரக் ஃபவுண்டேஷன்ஸ் சென்னை LLP பற்றி அறியுங்கள்.",
  "Contact Dwarak Foundations in Pallikaranai, Chennai to discuss a new home or residential construction project.": "புதிய இல்லம் அல்லது குடியிருப்புக் கட்டுமானத் திட்டம் குறித்து பேச பள்ளிக்கரணை, சென்னையில் உள்ள துவாரக் ஃபவுண்டேஷன்ஸைத் தொடர்புகொள்ளுங்கள்.",
  "Read what homeowners and development partners say about working with Dwarak Foundations in Chennai.": "சென்னையில் துவாரக் ஃபவுண்டேஷன்ஸுடன் பணியாற்றிய வீட்டு உரிமையாளர்களும் மேம்பாட்டுப் பங்குதாரர்களும் கூறுவதைப் படியுங்கள்.",
  "Explore completed and ongoing residential buildings, individual homes, and future opportunities by Dwarak Foundations across Chennai.": "சென்னை முழுவதும் துவாரக் ஃபவுண்டேஷன்ஸின் நிறைவு செய்த மற்றும் நடப்பு குடியிருப்புகள், தனி இல்லங்கள், எதிர்கால வாய்ப்புகளைப் பாருங்கள்.",
  "Explore Dwarak Atlantis, a ten-apartment residential development by Dwarak Foundations in Pallikaranai, Chennai.": "சென்னை பள்ளிக்கரணையில் துவாரக் ஃபவுண்டேஷன்ஸ் உருவாக்கிய பத்து அடுக்குமாடி குடியிருப்பான துவாரக் அட்லாண்டிஸைப் பாருங்கள்.",
  "Explore Dwarak Gopikrishna, a six-apartment residential project completed by Dwarak Foundations in Adyar, Chennai.": "சென்னை அடையாறில் துவாரக் ஃபவுண்டேஷன்ஸ் நிறைவு செய்த ஆறு அடுக்குமாடித் திட்டமான துவாரக் கோபிகிருஷ்ணாவைப் பாருங்கள்.",
  "Explore Dwarak Sumana, a four-home apartment project completed by Dwarak Foundations in S. Kolathur, Chennai.": "சென்னை எஸ். கொளத்தூரில் துவாரக் ஃபவுண்டேஷன்ஸ் நிறைவு செய்த நான்கு இல்லத் திட்டமான துவாரக் சுமனாவைப் பாருங்கள்.",
  "Explore Dwarak Chaman, a six-apartment residential project completed by Dwarak Foundations in Vengaivasal, Chennai.": "சென்னை வெங்கைவாசலில் துவாரக் ஃபவுண்டேஷன்ஸ் நிறைவு செய்த ஆறு அடுக்குமாடித் திட்டமான துவாரக் சமனைப் பாருங்கள்.",
  "Explore Dwarak Sushruth, a four-home residential project completed by Dwarak Foundations in S. Kolathur, Chennai.": "சென்னை எஸ். கொளத்தூரில் துவாரக் ஃபவுண்டேஷன்ஸ் நிறைவு செய்த நான்கு இல்லத் திட்டமான துவாரக் சுஸ்ருத்தைப் பாருங்கள்.",
  "Explore this 2,300-square-foot individual villa completed by Dwarak Foundations in S. Kolathur, Chennai.": "சென்னை எஸ். கொளத்தூரில் துவாரக் ஃபவுண்டேஷன்ஸ் நிறைவு செய்த 2,300 சதுர அடி தனி வில்லாவைப் பாருங்கள்.",
  "Explore the 10,350-square-foot Golden Beach Bungalow completed by Dwarak Foundations in Injambakkam, Chennai.": "சென்னை இஞ்சம்பாக்கத்தில் துவாரக் ஃபவுண்டேஷன்ஸ் நிறைவு செய்த 10,350 சதுர அடி கோல்டன் பீச் பங்களாவைப் பாருங்கள்.",
  "Explore Dwarak Shree, a four-home apartment project completed by Dwarak Foundations in Perumbakkam, Chennai.": "சென்னை பெரும்பாக்கத்தில் துவாரக் ஃபவுண்டேஷன்ஸ் நிறைவு செய்த நான்கு இல்லத் திட்டமான துவாரக் ஸ்ரீயைப் பாருங்கள்.",
  "Explore Dwarak Prem, a four-home residential project completed by Dwarak Foundations in S. Kolathur, Chennai.": "சென்னை எஸ். கொளத்தூரில் துவாரக் ஃபவுண்டேஷன்ஸ் நிறைவு செய்த நான்கு இல்லத் திட்டமான துவாரக் பிரேமைப் பாருங்கள்.",
  "Home": "முகப்பு",
  "Projects": "திட்டங்கள்",
  "About": "எங்களைப் பற்றி",
  "Stories": "அனுபவங்கள்",
  "Contact": "தொடர்பு",
  "Primary navigation": "முதன்மை வழிசெலுத்தல்",
  "Mobile navigation": "கைபேசி வழிசெலுத்தல்",
  "Footer navigation": "அடிக்குறிப்பு வழிசெலுத்தல்",
  "Open navigation": "வழிசெலுத்தலைத் திற",
  "Language": "மொழி",
  "Switch to English": "ஆங்கிலத்திற்கு மாற",
  "Switch to Tamil": "தமிழுக்கு மாற",
  "Skip to content": "உள்ளடக்கத்திற்குச் செல்ல",
  "Dwarak Foundations home": "துவாரக் ஃபவுண்டேஷன்ஸ் முகப்பு",
  "Thoughtful homes, enduring construction, and relationships built since 1998.": "சிந்தனையுடன் உருவான இல்லங்கள், நிலையான கட்டுமானம், 1998 முதல் தொடரும் உறவுகள்.",
  "Explore": "பார்க்க",
  "Our story": "எங்கள் கதை",
  "Client stories": "வாடிக்கையாளர் அனுபவங்கள்",
  "Begin with a conversation": "உரையாடலுடன் தொடங்குங்கள்",
  "Have a place in mind?": "ஒரு இடம் மனதில் உள்ளதா?",
  "Bring us your site, your needs, and your ambition. We will help shape the way forward.": "உங்கள் இடம், தேவைகள், கனவு ஆகியவற்றை எங்களிடம் பகிருங்கள். அடுத்த வழியை உருவாக்க உதவுகிறோம்.",
  "Contact our team": "எங்கள் குழுவைத் தொடர்புகொள்ளுங்கள்",

  "Chennai / Since 1998": "சென்னை / 1998 முதல்",
  "Homes with thought in every line.": "ஒவ்வொரு கோட்டிலும் சிந்தனை கொண்ட இல்லங்கள்.",
  "We create individual homes and residential buildings shaped around the people who live in them, with considered design and uncompromising construction.": "அதில் வாழும் மக்களை மையமாகக் கொண்டு, கவனமான வடிவமைப்பும் சமரசமற்ற கட்டுமானமும் கொண்ட தனி வீடுகளையும் குடியிருப்புகளையும் உருவாக்குகிறோம்.",
  "Explore our work": "எங்கள் பணிகளைப் பாருங்கள்",
  "Start a project": "ஒரு திட்டத்தைத் தொடங்குங்கள்",
  "Dwarak Atlantis residential building in Chennai": "சென்னையில் துவாரக் அட்லாண்டிஸ் குடியிருப்பு",
  "A Chennai builder grounded in trust": "நம்பிக்கையில் வேரூன்றிய சென்னை கட்டுமான நிறுவனம்",
  "Built around people": "மக்களை மையமாகக் கொண்டது",
  "Established": "தொடங்கிய ஆண்டு",
  "Completed works": "நிறைவு செய்த பணிகள்",
  "Company highlights": "நிறுவனச் சிறப்புகள்",
  "Across": "செயல்படும் இடம்",
  "Chennai": "சென்னை",
  "Selected work": "தேர்ந்தெடுத்த பணிகள்",
  "A portfolio built one relationship at a time.": "ஒவ்வொரு உறவாலும் உருவான பணித்தொகுப்பு.",
  "From individual villas to closely scaled apartment communities, every project begins with its site, its purpose, and the people it will serve.": "தனி வில்லா முதல் சிறிய குடியிருப்புகள் வரை, ஒவ்வொரு திட்டமும் அதன் இடம், நோக்கம், அங்கு வாழும் மக்கள் ஆகியவற்றிலிருந்து தொடங்குகிறது.",
  "View all projects": "அனைத்து திட்டங்களையும் பாருங்கள்",
  "Architectural rendering of a Dwarak Foundations residence": "துவாரக் ஃபவுண்டேஷன்ஸ் இல்லத்தின் கட்டிட வடிவமைப்பு",
  "Our approach": "எங்கள் அணுகுமுறை",
  "Designed for a life, not a brochure.": "விளம்பரத்திற்காக அல்ல, வாழ்விற்காக வடிவமைக்கப்பட்டது.",
  "Every family brings a different rhythm, set of needs, and idea of home. We listen first, then bring together experienced architects, engineers, and craftspeople to create spaces that feel personal and perform for the long term.": "ஒவ்வொரு குடும்பத்திற்கும் தனித்த வாழ்க்கை முறை, தேவைகள், இல்லக் கனவு உண்டு. முதலில் கேட்டு, அனுபவமுள்ள கட்டிடக் கலைஞர்கள், பொறியாளர்கள், கைவினைஞர்களுடன் இணைந்து நீண்ட காலம் பயனளிக்கும் தனிப்பட்ட இடங்களை உருவாக்குகிறோம்.",
  "Personal": "தனிப்பட்டது",
  "Plans shaped around individual needs rather than a fixed formula.": "ஒரே மாதிரி திட்டமல்லாமல், தனிப்பட்ட தேவைகளுக்கேற்ப வடிவமைப்பு.",
  "Enduring": "நிலையானது",
  "Sound materials and careful execution where quality is never an afterthought.": "தரத்தில் சமரசமின்றி நல்ல பொருட்களும் கவனமான செயல்பாடும்.",
  "Transparent": "வெளிப்படையானது",
  "Clear communication and support through every stage of the work.": "பணியின் ஒவ்வொரு நிலையிலும் தெளிவான தொடர்பும் ஆதரவும்.",
  "Trust, reflected in the people we build for.": "நாங்கள் கட்டும் மக்களின் வார்த்தைகளில் பிரதிபலிக்கும் நம்பிக்கை.",
  "Much of our work has grown through referrals. These are the experiences behind those relationships.": "எங்கள் பணியின் பெரும்பகுதி பரிந்துரைகளால் வளர்ந்தது. அந்த உறவுகளின் அனுபவங்கள் இவை.",
  "Read every story": "அனைத்து அனுபவங்களையும் படியுங்கள்",

  "Trust is the structure beneath everything.": "எல்லாவற்றிற்கும் அடித்தளம் நம்பிக்கை.",
  "Since 1998, our work has grown through the confidence of clients who chose to build with us and then recommended us to others.": "1998 முதல், எங்களுடன் கட்டத் தேர்ந்தெடுத்து பிறருக்கும் பரிந்துரைத்த வாடிக்கையாளர்களின் நம்பிக்கையால் எங்கள் பணி வளர்ந்துள்ளது.",
  "Varadharajan Ramasamy, designated partner at Dwarak Foundations": "துவாரக் ஃபவுண்டேஷன்ஸ் பெயரிடப்பட்ட பங்குதாரர் வரதராஜன் ராமசாமி",
  "Varadharajan Ramasamy": "வரதராஜன் ராமசாமி",
  "Designated Partner": "பெயரிடப்பட்ட பங்குதாரர்",
  "A small construction company with a long view.": "நீண்ட பார்வை கொண்ட சிறிய கட்டுமான நிறுவனம்.",
  "Dwarak Foundations began in 1998 under the leadership of Mr. Varadharajan Ramasamy. Since then, we have completed more than 50 projects across Chennai, including villas, duplex homes, and apartment buildings.": "திரு. வரதராஜன் ராமசாமியின் தலைமையில் 1998-இல் துவாரக் ஃபவுண்டேஷன்ஸ் தொடங்கப்பட்டது. அதன்பின் சென்னை முழுவதும் வில்லாக்கள், டூப்ளெக்ஸ் வீடுகள், அடுக்குமாடிகள் உட்பட 50-க்கும் மேற்பட்ட திட்டங்களை நிறைவு செய்துள்ளோம்.",
  "We believe our company grows only when our clients are fully satisfied. That means creating more value, maintaining a high standard of construction, and remaining available long after a project is handed over.": "வாடிக்கையாளர்கள் முழுமையாக திருப்தியடைந்தால்தான் நிறுவனம் வளரும் என்று நம்புகிறோம். அதிக மதிப்பு, உயர்ந்த கட்டுமானத் தரம், ஒப்படைத்த பின்னரும் தொடரும் ஆதரவு என்பதே அதன் பொருள்.",
  "Rather than building our reputation through advertising alone, we have invested in the experience of every client from the first conversation. Their referrals and continued trust remain the clearest measure of our work.": "விளம்பரத்தை மட்டும் நம்பாமல், முதல் உரையாடலிலிருந்தே ஒவ்வொரு வாடிக்கையாளரின் அனுபவத்தில் முதலீடு செய்துள்ளோம். அவர்களின் பரிந்துரைகளும் தொடரும் நம்பிக்கையும் எங்கள் பணியின் சிறந்த அளவுகோல்.",
  "Hear from our clients": "வாடிக்கையாளர்களின் கருத்துகளைக் கேளுங்கள்",
  "Built over time": "காலப்போக்கில் உருவானது",
  "A broad body of residential work.": "பரந்த குடியிருப்பு பணித்தொகுப்பு.",
  "Villas shaped for individual families and sites.": "குடும்பங்களுக்கும் இடங்களுக்கும் ஏற்ற வில்லாக்கள்.",
  "Duplex homes balancing privacy and connection.": "தனிமையும் இணைப்பும் சமநிலைப்படுத்திய டூப்ளெக்ஸ் வீடுகள்.",
  "Apartment projects delivered across Chennai.": "சென்னை முழுவதும் நிறைவு செய்த அடுக்குமாடித் திட்டங்கள்.",

  "Every project starts with listening.": "ஒவ்வொரு திட்டமும் கேட்பதிலிருந்து தொடங்குகிறது.",
  "Tell us about your site, your family, and what you hope to create. We will help you understand the next step.": "உங்கள் இடம், குடும்பம், உருவாக்க விரும்புவது பற்றி சொல்லுங்கள். அடுத்த படியை புரிந்துகொள்ள உதவுகிறோம்.",
  "Reach our team": "எங்கள் குழுவை அணுகுங்கள்",
  "Call": "அழைக்க",
  "Email": "மின்னஞ்சல்",
  "Visit": "வருக",
  "Hours": "நேரம்",
  "Monday to Saturday": "திங்கள் முதல் சனி வரை",
  "9:30 am to 6:00 pm": "காலை 9:30 முதல் மாலை 6:00 வரை",
  "Map showing the Dwarak Foundations office in Pallikaranai": "பள்ளிக்கரணை துவாரக் ஃபவுண்டேஷன்ஸ் அலுவலகத்தைக் காட்டும் வரைபடம்",

  "Client Stories": "வாடிக்கையாளர் அனுபவங்கள்",
  "Our work, in their words.": "எங்கள் பணி, அவர்களின் வார்த்தைகளில்.",
  "Our strongest introductions have always come from the people who know our work first-hand.": "எங்கள் பணியை நேரடியாக அறிந்தவர்களிடமிருந்தே சிறந்த அறிமுகங்கள் எப்போதும் வந்துள்ளன.",
  "Software Engineer": "மென்பொருள் பொறியாளர்",
  "Client Manager": "வாடிக்கையாளர் மேலாளர்",
  "Business": "தொழில்",
  "Retired Engineer": "ஓய்வுபெற்ற பொறியாளர்",
  "Banking Professional": "வங்கித் தொழில்முறை",
  "Retired Central Government Officer": "ஓய்வுபெற்ற மத்திய அரசு அதிகாரி",
  "Consultant at TCS": "டிசிஎஸ் ஆலோசகர்",
  "Excellent.": "மிகச் சிறப்பு.",
  "I purchased the flat five years ago. It still looks excellent and new.": "ஐந்து ஆண்டுகளுக்கு முன் இந்த வீட்டை வாங்கினேன். இன்னும் மிகச் சிறப்பாகவும் புதிதாகவும் உள்ளது.",
  "The home design and infrastructure are well planned. Each and every place in our home is well designed and properly provisioned. The parking area is spacious and well planned.": "வீட்டின் வடிவமைப்பும் உள்கட்டமைப்பும் நன்றாகத் திட்டமிடப்பட்டுள்ளன. ஒவ்வொரு இடமும் சரியாக வடிவமைக்கப்பட்டு தேவையான வசதிகள் செய்யப்பட்டுள்ளன. வாகன நிறுத்தம் விசாலமாக உள்ளது.",
  "Dwarak Foundations was entrusted with my house project. My house was completed and handed over on time. They are highly committed and cooperative and never compromised on quality or the specifications we agreed upon. I am fully satisfied with their work and quality of construction. Overall, I grade them as an excellent builder. I sincerely wish them good luck and all the best.": "என் வீட்டுத் திட்டம் துவாரக் ஃபவுண்டேஷன்ஸிடம் ஒப்படைக்கப்பட்டது. வீடு நேரத்தில் முடித்து ஒப்படைக்கப்பட்டது. ஒப்புக்கொண்ட தரத்திலும் விவரக்குறிப்புகளிலும் அவர்கள் சமரசம் செய்யவில்லை. அவர்களின் பணியிலும் கட்டுமானத் தரத்திலும் முழு திருப்தி. சிறந்த கட்டுமான நிறுவனம் என்று மதிப்பிடுகிறேன்.",
  "Buying a house is everyone's dream. Since it was our first property, we walked through countless new construction homes. After seeing Dwarak Foundations, it was clear that the quality and attention were next level. They were easy to get in touch with and quick to respond to any questions that came up. Paperwork assistance was excellent and they stood with us until our housewarming ceremony. They addressed and resolved all our queries. We are happy with the services rendered and we would certainly recommend them. Thanks to the entire Dwarak Foundations team!": "வீடு வாங்குவது அனைவரின் கனவு. இது எங்கள் முதல் சொத்து என்பதால் பல புதிய வீடுகளைப் பார்த்தோம். துவாரக் ஃபவுண்டேஷன்ஸின் தரமும் கவனமும் வேறு நிலை என்பதை உணர்ந்தோம். தொடர்பு கொள்ள எளிதாக இருந்தது; ஆவண உதவி சிறப்பாக இருந்தது; கிரகப்பிரவேசம் வரை உடன் நின்றனர். அவர்களை நிச்சயமாகப் பரிந்துரைப்போம்.",
  "I have known Dwarak Foundations for about 15 years. My first home in Medavakkam is from them and I have seen many of their projects during the past few years. I was impressed by the quality of the building, materials used, finishes, planning and architecture, timely completion of the project, technical knowledge, and the way they deal with people. You can trust Dwarak Foundations that you will get more value than what you pay.": "துவாரக் ஃபவுண்டேஷன்ஸை சுமார் 15 ஆண்டுகளாக அறிவேன். மேடவாக்கத்தில் என் முதல் வீடு இவர்களிடமிருந்து. கட்டுமானத் தரம், பொருட்கள், முடிப்பு, திட்டமிடல், நேரத்தில் நிறைவு, தொழில்நுட்ப அறிவு, மக்களை அணுகும் விதம் அனைத்தும் சிறப்பு. செலுத்துவதை விட அதிக மதிப்பு கிடைக்கும் என்று நம்பலாம்.",
  "We had the joint venture with Dwarak Foundations in 2016 for developing three grounds in Rajam Nagar, S. Kolathur. A total of 12 flats were built. Everything was according to the specifications drawn by CMDA and the quality of construction was more than expected. All our flats were sold in record time in spite of the market conditions. All owners are very happy. Mr. Varadharajan Ramasamy was always available for our questions and provided a superb service as and when needed. We wish him the best of luck for all his future endeavors.": "2016-இல் எஸ். கொளத்தூர் ராஜம் நகரில் மூன்று கிரவுண்டை மேம்படுத்த துவாரக் ஃபவுண்டேஷன்ஸுடன் கூட்டு முயற்சி செய்தோம். மொத்தம் 12 அடுக்குமாடிகள் கட்டப்பட்டன. சிஎம்டிஏ விவரக்குறிப்புகளுக்கு ஏற்ப, எதிர்பார்த்ததை விட உயர்ந்த தரத்தில் பணி முடிந்தது. திரு. வரதராஜன் ராமசாமி எங்கள் கேள்விகளுக்கு எப்போதும் பதிலளித்து சிறந்த சேவை வழங்கினார்.",
  "Mr. Varadharajan Ramasamy of Dwarak Foundations is a great person to work with. We had the challenge of converting dry land to residential and the process was very cumbersome and hectic. He took us through a smooth path with minimal exposure to difficulties and started the construction in record time. A total of 14 flats, with two- and three-bedroom configurations, were built on 4.33 grounds. These buildings stand tall in the area when it comes to appearance and quality. We sold every unit and the buyers are happy customers. Even after the project was over, Mr. Varadharajan Ramasamy showed up with a smiling face and resolved the buyers' issues. He works with qualified lawyers and the government formalities were handled with ease, which was a great help to us as retired people. We wish Dwarak Foundations a great future and would recommend them without reservation.": "துவாரக் ஃபவுண்டேஷன்ஸின் திரு. வரதராஜன் ராமசாமியுடன் பணியாற்றுவது சிறந்த அனுபவம். வறண்ட நிலத்தை குடியிருப்பாக மாற்றும் சவாலை சீராக நடத்தி, 4.33 கிரவுண்டில் 14 அடுக்குமாடிகளை விரைவாகக் கட்டினார். ஒப்படைப்புக்குப் பிறகும் வாங்கியவர்களின் சிக்கல்களை சிரித்த முகத்துடன் தீர்த்தார். தயக்கமின்றி அவர்களைப் பரிந்துரைக்கிறோம்.",
  "I purchased a flat from Dwarak Foundations with extreme satisfaction. They are very transparent and pay utmost attention to customer experience. The managing director, Mr. Varadharajan Ramasamy, made me feel comfortable and clarified all my queries. He provided personal attention to every single customer. Dwarak Foundations is a trustworthy brand.": "துவாரக் ஃபவுண்டேஷன்ஸிடம் வீடு வாங்கியதில் முழு திருப்தி. அவர்கள் வெளிப்படையாக இருந்து வாடிக்கையாளர் அனுபவத்தில் மிகுந்த கவனம் செலுத்துகிறார்கள். நிர்வாக இயக்குநர் திரு. வரதராஜன் ராமசாமி என் அனைத்து கேள்விகளுக்கும் விளக்கமளித்தார். இது நம்பிக்கைக்குரிய நிறுவனம்.",

  "Our portfolio": "எங்கள் திட்டங்கள்",
  "Places made to be lived in.": "வாழ்வதற்காக உருவாக்கப்பட்ட இடங்கள்.",
  "Explore completed homes, current work, and future opportunities across Chennai by map or list.": "சென்னை முழுவதும் நிறைவு செய்த இல்லங்கள், நடப்பு பணிகள், எதிர்கால வாய்ப்புகளை வரைபடம் அல்லது பட்டியலில் பாருங்கள்.",
  "Project map and list": "திட்ட வரைபடமும் பட்டியலும்",
  "Filter projects by status": "நிலைப்படி திட்டங்களை வடிகட்டுங்கள்",
  "Completed": "நிறைவு",
  "Ongoing": "நடப்பு",
  "Upcoming": "எதிர்வரும்",
  "Choose project view": "திட்டக் காட்சியைத் தேர்ந்தெடுக்கவும்",
  "Map": "வரைபடம்",
  "List": "பட்டியல்",
  "Near me": "என் அருகில்",
  "Map of completed, ongoing, and upcoming Dwarak Foundations locations": "துவாரக் ஃபவுண்டேஷன்ஸின் நிறைவு, நடப்பு, எதிர்வரும் இடங்களின் வரைபடம்",
  "Close project preview": "திட்ட முன்னோட்டத்தை மூடு",
  "WhatsApp": "வாட்ஸ்அப்",
  "I have a plot": "என்னிடம் மனை உள்ளது",
  "Open this building": "இந்தக் கட்டிடத்தைத் திற",
  "Your message reaches the Dwarak Foundations team directly.": "உங்கள் செய்தி துவாரக் ஃபவுண்டேஷன்ஸ் குழுவை நேரடியாகச் சென்றடையும்.",
  "Upcoming opportunity": "எதிர்வரும் வாய்ப்பு",
  "Looking in Pallikaranai": "பள்ளிக்கரணையில் தேடுகிறோம்",
  "Looking in Perumbakkam": "பெரும்பாக்கத்தில் தேடுகிறோம்",
  "We are looking for land here. Is this yours?": "இங்கு நிலம் தேடுகிறோம். இது உங்களுடையதா?",
  "A small luxury apartment building, if the ground is right.": "நிலம் பொருந்தினால், ஒரு சிறிய உயர்தர அடுக்குமாடி.",
  "Two to four grounds. Joint venture, as on Rajam Nagar.": "இரண்டு முதல் நான்கு கிரவுண்ட். ராஜம் நகர் போல் கூட்டு முயற்சி.",
  "Location is not available in this browser.": "இந்த உலாவியில் இருப்பிட வசதி கிடைக்கவில்லை.",
  "Finding you": "உங்களைத் தேடுகிறது",
  "The nearby-project search currently covers Chennai.": "அருகிலுள்ள திட்டத் தேடல் தற்போது சென்னையை உள்ளடக்குகிறது.",
  "Turn on location access to find the nearest project.": "அருகிலுள்ள திட்டத்தைக் காண இருப்பிட அனுமதியை இயக்குங்கள்.",
  "Zoom in": "பெரிதாக்கு",
  "Zoom out": "சிறிதாக்கு",

  "Dwarak Atlantis": "துவாரக் அட்லாண்டிஸ்",
  "Dwarak Gopikrishna": "துவாரக் கோபிகிருஷ்ணா",
  "Dwarak Sumana": "துவாரக் சுமனா",
  "Dwarak Chaman": "துவாரக் சமன்",
  "Dwarak Sushruth": "துவாரக் சுஸ்ருத்",
  "S. Kolathur Villa": "எஸ். கொளத்தூர் வில்லா",
  "Golden Beach Bungalow": "கோல்டன் பீச் பங்களா",
  "Dwarak Shree": "துவாரக் ஸ்ரீ",
  "Dwarak Prem": "துவாரக் பிரேம்",
  "Dwarak Amber": "துவாரக் ஆம்பர்",
  "Dwarak Greenwoods": "துவாரக் கிரீன்வுட்ஸ்",
  "Dwarak Kothai": "துவாரக் கோதை",
  "Dwarak Krishna": "துவாரக் கிருஷ்ணா",
  "Dwarak Srinivas": "துவாரக் ஸ்ரீநிவாஸ்",
  "Pallikaranai": "பள்ளிக்கரணை",
  "Adyar": "அடையார்",
  "S. Kolathur": "எஸ். கொளத்தூர்",
  "Vengaivasal": "வெங்கைவாசல்",
  "Injambakkam": "இஞ்சம்பாக்கம்",
  "Perumbakkam": "பெரும்பாக்கம்",
  "Paari Street": "பாரி தெரு",
  "9th Cross Street": "9-வது குறுக்குத் தெரு",
  "Rajam Nagar 1st Street": "ராஜம் நகர் முதல் தெரு",
  "M.K. Radha Avenue": "எம்.கே. ராதா அவென்யூ",
  "Krishna Nagar": "கிருஷ்ணா நகர்",
  "Plot Nos. 53 & 54, Paari Street, VGP Shanthi Nagar, Pallikaranai, Chennai 600100": "மனை எண்கள் 53 & 54, பாரி தெரு, வி.ஜி.பி சாந்தி நகர், பள்ளிக்கரணை, சென்னை 600100",
  "Plot No. 1, 9th Cross Street, Indira Nagar, Adyar, Chennai 600020": "மனை எண் 1, 9-வது குறுக்குத் தெரு, இந்திரா நகர், அடையாறு, சென்னை 600020",
  "Plot No. 9, Rajam Nagar 1st Street, S. Kolathur, Chennai 600129": "மனை எண் 9, ராஜம் நகர் முதல் தெரு, எஸ். கொளத்தூர், சென்னை 600129",
  "Vengaivasal, Chennai 600100": "வெங்கைவாசல், சென்னை 600100",
  "Plot No. 7, Rajam Nagar 1st Street, S. Kolathur, Chennai 600129": "மனை எண் 7, ராஜம் நகர் முதல் தெரு, எஸ். கொளத்தூர், சென்னை 600129",
  "S. Kolathur, Chennai 600091": "எஸ். கொளத்தூர், சென்னை 600091",
  "M.K. Radha Avenue, Injambakkam, Chennai 600115": "எம்.கே. ராதா அவென்யூ, இஞ்சம்பாக்கம், சென்னை 600115",
  "Krishna Nagar, Perumbakkam, Chennai 600100": "கிருஷ்ணா நகர், பெரும்பாக்கம், சென்னை 600100",
  "Plot No. 8, Rajam Nagar 1st Street, S. Kolathur, Chennai 600129": "மனை எண் 8, ராஜம் நகர் முதல் தெரு, எஸ். கொளத்தூர், சென்னை 600129",
  "Plot No. 11A, Ground Floor": "மனை எண் 11A, தரை தளம்",
  "Arumugam Nagar 1st Street": "ஆறுமுகம் நகர் முதல் தெரு",
  "IIT Colony Main Road": "ஐஐடி காலனி பிரதான சாலை",
  "Pallikaranai, Chennai 600100": "பள்ளிக்கரணை, சென்னை 600100",
  "January 2019": "ஜனவரி 2019",
  "June 2019": "ஜூன் 2019",
  "May 2017": "மே 2017",
  "January 2017": "ஜனவரி 2017",
  "January 2020": "ஜனவரி 2020",
  "November 2015": "நவம்பர் 2015",
  "Stilt plus five, ten flats on Paari Street, Pallikaranai. TNRERA registered.": "பாரி தெரு, பள்ளிக்கரணையில் தூண் தளம் மற்றும் ஐந்து மாடி, பத்து அடுக்குமாடிகள். ரேரா பதிவு.",
  "Six flats in Indira Nagar, Adyar. Completed January 2019.": "இந்திரா நகர், அடையாறில் ஆறு அடுக்குமாடிகள். ஜனவரி 2019-இல் நிறைவு.",
  "Four flats on Rajam Nagar, S. Kolathur. Completed June 2019.": "ராஜம் நகர், எஸ். கொளத்தூரில் நான்கு அடுக்குமாடிகள். ஜூன் 2019.",
  "Six flats in Vengaivasal. Completed May 2017.": "வெங்கைவாசலில் ஆறு அடுக்குமாடிகள். மே 2017.",
  "Ground and first floor villa, 2,300 sq.ft. Completed January 2017.": "தரை மற்றும் முதல் மாடி வில்லா, 2,300 ச.அடி. ஜனவரி 2017.",
  "Bungalow on 5 grounds, 10,350 sq.ft, Injambakkam. Completed January 2020.": "இஞ்சம்பாக்கத்தில் 5 கிரவுண்ட், 10,350 ச.அடி பங்களா. ஜனவரி 2020.",
  "Four flats in Krishna Nagar, Perumbakkam. Completed November 2015.": "கிருஷ்ணா நகர், பெரும்பாக்கத்தில் நான்கு அடுக்குமாடிகள். நவம்பர் 2015.",
  "Dwarak Atlantis is a stilt-plus-five-floor residential building designed around two three-bedroom homes on each level. The development brings together practical planning, considered finishes, and the construction standards that define our work.": "துவாரக் அட்லாண்டிஸ், ஒவ்வொரு தளத்திலும் இரண்டு மூன்று படுக்கையறை இல்லங்களைக் கொண்ட தூண் தளம் மற்றும் ஐந்து மாடிக் குடியிருப்பு. நடைமுறைத் திட்டமிடல், கவனமான முடிப்புகள், எங்கள் கட்டுமானத் தரம் ஆகியவை இதில் ஒன்றிணைகின்றன.",
  "The residence includes a modular kitchen, built-in wooden wardrobes, and a private open terrace. Please contact us for current availability and property details.": "இந்த இல்லத்தில் மாடுலர் சமையலறை, பொருத்தப்பட்ட மர அலமாரிகள், தனிப்பட்ட திறந்த மொட்டைமாடி உள்ளன. தற்போதைய கிடைப்பும் சொத்து விவரங்களும் அறிய எங்களைத் தொடர்புகொள்ளுங்கள்.",
  "Set in the heart of Indira Nagar, Dwarak Gopikrishna is an intimate apartment development with six two-bedroom homes. Its scale, efficient floor plans, and established neighbourhood create a calm residential address in Adyar.": "இந்திரா நகரின் மையத்தில் அமைந்த துவாரக் கோபிகிருஷ்ணா, ஆறு இரு படுக்கையறை இல்லங்களைக் கொண்ட சிறிய குடியிருப்பு. அதன் அளவு, பயனுள்ள தளத் திட்டங்கள், நிலையான சுற்றுப்புறம் ஆகியவை அடையாறில் அமைதியான வாழ்விடத்தை உருவாக்குகின்றன.",
  "Dwarak Sumana is a closely scaled residential development of four homes across two floors. The project was shaped for privacy, practical daily living, and a lasting sense of place within Rajam Nagar.": "துவாரக் சுமனா இரண்டு மாடிகளில் நான்கு இல்லங்களைக் கொண்ட சிறிய குடியிருப்பு. தனிமை, நடைமுறை அன்றாட வாழ்க்கை, ராஜம் நகருடன் நீடிக்கும் தொடர்பு ஆகியவற்றுக்காக இது வடிவமைக்கப்பட்டது.",
  "Dwarak Chaman is a six-home development arranged over two residential floors above a stilt level. It reflects our focus on sensible planning, durable construction, and neighbourhood-scale homes.": "துவாரக் சமன், தூண் தளத்தின் மேல் இரண்டு குடியிருப்பு மாடிகளில் அமைந்த ஆறு இல்லத் திட்டம். பயனுள்ள திட்டமிடல், நீடித்த கட்டுமானம், சுற்றுப்புறத்திற்கு ஏற்ற அளவு ஆகியவற்றில் எங்கள் கவனத்தை இது காட்டுகிறது.",
  "Dwarak Sushruth brings four residences together in a measured, low-rise building. Located on Rajam Nagar 1st Street, the project balances privacy with an efficient shared footprint.": "துவாரக் சுஸ்ருத் நான்கு இல்லங்களை அளவான குறைந்த உயரக் கட்டிடத்தில் இணைக்கிறது. ராஜம் நகர் முதல் தெருவில் அமைந்த இந்தத் திட்டம் தனிமையையும் பயனுள்ள பொதுப் பரப்பையும் சமநிலைப்படுத்துகிறது.",
  "This individual villa creates 2,300 square feet of living space across a ground and first floor. The home demonstrates our ability to translate a family's requirements into a cohesive, personal residence.": "இந்தத் தனி வில்லா தரை மற்றும் முதல் மாடியில் 2,300 சதுர அடி வாழ்விடத்தை வழங்குகிறது. ஒரு குடும்பத்தின் தேவைகளை ஒருங்கிணைந்த தனிப்பட்ட இல்லமாக மாற்றும் எங்கள் திறனை இது காட்டுகிறது.",
  "Golden Beach Bungalow is a large private home shaped around a five-ground site in Injambakkam. Its scale offered the opportunity to create generous living spaces while maintaining the coherence and practicality of a family residence.": "கோல்டன் பீச் பங்களா, இஞ்சம்பாக்கத்தில் ஐந்து கிரவுண்ட் இடத்தில் உருவான பெரிய தனி இல்லம். குடும்ப இல்லத்தின் ஒருங்கிணைப்பையும் நடைமுறையையும் காக்கும் வகையில் விசாலமான வாழ்விடங்கள் உருவாக்கப்பட்டுள்ளன.",
  "Dwarak Shree is a low-rise collection of four homes in Krishna Nagar. Its compact scale supports privacy and gives every residence a stronger relationship to the building as a whole.": "துவாரக் ஸ்ரீ, கிருஷ்ணா நகரில் நான்கு இல்லங்களைக் கொண்ட குறைந்த உயரக் கட்டிடம். அதன் சிறிய அளவு தனிமையை ஆதரித்து, ஒவ்வொரு இல்லத்தையும் முழுக் கட்டிடத்துடன் இணைக்கிறது.",
  "Dwarak Prem is one of three neighbouring buildings delivered through a joint venture in Rajam Nagar. The four-home building is part of a twelve-residence development completed with a shared emphasis on quality and long-term value.": "துவாரக் பிரேம், ராஜம் நகரில் கூட்டு முயற்சியாக நிறைவு செய்த மூன்று அண்டைக் கட்டிடங்களில் ஒன்று. நான்கு இல்லங்களைக் கொண்ட இது, தரமும் நீண்டகால மதிப்பும் மையமாகக் கொண்ட பன்னிரண்டு இல்லத் திட்டத்தின் பகுதி.",

  "Project notes": "திட்டக் குறிப்புகள்",
  "Structure": "கட்டமைப்பு",
  "Homes": "இல்லங்கள்",
  "Plan": "திட்டம்",
  "Area": "பரப்பளவு",
  "Terrace": "மொட்டைமாடி",
  "Built area": "கட்டிடப் பரப்பளவு",
  "Land": "நிலம்",
  "View project brochure": "திட்டக் கையேட்டைப் பாருங்கள்",
  "Gallery": "படத்தொகுப்பு",
  "A closer look.": "மேலும் நெருக்கமாக.",
  "In the neighbourhood.": "இந்தப் பகுதியில்.",
  "Continue exploring": "தொடர்ந்து பாருங்கள்",
  "Stilt plus five floors": "தூண் தளம் மற்றும் ஐந்து மாடிகள்",
  "Stilt plus three floors": "தூண் தளம் மற்றும் மூன்று மாடிகள்",
  "Stilt plus two floors": "தூண் தளம் மற்றும் இரண்டு மாடிகள்",
  "Ground and first floor": "தரை மற்றும் முதல் மாடி",
  "10 apartments": "10 அடுக்குமாடிகள்",
  "6 apartments": "6 அடுக்குமாடிகள்",
  "4 apartments": "4 அடுக்குமாடிகள்",
  "Two 3 BHK homes per floor": "ஒவ்வொரு மாடியிலும் இரண்டு 3 BHK இல்லங்கள்",
  "Two 2 BHK homes per floor": "ஒவ்வொரு மாடியிலும் இரண்டு 2 BHK இல்லங்கள்",
  "2,167 sq. ft. saleable area": "2,167 சதுர அடி விற்பனைப் பரப்பளவு",
  "280 sq. ft. open terrace": "280 சதுர அடி திறந்த மொட்டைமாடி",
  "2,300 sq. ft.": "2,300 சதுர அடி",
  "The requested page could not be found.": "கோரிய பக்கம் கிடைக்கவில்லை.",
  "5 grounds": "5 கிரவுண்ட்",
  "10,350 sq. ft.": "10,350 சதுர அடி",
  "Page not found": "பக்கம் கிடைக்கவில்லை",
  "This plan leads elsewhere.": "இந்த வழி வேறு இடத்திற்குச் செல்கிறது.",
  "The page may have moved, or the address may be incomplete.": "பக்கம் மாற்றப்பட்டிருக்கலாம் அல்லது முகவரி முழுமையற்றதாக இருக்கலாம்.",
  "Return home": "முகப்புக்குத் திரும்புங்கள்",
};

let activeLocale: Locale = "en";
const projectNames = [
  "Dwarak Atlantis",
  "Dwarak Gopikrishna",
  "Dwarak Sumana",
  "Dwarak Chaman",
  "Dwarak Sushruth",
  "S. Kolathur Villa",
  "Golden Beach Bungalow",
  "Dwarak Shree",
  "Dwarak Prem",
];
const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();
let originalTitle = "";

function translateValue(value: string): string {
  if (tamil[value]) return tamil[value];

  const projectName = projectNames.find((name) => value.includes(name));
  if (projectName && /(?:exterior|elevation|view|entrance|interior)/i.test(value)) {
    return `${tamil[projectName]} திட்டப் படம்`;
  }
  if (projectName && value.startsWith("Explore ")) {
    return `${tamil[projectName]} திட்ட விவரங்களைப் பாருங்கள்.`;
  }

  for (const separator of [" · ", " / "]) {
    if (value.includes(separator)) {
      return value.split(separator).map((part) => translateValue(part)).join(separator);
    }
  }

  const count = value.match(/^(\d+) locations? in view$/);
  if (count) return `இந்தப் பார்வையில் ${count[1]} இடங்கள்`;

  const preview = value.match(/^Preview (.+)$/);
  if (preview) return `${translateValue(preview[1])} முன்னோட்டம்`;

  const open = value.match(/^Open (.+)$/);
  if (open) return `${translateValue(open[1])} திறக்க`;

  const view = value.match(/^View (.+)$/);
  if (view) return `${translateValue(view[1])} பார்க்க`;

  const map = value.match(/^Map showing (.+)$/);
  if (map) return `${translateValue(map[1])} காட்டும் வரைபடம்`;

  const nearby = value.match(/^We have already built near (.+)\.$/);
  if (nearby) return `${translateValue(nearby[1])} அருகில் ஏற்கனவே கட்டியுள்ளோம்.`;

  if (value.endsWith(" | Dwarak Foundations")) {
    return `${translateValue(value.slice(0, -" | Dwarak Foundations".length))} | ${tamil["Dwarak Foundations"]}`;
  }

  return value;
}

function withOriginalWhitespace(source: string, translated: string) {
  const leading = source.match(/^\s*/)?.[0] ?? "";
  const trailing = source.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function shouldIgnore(node: Node) {
  const parent = node.parentElement;
  return !parent || ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(parent.tagName) || Boolean(parent.closest("[data-i18n-ignore]"));
}

function translateTextNode(node: Text, target: Locale, previous: Locale) {
  if (shouldIgnore(node) || !node.data.trim()) return;
  let source = originalText.get(node);
  if (source === undefined) {
    source = node.data;
    originalText.set(node, source);
  } else {
    const expected = previous === "ta" ? withOriginalWhitespace(source, translateValue(source.trim())) : source;
    if (node.data !== expected) {
      source = node.data;
      originalText.set(node, source);
    }
  }
  const next = target === "ta" ? withOriginalWhitespace(source, translateValue(source.trim())) : source;
  if (node.data !== next) node.data = next;
}

function translateAttribute(element: Element, name: string, target: Locale, previous: Locale) {
  if (element.closest("[data-i18n-ignore]")) return;
  const value = element.getAttribute(name);
  if (!value) return;
  let attributes = originalAttributes.get(element);
  if (!attributes) {
    attributes = new Map();
    originalAttributes.set(element, attributes);
  }
  let source = attributes.get(name);
  if (source === undefined) {
    source = value;
    attributes.set(name, source);
  } else {
    const expected = previous === "ta" ? translateValue(source) : source;
    if (value !== expected) {
      source = value;
      attributes.set(name, source);
    }
  }
  const next = target === "ta" ? translateValue(source) : source;
  if (value !== next) element.setAttribute(name, next);
}

function translateTree(root: Node, target: Locale, previous: Locale) {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root as Text, target, previous);
    return;
  }
  if (!(root instanceof Element) && root !== document.body) return;
  const element = root instanceof Element ? root : null;
  if (element?.closest("[data-i18n-ignore]")) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) translateTextNode(node as Text, target, previous);
  const elements = [
    ...(element ? [element] : []),
    ...Array.from((root as ParentNode).querySelectorAll?.("[aria-label], [title], [alt]") ?? []),
  ];
  for (const item of elements) {
    for (const attribute of ["aria-label", "title", "alt"]) {
      if (item.hasAttribute(attribute)) translateAttribute(item, attribute, target, previous);
    }
  }
}

export function applyLocale(target: Locale) {
  const previous = activeLocale;
  document.documentElement.lang = target === "ta" ? "ta-IN" : "en-IN";
  document.documentElement.dataset.locale = target;
  translateTree(document.body, target, previous);

  if (!originalTitle) originalTitle = document.title;
  document.title = target === "ta" ? translateValue(originalTitle) : originalTitle;
  document.querySelectorAll<HTMLMetaElement>('meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]').forEach((meta) => {
    translateAttribute(meta, "content", target, previous);
  });

  const toggle = document.querySelector<HTMLButtonElement>("[data-locale-toggle]");
  const toggleLabel = toggle?.querySelector<HTMLElement>("[data-locale-toggle-label]");
  const toggleMark = toggle?.querySelector<HTMLElement>("[data-locale-toggle-mark]");
  const nextLocale: Locale = target === "ta" ? "en" : "ta";
  if (toggle) {
    toggle.dataset.localeTarget = nextLocale;
    toggle.setAttribute("aria-label", nextLocale === "ta" ? "Switch to Tamil" : "Switch to English");
  }
  if (toggleLabel) {
    toggleLabel.textContent = nextLocale === "ta" ? "தமிழ்" : "English";
    toggleLabel.lang = nextLocale;
  }
  if (toggleMark) toggleMark.textContent = nextLocale === "ta" ? "த" : "A";
  activeLocale = target;
  window.dispatchEvent(new CustomEvent("localechange", { detail: { locale: target } }));
}

export function initializeLocale() {
  document.querySelector<HTMLButtonElement>("[data-locale-toggle]")?.addEventListener("click", (event) => {
    const button = event.currentTarget as HTMLButtonElement;
    const locale: Locale = button.dataset.localeTarget === "ta" ? "ta" : "en";
    try {
      localStorage.setItem("dwarak-locale", locale);
    } catch {}
    applyLocale(locale);
  });

  let stored: Locale = "en";
  try {
    if (localStorage.getItem("dwarak-locale") === "ta") stored = "ta";
  } catch {}
  applyLocale(stored);

  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "characterData") translateTextNode(mutation.target as Text, activeLocale, activeLocale);
      mutation.addedNodes.forEach((node) => translateTree(node, activeLocale, activeLocale));
    }
  }).observe(document.body, { childList: true, characterData: true, subtree: true });
}
