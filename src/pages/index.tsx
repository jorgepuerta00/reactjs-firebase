import React, { useEffect } from "react";
import { Page, Accordion, Filter, Search, Sort } from "../components";
import { useFilters, useJobs } from '../hooks'
import styles from '../styles/Home.module.css'

import { useGetJobs } from '../api';

export interface IHomeProps {}	

const Home: React.FC<IHomeProps> = () => {

  const [filter, setFilter] = React.useState("");
  const { data, isLoading } = useJobs(filter)

  const [jobPostings, setJobPostings] = React.useState("0");

  const [dataJob, setDataJob] = React.useState([]);
  const [isLoadingJobs, setIsLoadingJobs] = React.useState(true);

  const {
    dataJobTypes, isLoadingJobTypes, 
    dataDepartmentType, isLoadingDepartmentType,
    dataWorkScheduleType, isLoadingWorkScheduleType,
    dataExperienceType, isLoadingExperienceType
  } = useFilters();

  useEffect(() => {
    setIsLoadingJobs(isLoading)
    if(!isLoading) {
      mappingDataJobs(data);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoadingJobTypes) {
      let jobs: number = 0;
      for (let [key, value] of Object(dataJobTypes) ) {
        jobs += parseInt(value.docCount)
      }
      setJobPostings(jobs.toLocaleString());
    }
  }, [isLoadingJobTypes]);

  const mappingDataJobs = (data: any) => {	
    let mapped: any = [];
    for (let [key, value] of Object(data) ) {
      mapped.push({
        key: key,
        name: value.name,
        jobTitle: value.jobTitle,
        totalJobsInHospital: value.totalJobsInHospital,
        jobs: value.jobs
      });
    }
    setDataJob(mapped);
  };

  return (
    <Page className="flex flex-col justify-center mt-16 sm:pt-24 lg:pb-4 sm:my-auto">
      <div className={styles.container}>
        <Search OnPress={(filter: string) => setFilter(filter)}/>
        <main className={styles.main}>
          <div className={styles.grid}>
            <Filter data={dataJobTypes} isLoading={isLoadingJobTypes} title="Job Type" OnPress={(filter: string) => setFilter(filter)} />
            <Filter data={dataDepartmentType} isLoading={isLoadingDepartmentType} title="Deparment" OnPress={(filter: string) => setFilter(filter)}/>
            <Filter data={dataWorkScheduleType} isLoading={isLoadingWorkScheduleType} title="Work Schedule" OnPress={(filter: string) => setFilter(filter)}/>
            <Filter data={dataExperienceType} isLoading={isLoadingExperienceType} title="Experience" OnPress={(filter: string) => setFilter(filter)}/>
          </div>
          <div className={styles.job}>
            <div className={styles.card_job}>
              <Sort jobPostings={jobPostings} data={dataJob} />
              <Accordion data={dataJob} isLoading={isLoadingJobs} />
            </div>
          </div>
        </main>
      </div>
    </Page>
  )
}

export default Home;