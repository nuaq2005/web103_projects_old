import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => { 
    
    const [language, setLanguage] = useState({id: 0, name: "", creator: "", yearcreated: "", image: ""})

    useEffect(() => {
        setLanguage({id: props.id, name: props.name, creator: props.creator, yearcreated: props.yearcreated, image: props.image});
    }, [props]);

    return (
        <div className="card">
            <div className='top-container' style={{ backgroundImage:`url(${language.image})`}}></div>
            <div className='bottom-container'>
                <h3>{language.name}</h3>
                <p>{'Creator: ' + language.creator}</p>
                <p>{'Created: ' + language.yearcreated}</p>
                <Link to={'/languages/' + language.id}> Read More → </Link>
            </div>
        </div>
    )
}

export default Card