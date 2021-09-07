import { randomBytes } from "crypto";
import nats, { Message } from "node-nats-streaming";

console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listener connected to nats");
  stan.on("close", () => {
    console.log("Nats connection closed");
    process.exit();
  });
  const options = stan
    .subscriptionOptions()
    .setManualAckMode(true)
    .setDeliverAllAvailable()
    .setDurableName("accounting-service");
  const subscription = stan.subscribe(
    "ticket:created",
    "listenerQueueGroup",
    options
  );
  subscription.on("message", (msg: Message) => {
    const data = msg.getData();
    if (typeof data === "string") {
      console.log(
        "Received event n ",
        msg.getSequence(),
        "with data",
        JSON.parse(data)
      );
    }
    msg.ack();
  });
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
