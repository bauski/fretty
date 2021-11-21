const mount = (
    id,
    display
) => { 
    const viewport = document.querySelector(id);
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
            fretElement.classList.add('fret',`fret-${stringIndex}-${fretIndex}`);
            const fretText = document.createTextNode(fret.note);
            fretElement.appendChild(fretText);
            stringElement.appendChild(fretElement);
        });
        fretboard.appendChild(stringElement);
    });
    return fretboard;
}

const displayMenu = (
    fretStore
) => {
    /*
    <h3>
                Views
            </h3>
            <button id="view-notes" class="pill">
                Notes
            </button>
            <button id="view-intervals" class="pill">
                Intervals
            </button>
            <h3>
                Highlights
            </h3>
            <h4>
                Notes
            </h4>
            <button class="pill highlight" data-id="0" data-type="note">
                A
            </button>
            <button class="pill highlight" data-id="1" data-type="note">
                A#/Bb
            </button>
            <button  class="pill highlight" data-id="2" data-type="note">
                B
            </button>
            <button class="pill highlight" data-id="3" data-type="note">
                C
            </button>
            <button  class="pill highlight" data-id="4" data-type="note">
                C#/Db
            </button>
            <button  class="pill highlight" data-id="5" data-type="note">
                D
            </button>
            <button  class="pill highlight" data-id="6" data-type="note">
                D#/Eb
            </button>
            <button  class="pill highlight" data-id="7" data-type="note">
                E
            </button>
            <button  class="pill highlight" data-id="8" data-type="note">
                F
            </button>
            <button  class="pill highlight" data-id="9" data-type="note">
                F#/Gb
            </button>
            <button  class="pill highlight" data-id="10" data-type="note">
                G
            </button>
            <button  class="pill highlight" data-id="11" data-type="note">
                G#/Ab
            </button>
            <h4>
                Intervals
            </h4>
            <button  class="pill highlight" data-id="0" data-type="interval">
                1
            </button>
            <button  class="pill highlight" data-id="1" data-type="interval">
                m2
            </button>
            <button  class="pill highlight" data-id="2" data-type="interval">
                M2
            </button>
            <button  class="pill highlight" data-id="3" data-type="interval">
                m3
            </button>
            <button  class="pill highlight" data-id="4" data-type="interval">
                M3
            </button>
            <button  class="pill highlight" data-id="5" data-type="interval">
                P4
            </button>
            <button  class="pill highlight" data-id="6" data-type="interval">
                TT
            </button>
            <button  class="pill highlight" data-id="7" data-type="interval">
                P5
            </button>
            <button  class="pill highlight" data-id="8" data-type="interval">
                m6
            </button>
            <button  class="pill highlight" data-id="9" data-type="interval">
                M6
            </button>
            <button  class="pill highlight" data-id="10" data-type="interval">
                m7
            </button>
            <button  class="pill highlight" data-id="11" data-type="interval">
                M7
            </button>
            */
}

export { mount, displayFretboard, displayMenu }
