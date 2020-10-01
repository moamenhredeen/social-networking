

$(document).ready(() =>  {

    // global variables : 
    const main = $('#main')
    const asideNavLinks = $('#aside-nav-links');
    const post = $('.post-output');
    const btn_burger = $('#burger');
    const btn_close = $('#close');


    // aside nav bar :show / hide
    btn_burger.click(() => {
        btn_burger.hide();
        btn_close.show();
        asideNavLinks.show();
    })

    btn_close.click(() => {
        btn_close.hide();
        btn_burger.show();
        asideNavLinks.hide();
    })

    // const posts_html = posts.forEach((item, index) =>  {
    //     const copy = post.clone().show();
    //     main.append(copy);
    // })


});
