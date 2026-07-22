// CommitBee 방문자 beacon (D-035) — 개인정보: 서버는 IP를 일 단위 해시로만 사용
(function () {
  if (navigator.webdriver) return;
  var payload = JSON.stringify({
    siteId: "chanudevelop/chanu_devBlog",
    path: location.pathname,
    eventId: (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random()),
    referrer: document.referrer || null
  });
  var url = "http://localhost:8080/beacon";
  if (navigator.sendBeacon) navigator.sendBeacon(url, new Blob([payload], { type: "application/json" }));
  else fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: payload, keepalive: true });
})();
