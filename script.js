function showHearts() { 
    for (let i = 0; i < 10; i++) { 
        createHeart(); 
    } 
} 

function createHeart() { 
    const heart = document.createElement('div'); 
    heart.innerHTML = '❤️'; 
    heart.classList.add('heart'); 
    heart.style.left = Math.random() * 100 + 'vw'; 
    heart.style.top = Math.random() * 100 + 'vh'; /* Добавляем случайное положение по вертикали */ 
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    document.querySelector('.container').appendChild(heart); /* Добавляем сердечко в контейнер */ 
    setTimeout(() => { 
        heart.remove(); 
    }, 5000); 
} 

function showYes() { 
    const yes = document.createElement('div'); 
    yes.innerHTML = 'Да'; 
    yes.classList.add('yes'); 
    yes.style.left = Math.random() * 100 + 'vw'; 
    yes.style.top = Math.random() * 100 + 'vh'; /* Добавляем случайное положение по вертикали */ 
    yes.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    document.querySelector('.container').appendChild(yes); /* Добавляем "Да" в контейнер */ 
    setTimeout(() => { 
        yes.remove(); 
    }, 5000); 
}