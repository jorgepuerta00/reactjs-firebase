import React, { useEffect } from "react";
import { Page, Accordion, Filter, Search } from "../components";
import styles from '../styles/Home.module.css'

import { useFilters } from '../hooks/useFilters'
import { useJobs } from '../hooks/useJobs'

export interface IHomeProps {}	

const Home: React.FC<IHomeProps> = () => {

  const [jobPostings, setJobPostings] = React.useState("0");
  const [ordering, setOrdering] = React.useState("Ascending");

  const {
    dataJobTypes, isLoadingJobTypes, 
    dataDepartmentType, isLoadingDepartmentType,
    dataWorkScheduleType, isLoadingWorkScheduleType,
    dataExperienceType, isLoadingExperienceType,
  } = useFilters();

  const { data, isLoading, error } = useJobs()

  useEffect(() => {
    if (!isLoadingJobTypes) {
      let jobs: number = 0;
      for (let [key, value] of Object(dataJobTypes) ) {
        jobs += parseInt(value.doc_count)
      }
      setJobPostings(jobs.toLocaleString());
    }
  }, [isLoadingJobTypes]);

  function setOrderingText() {
    if (ordering == "Ascending") 
      setOrdering("Descending");
    else
      setOrdering("Ascending");
  }

  return (
    <Page className="flex flex-col justify-center mt-16 sm:pt-24 lg:pb-4 sm:my-auto">
      <div className={styles.container}>
        <Search />
        <main className={styles.main}>
          <div className={styles.grid}>
            <Filter data={dataJobTypes} isLoading={isLoadingJobTypes} title="Job Type" />
            <Filter data={dataDepartmentType} isLoading={isLoadingDepartmentType} title="Deparment" />
            <Filter data={dataWorkScheduleType} isLoading={isLoadingWorkScheduleType} title="Work Schedule" />
            <Filter data={dataExperienceType} isLoading={isLoadingExperienceType} title="Experience" />
          </div>
          <div className={styles.job}>
            <div className={styles.card_job}>
              <div className="flex justify-between w-full md:container md:mx-auto">
                <div className="flex">
                  <h1 className="font-semibold text-sm">{jobPostings}</h1>
                  <h1 className="font-normal text-sm pl-1">job postings</h1>
                </div>
                <filter className="flex justify-center items-center">
                  <a className="font-normal text-sm text-gray-400">Sort by</a>
                  <a href="#" className="font-normal text-sm pl-2">Location</a>
                  <a href="#" className="font-normal text-sm pl-2">Role</a>
                  <a href="#" className="font-normal text-sm pl-2">Department</a>
                  <a href="#" className="font-normal text-sm pl-2">Education</a>
                  <a href="#" className="font-normal text-sm pl-2">Experience</a>
                  <a href="#" onClick={() => setOrderingText()} className="font-normal text-sm pl-2 ">{ordering}</a>
                  <div className="flex items-center justify-center rounded-md pl-2">
                    <a href="#" className="flex items-center uppercase justify-center px-2 py-1 border border-blue-600 font-xs rounded-md text-blue-600 bg-white hover:bg-blue-50">
                      Clear Sort
                    </a>
                  </div>
                </filter>
              </div>
              <Accordion data={data} isLoading={isLoading} error={error} />
            </div>
          </div>
        </main>
      </div>
    </Page>
  )
}

export default Home;