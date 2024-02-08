import Ash from '../images/Ash.png';
import Clear from '../images/Clear.png';
import Clouds from '../images/Clouds.png';
import Drizzle from '../images/Drizzle.png';
import Dust from '../images/Dust.png';
import Fog from '../images/Fog.png';
import Haze from '../images/Haze.png';
import Mist from '../images/Mist.png';
import Rain from '../images/Rain.png';
import Sand from '../images/Sand.png';
import Smoke from '../images/Smoke.png';
import Snow from '../images/Snow.png';
import Squall from '../images/Squall.png';
import Thunderstorm from '../images/Thunderstorm.png';
import Tornado from '../images/Tornado.png';


const WeatherImages = ({ info }) => {

    let image;

    const images = () => {
        switch (info.weather[0].main) {
            case 'Ash':
                image = Ash;
                break;
            case 'Clear':
                image = Clear;
                break;
            case 'Clouds':
                image = Clouds;
                break;
            case 'Drizzle':
                image = Drizzle;
                break;
            case 'Dust':
                image = Dust;
                break;
            case 'Fog':
                image = Fog;
                break;
            case 'Haze':
                image = Haze;
                break;
            case 'Mist':
                image = Mist;
                break;
            case 'Rain':
                image = Rain;
                break;
            case 'Sand':
                image = Sand;
                break;
            case 'Smoke':
                image = Smoke;
                break;
            case 'Snow':
                image = Snow;
                break;
            case 'Squall':
                image = Squall;
                break;
            case 'Thunderstorm':
                image = Thunderstorm;
                break;
            case 'Tornado':
                image = Tornado;
                break;
        }
    }

    images();

    return (
        <div className='imageContainer'>
            <img className='image1' src={image} alt={info.weather[0].main}></img>
            <img className='image2' src={image} alt={info.weather[0].main}></img>
            <img className='image3' src={image} alt={info.weather[0].main}></img>
            <img className='image4' src={image} alt={info.weather[0].main}></img>
            <img className='image5' src={image} alt={info.weather[0].main}></img>
            <img className='image6' src={image} alt={info.weather[0].main}></img>
            <img className='image7' src={image} alt={info.weather[0].main}></img>
            <img className='image8' src={image} alt={info.weather[0].main}></img>
            <img className='image9' src={image} alt={info.weather[0].main}></img>
            <img className='image10' src={image} alt={info.weather[0].main}></img>
        </div>
    )
}

export default WeatherImages;