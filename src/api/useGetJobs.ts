import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints } from '../constants/ApiEndpoints';
import { IErrorResponse } from "../components/base/Types";

export function useGetJobs() {
  
  const api = axios.create({ baseURL: '' });

  return useQuery<Map<number, IJob>, IErrorResponse>(
    [],
    async (_: any, type: string): Promise<Map<number, IJob>> => {

      const { data } = await api.get(`${ApiEndPoints.jobs.getJobs}`);

      let filterMap = new Map<number, IJob>();
      let index = 0;
      for(let filter of data) {
        filterMap.set(index, filter);
        index++;
      }

      return filterMap;
    },
  );
}

interface IJob {
  name: string;
  job_title: string;
  total_jobs_in_hospital: string;
  items: Array<IJobDetail>;
}

interface IJobDetail {
  job_id: string;
  required_skills: string[];
  zip: string;
  location: string;
  nurse_patient_ratio: string;
  type: string;
  work_schedule: string;
  hospital_id: string;
  name: string;
  state: string;
  created: string;
  required_credentials: string[];
  department: string[];
  address: string;
  experience: string;
  city: string;
  description: string;
  job_title: string;
  hours: string[];
  salary_range: string[];
  job_type: string;
}