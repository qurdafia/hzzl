import './App.css';
import { RegisterComponent } from './components/RegisterComponent';

const App = () => {

  return (
    <div className='App'>
      <div className='LogoArea'>
        Hazzl
      </div>
      <div className='MainWrapper'>
        <div className='TwoThirdBoxWrapper'>
          <div className='Title'>
            Be a member to Hzzl!
          </div>
          <p>
            Welcome to Hazzl! It's a platform for all your side-hustles.
          </p>
        </div>
        <div className='RegisterWrapper'>
          <RegisterComponent
          />
        </div>
      </div>
    </div>
  );
}

export default App;
