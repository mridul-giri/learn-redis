import { PubSubManager } from "./pubSubManager.js";

setInterval(() => {
  PubSubManager.getInstance().userUnSubscribe(Math.random().toString(), "APPL");
}, 5000);
