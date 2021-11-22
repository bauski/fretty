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
        const fretElement = document.querySelector(`#highlight-note-${noteIndex}`);
        fretElement.addEventListener("click", function(event) {
            //mutate(observerController, {highlights['notes']: });
        });
    });
}
