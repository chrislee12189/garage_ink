import React from 'react'
import styles from '../styles';
import { useState } from 'react';
import axios from 'axios';


const AddProduct = () => {

    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: 0,
        stock: 0
    })

    const [errorMessage, setErrorMessage] = useState(null)





    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log("Submitted")
        // console.log(product)

        //product is checked against validation criteria, if it passes, it sends object to api
        if(!product.title){
            setErrorMessage("You must provide a title")}
            else if(!product.price){
                setErrorMessage("You must provide a price")
            } else {
                    setErrorMessage(null)
                    //send to API
                    //base URL set to localhost:3005
                    //sends data to API
                    axios.post("/products", product)
                    .then((res) => res.data)
                    .then((json) => console.log(json))
                    //clears fields after submission
                    setProduct({
                        title: "",
                        description: "",
                        price: 0,
                        stock: 0
                    })}}




    const handleChanges = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
    
        //callback to get previous/original state
        setProduct((prevProduct) => {
            return {
                ...prevProduct,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <section>
            {/* change default behaviour of form submit, control it by passing in a function */}
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <input className={`${styles.input}`} type='text' name='title' placeholder='Product Name' value={product.title} onChange={handleChanges}/>
                    <input className={`${styles.input}`} type='text' name='description' placeholder='Description' value={product.description} onChange={handleChanges}/>
                    <input className={`${styles.input}`} type='file' name='image' placeholder='Image' accept='.png, .jpg, .jpeg' />
                    <input className={`${styles.input}`} type='number' name='price' placeholder='Price' value={product.price} onChange={handleChanges}/>
                    <input className={`${styles.input}`} type='number' name='stock' placeholder='Stock' value={product.stock} onChange={handleChanges}/>
                    <div>
                    <button type='submit' value='Add Product' className='bg-[#84bffe] rounded-xl ml-4 mt-4 py-1 px-8 text-white font-poppins hover:scale-110 duration-300'>Add Product</button>
                </div>
            </div>
            <div className='h-[80px] text-white'>{errorMessage}</div>
            </form>
        </section>
    )
    }


export default AddProduct