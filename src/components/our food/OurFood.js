import React from "react";
import './OurFood.css'

const OurFood = ()=>{
    return(
        <section className="our-food">
            <h2 className="text-center">Explore Our Foods</h2>
            <p className="text-center p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                <div className="Card">
                    <img src="http://demo.tutsflow.com/foodera/images/foods/01.jpg" />
                    <div className="Card-content">
                        <h5>Rainbow Vegetable Sandwich</h5>
                        <p>Time: 15 - 20 Minutes | Serves: 1</p>
                        <h4>$10.50 <span>$11.70</span></h4>
                        <button className="btn">Order Now</button>
                    </div>
                </div>
                </div>
                <div className="col-md-4">
                <div className="Card">
                    <img src="http://demo.tutsflow.com/foodera/images/foods/02.jpg" />
                    <div className="Card-content">
                        <h5>Rainbow Vegetable Sandwich</h5>
                        <p>Time: 15 - 20 Minutes | Serves: 1</p>
                        <h4>$10.50 <span>$11.70</span></h4>
                        <button className="btn">Order Now</button>
                    </div>
                </div>
                </div>

                <div className="col-md-4">
                <div className="Card">
                    <img src="http://demo.tutsflow.com/foodera/images/foods/03.jpg" />
                    <div className="Card-content">
                        <h5>Rainbow Vegetable Sandwich</h5>
                        <p>Time: 15 - 20 Minutes | Serves: 1</p>
                        <h4>$10.50 <span>$11.70</span></h4>
                        <button className="btn">Order Now</button>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </section>
    )
}
export default OurFood;