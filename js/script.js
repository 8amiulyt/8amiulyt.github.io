function randomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min) + min);
} 

function getRandomImage() {
        path = '/pics/'
            var num = randomNumber(1, 82);
                var img = path + num + '.webp';
                    return img;
}

document.addEventListener('DOMContentLoaded', (event) => {
        var gal = document.getElementById('img-gallery');
            for(var i = 0; i < 1; i++){
                    var img = document.createElement("img");
                        img.src = getRandomImage();
                            gal.appendChild(img);
                                }
});



