//access the api
const accessApi=async ()=>{
    const res=await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts');
    const data=await res.json();
    console.log(data);
}
accessApi();
  
  
const latestPost=async ()=>{
    const res=await fetch(' https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data=res.json()
    console.log(data);
}
 
const displayRecentData=()=>{

}


const displayLatestPosts=()=>{
  
}