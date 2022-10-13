$(function () {
    var bar = '';
    bar += '<footer class="footer">';
        bar += '<div class="container">';

            bar += '<div class="footer-top">';

                bar += '<div class="footer-brand">';
                    bar += '<a href="/" class="logo">';
                        bar += '<h1>uidesignandre</h1>';
                    bar += '</a>';

                    bar += '<p class="footer-text">';
                        bar += 'Design Inspiration Mengenai UI App';
                    bar += '</p>';
                bar += '</div>';

                bar += '<ul class="footer-list">';
                    bar += '<li>';
                        bar += '<p class="footer-list-title">Company</p>';
                    bar += '</li>';

                    bar += '<li>';
                        bar += '<a href="/m/about-us/" class="footer-link">About us</a>';
                    bar += '</li>';
                bar += '</ul>';

                bar += '<ul class="footer-list">';
                    bar += '<li>';
                        bar += '<p class="footer-list-title">Company</p>';
                    bar += '</li>';

                    bar += '<li>';
                        bar += '<a href="m/about-us/" class="footer-link">About us</a>';
                    bar += '</li>';
                bar += '</ul>';

                bar += '<ul class="footer-list">';
                    bar += '<li>';
                        bar += '<p class="footer-list-title">Source Code</p>';
                    bar += '</li>';

                    bar += '<li>';
                        bar += '<a href="m/about-us/" class="footer-link">About us</a>';
                    bar += '</li>';
                bar += '</ul>';
                

            bar += '</div>';

            bar += '<div class="footer-bottom">';
                bar += '<ul class="social-list">';
                    bar += '<li>';
                        bar += '<a href="https://www.instagram.com/solityid/" class="social-link">';
                            bar += '<ion-icon name="logo-instagram"></ion-icon>';
                        bar += '</a>';
                    bar += '</li>';
                bar += '</ul>';

                bar += '<p class="copyright">';
                    bar += '&copy; 2022 <a href="/">uidesignandre</a>. All Rights Reserved';
                bar += '</p>';
            bar += '</div>';

        bar += '</div>';
    bar += '</footer>';


    $("#footer").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('blabz').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}