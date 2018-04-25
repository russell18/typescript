var youtubeVideo = /** @class */ (function () {
    function youtubeVideo(videoTitle, views, likes, dislikes, trending, publisherTitle, publishedOn, publisherDesc, COMMENTS, commentTitle, commentDesc, commentreplies) {
        var _this = this;
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getNumberOfViews = function () {
            return _this.views;
        };
        this.getNumberOflikes = function () {
            return _this.likes;
        };
        this.getNumberOfDislikes = function () {
            return _this.dislikes;
        };
        this.getNumberOfTrending = function () {
            return _this.trending;
        };
        this.getPublisherTitle = function () {
            return _this.publisherTitle;
        };
        this.getPublisherDate = function () {
            return _this.publishedOn;
        };
        this.getPublisherDescript = function () {
            return _this.publisherDesc;
        };
        this.getComments = function () {
            return _this.COMMENTS;
        };
        this.getCommentTitle = function () {
            return _this.commentTitle;
        };
        this.getCommentDesc = function () {
            return _this.commentDesc;
        };
        this.getCommentReplies = function () {
            return _this.commentreplies;
        };
        this.videoTitle = videoTitle;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.trending = trending;
        this.publishedOn = publishedOn;
        this.publisherDesc = publisherDesc;
        this.publisherTitle = publisherTitle;
        this.COMMENTS = COMMENTS;
        this.commentTitle = commentTitle;
        this.commentDesc = commentDesc;
        this.commentreplies = commentreplies;
    }
    return youtubeVideo;
}()); //end of class 
var newVideo = new youtubeVideo("darjling", 8834, 550, 20, "20 ON TRENDING", "ACE ADVENTURES", "20th april 2018", " 'Ace adventures presents you with' 'amazing videos and best moments from our trip to darjling' we've just begun,stay tuned for more' ", "COMMENTS", "rakesh", "bhaii this is soooo awesome", "rakesh,sooo true brother");
var about = newVideo.getVideoTitle();
console.log(about);
var about2 = newVideo.getNumberOfViews();
console.log(about2);
var about3 = newVideo.getNumberOflikes();
console.log(about3);
var about4 = newVideo.getNumberOfDislikes();
console.log(about4);
var about5 = newVideo.getPublisherTitle();
console.log(about5);
var about6 = newVideo.getPublisherDescript();
console.log(about6);
var about7 = newVideo.getPublisherDate();
console.log(about7);
var about8 = newVideo.getComments();
console.log(about8);
var about9 = newVideo.getCommentTitle();
console.log(about9);
var about10 = newVideo.getCommentDesc();
console.log(about10);
var about11 = newVideo.getCommentReplies();
console.log(about11);
var about12 = newVideo.getNumberOfTrending();
console.log(about12);
