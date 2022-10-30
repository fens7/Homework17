$(function () {
    const imageItem = $('.js--gal_item')
    const nextBtn = $('.js--modal__next')
    const prevBtn = $('.js--modal__prev')
    const modalContent = $('.js--modal__content')
    const closeModal = $('.js--modal__close')
  
  
    imageItem.on('click', function () {
      $(this).addClass('current');
      $('.js--modal').addClass('active');
      $(modalContent).find('img').attr('src', $(this).find('img').attr('src'));
    })

    nextBtn.on('click', function () {
        let activeElem = $('.js--gal_item.current')
        if(activeElem.next().is('li')) {
            activeElem.next().addClass('current');
            activeElem.removeClass('current');
            $(modalContent).find('img').attr('src', activeElem.next().find('img').attr('src'));
        }
    })

    prevBtn.on('click', function () {
        let activeElem = $('.js--gal_item.current')
        if(activeElem.prev().is('li')){
            activeElem.removeClass('current');
            activeElem.prev().addClass('current');
            $(modalContent).find('img').attr('src', activeElem.prev().find('img').attr('src'));
        }
    })

    closeModal.on('click', function() {
        $('.js--modal').removeClass('active');
    })
})