import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@frivolta-tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
