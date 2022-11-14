import React from "react";

const ColorButton = ({ color, addCircle}) => {
    return (
        <div >
                <button
                 style={{backgroundColor: color}}
                 className="ColorButton-btn"
                 onClick={() => addCircle(color)}
                 >
                    {color}
                </button>
        </div>
    )

}
export default ColorButton;