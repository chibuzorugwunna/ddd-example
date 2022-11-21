import { Aggregate } from './aggregate';
import { Event } from './event'

export interface Command<E extends Event<Aggregate>> {
    execute(...args: []): Promise<void>
    commit(event: E): Promise<void>
}