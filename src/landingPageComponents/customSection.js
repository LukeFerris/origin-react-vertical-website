// INSTRUCTIONS:
// Change the CustomerSectionName to the name mentioned in the specification
// Make sure you add any required headings or labels to ensure the section is properly understood by the user
// Do not change the styling in the container div below.
// Any text strings should be replaced with a placeholder of the following format: {text.placeHolderName.content} where placeholderName is a relevant name.
// Text placeholders may only be one level deep. {text.placeholderName.content} is correct, but {text.objectname.placeholderName.content} is not correct.
// This includes all text strings, including those git which are part of complex objects.

// STYLING:
// - A header that explains the section should use typography variant h3
// - Normal text content should use typography variant h2
// - CardMedia should not have a fixed height - otherwise they get set too small
// - Elements should attempt to fill as much horizontal width as possible
// - Under no circumstances should you change any of the other styling in the template.

// You can assume Material UI (MUI) components and anything present as standard in CreateReactApp
import { Typography } from "@mui/material";

// Always include this import
import text from "../assets/text/text.json";

// images imports
// The only way images should be included is using the CreateReactApp approach, an example of which is shown below.
// Always assume the images will be in ./assets/images
// An example is:
import horseStableImage from "./assets/images/horseStableImage.png";
// They can then be used as sources like this: {horseStableImage}.

export default function CustomSectionName() {
  // you may only add additional javascript here.

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
      <div>{/* You may only add UI content within this div */}</div>
      {/* This div makes the right hand border and should remain */}
      <div style={{ flexBasis: "30vw", minWidth: "5vw" }}></div>
    </div>
  );
}
