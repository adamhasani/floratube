# FloraTube

Trending YouTube tanpa iklan & tanpa API key — pakai [Invidious](https://invidious.io)
sebagai backend (region Indonesia).

## Tech
- Next.js 15 (App Router, server-side fetch → bebas CORS)
- React 19
- Data: `inv.tux.pizza` (Invidious instance)

## Cara jalan
```bash
npm install
npm run dev
```
Buka `http://localhost:3000`. Data trending di-fetch di server, jadi client
tetap ringan.
