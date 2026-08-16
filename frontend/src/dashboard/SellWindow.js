import React, { useContext, useState, useEffect } from 'react';
import GeneralContext from './GeneralContext';
import axios from 'axios';
import { server_url } from '../serverUrl';

const SellWindow = ({ uid }) => {
    const generalContext = useContext(GeneralContext);
    const [quantity, setQuantity] = useState(1);
    const [prices, setPrices] = useState(0);
    const [ownedQty, setOwnedQty] = useState(0);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        const fetchOwnership = async () => {
            try {
                const [holdingsRes, positionsRes] = await Promise.all([
                    axios.get(`${server_url}/allHoldings`),
                    axios.get(`${server_url}/allPositions`)
                ]);

                const holding = holdingsRes.data.find((h) => h.name === uid);
                const position = positionsRes.data.find((p) => p.name === uid);

                const totalQty = (holding ? holding.qty : 0) + (position ? position.qty : 0);
                setOwnedQty(totalQty);
                if (totalQty <= 0) {
                    setErrorMsg("You do not own this stock!");
                }
            } catch (err) {
                console.error("Error checking ownership:", err);
            }
        };
        fetchOwnership();
    }, [uid]);

    const handleSellClick = async () => {
        if (ownedQty <= 0) {
            setErrorMsg("You do not own this stock!");
            return;
        }
        if (Number(quantity) > ownedQty) {
            setErrorMsg(`You only own ${ownedQty} share(s) of ${uid}!`);
            return;
        }

        try {
            await axios.post(`${server_url}/newOrder`, {
                name: uid,
                qty: Number(quantity),
                price: Number(prices),
                mode: "SELL",
            });
            generalContext.closeSellWindow();
        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                setErrorMsg(err.response.data.error);
            } else {
                setErrorMsg("Failed to place sell order.");
            }
        }
    }

    return (
        <div className="bg-body" draggable={"true"} >
            <div className="row">
                <div className="p-3 col-5 mx-2">
                    <div className="mb-2"><label htmlFor="qty">Quantity (Owned: {ownedQty})</label></div>
                    <input className="p-2" id="qty" name="qty" type="number" placeholder="Enter Quantity" onChange={(e) => { setQuantity(e.target.value); setErrorMsg(""); }} value={quantity} />
                </div>
                <div className="p-3 col mx-2">
                    <div className="mb-2"><label htmlFor="price">Price</label></div>
                    <input className="p-2" id="price" name="price" type="number" placeholder="Enter Price" value={prices} onChange={(e) => setPrices(e.target.value)} />
                </div>
            </div>

            {errorMsg && (
                <div className="text-danger mx-3 mb-2 small fw-bold">
                    {errorMsg}
                </div>
            )}

            <div className="">
                <button
                    className="p-3 btn btn-primary px-4 rounded-3 mx-3"
                    onClick={handleSellClick}
                    disabled={ownedQty <= 0}
                >
                    SELL
                </button>
                <button className="p-3 btn bg-secondary px-4 rounded-3 mx-3" onClick={() => { generalContext.closeSellWindow() }}>Cancel</button>
            </div>
        </div>
    )
}

export default SellWindow;
