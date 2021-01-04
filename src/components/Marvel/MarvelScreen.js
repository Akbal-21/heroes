import React from "react";
import {HeroesList} from "../Heroes/HerosList";

export const MarvelScreen =()=>{
    return (
        <>
            <h1>Marvel Screen</h1>
            <hr/>
            <HeroesList publisher={'Marvel Comics'}/>
        </>
    )
}