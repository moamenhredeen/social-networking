

$(document).ready(() =>  {

    // global variables : 
    const asideNavLinks = $('#aside-nav-links');
    const btn_burger = $('#burger');
    const btn_close = $('#close');

    // initial state 
    asideNavLinks.hide();


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

});
