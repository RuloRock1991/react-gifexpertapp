import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     const inpBox = document.getElementById("inpTxt");
    //     if ( inpBox.value != "" ){
    //         const val = inpBox.value;
            
    //         // setCategories( [...categories, val]);
    //         setCategories( cats => [...categories, val] );
    //     }
    //     else{
    //         console.error("La caja de texto esta vacia");
    //     }
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( category => {
                        return <GifGrid key={ category } category={ category } />
                    } )
                }
            </ol>
        </>
    )
}