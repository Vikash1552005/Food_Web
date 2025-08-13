import React, { useState, useEffect } from "react";
import pizza6 from "../images/Latest6.webp";
import pizza2 from "../images/Latest2.webp";
import pizza3 from "../images/Latest3.webp";
import pizza4 from "../images/Latest4.webp";
import pizza5 from "../images/Latest5.webp";
import pizza from "../images/vicky.jpg";

const popups = [
  {
    img: pizza,
    subtitle: " Vicky ki taraf se 🙏",
    title: "Radhe Radhe, friend! 🙏😊",
    location: "(Jaipur)",
    time: "Mr.kumar_vicky",
    showDuration: 10000,
    delayAfter: 10000,
  },
  {
    img: pizza2,
    subtitle: "Someone Purchased 20000",
    title: "Cheesy Pepperoni Pizza (vicky)",
    location: "(USA)",
    time: "15 Minutes Ago",
    showDuration: 10000,
    delayAfter: 10000,
  },
  {
    img: pizza3,
    subtitle: "Someone Purchased 50000",
    title: "Veggie Delight Burger (vicky)",
    location: "(UK)",
    time: "1 Hour Ago",
    showDuration: 10000,
    delayAfter: 10000,
  },
  {
    img: pizza4,
    subtitle: "Someone Purchased 40000",
    title: "Grilled Chicken Wrap (vicky)",
    location: "(Australia)",
    time: "5 Minutes Ago",
    showDuration: 10000,
    delayAfter: 10000,
  },
  {
    img: pizza5,
    subtitle: "Someone Purchased 25000",
    title: "Hot BBQ Wings (vicky)",
    location: "(Germany)",
    time: "50 Minutes Ago",
    showDuration: 10000,
    delayAfter: 50000,
  },
  {
    img: pizza6,
    subtitle: "Someone Purchased 25000",
    title: "Hot BBQ Wings (vicky)",
    location: "(Germany)",
    time: "50 Minutes Ago",
    showDuration: 10000,
    delayAfter: 1000,
  },
];

function Popup() {
  const [currentPopupIndex, setCurrentPopupIndex] = useState(null);

  useEffect(() => {
    let showTimeout;
    let hideTimeout;

    const showNextPopup = (index = 0) => {
      setCurrentPopupIndex(index);

      hideTimeout = setTimeout(() => {
        setCurrentPopupIndex(null);

        showTimeout = setTimeout(() => {
          const nextIndex = (index + 1) % popups.length;
          showNextPopup(nextIndex);
        }, popups[index].delayAfter);
      }, popups[index].showDuration);
    };

    showNextPopup();

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  const handleClose = () => {
    setCurrentPopupIndex(null);
  };

  if (currentPopupIndex === null) return null;

  const popup = popups[currentPopupIndex];

  return (
    <section>
      <div className={`popup-div popup-div${currentPopupIndex + 1}`}>
        <div className="food-popup-img">
          <img src={popup.img} alt="popup-img" />
        </div>
        <div className="popup-text-div">
          <span
            className={
              currentPopupIndex === 0
                ? "popup-close first-popup-close"
                : "popup-close"
            }
            onClick={handleClose}
          >
            ×
          </span>
          <p className="popup-subtitle">{popup.subtitle}</p>
          <h3 className="popup-title">{popup.title}</h3>
          <p className="popup-location">{popup.location}</p>
          <p className="popup-time">{popup.time}</p>
        </div>
      </div>
    </section>
  );
}

export default Popup;
