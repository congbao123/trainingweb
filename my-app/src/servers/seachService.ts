import Instance from './Instance';
import { type NewsItem } from './NewsService';  // Import từ NewsService hiện tại

// Interface giữ nguyên từ NewsService
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

const API_KEY = 'pub_a8e8d60ec2134ea0911e96f56fb852ca';  

export const SearchService = {
  // Hàm search tin tức theo từ khóa
  searchNews: async (query: string, params: string = '&category=top'): Promise<NewsResponse> => {
    try {
      const response = await Instance.get<ApiResponse>(`/latest?apikey=${API_KEY}&q=${encodeURIComponent(query)}${params}`);
      return {
        success: response.data.status === 'ok',  // NewsData.io dùng 'ok' cho search
        data: response.data,
      };
    } catch (error: any) {
      console.error('Error searching news:', error);
      return {
        success: false,
        error: error.message || 'Lỗi API Search NewsData.io',
      };
    }
  },
};

export default SearchService;