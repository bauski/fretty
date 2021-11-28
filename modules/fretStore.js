// Default Music Rules
import { music, noteToIndex, indexToNote, intervalToIndex, indexToInterval } from './music.js';
import { makeFret } from './fret.js';
import { colors } from './colors.js'

const FRET_LENGTH = 24;
const STRING_NOTES = ['E', 'B', 'G', 'D', 'A', 'E'];

export const makeFretStore = (
    root = 'E',
    fretLength = FRET_LENGTH,
    stringNotes = STRING_NOTES
) => {
    return {
        viewToggle: 'notes',
        stringNotes: stringNotes,
        fretLength: fretLength,
        frets: makeFrets(root, fretLength, stringNotes),
        root: root,
        highlightNotes: makeHighlights(music.notes, colors),
        highlightIntervals: makeHighlights(music.intervals, colors),
        setIntervals: makeFrets
    };
}

const makeFrets = (
    root = 'E',
    fretLength = FRET_LENGTH,
    stringNotes = STRING_NOTES
) => {
    return [...Array(6)].map(
        (string, stringIndex) => [...Array(fretLength)].map(
            (fret, fretIndex) => {
                const fretStringIndex = noteToIndex(stringNotes[stringIndex]) + fretIndex;
                const note = indexToNote(fretStringIndex % music.notes.length);
                const fretIntervalIndex = fretStringIndex + music.notes.length - noteToIndex(root);
                const interval = indexToInterval(fretIntervalIndex % music.notes.length);
                return makeFret(note, interval);
            }
        )
    )
}

const makeHighlights = (
    musicArray,
    colors
) => {
    const musicSet = {};
    musicArray.forEach((note, index) => {
        musicSet[index] = {
            color: colors[index],
            display: false
        };
    });
    return musicSet;
}
