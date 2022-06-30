import { useState } from 'react';
import { GardenFamilies } from '../../schema/plantFamilySchema';
import { useGardenContext } from '../../sharedComponents/Context/GardenProvider';
import {
  PlantFormSchema,
  PlantInputEnum,
  PlantDisplayName,
} from '../../sharedComponents/plantEnums';

const validateForm = (form) => {
  const daysToMatureNumber = Number(form.daysToMaturity);
  const date = new Date();

  const datePlanted = () => {
    const plantedDate = form.isPlanted === 'true' ? date : '';
    return plantedDate;
  }


  // Validated user input for DB submission
  return {
    plantName: form.plantName.replaceAll(/[<>\/]/gi, ''),
    plantFamily: form.plantFamily,
    daysToMaturity: daysToMatureNumber,
    recordingDate: date,
    gardenFamily: form.gardenFamily,
    lastUpdated: date,
    plantedDate: datePlanted(),
    isPlanted: form.isPlanted,
  }
}

const PlantForm = ({ showForm }) => {
  const [ plantForm, setPlantForm ] = useState(PlantFormSchema);
  const gardenFamiliesSorted = GardenFamilies.sort();
  
  const handleChange = (e) => {
    const formInput = e.target.name;
    const value = e.target.value;
    if (formInput in plantForm) {
      setPlantForm({...plantForm, [formInput]: value })
    }
  }
  const state = useGardenContext();
  console.log(state)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validatedForm = validateForm(plantForm);
    state.setGardenState({...state, plants: [...state.plants, validatedForm]})

    
    e.target.reset();
    setPlantForm(PlantFormSchema)
    console.log('validated ', validatedForm)
    console.log(state)
  }

  return (
    <>
    { showForm ? (
    <div className="p-2 bg-green-200 rounded m-3">
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        className="flex-col"
        >

        <label 
          className="flex p-3"
          htmlFor={PlantInputEnum.plantName} 
        >
          {PlantDisplayName.plantName}
          <input
            className="w-48 ml-2"
            name={PlantInputEnum.plantName}
            type='text'
            placeholder='plant name...'
            maxLength={30}
          />
        </label>

        <label
          className="flex p-3"
          htmlFor={PlantInputEnum.gardenFamily}
        >
          {PlantDisplayName.gardenFamily}
          <select
            className='ml-2'
            required
            name={PlantInputEnum.gardenFamily}
          >
          <option defaultValue> select an option</option>
            {gardenFamiliesSorted.map((i, idx) => (
              <option key={idx+i} value={i}>{i}</option>
              ))}
          </select>
        </label>

        <label
          className="flex p-3"
          htmlFor={PlantInputEnum.plantFamily}
        >
          {PlantDisplayName.plantFamily}
          <input
            className="w-48 ml-2"
            name={PlantInputEnum.plantFamily}
            type='text'
            placeholder='plant family'
            maxLength={30}
          />
        </label>

        <label
          className="flex p-3" 
          htmlFor={PlantInputEnum.daysToMaturity}
        >
          {PlantDisplayName.daysToMaturity}
          <input
            className="ml-2"
            name={PlantInputEnum.daysToMaturity}
            type='number'
            min={0}
            max={300}
            />
        </label>

        <input
          htmlFor={PlantInputEnum.recordingDate}
          className='invisible'
          name={PlantInputEnum.recordingDate}
          type='hidden'
          />

      <div className="border border-green-700 rounded-md text-center pb-2">
        <p className="text-center p-3">Is this being planted now ?</p> 

        <div className="flex justify-center">
          <div className="basis-1/4">
          <label htmlFor='plantedYes' className="block">Yes</label>
            <input 
              type="radio"
              id='plantedYes'
              name={PlantInputEnum.isPlanted}
              value={true}
              />
          </div>
       
          <div className="basis-1/4">
            <label htmlFor="plantedNo" className="block">No</label>
              <input 
                type="radio"
                id='plantedNo'
                name={PlantInputEnum.isPlanted}
                value={false}
                />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center p-3">
        <button 
          type="submit"
          className="basis-1/2 bg-gray-50 rounded p-2 active:bg-red-50"
          >Submit
        </button>

      </div>
      </form>
    </div>
  ) : null
  }
  </>
 )
}

export default PlantForm;
