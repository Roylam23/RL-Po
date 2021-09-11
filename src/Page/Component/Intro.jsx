import { useEffect } from "react";
import { gsap } from "gsap";
import bo from "../img/icon.jpg";
const Intro = () => {
  var base = 3;
  useEffect(() => {
    gsap
      .fromTo(".nav", 1, { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
      .delay(base + 2);
    gsap
      .fromTo(".hi", 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
      .delay(base + 0.5);
    gsap
      .fromTo(".name", 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
      .delay(base + 1);
    gsap
      .fromTo(".title", 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
      .delay(base + 1.5);
    gsap
      .fromTo(".more-con", 1, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .delay(base + 2.5);
    window.addEventListener("load", () => {
      if (window.screen.width < 768) {
        gsap
          .fromTo(".bo-con", 1, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
          .delay(base + 2);
        gsap
          .fromTo(".btn-work", 1, { opacity: 0, y: -25 }, { opacity: 1, y: 0 })
          .delay(base + 2);
      } else {
        gsap
          .fromTo(".bo-con", 1, { x: 100, opacity: 0 }, { x: 0, opacity: 1 })
          .delay(base + 2);
        gsap
          .fromTo(".btn-work", 1, { opacity: 0, x: -100 }, { opacity: 1, x: 0 })
          .delay(base + 2);
      }
    });
  });
  return (
    <>
      <div className="main-outer">
        <div className="main-con">
          <div className="main-l-con">
            <span className="hi">Hi, I'm</span>
            <span className="name">Roy Lam</span>
            <span className="title">Frontend Designer & Developer</span>
            <button className="btn-work">Let Work Together</button>
          </div>
          <div className="main-r-con">
            <div className="bo-con">
              <img className="bo" src={bo} alt="bo"></img>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="more-con">
        <svg
          width="calc(12px + .5vw)"
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-scroll"
        >
          <path
            d="M35.3334 18.5L32.2784 15.3863L20.1667 27.7088V0.833374H15.8334V27.7088L3.74341 15.3642L0.666748 18.5L18.0001 36.1667L35.3334 18.5Z"
            fill="white"
          />
        </svg>
        <span className="more">More detail</span>
      </div> */}
    </>
  );
};

export default Intro;
