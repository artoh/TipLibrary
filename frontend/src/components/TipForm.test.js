import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import TipForm from "./TipForm";

describe("Not-expanded <TipForm> component", () => {

  test("Component renders title input field", () => {
    const component = render(<TipForm />)
    const titleField = component.container.querySelector("[name='title'")
    expect(titleField).toBeInTheDocument()
  })

  test("Component does not render link input field", () => {
    const component = render(<TipForm />)
    const linkField = component.container.querySelector("[name='link'")
    expect(linkField).toBeNull()
  })

  test("Component does not render description field", () => {
    const component = render(<TipForm />)
    const descriptionField = component.container.querySelector("[name='description'")
    expect(descriptionField).toBeNull()
  })

  test("Component does not render tag component", () => {
    const component = render(<TipForm />)
    expect(component.container).not.toHaveTextContent("tag3")
  })

  test("Component does not render create button", () => {
    const component = render(<TipForm />)
    const createBtn = component.container.querySelector("[name='create'")
    expect(createBtn).toBeNull()
  })

})

describe("Expanded <TipForm> component", () => {

  test("Component renders title input field", () => {
    const component = render(<TipForm />)
    const titleField = component.container.querySelector("[name='title'")
    titleField.click()
    expect(titleField).toBeInTheDocument()
  })

  test("Component renders link input field", () => {
    const component = render(<TipForm />)
    const titleField = component.container.querySelector("[name='title'")
    titleField.click()
    const linkField = component.container.querySelector("[name='link'")
    expect(linkField).toBeInTheDocument()
  })

  test("Component renders description input field", () => {
    const component = render(<TipForm />)
    const titleField = component.container.querySelector("[name='title'")
    titleField.click()
    const descriptionField = component.container.querySelector("[name='description'")
    expect(descriptionField).toBeInTheDocument()
  })

  test("Component renders tag component", () => {
    const component = render(<TipForm />)
    const titleField = component.container.querySelector("[name='title'")
    titleField.click()
    expect(component.container).toHaveTextContent("Tags")
  })


  test("Component renders create button", () => {
    const component = render(<TipForm />)
    const titleField = component.container.querySelector("[name='title'")
    titleField.click()
    const createBtn = component.container.querySelector("[name='create'")
    expect(createBtn).toBeInTheDocument()
  })
})

describe("<TipForm> input", () => {

  const newTip = {
    title: "New title",
    link: "New link",
    description: "New description",
    tags: ["omg"]
  }

  test("Form submits tip", () => {
    const addMock = jest.fn()
    const component = render(<TipForm onAdd={addMock} />)
    const titleField = component.container.querySelector("[name='title'")
    titleField.click()
    fireEvent.change(titleField, { target: { value: newTip.title } })
    const linkField = component.container.querySelector("[name='link'")
    fireEvent.change(linkField, { target: { value: newTip.link } })
    const descriptionField = component.container.querySelector("[name='description'")
    fireEvent.change(descriptionField, { target: { value: newTip.description } })
    const newtag = component.container.querySelector("[name=newtag]")
    fireEvent.change(newtag, { target: { value: newTip.tags[0] } })
    const addtag = component.container.querySelector("[name=addtag]")
    fireEvent.click(addtag)
    const createBtn = component.container.querySelector("[name='create'")
    fireEvent.click(createBtn)
    expect(addMock.mock.calls.length).toBe(1)
    expect(addMock.mock.calls[0][0]).toStrictEqual(newTip)
  })

  test("Tag can be deleted", () => {
    const component = render(<TipForm />)
    const titleField = component.container.querySelector("[name='title'")
    titleField.click()
    const newtag = component.container.querySelector("[name=newtag]")
    fireEvent.change(newtag, { target: { value: newTip.tags[0] } })
    const addtag = component.container.querySelector("[name=addtag]")
    fireEvent.click(addtag)
    const oldtag = component.container.querySelector(
    `#deletetag-${newTip.tags[0]} .MuiSvgIcon-root`
    )
    fireEvent.click(oldtag)
    expect(component.container).not.toHaveTextContent("tag2")
  })
})