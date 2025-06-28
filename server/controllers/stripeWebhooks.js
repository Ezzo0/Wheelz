import Stripe from "stripe";
import Booking from "../models/booking.js";

// API to handle stripe webhooks
export const stripeWebhook = async (req, res) => {
  // Stripe Gateway Initialize
  const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripeInstance.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;
    const paymentIntentId = paymentIntent.id;

    // Getting Session Metadata
    const session = await stripeInstance.checkout.sessions.list({
      payment_intent: paymentIntentId,
    });

    const { bookingId } = session.data[0].metadata;

    // Updating Booking Status
    await Booking.findByIdAndUpdate(bookingId, {
      isPaid: true,
      paymentMethod: "stripe",
    });
  } else {
    console.log("Unhandled event type", event.type);
  }
  res.json({ received: true });
};
