import { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
    const [score, setScore] = useState(0);
    const [best, setBest] = useState<number | null>(null);
    const [clicked, setClicked] = useState<string[]>([]);

    function incrementScore(): void {
        setScore((prevScore) => prevScore + 1);
    }

    function addClicked(image: string) {
        if (!clicked.includes(image)) {
            setClicked((prevArray) => {
                prevArray.push(image);
                console.log(prevArray);
                return prevArray;
            });
            incrementScore();
            console.log(score);
            if (score === 15)
                alert("You found all 15 emojis! Congratulations!");
        } else {
            alert(
                `${image} was clicked twice! You lost with a score of ${score}.`
            );
            if (best! < score) setBest(score);
            setScore(0);
            setClicked([]);
        }
    }

    return (
        <>
            <Header score={score} best={best} />
            <Game onPress={addClicked} />
        </>
    );
}
