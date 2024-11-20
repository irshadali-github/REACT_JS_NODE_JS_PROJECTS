import React from "react";
import {Switch,Link,Route} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn";
function App(){
    return(
    <div className="main">
        <Header />

        <Footer/>
        
    </div>
        );
}
export default App;