/* eslint-disable*/
const fetchPosts = async (subredditName) => await (await fetch(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=500`)).json();


async function getData(count, after = "", dataAry,sub) {
    let oldAfter = after;
    let oldCount = count;
    let URL;
    if (count <= 5) {
      if(count==1){
        URL = `https://www.reddit.com/r/${sub}/top.json?t=year&limit=100`;
      }else{
        URL = `https://www.reddit.com/r/${sub}/top.json?t=year&limit=100&after=${oldAfter}`;
      }
      let res = await ( await fetch(URL) ).json();
      let subData = res.data.children;
      let nextAfter = res.data.after;
      let newCount = oldCount + 1;
  
      let newDataAry = [...dataAry, ...subData];
      return await getData(newCount, nextAfter, newDataAry,sub);
    } else {
      return dataAry;
    }
  }
 
  async function getAllPosts(sub){
    let dataAry = [];
    let res = await getData(1, "", dataAry, sub);
    return res;
  }
    
  export default getAllPosts;

