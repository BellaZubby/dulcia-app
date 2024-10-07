import React, { useState } from 'react'
import { DataTypes, QueryDataTypes, queryData } from '@/app/Hooks/testData' 

type Props = {}


const Paginated = (data:QueryDataTypes[], page:number, limit:number) => {
    return data.map(parent => {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        return {
            ...parent,
            detail:parent.detail.slice(startIndex, endIndex),
        };
    });
    // const parent = data.find(p => p.id === parentId);
    // if(!parent) return [];

    // const startIndex = (page - 1) * limit;
    // const endIndex = startIndex + limit;

    // return parent.detail.slice(startIndex,endIndex)
    // const [currentPage, setPage] =useState(1)

    // const getPaginatedData = () => {
    //     const startIndex = (currentPage -1) * limit
        
    //     const endIndex = startIndex + limit

    //     return data.slice(startIndex, endIndex)
    // }

    // const paginatedData = getPaginatedData()

    // handle previous
    // const prevPage = () => {
    //     if (currentPage > 1) {
    //         setPage(previousPage => previousPage - 1)
    //     }
    // }

    // handle next

//     const nextPage = () => {
//         if (currentPage < Math.ceil(data.length/limit)) {
//             setPage(previousPage => previousPage + 1)
//         }
//     }
//  return {nextPage, prevPage, paginatedData, currentPage}
}

export default Paginated