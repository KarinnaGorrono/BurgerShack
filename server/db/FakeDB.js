import { generateId } from '../../client/app/Utils/generateId'

// JUST FOR MONDAY
export const FakeDb = {
    values: ['value 1', 'value 2'],
    burger: [{ id: generateId(), name: 'Hangry Burger', cheese: 'Pepperjack' }, { id: generateId(), name: 'Zen Boiga', cheese: 'Gouda' }]
}
