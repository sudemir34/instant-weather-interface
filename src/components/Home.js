import { MainContext,useContext } from "../context"
import {useNavigate} from "react-router-dom"

const Home = () => {
    const {data,location,setLocation,searchLocation,save} = useContext(MainContext);
    const navigate = useNavigate();
   
  return (
    <>
 <div className='weather-app'>

    <div className='container'>
    <h1 className='brand'>{new Date().toLocaleTimeString('tr-TR')}</h1>
    <div>
    <div className='temp'>{data.main ? <p>{data.main.temp.toFixed()}°</p> : null} </div>
    <div className='city-time'>
    <h1 className='name'>{data.name}</h1>
    <small>
        <span className='time'>06:09</span>
        -
        <span className='date'>Mondey Sep 19</span>
    </small>
    </div>
    <div className='weather'>
    <img src="https://img.icons8.com/external-flat-gradient-andi-nur-abdillah/64/000000/external-sun-morning-routine-flat-gradient-flat-gradient-andi-nur-abdillah.png"
        className='icon'
        alt='icon'
    />
    <span className='condition'>Couldy</span>
    </div>
    </div>
    </div>
    <div className='panel'>
       
            <input type="text" className='search' placeholder='Search Location' value={location} onChange={event => setLocation(event.target.value)} />
            <button type='submit' className='submit' onClick={searchLocation} >
            <img onClick={save} src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/>
            </button>
        <ul className='cities'>
        <li className='city'>dfdfgdfg</li> 
        </ul>
        <ul className='details'>
        <h1 className="detailsPage">Weather Details</h1>
            <li>
            <span>Cloudy</span>
            <span>89%</span>
            </li>
            <li>
                <span>Humidity</span>
                <span className='humidity'>64%</span>
            </li>
            <li>   
                <span>Wind</span>
                <span className='wind'>8km/h</span>

            </li>
           
        </ul>
      </div>
    
      </div>
      <button onClick={() => navigate(-1)}>Back to honme</button>
    </> 
  )
}

export default Home
