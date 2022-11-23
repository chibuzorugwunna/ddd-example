import { AggregateRoot, Event, EventPublisher } from "../../domain/base";

export class EventService implements EventPublisher {
    publish(event: Event<AggregateRoot>): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
