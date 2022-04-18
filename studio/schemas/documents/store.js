export default {
  title: 'Store',
  name: 'store',
  type: 'document',
  description: 'Keep track of data regarding a particular store',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string'
    },
    {
      title: 'Opening Hours',
      name: 'openingHours',
      type: 'array',
      of: [{type: 'dayAndTime'}]
    },
    {
      title: 'Storefront Image',
      name: 'storefrontImage',
      type: 'image',
      description: 'A nice picture of the store so bypassers will know what to look for'
    }
  ]
}
