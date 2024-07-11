import React from 'react';
import Image from 'next/image';

const locationIcon = '/img/icons/location.png'; // Путь до изображения

const LocationInfo: React.FC<{ location: string }> = ({ location }) => {
  return (
    <div className="location-info">
      <Image src={locationIcon} alt="Location Icon" width={20} height={20} />
      <span>{location}</span>
    </div>
  );
};

export default LocationInfo;
