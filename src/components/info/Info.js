import React from "react";
import './Info.css';

const Info = ()=>{
    return(
        <section className="Some-Photo">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2>We make everything by hand with the best possible ingredients.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                    <button className="btn">Learn More</button>
                </div>
                <div className="col-md-6">
                    <img src="http://demo.tutsflow.com/foodera/images/features/2.png" />
                </div>
            </div>
        </div>
        </section>
    )
}
export default Info;