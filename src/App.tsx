import React, { useEffect } from 'react';

import { List } from './components/List';

import { makeRandomString } from './utils';
import { ITEMS_COUNT } from './constants';
import { ItemType } from './types';

import logo from './logo.svg';
import './App.css';

function App() {
    let [items, setItems] = React.useState<ItemType[]>([]);

    function makeItems(): ItemType[] {
        const result: ItemType[] = [...Array(ITEMS_COUNT)].map(() => {
            return {
                id: makeRandomString(), 
                title: makeRandomString()
            }
        });

        return result;
    };

    function addItems(): void {
        const result = [...items, ...makeItems()];

        setItems(result);
    };

    useEffect(() => {
        setItems(makeItems());
    }, []);

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div>
                <button className={"App-button"} onClick={addItems}>
                    Add More
                </button> 
            </div>
            <List items={items} />
        </div>
    );
}

export default App;
