// ============================================================
//  ALL WEBSITE TEXT LIVES IN THIS FILE.
//  Anything marked  ⚠ REPLACE  is a placeholder - put in your
//  real details before the site goes live.
// ============================================================

export const hospital = {
  name: 'Elite Eye Hospital',
  shortName: 'Elite',
  tagline: 'See the world clearly',
  phone: '+91 00000 00000',            // ⚠ REPLACE - main reception number
  emergency: '+91 00000 00000',        // ⚠ REPLACE - 24x7 emergency number
  whatsapp: '910000000000',            // ⚠ REPLACE - WhatsApp number: country code + number, no + or spaces
  email: 'info@eliteeyehospital.in',   // ⚠ REPLACE
  addressLines: ['Elite Eye Hospital', 'Near Federal Bank', 'Ottappalam, Palakkad', 'Kerala - 679101'],
  // ⚠ REPLACE - what you would type into Google Maps to find the hospital,
  // e.g. "Elite Eye Hospital, MG Road, Thrissur". The more exact, the better.
  mapQuery: 'Elite Eye Hospital, Ottapalam, Kerala',
  // Exact pin of the hospital (taken from your Google Maps link) - used by the embedded map.
  mapCoords: '10.773261,76.375015',
  // Your Google Maps share link - used for the "Get directions" / "Open in Google Maps" buttons.
  mapLink: 'https://maps.app.goo.gl/ygFQ2NbLk4wsmrXR9',
  // Optional - exact pin on the embedded map. In Google Maps: Share > Embed a map >
  // copy ONLY the URL inside src="..." and paste it here. Leave '' to use mapQuery.
  mapEmbed: '',
  hours: [
    { days: 'Monday – Saturday', time: '8:00 AM – 6:00 PM', open: [8, 18], dayNums: [1, 2, 3, 4, 5, 6] },
    { days: 'Sunday', time: 'Closed', open: [0, 0], dayNums: [0] },
  ],
  social: {
    facebook: '#',   // ⚠ REPLACE with your page links, or leave '#' to hide nothing
    instagram: '#',
    youtube: '#',
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    icon: 'child', title: 'Paediatric Ophthalmology',
    short: 'Gentle, child-friendly eye care for squint, lazy eye and vision problems in children.',
    long: 'Children\'s eye problems are easiest to treat when found early. Our paediatric ophthalmology clinic offers vision screening, glasses prescription, lazy-eye (amblyopia) therapy and squint assessment in a calm, friendly setting. We take time to explain everything to both the child and the parents.',
  },
  {
    icon: 'drop', title: 'Glaucoma',
    short: 'Early detection and long-term management of glaucoma to protect your sight.',
    long: 'Glaucoma often causes no symptoms until vision is already lost, so regular check-ups matter, especially after 40 or with a family history. We assess eye pressure, the optic nerve and visual field, and plan the right treatment with medicines, laser or surgery, followed by careful lifelong monitoring.',
  },
  {
    icon: 'retina', title: 'Medical Retina',
    short: 'Diagnosis and treatment of diabetic retinopathy, macular problems and other retinal diseases.',
    long: 'Our medical retina service uses detailed retinal imaging and scans to detect problems such as diabetic retinopathy and macular degeneration early. Treatment may include medicines, injections and laser, along with regular follow-up. People with diabetes or high blood pressure should have their retina checked every year.',
  },
  {
    icon: 'shield', title: 'Pharmacy',
    short: 'In-house pharmacy with genuine eye drops and medicines, available during your visit.',
    long: 'Collect your prescribed eye drops, ointments and medicines right after your consultation at our in-house pharmacy. We stock genuine medicines and our staff will explain how and when to use each one, so you can start treatment without any delay.',
  },
  {
    icon: 'glasses', title: 'Opticals',
    short: 'Spectacle frames and lenses with accurate prescriptions, fitted by trained staff.',
    long: 'Our optical store offers a wide choice of frames and lenses for children and adults, including anti-glare and blue-light protection. Your prescription is checked carefully and your glasses are fitted for comfort, so you can see clearly from the day you wear them.',
  },
  {
    icon: 'lens', title: 'Contact Lens Clinic',
    short: 'Eye assessment, lens fitting and guidance for safe, comfortable contact lens wear.',
    long: 'Our contact lens clinic assesses your eyes and finds the lens type and fit that suits you, whether for everyday wear, special needs or sensitive eyes. We teach you how to insert, remove and clean your lenses safely, and provide follow-up checks to keep your eyes healthy.',
  },
  {
    icon: 'check', title: 'Cashless Surgery',
    short: 'Cashless treatment with insurance and health schemes, with help on paperwork.',
    long: 'If you have health insurance or are covered under a scheme, our team helps with pre-authorisation and paperwork so that eligible surgeries can be done without paying upfront at the hospital. Please bring your insurance card and a photo ID, and speak to our front desk to check your eligibility before the day of surgery.',
  },
]

export const highlights = [
  { icon: 'scan', title: 'Advanced technology', text: 'OCT, digital perimetry, biometry and modern surgical microscopes.' },
  { icon: 'shield', title: 'Cashless insurance', text: 'Tie-ups with major insurers and government health schemes.' },
  { icon: 'clock', title: '24×7 emergency', text: 'Eye injuries and sudden vision loss are seen at any hour.' },
  { icon: 'heart', title: 'Patient-first care', text: 'Clear explanations, transparent pricing and no hidden charges.' },
]

export const steps = [
  { title: 'Book', text: 'Call, WhatsApp or use the form to choose a time.' },
  { title: 'Examine', text: 'A complete eye check-up with modern diagnostics.' },
  { title: 'Consult', text: 'Your doctor explains the findings and every option.' },
  { title: 'Treat & follow up', text: 'Treatment, surgery if needed, and caring follow-ups.' },
]

// ⚠ REPLACE - put your real doctors here. The photos below are SAMPLE stock images
// (Unsplash). Swap with real photos: put e.g. "dr-anjali.jpg" in the public folder
// and set  photo: '/dr-anjali.jpg'
export const doctors = [
  { name: 'Dr. Doctor Name', role: 'Medical Director · Ophthalmologist', qual: 'MBBS, MS (Ophthalmology)', exp: 18, photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80' },
  { name: 'Dr. Doctor Name', role: 'Medical Retina Specialist', qual: 'MBBS, MS, FVRS', exp: 14, photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80' },
  { name: 'Dr. Doctor Name', role: 'Paediatric Ophthalmology & Squint', qual: 'MBBS, DNB, FPOS', exp: 10, photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80' },
  { name: 'Dr. Doctor Name', role: 'Glaucoma Specialist', qual: 'MBBS, MS, FICO', exp: 12, photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80' },
]

export const testimonials = [
  { name: 'Ramesh K.', detail: 'Cataract surgery', rating: 5, text: 'The surgery took less than half an hour and I could read the newspaper the next morning. Very caring staff.' },
  { name: 'Divya S.', detail: 'LASIK', rating: 5, text: 'After LASIK I finally stopped carrying glasses everywhere. The doctor explained every step and I felt completely at ease.' },
  { name: 'Sameer P.', detail: 'Parent of a young patient', rating: 5, text: 'They were so patient with my son. His squint treatment is going really well and he actually enjoys the visits.' },
  { name: 'Lakshmi N.', detail: 'Retina care', rating: 5, text: 'My diabetic retinopathy was found early during a routine check. I am grateful for the timely treatment.' },
]

export const insurers = ['Star Health', 'Care Health', 'HDFC ERGO', 'Niva Bupa', 'ICICI Lombard', 'Medisep', 'Ayushman Bharat'] // ⚠ REPLACE with your actual tie-ups

export const faqs = [
  { q: 'Do I need an appointment?', a: 'Walk-ins are welcome, but booking ahead reduces your waiting time. You can call, message us on WhatsApp, or use the booking form on this page.' },
  { q: 'How long does a full eye check-up take?', a: 'A complete check-up takes about 60–90 minutes, as some tests need eye drops to dilate the pupils. Please bring someone to drive you home if your eyes are dilated.' },
  { q: 'Do you offer cashless treatment?', a: 'Yes. We help eligible patients with cashless surgery under health insurance and schemes. Please bring your insurance card and photo ID, and speak to our front desk beforehand to confirm eligibility.' },
  { q: 'Do you see children?', a: 'Yes. Our paediatric ophthalmology clinic looks after children\'s vision, squint and lazy eye. Early check-ups give the best results.' },
  { q: 'Do you accept insurance?', a: 'Yes. We offer cashless treatment with most major insurance companies and government schemes. Please bring your insurance card and ID.' },
  { q: 'What should I bring to my first visit?', a: 'Your current glasses, any previous eye reports or prescriptions, a list of medicines you take, and your insurance details if applicable.' },
]

// ============================================================
//  HOSPITAL IMAGES  ⚠ SAMPLE stock photos (Unsplash) - REPLACE with your real photos
//  Put your photos in  public/images/  (e.g. public/images/reception.jpg)
//  then change the  src  below, e.g.  src: '/images/reception.jpg'
//  Landscape photos (about 1200 x 800) work best.
// ============================================================
export const images = {
  about: { src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=900&q=80', fallback: ['https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80', '/images/reception.svg'], alt: 'Doctor caring for a patient' },
}

export const gallery = [
  { src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80', fallback: '/images/hospital-building.svg', alt: 'Hospital building', caption: 'Our hospital' },
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80', fallback: '/images/reception.svg', alt: 'Reception and waiting area', caption: 'Reception & waiting area' },
  { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80', fallback: '/images/consultation.svg', alt: 'Consultation room', caption: 'Consultation room' },
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80', fallback: '/images/diagnostics.svg', alt: 'Diagnostic equipment', caption: 'Advanced diagnostics' },
  { src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80', fallback: '/images/operation-theatre.svg', alt: 'Operation theatre', caption: 'Modern operation theatre' },
  { src: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?auto=format&fit=crop&w=1200&q=80', fallback: '/images/optical-store.svg', alt: 'Eye examination', caption: 'Eye examination' },
  { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80', fallback: '/images/reception.svg', alt: 'Hospital corridor', caption: 'Clean, calm corridors' },
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80', fallback: '/images/consultation.svg', alt: 'Patient care', caption: 'Caring patient experience' },
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80', fallback: ['https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80', '/images/optical-store.svg'], alt: 'Doctor with stethoscope', caption: 'Our care team' },
]

// Sliding photos behind the hero (first screen). SAMPLE stock photos - replace with your own.
export const heroSlides = [
  { src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1920&q=75' },
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=75' },
  { src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1920&q=75' },
  { src: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?auto=format&fit=crop&w=1920&q=75' },
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1920&q=75' },
]
