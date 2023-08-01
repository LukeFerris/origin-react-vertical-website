// RULES:
// The component name is the name mentioned in the specification.
// The component is self contained with no props required.
// The styling of the original template has not been changed
// Content has only been added in the marked areas for javascript and the div marked for new UI content.
// Text strings have been replaced with a placeholder of the following format: {text.placeHolderName.content} where placeholderName is a relevant name.
// Text placeholders are only one level deep. {text.placeholderName.content} is correct, but {text.objectname.placeholderName.content} is not correct.
// There is a typography variant h3 at the top of the UI content you created that acts as a title
// Standard text content uses typography variant h2
// CardMedia components do not have a fixed height - otherwise they get set too small
// Elements like TextFields are attempting to fill as much horizontal width as possible within their containing elements.
// Any images required are imported using the CreateReactApp standard method of import as shown below.
// END RULES

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
      <div>{/* You may only add UI content within this div */}</div>
      {/* This div makes the right hand border and should remain */}
      <div style={{ flexBasis: "30vw", minWidth: "5vw" }}></div>
    </div>
  );
}
