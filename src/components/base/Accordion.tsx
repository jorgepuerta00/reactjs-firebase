import React from "react";
import { IErrorResponse } from "./Types";

import AccordionItem from "./AccordionItem";

interface IAccordion {
  data: any,
  isLoading: boolean,
  error: IErrorResponse
}

const Accordion: React.FC<IAccordion> = ({
  data,
  isLoading,
  error
}) => {
  
  const mappingDataJobs = () => {	
    let mapped: any = [];
    for (let [key, value] of Object(data) ) {
      mapped.push({
        key: key,
        name: value.name,
        job_title: value.job_title,
        total_jobs_in_hospital: value.total_jobs_in_hospital,
        items: value.items
      });
    }
    return mapped;
  };

  return (
    <div className="flex my-10">
      <div className="">
        {!isLoading && mappingDataJobs().map((data: any) => (
          <div key={data.key} className="tab w-full overflow-hidden">
            <input className="absolute opacity-0 " id={"tab-multi-"+data.key} type="checkbox" name="tabs" />

            <div className="flex justify-left items-center">
              <div className="flex justify-center items-center box-border md:box-content rounded-lg h-10 w-10 bg-gray-300">
                <label className="text-lg font-bold text-white cursor-pointer uppercase" htmlFor={"tab-multi-"+data.key}>{data.name.substring(data.name, 2)}</label>
              </div>
              <label className="block p-5 text-sm leading-normal cursor-pointer" htmlFor={"tab-multi-"+data.key}>{data.total_jobs_in_hospital} jobs for {data.name}</label>
            </div>

            <AccordionItem data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;