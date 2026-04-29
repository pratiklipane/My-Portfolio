/* ============================================
   App.jsx — Root component
   Assembles all sections in order
   ============================================ */

import Header    from './components/Header/Header'
import Home      from './components/Home/Home'
import About     from './components/About/About'
import Services  from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact   from './components/Contact/Contact'
import Footer    from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
