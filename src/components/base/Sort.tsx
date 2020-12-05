import React from "react";

interface ISort {
  jobPostings: string
  data: any,
  OnPress?: any
}

const Sort: React.FC<ISort> = ({
  jobPostings,
  data,
  OnPress
}) => {

  const [filterName, setFilterName] = React.useState({
    id: 0,
    name: "Name",
    symbol: "⇋",
    select: "name",
    order: "non"
  });
  const [filterTotalJobs, setFilterTotalJobs] = React.useState({
    id: 1,
    name: "Total Jobs In Hospital",
    symbol: "⇋",
    select: "totalJobsInHospital",
    order: "non"
  });

  let [sorts, setSorts] = React.useState([])

  function orderDataSet(){
    if (sorts.length > 0) {
      var sortedResult = sortResults(data, sorts);
      OnPress && OnPress(sortedResult);
    }
  }

  function existFilter(id: number) {
    return sorts.some(function(el) {
      return el.id === id
    }); 
  }

  function createOrUpddateFilter(newFilter: any) {
    console.log("filter to process: ", newFilter)
    if(existFilter(newFilter.id)){
      if(newFilter.order == "non") {
        console.log("filter deleted")
        deleteFilter(newFilter)
      }
      else{
        const newSort = sorts.map(p => p.id === newFilter.id ? newFilter : p );
        //setSorts(newSort)
        sorts = newSort
        console.log("filter updated")
      }
    }
    else {
      sorts.push(newFilter)
      console.log("filter created")
    }
    console.log("createOrUpddateFilter: ", sorts)
  }

  function deleteFilter(filter: any) {
    var filtered = sorts.filter(function(el) { return el.id != filter.id });
    sorts = filtered
    //setSorts(filtered)
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

    createOrUpddateFilter(newFilter)

    return newFilter
  }

  function setOrderBy(propertyName: string) {
    if(propertyName == 'name') {
      let newFilter = updatesFilters(filterName)
      setFilterName(newFilter);
    }
    else if(propertyName == 'totalJobsInHospital') {
      let newFilter = updatesFilters(filterTotalJobs)
      setFilterTotalJobs(newFilter);
    }
    orderDataSet()
  }

  const sortResults = (results: any, sorts: any) => {
    return results.sort((a: any, b: any) => {
      return sortMultiCompare(a, b, sorts)
    })
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
  );
};

export default Sort;