import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { server_url } from "../serverUrl";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const allorders = await axios.get(`${server_url}/allOrders`);
      setOrders(allorders.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders">
      {orders.length === 0 ?
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
        :
        <div>
          <div className="order-table">
            <table>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
              {orders.map((order, index) => {
                return (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td className={order.mode === "BUY" ? "profit" : "loss"}>{order.price}</td>
                    <td className={order.mode === "BUY" ? "profit" : "loss"} style={{fontSize: "1rem"}}>{order.mode}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        </div>
      }
    </div>
  );
};

export default Orders;