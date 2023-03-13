import { useEffect } from "react";
import { useState } from "react";

import React from "react";

function HomePageView(props) {
  return (
    // Show data
    <div>
      <div style={{ whiteSpace: "pre" }}>
        {props.value.map((row) => (
          <div style={{ padding: 20 }}>{JSON.stringify(row, null, 2)}</div>
        ))}
      </div>
    </div>
  );
}

export default HomePageView;
