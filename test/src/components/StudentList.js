import React from 'react'
import StudentDetail from './StudentDetail'

export default function StudentList({students, pushTagData}) {

  const renderedList = students.map(student => {
      return (
        <StudentDetail
          key={student.id}
          student={student}
          pushTagData={pushTagData}
        />
      );
    });
  return <div>{renderedList}</div>
}
