import { Case } from "../../../domain/case"
import { CreateCaseCommand } from "../../../domain/case-creation"
import { Lambda, Middleware, ResponseDto, EventDto } from "../../base"
import _schema from './schema.json'
import "reflect-metadata"
import { registry, container } from "tsyringe"

@registry([
    {token: "CreateCaseCommand", useToken: CreateCaseCommand}
])
export class CreateCaseLambda extends Lambda {
    protected schema = _schema
    protected middlewares: Middleware[] = []
    private case: Case

    async execute(eventDto: EventDto): Promise<void> {
        super.execute(eventDto)

        const createCaseCommand = container.resolve<CreateCaseCommand>("CreateCaseCommand"); 
        this.case = await Case.create(createCaseCommand)
    }

    getResponse(): ResponseDto {
        return {
            id: this.case.id
        }
    }
}