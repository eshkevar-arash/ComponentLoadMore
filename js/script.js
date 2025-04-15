let btnWrappers = document.querySelectorAll('.sec-content-btn_wrapper')
btnWrappers = Array.from(btnWrappers)

let btn = null
let contents = document.querySelectorAll('.sec-content');
contents = Array.from(contents)
btnWrappers.forEach(btnWrapper => {
    btnWrapper.addEventListener('click', event => {
        btn = event.target.closest('.btn')
        if (btn){
            btn.parentElement.parentElement.classList.toggle('open')
            btn.classList.toggle('btn__open')
            if (btn.classList.contains('btn__open')) {
                btn.innerHTML = `
                    <span>مشاهده کمتر</span>
                    <span>مشاهده کمتر</span>
                    <svg width="24" height="24">
                        <use href="#icon-minus"></use>
                    </svg>
                `
            } else {
                btn.innerHTML = `
                    <span>مشاهده بیشتر</span>
                    <svg width="24" height="24">
                        <use xlink:href="#icon-add"></use>
                    </svg>
                `
            }
            contents.forEach(content => {
                content.scrollTop = 0;
            })

        }

    })
})
