import { useState } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  Globe,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Network,
  Phone,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

const missions = [
  {
    number: '01',
    title: 'Batchs NCVI',
    text: 'Tableau trié sur 24 h des 31 batchs, en déchiffrant leurs expressions cron Quartz.',
    result: 'Résultat : table ncvi_batch dans la base, consultée avec DBeaver.',
    tags: ['Cron Quartz', 'SQL', 'DBeaver'],
    icon: Server,
  },
  {
    number: '02',
    title: 'NCID',
    text: 'Modèle logique de données avec clés, types et cardinalités, traduit en script SQL PostgreSQL.',
    result: 'Résultat : script DROP / CREATE TABLE prêt à exécuter.',
    tags: ['MLD', 'PostgreSQL'],
    icon: Database,
  },
  {
    number: '03',
    title: 'JMeter',
    text: 'Initiation aux tests de performance et de charge sur des Web Services REST.',
    result: 'Résultat : fichiers JMX corrigés et tutoriel débutant.',
    tags: ['JMeter', 'Web Services REST'],
    icon: Network,
  },
  {
    number: '04',
    title: 'Vendanges',
    text: 'Application Vue.js et Spring : boutons, tableaux remplis depuis la base, mappers.',
    result: "Résultat : modification d'une déclaration de récolte ou de production.",
    tags: ['Vue.js', 'Spring / Java'],
    icon: MonitorSmartphone,
  },
];

const toolGroups = [
  { title: 'Développement', items: 'Vue.js, Java Spring, Maven, IntelliJ', icon: Code2 },
  { title: 'Versions et intégration', items: 'Git / SVN, Jenkins', icon: GitBranch },
  { title: 'Qualité et tests', items: 'SonarQube, JMeter', icon: ShieldCheck },
  { title: 'Serveur, API et données', items: 'Tomcat, Swagger, JWT, DBeaver', icon: Globe },
];

const hspSiteFeatures = [
  'Quatre profils : étudiant, médecin, partenaire et gestionnaire, validés par un gestionnaire.',
  "Offres d'emploi et de stage avec candidature.",
  'Événements avec inscriptions.',
  'Forum à trois sections.',
  'Annuaire des médecins et contact.',
];

const hspRealisations = [
  "Établissements du médecin : recherche, ajout et retrait sans doublon, protection CSRF.",
  "Intégration de la page d'accueil d'un coéquipier, avec session et comptes de test adaptés.",
  'Affichage des événements : liste et détail par identifiant, testé en local.',
  'Incompatibilité de session entre accueil et connexion diagnostiquée et corrigée.',
];

const competences = [
  {
    competence: 'Gérer le patrimoine informatique',
    situation: 'TP Debian : sauvegarde et restauration ; accès par rôle sur HSP',
    proof: 'Script de sauvegarde',
  },
  {
    competence: 'Répondre aux incidents',
    situation: "HSP : incompatibilité de session entre accueil et connexion, corrigée",
    proof: "Branche d'intégration",
  },
  {
    competence: 'Présence en ligne',
    situation: 'Site HSP : offres, événements, forum, annuaire',
    proof: 'Pages du site',
  },
  {
    competence: 'Travailler en mode projet',
    situation: 'HSP : groupe de 4, GANTT, branches Git et pull requests',
    proof: 'GANTT, historique Git',
  },
  {
    competence: 'Mettre à disposition un service',
    situation: 'HSP (serveur en DMZ) ; TP Debian',
    proof: 'Schéma réseau, procédure',
  },
  {
    competence: 'Développement professionnel',
    situation: 'Veille : tracking de données dans le football',
    proof: 'Articles de veille',
  },
];

const technologies = ['PHP', 'Java', 'SQL', 'PostgreSQL', 'MySQL', 'Vue.js', 'Spring', 'Git', 'JMeter', 'Debian', 'Hyper-V'];

const navItems = [
  { label: 'À propos', href: '#about' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Stage', href: '#experience' },
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Veille', href: '#veille' },
];

const veilleLinks = [
  {
    title: 'Mondial 2026 : la FIFA lance une IA pour noter les performances des joueurs',
    source: "L'Observateur",
    href: 'https://lobservateur.info/article/118613/mondial-2026/mondial-2026-la-fifa-lance-une-ia-pour-noter-les-performances-des-joueurs',
  },
  {
    title: "Data : la main-d'\u0153uvre derri\u00e8re les donn\u00e9es dans le football",
    source: 'Infolibertaire',
    href: 'https://www.infolibertaire.net/la-main-doeuvre-derriere-les-donnees-dans-le-football',
  },
  {
    title: 'Comment construire un index de joueur efficace',
    source: 'SkillCorner',
    href: 'https://skillcorner.com/fr/articles/how-to-build-an-effective-player-index',
  },
  {
    title: 'The Best Football Trackers 2026 : GPS, wearables et tracking vid\u00e9o',
    source: 'zone14',
    href: 'https://zone14.ai/en/football-tracking-without-gps',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMission, setActiveMission] = useState(0);

  const closeMenu = () => setMenuOpen(false);
  const mission = missions[activeMission];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">JH</span>
          <span className="brand-copy">
            Jordan Homere
            <small>Développeur web</small>
          </span>
        </a>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Me contacter <ArrowUpRight size={16} />
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-grid">
            <div className="hero-intro">
              <p className="eyebrow"><span className="eyebrow-dot" /> Portfolio · Session 2026</p>
              <h1>Je conçois des applications web <em>utiles</em> et fiables.</h1>
              <p className="hero-lead">
                Jordan Homere, 21 ans, étudiant en deuxième année de <strong>BTS SIO option SLAM</strong> au
                lycée Robert Schuman à Dugny. Un parcours tourné vers le développement web et la donnée.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projets">Découvrir mes projets <ArrowUpRight size={18} /></a>
                <a className="text-link" href="#contact">Parlons de votre projet <span>↗</span></a>
              </div>
              <div className="hero-meta">
                <span><MapPin size={15} /> Aulnay-sous-Bois, France</span>
                <span><CalendarDays size={15} /> Disponible pour une alternance</span>
              </div>
            </div>

            <div className="hero-card-wrap">
              <div className="hero-card">
                <div className="hero-card-top"><span>01 / 04</span><span className="status"><i /> Disponible</span></div>
                <div className="portrait-placeholder"><span>JH</span><div className="portrait-line" /></div>
                <div className="hero-card-bottom"><span>Développement web & data</span><Code2 size={19} /></div>
              </div>
              <div className="floating-note note-one"><Sparkles size={16} /><span>Web et<br /><b>data sportive</b></span></div>
              <div className="floating-note note-two"><span>21</span><small>ans</small></div>
            </div>
          </div>
          <div className="hero-scroll"><span>Défiler pour explorer</span><div className="scroll-line" /></div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 — Présentation</p>
            <h2>Entre développement web <span>et analyse de données.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="large-copy">Je veux créer des applications solides, et comprendre les données qu'elles produisent.</p>
              <p>Ma formation en BTS SIO SLAM me fait travailler sur la conception de bases de données, le développement d'applications et la gestion de projet en équipe.</p>
              <a className="text-link dark" href="#contact">Me contacter <ArrowUpRight size={17} /></a>
            </div>
            <div className="facts-grid">
              <div className="fact"><span className="fact-number">02</span><b>années</b><small>de BTS SIO option SLAM</small></div>
              <div className="fact"><span className="fact-number">04</span><b>missions</b><small>réalisées lors de mon stage</small></div>
              <div className="fact"><span className="fact-number">17 000</span><b>agents</b><small>à la DGDDI, mon lieu de stage</small></div>
              <div className="fact accent-fact"><GraduationCap size={25} /><b>Bac+5</b><small>visé après licence et école d'informatique</small></div>
            </div>
          </div>
        </section>

        <section className="journey section-pad" id="parcours">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">02 — Parcours</p><h2>Un chemin construit<br /><span>avec intention.</span></h2></div>
            <p className="heading-aside">Chaque étape me rapproche de mon objectif : développer des applications et exploiter des données.</p>
          </div>
          <div className="timeline">
            <div className="timeline-line" />
            <article className="timeline-item">
              <span className="timeline-year">Étape 01</span>
              <div className="timeline-dot" />
              <div><h3>Baccalauréat STI2D</h3><p>Lycée Robert Schuman, Dugny</p><small>Choisi pour la filière et son lien avec le développement.</small></div>
            </article>
            <article className="timeline-item current">
              <span className="timeline-year">Étape 02</span>
              <div className="timeline-dot" />
              <div><h3>BTS SIO option SLAM</h3><p>Lycée Robert Schuman, Dugny</p><small>Dans la continuité de mon projet : développer des applications.</small></div>
            </article>
            <article className="timeline-item">
              <span className="timeline-year">Étape 03</span>
              <div className="timeline-dot" />
              <div><h3>Licence puis école d'informatique</h3><p>Après le BTS</p><small>Licence en 3e année post-bac, puis école d'informatique jusqu'au bac+5.</small></div>
            </article>
            <article className="timeline-item">
              <span className="timeline-year">Objectif</span>
              <div className="timeline-dot" />
              <div><h3>Développeur web ou data analyste sportif</h3><p>Mon cap professionnel</p><small>Concevoir des applications et exploiter les données du sport.</small></div>
            </article>
          </div>
        </section>

        <section className="experience section-pad" id="experience">
          <div className="experience-label">
            <p className="eyebrow">03 — Stage</p>
            <div className="experience-big">DGDDI</div>
            <p>Stage d'un mois<br />Service informatique viticulture</p>
          </div>
          <div className="experience-main">
            <p className="eyebrow light-eyebrow">Une immersion au cœur d'un projet métier.</p>
            <h2>Développer, analyser,<br /><span>améliorer.</span></h2>
            <p className="experience-lead">
              Au sein de la DGDDI, j'ai intégré une équipe de 6 personnes côté maîtrise d'œuvre, encadrée par un développeur senior,
              pour concevoir, développer et maintenir l'application NCVI.
            </p>
            <div className="experience-details">
              <div><b>Le contexte</b><p>Administration du Ministère de l'Économie, environ <strong>17 000 agents</strong>.</p></div>
              <div><b>Le projet NCVI</b><p>Nouveau Casier Vitivinicole Informatisé, application nationale de suivi et de contrôle de la filière viticole, avec l'INAO et FranceAgriMer.</p></div>
            </div>
          </div>
        </section>

        <section className="missions section-pad">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">04 — Missions</p><h2>Quatre missions,<br /><span>un même objectif.</span></h2></div>
            <p className="heading-aside">Analyser, modéliser, tester et développer au sein d'une application utilisée au quotidien.</p>
          </div>
          <div className="mission-layout">
            <div className="mission-list">
              {missions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    className={activeMission === index ? 'mission-item active' : 'mission-item'}
                    key={item.number}
                    onClick={() => setActiveMission(index)}
                  >
                    <span>{item.number}</span>
                    <div><Icon size={19} /><b>{item.title}</b></div>
                    <ChevronDown size={18} />
                  </button>
                );
              })}
            </div>
            <div className="mission-detail">
              <div className="detail-top"><span>Mission {mission.number}</span><Code2 size={28} /></div>
              <h3>{mission.title}</h3>
              <p>{mission.text}</p>
              <p className="mission-result">{mission.result}</p>
              <div className="tool-tags">
                {mission.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </div>

          <div className="tools-grid">
            {toolGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div className="tool-card" key={group.title}>
                  <Icon size={20} />
                  <b>{group.title}</b>
                  <p>{group.items}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="projects section-pad" id="projets">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">05 — Projets</p><h2>HSP, une plateforme<br /><span>pour la santé.</span></h2></div>
            <p className="heading-aside">Un projet de deuxième année mené en équipe de quatre, pour relier médecins, étudiants et entreprises.</p>
          </div>

          <div className="project-feature">
            <div className="project-number">01</div>
            <div className="project-content">
              <div className="project-kicker"><span>Projet de 2e année</span><span>Groupe de 4</span></div>
              <h3>Healthcare<br /><em>Social Platform</em></h3>
              <p>Pour le groupe de cliniques GDH, neuf hôpitaux dont l'hôpital Sud Paris, nous avons conçu un site qui facilite les échanges entre les acteurs de la santé.</p>
              <a className="button button-light" href="#contact">Me contacter <ArrowUpRight size={16} /></a>
            </div>
            <div className="project-orbit">
              <div className="orbit-center">HSP</div>
              <div className="orbit-node node-a">4 profils</div>
              <div className="orbit-node node-b">Forum</div>
              <div className="orbit-node node-c">Offres</div>
            </div>
          </div>

          <div className="project-lists">
            <div>
              <b>Ce que fait le site</b>
              <ul className="bullet-list">
                {hspSiteFeatures.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <b>Ce que j'ai réalisé</b>
              <ul className="bullet-list">
                {hspRealisations.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="project-capabilities">
            <div><span>01</span><b>Modèle de données</b><p>Un modèle conceptuel puis logique autour de l'entité Utilisateur, dont Étudiant et Médecin héritent.</p></div>
            <div><span>02</span><b>Connexion et rôles</b><p>Vérification sécurisée du mot de passe, contrôle du compte validé et session limitée à l'identifiant et au rôle.</p></div>
            <div><span>03</span><b>Hébergement en DMZ</b><p>Le serveur exposé sur Internet est isolé du réseau interne, et la base de données reste séparée.</p></div>
          </div>

          <div className="architecture">
            <div className="arch-node">Visiteur<small>Navigateur web</small></div>
            <span className="arch-arrow">→</span>
            <div className="arch-node arch-node-dmz">Serveur virtuel<small>HTML5 / CSS3 · PHP</small></div>
            <span className="arch-arrow">→</span>
            <div className="arch-node">Base de données<small>MySQL</small></div>
          </div>
          <p className="arch-caption">Pourquoi une DMZ : isoler le serveur exposé sur Internet du réseau interne de l'établissement.</p>

          <div className="tp-block">
            <p className="eyebrow">Projet de formation</p>
            <h3>TP : application web sur Debian</h3>
            <div className="tp-grid">
              <div className="tp-card">
                <b>Situation</b>
                <p>Mettre à disposition une application web PHP sur un serveur Debian virtualisé, en tant que développeur d'équipe.</p>
              </div>
              <div className="tp-card">
                <b>Étapes</b>
                <ul>
                  <li>VM Debian sous Hyper-V</li>
                  <li>SSH puis LAMP : Apache, MariaDB, PHP</li>
                  <li>Application accessible par un nom local .test</li>
                  <li>Script Bash de sauvegarde SQL horodatée</li>
                  <li>Restauration vérifiée dans une base de test</li>
                </ul>
              </div>
              <div className="tp-card">
                <b>Sécurité</b>
                <ul>
                  <li>Utilisateur SQL dédié, jamais root</li>
                  <li>Pas de chmod 777</li>
                  <li>Secrets hors du dépôt et de la documentation</li>
                  <li>Documentation technique remise en PDF</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-pad" id="competences">
          <div className="section-heading">
            <p className="eyebrow">06 — Compétences</p>
            <h2>Mes compétences <span>et leurs preuves.</span></h2>
          </div>
          <div className="competence-wrap">
            <table className="competence-table">
              <thead>
                <tr><th>Compétence E5</th><th>Projet ou situation</th><th>Preuve</th></tr>
              </thead>
              <tbody>
                {competences.map((row) => (
                  <tr key={row.competence}>
                    <td>{row.competence}</td>
                    <td>{row.situation}</td>
                    <td>{row.proof}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="skill-cloud">
            {technologies.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </section>

        <section className="veille section-pad" id="veille">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">07 — Veille</p><h2>Suivre le <span>tracking de données.</span></h2></div>
            <p className="heading-aside">Ma veille porte sur le tracking de données dans le football, en lien avec mon objectif de data analyste sportif.</p>
          </div>
          <ol className="veille-list">
            {veilleLinks.map((link, index) => (
              <li key={link.href}>
                <span className="veille-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">{link.title}</a>
                  <p>{link.source}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-inner">
            <div>
              <p className="eyebrow light-eyebrow">08 — Contact</p>
              <h2>Construisons quelque chose<br /><em>de pertinent.</em></h2>
              <p>Vous cherchez un profil curieux et motivé pour rejoindre votre équipe ? Je serais heureux d'échanger avec vous.</p>
            </div>
            <div className="contact-actions">
              <a href="mailto:jordan.homere2@gmail.com" className="contact-line"><Mail size={20} /><span>jordan.homere2@gmail.com</span><ArrowUpRight size={18} /></a>
              <a href="tel:+33749744736" className="contact-line"><Phone size={20} /><span>07 49 47 43 36</span><ArrowUpRight size={18} /></a>
              <a className="button button-yellow" href="mailto:jordan.homere2@gmail.com?subject=Proposition%20d'alternance"><Send size={17} /> Me proposer une alternance</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"><span>© 2026 Jordan Homere</span><span>BTS SIO · Option SLAM</span><a href="#top">Retour en haut ↑</a></footer>
    </div>
  );
}

export default App;
