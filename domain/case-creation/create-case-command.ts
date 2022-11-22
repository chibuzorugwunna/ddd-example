import { Command } from "../../base/command";
import { CaseCreated } from "./case-created";
import { Repository } from "../../base/repository";
import { EventPublisher } from "../../base/event-publisher";
import { Case } from "../case";

export class CreateCaseCommand implements Command {
    constructor(
        readonly repository: Repository,
        readonly eventPublisher: EventPublisher,
    ) { }

    async execute(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async commit(caseData: Case): Promise<void> {
        await this.repository.save([caseData])
        await this.eventPublisher.publish(new CaseCreated(caseData))
    }

    get caseId(): string {
        throw new Error("Method not implemented.");
    }

    get userId(): string {
        throw new Error("Method not implemented.");
    }
}


