export const SITE = {
  name: "Fin Growth India",
  short: "FGI",
  tagline: "Your Growth Partner",
  brandMessage: "Grow Together, Earn Together",
  established: "May 2026",
  industry: "Financial Services & Business Support",
  address: "Mansarovar, Jaipur, Rajasthan – 302020",
  email: "fingrowthindia.info@gmail.com",
  phoneDisplay: "+91 97858 68775",
  phoneHref: "tel:+919785868775",
  whatsapp: "https://wa.me/919785868775?text=Hello%20Fin%20Growth%20India%2C%20I%20visited%20your%20website%20and%20I%27d%20like%20to%20explore%20work%20opportunities.%20Please%20guide%20me%20through%20the%20next%20steps.",
};

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1782511784150-09acb92873cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMDNkJTIwZ2xhc3MlMjBibHVlJTIwZ29sZHxlbnwwfHx8fDE3OTE2OTkxMzJ8MA&ixlib=rb-4.1.0&q=85",
  student: "https://images.unsplash.com/photo-1637589308599-3478cc55510d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHx5b3VuZyUyMGluZGlhbiUyMHN0dWRlbnQlMjBsYXB0b3B8ZW58MHx8fHwxNzkxNjk5MTMxfDA&ixlib=rb-4.1.0&q=85",
  homemaker: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  fresher: "https://images.unsplash.com/photo-1616434116710-c45ce99c1a77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxjb25maWRlbnQlMjBpbmRpYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzkxNjk5MTMxfDA&ixlib=rb-4.1.0&q=85",
  professional: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBpbmRpYW4lMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzkxNjk5MTMxfDA&ixlib=rb-4.1.0&q=85",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Opportunities", path: "/opportunities" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Leadership", path: "/leadership" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact", path: "/contact" },
];

export const SERVICES = [
  {
    icon: "Landmark",
    title: "Banking Support",
    description: "Explore business-support activities connected with banking-related workflows and administrative processes.",
  },
  {
    icon: "FileCheck",
    title: "KYC-Related Operations",
    description: "Support relevant documentation workflows, application follow-ups, status tracking, and customer coordination where authorized.",
  },
  {
    icon: "TrendingUp",
    title: "Broking Support",
    description: "Explore business-support activities associated with broking operations, subject to the applicable role and authorization.",
  },
  {
    icon: "CreditCard",
    title: "Credit Card Support",
    description: "Support application-related workflows, customer coordination, and administrative activities.",
  },
  {
    icon: "Headset",
    title: "Customer Support",
    description: "Assist with customer communication, queries, chat support, and task-related coordination.",
  },
  {
    icon: "Database",
    title: "Data Entry and Management",
    description: "Help organize information, maintain digital records, and support accurate data-management workflows.",
  },
  {
    icon: "Handshake",
    title: "Vendor & Campaign Partnerships",
    description: "Vendors are connected across our campaigns, giving participants access to campaign opportunities with competitive payouts.",
    featured: true,
  },
];

export const AUDIENCES = [
  {
    key: "students",
    image: IMAGES.student,
    imageAlt: "Student with a laptop exploring flexible opportunities",
    title: "For Students",
    description: "Explore flexible opportunities while developing practical skills alongside your studies.",
    button: "Explore Student Opportunities",
    backTitle: "Students at FGI",
    backDescription: "Balance learning with earning-oriented experience. Explore task-based business-support opportunities that can fit around lectures, exams, and study schedules — while you build practical workplace skills.",
  },
  {
    key: "homemakers",
    image: IMAGES.homemaker,
    imageAlt: "Homemaker exploring flexible work from home",
    title: "For Homemakers",
    description: "Discover opportunities that may fit around family responsibilities and your personal schedule.",
    button: "Explore Flexible Work",
    backTitle: "Homemakers at FGI",
    backDescription: "Your schedule comes first. Explore business-support opportunities that may fit around family responsibilities, with guidance and structured tasks you can manage from home.",
  },
  {
    key: "freshers",
    image: IMAGES.fresher,
    imageAlt: "Confident young professional beginning a career",
    title: "For Freshers & Job Seekers",
    description: "Explore suitable business-support roles, practical experience, and opportunities to develop workplace skills.",
    button: "Explore Career Opportunities",
    backTitle: "Freshers & Job Seekers at FGI",
    backDescription: "Start building real workplace experience. Explore business-support roles with guidance on workflows, communication, and professional expectations — a practical first step into the world of work.",
  },
  {
    key: "professionals",
    image: IMAGES.professional,
    imageAlt: "Working professional exploring additional opportunities",
    title: "For Professionals",
    description: "Explore additional business-support opportunities that may complement your existing work.",
    button: "Explore Professional Work",
    backTitle: "Professionals at FGI",
    backDescription: "Put your experience to work. Explore project-based business-support opportunities that may complement your current role and expand your professional horizons.",
  },
];

export const STEPS = [
  { icon: "Send", title: "Send Your Inquiry", description: "Share your basic details through our short inquiry form." },
  { icon: "FileSearch", title: "Initial Review", description: "Our team reviews the information and considers whether a suitable opportunity may be available." },
  { icon: "MessagesSquare", title: "Introduction and Guidance", description: "Learn about relevant work, expectations, workflows, and training requirements." },
  { icon: "ShieldCheck", title: "Verification and Onboarding", description: "Complete any necessary checks through appropriate and authorized processes." },
  { icon: "ClipboardList", title: "Opportunity Allocation", description: "Suitable opportunities may be assigned based on eligibility, skills, communication, performance, and project requirements." },
  { icon: "Rocket", title: "Begin Your Journey", description: "Follow the assigned workflow and contact the designated team for guidance when needed." },
];

export const BENEFITS = [
  { icon: "CalendarClock", title: "Flexible Scheduling", subtitle: "Where Available", description: "Explore opportunities that may fit around your existing commitments." },
  { icon: "Wifi", title: "Remote Opportunities", subtitle: "Where Available", description: "Some roles may be managed from home, depending on the project." },
  { icon: "GraduationCap", title: "Training and Guidance", description: "Learn relevant workflows with structured guidance from our team." },
  { icon: "Wrench", title: "Practical Skill Development", description: "Build hands-on skills through real, task-based business support." },
  { icon: "Briefcase", title: "Project-Based Work", subtitle: "Opportunities", description: "Engage with defined projects matched to your background and abilities." },
  { icon: "LineChart", title: "Professional Growth", description: "Develop experience and explore pathways for continued growth." },
];

export const ELIGIBILITY = [
  "Applicants must be at least 18 years old.",
  "A suitable smartphone or device may be needed.",
  "A reliable internet connection may be needed.",
  "Applicants should be able to follow instructions and complete assigned tasks.",
  "Additional requirements may depend on the specific project.",
];

export const LEADERS = [
  {
    name: "Vikram Nehra",
    role: "Founder & Owner",
    location: "Jaipur, Rajasthan",
    initials: "VN",
    image: "/assets/team/vikram-nehra-featured.jpg",
    featured: true,
    tagline: "Trader & Investor — Expertise Across All Financial Sectors",
  },
  { name: "Arsh Preet Singh", role: "Co-Founder", location: "Lucknow, Uttar Pradesh", initials: "AS", image: "/assets/team/arsh-preet-singh.jpg" },
  { name: "Tannu Sharma", role: "Co-Founder", location: "Kolkata, West Bengal", initials: "TS", image: "/assets/team/tannu-sharma.jpg" },
];

export const FAQS = [
  {
    q: "Who can inquire about opportunities?",
    a: "Students, homemakers, freshers, job seekers, freelancers, and working professionals aged 18 or older may inquire about suitable opportunities.",
  },
  {
    q: "Can freshers apply?",
    a: "Yes. Freshers may inquire about opportunities, subject to role and project requirements.",
  },
  {
    q: "Can I work from home?",
    a: "Some opportunities may support remote work, depending on the project.",
  },
  {
    q: "Do I need a laptop?",
    a: "Some tasks may be manageable on a smartphone, while others may require a computer. Requirements depend on the assigned work.",
  },
  {
    q: "How much time will I need?",
    a: "The company presentation describes schedules ranging from approximately 2–12 hours daily. Actual requirements depend on the role and project.",
  },
  {
    q: "Is the inquiry form free?",
    a: "The inquiry form is free to submit.",
  },
  {
    q: "Will I definitely receive work after submitting the form?",
    a: "No. Submitting an inquiry does not guarantee selection, work allocation, or earnings.",
  },
  {
    q: "How does compensation work?",
    a: "Compensation depends on the actual role, completed and approved work, applicable terms, and project conditions. Relevant details should be explained before work begins.",
  },
  {
    q: "How will FGI contact me?",
    a: "Provide your name, city, email, phone number, and age through the inquiry form. The team can use your contact details to respond to your inquiry.",
  },
  {
    q: "What information does the inquiry form collect?",
    a: "Only full name, city, email address, phone number, and age.",
  },
];

export const REVIEWS = [
  {
    quote: "The team was professional and supportive throughout the process. All my queries were addressed clearly, and the overall experience was smooth.",
    name: "Rahul S.",
    role: "Participant · Jaipur",
  },
  {
    quote: "I appreciated the clear communication and step-by-step guidance. The team made the process easier to understand and helped me with my questions.",
    name: "Priya M.",
    role: "Participant · Lucknow",
  },
  {
    quote: "The overall experience was well organised. I received timely responses and found the team approachable and helpful whenever I needed assistance.",
    name: "Amit K.",
    role: "Participant · Kolkata",
  },
  {
    quote: "The instructions were easy to follow, and every step was explained before I began. Everything felt organised right from the first conversation.",
    name: "Sneha R.",
    role: "Participant · Delhi",
  },
  {
    quote: "Responses were quick, and the team patiently clarified my doubts at each stage. A smooth and professional experience overall.",
    name: "Vikash T.",
    role: "Participant · Jaipur",
  },
];

// Only registrations/associations explicitly confirmed by the company are listed here.
export const CERTIFICATIONS = [
  { name: "MSME Registered", caption: "Ministry of MSME, Govt. of India", logo: "/assets/partners/msme.png" },
  { name: "Aadhaar Enabled KYC", caption: "UIDAI", logo: "/assets/partners/aadhaar.png" },
  { name: "Digital India", caption: "Power to Empower", logo: "/assets/partners/digital-india.png" },
];

export const BANKING_NETWORK = [
  { name: "HDFC Bank", logo: "/assets/partners/hdfc-bank.png" },
  { name: "ICICI Bank", logo: "/assets/partners/icici-bank.png" },
  { name: "Axis Bank", logo: "/assets/partners/axis-bank.png" },
  { name: "Bank of Baroda", logo: "/assets/partners/bank-of-baroda.png" },
  { name: "Canara Bank", logo: "/assets/partners/canara-bank.png" },
  { name: "Yes Bank", logo: "/assets/partners/yes-bank.png" },
];

export const PLATFORM_NETWORK = [
  { name: "Zerodha", logo: "/assets/partners/zerodha.png" },
  { name: "Upstox", logo: "/assets/partners/upstox.png" },
  { name: "Angel One", logo: "/assets/partners/angel-one.png" },
];
