import React from "react";
import './Navs.css';

const Navs = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img src="http://demo.tutsflow.com/foodera/images/logo.png"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span classNameName="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Exploare Food</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">FAQ</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    )
}
export default Navs;