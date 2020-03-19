import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import TipForm from "./TipForm";

describe("Not-expanded <TipForm> component", () => {

  test("Component renders title input field", () => {
    const component = render(<TipForm />)
    const field = component.container.querySelector("[name='title'")
    expect(field).toBeInTheDocument()
  })

  test("Component doest not render link input field", () => {
    const component = render(<TipForm />)
    const field = component.container.querySelector("[name='link'")
    expect(field).toBeNull()
  })

  test("Component doest not render create button", () => {
    const component = render(<TipForm />)
    const btn = component.container.querySelector("[name='create'")
    expect(btn).toBeNull()
  })

})

describe("Expanded <TipForm> component", () => {

  test("Component renders title input field", () => {
    const component = render(<TipForm />)
    const field = component.container.querySelector("[name='title'")
    expect(field).toBeInTheDocument()
  })

  test("Component renders link input field", () => {
    const component = render(<TipForm />)
    const titleField = component.container.querySelector("[name='title'")
    titleField.click()
    const field = component.container.querySelector("[name='link'")
    expect(field).toBeInTheDocument()
  })

  test("Component renders create button", () => {
    const component = render(<TipForm />)
    const titleField = component.container.querySelector("[name='title'")
    titleField.click()
    const btn = component.container.querySelector("[name='create'")
    expect(btn).toBeInTheDocument()
  })
})

describe("<TipForm> submission", () => {
  test("Form submits tip", () => {
    const newTip = {
      title: "New title",
      link: "New link"
    }

    const addMock = jest.fn()
    const component = render(<TipForm onAdd={addMock} />)
    const titleField = component.container.querySelector("[name='title'")
    titleField.click()
    fireEvent.change(titleField, { target: { value: newTip.title } })
    const linkField = component.container.querySelector("[name=link]")
    fireEvent.change(linkField, { target: { value: newTip.link } })
    const createBtn = component.container.querySelector("[name='create'")
    fireEvent.click(createBtn)
    expect(addMock.mock.calls.length).toBe(1)
    expect(addMock.mock.calls[0][0]).toStrictEqual(newTip)
  })
})