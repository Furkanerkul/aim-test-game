let startTime = 4;
let score = 0;
let oyunSuresi = 11;
let oyunAlani = document.querySelector('.targetArea')
let hedef = `<div class="hedef" onclick="this.remove(); yeniHedef()"></div>`



function oyunuBaslat(){
    document.querySelector('button').remove();
    let zamanlayici = setInterval(function(){
        startTime--;
        document.querySelector('.sure').textContent = startTime;
        if(startTime == 0){
            let oyunTimer = setInterval(function(){
                oyunSuresi--;
                document.querySelector('.oyunSuresi').textContent = oyunSuresi;
                if(oyunSuresi == 0){
                    clearInterval(oyunTimer);
                    document.querySelector('.oyunSuresi').textContent = 'Süre Bitti!'
                    alert(`Skorunuz: ${score}`)
                    location.href = 'index.html'
                    oyunSuresi = 11;
                }
            },1000);
            setTimeout(function(){
                clearInterval(zamanlayici)
            },1)
            new Audio('sesler/basla.mp3').play()
            document.querySelector('.sure').textContent = ''
            oyunAlani.insertAdjacentHTML('afterbegin',hedef)
            document.querySelector('.body .targetArea .hedef').style.left = `${Math.random() * 270}px`
            document.querySelector('.body .targetArea .hedef').style.top = `${Math.random() * 270}px`
            document.querySelector('.body .targetArea .hedef').style.right = `${Math.random() * 270}px`
            document.querySelector('.body .targetArea .hedef').style.bottom = `${Math.random() * 270}px`
            startTime = 4;
        }
    },1000)

}


function yeniHedef(){
        oyunAlani.insertAdjacentHTML('afterbegin',hedef)
        document.querySelector('body .targetArea .hedef').style.left = `${Math.random() * 270}px`
        document.querySelector('body .targetArea .hedef').style.top = `${Math.random() * 270}px`
        document.querySelector('body .targetArea .hedef').style.right = `${Math.random() * 270}px`
        document.querySelector('body .targetArea .hedef').style.bottom = `${Math.random() * 270}px`
        score+= 10; // score değişkeninin değerine 10 ekliyoruz ve toplam sonuç değişkenin değerine atanıyor.
        document.querySelector('.score').style.color = 'lime'
        setTimeout(function(){
            document.querySelector('.score').style.color = 'white'
        },500)
        document.querySelector('.score').textContent = `+${score}`
        setTimeout(function(){
            document.querySelector('.score').textContent = `${score}`
        },500)
        new Audio('sesler/click.mp3').play();
}
