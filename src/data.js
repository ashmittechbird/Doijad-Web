// Content sourced from DARPL Intro.pdf (company profile) — About, Services,
// Training, Leadership and Contact are the client's real content.

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Training", href: "#training" },
  // { label: "Team", href: "#team" }, // section moved to the About Us page
  { label: "FAQ", href: "#faq" },
];

export const HERO_MARQUEE = [
  "Industrial Robot Integration",
  "Control Systems",
  "SPM Design & Manufacturing",
  "Simulation",
  "Maintenance Support",
  "Robotics Training",
];

export const HERO_STATS = [
  { value: 34, suffix: "+", label: "Years Experience" },
  { value: 6, suffix: "", label: "Service Disciplines" },
  { value: 14, suffix: "+", label: "Robot Brands" },
  { value: 100, suffix: "%", label: "In-House Delivery" },
];

export const ABOUT = {
  heading: "About Us",
  paragraph:
    "Doijad Automation and Robotics Pvt. Ltd. is a Pune-based industrial automation company delivering advanced automation solutions that help businesses improve productivity, consistency and operational efficiency. Our team supports industries at every stage — from concept development and system design to integration, implementation and ongoing maintenance.",
  img: "/about.jpg",
};

export const SERVICES_INTRO =
  "Six disciplines, one accountable team — from robot selection and control architecture to the special purpose machines and training that keep your floor running.";

export const SERVICES = [
  {
    id: "01",
    title: "Industrial Robot Integration",
    desc: "Robotic cells engineered around your process — from robot selection and end-of-arm tooling to programming, safety and proven cycle time on your floor.",
    img: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
    video: "https://assets.mixkit.co/videos/20970/20970-720.mp4",
  },
  {
    id: "02",
    title: "Control Systems Design & Integration",
    desc: "PLC and control architecture designed, panel-built and integrated as one system — so every actuator, sensor and safety circuit speaks the same language.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    video: "https://assets.mixkit.co/videos/23693/23693-720.mp4",
  },
  {
    id: "03",
    title: "SPM Design & Manufacturing",
    desc: "When a standard machine doesn't exist for your problem, we design and manufacture a special purpose machine that does — concept to commissioning.",
    img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1200&q=80",
    video: "https://assets.mixkit.co/videos/47755/47755-720.mp4",
  },
  {
    id: "04",
    title: "Simulation",
    desc: "Reach studies, cycle-time validation and virtual commissioning — you see the system running on screen before a single part is cut.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    video: "https://assets.mixkit.co/videos/21231/21231-720.mp4",
  },
  {
    id: "05",
    title: "Maintenance Support",
    desc: "Preventive maintenance, rapid troubleshooting and support that keeps your automation running the way it did on day one.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    video: "https://assets.mixkit.co/videos/23484/23484-720.mp4",
  },
  {
    id: "06",
    title: "Industrial Robotics Training",
    desc: "Hands-on robot programming, system operation and safety training for students, engineers and working professionals — bridging academia and the shop floor.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    video: "https://assets.mixkit.co/videos/22032/22032-720.mp4",
  },
];

export const TRAINING = {
  heading: "We train the people who run the robots",
  intro:
    "Our Industrial Robot Training Program is specially designed to equip college students, diploma holders, engineers and working professionals with the practical skills required in today's automation-driven manufacturing industry.",
  body:
    "The course builds a strong foundation in industrial robotics, robot programming, system operation, safety standards and real-time troubleshooting — with the problem-solving confidence to work in production environments such as automobile manufacturing, welding cells, material handling systems and assembly lines.",
  outcomes: [
    "Robot programming & system operation",
    "Safety standards & real-time troubleshooting",
    "Automation logic & problem-solving ability",
    "Careers in robotics, maintenance & integration",
  ],
  img: "/training.jpg",
};

export const TEAM = [
  {
    name: "Pradeep Doijad",
    role: "Managing Director",
    photo: "/team/pradeep-doijad.png",
    note: "34+ years of experience in HR, admin and legal compliance across the forging and automotive industries.",
  },
  {
    name: "Pranil Doijad",
    role: "Director, Operations",
    photo: "/team/pranil-doijad.png",
    note: "12+ years of industrial experience running automation projects from order to handover.",
  },
  {
    name: "Anup Koganole",
    role: "Director, Technical",
    photo: "/team/anup-koganole.png",
    note: "10+ years of industrial experience across robotics, controls and system integration.",
  },
];

export const ECOSYSTEM = [
  {
    key: "clients",
    label: "Clients we work for",
    speed: "44s",
    reverse: false,
    logos: [
      { file: "alfa-laval", name: "Alfa Laval" },
      { file: "solidus", name: "Solidus" },
      { file: "ghatge-patil", name: "Ghatge Patil Industries" },
      { file: "mahabal", name: "Mahabal Group of Industries" },
      { file: "haosen", name: "Haosen" },
      { file: "ashok-leyland", name: "Ashok Leyland" },
      { file: "client-emblem", name: "Client" },
      { file: "tata", name: "Tata" },
      { file: "keepsake", name: "Keepsake" },
    ],
  },
  {
    key: "robots",
    label: "Robots we work with",
    speed: "58s",
    reverse: true,
    logos: [
      { file: "kuka", name: "KUKA" },
      { file: "fanuc", name: "FANUC Robotics" },
      { file: "abb", name: "ABB" },
      { file: "yaskawa", name: "Yaskawa" },
      { file: "kawasaki", name: "Kawasaki Robotics" },
      { file: "panasonic", name: "Panasonic" },
      { file: "yasaka", name: "Yasaka Robots" },
      { file: "epson", name: "Epson Robots" },
      { file: "fairino", name: "Fairino" },
      { file: "staubli", name: "Stäubli" },
      { file: "duco", name: "DUCO Robots" },
      { file: "siasun", name: "SIASUN" },
      { file: "mitsubishi-electric", name: "Mitsubishi Electric" },
      { file: "efort", name: "EFORT Robotics" },
    ],
  },
  {
    key: "plcs",
    label: "PLC platforms we integrate",
    speed: "38s",
    reverse: false,
    logos: [
      { file: "allen-bradley", name: "Allen-Bradley" },
      { file: "siemens", name: "Siemens" },
      { file: "omron", name: "Omron" },
      { file: "delta", name: "Delta" },
      { file: "beckhoff", name: "Beckhoff" },
      { file: "mitsubishi-plc", name: "Mitsubishi Electric" },
    ],
  },
];

export const PROCESS = [
  {
    id: "01",
    title: "Concept Development",
    desc: "We study your process and define what automation must achieve — in terms of productivity, consistency and operational efficiency.",
  },
  {
    id: "02",
    title: "System Design",
    desc: "Cell layouts, control architecture and simulation validate the complete system on screen before anything is built.",
  },
  {
    id: "03",
    title: "Integration",
    desc: "Robots, control systems and special purpose machines come together in-house — programmed, wired and tested as one system.",
  },
  {
    id: "04",
    title: "Implementation & Support",
    desc: "We commission on your floor, train your operators and stay accountable with maintenance support long after handover.",
  },
];

export const WHY_US = [
  {
    title: "Practical Industry Experience",
    desc: "Solutions grounded in decades of hands-on manufacturing experience — not theory.",
  },
  {
    title: "Innovative Thinking",
    desc: "Complex manufacturing challenges solved with fresh engineering, not copy-paste cells.",
  },
  {
    title: "End-to-End Delivery",
    desc: "Concept development, system design, integration and implementation — one accountable team at every stage.",
  },
  {
    title: "Future-Ready Systems",
    desc: "Smarter production environments that reduce manual dependency and scale with your ambition.",
  },
];

export const FAQS = [
  {
    q: "How do I know if my process is worth automating?",
    a: "We start with a feasibility discussion — part analysis, cycle-time math and a payback estimate. If the ROI isn't there, we'll tell you straight and suggest what to fix first.",
  },
  {
    q: "What does 'end-to-end' actually cover?",
    a: "Everything from concept development and system design to integration, implementation and maintenance support — one team, one point of accountability at every stage.",
  },
  {
    q: "Can you work with our existing machines and robots?",
    a: "Yes. We integrate robots and control systems onto existing lines and machines, and we work across the major robot and PLC platforms.",
  },
  {
    q: "What happens after installation?",
    a: "Operator training, documentation and defined maintenance support. Our team stays available for troubleshooting so your line keeps running the way it was commissioned.",
  },
  {
    q: "Who can join the robotics training program?",
    a: "College students, diploma holders, engineers and working professionals. The program bridges academic learning and industry requirements — from robot programming basics to real-time troubleshooting.",
  },
];

export const CONTACT = {
  email: "sales@doijad.com",
  phone: "+91 91722 20160",
  phoneHref: "+919172220160",
  address: "Office No. 77, A Wing, 6th Floor, K K Market, Dhankawadi, Pune 411037",
  website: "www.doijad.com",
};
