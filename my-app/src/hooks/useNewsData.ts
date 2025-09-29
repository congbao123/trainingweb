import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import NewsService from '../servers/NewsService';
import { setHotNews, setFeaturedNews, setLatestNews } from '../redux/newsSlice';  // Giữ setLatestNews để dispatch

export const useNewsData = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllNews = async () => {
      setLoading(true);
      try {
        const [hotRes, featuredRes] = await Promise.all([  // Loại bỏ latestRes
          NewsService.getHotNews(),
          NewsService.getFeaturedNews(),
        ]);

        if (!hotRes.success) throw new Error(hotRes.error || 'Hot news error');
        if (!featuredRes.success) throw new Error(featuredRes.error || 'Featured news error');

        // Dispatch phần tử đầu tiên cho Tin Nóng
        if (hotRes.data?.results[0]) {
          dispatch(setHotNews(hotRes.data.results[0]));
        }
        // Tái sử dụng các phần tử còn lại cho Tin Tức Mới Nhất
        dispatch(setLatestNews(hotRes.data?.results.slice(1) || []));
        dispatch(setFeaturedNews(featuredRes.data?.results || []));
      } catch (err) {
        setError('Lỗi khi fetch news: ' + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, [dispatch]);

  return { loading, error };
};