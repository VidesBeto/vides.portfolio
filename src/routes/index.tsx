import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Dribbble, Instagram, Linkedin, Mail, Menu, Play, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const projects = [
  { n: "01", title: "Raiz Urbana", type: "Estamparia • Streetwear", year: "2025", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=85", tone: "rust" },
  { n: "02", title: "Corpo & Movimento", type: "Design de produto • Moda", year: "2024", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1000&q=85", tone: "olive" },
  { n: "03", title: "Frequência", type: "Direção de arte • Identidade", year: "2024", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=85", tone: "dark" },
  { n: "04", title: "Cidade em Camadas", type: "Estampa • Pesquisa visual", year: "2023", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=85", tone: "cream" },
];

const services = [
  ["01", "Design de estampas", "Artes autorais, rapport, grafismos e coleções com personalidade."],
  ["02", "Design gráfico", "Conceitos visuais que conectam marca, cultura e público."],
  ["03", "Design de produto", "Pesquisa, desenvolvimento e linguagem visual para produtos."],
  ["04", "Direção de arte", "Universos visuais consistentes do conceito à entrega final."],
];

function Index() {
  return (
    <main className="portfolio">
      <nav className="nav-shell">
        <a className="brand" href="#home" aria-label="Bruno Vides início"><span className="brand-mark">✳</span><span>BRUNO<br/>VIDES<span className="brand-dot">.</span></span></a>
        <div className="nav-links"><a href="#sobre">SOBRE</a><a href="#servicos">SERVIÇOS</a><a href="#projetos">PROJETOS</a><a href="#contato">CONTATO</a></div>
        <a className="nav-cta" href="#contato">VAMOS CONVERSAR <ArrowUpRight size={15}/></a>
        <a className="mobile-menu" href="#projetos" aria-label="Ver projetos"><Menu size={23}/></a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-star">✳</span> DESIGNER GRÁFICO & DE ESTAMPAS</div>
          <h1>IDEIAS QUE<br/>VIRAM <em>FORMA.</em><br/>DESIGN COM<br/>IDENTIDADE<span className="accent-dot">.</span></h1>
          <p className="hero-lead">Crio estampas, imagens e experiências visuais que conectam cultura, criatividade e produto.</p>
          <div className="hero-actions"><a className="button-primary" href="#projetos">VER PROJETOS <ArrowRight size={17}/></a><a className="text-link" href="#sobre">CONHEÇA MEU TRABALHO <ArrowDownRight size={16}/></a></div>
          <div className="hero-note"><span className="note-stars">✳ ✳ ✳</span><span>DESIGN AUTORAL<br/>COM INTENÇÃO E PERSONALIDADE</span><span className="note-line"/></div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="sun-disc"><span>BV</span></div>
          <div className="hero-image"><img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85" alt="Instalação artística com formas e cores" /></div>
          <div className="art-sticker sticker-top">IDEIAS<br/>EM MOVIMENTO</div>
          <div className="art-sticker sticker-bottom"><Asterisk size={31}/><span>CRIATIVIDADE<br/>QUE CONECTA</span></div>
          <span className="hero-cross cross-one">✳</span><span className="hero-cross cross-two">✦</span>
          <div className="vertical-label">RIO DE JANEIRO · BRASIL</div>
        </div>
      </section>

      <section className="intro-band" id="sobre">
        <div className="intro-photo"><img src="https://images.unsplash.com/photo-1455390582262-044cdeal277a?auto=format&fit=crop&w=900&q=85" alt="Mesa de trabalho criativo" /><span className="photo-label">PROCESSO CRIATIVO / 001</span></div>
        <div className="intro-copy"><div className="section-kicker light">UM POUCO SOBRE MIM</div><h2>OLÁ, SOU BRUNO<br/>VIDES<span className="rust-dot">.</span></h2><p>Designer com experiência em criação de estampas e desenvolvimento visual. Meu trabalho une repertório cultural, pesquisa e olhar gráfico para transformar ideias em projetos com presença.</p><a className="intro-link" href="#contato">VAMOS CRIAR ALGO JUNTOS <ArrowUpRight size={16}/></a></div>
        <div className="intro-facts"><div><span className="fact-symbol">✳</span><span>BASEADO NO<br/><b>RIO DE JANEIRO</b></span></div><div><span className="fact-symbol">↗</span><span>ATUAÇÃO<br/><b>REMOTA / BRASIL</b></span></div><div><span className="fact-symbol">✦</span><span>ABERTO A<br/><b>COLABORAÇÕES</b></span></div></div>
      </section>

      <section className="services-section" id="servicos">
        <div className="section-heading"><div><div className="section-kicker">O QUE EU FAÇO</div><h2>IDEIA, PESQUISA<br/>E <em>EXPRESSÃO.</em></h2></div><p>Do primeiro rabisco à arte final: soluções visuais pensadas para contar histórias e criar conexão.</p></div>
        <div className="service-grid">{services.map(([n, title, desc]) => <article className="service-card" key={n}><div className="service-top"><span>{n}</span><ArrowUpRight size={19}/></div><div className="service-icon">{n === "01" ? <Asterisk/> : n === "02" ? <Sparkles/> : n === "03" ? <span className="code-symbol">✳</span> : <span className="art-symbol">◉</span>}</div><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </section>

      <section className="skills-band"><div className="skills-list"><div className="section-kicker light">MEU REPERTÓRIO</div><h2>FERRAMENTAS<br/>E <em>PROCESSO.</em></h2><p>Uma mistura de técnica, curiosidade e atenção aos detalhes para levar cada projeto mais longe.</p><div className="skill-tags"><span>ESTAMPARIA</span><span>ILUSTRAÇÃO</span><span>IDENTIDADE VISUAL</span><span>COMPOSIÇÃO</span><span>DESENVOLVIMENTO DE PRODUTO</span><span>DIREÇÃO DE ARTE</span></div></div><div className="skills-graphic"><div className="graphic-ring ring-a"/><div className="graphic-ring ring-b"/><div className="graphic-ring ring-c"/><span className="graphic-star">✳</span><span className="graphic-word">IDEIA<br/>→ FORMA</span><span className="graphic-caption">EXPERIMENTAR / REFINAR / CRIAR</span></div></section>

      <section className="projects-section" id="projetos"><div className="projects-heading"><div><div className="section-kicker">SELEÇÃO DE TRABALHOS</div><h2>PROJETOS EM <em>DESTAQUE.</em></h2></div><span className="project-count">01 — 04 / PORTFÓLIO</span></div><div className="project-grid">{projects.map((p) => <a className={"project-card " + p.tone} href="#contato" key={p.n}><div className="project-image"><img src={p.image} alt={p.title} loading="lazy"/><span className="project-number">{p.n}</span><span className="project-open"><ArrowUpRight size={21}/></span></div><div className="project-meta"><div><h3>{p.title}</h3><p>{p.type}</p></div><span>{p.year}</span></div></a>)}</div><p className="project-disclaimer">Imagens ilustrativas para esta prévia visual. Podemos substituir pelas suas artes e projetos reais.</p></section>

      <section className="quote-section"><div className="quote-mark">“</div><blockquote>Design bom não é só o que chama atenção. É o que carrega uma ideia, cria conexão e permanece na memória.</blockquote><div className="quote-credit"><span className="quote-line"/> UMA VISÃO SOBRE CRIAR <span className="quote-seal">BV<br/><small>DESIGN</small></span></div></section>

      <section className="contact-band" id="contato"><div><div className="section-kicker light">TEM UM PROJETO EM MENTE?</div><h2>VAMOS FAZER<br/>ACONTECER<span>.</span></h2></div><div className="contact-copy"><p>Se você procura um parceiro criativo para desenvolver estampas, produtos ou identidade visual, vamos conversar.</p><a className="contact-button" href="mailto:contato@brunovides.com.br">ENTRE EM CONTATO <ArrowUpRight size={18}/></a><span className="contact-small">NOVAS IDEIAS SÃO SEMPRE BEM-VINDAS.</span></div><div className="contact-orbit"><div/><div/><span>✳</span></div></section>

      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">✳</span><span>BRUNO<br/>VIDES<span className="brand-dot">.</span></span></a><span className="footer-note">DESIGN GRÁFICO · ESTAMPARIA · PRODUTO</span><div className="footer-social"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={17}/></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:contato@brunovides.com.br" aria-label="E-mail"><Mail size={17}/></a></div><span className="copyright">© 2026 BRUNO VIDES</span></footer>
    </main>
  );
}
