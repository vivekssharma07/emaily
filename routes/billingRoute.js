const keys = require('../config/keys');
const stripe = require('stripe')(keys.STRIPE_SECRET_KEY);
const middleware = require('../middleware/requireLogin');

module.exports = (app) => {

    app.post('/api/stripe',middleware,async (req,res) => {
       const charge = await stripe.charges.create({
            amount: 500,
            currency: "usd",
            source: req.body.id, // obtained with Stripe.js
            description: "Charge for vivek"
          });

          //console.log(charge)
          req.user.credits += 5;
          const user = await req.user.save();

          res.send(user);
    })
}