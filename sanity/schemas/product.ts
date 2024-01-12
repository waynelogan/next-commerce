export default {
    name: 'product', // query name
    type: 'document',
    title: 'Product', // display name
    fields: [
        {
            name: 'name',
            title: 'Name of Product',
            type: 'string',
        },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{type: 'image'}],
        },
        {
            name: 'description',
            title: 'Description of Product',
            type: 'text',
        },
        {
            name: 'slug',
            title: 'Product Slug',
            type: 'slug',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        }
    ]
}