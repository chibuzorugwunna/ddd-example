interface AggregateDto {
    [key: string]: string | number | boolean | null
}

export abstract class Aggregate {
    abstract toJSON(): AggregateDto
}