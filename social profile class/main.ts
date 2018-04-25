class facebookAboutSection{

overView:string;
workAndEducation:string;
contactAndBasicInfo:string;
familyAndRelationships:string;
DetailsAboutYou:string;
lifeEvents:string;
bio:string;
studiesAt:string;
livesIn:string;
mobNumber:number;
dateOfBirth:string;
Friends:number;
recentlyAdded:string;
newPosts:string;
birthdays:string;
college:string;
currentCity:string;
photos:string;
albums:string;
checkins:string;
sports:string;
movies:string;
tvShows:string;



constructor(overView:string,workAndEducation:string,contactAndBasicInfo:string, 
    familyAndRelationships:string, DetailsAboutYou:string, lifeEvents:string,bio:string,
    studiesAt:string,
    livesIn:string,
    mobNumber:number,
    dateOfBirth:string,
    Friends:number,
    recentlyAdded:string,
    newPosts:string,
    birthdays:string,
    college:string,
    currentCity:string,
    photos:string,
    albums:string,
    checkins:string,
    sports:string,
    movies:string,
    tvShows:string){


    this.overView=overView;
    this.workAndEducation=workAndEducation;
    this.contactAndBasicInfo=contactAndBasicInfo;
    this.familyAndRelationships=familyAndRelationships;
    this.DetailsAboutYou=DetailsAboutYou;
    this.lifeEvents=lifeEvents;
    this.bio=bio;
    this.studiesAt=studiesAt;
    this.livesIn=livesIn;
    this.mobNumber=mobNumber;
    this.dateOfBirth=dateOfBirth;
    this.Friends=Friends;
    this.recentlyAdded=recentlyAdded;
    this.newPosts=newPosts;
    this.birthdays=birthdays;
    this.college=college;
    this.currentCity=currentCity;
    this.photos=photos;
    this.albums=albums;
    this.checkins=checkins;
    this.sports=sports;
    this.movies=movies;
    this.tvShows=tvShows;

}//end of constructor

getOverView=()=>{
    return this.overView;
}
getWorkAndEducation=()=>{
    return this.workAndEducation;
}
getContactAndBasicInfo=()=>{
    return this.contactAndBasicInfo;
}
getFamilyAndRelationship=()=>{
    return this.familyAndRelationships;
}
getDetailsAboutYou=()=>{
    return this.DetailsAboutYou;
}
getLifeEvents=()=>{
    return this.lifeEvents;
}
getBio=()=>{
    return this.bio;
}
getStudiesAt=()=>{
    return this.studiesAt;
}
getLivesIn=()=>{
    return this.livesIn;
}
getMobileNumber=()=>{
    return this.mobNumber;
}
getDateOfBirth=()=>{
    return this.dateOfBirth;
}
getFriends=()=>{
    return this.Friends;
}
getRecentlyAdded=()=>{
    return this.recentlyAdded;
}
getNewPosts=()=>{
    return this.newPosts;
}
getBirthdays=()=>{
    return this.birthdays;
}
getCollege=()=>{
    return this.college;
}
getCurrentCity=()=>{
    return this.currentCity;
}

getPhotos=()=>{
    return this.photos;
}

getAlbums=()=>{
    return this.albums;
}

getCheckIns=()=>{
    return this.checkins;
}

getSports=()=>{

    return this.sports;
}

getMovies=()=>{
    return this.movies;
}

getTvShows=()=>{
    return this.tvShows;
}
}//end of class

let newUserAboutSection=new facebookAboutSection("overView","Work And Education","Contact And Basic Information",
"Family And Relationsips","Details About You","Life Events","BIO","P.C.C.E,Verna","Goa",8378102283,"6th december 1995",1000,"Recently added",
"New Posts","birthdays","P.C.C.E","Mumbai","photos","albums","check Ins","sports","movies","tv shows")



 

let about=newUserAboutSection.getOverView();
console.log(about);
let about2=newUserAboutSection.getWorkAndEducation();
console.log(about2);
let about3=newUserAboutSection.getContactAndBasicInfo();
console.log(about3);
let about4=newUserAboutSection.getFamilyAndRelationship();
console.log(about4);
let about5=newUserAboutSection.getDetailsAboutYou();
console.log(about5);
let about6=newUserAboutSection.getLifeEvents();
console.log(about6);
let about7=newUserAboutSection.getBio();
console.log(about7);
let about8=newUserAboutSection.getStudiesAt();
console.log(about8);
let about9=newUserAboutSection.getLivesIn();
console.log(about9);
let about10=newUserAboutSection.getMobileNumber();
console.log(about10);
let about11=newUserAboutSection.getDateOfBirth();
console.log(about11);
let about12=newUserAboutSection.getFriends();
console.log(about12);
let about13=newUserAboutSection.getRecentlyAdded();
console.log(about13);
let about14=newUserAboutSection.getNewPosts();
console.log(about14);
let about15=newUserAboutSection.getBirthdays();
console.log(about15);
let about16=newUserAboutSection.getCollege();
console.log(about16);
let about17=newUserAboutSection.getCurrentCity();
console.log(about17);
let about18=newUserAboutSection.getPhotos();
console.log(about18);
let about19=newUserAboutSection.getAlbums();
console.log(about19);
let about20=newUserAboutSection.getCheckIns();
console.log(about20);
let about21=newUserAboutSection.getSports();
console.log(about21);
let about22=newUserAboutSection.getMovies();
console.log(about22);
let about23=newUserAboutSection.getTvShows();
console.log(about23);
 
