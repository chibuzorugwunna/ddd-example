import { Case } from "../case";
import { Event } from "../base/event";

export class CaseCreated extends Event<Case> {
    readonly eventName = 'CaseCreated';

    constructor(readonly aggregate: Case) {
        super()
    }
}
