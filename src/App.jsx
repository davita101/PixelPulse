import { Element } from "react-scroll"
import { FQAs, Features, Footer, Header, Hero, Pricing, Services } from "./components"
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap";
import { useRef } from "react";
function App() {

  const useMain = useRef(null)
  gsap.registerPlugin(ScrollTrigger);
  let tlMain = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: useMain.current,
      pin: true, // pin the trigger element while active
      start: '30 top', // when the top of the trigger hits the top of the viewport
      end: '+=1300px', // end after scrolling 500px beyond the start
      scrub: 10, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      pinSpacing: false,
    }
  })
  tlMain.to(useMain.current, { top: 1000 })
  return (
    <div ref={useMain} className="w-full h-full relative">
      <header>
        <Header />
      </header>
      <main>
        <Element name="/">
          <Hero id="/hero" />
        </Element>
        <Element name="/features">
          <Features id="/features" />
        </Element>
        <Element name="/services">
          <Services id="/services" />
        </Element>
        <Element name="/pricing">
          <Pricing id="/pricing" />
        </Element>
        <Element name="/fqas">
          <FQAs id="/fqas" />
        </Element>
      </main>
      <footer>
        <Element name="/footer">
          <Footer id='/footer' />
        </Element>
      </footer>
    </div>
  )
}

export default App
