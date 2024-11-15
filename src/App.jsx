
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Photos from './Components/Photos/Photos'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div><Navbar/>
    <Hero/>
    <Title subTitle='Our Program' title='what we offer'/>
    <Programs/>
    <About/>
    <Title subTitle='GALLERY' title='Campus Photos'/>
    <Photos/>
    <Title subTitle='TESTIMONIALS' title='What Student Says'/>
    <Testimonial/>
    <Title subTitle='CONTACT US' title='Get in Touch'/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App