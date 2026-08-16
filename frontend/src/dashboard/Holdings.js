import React, { useEffect, useState } from "react";
import axios from "axios";
import { server_url } from "../serverUrl";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

  let fetchData = async () => {
    try {
      let allHoldings = (await axios.get(`${server_url}/allHoldings`)).data;
      setHoldings(allHoldings);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {fetchData()}, [])

return (
  <>
    <h3 className="title">Holdings ({holdings.length})</h3>

    <div className="order-table">
      <table>
        <tr>
          <th>Instrument</th>
          <th>Qty.</th>
          <th>Avg. cost</th>
          <th>LTP</th>
          <th>Cur. val</th>
          <th>P&L</th>
          <th>Net chg.</th>
          <th>Day chg.</th>
        </tr>
        {holdings.map((stock, index) => {
          let curValue = stock.price * stock.qty;
          let isProfit = curValue - stock.avg * stock.qty >= 0.0;
          let profitClass = isProfit ? "profit" : "loss";
          let dayClass = stock.isLoss ? "loss" : "profit";
          return (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{curValue.toFixed(2)}</td>
              <td className={profitClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
              <td className={profitClass}>{stock.net}</td>
              <td className={dayClass}>Day chg.</td>
            </tr>
          )
        })}
      </table>
    </div>

    <div className="row">
      <div className="col">
        <h5>
          29,875.<span>55</span>{" "}
        </h5>
        <p>Total investment</p>
      </div>
      <div className="col">
        <h5>
          31,428.<span>95</span>{" "}
        </h5>
        <p>Current value</p>
      </div>
      <div className="col">
        <h5>1,553.40 (+5.20%)</h5>
        <p>P&L</p>
      </div>
    </div>
  </>
);
};

export default Holdings;