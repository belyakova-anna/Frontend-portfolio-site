import React from 'react';
import Image from 'next/image';

const locationIcon = '/img/icons/location.png'; // Путь до изображения

const LocationInfo: React.FC<{ location: string }> = ({ location }) => {
  return (
    <div className="location">
      <Image
        src={locationIcon}
        alt="Location"
        width={24}
        height={24}
        className="small-image"
      />
      <p>{location}</p>
    </div>
  );
};

export default LocationInfo;
