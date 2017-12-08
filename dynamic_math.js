function render_preview() {
    $(".js-blob-edit-preview").on("click", function(e) {
        function didLoadPreview() {
            if (!$(".js-blob-edit-preview").hasClass('selected')) {
                return;
            }
            if ($(".commit-preview").attr('display') == 'none') {
                setTimeout(didLoadPreview, 200);
            }
            window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub], $(".commit-preview")[0]);
        }
        setTimeout(didLoadPreview, 300);
    });
}
render_preview();
document.addEventListener("pjax:end", function(){
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    render_preview();
});
