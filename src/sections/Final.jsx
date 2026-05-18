import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Final = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set('.final-content', { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.final',
        start: 'top top',
        end: '+=150%',
        scrub: 3,
        pin: true,
      }
    });

    tl.to('.final-content', { opacity: 1, duration: 0.2, ease: 'none' });

    const video = videoRef.current;
    const addVideoTween = () => {
      video.currentTime = video.duration;
      tl.to(video, { currentTime: 0, duration: 3, ease: 'none' }, '<');
    };
    if (video.readyState >= 1) {
      addVideoTween();
    } else {
      video.onloadedmetadata = addVideoTween;
    }
  }, []);

  return (
    <section className="final">
      <div className="final-content size-full">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output3.mp4"
          className="size-full object-cover"
        />
      </div>
    </section>
  )
}

export default Final
