import { createStore } from 'redux';

const reducer = (state = 0, action) => {

    switch (action.type) {
        case 'RND':
            return state + action.payload;
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(reducer);

const inc = () => {
    return { type: 'INC' };
};

const dec = () => {
    return { type: 'DEC' };
};

const rnd = (payload) => {
    return { type: 'RND', payload };
};

document.querySelector('#inc').addEventListener('click', () => {
        store.dispatch(inc());
});

document.querySelector('#dec').addEventListener('click', () => {
        store.dispatch(dec());
});

document.querySelector('#rnd').addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    store.dispatch(rnd(payload));
});

const update = () => {
    document.querySelector('#counter').innerHTML = store.getState();
};

store.subscribe(update);








