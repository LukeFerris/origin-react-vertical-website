// Rules:
// Adhere to the specification closely - paying attention to the filenames, names and parameters of any custom components.
// The parameters required for each non-custom compenent are specified in comments above the component's import statement below
// The parameters required for custom components are included in the specification.
// Any parameters and inputs that require text strings should be replaced with a placeholder of the following format: text.APlaceholderName. These placeholders will be replaced with text content later
// For each text parameter you should leave a comment above the component describing the required content and it's required length e.g. // - imageAltTag: A highly descriptive image tag of between 10-30 words.
// The definitions for text length can be found above the import statement of the associated component.
// Any parameters that require images should be replaced with an image import using the standard createReactApp method.
// For images, it is important that the dimensions of the image (if specified for the parameter in the content below) is included as a comment above the component in the content.
// This is so that the image generation process can pick this information up later.
// An example usage of a component (to be removed) is as follows - note the inclusion of the important comments above the component:

{
  /* FullBleedImage showing the unique horse riding stables in our hotel */
}
{
  /* imageAltTag: A highly descriptive image tag of between 10-30 words */
}
{
  /* imageSrc: The image src included above using createReactApp style with dimensions Width: 200px, Height: 640px */
}
<FullBleedImage
  imageAltTag={text.uniqueHorseStablesImageAltTag}
  imageSrc={horseStableImage}
/>;

// React imports

// Project imports

// Gradient
// Protected
// Parameters: None
import Gradient from "./landingPageComponents/backgroundGradient";

// images imports
// always assume the images will be in ./assets/images
// An example is:
import horseStableImage from "./assets/images/horseStableImage.png";

// FullBleedImage
// When you use this component, include a comment directly above it indicating the image dimensions should be 1600px by 900px
// Parameters:
// - imageAltTag: A highly descriptive image tag of between 10-30 words.
// - imageSrc: The image src following createReactApp style as per the examples above.
import FullBleedImage from "./landingPageComponents/fullBleedImage";

// Headline
// Parameters:
// - headline: The headline text 3-5 words.
// - subText: A paragraph of descriptive text related to the headline between 15-30 words
import Headline from "./landingPageComponents/headline";

// TrailingSignup
// Parameters: None
import TrailingSignup from "./landingPageComponents/trailingSignup";

// Footer
// Protected
// Parameters: None
import Footer from "./landingPageComponents/footer";

// HeroApp
// When you use this component, include a comment directly above it indicating the image dimensions should be 290px by 624px
// Parameters:
// - mainHeading: 1-4 words
// - subHeading: 10-15 words that act as a product tagline.
// - keyFeature1: 10-15 words on the first key feature of the product to highlight
// - keyFeature2: 10-15 words on the second key feature of the product to highlight
// - keyFeature3: 10-15 words on the third key feature of the product to highlight
// - screenMockUpSrc: The src of an image with width 290px and height: 624px. This will be shown embedded in the iphone mockup.
// - imageAltTag: A highly descriptive image tag of between 10-30 words that describe an aspirational image related to the product/service
// - buttonText: One or two words that relate to the call to action of this site. E.g. request invite or subsribe or start.
import HeroApp from "./landingPageComponents/heroApp";

// HeroStandard
// When you use this component, include a comment directly above it indicating the image dimensions should be 1600px by 1400px
// Parameters:
// - mainHeading: 1-4 words
// - subHeading: 30-50 words that act as a page description.
// - screenMockUpSrc: The src of an image with width 1600px and height: 1400px. This will be shown on the right hand side of the page
// - imageAltTag: Detailed alt text for the image, should contain the keywords "4K photo shoot"
import HeroStandard from "./landingPageComponents/heroStandard";

// Protected
import text from "assets/text/text.json";

// custom imports go here
// - Importantly, all custom components will end up in ./landingPageComponents/ so all custom imports should assume the file is located there
// - In comments above the import you should show example usage taking special note of the expected signature from the specification: [PACKAGE_SPECIFICATION]

export default function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* All pages have Gradient */}
      <Gradient />

      {/* Add content sections here */}

      {/* An example of how your final additions should look, including details of text length */}

      {/* FullBleedImage showing the unique horse riding stables in our hotel */}
      {/* imageAltTag: A highly descriptive image tag of between 10-30 words */}
      {/* imageSrc: The image src included above using createReactApp style with dimensions Width: 200px, Height: 640px */}
      <FullBleedImage
        imageAltTag={text.uniqueHorseStablesImageAltTag}
        imageSrc={horseStableImage}
      />

      {/* End example */}

      {/* End content sections here */}

      {/* All pages have a Footer */}
      <Footer />
    </div>
  );
}
