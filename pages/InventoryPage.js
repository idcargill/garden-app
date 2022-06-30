import NavBar from "../sharedComponents/NavBar";
import { useGardenContext } from '../sharedComponents/Context/GardenProvider';



const InventoryPage = () => {
  const state = useGardenContext();

  const handleClick = () => {
    console.log(state)
  }

  return (
    <>
      <h1 onClick={handleClick}>Inventory</h1>
      <NavBar />
    </>
  )
}

export default InventoryPage;

