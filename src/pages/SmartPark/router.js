import Smartpark from './pages/SmartPark/index';

import Digitalaircraft from './pages/DigitalAircraft/index'
import Digitalworkshop from './pages/DigitalWorkshop/index';

export default [
    {
        path:'/smartpark',
        element:<Smartpark />,
        children:[
            {
                path:'aqsc',
                element:<Aqsc/>
            },
            {
                path:'jnhb',
                element:<Jnhb/>
            },
        ]
    },
    {
        path:'/digitalaircraft',
        element:<Digitalaircraft />
    },
    {
        path:"/digitalworkshop",
        element:<Digitalworkshop />
    },
    {
        path:"/",
        element:<Smartpark />
    }
]