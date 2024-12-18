console.log('welcome')
let audioElement=new Audio('song1.mp3')
let songIndex;
let masterPlay=document.querySelector('#masterplay');
let gif= document.getElementById('gif');
let myProgressBar=document.getElementById('player');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let playme=Array.from(document.querySelector('.playme'));
let masterSongName= document.getElementById('masterSongName');
let nextsong= document.getElementById('next');
let prevsong= document.getElementById('previous');

let songs = [
        {songName: "One Love By Shubh", filePath: "song1.mp3"},
        {songName: "Lalala By Y2K", filePath: "song2.mp3"},
        {songName: "Ackon By Smack", filePath: "song3.mp3"},
        {songName: "Popular By Weeknd", filePath: "song4.mp3"},
        {songName: "Jhol By Coke Studio", filePath: "song5.mp3"},
        {songName: "StarBoy By Weeknd", filePath: "song6.mp3"},
        {songName: "Zulfaan by Starx", filePath: "song7.mp3"},

      ]
      

    songItems.forEach((element, i)=>{ 
//   console.log(element,i);
        element.querySelector('.songName').innerHTML = songs[i].songName; 
    })



 


audioElement.addEventListener('timeupdate',()=>{
        let Progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value=Progress;
})

myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
       
})

function resetAllIcons() {
    songItems.forEach((element) => {
        const playButton = element.querySelector('.playme');
        playButton.classList.remove('fa-pause');
        playButton.classList.add('fa-play');
        });
    }


songItems.forEach((element)=>{
        element.addEventListener('click',(e)=>{
                if(audioElement.paused || audioElement.currentTime<=0){
                        songIndex=parseInt(e.target.id)
                       resetAllIcons();
                        e.target.classList.remove('fa-play')
                        e.target.classList.add('fa-pause')
                        audioElement.src = `song${songIndex}.mp3`;
                        audioElement.play();
                        masterSongName.innerText = songs[songIndex-1].songName;
                        masterPlay.classList.remove('fa-play')
                        masterPlay.classList.add('fa-pause')
                        gif.style.opacity = 1;
          
                }
                else{
                        e.target.classList.remove('fa-pause')
                        e.target.classList.add('fa-play')
                        masterPlay.classList.remove('fa-pause')
                        masterPlay.classList.add('fa-play')
                        audioElement.pause()
                        gif.style.opacity = 0;
                }

              

               
        })
}

);


nextsong.addEventListener('click', ()=>{
        if(songIndex>=7){
            songIndex = 0
        }
        else{
            songIndex += 1;
        }
        
        resetAllIcons();

        audioElement.src = `song${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        const currentSongItem = songItems[songIndex - 1];
        const playButton = currentSongItem.querySelector('.playme');
        playButton.classList.remove('fa-play');
        playButton.classList.add('fa-pause');

    
    })

    prevsong.addEventListener('click',()=>{
        if(songIndex<=0){
                songIndex=0;}
                else{
                        songIndex-=1
                }
                resetAllIcons();
                audioElement.src=`song${songIndex}.mp3`;
                masterSongName.innerText = songs[songIndex-1].songName;
                // audioElement.currentTime = 0;
                audioElement.play();
                masterPlay.classList.remove('fa-play');
                masterPlay.classList.add('fa-pause');
                const buttonplay=songItems[songIndex-1];
                const rmc_class=buttonplay.querySelector('.playme')
                rmc_class.classList.remove('fa-play');
                rmc_class.classList.add('fa-pause');
    })

masterPlay.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
                masterPlay.classList.remove('fa-play')
                masterPlay.classList.add('fa-pause')
                audioElement.play();
                
                gif.style.opacity = 1;
                songIndex=1;
                masterSongName.innerText = songs[songIndex-1].songName;
                const buttonplay=songItems[songIndex-1];
                const rmc_class=buttonplay.querySelector('.playme')
                rmc_class.classList.remove('fa-play');
                rmc_class.classList.add('fa-pause');

               
                
                
              
        }
        else{
                resetAllIcons();
                
                masterPlay.classList.remove('fa-pause')
                masterPlay.classList.add('fa-play')

                audioElement.pause()
                gif.style.opacity = 0;
        }
  })
    
