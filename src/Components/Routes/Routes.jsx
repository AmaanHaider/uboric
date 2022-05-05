import { Route, Routes } from 'react-router-dom';
import Categories from '../Categories/Categories';
import ProductSinglePage from '../ProductPage/ProductDisplay/ProductSinglePage';
import ProductPage from '../ProductPage/ProductPage';

export const UboricRoutes = () => {
    return (
        <>
            <Routes>    
            {/* <Route path="/" element={<HomePage/>}></Route>       */}
            <Route path="/categories" element={<Categories/>}></Route>
            <Route path="/footwear" element={<ProductPage/>}></Route>      
             <Route path="/footwear/:id" element={<ProductSinglePage/>}></Route>
            </Routes>

        </>
    )
}
