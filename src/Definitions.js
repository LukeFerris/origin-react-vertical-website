// Gradient
// A background gradient which is always included.
// Parameters: None
import Gradient from "./landingPageComponents/backgroundGradient";

// FullBleedImage
// A full page width image with no labelling, perfect for bringing products or features to life.
// Parameters:
// - imageAltTag: A highly descriptive image tag of between 10-30 words.
// - imageSrc: The image src of an image with dimensions width: 1600px height: 1000px
import FullBleedImage from "./landingPageComponents/fullBleedImage";

// Headline
// A headline and then a detailed text paragraph in one component.
// Parameters:
// - headline: The headline text 3-5 words.
// - subText: A paragraph of descriptive text related to the headline between 15-30 words
import Headline from "./landingPageComponents/headline";

// TrailingSignup
// An end of page signup box which should always be included only if HeroApp has also been included.
// Parameters:
// - buttonText: 1-3 word call to action
import TrailingSignup from "./landingPageComponents/trailingSignup";

// Footer
// A footer section for the page - this is always included
// Parameters: None
import Footer from "./landingPageComponents/footer";

// HeroApp
// A hero image, a headline text, tag line and three point bullet list of key features. There is also an email sign up box. This component is perfect for landing / marketing pages requiring a sign up and must be placed at the top of the page.
// Parameters:
// - mainHeading: 1-4 words
// - subHeading: 10-15 words that act as a product tagline.
// - keyFeature1: 10-15 words on the first key feature of the product to highlight
// - keyFeature2: 10-15 words on the second key feature of the product to highlight
// - keyFeature3: 10-15 words on the third key feature of the product to highlight
// - screenMockUpSrc: The src of an image with width 290px and height: 624px.
// - imageAltTag: A highly descriptive image tag of between 10-30 words that describe an aspirational image related to the product/service
// - buttonText: One or two words that relate to the call to action of this site. E.g. request invite or subsribe or start.
import HeroApp from "./landingPageComponents/heroApp";

// HeroStandard
// A hero image, headline text and tag line. Perfect as an introduction to non landing page sites where no signup box is required.
// Parameters:
// - mainHeading: 1-4 words
// - subHeading: 30-50 words that act as a page description.
// - screenMockUpSrc: The src of an image with width 1600px and height: 1400px. This will be shown on the right hand side of the page
// - imageAltTag: Detailed alt text for the image, should contain the keywords "4K photo shoot"
import HeroStandard from "./landingPageComponents/heroStandard";
