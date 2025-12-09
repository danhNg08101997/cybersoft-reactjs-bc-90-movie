import React, {memo} from 'react';

function Fruit(props) {
    const { fruit, onDelete } = props;
    console.log("🚀 ~ Fruit ~ fruit: ", fruit);
    return (
        <div>
            id: {fruit.id} - name: {fruit.name}
            <button onClick={() => {onDelete(fruit.id)}}>Delete</button>
        </div>
    );
}

export default memo(Fruit);