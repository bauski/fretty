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
    if (fretStore.viewToggle === 'notes') {
        music.notes.forEach((note, noteIndex) => {
            const element = document.querySelector(`#highlight-note-${noteIndex}`);
            element.addEventListener('change', function(event) {
                fretStore.highlightNotes[noteIndex].color = event.target.value;
                mutate(observerController, {highlightNotes: fretStore.highlightNotes});
            });
        });
        music.notes.forEach((note, noteIndex) => {
            const element = document.querySelector(`#highlight-note-${noteIndex}-toggle`);
            element.addEventListener('change', function(event) {
                fretStore.highlightNotes[noteIndex].display = fretStore.highlightNotes[noteIndex].display? false : true;
                mutate(observerController, {highlightNotes: fretStore.highlightNotes});
            });
        });
    } else {
        music.intervals.forEach((interval, intervalIndex) => {
            const element = document.querySelector(`#highlight-interval-${intervalIndex}`);
            element.addEventListener('change', function(event) {
                fretStore.highlightIntervals[intervalIndex].color = event.target.value;
                mutate(observerController, {highlightIntervals: fretStore.highlightIntervals});
            });
        });
        music.intervals.forEach((interval, intervalIndex) => {
            const element = document.querySelector(`#highlight-interval-${intervalIndex}-toggle`);
            element.addEventListener('change', function(event) {
                fretStore.highlightIntervals[intervalIndex].display = fretStore.highlightIntervals[intervalIndex].display? false : true;
                mutate(observerController, {highlightIntervals: fretStore.highlightIntervals});
            });
        });
    }
}
