import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function Rating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
 
      {Array(fullStars).fill(null).map((_, i) => (
        <FaStar key={`full-${i}`} style={{ color: 'gold' }} className="text-gold h-5 w-5" />
      ))}

      {halfStar && <FaStarHalfAlt style={{ color: 'gold' }} className="text-gold h-5 w-5" />}
 
      {Array(emptyStars).fill(null).map((_, i) => (
        <FaRegStar key={`empty-${i}`} style={{ color: 'gold' }}  className="text-gold h-5 w-5" />
      ))}
  
      <span className="ml-2 text-sm text-gray-700">
        {rating > 0 ? `(${rating.toFixed(1)})` : '(0)'}
      </span>
    </div>
  );
}

export default Rating;

