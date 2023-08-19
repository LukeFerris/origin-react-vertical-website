1. Component Selection

Which base and custom components will be required?

// RULES:
// Always add the Main custom component to the customComponents list as this is required to host other components. It will have a fileName of Main.js.
// Any functionality not available using base components should be implemented as a single, self contained new custom component - you should not have separate components for UI, logic and results.
// END RULES

The components available to you are:

// The base components and their arguments are:
// Gradient
// A background gradient which is always included.
// Parameters: None
import Gradient from './landingPageComponents/Gradient';

// FullBleedImage
// A full page width image with no labelling, perfect for bringing products or features to life.
// Parameters:
// - imageAltTag: A highly descriptive image tag of between 10-30 words.
// - imageSrc: The image src of an image with dimensions width: 1600px height: 1000px
import FullBleedImage from './landingPageComponents/FullBleedImage';

// Headline
// A headline and then a detailed text paragraph in one component.
// Parameters:
// - headline: The headline text 3-5 words.
// - subText: A paragraph of descriptive text related to the headline between 15-30 words
import Headline from './landingPageComponents/Headline';

// TrailingSignup
// An end of page signup box which should always be included only if HeroApp has also been included.
// Parameters:
// - buttonText: 1-3 word call to action
import TrailingSignup from './landingPageComponents/TrailingSignup';

// Footer
// A footer section for the page - this is always included
// Parameters: None
import Footer from './landingPageComponents/Footer';

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
import HeroApp from './landingPageComponents/HeroApp';

// HeroStandard
// A hero image, headline text and tag line. Perfect as an introduction to non landing page sites where no signup box is required.
// Parameters:
// - mainHeading: 1-4 words
// - subHeading: 30-50 words that act as a page description.
// - screenMockUpSrc: The src of an image with width 1600px and height: 1400px. This will be shown on the right hand side of the page
// - imageAltTag: Detailed alt text for the image, should contain the keywords '4K photo shoot'
import HeroStandard from './landingPageComponents/HeroStandard';

// The custom components are:
// Main: The main page component which hosts the other components. It is a template which must be completed by adding the other components that you need. The template file is: src/Main.js.
// Custom: Customer components can be added to include other requirements. They should be based on the custom template found at: src/landingPageComponents/customSection.js

2. Component specification

Complete a specification for each component which is detailed enough for a junior developer to use it to code the component.

// Base components like Headline or HeroApp should be added to the baseComponents list if you plan on using them at least once in the page.

// Custom components are forbidden from having input props - they must be entirely self sufficient.
// Each customCompoment and baseComponent (including Main) should have a sub specification which a junior developer could use to code the component without further reference.

// The base components and their arguments are:
// Gradient
// A background gradient which is always included.
// Parameters: None
import Gradient from './landingPageComponents/Gradient';

// Footer
// A footer section for the page - this is always included
// Parameters: None
import Footer from './landingPageComponents/Footer';

//// HeroApp
Importantly, HeroApp should only be used when an email sign up function has been explicitly requested for a marketing landing page. It should not be used for general bespoke websites. Do not use this component in the specification unless the goal is explicitly a marketing landing page and explicitly requires an email sign up requested by the user. This component is perfect for landing / marketing pages requiring a sign up and must be placed at the top of a container component. It is not stand alone. It has a hero image, a headline text, tag line and three point bullet list of key features. There is also an email sign up box.
// Parameters:

- mainHeading: 1-4 words
- subHeading: 10-15 words that act as a product tagline.
- keyFeature1: 10-15 words on the first key feature of the product to highlight
- keyFeature2: 10-15 words on the second key feature of the product to highlight
- keyFeature3: 10-15 words on the third key feature of the product to highlight
- imageSrc: An image src to an imported image with width 290px and height: 624px.
- imageAltTag: A highly descriptive image tag of between 10-30 words that describe an aspirational image related to the product/service
- buttonText: One or two words that relate to the call to action of this site. E.g. request invite or subsribe or start.
  // Deploy Inputs
- Database.API.PostOnly
- Database.Dynamo.Admin.SiteUrl
  // Example Import
  import HeroApp from './landingPageComponents/HeroApp';

// HeroStandard
// A hero image, headline text and tag line. Perfect as an introduction to non landing page sites where no signup box is required. Should appear at the top of the container component.
// Parameters:
// - mainHeading: 1-4 words
// - subHeading: 30-50 words that act as a page description.
// - imageSrc: An image src to an imported image with width 1600px and height: 1400px. This will be shown on the right hand side of the page
// - imageAltTag: Detailed alt text for the image, should contain the keywords '4K photo shoot' and the dimensions width: 1600px and height: 1400px
import HeroStandard from './landingPageComponents/HeroStandard';

//// TrailingSignup
An end of page signup box which should always be included only if HeroApp has also been included.
// Parameters:

- buttonText: 1-3 word call to action
  // Deploy Inputs
- Database.API.PostOnly
- Database.Dynamo.Admin.SiteUrl
  // Example Import
  import TrailingSignup from './landingPageComponents/TrailingSignup';

// Headline
// A headline and then a detailed text paragraph in one component.
// Parameters:
// - headline: The headline text 3-5 words.
// - subText: A paragraph of descriptive text related to the headline between 15-30 words
import Headline from './landingPageComponents/Headline';

// FullBleedImage
// A full page width image with no labelling, perfect for bringing products or features to life or for the top of a bespoke website
// Parameters:
// - imageAltTag: A highly descriptive image tag of between 10-30 words that contains width: 1600px and height: 1000px.
// - imageSrc: A src to an imported image with dimensions width: 1600px height: 1000px
import FullBleedImage from './landingPageComponents/FullBleedImage';

// The container components are:
// Main: The main page component which hosts the other components. It is a template which must be completed by adding the other components that you need. The template file is: src/Main.js and file name is always Main.js. It has no inputs.

// The custom components are:
// Custom: Customer components can be added to include other requirements. They should be based on the custom template found at: src/landingPageComponents/customSection.js

// DeployInputs:
// If HeroApp or TrailingSignup have been added to the specification then the following deployInput types should be added: Database.API.PostOnly and a deployInput of type: Database.Dynamo.Admin.SiteUrl.
// If HeroApp and TrailingSignup are not part of the specification, then no deployInputs should be added.

// RULES:
// customComponents contains Main as this is a required customisable component. It has a fileName of Main.js
// You have not added any base components to the customComponents list
// Each custom piece of functionality is handled by a single new custom component containing all the UI, logic and data it requires. For example: Correct: One custom component containing UI and logic is correct. Wrong: One custom component for UI and another separate component for output.
// baseComponents have specifications that detail the input arguments to be used including the name of the input arguments
// Functionality already provided by the base components is not replicated in custom components.
// The specifications is sufficient for a junior developer to be able to build the code. The junior developer has no access to anything other than the specification. For example, any algorithms or equations required should be detailed in a step by step list.
// Custom components have no props and this is called out in the specification explicity
// Each custom component has a sub specification containing the component name and fileName
// If the base component HeroApp is in the baseComponents list, the base component TrailingSignup should also be in the baseComponents list. If HeroApp is not in the baseComponents list, TrailingSignup should not be in the baseComponents list.
// END RULES
