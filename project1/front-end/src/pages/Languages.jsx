import React, { useState, useEffect } from 'react'
import './Languages.css'
import Card from '../components/Card'


const Languages = (props) => {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        console.log("props.data:", props.data)
        setLanguages(props.data)
    }, [props])
    
    return (
        <div className="Languages">
            <main>
            {
                languages && languages.length > 0 ?
                languages.map((language,index) => 
                    
                   <Card key={language.id}
                         id={language.id} 
                         image={language.image} 
                         name={language.name}
                         creator={language.creator}  
                         yearcreated={language.yearcreated} 
                         description={language.description} />

                ) : <h3 className="noResults">{'No Languages Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Languages