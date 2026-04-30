## Plano: Páginas Individuais Focadas em Cada Curso

### Objetivo
Criar uma página dedicada e enxuta para cada curso, com foco total em conversão. Sem distrações — direto ao ponto sobre o curso e a oferta. Ideal para campanhas de tráfego pago focadas em um único produto.

### URLs Propostas

- `/cursos/dna` — Med em Casa 2026 — DNA
- `/cursos/dna-revisoes` — Med em Casa 2026 — DNA + Revisões
- `/cursos/sinapses` — Med em Casa 2026 — SINAPSES
- `/cursos/sinapses-revisoes` — Med em Casa 2026 — SINAPSES + Revisões

A landing page principal (`/`) continua intacta.

### Estrutura Enxuta da Página (foco em conversão)

Cada página individual conterá apenas o essencial:

1. **Header simplificado** — logo + botão de compra (sem links de navegação que tirem o foco)
2. **Hero do curso** — nome do curso, promessa principal, CTA primário para checkout
3. **O que você vai receber** — card grande de destaque com:
   - Lista completa de benefícios/features do curso
   - Preço cheio riscado, parcelamento, desconto
   - Selo de "Mais popular" (apenas no DNA + Revisões)
   - CTA principal de compra
4. **Como funciona o curso** — bloco curto explicando o formato (aulas ao vivo/gravadas, material, suporte) — específico de cada curso
5. **Garantia e dúvidas rápidas** — FAQ reduzido com apenas as perguntas mais relacionadas à decisão de compra (3-4 itens, ex: "como acesso?", "tem garantia?", "como tirar dúvidas?")
6. **CTA final** — bloco de fechamento com botão de compra grande + botão de WhatsApp para quem ainda tem dúvidas
7. **Footer minimalista** — apenas direitos autorais e contato

Não terá: seção sobre o professor, método BC, comparação entre cursos, depoimentos extensos, ou tudo o que é "institucional". Quem chega via anúncio já está interessado no curso específico.

### Arquivos a Criar

1. **`src/data/courses.ts`** — fonte única dos dados dos 4 cursos (slug, título, subtítulo, descrição curta, features, preços, checkout URL, formato do curso). Os dados hoje vivem dentro de `CoursesSection.tsx` e serão extraídos para reutilização.

2. **`src/pages/CoursePage.tsx`** — página dinâmica que lê o `slug` da URL e renderiza o conteúdo do curso correspondente. Atualiza `document.title` para SEO.

3. **`src/components/course/CourseHero.tsx`** — hero focado em um único curso.

4. **`src/components/course/CourseOfferCard.tsx`** — card grande com features, preço e CTA de compra.

5. **`src/components/course/CourseHowItWorks.tsx`** — bloco "como funciona" específico do curso.

6. **`src/components/course/CourseFAQ.tsx`** — FAQ enxuto com 3-4 perguntas focadas em compra.

7. **`src/components/course/CourseHeader.tsx`** — header simplificado (logo + botão de compra).

8. **`src/components/course/CourseFooter.tsx`** — footer minimalista.

### Arquivos a Modificar

1. **`src/App.tsx`** — adicionar a rota `/cursos/:slug` antes do catch-all.

2. **`src/components/CoursesSection.tsx`** — refatorar para ler os cursos de `src/data/courses.ts` (sem mudança visual).

### Como Usar nos Anúncios

- Anúncio do DNA → `https://seusite.com/cursos/dna`
- Anúncio do DNA + Revisões → `https://seusite.com/cursos/dna-revisoes`
- Anúncio do SINAPSES → `https://seusite.com/cursos/sinapses`
- Anúncio do SINAPSES + Revisões → `https://seusite.com/cursos/sinapses-revisoes`

### Notas Técnicas

- `BrowserRouter` já está configurado, então as URLs limpas funcionam.
- Slug inválido cai automaticamente no `NotFound`.
- Cada página atualiza `<title>` e `meta[name="description"]` via `useEffect`.
- WhatsApp do CTA final usa o número já configurado no projeto (+5519996212930).

Confirma que posso seguir com essa estrutura enxuta?
