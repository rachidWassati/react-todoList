import './App.css';
import Bonjour from './component/BonjourComponent';

function App(props) {

  return (
    <div>
        {props.tab.map((p) => {
            return <Bonjour presentation = {p} key = {p.id}/>
        })}
    </div>

  );
}

export default App;
