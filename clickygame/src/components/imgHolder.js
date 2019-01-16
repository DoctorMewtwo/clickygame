import React from "react";

function imgHolder(props) {
    return(
        <div role = "img" aria-label= "click item" className = "click-item" style = {{ backgroundImage: `url(${props.backgroundImage})` }}>

        </div>
    );
}

export default imgHolder;