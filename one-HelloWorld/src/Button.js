import React from "react";

const Button = ({title="Nothing"}) => {
       return(
        <div>
        <button className="button">{title}</button>
        </div>
       )
};

export default Button;
