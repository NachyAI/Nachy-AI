# NachyAI

**Turn an idea into a video.**

NachyAI is an AI-powered short-form video creation platform for creators, brands and businesses.

## Included in this V1 foundation
- Responsive black/orange landing page
- Dashboard
- Create Video workflow
- Media picker
- Style selection
- 15-second vertical-video settings
- My Videos page
- `/api/generate` job endpoint scaffold
- Environment template for Supabase and a video provider

## Run locally
1. Install Node.js 20+
2. `npm install`
3. Copy `.env.example` to `.env.local`
4. `npm run dev`
5. Open `http://localhost:3000`

## Next build milestones
Supabase auth/database/storage, persistent jobs and credits, AI script/storyboard generation, video-provider integration, rendering/voice/captions, Stripe billing, and production deployment.

**Never commit API keys or service-role credentials.**
