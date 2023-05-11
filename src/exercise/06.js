// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
    const inputRef = React.useRef();
    const [error, setError] = React.useState(null );
    const [username, setUsername] = React.useState('' );

  // 🐨 add a submit event handler here (`handleSubmit`).
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (error) return;
        //onSubmitUsername(evt.target.elements[0].value);
        onSubmitUsername(inputRef.current.value);
    }
    const handleChange = (evt) => {
        const value = evt.target.value.toLowerCase();
        const isValid = value === value.toLowerCase()
        setError(isValid ? null : 'Username must be lower-case.' )
        setUsername(value);
    }
    // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:
        <input name="usernameField" type="text" value={username} ref={inputRef} onChange={handleChange} /></label>
      </div>
        {error && <div role="alert">{error}</div>}
      <button type="submit" disabled={error !== null}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm {...{onSubmitUsername}} />
}

export default App
