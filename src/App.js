import './App.css';
import { RegisterComponent } from './components/RegisterComponent';

const App = () => {

  return (
    <div className="App">
      <nav>
        Logo
      </nav>
      <div className="Title">
        Be a member to Hazzl!
      </div>
      <RegisterComponent />
      <footer>
        Footer here..
      </footer>
    </div>
  );
}

export default App;
