import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";
import Usgsheader from "./components/UsgsHeader/Usgsheader.jsx";
import Usgsfooter from "./components/UsgsFooter/Usgsfooter.jsx";

ReactDOM.render(<Usgsheader />, document.getElementById("usgsheader"));
ReactDOM.render(<App />, document.getElementById("sdc"));
ReactDOM.render(<Usgsfooter />, document.getElementById("usgsfooter"));
