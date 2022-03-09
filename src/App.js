import React, {useEffect} from 'react';
import {AuthForm} from './pages/Auth/Auth';
import {LoginForm} from './components/Forms/LoginForm';
import {Route, Routes} from 'react-router-dom';
import {Main} from './pages/Main/Main';
import {Processes} from './pages/Processes/Processes';
import {User} from './pages/User/User';
import {SignUpForm} from './components/Forms/SignUpForm';
import Private from './hoc/Private';

function App() {
    useEffect(() => {
        const token = localStorage.getItem("token");
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<AuthForm/>}>
                    <Route path="login" element={<LoginForm/>}/>
                    <Route path="signup" element={<SignUpForm/>}/>
                </Route>
                    <Route path="/main/*" element={<Private Component={<Main/>}/>}>
                        <Route path="user" element={<Private Component={<User/>}/>}/>
                        <Route path="processes" element={<Private Component={<Processes/>}/>}/>
                    </Route>
            </Routes>
        </div>
    );
}

export default App;
