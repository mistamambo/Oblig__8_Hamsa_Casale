export default {
    type: 'document',
    name: 'movie',
    title: 'Movie',
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'title',
            description: 'Skriv inn film navn',
        },
        {
            type: 'reference',
            name: 'actor',
            title: 'actor',
            to: {type: 'actor'},
  
        },
        {
            type: 'reference',
            name: 'actor2',
            title: 'title',
            to: {type: 'actor'},
        },
        {
            type:'text',
            name:'tekst',
            title: 'Description',
            description: 'Movie description'
        },
        {
            type:'image',
            name:'poster',
            title:'Movie poster',
        },
        {
            type: 'slug',
            name: 'slug2',
            title: 'name',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => input
                                        .toLowerCase()
                                        .replace(/\s+/g, '-')
                                        .slice(0, 200)
            }
        }
    ],
  }