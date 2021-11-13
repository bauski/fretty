const makeFretboard = ({
    fretLength = 24
}) => {
    return {
        element: '',
        menuElements: {
            viewNotes: {},
            viewIntervals: {},
            highlightNotes: [],
            highlightIntervals: []
        },
        notes: ['A','A#/Bb','B','C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab'],
        intervals: ['O/U','m2','M2','m3','M3','P4','TT','P5','m6','M6','m7','M7'],
        stringNotes: [7,0,5,10,2,7],
        fretLength: fretLength,
        frets: [...Array(6)].map(x => [new Array(fretLength)]),
        root: 7,
        highlights: {
            intervals: []
        },
    };
}
export default makeFretboard;
