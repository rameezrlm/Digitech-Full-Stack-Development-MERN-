import { useEffect, useRef } from "react";
import slider from "../assets/slider.png";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import "../Styles/Slider.css";

const Slider = () => {
  const ref = useRef(null);
  const index = useRef(0);

  useEffect(() => {
    const totalImages = ref.current.children.length;

    const interval = setInterval(() => {
      const imgWidth = ref.current.children[0].clientWidth; 
      ref.current.style.transform = `translateX(-${index.current * imgWidth}px)`;
      ref.current.style.transition = "all 0.3s ease-in-out";

      index.current = (index.current + 1) % totalImages;
    }, 2000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="slider-img">
      <div className="container" ref={ref}>
        <img src={slider} alt="" />
        <img src={slider1} alt="" />
        <img src={slider2} alt="" />
      </div>
    </div>
  );
};

export default Slider;
