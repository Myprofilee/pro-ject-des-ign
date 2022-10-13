$(function () {
    var bar = '';
    bar += '<link rel="stylesheet" href="/assets/css/style.css">';
    bar += '<link rel="stylesheet" href="/assets/css/custom-solity.css">';
    bar += '<link rel="preconnect" href="https://fonts.googleapis.com">';
    bar += '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
    bar += '<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&family=Open+Sans&display=swap" rel="stylesheet">';
    bar += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">';

    bar += '<header class="header" data-header>';
        bar += '<div class="container">';

            bar += '<div class="overlay" data-overlay></div>';
            
            bar += '<a href="/" class="logo">';
                bar += '<h3>uidesignandre</h3>';
            bar += '</a>';

            bar += '<nav class="navbar" data-navbar>';
                bar += '<ul class="navbar-list">';

                    bar += '<li>';
                        bar += '<a href="/" class="navbar-link" data-nav-link>Home</a>';
                    bar += '</li>';

                bar += '</ul>';
            bar += '</nav>';

            bar += '<div class="header-actions">';

                bar += '<div class="header-contact">';
                    bar += '<a href="tel:-" class="contact-link">Tlp Coming Soon</a>';
                    bar += '<span class="contact-time">Sen - Jum: 09:00 Pagi - 18:00 Sore</span>';
                bar += '</div>';

                bar += '<a href="javascript:void(0)" onclick="Modal.open(#uidesignandre)" class="btn" aria-labelledby="aria-label-txt">';
                    bar += '<ion-icon name="share-outline"></ion-icon>';
                    bar += '<span id="aria-label-txt">Share</span>';
                bar += '</a>';

                bar += '<a href="auth/" class="btn user-btn" aria-label="Profile">';
                    bar += '<ion-icon name="person-outline"></ion-icon>';
                bar += '</a>';

                bar += '<button class="nav-toggle-btn" data-nav-toggle-btn aria-label="Toggle Menu">';
                    bar += '<span class="one"></span>';
                    bar += '<span class="two"></span>';
                    bar += '<span class="three"></span>';
                bar += '</button>';

            bar += '</div>';

        bar += '</div>';
    bar += '</header>';

    bar += '<script src="/assets/js/script.js"></script>';
    bar += '<script src="/assets/js/page-to-form-payment.js"></script>';
    bar += ' <script src="/assets/js/custom-solity.js"></script>';
    bar += '<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>';
    bar += '<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>';

    $("#navbar").html(bar);
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