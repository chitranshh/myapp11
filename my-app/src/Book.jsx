import React from 'react'

function Book(props) {

    return (
        <>
            <h1>{props.data.Author}</h1>
            <h2>{props.data.title}</h2>
            <img src={props.data.imgLink} />
        </>
    )
}

export default Book