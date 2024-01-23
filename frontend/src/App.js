import logo from './logo.svg';
import './App.css';
import './ClickEffect.css';
import { useState } from 'react';

function App() {
  const name = "VSCode"
  const myTags = ["개발", "유틸"];
  const [items, setItems] = useState([]);

  const addItems = () => {
    setItems([...items, <Item name={name} tags={myTags}/>]);
  }
  const cleanItems = () => {
    setItems([]);
  }

  return (
    <div className="App">
    <header>
      <h4>Install Manager</h4>
    </header>
    <button onClick={ addItems }>ADD</button>
    <button onClick={ cleanItems }>CLEAN</button>
    {items}
    </div>
  );
}

function Item({icon="logo192.png", name, tags, sha256}) {
  const runClickAnimation = (e) => {
      e.target.classList.add('clicked');
      setTimeout(() => {
          e.target.classList.remove('clicked');
      }, 500);
  }
  const downloadFile = (filename) => {
    console.log(filename)
  }

  return (
    <div className='row item-container drag-block'>
        <div className='icon-section'>
          <img src={icon}/>
        </div>
        <div className='column info-section'> 
          <p className='name'>{name}</p>
          <div className='tags row'>
            { tags.map((tag, index) => (
              <span>{tag}</span>
            )) }
          </div>
        </div>
        <div className='download-section'>
            <img src='download.svg'
              alt="download"
              className='animation-clickable'
              onClick={ (e)=>{
                runClickAnimation(e);
                downloadFile(name);
              } }
            />
        </div>
    </div>
  );
}


export default App;
