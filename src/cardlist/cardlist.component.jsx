import React from "react";
import CardOne from "../card/card.component";

function CardList(props) {
    if (true) {
        throw new Error('OH! Found error');
    }
//Note
//The map fxn takes data from the testdata to form another array like this
//[<cardOne data1 />, <cardOne data2 />, <cardOne data3 />]
    return (
        <div id="cardlist">
            {props.profile.map((data) => <CardOne {...data} key={data.id}/>)}
        </div>
    )
}  

export default CardList;