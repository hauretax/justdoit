import { useEffect, useState } from "react";
import { FlipCard } from "../component/demoAnime/DemoAnime";

export default function ShowAnime() {
    const [cards, setCards] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const rows = Math.floor(height / 50);
        const cols = Math.floor(width / 50);
        const numCards = rows * cols;
        const newCards: JSX.Element[] = [];

        for (let i = 0; i < numCards; i++) {
            newCards.push(<FlipCard key={i} />);
        }

        setCards(newCards);
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', alignItems: 'start' }}>
            {cards}
        </div>
    );
}