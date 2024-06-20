import { useState } from 'react';
import './TaskHiveApp.css';

export default function TaskHiveApp() {
    return (
        <div className="TaskHive">
            <LoginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    );
}

function LoginComponent() {
    const [username, setUsername] = useState('csameeerz');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailedMessage, setShowFailedMessage] = useState(false);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleLogin() {
        if (username === 'csameeerz' && password === '978346') {
            setShowFailedMessage(false);
            setShowSuccessMessage(true);
        } else {
            setShowFailedMessage(true);
            setShowSuccessMessage(false);
        }
    }

    return (
        <div className="login">
            <div className="loginForm">
                {showSuccessMessage && <div className="successMessage">Authentication Successful</div>}
                {showFailedMessage && <div className="failedMessage">Authentication Failed</div>}
                <div>
                    <label> Username: </label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label> Password: </label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

function WelcomeComponent() {
    return (
        <div className="welcome">
            Welcome Component
        </div>
    );
}