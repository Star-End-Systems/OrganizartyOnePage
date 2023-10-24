const item = document.querySelectorAll("[data-changeColor]");

const navBarChangeColor = () => {

    const windowTop = window.scrollY /* + window.innerHeight * 0.87 */;

    item.forEach((element) => {
        console.log(windowTop);
        if (windowTop >= 700) {
            
            console.log("altura do scroll: " + element.offsetTop);
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    })
};

navBarChangeColor();

window.addEventListener("scroll", () => {
    navBarChangeColor();
})

const ndResposivo = [1900, 3800, 5700, 7516];

let cont = document.querySelector('#Events');
let texto = document.querySelectorAll('.txtEvents');
let baloes = document.querySelector("#baloes");
let weddingBalls = document.querySelector("#weddingBalls");
let bolas = document.querySelector("#bolas");
let img = document.querySelectorAll(".imgEvents")
let stars = document.querySelector("#estrela");

function AnimacaoTela1(){
    cont.onscroll = function(){
        let X = cont.scrollTop;
        console.log("scroll lado: " + cont.scrollTop);
        
        /* Boy or Girl */
        if(cont.scrollTop < ndResposivo[0]){
            texto[0].style.right = X/8 + "vh";
            baloes.style.top = "-" + X/2 + "px";
            bolas.style.height = 80 + X/16 + "vh";

            texto[0].classList.add("inversaoTexto");
            img[0].classList.add("inversaoImg");


            if(X == 0){
                texto[0].classList.remove("inversaoTexto");
                img[0].classList.remove("inversaoImg");
            }

            /* Wedding */
            weddingBalls.style.opacity = 100 + "%";
            weddingBalls.style.height = 0 + X/26 + "vh";

            petalas.style.height = X/28 + "vh";
            petalas.style.top = X/16 + "px";

            texto[1].classList.remove("inversaoTexto");
            img[1].classList.remove("inversaoImg");

        } else if(cont.scrollTop < ndResposivo[1]){
            weddingBalls.style.opacity = 100 + "%";

            X = cont.scrollTop - ndResposivo[0];
            texto[1].style.right = X/8 + 'vh';

            petalas.style.height = ndResposivo[0]/28 + X/64 + "vh";
            petalas.style.top = ndResposivo[0]/16 + X/10 + "px";

            weddingBalls.style.height = ndResposivo[0]/26 + X/16 + "vh";

            if(cont.scrollTop > ndResposivo[0]){
                texto[1].classList.add("inversaoTexto");
                img[1].classList.add("inversaoImg");

                weddingBalls.style.opacity = 100 - X/7 + "%";
                petalas.style.opacity = 100 - X/27 + "%";
            }

            stars.style.height = X/26 + "vh";
            
        /* Debutante */
        } else if(cont.scrollTop < ndResposivo[2]){
            X = cont.scrollTop - ndResposivo[1];
            stars.style.opacity = 100 - X/15 + "%";

            texto[2].style.right = X/8 + 'vh';

            texto[2].classList.add("inversaoTexto");
            img[2].classList.add("inversaoImg");

            if(X <= ndResposivo[1]){
                texto[2].classList.remove("inversaoTexto");
                img[2].classList.remove("inversaoImg");
            }

        /* Hora Feliz */
        } else if(cont.scrollTop < ndResposivo[3]){
            X = cont.scrollTop - ndResposivo[2];
            texto[3].style.right = X/2 + 'px';
            if(X <= ndResposivo[2]){
                texto[2].classList.remove("inversaoTexto");
                img[2].classList.remove("inversaoImg");
            }
        }
    }
}

AnimacaoTela1();
