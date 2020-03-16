import React from 'react';
const Subcomment = (props) => {
    return (
        <ul>
            {props.subcomment.map((co, i)=>{
                return (
                <li>{co.comment}</li>
                )
            })}
            
        </ul>
    )
}
export default Subcomment;