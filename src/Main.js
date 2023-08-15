// RULES:
// All filenames and component names from the specification are correctly included.
// The file should only contain a single component (App).
// Any text strings have been replaced with a placeholder of the following format which always finished with .content: {text.Main.placeHolderName.content} where placeholderName is a relevant name
// Each text string has a comment which describes the length and type of content to generate
// Any images present on the page have been included using the CreateReactApp standard import approach.
// All input args for components are as specified in the specification
// END RULES

// React imports
import React, { useState } from "react";

// Project imports

// Gradient
// Always include this component.
import Gradient from "./landingPageComponents/Gradient";

// images imports
// If images are included on the page, they should be imported using the CreateReactApp approach, an example of which is shown below.
// Always assume the images will be in ./assets/images
// An example is:
// import imageName from "./assets/images/imageFileName.png";
// They can then be used as sources like this: {imageName}.

// Footer
// Always include this component
// Parameters: None
import Footer from "./landingPageComponents/Footer";

// Always include this import
import text from "assets/text/text.json";

// custom imports go here
// - Importantly, all custom components will end up in ./landingPageComponents/ so all custom imports should assume the file is located there
// - In comments above the import you should show example usage taking special note of the expected signature from the specification.

export default function Main() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* All pages have Gradient */}
      <Gradient />

      {/* Add chosen components here */}
      {/* End content sections here */}
      {/* All pages have a Footer */}
      <Footer />
    </div>
  );
}
