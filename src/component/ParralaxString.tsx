import '../stylsheet/parallaxstring.css'
import React, { Component, RefObject } from 'react';


type AppProps = {
    text: string
    x: number
    y: number
}

interface MyState {
    inputRefs: React.RefObject<HTMLInputElement>[];
}

function updateParallax(refs: RefObject<HTMLInputElement>[], x: number, y: number) {
    // Loop through each target element
    refs.forEach(el => {
        // Get the target's speed
        let target = el.current
        const speed = parseFloat(target?.dataset.speed || "0");

        // Calculate the new position based on the mouse position and speed
        const newx = (window.innerWidth / 2 - x) * speed;
        const newy = (window.innerHeight / 2 - y) * speed;
        target!.style.transform = `translate3d(${newx / 10}rem, ${newy / 10}rem, 0)`;
    });
}


export default class ParralaxString extends React.Component<AppProps, MyState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            inputRefs: [
                React.createRef<HTMLInputElement>(),
                React.createRef<HTMLInputElement>(),
                React.createRef<HTMLInputElement>(),
                React.createRef<HTMLInputElement>()
            ]
        };
    }

    componentDidUpdate() {
        // Restart the animation loop when the component updates
        updateParallax(this.state.inputRefs, this.props.x, this.props.y);
    }

    render() {
        const { inputRefs } = this.state;
        const { text, x, y } = this.props;
        return (
            <div className='ParralaxString'>
                <div>{text}</div>
                <div ref={inputRefs[0]} className="parallax parallax--one" data-speed="0.45"></div>
                <div ref={inputRefs[1]} className="parallax parallax--two" data-speed="0.5"></div>
                <div ref={inputRefs[2]} className="parallax parallax--three" data-speed="0.55"></div>
                <div ref={inputRefs[3]} className="parallax parallax--four" data-speed="0.6"></div>

                <div className="mouseArea" >
                    Hook
                    <div className="mouseInfo">
                        The current mouse position is ({x}, {y})
                    </div>
                </div>
            </div>
        )
    }
}