import { useState } from "react";
import Navbar from "./Navbar";
import StudentGridList from "./StudentGridList";
import StudentTableList from "./StudentTableList";

export default function StudentList({ studentList }) {
  const [viewType, setViewType] = useState("grid");
  const isGrid = viewType === "grid";
  console.log(isGrid);

  function getStudentList(studentList) {
    return isGrid ? (
      <StudentGridList studentList={studentList} />
    ) : (
      <StudentTableList studentList={studentList} />
    );
  }

  function handleChangeView() {
    setViewType((currentState) => {
      if (currentState === "grid") return "table";
      else return "grid";
    });
  }

  return (
    <div>
      <Navbar isGrid={isGrid} handleChangeView={handleChangeView} />
      {getStudentList(studentList)}
    </div>
  );
}
