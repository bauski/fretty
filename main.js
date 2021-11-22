// Import modules
import { makeFretStore } from './modules/fretStore.js';
import { mount, displayFretboard, displayMenu } from './modules/display.js';
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
    const eventHandler = setEventHandler(fretStore, observerController, mutate);
});
fire(observerController);

console.log(observerController);
