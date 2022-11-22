
import { Case } from "../../../domain/case"
import { CreateCaseCommand } from "../../../domain/case-creation"
import { DynamoDBRepository } from "../../infrastructure/repositories/dynamodb-repository"
import { EventService } from "../../infrastructure/services/event-service"
import { Lambda, LambdaMiddleware, ResponseDto, EventDto } from "../base"

class CreateCaseLambda extends Lambda {
    protected schema: any
    protected middlewares: LambdaMiddleware[] = []
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