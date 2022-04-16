
import { useState } from 'react';
import PlantFormLayout from "./PlantForm.js/PlantForm";
import NavBar from '../sharedComponents/NavBar';

const HomePageLayout = () => {
  const [ showForm, setShowForm ] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  const PlantFormToggleButton = () => (
    <button 
      className="bg-emerald-300 rounded p-2" 
      onClick={toggleForm}
    > 
    {showForm ? 'Hide Form' : 'Add Plant' }
    </button>
  )

  return (
    <>
      <h1 className='text-center'>Home Page</h1>
      <NavBar />
      <PlantFormToggleButton />
      <PlantFormLayout showForm={showForm} /> 
    </>
  )
}

export default HomePageLayout;
