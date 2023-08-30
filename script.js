console.log('Welcome to Spotify');
let songindex=0;
let audioelement = new Audio('1.mp3');
let mastersplay= document.getElementById('mastersplay');
let myprogressbar= document.getElementById('myprogressbar');
let gif =document.getElementById('gif');
let  mastersongname =document.getElementById('mastersongname'); 
let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs= [
    {songname: "Soch Na Sake", Filepath: "1.mp3", Coverpath:"covers1.jpg"},
    {songname: "Rabta", Filepath: "2.mp3", Coverpath:"covers2.jpg"},
    {songname: "Chod Diya", Filepath: "3.mp3", Coverpath:"covers3.jpg"},
    {songname: "Bandeya", Filepath: "4.mp3", Coverpath:"covers4.jpg"},
    {songname: "Pal", Filepath: "5.mp3", Coverpath:"covers5.jpg"},
    {songname: "Pinga", Filepath: "6.mp3", Coverpath:"covers6.jpg"},
    {songname: "Teri Deewani", Filepath: "7.mp3", Coverpath:"covers7.jpg"}

]
songitems.forEach((element, i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].Coverpath;
    element.getElementsByClassName("Songname")[0].innerText = songs[i].songname;
});


//handle play/pause click
mastersplay.addEventListener("click", ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        mastersplay.classList.remove('fa-circle-play');
        mastersplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        mastersplay.classList.remove('fa-circle-pause');
        mastersplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
    })


//listen to events
audioelement.addEventListener('timeupdate', ()=> {

//update seek bar
progress= parseInt(audioelement.currentTime/audioelement.duration*100);

myprogressbar.value= progress;
})
myprogressbar.addEventListener('change' ,() => {
audioelement.currentTime=myprogressbar.value * audioelement.duration/100;
})

const makeallplays =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');   
element.classList.add('fa-circle-play');
    })
}




Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
makeallplays();
songindex=parseInt(e.target.id);

e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');

audioelement.src=`${songindex + 1}.mp3`;
mastersongname.innerText= songs[songindex].songname;
audioelement.currentTime=0;
audioelement.play();
gif.style.opacity=1;
mastersplay.classList.remove('fa-circle-play');
mastersplay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click' ,()=>{
    if(songindex>=6){
        songindex=0;
    }
    else {
        songindex+=1;
    }
    mastersongname.innerText= songs[songindex].songname;
audioelement.src=`${songindex + 1}.mp3`;
audioelement.currentTime=0;
audioelement.play();
mastersplay.classList.remove('fa-circle-play');
mastersplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click' ,()=>{
    if(songindex<=0){
        songindex=0;
    }
    else {
        songindex-=1;
    }
    mastersongname.innerText= songs[songindex].songname;
audioelement.src=`${songindex + 1}.mp3`;
audioelement.currentTime=0;
audioelement.play();
mastersplay.classList.remove('fa-circle-play');
mastersplay.classList.add('fa-circle-pause');
})



