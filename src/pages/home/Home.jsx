import React from 'react';
// import coursesImage from './courses.jpg';
// import activitiesImage from './activities.jpg';
// import aboutImage from './about.jpg';

import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <main className="main">
      <div className="container">
        <section className="hero">
          <h2>Welcome to EduKids!</h2>
          <p>Empowering young minds through education.</p>
        </section>
        <section className="features">
          <Link to='/courses'>
          <div className="feature">
            <img src="./img/kidszone.png" alt="Courses" />
            <h3>Engaging Courses</h3>
            <p>Explore our interactive and educational courses for children.</p>
          </div>
          </Link>
          <Link to='/activity'>
          <div className="feature">
            <img src="./img/activity.png" alt="Activities" />
            <h3>Fun Activities</h3>
            <p>Discover exciting activities designed to foster creativity and learning.</p>
          </div>
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Home;
