import { Aggregate, Event, EventPublisher } from "../domain/base"
import { Case, CreateCaseCommand } from "../domain/case"

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