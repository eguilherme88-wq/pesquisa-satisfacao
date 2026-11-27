// Service worker do Pesquisa de Satisfação.
// O domínio eguilherme88-wq.github.io é compartilhado por vários apps: este arquivo
// só cria, usa e apaga caches com o prefixo próprio e só atende arquivos desta pasta.
const PREFIX = 'pesquisa-satisfacao-';
const CACHE = PREFIX + 'v3';
const SCOPE = new URL('./', self.location).pathname; // /pesquisa-satisfacao/
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
const ASSET_PATHS = ASSETS.map(p => new URL(p, self.location).pathname);

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        // Apaga apenas versões antigas DESTE app (inclui o nome antigo "satisfacao-pwa-v1").
        .filter(k => (k.startsWith(PREFIX) || k === 'satisfacao-pwa-v1') && k !== CACHE)
        .map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const u = new URL(req.url);
  if (req.method !== 'GET' || u.origin !== self.location.origin || !u.pathname.startsWith(SCOPE)) return;
  if (u.searchParams.has('convite')) return; // links de pesquisa sempre pela rede

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(r => {
        if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); }
        return r;
      }).catch(() => caches.open(CACHE).then(c => c.match('./index.html')))
    );
    return;
  }

  if (ASSET_PATHS.includes(u.pathname)) {
    e.respondWith(
      caches.open(CACHE).then(c => c.match(req).then(hit => {
        const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; });
        return hit || net;
      }))
    );
  }
});
