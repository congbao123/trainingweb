import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { NewsItem } from '../servers/NewsService';
import type { RootState } from './store';

interface NewsState {
  hotNews: NewsItem | null;
  latestNews: NewsItem[];
  featuredNews: NewsItem[];
  cryptoNews: NewsItem[];
  detailNews: NewsItem | null; 
  categoryNews: NewsItem[]; //thể loại 
  countryNews: NewsItem[]; // thể loại quốc gia 
  searchResults:NewsItem[];
}

const initialState: NewsState = {
  hotNews: null,
  latestNews: [],
  featuredNews: [],
  cryptoNews: [],
  detailNews: null,
  categoryNews: [],
  countryNews: [],
  searchResults:[],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setHotNews: (state, action: PayloadAction<NewsItem>) => {
      state.hotNews = action.payload;
    },
    setLatestNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.latestNews = action.payload;
    },
    setFeaturedNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.featuredNews = action.payload;
    },
    setCryptoNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.cryptoNews = action.payload;
    },
    setCategoryNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.categoryNews = action.payload; // Lưu danh sách theo category
    },
    setCountryNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.countryNews = action.payload; // Lưu danh sách theo country
    },
    setDetailNews: (state, action: PayloadAction<NewsItem>) => {
      state.detailNews = action.payload;
    },
    clearDetailNews: (state) => {
      state.detailNews = null;
    },
    setSearchResults: (state, action: PayloadAction<NewsItem[]>) => {
      state.searchResults = action.payload;
    }
  },
});

export const { setHotNews, setLatestNews, setFeaturedNews, setCryptoNews,setCategoryNews,setCountryNews, setDetailNews, clearDetailNews, setSearchResults } = newsSlice.actions;

export default newsSlice.reducer;

// Selectors
export const selectHotNews = (state: RootState) => state.news.hotNews;
export const selectLatestNews = (state: RootState) => state.news.latestNews;
export const selectFeaturedNews = (state: RootState) => state.news.featuredNews;
export const selectCryptoNews = (state: RootState) => state.news.cryptoNews;
export const selectCategoryNews = (state: RootState) => state.news.categoryNews;
export const selectCountryNews = (state: RootState) => state.news.countryNews;
export const selectDetailNews = (state: RootState) => state.news.detailNews;
export const selectsearchResults = (state: RootState) => state.news.searchResults;

// Selector để lấy bài báo chi tiết dựa trên article_id
export const selectNewsById = (state: RootState, articleId: string) =>
  [
    ...(state.news.hotNews ? [state.news.hotNews] : []),
    ...state.news.latestNews,
    ...state.news.featuredNews,
    ...state.news.cryptoNews,
    ...state.news.categoryNews,
    ...state.news.countryNews,
    ...state.news.searchResults
  ].find((news) => news.article_id === articleId) || null;