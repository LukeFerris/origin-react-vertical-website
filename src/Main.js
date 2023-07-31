// Rules:
// Adhere to the specification closely - paying attention to the filenames, names and parameters of any custom components.
// Any text strings should be replaced with a placeholder of the following format: {text.placeHolderName.content} where placeholderName is a relevant name.

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

      {/* Add chosen components here */}
      {/* End content sections here */}

      {/* All pages have a Footer */}
      <Footer />
    </div>
  );
}
