import React from 'react'

export default function Dropdown({student}) {
    const dropdownData = student.grades.map((grade, index) => {
        return (
          <div key={index}>Test {index + 1}:&nbsp; &nbsp;{grade}%</div>
        );
    });
    
    return <div>{dropdownData}</div>
}
