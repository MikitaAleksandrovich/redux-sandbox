import { createStore, bindActionCreators } from 'redux';
import * as actions from './actions';
import reducer from './reducer';



const store = createStore(reducer);
const { dispatch } = store;



const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.querySelector('#inc').addEventListener('click', inc);

document.querySelector('#dec').addEventListener('click', dec);

document.querySelector('#rnd').addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    rnd(payload);
});

const update = () => {
    document.querySelector('#counter').innerHTML = store.getState();
};

store.subscribe(update);








