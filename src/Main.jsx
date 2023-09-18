// RULES:
// All filenames and component names from the specification are correctly included.
// All input props for components are as specified in the specification
// END RULES

// React imports
import React from "react";

// Project imports
import HoldingPage from "landingPageComponents/HoldingPage";

// Gradient
// Always include this component.
import Gradient from "./landingPageComponents/Gradient";

// image component imports go here
// Always assume the images will be in @/assets/images
// An example is:
// import imageName from "@/assets/images/imageFileName.png";

// Footer
// Always include this component
// Parameters: None
import Footer from "./landingPageComponents/Footer";

// Always include this import
import text from "@/assets/text/text.json";

// custom imports go here
// - Importantly, all custom components will end up in ./landingPageComponents/ so all custom imports should assume the file is located there
// - In comments above the import you should show example usage taking special note of the expected signature from the specification.

export default function Main() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* Initial holding page content, this should be replaced. */}
      <HoldingPage />
    </div>
  );
}
