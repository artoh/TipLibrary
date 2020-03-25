import React from "react"
import Chip from "@material-ui/core/Chip"

const Filter = (props) => {

    console.log(props.tips)

    const availableFilters = props.tips.reduce((filters, tip) => {
        if  (!tip.tags) {
            return filters
        }  
        
        tip.tags.forEach((tag) => {
            if (! filters.includes(tag)) {
                filters.push(tag)
            }
        }) 

        return filters
      
    }, [])

    const handleChipClick = (filter) => {
 
        let newFilters 
        if (props.filters.includes(filter)) {
            const indexToBeDeleted = props.filters.findIndex((oldFilter) => oldFilter===filter)
            newFilters = props.filters.slice(indexToBeDeleted).concat(props.filters.slice(indexToBeDeleted + 1))
            newFilters.splice(newFilters.findIndex((newFilter) => newFilter === filter,1))
        } else {
            newFilters = props.filters.concat(filter)
        }

        props.setFilters(newFilters)

    }
    return (
        <div>
            {availableFilters.map((filter) => (
            <Chip
                clickable
                onClick={() => handleChipClick(filter)}
                label={filter}
                key={filter}
                color={props.filters.includes(filter) ? "primary" : "default"}
            />))}

        </div>
    )
}

export default Filter
