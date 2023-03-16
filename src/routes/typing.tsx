import KeyboardDisplay from '../component/KeyboardDisplay';

import React, { useEffect, useState } from 'react';

import '../stylsheet/typing.css'

const tab = [['.', 'j', 'h', 'o', 'u', '.', '.', 'g', 'c', 'r', 'f', '.'],
['.', 'i', 'e', 'a', 'y', '.', '.', 'd', 's', 't', 'n', '.'],
['.', 'k', 'z', 'v', 'x', 'q', 'b', 'w', 'm', 'l', 'p', '.']
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
    return result
};


export default function Keyboard() {
    const [chars, setChars] = useState(generateCharacters({ characterSet: ['a', 'b', 'c'], count: 8 }));
    const [lastKeyPressed, setLastKeyPressed] = useState('');

    useEffect(() => {
        function handleKeyDown(event: any) {
            setLastKeyPressed(event.key);
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);


    return (
        <div id='typing'>
            <div>{chars}</div>
            <KeyboardDisplay letters={tab} />
        </div>
    );
}



//todo
// faire en sorte que l utilisateur puisse choissire les lettres disponible
// permettre a un utilisateur de mapper ces touches 