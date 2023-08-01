// RULES:
// All filenames and component names from the specification are correctly included.
// The file should only contain a single component (App).
// Any text strings have been replaced with a placeholder of the following format: {text.placeHolderName.content} where placeholderName is a relevant name.
// Text placeholders are only one level deep. {text.placeholderName.content} is correct, but {text.objectname.placeholderName.content} is not correct.
// Any images required for this page have been included using the CreateReactApp standard import approach as shown below.
// We are not attempting to pass any props to custom components
// We are not attempting to use any components not mentioned in the definitions or new custom components section.
// END RULES

// React imports

// Project imports

// Gradient
// Always include this component.
import Gradient from "./landingPageComponents/backgroundGradient";

// images imports
// The only way images should be included is using the CreateReactApp approach, an example of which is shown below.
// Always assume the images will be in ./assets/images
// An example is:
import horseStableImage from "./assets/images/horseStableImage.png";
// They can then be used as sources like this: {horseStableImage}.

// Footer
// Always include this component
// Parameters: None
import Footer from "./landingPageComponents/footer";

// Always include this import
import text from "assets/text/text.json";

// custom imports go here
// - Importantly, all custom components will end up in ./landingPageComponents/ so all custom imports should assume the file is located there
// - In comments above the import you should show example usage taking special note of the expected signature from the specification.

export default function App() {
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
