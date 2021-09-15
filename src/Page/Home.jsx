import Nav from "./Component/Nav";
import Intro from "./Component/Intro";
import Load from "./Component/Load";
import Source from "./Component/Source";
import ReactFullpage from "@fullpage/react-fullpage";
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const HomeAni = (tl, delay) => {
  tl.add(
    {
      targets: ".hi",
      opacity: [0, 1],
      translateY: ["20px", 0],
      duration: 1000,
    },
    delay
  )
    .add(
      {
        targets: ".name",
        opacity: [0, 1],
        translateY: ["20px", 0],
        duration: 1000,
      },
      "-=600"
    )
    .add(
      {
        targets: ".title",
        opacity: [0, 1],
        translateY: ["20px", 0],
        duration: 1000,
      },
      "-=600"
    );
  if (window.screen.width < 768) {
    tl.add(
      {
        targets: ".bo-con",
        opacity: [0, 1],
        translateY: ["25px", 0],
        duration: 1300,
      },
      "-=500"
    ).add(
      {
        targets: ".btn-work",
        opacity: [0, 1],
        translateY: ["-25px", 0],
        duration: 1300,
      },
      "-=1300"
    );
  } else {
    tl.add(
      {
        targets: ".bo-con",
        opacity: [0, 1],
        translateX: ["65px", 0],
        duration: 1300,
      },
      "-=500"
    );
    tl.add(
      {
        targets: ".btn-work",
        opacity: [0, 1],
        translateX: ["-65px", 0],
        duration: 1300,
      },
      "-=1300"
    );
  }
};

const Home = () => {
  useEffect(() => {
    var tl = anime.timeline({
      easing: "easeOutQuad",
      duration: 1500,
    });
    HomeAni(tl, 3900);
    tl.add(
      {
        targets: ".nav",
        opacity: [0, 1],
        translateY: ["-70px", 0],
        duration: 1250,
      },
      "5050"
    );
  });
  return (
    <>
      <Nav />
      <Source />
      <ReactFullpage
        //fullpage options
        scrollingSpeed={1000} /* Options here */
        onLeave={(destination) => {
          var section = anime.timeline({
            targets: ".section",
            easing: "easeInOutSine",
          });
          section
            .add({
              opacity: 0,
              duration: 300,
            })
            .add({
              opacity: 1,
              duration: 1000,
            });
          if (destination.index === 1) {
            var tl = anime.timeline({
              easing: "easeInOutSine",
              duration: 1500,
            });
            HomeAni(tl, "-=500");
          }
        }}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section" data-anchor="home">
                  <Load />
                  <Intro />
                </div>
                <div className="section" data-anchor="about">
                  <p>About me</p>
                </div>
                <div className="section" data-anchor="project">
                  <p>Project</p>
                </div>
                <div className="section" data-anchor="contact">
                  <p>Contact</p>
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </>
  );
};

export default Home;
