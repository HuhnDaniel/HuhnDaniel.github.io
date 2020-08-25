import React from "react";

function ScreenshotNav({ buttonCount }) {
    console.log(buttonCount);

    if (buttonCount) {
        return (
            <div className="flex flex-row justify-center items-center my-4">
                <button className="border-l-2 border-b-2 h-4 w-4 transform rotate-45" id="back"></button>
                {buttonCount.map((_, i) => (
                    <button className="mx-2 h-2 w-2 bg-white rounded-full" id="imageNumber" name={i} key={i}></button>
                ))}
                <button className="border-r-2 border-t-2 h-4 w-4 transform rotate-45" id="forward"></button>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default ScreenshotNav;