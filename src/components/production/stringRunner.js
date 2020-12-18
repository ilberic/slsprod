import React from "react";
import './stringRunner.sass'
let stringRunner = (string, position) => {
    let float
    if (position === 0) {
        float = 'bottom'
    } else {
        float = 'top'
    }

    return (
            <>
                <a href="https://vk.com/slsprod" target="_blank" rel="noopener noreferrer" className={`string-runner ${float}`}>{string}</a>
            </>
        )
}

export default stringRunner