import React from 'react';
import './Greeting.css';

function UserGreeting(props) {
    return <h4>Welcome back!</h4>;
}

function GuestGreeting(props) {
    return <h4>Please sign up.</h4>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    // if (isLoggedIn) {
    //     return <UserGreeting />;
    // } else {
    //     return <GuestGreeting />;
    // } 
    return (
        <>
            {isLoggedIn === true && <UserGreeting />}
            {isLoggedIn === false && <GuestGreeting />} 
        </>
    )
    
}

function WelcomeBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className='warning'>
            Nice to see you again!
        </div>
    )    

}

function Page(props) {
    // const isLoggedIn = props.isLoggedIn;
    
    // return (
    //     <>
    //         {isLoggedIn === true && <WelcomeBanner warn={props.isLoggedIn} />}
    //         {isLoggedIn === false && <WelcomeBanner warn={props.isLoggedIn} />} 
    //     </>
    // )

    return (
        <WelcomeBanner warn={props.isLoggedIn} />
    )
    
}

// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {showWarning: true};
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }

//     handleToggleClick() {
//         this.setState(state => ({showWarning: !this.state.showWarning}))
//     }

//     render() {
//         return (
//             <div>
//                 <WelcomeBanner warn={this.state.showWarning} /> 
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button>
//             </div>
//         )
//     }
// }



//create components

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn:false};
    }

    //set state for button 
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
    
    //check which components is click, then run the function handle
        // if (isLoggedIn) {
        //     button = <LogoutButton onClick={this.handleLogoutClick} />;
        // } else {
        //     button = <LoginButton onClick={this.handleLoginClick} />;
        // }

        isLoggedIn   
            ? button = <LogoutButton onClick={this.handleLogoutClick} />
            : button = <LoginButton onClick={this.handleLoginClick} />;
        

                 
        // {isLoggedIn 
        // ? (button = <LogoutButton onClick={this.handleLogoutClick} />)
        // : (button = <LoginButton onClick={this.handleLoginClick} />})
        // } 
        
        


    //display message and button according to the isLoggedIn status
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                <Page isLoggedIn={isLoggedIn}></Page>
            </div>
        )
    }

}


export default LoginControl;