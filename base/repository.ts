import { Aggregate } from "./aggregate";

export interface Repository {
    save<A extends Aggregate>(aggregates: A[]): Promise<void>;
    findById<A extends Aggregate>(aggregateClass: new () => A, id: string): Promise<Aggregate>
}