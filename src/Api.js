/* eslint-disable no-return-await */
const fetchPosts = async (subredditName) => await (await fetch(`https://www.reddit.com/r/${subredditName}/top.json?t=year&limit=500`)).json();
export default fetchPosts;
