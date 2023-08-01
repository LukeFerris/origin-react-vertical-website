// To write a specification, choose which existing components you will use, which custom components (if any) you need to create and which order you will place the components.
// Any functionality not available using existing components should be implemented as a single, self contained new custom component. This is because we currently have no way for components to safely communicate with each other.
// Custom components are therefore forbidden from having input props - they must be entirely self sufficient.
// You should include in this specification a detailed sub specification for each custom component you require of at least three paragraphs per custom components - including the name of the component and the fileName such that it can be properly imported
// The existing components are:
// HeroApp: A hero image, a headline text, tag line and three point bullet list of key features. There is also an email sign up box. This component is perfect for landing / marketing pages requiring a sign up and must be placed at the top of the page.
// HeroStandard: A hero image, headline text and tag line. Perfect as an introduction to non landing page sites where no signup box is required.
// Fullbleedimage: A full page width image with no labelling, perfect for bringing products or features to life.
// Headline: A headline and then a detailed text paragraph in one component.
// TrailingSignup: An end of page signup box which should always be included only if HeroApp has also been included.
// Custom: Customer components can be added to include other requirements. Custom components should:
// - Be based on the custom template found at: src/landingPageComponents/customSection.js
// DeployInputs:
// - If HeroApp or TrailingSignup have been added to the specification then the following deployInput types should be added: Database.API.PostOnly and a deployInput of type: Database.Dynamo.Admin.SiteUrl.
// - If HeroApp and TrailingSignup are not part of the specification, then no deployInputs should be added.
// Layout rules:
// Never use two components of the same type next to each other on the page (e.g. two FullBleedImage component should be separated by another component type like Headline)
