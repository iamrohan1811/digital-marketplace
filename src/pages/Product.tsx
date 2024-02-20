import React from 'react'
import { useNavigate } from 'react-router-dom'

type Image={
    src:string,
    alt:string,
}
type Props={
    title:string,
    desc:string,
    images:Image[],
    price?:number,
}

const Product=(props:Props)=>{
    const navigate = useNavigate();
    const handlePayClick=()=>{
        navigate("/checkout");
    }
    return(
        <div className='container p-0 mt-10 border-l border-r border-b rounded grid grid-cols-3'>
            <img className='col-span-3' src={props.images[0].src} alt={props.images[0].alt} />
            <div className='col-span-2'>
                <h1 className='font-bold text-4xl border-b p-6'>{props.title}</h1>
                <p className='text-gray-400 p-6'>{props.desc}</p>
            </div>
            <div className='border-l p-6 flex flex-col'>
                <button onClick={handlePayClick} className='bg-indigo-500 hover:bg-indigo-600 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(224,224,224,1)] focus:outline-none border-white hover:border-white border-2' >Buy Now</button>
            </div>
        </div>
    )
}

export default Product;