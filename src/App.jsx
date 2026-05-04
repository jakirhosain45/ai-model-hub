import Model from "./compunent/Models"
import Banner from "./compunent/banner"
import Navbar from "./compunent/Navbar"
import Footer from "./compunent/Footer"
import Cart from "./compunent/Cart"

const getModels =async ()=>{
  const res =await fetch("/model.json")
  return res.json()
}

const modelspromise = getModels()

function App() {
  return (
    <>
     <Navbar/>
     <Banner/>
     
<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 1" />
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 2" defaultChecked />
  
</div>
     <Model modelspromise={modelspromise}/>
     <Cart></Cart>
     <Footer/>
    </>
  )
}

export default App
