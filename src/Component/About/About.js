// To display about details when user clicks on the about link

import React from 'react'

export default function About() {

    // Creating a style so i can easily assing it to all the components
    const style={color:"white",textAlign:"center",textDecoration:"none"};

    return (
        <div>

            {/* Just display some text and a hyperlink here */}
            <h1 style={style}>About</h1>
            <h2 style={style}>React JS Practice Project</h2>
            <h3 style={style}><a style={style} href="https://youtu.be/DaweP1MTOgs">Click here for tutorial</a></h3>

        </div>
    )
}
