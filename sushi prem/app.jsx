// ── DATA ─────────────────────────────────────────────────────────────────────

const V      = "uploads/Make Authentic Japanese Sushi Like a Pro_-72644283.mp4";
const V_HERO = "uploads/Sushi Bar _ Salmon Nigiri (1).mp4";

const MENU = [
  // NIGIRI
  { id:1, num:'01', name:'Саке нігірі',  jp:'鮭 にぎり',      cat:'nigiri',  price:19, badge:'Вибір шефа', desc:'Атлантичний лосось, витриманий на комбу, вручну сформований на теплому рисі шарі. Ледь помітна нота судачі.', img:'uploads/pasted-1777582340525-0.png' },
  { id:2, num:'02', name:'Оторо',        jp:'大トロ',          cat:'nigiri',  price:42, badge:'Преміум',       desc:'Жирне черевце тунця найвищого ґатунку. Нарізаємо безпосередньо перед подачею.', img:'uploads/pasted-1777583083889-0.png' },
  { id:3, num:'03', name:'Вагю нігірі', jp:'和牛 にぎり',     cat:'premium', price:58, badge:'Лімітовано',       desc:'A5 Wagyu, злегка обсмажений, на рисі шарі з гелем понзу та мікроцибулею.', img:'uploads/pasted-1777583212111-0.png' },
  { id:4, num:'04', name:'Унагі',        jp:'鰻',             cat:'nigiri',  price:36, badge:'Сезонне',      desc:'Прісноводний вугор на грилі з глазур’ю таре та кунжутом. Димний, карамельний смак.', img:'uploads/pasted-1777583293307-0.png' },
  { id:5, num:'05', name:'Магуро',       jp:'まぐろ',         cat:'nigiri',  price:22, badge:'',              desc:'Пісна частина блакитного тунця. Чистий смак і пружна текстура.', img:'uploads/pasted-1777582340525-0.png' },
  { id:6, num:'06', name:'Хамачі',      jp:'ハマチ',         cat:'nigiri',  price:24, badge:'Новинка',           desc:'Жовтохвіст, витриманий 48 годин. Масляниста текстура з цитрусовими нотами.', img:'uploads/pasted-1777583083889-0.png' },
  { id:7, num:'07', name:'Хіраме',       jp:'ひらめ',         cat:'nigiri',  price:21, badge:'',              desc:'Камбала з дотиком юзу кошо. Делікатна, напівпрозора текстура.', img:'uploads/pasted-1777583212111-0.png' },
  { id:8, num:'08', name:'Ебі',          jp:'海老',           cat:'nigiri',  price:18, badge:'',              desc:'Солодка креветка, відварена та охолоджена. Подається з головою для насиченого смаку.', img:'uploads/pasted-1777583293307-0.png' },
  { id:9, num:'09', name:'Ікура',        jp:'イクラ',         cat:'nigiri',  price:26, badge:'Сезонне',      desc:'Ікра лосося, маринована в сої та міріні. Яскравий морський смак у кожній ікринці.', img:'uploads/pasted-1777582340525-0.png' },
  { id:10, num:'10', name:'Тако',        jp:'たこ',           cat:'nigiri',  price:17, badge:'',              desc:'Восьминіг, томлений 4 години. Ніжний, з легким відтінком імбиру.', img:'uploads/pasted-1777583083889-0.png' },

  // ROLLS
  { id:11, num:'11', name:'Дракон рол',  jp:'ドラゴンロール',  cat:'rolls',   price:39, badge:'Хіт продажу',   desc:'Тунець, авокадо та креветка, загорнуті в оторо, з перлинами витриманого бальзаміку.', img:'uploads/pasted-1777583745213-0.png' },
  { id:12, num:'12', name:'Лососева троянда',  jp:'サーモンロール',  cat:'rolls',   price:28, badge:'Новинка',           desc:'Рол у лососі з креветкою, авокадо, тобіко, трюфельним майо та ікрою.', img:'uploads/pasted-1777583755999-0.png' },
  { id:13, num:'13', name:'Рейнбоу рол', jp:'レインボーロール', cat:'rolls',   price:34, badge:'Популярне',      desc:'Каліфорнія рол із п’ятьма видами сашимі: тунець, лосось, хамачі, креветка та авокадо.', img:'uploads/pasted-1777583745213-0.png' },
  { id:14, num:'14', name:'Гострий тунець',   jp:'スパイシーマグロ', cat:'rolls',   price:26, badge:'',              desc:'Подрібнений тунець із гострим майо, огірком і кунжутом. Завершуємо халапеньйо.', img:'uploads/pasted-1777583755999-0.png' },
  { id:15, num:'15', name:'Філадельфія', jp:'フィラデルフィア', cat:'rolls',   price:29, badge:'Класика',       desc:'Копчений лосось, крем-сир та огірок. Сучасна класика з м’яким вершковим смаком.', img:'uploads/pasted-1777583745213-0.png' },
  { id:16, num:'16', name:'Фаєркрекер',  jp:'ファイアクラッカー', cat:'rolls',   price:32, badge:'Гостре',        desc:'Гострий краб, огірок, зверху гострий тунець і соус сriracha aioli.', img:'uploads/pasted-1777583755999-0.png' },
  { id:17, num:'17', name:'Аляска рол', jp:'アラスカンロール', cat:'rolls',   price:31, badge:'Сезонне',      desc:'Копчений лосось, авокадо, огірок, свіжий лосось зверху та масаго.', img:'uploads/pasted-1777583745213-0.png' },
  { id:18, num:'18', name:'Катерпілер', jp:'キャタピラー',     cat:'rolls',   price:33, badge:'',              desc:'Вугор та огірок усередині, зверху скибки авокадо і соус унагі.', img:'uploads/pasted-1777583755999-0.png' },
  { id:19, num:'19', name:'Спайдер рол',  jp:'スパイダーロール', cat:'rolls',   price:35, badge:'Хрумке',       desc:'Темпура з м’якопанцирного краба, огірок, авокадо та гострий майо.', img:'uploads/pasted-1777583745213-0.png' },
  { id:20, num:'20', name:'Вулкан рол', jp:'ボルケーノロール',  cat:'rolls',   price:36, badge:'Гаряче',          desc:'Гострий тунець, огірок, запечений гребінець і гострий майо зверху.', img:'uploads/pasted-1777583755999-0.png' },
  { id:21, num:'21', name:'Тигр рол',   jp:'タイガーロール',   cat:'rolls',   price:34, badge:'Преміум',      desc:'Креветка темпура, огірок, авокадо, обсмажений тунець зверху та соус унагі.', img:'uploads/pasted-1777583745213-0.png' },
  { id:22, num:'22', name:'Лобстер рол', jp:'ロブスターロール', cat:'premium', price:48, badge:'Люкс',       desc:'Лобстер, авокадо, огірок, салат із лобстера та ікра.', img:'uploads/pasted-1777583755999-0.png' },

  // GUNKAN
  { id:23, num:'23', name:'Уні гункан',   jp:'ウニ 軍艦',       cat:'gunkan',  price:38, badge:'Преміум',      desc:'Морський їжак, свіжий щодня. Кремовий, солодкий, з морською солоністю.', img:'uploads/pasted-1777583745213-0.png' },
  { id:24, num:'24', name:'Ікура гункан', jp:'イクラ 軍艦',     cat:'gunkan',  price:28, badge:'',              desc:'Блискуча ікра лосося. Кожна ікринка вибухає смаком моря.', img:'uploads/pasted-1777583755999-0.png' },
  { id:25, num:'25', name:'Негіторо',     jp:'ネギトロ',         cat:'gunkan',  price:32, badge:'Популярне',      desc:'Подрібнений жирний тунець із зеленою цибулею. Насичений і свіжий смак.', img:'uploads/pasted-1777583745213-0.png' },
  { id:26, num:'26', name:'Перепелине яйце',    jp:'うずら卵',        cat:'gunkan',  price:24, badge:'',              desc:'Негіторо з сирим перепелиним яйцем. Оксамитова, насичена подача.', img:'uploads/pasted-1777583755999-0.png' },

  // SASHIMI
  { id:27, num:'27', name:'Оторо сашимі', jp:'大トロ 刺身',     cat:'sashimi', price:52, badge:'Преміум',      desc:'Три шматочки преміального жирного тунця. Вершина суші-майстерності.', img:'uploads/pasted-1777583083889-0.png' },
  { id:28, num:'28', name:'Саке сашимі',  jp:'鮭 刺身',         cat:'sashimi', price:28, badge:'',              desc:'П’ять шматочків атлантичного лосося. Подається з понзу та свіжим васабі.', img:'uploads/pasted-1777582340525-0.png' },
  { id:29, num:'29', name:'Мікс сашимі', jp:'盛り合わせ',       cat:'sashimi', price:45, badge:'Вигідно',   desc:'Добірка шефа із семи сезонних риб. Подорож найкращими смаками океану.', img:'uploads/pasted-1777583745213-0.png' },
  { id:30, num:'30', name:'Хамачі сашимі', jp:'ハマチ 刺身',   cat:'sashimi', price:32, badge:'Новинка',           desc:'Жовтохвіст, витриманий до ідеальної текстури. Подається з юзу та халапеньйо.', img:'uploads/pasted-1777583083889-0.png' },
];

const CATS = [
  { label:'Усе', value:'all' },
  { label:'Нігірі', value:'nigiri' },
  { label:'Роли', value:'rolls' },
  { label:'Гункан', value:'gunkan' },
  { label:'Сашимі', value:'sashimi' },
  { label:'Преміум', value:'premium' },
];

const BADGE_CLR = {
  'Вибір шефа':   'oklch(72% 0.08 75)',
  'Преміум':      'oklch(78% 0.05 285)',
  'Лімітовано':   'oklch(72% 0.08 22)',
  'Сезонне':      'oklch(72% 0.07 148)',
  'Хіт продажу':  'oklch(72% 0.08 75)',
  'Новинка':      'oklch(74% 0.06 222)',
};

const MONTHS = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
const DOW    = ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'];
const SLOTS  = ['18:00','18:30','19:00','19:30','20:00','20:30'];
const ZONES  = [
  { id:'counter', label:'Бар',      sub:'4 місця · Вид на роботу шефа' },
  { id:'table',   label:'Столик',        sub:'2–6 гостей · Затишно' },
  { id:'private', label:'Окрема кімната', sub:'8–12 гостей · Приватно' },
];

const fmt = p => `€${p.toLocaleString('de-DE')}`;

// ── HOOKS ─────────────────────────────────────────────────────────────────────

function useCart() {
  const [items, setItems] = React.useState([]);
  const addItem = React.useCallback(item => {
    setItems(prev => {
      const ex = prev.find(i => i.id === item.id);
      if (ex) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  }, []);
  const updateQty = React.useCallback((id, delta) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0));
  }, []);
  const clearCart = React.useCallback(() => {
    setItems([]);
  }, []);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return { items, addItem, updateQty, clearCart, total, count };
}

function useReveal() {
  React.useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────

function Navbar({ count, onCartOpen, onResOpen }) {
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };
  return (
    <nav className="nav">
      <a className="nav-logo" href="#">Shiro</a>
      <ul className="nav-links">
        <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('sec-phil'); }}>Філософія</a></li>
        <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('sec-menu'); }}>Меню</a></li>
        <li><a href="#" onClick={e => { e.preventDefault(); scrollTo('sec-delivery'); }}>Доставка</a></li>
      </ul>
      <div className="nav-actions">
        <button className="nav-res-btn" onClick={onResOpen}>Забронювати стіл</button>
        <button className="nav-cart-btn" onClick={onCartOpen}>
          <span className="nav-cart-icon">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          </span>
          <span className="nav-cart-label">Замовлення</span>
          <span className="nav-cart-count" id="cart-badge">{count}</span>
        </button>
      </div>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────

function HeroSection({ count, onCartOpen, onResOpen }) {
  const vidRef = React.useRef(null);
  React.useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    const init = () => { v.playbackRate = 0.38; v.classList.add('loaded'); };
    v.addEventListener('loadedmetadata', init);
    if (v.readyState >= 1) init();
    return () => v.removeEventListener('loadedmetadata', init);
  }, []);
  const scrollToMenu = () => {
    const el = document.getElementById('sec-menu');
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };
  return (
    <section className="hero">
      <video ref={vidRef} className="hero-video vid-grade" autoPlay muted playsInline loop preload="auto"
        style={{ filter: 'brightness(0.65) contrast(1.12) saturate(0.75) sepia(0.18)' }}>
        <source src={V_HERO} type="video/mp4" />
      </video>
      <div className="hero-vignette"></div>
      <div className="hero-left-fade"></div>
      <div className="hero-bottom-fade"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">Saarbruecken · Omakase · з 1987 року</div>
        <h1 className="hero-title">Omakase<br /><em>вдома.</em></h1>
        <p className="hero-sub">Авторські суші у преміальних боксах, доставлені до ваших дверей протягом 45 хвилин.</p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={scrollToMenu}>
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Замовити доставку
          </button>
          <button className="btn-secondary" onClick={onResOpen}>Забронювати стіл</button>
        </div>
      </div>

      <div className="hero-order-float">
        <div className="float-head">
          <span className="float-head-label">Ваше замовлення</span>
          <span className="float-head-sub">{count} позицій</span>
        </div>
        <div className="float-items">
          <div className="float-item"><span className="float-item-name">Саке нігірі × 2</span><span className="float-item-price">€38</span></div>
          <div className="float-item"><span className="float-item-name">Оторо × 1</span><span className="float-item-price">€42</span></div>
          <div className="float-item"><span className="float-item-name">Уні гункан × 1</span><span className="float-item-price">€38</span></div>
        </div>
        <div className="float-rule"></div>
        <div className="float-total">
          <span className="float-total-label">Проміжна сума</span>
          <span className="float-total-price">€118</span>
        </div>
        <button className="float-btn" onClick={onCartOpen}>Переглянути →</button>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line"></div>
        <span className="hero-scroll-text">Дивитися</span>
      </div>
    </section>
  );
}

// ── DELIVERY BAND ─────────────────────────────────────────────────────────────

function DeliveryBand() {
  const items = [
    { svg: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label:'Час доставки', val:'До 45 хвилин' },
    { svg: <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>, label:'Зона доставки', val:'Saarbruecken центр' },
    { svg: <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label:'Адреса', val:'Bahnhofstrasse 110' },
    { svg: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label:'Якість', val:'Контроль температури' },
  ];
  return (
    <div className="delivery-band">
      <div className="dband-inner">
        {items.map((it, i) => (
          <div className="dbi" key={i}>
            {it.svg}
            <div>
              <div className="dbi-label">{it.label}</div>
              <div className="dbi-value">{it.val}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PHILOSOPHY ────────────────────────────────────────────────────────────────

function PhilosophySection() {
  return (
    <section id="sec-phil" style={{ paddingTop: 0 }}>
      <div className="sw sec-phil">
        <div className="phil-grid">
          <div>
            <div className="kicker">Майстерність</div>
            <h2 className="display-heading reveal">Сорок років<br />у кожному<br /><em>преміальному боксі.</em></h2>
          </div>
          <div className="reveal">
            <div className="phil-body">
              <p>У ресторані чи вдома ритуал залишається тим самим: кожен шматочок готується після замовлення, рис формується теплим, а смак зберігає точність моменту.</p>
              <p>Ми працюємо з компактною зоною доставки навколо Saarbruecken, щоб свіжість ніколи не була компромісом.</p>
            </div>
            <div className="stat-row">
              <div><div className="stat-num">12</div><div className="stat-label">курсів omakase</div></div>
              <div><div className="stat-num">45'</div><div className="stat-label">обіцянка доставки</div></div>
              <div><div className="stat-num">40+</div><div className="stat-label">років досвіду</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CINEMATIC BLOCK ───────────────────────────────────────────────────────────

function CinematicBlock({ onOrder }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.addEventListener('loadedmetadata', () => { v.playbackRate = 0.45; });
  }, []);
  return (
    <div className="cinematic">
      <video ref={ref} className="vid-grade" autoPlay muted playsInline loop
        style={{ filter: 'brightness(0.48) contrast(1.16) saturate(0.65) sepia(0.22)' }}>
        <source src={V} type="video/mp4" />
      </video>
      <div className="cinematic-overlay">
        <div className="cin-line"></div>
        <div className="cin-text">Приготовано з увагою.</div>
        <div className="cin-sub">Доставлено з турботою.</div>
        <div className="cin-line"></div>
        <div style={{ marginTop: 28 }}>
          <button className="btn-primary" onClick={onOrder} style={{ animation: 'none', opacity: 1, transform: 'none' }}>
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            Замовити зараз
          </button>
        </div>
      </div>
    </div>
  );
}

// ── MENU SECTION ──────────────────────────────────────────────────────────────

function MenuCard({ item, onAdd }) {
  const clr = BADGE_CLR[item.badge] || 'oklch(72% 0.08 75)';
  return (
    <div className="menu-card">
      <div className="card-img">
        <img src={item.img} alt={item.name} loading="lazy" />
        <div className="card-img-fade"></div>
        <div className="card-badge" style={{ color: clr, borderColor: clr, background: clr.replace(')', ' / 0.12)').replace('oklch', 'oklch') }}>
          {item.badge}
        </div>
      </div>
      <div className="card-body">
        <div className="card-num">{item.num}</div>
        <div className="card-name">{item.name}</div>
        <div className="card-jp">{item.jp}</div>
        <div className="card-desc">{item.desc}</div>
        <div className="card-footer">
          <span className="card-price">{fmt(item.price)}</span>
          <button className="card-add" onClick={() => onAdd(item)}>+</button>
        </div>
      </div>
    </div>
  );
}

function MenuSection({ onAdd }) {
  const [cat, setCat] = React.useState('all');
  const filtered = cat === 'all' ? MENU : MENU.filter(i => i.cat === cat);
  return (
    <section className="sec-menu" id="sec-menu">
      <div className="sw">
        <div className="sec-header">
          <span className="sec-title">Меню À La Carte</span>
          <span className="sec-counter">Весняна добірка — травень 2026</span>
        </div>
        <div className="cat-filters">
          {CATS.map(c => (
            <button key={c.value} className={`cat-btn${cat === c.value ? ' active' : ''}`} onClick={() => setCat(c.value)}>{c.label}</button>
          ))}
        </div>
        <div className="menu-grid">
          {filtered.map(item => <MenuCard key={item.id} item={item} onAdd={onAdd} />)}
        </div>
      </div>
    </section>
  );
}

// ── PACKAGING ─────────────────────────────────────────────────────────────────

function PackagingBlock() {
  const feats = [
    { svg: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title:'Преміальне лакове пакування', desc:'Матова чорна коробка з акуратним внутрішнім оздобленням.' },
    { svg: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title:'Контроль температури', desc:'Охолоджувальні елементи підтримують 1–4°C протягом доставки.' },
    { svg: <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>, title:'Збираємо після замовлення', desc:'Кожен бокс пакується свіжим перед відправленням.' },
  ];
  return (
    <section className="sec-pack" id="sec-packaging">
      <div className="sw">
        <div className="pack-grid">
          <div className="pack-visual reveal">
            <div className="box-wrap">
              <div className="box-lid-el"></div>
              <div className="box-body-el"></div>
              <div className="box-seal"><div className="box-seal-dot"></div></div>
              <div className="box-brandmark">Shiro</div>
            </div>
            <div className="box-caption">Преміальний бокс для доставки</div>
          </div>
          <div className="reveal">
            <div className="kicker">Пакування</div>
            <h2 className="display-heading" style={{ marginBottom: 30 }}>Бокс є частиною<br /><em>враження.</em></h2>
            <div className="pack-features">
              {feats.map((f, i) => (
                <div className="pack-feat" key={i}>
                  <div className="pack-feat-icon">{f.svg}</div>
                  <div>
                    <div className="pack-feat-title">{f.title}</div>
                    <div className="pack-feat-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS ──────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    { svg: <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>, title:'Замовлення прийнято', desc:'Оберіть позиції з меню. Замовлення одразу потрапляє на кухню.' },
    { svg: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18"/><path d="M3 9h18M9 21V9"/></svg>, title:'Пакування в бокс', desc:'Кожна позиція окремо розміщується у температурно контрольованому боксі.' },
    { svg: <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>, title:'Доставка за 45 хв', desc:'Кур’єр доставляє напряму за адресою Saarbruecken, Bahnhofstrasse 110 та поруч.' },
  ];
  return (
    <section className="sec-hiw" id="sec-delivery">
      <div className="sw">
        <div className="kicker reveal">Як працює доставка</div>
        <div className="hiw-steps">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className="hiw-step reveal">
                <div className="hiw-num">0{i + 1}</div>
                <div className="hiw-icon">{s.svg}</div>
                <div className="hiw-title">{s.title}</div>
                <div className="hiw-desc">{s.desc}</div>
              </div>
              {i < steps.length - 1 && <div className="hiw-connector"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────

function FooterSection({ onResOpen }) {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-logo">Shiro</div>
        <div className="foot-addr">
          Saarbruecken, Bahnhofstrasse 110<br />
          Доставка: Пн – Сб 17:00 – 22:00 · Замовлення до 21:15
        </div>
        <div className="foot-copy">© 2026 Shiro</div>
      </div>
    </footer>
  );
}

// ── CART SIDEBAR ──────────────────────────────────────────────────────────────

function CartSidebar({ isOpen, onClose, items, total, onQtyUpdate, onCheckoutClick }) {
  return (
    <>
      <div className={`cart-overlay${isOpen ? ' open' : ''}`} onClick={onClose} />
      <div className={`cart-sidebar${isOpen ? ' open' : ''}`}>
        <div className="cart-head">
          <span className="cart-head-title">Ваше замовлення</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              <div className="cart-empty-text">Ваш кошик порожній</div>
              <div className="cart-empty-sub">Додайте позиції з меню нижче</div>
            </div>
          ) : (
            <div className="cart-items">
              {items.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="ci-info">
                    <div className="ci-name">{item.name}</div>
                    <div className="ci-jp">{item.jp}</div>
                    <div className="ci-price">{fmt(item.price * item.qty)}</div>
                  </div>
                  <div className="ci-qty">
                    <button className="qty-btn" onClick={() => onQtyUpdate(item.id, -1)}>−</button>
                    <div className="qty-val">{item.qty}</div>
                    <button className="qty-btn" onClick={() => onQtyUpdate(item.id, 1)}>+</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="cart-foot">
            <div className="cart-subtotal">
              <span className="cart-sub-label">Проміжна сума</span>
              <span className="cart-sub-price">{fmt(total)}</span>
            </div>
            <button className="cart-checkout" onClick={onCheckoutClick}>Перейти до оплати →</button>
            <div className="cart-note">Доставка в межах Saarbruecken</div>
          </div>
        )}
      </div>
    </>
  );
}

// ── RESERVATION MODAL ─────────────────────────────────────────────────────────

function CalendarView({ selDate, onSelect }) {
  const now = new Date();
  const [year, setYear] = React.useState(now.getFullYear());
  const [month, setMonth] = React.useState(now.getMonth());
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const minDate = new Date(today.getTime() + 86400000);

  const days = [];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  const isPast = d => d && new Date(year, month, d) < minDate;
  const isSel  = d => d && selDate && selDate.y === year && selDate.m === month && selDate.d === d;
  const isToday = d => d && new Date(year, month, d).getTime() === today.getTime();

  const prev = () => month === 0 ? (setYear(y => y - 1), setMonth(11)) : setMonth(m => m - 1);
  const next = () => month === 11 ? (setYear(y => y + 1), setMonth(0)) : setMonth(m => m + 1);

  return (
    <div>
      <div className="cal-head">
        <button className="cal-nav" onClick={prev}>‹</button>
        <div className="cal-month">{MONTHS[month]} {year}</div>
        <button className="cal-nav" onClick={next}>›</button>
      </div>
      <div className="cal-dow">{DOW.map(d => <div className="cal-dn" key={d}>{d}</div>)}</div>
      <div className="cal-grid">
        {days.map((d, i) => (
          <div key={i}
            className={`cal-day${!d ? ' empty' : ''}${isPast(d) ? ' dis' : ''}${isSel(d) ? ' sel' : ''}${isToday(d) ? ' today' : ''}`}
            onClick={() => d && !isPast(d) && onSelect({ y: year, m: month, d })}>
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReservationModal({ isOpen, onClose }) {
  const [step, setStep]       = React.useState(0);
  const [selDate, setSelDate] = React.useState(null);
  const [selTime, setSelTime] = React.useState('');
  const [selZone, setSelZone] = React.useState('');
  const [form, setForm]       = React.useState({ name:'', phone:'', email:'', guests:'2', comment:'' });
  const [ref]                 = React.useState(() => 'SH-' + Math.random().toString(36).slice(2,8).toUpperCase());

  React.useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setStep(0); setSelDate(null); setSelTime(''); setSelZone('');
        setForm({ name:'', phone:'', email:'', guests:'2', comment:'' });
      }, 500);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const canNext0 = !!selDate;
  const canNext1 = selTime && selZone;
  const canNext2 = form.name && form.email && form.phone;

  const stepLabels = ['Дата', 'Час і зона', 'Деталі'];

  return (
    <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-head">
          <span className="modal-title">Забронювати стіл</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        {step < 3 && (
          <div className="modal-steps">
            {stepLabels.map((l, i) => (
              <div key={l} className={`modal-step-tab${step === i ? ' active' : ''}`}>{l}</div>
            ))}
          </div>
        )}
        <div className="modal-body">

          {step === 0 && (
            <>
              <CalendarView selDate={selDate} onSelect={setSelDate} />
              <div className="modal-actions">
                <button className="modal-btn-p" onClick={() => setStep(1)} disabled={!canNext0}>Продовжити →</button>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div style={{ marginBottom: 26 }}>
                <div className="form-label" style={{ marginBottom: 10 }}>Оберіть час</div>
                <div className="time-grid">
                  {SLOTS.map(s => (
                    <div key={s} className={`time-slot${selTime === s ? ' sel' : ''}`} onClick={() => setSelTime(s)}>{s}</div>
                  ))}
                </div>
              </div>
              <div>
                <div className="form-label" style={{ marginBottom: 10 }}>Зона посадки</div>
                <div className="zone-grid">
                  {ZONES.map(z => (
                    <div key={z.id} className={`zone-card${selZone === z.id ? ' sel' : ''}`} onClick={() => setSelZone(z.id)}>
                      <div className="zone-label">{z.label}</div>
                      <div className="zone-sub">{z.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-actions">
                <button className="modal-btn-s" onClick={() => setStep(0)}>← Назад</button>
                <button className="modal-btn-p" onClick={() => setStep(2)} disabled={!canNext1}>Продовжити →</button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="res-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Повне ім’я</label>
                    <input className="form-input" placeholder="Олена Коваль" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Телефон</label>
                    <input className="form-input" placeholder="+49 681 000000" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" placeholder="email@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Кількість гостей</label>
                    <select className="form-select" value={form.guests} onChange={e => setForm(f => ({ ...f, guests: e.target.value }))}>
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} гост.</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Побажання до страв</label>
                    <input className="form-input" placeholder="Алергії, вподобання…" value={form.comment} onChange={e => setForm(f => ({ ...f, comment: e.target.value }))} />
                  </div>
                </div>
                {selDate && (
                  <div className="booking-summary">
                    {selDate.d} {MONTHS[selDate.m]} {selDate.y} · {selTime} · {ZONES.find(z => z.id === selZone)?.label} · {form.guests} гост.
                  </div>
                )}
              </div>
              <div className="modal-actions">
                <button className="modal-btn-s" onClick={() => setStep(1)}>← Назад</button>
                <button className="modal-btn-p" onClick={() => setStep(3)} disabled={!canNext2}>Підтвердити бронювання</button>
              </div>
            </>
          )}

          {step === 3 && (
            <div className="confirm">
              <div className="confirm-circle">
                <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="confirm-title">Бронювання підтверджено.</div>
              <div className="confirm-sub">
                Чекаємо на вас{form.name ? `, ${form.name}` : ''}.<br />
                Підтвердження надіслано на {form.email || 'ваш email'}.
              </div>
              <div className="confirm-ref">{ref}</div>
              <div className="modal-actions" style={{ justifyContent: 'center', marginTop: 24 }}>
                <button className="modal-btn-s" onClick={onClose}>Закрити</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// ── CHECKOUT MODAL ─────────────────────────────────────────────────────────────

function CheckoutModal({ isOpen, onClose, items, total, onConfirmOrder }) {
  const [form, setForm] = React.useState({
    fullName: '',
    phone: '',
    address: '',
    deliveryTime: 'asap',
    specificTime: '',
    paymentMethod: 'cash',
    comment: ''
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setForm({
          fullName: '',
          phone: '',
          address: '',
          deliveryTime: 'asap',
          specificTime: '',
          paymentMethod: 'cash',
          comment: ''
        });
        setErrors({});
        setIsSubmitting(false);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Вкажіть повне ім’я';
    if (!form.phone.trim()) newErrors.phone = 'Вкажіть номер телефону';
    if (!form.address.trim()) newErrors.address = 'Вкажіть адресу доставки';
    if (form.deliveryTime === 'specific' && !form.specificTime.trim()) {
      newErrors.specificTime = 'Оберіть час доставки';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const orderData = {
      orderId: `ORD-${Date.now()}`,
      items: items.map(i => ({ id: i.id, name: i.name, qty: i.qty, price: i.price })),
      total,
      customer: {
        fullName: form.fullName,
        phone: form.phone,
        address: form.address
      },
      delivery: {
        type: form.deliveryTime,
        time: form.deliveryTime === 'asap' ? 'Якнайшвидше' : form.specificTime
      },
      paymentMethod: form.paymentMethod,
      comment: form.comment,
      createdAt: new Date().toISOString()
    };

    onConfirmOrder(orderData);
  };

  const deliveryTimeOptions = [
    { value: 'asap', label: 'Якнайшвидше' },
    { value: 'specific', label: 'Обрати конкретний час' }
  ];

  const paymentMethods = [
    { value: 'cash', label: 'Готівкою при отриманні' },
    { value: 'card', label: 'Карткою при отриманні' },
    { value: 'online', label: 'Онлайн-оплата' }
  ];

  return (
    <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal checkout-modal">
        <div className="modal-head">
          <span className="modal-title">Оформлення замовлення</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body checkout-body">
          <form onSubmit={handleSubmit}>
            <div className="checkout-grid">
              <div className="checkout-form">
                <div className="form-group">
                  <label className="form-label">Повне ім’я *</label>
                  <input
                    className={`form-input${errors.fullName ? ' error' : ''}`}
                    placeholder="Олена Коваль"
                    value={form.fullName}
                    onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                  />
                  {errors.fullName && <div className="form-error">{errors.fullName}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Номер телефону *</label>
                  <input
                    className={`form-input${errors.phone ? ' error' : ''}`}
                    placeholder="+49 681 000000"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  />
                  {errors.phone && <div className="form-error">{errors.phone}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Адреса доставки *</label>
                  <input
                    className={`form-input${errors.address ? ' error' : ''}`}
                    placeholder="Saarbruecken, Bahnhofstrasse 110"
                    value={form.address}
                    onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                  />
                  {errors.address && <div className="form-error">{errors.address}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Час доставки</label>
                  <div className="radio-group">
                    {deliveryTimeOptions.map(opt => (
                      <label key={opt.value} className="radio-option">
                        <input
                          type="radio"
                          name="deliveryTime"
                          value={opt.value}
                          checked={form.deliveryTime === opt.value}
                          onChange={e => setForm(f => ({ ...f, deliveryTime: e.target.value }))}
                        />
                        <span className="radio-label">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                  {form.deliveryTime === 'specific' && (
                    <input
                      className={`form-input${errors.specificTime ? ' error' : ''}`}
                      style={{ marginTop: 10 }}
                      type="time"
                      value={form.specificTime}
                      onChange={e => setForm(f => ({ ...f, specificTime: e.target.value }))}
                    />
                  )}
                  {errors.specificTime && <div className="form-error">{errors.specificTime}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Спосіб оплати</label>
                  <div className="radio-group">
                    {paymentMethods.map(method => (
                      <label key={method.value} className="radio-option">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.value}
                          checked={form.paymentMethod === method.value}
                          onChange={e => setForm(f => ({ ...f, paymentMethod: e.target.value }))}
                        />
                        <span className="radio-label">{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Коментар для кур’єра / ресторану</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Особливі побажання, алергії тощо"
                    value={form.comment}
                    onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
                  />
                </div>
              </div>

              <div className="checkout-summary">
                <div className="checkout-summary-title">Підсумок замовлення</div>
                <div className="checkout-items">
                  {items.map(item => (
                    <div className="checkout-item" key={item.id}>
                      <div className="checkout-item-info">
                        <div className="checkout-item-name">{item.name}</div>
                        <div className="checkout-item-qty">× {item.qty}</div>
                      </div>
                      <div className="checkout-item-price">{fmt(item.price * item.qty)}</div>
                    </div>
                  ))}
                </div>
                <div className="checkout-total">
                  <span className="checkout-total-label">Разом</span>
                  <span className="checkout-total-price">{fmt(total)}</span>
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button type="button" className="modal-btn-s" onClick={onClose}>← Назад</button>
              <button type="submit" className="modal-btn-p" disabled={isSubmitting}>
                {isSubmitting ? 'Обробка...' : 'Підтвердити замовлення'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ── SUCCESS MODAL ───────────────────────────────────────────────────────────────

function SuccessModal({ isOpen, onClose, orderId }) {
  return (
    <div className={`modal-overlay${isOpen ? ' open' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal success-modal">
        <div className="modal-body" style={{ padding: '48px 36px', textAlign: 'center' }}>
          <div className="success-icon">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div className="success-title">Дякуємо!</div>
          <div className="success-sub">
            Ваше замовлення успішно оформлено.<br />
            Номер замовлення:
          </div>
          <div className="success-order-id">{orderId}</div>
          <div className="modal-actions" style={{ justifyContent: 'center', marginTop: 32 }}>
            <button className="modal-btn-p" onClick={onClose}>Закрити</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ROOT APP ──────────────────────────────────────────────────────────────────

function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [resOpen,  setResOpen]  = React.useState(false);
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [lastOrderId, setLastOrderId] = React.useState('');
  const { items, addItem, updateQty, clearCart, total, count } = useCart();
  useReveal();

  const addWithPulse = React.useCallback(item => {
    addItem(item);
    const badge = document.getElementById('cart-badge');
    if (badge) {
      badge.classList.remove('pulse');
      void badge.offsetWidth;
      badge.classList.add('pulse');
      setTimeout(() => badge.classList.remove('pulse'), 380);
    }
  }, [addItem]);

  const handleCheckoutClick = React.useCallback(() => {
    if (items.length === 0) {
      alert('Ваш кошик порожній');
      return;
    }
    setCartOpen(false);
    setCheckoutOpen(true);
  }, [items.length]);

  const handleConfirmOrder = React.useCallback((orderData) => {
    const orders = JSON.parse(localStorage.getItem('shiro_orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('shiro_orders', JSON.stringify(orders));

    setLastOrderId(orderData.orderId);
    clearCart();
    setCheckoutOpen(false);
    setSuccessOpen(true);
  }, [clearCart]);

  const handleCloseSuccess = React.useCallback(() => {
    setSuccessOpen(false);
    setLastOrderId('');
  }, []);

  return (
    <>
      <Navbar count={count} onCartOpen={() => setCartOpen(true)} onResOpen={() => setResOpen(true)} />
      <HeroSection count={count} onCartOpen={() => setCartOpen(true)} onResOpen={() => setResOpen(true)} />
      <DeliveryBand />
      <PhilosophySection />
      <CinematicBlock onOrder={() => setCartOpen(true)} />
      <MenuSection onAdd={addWithPulse} />
      <PackagingBlock />
      <HowItWorks />
      <FooterSection onResOpen={() => setResOpen(true)} />
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        total={total}
        onQtyUpdate={updateQty}
        onCheckoutClick={handleCheckoutClick}
      />
      <ReservationModal isOpen={resOpen} onClose={() => setResOpen(false)} />
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={items}
        total={total}
        onConfirmOrder={handleConfirmOrder}
      />
      <SuccessModal
        isOpen={successOpen}
        onClose={handleCloseSuccess}
        orderId={lastOrderId}
      />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app-root')).render(<App />);
