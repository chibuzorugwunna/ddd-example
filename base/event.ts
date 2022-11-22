import { AggregateRoot } from "./aggregate-root";

export abstract class Event<T extends AggregateRoot> {
    abstract readonly eventName: string
    abstract readonly aggregate: T

    toJSON(): { event: string, aggregate: T } {
        return {
            event: this.eventName,
            aggregate: this.aggregate
        }
    }
}