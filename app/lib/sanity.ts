import ImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

// create a sanity client
export const client = createClient({
    projectId: '1pd2i0bc',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: true
})

// create an image builder
const builder = ImageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}