const images = [
    'https://images.unsplash.com/photo-1670969548019-18ec1aae8abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                'https://images.unsplash.com/photo-1671047417610-8d1f6beb773d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                'https://images.unsplash.com/photo-1671050578787-e271e550ba0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                'https://images.unsplash.com/photo-1554747706-2e474e1ae0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                'https://images.unsplash.com/photo-1670097939254-56f5e0d03922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                'https://images.unsplash.com/photo-1670097939254-56f5e0d03922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
];

const flexcontainer = document.getElementById('flexcontainer');
const leftbtn = document.getElementById('left-btn');
const rightbtn = document.getElementById('right-btn');

const n = images.length;
let count = 0;
const containerwidth = 80;
const flexContainerWidth = n*containerwidth;
flexcontainer.style.width = flexContainerWidth;
for(let i = 0;i < n;i++){
    const newimg = document.createElement('img');
    newimg.src = images[i];
    newimg.classList.add('img-style');
    flexcontainer.appendChild(newimg);
}

leftbtn.addEventListener('click', () => {
    if(count > 0){
        count--;
    }
    else {
        count = n - 1;
    }
    console.log('Hi left');
    showimg();
});

rightbtn.addEventListener('click', () => {
    if(count < n - 1){
        count++;
    }
    else {
        count = 0;
    }
    showimg();
});

function showimg() {
    const translateXDistance = -count * containerwidth;
    flexcontainer.style.transform = `translateX(${translateXDistance}vw)`
}