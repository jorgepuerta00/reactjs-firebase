import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints } from '../constants/ApiEndpoints';
import { IErrorResponse } from "../components/base/Types";

export function useGetFilters(type: string) {
  
  const api = axios.create({ baseURL: '' });

  return useQuery<Map<number, IFilter>, IErrorResponse>(
    [ApiEndPoints.filters.getFilters, type],
    async (_: any, type: string): Promise<Map<number, IFilter>> => {
      
      const { data } = await api.get(`${ApiEndPoints.filters.getFilters}`);

      let filterMap = new Map<number, IFilter>();
      let index = 0;
      let jobpostings;
      for(let filter of data[type]) {
        filterMap.set(index, filter);
        index++;
      }

      return filterMap;
    },
  );
}

interface IFilter {
  key: string;
  count: string;
}