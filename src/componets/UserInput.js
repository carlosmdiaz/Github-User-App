import React from 'react'

function UserInput({inputRef, setUser}) {
  return (
    <>
        <div className="header">
            <h4>devfinder</h4>
            <div className="darkMode" >
                <p id="modeText">DARK</p>
                <img src="./assets/icon-moon.svg" id = "dark_btn"alt=""/>
            </div>        
        </div>

        <div className="search" id="search_container">
            <img src="./assets/icon-search.svg" alt=""/>
            <input ref={inputRef} id ="input" type="text" placeholder="Search Github username..."/>
            <div className="search_btn">
                <button id="search" onClick={() => setUser(inputRef.current.value)}>Search</button>
            </div>
        </div>

        <div id="error">
            <p>User not found</p>
        </div>
    </>
  )
}

export default UserInput