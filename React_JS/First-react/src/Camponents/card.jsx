import React from 'react'
import "./card.css"

function Card(props) {
    return (
        <div>
            <div className="card2" style={{}}>
                <div className="card1" style={{overflow:"hidden"}}>
                    <img src="https://cdn.vectorstock.com/i/1000x1000/65/16/digital-coding-background-with-numbers-zero-vector-36266516.webp" alt="img" width={333} style={{height:200}}/>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Card
