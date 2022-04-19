
var allmoviData = [{
    imgURL: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Tadap_film_poster.jpg/220px-Tadap_film_poster.jpg",
    name: "TADAP ",
    type: "love story",
    rating: "8.3" 
},
{
    imgURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11fae382-e99a-475a-9e3c-314aea101da4/despdmj-8538c0d9-3720-4bbc-8b32-82415d74bf7f.jpg/v1/fill/w_1280,h_2014,q_75,strp/the_eternals_poster__fanart__alternate_version_by_shathit_despdmj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAxNCIsInBhdGgiOiJcL2ZcLzExZmFlMzgyLWU5OWEtNDc1YS05ZTNjLTMxNGFlYTEwMWRhNFwvZGVzcGRtai04NTM4YzBkOS0zNzIwLTRiYmMtOGIzMi04MjQxNWQ3NGJmN2YuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hHvdPL9-sepFqMCKIRk3wDlhHRmfKe2blI2JLpkPDZs",
    name: "ETARNELS",
    type: "action",
    rating: "9.4 "
},
{
    imgURL: "https://1.bp.blogspot.com/-6Ye7EhdF5vM/YYuPk7FnLMI/AAAAAAAAyNo/iN89z9xlys0jn5z5p1ZaVuEyfmYh6e3_ACNcBGAsYHQ/s764/Pushpa-Poster-14.jpeg ",
    name: "PUSHPA",
    type: "fictional",
    rating: "9.2"
},
{
    imgURL: "https://m.media-amazon.com/images/I/A10Yqp5GQKL._SY679_.jpg ",
    name: "AVENGER",
    type: "action ",
    rating: "9.6"
},
{
    imgURL: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg ",
    name: "IRON MAN",
    type: "action ",
    rating: "8.4"
},
{
    imgURL: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b739c74284099.5c2a29444cdef.png ",
    name: "K.G.F",
    type: "drama action ",
    rating: "8.2"
},
{
    imgURL: "https://upload.wikimedia.org/wikipedia/en/3/3b/URI_-_New_poster.jpg ",
    name: "URI",
    type: "petiotic ",
    rating: " 8.9"
},
{
    imgURL: "https://www.filmibeat.com/ph-big/2017/05/baahubali-2-the-conclusion_149577721640.jpg",
    name: "Bahubali 2",
    type: " drama",
    rating: " 8.6"
},
{
    imgURL: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg",
    name: "Spider Man",
    type: "fictional ",
    rating: "8.7 "
},
 
];


var allslideData = [{
    imgURL: "https://images.alphacoders.com/270/thumbbig-270963.webp",
},
{
    imgURL: "https://images4.alphacoders.com/573/thumbbig-57394.webp",
},
{
    imgURL: "https://images.alphacoders.com/306/thumbbig-306943.webp",
},
{
    imgURL: "https://images5.alphacoders.com/114/thumbbig-1142280.webp",
},
{
    imgURL: "https://images3.alphacoders.com/951/thumbbig-95107.webp",
},
{
    imgURL: "https://images7.alphacoders.com/519/thumbbig-519779.webp",
},
 
 
];

document.querySelector(".content2").addEventListener("click",function(){
    window.location.href="login.html"
})
document.querySelector(".content3").addEventListener("click",function(){
    window.location.href="signup.html"
})

// --------------------------slide Show----------------------------------------------------
slider()
function slider(){
    let sliderDiv = document.getElementById("slideshow");
    sliderDiv.textContent = " ";
      let image = document.createElement("img");
      image.style.width="100%"
      image.style.height="100%";
      image.style.borderRadius="20px";
      let i = 1;
      setInterval(() => {
          if(i == allslideData.length ){
              i =0;
          }
        image.src = allslideData[i].imgURL;
        sliderDiv.append(image);
        i++;
      }, 1000);
    }
// ---------------------------Display Data--------------------------------------------------------------------

var movies=document.getElementById("movies");
function display(allmoviData){
    allmoviData.map(element => {
        var img=document.createElement("img");
        img.setAttribute("id","img")
        img.style.width="45%";
        img.style.height="200px";
      
        img.src=element.imgURL;
        var h5=document.createElement("h5");
        h5.innerText= "Name : "+element.name;
         
        var h2=document.createElement("h5");
        h2.innerText="Type : "+ element.type;
        var h3=document.createElement("h5");
        h3.innerText="Rating : "+element.rating;
        
        let recomandation = document.createElement("h5");

        if (element.rating > 8.5) {
          recomandation.innerText = "RECOMMENDED";
          recomandation.style.color = "cyan";
        }
    
        var div2=document.createElement("div");
        div2.append(h5,h2,h3,recomandation)
       var div1 = document.createElement("div");
       div1.setAttribute("id", "flex");
    
       div1.append(img,div2)
     
        movies.append(div1);
       
      
    });

}
display(allmoviData);

// ----------------------------------Filter --------------------------------------


var select=document.getElementById("ratting");

function handelrattingsotr(){
   
    
    if(select.value=="low"){
        movies.innerHTML="";
        allmoviData.sort(function(a,b){
           return (+a.rating)-(+b.rating); 
           
        })
        display(allmoviData);
    }
    else if(select.value=="high"){
        movies.innerHTML="";
        allmoviData.sort(function(a,b){
           return (+b.rating)-(+a.rating); 
        })
        display(allmoviData);
    }
    
}
