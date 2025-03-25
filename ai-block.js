(function() {
    const blockedDomains = [
      'craiyon.com'
    ];
  
    function getHostname(url) {
      try {
        return new URL(url).hostname.replace(/^www\./, '');
      } catch (e) {
        return '';
      }
    }
    
    const results = document.querySelectorAll('div');
  
    results.forEach((result) => {
        document.querySelectorAll('[data-lpage]').forEach(el => {
            const url = el.getAttribute('data-lpage');
            const hostname = getHostname(url);
            if (blockedDomains.includes(hostname)) {
                el.remove();
                }
        });      
    });
})();
  