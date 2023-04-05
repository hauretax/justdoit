import React, { useEffect, useState } from "react";
import '../stylsheet/typingplace.css'
type Props = {
    tabChars: string
    startTime: Function
    stopTime: Function
    missed: Function
}


export default function TypingPlace({ tabChars, startTime, stopTime, missed }: Props) {

    const textArr = tabChars.split('')
    const refs = Array.from({ length: textArr.length }, () => React.createRef<HTMLInputElement>())
    const [i, seti] = useState(0);


    useEffect(() => {
        function handleKeyDown(event: any) {
            if (i === 0)
                startTime()
            if ('Backspace' === event.key && i > 0) {
                refs[i - 1].current!.className = 'neutral'
                seti(prevI => prevI - 1);
                return
            }
            const target = refs[i]
            if (!target || 'Backspace' === event.key)
                return;
            if ((event.key === target.current!.innerHTML)) {
                target.current!.className = 'good'
                if (i === tabChars.length - 1)
                    stopTime()
            }
            else { target.current!.className = 'bad'; missed() }
            seti(prevI => prevI + 1);
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [i]);

    return (
        <div className="typingPlace">
            {textArr.map((el, index) => {
                return (<>
                    {(index === i) ? <div key={index + 's'} className="cursor inactive"></div> : null}

                    <span
                        key={index}
                        ref={refs[index]}
                        className='neutral '
                    >
                        {el}
                    </span>
                </>
                )
            })}

        </div>
    );
}
