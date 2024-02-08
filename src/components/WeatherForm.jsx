import data from '../data/cityList.json';
import { useState } from 'react';
const WeatherForm = ({ get }) => {

  const [inputText, setInputText] = useState('');
  const [inputId, setInputId] = useState('');
  const [visible, setVisible] = useState(false);

  const selectingCity = (e) => {
    let lowerText = e.target.value.toLowerCase();
    setInputText(lowerText);
  }

  const filteredData = data.filter((item) => {
    if (inputText !== '') {
      return item.name.toLowerCase().includes(inputText);
    } else {
      return item;
    }
  })

  const settingCity = (e) => {
    let inputData = e.target.textContent.split(/,\s/);
    let index = data.findIndex(item => {
      if (item.name === inputData[0] && item.country === inputData[1])
        return item;
    });
    setInputText(e.target.textContent);
    setInputId(data[index].id);
    setVisible(false);
  }

  const currentWeather = () => {
    if (inputText) {
      let selected = data.find(city => city.id === inputId);
      get(selected);
    }
  }


  return (
    <div className='cityToChoose'>
      <input key='1' onClick={() => setVisible(true)} onChange={selectingCity} placeholder='Enter your city...' type='text' value={inputText}></input>
      {visible ?
        <ul className='autocomplete'>
          {filteredData.map(item => <li onClick={settingCity} key={item.id}>{item.name}, {item.country}</li>)}
        </ul>
        :
        null
      }
      <div className='button' onClick={currentWeather}>
        <p>Check</p>
      </div>
    </div>
  )
}

export default WeatherForm;