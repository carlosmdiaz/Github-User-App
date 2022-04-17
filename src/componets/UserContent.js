import React from 'react'

function UserContent({info, dateSplit, months}) {
  return (
    <div className="content">

            <div className="profile">
                <div className="profile_frame">
                <img id = "avatar"src={info.avatar_url || "./assets/profilePlaceholder.png"} alt=""/>
                </div>
            </div>

            <div className="user">

                <div className="user_info">

                    <div className="name" >
                        <h3 id = "name">{info.name}</h3>
                        <div className="username">
                            <p id="login">{`@${info.login}`}</p>
                        </div>
                    </div>
                
                    <div className="date">
                        <p id="date">{`Joined ${months[dateSplit[1] - 1]} ${dateSplit[2]} ${dateSplit[0]}`}</p>
                    </div>
                </div>

                <div className="bio">
                    <p id = "bio">{info.bio || "Do not have a bio! :("}</p>
                </div>

                <div className="stats_container" id="statistics">
                    <div className="stats">
                        <p>Repos</p>
                        <p id="repo">{info.public_repos}</p>
                    </div>
                    <div className="stats">
                        <p>Followers</p>
                        <p id="followers">{info.followers}</p>
                    </div>
                    <div className="stats">
                        <p>Following</p>
                        <p id="following">{info.following}</p>
                    </div>
                </div>

                <div className="links_container">

                    <div className="left">
                        <div className="info">
                            <img src="./assets/icon-location.svg" alt=""/>
                            <p id="location">{info.location || "Not Avalible"}</p>
                        </div>
                        <div className="info">
                            <img src="./assets/icon-website.svg" alt=""/>
                            <a href="link" id = "blog">{info.html_url}</a>
                        </div>
                    </div>

                    <div className="right">
                        <div className="info">
                            <img src="./assets/icon-twitter.svg" alt=""/>
                            <p id ="twitter">{info.twitter_username || "Not Avalible"}</p>
                        </div>
                        <div className="info">
                            <img src="./assets/icon-company.svg" alt=""/>
                            <p id= "company">{info.company ? info.company : "Not Avalible"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UserContent