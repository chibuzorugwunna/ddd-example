import { Repository, Aggregate, EventPublisher, Event } from "./base"
import { Case, CreateCaseCommand } from './case'


class DynamoDBRepository implements Repository {
    save<A extends Aggregate>(aggregates: A[]): Promise<void> {
        throw new Error("Method not implemented.")
    }
    findById<A extends Aggregate>(aggregateClass: new () => A, id: string): Promise<Aggregate> {
        throw new Error("Method not implemented.")
    }
}

class EventService implements EventPublisher {
    publish(event: Event<Aggregate>): Promise<void> {
        throw new Error("Method not implemented.")
    }
}

const handler = async () => {
    const repo = new DynamoDBRepository()
    const eventService = new EventService()

    const caseEntity = await Case.create(new CreateCaseCommand(repo, eventService))

    return caseEntity
}