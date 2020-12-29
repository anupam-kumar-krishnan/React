import React from "react";
import Card from "./Card";
const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card title="LearnCodeOnline" />
          </div>
          <div className="col-4">
            <Card title="LearnCodeOnline" />
          </div>

          <div className="col-4">
            <Card title="LearnCodeOnline" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardSection;
