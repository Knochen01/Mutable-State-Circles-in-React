import React, { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";


const ColoredCircles = (props) => {
    const [circles, setCircles] = useState([])

    function getRandom(min=0, max=100) {
        return  Math.random() * (max-min) + min
    }

//     const changePositon = idx => {
//         setCircles(circles => {
//             const copy = [...circles] 
//             copy[idx].x = getRandom();
//             copy[idx].y = getRandom();
//             return copy;
//         })
// }
    const changePosition = idx => {
        setCircles(circles => (
            circles.map((circle, i) => (
                i === idx
                ? {...circle, x: getRandom(), y: getRandom()}
                : circle
                ))
        ))
    }


    const addCircle = (color) => {
      setCircles(circles => {
      return [...circles, {color, x: getRandom(), y: getRandom()}]
      })
    }
    return (
        <div
        className="ColoredCircles">
         <ColorButtons
         addCircle={addCircle}
         options ={['peachpuff', 'lavender', 'lightsteelblue']} />
        <ColorButtons
         addCircle={addCircle}
         options ={['magenta', 'orange', 'pink']} />
            {circles.map(({color, x, y}, idx) => (
                <Circle
                color={color}
                idx={idx}
                key={idx}
                x={x}
                y={y}
                changePosition={changePosition} />
                ))}
        
        </div>
    )
}
export default ColoredCircles;