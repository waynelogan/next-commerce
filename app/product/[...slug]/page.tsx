import ImageGallery from '@/app/components/ImageGallery'
import { fullProduct } from '@/app/interface'
import { client } from '@/app/lib/sanity'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'


async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name
      }`

    const data = await client.fetch(query)
    return data
}



export default async function Product(
    { params: { slug } } : { params: { slug: string }}
) {
    const data: fullProduct = await getData(slug)

    return (
        <div className='bg-white'>
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data.images} />
                    <div className='md:py-8'>
                        <div className='mb-2 md:mb-3'>
                            <span className='mb-0.5 inline-block text-gray-500'>
                                { data.categoryName }
                            </span>
                            <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
                                { data.name }
                            </h2>
                        </div>
                        <div className='mb-6 flex items-center gap-3 md:mb-10'>
                            <Button className='rounded-full gap-x-2'>
                                <span className='text-sm'>4.2</span>
                                <Star className='h-5 w-5' />
                            </Button>
                            <span className='text-sm text-gray-500 transition duration-100'>
                                56 ratings
                            </span>
                        </div>
                        <div className='mb-4 '>
                            <div className='flex items-end gap-2'>
                                <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                                    KES {data.price.toLocaleString('en-US')}
                                </span>
                                <span className=' mb-0.5 text-red-500 line-through'>
                                    KES {(data.price * (1/0.7)).toFixed(0).toLocaleString('en-US') }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}