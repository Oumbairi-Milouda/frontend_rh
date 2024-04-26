
import './App.css';
// import { useState } from 'react';
import AffichageFonctionnaires from './DossierPersonnels/AffichageFonctionnaires';
import DetailsFonctionnaires from './DossierPersonnels/DetailsFonctionnaires';
// import AjouteFonctionnaires from './DossierPersonnels/AjouteFonctionnaires';
// import Dashboard from './compenents/Dashboard'
// import Sidebar from './compenents/Sidebar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Stepper from './DossierPersonnels/stepper/Stepper';





function App() {

  
  

  // const[sidebarToggle , setSidebarToggle]=useState(false)

  return (
    <>
    <BrowserRouter>
    {/* <div className="grid grid-cols-12 h-[100dvh]">
      <Sidebar sidebarToggle={sidebarToggle}/>
      <Dashboard
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}
      />  */}
      
      
    
      <Routes>
        <Route  path='/' exact element={<AffichageFonctionnaires/>}/>
        <Route path="/informations/:id" exact element={<DetailsFonctionnaires/>} />
        <Route  path='/Stepper' exact element={<Stepper/>}/>
      </Routes>
      {/* </div> */}
    </BrowserRouter>

     </>
  )
}

export default App
