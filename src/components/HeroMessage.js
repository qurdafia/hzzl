import '../App.css';
import { HeroMessageImage } from './HeroMessageImage.js';

export const HeroMessage = () => {
    return (
        <div className='HeroMessage'>
            <div className='Title'>
                Be a member to Hzzl!
            </div>
            <p>
                Welcome to Hzzl! This is a platform for part-time jobs and all of your side-hustles. Be a member to
                explore all possibilities to generate extra income! Register now!
            </p>
            <HeroMessageImage />
        </div>
    )
}