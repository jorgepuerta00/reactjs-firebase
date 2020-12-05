import { useGetFilters } from '../api';
import { JobTypeEnum, WorkScheduleTypeEnum, ExperienceTypeEnum, DepartmentTypeEnum } from "./types";

export function useFilters() {
    const { data: dataJobTypes, error: errorJobTypes, isLoading: isLoadingJobTypes } = useGetFilters(JobTypeEnum.type);
    const { data: dataWorkScheduleType, error: errorWorkScheduleType, isLoading: isLoadingWorkScheduleType } = useGetFilters(WorkScheduleTypeEnum.type);
    const { data: dataExperienceType, error: errorExperienceType, isLoading: isLoadingExperienceType } = useGetFilters(ExperienceTypeEnum.type);
    const { data: dataDepartmentType, error: errorDepartmentType, isLoading: isLoadingDepartmentType } = useGetFilters(DepartmentTypeEnum.type);
    
    return { 
      dataJobTypes, 
      errorJobTypes, 
      isLoadingJobTypes, 
      dataWorkScheduleType,  
      errorWorkScheduleType,
      isLoadingWorkScheduleType,
      dataExperienceType,
      errorExperienceType,
      isLoadingExperienceType,
      dataDepartmentType,
      errorDepartmentType,
      isLoadingDepartmentType
    }
}