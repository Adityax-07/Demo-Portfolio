import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const DOMAINS = [
  {
    icon: '⟡',
    name: 'RAG & Retrieval',
    bullets: [
      '8-strategy pipeline: Naive → Hybrid → Adaptive',
      'Dense + BM25 + RRF k=60 + cross-encoder reranking',
      'Chunking, HyDE & embedding pipeline design',
    ],
    tags: ['FAISS', 'ChromaDB', 'BM25', 'LangChain'],
    glow: 'rgba(139,92,246,0.35)',
  },
  {
    icon: '◈',
    name: 'LLM Evaluation & Benchmarking',
    bullets: [
      'RAGAS-style faithfulness & relevance scoring',
      '4,000+ answer-metric pairs across 8 strategies',
      'Dual-provider LLM-as-judge architecture',
    ],
    tags: ['RAGAS', 'Groq', 'Cerebras', 'Pydantic'],
    glow: 'rgba(236,72,153,0.32)',
  },
  {
    icon: '⬡',
    name: 'AI Security & Defense',
    bullets: [
      '100% block rate on prompt injection & jailbreaks',
      '5-layer retrieval security pipeline',
      '3-tier RBAC with zero cross-tier leaks',
    ],
    tags: ['ChromaDB', 'RBAC', 'Reranking', 'Groq'],
    glow: 'rgba(6,182,212,0.30)',
  },
  {
    icon: '◎',
    name: 'Agentic AI',
    bullets: [
      'Multi-agent orchestration & LangGraph state machines',
      'Tool use, function calling & persistent memory',
      'Autonomous reasoning loop design',
    ],
    tags: ['LangGraph', 'LangChain', 'MCP', 'FastAPI'],
    glow: 'rgba(251,146,60,0.30)',
  },
  {
    icon: '⬢',
    name: 'Fine-tuning & PEFT',
    bullets: [
      'LoRA fine-tuning: 85.3% accuracy, 0% hallucination',
      'Instruction tuning on custom Q&A datasets',
      'PEFT training & post-fine-tune evaluation',
    ],
    tags: ['HuggingFace', 'PyTorch', 'LoRA', 'PEFT'],
    glow: 'rgba(52,211,153,0.28)',
  },
  {
    icon: '⊞',
    name: 'Full-Stack AI Apps',
    bullets: [
      'Streamlit dashboards with KPI charts & badges',
      'FastAPI REST backends & structured endpoints',
      'HuggingFace Spaces deployment at zero cost',
    ],
    tags: ['Streamlit', 'FastAPI', 'React.js', 'HF Spaces'],
    glow: 'rgba(34,211,238,0.28)',
  },
  {
    icon: '⊹',
    name: 'OOP & Software Engineering',
    bullets: [
      'Object-oriented design in Python, Java & C++',
      'Data structures, algorithms & complexity analysis',
      'Modular architecture & clean REST API design',
    ],
    tags: ['Python', 'Java', 'C++', 'DSA'],
    glow: 'rgba(250,204,21,0.28)',
  },
  {
    icon: '◉',
    name: 'Databases & Storage',
    bullets: [
      'Relational DB design, SQL & query optimization',
      'SQLite for fault-tolerant checkpoint pipelines',
      'Vector DB & document store management',
    ],
    tags: ['SQL', 'SQLite', 'DBMS', 'ChromaDB'],
    glow: 'rgba(167,139,250,0.30)',
  },
  {
    icon: '≋',
    name: 'Cloud & DevOps',
    bullets: [
      'OCI Cloud certified (GenAI + Vector Search)',
      'Git/GitHub version control & collaboration',
      'Docker, Kubernetes & MLOps pipelines',
    ],
    tags: ['OCI Cloud', 'Docker', 'Git/GitHub', 'MLOps'],
    glow: 'rgba(249,115,22,0.28)',
  },
]

const Lucia = () => {
  useGSAP(() => {
    gsap.set('.lucia-life', { marginTop: '-80vh' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.lucia-life',
        start: 'top 80%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.set(['.skills-header', '.skills-certs-wrap', '.lucia-footnote'], { opacity: 0, y: 40 });
    gsap.set('.domain-card', { opacity: 0, y: 60 });

    gsap.to('.skills-header', {
      opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
      scrollTrigger: { trigger: '.lucia-life', start: 'top 55%', toggleActions: 'play none none none' }
    });
    gsap.to('.domain-card', {
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.08,
      scrollTrigger: { trigger: '.domain-cards-grid', start: 'top 85%', toggleActions: 'play none none none' }
    });
    gsap.to(['.skills-certs-wrap', '.lucia-footnote'], {
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12,
      scrollTrigger: { trigger: '.skills-certs-wrap', start: 'top 85%', toggleActions: 'play none none none' }
    });

    gsap.to('.domain-card', {
      y: -18,
      duration: 2.6,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: { each: 0.35 },
      delay: 1.0,
    });
  }, []);

  return (
    <section id="skills" className="lucia-life">

      <div className="skills-header">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-summary">RAG · LLMs · Fine-tuning · Security · Agentic AI · Full-Stack · Cloud & DevOps</p>
      </div>

      <div className="domain-cards-section">
        <p className="domain-cards-eyebrow"><span>——</span> Domains <span>——</span></p>
        <div className="domain-cards-grid">
          {DOMAINS.map(({ icon, name, bullets, tags, glow }) => (
            <div key={name} className="domain-card" style={{ '--card-glow': glow }}>
              <div className="domain-card-top">
                <span className="domain-card-icon">{icon}</span>
                <span className="domain-card-name">{name}</span>
              </div>
              <ul className="domain-card-bullets">
                {bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <div className="domain-card-tags">
                {tags.map(t => <span key={t} className="domain-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-certs-wrap">
        <div className="certs-inner">
          <p className="certs-label">Certifications</p>
          <div className="cert-item">
            <img src="/images/Screenshot 2026-05-18 012423.png" alt="Oracle" className="cert-logo" />
            <span>Oracle Cloud Infrastructure 2024 Generative AI Professional</span>
          </div>
          <div className="cert-item">
            <img src="/images/Screenshot 2026-05-18 012423.png" alt="Oracle" className="cert-logo" />
            <span>Oracle AI Vector Search Professional</span>
          </div>
        </div>
      </div>

      <p className="lucia-footnote">
        Always expanding — currently exploring MCP, MLOps, and multi-agent systems.
      </p>

    </section>
  )
}

export default Lucia
