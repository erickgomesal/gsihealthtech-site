# GSI HealthTech Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/5807f664-4e9e-44ca-a15d-a64648a6cc6f/deploy-status)](https://app.netlify.com/projects/bejewelled-kataifi-a0bb62/deploys)

Site institucional da GSI HealthTech, marca principal de saúde digital, gestão pública e inteligência territorial para redes públicas de saúde.

## Arquitetura do ecossistema

- **GSI HealthTech** = assinatura institucional e ecossistema (marca guarda-chuva).
- **GSI ONE** = sistema/plataforma com login (ambiente operacional para usuários autorizados — equipes assistenciais, gestão e administração). O login ainda não é funcional neste protótipo; o conceito está documentado nos textos das páginas.
- **Avança Hospital** = programa/case de implantação (demonstração da metodologia aplicada à modernização hospitalar, não é um sistema ou produto).

## Estrutura dos arquivos

```text
index.html            (GSI HealthTech — página institucional principal, com a seção "Ecossistema GSI HealthTech")
gsi-one.html           (GSI ONE — página do sistema/plataforma com login)
avanca-hospital.html   (Avança Hospital — página do programa/case de implantação)
style.css
script.js
assets/
  favicon.svg          (favicon provisório)
  og-gsihealthtech.svg (imagem provisória de compartilhamento/Open Graph)
README.md
```

- `index.html` apresenta a marca GSI HealthTech, com seções resumidas de GSI ONE e Avança Hospital que linkam para as páginas completas.
- `gsi-one.html` é a página dedicada ao sistema/plataforma com login, com hero, painel próprio e seções de módulos, indicadores, observatório, governança e implantação.
- `avanca-hospital.html` é a página dedicada ao programa/case de implantação, com hero, painel próprio e seções de eixos estratégicos, fluxos reorganizados, faturamento SUS, turismo seguro e captação de recursos.
- As três páginas compartilham o mesmo `style.css` e `script.js` e seguem o mesmo [Padrão visual da família GSI](#padrão-visual-da-família-gsi) — header, hero com gradiente escuro, painel tecnológico lateral, escala de botões e cards.

## Como testar localmente

1. Baixe ou copie a pasta do projeto.
2. Mantenha `index.html`, `gsi-one.html`, `avanca-hospital.html`, `style.css` e `script.js` na mesma pasta.
3. Abra o arquivo `index.html` no navegador e navegue pelo menu até "GSI ONE" e "Avança Hospital" para acessar as páginas internas.

## Publicação no Netlify

1. Crie um repositório no GitHub, por exemplo: `gsihealthtech-site`.
2. Envie estes arquivos para o repositório.
3. Conecte o repositório ao Netlify.
4. Como é um site estático, não é necessário configurar build command.
5. Use como diretório de publicação a raiz do projeto.

## Deploy

- O site está publicado no Netlify.
- Projeto Netlify: `bejewelled-kataifi-a0bb62`.
- Link temporário: https://bejewelled-kataifi-a0bb62.netlify.app
- Domínio definitivo previsto: https://gsihealthtech.com.br
- O deploy é feito automaticamente a partir da branch `main` do GitHub.

## Padrão visual da família GSI

A hero section atual da GSI HealthTech (gradiente escuro institucional, painel lateral com métricas, tipografia forte e os 3 botões de ação) é a **referência visual oficial** para as páginas da família GSI.

- **GSI HealthTech** (`index.html`): usa o padrão completo (hero, header, cards, painel tecnológico).
- **GSI ONE** (`gsi-one.html`): reaproveita o mesmo padrão visual em página própria, com foco em sistema/plataforma com login (módulos, fluxos assistenciais, indicadores).
- **Avança Hospital** (`avanca-hospital.html`): reaproveita o mesmo padrão visual em página própria, com foco em programa/case de implantação (diagnóstico, governança, resultados).

Elementos que compõem esse sistema visual e devem ser mantidos em futuras páginas:

- Paleta de cores (`--blue-deep`, `--blue-main`, `--teal`, `--green`, `--gold`, neutros).
- Escala padronizada de botões (`.btn-sm` / `.btn-md` / `.btn-lg` combinadas com `.btn-primary` / `.btn-secondary` / `.btn-ghost`).
- Cards com sombra leve, borda superior colorida e hover sutil.
- Painel tecnológico (estilo `.hero-panel`) para destacar métricas e indicadores.

### Escala de botões

| Classe | Altura | Padding horizontal | Fonte | Uso recomendado |
| --- | --- | --- | --- | --- |
| `.btn-lg` | 46px | 24px | 0.97rem | Somente botões principais da hero |
| `.btn-md` | 43px | 20px | 0.92rem | CTAs intermediários, botão de contato secundário e CTAs finais |
| `.btn-sm` | 38px | 16px | 0.85rem | Cards, seções internas e CTAs discretos |

Toda classe de tamanho é combinada com uma variante de cor (`.btn-primary`, `.btn-secondary` ou `.btn-ghost`), por exemplo: `class="btn btn-lg btn-primary"`.

Regras de uso:

- `.btn-lg` deve ser usado apenas na hero — nunca em cards ou seções internas.
- `.btn-sm` é a classe preferencial para botões dentro de cards e seções internas.
- O botão "Contato" do header usa estilo próprio (`.nav-cta`, fora do sistema `.btn`), mas segue proporção equivalente ao `.btn-md`.

## Identidade e compartilhamento

- `assets/favicon.svg` é o favicon provisório do site (composição em SVG com as iniciais "GSI" sobre o gradiente institucional azul escuro/teal). Está referenciado via `<link rel="icon">` nas três páginas.
- `assets/og-gsihealthtech.svg` é a imagem provisória usada nas tags `og:image` e `twitter:image`, exibida ao compartilhar o site no WhatsApp, LinkedIn, Facebook e similares.
- As três páginas (`index.html`, `gsi-one.html`, `avanca-hospital.html`) possuem SEO básico (title e description únicos por página), Open Graph completo (`og:type`, `og:locale`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`) e Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
- Esses arquivos são provisórios: futuramente devem ser substituídos por versões oficiais da identidade visual da marca (logotipo definitivo e imagem de compartilhamento em alta fidelidade).

## Próximas evoluções

- Inserir logotipo oficial da GSI HealthTech.
- Criar área de projetos e captação.
- Criar formulário de contato.
- Integrar futuramente com sistema web.
