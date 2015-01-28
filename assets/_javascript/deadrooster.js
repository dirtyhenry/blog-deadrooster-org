(function() {
  jQuery(function() {
    $('.dr-playlist').each(function() {
      var button, link, span;
      button = $(document.createElement('button')).addClass('btn').addClass('btn-success').addClass('btn-lg');
      button.attr('dr-spotify-id', $(this).attr('dr-spotify-id')).attr('dr-id-target', $(this).attr('id'));
      button.html("Charger le player Spotify");
      link = $(document.createElement('a'));
      link.attr("href", "http://open.spotify.com/user/dirtyhenry/playlist/" + $(this).attr('dr-spotify-id'));
      link.html("écouter sur Spotify");
      span = $(document.createElement('span'));
      span.append("&nbsp;ou&nbsp;");
      span.append(link);
      return $(this).empty().append(button).append(span);
    });
    return $(document).on('click', 'button[dr-spotify-id]', function() {
      var spotifyIframe, target;
      console.log("CLICK");
      spotifyIframe = $(document.createElement('iframe'));
      spotifyIframe.attr('src', 'https://embed.spotify.com/?uri=spotify:user:dirtyhenry:playlist:' + $(this).attr("dr-spotify-id"));
      spotifyIframe.attr('width', 300).attr('height', 380).attr('frameborder', 0).attr('allowtransparency', "true");
      target = $("#" + $(this).attr("dr-id-target"));
      console.log(target);
      console.dir(target);
      return target.empty().append(spotifyIframe);
    });
  });

}).call(this);
