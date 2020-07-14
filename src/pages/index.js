import React, { useEffect, createRef, useRef } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Videos from "../components/videos/videos"

const IndexPage = () => {
  const myBlee = createRef(null)
  const myBlee2 = createRef(null)
  const myBlee3 = createRef(null)


  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
    const element = myBlee.current;
    const elementOffset = myBlee.current.offsetWidth;
    const element2 = myBlee2.current;
    const element3 = myBlee3.current;



  /*  gsap.from(element, {
      opacity: 0,
      y: 100,
      duration: 1,
    }) */


    console.log(element)
  
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "center center",
          // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
          end: () => "+=" + elementOffset,
          scrub: true
        },
        defaults: { ease: "none" },
      })
      // animate the container one way...
      tl.fromTo(
        element2,
        { xPercent: 100, x: 0 },
        { xPercent: 0 }
      )
        // ...and the image the opposite way (at the same time)
        .fromTo(
          element3,
          { xPercent: -100, x: 0 },
          { xPercent: 0 },
          0
        )

    
  }, [])

  return (
    <div className="body-class">
    <h1 className="header-section">Scroll to see the before/after</h1>

    <section className="comparisonSection" ref={myBlee}>
      <div className="comparisonImage beforeImage" >
        <img
          src="http://egegorgulu.com/assets/img/beforeafter/before.jpg"
          alt="before"
        />
      </div>
      <div className="comparisonImage afterImage" ref={myBlee2}>
        <img ref={myBlee3}
          src="http://egegorgulu.com/assets/img/beforeafter/after.jpg"
          alt="after"
        />
      </div>
    </section>

    <h1 className="header-section">What did you think?</h1>
  </div>
  )
}

export default IndexPage


/*
    <Layout>
      <SEO title="Home" title="moj tytul" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h2 ref={myBlee}>fsdsdfasfdasfsdaasfadsasdfads</h2>
      <Videos />

      <div>
        <h1 className="header-section">Scroll to see the before/after</h1>

        <section className="comparisonSection" ref={myBlee}>
          <div className="comparisonImage beforeImage">
            <img
              src="http://egegorgulu.com/assets/img/beforeafter/before.jpg"
              alt="before"
            />
          </div>
          <div className="comparisonImage afterImage" ref={myBlee2}>
            <img ref={myBlee3}
              src="http://egegorgulu.com/assets/img/beforeafter/after.jpg"
              alt="after"
            />
          </div>
        </section>

        <h1 className="header-section">What did you think?</h1>
      </div>

      <Link to="/videos/">Go to VIDEOS :-)</Link>
    </Layout>
    */