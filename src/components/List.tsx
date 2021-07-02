import React from 'react';

import { Item } from './Item';

import { ItemType } from '../types';

type Props = {
    items: ItemType[]
}

export const List:React.FC<Props> = ({ items }) => {
    return (
        <ul>
            {items.map((item: ItemType) => (
                <Item item={item} key={item.id} />
            ))}
        </ul>
    );
}