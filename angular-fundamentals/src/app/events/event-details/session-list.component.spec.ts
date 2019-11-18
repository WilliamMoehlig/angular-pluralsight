import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/session.model';

describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService);
    });

    describe('ngOnChanges', () => {
        it('should filter the sessions correctly', () => {
            component.sessions = [
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 4', level: 'intermediate' },
                { name: 'session 3', level: 'intermediate' },
                { name: 'session 2', level: 'beginner' },
            ] as ISession[];

            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.eventId = 3;

            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(3);
            expect(component.visibleSessions[2].name).toBe('session 4');
        });
    });
});
