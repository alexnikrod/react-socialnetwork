import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props shoud be in the state", () => {
    const component = create(<ProfileStatus status={"i'm alive"} />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("i'm alive");
  });

  test("after creation span should be dispayed", () => {
    const component = create(<ProfileStatus status={"i'm alive"} />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation span should contain correct status", () => {
    const component = create(<ProfileStatus status={"i'm alive"} />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.children[0]).toBe("i'm alive");
  });

  test("after creation input should not be dispayed", () => {
    const component = create(<ProfileStatus status={"i'm alive"} />);
    const instance = component.root;
    expect(() => {
      const input = instance.findByType("input");
    }).toThrow();
  });

  test("input should be displayed instead of span", () => {
    const component = create(<ProfileStatus status={"i'm alive"} />);
    const instance = component.root;
    const span = instance.findByType("span");
    span.props.onDoubleClick();
    const input = instance.findByType("input");
    expect(input.props.value).toBe("i'm alive");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status={"i'm alive"} updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
