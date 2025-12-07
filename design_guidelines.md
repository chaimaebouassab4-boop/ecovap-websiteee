# BioNVap Design Guidelines

## Design Approach
**Professional Blue Hygienic Theme** - Clean, modern, trust-building aesthetic inspired by medical-grade hygiene and eco-friendly technology. Reference: Stripe's clarity + Apple's minimalism with healthcare precision.

## Color System
**Primary Blue Suite:**
- Primary: `rgb(37,150,190)` / `#2596be`
- Accents: `#289db9`, `#3ea9c2`, `#53b2c9`, `#289fbb`
- Dark Navy Contrast: `#082025`
- Supporting: White backgrounds, light grays for subtle sections

**Usage:**
- Primary blue for CTAs, headers, key interactive elements
- Accent blues for cards, borders, hover states
- Dark navy for text, footer background
- Maintain high contrast ratios for accessibility

## Typography
**Hierarchy:**
- H1: 3xl-6xl, bold, dark navy - Hero headlines
- H2: 2xl-4xl, semibold - Section titles
- H3: xl-2xl, semibold - Card headers, subsections
- Body: base-lg, regular, dark navy with excellent readability
- Use modern sans-serif (Inter, Poppins, or similar via Google Fonts)

## Layout System
**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-8 to py-12 (mobile)
- Component spacing: gap-6 to gap-8
- Container: max-w-7xl with px-6 (mobile), px-8 (desktop)

## Page Structures

### Home Page
**Hero Section:** Full-width with background image (commercial cleaning environment - modern office or clinical space being cleaned, professional steam equipment visible). Include blur backdrop for text overlay.
- Headline: "Nettoyage & Désinfection à la Vapeur Sèche — Sans Produits Chimiques"
- Two CTAs: "Lire Plus" (primary blue) + "Contactez-nous" (outlined blue)
- Hero height: 80vh on desktop, auto on mobile

**Key Features Grid:** 4-column grid (desktop) → 2-column (tablet) → 1-column (mobile)
- Icon + Title + Description cards
- Soft shadows, rounded-lg corners
- Hover: subtle lift effect (transform translateY)

**Services Preview:** 2-column grid showcasing Domicile vs Entreprises categories
- Large card format with list of services
- Icon headers for each category

**Why Choose BioNVap:** 3-column benefit cards
- Eco-friendly focus, Innovation, Quality certification
- Include trust indicators (AFNOR compliance badge)

### About Page
**Multi-section layout:**
- Mission statement with side image (steam cleaning technology closeup)
- Innovation section with 2-column text + visual
- Certifications display with badges/icons
- Team or values section (3-column cards)

### Services Page
**Detailed service cards:** Masonry-style grid or 2-column layout
- Each service category as expandable card
- Include: icon, title, bullet list, pricing indicator (if applicable)
- Clear differentiation between Domicile and Entreprise services

### Contact Page
**2-column layout (desktop):**
- Left: Contact form with fields (Nom, Email, Téléphone, Message textarea)
- Right: Company info card + Google Maps embed
- Include phone number prominently, Tanger location
- Mobile: stack vertically

### Footer
**3-4 column layout:**
- Column 1: Logo + company tagline
- Column 2: Quick links (Home, About, Services, Contact)
- Column 3: Contact info (phone, location)
- Column 4: Social media icons
- Bottom bar: Legal mentions, copyright

## Component Library

**Buttons:**
- Primary: Blue background, white text, rounded-lg, px-8 py-3
- Secondary: Outlined blue, transparent background
- Blur backdrop for hero overlay buttons

**Cards:**
- Border-radius: rounded-lg to rounded-xl
- Shadow: soft (shadow-md), hover shadow-lg
- Padding: p-6 to p-8
- White background with subtle blue accents on hover

**Forms:**
- Input fields: border-gray-300, focus:border-primary-blue
- Rounded-md, px-4 py-3
- Clear labels above inputs
- Textarea: min-h-32

**Icons:**
- Use Heroicons or Font Awesome via CDN
- Size: w-8 h-8 for feature icons, w-6 h-6 for UI elements
- Color: primary blue or dark navy

## Images
**Required Images:**
1. **Hero Background:** Professional cleaning scene - modern office or clinical environment with steam cleaning equipment, high-quality, bright, clean aesthetic
2. **About Page:** Close-up of steam technology in action, eco-friendly cleaning visual
3. **Service Cards:** Optional thumbnails for each service category (home interior, office space, industrial setting)
4. **Trust Indicators:** AFNOR logo, certification badges

**Image Treatment:**
- High quality, bright, professional photography
- Subtle overlays where text appears on images
- Rounded corners on inline images

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation: Hamburger menu on mobile
- Grid columns collapse: 4→2→1, 3→2→1, 2→1

## Animations
Use sparingly and professionally:
- Smooth page transitions (fade-in)
- Card hover effects (subtle lift)
- CTA button hover (slight scale)
- Form focus states (border color transition)
- NO distracting or excessive animations

## Accessibility
- ARIA labels on all interactive elements
- Alt text for all images
- Keyboard navigation support
- Color contrast ratio minimum 4.5:1 for text
- Focus indicators visible and clear