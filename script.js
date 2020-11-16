const animatedForm = () => {
    const arrows = document.querySelectorAll('.fa-arrow-down');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //check for validation
            if (input.type === "text" && validateUser(input)) {
               nextSlide(parent,nextForm);
            }else if(input.type === 'email'&& validateEmail(input)){
                nextSlide(parent,nextForm);
            }else if(input.type === 'password' && validateUser(input)){
                nextSlide(parent,nextForm);
            }else{
                parent.style.animation = 'shake 0.5s ease';
            }
            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })
            });
    });
}

const validateUser = (user) =>{
    if (user.value.length < 6) {
        console.log('not enough characters)');
        error('rgb(189,87,87)');
    }else{
        error('rgba(50, 129, 84, 84)');
        return true; 
    }
}
const validateEmail = (email) =>{
    const validation = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(validation.test(email.value)){
        error('rgba(50, 129, 84, 84)');
        return true;
    }else{
        error('rgb(189,87,87');
    }
}

const nextSlide = (parent,nextForm) =>{
parent.classList.add('innactive');
parent.classList.remove('active');
nextForm.classList.add('active');
}
const error = (color) =>{
    document.body.style.backgroundColor = color;
}
animatedForm();