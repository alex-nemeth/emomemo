import { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
    const [score, setScore] = useState(0);
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
        } else {
            alert(
                `${image} was clicked twice! You lost with a score of ${score}.`
            );
            setScore(0);
            setClicked([]);
        }
    }

    return (
        <>
            <Header score={score} />
            <Game onPress={addClicked} />
        </>
    );
}
