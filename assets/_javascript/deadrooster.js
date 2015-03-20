(function() {
  jQuery(function() {
    $('.dr-playlist').each(function() {
      var button, link, span;
      button = $(document.createElement('button')).addClass('btn').addClass('btn-success').addClass('btn-lg');
      button.attr('dr-spotify-id', $(this).attr('dr-spotify-id'));
      button.attr('dr-spotify-user', $(this).attr('dr-spotify-user'));
      button.attr('dr-id-target', $(this).attr('id'));
      button.html("Charger le player Spotify");
      link = $(document.createElement('a'));
      link.attr("href", "http://open.spotify.com/user/" + $(this).attr('dr-spotify-user') + "/playlist/" + $(this).attr('dr-spotify-id'));
      link.html("écouter sur Spotify");
      span = $(document.createElement('span'));
      span.append("&nbsp;ou&nbsp;");
      span.append(link);
      return $(this).empty().append(button).append(span);
    });
    $('a').each(function() {
      var newTitle, prefix, title;
      title = $(this).attr("title");
      prefix = "Tooltip ";
      if (title && (title.indexOf(prefix) === 0)) {
        newTitle = title.substring(prefix.length);
        $(this).attr("data-toggle", "tooltip").attr("data-placement", "top").attr("title", newTitle);
        return $(this).tooltip();
      }
    });
    $(document).on('click', 'button[dr-spotify-id]', function() {
      var spotifyId, spotifyIframe, spotifyUser, target;
      spotifyId = $(this).attr("dr-spotify-id");
      spotifyUser = $(this).attr("dr-spotify-user");
      ga('send', 'event', 'spotify-button', 'click-load-iframe', spotifyId);
      spotifyIframe = $(document.createElement('iframe'));
      spotifyIframe.attr('src', 'https://embed.spotify.com/?uri=spotify:user:' + spotifyUser + ':playlist:' + spotifyId);
      spotifyIframe.attr('width', 300).attr('height', 380).attr('frameborder', 0).attr('allowtransparency', "true");
      target = $("#" + $(this).attr("dr-id-target"));
      return target.empty().append(spotifyIframe);
    });
    return $(document).on('click', '#disqus-on', function() {
      $('#disqus-comments').css('display', 'block');
      return $('#disqus-on').remove();
    });
  });

}).call(this);
