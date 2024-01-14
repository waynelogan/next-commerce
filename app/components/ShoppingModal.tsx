'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'



export default function ShoppingCartModal() {
    const { cartCount, shouldDisplayCart, handleCartClick } = useShoppingCart()

    return (
        <Sheet open={shouldDisplayCart} onOpenChange={ () => handleCartClick() } >
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                </SheetHeader>
                <div className='h-full flex flex-col justify-between'>
                    <div className='mt-8 flex-1 overflow-y-auto'>
                        <ul className='-my-6 divide-y divide-gray-200'>
                            { cartCount === 0 ? (
                                <h1 className='py-6'>You don't have any items</h1>
                            ) : (
                                <li>Item</li>
                            )}
                        </ul>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}