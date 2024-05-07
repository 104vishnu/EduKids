// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Activity.scss';

// function Activity() {
//   return (
//     <main className="main">
//       <div className="container">
//         <section className="activities">
            
//           <Link to='/count-numbers'>
//             <div className="activity">
//               <img src="./img/countnumbers.png" alt="Count Numbers" />
//               <h3>Count Numbers</h3>
//               <p>Learn counting numbers with fun activities.</p>
//             </div>
//           </Link>

//           <Link to='/audio-to-number'>
//             <div className="activity">
//               <img src="./img/audiotonumbers.png" alt="Audio to Number" />
//               <h3>Audio to Number</h3>
//               <p>Listen to audio clips and identify the corresponding numbers.</p>
//             </div>
//           </Link>
          
//         </section>
//       </div>
//     </main>
//   );
// }

// export default Activity;

import React from 'react';
import { Link } from 'react-router-dom';
import './Activity.scss';

function Activity() {
  return (
    <main className="main">
      <div className="container">
        <section className="activities">
            
          <Link to='/count-numbers'>
            <div className="activity">
              <img src="./img/countnumbers.gif" alt="Count Numbers" />
              <h3>Count Numbers</h3>
              <p>Learn counting numbers with fun activities.</p>
            </div>
          </Link>

          <Link to='/audio-to-number'>
            <div className="activity">
              <img src="./img/audiotonumbers.gif" alt="Audio to Number" />
              <h3>Audio to Number</h3>
              <p>Listen to audio clips and identify the corresponding numbers.</p>
            </div>
          </Link>

          <Link to='/subtraction'>
            <div className="activity">
              <img src="./img/subtraction.gif" alt="Subtraction" />
              <h3>Subtraction</h3>
              <p>Practice subtraction with interactive quizzes.</p>
            </div>
          </Link>

          <Link to='/addition'>
            <div className="activity">
              <img src="./img/additions.gif" alt="Addition" />
              <h3>Addition</h3>
              <p>Test your addition skills with engaging exercises.</p>
            </div>
          </Link>
          
        </section>
      </div>
    </main>
  );
}

export default Activity;
