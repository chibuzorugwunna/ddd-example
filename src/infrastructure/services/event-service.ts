import { EventPublisher, Aggregate, Event } from "../../../domain/base";

export class EventService implements EventPublisher {
    publish(event: Event<Aggregate>): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
