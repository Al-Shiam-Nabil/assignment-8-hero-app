import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const getLocalData = () => {
  const getData = localStorage.getItem('apps')
  if (getData) {
    const getDataParse = JSON.parse(getData)
    return getDataParse;
  } else {
    return []
  }
}

const setLocalData = (setId) => {
  const getData = getLocalData();
  if (getData.includes(setId) === false) {
    getData.push(setId);
    const dataString = JSON.stringify(getData)
    localStorage.setItem('apps', dataString)
    MySwal.fire(`Successfully Installed.`);
  }
  else {
    MySwal.fire(`This App Already Installed.`);
    return;
  }
}

const removeLocalData = (removeId) => {

  const getData = getLocalData()
  const filteredRemove = getData.filter(e => e !== removeId)
  const stringifyData = JSON.stringify(filteredRemove)
  localStorage.setItem('apps', stringifyData)
}

export { setLocalData, getLocalData, removeLocalData }