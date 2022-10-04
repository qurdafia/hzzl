import '../App.css';
import { TickMark } from './TickMark';
import { ArrowRight } from './ArrowRight';

export const RegisterMessage = (props) => {
    return (
        <div className="Welcome">
            <div className='Title'>
                <p>Be a Hzzlr!</p>
            </div>
            <p>{props.fName ?<span id="crossed">Provide a First Name <TickMark /> </span>  : <span id="provide">Provide a First Name <ArrowRight /> </span>}</p>
            <p>{props.lName ?<span id="crossed">Provide a Last Name <TickMark /> </span>  : <span id="provide">Provide a Last Name <ArrowRight /> </span>}</p>
            <p>{props.email ?<span id="crossed">Provide an Email <TickMark /> </span>  : <span id="provide">Provide an Email <ArrowRight /> </span>}</p>
            <p>{props.password ?<span id="crossed">Provide a Password <TickMark /> </span>  : <span id="provide">Provide a Password <ArrowRight /> </span>}</p>
            <p>{props.confirmPw ?<span id="crossed">Confirm Password <TickMark /> </span>  : <span id="provide">Confirm Password <ArrowRight /> </span>}</p>
            
            <p>
                {
                    props.fName && props.lName && props.email 
                        && ((props.password === props.confirmPw) 
                        && !(props.password === '' && props.confirmPw === '')) 
                    ? <span id="goodtogo">You are good to go!</span> 
                    : props.password === props.confirmPw
                        ? <span id="separator">xx</span>
                        : <span id="notmatched">Oops! Password not matched!</span>
                }
            </p>
            
      </div>
    )
}