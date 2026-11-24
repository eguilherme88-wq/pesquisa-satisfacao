# Pesquisa de Satisfação

Portal de pesquisas de satisfação (página única) com Firebase Authentication + Firestore, envio de convites por e-mail via Cloudflare Worker e suporte a PWA.

## Publicação (Firebase Hosting)
Cada push na branch `main` publica automaticamente em
https://pesquisa-satisfacao-e3aea.web.app pelo GitHub Actions
(`.github/workflows/firebase-hosting.yml`).

Requer o secret `FIREBASE_SERVICE_ACCOUNT` no repositório, com o JSON da
conta de serviço do projeto (Firebase Console → Configurações do projeto →
Contas de serviço → Gerar nova chave privada).

## Arquivos
- `index.html` — aplicação completa
- `manifest.webmanifest`, `sw.js`, `icons/` — instalação como app (PWA)
- `firestore.rules` — regras de segurança do Firestore (publicar em Firebase Console → Firestore → Regras)

## Segurança
A configuração Web do Firebase fica no código (isso é normal), mas a proteção real depende das **regras do Firestore** e da validação do token no Worker.
