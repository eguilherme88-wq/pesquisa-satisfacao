# Pesquisa de Satisfação

Portal de pesquisas de satisfação (página única) com Firebase Authentication + Firestore, envio de convites por e-mail via Cloudflare Worker e suporte a PWA.

## Publicação (GitHub Pages)
Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.

## Arquivos
- `index.html` — aplicação completa
- `manifest.webmanifest`, `sw.js`, `icons/` — instalação como app (PWA)
- `firestore.rules` — regras de segurança do Firestore (publicar em Firebase Console → Firestore → Regras)

## Segurança
A configuração Web do Firebase fica no código (isso é normal), mas a proteção real depende das **regras do Firestore** e da validação do token no Worker.
