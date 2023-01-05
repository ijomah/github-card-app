import React from "react";


function CardOne(props) {
    // const cardData = this.props;
    console.log(props);
   // cardData.map((data)=> )
    return ( 
    <div>
        <div>
            <p>Photo:<img src={props.avatar_url} alt={''} /></p>
            <p style={{color: Math.random() < 0.5? 'red':'blue'}}>Name: {props.name}</p>
            <p>Company: {props.company}</p>
        </div>
    </div>
    )
}

export default CardOne;