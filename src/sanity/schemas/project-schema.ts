const project = {
    title: 'Project',
    name: 'project',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {source: 'name'}
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    title: 'Alt',
                    name: 'alt',
                    type: 'string'
                }
            ]
        },
        {
            title: 'URL',
            name: 'url',
            type: 'url'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{type: 'block'}]
        }
    ]
}

export default project;