import { useEffect, useState } from "react";
import '../stylsheet/keyboarddisplay.css'

type buttonProps = {
    letter: string
    toggleChar: Function
    active: boolean
    chars: string[]
}
function KeyboardButton({ letter, toggleChar, active, chars }: buttonProps) {


    function test() {
        toggleChar(letter)
    }

    useEffect(() => {
        function handleKeyDown(event: any) {
            if (event.key.toLowerCase() === letter.toLowerCase()) {
                test()
            }
        }
        function handlekeyup(event: any) {
            if (event.key.toLowerCase() === letter.toLowerCase()) {
                //setActive(false);
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handlekeyup);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [letter, chars]);


    return (
        <div className={`keyboard-button ${active ? 'active green' : 'inactive'}`} onClick={() => test()}>
            <div className="keyboard-letter">{letter}</div>
        </div>
    );

}
//to do: remplacer keyboard button par une map et mettre en place une recherche dans l array a la place d un useeffect par touche

type displayProps = {
    letters: string[][]
    toggleChar: Function
    chars: string[]
}
export default function KeyboardDisplay({ letters, toggleChar, chars }: displayProps) {

    const buttons = letters.map((row, i) => (
        <tr key={i}>
            {row.map((letter, j) => {
                //suprimer les case vide mais garder les espace
                if (letter === '')
                    return <td key={j.toString() + i}></td>
                return <td key={j.toString() + i}>
                    <KeyboardButton
                        chars={chars}
                        toggleChar={toggleChar}
                        letter={letter}
                        active={chars.includes(letter)}
                    />
                </td>
            })}
        </tr>
    ));

    return (
        <table>
            <tbody>
                {buttons}
            </tbody>
        </table>
    );
}

