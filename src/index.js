////////////////////////////
// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

////////////////////////////
// Create a react component 

/*  Old way to do a function

    const App = function() {
    return <div>Hi there!</div>;
    };

*/

// New Way, ES2015

    const App = () => {
        return (
            <div>
                <label class="label" for="name">Enter name: </label>
                <input id="name" type="text" />
                <button style={{ backgroundColor: "blue", color: "white" }}>Submit</button>
            </div>
        );
    };

//

//////////////////////////////
// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);