/**
 * Created by anchal on 25/3/17.
 */
import React from 'react'

const  About = () =>(
    <div>
        <section className="success" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>About</h2>
                        <hr className="star-light"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-lg-offset-2">
                        <h3>Get Organized</h3>
                        <p>Todo keeps you in control of everything you need to – well – do! Todo makes it easy for you
                            to enter and track to-dos and gives you the ability to visualize and prioritize
                            what you need to get done. Getting your work in line and in order has never been easier.</p>
                    </div>
                    <div className="col-lg-4">
                        <h3>Get in Sync </h3>
                        <p>Todo keeps you on task by helping you see what’s most important and
                            gives you tools (like built-in or custom alerts and reminders)
                            that help you plan how to get things done.
                            And if you’re part of a team, Todo’s collaboration features make it easier for you to win together.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

export default About;