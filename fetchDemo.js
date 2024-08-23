'use strict';

const rndPhoto = document.getElementById('rndPhoto');
let newRndPhoto = null;



const CLIENT_ID = 'Tb9IaWYl5Nejt2qnWTCtAbx1DkQiJlIVR4uPI8OQgaY';
const GetPhotoRandom = async () => {
    try {
           const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    newRndPhoto = {
        url: data.urls.regular,
        firstName: data.user.first_name,
        lastName: data.user.last_name,
        likes: data.likes,
        myLiked: data.liked_by_user
        };
    console.log(newRndPhoto);
    console.log("*********");
    putPhoto(newRndPhoto);
    }
    catch(err) {
        console.log(err);
        
    };

    
    
};

const putPhoto = (data) => {
    let content = '';
    onclick = function(){likedPhoto(data)};
    console.log("sucsess!!!");
    content = `
    <div class="text_content">
     <p class="neon">${data.firstName} ${data.lastName} </p>
    <p class="likes"> count likes <span>${data.likes}</span> </p>
    
    </div>
    <div class="rnd_photo">
   
    
    <div class="wrap">
    <button class="button" onclick="onclick">LIKE</button>
    </div>
    <div class="image" style="background-image: url(${data.url})"><img src="${data.url}" alt="картинка">
    
    </div>
    </div>`;
    rndPhoto.innerHTML = content;
    
}



const likedPhoto = (data) => {
    let photoCount = data.likes;
    photoCount +=1;
    data.likes = photoCount;
    console.log("÷÷÷÷÷÷÷÷÷÷÷");
    let span = document.getElementsByTagName('span');
    console.log(span);
    span[0].innerText = String(photoCount);
}


GetPhotoRandom();