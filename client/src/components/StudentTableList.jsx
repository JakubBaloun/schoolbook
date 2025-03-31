import React from "react";

const StudentTableList = ({ studentList }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="text-left text-l text-black border-b-2 border-black">
            <th className="p-4">Jméno</th>
            <th className="p-4">Příjmení</th>
            <th className="p-4">Rodné číslo</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {studentList.map((student) => (
            <tr key={student.id}>
              <td className="p-4 border-b-2 border-gray-100">
                {student.firstname}
              </td>
              <td className="p-4 border-b-2 border-gray-100">
                {student.surname}
              </td>
              <td className="p-4 border-b-2 border-gray-100">
                {student.nationalId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTableList;
