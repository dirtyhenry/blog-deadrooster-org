# This is all the JavaScript required for the DeadRooster blog

jQuery ->
    # Replace Spotify div by new content
    $('.dr-playlist').each(() ->
        # Create the button
        button = $(document.createElement('button')).addClass('btn').addClass('btn-success').addClass('btn-lg')
        button.attr('dr-spotify-id', $(this).attr('dr-spotify-id'))
        button.attr('dr-spotify-user', $(this).attr('dr-spotify-user'))
        button.attr('dr-id-target', $(this).attr('id'))
        button.html "Charger le player Spotify"        

        # Create the link
        link = $(document.createElement('a'))
        link.attr("href", "http://open.spotify.com/user/" + $(this).attr('dr-spotify-user') + "/playlist/" + $(this).attr('dr-spotify-id'))
        link.html "écouter sur Spotify"

        # Create the span
        span = $(document.createElement('span'))
        span.append "&nbsp;ou&nbsp;"
        span.append link
        
        $(this).empty().append(button).append(span)
    )
    
    $('a').each(() ->
        title = $(this).attr("title")
        prefix = "Tooltip "
        if title && (title.indexOf(prefix) == 0)
            newTitle = title.substring(prefix.length)
            $(this).attr("data-toggle", "tooltip").attr("data-placement", "top").attr("title", newTitle)
            $(this).tooltip()
    )

    # On clicks on buttons with an attribute "dr-spotify-id", replace the content of the element identified
    # by "dr-id-target" with a Spotify iframe
    $(document).on('click', 'button[dr-spotify-id]', () ->
        spotifyId = $(this).attr("dr-spotify-id")
        spotifyUser = $(this).attr("dr-spotify-user")
        ga('send', 'event', 'spotify-button', 'click-load-iframe', spotifyId);
        
        spotifyIframe = $(document.createElement('iframe'))
        spotifyIframe.attr('src', 'https://embed.spotify.com/?uri=spotify:user:' + spotifyUser + ':playlist:' + spotifyId)
        spotifyIframe.attr('width', 300).attr('height', 380).attr('frameborder', 0).attr('allowtransparency', "true")
        
        target = $("#" + $(this).attr("dr-id-target"))
        target.empty().append(spotifyIframe)
    )
    
    $(document).on('click', '#disqus-on', () ->
        $('#disqus-comments').css('display', 'block')
        $('#disqus-on').remove()
    )
    
    # console.log "MICK"
    # $('#first-page-background').css("position", "absolute")
    # $('#first-page-background').css("top", 54)
    # $('#first-page-background').css("z-index", -1)
    # $('#first-page-background').css("left", 0)
    # $('#first-page-background').css("width", $(window).width())
    # $('#first-page-background').css("height", $(window).height() - 54)
    # $('#first-page-background').css("background-color", "blue")
    # $('#first-page-background').css("background-image", "url(/assets/images/neutral-milk-hotel-introduction.png)")
    # $('#first-page-background').css("background-position", "50% 50%")
    # $('#first-page-background').css("background-size", "cover")
    # $('#first-page-background').css("background-repeat", "no-repeat")
