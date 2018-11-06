import React, {useState, useEffect} from 'react';

function useMousePosition() {
    const [xPosition, setXPosition] = useState(0)
    const [yPosition, setYPosition] = useState(0)

    //CDM
    useEffect(() => {

        const listener = (e) => {
            setXPosition(e.pageX)
            setYPosition(e.pageY)
            console.log('From hook', e.pageX, e.pageY)
        }
        document.addEventListener('click', listener);
        return () => document.removeEventListener('click', listener)  //CWU
    }, [xPosition, yPosition])

    return {
        xPosition,
        yPosition
    }
}

export default function hookCounter() {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('')
    const position = useMousePosition();

    console.log('In hook function component: ', position    )

    useEffect(() => {
        document.title = 'Your hook counter is : ' + counter;
    }, [counter])

    return (
        <div>
            <h1>Hook Counter</h1>
            <h1>{counter}</h1>
            <h1>mouse position: x: {position.xPosition} y: {position.yPosition}</h1>
            <h1>Name: {name}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}