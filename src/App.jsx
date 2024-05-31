import { Element } from "react-scroll"
import { FQAs, Features, Footer, Header, Hero, Services, Community } from "./components"

function App() {
  return (
    <div >
      <header className="relative z-[11]">
        <Header />
      </header>
      <main className="bg-[#f9f9f9] relative z-[10]">
        <Element name="/">
          <Hero id="/hero" />
        </Element>
        <Element name="/features">
          <Features id="features" />
        </Element>
        <Element name="/services">
          <Services id="services" />
        </Element>
        <Element name="/pricing" />
        <Element name="/fqas" className="mt-[50rem] absolute" />
        <Element id="fqas" >
          <FQAs />
        </Element>
        <Element id="" name="/Community">
          <Community />
        </Element>
      </main>
      <footer>
        <Element name="/footer">
          <Footer id='footer' />
        </Element>
      </footer>
    </div >
  )
}

export default App
