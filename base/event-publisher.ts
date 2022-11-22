import { AggregateRoot } from './aggregate-root';
import { Event } from './event';

export interface EventPublisher {
    publish(event: Event<AggregateRoot>): Promise<void>;
}
