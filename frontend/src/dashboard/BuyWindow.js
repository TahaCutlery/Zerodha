import React, { useContext, useState } from 'react'
import GeneralContext from './GeneralContext';
import axios from 'axios';
import { server_url } from '../serverUrl';

const BuyWindow = ({ uid }) => {
    const generalContext = useContext(GeneralContext);
    const [quantity, setQuantity] = useState(1);
    const [prices, setPrices] = useState(0);

    const handleBuyClick = async () => {
        await axios.post(`${server_url}/newOrder`, {
            name: uid,
            qty: quantity,
            price: prices,
            mode: "BUY",
        });
        generalContext.closeBuyWindow();
    }

    return (
        <div className="bg-body" draggable={"true"} >
            <div className="row">
                <div className="p-3 col-5 mx-2">
                    <div className="mb-2"><label for="qty">Quantity</label></div>
                    <input className="p-2" id="qty" name="qty" type="number" placeholder="Enter Quantity" onChange={(e) => { setQuantity(e.target.value) }} value={quantity} />
                </div>
                <div className="p-3 col mx-2">
                    <div className="mb-2"><label for="price">Price</label></div>
                    <input className="p-2" id="price" name="price" type="number" placeholder="Enter Price" value={prices} onChange={(e) => setPrices(e.target.value)} />
                </div>
            </div>

            <div className="">
                <button className="p-3 btn btn-primary px-4 rounded-3 mx-3" onClick={handleBuyClick}>BUY</button>
                <button className="p-3 btn bg-secondary px-4 rounded-3 mx-3" onClick={() => { generalContext.closeBuyWindow() }}>Cencel</button>
            </div>
        </div>
    )
}

export default BuyWindow