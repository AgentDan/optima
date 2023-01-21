import React from 'react'
import {Link, useParams} from "react-router-dom"
import {newState} from "../state"
import "./SinglePage.element.css"
import Render3d_new from "../Render3d_new";
import Render3d from "../Render3d";

const SinglePage = () => {

    const numParam = useParams()

    return (
        <div>
            <div className="singleTop">
                <h2>SinglePage</h2>

                <div>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                             className="bi bi-arrow-left text-danger" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <a className="text-danger font-weight-bold">back</a>
                    </Link>
                </div>

            </div>

            <div className="singleRender3d">
                <div className="single">
                    {
                        newState.map(function (car, id) {
                                if (numParam.id === car.id) {

                                    return (
                                        <div className="col-lg-12" key={id}>
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
                                                        <a>{car.car2}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                            }
                        )
                    }
                </div>
                <div className="render3d">
                    <Render3d_new num={numParam.id}/>
                    {/*<Render3d_new/>*/}
                    {/*<Render3d/>*/}
                </div>
            </div>

        </div>
    );
};

export default SinglePage;