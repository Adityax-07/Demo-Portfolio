import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PROJECTS = [
  {
    label: 'Project 01',
    name: 'RAG Systems Eval Suite',
    stack: 'Python · FAISS · BM25 · LangChain · Groq · Cerebras · Streamlit',
    highlight: 'Perfect faithfulness (Adaptive) · 8 systems · 10 metrics · 4,000+ pairs',
    github: 'https://github.com',
    demo: 'https://huggingface.co',
    file: '/projects/rag-eval-page.html',
    img: '/images/Screenshot 2026-05-17 234052.png',
  },
  {
    label: 'Project 02',
    name: 'CodeSage',
    stack: 'Python · LangChain · FAISS · HuggingFace PEFT · LoRA · Groq API',
    highlight: '85.3% accuracy · $0.0002/query · 0% hallucination (LoRA)',
    github: 'https://github.com',
    demo: 'https://huggingface.co',
    file: '/projects/codesage-page.html',
    img: '/images/Screenshot 2026-05-18 001447.png',
  },
  {
    label: 'Project 03',
    name: 'RAG Security Defense',
    stack: 'Python · Groq · ChromaDB · BM25 · Cross-Encoder Reranking · RBAC',
    highlight: '100% block rate · 5-layer defense · 3-tier RBAC · <1ms latency',
    github: 'https://github.com',
    demo: 'https://huggingface.co',
    file: '/projects/rag-security-page.html',
    img: '/images/Screenshot_2026-05-18_002448.png',
  },
]

const Work = () => {
  useGSAP(() => {
    gsap.set('.work-heading-wrap', { opacity: 0, y: 40 });
    gsap.set('.work-card', { opacity: 0, y: 60 });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.work-section',
        start: 'top 75%',
        toggleActions: 'play none none none',
      }
    })
    .to('.work-heading-wrap', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
    .to('.work-card', { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power2.out' }, '<0.2');

    // perpetual float — each card at a different phase
    gsap.to('.work-card', {
      y: -50,
      duration: 2.0,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: { each: 0.5 },
      delay: 1.5,
    });
  }, []);

  return (
    <section id="work" className="work-section">
      <div className="work-heading-wrap">
        <p className="work-eyebrow"><span>——</span> Projects <span>——</span></p>
        <h2 className="work-title">Work</h2>
        <p className="work-summary">3 projects · all deployed · evaluated on real benchmarks · production-grade code</p>
      </div>

      <div className="work-grid">
        {PROJECTS.map(({ label, name, stack, highlight, github, demo, file, img }) => (
          <a
            key={name}
            className="work-card"
            href={file || demo}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            {img && (
              <div className="pcard-img-wrap">
                <img src={img} alt={name} className="pcard-img" />
              </div>
            )}
            <p className="pcard-label">{label}</p>
            <p className="pcard-name">{name}</p>
            <p className="pcard-stack">{stack}</p>
            <p className="pcard-highlight">{highlight}</p>
            <div className="pcard-links">
              <span className="pcard-link">GitHub ↗</span>
              <span className="pcard-link">{file ? 'View Project ↗' : 'Live Demo ↗'}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Work
