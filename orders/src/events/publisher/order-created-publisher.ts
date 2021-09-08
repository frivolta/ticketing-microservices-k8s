import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@frivolta-tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
