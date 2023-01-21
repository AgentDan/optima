import React from 'react'
import {newState} from "../state"
import "./MainPage.element.css"
import {Link} from "react-router-dom"

const MainPage = () => {

    return (
        <div>
            <div className="featured">
                <div className="container">

                    <div className="row">
                        <div className="col">
                            <div className="section_title_container text-center">
                                <div className="section_subtitle">the best doors</div>
                                <div className="section_title"><h1>Optima Porte</h1></div>
                            </div>
                        </div>
                    </div>
                    <div className="row featured_row">
                        {
                            newState.map(function (car, id) {
                                    return (
                                        <div className="col-lg-4" key={id}>
                                            <div className="listing">
                                                <div className="listing_image">
                                                    <div className="listing_image_container">
                                                        <img src={car.img} alt={''}/>
                                                    </div>
                                                    <div className="tag_price listing_price">{car.user}</div>
                                                </div>
                                                <div className="listing_content">
                                                    <div
                                                        className="prop_location listing_location d-flex flex-row align-items-start justify-content-start">
                                                        <Link to={`single/${car.id}`}>
                                                            <h6>{car.car1}</h6><br/>
                                                            <h6>{car.car2}</h6><br/>

                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                            )
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default MainPage;