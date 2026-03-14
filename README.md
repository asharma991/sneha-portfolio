# Sneha Portfolio — Project Roadmap

A notebook-inspired portfolio website for Sneha, a marketing professional focused on creative strategy.

## 1) Project Vision

Build a personal portfolio that feels handcrafted, bright, and expressive:

- Visual mood: notebook paper, scribbles, taped notes, floating doodles
- Colors: peach, bright yellow, warm cream, sunflower accents
- Tone: thoughtful, strategic, creative, human
- Core stack: Svelte + Tailwind CSS (frontend), Sanity (content management)

## 2) Goals

- Keep architecture simple and easy to maintain
- Make all key content editable from Sanity
- Prioritize visual personality without hurting performance
- Support media-rich content (PDFs, images, music links, galleries)
- Ensure mobile-first, responsive layout

## 3) Site Structure

Top navigation (sticky):

1. About
2. Making Sense
3. Experiences
4. Bits and Pieces

Footer:

- Social links (LinkedIn, Instagram, X, email, etc.)

## 4) Section Breakdown

### About

- Hero intro with Sneha’s profile image
- Short bio and positioning statement (creative strategy)
- Floating handwritten-style micro-copy around the hero
- Decorative stickers/sunflower motifs

### Making Sense (Work)

- Card grid layout
- Each card contains:
  - Cover image
  - Title
  - Optional short description/tags
- Clicking a card opens linked asset in a new tab:
  - PDF (essay/research paper)
  - Or image asset
- Include a featured composition near Sneha’s image with floating elements

### Experiences

- Visual timeline of workplaces/roles
- Item fields: organization, role, dates, location, impact highlights
- Optional logo and color marker per timeline node

### Bits and Pieces

- Mixed-content gallery:
  - Images she likes
  - Music she loves (streaming links/embed references)
  - Optional short notes/captions
- Masonry or responsive card collage style

## 5) Recommended Information Architecture (Simple)

### Frontend (Svelte + Tailwind)

- `src/routes/+page.svelte` → home page sections
- `src/lib/components/` → reusable section components
- `src/lib/styles/` → global styles + texture/background utilities
- `src/lib/sanity/` → Sanity client + query helpers

### CMS (Sanity)

Create these content types:

1. **siteSettings**
   - Site title
   - Nav labels
   - Social links
   - Theme accents (optional)
2. **aboutSection**
   - Heading
   - Intro text
   - Profile image
   - Floating note snippets
3. **workItem** (for Making Sense)
   - Title
   - Cover image
   - Category/tags
   - Asset type (`pdf` | `image`)
   - File/image URL
   - Sort order / publish date
4. **experienceItem**
   - Organization
   - Role
   - Start/end dates
   - Highlights
   - Logo (optional)
5. **bitsItem**
   - Type (`image` | `music`)
   - Title
   - Image or external music URL
   - Caption/note

## 6) Visual Design Direction

- Base background:
  - Light notebook texture/grid
  - Soft paper grain
  - Dark mode toggle (optional)
- Scribble layer:
  - Hand-drawn lines/arrows/circles as lightweight SVG assets
- Accent layer:
  - Peach/yellow blocks, stickers, sunflower icons
- Typography:
  - One expressive serif/display for headings
  - One clean sans-serif for body text
  - Optional handwritten accent font for small notes

## 7) UX Behaviors

- Smooth scroll to sections from top nav
- Active nav state while scrolling
- Subtle float/parallax on decorative doodles
- External asset open behavior:
  - Work cards open PDF/image in new tab
- Accessible interactions:
  - Keyboard focus states
  - Adequate color contrast
  - Meaningful alt text

## 8) Implementation Phases

### Phase 1 — Foundation

- Initialize Svelte project
- Configure Tailwind CSS
- Set up base layout and section anchors
- Add global palette + typography tokens

### Phase 2 — Sanity Setup

- Initialize Sanity studio
- Define and register schemas listed above
- Add seed/sample content for all sections
- Connect frontend to Sanity API

### Phase 3 — Core Sections

- Build About section
- Build Making Sense card grid with open-in-new-tab behavior
- Build Experiences timeline
- Build Bits and Pieces gallery
- Build footer socials

### Phase 4 — Visual Personality Layer

- Notebook background texture
- Scribble overlays and floating text snippets
- Sunflower and sticker accents
- Motion polish (small hover/float effects)

### Phase 5 — Responsiveness & Accessibility

- Optimize breakpoints for mobile/tablet/desktop
- Improve spacing and readability
- Add focus states, semantic landmarks, alt text

### Phase 6 — QA & Launch

- Content QA in Sanity
- Browser/device checks
- Performance optimization (image sizing/lazy loading)
- Deploy frontend + Sanity studio

## 9) Content Workflow (Day-to-Day)

- Sneha updates content in Sanity Studio
- Frontend reads and renders content dynamically
- New work entries appear automatically in Making Sense
- Timeline and Bits updates do not require code changes

## 10) Delivery Checklist

- [ ] Sticky top navigation with 4 sections
- [ ] About section with notebook personality
- [ ] Making Sense cards opening PDF/image in new tab
- [ ] Experiences timeline visual
- [ ] Bits and Pieces media + music links
- [ ] Footer with socials
- [ ] Responsive design across devices
- [ ] Sanity-managed content for all sections
- [ ] Accessible and performance-optimized implementation

## 11) Nice-to-Have Enhancements (After MVP)

- Filter/sort for Making Sense items
- Theme switch (day paper / evening paper)
- Soft ambient sound toggle in Bits and Pieces
- “Featured work” spotlight with pinboard animation

***

If this roadmap looks good, next step is to set up the project skeleton (Svelte + Tailwind + Sanity) and implement Phase 1.
