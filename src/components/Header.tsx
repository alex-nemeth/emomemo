import React from "react";
import { HeaderProps } from "../interfaces/Props";

export default function Header({ score, best }: HeaderProps) {
    return (
        <nav className="flex flex-row justify-between items-center px-5">
            <div className="flex justify-center items-center">
                <img className="w-16" src="/images/cool.png" alt="" />
                <h1 className="text-3xl">Emomemo</h1>
            </div>
            <div>
                <h3 className="text-xl">Current Score: {score}</h3>
                <h3 className="text-xl">Best Score: {best}</h3>
            </div>
        </nav>
    );
}
