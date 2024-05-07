// import { useNavigate } from "react-router-dom";
// import './Courses.scss';

// function Courses() {
//   const navigate = useNavigate();

//   const handleCourseClick = (course) => {
//     // Redirect to the corresponding course page
//     navigate(`/${course}`);
//   };

//   return (
//     <div>
//       <div onClick={() => handleCourseClick("english")}>
//         <img src="./img/learnenglish.png" alt="English Course" />
//       </div>
//       <div onClick={() => handleCourseClick("hindi")}>
//         <img src="./img/learnhindi.png" alt="Hindi Course" />
//       </div>
//       <div onClick={() => handleCourseClick("tamil")}>
//         <img src="./img/learntamil.png" alt="Tamil Course" />
//       </div>
//       <div onClick={() => handleCourseClick("malayalam")}>
//         <img src="./img/learnmalayalam.png" alt="Malayalam Course" />
//       </div>
//       <div onClick={() => handleCourseClick("telugu")}>
//         <img src="./img/learntelugu.png" alt="Telugu Course" />
//       </div>
//     </div>
//   );
// }

// export default Courses;
import { useNavigate } from "react-router-dom";
import './Courses.scss';

function Courses() {
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    // Redirect to the corresponding course page
    navigate(`/${course}`);
  };

  return (
    <div className="courses-container">
      <div className="course" onClick={() => handleCourseClick("english")}>
        <img src="./img/learnenglish.png" alt="English Course" className="course-image" />
        <div className="course-name">English Numbers</div>
      </div>
      <div className="course" onClick={() => handleCourseClick("hindi")}>
        <img src="./img/learnhindi.png" alt="Hindi Course" className="course-image" />
        <div className="course-name">Hindi Numbers</div>
      </div>
      <div className="course" onClick={() => handleCourseClick("tamil")}>
        <img src="./img/learntamil.png" alt="Tamil Course" className="course-image" />
        <div className="course-name">Tamil Numbers</div>
      </div>
      <div className="course" onClick={() => handleCourseClick("malayalam")}>
        <img src="./img/learnmalayalam.png" alt="Malayalam Course" className="course-image" />
        <div className="course-name">Malayalam Numbers</div>
      </div>
      <div className="course" onClick={() => handleCourseClick("telugu")}>
        <img src="./img/learntelugu.png" alt="Telugu Course" className="course-image" />
        <div className="course-name">Telugu Numbers</div>
      </div>
    </div>
  );
}

export default Courses;
