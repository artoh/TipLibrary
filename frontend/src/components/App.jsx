import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Tip from "./Tip";
import CreateArea from "./CreateArea";

function App() {
  const [tips, setTips] = useState([]);

  function addTip(newTip) {
    setTips(prevTips => {
      return [...prevTips, newTip];
    });
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
