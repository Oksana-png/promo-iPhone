document.addEventListener('DOMContentLoaded', () => {
  
  const tabs = () => {
    const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
    const cardDetailsTitleElems = document.querySelector('.card-details__title');
    const cardImageItemElem = document.querySelector('.card__image_item');
    const cardDetailsPriceElem = document.querySelector('.card-details__price');
    const descriptionMemory = document.querySelector('.description__memory')
    const data = [
      {
        name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
        img: 'img/iPhone-graphite.png',
        price: 95990,
        memoryROM: 128,
      },
      {
        name: 'Смартфон Apple iPhone 12 Pro 128GB Silver',
        img: 'img/iPhone-silver.png',
        price: 120990,
        memoryROM: 256,
      },
      {
        name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
        img: 'img/iPhone-blue.png',
        price: 99990,
        memoryROM: 128,
      },
    ];

    const deactive = () => {
      cardDetailChangeElems.forEach(btn => btn.classList.remove('active'));
    };

    cardDetailChangeElems.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        if(!btn.classList.contains('active')) {
          deactive();
          btn.classList.add('active');
          cardDetailsTitleElems.textContent = data[i].name;
          cardImageItemElem.src = data[i].img;
          cardImageItemElem.alt = data[i].name;
          cardDetailsPriceElem.textContent = data[i].price + '₽';
          descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memoryROM} ГБ`;
        }
      });
    }); 
  };

  const modal = () => {
    const cardDetailsButtonBuyElem = document.querySelector('.card-details__button_buy');
    const modalElem = document.querySelector('.modal');

    cardDetailsButtonBuyElem.addEventListener('click', () => {
      modalElem.classList.add('open');

      addEventListener('keydown', (event) => {
        if(event.key === 'Escape') {
          modalElem.classList.remove('open');
        }
      });
    });

    modalElem.addEventListener('click', (event) => {
      const target = event.target;

      if (target.classList.contains('modal__close')) {
        modalElem.classList.remove('open');
      } else if (target.classList.contains('modal')) {
        modalElem.classList.remove('open');
      }
    });
  };

  const accordion = () => {
    const characteristicsListElem = document.querySelector(".characteristics__list");
    const characteristicsItemElems = document.querySelectorAll(".characteristics__item");

    characteristicsItemElems.forEach(elem => {
      if(elem.children[1].classList.contains('active')) {
        elem.children[1].style.height = `${elem.children[1].scrollHeight}px`;
      }
    });

    // функция открытия списка скрытого
    const open = (button, dropDown) => {
      closeAllDrops(button, dropDown);
      dropDown.style.height = `${dropDown.scrollHeight}px`;
      button.classList.add('active');
      dropDown.classList.add('active');
    };
    // функция закрытия списка 
    const close = (button, dropDown) => {
      button.classList.remove('active');
      dropDown.classList.remove('active');
      dropDown.style.height = '';
    };

    const closeAllDrops = (button, dropDown) => {
      characteristicsItemElems.forEach((elem) => {
        if(elem.children[0] !== button && elem.children[1] !== dropDown) {
          close(elem.children[0], elem.children[1]);
        }
      });
    };

    document.body.addEventListener('click', (event) => {
      const target = event.target;
      if(!target.closest('.characteristics__list')) {
        closeAllDrops();
      }
    });

    characteristicsListElem.addEventListener('click', (event) => {
      const target = event.target;

      if(target.classList.contains('characteristics__title')) {
        // ПОлучаем родителя. Он берет элемент и ищет нужный и указанный селектор, но поднимается только вверх, выше по родителям, не трогая соседние
        const parent = target.closest('.characteristics__item'); 
        const description = parent.querySelector('.characteristics__description');
        description.classList.contains('active') ? 
          close(target, description) : 
            open(target, description);
      }
    }); 


  };

  // ВЫЗОВЫ ФУНЦИИ
  tabs();
  accordion();
  modal();

});




// const cardImageElems = document.querySelectorAll('.card__image');

//     const hideAll = () => {
//       for(let i = 0; i < cardDetailChangeElems.length; i++) {
//         cardDetailChangeElems[i].classList.remove('active');
//         cardDetailsTitleElems[i].classList.remove('active');
//         cardImageElems[i].classList.remove('active');
//       }
//     };

//     for(let i = 0; i < cardDetailChangeElems.length; i++) {
//       cardDetailChangeElems[i].addEventListener('click', () => {
//         hideAll();
//         cardDetailChangeElems[i].classList.add('active');
//         cardDetailsTitleElems[i].classList.add('active');
//         cardImageElems[i].classList.add('active')
//       });
//     };