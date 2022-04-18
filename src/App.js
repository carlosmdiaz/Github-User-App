import './App.css';
import axios from 'axios';
import { useEffect, useRef, useState} from 'react'
import Container from './componets/Container';

import { useDispatch} from 'react-redux';
import { setUserData } from './store/userDataSlice';

// #1 npm install axios
// #2 import axios from './axios'
// #3 import useEffect hook
// #4 Make an get request to the github api using axios
// #5 How do we get reference of the input value?
// #6 import useRef and get the ref of the search input
// #7 On click of the search update the user state with the ref 
// #8 After finish search functionality how do you map the response into the code?
// #9 Get the theme switcher to work
// #10 Turn reusable sections of the app to components (Finish rest of hw)

function App() {

  const dispatch = useDispatch();
  const [user, setUser] = useState("carlosmdiaz");
    // const [info, setInfo] = useState({});
    const inputRef = useRef();
    const [dateSplit, setDateSplit] = useState("");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    useEffect(() => {
      const getUser = async () => {
        try{
          const response = await axios.get(`https://api.github.com/users/${user}`)
          dispatch(setUserData(response.data));
          setDateSplit(response.data.created_at.split('T').shift().split('-'))
        } catch (error) {
          console.log(error);
        }
      }
      return getUser();
    }, [user, dispatch]);

  return (
      <div className="App">
        <Container 
          setUser = {setUser}
          inputRef = {inputRef}
          dateSplit = {dateSplit}
          months = {months}
        />
      </div>

  );
}

export default App;
