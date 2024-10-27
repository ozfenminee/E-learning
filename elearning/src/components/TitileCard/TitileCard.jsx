import React, { useEffect, useRef } from 'react';
import cards_data from '../../assets/cards/Cards_data';

export const TitleCard = ({ title, category }) => {
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
    return () => {
      cardsRef.current.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="p-4 bg-yellow-100">
      <h2 className="text-2xl font-semibold mb-4">
        {title ? title : "Popüler Kurslar"}
      </h2>
      <div
        className="flex gap-4 overflow-x-auto scrollbar-hide p-4 rounded-lg bg-yellow-500"
        ref={cardsRef}
      >
        {cards_data.map((card, index) => (
          <div
            key={index}
            className="min-w-[200px] w-[200px] flex-shrink-0 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={card.image}
              alt=""
              className="w-full h-[150px] object-cover"
            />
            <div className="p-4">
              <p className="text-center font-medium">{card.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
