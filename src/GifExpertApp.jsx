import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (onNewCategory) => {
        //console.log(onNewCategory)
        if (categories.includes(onNewCategory)) return;
        setCategories([onNewCategory, ...categories]);
        //setCategories(cat => [...cat, 'Valorant']);
    }


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))}

        </>
    )
}
