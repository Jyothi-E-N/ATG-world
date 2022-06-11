import React, {useState} from "react";
import location_img from "../images/location.png";
import edit_img from "../images/edit.png";
import error from "../images/baseline-error.png";
import { useAuth } from "../contexts/AuthContext";
import clear from "../images/baseline-clear.png";
import thumb from "../images/thumb.png";
import leisure from "../images/leisure.png";
import activism from "../images/activism.png";
import mba from "../images/mba.png";
import philosophy from "../images/thumb.png";
import { Link } from "react-router-dom";


const Location = () => {
    const [leisureGroup, setLeisureGroup] = useState(false);
    const [activismGroup, setActivismGroup] = useState(false);
    const [mbaGroup, setMbaGroup] = useState(false);
    const [philosophyGroup, setPhilosophyGroup] = useState(false);

    const { loggedIn } = useAuth();

    return (
        <div className="mt-4 d-flex flex-column location">
            {!loggedIn && (
                <div className="d-flex flex-row justify-content-between align-items-center w-100">
                    <p className="location_para m-0">
                        <img
                            src={location_img}
                            className="img-fluid location_icon"
                        />
                        Noida, India
                    </p>
                    <img src={edit_img} className="img-fluid" />
                </div>
            )}
            {loggedIn && (
                <div className="d-flex flex-row justify-content-between align-items-center w-100">
                    <div className="input-group d-flex flex-row justify-content-around align-items-center px-3">
                        <span className="input-group-addon">
                            <img src={location_img} alt="location-icon" />
                        </span>
                        <input
                            id="location"
                            type="text"
                            className="form-control outline-0 border-0"
                            name="locationsSearch"
                            placeholder="|Enter your location"
                        />
                    </div>
                    <img src={clear} className="img-fluid" />
                </div>
            )}

            <hr className="location_break_line" />
            <div className="d-flex flex-row align-items-center mb-5">
                <img src={error} className="error_icon img-fluid" />
                <p className="error_text m-0">
                    Your location will help us serve better and extend a
                    personalised experience.
                </p>
            </div>
            {loggedIn && (
                <div className="d-flex flex-column justify-content-center align-items-center w-100 mb-5">
                    <p className="recom_groups mr-3">
                        <img src={thumb} className="thumb_icon" />
                        RECOMMENDED GROUPS
                    </p>
                    {/* leisure */}
                    <div className="d-flex flex-row justify-content-between align-items-center w-100 follow_div">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <img
                                src={leisure}
                                className="img-fluid follow_img"
                            />
                            <p className="m-0 follow_names">Leisure</p>
                        </div>
                        {!leisureGroup && (
                            <button
                                className="btn btn-default follow_button"
                                onClick={() => setLeisureGroup(!leisureGroup)}
                            >
                                Follow
                            </button>
                        )}
                        {leisureGroup && (
                            <button
                                className="btn btn-default followed_button"
                                onClick={() => setLeisureGroup(!leisureGroup)}
                            >
                                Followed
                            </button>
                        )}
                    </div>
                    {/* Activism */}
                    <div className="d-flex flex-row justify-content-between align-items-center w-100 follow_div">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <img
                                src={activism}
                                className="img-fluid follow_img"
                            />
                            <p className="m-0 follow_names">Activism</p>
                        </div>
                        {!activismGroup && (
                            <button
                                className="btn btn-default follow_button"
                                onClick={() => setActivismGroup(!activismGroup)}
                            >
                                Follow
                            </button>
                        )}
                        {activismGroup && (
                            <button
                                className="btn btn-default followed_button"
                                onClick={() => setActivismGroup(!activismGroup)}
                            >
                                Followed
                            </button>
                        )}
                    </div>
                    {/* mba */}
                    <div className="d-flex flex-row justify-content-between align-items-center w-100 follow_div">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <img src={mba} className="img-fluid follow_img" />
                            <p className="m-0 follow_names">MBA</p>
                        </div>
                        {!mbaGroup && (
                            <button
                                className="btn btn-default follow_button"
                                onClick={() => setMbaGroup(!mbaGroup)}
                            >
                                Follow
                            </button>
                        )}
                        {mbaGroup && (
                            <button
                                className="btn btn-default followed_button"
                                onClick={() => setMbaGroup(!mbaGroup)}
                            >
                                Followed
                            </button>
                        )}
                    </div>
                    {/* Philosophy */}
                    <div className="d-flex flex-row justify-content-between align-items-center w-100 follow_div">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <img
                                src={philosophy}
                                className="img-fluid follow_img"
                            />
                            <p className="m-0 follow_names">Philosophy</p>
                        </div>
                        {!philosophyGroup && (
                            <button
                                className="btn btn-default follow_button"
                                onClick={() =>
                                    setPhilosophyGroup(!philosophyGroup)
                                }
                            >
                                Follow
                            </button>
                        )}
                        {philosophyGroup && (
                            <button
                                className="btn btn-default followed_button"
                                onClick={() =>
                                    setPhilosophyGroup(!philosophyGroup)
                                }
                            >
                                Followed
                            </button>
                        )}
                    </div>
                </div>
            )}
            <Link to="/" className="see_more_link mb-3">See More...</Link>
        </div>
    );
};

export default Location;