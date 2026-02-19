import "server-only";

import Paystack from "paystack-api";
import { env } from "./env";

export const paystack = Paystack(env.PAYSTACK_SECRET_KEY);
