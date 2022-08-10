import React from 'react';

import Taskboard from "./pages/Taskboard";

import './App.scss';

function App() {

    return (
        <>
            {/*<header style={{background: "#43a047", padding: "0.5rem"}}>Header</header>*/}
            {/*<section style={{borderBottom: "1px solid #43a047", padding: "0.5rem", marginBottom: "1rem"}}>Some menu here</section>*/}
            <Taskboard />
        </>
    );
}

export default App;
