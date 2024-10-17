const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Stripe = require("stripe");

// setup environment variable
dotenv.config();
// set up an API todos.

// App config
const app = express();

// Middlewares
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-09-30.acacia",
});
// APT routes
app.get(
  "/",
  (
    _request: any,
    response: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: { (arg0: string): any; new (): any };
      };
    }
  ) => response.status(200).send("hello world")
);
app.post("/payments/create", async (request: any, response: any) => {
  const total = request.query.total;

  console.log("payment Request Received BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "ngn",
  });
  // ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://127.0.0.1:5001/dulcia-app/us-central1/api
