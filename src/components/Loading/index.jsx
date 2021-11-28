import React from "react";
import Lottie from "lottie-react-web";

import loading from "../../asset/loading.json";

export default function Loading() {
  return (
    <div className="position-fixed top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-around">
      <div className="loading">
        <Lottie
          options={{
            animationData: loading,
          }}
        />
      </div>
      <div></div>
    </div>
  );
}
