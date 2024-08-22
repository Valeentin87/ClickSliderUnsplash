const rndPhoto = document.getElementById('rndPhoto');
let state = null;



const CLIENT_ID = 'Tb9IaWYl5Nejt2qnWTCtAbx1DkQiJlIVR4uPI8OQgaY';
const GetPhotoRandom = async () => {
    try {
           const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    state = data;
    putPhoto();
    }
    catch(err) {
        console.log(err);
    };

    
    
};

const putPhoto = () => {
    
}

GetPhotoRandom();