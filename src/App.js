import './App.css';
import { useEffect, useState } from 'react';
import Images from './components/Images';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImages(data);
      })
  }, [])

  return (

    <div className="App">
      <Images data={images}/>
    </div>
  );
}

export default App;
