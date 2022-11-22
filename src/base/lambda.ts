import { EventDto } from "./event-dto"
import { Middleware } from "./middleware"
import { ResponseDto } from "./response-dto"

export abstract class Lambda {
    protected abstract readonly schema: any
    protected abstract readonly middlewares: Middleware[]

    /**
     * Runs validation against the specified JSON-schema
     * @returns 
     */
    private runSchemaValidation(eventDto: EventDto): void {
        if (!this.schema) {
            return
        }

        console.log('Running schema validation...')
    }

    /**
     * Runs the specified middlewares
     * @returns 
     */
    private async runMiddlewares(eventDto: EventDto): Promise<void> {
        if (!this.middlewares.length) {
            return
        }

        console.log('Running middlewares...')

        for (const middleware of this.middlewares) {
            await middleware.execute(eventDto)
        }
    }

    async execute(eventDto: EventDto): Promise<void> {
        this.runSchemaValidation(eventDto)
        this.runMiddlewares(eventDto)
    }

    abstract getResponse(): ResponseDto
}