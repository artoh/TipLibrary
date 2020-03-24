import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react"
import Tags from "./Tags"

const tags = ["tag1", "tag2", "tag3"]

describe("<Tag> component rendering", () => {
  test("Rendering in read mode", () => {
    const component = render(<Tags tags={tags} />)
    expect(component.container).toHaveTextContent("tag1")
    expect(component.container).not.toHaveTextContent("Add")
  })

  test("Rendering in edit mode", () => {
    const component = render(<Tags tags={tags} editable={true} />)
    expect(component.container).toHaveTextContent("tag1")
    expect(component.container).toHaveTextContent("Add")
  })
})

describe("Adding and removing tags", () => {
  test("Adding a tag", () => {
    const addMock = jest.fn()
    const component = render(
      <Tags tags={tags} editable={true} onAdd={addMock} />
    )
    const newtag = component.container.querySelector("[name=newtag]")
    fireEvent.change(newtag, { target: { value: "tag4" } })
    const addtag = component.container.querySelector("[name=addtag]")
    fireEvent.click(addtag)
    expect(addMock.mock.calls.length).toBe(1)
    expect(addMock.mock.calls[0][0]).toBe("tag4")
  })

  test("Removing a tag", () => {
    const removeMock = jest.fn()
    const component = render(
      <Tags tags={tags} editable={true} onDelete={removeMock} />
    )
    const oldtag = component.container.querySelector(
      "#deletetag-tag2 .MuiSvgIcon-root"
    )
    fireEvent.click(oldtag)
    expect(removeMock.mock.calls.length).toBe(1)
    expect(removeMock.mock.calls[0][0]).toBe("tag2")
  })
})
