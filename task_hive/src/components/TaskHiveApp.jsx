import { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom';
import './TaskHiveApp.css';

export default function TaskHiveApp() {
    return (
        <div className="TaskHive">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
                    <Route path='/tasks' element={<ShowTasksComponent/>}/>
                    <Route path='/logout' element={<LogoutComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                </Routes>
                <FooterComponent />
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
            <div>
                <Link to="/tasks"> Your Tasks </Link>
            </div>
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

function ShowTasksComponent() {
    const today = new Date();
    const targetDateFromToday = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay());
    const tasks = [
                    {id: 1, description: "Dentist Appointment", completed: false, targetDate: targetDateFromToday},
                    {id: 2, description: "Play Badminton", completed: false, targetDate: targetDateFromToday},
                    {id: 3, description: "Go to Cubbon Park", completed: false, targetDate: targetDateFromToday}
    ];

    return (
        <div className="container">
            <h1>Your Tasks</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(
                                task => (
                                    <tr key={task.id}>
                                        <td>{task.id}</td>
                                        <td>{task.description}</td>
                                        <td>{task.targetDate.toDateString()}</td>
                                        <td>{task.completed.toString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function HeaderComponent() {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="www.google.com">Task Hive</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link" to="/welcome/csameeerz">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/tasks">Tasks</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

function FooterComponent() {
    return (
        <footer className="footer">
            <div className="container">
                <hr />Footer
            </div>
        </footer>
    );
}

function LogoutComponent() {
    return (
        <div className="logout">
            <h1>Logged out</h1>
        </div>
    );
}
