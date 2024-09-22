import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import {useState} from 'react';

function App() {
    const [userValues, setUserValues] = useState({
        'initialInvestment': 1000,
        'annualInvestment' : 100000,
        'expectedReturn' : 1000,
        'duration' : 1
    });

    const inputIsValid = userValues.duration >=1;

    function handleUserInput(inputIdentifier, inputValue){
        setUserValues((prevUserValues)=> {
        return {
            ...prevUserValues,
            [inputIdentifier] : +inputValue,
        };
    });
    }
    return (
        <>
            <Header/>
            <UserInput userInput={userValues} onChange={handleUserInput}/>
            {!inputIsValid && <p>Please enter duration >0 </p>}
            {inputIsValid && <Results input={userValues}/> }
        </>
    );
}

export default App
