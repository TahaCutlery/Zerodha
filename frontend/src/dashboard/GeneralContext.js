import React, { useState } from 'react'
import BuyWindow from './BuyWindow';
import SellWindow from './SellWindow';

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
})


export const GeneralContextProvider = (props) => {
    const [buyWindowOpen, setBuyWindowOpen] = useState(false);
    const [sellWindowOpen, setSellWindowOpen] = useState(false);
    const [Name, setName] = useState("");

    const handleBuyOpen = (name) => {
        setBuyWindowOpen(true);
        setName(name);
    }

    const handleBuyClose = () => {
        setBuyWindowOpen(false);
        setName("");
    }

    const handleSellOpen = (name) => {
        setSellWindowOpen(true);
        setName(name);
    }

    const handleSellClose = () => {
        setSellWindowOpen(false);
        setName("");
    }

    return(
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleBuyOpen,
                closeBuyWindow: handleBuyClose,
                openSellWindow: handleSellOpen,
                closeSellWindow: handleSellClose,
            }}
        >
        {props.children}
        {buyWindowOpen && <BuyWindow uid={Name} />}
        {sellWindowOpen && <SellWindow uid={Name} />}
        </GeneralContext.Provider>
    )
}

export default GeneralContext