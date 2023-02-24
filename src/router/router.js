// import Smartpark from './pages/SmartPark/index';
// import Aqsc from './pages/SmartPark/aqsc/index';
// import Jnhb from './pages/SmartPark/jnhb/index.jsx'
// import Digitalaircraft from './pages/DigitalAircraft/index'
// import Digitalworkshop from './pages/DigitalWorkshop/index';
// import { useRoutes, Navigate } from 'react-router-dom';

// export default function BaseRoute(){
//     const element = useRoutes([
//         {
//             path:'/smartpark',
//             element:<Smartpark />,
//             children:[
//                 {
//                     path:'aqsc',
//                     element:<Aqsc/>
//                 },
//                 {
//                     path:'jnhb',
//                     element:<Jnhb/>
//                 }
//             ]
//         },
//         {
//             path:'/digitalaircraft',
//             element:<Digitalaircraft />
//         },
//         {
//             path:"/digitalworkshop",
//             element:<Digitalworkshop />
//         },
//         {
//             path:"/",
//             element:<Navigate to='/smartpark/aqsc' />
//         }
//     ]);
//     return element;
// }


//懒加载路由表
import React, { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const RouteTable = [
    {
        path:'/smartpark',
        component: lazy(()=> import('../pages/SmartPark/index')),
        children:[
            {
                path:'aqsc',
                component: lazy(()=> import('../pages/SmartPark/aqsc/index'))
            },
            {
                path:'jnhb',
                component: lazy(()=> import('../pages/SmartPark/jnhb/index'))
            }
        ]
    },
    {
        path:'/digitalaircraft',
        component: lazy(()=> import('../pages/DigitalAircraft/index'))
    },
    {
        path:"/digitalworkshop",
        component: lazy(()=> import('../pages/DigitalWorkshop/index'))
    }
];

const syncRouter = (table => {
    console.log(table);
    let mRouteTable = [];
    table.forEach(route => {
        mRouteTable.push({
            path: route.path,
            element:(
                <Suspense fallback={ <div>路由加载中...</div> }>
                    <route.component />
                </Suspense>
            ),
            children: route.children && syncRouter(route.children)
        })
    });
    return mRouteTable;
})

//直接暴露成一个组件调用
export default () => useRoutes(syncRouter(RouteTable));