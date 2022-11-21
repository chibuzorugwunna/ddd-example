import { Aggregate } from "../base/aggregate";
import { CaseCreated } from "./case-created";
import { CreateCaseCommand } from "./create-case-command";

export class Case extends Aggregate {
    constructor(
        readonly id: string,
        readonly userId: string,
        readonly createdAt: Date
    ) {
        super()
    }

    static async create<c extends CreateCaseCommand>(command: c): Promise<void> {
        await command.execute()

        const caseEntity = new Case(command.id, command.userId, new Date())

        await command.commit(new CaseCreated(caseEntity))
    }

    toJSON(): { [x: string]: string | number | boolean | null; } {
        throw new Error("Method not implemented.");
    }
}