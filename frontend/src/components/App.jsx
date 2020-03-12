import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Tip from "./Tip";
import CreateArea from "./CreateArea";
import tipService from "../services/tips"

function App() {
  const [tips, setTips] = useState([]);

  const addTip = async (newTip)  => {
    try {
      console.log(newTip)
          const result = await tipService.create({title: newTip.title, link: newTip.description})
    setTips(prevTips => {
      return [...tips, 
         {title: result.title, description: result.link}];
    });
  } catch(e) {

  }
  }

  /*function deleteTip(id) {
    setTips(prevTips => {
      return prevTips.filter((tipItem, index) => {
        return index !== id;
      });
    });
  }*/

  return (
    <div>
      <Header />
      <CreateArea onAdd={addTip} />
      {tips.map((tipItem, index) => {
        return (
          <Tip
            key={index}
            id={index}
            title={tipItem.title}
            description={tipItem.description}
            tag={tipItem.tag}
            /*onDelete={deleteTip}*/
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
