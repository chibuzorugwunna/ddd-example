import { Repository, Aggregate } from "../../../base";

/**
 * For simple queries like saving aggregates or finding aggregates, this general purpose repository can be used. No need to define a repository per aggregate.
 */
export class DynamoDBRepository implements Repository {
    save<A extends Aggregate>(aggregates: A[]): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById<A extends Aggregate>(aggregateClass: new () => A, id: string): Promise<Aggregate> {
        throw new Error("Method not implemented.");
    }
}
