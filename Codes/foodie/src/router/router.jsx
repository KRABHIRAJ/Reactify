import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../Layout";
import { lazy, Suspense } from 'react';
import { AppBody, Cart, SkeletonCard } from "../components";
const CarouselRestaurantList = lazy(() => import('../components/body/mindCarousel/CarouselRestaurantList'))
const RestaurantMenu = lazy(() => import('../components/body/restaurantMenu/RestaurantMenu'))


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path="" element={<AppBody />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="collections/:id" element={
                <Suspense fallback={<SkeletonCard count={32} /> }>
                    <CarouselRestaurantList />
                </Suspense>
            } />
            <Route path="restaurants/:id" element={
                <Suspense fallback={<SkeletonCard count={32} /> }>
                    <RestaurantMenu />
                </Suspense>
            } />
        </Route>
    )
);

export default router;