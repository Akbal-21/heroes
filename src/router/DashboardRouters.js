import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import {MarvelScreen} from "../components/Marvel/MarvelScreen";
import {Navbar} from "../components/ui/NanvBar";
import {Heroes} from "../components/Heroes/Heroes";
import {DCScreen} from "../components/DC/DCScreen";

export const DashboardRouters = () =>{
    return(
        <>
            <Navbar/>
            <div className={'container mt-2'}>
                <Switch>
                    <Route wxact path='/marvel' component={MarvelScreen}/>
                    <Route wxact path='/hero/:heroId' component={Heroes}/>
                    <Route wxact path='/dc' component={DCScreen}/>
                    <Redirect to='/marvel'/>
                </Switch>
            </div>
        </>
    )
}



