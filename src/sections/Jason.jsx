import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const STATS = [
  { val: '8.60', label: 'CGPA',            glow: 'rgba(220,50,80,0.45)'  },
  { val: '3',    label: 'AI Projects',     glow: 'rgba(180,40,120,0.40)' },
  { val: '2',    label: 'Certifications',  glow: 'rgba(140,30,180,0.38)' },
]

const Jason = () => {
  useGSAP(() => {
    gsap.set('.jason', { marginTop: '-80vh' });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.jason',
        start: 'top 90%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.set('.about-left',  { opacity: 0, x: -50 });
    gsap.set('.about-right', { opacity: 0, x:  50 });

    gsap.to(['.about-left', '.about-right'], {
      opacity: 1, x: 0, duration: 1.1, ease: 'power2.out', stagger: 0.15,
      scrollTrigger: { trigger: '.jason', start: 'top 55%', toggleActions: 'play none none none' },
    });

    gsap.to('.about-vertical-card', {
      y: -14,
      duration: 3.0,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 0.8,
    });
  }, [])

  return (
    <section id="about" className="jason">
      <div className="jason-body">

        <div className="about-left">
          <div className="about-vertical-card" style={{ '--card-glow': 'rgba(200,40,70,0.42)' }} />
        </div>

        <div className="about-right">
          <p className="section-eyebrow">About</p>
          <h1 className="about-heading">Building AI systems that reason, retrieve, and defend.</h1>
          <p className="about-bio">
            Final-year B.Tech IT student at MAIT, GGSIPU (CGPA 8.60),
            specialising in LLM evaluation, RAG systems, and AI security.
            Built and deployed 3 end-to-end AI frameworks — each with live
            demos and LLM-as-judge evaluation pipelines.
          </p>
          <div className="about-stat-stack">
            {STATS.map(({ val, label, glow }) => (
              <div key={label} className="about-stat-item" style={{ '--card-glow': glow }}>
                <span className="about-stat-val">{val}</span>
                <span className="about-stat-label">{label}</span>
              </div>
            ))}
          </div>
          <div className="about-divider" />
          <div className="about-edu-block">
            <p className="about-edu-label">Education</p>
            <p className="about-edu-title">B.Tech Information Technology</p>
            <p className="about-edu-sub">MAIT, GGSIPU · 2023 – 2027</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Jason
