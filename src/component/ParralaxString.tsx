import '../stylsheet/parallaxstring.css'
import React, { RefObject } from 'react';


type AppProps = {
    text: string
    x: number
    y: number
}

type vector = {
    x: number
    y: number
}

interface MyState {
    inputRefs: React.RefObject<HTMLInputElement>[];
    speeds: number[]
    position: vector[]
}

function updateParallax(refs: RefObject<HTMLInputElement>[], x: number, y: number) {
    // Loop through each target element
    // return
    refs.forEach(el => {
        //     // Get the target's speed
        let target = el.current
        const speed = parseFloat(target?.dataset.speed || "0");

        // Calculate the new position based on the mouse position and speed
        const newx = (window.innerWidth / 2 - x) * speed;
        const newy = (window.innerHeight / 2 - y) * speed;
        console.log(newx)
        target!.style.transform = `translate3d(${newx / 10}rem, ${newy / 10}rem, 0)`;
    });
}


export default class ParralaxString extends React.Component<AppProps, MyState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            inputRefs: [],
            speeds: [],
            position: [{ x: 600, y: 610 }, { x: 620, y: 610 }, { x: 620, y: 600 }, { x: 590, y: 630 }, { x: 630, y: 590 }, { x: 600, y: 600 }, { x: 590, y: 590 }]
        };
    }


    initState() {
        const textArr = this.props.text.split('');
        const refsArr = Array.from({ length: textArr.length }, () => React.createRef<HTMLInputElement>());
        const refSpeeds = Array.from({ length: textArr.length }, () => Math.random());
        // const refSpeeds = [0.45, 0.5, 0.55, 0.6, 0.70, 0.3]
        //const refPosition = Array.from({ length: textArr.length }, () => {x: Math.random() * (this.cnvW - this.size * 2) + this.size,Math.random() });

        this.setState({ inputRefs: refsArr, speeds: refSpeeds });
    }


    componentDidUpdate(prevProps: AppProps) {
        if (prevProps.text !== this.props.text) {
            this.initState()
        }
        // Restart the animation loop when the component updates
        updateParallax(this.state.inputRefs, this.props.x, this.props.y);
    }

    componentDidMount() {
        console.log('asdasd')
        this.initState()
    }


    render() {
        const { inputRefs, speeds, position } = this.state;
        let { text } = this.props;
        let textarr = text.split('')
        console.log(position)
        return (
            <div className='ParralaxString'>
                <div>{text}</div>
                <div>
                    {textarr.map((el, index) => {
                        let eltoprint =
                            <span
                                style={{ top: position[index].y, left: position[index].x }}
                                key={index}
                                ref={inputRefs[index]}
                                className="parallax"
                                data-speed={speeds[index]}
                            >
                                {el}

                            </span>
                        return eltoprint
                    })}
                </div>
            </div>
        )
    }
}               