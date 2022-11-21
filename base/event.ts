import { Aggregate } from "./aggregate";

export abstract class Event<T extends Aggregate> {
    abstract readonly eventName: string
    abstract readonly aggregate: T

    toJSON(): { event: string, aggregate: T } {
        return {
            event: this.eventName,
            aggregate: this.aggregate
        }
    }
}