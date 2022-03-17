window.addEventListener('DOMContentLoaded', () => {
    let text1 = document.querySelector('.text1');
    let text2 = document.querySelector('.text2');

    let buttons = document.querySelectorAll('button');
    let code1 = document.querySelector('.img1');
    let code2 = document.querySelector('.img2');

    let alts = document.querySelectorAll('.alternate');
    
    alts.forEach(val => {
        val.addEventListener('click', (e) => {
            let whichBtn = e.target.classList[1]
            console.log(whichBtn);
            switch (whichBtn) {
                case 'firstAlt': {
                    text1.style.animationDirection = 'alternate';
                }
                case 'secondAlt' : {
                    text2.style.animationDirection = 'alternate';
                }
            }
        })
    })

    let spin = './imgs/spin.png';
    let driveIn = './imgs/driveIn.png';
    let leftToRight = './imgs/leftToRight.png';
    let fadeIn = './imgs/fadeIn.png';
    let topToBottom = './imgs/topBottom.png';
    let growIn = './imgs/growIn.png';

    code1.innerHTML = `<img src=${spin} alt='img'/>`
    code2.innerHTML = `<img src=${fadeIn} alt='img'/>`;
    

    buttons.forEach(i => {
        // console.log(i)
        i.addEventListener('click', (e) => {
            let anim = e.target.classList[0];
            // console.log(anim, anim === 'leftToRight')
            switch(anim) {
                case 'spin': {
                    text1.style.animation = 'Spin 3s infinite';
                    code1.innerHTML = `<img src=${spin} alt='img'/>`
                    
                }
                break;
                case 'topToBottom': {
                    text1.style.animation = 'TopToBottom 3s infinite';
                    code1.innerHTML = `<img src=${topToBottom} alt='img'/>`;
                }
                break;
                case 'leftToRight': {
                    text1.style.animation = 'LeftToRight 3s infinite';
                    code1.innerHTML = `<img src=${leftToRight} alt='img'/>`;
                }
                break;
                case 'driveIn' : {
                    text2.style.animation = 'DriveIn 2s infinite';
                    code2.innerHTML = `<img src=${driveIn} alt='img'/>`;
                    
                }
                break;
                case 'fadeIn' : {
                    text2.style.animation = 'FadeIn 3s infinite';
                    code2.innerHTML = `<img src=${fadeIn} alt='img'/>`;
                }
                break;
                case 'growIn': {
                    text2.style.animation = 'GrowIn 3s infinite';
                    code2.innerHTML = `<img src=${growIn} alt='img'/>`;
                }
            }
        })
    })

    // console.log(buttons)
})