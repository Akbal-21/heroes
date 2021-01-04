import React, {useMemo} from "react";
import {getHeroesByPublisher} from "../../selectors/getHeroesByPublisher";
import {HeroCard} from "./HeroCards";

export const HeroesList =({publisher})=>{

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    //const heroes = getHeroesByPublisher(publisher);

    return (
        <div className={'card card-columns text-white bg-primary mb-3'}>
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}