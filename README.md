# Pratik Lipane — Portfolio Website
> React + Vite · Dark editorial theme · EmailJS contact form

---

## 📁 Folder Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx              ← React entry point
    ├── App.jsx               ← Root component (assembles all sections)
    ├── index.css             ← Global CSS variables, resets, utilities
    └── components/
        ├── Header/
        │   ├── Header.jsx    ← Sticky nav + mobile hamburger
        │   └── Header.css
        ├── Home/
        │   ├── Home.jsx      ← Hero: name, title, socials, avatar card
        │   └── Home.css
        ├── About/
        │   ├── About.jsx     ← Bio, skills grid, stats card
        │   └── About.css
        ├── Services/
        │   ├── Services.jsx  ← 3 service cards with hover effects
        │   └── Services.css
        ├── Portfolio/
        │   ├── Portfolio.jsx ← 3 project cards with overlay links
        │   └── Portfolio.css
        ├── Contact/
        │   ├── Contact.jsx   ← EmailJS-powered contact form
        │   └── Contact.css
        └── Footer/
            ├── Footer.jsx    ← Copyright, nav links, scroll-to-top FAB
            └── Footer.css
```

---

## 🚀 Installation & Local Development

### Prerequisites
- Node.js 18+ and npm 9+

### Steps

```bash
# 1. Clone or unzip the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
# → http://localhost:5173
```

---

## 📧 EmailJS Setup (required for contact form)

1. Go to [https://emailjs.com](https://emailjs.com) → create a free account
2. Create an **Email Service** (Gmail, Outlook, etc.) → copy the **Service ID**
3. Create an **Email Template** using variables:
   - `{{user_name}}` — sender's name
   - `{{user_email}}` — sender's email (set as reply-to)
   - `{{message}}` — the message body
   Copy the **Template ID**
4. In **Account → API Keys** → copy your **Public Key**
5. Open `src/components/Contact/Contact.jsx` and replace:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'    // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'   // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'     // e.g. 'aBcDeFgHiJk...'
```

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI (recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# From the project root
vercel

# Follow prompts:
#  ✔ Set up and deploy? → Y
#  ✔ Which scope? → your username
#  ✔ Link to existing project? → N
#  ✔ Project name → pratik-portfolio (or any name)
#  ✔ In which directory is your code? → ./
#  ✔ Want to override settings? → N

# Production deploy
vercel --prod
```

### Option B — Vercel Dashboard (no CLI)

1. Push the project to a **GitHub repo**
2. Go to [https://vercel.com/new](https://vercel.com/new)
3. Click **Import Git Repository** → select your repo
4. Framework Preset: **Vite** (auto-detected)
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy** → done! 🎉

Your live URL will be `https://pratik-portfolio.vercel.app`

---

## 🛠️ Customisation Checklist

| What               | Where                                          |
|--------------------|------------------------------------------------|
| Your name/title    | `Home.jsx` — `<h1>` and `<p>` title            |
| Social media links | `Home.jsx` — `SOCIAL_LINKS` array             |
| About text & stats | `About.jsx` — `STATS` array + `about__bio` `<p>` |
| Skills             | `About.jsx` — `SKILLS` array                  |
| Projects           | `Portfolio.jsx` — `PROJECTS` array            |
| Contact details    | `Contact.jsx` — `CONTACT_INFO` array          |
| EmailJS keys       | `Contact.jsx` — top of file                   |
| Accent color       | `index.css` — `--clr-accent` CSS variable     |

---

## 📦 Dependencies

| Package              | Version | Purpose              |
|----------------------|---------|----------------------|
| react                | ^18.3   | UI framework         |
| react-dom            | ^18.3   | DOM renderer         |
| @emailjs/browser     | ^4.4    | Email sending        |
| vite                 | ^6.3    | Build tool           |
| @vitejs/plugin-react | ^4.3    | Vite + React plugin  |

External CDNs (loaded in `index.html`, no install needed):
- **Bootstrap Icons** 1.11.3
- **Google Fonts**: Syne + DM Sans

---

## ✨ Features at a Glance

- ✅ Dark editorial design with `#00f5d4` neon-teal accent
- ✅ Sticky header with blur + active-section tracking
- ✅ Mobile hamburger menu with smooth slide animation
- ✅ Hero section with animated dashed ring + floating badges
- ✅ About section with stats card
- ✅ Service cards with hover glow + icon tilt
- ✅ Portfolio cards with image overlay showing Live + Code buttons
- ✅ Contact form with validation + EmailJS + success/error states
- ✅ Scroll-to-top FAB
- ✅ CSS custom properties for easy theming
- ✅ Fully responsive: mobile, tablet, desktop
