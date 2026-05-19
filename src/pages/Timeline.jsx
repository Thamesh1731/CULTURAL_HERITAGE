import React from 'react';

const timelineData = [
  {
    id: 1,
    year: 'c. 300 BCE - 300 CE',
    event: 'The Sangam period, a golden age of Tamil literature, flourishes.'
  },
  {
    id: 2,
    year: 'c. 275 CE - 897 CE',
    event: 'The Pallava Dynasty rises, known for its significant contributions to Dravidian architecture.'
  },
  {
    id: 3,
    year: 'c. 850 CE - 1279 CE',
    event: 'The Imperial Cholas establish a powerful empire, expanding across South India and into Southeast Asia.'
  },
  {
    id: 4,
    year: '1336 CE - 1646 CE',
    event: 'The Vijayanagara Empire serves as a bulwark against northern invasions and fosters a rich cultural heritage.'
  },
];

const Timeline = () => {
  return (
    <div className="page-content">
      <h1>A Glimpse into South Indian History</h1>
      <div className="timeline">
        {timelineData.map(item => (
          <div className="timeline-item" key={item.id}>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <p>{item.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
