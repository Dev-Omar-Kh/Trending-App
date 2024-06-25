import React from 'react';

import cardCss from './card.module.css';

export default function Card(props){

    if(props.date){

        const propsDate = props.date;
        const dateArray = propsDate.split('-')
        var date = dateArray[0];

    };

    if (props.rate){

        var fixedRate = props.rate.toFixed(2);

    };

    if (props.overview){

        const overViewArray = props.overview.split(' ');
        const overViewOutput =  overViewArray.slice(0, 50);
        var overView = overViewOutput.join(" ");

    };


    return <React.Fragment>

        <div className={cardCss.card}>

            <div className={cardCss.img_cont}>

                <img id='img' className={cardCss.img} loading="lazy" src={'https://image.tmdb.org/t/p/original' + props.img} alt={props.title} />

                <div className={cardCss.overview}>

                    <h3> <i className="fa-solid fa-book"></i> Summary <span style={{color : 'var(--dark-color-2)' , textShadow : 'none'}}>:</span></h3>

                    <p>{overView + '...'}</p>

                </div>

            </div>

            <span className={cardCss.type}> {props.type} </span>

            <h3 className={cardCss.h3}> {props.title} </h3>

            <h5 className={cardCss.h5}>{date}</h5>

            <div className={cardCss.rate_box}>

                <div className={cardCss.rate_value}>

                    <p>{fixedRate}</p>
                    <span>({props.rateNum})</span>

                </div>

                <i className="fa-regular fa-star"></i>

            </div>

        </div>

    </React.Fragment>

}
