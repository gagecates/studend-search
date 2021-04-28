import './App.css';
import React, { useState, useEffect } from 'react';
import StudentList from './components/StudentList';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [term, setTerm] = useState('');
  const [tagTerm, setTagTerm] = useState('');

  // initial render fetches json file
  useEffect(() => {
    searchStudents();
  }, []);

  const searchStudents = async (term) => {
    const response = await fetch("https://api.hatchways.io/assessment/students")
    const data = await response.json()
    // this adds tags key to students data
    data.students.forEach(student => student.tags = [])
    setData(data.students)
    setfilteredData(data.students)
  };

  // filter user search
  useEffect(() => {
    if(term !== '' && tagTerm !== ''){
      setfilteredData(data.filter(student => student.tags.includes(tagTerm))) || setfilteredData(data.filter(student => student.lastName.toLowerCase().includes(term.toLowerCase()) || student.firstName.toLowerCase().includes(term.toLowerCase())))
    }else if(term !== ''){
      setfilteredData(data.filter(student => student.lastName.toLowerCase().includes(term.toLowerCase()) || student.firstName.toLowerCase().includes(term.toLowerCase())))
    }else if(tagTerm !== ''){
      setfilteredData(data.filter((student => student.tags.some(tag => tag.includes(tagTerm)))))
    }else{
      setfilteredData(data)
    }
  }, [term, tagTerm, data]);

  // adds new key to student objects "tags" and updates on every tag entry
  // updates state accordingly
  const pushTagData = (tagdata) => {
    const updatedData = [...data]
    updatedData.forEach(function(student) {
      if(tagdata.id === student.id){
        student.tags = tagdata.studenttags
      }
    })
    setData(updatedData)
  }

  return (
    <div>
      <div className='student-content'>
      <div className="field">
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder='Search by name'
          />
      </div>
      <div className="field">
          <input
            type="text"
            value={tagTerm}
            onChange={(event) => setTagTerm(event.target.value)}
            placeholder='Search by tag'
          />
      </div>
        <StudentList pushTagData={pushTagData} students={filteredData}/>
      </div>
    </div>
  );
}

export default App;
