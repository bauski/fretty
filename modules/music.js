const music = {
    notes: ['A','A#/Bb','B','C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab'],
    intervals: ['O/U','m2','M2','m3','M3','P4','TT','P5','m6','M6','m7','M7']
}
const noteToIndex = (note, musicArray = music) => {
    return musicArray.notes.indexOf(note);
}
const indexToNote = (index, musicArray = music) => {
    return musicArray.notes[index];
}
const intervalToIndex = (interval, musicArray = music) => {
    return musicArray.intervals.indexOf(interval);
}
const indexToInterval = (index, musicArray = music) => {
    return musicArray.intervals[index];
}
export {music, noteToIndex, indexToNote, intervalToIndex, indexToInterval}
