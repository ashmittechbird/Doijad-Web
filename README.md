# Doijad Automation & Robotics — Website

Corporate website for **Doijad Automation and Robotics Pvt. Ltd.**, an industrial automation and robotics company based in Pune, India.

## Tech Stack

- **React 18** — UI framework
- **Vite 5** — Build tool & dev server
- **Tailwind CSS 4** — Utility-first styling
- **GSAP + ScrollTrigger** — Scroll-driven animations
- **Lenis** — Smooth scrolling
- **Lucide React** — Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── public/
│   ├── about.jpg              # About section image
│   ├── training.jpg           # Training section image
│   ├── doijad-logo.png        # Company logo
│   ├── favicon.svg            # Browser favicon
│   ├── logos/                  # Client, robot & PLC brand logos
│   └── team/                  # Leadership team photos
├── src/
│   ├── main.jsx               # App entry point
│   ├── App.jsx                # Root component & section layout
│   ├── index.css              # Global styles & design tokens
│   ├── data.js                # All site content & copy
│   ├── components/
│   │   ├── Navbar.jsx         # Fixed navigation bar
│   │   ├── Hero.jsx           # Hero — video + mega text + stats
│   │   ├── Mission.jsx        # About Us — statement + photo
│   │   ├── Services.jsx       # Services — editorial numbered rows
│   │   ├── Ecosystem.jsx      # Expertise — tab-based + logo belts
│   │   ├── Team.jsx           # Leadership — team cards
│   │   ├── Training.jsx       # Training — pinned split reveal
│   │   ├── Process.jsx        # Process + Why Choose Us
│   │   ├── Faq.jsx            # FAQ accordion
│   │   ├── Footer.jsx         # Footer — CTA + nav + brand
│   │   └── ui.jsx             # Shared UI primitives
│   └── lib/
│       ├── anim.jsx           # Animation components (Reveal, Stagger, Img)
│       └── lenis.js           # Lenis smooth scroll setup
├── index.html                 # HTML entry point
├── vite.config.js             # Vite configuration
└── package.json
```

## Fonts

- **Space Grotesk** — Display headings
- **DM Sans** — Body text

Loaded via Google Fonts in `index.html`.

## Deployment

Build for production and deploy the `dist/` folder to any static host (Vercel, Netlify, etc.):

```bash
npm run build
```

## License

Private. All rights reserved — Doijad Automation and Robotics Pvt. Ltd.
