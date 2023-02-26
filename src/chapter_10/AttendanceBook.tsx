import React from "react";
import Avatar from "boring-avatars";

const students = [
  {
    id: 1,
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
];

function AttendanceBook() {
  return (
    <ul className="space-y-1">
      {students.map((student) => {
        return (
          <li className="flex items-center space-x-2" key={student.id}>
            <Avatar
              size={20}
              name={student.name}
              variant="beam"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
            <p>{student.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default AttendanceBook;
