# 🎯 GUIA RÁPIDO - Deploy MetricFlow em Produção

## ✅ TUDO JÁ ESTÁ PRONTO!

Suas credenciais e configurações foram salvas em:
- `backend/.env.production`
- `vercel.json`
- `Procfile`

---

## 🚀 PASSO A PASSO (SEM CÓDIGO - APENAS CLIQUES)

### **PASSO 1: Frontend no Vercel (2 minutos)**

1. Abra: **https://vercel.com/new**
2. Clique: **"Import Git Repository"**
3. Busque e selecione: **`pridavid/metricflow-saas`**
4. Configure exatamente assim:
   ```
   Framework Preset: Next.js
   Root Directory: ./frontend
   Build Command: npm run build
   Output Directory: .next
   ```
5. **Environment Variables** - Adicione:
   ```
   NEXT_PUBLIC_API_URL = (deixe vazio por enquanto)
   ```
6. Clique: **"Deploy"**
7. ⏳ Aguarde 2-3 minutos

✅ **Resultado:** Seu site em `https://seu-projeto.vercel.app`

---

### **PASSO 2: Backend no Railway (3 minutos)**

1. Abra: **https://railway.app**
2. Clique: **"Start New Project"**
3. Clique: **"Deploy from GitHub Repo"**
4. Autorize Railway com seu GitHub (uma vez)
5. Selecione: **`pridavid/metricflow-saas`**
6. Configure:
   ```
   Service Name: metricflow-backend
   Root Directory: backend
   ```
7. ⏳ Railway fará deploy automático
8. Aguarde 3-5 minutos
9. Copie a URL do seu backend (aparece em Railway)

✅ **Resultado:** Seu backend em `https://seu-backend.railway.app`

---

### **PASSO 3: PostgreSQL no Railway (1 minuto)**

1. No Railway Dashboard (onde está seu backend)
2. Clique: **"+ New"**
3. Selecione: **"Database"**
4. Clique: **"PostgreSQL"**
5. ✅ Pronto! Railway criou automaticamente

✅ **DATABASE_URL criada automaticamente**

---

### **PASSO 4: Variáveis de Ambiente (2 minutos)**

#### 🔧 No Railway Backend:

1. Abra o serviço `metricflow-backend`
2. Clique na aba: **"Variables"**
3. Adicione estas variáveis:

```
NODE_ENV = production
JWT_SECRET = a7f3k9mQ2xL8nB5pR1wC6jD4vE9sT0uF7gH3iJ2kL5mN8oP1qR4sT7uV9wX2yZ5
ADMIN_EMAIL = priscila.telecom10@gmail.com
ADMIN_PASSWORD = MetricFlow@Admin2025
PIX_KEY = priscila.telecom10@gmail.com
```

⚠️ **IMPORTANTE:** Railway já criou `DATABASE_URL` automaticamente!

#### 🌐 No Vercel Frontend:

1. Vá para seu projeto no Vercel
2. Clique: **"Settings"**
3. Clique: **"Environment Variables"**
4. Edite `NEXT_PUBLIC_API_URL` e defina como:
   ```
   https://seu-backend.railway.app
   ```
   (Copie o URL exato do seu Railway)

5. Clique: **"Save"**
6. Vercel fará novo deploy (5 min)

---

### **PASSO 5: Inicializar Banco de Dados (5 minutos)**

#### **Opção A: DBeaver (Mais Fácil - Interface Gráfica)**

1. Baixe: **https://dbeaver.io** (grátis)
2. Instale normalmente
3. Abra DBeaver
4. Clique: **"Database"** → **"New Database Connection"**
5. Selecione: **"PostgreSQL"**
6. Clique: **"Next"**
7. Configure (copie do Railway):
   - Host: (do Railway)
   - Port: (do Railway)
   - Database: (do Railway)
   - Username: (do Railway)
   - Password: (do Railway)
8. Clique: **"Test Connection"** (deve funcionar)
9. Clique: **"Finish"**
10. Abra arquivo: `backend/database/init.sql`
11. Copie TODO o conteúdo
12. No DBeaver, abra uma aba SQL nova
13. Cole o conteúdo
14. Clique: **"Execute"** (ou Ctrl+Enter)
15. ✅ Pronto! Banco inicializado

#### **Opção B: Terminal (Se souber usar)**

```bash
# Copie DATABASE_URL do Railway
psql "postgresql://user:password@host:port/database" < backend/database/init.sql
```

---

## ✅ TESTAR TUDO

### **1. Site Público**
```
Abra: https://seu-projeto.vercel.app
```
Você deve ver:
- ✅ Logo MetricFlow
- ✅ Título "Diagnóstico de Produto com IA"
- ✅ Botão "Solicitar Acesso" clicável

### **2. Admin Dashboard**
```
Abra: https://seu-projeto.vercel.app/admin
```
Faça login com:
```
Email: priscila.telecom10@gmail.com
Senha: MetricFlow@Admin2025
```

Você deve ver:
- ✅ Dashboard com estatísticas
- ✅ Aba "Gerenciar Usuários"
- ✅ Aba "Doações Pix"

### **3. API Health Check**
```bash
curl https://seu-backend.railway.app/health
```

Resposta esperada:
```json
{"status": "ok", "timestamp": "..."}
```

---

## 📊 URLs FINAIS (Guarde!)

| O quê | URL |
|-------|-----|
| **Site Público** | `https://seu-projeto.vercel.app` |
| **Admin Dashboard** | `https://seu-projeto.vercel.app/admin` |
| **API** | `https://seu-backend.railway.app/api` |
| **Health Check** | `https://seu-backend.railway.app/health` |

---

## 💳 Credenciais Admin

```
Email:    priscila.telecom10@gmail.com
Senha:    MetricFlow@Admin2025
Pix:      priscila.telecom10@gmail.com
```

---

## 🎯 Fluxo de Uso Completo

```
VISITANTE
   ↓
Acessa: https://seu-projeto.vercel.app
   ↓
Clica: "Solicitar Acesso"
   ↓
Preenche formulário (nome, email, empresa)
   ↓
Sistema salva em PostgreSQL
   ↓
VOCÊ (ADMIN)
   ↓
Acessa: https://seu-projeto.vercel.app/admin
   ↓
Vê a solicitação pendente
   ↓
Clica: "Aprovar"
   ↓
VISITANTE APROVADO
   ↓
Recebe acesso liberado
   ↓
Pode fazer doação voluntária via Pix
   ↓
Você recebe: priscila.telecom10@gmail.com
```

---

## ❓ PERGUNTAS COMUNS

**P: Quanto tempo demora tudo?**
R: ~10-15 minutos (5 + 3 + 1 + 5 + testes)

**P: Preciso fazer isso toda vez?**
R: Não! Depois é automático. Qualquer push no GitHub faz deploy automático.

**P: Posso usar domínio próprio?**
R: Sim! No Vercel: Settings → Domains

**P: Os dados são salvos?**
R: Sim! Em PostgreSQL seguro no Railway

**P: Quanto custa?**
R: Vercel = Grátis | Railway = ~$5/mês

**P: Como recebo doações?**
R: Automático via Pix na chave: priscila.telecom10@gmail.com

---

## 🆘 PROBLEMAS COMUNS

### ❌ "Não consegui login no admin"
✅ Verifique:
- Email exato: `priscila.telecom10@gmail.com`
- Senha exata: `MetricFlow@Admin2025`
- Variáveis no Railway estão salvas?
- Aguarde novo deploy (5 min)

### ❌ "API não conecta"
✅ Verifique:
- `NEXT_PUBLIC_API_URL` está exato no Vercel?
- Railway backend está rodando?
- Aguarde novo deploy Vercel (5 min)
- Teste incógnito (limpa cache)

### ❌ "Banco não conecta"
✅ Verifique:
- DATABASE_URL está correto?
- init.sql foi executado?
- DBeaver consegue conectar?

### ❌ "Build fail no Vercel"
✅ Solução:
- Aguarde completo (pode demorar 10 min)
- Clique "Redeploy"
- Verifique Root Directory: `./frontend`

---

## 📝 CHECKLIST FINAL

```
FRONTEND:
☐ Deployado no Vercel
☐ URL acessível
☐ NEXT_PUBLIC_API_URL configurado
☐ Novo deploy feito

BACKEND:
☐ Deployado no Railway
☐ Variáveis de ambiente configuradas
☐ URL acessível
☐ Health check respondendo

BANCO DE DADOS:
☐ PostgreSQL criado no Railway
☐ init.sql executado
☐ Tabelas criadas

TESTES:
☐ Site público acessível
☐ Admin login funciona
☐ Dashboard carrega
☐ API responde
```

---

## 🎉 SUCESSO!

Se chegou até aqui, **MetricFlow está ONLINE em PRODUÇÃO!**

- ✅ Site público: `https://seu-projeto.vercel.app`
- ✅ Admin: `/admin` (login com credenciais acima)
- ✅ Banco de dados: PostgreSQL Railway
- ✅ API: Backend Express no Railway
- ✅ Pix: Configurado para receber doações

---

## 📞 SUPORTE

Repositório completo:
```
https://github.com/pridavid/metricflow-saas
```

Documentação técnica:
```
DEPLOYMENT.md
PRODUCTION_DEPLOYMENT.md
```

---

**Desenvolvido com ❤️ para MetricFlow**

**Qualquer dúvida, releia este guia ou acesse os arquivos .md do repositório!**