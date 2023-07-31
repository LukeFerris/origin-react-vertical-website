// How to write a specification for this package:
// This package is a container for vertically scrolling standard websites.
// It contains a number of components which you can use once or many times on the site as you require.
// To write a specification, choose which existing components you will use, which custom components (if any) you need to create and which order you will place the components.
// You should include in this specification a detailed sub specification for each custom component you require including the name of the component, the fileName and any required input parameters such that it can be properly imported
// Custom components should be functionally self sufficient in that they contain all logic and UI required to function.
// However any content like images, text and default values should still be passed as input parameters to the new component.
// The components are:
// HeroApp: A hero image, a headline text, tag line and three point bullet list of key features. There is also an email sign up box. This component is perfect for landing / marketing pages requiring a sign up and must be placed at the top of the page. Requires: A deployInput of type: Database.API.PostOnly and a deployInput of type: PrivateAdminSiteUrl
// HeroStandard: A hero image, headline text and tag line. Perfect as an introduction to non landing page sites where no signup box is required.
// Fullbleedimage: A full page width image with no labelling, perfect for bringing products or features to life.
// Headline: A headline and then a detailed text paragraph in one component.
// TrailingSignup: An end of page signup box which should always be included only if HeroApp has also been included.
// Custom: Customer components can be added to include other requirements. Custom components should be based on the custom template found at: src/landingPageComponents/customSection.js, contain a centered header typography of variant=h2 and take as inputs any content required (e.g. images and text).
// Layout rules:
// Never use two components of the same type next to each other on the page (e.g. two FullBleedImage component should be separated by another component type like Headline)
