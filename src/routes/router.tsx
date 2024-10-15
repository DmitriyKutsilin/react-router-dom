import * as React from "react";
import {createBrowserRouter, Navigate, Outlet, RouteObject,} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {Login} from "../components/pages/Login";

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:brand/:model/:id',
    PROTECTED: '/protected',
    ERROR: '/error404',
    LOGIN: '/login'
} as const

const publicRoutes: RouteObject[] = [
    // навигацию к адидас по дефолту можно сделать и внутри компоненты App
    {
        index: true,
        element: <Navigate to={PATH.ADIDAS}/>
    },
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>,
    },
    {
        path: PATH.PRICES,
        element: <Prices/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },
    {
        path: PATH.LOGIN,
        element: <Login/>
    },
    {
        path: PATH.ERROR,
        element: <Error404/>
    }
]

const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED,
        element: (
            <ProtectedPage/>
        )
    },
]

const PrivateRoutes = () => {
    const isAuth = false
    return isAuth ? <Outlet/> : <Navigate to={PATH.LOGIN}/>
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            ...publicRoutes,
        ],
    }
]);

// -----------------------------------------------------------------------------
// export const PATH = {
//     ADIDAS: '/adidas',
//     PUMA: '/puma',
//     ABIBAS: '/abibas',
//     PRICES: '/prices',
//     MODEL: '/:brand/:model/:id',
//     PROTECTED: '/protected',
//     ERROR: '/error404',
//     LOGIN: '/login'
// } as const
//
// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         errorElement: <Navigate to={PATH.ERROR}/>,
//         children: [
//             {
//                 path: PATH.ADIDAS,
//                 element: <Adidas/>,
//             },
//             {
//                 path: PATH.PUMA,
//                 element: <Puma/>,
//             },
//             {
//                 path: PATH.ABIBAS,
//                 element: <Abibas/>,
//             },
//             {
//                 path: PATH.PRICES,
//                 element: <Prices/>,
//             },
//             {
//                 path: PATH.MODEL,
//                 element: <Model/>,
//             },
//             {
//                 path: PATH.PROTECTED,
//                 element: (
//                     <ProtectedRoute>
//                         <ProtectedPage/>
//                     </ProtectedRoute>
//                 )
//             },
//             {
//                 path: PATH.LOGIN,
//                 element: <Login/>
//             },
//             {
//                 path: PATH.ERROR,
//                 element: <Error404/>
//             }
//         ]
//     }
// ]);