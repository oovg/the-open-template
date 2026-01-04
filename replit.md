# The Open Machine - Replit Configuration

## Overview

The Open Machine is a Next.js-based media publication and think tank website focused on extitutional theory, Ethereum ecosystem research, and experimental cultural content. The site serves as a platform for essays ("transmissions"), speculative fiction ("surveys"), and various media publications including books, zines, and posters. Content is primarily Markdown-based with a focus on philosophical and research-oriented writing about decentralized systems, coordination mechanisms, and underground cultural movements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js (Pages Router)** - The project uses the traditional Pages Router pattern (`src/pages/`) rather than the newer App Router
- **TypeScript** - Full TypeScript configuration with strict mode enabled
- **Path aliases** configured via `@/*` mapping to `./src/*`

### UI and Styling
- **Chakra UI v2** - Primary component library with custom theme configuration
- **Emotion** - CSS-in-JS styling (required by Chakra UI)
- **Framer Motion** - Animation library integrated with Chakra UI
- **Custom fonts** loaded via Adobe Typekit (ulo1dho.css)
- **Dark/Light mode** - Color mode support via Chakra UI's `useColorMode`

### Content Management
- **Markdown-based CMS** - Blog posts stored as `.md` files in `src/_posts/`
- **gray-matter** - Parses YAML frontmatter from Markdown files
- **remark ecosystem** - Markdown processing pipeline using remark, remark-html, remark-gfm
- **react-markdown** - Client-side Markdown rendering with custom CSS module styling

### Content Types
Posts have a `matter` field in frontmatter that categorizes them:
- `transmissions` - Essays and longer-form writing
- `surveys` - Speculative fiction glossary entries

### Static Site Generation
- Posts are fetched at build time via `getStaticProps` and `getStaticPaths`
- API utilities in `src/lib/api.ts` handle reading and sorting Markdown files
- All content is pre-rendered as static HTML

### Theme Configuration
Located in `src/theme/` with customizable:
- Color tokens (primary, bg, midtone)
- Text styles (h1-h6, paragraph)
- Component defaults

## External Dependencies

### Third-Party Services
- **Adobe Typekit** - Custom font hosting (fonts loaded via external CSS)
- **Arweave** - PDF hosting for downloadable publications
- **Zora** - NFT minting/collecting platform for publication sales
- **Manifold** - Alternative NFT platform for collectibles

### Key Libraries
- **ethers.js v6** - Ethereum library (present but usage not visible in provided files)
- **date-fns** - Date formatting utilities
- **gray-matter** - Markdown frontmatter parsing

### Static Assets
- PDFs stored in `/public/assets/pdf/`
- Images stored in `/public/assets/`
- Publications include downloadable PDFs alongside collectible NFT versions