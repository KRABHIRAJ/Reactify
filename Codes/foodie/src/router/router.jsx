import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../Layout";
import { lazy, Suspense } from 'react';
import { AppBody, SkeletonCard } from "../components";
const CarouselRestaurantList = lazy(() => import('../components/body/mindCarousel/CarouselRestaurantList'))


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path="" element={<AppBody />} />
            <Route path="collections/:id" element={
                <Suspense fallback={<SkeletonCard count={32} /> }>
                    <CarouselRestaurantList />
                </Suspense>
            } />
        </Route>
    )
);

export default router;