import React, { useState } from "react";
import Seprator from "../components/Seprator";
import StudentCard from "../components/StudentCard";
import Footer from "../components/Footer";
import { students } from "../data/data";
import { Navbar } from "../components/Navbar";
import StudentModal from "../components/StudentModal";

const Students = () => {
  const [student, setStudent] = useState(students);
  const [modal, setModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleDelete = (reg) => {
    const newList = student.filter((item) => item.regNo !== reg);
    setStudent(newList);
  };

  const handleView = (reg) => {
    const user = student.find((item) => item.regNo === reg);
    setSelectedStudent(user);
    console.log(selectedStudent);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div>
      <Navbar />
      <Seprator content={"Students Details"} />
       {modal && <StudentModal data={selectedStudent} closeModal = {closeModal}/>}
      <div className="student-list">
        {student.map((s, index) => (
          <StudentCard
            key={index}
            name={s.name}
            regNo={s.regNo}
            course={s.course}
            cgpa={s.cgpa}
            imageURL={s.imgUrl}
            btn1={() => handleView(s.regNo)}
            btn2={() => handleDelete(s.regNo)}
            
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Students;
