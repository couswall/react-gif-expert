import { useState } from "react"



export const AddCateogry = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');


    //Se extrae el target del evento
    const onInputChange = ( {target} ) => {

        setInputValue( target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        /* 
        ==============PRIMERA SOLUCIÓN============
        Para esta primera solución se tiene que extraer el setCaegories 
        
        // Valida que en el input se escriba más de una letra
        if( inputValue.trim().length <= 1 ) return;
        
        //Se usa el callback para poder traer las categorias 
        setCategories( categories => [inputValue, ...categories]);
        
        //Se añade este String al State para que después de dar Enter el input quede vacío
        setInputValue('');
        
        */

        // ========= SEGUNDA SOLUCIÓN ============
        //Para está segunda Solución tomamos la prop onNewCategory que se asignó en el componente GiftExpertApp
         
        
        // Valida que en el input se escriba más de una letra
        if( inputValue.trim().length <= 1 ) return;


        onNewCategory( inputValue.trim());
        setInputValue('');

        
    }

  return (

    <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange}
        />
    </form>

    
  )
}

