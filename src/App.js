import './App.css';
import Firstrow from './First-row';
import Row from './Row';
import Lastrow from './Lastrow';



function App() {
  return (
    <div className='container'>
      <Firstrow value='0'/>
      <Row value1='AC' value2='+/-' value3='%' value4='/'/>
      <Row value1='7' value2='8' value3='9' value4='x'/>
      <Row value1='4' value2='5' value3='6' value4='-'/>
      <Row value1='1' value2='2' value3='3' value4='+'/>
      <Lastrow value1='0' value2='.' value3='=' />
      
    </div>
  );
}

export default App;
