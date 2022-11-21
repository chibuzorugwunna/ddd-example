import { Command } from "../base/command";
import { CaseCreated } from "./case-created";
import { Repository } from "../base/repository";
import { EventPublisher } from "../base/event-publisher";

export class CreateCaseCommand implements Command<CaseCreated> {
    constructor(
        readonly repository: Repository,
        readonly eventPublisher: EventPublisher,
    ) { }

    async execute(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async commit(event: CaseCreated): Promise<void> {
        await this.repository.save([event.aggregate])
        await this.eventPublisher.publish(event)
    }

    get id(): string {
        throw new Error("Method not implemented.");
    }
    get userId(): string {
        throw new Error("Method not implemented.");
    }
}


