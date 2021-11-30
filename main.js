// Import modules
import { makeFretStore } from './modules/fretStore.js';
import { mount, displayFretboard, displayMenu, displayHighlights } from './modules/display.js';
import { setEventHandler } from './modules/eventHandler.js';
import { makeObserverController, addObserver, mutate, fire } from './modules/observer.js';

const fretStore = makeFretStore();
const observerController = makeObserverController(fretStore);
addObserver(observerController, () => {
    const fretboardDisplay = displayFretboard(fretStore);
    mount('#fretboard-viewport', fretboardDisplay);
});
addObserver(observerController, () => {
    const menuDisplay = displayMenu(fretStore);
    mount('#menu-viewport', menuDisplay);
});
addObserver(observerController, () => {
    displayHighlights(fretStore);
});
addObserver(observerController, () => {
    const eventHandler = setEventHandler(fretStore, observerController, mutate);
});
fretStore.highlightNotes[3].display = true;
mutate(observerController, {highlightNotes: fretStore.highlightNotes});
