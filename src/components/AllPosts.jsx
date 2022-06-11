import React from "react";
import article from "../images/article_img.png";
import education from "../images/education_img.png";
import meetup from "../images/meetup_img.png";
import { Location, Post } from ".";
import article_profile from "../images/article_profile.png";
import education_profile from "../images/education_profile.png";
import meetup_profile from "../images/meetup_profile.png";
import job_profile from "../images/job_profile.png";
import { useAuth } from "../contexts/AuthContext";
import dropdown from "../images/baseline-dropdown.png";
import sm_edit from "../images/edit_sm.png";

const AllPosts = () => {
    const { screenSize , signUp, signIn, loggedIn} = useAuth();
    return (
        <div className="all_posts d-flex flex-row justify-content-between">
            <div className="posts_container">
                {/* Article post */}
                {screenSize <= 800 && (
                    <div className="d-flex flex-row justify-content-between sm_postHeader">
                        <p className="sm_post_header mb-0">Posts(368)</p>
                        <button className="btn btn-default sm_post_button">
                            Filter: All
                            <img
                                src={dropdown}
                                className=" img-fluid"
                            />
                        </button>
                    </div>
                )}

                {(screenSize<=800 && !signUp && !signIn) && (
                    <div className="sm_edit">
                        <img src={sm_edit} className="img_fluid sm_edit_img"/>
                    </div>
                )}

                <Post
                    type="✍️ Article"
                    bg_img={article}
                    title="What if famous brands had regular fonts? Meet RegulaBrands!"
                    desc="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                    profile_img={article_profile}
                    name="Sarthak Kamra"
                    views={1.4}
                />
                {/* Education post */}
                <Post
                    type="🔬️ Education"
                    bg_img={education}
                    title="Tax Benefits for Investment under National Pension Scheme launched by Government"
                    desc="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                    profile_img={education_profile}
                    name="Sarah West"
                    views={1.4}
                />
                {/* Meetup post */}
                <Post
                    type="🗓️ Meetup"
                    bg_img={meetup}
                    title="Finance & Investment Elite Social Mixer @Lujiazui"
                    profile_img={meetup_profile}
                    name="Ronal Jones"
                    time="Fri, 12 Oct, 2018"
                    location="Ahmedabad, India"
                    views={1.4}
                />
                {/* job post */}
                <Post
                    type="💼️ Job"
                    title="Software Developer"
                    profile_img={job_profile}
                    name="Joseph Gray"
                    company="Innovaccer Analytics Private Ltd."
                    location="Noida, India"
                    views={1.4}
                />
            </div>
            {(screenSize>800) && (
                <Location/>
            )}
            
        </div>
    );
};

export default AllPosts;
