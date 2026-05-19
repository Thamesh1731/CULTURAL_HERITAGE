import React from 'react';
import Card from '../components/Card';
import pongalImage from '../assets/pongal.jpg';
import onamImage from '../assets/onam.png';
import mysuruDasaraImage from '../assets/mysuru dasara.png';
import ugadiImage from '../assets/ugadi.png';

const festivalsData = [
  {
    id: 1,
    title: 'Pongal',
    description: 'A multi-day harvest festival dedicated to the Sun God.',
    imageUrl: pongalImage
  },
  {
    id: 2,
    title: 'Onam',
    description: 'A harvest festival celebrating the homecoming of King Mahabali.',
    imageUrl: onamImage
  },
  {
    id: 3,
    title: 'Mysuru Dasara',
    description: 'A 10-day festival celebrating the victory of good over evil.',
    imageUrl: mysuruDasaraImage
  },
    {
    id: 4,
    title: 'Ugadi',
    description: 'The New Year celebration for the people of the Deccan region.',
    imageUrl: ugadiImage
  },
];

const Festivals = () => {
  return (
    <div className="page-content">
      <h1>Festivals of South India</h1>
      <div className="card-grid">
        {festivalsData.map(festival => (
          <Card 
            key={festival.id} 
            title={festival.title} 
            description={festival.description} 
            imageUrl={festival.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
};

export default Festivals;
