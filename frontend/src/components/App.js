import React, { useState } from "react"
import Header from "./Header"
import Tip from "./Tip"
import TipForm from "./TipForm"
import tipService from "../services/tips"
import { useEffect } from "react";
import Filter from "./Filter"

const App = () => {
  const [tips, setTips] = useState([])

  const [filters, setFilters] = useState([])

  useEffect(() => {
    const getTips = async () => {
      try {
        const tipsFromServer = await tipService.getAll()
        setTips(tipsFromServer)
      } catch (e) {}
    }

    getTips()
  }, [])

  const addTip = async newTip => {
    try {
      const result = await tipService.create(newTip)
      setTips(prevTips => {
        return [...tips, result]
      })
    } catch (e) {}
  }

  const updateTip = async (id, tip) => {
    try {
      const newtip = await tipService.update(id, tip)
      setTips(tips.filter(tip => tip.id !== id).concat(newtip))
    } catch (e) {}
  }

  const deleteTip = async id => {
    try {
      await tipService.deleteTip(id)
      setTips(tips.filter(tip => tip.id !== id))
    } catch (e) {}
  }

  const filteredTips = filters.length < 1 ? tips : tips.filter((tip) => {


    filters.forEach((filter) => {
      if (tip.tags.includes(filter)) {
        return true
      }
    })
    return false
  })

  return (
    <div>
      <Header />
      <TipForm onAdd={addTip} />
      <Filter tips={tips} filters={filters} setFilters={setFilters}/>
      {filteredTips.map((tipItem, index) => {
        return (
          <Tip
            tip={tipItem}
            onUpdate={updateTip}
            onDelete={deleteTip}
            key={tipItem.id}
          />
        )
      })}
    </div>
  )
}

export default App
