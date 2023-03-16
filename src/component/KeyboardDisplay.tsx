import { useEffect, useState } from "react";
import '../stylsheet/keyboarddisplay.css'

type buttonProps = {
    letter: string
}
function KeyboardButton({ letter }: buttonProps) {
    const [active, setActive] = useState(false);

    useEffect(() => {
        function handleKeyDown(event: any) {
            if (event.key.toLowerCase() === letter.toLowerCase()) {
                setActive(true);
            }
        }
        function handlekeyup(event: any) {
            if (event.key.toLowerCase() === letter.toLowerCase()) {
                setActive(false);
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handlekeyup);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [letter]);



    return (
        <div className={`keyboard-button ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
            <div className="keyboard-letter">{letter}</div>
        </div>
    );
}

type displayProps = {
    letters: string[][]
}
export default function KeyboardDisplay({ letters }: displayProps) {



    return (
        <table>
            <tbody>
                {letters.map((row, i) => (
                    <tr key={i}>
                        {row.map((letter, j) => (
                            <td key={j}><KeyboardButton letter={letter} /></td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
function setActive(arg0: boolean) {
    throw new Error("Function not implemented.");
}

