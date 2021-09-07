import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@frivolta-tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
