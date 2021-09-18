import React, {useState} from 'react'

const Error = () => {
    const [top, setTop] = useState(60); //60
    const [left, setLeft] = useState(40); //40

    const moveBtn = () => {
        setTop(Math.floor(Math.random() * 50 + 40));
        setLeft(Math.floor(Math.random() * 80));
    }

    return (
        <div id='errorScreen'>
            <img src='https://www.wallpaperkiss.com/wimg/b/167-1674145_big.png' alt='background' />
            <h1 id='command'>Sorry, we couldn't reach the site you were looking for. Please refresh the page with the button below.</h1>
            <button id='homePage' style={{top: `${top}%`, left: `${left}%`}} onMouseMove={moveBtn} onClick={() => {window.location.reload();}}>Refresh</button>
        </div>
    )
}

export default Error
