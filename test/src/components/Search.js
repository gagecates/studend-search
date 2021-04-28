import React, {useState, useEffect} from 'react'

export default function Search({filterStudents}) {
    const [term, setTerm] = useState('')
    
    useEffect((filterStudents) => {
        filterStudents(term)
    }, [term])

    return (
        <div className="field">
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder='Search by name'
          />
        </div>
    )
}
