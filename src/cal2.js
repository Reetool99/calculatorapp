import React, { forwardRef } from 'react'

function Cal(props, ref) {
    return (
        <div className="Calculator cal2" ref={ref}>
            <div>
                <button>sin</button>
                <button>cos</button>
                <button>tan</button>
                <button>log</button>
                <button>In</button>
            </div>
            <div>
                <button>(</button>
                <button>)</button>
                <button>^</button>
                <button>√</button>
                <button>!</button>
            </div>
            <div>
                <button>⨅</button>
                <button>e</button>
                <button>INV</button>
                <button>RAD</button>
                <button>DEG</button>
            </div>
        </div>
    )
}
export default forwardRef(Cal)