import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Asterisk, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/projetos")({ component: ProjectsPage });

const collections = [
  { id: "3palavrinhas", title: "3 Palavrinhas", category: "MOCHILAS & KITS INFANTIS", intro: "Desenvolvimento visual de produtos infantis, com cores, personagens e aplicações em mochilas e lancheiras.", cover: "/Imagens/3palavrinhas/Menino com Mochila Colorida Educativa.png", images: ["/Imagens/3palavrinhas/Menino com Mochila Colorida Educativa.png", "/Imagens/3palavrinhas/TP28140D_copiar.jpg_5a24ef3d.jpg", "/Imagens/3palavrinhas/TP28141L_copiar.jpg_44981789.jpg"] },
  { id: "demon-slayer", title: "Demon Slayer", category: "LICENCIADOS / MOCHILAS", intro: "Artes e aplicações para uma linha de produtos inspirada no universo de ação e aventura.", cover: "/Imagens/Demon Slayer/Retrato Comercial com Mochila Demon Slayer.png", images: ["/Imagens/Demon Slayer/Retrato Comercial com Mochila Demon Slayer.png", "/Imagens/Demon Slayer/DE28212_copiar.jpg_43879a98.jpg", "/Imagens/Demon Slayer/DE28213.jpg_3f9fd2c2.jpg", "/Imagens/Demon Slayer/DE26256_PT_copiar.jpg_7fcb2826.jpg", "/Imagens/Demon Slayer/DE26258_copiar.jpg_aea49c89.jpg", "/Imagens/Demon Slayer/DE26259_copiar.jpg_dfce5942.jpg"] },
  { id: "galinha", title: "Galinha Pintadinha", category: "INFANTIL / PRODUTO", intro: "Desenvolvimento de estampas e apresentação de produtos para o público infantil.", cover: "/Imagens/Galinha/Menina com Mochila da Galinha Pintadinha.png", images: ["/Imagens/Galinha/Menina com Mochila da Galinha Pintadinha.png", "/Imagens/Galinha/6fcc2223-841a-4742-82c8-bb73d125c66d.jpg", "/Imagens/Galinha/GP28270D_copiar.jpg_a0535bb9.jpg"] },
  { id: "hulk", title: "Hulk", category: "LICENCIADOS / MOCHILAS", intro: "Composição gráfica e desenvolvimento de linha de mochilas com presença e impacto visual.", cover: "/Imagens/Hulk/Homem com Mochila HULK Preta.png", images: ["/Imagens/Hulk/Homem com Mochila HULK Preta.png", "/Imagens/Hulk/Mochila Hulk Verde Oliva em Estúdio.png", "/Imagens/Hulk/Bolsa Hulk Marvel em Fundo Bege.png", "/Imagens/Hulk/Estojo Marvel Hulk Incredible em Estúdiorayele.png", "/Imagens/Hulk/AG28114 copiar.jpg"] },
  { id: "marvel", title: "Marvel", category: "LICENCIADOS / KITS ESCOLARES", intro: "Desenvolvimento de produtos e soluções gráficas para uma coleção de mochilas e acessórios.", cover: "/Imagens/Marvel/Menino com Mochila Marvel em Estúdio.png", images: ["/Imagens/Marvel/Menino com Mochila Marvel em Estúdio.png", "/Imagens/Marvel/MA28242J_copiar.jpg_b6a231f2.jpg", "/Imagens/Marvel/MA28243L.jpg_96cb3f40.jpg", "/Imagens/Marvel/MA28244E.jpg_f547cf8a.jpg"] },
  { id: "moranguinho", title: "Moranguinho", category: "INFANTIL / MOCHILAS", intro: "Paleta delicada, estampas e aplicações para produtos infantis.", cover: "/Imagens/Moranguinho/Modelo01.jpg", images: ["/Imagens/Moranguinho/Modelo01.jpg", "/Imagens/Moranguinho/Modelo02.jpg", "/Imagens/Moranguinho/MO28130D_RS_copiar.jpg_74249fcb.jpg", "/Imagens/Moranguinho/PP28161B_copiar.jpg_044e635c.jpg"] },
  { id: "pantera-negra", title: "Pantera Negra", category: "LICENCIADOS / DESIGN DE PRODUTO", intro: "Desenvolvimento de artes e apresentação de produtos para uma coleção de mochilas.", cover: "/Imagens/Pantera Negra/Retrato com Mochila Marvel Wakanda.png", images: ["/Imagens/Pantera Negra/Retrato com Mochila Marvel Wakanda.png", "/Imagens/Pantera Negra/MA28255_copiar.jpg_86c046e9.jpg", "/Imagens/Pantera Negra/MA28256_copiar.jpg_819e6bee.jpg"] },
  { id: "pantera-infantil", title: "Pantera Infantil", category: "INFANTIL / MOCHILAS", intro: "Criação de estampas, combinação de cores e aplicações em produtos infantis.", cover: "/Imagens/Pantera infantil/Menino com Mochila do Pantera Negra.png", images: ["/Imagens/Pantera infantil/Menino com Mochila do Pantera Negra.png", "/Imagens/Pantera infantil/Conjunto Black Panther em Fundo Creme.png"] },
  { id: "peppa", title: "Peppa Pig", category: "INFANTIL / MOCHILAS", intro: "Estudos visuais e desenvolvimento de peças para uma linha infantil.", cover: "/Imagens/Pepa/Retrato Infantil com Mochila Colorida.png", images: ["/Imagens/Pepa/Retrato Infantil com Mochila Colorida.png", "/Imagens/Pepa/PP28161B_copiar.jpg_5af1825b.jpg", "/Imagens/Pepa/PP28163L_copiar.jpg_70bdf167.jpg"] },
  { id: "wolverine", title: "Wolverine", category: "LICENCIADOS / MOCHILAS", intro: "Desenvolvimento visual para uma coleção de produtos com identidade forte e linguagem de aventura.", cover: "/Imagens/Wolverine/Mochila Wolverine Marvel em Fundo Bege.png", images: ["/Imagens/Wolverine/Mochila Wolverine Marvel em Fundo Bege.png", "/Imagens/Wolverine/Estojo Marvel Wolverine em Fundo Bege.png", "/Imagens/Wolverine/Foto1de tela-W.jpg"] },
];

function ProjectsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(null);
  const [filter, setFilter] = useState("TODOS");
  const active = collections.find((c) => c.id === selected);
  const visible = collections.filter((c) => filter === "TODOS" || (filter === "INFANTIL" ? c.category.includes("INFANTIL") : c.category.includes("LICENCIADOS")));

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((v) => v ? { ...v, index: (v.index + 1) % v.images.length } : v);
      if (event.key === "ArrowLeft") setLightbox((v) => v ? { ...v, index: (v.index - 1 + v.images.length) % v.images.length } : v);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightbox]);

  return <main className="portfolio projects-page">
    <nav className="nav-shell">
      <Link className="brand" to="/" aria-label="Bruno Vides início"><span className="brand-mark">✳</span><span>BRUNO<br/>VIDES<span className="brand-dot">.</span></span></Link>
      <div className="nav-links"><a href="/#sobre">SOBRE</a><a href="/#servicos">SERVIÇOS</a><Link to="/projetos" className="active">PROJETOS</Link><a href="/#contato">CONTATO</a></div>
      <button type="button" className="language-switch" onClick={() => { window.location.href = "https://translate.google.com/translate?sl=pt&tl=en&u=" + encodeURIComponent(window.location.href); }} aria-label="Translate portfolio to English">ENGLISH <span aria-hidden="true">↗</span></button>\n      <a className="nav-cta" href="/#contato">VAMOS CONVERSAR <ArrowUpRight size={15}/></a>
      <Link className="mobile-menu" to="/" aria-label="Voltar ao início"><ArrowLeft size={22}/></Link>
    </nav>

    <header className="projects-page-hero">
      <div className="section-kicker"><Asterisk size={15}/> PORTFÓLIO / DESENVOLVIMENTO DE PRODUTO</div>
      <h1>DESIGN QUE<br/>VIRA <em>PRODUTO.</em></h1>
      <div className="projects-page-intro"><p>Uma seleção de desenvolvimentos em estamparia, design gráfico e produtos licenciados. Da pesquisa visual à aplicação no produto final.</p><span>BRUNO VIDES<br/>DESIGN / ESTAMPARIA / PRODUTO</span></div>
      <div className="projects-page-rule"><span>COLEÇÕES & DESENVOLVIMENTOS</span><span>10 COLEÇÕES</span></div>
    </header>

    {!active ? <>
      <div className="collection-toolbar">
        <span>EXPLORAR POR CATEGORIA</span>
        <div className="collection-filters">
          {["TODOS", "INFANTIL", "LICENCIADOS"].map((item) => <button type="button" className={filter === item ? "selected" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}
        </div>
      </div>
      <section className="collection-grid">
        {visible.map((collection, index) => <button type="button" className="collection-card" key={collection.id} onClick={() => setSelected(collection.id)} style={{ animationDelay: (index * 70) + "ms" }}>
          <span className="collection-card-image"><img src={collection.cover} alt={collection.title} loading="lazy"/><span className="collection-card-number">{String(index + 1).padStart(2, "0")}</span><span className="collection-card-open"><ArrowUpRight size={22}/></span></span>
          <span className="collection-card-info"><span>{collection.category}</span><strong>{collection.title}</strong><small>{collection.images.length} imagens <ArrowUpRight size={13}/></small></span>
        </button>)}
      </section>
    </> : <>
      <section className="collection-detail">
        <button type="button" className="collection-back" onClick={() => setSelected(null)}><ArrowLeft size={15}/> VOLTAR ÀS COLEÇÕES</button>
        <div className="collection-detail-head"><div><span className="section-kicker">{active.category}</span><h2>{active.title}<span>.</span></h2><p>{active.intro}</p></div><span className="collection-detail-count">{String(active.images.length).padStart(2,"0")} VISUAIS</span></div>
        <div className="collection-photo-grid">{active.images.map((src, index) => <button type="button" className={"collection-photo photo-" + (index % 5)} key={src} onClick={() => setLightbox({ images: active.images, index, title: active.title })}><img src={src} alt={active.title + " — imagem " + (index + 1)} loading="lazy"/><span><ArrowUpRight size={18}/></span></button>)}</div>
      </section>
    </>}

    <section className="projects-page-cta"><div><span className="section-kicker light">TEM UM PROJETO EM MENTE?</span><h2>VAMOS CRIAR<br/>ALGO <em>ÚNICO.</em></h2></div><a className="button-primary" href="/#contato">FALE COMIGO <ArrowUpRight size={17}/></a></section>
    <footer className="footer"><Link className="brand footer-brand" to="/"><span className="brand-mark">✳</span><span>BRUNO<br/>VIDES<span className="brand-dot">.</span></span></Link><span className="footer-note">DESIGN GRÁFICO · ESTAMPARIA · PRODUTO</span><span className="copyright">© 2026 BRUNO VIDES</span></footer>

    {lightbox && <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-label={"Galeria " + lightbox.title} onClick={() => setLightbox(null)}><button type="button" className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Fechar"><X/></button><button type="button" className="lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightbox(v => v ? {...v,index:(v.index-1+v.images.length)%v.images.length} : v); }}>‹</button><img src={lightbox.images[lightbox.index]} alt={lightbox.title}/><button type="button" className="lightbox-next" onClick={(e) => { e.stopPropagation(); setLightbox(v => v ? {...v,index:(v.index+1)%v.images.length} : v); }}>›</button><span className="lightbox-caption">{lightbox.title} · {lightbox.index + 1} / {lightbox.images.length}</span></div>}
  </main>;
}
