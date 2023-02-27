import React, {lazy} from 'react'
//懒加载路由表
export const RouteTable = [
    {
        path:'/smartpark',
        Component: lazy(()=> import('../pages/SmartPark/index')),
        redirect: '/smartpark/aqsc',
        children:[
            {
                path:'aqsc',
                Component: lazy(()=> import('../pages/SmartPark/aqsc/index'))
            },
            {
                path:'jnhb',
                Component: lazy(()=> import('../pages/SmartPark/jnhb/index'))
            },
        ] 
    },
    {
        path:'/digitalaircraft',
        Component: lazy(()=> import('../pages/DigitalAircraft/index'))
    },
    {
        path:"/digitalworkshop",
        Component: lazy(()=> import('../pages/DigitalWorkshop/index'))
    },
    {
        path:"/*",
        Component: lazy(()=> import('../pages/SmartPark/index')),
        redirect:"/smartpark/aqsc",
        children:[
            {
                path:'*',
                Component: lazy(()=> import('../pages/SmartPark/aqsc/index'))
            }
        ]
    }
];