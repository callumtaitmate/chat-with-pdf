import { NextRequest } from "next/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import stripe from "@/lib/stripe";
import { adminDb } from "../../../firebaseAdmin";

export async function POST(req: NextRequest) {
  const headersList = await headers();
  const body = await req.text();
  const signature = headersList.get("stripe-signature");

  if (!signature) {
    return new Response("No signature", { status: 400 });
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.log("Stripe webhook secret is not set");
    return new NextResponse("Stripe webhook secret is not set", {
      status: 400,
    });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log(`Webhook Error: ${err}`);
    return new NextResponse(`Webhook Error: ${err}`, {
      status: 400,
    });
  }

  const getUserDetails = async (customerId: string) => {
    const userDoc = await adminDb
      .collection("users")
      .where("stripeCustomerId", "==", customerId)
      .limit(1)
      .get();

    if (!userDoc.empty) {
      return userDoc.docs[0];
    }
  };

  switch (event.type) {
    case "checkout.session.completed":
    case "payment_intent.succeeded": {
      const invoice = event.data.object;
      const customerId = invoice.customer as string;

      const userDetails = await getUserDetails(customerId);
      if (!userDetails?.id) {
        return new NextResponse("User not found", { status: 404 });
      }

      await adminDb.collection("users").doc(userDetails?.id).update({
        hasActiveMembership: true,
      });
      break;
    }

    case "customer.subscription.deleted":
    case "subscription_schedule.canceled": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer as string;

      const userDetails = await getUserDetails(customerId);
      if (!userDetails?.id) {
        return new NextResponse("User not found", { status: 404 });
      }

      await adminDb.collection("users").doc(userDetails?.id).update({
        hasActiveMembership: false,
      });
      break;
    }

    default:
      console.log(`Unhandled Event Type: ${event.type}`);
  }
  return NextResponse.json({ message: "Webhook recevied" });
}
