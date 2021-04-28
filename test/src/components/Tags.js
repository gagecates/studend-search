import React from 'react'

export default function Tags({tags}) {
    const tagList = tags.map((tag,index) => {
        return <div key={index} className='tag-box'>{tag}</div>
    })

    return (
        <div>
            {tagList}
        </div>
    )
}
