import React from "react";

interface ITable {
  details: any
}

const Table: React.FC<ITable> = ({
  details
}) => {
  return (
    <div className="flex w-full tab-content overflow-hidden leading-normal pl-10 w-full">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/4"></th>
            <th className="w-1/2"></th>
            <th className="w-1/2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><label className="text-sm font-semibold leading-normal cursor-pointer">Department:</label></td>
            <td><label className="text-sm font-normal leading-normal cursor-pointer">{details.department.join(", ")}</label></td>
            <td></td>
          </tr>
          <tr className="">
            <td><label className="text-sm font-semibold leading-normal cursor-pointer">Hours / shifts:</label></td>
            <td><label className="text-sm font-normal leading-normal cursor-pointer">{details.hours[0]} / {details.workSchedule}</label></td>
            <td>
              <div className="flex items-center justify-center rounded-md">
                <a href="#" className="flex items-center justify-center px-5 py-2 border border-transparent font-xs rounded-md text-white bg-blue-500 hover:bg-blue-700">
                  Job details
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td><label className="text-sm font-semibold leading-normal cursor-pointer">Summary:</label></td>
            <td><label className="text-sm font-normal leading-normal cursor-pointer">{details.description}</label></td>
            <td>
              <div className="flex items-center justify-center rounded-md">
                <a href="#" className="flex items-center justify-center px-4 py-2 border border-blue-600 font-xs rounded-md text-blue-600 bg-white hover:bg-blue-50">
                  Save job
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;