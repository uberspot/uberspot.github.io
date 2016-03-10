//First part of google analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-24907244-1']);
_gaq.push(['_trackPageview']);

// Define variables for Disqus comments.
if (typeof uberspot_slug !== 'undefined') {
    var disqus_shortname = 'uberspot';
    var disqus_identifier = uberspot_slug;
    var disqus_url = uberspot_url;
}

(function () {

    // Load some external JavaScript asynchronously.
    var loadExternalJS = function (url)
    {
        s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        document.body.appendChild(s);
    };//end loadExternalJS

    // This function will get called when the windows load.
    var onLoadCallback = function ()
    {
        // Hide toolbar on iPhone.
        if (navigator.userAgent.match(/iphone/i)) {
            window.scrollTo(0, 0);
        }

        // Load share buttons.
        var shareButtonDiv = document.getElementById('share-buttons');
        if (shareButtonDiv) {
            // Twitter tweet button <https://twitter.com/about/resources/tweetbutton>.
            shareButtonDiv.innerHTML += '<a class="twitter-share-button" '+
                'href="https://twitter.com/share" data-count="none" data-text="'+uberspot_title+
                '" data-url="'+uberspot_url+'" data-via="uberspot">Tweet</a>';
            loadExternalJS('https://platform.twitter.com/widgets.js');

            // Facebook like button <https://developers.facebook.com/docs/reference/plugins/like/>.
            shareButtonDiv.innerHTML += '<iframe class="facebook-like-button" '+
                'src="https://www.facebook.com/plugins/like.php?href='+uberspot_url+
                '&amp;layout=button_count&amp;show_faces=true&amp;width=50&amp;action=like&amp;'+
                'colorscheme=light&amp;height=20" scrolling="no" frameborder="0" '+
                'allowTransparency="true"></iframe>';

            // Linkedin share buttom <https://www.linkedin.com/publishers>.
            shareButtonDiv.innerHTML += '<script type="in/share" data-url="'+uberspot_url+
                '"></script>';
            loadExternalJS('https://platform.linkedin.com/in.js');

            // Google +1 button <https://www.google.com/webmasters/+1/button/>.
            shareButtonDiv.innerHTML += '<g:plusone size="medium" count="false" href="'+uberspot_url+
                '"></g:plusone>';
            loadExternalJS('https://apis.google.com/js/plusone.js');
        }

        // Load Disqus comments.
        var commentDiv = document.getElementById('disqus_thread');
        if (commentDiv) {
            loadExternalJS('https://uberspot.disqus.com/embed.js');
            loadExternalJS('https://uberspot.disqus.com/count.js');
        }

        // Add target="_blank" to any links that go outside this domain.
        var a = document.getElementsByTagName('a');
        var l = a.length;
        var u = location.href;
        var d = u.replace(/^([a-z]+:\/\/[^\/]+)\/?.*/, '$1');
        for (var i = 0; i < l; i++) {
            if (a[i].href.indexOf(d) != 0) {
                a[i].target = '_blank';
            }
        }

    };//end onLoadCallback

    //Second part of google analytics
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

    // Run onLoadCallback asynchronously.
    window.onload = function ()
    {
        setTimeout(onLoadCallback, 1);
    };//end window.onload

})();

