import React from 'react'
import axios from 'axios';
import { useEffect, useRef, useState} from 'react'
import UserInput from './UserInput';
import UserContent from './UserContent';

function Container({info, setUser, inputRef, dateSplit, months}) {
    
    
  return (
    <div className='container'>
        <UserInput 
            inputRef={inputRef}
            setUser={setUser}
        />
        <UserContent 
            info={info}
            dateSplit={dateSplit}
            months={months}
        />
    </div>
  )
}

export default Container