import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LINKS = [
  { label: 'About',   href: '#about'   },
  { label: 'Skills',  href: '#skills'  },
  { label: 'Work',    href: '#work'    },
  { label: 'Contact', href: '#contact' },
]

const NavBar = () => {
  useGSAP(() => {
    // Hero is pinned for +=200% scroll — fade links out when that pin ends
    gsap.to(['.nav-left', '.nav-center', '.nav-links'], {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: '+=25%',
        scrub: true,
      }
    });

    gsap.to('.nav-link', {
      y: -5,
      duration: 2.2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: { each: 0.3 },
    });
  }, []);

  return (
    <nav>
      <div className="nav-left">
        <img src="/images/nav-logo.svg" className="scale-90" />
      </div>
      <div className="nav-center">
        <span className="nav-name">Aditya Bisht</span>
        <div className="nav-divider" />
        <img
          src="https://readme-typing-svg.demolab.com?font=Rajdhani&weight=700&size=32&pause=1000&color=FFFFFF&center=true&vCenter=true&width=900&lines=AI+%26+ML+Engineer+%7C+LLM+Systems+Builder;RAG+Architect+%7C+Agentic+AI+Developer;Fine-tuning+%7C+LangChain+%7C+LangGraph+%7C+FastAPI;Building+Intelligent+Systems+at+Scale"
          alt="Typing SVG"
          className="nav-typing"
        />
      </div>
      <div className="nav-links">
        {LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="nav-link">{label}</a>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
