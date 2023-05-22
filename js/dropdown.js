const dropdown_menu = document.querySelector('.files__manager__navigation__file-type__menu__wrapper'),
      dropdown_btn = document.querySelector('.files__manager__navigation__file-type__menu__button'),
      menu = document.querySelector('.files__manager__navigation__file-type__menu'),
      menu_item = document.querySelectorAll('.files__manager__navigation__file-type__menu__item'),
      current_file_type = document.querySelector('.files__manager__navigation__file-type__type'),
      dropdown_btn_icon = document.querySelector('.current-file-type');

dropdown_btn.addEventListener('click', ()=> {
    menu.classList.toggle('menu_active');
    dropdown_menu.classList.toggle('dropdown');
});

menu_item.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        // console.log(e.target.getAttribute("data-file-type"));
        if(e.target.getAttribute("data-file-type") == "all") {
            dropdown_btn_icon.className = 'fa-regular';
            dropdown_btn_icon.classList.add('fa-file');
            current_file_type.innerText = "Все файлы";
        } else if(e.target.getAttribute("data-file-type") == "video") {
            dropdown_btn_icon.className = 'fa-regular';
            dropdown_btn_icon.classList.add('fa-file-video');
            current_file_type.innerText = "Видео файлы";
        } else if(e.target.getAttribute("data-file-type") == "audio") {
            dropdown_btn_icon.className = 'fa-regular';
            dropdown_btn_icon.classList.add('fa-file-audio');
            current_file_type.innerText = "Аудио файлы";
        } else if(e.target.getAttribute("data-file-type") == "image") {
            dropdown_btn_icon.className = 'fa-regular';
            dropdown_btn_icon.classList.add('fa-file-image');
            current_file_type.innerText = "Файлы иозображения";
        }
    });
});


function files() {
    const parent = document.querySelector('.files__manager__layout__wrapper');
    for(let i = 0; i < 70; i++) {
        const item = document.createElement("div");
        item.classList.add('files__manager__layout__item');
        item.innerHTML = 
        `
            <i class="fa-solid fa-file-pen files__manager__layout__item__icon"></i>
            <i class="fa-solid fa-ellipsis-vertical files__manager__layout__item__button"></i>
            <div class="files__manager__layout__item__name">file name about some fucking shit</div>
        `;
        parent.insertAdjacentElement('beforeend', item);
    }
}


// files();