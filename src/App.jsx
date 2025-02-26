import './App.css'
import Article from './components/Article/Article'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <Header />
      {/* <hr /> */}
      <NavBar />
      <hr />
      <Article />
      <hr />
      <Footer />
    </>
  )
}

export default App
