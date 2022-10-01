import './App.css';
import { RegisterComponent } from './components/RegisterComponent';
import { HeroMessage } from './components/HeroMessage';
import { HzzlLogo } from './components/HzzlLogo';
import { Footer } from './components/Footer';

const App = () => {

  return (
    <div className='App'>
      <div className='LogoArea'>
        <HzzlLogo />
      </div>
      <div className='MainWrapper'>
        <div className='TwoThirdBoxWrapper'>
          <HeroMessage />
        </div>
        <div className='RegisterWrapper'>
          <RegisterComponent
          />
        </div>
      </div>
      <div className='FooterArea'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
