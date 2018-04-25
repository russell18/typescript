class youtubeVideo {

    videoTitle: string;
    views: number;
    likes: number;
    dislikes: number;
    trending:string;
    publisherTitle!:string;
    publishedOn!:string;
    publisherDesc!:string;
    COMMENTS!:string;
    commentTitle!:string;
    commentDesc!:string;
    commentreplies!:string;


    
  
 

constructor(videoTitle : string,views:number, likes:number, dislikes:number,trending:string, publisherTitle:string,publishedOn:string,
    publisherDesc:string,COMMENTS :string,commentTitle:string,commentDesc:string,commentreplies:string
){
this.videoTitle=videoTitle;
this.views=views;
this.likes=likes;
this.dislikes=dislikes;
this.trending=trending;
this.publishedOn=publishedOn;
this.publisherDesc=publisherDesc;
this.publisherTitle=publisherTitle;
this.COMMENTS=COMMENTS;
this.commentTitle=commentTitle;
this.commentDesc=commentDesc;
this.commentreplies=commentreplies;
}

  
getVideoTitle=()=>{

    return this.videoTitle;}
getNumberOfViews=()=>{
    return this.views;}


getNumberOflikes=()=>{
    return this.likes;}
 
getNumberOfDislikes=()=>{
    return this.dislikes;}


getNumberOfTrending=()=>{
    return this.trending;}

 
getPublisherTitle=()=>{
    return this.publisherTitle;}
     
getPublisherDate=()=>{
    return this.publishedOn;}

     
getPublisherDescript=()=>{
    return this.publisherDesc;}


 
getComments=()=>{
    return this.COMMENTS;}

 
getCommentTitle=()=>{
    return this.commentTitle;}

 
getCommentDesc=()=>{
    return this.commentDesc;}

 
getCommentReplies=()=>{
    return this.commentreplies;}

 
 
}//end of class 


let newVideo=new youtubeVideo("darjling",8834,550,20,"20 ON TRENDING","ACE ADVENTURES","20th april 2018"," 'Ace adventures presents you with' 'amazing videos and best moments from our trip to darjling' we've just begun,stay tuned for more' ",
"COMMENTS","rakesh","bhaii this is soooo awesome","rakesh,sooo true brother");
let about=newVideo.getVideoTitle();
console.log(about);
let about2=newVideo.getNumberOfViews();
console.log(about2);
 
let about3=newVideo.getNumberOflikes();
console.log(about3);
let about4=newVideo.getNumberOfDislikes();
console.log(about4);
let about5=newVideo.getPublisherTitle();
console.log(about5);
let about6=newVideo.getPublisherDescript();
console.log(about6);
let about7=newVideo.getPublisherDate();
console.log(about7);
let about8=newVideo.getComments();
console.log(about8);
let about9=newVideo.getCommentTitle();
console.log(about9);
let about10=newVideo.getCommentDesc();
console.log(about10);
let about11=newVideo.getCommentReplies();
console.log(about11);
let about12=newVideo.getNumberOfTrending();
console.log(about12);
 


