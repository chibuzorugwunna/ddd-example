import { Event } from "../base/event";
import { Case } from "./case";

export class CaseCreated extends Event<Case> {
    readonly eventName = 'CaseCreated';

    constructor(readonly aggregate: Case) {
        super()
    }
}
