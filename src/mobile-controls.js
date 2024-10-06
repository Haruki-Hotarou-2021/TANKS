// Set fullscreen
//document.documentElement.requestFullscreen();


// Device Detection
let mobileDevice;

if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
  mobileDevice = true; // O usuário está em um dispositivo móvel
} else {
  mobileDevice = false; // O usuário está em um desktop
}

export { mobileDevice };


// Controls

export function gamepad() {
  // Cria o objeto buttons para armazenar o estado dos botões
  const buttons = {
    up: false,
    down: false,
    left: false,
    right: false,
    shoot: false,
    changeAmmo: false
  };

  // Função para criar um botão
  function createButton(id, x, y, backgroundImage, side) {
    const button = document.createElement('div');
    button.id = id;
    button.style.width = '100px';
    button.style.height = '100px';
    button.style.transform = 'scale(100%)';
    button.style.position = 'absolute';
    if (side === 'left') button.style.left = x + '%';
    if (side === 'right') button.style.right = x + '%';
    button.style.bottom = y + '%';
    button.style.backgroundImage = `url(${backgroundImage})`;
    button.style.backgroundSize = 'cover';
    button.style.zIndex = 9999999999;

    // Adiciona eventos de mouse
    button.addEventListener('touchstart', () => {
      buttons[id] = true;
      console.log(`${id} pressed: ${buttons[id]}`);
    });

    button.addEventListener('touchend', () => {
      buttons[id] = false;
      console.log(`${id} released: ${buttons[id]}`);
    });

    return button;
  }

  // Criação dos botões de movimento à esquerda
  document.body.appendChild(createButton('up', 12, 23, '/assets/left.png', 'left'));
  document.body.appendChild(createButton('down', 12, 1, '/assets/left.png', 'left'));
  document.body.appendChild(createButton('left', 1, 12, '/assets/left.png', 'left'));
  document.body.appendChild(createButton('right', 23, 12, '/assets/left.png', 'left'));

  // Criação dos botões de ação à direita
  document.body.appendChild(createButton('fire', 300, 160, '/assets/left.png', 'right'));
  document.body.appendChild(createButton('switch', 300, 270, '/assets/left.png', 'right'));

  // Estilo do body para evitar overflow
  document.body.style.margin = '0';
  document.body.style.height = '100vh';
  document.body.style.overflow = 'hidden';

}


export function mobileMode() {
/*
  //document.body.style.transform = 'scale(0.2813)';
  //document.body.style.transformOrigin = '0 0';

  const body = document.body.style;

  body.transform = 'rotate(90deg) scale(0.4)';
  body.transformOrigin = '57% 32%';
  body.width = '100vh';
  body.height = '100vw';
  */
}