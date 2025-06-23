import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    // create a Svix instance with clerk webhook secret
    const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // getting headers
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // Convert raw body to string for verification
    const body = req.body.toString();

    // verify headers and body
    const evt = webhook.verify(body, headers);

    // Getting Data from the verified event
    const { data, type } = evt;

    console.log("Webhook received:", type, "for user:", data.id);

    const userData = {
      _id: data.id,
      username: data.first_name + " " + data.last_name,
      email: data.email_addresses[0].email_address,
      image: data.image_url,
    };

    // Switch cases for different events
    switch (type) {
      case "user.created": {
        console.log("Creating user:", userData);
        const newUser = await User.create(userData);
        console.log("User created successfully:", newUser._id);
        break;
      }

      case "user.updated": {
        console.log("Updating user:", data.id);
        const updatedUser = await User.findByIdAndUpdate(data.id, userData, {
          new: true,
        });
        console.log(
          "User updated successfully:",
          updatedUser ? updatedUser._id : "User not found"
        );
        break;
      }

      case "user.deleted": {
        console.log("Deleting user:", data.id);
        const deletedUser = await User.findByIdAndDelete(data.id);
        console.log(
          "User deleted successfully:",
          deletedUser ? deletedUser._id : "User not found"
        );
        break;
      }

      default: {
        console.log("Unhandled event type:", type);
        break;
      }
    }

    res.json({ success: true, message: "Webhook processed successfully" });
  } catch (error) {
    console.error("Webhook error:", error.message);
    console.error("Full error:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
