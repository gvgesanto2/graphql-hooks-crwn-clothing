export const modifyDataFromCache = ({ cache, query, calcNewData, dataCacheKey }) => {
  const dataObject = cache.readQuery({ query });
  const dataToBeModified = dataObject[dataCacheKey];

  const modifiedData = calcNewData(dataToBeModified);

  if(dataToBeModified === modifiedData) return modifiedData; 

  cache.writeQuery({
    query,
    data: { [dataCacheKey]: modifiedData }
  });

  return modifiedData;
}