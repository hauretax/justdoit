//liste des soucies 
// pas moyen de faire capter mouse moov sur toute la page
// comment ne pas refaire le composant a chaque mouvement de souris ?
// serais  il pas plus malin de cree un objet array que j envois dans la fonction .
// ca me laisserais plus libre par exemple d envoyer une liste de div plutot que du text


import '../stylsheet/parallaxstring.css'
import React, { RefObject } from 'react';

type AppProps = {
    text: string
    x: number
    y: number
}

interface MyState {
    inputRefs: React.RefObject<HTMLInputElement>[];
    speeds: number[]
}

function updateParallax(refs: RefObject<HTMLInputElement>[], x: number, y: number) {
    // Loop through each target element
    // return
    refs.forEach(el => {
        //     // Get the target's speed
        let target = el.current
        //don t use target if she dosn t existe
        if (!target) {
            return;
        }
        const speed = parseFloat(target.dataset.speed || "0");

        // Calculate the new position based on the mouse position and speed
        const newx = (window.innerWidth / 2 - x) * speed;
        const newy = (window.innerHeight / 2 - y) * speed;

        target.style.top = newy + 'px'
        target.style.left = newx + 'px'
    });
}


export default class ParralaxString extends React.Component<AppProps, MyState> {

    constructor(props: AppProps) {
        super(props);
        const textArr = this.props.text.split('');
        this.state = {
            inputRefs: Array.from({ length: textArr.length }, () => React.createRef<HTMLInputElement>()),
            speeds: Array.from({ length: textArr.length }, () => Math.random() / 10)
        }
    }

    fnInputRefs(tab: any[]) {
        return Array.from({ length: tab.length }, () => React.createRef<HTMLInputElement>())
    }
    fnSpeeds(tab: any[]) {
        return Array.from({ length: tab.length }, () => Math.random() / 10)
    }

    componentDidUpdate(prevProps: AppProps) {
        // Restart the animation loop when the component updates
        if (prevProps.text !== this.props.text) {
            const textArr = this.props.text.split('');
            this.setState({
                inputRefs: this.fnInputRefs(textArr),
                speeds: this.fnSpeeds(textArr)
            })
            // console.log(inputRefs)
        }

        updateParallax(this.state.inputRefs, this.props.x, this.props.y);
    }


    render() {
        const { inputRefs, speeds } = this.state;
        let { text } = this.props;
        let textarr = text.split('')
        return (
            <div className='parralaxstring'>
                {textarr.map((el, index) => {
                    let eltoprint =
                        <span
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
        )
    }
}               