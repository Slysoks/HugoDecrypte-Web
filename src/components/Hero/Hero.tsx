import "./style.css";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = document.getElementsByClassName("item");

  const updateActive = () => {
    Array.from(items).forEach((item: Element, index: number) => {
      if (index === currentIndex) {
        item.classList.add("active");
        (item as HTMLElement).style.zIndex = "10";
      } else {
        item.classList.remove("active");
        if (index === (currentIndex + 1) % items.length) {
          (item as HTMLElement).style.zIndex = "5";
        } else {
          (item as HTMLElement).style.zIndex = "0";
        }
      }
    });
  };

  useEffect(() => {
    updateActive();
  });

  const prevScreen = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? items.length - 1 : prevIndex - 1;
      updateActive();
      return newIndex;
    });
  };

  const nextScreen = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === items.length - 1 ? 0 : prevIndex + 1;
      updateActive();
      return newIndex;
    });
  };

  return (
    <div>
      <div className="hero">
        <div className="caroussel">
          <a
            className="item"
            href="https://youtu.be/Xk5GrKqng6E"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/Xk5GrKqng6E/maxresdefault.jpg"
              alt=""
            />
            <div className="item-info">
              <h2>
                Une affaire de corruption touche le pouvoir en Ukraine,
                explications
              </h2>
              <div className="item-creator">
                <img src="src/assets/icons/channel_daily.jpg" alt="" />
                <p>HugoDécrypte - Actus du jour</p>
              </div>
            </div>
          </a>
          <a
            className="item"
            href="https://youtu.be/AM01IUcUiOw"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/AM01IUcUiOw/maxresdefault.jpg"
              alt=""
            />
            <div className="item-info">
              <h2>
                Vous n'arrivez plus à vous concentrer, voici pourquoi (et
                comment s'en sortir)
              </h2>
              <div className="item-creator">
                <img src="src/assets/icons/channel_long.jpg" alt="" />
                <p>HugoDécrypte - Grands formats</p>
              </div>
            </div>
          </a>
          <a
            className="item"
            href="https://youtu.be/7CxMOIL3AgQ"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/7CxMOIL3AgQ/maxresdefault.jpg"
              alt=""
            />
            <div className="item-info">
              <h2>
                Attentats du 13 novembre 2015 : ils racontent ce qu’ils ont vécu
              </h2>
              <div className="item-creator">
                <img src="src/assets/icons/channel_long.jpg" alt="" />
                <p>HugoDécrypte - Grands formats</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <button id="prev" onClick={prevScreen}>
        Previous
      </button>
      <button id="next" onClick={nextScreen}>
        Next
      </button>
    </div>
  );
};

export default Hero;
