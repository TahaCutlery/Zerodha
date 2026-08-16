import React, { useEffect, useState } from "react";
import axios from "axios";
import { server_url } from "../serverUrl";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  let fetchData = async () => {
    try {
      let allPositions = (await axios.get(`${server_url}/allPositions`)).data;
      setPositions(allPositions);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {fetchData()}, [])
  
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock, index) => {
            let curValue = stock.price * stock.qty;
            let isProfit = curValue - stock.avg * stock.qty >= 0.0;
            let profitClass = isProfit ? "profit" : "loss";
            let dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profitClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>Day chg.</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;