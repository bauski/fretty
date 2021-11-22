const makeObserverController = (
    fretStore = {}
) => {
    return {
        store: fretStore,
        observers: []
    }
}

const addObserver = (
    observerController = {},
    fn
) => {
    observerController.observers.push(fn);
}

const mutate = (
    observerController = {},
    changes = {}
) => {
    for (const key in changes) {
        observerController.store[key] = changes[key];
        if (key == 'root') {
            observerController.store.frets = observerController.store.setIntervals(
                observerController.store.root,
                observerController.store.fretLength,
                observerController.store.stringNotes
            );
        }
    }
    console.log('mutate',observerController.store);
    fire(observerController);
}

const fire = (
    observerController = {}
) => {
    observerController.observers.forEach((fn) => {
        return fn();
    });
}

export { makeObserverController, addObserver, mutate, fire }
