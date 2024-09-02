import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  loop: true,


  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return `<span class="${currentClass}"></span> из <span class="${totalClass}"></span>`;
    },
  },

});


export default swiper;
