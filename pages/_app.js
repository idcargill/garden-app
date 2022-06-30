import '../styles/globals.css'
import GardenContext from '../sharedComponents/Context/GardenProvider';

function MyApp({ Component, pageProps }) {
  
  return (
    <GardenContext>
      <Component {...pageProps} />
    </GardenContext>
  )
}

export default MyApp
