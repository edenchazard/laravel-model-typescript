import { Model } from "./handler";

const testModel = {};
const someFetchRequest = {
  data: [
    // ... models
  ],
};

const myExampleModel = Model.of("App\\Models\\Item", testModel);

// We get intellisense here for the attributes.
myExampleModel.id;

// Here, it knows it doesn't exist, so we get a warning.
myExampleModel.propertyDoesntExist;

// What if we want a collection of these models?

// Oh no, IDE warns because Model of type "Example" doesn't exist. That's useful!
Model.collection("App\\Models\\Example", someFetchRequest.data);

// On the other hand... Contacts are a thing.
const contacts = Model.collection(
  "App\\Models\\Contact",
  someFetchRequest.data
);

// We get an array of Contact typed-models. :)
const contact1 = contacts.find((model) => model.id === 1);

if (contact1) {
  // firstName is always available.
  contact1.firstName;

  // 'property' of the contact model could possibly be undefined.
  contact1.property;
}
