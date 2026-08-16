import React, { useContext, useState } from "react";
import { watchlist } from "../data/data"
import { Tooltip, Grow } from "@mui/material"
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search text-black"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItems stock={stock} key={index} />
          )
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItems = ({ stock }) => {
  const [watchListActions, setWatchListActions] = useState(false);
  return (
    <li
      onMouseEnter={() => { setWatchListActions(true) }}
      onMouseLeave={() => { setWatchListActions(false) }}
    // key={key}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="ItemInfo">
          <span className={stock.isDown ? "down" : "up"}>{stock.percent}</span>
          {stock.isDown ? (
            <i className="fa-solid fa-arrow-trend-down mx-1 down"></i>
          ) : (
            <i className="fa-solid fa-arrow-trend-up mx-1 up"></i>
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {watchListActions && <WatchListActions uid={stock.name} />}
    </li>
  )
}


const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy"
            onClick={() => (generalContext.openBuyWindow(uid))}>Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={() => (generalContext.openSellWindow(uid))}>Sell</button>
        </Tooltip>
        <Tooltip
          title="Analycis"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  )
}