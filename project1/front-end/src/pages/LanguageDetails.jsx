
import { useParams } from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import './LanguageDetails.css'

const LanguageDetails = ({data}) => {
    const {id} = useParams()
    console.log('fetching id: ', id)
    const [language, setLanguage] = useState({id:{id}, name: "", creator: "", yearcreated: "", image: "", description: ""})


    useEffect(() => {
        const fetchLangById = async () => {
            const response = await fetch (`/languages/${id}`)
            const data = await response.json()
            setLanguage(data)
        }

        fetchLangById()
    }, [data, id]);


    return (
        <div className="LanguageDetails">
            <main id="language-content" className="language-info">
                <div className="image-container">
                    <img id="image" src={language.image} />
                </div>
                <div className="language-details">
                    <h2 id="name">{language.name}</h2>
                    <p id="pricePoint">{'Creator: ' + language.creator}</p>
                    <p id="yearCreated">{'Created: ' + language.yearcreated}</p>
                    <p id="description">{language.description}</p>
                </div>
            </main>
        </div>
    )
}

export default LanguageDetails