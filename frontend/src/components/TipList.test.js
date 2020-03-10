import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import TipList from "./TipList";

describe("TipList", () => {
  test("Component can be created", () => {
    const component = render("<TipList> ")
    expect(component.container).toHaveTextContent('Tip')
  });
});
