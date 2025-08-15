import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-content">
      <header className="hero-section">
        <h1>The Vibrant Heritage of South India</h1>
        <p>Explore the rich traditions, colorful festivals, and fascinating history of the southern peninsula.</p>
        <Link to="/festivals" className="btn">Explore Festivals</Link>
      </header>

      <section>
        <h2>A Land of Diverse Cultures</h2>
        <p>
          This website is dedicated to preserving and sharing the vibrant cultural heritage of South India. From the ancient temples of Tamil Nadu to the serene backwaters of Kerala, we invite you to learn more about the history, languages, and customs of this incredible region.
        </p>
      </section>
    </div>
  );
};

export default Home;
