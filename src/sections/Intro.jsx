import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useCallback } from "react";

const Intro = () => {
  const videoRef = useRef(null);

  const dismiss = useCallback(() => {
    document.body.style.overflow = "";
    gsap.to(".intro-screen", {
      opacity: 0,
      duration: 0.9,
      ease: "power2.inOut",
      onComplete: () => gsap.set(".intro-screen", { display: "none" }),
    });
  }, []);

  useGSAP(() => {
    document.body.style.overflow = "hidden";

    // Fade the screen in
    gsap.from(".intro-screen", {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Auto-dismiss when the video finishes
    const video = videoRef.current;
    video.addEventListener("ended", dismiss, { once: true });

    // Fallback: if video fails to load / play, dismiss after 6s
    const fallback = setTimeout(dismiss, 6000);
    video.addEventListener("ended", () => clearTimeout(fallback), { once: true });
  }, []);

  return (
    <div className="intro-screen">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        src="/videos/intro.mp4"
        className="intro-video"
      />
      <button className="intro-skip" onClick={dismiss}>
        Skip &rsaquo;
      </button>
    </div>
  );
};

export default Intro;
