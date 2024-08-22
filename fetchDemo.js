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
    putPhoto();
    }
    catch(err) {
        console.log(err);
    };

    
    
};

const putPhoto = (data) => {
    return `<div class="rnd_photo">
    </div>`
}

GetPhotoRandom();