# AGIJ FERT — Site Institucional Pronto para GitHub Pages

Site institucional da **AGIJ FERT**, consultoria agronômica de **Sorriso – MT**, com atendimento em Sorriso e toda a região, voltada a desafios como baixa produtividade e condições do solo.

- **Imagens integradas:** todas as fotografias (mudas no solo, rega da muda, planta de soja no campo e colheita aérea) já estão organizadas e vinculadas nas respectivas seções.
- **Tecnologia:** HTML5 semântico, CSS3 e JavaScript puro (sem necessidade de compilação ou backend).
- **Canal de contato:** WhatsApp direto `(66) 99651-2455` (link internacional: `5566996512455`).
- **Pronto para GitHub Pages:** Todos os caminhos de assets e links são relativos, funcionando perfeitamente na raiz ou em subdiretórios.

---

## 📁 Estrutura dos Arquivos

```text
├── index.html                   # Página principal com todas as seções e imagens
├── README.md                    # Documentação e instruções de publicação
├── agij-fert-site.zip           # Pacote ZIP completo pronto para download e extração
└── assets/
    ├── css/
    │   └── styles.css           # Estilos visuais, cores da marca e responsividade
    ├── js/
    │   └── main.js              # Interações, scrollspy, menu mobile e WhatsApp
    └── images/
        ├── mudas-solo.jpg       # Seção principal / Hero (destaque 4:3)
        ├── regar-da-muda.jpg    # Seção Sobre a AGIJ FERT (4:3)
        ├── planta-de-soja.jpg   # Seção Como Ajudamos (lateral 3:4)
        └── colheita-aerea.jpg   # Seção "Produzindo abaixo do esperado" (16:9)
```

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

### Passo 1: Criar o Repositório no GitHub
1. Acesse [github.com](https://github.com) e entre na sua conta.
2. Clique no botão verde **"New"** (ou **"Novo repositório"**).
3. Nomeie o repositório como `agij-fert-site` (ou `nome-de-sua-preferencia`).
4. Deixe como **Public** (Público) e **não** marque "Add a README" (pois este pacote já possui o README pronto).
5. Clique em **"Create repository"**.

### Passo 2: Subir os Arquivos para o GitHub

#### Opção A — Pelo navegador (Mais simples, sem instalar nada)
1. Na página do repositório recém-criado, clique em **"uploading an existing file"** (enviar arquivos existentes).
2. Descompacte o arquivo `agij-fert-site.zip` no seu computador.
3. Arraste todos os itens descompactados (`index.html`, pasta `assets`, `README.md`) para a página do GitHub.
4. Clique em **"Commit changes"** (Confirmar alterações).

#### Opção B — Pelo Git no terminal
```bash
git init
git add .
git commit -m "Site institucional AGIJ FERT com imagens integradas"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/agij-fert-site.git
git push -u origin main
```
*(Substitua `SEU-USUARIO` pelo seu nome de usuário no GitHub).*

### Passo 3: Ativar o GitHub Pages
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment > Source**, selecione **Deploy from a branch**.
4. Em **Branch**, selecione `main` e a pasta `/ (root)`.
5. Clique em **Save**.
6. Aguarde cerca de 1 a 2 minutos. O GitHub exibirá o link público no topo da tela:
   `https://SEU-USUARIO.github.io/agij-fert-site/`

---

## 🌾 Informações da Empresa (Configurações)

- **Nome da Empresa:** AGIJ FERT
- **Localização:** Sorriso – Mato Grosso
- **Área de Atuação:** Sorriso e toda a região
- **Atividade Principal:** Consultoria para fazendas, voltada a desafios como baixa produtividade e condições inadequadas do solo.
- **WhatsApp Visível:** `(66) 99651-2455`
- **Link Internacional do WhatsApp:** `https://wa.me/5566996512455`

---

## 🖼️ Como Alterar ou Adicionar Fotos Futuramente

As fotos já estão perfeitamente configuradas e integradas. Caso deseje substituir qualquer uma delas no futuro:
1. Basta salvar sua nova foto na pasta `assets/images/` com o mesmo nome:
   - `mudas-solo.jpg` (Hero)
   - `regar-da-muda.jpg` (Sobre)
   - `planta-de-soja.jpg` (Como ajudamos)
   - `colheita-aerea.jpg` (Chamada)
2. Formatos aceitos: `.jpg`, `.jpeg`, `.png` ou `.webp`.
3. O código detecta automaticamente e atualiza a exibição.
