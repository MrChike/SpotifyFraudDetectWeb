import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

import { stripe } from "@/libs/stripe";
import {
  upsertPriceRecord,
  upsertProductRecord,
  manageSubscriptionStatusChange
} from "@/libs/supabaseAdmin";

const relevantEvents = new Set([
  "product.created",
  "product.updated",
  "price.created",
  "price.updated",
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted"
]);
