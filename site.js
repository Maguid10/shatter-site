// Shared site settings. Fill these in once; every page uses them.
var SITE = {
  // App Store link once the app is live; every download button uses it.
  appStoreUrl: '',
  // Support address shown on Support, Privacy and Terms.
  supportEmail: '',
};

(function () {
  if (SITE.appStoreUrl) {
    document.querySelectorAll('.store-link').forEach(function (a) { a.href = SITE.appStoreUrl; });
  }
  document.querySelectorAll('.support-email').forEach(function (el) {
    if (SITE.supportEmail) {
      el.textContent = SITE.supportEmail;
      el.href = 'mailto:' + SITE.supportEmail;
    }
  });
  // Sentences that only make sense with an address stay hidden until there is one.
  if (!SITE.supportEmail) {
    document.querySelectorAll('.needs-email').forEach(function (el) { el.hidden = true; });
  }
})();
