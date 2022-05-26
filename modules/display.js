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
    menuElement.classList.add('menu');
    const viewElement = document.createElement('div');
    viewElement.classList.add('view-menu');
    const viewsTitle = makeTitle('Views','h2');
    menuElement.appendChild(viewsTitle);

    return menuElement;
}
const displayHighlights = (
    fretStore
) => {
    for (const [interval, {color, display}] of Object.entries(fretStore.highlightIntervals)) {
        if (display) {
            document.documentElement.style.setProperty(`--interval-${interval}`, color);
        } else {
            document.documentElement.style.setProperty(`--interval-${interval}`, 'inherit');
        }
    }
    for (const [note, {color, display}] of Object.entries(fretStore.highlightNotes)) {
        if (display) {
             document.documentElement.style.setProperty(`--note-${note}`, color);
        } else {
            document.documentElement.style.setProperty(`--note-${note}`, 'inherit');
        }
    }
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
    state
) => {
    const button = document.createElement('button');
    button.id = id;
    classes.forEach((classes) => {
        button.classList.add(classes);
    });
    if (state === text.toLowerCase()) {
        button.classList.add('active');
    }
    const buttonText = document.createTextNode(text);
    button.appendChild(buttonText);
    return button;
};

const makeColorPicker = (
    id = '',
    text = '',
    color = '#ffffff',
    highlight = false
) => {
    const container = document.createElement('div');
    container.classList.add('color-picker');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `${id}-toggle`;
    checkbox.classList.add('hide');
    checkbox.checked = highlight;
    container.appendChild(checkbox);

    const label = document.createElement('label');
    label.htmlFor = `${id}-toggle`;
    label.classList.add('pill');
    label.classList.add('highight');
    
    const labelText = document.createTextNode(text);
    label.appendChild(labelText);
    container.appendChild(label);
    
    const input = document.createElement('input');
    input.id = id;
    input.type = 'color';
    input.value = color;
    input.classList.add('color-input');
    container.appendChild(input);
    return container;
};
export { mount, displayFretboard, displayMenu, displayHighlights }
