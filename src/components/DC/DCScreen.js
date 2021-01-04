import React from "react";
import {HeroesList} from "../Heroes/HerosList";
export const DCScreen =()=>{
    return (
        <>
            <h1>DC Screen</h1>
            <hr/>
            <HeroesList publisher={'DC Comics'}/>
        </>
    )
}