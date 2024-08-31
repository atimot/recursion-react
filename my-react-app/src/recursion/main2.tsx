import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const UserGreeting: React.FC = () => {
    return <h1>wellcome!</h1>
}

const GuestGreeting: React.FC = () => {
    return <h1>please login.</h1>
}

interface GreetingProps {
    isLoggedIn: boolean;
}
const Greeting: React.FC<GreetingProps> = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Greeting isLoggedIn={true} />
)