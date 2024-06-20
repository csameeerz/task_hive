import { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom';
import './TaskHiveApp.css';

export default function TaskHiveApp() {
    return (
        <div className="TaskHive">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function LoginComponent() {
    const [username, setUsername] = useState('csameeerz');
    const [password, setPassword] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailedMessage, setShowFailedMessage] = useState(false);
    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleLogin() {
        if (username === 'csameeerz' && password === '978346') {
            navigate(`/welcome/${username}`);
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
                <h1>Login</h1>
                {showSuccessMessage && <div className="successMessage">Authentication Successful</div>}
                {showFailedMessage && <div className="failedMessage">Authentication Failed</div>}
                <div>
                    <label> Username: </label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label> Password: </label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
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
    const {username} = useParams();

    return (
        <div className="welcome">
            <h1>Welcome, {username}</h1>
        </div>
    );
}

function ErrorComponent() {
    return (
        <div className="error">
            <h1>404 - Not Found</h1>
        </div>
    );
}