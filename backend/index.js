require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Position = require("./models/position");
const Holding = require("./models/holding");
const Order = require("./models/order");
const User = require("./models/user");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/authRoute");
const { verifySecretToken } = require("./utils/SecretToken");
const port = process.env.PORT || 3000;

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connected");
    }
    catch (error) {
        console.error('Failed to connect to MongoDB:');
        console.error(error && error.message ? error.message : error);
    }
}
main();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);

app.get("/me", verifySecretToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json({ user });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch user" });
    }
});

app.get("/allPositions", async (req, res) => {
    let allPositions = await Position.find({});
    res.json(allPositions);
})

app.get("/allHoldings", async (req, res) => {
    let allHoldings = await Holding.find({});
    res.json(allHoldings);
})

app.post("/newOrder", async (req, res) => {
    let newOrder = {
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    }
    
    if (req.body.mode === "SELL") {
        const holding = await Holding.findOne({ name: req.body.name });
        const position = await Position.findOne({ name: req.body.name });
        const totalQty = (holding ? holding.qty : 0) + (position ? position.qty : 0);

        if (totalQty <= 0) {
            return res.status(400).json({ error: "You do not own this stock." });
        }
        if (totalQty < req.body.qty) {
            return res.status(400).json({ error: `You only own ${totalQty} share(s) of ${req.body.name}.` });
        }
    }

    let createdOrder = new Order(newOrder);
    await createdOrder.save();
    res.send("done");
})

app.get("/allOrders", async (req, res) => {
    const allOrders = await Order.find({});
    res.json(allOrders);
})

app.listen(port, () => {
    console.log("App started!");
}) 