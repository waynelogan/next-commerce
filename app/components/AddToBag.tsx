'use client'

import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '../lib/sanity'


export interface ProductCard {
    name: string,
    description: string,
    price: number,
    currency: string,
    image: any,
}


export default function AddToBag ({ currency, description, image, name, price } : ProductCard) {
    const { addItem, handleCartClick } = useShoppingCart()
    const product = {
        name,
        description,
        price,
        currency,
        image: urlFor(image).url(),
        id: '3r4t5h'
    }
  
  return (
    <Button 
    onClick={() => {
        addItem(product)
        handleCartClick()
    }}
    >
        Add to Cart
    </Button>
  )
}