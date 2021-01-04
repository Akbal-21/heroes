import React from "react";
import {Link} from "react-router-dom";

export const HeroCard = ({
                             id,
                             superhero,
                             alter_ego,
                             first_appearance,
                             characters,
                         }) => {
    return (
        <div className={'card text-dark bg-light ms-3'} style={{maxWidth: 200}}>
            <div className="row no-gutters">
                <div className="col md-6">
                    <img src={`./assets/heroes/${id}.jpg`} alt={superhero} className={'card card-img'}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className={'card card-title'}>{superhero}</h5>
                        <p className="card-text text-dark">{alter_ego}</p>
                        {
                            (alter_ego !== characters)
                            && <p className="card-text text-dark">{characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted text-dark ">{first_appearance}</small>
                        </p>
                        <Link to={`./hero/${id}`}>
                            Mas...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}