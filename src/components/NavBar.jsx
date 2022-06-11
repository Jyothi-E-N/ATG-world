import React from 'react'
import { Link } from 'react-router-dom';
import dropdown from "../images/baseline-dropdown.png";
import {useAuth} from "../contexts/AuthContext.js";
import joinGroup from "../images/baseline_follow_group.png";
import leaveGroup from "../images/baseline_leave_group.png";

const NavBar = () => {
    const {loggedIn} = useAuth();
    return (
        <div className="navigation d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-row justify-content-between align-items-between routes_div">
                <Link to={"/"} className="route_visited">
                    All Posts(32)
                </Link>
                <Link to={"/article"} className="route_not_visited">
                    Article
                </Link>
                <Link to={"/event"} className="route_not_visited">
                    Event
                </Link>
                <Link to={"/education"} className="route_not_visited">
                    Education
                </Link>
                <Link to={"/job"} className="route_not_visited">
                    Job
                </Link>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <button className="write_post btn btn-default">
                    Write a Post
                    <img src={dropdown} className="img-fluid write_post_icon" />
                </button>
                {!loggedIn && (
                    <button className="join_group btn btn-default">
                        <img
                            src={joinGroup}
                            className="img-fluid join_group_icon"
                        />
                        Join Group
                    </button>
                )}
                {loggedIn && (
                    <button className="leave_group btn btn-default">
                        <img
                            src={leaveGroup}
                            className="img-fluid leave_group_icon"
                        />
                        Join Group
                    </button>
                )}
            </div>
        </div>
    );
}

export default NavBar