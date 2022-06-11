import React from "react";
import article_img from "../images/article_img.png";
import moreBtn from "../images/baseline-more-btn.png";
import today from "../images/baseline-today.png";
import location_icon from "../images/location.png";
import visibility from "../images/visibility.png";
import work from "../images/outline-work.png";
import share from "../images/baseline-share.png";

const Post = ({
    type,
    bg_img = {},
    title,
    desc = "",
    profile_img,
    name,
    company = "",
    time = "",
    location = "",
    views,
}) => {
    return (
        <div className="post">
            <div className="card post_container">
                {console.log(bg_img.length)}
                {bg_img.length > 0 && (
                    <img
                        className="card-img-top img-fluid post_img"
                        src={bg_img}
                        alt="Card image cap post_img"
                    />
                )}

                <div className="card-body post_body">
                    <p className="post_type">{type}</p>

                    {/* <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a> */}
                    <div className="title_more_div d-flex flex-row justify-content-between">
                        <h5 className="post_title m-0">{title}</h5>
                        <img src={moreBtn} className="img-fluid more_btn" />
                    </div>
                    {desc.length > 0 && <p className="post_desc">{desc}</p>}
                    {type == "🗓️ Meetup" && (
                        <div className="meetup_desc d-flex flex-row align-items-center">
                            <p className="today_text">
                                <img src={today} className="today_icon" />
                                {time}
                            </p>
                            <p className="location_text">
                                <img
                                    src={location_icon}
                                    className="location_icon"
                                />
                                {location}
                            </p>
                        </div>
                    )}
                    {type == "🗓️ Meetup" && (
                        <button className="btn btn-block w-100 meetup_button">
                            Visit Website
                        </button>
                    )}
                    {type == "💼️ Job" && (
                        <div className="job_desc d-flex flex-row align-items-center">
                            <p className="today_text">
                                <img src={work} className="today_icon" />
                                {company}
                            </p>
                            <p className="location_text">
                                <img
                                    src={location_icon}
                                    className="location_icon"
                                />
                                {location}
                            </p>
                        </div>
                    )}
                    {type == "💼️ Job" && (
                        <button className="btn btn-block w-100 job_button">
                            Apply on Timesjobs
                        </button>
                    )}
                    <div className="postedBy d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                            <img
                                src={profile_img}
                                className="postedBy_profile"
                            />
                            <h5 className="postedBy_name m-0">{name}</h5>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                            <p className="visiblity_para mb-0">
                                <img src={visibility} className="visibility" />
                                {views + " views"}
                            </p>
                            <button className="btn btn-default share_button">
                                <img src={share} className="share_btn" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
