import React, { useEffect } from 'react';
import './style.css';

export default function CarAnimation() {
  useEffect(() => {
    const carContainer = document.querySelector('.car-container');
    const carDiv = document.querySelector('.car');

    const onAnimationEnd = () => {
      carDiv.classList.remove('animate');
    //   carDiv.style.opacity = '0';
    };

    const startAnimation = () => {
      carDiv.style.opacity = '1';
      carDiv.classList.add('animate');
      carDiv.addEventListener('animationend', onAnimationEnd);
    };

    // Start animation after component mounts
    startAnimation();

    // Clean up the event listener when the component unmounts
    return () => {
      carDiv.removeEventListener('animationend', onAnimationEnd);
    };
  }, []);

  return (
    <div className="car-container">
      <div className="car"></div>
    </div>
  );
}
