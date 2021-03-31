
import './App.css';
import ObjList from './components/ObjList';
import ObjTable from './components/ObjTable';

import {useState} from 'react'
import { Button, ButtonGroup } from '@material-ui/core';
import Counter from './components/Counter';
import Timer from './components/Timer';

function App() {
  const [isC1, setC1] = useState(0);
  const [isC2, setC2] = useState(0);
  const [isC3, setC3] = useState(0);
  const [isC4, setC4] = useState(0);
  return (
    <div className="App" style={{background:"#ebebeb", padding:"0.5rem"}}>
    <ButtonGroup>
      <Button onClick={() => setC1(!isC1)} variant="contained" color="primary">LIST</Button>
      <Button onClick={() => setC2(!isC2)} variant="contained" color="secondary">TABLE</Button>
      <Button onClick={() => setC3(!isC3)} variant="contained" color="primary">COUNTER</Button>
      <Button onClick={() => setC4(!isC4)} variant="contained" color="secondary">TIMER</Button>
    </ButtonGroup>
      {
        isC1 ? <ObjList style={{background:'red'}}/> : ''
      }
      {
        isC2 ? <ObjTable />: ''
      }
      {
        isC3 ? <Counter style={{background:'red'}}/> : ''
      }
      {
        isC4 ? <Timer />: ''
      }
      <br/>
    </div>
  );
}

export default App;
