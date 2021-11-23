import { music, noteToIndex, indexToNote, intervalToIndex, indexToInterval } from './music.js';

const mount = (
    id,
    display
) => { 
    const viewport = document.querySelector(id);
    viewport.innerHTML = '';
    viewport.appendChild(display);
}

const displayFretboard = (
    fretStore
) => {
    const fretboard = document.createElement('div');
    fretboard.id = 'fretboard';
    fretStore.frets.forEach((string, stringIndex) => {
        const stringElement = document.createElement('div');
        stringElement.classList.add('string',`string-${stringIndex}`);
        string.forEach((fret, fretIndex) => {
            const fretElement = document.createElement('div');
            fretElement.id = `fret-${stringIndex}-${fretIndex}`;
            fretElement.classList.add('fret');
            let fretText = '';
            if (fretStore.viewToggle === 'notes') {
                fretElement.classList.add(`note-${noteToIndex(fret.note)}`);
                fretText =  fret.note;
            } else {
                fretElement.classList.add(`interval-${intervalToIndex(fret.interval)}`);
                fretText =  fret.interval;
            }
            const fretTextNode = document.createTextNode(fretText);
            fretElement.appendChild(fretTextNode);
            stringElement.appendChild(fretElement);
        });
        fretboard.appendChild(stringElement);
    });
    return fretboard;
}

const displayMenu = (
    fretStore,
    musicSet = music
) => {
    const menuElement = document.createElement('div');
    const viewsTitle = makeTitle('Views','h3');
    menuElement.appendChild(viewsTitle);
    // Add view buttons
    const notesButton = makeButton(
        'view-notes',
        'Notes',
        ['pill']
    );
    menuElement.appendChild(notesButton);
    const intervalsButton = makeButton(
        'view-intervals',
        'Intervals',
        ['pill']
    );
    menuElement.appendChild(intervalsButton);
    // Add Highlights Title
    const highlightsTitle = makeTitle('Highlights','h3');
    menuElement.appendChild(highlightsTitle);
    // Add Notes Subtitle
    const notesSubTitle = makeTitle('Notes','h4');
    menuElement.appendChild(notesSubTitle);
    // Add Notes Buttons
    musicSet.notes.forEach((note, noteIndex) => {
        const noteHighlightButton = makeButton(
            `highlight-note-${noteIndex}`,
            note,
            ['pill','highlight'],
            {id:noteIndex,type:'note'}
        );
        menuElement.appendChild(noteHighlightButton);
    });
    // Add Intervals Subtitle
    const intervalsSubTitle = makeTitle('Intervals','h4');
    menuElement.appendChild(intervalsSubTitle);
    // Add Intervals Buttons
    musicSet.intervals.forEach((interval, intervalIndex) => {
        const intervalHighlightButton = makeButton(
            `highlight-interval-${intervalIndex}`,
            interval,
            ['pill','highlight'],
            {id:intervalIndex,type:'interval'}
        );
        menuElement.appendChild(intervalHighlightButton);
    });

    return menuElement;
}
const displayHighlights = (
    fretStore
) => {
    clearHighlights();
    fretStore.highlightIntervals.forEach((interval) => {
        document.documentElement.style.setProperty(`--interval-${interval}`, '#c99');
    });
    fretStore.highlightNotes.forEach((note) => {
        document.documentElement.style.setProperty(`--note-${note}`, '#99c');
    });
}
const clearHighlights = () => {
    music.intervals.forEach((interval, intervalIndex) => {
        document.documentElement.style.setProperty(`--interval-${intervalIndex}`, 'inheret');
    });
    music.notes.forEach((note, noteIndex) => {
        document.documentElement.style.setProperty(`--note-${noteIndex}`, 'inheret');
    });
}

const makeTitle = (
    text = '',
    titleTag = 'h1'
) => {
    const titleElement = document.createElement(titleTag);
    const titleText = document.createTextNode(text);
    titleElement.appendChild(titleText);
    return titleElement;
}

const makeButton = (
    id = '',
    text = '',
    classes = [],
    dataset = {}
) => {
    const button = document.createElement('button');
    button.id = id;
    classes.forEach((classes) => {
        button.classList.add(classes);
    });
    for (const key in dataset) {
        button.dataset[key] = dataset[key];
    }
    const buttonText = document.createTextNode(text);
    button.appendChild(buttonText);
    return button;
};

export { mount, displayFretboard, displayMenu, displayHighlights }
