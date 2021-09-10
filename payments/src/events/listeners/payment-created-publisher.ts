import {
  Publisher,
  Subjects,
  PaymentCreatedEvent,
} from "@frivolta-tickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
