# MetricFlow SaaS 🚀

Plataforma de Diagnóstico de Produto com IA - Sistema de Gerenciamento de Usuários com Pix Voluntário

## 🎯 Funcionalidades

- **Site Público**: Apresentação do MetricFlow
- **Dashboard Admin**: Gestão de usuários (aprovação/bloqueio)
- **Autenticação**: Login seguro apenas para admin
- **Pix Voluntário**: Sistema integrado de doações
- **Banco de Dados**: PostgreSQL com usuários e transações

## 🏗️ Arquitetura

```
Frontend (React)  →  Backend (Node.js)  →  PostgreSQL
   Vercel              Railway                Railway
```

## 📁 Estrutura do Projeto

```
.
├── frontend/              # Aplicação React
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/               # API Node.js + Express
│   ├── src/
│   ├── routes/
│   └── package.json
├── database/              # Scripts SQL
│   └── init.sql
└── docs/                  # Documentação
```

## 🚀 Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## 🌍 Deploy

- **Frontend**: Vercel (https://vercel.com)
- **Backend**: Railway (https://railway.app)

## 📧 Contato

Email para Pix Voluntário: priscila.telecom10@gmail.com

---

**Desenvolvido com ❤️ para MetricFlow**