import { useState } from 'react'

const Input = () => {
  const [textInput, setTextInput] = useState("");
  const [search, setSearched] = useState(true);

  const handleSearch = () => {
    setSearched(false);

  }

  const handleChangeText = (event) => {
    setTextInput(event.target.value);

  }

  const handleRetry = () => {
    setSearched(true);
    setTextInput("");
    }
    if (search) {
      return (
      <div>
          <h1>Submit an item to search for</h1>
          <input value = {textInput} onChange = {handleChangeText} placeholder="Enter something to search"/><br></br>
          <button onClick = {handleSearch}>Submit </button>
      </div>)
    } else {
        return(
        <div>
          <h1>You searched for {textInput}</h1>
          <button onClick = {handleRetry}>Retry</button>
        </div>)
    }
  }

const App = () => {

  return (
    <div>
      <h1>Greetings</h1>
      <Input />
    </div>

  )
}

export default App;
