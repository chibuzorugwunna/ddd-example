interface AggregateRootJSON {
    [key: string]: string | number | boolean | null
}

export abstract class AggregateRoot {
    abstract readonly aggregateName: string

    abstract toJSON(): AggregateRootJSON
}