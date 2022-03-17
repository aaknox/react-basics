import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Profile from './Profile';
import Reminder from './Reminder';
import Pokemon from './Pokemon';

//JSX = JavaScript XML = js syntax that allows us to put html into our js code
//TSX = same with TS
function App() {
  return (
    <div className="App">
      <Welcome />
      <Profile workTitle="Trainer"/>
      <Reminder />
      <Pokemon />
    </div>
  );
}

export default App;
