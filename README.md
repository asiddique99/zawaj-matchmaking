# MNH Matrimonial Matchmaking Service — website

A static, no-build website for a personal Muslim matchmaking service. Registration is handled by an embedded Google Form.

```
index.html        Home page (hero, how it works, approach, safety, registration, FAQ)
privacy.html      Draft privacy notice
assets/config.js  ← the only file you normally need to edit
assets/styles.css
assets/main.js
assets/logo.png, favicon-64.png, apple-touch-icon.png   Brand logo + icons
vercel.json       Clean URLs + security headers
```

## 1. Review locally

Open `index.html` in a browser, or run a tiny server from this folder:

```bash
python -m http.server 8000      # then visit http://localhost:8000
```

### Pre-publish checklist

- [x] **Form** — linked to your Google Form; contact email set to noorulhud.masjid@gmail.com.
- [ ] **Embed the form on the page (optional)** — the form currently requires Google sign-in, which Google won't show inside another site, so the page shows an "Open registration form" button. To embed instead: in Google Forms → Settings → Responses set "Collect email addresses" to "Responder input", turn off "Limit to 1 response", remove any file-upload questions, then set `formRequiresSignIn: false` in `assets/config.js`.
- [ ] **Privacy notice** — have `privacy.html` checked for the laws where you operate.
- [ ] **Copy** — read every section; adjust claims (e.g. "free to register", response times) to match how you'll actually run the service.
- [ ] Check on a phone: menu, form scrolling, FAQ.

## 2. Publish to GitHub

```bash
cd C:\DSM\Zawaj_matchmaking
git init
git add .
git commit -m "Initial MNH Matrimonial Matchmaking Service site"
git branch -M main
git remote add origin https://github.com/<your-username>/zawaj-matchmaking.git
git push -u origin main
```

## 3. Deploy to Vercel

1. vercel.com → **Add New → Project** → import the GitHub repo.
2. Framework preset: **Other**. Build command: *none*. Output directory: `.` (root).
3. Deploy — you'll get a preview URL. Review it, then promote to Production (or every push to `main` deploys to production automatically).
4. Optional: add your custom domain under **Project → Settings → Domains**.

CLI alternative: `npm i -g vercel` then `vercel` (preview) and `vercel --prod` (production).

## Research basis

The "Our approach" section draws on the three leading marriage-focused Muslim platforms:

| Platform | Notable for |
|---|---|
| Muzz | ~10M members reported; wali/chaperone chat sharing, selfie verification, photo blurring |
| SingleMuslim.com | Since 2000; ~2M members; manual profile vetting; family can register on someone's behalf |
| Salams | "6M+" members claimed; detailed faith profiles (sect, prayer level), selfie verification |

Figures are each platform's own or press claims, not independently verified.
