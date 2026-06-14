# Signal Desk — US Mobile Support Command Center

> Fast searchable support playbooks for live customer help.

⚠️ **Prototype using dummy data.** Replace with verified internal playbooks later. No real US Mobile policies or confidential data included.

## Quick Start

```bash
npm install
npm run dev
```

## Features

- ⚡ **Instant search** — Weighted fuzzy search across titles, aliases, symptoms, keywords, steps, and templates
- 🎯 **Best Match first** — Smart ranking puts the most relevant playbook at the top
- 📋 **Copy buttons** — One-click copy for customer replies, escalation formats, and questions
- 🌙 **Dark cockpit theme** — Professional support-desk aesthetic
- 📱 **Mobile-optimized** — Bottom nav, thumb-friendly cards, responsive layout
- ⭐ **Favorites** — Star playbooks for quick access (localStorage)
- 🕐 **Recently Used** — Track playbooks opened this session
- ⚡/🔍 **Live/Deep modes** — Live for quick support, Deep for studying
- 📡 **PWA-ready** — Manifest + service worker for offline support

## Tech Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS v4**
- **Fuse.js** — Client-side weighted fuzzy search
- **localStorage/sessionStorage** — Favorites & recent persistence
- No backend, no database, no authentication

## Keyboard Shortcuts

- `Ctrl+K` / `⌘K` — Focus search
- `Escape` — Go back / clear search

## Dummy Playbooks Included

1. APN Setup — iPhone
2. APN Setup — Android
3. QCI / Network Priority Explanation
4. Mobile Data Not Working
5. No Service / No Signal
6. eSIM Activation Issue
7. Port-In Delay
8. Hotspot Not Working
9. Escalation Format
10. General Empathy Replies

## Deploy

Built for Vercel. Just push and connect.

```bash
npm run build
```

Output goes to `dist/`.

## Data Structure

All playbooks live in `src/data/playbooks.ts`. Replace dummy content with real playbooks using the same TypeScript schema.

## License

Internal use only.
