import '../stylsheet/parallaxstring.css'
import React, { RefObject } from 'react';


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
    // return
    refs.forEach(el => {
        //     // Get the target's speed
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
            inputRefs: []
        };
    }

    componentDidUpdate(prevProps: AppProps) {
        if (prevProps.text !== this.props.text) {
            const textArr = this.props.text.split('');
            const refsArr = Array.from({ length: textArr.length }, () => React.createRef<HTMLInputElement>());
            this.setState({ inputRefs: refsArr });
        }
        // Restart the animation loop when the component updates
        updateParallax(this.state.inputRefs, this.props.x, this.props.y);
    }

    componentDidMount() {
        const textArr = this.props.text.split('');
        const refsArr = Array.from({ length: textArr.length }, () => React.createRef<HTMLInputElement>());
        this.setState({ inputRefs: refsArr });
    }


    render() {
        const { inputRefs } = this.state;
        let { text } = this.props;
        let textarr = text.split('')
        return (
            <div className='ParralaxString'>
                <div>{text}</div>
                <div>
                    {textarr.map((el, index) => {
                        let eltoprint =
                            <span
                                key={index}
                                ref={inputRefs[index]}
                                className="parallax"
                                data-speed={Math.random() / 10} >
                                {el}
                            </span>
                        return eltoprint
                    })}
                </div>
            </div>
        )
    }
}               