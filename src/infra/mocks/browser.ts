import { setupWorker } from "msw/browser";
import { authHandler } from "./handlers";

export const worker = setupWorker(...authHandler);
