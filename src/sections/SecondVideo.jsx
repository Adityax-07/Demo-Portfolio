import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const SecondVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set('.second-vd-wrapper', { marginTop: '-100vh', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.second-vd-wrapper',
        start: 'top top',
        end: '+=200% top',
        scrub: 3,
        pin: true,
      }
    });

    tl.to('.second-vd-wrapper', { opacity: 1, duration: 1, ease: 'power1.inOut' });

    const video = videoRef.current;
    const addVideoTween = () => {
      tl.to(video, { currentTime: video.duration, duration: 3, ease: 'none' }, '<');
    };
    if (video.readyState >= 1) {
      addVideoTween();
    } else {
      video.onloadedmetadata = addVideoTween;
    }
  }, []);

  return (
    <section className="second-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="second-vd"
        />
      </div>
    </section>
  );
};

export default SecondVideo;
