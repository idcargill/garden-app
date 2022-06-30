import NavBar from "../sharedComponents/NavBar";
import { useGardenContext } from '../sharedComponents/Context/GardenProvider';

const AboutPage = () => {
  const state = useGardenContext();

  const handleClick = () => {
    state.setGardenState({...state, kitten: 'Likes to eat'} )
    console.log(state.plants);
  }

  return (
    <>
      <h1 onClick={handleClick}>About</h1>
      <NavBar />
    </>
  )
}

export default AboutPage;
