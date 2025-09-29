import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import CategoryPage from '../page/CategoryPage';
import Detail from '../page/Detail';
import CountryPage from '../page/CountryPage';
import NewsPage from '../page/NewPage';
import Search from '../page/Search';

const AppRouter: React.FC = () => {
  return (
       <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<CategoryPage />} />
       <Route path="/news/:id" element={<Detail />} />
       <Route path="/country/:country" element={<CountryPage />} /> 
       <Route path='/newpage'element={<NewsPage />} />  
       <Route path="/search" element={<Search />} />
      </Routes>
  );
};

export default AppRouter;