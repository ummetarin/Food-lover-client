import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const carousel = (slider) => {
    const z = 300
    function rotate() {
      const deg = 360 * slider.track.details.progress
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
      const deg = 360 / slider.slides.length
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
      })
      rotate()
    })
    slider.on("detailsChanged", rotate)
  }

   
const Gallery = () => {

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
          selector: ".carousel__cell",
          renderMode: "custom",
          mode: "free",
        },
        [carousel]
      )
    
    return (
        <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1 "><img className="h-full w-full" src="https://i.ibb.co/sKfKGyf/img7.jpg" alt="" /></div>
          <div className="carousel__cell number-slide2"><img className="h-full w-full" src="https://i.ibb.co/dbdD7WX/mg5.jpg" alt="" /></div>
          <div className="carousel__cell number-slide3"><img className="h-full w-full" src="https://i.ibb.co/4NK84XQ/img4.jpg" alt="" /></div>
          <div className="carousel__cell number-slide4"><img className="h-full w-full" src="https://i.ibb.co/XkkMRKN/img3.jpg" alt="" /></div>
          <div className="carousel__cell number-slide5"><img className="h-full w-full" src="https://i.ibb.co/BjrCLRw/img2.jpg" alt="" /></div>
          <div className="carousel__cell number-slide6"><img className="h-full w-full" src="https://i.ibb.co/XXRRL67/wr-5.jpg" alt="" /></div>
        </div>
      </div>
    </div>
    );
};


export default Gallery;