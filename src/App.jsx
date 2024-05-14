import { Element } from "react-scroll"
import { FQAs, Features, Footer, Header, Hero, InfiniteLooper, Pricing, Services } from "./components"

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Element name="/">
          <InfiniteLooper id="/hero" />
        </Element>
        <Element name="/features">
          <Features id="/features" />
        </Element>
        <Element name="/pricing">
          <Pricing id="/pricing" />
        </Element>
        <Element name="/services">
          <Services id="services" />
        </Element>
        <Element name="/fqas">
          <FQAs id="fqas" />
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
