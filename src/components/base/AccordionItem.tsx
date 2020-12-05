import React from "react";
import moment from 'moment'
import Table from "./Table";

interface IAccordionItem {
  data: any
}

const AccordionItem: React.FC<IAccordionItem> = ({
  data
}) => {

  function weeksBetween(datetime: string) {
    const today = moment(new Date());
    const created = moment(datetime, 'YYYY-MM-DD').toDate();
    var duration = moment.duration(today.diff(created));
    return Math.round(duration.asWeeks());
  }

  return (
    <>
      {data.jobs.map((details: any) => (
        <div key={details.jobId} className="tab-content overflow-hidden leading-normal">
          <div className="tab w-full overflow-hidden border-t">
            <input className="absolute opacity-0" id={"tab-multi-"+details.jobId} type="checkbox" name="tabs" />

            <div className="flex flex-row justify-between m-5">
              <div className="flex flex-col w-full">
                <label className="pl-5 font-bold text-sm leading-normal cursor-pointer" htmlFor={"tab-multi-"+details.jobId}>{details.jobTitle}</label>
                <label className="pl-5 text-sm leading-normal cursor-pointer" htmlFor={"tab-multi-"+details.jobId}>{details.jobType} | ${details.salaryRange[0]} - ${details.salaryRange[1]} an Hour | {details.city}</label>
              </div>

              <div className="flex w-full items-center justify-end">
                <label className="pl-5 text-sm leading-normal cursor-pointer" htmlFor={"tab-multi-"+details.jobId}>{weeksBetween(details.created)} Weeks</label>
              </div>
            </div>

            <Table details={details} />
            
          </div>
        </div>
      ))}
    </>
  );
};

export default AccordionItem;