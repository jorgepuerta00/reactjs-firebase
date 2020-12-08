import React from "react";
import Accordion from "./Accordion";

interface ISort {
  jobPostings: string
  data: any,
  isLoading: any
}

const Sort: React.FC<ISort> = ({
  jobPostings,
  data,
  isLoading
}) => {

  const [dataJob, setDataJob] = React.useState(data);

  const [filterName, setFilterName] = React.useState({ id: 0, name: "Name", symbol: "⇋", select: "name", order: "non" });
  const [filterTotalJobs, setFilterTotalJobs] = React.useState({ id: 1, name: "Total Jobs In Hospital", symbol: "⇋", select: "totalJobsInHospital", order: "non" });

  let [sorts, setSorts] = React.useState([])

  React.useEffect(() => {
    setDataJob(data)
  }, [data]);

  function existFilter(id: number) {
    return sorts.some(function(el) {
      return el.id === id
    }); 
  }

  function createOrUpddateFilter(newFilter: any) {
    if(existFilter(newFilter.id)){
      if(newFilter.order == "non") {
        var filtered = sorts.filter(function(el) { return el.id != newFilter.id });
        setSorts(filtered)
        sorts = filtered
      }
      else{
        var updated = sorts.map(p => p.id === newFilter.id ? newFilter : p );
        setSorts(updated)
        sorts = updated
      }
    }
    else {
      if(newFilter.order !== "non") {
        sorts.push(newFilter)
      }
    }
  }

  function updatesFilters(filter: any) {
    let order = filter.order
    let newFilter: any

    if (order == "ascending") {
      newFilter = { id: filter.id, name: filter.name, symbol: "↓", select: filter.select, order: "descending" }
    }
    else if (order == "descending") {
      newFilter = { id: filter.id, name: filter.name, symbol: "⇋", select: filter.select, order: "non" }
    }
    else {
      newFilter = { id: filter.id, name: filter.name, symbol: "↑", select: filter.select, order: "ascending" }
    }

    return newFilter
  }

  function setOrderBy(propertyName: string) {
    let newFilter: any
    if(propertyName == 'name') {
      newFilter = updatesFilters(filterName)
      setFilterName(newFilter);
    }
    else if(propertyName == 'totalJobsInHospital') {
      newFilter = updatesFilters(filterTotalJobs)
      setFilterTotalJobs(newFilter);
    }
    createOrUpddateFilter(newFilter)

    console.log("sorts", sorts)

    var sortedResult = sortResults(dataJob, sorts)
    setDataJob(sortedResult)
  }

  const sortResults = (results: any, sorts: any) => {
    
    if (sorts.length == 0) 
      return results
    
    var sorted = results.sort((a: any, b: any) => {
      return sortMultiCompare(a, b, sorts)
    })
    console.log("sortedResult: ", sorted)

    return sorted
  }

  const sortMultiCompare = (a: any, b: any, sorts: any) => {
    let select = sorts[0].select
    let order = sorts[0].order
    if (a[select] < b[select]) {
      return order == 'ascending' ? -1 : 1
    } 
    if (a[select] > b[select]) {
      return order == 'ascending' ? 1 : -1
    }
    if(sorts.length > 1) {
      let remainingSorts = sorts.slice(1)
      return sortMultiCompare(a, b, remainingSorts)
    }
    return 0
  }

  return (
    <>
    <div className="flex justify-between items-center w-full md:container md:mx-auto">
      <div className="flex justify-center items-center">
        <h1 className="font-semibold text-sm">{jobPostings}</h1>
        <h1 className="font-normal text-sm pl-1">job postings</h1>
      </div>
      <div className="flex justify-center items-center">
        <a className="font-normal text-sm text-gray-400">Sort by</a>
        <a href="#" onClick={() => setOrderBy("name")} className="font-normal text-sm pl-2">{filterName.name} {filterName.symbol}</a>
        <a href="#" onClick={() => setOrderBy("totalJobsInHospital")} className="font-normal text-sm pl-2">{filterTotalJobs.name} {filterTotalJobs.symbol}</a>
      </div>
    </div>

    <Accordion data={dataJob} isLoading={isLoading} />
    </>
  );
};

export default Sort;