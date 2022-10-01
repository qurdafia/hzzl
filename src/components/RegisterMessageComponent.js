
export const RegisterMessage = (props) => {
    return (
        <div className="Welcome">
            <p>
                Hello there!
                {props.fName || props.lName ? ' Welcome to Hzzl, ' + props.fName + ' ' + props.lName + '. Good day.': '' }
            
                {props.email ? ' Your email is ' + props.email + '.': ''}
            
                { props.password ? ' Thank you.' : '' }
            </p>
            <p>
                { props.password === props.confirmPw ? '' : 'Oops! Your password did not match!'}
            </p>
            <p>
                {
                    props.fName && props.lName && props.email && ((props.password === props.confirmPw) && !(props.password === '' && props.confirmPw === '')) ? 'You are good to go!' : 'Please provide all the required details to register.'
                }
            </p>
      </div>
    )
}