// Import all necessary classes
// FretStore for all Fret states
import { makeFretStore } from './modules/fretStore.js';
// Display stuff
import { mount, displayFretboard, displayMenu } from './modules/display.js';

// Fretboard creator
const fretStore = makeFretStore();
let fretboardDisplay = displayFretboard(fretStore);
let menuDisplay = displayMenu(fretStore);
mount('#fretboard-viewport', fretboardDisplay);
//mount('#menuViewport',menuDisplay);
