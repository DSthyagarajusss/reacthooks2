import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

function UseLayoutEffect() {
    const [toggle, setToggle] = useState(false);
    const textRef = useRef();

    // useEffect(() => {
    //     if (textRef.current != null) {
    //         const dimension = textRef.current.getBoundingClientRect();
    //         textRef.current.style.paddingTop = `${dimension.height}px`;
    //     }
    // }, [toggle]);

    useLayoutEffect(() => {
        if (textRef.current != null) {
            const dimension = textRef.current.getBoundingClientRect();
            textRef.current.style.paddingTop = `${dimension.height}px`;
        }
    }, [toggle]);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md">
                    <button onClick={() => setToggle(!toggle)} className="btn btn-warning">
                        Toggle
                    </button>
                    {toggle && <h4 ref={textRef}>code bless you</h4>}
                </div>
            </div>
        </div>
    );
}

export default UseLayoutEffect;
