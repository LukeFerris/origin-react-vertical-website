// RULES:
// There are no missing algorithms or placeholders for logic or UI. If the specification misses enough detai, fill in the blanks.
// The component name is the name mentioned in the specification.
// There is a typography variant h3 at the top of the UI content you created that acts as a title.
// Elements are not touching each other - they have margin separating them of 15px where required.
// The component is self contained with no props required.
// If there are CardMedia components (not required), they do not have a fixed height - otherwise they get set too small
// Elements do not change size dependent on the content they contain.
// END RULES

// Always worth including React
import React, { useState } from "react";

// You can assume Material UI (MUI) components and anything present as standard in CreateReactApp
import { Typography } from "@mui/material";

// Always include this import
import text from "../assets/text/text.json";

// images imports
// If an image is present on the page, it should be imported using the CreateReactApp approach, an example of which is shown below.
// Always assume the images will be in ./assets/images
// An example is:
// import imageName from "./assets/images/imageFileName.png";

export default function CustomSectionName() {
  // you may add javascript here
  // end javascript zone

  return (
    // the styles in this div should not be udpated
    // under no circumstances should you change the styling in this div
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: "60px",
      }}
    >
      {/* This div makes the left hand border and should remain */}
      <div style={{ flexBasis: "30vw", minWidth: "5vw" }}></div>
      <div>
        {/* You may only add UI content within this div */}
        <Typography variant="h3">A title goes here</Typography>
      </div>
      {/* This div makes the right hand border and should remain */}
      <div style={{ flexBasis: "30vw", minWidth: "5vw" }}></div>
    </div>
  );
}
