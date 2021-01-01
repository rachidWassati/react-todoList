import './App.css';
import Bonjour from './component/BonjourComponent';

function App(props) {
  return (
    <div>
      <Bonjour presentation= {props.tab[0]}/>
      <Bonjour presentation= {props.tab[1]}/>
      <Bonjour presentation= {props.tab[2]}/>
    </div>

  );
}

export default App;
