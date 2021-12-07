# fretty
Guitar Fretboard Display for Quick Chord Recognition

## Usage
- Click between notes and intervals to toggle fretboard views
- When you click between the views, the highlightable items will change
- Each view preserves highlighted items
- Click on colors for highlights for whatever you want
- Once you load online, you can take it offline and use anywhere

## Coding Notes
- Uses JS module importing and exporting for separation of responsibilities
- Observer design pattern used for multiple observer function firing on state change
- Uses simple state change data flow pattern
- Working service worker for caching for offline usage
