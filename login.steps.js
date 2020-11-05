const { loadFeatures, autoBindSteps } = require("jest-cucumber");
const { CommonSteps } = require("./common.steps");
const { LoginSteps } = require("./newLogin.steps");
const features = loadFeatures("/Users/techcloset/Desktop/JEST/login.feature");
autoBindSteps(features, [CommonSteps, LoginSteps]);
// defineFeature(feature, (test) => {
//   test("<element> test", ({ when, then }) => {
//     when("user is on home page", () => {});

//     then(/^user verifies (.*)$/, (arg0) => {});
//   });
// });
