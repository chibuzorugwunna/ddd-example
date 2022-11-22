import { AggregateRoot } from './aggregate-root';

export interface Command {
    execute(...args: []): Promise<void>
    commit(aggregate: AggregateRoot): Promise<void>
}