/* eslint-disable*/
const fetchPosts = async (subredditName) => await (await fetch(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=500`)).json();


async function getData(count, after = "", dataAry,sub) {
    let oldAfter = after;
    let oldCount = count;
    if (count <= 5) {
      let res = await (
        await fetch(
          `https://www.reddit.com/r/${sub}/top.json?t=year&limit=500&count=${oldCount}&after=${oldAfter}`
        )
      ).json();
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

