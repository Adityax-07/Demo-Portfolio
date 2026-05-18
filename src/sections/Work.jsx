import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    label: 'Project 01',
    name: 'RAG Systems Eval Suite',
    desc: [
      'Benchmarked 8 retrieval strategies across 10 metrics with 4,000+ LLM-judged answer pairs.',
      'Adaptive retrieval hit perfect faithfulness — the only system to score 1.000 / 1.000.',
    ],
    stack: 'Python · FAISS · BM25 · LangChain · Groq · Cerebras · Streamlit',
    highlight: '8 strategies · 10 metrics · 4,000+ pairs · 1.000 faithfulness',
    github: 'https://github.com/Adityax-07/RAG-Systems-eval-suite',
    demo: 'https://huggingface.co/spaces/Adityax-07/RAG-Systems-eval-suite',
    file: '/projects/rag-eval-page.html',
    img: '/images/Screenshot 2026-05-17 234052.png',
  },
  {
    label: 'Project 02',
    name: 'CodeSage',
    desc: [
      'AI code-assistant fine-tuned with LoRA, delivering 85.3% accuracy at $0.0002 per query.',
      'LoRA variant achieved 0% hallucination — outperforming the base RAG by 12 accuracy points.',
    ],
    stack: 'Python · LangChain · FAISS · HuggingFace · LoRA · Groq API',
    highlight: '85.3% accuracy · $0.0002 / query · 0% hallucination',
    github: 'https://github.com',
    demo: 'https://huggingface.co',
    file: '/projects/codesage-page.html',
    img: '/images/Screenshot 2026-05-18 001447.png',
  },
  {
    label: 'Project 03',
    name: 'RAG Security Defense',
    desc: [
      '5-layer security pipeline that blocked 100% of prompt injection and jailbreak attempts.',
      '3-tier RBAC enforces zero cross-tier data leaks with less than 1ms of added latency.',
    ],
    stack: 'Python · Groq · ChromaDB · BM25 · Cross-Encoder · RBAC',
    highlight: '100% block rate · 5-layer defense · 3-tier RBAC · <1ms',
    github: 'https://github.com/Adityax-07/RAG_SECURITY_DEMO',
    demo: 'https://huggingface.co/spaces/Adityax-07/RAG_SECURITY_DEMO',
    file: '/projects/rag-security-page.html',
    img: '/images/Screenshot_2026-05-18_002448.png',
  },
]

const Work = () => {
  useGSAP(() => {
    gsap.set('.work-heading-wrap', { opacity: 0, y: 40 });
    gsap.set('.work-card', { opacity: 0, y: 60 });

    // Pin the section so it stays on screen long enough to read
    ScrollTrigger.create({
      trigger: '.work-section',
      start: 'top top',
      end: '+=180%',
      pin: true,
      pinSpacing: true,
    });

    // Animate in as section approaches viewport
    gsap.timeline({
      scrollTrigger: {
        trigger: '.work-section',
        start: 'top 75%',
        toggleActions: 'play none none none',
      }
    })
    .to('.work-heading-wrap', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
    .to('.work-card', { opacity: 1, y: 0, stagger: 0.2, duration: 0.7, ease: 'power2.out' }, '<0.2');

    // perpetual float — each card at a different phase
    gsap.to('.work-card', {
      y: -14,
      duration: 2.5,
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
        {PROJECTS.map(({ label, name, desc, stack, highlight, github, demo, file, img }) => (
          <div
            key={name}
            className="work-card"
            onClick={() => window.open(file || demo, '_blank')}
            style={{ cursor: 'pointer' }}
          >
            {img && (
              <div className="pcard-img-wrap">
                <img src={img} alt={name} className="pcard-img" />
              </div>
            )}

            <div className="pcard-header">
              <p className="pcard-label">{label}</p>
              <p className="pcard-name">{name}</p>
            </div>

            <div className="pcard-divider" />

            <div className="pcard-descs">
              {desc.map((d, i) => <p key={i} className="pcard-desc">{d}</p>)}
            </div>

            <p className="pcard-highlight">{highlight}</p>

            <div className="pcard-stack-wrap">
              {stack.split(' · ').map(tag => (
                <span key={tag} className="pcard-stack-tag">{tag}</span>
              ))}
            </div>

            <div className="pcard-links">
              <a
                href={github}
                onClick={e => e.stopPropagation()}
                target="_blank"
                rel="noreferrer"
                className="pcard-link"
              >
                GitHub ↗
              </a>
              <a
                href={file || demo}
                onClick={e => e.stopPropagation()}
                target="_blank"
                rel="noreferrer"
                className="pcard-link"
              >
                {file ? 'View Project ↗' : 'Live Demo ↗'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
