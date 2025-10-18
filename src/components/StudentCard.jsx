import "../Styles/StudentCard.css";

const StudentCard = ({ name, regNo, course, cgpa,imageURL,btn1,btn2 }) => {
  
  return (
    <div className="student-card">
      <div className="student-img-card">
        <img src={imageURL} alt="" className="card-img-s" />
      </div>
      <div className="student-content">
        <h3>{name}</h3>
        <p><strong>Registration No:</strong> {regNo}</p>
        <div className="btn">
          <button onClick={btn1}>View</button>
          <button onClick={btn2}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
