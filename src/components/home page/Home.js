import React, { Fragment } from "react";
import Header from "./Header";
import './Home.css';

const Home = ()=>{
    return(
        <Fragment>
             <Header />
        <section className="cownter">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>1287+</h2>
                        <p>SAVINGS</p>
                    </div>
                    <div className="col-md-3">
                        <h2>5786+</h2>
                        <p>PHOTOS</p>
                    </div>
                    <div className="col-md-3">
                    <h2>1440+</h2>
                    <p>ROCKETS</p>
                    </div>
                    <div className="col-md-3">
                        <h2>7110+</h2>
                        <p>GLOBES</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="info">
            <div className="container">
                <div className="row align-items-center">

                <div className="col-md-6">
                <img src="http://demo.tutsflow.com/foodera/images/features/1.png" />
            </div>

                <div className="col-md-6">
                    <h2>We pride ourselves on making real food from the best ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <button className="btn">Learn More</button>
                </div>
                </div>
            </div>
        </section>
        </Fragment>
    )
}
export default Home;