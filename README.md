# Pesquisa de Satisfação

Portal de pesquisas de satisfação (página única) com Firebase Authentication + Firestore, envio de convites por e-mail via Cloudflare Worker e suporte a PWA.

## Publicação (GitHub Pages)
O site é publicado automaticamente a cada push na branch `main`:
https://eguilherme88-wq.github.io/pesquisa-satisfacao/

O domínio `eguilherme88-wq.github.io` precisa estar em Firebase Console →
Authentication → Configurações → Domínios autorizados.

## Arquivos
- `index.html` — aplicação completa
- `manifest.webmanifest`, `sw.js`, `icons/` — instalação como app (PWA)
- `firestore.rules` — regras de segurança do Firestore (publicar em Firebase Console → Firestore → Regras)

## Segurança
A configuração Web do Firebase fica no código (isso é normal), mas a proteção real depende das **regras do Firestore** e da validação do token no Worker.
