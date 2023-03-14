import ParralaxString from '../component/ParralaxString'
import '../stylsheet/LettersShow.css'
import React, { useState } from 'react'


const useMove = () => {
    const [state, setState] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.persist()
        setState(state => ({ ...state, x: e.clientX, y: e.clientY }))
    }
    return {
        x: state.x,
        y: state.y,
        handleMouseMove,
    }
}


export default function LetterShow() {
    const { x, y, handleMouseMove } = useMove()
    const [text, setText] = useState('aasdasdasd')

    function textchange(event: any) {
        setText(event.target.value)
    }

    return (
        <div id='lettershow' onMouseMove={handleMouseMove}>
            <ParralaxString text={text} x={x} y={y} />
            <input type='text' value={text} onChange={textchange} />
        </div>
    )
}