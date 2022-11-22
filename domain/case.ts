import { AggregateRoot } from "./base"
import { CreateCaseCommand } from "./case-creation"

export class Case extends AggregateRoot {
    readonly aggregateName = 'Case'

    constructor(
        readonly id: string,
        readonly userId: string,
        readonly createdAt: Date
    ) {
        super()
    }

    static async create<c extends CreateCaseCommand>(command: c): Promise<Case> {
        await command.execute()

        const caseEntity = new Case(command.caseId, command.userId, new Date())

        await command.commit(caseEntity)

        return caseEntity
    }

    getAggregateName(): string {
        return 'Case';
    }

    toJSON(): { [x: string]: string | number | boolean | null; } {
        throw new Error("Method not implemented.");
    }
}