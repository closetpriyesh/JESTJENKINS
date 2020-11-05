const CommonSteps = ({ then, when }) => {
  when("user is on home page", () => {});
  then(/^user verifies (.*)$/, (arg0) => {
    console.log(arg0);
  });
};

module.exports.CommonSteps = CommonSteps;
