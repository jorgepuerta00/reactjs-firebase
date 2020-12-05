import { useGetJobs } from '../api/useGetJobs';

export function useJobs() {
    const { data, error, isLoading } = useGetJobs();
    return { data, error, isLoading }
}