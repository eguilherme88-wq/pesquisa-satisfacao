# Pesquisa de Satisfação

Portal de pesquisas de satisfação (página única) com Firebase Authentication + Firestore, envio de convites por e-mail via Cloudflare Worker e suporte a PWA.

## Publicação (GitHub Pages)
Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.

## Arquivos referenciados que ainda precisam ser adicionados
- `manifest.webmanifest`
- `sw.js`
- `icons/icon-192.png`

## Segurança
A configuração Web do Firebase fica no código (isso é normal), mas a proteção real depende das **regras do Firestore** e da validação do token no Worker.
