import { Aggregate } from './aggregate';
import { Event } from './event';

export interface EventPublisher {
    publish(event: Event<Aggregate>): Promise<void>;
}
