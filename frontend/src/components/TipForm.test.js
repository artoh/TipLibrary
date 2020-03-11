import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import TipForm from "./TipForm";

describe("TipForm", () => {
  test("Component can be created", () => {
    const component = render(<TipForm />)
    expect(component.container).toHaveTextContent('New tip')
  });
});