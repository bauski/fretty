// Default Music Rules
import { music } from './music.js';

export const makeFretStore = (
    fretLength = 24,
    stringNotes = ['E', 'A', 'D', 'G', 'B', 'E']
) => {
    return {
        stringNotes: stringNotes,
        fretLength: fretLength,
        frets: [...Array(6)].map(x => [new Array(fretLength)]),
        root: 7,
        highlights: {
            intervals: []
        }
    };
}
