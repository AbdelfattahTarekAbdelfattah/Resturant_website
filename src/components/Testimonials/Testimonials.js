import React from "react";
import './Testimonials.css';
import img from './images/slideimd.png'

const Testimonials = ()=>{
    return(
        <section className="Testimonials">
        <h1 className="text-center text-light">Testimonials</h1>

            <div className="container mt-5">
                <div className="col-md-12">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={img} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={img} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={img} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonials;