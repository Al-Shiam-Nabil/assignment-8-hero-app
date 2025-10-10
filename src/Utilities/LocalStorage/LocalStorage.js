const getLocalData=()=>{
const getData=localStorage.getItem('apps')
if(getData){
  const getDataParse=JSON.parse(getData)
  return getDataParse;
}else{
    return []
}
}

const setLocalData=(setId)=>{
const getData=getLocalData();
if(getData.includes(setId)=== false){
getData.push(setId);
const dataString=JSON.stringify(getData)
localStorage.setItem('apps',dataString)
}
}

const removeLocalData=(removeId)=>{
    
    const getData=getLocalData()
    const filteredRemove=getData.filter(e=>e!== removeId)
const stringifyData=JSON.stringify(filteredRemove)
localStorage.setItem('apps',stringifyData)
}

export {setLocalData,getLocalData,removeLocalData}