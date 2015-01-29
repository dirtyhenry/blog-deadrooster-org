# This is all the JavaScript required for the DeadRooster blog

jQuery ->
    # Replace Spotify div by new content
    $('.dr-playlist').each(() ->
        # Create the button
        button = $(document.createElement('button')).addClass('btn').addClass('btn-success').addClass('btn-lg')
        button.attr('dr-spotify-id', $(this).attr('dr-spotify-id')).attr('dr-id-target', $(this).attr('id'))
        button.html "Charger le player Spotify"        

        # Create the link
        link = $(document.createElement('a'))
        link.attr("href", "http://open.spotify.com/user/dirtyhenry/playlist/" + $(this).attr('dr-spotify-id'))
        link.html "écouter sur Spotify"

        # Create the span
        span = $(document.createElement('span'))
        span.append "&nbsp;ou&nbsp;"
        span.append link
        
        $(this).empty().append(button).append(span)
    )

    # On clicks on buttons with an attribute "dr-spotify-id", replace the content of the element identified
    # by "dr-id-target" with a Spotify iframe
    $(document).on('click', 'button[dr-spotify-id]', () ->
        spotifyId = $(this).attr("dr-spotify-id")
        ga('send', 'event', 'spotify-button', 'click-load-iframe', spotifyId);
        
        spotifyIframe = $(document.createElement('iframe'))
        spotifyIframe.attr('src', 'https://embed.spotify.com/?uri=spotify:user:dirtyhenry:playlist:' + spotifyId)
        spotifyIframe.attr('width', 300).attr('height', 380).attr('frameborder', 0).attr('allowtransparency', "true")
        
        target = $("#" + $(this).attr("dr-id-target"))
        target.empty().append(spotifyIframe)
    )