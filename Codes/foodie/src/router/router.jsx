import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../Layout";
import { lazy, Suspense } from 'react';
import { AppBody, CarouselRestaurantList } from "../components";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path="" element={<AppBody />} />
            <Route path="collections/:id" element={<CarouselRestaurantList />} />
        </Route>
    )
);

export default router;