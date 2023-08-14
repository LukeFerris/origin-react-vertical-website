// RULES:
// The component name is the name mentioned in the specification.
// There is a typography variant h3 at the top of the UI content you created that acts as a title.
// Elements are not touching each other - they have margin separating them of 15px where required.
// The component is self contained with no props required.
// Any text strings have been replaced with a placeholder of the following format: {text.placeHolderName.content} where placeholderName is a relevant name.
// No text placeholders have 4 parts, they should always have 3 parts. Common mistakes here involve adding the component name as a part: e.g. This is WRONG: {text.componentName.placeholderName.content}.
// Text placeholders always finish with .content. e.g. {text.placeholderName.content}
// If there are CardMedia components (not required), they do not have a fixed height - otherwise they get set too small
// Elements like TextFields are attempting to fill as much horizontal width as possible within their containing elements.
// Elements do not change size dependent on the content they contain.
// Any images on the page (images are not compulsory) have been imported using the CreateReactApp standard method of import.
// There are no missing algorithms or placeholders for logic.
// END RULES

// You can assume Material UI (MUI) components and anything present as standard in CreateReactApp
import { Typography } from "@mui/material";

// Always include this import
import text from "../assets/text/text.json";

// images imports
// If an image is present on the page, it should be imported using the CreateReactApp approach, an example of which is shown below.
// Always assume the images will be in ./assets/images
// An example is:
// import imageName from "./assets/images/imageFileName.png";
// They can then be used as sources like this: {imageName}.

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
