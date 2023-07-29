// Rules:
// Adhere to the specification closely - paying attention to the filenames, names and parameters of any custom components.
// For each component, there should be a comment inserted directly above the usage of the component explaining its purpose in the page.
// Also, for each parameter a comment should be inserted directly above the usage of the component. The comment should clearly specify any constraints or expected ranges of values (e.g. length of the text or dimensions of the image).
// The constraints for parameters are shown in the definitions.
// Including a comment per parameter above each component in the code is vital. Without this, the downstream content generating code will not function.

// React imports

// Project imports

// Gradient
// Always include this component.
import Gradient from "./landingPageComponents/backgroundGradient";

// images imports
// always assume the images will be in ./assets/images
// An example is:
import horseStableImage from "./assets/images/horseStableImage.png";

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

      {/* Add content sections here */}
      {/* End content sections here */}

      {/* All pages have a Footer */}
      <Footer />
    </div>
  );
}
