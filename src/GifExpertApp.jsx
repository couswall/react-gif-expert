import { useState } from "react"
import { AddCateogry, GifGrid } from "./components";



export const GifExpertApp = () => {

    const [categories, setCategories ]= useState(['One Punch']);

    const onAddCategory = ( newCategory ) =>{

        //El push YA NO SE USAAAA
        //const newCategories = categories.push('Naruto');
        
        //setCategories([ 'Naruto',...categories]);
        //SOLUCIÓN USANDO EL CALLBACK
        // setCategories( cate => [...cat, 'Naruto']);


        //if( categories.includes(newCategory)) return; 

        //valida el caseSensitive en el input
        if (!categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([newCategory, ...categories]);
        
    }


  return (
    <>
    
    {/* título */}
    <h1>GifExpertApp</h1>


    {/* Input */}
        <AddCateogry 
        
        // setCategories = { setCategories }

        //Creamos una prop onNewCategory en la cual le pasamos la función de onAddCategory
        onNewCategory = { value => onAddCategory(value)}
        
        />

    {/* Listado de GIF */}
    
    {
        categories.map(category => ( 
        <GifGrid 
            key={category}
            category={category}
        />
        ))
    }
        

        {/* GIF item */}
    
    </>
  )
}


