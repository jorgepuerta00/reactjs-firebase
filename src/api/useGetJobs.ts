import { useQuery } from "react-query";
import axios from "axios";
import { ApiEndPoints } from '../constants/ApiEndpoints';
import { IErrorResponse } from "../components/base/Types";

export default function useGetJobs(keywork?: string) {
  
  const api = axios.create({ baseURL: '' });

  return useQuery<Map<number, IJob>, IErrorResponse>(
    [ApiEndPoints.azureservice.getJobs, keywork],
    async (endPoint: string, keywork: string): Promise<Map<number, IJob>> => {
      
      const { data } = await api.get(`${endPoint.concat(keywork == null ? '' : '/' + keywork)}`);

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
  jobTitle: string;
  totalJobsInHospital: string;
  jobs: Array<IJobDetail>;
}

interface IJobDetail {
  jobId: string;
  requiredSkills: string[];
  zip: string;
  location: string;
  nursePatientRatio: string;
  type: string;
  workSchedule: string;
  hospitalId: string;
  name: string;
  state: string;
  created: string;
  requiredCredentials: string[];
  department: string[];
  address: string;
  experience: string;
  city: string;
  description: string;
  jobTitle: string;
  hours: string[];
  salaryRange: string[];
  jobType: string;
}