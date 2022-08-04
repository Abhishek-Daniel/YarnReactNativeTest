import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, screen, fireEvent } from "@testing-library/react-native";

import App from "../App";
import jestConfig from "../jest.config";
import { act } from "react-test-renderer";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("Testing react Login navigation", () => {
  test("page contains password as Placeholder", async () => {
    const component = <App />;

    render(component);

    const login = await screen.findByPlaceholderText("Password");
    // const email = await screen.findByPlaceholderText();
    const pr = await login;
    console.log("props1!!!!", pr.props);
    // console.log("props2!!", pr.props);

    // expect(email).toBeTruthy();
    expect(pr.props.placeholder).toMatch(/password/i);
    expect(login).toBeTruthy();
  });
});

describe("Testing react Login navigation", () => {
  test("page contains password as Placeholder", async () => {
    const { debug } = render(<App />);
    debug();

    const SkiploginButton = await screen.findByText("SkipLogin");

    console.log(SkiploginButton.props);
    // console.log(SkiploginButton.props.onChangeText((name) => {}));

    fireEvent(SkiploginButton, "press");

    const home = await screen.findByTestId("passingProp");

    debug();
    console.log(home.props);
  });
});
