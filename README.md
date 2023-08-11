// To write a specification, choose which base components you will use, which custom components (if any) you need to create and which order you will place the components on the page.
// You will always add the Main base component to the components list as this is required to host other components.
// Any functionality not available using base components should be implemented as a single, self contained new custom component. This is because we currently have no way for components to safely communicate with each other.
// Custom components are therefore forbidden from having input props - they must be entirely self sufficient.
// Each compoment (including Main) should have a sub specification which a junior developer could use to code the component without further reference.
// The sub specifications should have a clear fileName and component name so that the component can be properly imported

// The base components are:
// Main: The main page component which hosts the other components. It is a template which must be completed by adding the other components that you need. The template file is: src/Main.js.
// HeroApp: A hero image, a headline text, tag line and three point bullet list of key features. There is also an email sign up box. This component is perfect for landing / marketing pages requiring a sign up and must be placed at the top of the page.
// HeroStandard: A hero image, headline text and tag line. Perfect as an introduction to non landing page sites where no signup box is required.
// Fullbleedimage: A full page width image with no labelling, perfect for bringing products or features to life.
// Headline: A headline and then a detailed text paragraph in one component.
// TrailingSignup: An end of page signup box which should always be included only if HeroApp has also been included.
// Custom: Customer components can be added to include other requirements. Custom components should:
// - Be based on the custom template found at: src/landingPageComponents/customSection.js
// DeployInputs:
// This package provides a vertically scrolling website built using Material UI and React.
// If HeroApp or TrailingSignup have been added to the specification then the following deployInput types should be added: Database.API.PostOnly and a deployInput of type: Database.Dynamo.Admin.SiteUrl.
// If HeroApp and TrailingSignup are not part of the specification, then no deployInputs should be added.

// RULES:
// The components list contains Main as this is a required component.
// Each custom piece of functionality is handled by a single new custom component containing all the UI, logic and data it requires. For example: Correct: One custom component containing UI and logic is correct. Wrong: One custom component for UI and another separate component for output.
// Functionality already provided by the base components is not replicated in custom components.
// The sub specifications for each component contain all equations and algorithms required for a junior developer to be able to build the code. The junior developer has no access to anything other than the specification for the component.
// Custom components have no props and this is called out in the specification explicity
// Each component has a sub specification containing the component name and fileName
// If the base component HeroApp is in the components list, the base component TrailingSignup should also be in the components list. If HeroApp is not in the component list, TrailingSignup should not be in the component list.
// END RULES
