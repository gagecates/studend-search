import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Tags from './Tags'
import '../App.css'

export default function StudentDetail({student, pushTagData}) {
    const [dropdown, setdropdown] = useState(false);
    const [tagInput, setTagInput] = useState('')
    const [tags, setTags] = useState(student.tags)

    // after tag submit, takes current tags and appends new. Sends to parent app as a callback. 
    const addTag = (e) => {
        e.preventDefault();
        setTags([...tags, tagInput])
        pushTagData({id: student.id, studenttags: [...tags, tagInput]})
        setTagInput('')
    }

    const dropdownActivate = () => {
        setdropdown(!dropdown)
    };
        
    const average = function average(nums) {
        return nums.reduce((a, b) => (a + b)) / nums.length;
    };
    
    const grades = student.grades.map(Number)
    const averageGrade = average(grades)

    return (
            <div className='student-container'>
                <img src={student.pic} alt='img'/>
                <div className='text-container'>
                    <div className='name'>{student.firstName}&nbsp;{student.lastName}
                        <span 
                            className='dropdown-icon' 
                            onClick={dropdownActivate}
                        > 
                        {dropdown? <div>&ndash;</div>: "+"}
                        </span>
                    </div>
                        <div className='name-details'>
                            <div>Email: {student.email}</div>
                            <div>Company: {student.company}</div>
                            <div>Skill: {student.skill}</div>
                            <div>Average: {averageGrade}%</div>
                            <div className='dropdown'>{dropdown && <Dropdown student={student}/>}</div>
                                <div className="tag-field">
                                    {student.tags && <Tags tags={student.tags}/>}
                                    <form onSubmit={addTag}>
                                    <input
                                        type="text"
                                        placeholder='Add Tag'
                                        value={tagInput}
                                        onChange={(e) => setTagInput(e.target.value)}
                                    />
                                    </form>
                                </div>
                        </div>
                </div>
            </div> 
    )
}
