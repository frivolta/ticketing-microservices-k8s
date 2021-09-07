import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@frivolta-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
