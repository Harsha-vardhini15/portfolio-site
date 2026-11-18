import { useState, useEffect } from 'react'

// Helper for project tag icons
function getTagIcon(tag) {
  const t = tag.toLowerCase().replace(/[\s\.]/g, '')
  switch (t) {
    case 'java':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C9.667 3.5 11.5 5.833 11 8c-.333 1.5-1.333 2.167-2 3.5s-.667 2.5.5 3.5c1.333 1.167 3 .667 4 2 1.333 1.667.667 4.167.667 4.167s2.5-3 1.333-5.333c-.833-1.667-2.667-2.333-2.5-4 .167-1.667 2-2.833 2-4.5S13 1.833 12 0zm-2.5 4.5c.333 1-.333 2.333-1 3.5s-.667 2.333 0 3.167c.667.833 1.5.333 2 1.167.667 1.167.167 2.833.167 2.833s1.5-2 .667-3.667c-.667-1.333-1.833-1.667-1.833-2.833s1.167-2 1.167-3.167S9.833 5.5 9.5 4.5z" />
        </svg>
      )
    case 'javaswing':
    case 'swing':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )
    case 'sql':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 4.02 2 6.5v11c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 18c-4.42 0-8-1.58-8-3.5V14.3c1.78.85 4.7 1.2 8 1.2s6.22-.35 8-1.2v2.2c0 1.92-3.58 3.5-8 3.5zm0-5c-4.42 0-8-1.58-8-3.5V9.3c1.78.85 4.7 1.2 8 1.2s6.22-.35 8-1.2v2.2c0 1.92-3.58 3.5-8 3.5zm0-5c-4.42 0-8-1.58-8-3.5S7.58 3 12 3s8 1.58 8 3.5-3.58 3.5-8 3.5z" />
        </svg>
      )
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.11 3.44c-.38.05-.62.3-.65.64-.17 2.07-1.13 3.96-2.67 5.38-.47.43-.88.93-1.22 1.47-.79 1.24-1.12 2.7-1 4.16.14 1.76.94 3.38 2.22 4.54 1.63 1.48 3.86 2.12 6.01 1.76.62-.1 1.13-.5 1.34-1.08.31-.86.11-1.84-.49-2.5-.42-.46-.66-1.06-.66-1.69 0-1.18.78-2.22 1.92-2.54.43-.12.69-.53.64-.98-.12-1.12-.66-2.16-1.52-2.91-1.11-.97-2.61-1.42-4.08-1.25z" />
        </svg>
      )
    case 'apachenetbeans':
    case 'netbeans':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.5c-.3 0-1.8 1.7-2.3 3.9C7.8 13 10.7 18 11.5 20c.1.3.3.5.5.5s.4-.2.5-.5c.8-2 3.7-7 1.8-14.6-.5-2.2-2-3.9-2.3-3.9zM12 23c.3 0 .5-.2.5-.5v-1.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.1c0 .3.2.5.5.5z" />
        </svg>
      )
    case 'express':
    case 'expressjs':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H7v-2h6v2zm3-4H7v-2h9v2zm0-4H7V6h9v2z" />
        </svg>
      )
    case 'react':
    case 'reactjs':
      return (
        <svg viewBox="-11.5 -10.23 23 20.47" fill="none" stroke="currentColor" strokeWidth="1">
          <circle r="2.05" fill="currentColor" />
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </svg>
      )
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.03C6.48 1.03 2 5.51 2 11.03c0 3.42 1.72 6.43 4.33 8.23l.03.02L12 22.97l5.64-3.69.03-.02c2.61-1.8 4.33-4.81 4.33-8.23 0-5.52-4.48-10-10-10zm2.34 14.52l-.39.26-.06.04-1.89 1.15V9.45c0-.42-.34-.76-.76-.76s-.76.34-.76.76v7.56l-1.89-1.15-.06-.04-.39-.26V11.2c0-.42-.34-.76-.76-.76s-.76.34-.76.76v4.61l3.07 1.87 3.07-1.87v-4.61c0-.42-.34-.76-.76-.76s-.76.34-.76.76v4.35z" />
        </svg>
      )
    case 'tailwindcss':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.005 17.653c-2.77 0-4.622-1.387-5.547-4.16 1.387 0 2.427-.462 3.12-1.387-1.155-.23-1.963-.808-2.426-1.733.693 0 1.27-.116 1.733-.347-.924-.693-1.386-1.733-1.386-3.12 1.386.462 2.426.347 3.12-.347-.347-.693-.462-1.502-.347-2.426.462 1.386 1.387 2.08 2.77 2.08 2.77 0 4.622 1.387 5.548 4.16-1.387 0-2.427.462-3.12 1.387 1.155.23 1.963.808 2.427 1.733-.693 0-1.27.116-1.733.347.924.693 1.386 1.733 1.386 3.12-1.386-.462-2.426-.347-3.12.347.347.693.462 1.502.347 2.426-.462-1.386-1.387-2.08-2.77-2.08z" />
        </svg>
      )
    case 'jwt':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
        </svg>
      )
    case 'recharts':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    default:
      return null
  }
}

// Helper for certification logos
function getCertLogo(org) {
  if (org.includes('NPTEL')) {
    return <img src="/nptel-logo.jpg" alt="NPTEL Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  }
  if (org.includes('HackerRank')) {
    return <img src="/hackerrank-logo.png" alt="HackerRank Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  }
  return null
}

const projects = [
  {
    title: 'University Management System',
    desc: 'A desktop-based University Management System developed using Java (Swing) and SQL, designed to manage academic and administrative operations through a centralized GUI application.',
    tags: ['Java', 'Java Swing', 'SQL', 'MySQL', 'Apache NetBeans'],
    githubLink: 'https://github.com/Harsha-vardhini15/University-Management-System',
    imageBg: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    image: '/first.jpg',
  },
  {
    title: 'Smart Hostel & Mess Management System',
    desc: 'A full-stack MERN web application designed to digitalize hostel operations including room allocation, mess meal booking, complaint tracking, and QR-based meal attendance.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'JWT', 'Recharts'],
    githubLink: 'https://github.com/Harsha-vardhini15/smart-hostel-system',
    liveLink: 'https://smart-hostel-system-jnkc.vercel.app/login',
    imageBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    image: '/hostel.png',
  },
]

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Hackwit Technologies',
    type: 'Internship',
    duration: 'Jan 2026 - Feb 2026',
    location: 'Remote',
    bullets: [
      'Collaborated on advanced full-stack development implementations, contributing to end-to-end web features.',
      'Demonstrated strong problem-solving and self-motivated technical execution across frontend and backend layers.',
      'Developed clean, maintainable web components while learning new development methodologies.',
    ],
    logo: '/hackwit-logo.png',
  },
]

const certifications = [
  {
    title: 'Programming in Java (Silver Elite)',
    org: 'NPTEL / IIT Kharagpur',
    date: 'Jan-Apr 2026',
    link: '/nptel-java-cert.png',
  },
  {
    title: 'Software Engineer Certificate',
    org: 'HackerRank',
    date: 'Apr 2026',
    link: 'https://www.hackerrank.com/certificates/fbcff6a74534',
  },
]

const skills = [
  {
    name: 'Java',
    color: '#E76F00',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
        <path d="M19.167 17.667c0 1.267-2.617 2.333-6.267 2.333s-6.3-1.067-6.3-2.333c0-.85 1.183-1.6 3.1-1.983-.317-.4-.517-.833-.6-1.3-.983.25-1.833.65-2.5 1.15C5.367 16.55 4.5 17.65 4.5 19c0 2.217 3.35 4 7.5 4s7.5-1.783 7.5-4c0-.433-.133-.85-.4-1.25-.433-.617-1.367-1.133-2.6-1.5-.067.433-.217.833-.467 1.2.917.333 1.633.783 1.633 1.217zM12 0C9.667 3.5 11.5 5.833 11 8c-.333 1.5-1.333 2.167-2 3.5s-.667 2.5.5 3.5c1.333 1.167 3 .667 4 2 1.333 1.667.667 4.167.667 4.167s2.5-3 1.333-5.333c-.833-1.667-2.667-2.333-2.5-4 .167-1.667 2-2.833 2-4.5S13 1.833 12 0zm-2.5 4.5c.333 1-.333 2.333-1 3.5s-.667 2.333 0 3.167c.667.833 1.5.333 2 1.167.667 1.167.167 2.833.167 2.833s1.5-2 .667-3.667c-.667-1.333-1.833-1.667-1.833-2.833s1.167-2 1.167-3.167S9.833 5.5 9.5 4.5z" />
      </svg>
    ),
  },
  {
    name: 'SQL',
    color: '#00758F',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
        <path d="M12 2C6.48 2 2 4.02 2 6.5v11c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 18c-4.42 0-8-1.58-8-3.5V14.3c1.78.85 4.7 1.2 8 1.2s6.22-.35 8-1.2v2.2c0 1.92-3.58 3.5-8 3.5zm0-5c-4.42 0-8-1.58-8-3.5V9.3c1.78.85 4.7 1.2 8 1.2s6.22-.35 8-1.2v2.2c0 1.92-3.58 3.5-8 3.5zm0-5c-4.42 0-8-1.58-8-3.5S7.58 3 12 3s8 1.58 8 3.5-3.58 3.5-8 3.5z" />
      </svg>
    ),
  },
  {
    name: 'Postman',
    color: '#FF6C37',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
        <path d="M12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2zm3.556 4.978c-.244 0-.478.094-.65.267l-2.906 2.906-2.906-2.906a.916.916 0 00-1.3 0 .916.916 0 000 1.3l2.906 2.906-2.906 2.906c-.36.36-.36.94 0 1.3.18.18.41.27.65.27s.47-.09.65-.27l2.906-2.906 2.906 2.906c.18.18.41.27.65.27s.47-.09.65-.27c.36-.36.36-.94 0-1.3l-2.906-2.906 2.906-2.906a.916.916 0 00-.65-.267zM12 8.7a3.3 3.3 0 100 6.6 3.3 3.3 0 000-6.6z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    color: '#F05032',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
        <path d="M23.384 11.41L12.59.616c-.822-.823-2.155-.823-2.977 0L8.85 2.382l3.778 3.778c.844-.29 1.8.026 2.378.803.58.78.58 1.838 0 2.618-.58.78-1.536 1.092-2.378.803l-3.32 3.32c.29.843-.024 1.8-.802 2.378-.78.58-1.84.58-2.618 0-.78-.58-1.092-1.537-.803-2.378l-3.778-3.778L.616 11.41c-.823.822-.823 2.155 0 2.977l10.793 10.793c.822.823 2.155.823 2.977 0l10.793-10.793c.823-.822.823-2.155 0-2.977zM14.65 9.35c-.383-.383-.383-1.006 0-1.39.385-.384 1.008-.384 1.39 0 .385.385.385 1.007 0 1.39-.383.383-1.005.383-1.39 0z" />
      </svg>
    ),
  },
  {
    name: 'HTML',
    color: '#E34F26',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 11.697-.001.242-2.734H5.32l.708 8.169h7.957l-.265 2.822-2.711.745-2.716-.745-.183-2.016H5.43l.354 4.09 6.225 1.71 6.241-1.71.642-7.336H8.531z" />
      </svg>
    ),
  },
  {
    name: 'CSS',
    color: '#1572B6',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.672 5.234H18.72l-.242 2.735H8.38l.21 2.378H18.06l-.634 7.217-5.42 1.488-5.405-1.488-.352-4.01h2.793l.182 2.072 2.782.756 2.787-.756.3-.3.315-3.568H5.66l-.427-4.832h.599z" />
      </svg>
    ),
  },
  {
    name: 'n8n',
    color: '#EA4B71',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
        <defs>
          <linearGradient id="n8nGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B9D" />
            <stop offset="100%" stopColor="#EA4B71" />
          </linearGradient>
          <linearGradient id="n8nGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9A5C" />
            <stop offset="100%" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="50" r="14" fill="url(#n8nGrad1)" />
        <circle cx="80" cy="50" r="14" fill="url(#n8nGrad2)" />
        <circle cx="50" cy="50" r="10" fill="#ffffff" opacity="0.9" />
        <line x1="34" y1="50" x2="40" y2="50" stroke="#EA4B71" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="50" x2="66" y2="50" stroke="#FF6B35" strokeWidth="4" strokeLinecap="round" />
        <circle cx="50" cy="50" r="4" fill="#EA4B71" />
        <circle cx="50" cy="22" r="8" fill="url(#n8nGrad1)" opacity="0.85" />
        <line x1="50" y1="40" x2="50" y2="30" stroke="#EA4B71" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="78" r="8" fill="url(#n8nGrad2)" opacity="0.85" />
        <line x1="50" y1="60" x2="50" y2="70" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
]

const taglineWords = 'Passionate about software engineering.'.split(' ')

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [openExp, setOpenExp] = useState({})
  const [formStatus, setFormStatus] = useState('idle') // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const toggleExp = (idx) => {
    setOpenExp(prev => ({ ...prev, [idx]: !prev[idx] }))
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value

    const payload = new FormData()
    payload.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY')
    payload.append('name', name)
    payload.append('email', email)
    payload.append('message', message)
    payload.append('subject', `New Portfolio Message from ${name}`)
    payload.append('from_name', 'Portfolio Contact Form')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      })
      const data = await res.json()
      if (data.success) {
        setStatusMessage('Your message has been sent directly to sankerparimala1@gmail.com!')
        setFormStatus('success')
        form.reset()
      } else {
        // Mailto fallback
        const mailBody = `Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`
        window.location.href = `mailto:sankerparimala1@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(name)}&body=${mailBody}`
        setStatusMessage('Opening mail client to send email to sankerparimala1@gmail.com!')
        setFormStatus('success')
        form.reset()
      }
    } catch {
      const mailBody = `Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`
      window.location.href = `mailto:sankerparimala1@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(name)}&body=${mailBody}`
      setStatusMessage('Opening mail client to send email to sankerparimala1@gmail.com!')
      setFormStatus('success')
      form.reset()
    }
  }

  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo">
            <svg className="logo-svg" viewBox="0 0 100 100">
              <polygon
                points="50,8 86.6,29.1 86.6,70.9 50,92 13.4,70.9 13.4,29.1"
                fill="none"
                stroke="#1d9bf0"
                strokeWidth="8"
                strokeLinejoin="round"
              />
              <text x="50" y="62" fontFamily="var(--font-sans)" fontSize="44" fontWeight="800" fill="#1d9bf0" textAnchor="middle">
                H
              </text>
            </svg>
            harshavardhini <span className="logo-dot" />
          </a>

          <div className="header-actions">
            <a
              href="https://github.com/Harsha-vardhini15"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-icon"
              title="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            <button className="btn-icon" onClick={toggleTheme} title="Toggle Theme">
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.59 1.59m12.38 12.38l1.59 1.59M3 12h2.25m13.5 0H21M5.81 18.19l-1.59 1.59m12.38-12.38l-1.59-1.59M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                </svg>
              )}
            </button>

            <a
              href="https://drive.google.com/file/d/1UtTcw48HXNzeO8OlkkYJ53MwDLLS88xz/view?usp=sharing"
              target="_blank"
              className="btn-primary"
              rel="noopener noreferrer"
            >
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                <path d="m21 3-9 9" />
                <path d="M15 3h6v6" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="main-content">
        <div className="stripe-divider" />

        {/* HERO SECTION */}
        <section className="box hero">
          <div className="hero-info">
            <div className="hero-quote-container" style={{ marginBottom: '1.25rem' }}>
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--muted-foreground)', borderLeft: '3px solid var(--verified)', paddingLeft: '0.85rem', margin: 0, lineHeight: '1.4' }}>
                "It always seems impossible until it's done. Dream big and build relentlessly."
                <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--foreground)', marginTop: '0.3rem' }}>
                  — Nelson Mandela
                </span>
              </p>
            </div>

            <h1 className="hero-name">
              Harshavardhini
              <span className="verified-badge" title="Verified Full-Stack Developer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fill="#1d9bf0"
                    d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
                  />
                </svg>
              </span>
            </h1>

            <div className="tagline-container">
              <p className="hero-tagline">
                {taglineWords.map((word, i) => (
                  <span key={i} className="animate-reveal" style={{ animationDelay: `${i * 120}ms`, marginRight: '0.3rem' }}>
                    {word}
                  </span>
                ))}
              </p>
            </div>

            <div className="hero-bullets">
              <span className="hero-bullet">💻 Java Developer </span>
              <span className="hero-bullet">🎓 B.Tech. Information Technology</span>
            </div>
          </div>

          <div className="hero-avatar-container">
            <img src="/profile.jpg" alt="Harshavardhini" className="hero-avatar" style={{ objectFit: 'cover', objectPosition: 'center 20%' }} />
            <span className="hero-flag" title="India">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="100%" height="100%">
                <rect width="3" height="2" fill="#128807" />
                <rect width="3" height="1.333" fill="#FFFFFF" />
                <rect width="3" height="0.667" fill="#FF9933" />
                <circle cx="1.5" cy="1" r="0.22" fill="none" stroke="#000080" strokeWidth="0.02" />
                <circle cx="1.5" cy="1" r="0.05" fill="#000080" />
                <path d="M1.5 0.78 v0.44 M1.28 1 h0.44 M1.34 0.84 l0.32 0.32 M1.34 1.16 l0.32 -0.32 M1.4 0.79 l0.2 0.42 M1.4 1.21 l0.2 -0.42 M1.29 0.9 l0.42 0.2 M1.29 1.1 l0.42 -0.2" stroke="#000080" strokeWidth="0.01" />
              </svg>
            </span>
          </div>
        </section>

        <div className="stripe-divider" />

        {/* ABOUT */}
        <section className="box" id="about">
          <h2 className="section-title">
            About
            <span className="badge-status">
              <span className="pulse-dot" />
              Open to work
            </span>
          </h2>
          <p className="about-text">
            I'm Harshavardhini, a 4th-year B.Tech IT student at Sathyabama University. I have experience in Java and SQL. I have built projects such as a university management and a smart hostel management. I'm passionate about software development and continuously improving my technical and problem-solving skills.
          </p>
        </section>

        {/* SOCIALS GRID */}
        <section className="socials-grid">
          <a href="https://github.com/Harsha-vardhini15" target="_blank" rel="noreferrer noopener" className="social-card">
            <div className="social-meta">
              <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <div>
                <div className="social-name">GitHub</div>
                <div className="social-handle">Harsha-vardhini15</div>
              </div>
            </div>
            <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/harshavardhini-s15/" target="_blank" rel="noreferrer noopener" className="social-card">
            <div className="social-meta">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <div>
                <div className="social-name">LinkedIn</div>
                <div className="social-handle">harshavardhini-s15</div>
              </div>
            </div>
            <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>

          <a href="https://www.instagram.com/selva_rc_/?__pwa=1" target="_blank" rel="noreferrer noopener" className="social-card">
            <div className="social-meta">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <div>
                <div className="social-name">Instagram</div>
                <div className="social-handle">@selva_rc_</div>
              </div>
            </div>
            <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>

          <a href="mailto:sankerparimala1@gmail.com" className="social-card">
            <div className="social-meta">
              <svg className="social-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <div className="social-name">Mail Me</div>
                <div className="social-handle">sankerparimala1@gmail.com</div>
              </div>
            </div>
            <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </section>

        <div className="stripe-divider" />

        {/* PROJECTS */}
        <section className="box" id="projects">
          <div className="projects-header">
            <h2 className="section-title">Projects</h2>
            <span className="project-count">({projects.length})</span>
          </div>

          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <div className="project-img-wrapper">
                  {proj.image ? (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="project-img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        background: proj.imageBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        letterSpacing: '-0.05em',
                        textShadow: '0 2px 4px rgba(0,0,0,0.15)',
                      }}
                      className="project-img"
                    >
                      {`<${proj.title} />`}
                    </div>
                  )}
                </div>

                <div className="project-body">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.desc}</p>

                  <div className="project-tags">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tag-badge">
                        {getTagIcon(tag)}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {proj.liveLink && (
                      <a
                        href={proj.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: '0.4rem 0.5rem', fontSize: '0.75rem', justifyContent: 'center' }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ padding: '0.4rem 0.5rem', fontSize: '0.75rem' }}
                    >
                      <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="stripe-divider" />

        {/* EXPERIENCE */}
        <section className="box" id="experience">
          <h2 className="section-title">Experience</h2>
          <div className="exp-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`exp-item ${openExp[idx] ? 'open' : ''}`}>
                <button className="exp-header" onClick={() => toggleExp(idx)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '0.375rem',
                          objectFit: 'contain',
                          border: '1px solid var(--box-border)',
                          padding: '0.125rem',
                          backgroundColor: 'white',
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '0.375rem',
                          backgroundColor: 'var(--secondary)',
                          color: 'var(--muted-foreground)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 600,
                          fontSize: '1.125rem',
                          border: '1px solid var(--box-border)',
                        }}
                      >
                        {exp.company.charAt(0)}
                      </div>
                    )}
                    <div className="exp-role-meta">
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-company">
                        {exp.company}
                        <span className="exp-type-badge">{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="exp-timing">
                    <span>{exp.duration}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      {exp.location}
                      <svg className="chevron-icon" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </div>
                </button>

                <div className="exp-content">
                  {exp.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="exp-bullet">
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="stripe-divider" />

        {/* EDUCATION */}
        <section className="box" id="education">
          <h2 className="section-title">Education</h2>
          <div className="edu-card">
            <img src="/sist-logo.jpg" alt="Sathyabama Institute of Science and Technology Logo" className="edu-logo" />
            <div className="edu-details">
              <div className="edu-school">Sathyabama Institute of Science and Technology, Chennai</div>
              <div className="edu-degree">B.Tech in Information Technology</div>
            </div>
            <div className="edu-timing">
              <span className="edu-date-badge">Aug 2023 - June 2027</span>
              <span className="edu-type">Full-Time</span>
            </div>
          </div>
        </section>

        <div className="stripe-divider" />

        {/* SKILLS */}
        <section className="box" id="skills">
          <h2 className="section-title">Skills ({skills.length})</h2>
          <div className="skills-container">
            {skills.map((s, idx) => (
              <span key={idx} className="skill-tag" style={{ '--skill-color': s.color }}>
                {s.icon}
                {s.name}
              </span>
            ))}
          </div>
        </section>

        <div className="stripe-divider" />

        {/* CERTIFICATIONS */}
        {certifications.length > 0 && (
          <>
            <section className="box" id="certifications">
              <h2 className="section-title">
                Certifications{' '}
                <span style={{ color: 'var(--muted-foreground)', fontSize: '1.125rem', fontWeight: 'normal', marginLeft: '0.25rem' }}>
                  ({certifications.length})
                </span>
              </h2>
              <div className="cert-list">
                {certifications.map((cert, idx) => (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="cert-item" key={idx}>
                    <div className="cert-left">
                      <div className="cert-logo-container">{getCertLogo(cert.org)}</div>
                      <div className="cert-meta">
                        <div className="cert-title">{cert.title}</div>
                        <div className="cert-subtitle">
                          {cert.org} • {cert.date}
                        </div>
                      </div>
                    </div>
                    <svg className="cert-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </section>
            <div className="stripe-divider" />
          </>
        )}

        {/* CONTACT */}
        <section className="box contact-section" id="contact" style={{ paddingBottom: '2.5rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem', fontSize: '1.75rem' }}>
            Get In Touch
          </h2>
          <div className="contact-grid">
            <div className="contact-info-col">
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-foreground)', letterSpacing: '0.05em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  Contact Information <span style={{ fontSize: '0.85rem' }}>↓</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <a href="mailto:sankerparimala1@gmail.com" className="contact-info-link">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ opacity: 0.8 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    sankerparimala1@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/harshavardhini-s15/" target="_blank" rel="noreferrer noopener" className="contact-info-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--muted-foreground)' }}>
                or DM me on Instagram{' '}
                <a href="https://www.instagram.com/selva_rc_/?__pwa=1" target="_blank" rel="noreferrer noopener" style={{ color: 'var(--foreground)', textDecoration: 'underline', fontWeight: 500 }}>
                  @selva_rc_
                </a>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="name" style={{ marginBottom: '0.25rem', fontWeight: 600 }}>
                  Name
                </label>
                <input className="form-input" type="text" id="name" name="name" placeholder="Harshavardhini" required />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="email" style={{ marginBottom: '0.25rem', fontWeight: 600 }}>
                  Email
                </label>
                <input className="form-input" type="email" id="email" name="email" placeholder="sankerparimala1@gmail.com" required />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="message" style={{ marginBottom: '0.25rem', fontWeight: 600 }}>
                  Message
                </label>
                <textarea className="form-textarea" id="message" name="message" rows="4" placeholder="Enter your message..." required />
              </div>

              {formStatus === 'success' && (
                <div style={{ fontSize: '0.85rem', color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.08)', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', border: '1px solid rgba(16, 185, 129, 0.2)', lineHeight: '1.4' }}>
                  ✓ {statusMessage}
                </div>
              )}

              {formStatus === 'error' && (
                <div style={{ fontSize: '0.85rem', color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.08)', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', border: '1px solid rgba(239, 68, 68, 0.2)', lineHeight: '1.4' }}>
                  ✗ Failed to send message. Please configure your access key or email directly.
                </div>
              )}

              <button
                className="contact-submit-btn"
                type="submit"
                disabled={formStatus === 'sending'}
                style={{ opacity: formStatus === 'sending' ? 0.7 : 1 }}
              >
                {formStatus === 'sending' ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" />
                      <path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" />
                    </svg>
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Mail Opened!
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ transform: 'rotate(45deg) translate(-1px, 1px)' }}>
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send message
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-left">
              Designed and Made with <span className="footer-heart">💙</span>
            </div>
            <div className="footer-socials">
              <a href="https://github.com/Harsha-vardhini15" target="_blank" rel="noreferrer noopener" className="footer-social-link" title="GitHub">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/harshavardhini-s15/" target="_blank" rel="noreferrer noopener" className="footer-social-link" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://www.instagram.com/selva_rc_/?__pwa=1" target="_blank" rel="noreferrer noopener" className="footer-social-link" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
