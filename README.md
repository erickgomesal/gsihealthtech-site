# GSI HealthTech Site

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

| Classe | Uso recomendado | Altura mínima |
| --- | --- | --- |
| `.btn-lg` | Hero e CTAs de maior destaque (primeira dobra) | 54px (48px no mobile) |
| `.btn-md` | CTAs de seções importantes, como contato | 46px |
| `.btn-sm` | Ações internas, dentro de seções e cards | 38px |

Toda classe de tamanho é combinada com uma variante de cor (`.btn-primary`, `.btn-secondary` ou `.btn-ghost`), por exemplo: `class="btn btn-lg btn-primary"`.

## Próximas evoluções

- Inserir logotipo oficial da GSI HealthTech.
- Criar área de projetos e captação.
- Criar formulário de contato.
- Preparar SEO básico e favicon.
- Integrar futuramente com sistema web.
