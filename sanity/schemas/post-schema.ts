import { defineField, defineType } from "sanity";

export const post = defineType({
    name: "post",
    title: "Posts",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"

        }),
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name"
            }
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{type: 'image'}]
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{type: 'string'}]
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "description2",
            title: "Description2",
            type: "string",
        },
        {
            name: "description3",
            title: "Description3",
            type: "string",
        },
    ]

})
