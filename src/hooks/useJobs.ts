import { useGetJobs } from '../api';

export function useJobs(keyword?: string) {
    const { data, error, isLoading } = useGetJobs(keyword);
    return { data, error, isLoading }
}