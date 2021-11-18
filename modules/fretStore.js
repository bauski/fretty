// Default Music Rules
import { music } from './music.js';
import { makeFret } from './fret.js';

export const makeFretStore = (
    fretLength = 24,
    stringNotes = ['E', 'A', 'D', 'G', 'B', 'E'],
    root = 7
) => {
    return {
        stringNotes: stringNotes,
        fretLength: fretLength,
        frets: [...Array(6)].map(
            x => [...Array(fretLength)].map(
                (_, i) => {
                    let note = i + music.NoteToIndex();
                    return makeFret(note)
                }
            )
        ),
        root: root,
        highlights: {
            intervals: []
        }
    };
}
