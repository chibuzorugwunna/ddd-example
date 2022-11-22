import { AggregateRoot } from "./aggregate-root";

export interface Repository {
    save<A extends AggregateRoot>(aggregates: A[]): Promise<void>;
    findById<A extends AggregateRoot>(aggregateClass: new () => A, id: string): Promise<AggregateRoot>
}