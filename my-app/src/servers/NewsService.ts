import Instance from './Instance';

export interface NewsItem {
  article_id: string;
  title: string;
  description: string;
  pubDate: string;
  image_url?: string;
  link: string;
  keywords?: string[];
  creator?: string[] | null;
  source_name: string;
  language: string;
  country: string[];
  category: string[];
}

interface ApiResponse {
  status: string;
  totalResults: number;
  results: NewsItem[];
  nextPage?: string;
}

interface NewsResponse {
  success: boolean;
  data?: ApiResponse;
  error?: string;
}

const API_KEY = 'pub_cf69ba2e083d43cbb29e1b5b35128748';

export const NewsService = {
  getLatestNews: async (params: string = ''): Promise<NewsResponse> => {
    try {
      const response = await Instance.get<ApiResponse>(`/latest?apikey=${API_KEY}${params}`);
      return {
        success: response.data.status === 'success',
        data: response.data,
      };
    } catch (error: any) {
      console.error('Error fetching news:', error);
      return {
        success: false,
        error: error.message || 'Lỗi API NewsData.io',
      };
    }
  },
  getNewsByCategory: async (category: string, params: string = ''): Promise<NewsResponse> => {
    try {
      const response = await Instance.get<ApiResponse>(`/latest?apikey=${API_KEY}&category=${category}${params}`);
      return {
        success: response.data.status === 'success',
        data: response.data,
      };
    } catch (error: any) {
      console.error('Error fetching category news:', error);
      return {
        success: false,
        error: error.message || 'Lỗi API NewsData.io',
      };
    }
  },

  getNewsByCountry: async (country: string, params: string = ''): Promise<NewsResponse> => {
    try {
      const response = await Instance.get<ApiResponse>(`/latest?apikey=${API_KEY}&country=${country}${params}`);
      return {
        success: response.data.status === 'success',
        data: response.data,
      };
    } catch (error: any) {
      console.error('Error fetching country news:', error);
      return {
        success: false,
        error: error.message || 'Lỗi API NewsData.io',
      };
    }
  },

  //  helper để dùng country=vi
  getHotNews: () => NewsService.getLatestNews('&country=vi'),
  // getLatestNewsData: () => NewsService.getLatestNews('&country=vi&language=vi&size=6'),
  getFeaturedNews: () => NewsService.getLatestNews('&country=vi&language=vi,hy&category=other&size=8'),
  // getCryptoNews: () => NewsService.getLatestNews('&country=vi&language=vi&category=technology&size=4'), 
}

export default NewsService;