// React imports

// Project imports
import Gradient from "./landingPageComponents/backgroundGradient";

// images imports
// always assume the images will be in ./assets/images
import productBeingUsedInRealLife from "./assets/images/productBeingUsedInRealLife.png";
import aspirationalAppImage from "./assets/images/aspirationalAppImage.png";

// FullBleedImage is a Dark component and shows an image that spans the entire width of the page
// Type: Dark
// Inputs:
// - imageAltTag: A highly descriptive image tag of between 10-30 words.
// - imageSrcWidth1600pxHeight900px: The image src following createReactApp style as per the template above.
import FullBleedImage from "./landingPageComponents/fullBleedImage";

// Headline is a Light component and shows a title and paragraph of descriptive text
// Type: Light
// Inputs:
// - headline: The headline text 3-5 words.
// - subText: A paragraph of descriptive text related to the headline between 15-30 words
import Headline from "./landingPageComponents/headline";

// An import for a trailing signup box
// Type: Dark
import TrailingSignup from "./landingPageComponents/trailingSignup";

// Footer is used for all sites
// Type: Light
import Footer from "./landingPageComponents/footer";

// HeroApp is a Landing Page Hero component that goes at the top of the page whenever a sign up box is required on a landing page. It shows a visual image, a headline and a signup box
// Type: Dark
// Inputs:
// - mainHeading_3to5Words: 1-4 words
// - subHeading_15to20Words: 10-15 words that act as a product tagline.
// - keyFeature1_5to15Words: 10-15 words on the first key feature of the product to highlight
// - keyFeature2_5to15Words: 10-15 words on the second key feature of the product to highlight
// - keyFeature3_5to15Words: 10-15 words on the third key feature of the product to highlight
// - screenMockUpSrc: The src of an image with width 290px and height: 624px. This will be shown embedded in the iphone mockup.
// - imageAltTag: A highly descriptive image tag of between 10-30 words that describe an aspirational image related to the product/service
// - buttonText: One or two words that relate to the call to action of this site. E.g. request invite or subsribe or start.
import HeroApp from "./landingPageComponents/heroApp";

// HeroStandard is a Hero component for pages that do not require a sign up box. It goes at the top of the page. It shows a visual image, headline and a paragraph of descriptive text
// Type: Dark
// Inputs:
// - mainHeading_3_Words: 1-4 words
// - subHeading_30to50Words: 30-50 words that act as a page description.
// - screenMockUpSrcWidth1600pxHeight1400px: The src of an image with width 1600px and height: 1400px. This will be shown on the right hand side of the page
// - imageAltTag: Image alt for the image, should be a variantion of "4K photo shoot hero image of product being used in real life"
import HeroStandard from "./landingPageComponents/heroStandard";

// the hardcoded expectation is that the text json file will be here.
// all components are passed this object so that they have access to the text content of the site
import text from "assets/text/text.json";

// this page is a container for vertically scrolling standard websites.
// the layout rules are as follows:
// - For landing pages or marketing pages, the page must start with a component of type Origin.React.LandingPage.HeroWithSignUpBox
// - For more bespoke websites, HeroWithSignUpBox does not need to be included and will likely feature more modifications.
// - Landing pages should have a TrailingSignup just before the footer.
// - More bespoke pages do not need to include a TrailingSignup.
// - Components should alternative between dark and light to give the right aesthetic.
// - The page should finish with an Origin.React.LandingPage.Footer component
// - Pay very close attention to the case of custom component filenames. Use the casing found in the package specification.
// - E.g. if the package specification shows the file name as Testimonials.js then make sure you import from Testimonials not testimonials (note the change in first letter case)
// - Content for inputs to custom components should be constructed on this page, with only strings being pulled from text.json

// the content rules are as follows:
// - All text is generated later and contained in the text.json file
// - You must use descriptive text placeholders to show which content is required and include the target length of the content in the name
// - It is vital that the placeholders you generate are highly descriptive and incorporate the detailed purpose of the image and the word count range
// - e.g. text.An_Alt_Tag_For_A_4K_Aspirational_Image_Of_A_Hotel_Room_15_30_Words.
// - All strings should be replaced by text placeholders.
// - Image alt tags should generally include the words 4K photo shoot

// custom imports go here
// - Importantly, all custom components will end up in ./landingPageComponents/ so all custom imports should assume the file is located there
// - In comments above the import you should show example usage taking special note of the expected signature from the specification: [PACKAGE_SPECIFICATION]

export default function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Gradient />
      {/* An Example layout for landing pages is shown below. This should be changed */}
      {/* Choice of heroApp or heroStandard dependent on what type of product it is */}
      <HeroApp
        mainHeading_3to5Words="Experience Insect Cuisine"
        subHeading_15to20Words="London's first ever restaurant that serves only insects"
        keyFeature1_5to15Words="Eat bug, wasps and worms."
        keyFeature2_5to15Words="Suprise your friends with your culinary superiority"
        keyFeature3_5to15Words="Reap new health benefits and save the planet"
        screenMockUpSrcWidth290pxHeight624px={aspirationalAppImage}
        imageAltTag="4K photo shoot hero image of product being used in real life (never a logo!)"
        buttonText="1-2 words only e.g. Request Invite"
      />
      {/* End Hero */}
      {/* First light section goes here */}
      <Headline
        headline={text.Key_Benefit_1_Headline_Text}
        subText={text.Key_Benefit_1_Detailed_Paragraph}
      />
      {/* End First light section */}
      {/* First Dark section goes here */}
      <FullBleedImage
        imageSrcWidth1600pxHeight900px={productBeingUsedInRealLife}
        imageAltTag={text.A_long_descriptive_alt_tag_for_the_image_10_30_words}
      />
      {/* End first Dark section */}
      {/* Dark and light sections continue here as required */}
      <Headline
        headline={text.Text_headline_3_to_5_words}
        subText={text.Text_paragraph_of_between_15_and_30_words}
      />
      {/* End Additional Sections */}
      {/* Trailing signup is only relevant on landing pages */}
      <TrailingSignup buttonText={text.Button_text_1_to_2_words_only} />

      {/* We always include the footer */}
      <Footer />
      {/* End Example Layout */}
    </div>
  );
}
