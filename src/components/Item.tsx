import React, { memo } from 'react';

import { ItemType } from '../types';

type Props = {
    item: ItemType
};

export const Item: React.FC<Props> = memo(({ item }) => {
    return (
        <li className={'App-item'}>{`Title is: ${item.title} !`}</li>
    );
});