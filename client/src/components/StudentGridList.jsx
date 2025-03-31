import React from "react";
import Student from "./Student";

const StudentGridList = ({ studentList }) => {
  return studentList.map((student) => {
    return <Student key={student.id} student={student} />;
  });
};

export default StudentGridList;
