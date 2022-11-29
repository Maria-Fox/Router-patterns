import logo from './logo.svg';
import './App.css';
import NavRoutes from './NavRouter';

function App({colors}) {
  // console.log(colors);

  return (
    <div className="App">
      <h1>Color Factory</h1>
      <NavRoutes colors = {colors}/>
    </div>
  );
}


App.defaultProps = {colors:   [
  "red", "yellow", "green", "blue"
]};

export default App;
