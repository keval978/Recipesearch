import React from 'react'
import '../App.css'
export default function Form(props) {
    return (
        <div className='box'>
            <form onSubmit={props.getRecipe} style={{marginBottom:"30px"}}>
                <input type="text"  name="recipeName" />
                <button>Submit</button>
            </form>
        </div>
    )
}
