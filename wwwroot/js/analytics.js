// Google Analytics 4
// Android апп (Google Play, TWA) болон суулгасан PWA дотор Analytics ажиллахгүй.
// Хүүхдэд зориулсан (Families бодлого) аппын хувьд мэдээлэл цуглуулахгүйн тулд.
(function() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  var inApp = false;
  try {
    if (document.referrer && document.referrer.indexOf('android-app://') === 0) {
      sessionStorage.setItem('bishguur_in_app', '1');
    }
    inApp = sessionStorage.getItem('bishguur_in_app') === '1';
  } catch (e) {}
  try {
    if (window.matchMedia && (window.matchMedia('(display-mode: standalone)').matches ||
        window.matchMedia('(display-mode: fullscreen)').matches)) {
      inApp = true;
    }
  } catch (e) {}
  if (navigator.standalone) inApp = true;

  if (inApp) return; // Апп дотор: Analytics ачаалахгүй

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9FDYPQPSPH';
  document.head.appendChild(script);

  gtag('js', new Date());
  gtag('config', 'G-9FDYPQPSPH');
})();
