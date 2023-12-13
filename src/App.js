// import logo from './logo.svg';
import './App.css';
import { icon as Iconblob, directSvg } from './IonsEnum';

function App() {

  return (
    <div className="App">
      <div>
        <p>App rendering behaviour</p>
        <svg>
          <use xlinkHref={Iconblob.circle?.url} href={Iconblob.circle?.url} />
        </svg>
      </div>
      <div>
        <p>Without external endpoint</p>
        <svg width="100" height="100" viewBox='0 0 100 100'>
          <use xlinkHref={directSvg.circle.url} href={directSvg.circle.url} />
        </svg>
      </div>
    </div>
  );
}

export default App;
