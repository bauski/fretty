import { music, noteToIndex, indexToNote } from './music.js';

export const setEventHandler = (
    fretStore,
    observerController = {},
    mutate
) => {
    const viewIntervals = document.querySelector('#view-intervals');
    viewIntervals.addEventListener("click", function(event) {
        mutate(observerController, {viewToggle: 'intervals'});
    });
    const viewNotes =  document.querySelector('#view-notes');
    viewNotes.addEventListener("click", function(event) {
        mutate(observerController, {viewToggle: 'notes'});
    });
    fretStore.frets.forEach((string, stringIndex) => {
        string.forEach((fret, fretIndex) => {
            const fretElement = document.querySelector(`#fret-${stringIndex}-${fretIndex}`);
            fretElement.addEventListener("click", function(event) {
                mutate(observerController, {viewToggle: 'intervals', root: fret.note});
            });
        });
    });
    music.notes.forEach((note, noteIndex) => {
        const element = document.querySelector(`#highlight-note-${noteIndex}`);
        element.addEventListener("click", function(event) {
            const highlightIndex = fretStore.highlightNotes.indexOf(noteIndex);
            if ( highlightIndex == -1) {
                fretStore.highlightNotes.push(noteIndex);
            } else {
                fretStore.highlightNotes.splice(highlightIndex, 1);
            }
            mutate(observerController, {highlightNotes: fretStore.highlightNotes});
        });
    });
    music.intervals.forEach((interval, intervalIndex) => {
        const element = document.querySelector(`#highlight-interval-${intervalIndex}`);
        element.addEventListener("click", function(event) {
            const highlightIndex = fretStore.highlightIntervals.indexOf(intervalIndex);
            if ( highlightIndex == -1) {
                fretStore.highlightIntervals.push(intervalIndex);
            } else {
                fretStore.highlightIntervals.splice(highlightIndex, 1);
            }
            mutate(observerController, {highlightIntervals: fretStore.highlightIntervals});
        });
    });
}
