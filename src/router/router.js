//路由组件封装
import React, { Suspense } from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import {RouteTable} from './RouteTable';

//loadding页面
const Loadding = ()=>{
    <>
        <div>loadding...</div>
    </>
}

const syncRouter = (table => {
    if(table && table.length){
        return table.map(({path,Component,children,redirect})=>{
            return children && children.length ? (
                <Route path={path} key={path} element={<Suspense fallback={<Loadding/>}><Component /></Suspense>}>
                    {syncRouter(children)} //递归遍历子路由
                    { redirect?
                        (<Route path={path} element={<Navigate to={redirect} />}></Route>):
                        (<Route path={path} element={<Navigate to={children[0].path} />}></Route>)
                    }
                </Route>
            ):(
                <Route key={path} path={path} element={<Suspense fallback={<Loadding/>}><Component /></Suspense>}></Route>
            )
        })
    }
    // console.log(table);
    // let mRouteTable = [];
    // table.forEach(route => {
    //     mRouteTable.push({
    //         path: route.path,
    //         element:(
    //             <Suspense fallback={ }>
    //                 <route.component />
    //             </Suspense>
    //         ),
    //         children: route.children && syncRouter(route.children)
    //     })
    // });
    // return mRouteTable;
})

//直接暴露成一个组件调用
// export default () => useRoutes(syncRouter(RouteTable));

const RouteView = () => {
    return (
        <Routes>
            {syncRouter(RouteTable)}
        </Routes>
    )
}

export default RouteView;