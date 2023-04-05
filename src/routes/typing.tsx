import KeyboardDisplay from '../component/KeyboardDisplay';

import React, { useState } from 'react';
import { ChangeEvent } from "react"
import '../stylsheet/typing.css'
import TypingPlace from '../component/TypingPlace';

const tab = [['', 'j', 'h', 'o', 'u', '', '', 'g', 'c', 'r', 'f', ''],
['', 'i', 'e', 'a', 'y', '', '', 'd', 's', 't', 'n', ''],
['', 'k', 'z', 'v', 'x', 'q', 'b', 'w', 'm', 'l', 'p', '']
]



type Props = {
    characterSet: string[],
    count: number
}

const generateCharacters = ({ characterSet, count }: Props): string => {
    let result = '';
    const availableChars = characterSet.join(''); // Concatenate the characters into a single string
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        result += availableChars[randomIndex];
    }
    let min = 0, max = count - 1
    while (min < count && result[min] === ' ')
        min++
    while (max > 0 && result[max] === ' ')
        max--;
    return result.slice(min, max)
};


export default function Keyboard() {
    const [chars, setChars] = useState<string[]>([])
    const [startTime, setStart] = useState(0)
    const [totaleTime, setTime] = useState(0)
    const [tabChars, setTabChars] = useState('')
    const [nbletters, setNbLetters] = useState(10)
    const [missed, setmissed] = useState(0)

    function toggleChar(char: string) {
        const index = chars.indexOf(char)
        //element non trouver
        console.log(index, char, chars)
        if (index === -1)
            setChars([char, ...chars])
        else
            setChars(chars.filter((_, i) => {
                if (i === index) return false
                else return true
            }))

    }

    function startTimer() {
        setStart(Date.now())
    }

    function endTimer() {
        setTime(Date.now() - startTime)
        setStart(0)
        setTabChars('')
    }

    function setupGame() {
        setTime(0)
        setmissed(0)
        setTabChars(generateCharacters({ characterSet: chars, count: nbletters }))
    }


    function addOneMiss() {
        setmissed(missed + 1)
    }

    if (totaleTime) {
        const time = new Date(totaleTime)
        return (
            <div id='score'>
                <div>time {time.getMinutes()} : {time.getSeconds()}. {time.getMilliseconds()} </div>
                <br />
                <div>letters: {nbletters}</div>
                <br />
                <div>choose letters: {chars.map(el => <span>{el}</span>)}</div>
                <br />
                <div>miss: {missed}</div>
                <br />
                <div className='mechanic'>
                    <div onClick={setupGame} className="entrer">retry</div>
                    <div onClick={() => setTime(0)} className="entrer">change settings</div>
                </div>
            </div >
        )
    }

    if (tabChars)
        return (
            <div id='typing'>
                <TypingPlace tabChars={tabChars} startTime={startTimer} stopTime={endTimer} missed={addOneMiss} />
                <div onClick={endTimer} className="entrer">stop</div>
            </div>
        )

    return (
        <div id='typing'>
            <KeyboardDisplay toggleChar={toggleChar} letters={tab} chars={chars} />
            <div className='mechanic'>
                <form onChange={(ev: ChangeEvent<HTMLFormElement>) => {
                    const target = ev.target as EventTarget & HTMLFormElement;
                    setNbLetters(parseInt(target.value));
                }}>
                    <div><input type='radio' value='10' checked={10 === nbletters} />10</div>
                    <div><input type='radio' value='50' checked={50 === nbletters} />50</div>
                    <div><input type='radio' value='100' checked={100 === nbletters} />100</div>
                    <div><input type='radio' value='1000' checked={1000 === nbletters} />1000</div>
                </form>
                <div onClick={setupGame} className="entrer">generate</div>
            </div>
        </div>
    );
}



//todo
// faire en sorte que l utilisateur puisse choissire les lettres disponible
// permettre a un utilisateur de mapper ces touches 