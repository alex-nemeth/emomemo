import React from "react";
import { HeaderProps } from "../interfaces/Props";

export default function Header({ score }: HeaderProps) {
    return (
        <nav className="flex flex-row justify-between">
            <h1 className="">Emomemo</h1>
            <h3>Score: {score}</h3>
        </nav>
    );
}
