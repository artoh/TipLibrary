import React, { useState } from "react";
import Header from "./Header";
import Tip from "./Tip";
import TipForm from "./TipForm";
import tipService from "../services/tips"
import { useEffect } from "react";

function App() {

  const [tips, setTips] = useState([]);

  useEffect(() => {
    const getTips = async () => {
      try {
        const tipsFromServer = await tipService.getAll()
        setTips(tipsFromServer)
      } catch (e) {

      }
    }

    getTips()
  }, [])

  const addTip = async (newTip) => {
    try {
      console.log(newTip)
      const result = await tipService.create({ title: newTip.title, link: newTip.link })
      setTips(prevTips => {
        return [...tips,
        { title: result.title, link: result.link }];
      });
    } catch (e) {

    }
  }

  const updateTip = async (id, tip) => {
    const newtip = await tipService.update(id, tip)
    setTips(tips.filter(tip => tip.id !== id).concat(newtip))
  }

  return (
    <div>
      <Header />
      <TipForm onAdd={addTip} />
      {tips.map((tipItem, index) => {
        return (
          <Tip
            tip={tipItem}
            onUpdate={updateTip}
          />
        );
      })}
    </div>
  );
}

export default App;
