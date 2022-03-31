(() => {
  const headerCTA = document.getElementById('headerCTA');
  const banner = document.getElementById('banner');

  let _bannerPinned = false;

  const _visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const visible = entry.intersectionRatio > 0;
      if (entry.target === headerCTA) {
        if (visible) {
          banner.classList.remove('pinned');
        } else {
          banner.classList.add('pinned');
        }
      }
    });
  }, {});
  _visibilityObserver.observe(headerCTA);

})();