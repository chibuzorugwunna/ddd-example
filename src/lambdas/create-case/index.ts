import { Case } from "../../../domain/case"
import { CreateCaseCommand } from "../../../domain/case-creation"
import { DynamoDBRepository } from "../../repositories/dynamodb-repository"
import { EventService } from '../../services/event-service'
import { Lambda, Middleware, ResponseDto, EventDto } from "../../base"

export class CreateCaseLambda extends Lambda {
    protected schema: any
    protected middlewares: Middleware[] = []
    private response: ResponseDto

    async execute(eventDto: EventDto): Promise<void> {
        super.execute(eventDto)

        this.response = await Case.create(
            new CreateCaseCommand(
                new DynamoDBRepository(),
                new EventService()
            )
        )
    }

    getResponse(): ResponseDto {
        return this.response
    }
}