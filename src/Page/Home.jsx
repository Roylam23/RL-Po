import Nav from "./Component/Nav";
import Intro from "./Component/Intro";
import Load from "./Component/Load";
import Source from "./Component/Source";
import ReactFullpage from "@fullpage/react-fullpage";

const Home = () => {
  return (
    <>
      <Nav />
      <Source />
      <ReactFullpage
        //fullpage options
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section" data-anchor="p1">
                  <Load />
                  <Intro />
                </div>
                <div className="section" data-anchor="p2">
                  <p>Section 2</p>
                </div>
                <div className="section" data-anchor="p3">
                  <p>Section 3</p>
                </div>
                <div className="section" data-anchor="p4">
                  <p>Section 4</p>
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
