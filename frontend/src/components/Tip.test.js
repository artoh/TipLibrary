import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Tip from "./Tip"; 

const tip = {
    id: "abcdefg123456",
    title: "Test title",
    link: "http://www.link.com"
}

describe("<Tip> component in basic mode", () => {
    test ("Component render title", () => {
        const component = render(<Tip tip={tip} />)
        const h1 = component.container.querySelector("h1")
        expect(h1).toHaveTextContent("Test title")
    })

    test ("Component render link", () => {
        const component = render(<Tip tip={tip} />)
        const a = component.container.querySelector("a")
        expect(a).toHaveTextContent("http://www.link.com")
    })    

    test("Component render details button", () => {
        const component = render(<Tip tip={tip} />)
        const btn = component.container.querySelector("[name='details'")
    })

    test("Component render edit button", () => {
        const component = render(<Tip tip={tip} />)
        const btn = component.container.querySelector("[name='edit'")
    })    
})

describe("<Tip> component in details mode", () => {
    test ("Close button rendered when clicked details", () => {
        const component = render(<Tip tip={tip} />)
        const btn = component.container.querySelector("[name='details'")
        fireEvent.click(btn)
        const closebtn = component.container.querySelector("[name='nodetails'")
    })
    
    test ("Close button close detailed view", () => {
        const component = render(<Tip tip={tip} />)
        const btn = component.container.querySelector("[name='details'")
        fireEvent.click(btn)
        const closebtn = component.container.querySelector("[name='nodetails'")
        fireEvent.click(closebtn)
        const detailsbtn = component.container.querySelector("[name='details'")
    })    
})

describe("<Tip> component in edit mode", () => {
    test ("Close button rendered when clicked edit", () => {
        const component = render(<Tip tip={tip} />)
        const btn = component.container.querySelector("[name='edit'")
        fireEvent.click(btn)
        const closebtn = component.container.querySelector("[name='nodetails'")
    })
    test ("Save button rendered when clicked edit", () => {
        const component = render(<Tip tip={tip} />)
        const btn = component.container.querySelector("[name='edit'")
        fireEvent.click(btn)
        const savebtn = component.container.querySelector("[name='save'")
    })    
    test ("Close button close edit view", () => {
        const component = render(<Tip tip={tip} />)
        const btn = component.container.querySelector("[name='edit'")
        fireEvent.click(btn)
        const closebtn = component.container.querySelector("[name='cancel'")
        fireEvent.click(closebtn)
        const detailsbtn = component.container.querySelector("[name='edit'")
    })       
})

describe("<Tip> component editing", () => {
    test("Tip can be edited", () => {
        const editMock = jest.fn()
        const component = render(<Tip tip={tip} onUpdate={editMock}/>)
        const btn = component.container.querySelector("[name='edit'")
        fireEvent.click(btn)
        const title = component.container.querySelector("[name=title]")
        fireEvent.change(title,{target:{value:"Edited tip"}})
        const link = component.container.querySelector("[name=link]")
        fireEvent.change(link,{target:{value:"Edited link"}})   
        const saveBtn = component.container.querySelector("[name='save'")
        fireEvent.click(saveBtn)
        expect(editMock.mock.calls.length).toBe(1)
        expect(editMock.mock.calls[0][0]).toStrictEqual("abcdefg123456")
        expect(editMock.mock.calls[0][1]).toStrictEqual({title:"Edited tip", link:"Edited link"})
    })
})