/**
 * Created by anchal on 25/3/17.
 */
import React from 'react'
import img1 from './profile.png'
const Home = () =>(
    <div>

        <header>
            <div className="container" id="maincontent" tabIndex="-1">
                <div className="row">
                    <div className="col-lg-12">
                        <img className="img-responsive" src={img1} alt=""/>
                        <div className="intro-text">
                            <h1 className="name">To Do List</h1>
                            <hr className="star-light"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    </div>
);

export default Home;