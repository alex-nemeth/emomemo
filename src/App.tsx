import { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
    const [score, setScore] = useState(0);

    function incrementScore(): void {
        setScore((prevScore) => prevScore + 1);
    }

    return (
        <>
            <Header score={score} />
            <Game onPress={() => incrementScore()} />
        </>
    );
}
