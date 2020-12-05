
const ApiEndPoints = {
  mockservice: {
    getFilters: 'https://run.mocky.io/v3/ece1a6f5-7107-4c82-9a37-1cc143bee93c',
    getJobs: "https://run.mocky.io/v3/493d7474-8ac2-44f2-aba1-56bbff050fe5"
  },
  azureservice: {
    getFilters: 'https://healthexplorefiltersapi.azurewebsites.net/api/v1/Filters',
    getJobs: "https://healthexplorejobapi.azurewebsites.net/api/v1/Job"
  }
};

export {
  ApiEndPoints
};