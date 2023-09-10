const burgerIcon = document.getElementById('burger');
const list = document.getElementById('list');
const text = document.getElementsByClassName('text');
        let isBurger = true;

        burgerIcon.addEventListener('click', () => {
            if (isBurger) {
                burgerIcon.classList.remove('fas', 'fa-hamburger');
                burgerIcon.classList.add('fas', 'fa-times');
                list.classList.remove('short');
                list.classList.add('long');
               for (let i = 0; i < text.length; i++) {
                     text[i].classList.remove('hide');
                     text[i].classList.add('show');
                }

            } else {
                burgerIcon.classList.remove('fas', 'fa-times');
                burgerIcon.classList.add('fas', 'fa-hamburger');
                list.classList.remove('long');
                list.classList.add('short');                
               for (let i = 0; i < text.length; i++) {
                    text[i].classList.remove('show');
                    text[i].classList.add('hide');
                }
            }

            isBurger = !isBurger;
        });