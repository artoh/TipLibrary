import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Filter from "./Filter"

const tips = [{tags: ["cat","dog"]}, {tags: ["rabbit"]}]

const filters = ["cat"]

const setFilters = jest.fn()

describe("Filter component fot choosing which tags to filter tips by", () => {
    test("Shows available filters correctly", async () => {

        const component = render(<Filter tips={tips} filters={filters} setFilters={setFilters} />)

        await component.findByText("cat")
        await component.findByText("dog")
        await component.findAllByText("rabbit")

    })
    test.skip("Shows selected filters corrrectly", async () => {
        const component = render(<Filter tips={tips} filters={filters} setFilters={setFilters}/>)

        const catChip =await component.findByText("cat")

        console.log(catChip)

        expect(catChip.props.color).toEqual("primary")

       const dogChip = await component.findByText("dog")
       const rabbitChip =  await component.findAllByText("rabbit")

       expect (dogChip.props.color).toEqual("default")
       expect(rabbitChip.props.color).toEqual("default") 


    })
    test("Calls setFilters correctly when unselecetd filter is clicekd", async () => {
        const component = render(<Filter tips={tips} filters={filters} setFilters={setFilters}/>)

        const dogChip =  await component.findByText("dog")
        fireEvent.click(dogChip)

        expect(setFilters).toHaveBeenCalledWith(["cat","dog"])

    })

    test("Calls setFilters correctly when selected filter is clicked", async () => {
        const component = render(<Filter tips={tips} filters={filters} setFilters={setFilters}/>)

        const catChip =await component.findByText("cat")
        fireEvent.click(catChip)

        expect(setFilters).toHaveBeenCalledWith([])
    })
})