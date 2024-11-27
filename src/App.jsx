
import './App.css'
import { MainPage } from './sections/MainPage'
import { About } from './sections/About'
import Faqs from './sections/Faqs'
import Footer from './sections/Footer'

function App() {

  return (
    <div className='!scroll-smooth bg-[#061523] min-h-screen overflow-x-hidden'>
      <MainPage />
      <About />
      <Faqs />  
      <Footer />
    </div>
  )
}

export default App
