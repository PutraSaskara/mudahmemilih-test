import Header from "../components/homepage/Header";
import AutoPlaySlider from "../components/homepage/AutoPlaySlider"
import SiapaKita from "../components/homepage/SiapaKita";
import ArticleList from "../components/homepage/ArticleList";
import ContactUs from "../components/homepage/ContactUs";

import SlidersCards from "../components/homepage/SliderCards";



export default function Home() {
  return (
    <div className='mt-20 p-4'>
      <Header/>
      <AutoPlaySlider/>
      <SiapaKita/>
      <ArticleList/>
      <ContactUs/>

      
      <SlidersCards/>

    </div>
  )
}
