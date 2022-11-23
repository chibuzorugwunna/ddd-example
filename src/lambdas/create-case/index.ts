import { Case } from "../../../domain/case"
import { CreateCaseCommand } from "../../../domain/case-creation"
import { DynamoDBRepository } from "../../repositories/dynamodb-repository"
import { EventService } from '../../services/event-service'
import { Lambda, Middleware, ResponseDto, EventDto } from "../../base"
import _schema from './schema.json'

export class CreateCaseLambda extends Lambda {
    protected schema = _schema
    protected middlewares: Middleware[] = []
    private case: Case

    async execute(eventDto: EventDto): Promise<void> {
        super.execute(eventDto)

        this.case = await Case.create(
            new CreateCaseCommand(
                new DynamoDBRepository(),
                new EventService()
            )
        )
    }

    getResponse(): ResponseDto {
        return {
            id: this.case.id
        }
    }
}