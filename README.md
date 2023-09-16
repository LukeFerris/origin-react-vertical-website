////// General Guidance
At minimum, all pages have a Gradient and Footer base component.
Bespoke pages should generally have Gradient, Footer, Custom components and optionally Headlines, FullBleedImages and HeroStandard.
Marketing landing pages should have Gradient, Footer, HeroApp, one or more Headlines, one or more FullBleedImages and a TrailingSignup
////// Base components
//// Gradient
// A background gradient which is always included.
// Parameters: None
// Example Import
// import Gradient from './landingPageComponents/Gradient';

//// HoldingPage
// Only used as a holding page before a new specification is created. You should not use this component.
// Parameters: None
// Example Import
// import HoldingPage from './landingPageComponents/HoldingPage';

//// Footer
// A footer section for the page - this is always included
// Parameters: None
// Example Import
// import Footer from './landingPageComponents/Footer';

//// HeroApp
// Importantly, HeroApp should only be used when an email sign up function has been explicitly requested for a marketing landing page. It should not be used for general bespoke websites. Do not use this component in the specification unless the goal is explicitly a marketing landing page and explicitly requires an email sign up requested by the user. This component is perfect for landing / marketing pages requiring a sign up and must be placed at the top of a container component. It is not stand alone. It has a hero image, a headline text, tag line and three point bullet list of key features. There is also an email sign up box.
// Parameters:
// - mainHeading: 1-4 words
// - subHeading: 10-15 words that act as a product tagline.
// - keyFeature1: 10-15 words on the first key feature of the product to highlight
// - keyFeature2: 10-15 words on the second key feature of the product to highlight
// - keyFeature3: 10-15 words on the third key feature of the product to highlight
// - imageSrc: An image src to an imported image with width 290px and height: 624px.
// - imageAltTag: A highly descriptive image tag of between 10-30 words that describe an aspirational image related to the product/service
// - buttonText: One or two words that relate to the call to action of this site. E.g. request invite or subsribe or start.
// Example Import
// import HeroApp from './landingPageComponents/HeroApp';

//// HeroStandard
// A hero image, headline text and tag line. Perfect as an introduction to non landing page sites where no signup box is required. Should appear at the top of the container component.
// Parameters:
// - mainHeading: 1-4 words
// - subHeading: 30-50 words that act as a page description.
// - imageSrc: An image src to an imported image with width 1600px and height: 1400px. This will be shown on the right hand side of the page
// - imageAltTag: Detailed alt text for the image, should contain the keywords '4K photo shoot' and the dimensions width: 1600px and height: 1400px
// Example Import
// import HeroStandard from './landingPageComponents/HeroStandard';

//// TrailingSignup
// An end of page signup box which should always be included only if HeroApp has also been included.
// Parameters:
// - buttonText: 1-3 word call to action
// Example Import
// import TrailingSignup from './landingPageComponents/TrailingSignup';

//// Headline
// A headline and then a detailed text paragraph in one component.
// Parameters:
// - headline: The headline text 3-5 words.
// - subText: A paragraph of descriptive text related to the headline between 15-30 words
// Example Import
// import Headline from './landingPageComponents/Headline';

//// FullBleedImage
// A full page width image with no labelling, perfect for bringing products or features to life or for the top of a bespoke website
// Parameters:
// - imageAltTag: A highly descriptive image tag of between 10-30 words that contains width: 1600px and height: 1000px.
// - imageSrc: A src to an imported image with dimensions width: 1600px height: 1000px
// Example Import
// import FullBleedImage from './landingPageComponents/FullBleedImage';

////// Container components
//// Main
// The main page component which hosts the other components. It is a template which must be completed by adding the other components that you need. The template file is: src/Main.jsx and file name is always Main.jsx.
// Parameters: None

////// Custom components
//// Custom
// Customer components can be added to include other requirements. They should be based on the custom template found at: src/landingPageComponents/customSection.jsx
