# RegenFlix - Plataforma de Aprendizado Regenerativo

Uma plataforma completa de educação online focada em regeneração, sustentabilidade e práticas ecológicas. RegenFlix conecta pessoas ao redor do mundo em uma jornada de transformação positiva através do conhecimento especializado.

## 🌱 Visão Geral

RegenFlix é uma plataforma educacional que democratiza o acesso ao conhecimento sobre:
- Agricultura Regenerativa
- Permacultura
- Sustentabilidade Urbana
- Bioconstrução
- Sistemas Agroflorestais
- Economia Regenerativa
- E muito mais...

## ✨ Funcionalidades Principais

### 🎓 **Plataforma de Aprendizado**
- **Cursos Online**: Cursos estruturados com módulos e aulas
- **Vídeo Player**: Player customizado com recursos avançados
- **RegenPedia**: Biblioteca digital com PDFs e livros especializados
- **Certificados**: Certificados oficiais de conclusão
- **Progresso de Aprendizado**: Acompanhamento detalhado do progresso

### 👤 **Experiência do Usuário**
- **Perfil Personalizado**: Dashboard com estatísticas e conquistas
- **Minha Biblioteca**: Organização pessoal de conteúdos
- **Sistema de Favoritos**: Salvar conteúdos preferidos
- **Notas e Marcadores**: Anotações pessoais durante o aprendizado
- **Modo Escuro/Claro**: Interface adaptável às preferências

### 🛒 **RegenMarket**
- **Loja Integrada**: Produtos sustentáveis e cursos individuais
- **Carrinho de Compras**: Sistema completo de e-commerce
- **Múltiplas Formas de Pagamento**: Pix, cartão, boleto
- **Gestão de Pedidos**: Histórico e acompanhamento

### 📊 **Painel Administrativo**
- **Dashboard Completo**: Métricas e KPIs em tempo real
- **Gestão de Conteúdo**: CRUD completo para cursos, vídeos e PDFs
- **Gestão de Usuários**: Administração de contas e assinaturas
- **Relatórios**: Analytics detalhados da plataforma
- **Configurações**: Personalização da plataforma

## 🚀 Como Executar

### **Pré-requisitos**
- Node.js 18+
- Bun (recomendado) ou npm/yarn

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/regenflix.git

# Entre no diretório
cd regenflix

# Instale as dependências
bun install

# Execute em modo de desenvolvimento
bun run dev
```

### **Scripts Disponíveis**
```bash
bun run dev      # Desenvolvimento com Turbopack
bun run build    # Build para produção
bun run start    # Servidor de produção
bun run lint     # Linting com ESLint
bun run format   # Formatação com Prettier
```

## 📱 Páginas Implementadas

### **Públicas**
- `/` - Landing page com hero section e conteúdo em destaque
- `/sobre` - Sobre a empresa, equipe e valores
- `/contato` - Formulário de contato e informações
- `/login` - Login e cadastro de usuários
- `/planos` - Planos de assinatura com comparação

### **Autenticadas**
- `/home` - Dashboard personalizado do usuário
- `/cursos` - Catálogo completo de cursos
- `/cursos/[id]` - Página detalhada do curso com currículo
- `/my-library` - Biblioteca pessoal com filtros avançados
- `/regenpedia` - Biblioteca digital de PDFs e livros
- `/assistir/[id]` - Player de vídeo com recursos avançados
- `/ler/[id]` - Visualizador de PDF com marcadores
- `/perfil` - Perfil do usuário com conquistas
- `/loja` - RegenMarket com produtos sustentáveis
- `/carrinho` - Carrinho de compras completo

### **Administrativas**
- `/admin` - Dashboard administrativo com métricas
- Painéis de gestão para usuários, conteúdo e relatórios

## 🎨 Design System Completo

### **Paleta de Cores Regenerativa**
```css
/* Cores Primárias (Natural & Calming) */
--primary-300: #4a7c59 (Soft Forest Green)
--primary-200: #7fb069 (Light Moss Green)  
--primary-100: #d6e3dd (Translucent Aqua Green)

/* Neutros (Base & Text) */
--neutral-cream: #f5f5dc (Soft Cream Beige)
--neutral-dark-navy: #2c3e50 (Dark Navy Blue)
--neutral-light-gray: #ecf0f1 (Near-White Light Gray)

/* Acentos (Vibrant & Specific) */
--accent-gold: #ffd700 (Soft Gold)
--accent-coral: #ff6b6b (Soft Coral)
--accent-sky-blue: #5bc0eb (Light Sky Blue)
```

### **Componentes UI Implementados**
- ✅ **Button**: 3 variantes × 3 tamanhos com estados
- ✅ **Card**: Container elegante com sombras suaves
- ✅ **Input**: Campos estilizados com foco
- ✅ **Modal**: Overlays com animações suaves
- ✅ **Toast**: Sistema de notificações
- ✅ **Badge**: Indicadores coloridos por contexto
- ✅ **ProgressBar**: Barras de progresso animadas
- ✅ **LoadingSpinner**: Indicadores de carregamento

## 🏗️ Arquitetura Técnica

### **Stack Moderno**
- **Framework**: Next.js 15 (App Router)
- **Linguagem**: TypeScript para type safety
- **Styling**: Tailwind CSS com design system customizado
- **Gerenciador**: Bun para performance otimizada
- **Componentes**: React 19 com hooks modernos

### **Estrutura Organizada**
```
src/
├── app/                    # App Router (Next.js 15)
│   ├── assistir/[videoId]/ # Player de vídeos
│   ├── carrinho/           # E-commerce completo
│   ├── contato/            # Página de contato
│   ├── cursos/             # Catálogo de cursos
│   ├── home/               # Dashboard do usuário
│   ├── ler/[pdfId]/        # Visualizador de PDFs
│   ├── loja/               # RegenMarket
│   ├── login/              # Autenticação
│   ├── my-library/         # Biblioteca pessoal
│   ├── perfil/             # Perfil do usuário
│   ├── planos/             # Planos de assinatura
│   ├── regenpedia/         # Biblioteca digital
│   ├── sobre/              # Sobre a empresa
│   └── admin/              # Painel administrativo
├── components/             # Componentes reutilizáveis
│   ├── content/            # Cards e elementos de conteúdo
│   ├── forms/              # Formulários especializados
│   ├── layout/             # Header, Footer, Navigation
│   ├── providers/          # Context providers (Theme, Toast)
│   └── ui/                 # Componentes base do design system
└── lib/                    # Utilitários e helpers
```

## 🎯 Funcionalidades Implementadas

### ✅ **Sistema de Aprendizado Completo**
- Player de vídeo com controles customizados
- Visualizador de PDF com marcadores e notas
- Sistema de progresso e acompanhamento
- Biblioteca pessoal com filtros avançados
- Certificados e conquistas

### ✅ **E-commerce Integrado (RegenMarket)**
- Catálogo de produtos sustentáveis
- Carrinho de compras com cupons
- Sistema de checkout simplificado
- Produtos recomendados

### ✅ **Experiência do Usuário Premium**
- Dashboard personalizado
- Perfil com estatísticas detalhadas
- Sistema de favoritos e listas
- Modo escuro/claro
- Interface responsiva

### ✅ **Painel Administrativo**
- Dashboard com métricas em tempo real
- Gestão completa de conteúdo
- Relatórios e analytics
- Configurações da plataforma

## 🌟 Destaques Técnicos

### **Performance Otimizada**
- Next.js 15 com App Router para SSR/SSG
- Turbopack para desenvolvimento rápido
- Componentes otimizados com React 19
- Lazy loading e code splitting

### **Design System Profissional**
- Paleta de cores cuidadosamente selecionada
- Tipografia hierárquica (Montserrat + Open Sans)
- Componentes consistentes e reutilizáveis
- Animações suaves e transições

### **Experiência do Desenvolvedor**
- TypeScript para type safety
- ESLint + Prettier para código limpo
- Estrutura modular e escalável
- Documentação abrangente

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### **Padrões de Código**
- Use TypeScript para type safety
- Siga as convenções do ESLint e Prettier
- Componentes funcionais com hooks
- Tailwind CSS para estilização
- Componentes pequenos e reutilizáveis

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe RegenFlix

- **Dr. Ana Silva** - Fundadora & Especialista em Agroecologia
- **Carlos Mendoza** - Especialista em Permacultura  
- **Maria Santos** - Especialista em Sustentabilidade Urbana
- **Prof. João Oliveira** - Especialista em Sistemas Agroflorestais

## 📞 Contato

- **Email**: contato@regenflix.com
- **Website**: https://regenflix.com
- **LinkedIn**: [RegenFlix](https://linkedin.com/company/regenflix)
- **Instagram**: [@regenflix](https://instagram.com/regenflix)

---

**RegenFlix** - Transformando o mundo através do conhecimento regenerativo 🌱

*Plataforma completa desenvolvida com Next.js 15, TypeScript e Tailwind CSS*
