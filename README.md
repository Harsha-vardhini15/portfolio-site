# Harshavardhini — Personal Developer Portfolio

A sleek, responsive, and high-performance personal developer portfolio built with **React**, **Vite**, and **Pure CSS**. Features custom typography, dark/light theme switching, interactive project showcases, an expandable experience timeline, a working contact form with fallback mechanisms, and pixel-perfect design.

🌐 **Live Demo:** [portfolio-site](https://github.com/Harsha-vardhini15/portfolio-site)

---

## ✨ Features

- **⚡ Blazing Fast**: Built with React 18 and bundled with Vite 6.
- **🎨 Dark & Light Mode**: Seamless theme toggling with `localStorage` persistence and custom CSS variables.
- **📱 Fully Responsive**: Pixel-perfect layout across mobile, tablet, and ultra-wide screens.
- **🧭 Sticky Pill Navbar**: Floating frosted-glass navigation with theme switcher, GitHub quick link, and Resume button.
- **🦸 Hero Section**: Includes animated tagline reveals, verified checkmark badge, and circular avatar with flag indicator.
- **🚀 Projects Showcase**: Dynamic project cards featuring tech badges, live demo previews, and repository links.
- **💼 Interactive Experience**: Expandable accordion detailing career milestones, responsibilities, and achievements.
- **🛠️ Tech Stack & Skills**: Color-coordinated SVG skill badges covering frontend, backend, tools, and workflows.
- **📬 Contact Form**: Integrated with Web3Forms API and seamless client-side `mailto` fallback.
- **🔗 Social Connectivity**: Clean cards and footer links connecting to GitHub, LinkedIn, Instagram, and Email.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Bundler:** [Vite 6](https://vitejs.dev/)
- **Styling:** Modern CSS (CSS Custom Properties, Flexbox, CSS Grid)
- **Typography:** [Outfit](https://fonts.google.com/specimen/Outfit) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts
- **Icons:** Custom SVG Icons & [Lucide Icons](https://lucide.dev/)
- **Form Handling:** [Web3Forms](https://web3forms.com/) with native `mailto` fallback

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm` or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harsha-vardhini15/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled assets will be in the `dist/` directory.

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
portfolio-site/
├── public/                 # Static assets (images, logos, favicon, certs)
│   ├── first.jpg
│   ├── hackerrank-logo.png
│   ├── hackwit-logo.png
│   ├── hostel.png
│   ├── nptel-java-cert.png
│   ├── nptel-logo.jpg
│   ├── profile.jpg
│   └── sist-logo.jpg
├── src/
│   ├── App.jsx             # Main application layout and sections
│   ├── index.css           # Global styles, CSS variables, animations
│   └── main.jsx            # React root mounting
├── index.html              # HTML entry point with meta & OG tags
├── vite.config.js          # Vite build configuration
├── package.json            # Dependencies and scripts
└── README.md               # Documentation
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push this repository to your GitHub account.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `portfolio-site` repository.
4. Leave build settings as default:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**!

### Deploy to Netlify

1. Drag and drop the `dist/` folder directly to [Netlify Drop](https://app.netlify.com/drop), or connect your GitHub repository with build command `npm run build` and publish directory `dist`.

---

## 📬 Contact

- **Name:** Harshavardhini
- **Email:** [sankerparimala1@gmail.com](mailto:sankerparimala1@gmail.com)
- **GitHub:** [@Harsha-vardhini15](https://github.com/Harsha-vardhini15)
- **LinkedIn:** [harshavardhini-s15](https://www.linkedin.com/in/harshavardhini-s15/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
