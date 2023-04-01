let slider = document.querySelector('.slider');
let bullets = document.querySelector('.bulles');

const images = ["https://plus.unsplash.com/premium_photo-1668675744024-d2ba7abe36a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
                "https://plus.unsplash.com/premium_photo-1673641895483-2119e6d9fd75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
                "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
                "https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
                "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
                "https://plus.unsplash.com/premium_photo-1673641895483-2119e6d9fd75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
                "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
               ];

    images.map((img, index) => {
        //console.log(img, index);
        let image = document.createElement('img');
        image.src = `${img} `;
        image.alt= 'images'+ ' ' +index;
        image.id = index;
        image.className = 'img';
    
        slider.append(image);
    
        let bullet = document.createElement('a');
        bullet.href = `#${index}`;
        bullet.className = 'bullet';
        bullet.id = `#${index}`;
    
        bullets.appendChild(bullet);
            
    });

let arrowLeft = document.querySelector('.fa-chevron-left');
let arrowRight = document.querySelector('.fa-chevron-right');

let bulle = [...document.querySelectorAll('.bulles a')];

bulle.map(bul => {
    bul.addEventListener('click', (e) => {
       bulle.forEach(el => {
        el.classList.remove('active');
       })

       e.currentTarget.classList.add('active');

       let elementsId = bulle.map(ele => {
           return ele.id;
       });

       //console.log(elementsId);
       
       let firstElArray = elementsId.shift();
       let lastElArray = elementsId.pop()

       //console.log(e.currentTarget.id);
       e.currentTarget.id === firstElArray
       ? arrowLeft.style.opacity = 0
       : arrowLeft.style.opacity = 1;

       e.currentTarget.id === lastElArray
       ? arrowRight.style.opacity = 0
       : arrowRight.style.opacity = 1;

    })
});

let imageWidth = document.querySelector('.slider img').clientWidth;
//console.log(imageWidth);

let arrowBack = document.querySelector('.sliders .fa-chevron-left');
let arrowNext = document.querySelector('.sliders .fa-chevron-right');

//console.log(arrowBack, arrowNext);

arrowBack.addEventListener('click', () => {
   slider.scrollBy(-imageWidth, 0);
});

arrowNext.addEventListener('click', () => {
    slider.scrollBy(imageWidth, 0)
});











