/// <reference types="node" />
import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";
const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});
console.clear();
stan.on("connect", async () => {
  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: "123",
      title: "concert",
      price: 20,
      userId: "1",
    });
  } catch (err) {
    console.error(err);
  }
});
