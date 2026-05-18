import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const LeetcodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
)

const CodechefIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M12 2a5.5 5.5 0 0 0-5.5 5.5c0 1.1.32 2.12.87 2.98A4.5 4.5 0 0 0 4.5 14.5V16h15v-1.5a4.5 4.5 0 0 0-2.87-4.2A5.5 5.5 0 0 0 17.5 7.5 5.5 5.5 0 0 0 12 2zM8 18v4h8v-4H8z"/>
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const CONTACT = [
  { label: 'Email',  href: 'mailto:aaditya85677@gmail.com', Icon: EmailIcon, glow: 'rgba(244,114,182,0.45)', sub: 'aaditya85677@gmail.com' },
  { label: 'Phone',  href: 'tel:+917982759592',             Icon: PhoneIcon, glow: 'rgba(52,211,153,0.45)',  sub: '+91 79827 59592'       },
]

const LINKS = [
  { label: 'GitHub',   href: 'https://github.com/Adityax-07',                          Icon: GithubIcon,   glow: 'rgba(255,255,255,0.22)' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-bisht-82211b327/',   Icon: LinkedInIcon, glow: 'rgba(10,102,194,0.45)'  },
  { label: 'LeetCode', href: 'https://leetcode.com/u/___Adityaaa_/',                  Icon: LeetcodeIcon, glow: 'rgba(255,161,22,0.45)'  },
  { label: 'CodeChef', href: 'https://www.codechef.com/users/aditya_2506',            Icon: CodechefIcon, glow: 'rgba(180,120,60,0.45)'  },
]

const Outro = () => {
  useGSAP(() => {
    gsap.set('.final-message', { marginTop: '-100vh' });
    gsap.set('.outro-inner', { opacity: 0, y: 40 })
    gsap.to('.outro-inner', {
      opacity: 1, y: 0, duration: 1.2, ease: 'power2.out',
      scrollTrigger: {
        trigger: '.final-message',
        start: 'top 55%',
        toggleActions: 'play none none none',
      }
    })

    // All icon buttons float with staggered offsets
    gsap.to('.contact-icon-btn', {
      y: -10,
      duration: 1.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: { each: 0.22 },
    })

    // Drifting blobs — each on independent path
    gsap.to('.outro-blob-1', { x: 130, y: -100, duration: 9,  ease: 'sine.inOut', yoyo: true, repeat: -1 })
    gsap.to('.outro-blob-2', { x: -110, y: 130, duration: 11, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    gsap.to('.outro-blob-3', { x: 80,  y: 80,   duration: 13, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    gsap.to('.outro-blob-4', { x: -70, y: -90,  duration: 10, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    gsap.to('.outro-blob-5', { x: 60,  y: -60,  duration: 15, ease: 'sine.inOut', yoyo: true, repeat: -1 })
  }, [])

  return (
    <section id="contact" className="final-message">
      <div className="outro-blob outro-blob-1" />
      <div className="outro-blob outro-blob-2" />
      <div className="outro-blob outro-blob-3" />
      <div className="outro-blob outro-blob-4" />
      <div className="outro-blob outro-blob-5" />

      <div className="outro-inner h-full col-center gap-6 relative z-10">
        <img src="/images/logo.webp" alt="logo" className="md:w-44 w-32" />

        <h3 className="outro-title">Let's <br /> Connect</h3>

        {/* Email + Phone as icon cards */}
        <div className="flex-center gap-4 flex-wrap">
          {CONTACT.map(({ label, href, Icon, glow, sub }) => (
            <a
              key={label}
              href={href}
              className="contact-icon-btn contact-icon-btn--wide"
              style={{ '--btn-glow': glow }}
              aria-label={label}
            >
              <Icon />
              <span className="contact-icon-label">{label}</span>
              <span className="contact-icon-sub">{sub}</span>
            </a>
          ))}
        </div>

        {/* Social icon cards */}
        <div className="flex-center gap-4 flex-wrap">
          {LINKS.map(({ label, href, Icon, glow }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="contact-icon-btn"
              style={{ '--btn-glow': glow }}
              aria-label={label}
            >
              <Icon />
              <span className="contact-icon-label">{label}</span>
            </a>
          ))}
        </div>

        <p className="text-white/20 text-xs tracking-widest mt-1">
          New Delhi · Open to AI Engineering roles
        </p>
      </div>
    </section>
  )
}

export default Outro
