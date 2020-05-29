import React from "react";
import App from "../App";

import renderer from "react-test-renderer";

test("First snapshot test", () => {
  const component = renderer.create(<App />);
  let tree = component.toJason();

  expect(tree).toMatchSnapshot();
});

//installed Jest - Snapshot
//at the terminal, I installed 'npm install react-test-renderer
//created an 'App.test.js folder and added code to 'test' App.js
//at the terminal type 'npm test'

//NOTE: I installed 'npm install jest' by mistake and attempted to uninstall; however,
//I think it's causing an error when the test in ran.
