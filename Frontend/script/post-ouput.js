const toggleComment = (id) => {
    const item = $(`#${id}`);
    let toggle = UI.posts[id].toggleComment;
    if (toggle) {
        item.find('.post-output-comment').removeClass('hide');
    } else {
        item.find('.post-output-comment').addClass('hide')
    }
    UI.posts[id].toggleComment = !toggle
}