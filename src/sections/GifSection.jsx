import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const GifSection = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set('.gif-section', { marginTop: '-100vh', opacity: 0 });

    const video = videoRef.current;

    ScrollTrigger.create({
      trigger: '.gif-section',
      start: 'top top',
      end: '+=280% top',
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        const p = self.progress;

        // Fade in: 0→0.08 | Full opacity: 0.08→0.88 | Fade out: 0.88→1
        const opacity =
          p < 0.08 ? p / 0.08 :
          p > 0.88 ? (1 - p) / 0.12 :
          1;
        gsap.set('.gif-section', { opacity: Math.max(0, Math.min(1, opacity)) });

        // Scrub video across the full duration within 0→0.88 of scroll
        if (video.duration && isFinite(video.duration)) {
          video.currentTime = Math.min(
            (p / 0.88) * video.duration,
            video.duration
          );
        }
      },
    });
  }, []);

  return (
    <section className="gif-section">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output4.mp4"
          className="gif-vd"
        />
      </div>
    </section>
  );
};

export default GifSection;
