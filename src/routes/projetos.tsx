import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Asterisk } from "lucide-react";

export const Route = createFileRoute("/projetos")({ component: ProjectsPage });

const projects = [
  { number: "01", title: "Raiz Urbana", category: "ESTAMPARIA / STREETWEAR", year: "2025", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1400&q=85", description: "Pesquisa gráfica e linguagem visual para uma coleção urbana." },
  { number: "02", title: "Corpo & Movimento", category: "DESIGN DE PRODUTO / MODA", year: "2024", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=85", description: "Exploração de formas, textura e composição aplicadas ao vestuário." },
  { number: "03", title: "Frequência", category: "IDENTIDADE / DIREÇÃO DE ARTE", year: "2024", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85", description: "Conceito visual com ritmo, contraste e personalidade." },
  { number: "04", title: "Cidade em Camadas", category: "ESTAMPARIA / PESQUISA VISUAL", year: "2023", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1400&q=85", description: "Referências da paisagem urbana traduzidas em grafismos." },
  { number: "05", title: "Forma & Matéria", category: "DESIGN GRÁFICO / EXPERIMENTAL", year: "2023", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1400&q=85", description: "Estudo de cor, materialidade e composição abstrata." },
  { number: "06", title: "Arquivo Visual", category: "ART DIRECTION / EDITORIAL", year: "2022", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=85", description: "Curadoria de referências e construção de um universo visual." },
];

function ProjectsPage() {
  return <main className="portfolio projects-page">
    <nav className="nav-shell">
      <Link className="brand" to="/" aria-label="Bruno Vides início"><span className="brand-mark">✳</span><span>BRUNO<br/>VIDES<span className="brand-dot">.</span></span></Link>
      <div className="nav-links"><a href="/#sobre">SOBRE</a><a href="/#servicos">SERVIÇOS</a><Link to="/projetos" className="active">PROJETOS</Link><a href="/#contato">CONTATO</a></div>
      <a className="nav-cta" href="/#contato">VAMOS CONVERSAR <ArrowUpRight size={15}/></a>
      <Link className="mobile-menu" to="/" aria-label="Voltar ao início"><ArrowLeft size={22}/></Link>
    </nav>
    <header className="projects-page-hero">
      <div className="section-kicker"><Asterisk size={15}/> PORTFÓLIO / SELEÇÃO DE TRABALHOS</div>
      <h1>IDEIAS QUE<br/>GANHAM <em>FORMA.</em></h1>
      <div className="projects-page-intro"><p>Uma seleção de projetos em estamparia, design gráfico e desenvolvimento visual. Cada trabalho começa com pesquisa e se transforma em uma solução com identidade.</p><span>RIO DE JANEIRO · BRASIL<br/>DESIGN / ESTAMPARIA / PRODUTO</span></div>
      <div className="projects-page-rule"><span>PROJETOS SELECIONADOS</span><span>2022 — 2025</span></div>
    </header>
    <section className="projects-page-grid">{projects.map(p=><article className="projects-page-card" key={p.number}><div className="projects-page-image"><img src={p.image} alt={p.title} loading="lazy"/><span className="projects-page-number">{p.number}</span><span className="projects-page-arrow"><ArrowUpRight size={22}/></span></div><div className="projects-page-meta"><div><span>{p.category}</span><h2>{p.title}</h2><p>{p.description}</p></div><small>{p.year}</small></div></article>)}</section>
    <p className="projects-page-note">Esta é uma prévia de layout com imagens ilustrativas. Os projetos e imagens serão substituídos pelos seus trabalhos reais.</p>
    <section className="projects-page-cta"><div><span className="section-kicker light">TEM UM PROJETO EM MENTE?</span><h2>VAMOS CRIAR<br/>ALGO <em>ÚNICO.</em></h2></div><a className="button-primary" href="/#contato">FALE COMIGO <ArrowUpRight size={17}/></a></section>
    <footer className="footer"><Link className="brand footer-brand" to="/"><span className="brand-mark">✳</span><span>BRUNO<br/>VIDES<span className="brand-dot">.</span></span></Link><span className="footer-note">DESIGN GRÁFICO · ESTAMPARIA · PRODUTO</span><span className="copyright">© 2026 BRUNO VIDES</span></footer>
  </main>;
}
