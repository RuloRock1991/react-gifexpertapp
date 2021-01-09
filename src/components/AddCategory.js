import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit Hecho');

        if ( inputValue.trim().length > 2 ){
            // setCategories( [...categories, inputValue] );
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }
        
        //Esta forma es sin pasarle las categorias como argumento
        //setCategories( cats => [...cats, inpValue] );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2>Add Category</h2>

            {/* <button onClick={ handleAdd }>Agregar Anime</button> */}
            <input type="text" id="inpTxt" value={ inputValue } onChange={ handleInputChange }></input>
        </form>
    )   
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
