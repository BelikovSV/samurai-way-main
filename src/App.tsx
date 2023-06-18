import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

const Technologies = () => {
    return (
        <div>
            <div>one div</div>
            <div className="App">
                <ul>
                    <li>css</li>
                    <li>html</li>
                    <li>js</li>
                    <li>react</li>
                </ul>
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div>
            <a href={"http://localhost:3001/"}>Home</a>
            <a href={"http://localhost:3001/"}>News Feed</a>
            <a href={"http://localhost:3001/"}>Messages</a>
        </div>
    )
}

export default App;
