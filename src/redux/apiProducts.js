import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiProducts = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://fakestoreapi.com/products/', method: 'GET', }),

    endpoints: builder=>({
        getProducts: builder.query({
            query:(cat)=>`${cat}`
        }),
        getCategoriesElectronics: builder.query({
            query:()=>`category/electronics`
        }),
        getCategoriesJewelery: builder.query({
            query:()=>`category/jewelery`
        }),
        getCategoriesMens: builder.query({
            query:()=>`category/men's clothing`
        }),
        getCategoriesWomans: builder.query({
            query:()=>`category/women's clothing`
        }),
        getProductsId: builder.query({
            query:(prod)=>`/${prod}`
        }),
    })
})

export const{
    useGetProductsQuery, 
    useGetCategoriesElectronicsQuery, 
    useGetCategoriesJeweleryQuery, 
    useGetCategoriesMensQuery, 
    useGetCategoriesWomansQuery,
    useGetProductsIdQuery
} = apiProducts