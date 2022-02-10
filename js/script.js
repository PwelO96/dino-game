const dino = document.querySelector('.game_dino');
const rock = document.querySelector('.game_rock');
const score = document.querySelector('.score');
const game = document.querySelector('.game');

const jump = () => {
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation');
    }, 500)
}

const jumpExecute = () => {
    if (!dino.classList.contains('jump-animation')) {
        jump();
    }
}

document.addEventListener('keypress', () => jumpExecute())
game.addEventListener('touchstart', () => jumpExecute())


setInterval(() => {
    const scoreCount = score.innerHTML++;
    const dinoTop = parseInt(getComputedStyle(dino).getPropertyValue('top'));
    const rockLeft = parseInt(getComputedStyle(rock).getPropertyValue('left'));

    if (rockLeft < 0) {
        rock.style.display = 'none';
    } else {
        rock.style.display = '';
    };

    if (scoreCount > 300 && scoreCount < 399) {
        rock.style.animation = 'rock 0.9s infinite linear'
    } else if (scoreCount > 400 && scoreCount < 899) {
        rock.style.animation = 'rock 0.8s infinite linear'
    } else if (scoreCount > 900 && scoreCount < 1699) {
        rock.style.animation = 'rock 0.7s infinite linear'
    } else if (scoreCount > 1400) {
        rock.style.animation = 'rock 0.6s infinite linear'
    };

    if (rockLeft < 50 && rockLeft > 0 && dinoTop > 110) {
        alert('Game Over!\nYour score is: ' + scoreCount + '\n\nWant to play again?');
        location.reload();
    }
}, 50)