import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";


const PostCard = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const video = videoRef.current;
    video.play();
  }, [])

  return (
    <section id="blogs" className="post-card">
      <div className="animated-gradient-bg" />

      <div className="postcard-heading">
        <p className="work-eyebrow"><span>——</span> Blogs & Articles <span>——</span></p>
        <h2 className="postcard-title">Writing.</h2>
      </div>

      <div className="post-card-wrapper">
        <img src="/images/overlay.webp" alt="" />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/videos/postcard-vd.mp4"
        />

      </div>
    </section>
  )
}

export default PostCard
