//liste des soucies 
// pas moyen de faire capter mouse moov sur toute la page
// comment ne pas refaire le composant a chaque mouvement de souris ?
// serais  il pas plus malin de cree un objet array que j envois dans la fonction .
// ca me laisserais plus libre par exemple d envoyer une liste de div plutot que du text


import '../stylsheet/parallaxstring.css'
import React, { RefObject } from 'react';
import { useRef } from 'react';

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

        target!.style.transform = `translate3d(${newx / 10}rem, ${newy / 10}rem, 0)`;
    });
}


export default class ParralaxString extends React.Component<AppProps, MyState> {

    constructor(props: AppProps) {
        const min = 500;
        const max = 600;


        super(props);
        const textArr = this.props.text.split('');
        this.state = {
            inputRefs: Array.from({ length: textArr.length }, () => React.createRef<HTMLInputElement>()),
            speeds: Array.from({ length: textArr.length }, () => Math.random()),
            position:
                Array.from({ length: textArr.length }, (el, index) => {
                    console.log(index)
                    return { x: 500 + index * 10, y: 500 }
                    // return { x: Math.random() * 500, y: Math.random() * 500 }
                }),
        }
    }


    componentDidUpdate(prevProps: AppProps) {
        // Restart the animation loop when the component updates
        updateParallax(this.state.inputRefs, this.props.x, this.props.y);
    }


    render() {
        // const windowSize = useRef([window.innerWidth, window.innerHeight])
        // console.log(windowSize)
        const { inputRefs, speeds, position } = this.state;
        let { text } = this.props;
        let textarr = text.split('')
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