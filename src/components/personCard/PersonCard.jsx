import React from 'react';

import cardCss from '../card/card.module.css';

export default function PersonCard(props){

    if (props.popularity){

        var fixedPopularity = props.popularity.toFixed(2);

    };

    return <React.Fragment>

        <div className={cardCss.card}>

            <div className={cardCss.img_cont}>

                <img id='img' className={cardCss.img} loading="lazy" src={props.img ? 'https://image.tmdb.org/t/p/original' + props.img : require('../../Images/notFound.jpg')} alt={props.title} />

                <div className={cardCss.overview}>

                    <h3> <i className="fa-solid fa-film"></i> The most famous works <span style={{color : 'var(--dark-color-2)' , textShadow : 'none'}}>:</span></h3>

                    {props.overview.map( (knownFor , idx ) => {return <p key={idx} style={{marginBlock : '5px'}}> <span style={{color : 'var(--dark-color-2)' , textShadow : 'none'}}>•</span> {knownFor.original_title ? knownFor.original_title : knownFor.name} </p> } )}

                </div>

            </div>

            <span className={cardCss.type}> {props.gender === 2 ? 'Male' : 'Female'} </span>

            <h3 className={cardCss.h3}> {props.title} </h3>

            <h5 className={cardCss.h5}>{props.known}</h5>

            <div className={cardCss.rate_box}>

                <div className={cardCss.rate_value}>

                    <p>{fixedPopularity}</p>

                </div>

                <i className="fa-regular fa-heart"></i>

            </div>

        </div>

    </React.Fragment>

}
