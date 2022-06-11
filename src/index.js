import ReactDOM from 'react-dom';
import App from "./App";
import {AuthProvider} from "./contexts/AuthContext";
import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";

ReactDOM.render(<AuthProvider><Router><App/></Router></AuthProvider>, document.getElementById('root'));