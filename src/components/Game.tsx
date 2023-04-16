import React from "react";
import data from "../data/cardData";
import { GameProps } from "../interfaces/Props";
import { shuffleArray } from "../utils/shuffleArray";

export default function Game({ onPress }: GameProps) {
    function renderCards() {
        const shuffledData = shuffleArray(data);
        return shuffledData.map((image) => (
            <div
                className="flex flex-wrap items-center max-h-35 rounded-lg bg-slate-400"
                onClick={() => onPress(image.name)}
                id={image.name}
            >
                <img
                    className="bg-inherit rounded-lg"
                    src={image.img}
                    alt={image.name}
                />
                <h3 className="bg-inherit w-full text-center text-md sm:text-lg md:text-xl lg:text-3xl py-5 rounded-lg">
                    {image.name}
                </h3>
            </div>
        ));
    }
    return (
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-5 p-3 max-h-90">
            {renderCards()}
        </div>
    );
}
