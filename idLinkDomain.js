  /**
   * id domain of the link and define external link
   */

  function getDomain(url, subdomain) {
    subdomain = subdomain || false;

    url = url.replace(/(https?:\/\/)?(www.)?/i, '');

    if (!subdomain) {
      url = url.split('.');

      url = url.slice(url.length - 2).join('.');
    }

    if (url.indexOf('/') !== -1) {
      return url.split('/')[0];
    }

    return url;
  }

  $('.MyClass p a').each(function() {
    var aLink = $(this).attr('href');
    if (getDomain(aLink) != 'mysite.com'){
      $(this).append($('<div>some stuff</div>'))
             .addClass('ExternalLink');
    }
  });