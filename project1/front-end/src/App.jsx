import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Languages from './pages/Languages'
import LanguageDetails from './pages/LanguageDetails'
import PageNotFound from './pages/PageNotFound'



const App = () => {
  
  const [languages, setLanguages] = useState([]);


  useEffect(() => {
    const fetchLanguages = async () => {
      const response = await fetch('/languages')
      const data = await response.json()
      setLanguages(data)
    }
    fetchLanguages()

  }, []);


  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<Languages data={languages}/>
    },
    {
      path:"/languages/:id",
      element: <LanguageDetails data={languages} />
    },
    {
      path:"/*",
      element: <PageNotFound />
    }
  ]);

  
  return ( 

    <div className="App">

      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="/logo.png"/>
            <h1> Language Library </h1>
          </div>
          <div className="header-right">
            <Link to="/"><button className="homeBtn">Home</button></Link>
          </div>
        </div>
      </header>

        {element}
        
    </div>

  );
}

export default App;