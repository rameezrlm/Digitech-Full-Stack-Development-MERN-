import "../Styles/StudentModal.css";

export default function StudentModal({ data ,closeModal}) {
    console.log("I am rendered", data);
  if(!data) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-head">
          <h2>{data.name}</h2>
          <span className="close" onClick={()=>closeModal()}>✕</span>
        </div>

        <div className="modal-content">
          <img src={data.imgUrl} alt="student" className="student-img" />
          <div className="student-info">
            <p><b>Reg No:</b> {data.regNo}</p>
            <p><b>Course:</b> {data.course}</p>
            <p><b>CGPA:</b> {data.cgpa}</p>
          </div>
        </div>

        <div className="modal-foot">
          <button className="btn edit">Edit</button>
          <button className="btn message">Message</button>
          <button className="btn close-btn" onClick={()=>closeModal()}>Close</button>
        </div>
      </div>
    </div>
  );
}
