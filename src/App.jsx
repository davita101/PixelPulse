import { FQAs, Features, Footer, Header, Hero, Pricing } from "./components"

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Hero id="/hero" />
        <Features id="/features" />
        <Pricing id="/pricing" />
        <FQAs id="fqas" />
      </main>
      <footer>
        <Footer id='/footer' />
      </footer>
    </div>
  )
}

export default App
