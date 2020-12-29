import React from "react";

const AppSection = () => (
  <div className="bg-success text-center">
    <p className="display-4 text-white p-4">Discover the amazing new app</p>
    <p className="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
    </p>
    <div className="row  p-4">
      <div className="col-6 text-right">
        <button className="btn btn-warning btn-lg">Play Store</button>
      </div>
      <button className="btn btn-warning btn-lg">App Store</button>
      <div className="col-6 text-center"></div>
    </div>
  </div>
);

export default AppSection;
