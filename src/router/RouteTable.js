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
        Component: lazy(()=> import('../pages/DigitalWorkshop/index')),
        redirect: '/digitalworkshop/cnc',
        children:[
            {
                path:'arjbz',
                Component: lazy(()=> import('../pages/DigitalWorkshop/ARJbz/index'))
            },
            {
                path:'arjzz',
                Component: lazy(()=> import('../pages/DigitalWorkshop/ARJzz/index'))
            },
            {
                path:'c919bz',
                Component: lazy(()=> import('../pages/DigitalWorkshop/C919bz/index'))
            },
            {
                path:'c919zz',
                Component: lazy(()=> import('../pages/DigitalWorkshop/C919zz/index'))
            },
            {
                path:'cnc',
                Component: lazy(()=> import('../pages/DigitalWorkshop/CNC/index'))
            },
            {
                path:'compositematerial',
                Component: lazy(()=> import('../pages/DigitalWorkshop/CompositeMaterial/index'))
            }
        ] 
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