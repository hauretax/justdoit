import KeyboardDisplay from '../component/KeyboardDisplay';

import React, { useEffect, useState } from 'react';

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
        setTabChars('')
    }

    function setupGame() {
        console.log('ouvou')
        setTabChars(generateCharacters({ characterSet: chars, count: 10 }))
    }


    if (tabChars)
        return (
            <div id='typing'>
                <TypingPlace tabChars={tabChars} startTime={startTimer} stopTime={endTimer} />
            </div>
        )

    return (
        <div id='typing'>
            <KeyboardDisplay toggleChar={toggleChar} letters={tab} chars={chars} />
            <div onClick={setupGame} className="entrer">generate</div>
            <div >{totaleTime}</div>
        </div>
    );
}



//todo
// faire en sorte que l utilisateur puisse choissire les lettres disponible
// permettre a un utilisateur de mapper ces touches 