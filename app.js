// ============ CONFIGURAÇÃO EMBUTIDA ============
// ⚠️ COLE SUA ANON KEY DO SUPABASE NA LINHA ABAIXO, ENTRE AS ASPAS
const EMBEDDED_SUPABASE_URL = "https://whnecgygzbvzjyeruqbe.supabase.co";
const EMBEDDED_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndobmVjZ3lnemJ2emp5ZXJ1cWJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0ODAxMzcsImV4cCI6MjA5MjA1NjEzN30.Z46vW8pceMuSXDL4Sv04j05ML_pW_I2eRAy1jhZFpaU";

// ============ AMAZON PRODUCT ADVERTISING API ============
// Para capas de maior qualidade. Deixe vazio para usar Open Library (gratuito).
const AMAZON_ACCESS_KEY = "";
const AMAZON_SECRET_KEY = "";
const AMAZON_PARTNER_TAG = "";
const AMAZON_MARKETPLACE = "www.amazon.com.br";

// ============ DADOS INICIAIS ============
const BOOKS_INITIAL = [
  { t: "A Vida é Muito Curta", a: "Abby Jimenez", g: "romance" },
  { t: "Apenas amigos", a: "Abby Jimenez", g: "romance" },
  { t: "Parte do seu Mundo", a: "Abby Jimenez", g: "romance" },
  { t: "Playlist para um Final Feliz", a: "Abby Jimenez", g: "romance" },
  { t: "Prometa que Vai se Lembrar de Mim", a: "Abby Jimenez", g: "romance" },
  { t: "Como Arruinar um Casamento", a: "Alison Espach", g: "romance" },
  { t: "Ontem à Noite", a: "Mhairi McFarlane", g: "romance" },
  { t: "Prazer ou Negócios", a: "Rachel Lynn", g: "romance" },
  { t: "A Última Carta", a: "Rebecca Yarros", g: "romance" },
  { t: "Cúmplices de um Escândalo", a: "Lucy Vargas", g: "romance" },
  { t: "A Casa no Mar Cerúleo", a: "TJ Klune", g: "fantasia" },
  { t: "A Dança da Floresta", a: "Juliet Marillier", g: "fantasia" },
  { t: "A Filha do Rei de Elfland", a: "Lord Dunsany", g: "fantasia" },
  { t: "A Montanha das Feras", a: "Juliet Marillier", g: "fantasia" },
  { t: "A Ruína de um Reino", a: "Alexandra Christo", g: "fantasia" },
  { t: "Cafés & Lendas", a: "Travis Baldree", g: "fantasia" },
  { t: "Enciclopédia das Fadas de Emily Wilde", a: "Heather Fawcett", g: "fantasia" },
  { t: "Entre Feras & Flores", a: "Ashley Poston", g: "fantasia" },
  { t: "No Coração da Floresta", a: "Emily Winfield Martin", g: "fantasia" },
  { t: "O Encanto dos Corvos", a: "Margaret Rogerson", g: "fantasia" },
  { t: "O Feitiço dos Espinhos", a: "Margaret Rogerson", g: "fantasia" },
  { t: "Os Noivos do Inverno", a: "Christelle Dabos", g: "fantasia" },
  { t: "Alchemised", a: "SenLinYu", g: "fantasia" },
  { t: "A Contadora", a: "Freida McFadden", g: "suspense" },
  { t: "A outra", a: "Mary Kubica", g: "suspense" },
  { t: "O paciente", a: "Jasper DeWitt", g: "suspense" },
  { t: "Enigma", a: "RuNyx", g: "suspense" },
  { t: "A Maldição do Ex", a: "Rachel Hawkins", g: "bruxaria" },
  { t: "Lois, A Bruxa", a: "Elizabeth Gaskell", g: "bruxaria" },
];

const DEFAULT_GENRES = {
  romance: { name: "Romance", emoji: "🌸", color: "c-rose", preview: "histórias pra sorrir ou chorar junto" },
  fantasia: { name: "Fantasia", emoji: "🧝🏻‍♀️", color: "c-lavender", preview: "mundos mágicos e criaturas encantadas" },
  suspense: { name: "Suspense", emoji: "🔪", color: "c-sky", preview: "pra ler de madrugada com as luzes acesas" },
  bruxaria: { name: "Bruxaria & Gótico", emoji: "🌙", color: "c-butter", preview: "feitiços, maldições e atmosfera sombria" },
};

const DEFAULT_PALETTE = {
  romance: ["#e8a9a0", "#c97b72", "#f0c5bf", "#d89890", "#e8b8b0"],
  fantasia: ["#b8a8c9", "#8a7a9c", "#d0c0dc", "#a898b8", "#c4b4d4"],
  suspense: ["#a8c4d8", "#7a9aac", "#bcd0e0", "#98b4c8", "#b0c8dc"],
  bruxaria: ["#e8c88a", "#c9a65a", "#f0d89c", "#d8b872", "#e0c078"],
};

// Paletas disponíveis para escolher ao criar novo gênero
const COLOR_OPTIONS = [
  { id: "c-rose", name: "rosé", bg: "#f5d5cf", palette: ["#e8a9a0", "#c97b72", "#f0c5bf", "#d89890", "#e8b8b0"] },
  { id: "c-lavender", name: "lavanda", bg: "#dfd0e8", palette: ["#b8a8c9", "#8a7a9c", "#d0c0dc", "#a898b8", "#c4b4d4"] },
  { id: "c-butter", name: "mostarda", bg: "#f0dda5", palette: ["#e8c88a", "#c9a65a", "#f0d89c", "#d8b872", "#e0c078"] },
  { id: "c-sky", name: "céu", bg: "#cde0ea", palette: ["#a8c4d8", "#7a9aac", "#bcd0e0", "#98b4c8", "#b0c8dc"] },
  { id: "c-sage", name: "sálvia", bg: "#d4dfc4", palette: ["#a8b89a", "#7a8b6c", "#c4d0b4", "#98a888", "#b4c4a4"] },
  { id: "c-peach", name: "pêssego", bg: "#f0d5bc", palette: ["#e8b89a", "#c9956c", "#f0c8a8", "#d8a880", "#e0b890"] },
  { id: "c-mint", name: "menta", bg: "#d4e5da", palette: ["#b8d4c9", "#8aaca0", "#c8dcd0", "#a0bcae", "#bed0c4"] },
  { id: "c-blush", name: "blush", bg: "#f0dde0", palette: ["#e8c4c9", "#c99aa0", "#f0d0d5", "#d8a8ae", "#e0b8be"] },
];

// State atual dos gêneros (pode ser modificado em runtime)
let GENRES = { ...DEFAULT_GENRES };
let PALETTE = { ...DEFAULT_PALETTE };

const MONTH_NAMES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

// ============ STATE ============
const CONFIG_KEY = "minha_estante_config";
const LOGIN_KEY  = "minha_estante_login";
let currentUser = null; // objeto de sessão Supabase Auth { id, email, user_metadata }
let STORAGE_KEY  = "minha_estante_v3";
let state  = { books: [], filter: "reading", covers: {}, selectedYear: null };
let config = loadConfig();
let supabase = null;
let syncing  = false;
let initialSyncDone = false; // vira true após o primeiro sync; evita buscar capas automáticas
                             // antes do banco devolver as capas escolhidas manualmente

// Fila para busca de capas — evita rate limit (429/503) da Google Books API
let _coverQueue = [];
let _coverRunning = false;

async function _processCoverQueue() {
  if (_coverRunning) return;
  _coverRunning = true;
  while (_coverQueue.length > 0) {
    const { title, author, resolveCover, resolvePages } = _coverQueue.shift();
    const meta = await fetchBookMeta(title, author);
    resolveCover(meta.cover);
    if (resolvePages) resolvePages(meta.pages);
    // 500ms entre requisições — Open Library é generosa mas não ilimitada
    if (_coverQueue.length > 0) await new Promise(r => setTimeout(r, 500));
  }
  _coverRunning = false;
}

function queueMeta(title, author) {
  // Retorna { cover, pages } via fila throttled
  return new Promise(resolve => {
    const key = coverKey(title, author);
    const hasCover = state.covers && state.covers[key];
    const hasPages = pagesWasChecked(key);
    if (hasCover && hasPages) {
      resolve({
        cover: state.covers[key] === "NONE" ? null : state.covers[key],
        pages: getCachedPages(key),
      });
      return;
    }
    const already = _coverQueue.find(x => x.title === title && x.author === author);
    if (already) {
      const prevCover = already.resolveCover;
      const prevPages = already.resolvePages;
      already.resolveCover = (url)   => { prevCover(url); resolve({ cover: url, pages: null }); };
      already.resolvePages = (pages) => { if (prevPages) prevPages(pages); };
      return;
    }
    _coverQueue.push({
      title, author,
      resolveCover: (cover) => resolve({ cover, pages: getCachedPages(coverKey(title, author)) }),
      resolvePages: null,
    });
    _processCoverQueue();
  });
}

// Compat: queueCover ainda funciona para chamadas isoladas
function queueCover(title, author) {
  return queueMeta(title, author).then(m => m.cover);
}

// ============ LOGIN — Supabase Auth ============
let _loginTab = "entrar"; // "entrar" | "cadastro"

let _selectedGender = null;
let _selectedProfileGender = null;

function selectGender(g) {
  _selectedGender = g;
  window._selectedGender = g;
  document.getElementById("genderFem").className  = "gender-btn" + (g === "feminino"  ? " selected-fem"  : "");
  document.getElementById("genderMasc").className = "gender-btn" + (g === "masculino" ? " selected-masc" : "");
}

function selectProfileGender(g) {
  _selectedProfileGender = g;
  document.getElementById("profileGenderFem").className  = "gender-btn" + (g === "feminino"  ? " selected-fem"  : "");
  document.getElementById("profileGenderMasc").className = "gender-btn" + (g === "masculino" ? " selected-masc" : "");
}

async function saveProfileGender() {
  if (!_selectedProfileGender) { alert("Seleciona uma opção ✦"); return; }
  if (!currentUser) return;
  const { url, key } = getSupabaseCreds();
  try {
    setSyncStatus("syncing", "↻ salvando perfil");
    const resp = await fetch(`${url}/auth/v1/user`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "apikey": key, "Authorization": `Bearer ${currentUser.token}` },
      body: JSON.stringify({ data: { display_name: currentUser.name, gender: _selectedProfileGender } }),
    });
    if (!resp.ok) throw new Error("Erro ao salvar");
    currentUser.gender = _selectedProfileGender;
    applyGender(_selectedProfileGender);
    setSyncStatus("synced", "✦ perfil salvo");
    alert("Perfil atualizado ✦");
  } catch(e) {
    console.error(e);
    setSyncStatus("error", "⚠ erro ao salvar perfil");
  }
}

function switchLoginTab(tab) {
  _selectedGender = null; window._selectedGender = null;
  _loginTab = tab;
  document.getElementById("loginForm").style.display    = tab === "entrar"   ? "block" : "none";
  document.getElementById("cadastroForm").style.display = tab === "cadastro" ? "block" : "none";
  document.getElementById("tabEntrar").classList.toggle("active",   tab === "entrar");
  document.getElementById("tabCadastro").classList.toggle("active", tab === "cadastro");
  document.getElementById("loginSub").textContent =
    tab === "entrar" ? "bem-vinda(o) de volta ✦" : "cria sua conta ✦";
  document.getElementById("loginErr").classList.remove("show");
}

function showLogin() {
  document.getElementById("loginOverlay").style.display = "flex";
  document.body.style.overflow = "hidden";
  switchLoginTab("entrar");
  document.getElementById("loginEmail").value    = "";
  document.getElementById("loginPassword").value = "";
}

function hideLogin() {
  document.getElementById("loginOverlay").style.display = "none";
  document.body.style.overflow = "";
}

function setLoginError(msg) {
  const el = document.getElementById("loginErr");
  el.textContent = msg;
  el.classList.add("show");
}

function setLoginLoading(loading) {
  const btn1 = document.getElementById("loginEnterBtn");
  const btn2 = document.getElementById("cadastroBtn");
  btn1.disabled = loading;
  btn2.disabled = loading;
  if (loading) {
    btn1.textContent = "aguarda ✦";
    btn2.textContent = "aguarda ✦";
  } else {
    btn1.textContent = "Entrar ✦";
    btn2.textContent = "Criar conta ✦";
  }
}

// Retorna URL e Key do Supabase — config salvo ou constantes embutidas
function getSupabaseCreds() {
  const url = config.supabaseUrl || EMBEDDED_SUPABASE_URL || "";
  const key = config.supabaseKey || EMBEDDED_SUPABASE_KEY || "";
  return { url: url.replace(/\/$/, ''), key };
}

async function doLogin() {
  const email    = (document.getElementById("loginEmail").value    || "").trim();
  const password =  document.getElementById("loginPassword").value || "";
  document.getElementById("loginErr").classList.remove("show");

  if (!email || !password) { setLoginError("Preenche e-mail e senha ✦"); return; }

  const { url, key } = getSupabaseCreds();
  if (!url || !key || key === "SUA_CHAVE_AQUI") {
    setLoginError("Chave do Supabase não configurada. Contate o administrador."); return;
  }

  setLoginLoading(true);
  try {
    const resp = await fetch(`${url}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "apikey": key },
      body: JSON.stringify({ email, password }),
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error_description || data.msg || "E-mail ou senha incorretos");
    afterLogin(data);
  } catch(e) {
    setLoginError(e.message);
  } finally {
    setLoginLoading(false);
  }
}

async function doSignUp() {
  const name     = (document.getElementById("cadastroName").value     || "").trim();
  const email    = (document.getElementById("cadastroEmail").value    || "").trim();
  const password =  document.getElementById("cadastroPassword").value || "";
  document.getElementById("loginErr").classList.remove("show");

  if (!name)  { setLoginError("Coloca seu nome ✦"); return; }
  if (!email) { setLoginError("Coloca seu e-mail ✦"); return; }
  if (password.length < 6) { setLoginError("Senha precisa ter pelo menos 6 caracteres ✦"); return; }

  const { url, key } = getSupabaseCreds();
  if (!url || !key || key === "SUA_CHAVE_AQUI") {
    setLoginError("Chave do Supabase não configurada. Contate o administrador."); return;
  }

  setLoginLoading(true);
  try {
    const resp = await fetch(`${url}/auth/v1/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "apikey": key },
      body: JSON.stringify({ email, password, data: { display_name: name, gender: window._selectedGender || null } }),
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error_description || data.msg || "Erro ao criar conta");
    if (data.access_token) {
      afterLogin(data);
    } else {
      setLoginError("Conta criada! Verifica seu e-mail para confirmar, depois faz login.");
      switchLoginTab("entrar");
    }
  } catch(e) {
    setLoginError(e.message);
  } finally {
    setLoginLoading(false);
  }
}

function applySession(authData, options = {}) {
  // authData tem access_token, user { id, email, user_metadata }
  const user = authData.user;
  const gender = (user.user_metadata && user.user_metadata.gender) || null;
  currentUser = {
    id:      user.id,
    email:   user.email,
    name:    (user.user_metadata && user.user_metadata.display_name) || user.email.split("@")[0],
    token:   authData.access_token,
    refresh: authData.refresh_token,
    expiresAt: authData.expires_at || (Math.floor(Date.now() / 1000) + (authData.expires_in || 3600)),
    gender:  gender,
  };
  try { localStorage.setItem(LOGIN_KEY, JSON.stringify({ token: currentUser.token, refresh: currentUser.refresh, user, expiresAt: currentUser.expiresAt })); } catch(e) {}

  STORAGE_KEY = `minha_estante_v3_${currentUser.id}`;
  document.getElementById("userChip").style.display = "flex";
  document.getElementById("userChipName").textContent = currentUser.name;
  applyGender(gender);
  hideLogin();

  // Mostra imediatamente o que já está salvo neste aparelho.
  // Depois o Supabase confirma/atualiza sem deixar a tela vazia no F5.
  state = loadState();
  migrateBookData();
  state.filter = "reading";
  updateHero("reading");
  saveState();
  renderAll();

  if (options.runInit) init();
}

function afterLogin(authData) {
  applySession(authData, { runInit: true });
}

function applyGender(gender) {
  // Aplica classe no body pra reskinning de cores rosa → azul
  if (gender === "masculino") {
    document.body.classList.add("user-masc");
  } else {
    document.body.classList.remove("user-masc");
  }
  
  const el = document.getElementById("heroWord");
  if (!el) return;
  if (gender === "masculino") {
    el.classList.add("gender-masc");
  } else {
    el.classList.remove("gender-masc");
  }
  // Saudação neutra (não varia mais por gênero)
  const sub = document.getElementById("loginSub");
  if (sub) sub.textContent = "bem-vinda(o) de volta ✦";
}

async function tryAutoLogin() {
  try {
    const saved = localStorage.getItem(LOGIN_KEY);
    if (!saved) return false;
    const { token, refresh, user, expiresAt } = JSON.parse(saved);
    if (!token || !user) return false;
    const { url, key } = getSupabaseCreds();
    if (!url || !key || key === "SUA_CHAVE_AQUI") return false;

    const now = Math.floor(Date.now() / 1000);
    if (expiresAt && expiresAt - now > 60) {
      applySession({ access_token: token, refresh_token: refresh, user, expires_at: expiresAt });
      return true;
    }

    const resp = await fetch(`${url}/auth/v1/token?grant_type=refresh_token`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "apikey": key },
      body: JSON.stringify({ refresh_token: refresh }),
    });
    if (!resp.ok) { localStorage.removeItem(LOGIN_KEY); return false; }
    const data = await resp.json();
    applySession(data);
    return true;
  } catch(e) { return false; }
}

function doLogout() {
  if (!confirm("Sair da conta?")) return;
  currentUser = null;
  try { localStorage.removeItem(LOGIN_KEY); } catch(e) {}
  document.getElementById("userChip").style.display = "none";
  document.getElementById("userChipName").textContent = "—";
  document.body.classList.remove("user-masc");
  state = { books: [], filter: "reading", covers: {}, selectedYear: null };
  renderAll();
  showLogin();
}

// Enter nos campos de login
document.addEventListener("DOMContentLoaded", () => {
  ["loginEmail","loginPassword"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("keydown", e => { if (e.key === "Enter") doLogin(); });
  });
  ["cadastroName","cadastroEmail","cadastroPassword"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("keydown", e => { if (e.key === "Enter") doSignUp(); });
  });
});

function loadConfig() {
  try {
    const saved = localStorage.getItem(CONFIG_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Se temos credenciais embutidas válidas, SEMPRE usa — ignora skipSync salvo
      if (EMBEDDED_SUPABASE_URL && EMBEDDED_SUPABASE_KEY && EMBEDDED_SUPABASE_KEY !== "SUA_CHAVE_AQUI") {
        parsed.supabaseUrl = EMBEDDED_SUPABASE_URL;
        parsed.supabaseKey = EMBEDDED_SUPABASE_KEY;
        parsed.setupDone = true;
        parsed.skipSync  = false;
      }
      return parsed;
    }
  } catch(e) {}
  
  // Primeira vez: se temos credenciais embutidas válidas, já conecta direto
  if (EMBEDDED_SUPABASE_URL && EMBEDDED_SUPABASE_KEY && EMBEDDED_SUPABASE_KEY !== "SUA_CHAVE_AQUI") {
    return {
      supabaseUrl: EMBEDDED_SUPABASE_URL,
      supabaseKey: EMBEDDED_SUPABASE_KEY,
      setupDone: true,
    };
  }
  return { setupDone: false };
}

function saveConfig() {
  try { localStorage.setItem(CONFIG_KEY, JSON.stringify(config)); } catch(e) {}
}

function loadState() {
  const embedded = document.getElementById("__embedded_state__");
  if (embedded) {
    try {
      const parsed = JSON.parse(embedded.textContent);
      if (parsed && parsed.books) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        return parsed;
      }
    } catch(e) {}
  }
  
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      parsed.books = parsed.books.map(b => ({
        ...b,
        status: b.status || (b.read ? "lido" : "pendente"),
        favorite: b.favorite || false,
      }));
      if (!parsed.nextId) parsed.nextId = Math.max(0, ...parsed.books.map(b => b.id || 0)) + 1;
      if (!parsed.covers) parsed.covers = {};
      if (parsed.selectedYear === undefined) parsed.selectedYear = null;
      return parsed;
    }
  } catch(e) {}
  
  return {
    books: [],
    filter: "reading",
    nextId: 1,
    covers: {},
    selectedYear: null,
  };
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
}

// ============ SUPABASE (REST API simples, sem SDK) ============
function setSyncStatus(status, text) {
  const el = document.getElementById("syncIndicator");
  el.className = "sync-indicator " + status;
  document.getElementById("syncText").textContent = text;
}

// Renova o token silenciosamente se estiver a menos de 5 min de expirar
async function ensureFreshToken() {
  if (!currentUser || !currentUser.refresh) return;
  const now = Math.floor(Date.now() / 1000);
  const expiresAt = currentUser.expiresAt || 0;
  if (expiresAt - now > 300) return; // ainda tem mais de 5 min, ok
  try {
    const { url, key } = getSupabaseCreds();
    const resp = await fetch(`${url}/auth/v1/token?grant_type=refresh_token`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "apikey": key },
      body: JSON.stringify({ refresh_token: currentUser.refresh }),
    });
    if (!resp.ok) return;
    const data = await resp.json();
    currentUser.token     = data.access_token;
    currentUser.refresh   = data.refresh_token;
    currentUser.expiresAt = data.expires_at || (now + (data.expires_in || 3600));
    try { localStorage.setItem(LOGIN_KEY, JSON.stringify({ token: data.access_token, refresh: data.refresh_token, user: data.user, expiresAt: currentUser.expiresAt })); } catch(e) {}
  } catch(e) { /* falha silenciosa — a requisição principal vai retornar 401 */ }
}

async function supabaseFetch(path, options = {}) {
  if (!config.supabaseUrl || !config.supabaseKey) throw new Error("Supabase não configurado");
  await ensureFreshToken();
  const url = `${config.supabaseUrl.replace(/\/$/, '')}/rest/v1/${path}`;
  // Usa o JWT do usuário logado para Row Level Security funcionar corretamente
  const authToken = (currentUser && currentUser.token) ? currentUser.token : config.supabaseKey;
  const headers = {
    'apikey': config.supabaseKey,
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
    ...options.headers,
  };
  const resp = await fetch(url, { ...options, headers });
  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Supabase ${resp.status}: ${err}`);
  }
  // 204 No Content ou body vazio (return=minimal retorna 200 com body vazio)
  const text = await resp.text();
  if (!text || !text.trim()) return null;
  return JSON.parse(text);
}

// Mapear entre formato do banco e formato do app
function bookToDb(book) {
  // Anexa a capa escolhida/salva pra sincronizar entre dispositivos.
  // Prioridade: capa salva no próprio livro. O cache antigo por título+autor fica só como compatibilidade.
  const key = coverKey(book.t, book.a);
  const coverVal = book.coverUrl || (state.covers && state.covers[key]) || null;
  const coverForDb = (coverVal && coverVal !== "NONE") ? coverVal : null;
  return {
    id: book.id,
    title: book.t,
    author: book.a,
    genre: book.g,
    status: book.status,
    start_date: book.startDate || null,
    end_date: book.endDate || null,
    rating: book.rating || null,
    favorite: !!book.favorite,
    pages_total: book.pagesTotal || null,
    pages_current: book.pagesCurrent || 0,
    cover_url: coverForDb,
    fav_rank: (typeof book.favRank === 'number' && book.favRank > 0) ? book.favRank : null,
    user_id: currentUser ? currentUser.id : null,
  };
}

function bookFromDb(row) {
  return {
    id: row.id,
    t: row.title,
    a: row.author,
    g: row.genre,
    status: row.status,
    startDate: row.start_date || undefined,
    endDate: row.end_date || undefined,
    rating: row.rating || undefined,
    favorite: !!row.favorite,
    pagesTotal: row.pages_total || undefined,
    pagesCurrent: row.pages_current || 0,
    coverUrl: row.cover_url || undefined,
    coverAutoChecked: !!row.cover_url,
    coverLocked: !!row.cover_url,
    coverStatus: row.cover_url ? "saved" : undefined,
    favRank: (typeof row.fav_rank === 'number' && row.fav_rank > 0) ? row.fav_rank : undefined,
    _coverFromDb: row.cover_url || null, // temporário — consumido no sync
  };
}

async function syncFromSupabase() {
  if (!config.setupDone || !config.supabaseUrl) return;
  if (syncing) return;
  syncing = true;
  setSyncStatus("syncing", "↻ sincronizando");
  try {
    const userId = currentUser ? currentUser.id : null;
    // Busca APENAS os livros do usuário logado — livros órfãos (user_id null)
    // são adotados no init() antes do sync, então aqui só pegamos os do usuário.
    // Isso evita que livros de outro usuário (que ficaram órfãos) apareçam na estante.
    const filter = userId
      ? `user_id=eq.${encodeURIComponent(userId)}&`
      : '';
    const rows = await supabaseFetch(`books?${filter}select=*&order=id`);
    if (rows && Array.isArray(rows)) {
      const oldCovers = state.covers || {};
      state.books = rows.map(row => {
        const book = bookFromDb(row);
        // Hidrata capa vinda do banco no cache local — garante que a escolha
        // manual do usuário apareça em qualquer dispositivo
        if (book._coverFromDb) {
          const k = coverKey(book.t, book.a);
          oldCovers[k] = book._coverFromDb;
          book.coverUrl = book._coverFromDb;
          book.coverAutoChecked = true;
        }
        delete book._coverFromDb;
        return book;
      });
      state.covers = oldCovers;
      state.nextId = Math.max(0, ...state.books.map(b => b.id || 0)) + 1;
      saveState();
      initialSyncDone = true; // agora pode buscar capas automáticas pros livros sem capa salva
      renderAll();
      setSyncStatus("synced", "✦ sincronizado");
    }
  } catch (e) {
    console.error(e);
    setSyncStatus("error", "⚠ erro de sync");
  } finally {
    syncing = false;
  }
}

async function pushBook(book) {
  if (!config.setupDone || config.skipSync) return;
  if (location.protocol === 'file:') {
    setSyncStatus("error", "⚠ abra via HTTPS");
    return;
  }
  setSyncStatus("syncing", "↻ salvando");
  try {
    const data = bookToDb(book);
    try {
      await supabaseFetch("books", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Prefer': 'resolution=merge-duplicates,return=minimal' },
      });
    } catch (innerErr) {
      // Se o erro mencionar fav_rank, é coluna nova ainda não rodada no banco —
      // retira o campo e tenta de novo pra não quebrar o sync.
      const msg = String(innerErr && innerErr.message || '');
      if (msg.includes('fav_rank')) {
        const fallback = { ...data };
        delete fallback.fav_rank;
        await supabaseFetch("books", {
          method: 'POST',
          body: JSON.stringify(fallback),
          headers: { 'Prefer': 'resolution=merge-duplicates,return=minimal' },
        });
      } else {
        throw innerErr;
      }
    }
    setSyncStatus("synced", "✦ sincronizado");
  } catch (e) {
    console.error(e);
    setSyncStatus("error", "⚠ erro ao salvar");
  }
}

async function pushNewBook(book) {
  if (!config.setupDone) return;
  setSyncStatus("syncing", "↻ salvando");
  try {
    const data = bookToDb(book);
    let result;
    try {
      result = await supabaseFetch("books", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Prefer': 'resolution=merge-duplicates,return=representation' },
      });
    } catch (innerErr) {
      const msg = String(innerErr && innerErr.message || '');
      if (msg.includes('fav_rank')) {
        const fallback = { ...data };
        delete fallback.fav_rank;
        result = await supabaseFetch("books", {
          method: 'POST',
          body: JSON.stringify(fallback),
          headers: { 'Prefer': 'resolution=merge-duplicates,return=representation' },
        });
      } else {
        throw innerErr;
      }
    }
    // Se o servidor devolveu um ID diferente (unlikely pq a gente envia), atualiza
    if (result && result[0] && result[0].id !== book.id) {
      book.id = result[0].id;
      saveState();
    }
    setSyncStatus("synced", "✦ sincronizado");
  } catch (e) {
    console.error(e);
    setSyncStatus("error", "⚠ erro ao salvar");
  }
}

async function deleteBookFromDb(id) {
  if (!config.setupDone) return;
  try {
    await supabaseFetch(`books?id=eq.${id}`, { method: 'DELETE' });
    setSyncStatus("synced", "✦ sincronizado");
  } catch (e) {
    console.error(e);
    setSyncStatus("error", "⚠ erro ao deletar");
  }
}

async function seedInitialBooks() {
  // Novo usuário: começa com estante vazia
  state.books = [];
  state.nextId = 1;
  saveState();
  renderAll();
  setSyncStatus("synced", "✦ sincronizado");
}

async function forceSync() {
  closeMenu();
  await syncFromSupabase();
}

// ============ SETUP ============
function showSetup() {
  document.getElementById("setupOverlay").style.display = "flex";
}

function hideSetup() {
  document.getElementById("setupOverlay").style.display = "none";
}

function copySql() {
  const text = document.getElementById("sqlBlock").textContent;
  navigator.clipboard.writeText(text).then(
    () => alert("SQL copiado ✦"),
    () => alert("Não consegui copiar. Seleciona manual :(")
  );
}

async function connectSupabase() {
  const url = document.getElementById("supabaseUrl").value.trim();
  const key = document.getElementById("supabaseKey").value.trim();
  const errEl = document.getElementById("setupErr");
  errEl.classList.remove("show");
  
  if (!url || !key) {
    errEl.textContent = "Preenche os dois campos ✦";
    errEl.classList.add("show");
    return;
  }
  if (!url.startsWith("http")) {
    errEl.textContent = "A URL precisa começar com https://";
    errEl.classList.add("show");
    return;
  }
  
  // Testa conexão
  try {
    const resp = await fetch(`${url.replace(/\/$/, '')}/rest/v1/books?select=id&limit=1`, {
      headers: { 'apikey': key, 'Authorization': `Bearer ${key}` }
    });
    if (!resp.ok) {
      const t = await resp.text();
      throw new Error(t);
    }
    const data = await resp.json();
    
    config.supabaseUrl = url;
    config.supabaseKey = key;
    config.setupDone = true;
    saveConfig();
    
    // Se o banco tá vazio, popula com BOOKS_INITIAL
    if (data.length === 0) {
      state = {
        books: BOOKS_INITIAL.map((b, i) => ({ ...b, id: i + 1, status: "pendente", favorite: false })),
        filter: "reading",
        nextId: BOOKS_INITIAL.length + 1,
        covers: {},
      };
      saveState();
      await seedInitialBooks();
    } else {
      // Puxa tudo do banco
      await syncFromSupabase();
    }
    
    hideSetup();
    renderAll();
  } catch (e) {
    errEl.innerHTML = `Erro de conexão. Conferiu se rodou o SQL? <br><small>${e.message}</small>`;
    errEl.classList.add("show");
  }
}

function skipSetup() {
  config.setupDone = true;
  config.skipSync = true;
  saveConfig();
  state = loadState();
  state.filter = "reading";
  initialSyncDone = true; // modo offline — libera busca de capas automáticas
  hideSetup();
  renderAll();
  setSyncStatus("offline", "só local");
}

function reconfigureSupabase() {
  closeMenu();
  if (!confirm("Reconfigurar Supabase? Seus dados locais serão mantidos mas você pode apontar pra outro projeto.")) return;
  config = { setupDone: false };
  saveConfig();
  document.getElementById("supabaseUrl").value = "";
  document.getElementById("supabaseKey").value = "";
  showSetup();
}

// ============ HELPERS ============
function getBookById(id) { return state.books.find(b => b.id === id); }
function availableBooks(genreKey) { return genreKey === null ? state.books.filter(b => b.status === "pendente") : state.books.filter(b => b.g === genreKey && b.status === "pendente"); }
function readingBooksInGenre(genreKey) { return state.books.filter(b => b.g === genreKey && b.status === "reading"); }

function coverKey(title, author) {
  return `${title}|||${author}`.toLowerCase().replace(/\s+/g, ' ').trim();
}

function hasOwn(obj, key) {
  return !!obj && Object.prototype.hasOwnProperty.call(obj, key);
}

function pagesWasChecked(key) {
  return hasOwn(state.bookPages, key);
}

function getCachedPages(key) {
  if (!state.bookPages || state.bookPages[key] === "NONE") return null;
  return state.bookPages[key] || null;
}

function hasFixedCover(book) {
  if (!book) return false;
  return !!(book.coverUrl || book.coverManual || book.coverLocked || book.coverStatus === "manual" || book.coverStatus === "saved");
}

// Capa oficial do livro. O ideal é usar book.coverUrl.
// state.covers continua aqui só para migrar dados antigos.
function getBookCover(book) {
  if (!book) return null;
  if (book.coverUrl && book.coverUrl !== "NONE") return book.coverUrl;
  const key = coverKey(book.t, book.a);
  const cached = state.covers && state.covers[key];
  return cached && cached !== "NONE" ? cached : null;
}

function setBookCover(book, url, options = {}) {
  if (!book || !url) return;
  if (!state.covers) state.covers = {};
  const key = coverKey(book.t, book.a);
  state.covers[key] = url;
  book.coverUrl = url;
  book.coverLocked = true;
  if (options.manual) {
    book.coverManual = true;
    book.coverStatus = "manual";
  } else if (!book.coverStatus) {
    book.coverStatus = "saved";
  }
  book.coverAutoChecked = true;
}

// Mostra a capa salva imediatamente, sem esperar internet.
// Se a imagem falhar, volta para a capa padrão bonita do app.
function setCoverInstant(coverId, url, book, fallbackGenreKey) {
  const el = document.getElementById(coverId);
  if (!el || !url || url === "NONE") return false;
  el.innerHTML = `<img src="${escapeHtml(url)}" alt="${escapeHtml(book.t)}" loading="lazy" decoding="async">`;
  const img = el.querySelector("img");
  if (img) img.onerror = () => { el.innerHTML = coverFallbackHTML(book, fallbackGenreKey); };
  return true;
}

function migrateBookData() {
  if (!state.books) state.books = [];
  if (!state.covers) state.covers = {};

  const seen = new Set();
  state.books = state.books.filter(book => {
    if (!book.id) {
      if (!state.nextId) state.nextId = Math.max(0, ...state.books.map(b => b.id || 0)) + 1;
      book.id = state.nextId++;
    }

    const key = coverKey(book.t, book.a);
    const oldCover = state.covers[key];
    if (!book.coverUrl && oldCover && oldCover !== "NONE") {
      book.coverUrl = oldCover;
      book.coverLocked = true;
      book.coverStatus = book.coverStatus || "saved";
      book.coverAutoChecked = true;
    }
    if (book.coverUrl) {
      book.coverLocked = true;
      book.coverStatus = book.coverStatus || "saved";
      state.covers[key] = book.coverUrl;
    }

    // Evita duplicar o mesmo livro no mesmo status/gênero caso o localStorage tenha duplicado.
    const duplicateKey = `${key}|||${book.g}|||${book.status}`;
    if (seen.has(duplicateKey)) return false;
    seen.add(duplicateKey);
    return true;
  });
}

// ── apiFetch: wrapper pro fetch que contorna o bloqueio do Safari iOS ────────
// No iOS com "Impedir rastreamento entre sites" ligado (padrão), requisições
// fetch pra googleapis/openlibrary/mercadolibre são bloqueadas silenciosamente
// (demora MUITO tempo pra falhar). Solução:
//  1. Se detectar iOS Safari, pula fetch direto e vai direto pro proxy
//  2. Em outros browsers, tenta direto com timeout curto; se falhar, proxy
const IS_IOS_SAFARI = (() => {
  try {
    const ua = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (ua.includes('Mac') && 'ontouchend' in document);
    const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
    return isIOS && isSafari;
  } catch(e) { return false; }
})();

const CORS_PROXIES = [
  url => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
];

function fetchWithTimeout(url, opts, timeoutMs) {
  // Respeita AbortSignal externo se fornecido; senão cria um com timeout
  if (opts && opts.signal) return fetch(url, opts);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...(opts || {}), signal: controller.signal })
    .finally(() => clearTimeout(timer));
}

async function apiFetch(url, opts) {
  // iOS Safari: pula fetch direto (quase sempre bloqueia e demora eternamente)
  if (!IS_IOS_SAFARI) {
    try {
      const resp = await fetchWithTimeout(url, opts, 4000);
      if (resp.ok) return resp;
    } catch (e) { /* timeout ou CORS — tenta proxies */ }
  }
  for (const makeProxyUrl of CORS_PROXIES) {
    try {
      const resp = await fetchWithTimeout(makeProxyUrl(url), opts, 8000);
      if (resp.ok) return resp;
    } catch (e) { /* próximo proxy */ }
  }
  // Último recurso: resposta falsa "nada encontrado"
  return new Response(JSON.stringify({ items: [], docs: [], results: [] }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}


// ============ CAPAS ============
// Busca de capas e páginas: Google Books (prioridade) + Open Library (fallback)

// ── fetchBookMeta: busca capa + páginas em UMA ÚNICA chamada por livro ───────
// Usa Open Library como primária (sem rate limit) + Amazon ISBN como capa
// Google Books removido daqui — causa 429 quando chamado em série para muitos livros
async function fetchBookMeta(title, author) {
  const key = coverKey(title, author);
  if (!state.covers) state.covers = {};
  if (!state.bookPages) state.bookPages = {};

  const hasCover = !!state.covers[key];
  const hasPages = pagesWasChecked(key);
  if (hasCover && hasPages) {
    return {
      cover: state.covers[key] === "NONE" ? null : state.covers[key],
      pages: getCachedPages(key),
    };
  }

  if (!initialSyncDone) {
    return {
      cover: state.covers[key] && state.covers[key] !== "NONE" ? state.covers[key] : null,
      pages: getCachedPages(key),
    };
  }

  const canWriteCover = !state.covers[key] || state.covers[key] === "NONE";
  const isbnCandidates = [];
  const addIsbn = (isbn) => {
    const clean = String(isbn || '').replace(/[^0-9X]/gi, '');
    if ((clean.length === 10 || clean.length === 13) && !isbnCandidates.includes(clean)) {
      isbnCandidates.push(clean);
    }
  };
  const saveValidatedCover = (url) => new Promise(resolve => {
    if (!canWriteCover || !url) return resolve(false);
    loadCoverWithValidation(url, (validUrl) => {
      state.covers[key] = validUrl;
      resolve(true);
    }, () => resolve(false));
  });

  // 1) Amazon primeiro: usa ISBN encontrado nas APIs, mas testa a imagem Amazon antes.
  if (canWriteCover || !hasPages) {
    try {
      const fields = "cover_i,number_of_pages_median,isbn,language,edition_count,title";
      const q = `title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&limit=8&fields=${fields}`;
      const resp = await apiFetch(`https://openlibrary.org/search.json?${q}`);
      if (resp.ok) {
        const data = await resp.json();
        const docs = data.docs || [];
        const ranked = docs.map(doc => {
          let score = 0;
          if ((doc.language || []).includes('por')) score += 40;
          if (doc.isbn && doc.isbn.length) score += 25;
          if (doc.number_of_pages_median) score += 10;
          score += Math.min(20, doc.edition_count || 0);
          if (doc.title && doc.title.toLowerCase() === title.toLowerCase()) score += 15;
          return { ...doc, _score: score };
        }).sort((a, b) => b._score - a._score);

        const withPages = ranked.find(d => d.number_of_pages_median);
        if (!state.bookPages[key] && withPages) state.bookPages[key] = withPages.number_of_pages_median;
        ranked.forEach(doc => (doc.isbn || []).forEach(addIsbn));
      }
    } catch(e) {}

    try {
      const q = `intitle:${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}`;
      const resp = await apiFetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=8&langRestrict=pt`);
      if (resp.ok) {
        const data = await resp.json();
        (data.items || []).forEach(item => {
          const info = item.volumeInfo || {};
          if (!state.bookPages[key] && info.pageCount) state.bookPages[key] = info.pageCount;
          (info.industryIdentifiers || []).forEach(id => addIsbn(id.identifier));
        });
      }
    } catch(e) {}

    if (canWriteCover) {
      for (const isbn of isbnCandidates) {
        const ok = await saveValidatedCover(`https://images-na.ssl-images-amazon.com/images/P/${isbn}.01.LZZZZZZZ.jpg`);
        if (ok) break;
      }
    }
  }

  // 2) Se Amazon não achou, tenta Google Books.
  if ((canWriteCover && !state.covers[key]) || !state.bookPages[key]) {
    try {
      const q = `intitle:${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}`;
      let resp = await apiFetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=8&langRestrict=pt`);
      let data = resp.ok ? await resp.json() : { items: [] };
      let items = data.items || [];
      if (items.length === 0) {
        resp = await apiFetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=8`);
        data = resp.ok ? await resp.json() : { items: [] };
        items = data.items || [];
      }

      const ranked = items.map(item => {
        const info = item.volumeInfo || {};
        let score = 0;
        if (info.language === 'pt') score += 40;
        if (info.imageLinks) score += 25;
        if (info.pageCount) score += 10;
        if (info.title && info.title.toLowerCase() === title.toLowerCase()) score += 15;
        return { info, _score: score };
      }).sort((a, b) => b._score - a._score);

      const best = ranked[0];
      if (best && best.info) {
        if (!state.bookPages[key] && best.info.pageCount) state.bookPages[key] = best.info.pageCount;
        if (canWriteCover && !state.covers[key] && best.info.imageLinks) {
          const links = best.info.imageLinks;
          let coverUrl = links.extraLarge || links.large || links.medium || links.thumbnail || links.smallThumbnail;
          if (coverUrl) {
            coverUrl = coverUrl.replace(/^http:/, 'https:').replace(/&edge=curl/, '').replace(/&zoom=\d+/, '');
            await saveValidatedCover(coverUrl);
          }
        }
      }
    } catch(e) {}
  }

  // 3) Último automático: Open Library.
  if (canWriteCover && !state.covers[key]) {
    try {
      const fields = "cover_i,language,title";
      const q = `title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&limit=8&fields=${fields}`;
      const resp = await apiFetch(`https://openlibrary.org/search.json?${q}`);
      if (resp.ok) {
        const data = await resp.json();
        const withCover = (data.docs || []).find(d => d.cover_i);
        if (withCover) await saveValidatedCover(`https://covers.openlibrary.org/b/id/${withCover.cover_i}-L.jpg`);
      }
    } catch(e) {}
  }

  if (canWriteCover && !state.covers[key]) state.covers[key] = "NONE";
  if (!pagesWasChecked(key)) state.bookPages[key] = "NONE";
  saveState();
  return {
    cover: state.covers[key] === "NONE" ? null : state.covers[key],
    pages: getCachedPages(key),
  };
}

// Carrega imagem só se ela passar no teste de "capa de verdade"
// - Rejeita imagens muito pequenas (placeholders 1x1 ou avisos)
// - Rejeita imagens quase quadradas (capas de livro são ~2:3)
function loadCoverWithValidation(url, onSuccess, onFailure) {
  if (!url) { if (onFailure) onFailure(); return; }
  function tryLoad(currentUrl) {
    const img = new Image();
    img.onload = () => {
      // Open Library retorna placeholder de 1x1 quando não tem capa
      if (img.naturalWidth < 50 || img.naturalHeight < 80) {
        if (onFailure) onFailure();
        return;
      }
      // Capa de livro tem aspect ratio próximo de 2:3 (0.67)
      // Se for quase quadrada ou muito horizontal, provavelmente é placeholder
      const ratio = img.naturalWidth / img.naturalHeight;
      if (ratio > 1.1 || ratio < 0.4) {
        if (onFailure) onFailure();
        return;
      }
      if (onSuccess) onSuccess(currentUrl);
    };
    img.onerror = () => {
      // Não tenta proxy para imagem: além de dar 403 em alguns serviços,
      // pode salvar uma URL temporária/instável. Se falhar, apenas ignora a capa.
      if (onFailure) onFailure();
    };
    img.src = currentUrl;
  }
  tryLoad(url);
}

// Wrappers de compatibilidade — usam fetchBookMeta internamente
async function fetchCover(title, author) {
  const meta = await fetchBookMeta(title, author);
  return meta.cover;
}

async function fetchPages(title, author) {
  const meta = await fetchBookMeta(title, author);
  return meta.pages;
}

const COVER_ORNAMENTS = ['✦', '✧', '❀', '❃', '✺', '☽', '✿', '❦'];

function coverFallbackHTML(book, genreKey) {
  const colors = PALETTE[genreKey] || PALETTE.romance;
  const hash = [...book.t].reduce((a, c) => a + c.charCodeAt(0), 0);
  const c1 = colors[hash % colors.length];
  const c2 = colors[(hash + 2) % colors.length];
  const ornament = COVER_ORNAMENTS[hash % COVER_ORNAMENTS.length];
  return `
    <div class="cover-fallback" style="background: linear-gradient(160deg, ${c1} 0%, ${c2} 100%);">
      <div class="cover-ornament">${ornament}</div>
      <div class="cover-title">${escapeHtml(book.t)}</div>
      <div class="cover-author">${escapeHtml(book.a)}</div>
    </div>
  `;
}

function escapeXml(str) {
  return str.replace(/[<>&'"]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[c]));
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

// Formato curto e discreto: "12/jan – 28/fev" (mês abreviado, sem ano).
// Usado nos cards de livros já lidos. Quando ano é diferente, inclui ano nas duas pontas.
const SHORT_MONTHS = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
function formatShortDate(iso, includeYear = false) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  const mm = SHORT_MONTHS[parseInt(m) - 1] || m;
  return includeYear ? `${parseInt(d)}/${mm}/${y.slice(2)}` : `${parseInt(d)}/${mm}`;
}

function formatReadingRange(startDate, endDate) {
  if (!startDate && !endDate) return "";
  if (!startDate) return formatShortDate(endDate);
  if (!endDate) return `desde ${formatShortDate(startDate)}`;
  const sameYear = startDate.slice(0, 4) === endDate.slice(0, 4);
  if (sameYear) {
    return `${formatShortDate(startDate)} – ${formatShortDate(endDate)}`;
  }
  return `${formatShortDate(startDate, true)} – ${formatShortDate(endDate, true)}`;
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// ============ FILTROS ============
function filterBooks(filter) {
  if (filter === "todos") return state.books;
  if (filter === "favoritos") return state.books.filter(b => b.favorite);
  return state.books.filter(b => b.status === filter);
}

function getFilteredCount(genreKey) {
  const books = state.books.filter(b => b.g === genreKey);
  if (state.filter === "todos") return books.length;
  if (state.filter === "favoritos") return books.filter(b => b.favorite).length;
  return books.filter(b => b.status === state.filter).length;
}

// ============ RENDER ============
function renderAll() {
  // Sincroniza visual das tabs com o filtro atual
  document.querySelectorAll(".tab").forEach(t => {
    t.classList.toggle("active", t.dataset.filter === state.filter);
  });
  renderGenres();
  renderStats();
  renderYearFilter();
}

// Retorna o "ano âncora" de um livro, considerando seu status:
// - lido: ano da endDate (ano que terminou)
// - reading: ano da startDate (ano que começou)
// - pendente/abandoned: usa endDate se tiver, senão startDate, senão null
function bookAnchorYear(b) {
  if (b.status === "lido" && b.endDate) {
    const [y] = b.endDate.split("-");
    return parseInt(y) || null;
  }
  if (b.status === "reading" && b.startDate) {
    const [y] = b.startDate.split("-");
    return parseInt(y) || null;
  }
  if (b.endDate) {
    const [y] = b.endDate.split("-");
    return parseInt(y) || null;
  }
  if (b.startDate) {
    const [y] = b.startDate.split("-");
    return parseInt(y) || null;
  }
  return null;
}

// Resolve qual ano está sendo mostrado agora (considerando padrão = ano atual)
// Quando virar o ano novo, automaticamente mostra o ano atual mesmo se vazio
function resolveActiveYear(availableYears) {
  if (state.selectedYear == null) {  // null OU undefined
    // Sempre prefere ano atual como padrão (mesmo vazio = "começo limpo")
    return new Date().getFullYear();
  }
  return state.selectedYear; // pode ser número ou "todos" ou "sem-data"
}

// Cores rotativas para os cards de outros anos
const YEAR_CARD_COLORS = ['c-sage', 'c-butter', 'c-sky', 'c-lavender', 'c-peach', 'c-mint'];

function renderStats() {
  const section = document.getElementById("statsSection");
  // Só mostra estatísticas na aba "Já lidos"
  if (state.filter !== "lido") {
    section.style.display = "none";
    return;
  }
  
  const readBooks = state.books.filter(b => b.status === "lido" && b.endDate);
  
  if (readBooks.length === 0) {
    section.style.display = "none";
    return;
  }
  
  // Agrupa por ano
  const byYear = {};
  readBooks.forEach(b => {
    const [y] = b.endDate.split("-");
    const year = parseInt(y);
    if (!byYear[year]) byYear[year] = 0;
    byYear[year] += 1;
  });
  
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);
  const currentYear = new Date().getFullYear();
  const activeYear = resolveActiveYear(years);
  
  // Determina qual ano vai no card de destaque:
  // - Se selectedYear é número específico → esse ano
  // - Se "todos" → mostrar total agregado
  // - Se null → ano atual
  let heroYear, heroCount, heroLabel, heroSub;
  
  if (state.selectedYear === "todos") {
    // Total geral
    heroCount = readBooks.length;
    heroLabel = 'no total';
    heroSub = `${years.length} ano${years.length === 1 ? '' : 's'} de leitura ✦`;
    heroYear = null;
  } else if (typeof activeYear === 'number') {
    heroYear = activeYear;
    heroCount = byYear[heroYear] || 0;
    heroLabel = heroYear === currentYear ? 'este ano' : `em ${heroYear}`;
    if (heroCount === 0) {
      heroSub = heroYear === currentYear ? 'comece o ano lendo ✦' : 'nenhum livro registrado';
    } else {
      heroSub = heroYear === currentYear ? 'continue assim ✦' : 'que ano de leitura ✦';
    }
  } else {
    heroYear = years.includes(currentYear) ? currentYear : years[0];
    heroCount = byYear[heroYear] || 0;
    heroLabel = heroYear === currentYear ? 'este ano' : `em ${heroYear}`;
    if (heroCount === 0) {
      heroSub = heroYear === currentYear ? 'comece o ano lendo ✦' : 'nenhum livro registrado';
    } else {
      heroSub = heroYear === currentYear ? 'continue assim ✦' : 'que ano de leitura ✦';
    }
  }
  
  let html = `<div class="stats-header">seu histórico de leitura ✦</div>`;
  html += `<div class="stats-grid">`;
  
  // Card de destaque do ano "ativo"
  const heroOnclick = heroYear !== null 
    ? `setYearFilter(${heroYear})` 
    : `setYearFilter('todos')`;
  const heroMascClass = (currentUser && currentUser.gender === "masculino") ? ' masc' : '';
  html += `
    <div class="stat-card year-hero${heroMascClass}" onclick="${heroOnclick}">
      <div class="stat-hero-left">
        <div class="stat-hero-label">${heroLabel}</div>
        <div>
          <span class="stat-hero-number">${heroCount}</span><span class="stat-hero-unit">livro${heroCount === 1 ? '' : 's'}</span>
        </div>
        <div class="stat-hero-sub">${heroSub}</div>
      </div>
    </div>
  `;
  
  // Cards menores para os outros anos — APENAS quando filtro é "Todos"
  // (quando filtra um ano específico ou está no padrão, só o hero card aparece)
  if (state.selectedYear === "todos") {
    years.forEach((year, idx) => {
      const count = byYear[year];
      const colorClass = YEAR_CARD_COLORS[idx % YEAR_CARD_COLORS.length];
      const isActive = state.selectedYear === year;
      html += `
        <div class="stat-card year-other ${colorClass}${isActive ? ' active' : ''}" onclick="setYearFilter(${year})">
          <div class="stat-other-year">${year}</div>
          <div class="stat-other-count">${count} livro${count === 1 ? '' : 's'}</div>
        </div>
      `;
    });
  }
  
  html += `</div>`;
  section.innerHTML = html;
  section.style.display = "block";
}

function renderYearFilter() {
  const bar = document.getElementById("yearFilterBar");
  if (!bar) return;
  
  // Só mostra em "lido" e "favoritos"
  if (state.filter !== "lido" && state.filter !== "favoritos") {
    bar.style.display = "none";
    return;
  }
  
  // Coleta livros relevantes para a aba
  let relevantBooks;
  if (state.filter === "lido") {
    relevantBooks = state.books.filter(b => b.status === "lido");
  } else {
    relevantBooks = state.books.filter(b => b.favorite);
  }
  
  if (relevantBooks.length === 0) {
    bar.style.display = "none";
    return;
  }
  
  // Agrupa por ano âncora
  const byYear = {};
  let withoutYear = 0;
  relevantBooks.forEach(b => {
    const y = bookAnchorYear(b);
    if (y === null) {
      withoutYear += 1;
    } else {
      byYear[y] = (byYear[y] || 0) + 1;
    }
  });
  
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);
  
  // Se só tem 1 ano e nenhum sem data, não vale a pena mostrar o filtro
  if (years.length <= 1 && withoutYear === 0) {
    bar.style.display = "none";
    return;
  }

  // Na aba favoritos, "Todos" não faz sentido — o conceito é Top 10 (a lista
  // SEMPRE é uma só, só muda o recorte por ano). Então omitimos o chip "Todos".
  const showAllChip = (state.filter !== "favoritos");

  const activeYear = resolveActiveYear(years);
  const totalCount = relevantBooks.length;

  let html = '';

  // Chip "Todos" (só na aba "Já lidos")
  if (showAllChip) {
    const isAllActive = state.selectedYear === "todos";
    html += `<button class="year-chip ${isAllActive ? 'active' : ''}" onclick="setYearFilter('todos')">Todos<span class="year-chip-count">${totalCount}</span></button>`;
  }

  // Chips por ano
  years.forEach(year => {
    const isActive = activeYear === year && state.selectedYear !== "todos" && state.selectedYear !== "sem-data";
    html += `<button class="year-chip ${isActive ? 'active' : ''}" onclick="setYearFilter(${year})">${year}<span class="year-chip-count">${byYear[year]}</span></button>`;
  });
  
  // Chip "Sem data" se tiver
  if (withoutYear > 0) {
    const isActive = state.selectedYear === "sem-data";
    html += `<button class="year-chip ${isActive ? 'active' : ''}" onclick="setYearFilter('sem-data')">Sem data<span class="year-chip-count">${withoutYear}</span></button>`;
  }
  
  bar.innerHTML = html;
  bar.style.display = "flex";
}

function setYearFilter(year) {
  state.selectedYear = year;
  saveState();
  renderAll();
}

// Helper: dado o filtro de ano ativo, retorna o conjunto de livros filtrado
function applyYearFilterToBooks(books) {
  if (state.selectedYear === "todos") return books;
  if (state.selectedYear === "sem-data") {
    return books.filter(b => bookAnchorYear(b) === null);
  }
  // Resolve qual ano está ativo (ano atual por padrão)
  const allYears = [...new Set(books.map(b => bookAnchorYear(b)).filter(y => y !== null))].sort((a,b) => b - a);
  const activeYear = resolveActiveYear(allYears);
  if (typeof activeYear !== 'number') return books;
  return books.filter(b => bookAnchorYear(b) === activeYear);
}

// Abre/fecha um grupo de mês (aba "Lidos" e "Todos")
function toggleMonthGroup(headerEl) {
  const group = headerEl && headerEl.closest('.month-group');
  if (!group) return;
  group.classList.toggle('collapsed');
}

function filterByMonth(year, month) {
  // Mostra modal com livros daquele mês
  const books = state.books.filter(b => {
    if (b.status !== "lido" || !b.endDate) return false;
    const [y, m] = b.endDate.split("-").map(Number);
    return y === year && (m - 1) === month;
  });
  
  if (books.length === 0) return;
  
  const monthName = MONTH_NAMES[month];
  let html = `<div class="book-list" style="border:none; padding-top:0; margin-top:0;">`;
  html += `<div class="book-list-title">${books.length} livro${books.length > 1 ? 's' : ''} · ${monthName}/${year}</div>`;
  
  books.forEach(book => {
    const stars = book.rating ? '★'.repeat(book.rating) + '☆'.repeat(5 - book.rating) : '';
    const fav = book.favorite ? '<span class="book-fav-mark">♥</span>' : '';
    html += `
      <div class="book-item">
        <div class="book-info">
          <div class="book-title-row"><div class="book-title">${escapeHtml(book.t)}</div>${fav}</div>
          <div class="book-author">${escapeHtml(book.a)}</div>
          <div class="book-meta">${book.startDate ? `${formatDate(book.startDate)} →` : ''} ${formatDate(book.endDate)} ${stars ? `<span class="stars">${stars}</span>` : ''}</div>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  
  // Abre o modal de gênero reaproveitando
  document.getElementById("modalTitle").innerHTML = `<em>${monthName}</em> de ${year}`;
  document.getElementById("modalSub").textContent = `o que você leu nesse período ✦`;
  document.querySelector(".wheel-wrapper").style.display = "none";
  document.getElementById("spinBtn").style.display = "none";
  document.getElementById("result").classList.remove("show");
  document.getElementById("bookList").innerHTML = html.replace(/<div class="book-list"[^>]*>/, '').replace(/<\/div>$/, '');
  
  currentGenre = null;
  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function renderGenres() {
  const container = document.getElementById("genres");
  document.getElementById("totalCount").textContent = state.books.length;
  
  container.innerHTML = "";
  
  // Aba favoritos: galeria com capas, estilo shelf
  if (state.filter === "favoritos") {
    const allFavs = state.books.filter(b => b.favorite);
    if (allFavs.length === 0) {
      container.innerHTML = `
        <div class="empty">
          <div class="empty-icon">♡</div>
          <div class="empty-text">nenhum favorito ainda</div>
        </div>
      `;
      return;
    }
    
    // Aplica filtro de ano (chips)
    const favs = applyYearFilterToBooks(allFavs);
    if (favs.length === 0) {
      const yearLabel = state.selectedYear === "sem-data" 
        ? "sem data registrada" 
        : (typeof state.selectedYear === 'number' ? `em ${state.selectedYear}` : '');
      container.innerHTML = `
        <div class="empty">
          <div class="empty-icon">♡</div>
          <div class="empty-text">nenhum favorito ${yearLabel}</div>
        </div>
      `;
      return;
    }
    container.style.gridTemplateColumns = "1fr";

    // Garante que todo favorito tenha um rank — pra livros legados que viraram
    // favoritos antes do sistema Top 10 existir, atribui ranks na ordem em que
    // aparecem (com até 10 itens, o resto fica sem rank temporariamente).
    backfillFavRanks();

    // Ordena: por favRank (1, 2, 3...). Sem rank vai pro fim por título.
    favs.sort((a, b) => {
      const ra = (typeof a.favRank === 'number' && a.favRank > 0) ? a.favRank : 999;
      const rb = (typeof b.favRank === 'number' && b.favRank > 0) ? b.favRank : 999;
      if (ra !== rb) return ra - rb;
      return a.t.localeCompare(b.t, 'pt', { sensitivity: 'base' });
    });

    const statusLabel = { reading: 'lendo', lido: 'lido', pendente: 'pendente', abandonado: 'abandonado' };

    // Quando há filtro de ano ativo, o badge mostra a posição RELATIVA ao
    // conjunto filtrado (1, 2, 3 no que aparece) — não o rank global. Faz mais
    // sentido visualmente. Sem filtro (state "todos"), usa o rank global mesmo.
    // O default `null` cai no ano atual via resolveActiveYear, então também
    // conta como filtrado.
    const isYearFiltered = (state.selectedYear !== "todos");
    const displayRankFor = (book, idx) => {
      if (isYearFiltered) return idx + 1;
      return (typeof book.favRank === 'number' && book.favRank > 0) ? book.favRank : (idx + 1);
    };

    let html = `
      <div class="fav-gallery-header-row">
        <div class="fav-gallery-sub">seu top ${Math.min(favs.length, 10)} no coração</div>
        <div class="fav-drag-hint">arraste pra reordenar ✦</div>
      </div>
      <div class="fav-gallery-grid" id="favGalleryGrid">
    `;

    favs.forEach((book, idx) => {
      const coverId = `fav-cover-${book.id}`;
      const stars = book.rating
        ? '★'.repeat(book.rating) + '<span class="empty-star">' + '☆'.repeat(5 - book.rating) + '</span>'
        : '';
      const rank = displayRankFor(book, idx);
      const rankClass = (rank >= 1 && rank <= 3) ? 'top3' : '';
      const rankBadge = rank ? `<div class="fav-gallery-rank ${rankClass}">${rank}</div>` : '';
      html += `
        <div class="fav-gallery-item" data-book-id="${book.id}" draggable="true" onclick="openEditModal(${book.id})">
          <div class="fav-gallery-cover" id="${coverId}">
            ${rankBadge}
            ${coverFallbackHTML(book, book.g)}
            <div class="fav-gallery-heart">♥</div>
          </div>
          <div class="fav-gallery-info">
            <div class="fav-gallery-title">${escapeHtml(book.t)}</div>
            <div class="fav-gallery-author">${escapeHtml(book.a)}</div>
            ${stars ? `<div class="fav-gallery-stars">${stars}</div>` : ''}
            ${book.status === 'reading' ? `<span class="fav-gallery-status reading">lendo</span>` : ''}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;

    // Liga drag-and-drop nos itens recém-renderizados
    setupFavDragAndDrop();

    // Hidrata capas assincronamente — preserva o badge de rank ao trocar o HTML
    favs.forEach((book, idx) => {
      const coverId = `fav-cover-${book.id}`;
      const rank = displayRankFor(book, idx);
      const rankClass = (rank >= 1 && rank <= 3) ? 'top3' : '';
      const rankBadge = rank ? `<div class="fav-gallery-rank ${rankClass}">${rank}</div>` : '';
      const key = coverKey(book.t, book.a);
      const cached = state.covers && state.covers[key];
      if (cached && cached !== "NONE") {
        const el = document.getElementById(coverId);
        if (!el) return;
        loadCoverWithValidation(cached, (validUrl) => {
          el.innerHTML = `${rankBadge}<img src="${validUrl}" alt="${escapeHtml(book.t)}"><div class="fav-gallery-heart">♥</div>`;
        });
      } else if (initialSyncDone) {
        // Só busca capa automática DEPOIS do sync trazer as capas escolhidas manualmente.
        // Antes disso, mantém o fallback bonito pra não sobrescrever a escolha do usuário.
        fetchCover(book.t, book.a).then(url => {
          if (!url) return;
          const el = document.getElementById(coverId);
          if (!el) return;
          loadCoverWithValidation(url, (validUrl) => {
            el.innerHTML = `${rankBadge}<img src="${validUrl}" alt="${escapeHtml(book.t)}"><div class="fav-gallery-heart">♥</div>`;
          });
        });
      }
    });

    return;
  }
  
  // Aba "lido": timeline mensal compacta dentro do ano ativo (chips de ano
  // já filtram o ano lá em cima, então aqui não duplicamos com accordions
  // de ano).
  if (state.filter === "lido") {
    const allLidos = state.books.filter(b => b.status === "lido");
    if (allLidos.length === 0) {
      container.innerHTML = `
        <div class="empty">
          <div class="empty-icon">∅</div>
          <div class="empty-text">nenhum livro concluído ainda</div>
        </div>
      `;
      return;
    }

    // Aplica filtro de ano (chips)
    const lidos = applyYearFilterToBooks(allLidos);
    if (lidos.length === 0) {
      const yearLabel = state.selectedYear === "sem-data"
        ? "sem data registrada"
        : (typeof state.selectedYear === 'number' ? `em ${state.selectedYear}` : '');
      container.innerHTML = `
        <div class="empty">
          <div class="empty-icon">∅</div>
          <div class="empty-text">nenhum livro concluído ${yearLabel}</div>
        </div>
      `;
      return;
    }

    container.style.gridTemplateColumns = "1fr";

    const comData = lidos.filter(b => b.endDate);
    const semData = lidos.filter(b => !b.endDate);
    const showingAllYears = (state.selectedYear === "todos");

    const byMonth = {};
    comData.forEach(b => {
      const [y, m] = b.endDate.split("-");
      const key = `${y}-${m}`;
      if (!byMonth[key]) byMonth[key] = { year: parseInt(y), monthIdx: parseInt(m) - 1, books: [] };
      byMonth[key].books.push(b);
    });

    const sortedKeys = Object.keys(byMonth).sort((a, b) => b.localeCompare(a));

    // Paginação por total de livros (15 por página)
    const PAGE_SIZE = 15;
    const allSorted = [];
    sortedKeys.forEach(key => {
      byMonth[key].books.sort((a, b) => b.endDate.localeCompare(a.endDate));
      byMonth[key].books.forEach(b => allSorted.push(b));
    });
    semData.forEach(b => allSorted.push(b));

    const totalPages = Math.max(1, Math.ceil(allSorted.length / PAGE_SIZE));
    if (!state.lidoPage || state.lidoPage < 1 || state.lidoPage > totalPages) state.lidoPage = 1;
    const pageStart = (state.lidoPage - 1) * PAGE_SIZE;
    const pageBookIds = new Set(allSorted.slice(pageStart, pageStart + PAGE_SIZE).map(b => b.id));

    let html = '<div class="lido-timeline">';

    sortedKeys.forEach(key => {
      const group = byMonth[key];
      const visibleBooks = group.books.filter(b => pageBookIds.has(b.id));
      if (visibleBooks.length === 0) return;

      const monthName = MONTH_NAMES[group.monthIdx];
      const monthLabel = showingAllYears
        ? `${monthName}<span class="lido-month-year"> · ${group.year}</span>`
        : monthName;

      html += `
        <div class="lido-month-row">
          <div class="lido-month-label">
            <span class="lido-month-name">${monthLabel}</span>
            <span class="lido-month-count">${visibleBooks.length}</span>
          </div>
          <div class="lido-month-covers">
      `;
      visibleBooks.forEach(book => {
        const coverId = `lido-cover-${book.id}`;
        const stars = book.rating
          ? '★'.repeat(book.rating) + '<span class="empty-star">' + '☆'.repeat(5 - book.rating) + '</span>'
          : '';
        html += `
          <div class="lido-timeline-item" onclick="openEditModal(${book.id})">
            <div class="lido-timeline-cover" id="${coverId}">${coverFallbackHTML(book, book.g)}</div>
            <div class="lido-timeline-title">${escapeHtml(book.t)}</div>
            ${stars ? `<div class="lido-timeline-stars">${stars}</div>` : ''}
          </div>
        `;
      });
      html += `</div></div>`;
    });

    const semDataPage = semData.filter(b => pageBookIds.has(b.id));
    if (semDataPage.length > 0) {
      html += `
        <div class="lido-month-row">
          <div class="lido-month-label">
            <span class="lido-month-name"><em>sem data</em></span>
            <span class="lido-month-count">${semDataPage.length}</span>
          </div>
          <div class="lido-month-covers">
      `;
      semDataPage.forEach(book => {
        const coverId = `lido-cover-${book.id}`;
        const stars = book.rating
          ? '★'.repeat(book.rating) + '<span class="empty-star">' + '☆'.repeat(5 - book.rating) + '</span>'
          : '';
        html += `
          <div class="lido-timeline-item" onclick="openEditModal(${book.id})">
            <div class="lido-timeline-cover" id="${coverId}">${coverFallbackHTML(book, book.g)}</div>
            <div class="lido-timeline-title">${escapeHtml(book.t)}</div>
            ${stars ? `<div class="lido-timeline-stars">${stars}</div>` : ''}
          </div>
        `;
      });
      html += `</div></div>`;
    }

    html += '</div>';

    if (totalPages > 1) {
      html += '<div class="lido-pagination">';
      html += `<button class="lido-page-arrow" onclick="setLidoPage(${state.lidoPage - 1})" ${state.lidoPage === 1 ? 'disabled' : ''}>‹</button>`;
      for (let p = 1; p <= totalPages; p++) {
        html += `<button class="lido-page-btn ${p === state.lidoPage ? 'active' : ''}" onclick="setLidoPage(${p})">${p}</button>`;
      }
      html += `<button class="lido-page-arrow" onclick="setLidoPage(${state.lidoPage + 1})" ${state.lidoPage === totalPages ? 'disabled' : ''}>›</button>`;
      html += '</div>';
    }

    container.innerHTML = html;

    allSorted.slice(pageStart, pageStart + PAGE_SIZE).forEach(book => {
      const coverId = `lido-cover-${book.id}`;
      const key = coverKey(book.t, book.a);
      const cached = state.covers && state.covers[key];
      if (cached && cached !== "NONE") {
        const el = document.getElementById(coverId);
        if (!el) return;
        loadCoverWithValidation(cached, v => { el.innerHTML = `<img src="${v}" alt="${escapeHtml(book.t)}">` });
      } else if (initialSyncDone) {
        fetchCover(book.t, book.a).then(url => {
          if (!url) return;
          const el = document.getElementById(coverId);
          if (!el) return;
          loadCoverWithValidation(url, v => { el.innerHTML = `<img src="${v}" alt="${escapeHtml(book.t)}">` });
        });
      }
    });

    return;
  }

  // Aba "abandoned": galeria de capas dos livros que não rolaram
  if (state.filter === "abandoned") {
    const allAbandoned = state.books.filter(b => b.status === "abandoned");
    if (allAbandoned.length === 0) {
      container.innerHTML = `
        <div class="empty">
          <div class="empty-icon">∅</div>
          <div class="empty-text">nenhum livro abandonado por enquanto</div>
        </div>
      `;
      return;
    }

    // Aba abandoned não tem chips de ano, então mostra TODOS os abandonados
    // (não aplica filtro de ano — senão livros antigos sumiriam por engano).
    const abandonados = allAbandoned;

    container.style.gridTemplateColumns = "1fr";

    // Ordena: mais recentes primeiro (por endDate, depois startDate, depois título)
    abandonados.sort((a, b) => {
      const da = a.endDate || a.startDate || '';
      const db = b.endDate || b.startDate || '';
      if (da && db) return db.localeCompare(da);
      if (da) return -1;
      if (db) return 1;
      return a.t.localeCompare(b.t, 'pt', { sensitivity: 'base' });
    });

    let html = `
      <div class="fav-gallery-sub">${abandonados.length} ${abandonados.length > 1 ? 'livros que não rolaram' : 'livro que não rolou'}</div>
      <div class="lido-gallery-grid">
    `;

    abandonados.forEach(book => {
      const coverId = `aband-cover-${book.id}`;
      const stars = book.rating
        ? '★'.repeat(book.rating) + '<span class="empty-star">' + '☆'.repeat(5 - book.rating) + '</span>'
        : '';
      const stoppedAt = book.endDate
        ? `parou em ${formatDate(book.endDate)}`
        : (book.startDate ? `começou em ${formatDate(book.startDate)}` : '');
      html += `
        <div class="lido-gallery-item" onclick="openEditModal(${book.id})">
          <div class="lido-gallery-cover" id="${coverId}">${coverFallbackHTML(book, book.g)}</div>
          <div class="lido-gallery-info">
            <div class="lido-gallery-title">${escapeHtml(book.t)}</div>
            ${stars ? `<div class="lido-gallery-stars">${stars}</div>` : ''}
            ${stoppedAt ? `<div class="lido-gallery-dates">${stoppedAt}</div>` : ''}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;

    // Hidrata capas
    abandonados.forEach(book => {
      const coverId = `aband-cover-${book.id}`;
      const key = coverKey(book.t, book.a);
      const cached = state.covers && state.covers[key];
      if (cached && cached !== "NONE") {
        const el = document.getElementById(coverId);
        if (!el) return;
        loadCoverWithValidation(cached, v => { el.innerHTML = `<img src="${v}" alt="${escapeHtml(book.t)}">` });
      } else if (initialSyncDone) {
        fetchCover(book.t, book.a).then(url => {
          if (!url) return;
          const el = document.getElementById(coverId);
          if (!el) return;
          loadCoverWithValidation(url, v => { el.innerHTML = `<img src="${v}" alt="${escapeHtml(book.t)}">` });
        });
      }
    });

    return;
  }

  // Aba "todos": lista plana agrupada por gênero
  if (state.filter === "todos") {
    if (state.books.length === 0) {
      container.innerHTML = `<div class="empty"><div class="empty-icon">∅</div><div class="empty-text">nenhum livro ainda</div></div>`;
      return;
    }
    container.style.gridTemplateColumns = "1fr";
    let html = "";
    Object.entries(GENRES).forEach(([key, g]) => {
      const booksInGenre = state.books
        .filter(b => b.g === key)
        .sort((a, b) => a.t.localeCompare(b.t, 'pt', { sensitivity: 'base' }));
      if (booksInGenre.length === 0) return;
      html += `<div class="month-group collapsed">
        <div class="month-group-header" onclick="toggleMonthGroup(this)">
          <div class="month-group-left">
            <span class="month-group-number" style="font-size:32px;">${g.emoji}</span>
            <div class="month-group-textblock">
              <span class="month-group-title"><em>${escapeHtml(g.name)}</em></span>
              <span class="month-group-meta">${booksInGenre.length} livro${booksInGenre.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
          <span class="month-group-toggle"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
        </div>
        <div class="book-list" style="border:none; padding:0; margin:0;">`;
      booksInGenre.forEach(b => { html += renderBookItemHTML(b, false); });
      html += `</div></div>`;
    });
    container.innerHTML = html;
    return;
  }

  container.style.gridTemplateColumns = "";

  // Card "Todos" fixo no topo da aba Pendentes
  if (state.filter === "pendente") {
    const allPending = availableBooks(null).length;
    if (allPending > 0) {
      const allCard = document.createElement("div");
      allCard.className = "genre-card c-butter";
      allCard.style.cssText = "grid-column: 1 / -1;";
      allCard.onclick = () => openModal(null);
      allCard.innerHTML = `
        <div class="genre-header">
          <div>
            <div class="genre-emoji">✦</div>
            <div class="genre-name">Todos os gêneros</div>
          </div>
          <div class="genre-count">${allPending} livro${allPending !== 1 ? 's' : ''}</div>
        </div>
        <div class="genre-meta">
          <div class="genre-preview">girar sem distinção de gênero</div>
          <button class="spin-btn" onclick="event.stopPropagation(); openModal(null)" aria-label="Girar roda">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>
      `;
      container.appendChild(allCard);
    }
  }

  Object.entries(GENRES).forEach(([key, g]) => {
    const count = getFilteredCount(key);
    const totalInGenre = state.books.filter(b => b.g === key).length;
    const pending = availableBooks(key).length;
    const reading = readingBooksInGenre(key);
    
    // Esconde gênero que não tem nenhum livro
    if (totalInGenre === 0) return;
    if (count === 0 && state.filter !== "todos") return;
    
    // Mostra card de livro lendo APENAS na aba "reading"
    // Na aba "todos" e outras, mostra o card do gênero normal
    const showReadingCard = reading.length > 0 && state.filter === "reading";
    
    if (showReadingCard) {
      reading.forEach(book => {
        const card = document.createElement("div");
        card.className = `reading-card ${g.color}`;
        card.dataset.bookId = book.id;
        card.onclick = () => openEditModal(book.id);
        
        const dateText = book.startDate ? `desde ${formatDate(book.startDate)}` : "leitura em andamento";
        const coverId = `cover-${book.id}`;
        const favMark = book.favorite ? '<span style="color:var(--heart); margin-left: 6px;">♥</span>' : '';
        
        // Progresso de páginas
        let progressHTML = '';
        if (book.pagesTotal && book.pagesTotal > 0) {
          const current = book.pagesCurrent || 0;
          const pct = Math.min(100, (current / book.pagesTotal) * 100);
          progressHTML = `
            <div class="reading-progress-text">pág. ${current} / ${book.pagesTotal} · ${Math.round(pct)}%</div>
            <div class="reading-progress-bar"><div class="reading-progress-fill" style="width:${pct}%"></div></div>
          `;
        }
        
        card.innerHTML = `
          <div class="cover" id="${coverId}">
            ${coverFallbackHTML(book, key)}
          </div>
          <div class="reading-info-side">
            <div>
              <div class="reading-genre-tag">${g.emoji} ${g.name}</div>
              <div class="reading-book-title">${escapeHtml(book.t)}${favMark}</div>
              <div class="reading-book-author">${escapeHtml(book.a)}</div>
              <div class="reading-meta">📖 ${dateText}</div>
              ${progressHTML}
            </div>
            <div class="reading-actions">
              <button class="reading-btn primary" onclick="event.stopPropagation(); startSession(${book.id})">Iniciar sessão ✦</button>
              <button class="reading-btn secondary" onclick="event.stopPropagation(); openEditModal(${book.id})">Editar</button>
            </div>
          </div>
        `;
        container.appendChild(card);
        
        // Mostra a capa salva na hora. A busca online fica em segundo plano.
        const savedCover = getBookCover(book);
        const alreadyShowedSavedCover = setCoverInstant(coverId, savedCover, book, key);

        const metaKey = coverKey(book.t, book.a);
        const needsCoverLookup = !savedCover && !hasFixedCover(book) && !(state.covers && state.covers[metaKey] === "NONE");
        const needsPagesLookup = !book.pagesTotal && !pagesWasChecked(metaKey);
        if (needsCoverLookup || needsPagesLookup) {
          queueMeta(book.t, book.a).then(meta => {
            if (!alreadyShowedSavedCover && meta.cover) {
              setBookCover(book, meta.cover);
              setCoverInstant(coverId, meta.cover, book, key);
            }
            // Aplica páginas se não tinha
            if (meta.pages && !book.pagesTotal) {
              book.pagesTotal = meta.pages;
              saveState();
              pushBook(book);
              renderAll();
            } else if (!alreadyShowedSavedCover && meta.cover) {
              saveState();
              pushBook(book);
            }
          });
        }
      });
      return;
    }
    
    // Card de gênero padrão
    const isPendente = state.filter === "pendente";
    const card = document.createElement("div");
    card.className = `genre-card ${g.color}`;
    if (isPendente) card.onclick = () => openModal(key);
    card.innerHTML = `
      <div class="genre-header">
        <div>
          <div class="genre-emoji">${g.emoji}</div>
          <div class="genre-name">${g.name}</div>
        </div>
        <div class="genre-count">${count}${state.filter !== "todos" ? `/${totalInGenre}` : ""} livros</div>
      </div>
      <div class="genre-meta">
        <div class="genre-preview">${pending > 0 ? g.preview : 'todos já passaram por aqui ✦'}</div>
        ${isPendente ? `<button class="spin-btn" onclick="event.stopPropagation(); openModal('${key}')" aria-label="Girar roda">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </button>` : ''}
      </div>
    `;
    container.appendChild(card);
  });
  
  if (container.children.length === 0) {
    container.innerHTML = `
      <div class="empty">
        <div class="empty-icon">∅</div>
        <div class="empty-text">nenhum livro nessa aba</div>
      </div>
    `;
  }
}

// ============ FAVORITOS: TOP 10 ============

// Retroativamente atribui favRank a favoritos antigos (que podem ter virado
// favoritos antes do Top 10 existir) E compacta ranks pra eliminar gaps.
// Mantém a ordem relativa dos que já têm rank.
function backfillFavRanks() {
  const favs = state.books.filter(b => b.favorite);
  if (favs.length === 0) return;

  // Separa quem já tem rank de quem não tem
  const withRank = favs
    .filter(b => typeof b.favRank === 'number' && b.favRank > 0)
    .sort((a, b) => a.favRank - b.favRank);
  const withoutRank = favs
    .filter(b => !(typeof b.favRank === 'number' && b.favRank > 0))
    .sort((a, b) => a.t.localeCompare(b.t, 'pt', { sensitivity: 'base' }));

  // Junta na ordem final: primeiro os com rank (ordenados), depois os sem (alfabético)
  const ordered = [...withRank, ...withoutRank];

  // Reatribui 1..10. Acima de 10, deixa null (não faz parte do Top 10).
  let changed = false;
  ordered.forEach((book, i) => {
    if (i < 10) {
      const desired = i + 1;
      if (book.favRank !== desired) {
        book.favRank = desired;
        changed = true;
        pushBook(book);
      }
    } else {
      if (book.favRank != null) {
        book.favRank = null;
        changed = true;
        pushBook(book);
      }
    }
  });
  if (changed) saveState();
}

// ── DRAG-AND-DROP ──────────────────────────────────────────────────────────
// Suporta tanto mouse (HTML5 drag) quanto toque (custom touch handling),
// porque drag nativo no mobile é capenga.
let favDragState = {
  draggingId: null,
  // Para touch:
  touchStartY: 0,
  touchStartX: 0,
  touchActive: false,
  ghost: null,
  lastOverEl: null,
};

function setupFavDragAndDrop() {
  const grid = document.getElementById("favGalleryGrid");
  if (!grid) return;
  const items = Array.from(grid.querySelectorAll(".fav-gallery-item"));

  items.forEach(item => {
    // Drag nativo (desktop)
    item.addEventListener('dragstart', onFavDragStart);
    item.addEventListener('dragend', onFavDragEnd);
    item.addEventListener('dragover', onFavDragOver);
    item.addEventListener('dragleave', onFavDragLeave);
    item.addEventListener('drop', onFavDrop);

    // Touch (mobile) — long-press inicia o drag pra não conflitar com scroll/clique
    item.addEventListener('touchstart', onFavTouchStart, { passive: true });
    item.addEventListener('touchmove', onFavTouchMove, { passive: false });
    item.addEventListener('touchend', onFavTouchEnd);
    item.addEventListener('touchcancel', onFavTouchEnd);
  });
}

function onFavDragStart(e) {
  const item = e.currentTarget;
  favDragState.draggingId = parseInt(item.dataset.bookId);
  item.classList.add('dragging');
  // Necessário em Firefox pra ativar o drag
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', String(favDragState.draggingId)); } catch (_) {}
  }
}

function onFavDragEnd(e) {
  e.currentTarget.classList.remove('dragging');
  document.querySelectorAll('.fav-gallery-item.drag-over').forEach(el => el.classList.remove('drag-over'));
  favDragState.draggingId = null;
}

function onFavDragOver(e) {
  e.preventDefault();
  if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
  const item = e.currentTarget;
  if (parseInt(item.dataset.bookId) === favDragState.draggingId) return;
  document.querySelectorAll('.fav-gallery-item.drag-over').forEach(el => el.classList.remove('drag-over'));
  item.classList.add('drag-over');
}

function onFavDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}

function onFavDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  const target = e.currentTarget;
  const targetId = parseInt(target.dataset.bookId);
  const draggingId = favDragState.draggingId;
  target.classList.remove('drag-over');
  if (!draggingId || draggingId === targetId) return;
  reorderFavorites(draggingId, targetId);
}

// ── TOUCH HANDLERS ──
let favTouchPressTimer = null;
function onFavTouchStart(e) {
  const item = e.currentTarget;
  const touch = e.touches[0];
  favDragState.touchStartY = touch.clientY;
  favDragState.touchStartX = touch.clientX;
  favDragState.touchActive = false;

  // Long-press de 350ms ativa o modo arrastar
  favTouchPressTimer = setTimeout(() => {
    favDragState.touchActive = true;
    favDragState.draggingId = parseInt(item.dataset.bookId);
    item.classList.add('dragging');
    // Vibração discreta como feedback (se suportado)
    try { if (navigator.vibrate) navigator.vibrate(15); } catch (_) {}
  }, 350);
}

function onFavTouchMove(e) {
  // Se ainda não ativou drag, deixa o scroll natural acontecer
  if (!favDragState.touchActive) {
    // Cancela o long-press se o dedo se moveu muito (provavelmente é scroll)
    const touch = e.touches[0];
    const dx = Math.abs(touch.clientX - favDragState.touchStartX);
    const dy = Math.abs(touch.clientY - favDragState.touchStartY);
    if (dx > 10 || dy > 10) {
      clearTimeout(favTouchPressTimer);
      favTouchPressTimer = null;
    }
    return;
  }

  // Drag ativo — bloqueia scroll
  e.preventDefault();
  const touch = e.touches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  const overItem = target && target.closest('.fav-gallery-item');

  // Atualiza highlight de hover
  if (favDragState.lastOverEl && favDragState.lastOverEl !== overItem) {
    favDragState.lastOverEl.classList.remove('drag-over');
    favDragState.lastOverEl = null;
  }
  if (overItem && parseInt(overItem.dataset.bookId) !== favDragState.draggingId) {
    overItem.classList.add('drag-over');
    favDragState.lastOverEl = overItem;
  }
}

function onFavTouchEnd(e) {
  clearTimeout(favTouchPressTimer);
  favTouchPressTimer = null;

  if (!favDragState.touchActive) return;

  // Pega a posição final do dedo a partir de changedTouches
  const touch = e.changedTouches && e.changedTouches[0];
  let droppedOnId = null;
  if (touch) {
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const overItem = target && target.closest('.fav-gallery-item');
    if (overItem) droppedOnId = parseInt(overItem.dataset.bookId);
  }

  // Limpa estado visual
  document.querySelectorAll('.fav-gallery-item.dragging').forEach(el => el.classList.remove('dragging'));
  document.querySelectorAll('.fav-gallery-item.drag-over').forEach(el => el.classList.remove('drag-over'));

  const draggingId = favDragState.draggingId;
  favDragState.draggingId = null;
  favDragState.touchActive = false;
  favDragState.lastOverEl = null;

  if (draggingId && droppedOnId && droppedOnId !== draggingId) {
    // Bloqueia o clique que dispararia depois do touchend
    e.preventDefault();
    reorderFavorites(draggingId, droppedOnId);
  }
}

// Move o livro `sourceId` pra posição do `targetId` e desloca o resto
function reorderFavorites(sourceId, targetId) {
  const source = getBookById(sourceId);
  const target = getBookById(targetId);
  if (!source || !target) return;
  if (!source.favorite || !target.favorite) return;

  // Pega lista ordenada por rank atual
  const ordered = state.books
    .filter(b => b.favorite)
    .sort((a, b) => {
      const ra = (typeof a.favRank === 'number' && a.favRank > 0) ? a.favRank : 999;
      const rb = (typeof b.favRank === 'number' && b.favRank > 0) ? b.favRank : 999;
      if (ra !== rb) return ra - rb;
      return a.t.localeCompare(b.t, 'pt', { sensitivity: 'base' });
    });

  const fromIdx = ordered.findIndex(b => b.id === sourceId);
  const toIdx = ordered.findIndex(b => b.id === targetId);
  if (fromIdx < 0 || toIdx < 0 || fromIdx === toIdx) return;

  // Remove e re-insere na nova posição
  const [moved] = ordered.splice(fromIdx, 1);
  ordered.splice(toIdx, 0, moved);

  // Reatribui ranks 1..N
  ordered.forEach((b, i) => {
    const desired = i + 1;
    if (b.favRank !== desired) {
      b.favRank = desired;
      pushBook(b);
    }
  });
  saveState();
  renderAll();
}

function renderBookItemHTML(book, showGenre) {
  const g = GENRES[book.g];
  let statusBtn = "";
  let meta = "";
  
  if (book.status === "pendente") {
    statusBtn = `<button class="book-status" onclick="quickStart(${book.id})">pendente</button>`;
  } else if (book.status === "reading") {
    statusBtn = `<button class="book-status reading" onclick="openEditModal(${book.id})">lendo ✦</button>`;
    if (book.startDate) meta = `<div class="book-meta">📖 desde ${formatDate(book.startDate)}</div>`;
  } else if (book.status === "lido") {
    statusBtn = `<button class="book-status read" onclick="openEditModal(${book.id})">✓ lido</button>`;
    const stars = book.rating ? '★'.repeat(book.rating) + '☆'.repeat(5 - book.rating) : '';
    meta = `<div class="book-meta">${book.startDate ? `${formatDate(book.startDate)} →` : ''} ${book.endDate ? formatDate(book.endDate) : ''}${stars ? ` <span class="stars">${stars}</span>` : ''}</div>`;
  } else if (book.status === "abandoned") {
    statusBtn = `<button class="book-status abandoned" onclick="openEditModal(${book.id})">abandonado</button>`;
    if (book.endDate) meta = `<div class="book-meta">parou em ${formatDate(book.endDate)}</div>`;
  }
  
  const favMark = book.favorite ? '<span class="book-fav-mark">♥</span>' : '';
  const genreLabel = showGenre && g ? `<div class="book-meta"><span>${g.emoji} ${g.name}</span></div>` : '';
  // Mostra botão de editar (lápis) nas abas onde editar título/gênero faz sentido
  const editBtn = (state.filter === "todos" || state.filter === "pendente")
    ? `<button class="book-edit-btn" onclick="openEditModal(${book.id})" aria-label="Editar">✎</button>`
    : '';
  
  return `
    <div class="book-item">
      <div class="book-info">
        <div class="book-title-row"><div class="book-title">${escapeHtml(book.t)}</div>${favMark}</div>
        <div class="book-author">${escapeHtml(book.a)}</div>
        ${genreLabel}
        ${meta}
      </div>
      <div class="book-status-group">
        ${editBtn}
        ${statusBtn}
        <button class="book-delete" onclick="deleteBook(${book.id})" aria-label="Deletar">✕</button>
      </div>
    </div>
  `;
}

// ============ MODAL RODA ============
let currentGenre = null;
let currentRotation = 0;
let currentBook = null;
let spinning = false;

function openModal(genreKey) {
  currentGenre = genreKey;
  const g = genreKey ? GENRES[genreKey] : null;
  document.getElementById("modalTitle").innerHTML = g
    ? `<em>${g.name}</em> ${g.emoji}`
    : `<em>todos</em> os pendentes ✦`;
  document.querySelector(".wheel-wrapper").style.display = "";
  document.getElementById("spinBtn").style.display = "";
  
  updateModalSub();
  renderWheel(genreKey);
  renderBookList(genreKey);
  document.getElementById("result").classList.remove("show");
  currentBook = null;
  
  const wheel = document.getElementById("wheel");
  wheel.style.transition = "none";
  wheel.style.transform = "rotate(0deg)";
  currentRotation = 0;
  document.getElementById("spinBtn").textContent = "Girar a roda";
  
  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function updateModalSub() {
  const pending = availableBooks(currentGenre).length;
  document.getElementById("modalSub").textContent = 
    pending === 0 ? "Nenhum livro disponível na roda ✦" : `${pending} livro${pending > 1 ? 's' : ''} esperando por você`;
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") closeModal();
});

// ============ WHEEL ============
function renderWheel(genreKey) {
  const wheel = document.getElementById("wheel");
  const books = availableBooks(genreKey);
  // Para "todos": cada fatia usa a cor primária do seu gênero
  const colors = genreKey ? PALETTE[genreKey] : null;
  
  if (books.length === 0) {
    wheel.innerHTML = `
      <svg viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="100" fill="#e8ddc4"/>
        <text x="100" y="95" text-anchor="middle" font-family="Instrument Serif" font-style="italic" font-size="12" fill="#5a4f47">a roda</text>
        <text x="100" y="115" text-anchor="middle" font-family="Instrument Serif" font-style="italic" font-size="12" fill="#5a4f47">tá vazia ✦</text>
      </svg>
    `;
    document.getElementById("spinBtn").disabled = true;
    return;
  }
  
  document.getElementById("spinBtn").disabled = false;
  
  const n = books.length;
  const anglePerSlice = 360 / n;
  let svg = `<svg viewBox="0 0 200 200">`;
  
  let maxChars, fontSize;
  if (n === 1) { maxChars = 30; fontSize = 11; }
  else if (n === 2) { maxChars = 26; fontSize = 10; }
  else if (n <= 4) { maxChars = 22; fontSize = 9; }
  else if (n <= 6) { maxChars = 20; fontSize = 8.5; }
  else if (n <= 8) { maxChars = 18; fontSize = 8; }
  else if (n <= 10) { maxChars = 16; fontSize = 7.5; }
  else if (n <= 14) { maxChars = 14; fontSize = 6.8; }
  else if (n <= 18) { maxChars = 12; fontSize = 6.2; }
  else { maxChars = 10; fontSize = 5.5; }
  
  books.forEach((book, i) => {
    const startAngle = i * anglePerSlice - 90;
    const endAngle = (i + 1) * anglePerSlice - 90;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = 100 + 100 * Math.cos(startRad);
    const y1 = 100 + 100 * Math.sin(startRad);
    const x2 = 100 + 100 * Math.cos(endRad);
    const y2 = 100 + 100 * Math.sin(endRad);
    const largeArc = anglePerSlice > 180 ? 1 : 0;
    const pathData = n === 1
      ? `M 100 100 m -100 0 a 100 100 0 1 0 200 0 a 100 100 0 1 0 -200 0`
      : `M 100 100 L ${x1} ${y1} A 100 100 0 ${largeArc} 1 ${x2} ${y2} Z`;
    const color = colors ? colors[i % colors.length] : (PALETTE[book.g] || ["#e8a9a0","#b8a8c8"])[i % 2];
    svg += `<path d="${pathData}" fill="${color}" stroke="#f4ecd8" stroke-width="1.5"/>`;
    
    const midAngle = (startAngle + endAngle) / 2;
    const midRad = (midAngle * Math.PI) / 180;
    const textStartRadius = 88;
    const textX = 100 + textStartRadius * Math.cos(midRad);
    const textY = 100 + textStartRadius * Math.sin(midRad);
    const textRotation = midAngle + 180;
    const title = book.t.length > maxChars ? book.t.substring(0, maxChars - 1) + "…" : book.t;
    svg += `<text x="${textX}" y="${textY}" text-anchor="start" dominant-baseline="middle" font-family="Fraunces, serif" font-weight="500" font-size="${fontSize}" fill="#2a2420" transform="rotate(${textRotation} ${textX} ${textY})">${escapeXml(title)}</text>`;
  });
  
  svg += `</svg>`;
  wheel.innerHTML = svg;
}

function spin() {
  if (spinning) return;
  const books = availableBooks(currentGenre);
  if (books.length === 0) return;
  
  spinning = true;
  document.getElementById("spinBtn").disabled = true;
  document.getElementById("result").classList.remove("show");
  
  const n = books.length;
  const anglePerSlice = 360 / n;
  const winnerIndex = Math.floor(Math.random() * n);
  const winnerCenter = winnerIndex * anglePerSlice + anglePerSlice / 2;
  const baseRotation = 360 * 6;
  const targetRotation = baseRotation - winnerCenter;
  const jitter = (Math.random() - 0.5) * anglePerSlice * 0.7;
  currentRotation = targetRotation + jitter;
  
  const wheel = document.getElementById("wheel");
  wheel.style.transition = "transform 5s cubic-bezier(0.17, 0.67, 0.15, 1)";
  wheel.style.transform = `rotate(${currentRotation}deg)`;
  
  setTimeout(() => {
    currentBook = books[winnerIndex];
    showResult(currentBook);
    launchConfetti();
    spinning = false;
    document.getElementById("spinBtn").disabled = false;
    document.getElementById("spinBtn").textContent = "Girar de novo";
    setTimeout(() => {
      wheel.style.transition = "none";
      const normalized = currentRotation % 360;
      wheel.style.transform = `rotate(${normalized}deg)`;
      currentRotation = normalized;
    }, 100);
  }, 5000);
}

function showResult(book) {
  document.getElementById("resultTitle").textContent = book.t;
  document.getElementById("resultAuthor").textContent = `por ${book.a}`;
  document.getElementById("result").classList.add("show");
}

function skipBook() {
  document.getElementById("result").classList.remove("show");
  currentBook = null;
}

function launchConfetti() {
  const colors = PALETTE[currentGenre];
  const modal = document.querySelector("#modal .modal");
  const rect = modal.getBoundingClientRect();
  for (let i = 0; i < 30; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = (rect.left + rect.width / 2) + "px";
    c.style.top = (rect.top + 200) + "px";
    c.style.background = colors[i % colors.length];
    c.style.setProperty("--tx", (Math.random() - 0.5) * 400 + "px");
    c.style.setProperty("--ty", (Math.random() * -300 - 50) + "px");
    c.style.setProperty("--r", Math.random() * 720 + "deg");
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 1500);
  }
}

// ============ TIMER / SESSÕES DE LEITURA ============
const TIMER_KEY = "minha_estante_timer";
let timerState = loadTimerState();
let timerInterval = null;

function loadTimerState() {
  try {
    const saved = localStorage.getItem(TIMER_KEY);
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return null;
}

function saveTimerState() {
  if (timerState) {
    try { localStorage.setItem(TIMER_KEY, JSON.stringify(timerState)); } catch(e) {}
  } else {
    try { localStorage.removeItem(TIMER_KEY); } catch(e) {}
  }
}

function startSession(bookId) {
  const book = getBookById(bookId);
  if (!book) return;
  
  timerState = {
    bookId: bookId,
    startedAt: Date.now(),
    elapsedBefore: 0,
    pausedAt: null,
    pageStart: book.pagesCurrent || 0,
  };
  saveTimerState();
  openTimer();
}

function openTimer() {
  if (!timerState) return;
  const book = getBookById(timerState.bookId);
  if (!book) {
    timerState = null;
    saveTimerState();
    return;
  }
  
  document.getElementById("timerTitle").textContent = book.t;
  document.getElementById("timerAuthor").textContent = `por ${book.a}`;
  
  if (book.pagesTotal) {
    const current = book.pagesCurrent || 0;
    document.getElementById("timerPages").textContent = `página ${current} de ${book.pagesTotal}`;
  } else {
    document.getElementById("timerPages").textContent = '';
  }
  
  // Cover
  const coverEl = document.getElementById("timerCover");
  coverEl.innerHTML = coverFallbackHTML(book, book.g);
  fetchCover(book.t, book.a).then(url => {
    if (!url) return;
    loadCoverWithValidation(url, (validUrl) => {
      if (document.getElementById("timerOverlay").classList.contains("open")) {
        coverEl.innerHTML = `<img src="${validUrl}" alt="">`;
      }
    });
  });
  
  // Pausar/Retomar
  updatePauseButton();
  
  document.getElementById("timerOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
  
  // Inicia update visual
  if (!timerInterval) {
    timerInterval = setInterval(updateTimerDisplay, 500);
  }
  updateTimerDisplay();
}

function minimizeTimer() {
  // Esconde mas mantém rodando
  document.getElementById("timerOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function getElapsedSeconds() {
  if (!timerState) return 0;
  let total = timerState.elapsedBefore || 0;
  if (!timerState.pausedAt) {
    total += Math.floor((Date.now() - timerState.startedAt) / 1000);
  }
  return total;
}

function updateTimerDisplay() {
  if (!timerState) return;
  const secs = getElapsedSeconds();
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  const display = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  
  const el = document.getElementById("timerDisplay");
  if (el) el.textContent = display;
  
  // Alerta de leitura longa (>4h)
  if (secs > 14400 && el && !el.dataset.longWarned) {
    el.dataset.longWarned = "1";
    if (confirm("Você tá lendo há mais de 4 horas. Ainda tá aí? Se não, finaliza que eu ajusto.")) {
      // continua
    } else {
      stopTimer();
    }
  }
}

function toggleTimer() {
  if (!timerState) return;
  if (timerState.pausedAt) {
    // Retomando
    timerState.startedAt = Date.now();
    timerState.pausedAt = null;
  } else {
    // Pausando
    timerState.elapsedBefore = (timerState.elapsedBefore || 0) + Math.floor((Date.now() - timerState.startedAt) / 1000);
    timerState.pausedAt = Date.now();
  }
  saveTimerState();
  updatePauseButton();
  updateTimerDisplay();
}

function updatePauseButton() {
  const btn = document.getElementById("timerPauseBtn");
  if (!btn || !timerState) return;
  btn.textContent = timerState.pausedAt ? "Retomar" : "Pausar";
}

function cancelTimer() {
  if (!confirm("Cancelar sessão? O tempo lido não vai ser salvo.")) return;
  clearInterval(timerInterval);
  timerInterval = null;
  timerState = null;
  saveTimerState();
  document.getElementById("timerOverlay").classList.remove("open");
  document.body.style.overflow = "";
  renderAll();
}

function stopTimer() {
  if (!timerState) return;
  
  // Pausa se não estava pausado
  if (!timerState.pausedAt) {
    timerState.elapsedBefore = (timerState.elapsedBefore || 0) + Math.floor((Date.now() - timerState.startedAt) / 1000);
    timerState.pausedAt = Date.now();
  }
  
  const totalSecs = timerState.elapsedBefore;
  if (totalSecs < 5) {
    if (!confirm("Menos de 5 segundos registrados. Salvar mesmo assim?")) {
      document.getElementById("timerOverlay").classList.remove("open");
      document.body.style.overflow = "";
      return;
    }
  }
  
  // Abre modal de salvar
  openSaveSession();
}

// ============ SALVAR SESSÃO ============
let pendingSession = null;

function openSaveSession() {
  if (!timerState) return;
  const book = getBookById(timerState.bookId);
  if (!book) return;
  
  const totalSecs = Math.max(0, isNaN(getElapsedSeconds()) ? (timerState.elapsedBefore || 0) : getElapsedSeconds());
  pendingSession = {
    bookId: book.id,
    startedAt: new Date(Number(timerState.startedAt) - (timerState.elapsedBefore || 0) * 1000).toISOString(),
    durationSeconds: totalSecs,
    pageStart: timerState.pageStart || 0,
  };
  
  document.getElementById("saveSessionBook").textContent = `"${book.t}" — ${book.a}`;
  
  const timeStr = formatDuration(totalSecs);
  const now = new Date();
  const dateStr = `${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()} às ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  document.getElementById("saveSessionInfo").innerHTML = `
    <strong>${dateStr}</strong><br>
    Tempo lido: <strong>${timeStr}</strong>
  `;
  
  const pageTotal = book.pagesTotal || 0;
  const pageInput = document.getElementById("sessionPageEnd");
  pageInput.value = book.pagesCurrent || '';
  pageInput.max = pageTotal || 9999;
  document.getElementById("sessionPageTotal").textContent = pageTotal ? `de ${pageTotal}` : '';
  
  document.getElementById("saveSessionModal").classList.add("open");
  // Fecha timer overlay
  document.getElementById("timerOverlay").classList.remove("open");
}

function closeSaveSession() {
  document.getElementById("saveSessionModal").classList.remove("open");
}

async function saveSession(markAsRead) {
  if (!pendingSession) return;
  const session = pendingSession;
  pendingSession = null; // limpa imediatamente pra evitar duplo clique
  const book = getBookById(session.bookId);
  if (!book) return;
  
  const pageEnd = parseInt(document.getElementById("sessionPageEnd").value) || book.pagesCurrent || 0;
  session.pageEnd = pageEnd;
  session.endedAt = new Date().toISOString();
  
  // Atualiza página atual do livro
  book.pagesCurrent = pageEnd;
  
  if (markAsRead) {
    book.status = "lido";
    book.endDate = todayISO();
    if (book.pagesTotal) book.pagesCurrent = book.pagesTotal;
  }
  
  saveState();
  pushBook(book);

  // Salva sessão localmente no state
  if (!state.sessions) state.sessions = [];
  state.sessions.push({ ...session, pageEnd: session.pageEnd, pageStart: session.pageStart });
  saveState();

  // Salva sessão no Supabase
  try {
    await pushSession(session);
  } catch(e) { console.error(e); }
  
  // Fecha tudo e mostra resultado
  closeSaveSession();
  clearInterval(timerInterval);
  timerInterval = null;
  const sessionData = { ...session };
  timerState = null;
  saveTimerState();
  
  showSessionResult(book, sessionData);
  renderAll();
}

function discardSession() {
  if (!confirm("Descartar essa sessão? O tempo lido será perdido.")) return;
  clearInterval(timerInterval);
  timerInterval = null;
  timerState = null;
  saveTimerState();
  pendingSession = null;
  closeSaveSession();
  document.getElementById("timerOverlay").classList.remove("open");
  document.body.style.overflow = "";
  renderAll();
}

async function pushSession(session) {
  if (!config.setupDone || config.skipSync) return;
  setSyncStatus("syncing", "↻ salvando sessão");
  try {
    await supabaseFetch("reading_sessions", {
      method: 'POST',
      body: JSON.stringify({
        book_id: session.bookId,
        started_at: session.startedAt,
        ended_at: session.endedAt,
        duration_seconds: session.durationSeconds,
        page_start: session.pageStart,
        page_end: session.pageEnd,
      }),
    });
    setSyncStatus("synced", "✦ sincronizado");
  } catch(e) {
    console.error(e);
    setSyncStatus("error", "⚠ sessão não sincronizou");
  }
}

function formatDuration(totalSecs) {
  const h = Math.floor(totalSecs / 3600);
  const m = Math.floor((totalSecs % 3600) / 60);
  const s = totalSecs % 60;
  if (h > 0) return `${h}h ${m}min ${s}s`;
  if (m > 0) return `${m}min ${s}s`;
  return `${s} segundo${s !== 1 ? 's' : ''}`;
}

// ============ RESULTADO DA SESSÃO ============
function showSessionResult(book, session) {
  const today = new Date();
  const dateStr = `${String(today.getDate()).padStart(2,'0')}/${String(today.getMonth()+1).padStart(2,'0')}/${today.getFullYear()}`;
  document.getElementById("sessionResultDate").textContent = dateStr;
  
  // Cover dentro do círculo
  const inner = document.getElementById("progressInner");
  inner.innerHTML = coverFallbackHTML(book, book.g);
  fetchCover(book.t, book.a).then(url => {
    if (!url) return;
    loadCoverWithValidation(url, (validUrl) => {
      inner.innerHTML = `<img src="${validUrl}" alt="">`;
    });
  });
  
  // Progress ring
  const current = book.pagesCurrent || 0;
  const total = book.pagesTotal || 0;
  const pct = total > 0 ? Math.min(1, current / total) : 0;
  const circumference = 2 * Math.PI * 82; // r=82
  const offset = circumference * (1 - pct);
  const circle = document.getElementById("progressCircle");
  circle.style.strokeDasharray = circumference;
  setTimeout(() => { circle.style.strokeDashoffset = offset; }, 100);
  
  document.getElementById("progressPct").textContent = total > 0 ? `${Math.round(pct * 100)}%` : 'sem meta';
  
  document.getElementById("sessionResultTime").textContent = formatDuration(session.durationSeconds);
  
  const pagesRead = Math.max(0, (session.pageEnd || 0) - (session.pageStart || 0));
  if (total > 0) {
    document.getElementById("sessionResultPages").textContent = 
      pagesRead > 0 
        ? `${pagesRead} página${pagesRead > 1 ? 's' : ''} · agora em ${current}/${total}`
        : `ainda em ${current}/${total}`;
  } else {
    document.getElementById("sessionResultPages").textContent = 
      pagesRead > 0 ? `${pagesRead} página${pagesRead > 1 ? 's' : ''} lidas` : '';
  }
  
  // Estimativa de tempo restante — usa mediana das últimas sessões para ser
  // robusto a outliers (ex: sessão com timer esquecido rodando)
  const pagesLeft = Math.max(0, total - current);

  let secPerPage = 0;
  const allSessions = (state.sessions || []).filter(s =>
    s.bookId === book.id &&
    s.durationSeconds > 0 &&
    (s.pageEnd || 0) > (s.pageStart || 0)
  );
  // Garante que a sessão atual sempre está no pool
  const currentInPool = allSessions.some(s => s.startedAt === session.startedAt);
  if (!currentInPool && session.durationSeconds > 0 && pagesRead > 0) {
    allSessions.push(session);
  }
  
  if (allSessions.length > 0) {
    // Calcula sec/página de cada sessão individual
    let perPageRates = allSessions.map(s => {
      const pages = (s.pageEnd || 0) - (s.pageStart || 0);
      return s.durationSeconds / pages;
    });
    
    // Descarta outliers extremos (sessões > 10 min/página = timer provavelmente esquecido)
    const MAX_REASONABLE = 600; // 10 min por página
    const filtered = perPageRates.filter(r => r <= MAX_REASONABLE);
    if (filtered.length > 0) perPageRates = filtered;
    
    // Pega só as últimas 10 sessões (ordenadas por startedAt) — ritmo recente é mais relevante
    const sessionsByDate = [...allSessions]
      .filter(s => {
        const r = s.durationSeconds / ((s.pageEnd || 0) - (s.pageStart || 0));
        return r <= MAX_REASONABLE;
      })
      .sort((a, b) => (a.startedAt || '').localeCompare(b.startedAt || ''));
    const recent = sessionsByDate.slice(-10);
    if (recent.length > 0) {
      perPageRates = recent.map(s => s.durationSeconds / ((s.pageEnd || 0) - (s.pageStart || 0)));
    }
    
    // Usa mediana (mais robusta que média)
    perPageRates.sort((a, b) => a - b);
    const mid = Math.floor(perPageRates.length / 2);
    secPerPage = perPageRates.length % 2 === 0
      ? (perPageRates[mid - 1] + perPageRates[mid]) / 2
      : perPageRates[mid];
  } else if (pagesRead > 0 && session.durationSeconds > 0) {
    secPerPage = session.durationSeconds / pagesRead;
  }

  if (pagesLeft > 0 && secPerPage > 0) {
    const secsLeft = Math.round(secPerPage * pagesLeft);
    document.getElementById("sessionResultEstimate").innerHTML =
      `Nesse ritmo, faltam <strong>${formatDuration(secsLeft)}</strong> pra terminar ✦`;
  } else if (pagesLeft > 0) {
    document.getElementById("sessionResultEstimate").innerHTML =
      `<em>Faltam ${pagesLeft} páginas</em>`;
  } else if (total > 0 && current >= total) {
    document.getElementById("sessionResultEstimate").innerHTML =
      `<em>Você terminou o livro ✦</em>`;
  } else {
    document.getElementById("sessionResultEstimate").innerHTML = '';
  }
  
  document.getElementById("sessionResultModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSessionResult() {
  document.getElementById("sessionResultModal").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("saveSessionModal").addEventListener("click", (e) => {
  if (e.target.id === "saveSessionModal") closeSaveSession();
});
document.getElementById("sessionResultModal").addEventListener("click", (e) => {
  if (e.target.id === "sessionResultModal") closeSessionResult();
});

// ============ INICIAR LEITURA ============
let readingBookId = null;

function startReading() {
  if (!currentBook) return;
  readingBookId = currentBook.id;
  document.getElementById("readingModalBook").textContent = `"${currentBook.t}" — ${currentBook.a}`;
  document.getElementById("startDate").value = todayISO();
  document.getElementById("readingModal").classList.add("open");
}

function quickStart(id) {
  const book = getBookById(id);
  if (!book) return;
  readingBookId = id;
  document.getElementById("readingModalBook").textContent = `"${book.t}" — ${book.a}`;
  document.getElementById("startDate").value = todayISO();
  document.getElementById("readingModal").classList.add("open");
}

function closeReadingModal() {
  document.getElementById("readingModal").classList.remove("open");
  readingBookId = null;
}

function confirmStartReading() {
  if (!readingBookId) return;
  const date = document.getElementById("startDate").value;
  if (!date) { alert("Escolhe uma data ✦"); return; }
  
  const book = getBookById(readingBookId);
  book.status = "reading";
  book.startDate = date;
  saveState();
  pushBook(book);
  
  closeReadingModal();
  document.getElementById("result").classList.remove("show");
  currentBook = null;
  
  if (currentGenre) {
    renderWheel(currentGenre);
    renderBookList(currentGenre);
    updateModalSub();
  }
  renderAll();
}

// ============ EDIÇÃO / FINALIZAÇÃO ============
let editingBookId = null;
let selectedStars = 0;
let editingFavorite = false;
let editingFavRank = null; // posição (1-10) que o livro vai ocupar nos favoritos

function openEditModal(bookId) {
  const book = getBookById(bookId);
  if (!book) return;
  editingBookId = bookId;
  selectedStars = book.rating || 0;
  editingFavorite = !!book.favorite;
  editingFavRank = (typeof book.favRank === 'number' && book.favRank > 0) ? book.favRank : null;
  
  document.getElementById("editModalBook").textContent = `"${book.t}" — ${book.a}`;
  document.getElementById("editTitle").value = book.t || '';
  document.getElementById("editAuthor").value = book.a || '';
  
  // Popula select de gêneros
  const genreSelect = document.getElementById("editGenre");
  genreSelect.innerHTML = Object.entries(GENRES).map(([k, g]) => 
    `<option value="${k}"${book.g === k ? ' selected' : ''}>${g.emoji} ${g.name}</option>`
  ).join("");
  
  document.getElementById("editStartDate").value = book.startDate || todayISO();
  document.getElementById("editEndDate").value = book.endDate || todayISO();
  document.getElementById("editPagesCurrent").value = book.pagesCurrent || '';
  document.getElementById("editPagesTotal").value = book.pagesTotal || '';
  
  const info = book.startDate 
    ? `<strong>Começou em:</strong> ${formatDate(book.startDate)}` 
    : `<em>Sem data de início registrada</em>`;
  document.getElementById("editDates").innerHTML = info;
  
  renderStars();
  renderFavoriteToggle();
  renderSessionsList(book.id);
  updateCurrentCoverPreview(book);
  updateMarkReadVisibility(book);
  document.getElementById("editModal").classList.add("open");
  document.body.style.overflow = "hidden";
  
  // Busca páginas se não tiver
  if (!book.pagesTotal) {
    fetchPages(book.t, book.a).then(pages => {
      if (pages) {
        const input = document.getElementById("editPagesTotal");
        if (input && !input.value) input.value = pages;
        updateMarkReadVisibility(book);
      }
    });
  }
}

// Decide quais botões mostrar no modal de edição.
// Regras:
// - Se livro já é "lido" → mostra "Reler" (volta pra pendente, permite reler)
// - Se status é "pendente" → mostra "Começar a ler"
// - Se status é "reading" SEM páginas → esconde os principais (precisa registrar páginas)
// - Se status é "reading" COM páginas e progresso >= 85% → mostra "Marcar como lido"
// - Se status é "reading" COM páginas e progresso < 85% → esconde os principais
// - Texto do "Salvar edição" muda conforme status
function updateMarkReadVisibility(book) {
  const markBtn = document.getElementById("markReadBtn");
  const startBtn = document.getElementById("startReadingBtn");
  const rereadBtn = document.getElementById("rereadBtn");
  const saveBtn = document.getElementById("saveEditBtn");
  const abandonBtn = document.getElementById("abandonBtn");
  const deleteBtn = document.getElementById("deleteBookBtn");
  if (!markBtn || !startBtn || !rereadBtn || !saveBtn || !book) return;

  // Pega valores atuais dos inputs (podem ter sido editados)
  const currentInput = parseInt(document.getElementById("editPagesCurrent").value);
  const totalInput = parseInt(document.getElementById("editPagesTotal").value);
  const current = isNaN(currentInput) ? 0 : currentInput;
  const total = isNaN(totalInput) ? 0 : totalInput;
  const hasPages = total > 0;

  // Reset principais
  markBtn.style.display = "none";
  startBtn.style.display = "none";
  rereadBtn.style.display = "none";

  // Botões "perigosos" no rodapé do modal:
  // - "lido": só faz sentido "Excluir" (já leu, não tem o que abandonar)
  // - resto: "Abandonar livro" como antes
  if (abandonBtn && deleteBtn) {
    if (book.status === "lido") {
      abandonBtn.style.display = "none";
      deleteBtn.style.display = "";
    } else {
      abandonBtn.style.display = "";
      deleteBtn.style.display = "none";
    }
  }

  // Texto do botão "Salvar edição" — só faz sentido "(continuar lendo)" se está lendo
  if (book.status === "reading") {
    saveBtn.textContent = "Salvar edição (continuar lendo)";
  } else {
    saveBtn.textContent = "Salvar edição";
  }

  // Já é lido → mostra "Reler"
  if (book.status === "lido") {
    rereadBtn.style.display = "";
    return;
  }

  // Pendente → começar a ler
  if (book.status === "pendente") {
    startBtn.style.display = "";
    return;
  }

  // Lendo (reading) ou abandonado
  if (book.status === "reading" || book.status === "abandoned") {
    if (!hasPages) {
      // Sem páginas registradas → esconde os principais (precisa registrar primeiro)
      return;
    }
    // Com páginas → aplica regra dos 85%
    const pct = current / total;
    if (pct >= 0.85) {
      markBtn.style.display = "";
    }
    return;
  }
}

function startReadingFromEdit() {
  if (!editingBookId) return;
  const id = editingBookId;
  closeEditModal();
  // pequeno delay pra animação do modal fechar suavemente antes do próximo abrir
  setTimeout(() => quickStart(id), 150);
}

function rereadBookFromEdit() {
  if (!editingBookId) return;
  const book = getBookById(editingBookId);
  if (!book) return;
  if (!confirm(`Marcar "${book.t}" como pendente para reler? O histórico de leitura anterior é mantido.`)) return;
  
  // Volta o livro para pendente, mantendo rating e datas anteriores no histórico
  // Limpa só pagesCurrent pra começar do zero a próxima leitura
  book.status = "pendente";
  book.pagesCurrent = 0;
  // Mantém: rating, endDate (data da leitura anterior), favorite, pagesTotal
  saveState();
  pushBook(book);
  
  closeEditModal();
  renderAll();
}

// Cache das últimas sessões carregadas para o livro atual no modal de edição
// (chave: bookId, valor: array de sessões raw do supabase ordenadas desc por started_at)
let sessionsCache = {};

async function renderSessionsList(bookId) {
  const container = document.getElementById("sessionsListContainer");
  container.innerHTML = '';
  
  if (!config.setupDone || config.skipSync) return;
  
  try {
    const sessions = await supabaseFetch(`reading_sessions?book_id=eq.${bookId}&order=started_at.desc&limit=50`);
    if (!sessions || sessions.length === 0) return;
    
    sessionsCache[bookId] = sessions;
    
    // Agrupa por data local (yyyy-mm-dd usando timezone local)
    const byDay = {};
    sessions.forEach(s => {
      const d = new Date(s.started_at);
      const dayKey = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      if (!byDay[dayKey]) byDay[dayKey] = [];
      byDay[dayKey].push(s);
    });
    
    // Ordena dias do mais recente pro mais antigo
    const dayKeys = Object.keys(byDay).sort((a, b) => b.localeCompare(a));
    
    let html = `<div class="sessions-list">
      <div class="sessions-list-title">últimas sessões · ${dayKeys.length} dia${dayKeys.length === 1 ? '' : 's'}</div>`;
    
    dayKeys.forEach(dayKey => {
      const daySessions = byDay[dayKey];
      // Ordena sessões do dia por horário (asc) pra pegar páginas corretas
      const sortedAsc = [...daySessions].sort((a, b) => 
        (a.started_at || '').localeCompare(b.started_at || '')
      );
      
      const totalSecs = daySessions.reduce((sum, s) => sum + (s.duration_seconds || 0), 0);
      
      // Total de páginas lidas no dia (soma de pageEnd - pageStart por sessão)
      const totalPagesDay = daySessions.reduce((sum, s) => {
        if (s.page_start != null && s.page_end != null && s.page_end > s.page_start) {
          return sum + (s.page_end - s.page_start);
        }
        return sum;
      }, 0);
      
      // Pega menor pageStart e maior pageEnd do dia (ignora nulls)
      const startsValid = sortedAsc.map(s => s.page_start).filter(p => p != null);
      const endsValid = sortedAsc.map(s => s.page_end).filter(p => p != null);
      const minStart = startsValid.length > 0 ? Math.min(...startsValid) : null;
      const maxEnd = endsValid.length > 0 ? Math.max(...endsValid) : null;
      
      const [yyyy, mm, dd] = dayKey.split('-');
      const dateStr = `${dd}/${mm}`;
      const timeStr = formatDuration(totalSecs);
      const pagesStr = (minStart != null && maxEnd != null && maxEnd > minStart) 
        ? `${minStart}→${maxEnd}` : '';
      const count = daySessions.length;
      const pagesReadStr = totalPagesDay > 0 
        ? `${totalPagesDay} pág${totalPagesDay > 1 ? 's' : ''} lida${totalPagesDay > 1 ? 's' : ''}` 
        : '';
      
      // Sempre clicável (mesmo com 1 sessão, pra editar/excluir)
      html += `<div class="session-item day-row" onclick="openSessionsDayModal(${bookId}, '${dayKey}')">
        <span class="sess-date">
          <span class="sess-date-main">${dateStr}${pagesStr ? ` · ${pagesStr}` : ''}${count > 1 ? `<span class="sess-count">${count} sessões</span>` : ''}</span>
          ${pagesReadStr ? `<span class="sess-date-meta">${pagesReadStr}</span>` : ''}
        </span>
        <span class="sess-time">${timeStr}</span>
        <span class="sess-chevron">›</span>
      </div>`;
    });
    html += `</div>`;
    container.innerHTML = html;
  } catch(e) { console.error(e); }
}

function openSessionsDayModal(bookId, dayKey) {
  const sessions = (sessionsCache[bookId] || []).filter(s => {
    const d = new Date(s.started_at);
    const k = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    return k === dayKey;
  });
  
  if (sessions.length === 0) return;
  
  // Ordena do mais cedo pro mais tarde (cronológico do dia)
  sessions.sort((a, b) => (a.started_at || '').localeCompare(b.started_at || ''));
  
  const [yyyy, mm, dd] = dayKey.split('-');
  document.getElementById("sessionsDayDate").textContent = `${dd}/${mm}/${yyyy}`;
  
  const totalSecs = sessions.reduce((sum, s) => sum + (s.duration_seconds || 0), 0);
  document.getElementById("sessionsDaySub").textContent = 
    `${sessions.length} ${sessions.length > 1 ? 'sessões' : 'sessão'} · ${formatDuration(totalSecs)} de leitura ✦`;
  
  let html = '<div class="sessions-list" style="margin-top:0; background:transparent; padding:0;">';
  sessions.forEach(s => {
    const d = new Date(s.started_at);
    const hh = String(d.getHours()).padStart(2,'0');
    const mi = String(d.getMinutes()).padStart(2,'0');
    const timeOfDay = `${hh}:${mi}`;
    const duration = formatDuration(s.duration_seconds);
    const pagesStr = (s.page_end != null && s.page_start != null) 
      ? `${s.page_start}→${s.page_end}` : '';
    
    html += `<div class="session-item">
      <span class="sess-date">${timeOfDay}${pagesStr ? ` · ${pagesStr}` : ''}</span>
      <span class="sess-time">${duration}</span>
      <div class="sess-actions">
        <button class="sess-btn" onclick="editSessionFromDay(${s.id}, ${s.duration_seconds}, ${s.page_start ?? 'null'}, ${s.page_end ?? 'null'}, ${bookId}, '${dayKey}')" aria-label="Editar">✎</button>
        <button class="sess-btn del" onclick="deleteSessionFromDay(${s.id}, ${bookId}, '${dayKey}')" aria-label="Excluir">✕</button>
      </div>
    </div>`;
  });
  html += '</div>';
  document.getElementById("sessionsDayContainer").innerHTML = html;
  
  document.getElementById("sessionsDayModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSessionsDayModal() {
  document.getElementById("sessionsDayModal").classList.remove("open");
  // Não tira overflow do body se editModal estiver aberto
  if (!document.getElementById("editModal").classList.contains("open")) {
    document.body.style.overflow = "";
  }
}

// Wrapper para editSession a partir do modal do dia: depois de editar, refresca o modal do dia
async function editSessionFromDay(sessionId, durationSeconds, pageStart, pageEnd, bookId, dayKey) {
  // Guarda o contexto pra depois reabrir o modal do dia
  pendingDayRefresh = { bookId, dayKey };
  editSession(sessionId, durationSeconds, pageStart, pageEnd);
}

async function deleteSessionFromDay(sessionId, bookId, dayKey) {
  if (!confirm("Excluir essa sessão? O tempo dela não vai contar no histórico.")) return;
  
  try {
    setSyncStatus("syncing", "↻ excluindo");
    await supabaseFetch(`reading_sessions?id=eq.${sessionId}`, { method: 'DELETE' });
    setSyncStatus("synced", "✦ sincronizado");
    // Recarrega lista do livro e atualiza modal do dia
    await renderSessionsList(bookId);
    // Reabre o modal do dia (se ainda houver sessões nesse dia)
    const stillHas = (sessionsCache[bookId] || []).some(s => {
      const d = new Date(s.started_at);
      const k = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      return k === dayKey;
    });
    if (stillHas) {
      openSessionsDayModal(bookId, dayKey);
    } else {
      closeSessionsDayModal();
    }
  } catch(e) {
    console.error(e);
    setSyncStatus("error", "⚠ erro ao excluir");
  }
}

let pendingDayRefresh = null;

async function deleteSession(sessionId, bookId) {
  if (!confirm("Excluir essa sessão? O tempo dela não vai contar no histórico.")) return;
  
  try {
    setSyncStatus("syncing", "↻ excluindo");
    await supabaseFetch(`reading_sessions?id=eq.${sessionId}`, { method: 'DELETE' });
    setSyncStatus("synced", "✦ sincronizado");
    renderSessionsList(bookId);
  } catch(e) {
    console.error(e);
    setSyncStatus("error", "⚠ erro ao excluir");
  }
}

let editingSessionId = null;

function editSession(sessionId, durationSecs, pageStart, pageEnd) {
  editingSessionId = sessionId;
  // Preenche o modal de edição de sessão
  const totalMins = Math.floor(durationSecs / 60);
  const totalSecs = durationSecs % 60;
  document.getElementById("editSessionMinutes").value = totalMins;
  document.getElementById("editSessionSeconds").value = totalSecs;
  document.getElementById("editSessionPageStart").value = pageStart || '';
  document.getElementById("editSessionPageEnd").value = pageEnd || '';
  document.getElementById("editSessionModal").classList.add("open");
}

function closeEditSession() {
  document.getElementById("editSessionModal").classList.remove("open");
  editingSessionId = null;
  // Se cancelou edição que veio do modal do dia, reabre o modal do dia
  if (pendingDayRefresh) {
    const { bookId, dayKey } = pendingDayRefresh;
    pendingDayRefresh = null;
    openSessionsDayModal(bookId, dayKey);
  }
}

async function confirmEditSession() {
  if (!editingSessionId) return;
  const mins = parseInt(document.getElementById("editSessionMinutes").value) || 0;
  const secs = parseInt(document.getElementById("editSessionSeconds").value) || 0;
  const totalSecs = mins * 60 + secs;
  const pageStart = parseInt(document.getElementById("editSessionPageStart").value);
  const pageEnd = parseInt(document.getElementById("editSessionPageEnd").value);
  
  if (totalSecs <= 0) { alert("Tempo tem que ser maior que zero ✦"); return; }
  
  try {
    setSyncStatus("syncing", "↻ salvando");
    const body = {
      duration_seconds: totalSecs,
      page_start: isNaN(pageStart) ? null : pageStart,
      page_end: isNaN(pageEnd) ? null : pageEnd,
    };
    await supabaseFetch(`reading_sessions?id=eq.${editingSessionId}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
    setSyncStatus("synced", "✦ sincronizado");
    closeEditSession();
    if (editingBookId) await renderSessionsList(editingBookId);
    
    // Se a edição veio do modal do dia, reabre ele
    if (pendingDayRefresh) {
      const { bookId, dayKey } = pendingDayRefresh;
      pendingDayRefresh = null;
      openSessionsDayModal(bookId, dayKey);
    }
  } catch(e) {
    console.error(e);
    setSyncStatus("error", "⚠ erro ao salvar");
  }
}

function closeEditModal() {
  document.getElementById("editModal").classList.remove("open");
  document.getElementById("sessionsDayModal").classList.remove("open");
  document.body.style.overflow = "";
  editingBookId = null;
  selectedStars = 0;
}

function renderStars() {
  document.querySelectorAll("#starsInput .star").forEach(star => {
    const v = parseInt(star.dataset.value);
    star.classList.toggle("filled", v <= selectedStars);
  });
}

function renderFavoriteToggle() {
  const btn = document.getElementById("favToggle");
  const heart = document.getElementById("favHeart");
  const label = document.getElementById("favLabel");
  btn.classList.toggle("active", editingFavorite);
  heart.textContent = editingFavorite ? "♥" : "♡";
  label.textContent = editingFavorite ? "Favoritado" : "Favoritar";
}

function toggleFavorite() {
  // Desfavoritar é sempre permitido — limpa o ranking
  if (editingFavorite) {
    editingFavorite = false;
    editingFavRank = null;
    renderFavoriteToggle();
    return;
  }

  // Quer favoritar — vê quantos favoritos já existem (excluindo o livro atual,
  // pra caso ele esteja sendo reavaliado)
  const currentId = editingBookId;
  const otherFavs = state.books.filter(b => b.favorite && b.id !== currentId);

  if (otherFavs.length >= 10) {
    // Estante de favoritos cheia — abre modal pra escolher quem sai
    openSwapFavoriteModal();
    return;
  }

  // Tem espaço — favorita e atribui o próximo rank disponível
  const usedRanks = new Set(otherFavs.map(b => b.favRank).filter(r => typeof r === 'number'));
  let nextRank = 1;
  while (usedRanks.has(nextRank) && nextRank <= 10) nextRank++;
  editingFavorite = true;
  editingFavRank = nextRank <= 10 ? nextRank : (otherFavs.length + 1);
  renderFavoriteToggle();
}

// ============ SWAP DE FAVORITO (Top 10 cheio) ============
function openSwapFavoriteModal() {
  const list = document.getElementById("swapFavList");
  if (!list) return;
  // Pega os favoritos atuais (excluindo o livro sendo editado, por garantia),
  // ordenados pelo rank (1, 2, 3...) — sem rank vai pro fim
  const favs = state.books
    .filter(b => b.favorite && b.id !== editingBookId)
    .sort((a, b) => {
      const ra = (typeof a.favRank === 'number' && a.favRank > 0) ? a.favRank : 999;
      const rb = (typeof b.favRank === 'number' && b.favRank > 0) ? b.favRank : 999;
      if (ra !== rb) return ra - rb;
      return a.t.localeCompare(b.t, 'pt', { sensitivity: 'base' });
    });

  list.innerHTML = favs.map((b, i) => {
    const rank = (typeof b.favRank === 'number' && b.favRank > 0) ? b.favRank : (i + 1);
    const ck = coverKey(b.t, b.a);
    const coverUrl = state.covers && state.covers[ck] && state.covers[ck] !== "NONE" ? state.covers[ck] : '';
    const coverStyle = coverUrl ? `background-image:url('${coverUrl}')` : '';
    return `
      <div class="swap-fav-item" onclick="confirmSwapFavorite(${b.id})">
        <div class="swap-fav-rank">${rank}</div>
        <div class="swap-fav-cover" style="${coverStyle}"></div>
        <div class="swap-fav-info">
          <div class="swap-fav-title">${escapeHtml(b.t)}</div>
          <div class="swap-fav-author">${escapeHtml(b.a)}</div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById("swapFavModal").classList.add("open");
}

function closeSwapFavoriteModal() {
  document.getElementById("swapFavModal").classList.remove("open");
}

function confirmSwapFavorite(removedBookId) {
  const removed = getBookById(removedBookId);
  if (!removed) { closeSwapFavoriteModal(); return; }
  if (!confirm(`Tirar "${removed.t}" do Top 10 e colocar o livro novo no lugar?`)) return;

  const freedRank = (typeof removed.favRank === 'number' && removed.favRank > 0) ? removed.favRank : null;

  // Remove o antigo do Top 10
  removed.favorite = false;
  removed.favRank = null;
  saveState();
  pushBook(removed);

  // Atribui o rank liberado (ou o próximo disponível) ao livro sendo editado
  editingFavorite = true;
  if (freedRank) {
    editingFavRank = freedRank;
  } else {
    const otherFavs = state.books.filter(b => b.favorite && b.id !== editingBookId);
    const used = new Set(otherFavs.map(b => b.favRank).filter(r => typeof r === 'number'));
    let nextRank = 1;
    while (used.has(nextRank) && nextRank <= 10) nextRank++;
    editingFavRank = nextRank;
  }

  renderFavoriteToggle();
  closeSwapFavoriteModal();
  renderAll();
}

document.querySelectorAll("#starsInput .star").forEach(star => {
  star.addEventListener("click", () => {
    const v = parseInt(star.dataset.value);
    selectedStars = (selectedStars === v) ? 0 : v;
    renderStars();
  });
});

// Aplica campos comuns do formulário de edição
function applyCommonEditFields(book) {
  const previousCover = getBookCover(book);

  const newTitle = document.getElementById("editTitle").value.trim();
  const newAuthor = document.getElementById("editAuthor").value.trim();
  const newGenre = document.getElementById("editGenre").value;
  const pagesCurrent = parseInt(document.getElementById("editPagesCurrent").value);
  const pagesTotal = parseInt(document.getElementById("editPagesTotal").value);
  
  if (newTitle) book.t = newTitle;
  if (newAuthor) book.a = newAuthor;
  if (newGenre && GENRES[newGenre]) book.g = newGenre;

  // Se título/autor mudarem, a capa continua presa ao livro, não ao texto antigo.
  if (previousCover) setBookCover(book, previousCover);
  book.rating = selectedStars || null;
  book.favorite = editingFavorite;
  // Sincroniza ranking: se está favoritado, salva o rank; se não, limpa
  if (editingFavorite) {
    book.favRank = (typeof editingFavRank === 'number' && editingFavRank > 0) ? editingFavRank : null;
  } else {
    book.favRank = null;
  }
  if (!isNaN(pagesCurrent)) book.pagesCurrent = pagesCurrent;
  if (!isNaN(pagesTotal)) book.pagesTotal = pagesTotal;
}

function saveEditOnly() {
  if (!editingBookId) return;
  const book = getBookById(editingBookId);
  const startDate = document.getElementById("editStartDate").value;
  const endDate = document.getElementById("editEndDate").value;
  
  applyCommonEditFields(book);
  if (startDate) book.startDate = startDate;
  if (endDate && book.status !== "reading") book.endDate = endDate;
  saveState();
  pushBook(book);
  
  closeEditModal();
  if (currentGenre) { renderWheel(currentGenre); renderBookList(currentGenre); updateModalSub(); }
  renderAll();
}

function confirmFinishReading() {
  if (!editingBookId) return;
  const book = getBookById(editingBookId);
  const startDate = document.getElementById("editStartDate").value;
  const endDate = document.getElementById("editEndDate").value;
  if (!endDate) { alert("Escolhe a data de término ✦"); return; }
  
  applyCommonEditFields(book);
  book.status = "lido";
  if (startDate) book.startDate = startDate;
  book.endDate = endDate;
  if (book.pagesTotal && (!book.pagesCurrent || book.pagesCurrent < book.pagesTotal)) {
    book.pagesCurrent = book.pagesTotal;
  }
  saveState();
  pushBook(book);
  
  closeEditModal();
  if (currentGenre) { renderWheel(currentGenre); renderBookList(currentGenre); updateModalSub(); }
  renderAll();
}

function confirmAbandon() {
  if (!editingBookId) return;
  if (!confirm("Marcar como abandonado? Sem julgamentos ✦")) return;
  const book = getBookById(editingBookId);
  const endDate = document.getElementById("editEndDate").value;
  
  applyCommonEditFields(book);
  book.status = "abandoned";
  if (endDate) book.endDate = endDate;
  saveState();
  pushBook(book);
  
  closeEditModal();
  if (currentGenre) { renderWheel(currentGenre); renderBookList(currentGenre); updateModalSub(); }
  renderAll();
}

// Exclui de vez o livro a partir do modal de edição. Usado no lugar de
// "Abandonar livro" quando o livro já está com status "lido" — não faz
// sentido abandonar algo que já foi terminado.
function confirmDeleteFromEdit() {
  if (!editingBookId) return;
  const book = getBookById(editingBookId);
  if (!book) return;
  if (!confirm(`Excluir "${book.t}" da estante? Essa ação não tem volta.`)) return;

  const idToDelete = editingBookId;
  state.books = state.books.filter(b => b.id !== idToDelete);
  saveState();
  deleteBookFromDb(idToDelete);

  closeEditModal();
  if (currentGenre) { renderWheel(currentGenre); renderBookList(currentGenre); updateModalSub(); }
  renderAll();
}

// ============ BOOK LIST NO MODAL DE GÊNERO ============
function renderBookList(genreKey) {
  const container = document.getElementById("bookList");
  let books = genreKey === null ? state.books : state.books.filter(b => b.g === genreKey);

  // Respeita o filtro da aba ativa:
  // - "pendente" (rotulada "Todos"): mostra pendente + lendo (tudo que não terminou)
  // - "reading": só os que estão sendo lidos
  // - "lido": só os terminados
  // - "favoritos": só os favoritos
  // - "abandoned": só os abandonados
  if (state.filter === "pendente") {
    books = books.filter(b => b.status === "pendente" || b.status === "reading");
  } else if (state.filter === "favoritos") {
    books = books.filter(b => b.favorite);
  } else if (state.filter && state.filter !== "todos") {
    books = books.filter(b => b.status === state.filter);
  }

  if (books.length === 0) { container.innerHTML = ""; return; }

  const order = { pendente: 0, reading: 1, lido: 2, abandoned: 3 };
  const sorted = [...books].sort((a, b) => (order[a.status] ?? 9) - (order[b.status] ?? 9));

  let html = `<div class="book-list-title">do gênero · ${books.length}</div>`;
  sorted.forEach(book => { html += renderBookItemHTML(book, false); });
  container.innerHTML = html;
}

function deleteBook(id) {
  const book = getBookById(id);
  if (!book) return;
  if (!confirm(`Remover "${book.t}" da estante? Essa ação não tem volta.`)) return;
  state.books = state.books.filter(b => b.id !== id);
  saveState();
  deleteBookFromDb(id);
  
  if (currentGenre) { renderWheel(currentGenre); renderBookList(currentGenre); updateModalSub(); }
  renderAll();
}

// ============ HERO TEXT POR ABA ============
const HERO_TEXTS = {
  todos: {
    html: `todos os seus <em id="heroWord">livros</em><br>num só lugar.`,
    sub: "A bagunça organizada de quem lê muito.",
  },
  reading: {
    html: `essa é a sua <em id="heroWord">leitura</em> atual.`,
    sub: "Página por página.",
  },
  pendente: {
    html: `qual vai ser sua<br><em id="heroWord">próxima</em> leitura?`,
    sub: "Gire a roda e deixa a sorte escolher por você.",
  },
  favoritos: {
    html: `os livros que<br><em id="heroWord">marcaram</em> você.`,
    sub: "Esses ficam no coração pra sempre.",
  },
  lido: {
    html: `olha tudo que<br><em id="heroWord">você já</em> leu!`,
    sub: "Cada livro, uma versão diferente de você.",
  },
  abandoned: {
    html: `nem todo livro<br><em id="heroWord">merece</em> seu tempo.`,
    sub: "Largar também é uma escolha corajosa.",
  },
};

function updateHero(filter) {
  const h = HERO_TEXTS[filter] || HERO_TEXTS.todos;
  const titleEl = document.getElementById("heroTitle");
  const subEl   = document.getElementById("heroSub");
  if (!titleEl) return;

  titleEl.innerHTML = h.html;
  if (subEl) subEl.textContent = h.sub;

  // re-aplica gênero ao heroWord (caso necessário)
  const newWord = document.getElementById("heroWord");
  if (newWord && currentUser && currentUser.gender === "masculino") {
    newWord.classList.add("gender-masc");
  }
}

// ============ FILTERS ============
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    state.filter = tab.dataset.filter;
    state.selectedYear = null; // reset filtro de ano ao trocar de aba
    updateHero(state.filter);
    saveState();
    renderAll();
  });
});

window.addEventListener("load", () => {
  // Sempre abre na aba Lendo, independente do que estava salvo
  state.filter = "reading";
  updateHero("reading");
  saveState();
  document.querySelectorAll(".tab").forEach(t => {
    t.classList.toggle("active", t.dataset.filter === "reading");
  });
  // NÃO chama renderAll() aqui — o sync vai renderizar depois de buscar o banco.
  // Chamar renderAll() aqui causava o flash de 1 segundo mostrando dados locais desatualizados.
});

// ============ ADD BOOK ============
function openAddBook() {
  closeMenu();
  const select = document.getElementById("newGenre");
  select.innerHTML = Object.entries(GENRES).map(([k, g]) => 
    `<option value="${k}"${currentGenre === k ? ' selected' : ''}>${g.emoji} ${g.name}</option>`
  ).join("");
  document.getElementById("newTitle").value = "";
  document.getElementById("newAuthor").value = "";
  document.getElementById("newPages").value = "";
  const amazonUrlEl = document.getElementById("amazonUrl");
  if (amazonUrlEl) amazonUrlEl.value = "";
  const amazonStatusEl = document.getElementById("amazonStatus");
  if (amazonStatusEl) { amazonStatusEl.textContent = ""; amazonStatusEl.className = "amazon-status"; }
  const autoEl = document.getElementById("titleAutocomplete");
  if (autoEl) { autoEl.innerHTML = ""; autoEl.classList.remove("open"); }

  setupAutocomplete();
  
  document.getElementById("addModal").classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => document.getElementById("newTitle").focus(), 300);
}

function closeAddBook() {
  document.getElementById("addModal").classList.remove("open");
  document.body.style.overflow = "";
  // Limpa campo Amazon ao fechar
  const amzUrl = document.getElementById("amazonUrl");
  if (amzUrl) amzUrl.value = "";
  const amzStatus = document.getElementById("amazonStatus");
  if (amzStatus) { amzStatus.textContent = ""; amzStatus.className = "amazon-status"; }
}


// ============ BUSCA VIA LINK DA AMAZON ============
// Resolve link curto da Amazon (a.co/d/XXX, amzn.to/XXX) para URL completa.
// O proxy CORS segue o redirect 301/302 e devolve o HTML da página final;
// extraímos o ASIN do HTML e/ou da URL canônica que aparece nele.
async function resolveAmazonShortLink(shortUrl) {
  // Garante https://
  if (!/^https?:\/\//i.test(shortUrl)) shortUrl = 'https://' + shortUrl;

  let html = '';
  for (const makeProxyUrl of CORS_PROXIES) {
    try {
      const resp = await fetchWithTimeout(makeProxyUrl(shortUrl), {}, 10000);
      if (resp.ok) {
        html = await resp.text();
        if (html && html.length > 500) break;
      }
    } catch(e) { /* tenta próximo proxy */ }
  }
  if (!html) return { url: null, asin: null };

  // 1. Tenta extrair URL canônica (presente em <link rel="canonical">, og:url, etc.)
  const canonicalPatterns = [
    /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i,
    /<meta\s+property=["']og:url["']\s+content=["']([^"']+)["']/i,
    /<meta\s+name=["']url["']\s+content=["']([^"']+)["']/i,
  ];
  for (const pat of canonicalPatterns) {
    const m = html.match(pat);
    if (m && m[1] && /amazon\./i.test(m[1])) {
      return { url: m[1], asin: extractAsinFromAny(m[1]) || extractAsinFromAny(html) };
    }
  }

  // 2. Tenta extrair só o ASIN diretamente do HTML como fallback
  const asin = extractAsinFromAny(html);
  if (asin) return { url: null, asin };

  return { url: null, asin: null };
}

// Procura ASIN em qualquer string (URL ou HTML)
function extractAsinFromAny(text) {
  if (!text) return null;
  // /dp/XXXXXXXXXX, /gp/product/XXXXXXXXXX, ASIN=XXXXXXXXXX, "asin":"XXXXXXXXXX"
  const patterns = [
    /(?:\/dp\/|\/gp\/product\/|\/product\/)([A-Z0-9]{10})/i,
    /[?&]asin=([A-Z0-9]{10})/i,
    /["']asin["']\s*:\s*["']([A-Z0-9]{10})["']/i,
    /data-asin=["']([A-Z0-9]{10})["']/i,
  ];
  for (const p of patterns) {
    const m = text.match(p);
    if (m) return m[1];
  }
  return null;
}

// Extrai ASIN (pode ser ISBN-10), título e autor da URL da Amazon
function parseAmazonUrl(url) {
  // ASIN: /dp/XXXXXXXXXX ou /gp/product/XXXXXXXXXX
  const asinMatch = url.match(/(?:\/dp\/|\/gp\/product\/|\/product\/)([A-Z0-9]{10})/i);
  const asin = asinMatch ? asinMatch[1] : null;

  // Slug do título: aceita 3 formatos de URL da Amazon:
  //   .../titulo-do-livro/dp/ASIN/...    (formato clássico)
  //   .../dp/ASIN/...                    (sem slug — não dá pra extrair nada)
  //   .../titulo-do-livro-Autor-Nome     (sem /dp/, formato de busca)
  let rawSlug = "";
  let m;
  if ((m = url.match(/amazon\.com(?:\.br)?\/([^\/?#]+)\/dp\//i))) {
    rawSlug = m[1];
  } else if ((m = url.match(/amazon\.com(?:\.br)?\/([^\/?#]+?)(?:[\/?#]|$)/i))) {
    // Sem /dp/ — pega o primeiro segmento que tenha pelo menos 2 hífens (slug de título)
    if (m[1] && m[1].split('-').length >= 3) rawSlug = m[1];
  }

  let titleFromSlug = "";
  let authorFromSlug = "";

  if (rawSlug) {
    // 1. Decodifica URL-encoding (%C3%A3 → ã, etc.)
    let decoded = rawSlug;
    try { decoded = decodeURIComponent(rawSlug); } catch(e) {
      try { decoded = decodeURIComponent(rawSlug.replace(/%(?![0-9A-Fa-f]{2})/g, '%25')); } catch(e2) {}
    }

    // 2. Remove sufixos comuns que vêm depois do nome do autor:
    //    "ebook-kindle", "edicao-portugues", "vol-1", numeros tipo "ed-2"
    //    Esses não fazem parte nem do título nem do autor.
    let cleaned = decoded
      .replace(/-ebook(-kindle)?$/i, '')
      .replace(/-(?:edi[cç][aã]o|edition)-(?:portugues|portuguesa|portugu[eê]s|brasileira)$/i, '')
      .replace(/-(?:portugu[eê]se?|portugu[eê]sa)$/i, '')
      .replace(/-vol(?:ume)?-?\d*$/i, '')
      .replace(/-pdf$/i, '');

    // 3. Substitui hífens por espaços
    let words = cleaned.split('-').map(w => w.trim()).filter(Boolean);

    // 4. Separa título e autor: a heurística é que o autor são as últimas 2-3
    //    palavras que começam com maiúscula no original (ou com inicial maiúscula
    //    quando capitalizamos). Como os slugs da Amazon são tudo lowercase,
    //    isso não funciona — então usamos uma heurística de comprimento:
    //    autor = últimas 2 palavras se forem >= 3 letras cada. Mas só fazemos
    //    isso se houver pelo menos 4 palavras totais (título + autor de 2).
    if (words.length >= 4) {
      const last = words[words.length - 1];
      const beforeLast = words[words.length - 2];
      // Pega 2 últimas como autor se ambas tiverem cara de nome próprio
      if (last.length >= 2 && beforeLast.length >= 2 && /^[a-zãéíóúçâêôü]+$/i.test(last) && /^[a-zãéíóúçâêôü]+$/i.test(beforeLast)) {
        authorFromSlug = capitalize(beforeLast) + ' ' + capitalize(last);
        words = words.slice(0, -2);
      }
    }

    // 5. Capitaliza o título (cada palavra com inicial maiúscula)
    titleFromSlug = words.map(capitalize).join(' ').trim();

    // 6. Sanity check: se o título acabou ficando vazio ou ridiculamente longo
    //    (>120 chars sem ter sido limpo direito), descarta
    if (titleFromSlug.length > 150) titleFromSlug = "";
  }

  return { asin, titleFromSlug, authorFromSlug };
}

function capitalize(word) {
  if (!word) return word;
  // Preposições/artigos pequenos ficam em minúscula
  const small = ['de', 'do', 'da', 'dos', 'das', 'e', 'a', 'o', 'as', 'os', 'no', 'na', 'nos', 'nas', 'em', 'um', 'uma'];
  if (small.includes(word.toLowerCase())) return word.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Normaliza string para comparação: minúsculas, sem acentos, sem pontuação
function normalizeForCompare(s) {
  if (!s) return '';
  return s.toString().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // tira acentos
    .replace(/[^a-z0-9\s]/g, ' ')                     // tira pontuação
    .replace(/\s+/g, ' ').trim();
}

// Verifica se o título da API "bate" com o que extraímos da URL.
// Usado pra descartar resultados de ISBN bagunçados onde a API retorna outro livro.
// Estratégia: compara conjuntos de palavras significativas (≥3 letras, sem stopwords)
// e exige overlap de pelo menos 1 palavra significativa OU match no autor.
function titlesMatch(apiTitle, urlTitle, apiAuthors, urlAuthor) {
  if (!urlTitle) return true; // sem referência, aceita
  if (!apiTitle) return false;

  const stop = new Set([
    'de', 'do', 'da', 'dos', 'das', 'e', 'a', 'o', 'as', 'os', 'no', 'na',
    'nos', 'nas', 'em', 'um', 'uma', 'para', 'por', 'com', 'sem', 'que',
    'the', 'and', 'of', 'to', 'in', 'on', 'at', 'for', 'with', 'by',
  ]);
  const wordsOf = s => new Set(
    normalizeForCompare(s).split(' ').filter(w => w.length >= 3 && !stop.has(w))
  );

  const apiWords = wordsOf(apiTitle);
  const urlWords = wordsOf(urlTitle);

  // Se o slug da URL é muito curto (1-2 palavras significativas), usa só 1 word match
  // Senão, exige pelo menos uma palavra em comum.
  let titleOverlap = 0;
  urlWords.forEach(w => { if (apiWords.has(w)) titleOverlap++; });

  if (titleOverlap >= 1) return true;

  // Fallback: se autor bate (mesmo sobrenome), aceita mesmo com título diferente
  // (pode ser edição diferente do mesmo livro, ou variação de título)
  if (urlAuthor && apiAuthors?.length) {
    const urlAuthorWords = wordsOf(urlAuthor);
    const apiAuthorWords = wordsOf(apiAuthors.join(' '));
    let authorOverlap = 0;
    urlAuthorWords.forEach(w => { if (apiAuthorWords.has(w)) authorOverlap++; });
    if (authorOverlap >= 1) return true;
  }

  return false;
}

async function fetchFromAmazon() {
  const urlInput = document.getElementById("amazonUrl");
  const statusEl = document.getElementById("amazonStatus");
  const btn = document.getElementById("amazonFetchBtn");
  let url = urlInput.value.trim();

  if (!url) {
    statusEl.textContent = "Cole um link da Amazon primeiro ✦";
    statusEl.className = "amazon-status err";
    return;
  }

  // Aceita link da Amazon ou shortener do app (a.co, amzn.to, amzn.eu, amzn.com)
  const isShortLink = /^(https?:\/\/)?(www\.)?(a\.co|amzn\.to|amzn\.eu|amzn\.com)\//i.test(url);
  const isFullAmazon = url.includes("amazon.");

  if (!isShortLink && !isFullAmazon) {
    statusEl.textContent = "Não parece um link da Amazon ✦";
    statusEl.className = "amazon-status err";
    return;
  }

  btn.disabled = true;
  statusEl.textContent = "Buscando dados...";
  statusEl.className = "amazon-status";

  // Se for shortener do app, resolve o redirect primeiro pra obter URL completa + ASIN
  if (isShortLink) {
    statusEl.textContent = "Resolvendo link curto...";
    const resolved = await resolveAmazonShortLink(url);
    if (resolved.url) {
      url = resolved.url;
      // Atualiza o input pra refletir a URL completa (visual feedback)
      urlInput.value = url;
    } else if (resolved.asin) {
      // Conseguiu o ASIN mas não a URL completa — monta uma URL canônica
      url = `https://www.amazon.com.br/dp/${resolved.asin}`;
      urlInput.value = url;
    } else {
      statusEl.textContent = "Não consegui resolver esse link curto. Cola o link completo ✦";
      statusEl.className = "amazon-status err";
      btn.disabled = false;
      return;
    }
  }

  const { asin, titleFromSlug, authorFromSlug } = parseAmazonUrl(url);

  if (!asin && !titleFromSlug) {
    statusEl.textContent = "Não consegui identificar o livro nessa URL ✦";
    statusEl.className = "amazon-status err";
    btn.disabled = false;
    return;
  }

  statusEl.textContent = "Buscando dados...";

  let best = null; // { title, authors, pageCount, imageLinks, categories }

  // Busca em paralelo: ISBN via Google Books + Open Library + slug via Google Books
  const promises = [];

  // 1. Google Books por ISBN (só se ASIN parece ISBN-10: começa com dígito ou 'B' não)
  if (asin && !/^B/i.test(asin)) {
    promises.push(
      apiFetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${asin}&maxResults=3`)
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          const item = (data?.items || [])[0];
          if (item?.volumeInfo?.title) return { ...item.volumeInfo, _source: 'isbn-google' };
          return null;
        }).catch(() => null)
    );

    // 2. Open Library por ISBN
    promises.push(
      apiFetch(`https://openlibrary.org/isbn/${asin}.json`)
        .then(r => r.ok ? r.json() : null)
        .then(async data => {
          if (!data?.title) return null;
          let authorName = "";
          if (data.authors?.[0]?.key) {
            try {
              const ar = await apiFetch(`https://openlibrary.org${data.authors[0].key}.json`);
              const ad = ar.ok ? await ar.json() : {};
              authorName = ad.name || ad.personal_name || "";
            } catch(e) {}
          }
          return {
            title: data.title,
            authors: authorName ? [authorName] : [],
            pageCount: data.number_of_pages || null,
            imageLinks: data.covers?.[0]
              ? { thumbnail: `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg` }
              : null,
            categories: data.subjects || [],
            _source: 'isbn-ol',
          };
        }).catch(() => null)
    );
  }

  // 3. Google Books pelo slug do título (sempre, se disponível)
  if (titleFromSlug) {
    const q = encodeURIComponent(titleFromSlug);
    promises.push(
      apiFetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=5&langRestrict=pt`)
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          const item = (data?.items || [])[0];
          if (item?.volumeInfo?.title) return { ...item.volumeInfo, _source: 'slug-google-pt' };
          return null;
        }).catch(() => null)
    );
    promises.push(
      apiFetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=5`)
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          const item = (data?.items || [])[0];
          if (item?.volumeInfo?.title) return { ...item.volumeInfo, _source: 'slug-google' };
          return null;
        }).catch(() => null)
    );
  }

  // 4. Open Library pelo slug do título
  if (titleFromSlug) {
    const q = encodeURIComponent(titleFromSlug);
    promises.push(
      apiFetch(`https://openlibrary.org/search.json?q=${q}&limit=3&fields=title,author_name,number_of_pages_median,cover_i,subject`)
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          const doc = (data?.docs || [])[0];
          if (!doc?.title) return null;
          return {
            title: doc.title,
            authors: doc.author_name || [],
            pageCount: doc.number_of_pages_median || null,
            imageLinks: doc.cover_i
              ? { thumbnail: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg` }
              : null,
            categories: doc.subject || [],
            _source: 'slug-ol',
          };
        }).catch(() => null)
    );
  }

  // Adiciona scraping direto da página da Amazon — pega páginas/gênero quando as APIs falham
  promises.push(scrapeAmazonPage(url).catch(() => null));

  const results = await Promise.all(promises);
  const amazonData = results[results.length - 1]; // último é o scraping

  // VALIDAÇÃO CRUZADA: se temos um título extraído do slug da URL, ele é a
  // "fonte de verdade" — APIs (especialmente Google Books / Open Library)
  // ocasionalmente retornam livros COMPLETAMENTE diferentes pra um ISBN
  // (registros bagunçados). Se o título da API tiver 0 palavras em comum
  // com o slug da URL, esse resultado é descartado.
  const filteredResults = results.map(r => {
    if (!r) return null;
    if (!titleFromSlug) return r; // sem slug pra comparar, aceita tudo
    if (titlesMatch(r.title, titleFromSlug, r.authors, authorFromSlug)) return r;
    // Resultado não bate com a URL — descarta
    console.warn('Resultado da API descartado por não bater com a URL:',
      r._source, '→ "' + r.title + '" (autor: ' + (r.authors?.[0] || '') + ')',
      'vs URL "' + titleFromSlug + '" (autor: ' + authorFromSlug + ')');
    return null;
  });

  // Escolhe o melhor resultado: prioridade ISBN > slug PT > slug geral
  const priority = ['isbn-google', 'isbn-ol', 'slug-google-pt', 'slug-google', 'slug-ol'];
  for (const src of priority) {
    const found = filteredResults.find(r => r?._source === src);
    if (found) { best = found; break; }
  }

  // Se nenhuma API passou na validação, mas temos slug da URL, fabrica um
  // resultado a partir do slug (com scraping da Amazon como complemento)
  if (!best && titleFromSlug) {
    best = {
      title: titleFromSlug,
      authors: authorFromSlug ? [authorFromSlug] : [],
      pageCount: null,
      imageLinks: null,
      categories: [],
      _source: 'url-slug',
    };
  }

  // Mescla dados do scraping da Amazon — preenche lacunas que as APIs não retornaram
  // (mas só se o scraping também bate com o slug — mesma validação cruzada)
  const amazonDataValid = (amazonData && (!titleFromSlug || titlesMatch(amazonData.title, titleFromSlug, amazonData.authors, authorFromSlug))) ? amazonData : null;
  if (amazonDataValid) {
    if (!best) {
      best = { ...amazonDataValid, _source: 'amazon-scrape' };
    } else {
      // Páginas: scraping da Amazon ganha (mais confiável pra edição PT)
      if (amazonDataValid.pageCount) best.pageCount = amazonDataValid.pageCount;
      // Gênero: usa scraping se as APIs não tiverem
      if (amazonDataValid.categories?.length && !best.categories?.length) {
        best.categories = amazonDataValid.categories;
      }
      // Fallback de título/autor caso APIs venham vazias
      if (!best.title && amazonDataValid.title) best.title = amazonDataValid.title;
      if ((!best.authors || !best.authors.length) && amazonDataValid.authors?.length) {
        best.authors = amazonDataValid.authors;
      }
    }
  }

  if (best) {
    applyAmazonResult(best, asin);
    const isPrecise = best._source.startsWith('isbn');
    const isFromSlug = best._source === 'url-slug';
    if (isPrecise) {
      statusEl.textContent = "✦ Dados preenchidos com precisão!";
    } else if (isFromSlug) {
      statusEl.textContent = "✦ Dados preenchidos pelo link — confere se está certo!";
    } else {
      statusEl.textContent = "✦ Dados preenchidos! Confere se o título bate com o link.";
    }
    statusEl.className = "amazon-status ok";
  } else {
    // Último recurso: preenche título e (se conseguiu) autor a partir do slug
    if (titleFromSlug) {
      setFieldNoAutocomplete("newTitle", titleFromSlug);
      if (authorFromSlug) {
        document.getElementById("newAuthor").value = authorFromSlug;
        statusEl.textContent = "Preenchemos pelo link — confere se está certo ✦";
      } else {
        statusEl.textContent = "Preenchemos o título pelo link — complete o autor ✦";
      }
      statusEl.className = "amazon-status ok";
    } else {
      statusEl.textContent = "Não encontrei dados. Preenche manualmente ✦";
      statusEl.className = "amazon-status err";
    }
  }

  btn.disabled = false;
}

// Seta valor num input de título sem disparar o autocomplete (que ficaria em loop
// se o título for um slug bruto da Amazon, sem match em nenhum índice de busca)
function setFieldNoAutocomplete(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.value = value;
  // Cancela qualquer busca pendente de autocomplete
  if (typeof autocompleteDebounce !== 'undefined' && autocompleteDebounce) {
    clearTimeout(autocompleteDebounce);
    autocompleteDebounce = null;
  }
  if (typeof autocompleteAbort !== 'undefined' && autocompleteAbort) {
    try { autocompleteAbort.abort(); } catch(e) {}
    autocompleteAbort = null;
  }
  const results = document.getElementById("titleAutocomplete");
  if (results) { results.innerHTML = ""; results.classList.remove("open"); }
}

// Faz scraping da página da Amazon via proxy CORS pra extrair páginas/gênero
async function scrapeAmazonPage(url) {
  let html = '';
  for (const makeProxyUrl of CORS_PROXIES) {
    try {
      const resp = await fetchWithTimeout(makeProxyUrl(url), {}, 9000);
      if (resp.ok) {
        html = await resp.text();
        if (html && html.length > 1000) break;
      }
    } catch(e) { /* tenta próximo */ }
  }
  if (!html) return null;

  const result = { _source: 'amazon-scrape' };

  // Título — meta og:title é confiável
  const titleMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i)
    || html.match(/<meta\s+name=["']title["']\s+content=["']([^"']+)["']/i);
  if (titleMatch) {
    let t = titleMatch[1].replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
    // Limpa sufixos comuns: " : Amazon.com.br: ..." ou " | Amazon..."
    t = t.split(/\s*[:|]\s*Amazon/i)[0].trim();
    result.title = t;
  }

  // Páginas — começa pelos padrões MAIS específicos pra evitar falsos positivos
  // (ex: "200 páginas" em descrição/review). A Amazon BR usa "Número de páginas",
  // a US "Print length"/"Pages", e o JSON-LD usa "numberOfPages".
  let pageCount = null;

  // 1. JSON-LD estruturado — fonte mais confiável quando presente
  const jsonLdMatch = html.match(/"numberOfPages"\s*:\s*"?(\d{2,4})"?/i);
  if (jsonLdMatch) {
    const n = parseInt(jsonLdMatch[1]);
    if (n >= 20 && n <= 5000) pageCount = n;
  }

  // 2. Detalhes do produto: "Número de páginas: 424" ou "Número de páginas — 424"
  //    Procura num bloco amplo após o label, com qualquer tag/whitespace/pontuação
  if (!pageCount) {
    const labelPatterns = [
      // "Número de páginas" seguido de até 200 chars de HTML, depois o número
      /N[úu]mero de p[áa]ginas[\s\S]{0,200}?(\d{2,4})\s*(?:p[áa]ginas)?/i,
      /Print length[\s\S]{0,200}?(\d{2,4})\s*pages/i,
      /Páginas[\s\S]{0,80}?:\s*(\d{2,4})/i,
      // A pattern "424 páginas" próximo de "Detalhes" ou "Idioma" (estrutura ficha)
      /(?:Detalhes do produto|Idioma)[\s\S]{0,800}?(\d{2,4})\s*p[áa]ginas/i,
    ];
    for (const pat of labelPatterns) {
      const m = html.match(pat);
      if (m) {
        const n = parseInt(m[1]);
        if (n >= 20 && n <= 5000) {
          pageCount = n;
          break;
        }
      }
    }
  }

  // 3. Último recurso: "X páginas" qualquer (mais frouxo, pode ter falso positivo)
  if (!pageCount) {
    const looseMatch = html.match(/\b(\d{2,4})\s*p[áa]ginas\b/i);
    if (looseMatch) {
      const n = parseInt(looseMatch[1]);
      if (n >= 20 && n <= 5000) pageCount = n;
    }
  }

  if (pageCount) result.pageCount = pageCount;

  // Categorias — breadcrumb da Amazon ("zg_hrsr" ou "wayfinding-breadcrumbs")
  // Pega categorias dos breadcrumbs e da seção "Best Sellers Rank"
  const categories = [];
  const breadcrumbMatches = html.match(/wayfinding-breadcrumbs[\s\S]{0,3000}?<\/ul>/i);
  if (breadcrumbMatches) {
    const links = breadcrumbMatches[0].match(/<a[^>]*>([^<]+)<\/a>/gi) || [];
    links.forEach(a => {
      const text = a.replace(/<[^>]+>/g, '').trim();
      if (text && text.length < 60) categories.push(text);
    });
  }
  // Best sellers rank tem categorias mais específicas
  const bsrMatch = html.match(/Best Sellers Rank[\s\S]{0,2500}?<\/(?:tr|li|div)>/i)
    || html.match(/Mais Vendidos[\s\S]{0,2500}?<\/(?:tr|li|div)>/i)
    || html.match(/zg_hrsr[\s\S]{0,2500}?<\/ul>/i);
  if (bsrMatch) {
    const links = bsrMatch[0].match(/<a[^>]*>([^<]+)<\/a>/gi) || [];
    links.forEach(a => {
      const text = a.replace(/<[^>]+>/g, '').trim();
      if (text && text.length < 80) categories.push(text);
    });
  }
  if (categories.length) result.categories = categories;

  // Autor — link com "byline"
  const authorMatch = html.match(/<a[^>]*class="[^"]*contributorNameID[^"]*"[^>]*>([^<]+)<\/a>/i)
    || html.match(/<a[^>]*data-asin[^>]*"author"[^>]*>([^<]+)<\/a>/i)
    || html.match(/"author"\s*:\s*\[?\s*{?\s*"name"\s*:\s*"([^"]+)"/i);
  if (authorMatch) {
    result.authors = [authorMatch[1].trim()];
  }

  // Capa — imagem em alta qualidade
  const imgMatch = html.match(/"hiRes"\s*:\s*"([^"]+)"/i)
    || html.match(/"large"\s*:\s*"([^"]+)"/i)
    || html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
  if (imgMatch) {
    result.imageLinks = { thumbnail: imgMatch[1].replace(/\\u002F/g, '/').replace(/\\\//g, '/') };
  }

  // Só retorna se conseguiu extrair pelo menos algo útil
  if (result.pageCount || result.categories?.length || result.title) {
    return result;
  }
  return null;
}

function applyAmazonResult(info, asin) {
  const titleEl = document.getElementById("newTitle");
  const authorEl = document.getElementById("newAuthor");
  const pagesEl = document.getElementById("newPages");

  if (info.title) {
    setFieldNoAutocomplete("newTitle", info.title);
  }
  const authors = info.authors || [];
  if (authors.length > 0) authorEl.value = authors[0];
  // Páginas: valida intervalo plausível para um livro (>= 20, <= 5000)
  // Evita salvar valores ruins (1, 0, 9999) que algumas APIs/scrapers retornam
  if (info.pageCount && info.pageCount >= 20 && info.pageCount <= 5000) {
    pagesEl.value = info.pageCount;
  }

  guessGenreFromSubjects(info.categories || []);

  // Salva a capa
  const finalTitle = titleEl.value.trim();
  const finalAuthor = authorEl.value.trim();
  if (finalTitle && finalAuthor) {
    if (!state.covers) state.covers = {};
    const key = coverKey(finalTitle, finalAuthor);
    // Prioridade: capa da API > capa Amazon pelo ASIN
    const apiCover = info.imageLinks
      ? (info.imageLinks.extraLarge || info.imageLinks.large || info.imageLinks.medium || info.imageLinks.thumbnail || '')
          .replace(/^http:/, 'https:').replace(/&edge=curl/, '').replace(/&zoom=\d+/, '')
      : '';
    if (apiCover) {
      state.covers[key] = apiCover;
    } else if (asin) {
      state.covers[key] = `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`;
    }
    saveState();
  }

  // Fecha autocomplete se aberto
  const autocompleteEl = document.getElementById("titleAutocomplete");
  if (autocompleteEl) { autocompleteEl.innerHTML = ""; autocompleteEl.classList.remove("open"); }
}

async function addBook() {
  const title = document.getElementById("newTitle").value.trim();
  const author = document.getElementById("newAuthor").value.trim();
  const genre = document.getElementById("newGenre").value;
  const pagesInput = parseInt(document.getElementById("newPages").value);
  
  if (!title) { alert("Coloca o título ✦"); return; }
  if (!author) { alert("Coloca o autor ✦"); return; }
  
  if (!state.nextId) state.nextId = Math.max(0, ...state.books.map(b => b.id || 0)) + 1;
  
  const newBook = {
    id: state.nextId++,
    t: title, a: author, g: genre,
    status: "pendente", favorite: false,
    pagesCurrent: 0,
  };

  if (!isNaN(pagesInput) && pagesInput > 0) {
    newBook.pagesTotal = pagesInput;
  }
  
  state.books.push(newBook);
  saveState();
  pushNewBook(newBook);
  
  closeAddBook();
  renderAll();
  if (currentGenre === genre) { renderWheel(genre); renderBookList(genre); updateModalSub(); }
  
  // Se o usuário não deu páginas, busca automático em background
  if (!newBook.pagesTotal) {
    fetchPages(title, author).then(pages => {
      if (pages) {
        newBook.pagesTotal = pages;
        saveState();
        pushBook(newBook);
        renderAll();
      }
    });
  }
}

// ============ AUTOCOMPLETE DE TÍTULO ============
let autocompleteDebounce = null;
let autocompleteAbort = null;
let autocompleteCache = {};

function setupAutocomplete() {
  const input = document.getElementById("newTitle");
  const results = document.getElementById("titleAutocomplete");
  if (!input || input.dataset.autocomplete) return;
  input.dataset.autocomplete = "1";
  
  input.addEventListener("input", () => {
    const q = input.value.trim();
    clearTimeout(autocompleteDebounce);
    if (q.length < 3) {
      results.classList.remove("open");
      results.innerHTML = "";
      return;
    }
    autocompleteDebounce = setTimeout(() => searchTitles(q), 350);
  });
  
  input.addEventListener("blur", () => {
    // Delay pra click funcionar
    setTimeout(() => results.classList.remove("open"), 200);
  });
  
  input.addEventListener("focus", () => {
    if (results.innerHTML) results.classList.add("open");
  });
}

async function searchTitles(q) {
  const results = document.getElementById("titleAutocomplete");
  if (!results) return;

  if (autocompleteCache[q]) {
    renderAutocomplete(autocompleteCache[q]);
    return;
  }

  if (autocompleteAbort) autocompleteAbort.abort();
  autocompleteAbort = new AbortController();
  const sig = autocompleteAbort.signal;

  // Mostra loading
  results.innerHTML = `<div style="padding:12px 16px; font-size:13px; color:var(--ink-soft);">buscando...</div>`;
  results.classList.add("open");

  try {
    // Busca paralela: Google Books + Open Library.
    // Mercado Livre removido daqui: a API costuma bloquear via proxy/CORS (403),
    // gera erro no console e deixa a busca de livros/capas mais lenta.
    const [googleItems, olItems] = await Promise.allSettled([
      searchGoogleBooks(q, sig),
      searchOpenLibrary(q, sig),
    ]);

    const gResult  = googleItems.status === 'fulfilled' ? googleItems.value : [];
    const oResult  = olItems.status     === 'fulfilled' ? olItems.value     : [];

    // Mescla: Google primeiro, depois Open Library
    // Deduplica por título+autor normalizado
    const seen = new Set();
    const merged = [];
    for (const item of [...gResult, ...oResult]) {
      const norm = (item.title + '|' + (item.author_name || []).join('')).toLowerCase().replace(/\s+/g, '');
      if (!seen.has(norm)) {
        seen.add(norm);
        merged.push(item);
      }
      if (merged.length >= 25) break;
    }
    
    // Re-ordena: items com score mais alto primeiro, depois por fonte (ML > Google > OL)
    merged.sort((a, b) => {
      // Google Books já tem _score calculado no searchGoogleBooks
      const scoreA = a._score || 0;
      const scoreB = b._score || 0;
      if (scoreB !== scoreA) return scoreB - scoreA;
      // Desempate: Google vem primeiro, depois Open Library
      const sourceOrder = { google: 0, ol: 1 };
      return (sourceOrder[a._source] ?? 3) - (sourceOrder[b._source] ?? 3);
    });
    
    const final = merged.slice(0, 18);

    autocompleteCache[q] = final;
    renderAutocomplete(final);
  } catch (e) {
    if (e.name === 'AbortError') return;
    console.error(e);
  }
}

async function searchMercadoLivre(q, signal) {
  // Desativado por estabilidade: o Mercado Livre bloqueia muitas chamadas no navegador/proxy (403).
  // Mantido apenas por compatibilidade com versões antigas do código.
  return [];
}

async function searchGoogleBooks(q, signal) {
  const base = `https://www.googleapis.com/books/v1/volumes`;
  const fields = `fields=items(volumeInfo(title,authors,imageLinks,pageCount,categories,industryIdentifiers,language,publishedDate,publisher))`;

  // Quatro buscas paralelas pra maximizar cobertura de edições BR/PT:
  // 1. langRestrict=pt (edições em português)
  // 2. intitle: (match exato de título)
  // 3. country=BR (vendidos no Brasil)
  // 4. Geral (fallback)
  const queries = [
    `${base}?q=${encodeURIComponent(q)}&maxResults=20&langRestrict=pt&printType=books&${fields}`,
    `${base}?q=intitle:${encodeURIComponent(q)}&maxResults=15&langRestrict=pt&printType=books&${fields}`,
    `${base}?q=${encodeURIComponent(q)}&maxResults=15&printType=books&country=BR&${fields}`,
    `${base}?q=${encodeURIComponent(q)}&maxResults=15&printType=books&${fields}`,
  ];

  const results = await Promise.allSettled(
    queries.map(url => apiFetch(url, { signal }).then(r => r.ok ? r.json() : { items: [] }))
  );

  const allItems = results.flatMap(r => r.status === 'fulfilled' ? (r.value.items || []) : []);

  const seen = new Set();
  const out = [];
  for (const raw of allItems) {
    const v = raw.volumeInfo;
    if (!v || !v.title) continue;
    const authors = v.authors || [];
    const ids = v.industryIdentifiers || [];
    const isbn13 = (ids.find(x => x.type === 'ISBN_13') || {}).identifier || null;
    const isbn10 = (ids.find(x => x.type === 'ISBN_10') || {}).identifier || null;
    const isbns  = ids.map(x => x.identifier);
    const dedupeKey = isbn13 || isbn10 || (v.title + (authors[0]||'')).toLowerCase().replace(/\s/g,'');
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);

    // Ranking de qualidade
    let score = 0;
    const qLower = q.toLowerCase();
    const titleLower = (v.title || '').toLowerCase();
    
    // Match exato de título (mais importante)
    if (titleLower === qLower) score += 100;
    else if (titleLower.startsWith(qLower)) score += 60;
    else if (titleLower.includes(qLower)) score += 30;
    
    // Edições em português são prioritárias
    if (v.language === 'pt') score += 80;
    
    // Capa existe
    if (v.imageLinks) score += 40;
    
    // Páginas conhecidas
    if (v.pageCount) score += 15;
    
    // Editoras BR conhecidas ganham boost
    const pub = (v.publisher || '').toLowerCase();
    const brPublishers = ['planeta', 'intrínseca', 'intrinseca', 'record', 'companhia das letras', 'verus', 'alt', 'rocco', 'sextante', 'novo conceito', 'suma', 'arqueiro', 'darkside', 'morro branco', 'valentina', 'editora globo'];
    if (brPublishers.some(p => pub.includes(p))) score += 30;

    let googleCover = null;
    if (v.imageLinks) {
      googleCover = (v.imageLinks.extraLarge || v.imageLinks.large || v.imageLinks.medium || v.imageLinks.thumbnail || '')
        .replace('http://', 'https://')
        .replace(/[?&]edge=curl/g, '')
        .replace('zoom=1', 'zoom=0');
    }
    const amzCover = isbn13
      ? `https://images-na.ssl-images-amazon.com/images/P/${isbn13}.01.LZZZZZZZ.jpg`
      : isbn10
        ? `https://images-na.ssl-images-amazon.com/images/P/${isbn10}.01.LZZZZZZZ.jpg`
        : null;

    out.push({
      title: v.title,
      author_name: authors,
      number_of_pages_median: v.pageCount || null,
      subject: v.categories || [],
      isbn: isbns, isbn13, isbn10,
      cover_url: googleCover,
      amz_cover: amzCover,
      cover_i: null,
      _source: 'google',
      _score: score,
      _language: v.language,
      _publisher: v.publisher,
    });
    if (out.length >= 25) break;
  }
  
  // Ordena por score antes de retornar
  out.sort((a, b) => b._score - a._score);
  return out.slice(0, 15);
}

async function searchOpenLibrary(q, signal) {
  const fields = "title,author_name,cover_i,number_of_pages_median,subject,isbn,language,edition_count";
  
  // Busca dupla: primeiro só em português, depois geral (em paralelo)
  const urlPt = `https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&language=por&limit=8&fields=${fields}`;
  const urlAll = `https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&limit=10&fields=${fields}`;
  
  try {
    const [ptResp, allResp] = await Promise.allSettled([
      apiFetch(urlPt, { signal }),
      apiFetch(urlAll, { signal }),
    ]);
    
    let ptDocs = [];
    let allDocs = [];
    
    if (ptResp.status === 'fulfilled' && ptResp.value.ok) {
      const ptData = await ptResp.value.json();
      ptDocs = (ptData.docs || []).filter(d => d.title);
    }
    if (allResp.status === 'fulfilled' && allResp.value.ok) {
      const allData = await allResp.value.json();
      allDocs = (allData.docs || []).filter(d => d.title);
    }
    
    // Merge: português primeiro, depois resto (dedup por título+autor)
    const seen = new Set();
    const merged = [];
    for (const doc of [...ptDocs, ...allDocs]) {
      const authorFirst = (doc.author_name || [])[0] || '';
      const norm = (doc.title + '|' + authorFirst).toLowerCase().replace(/\s+/g, '');
      if (seen.has(norm)) continue;
      seen.add(norm);
      
      // Calcula score pra ordenação posterior
      let score = 0;
      if ((doc.language || []).includes('por')) score += 40;
      if (doc.cover_i) score += 25;
      if (doc.number_of_pages_median) score += 8;
      score += Math.min(15, doc.edition_count || 0);
      if (doc.title.toLowerCase() === q.toLowerCase()) score += 20;
      if (doc.title.toLowerCase().startsWith(q.toLowerCase())) score += 8;
      
      merged.push({
        ...doc,
        author_name: doc.author_name || [],
        _source: 'ol',
        _score: score,
      });
    }
    
    // Ordena por score (melhor primeiro)
    merged.sort((a, b) => b._score - a._score);
    return merged.slice(0, 12);
  } catch(e) {
    if (e.name === 'AbortError') throw e;
    return [];
  }
}

function renderAutocomplete(items) {
  const results = document.getElementById("titleAutocomplete");
  if (!results) return;
  if (items.length === 0) {
    results.innerHTML = "";
    results.classList.remove("open");
    return;
  }
  
  let html = "";
  items.forEach((item, i) => {
    // Capa: tenta Google → Amazon BR → Open Library, com onerror em cascata
    const amzSrc  = item.amz_cover || (() => {
      const isbn = (item.isbn||[]).find(s=>s.length===13) || (item.isbn||[]).find(s=>s.length===10);
      return isbn ? `https://images-na.ssl-images-amazon.com/images/P/${isbn}.01.LZZZZZZZ.jpg` : '';
    })();
    const olSrc   = item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg` : '';
    const primary = item.cover_url || amzSrc || olSrc || '';
    const fallback1 = item.cover_url ? (amzSrc || olSrc) : (item.cover_url ? olSrc : '');
    const fallback2 = (primary && fallback1) ? olSrc : '';
    let cover;
    if (primary) {
      // onerror em cascata: Google falha → tenta Amazon → tenta OL
      cover = `<img class="autocomplete-cover" src="${primary}" alt="" loading="lazy"
        onerror="
          const f1='${fallback1}',f2='${fallback2}';
          if(f1&&this.src!==f1){this.src=f1;}
          else if(f2&&this.src!==f2){this.src=f2;}
          else{this.style.display='none';}
        ">`;
    } else {
      cover = `<div class="autocomplete-cover"></div>`;
    }
    const author = (item.author_name || []).slice(0, 2).join(", ");
    const pages = item.number_of_pages_median ? `${item.number_of_pages_median} pgs` : '';
    const sourceBadge = item._source === 'ml'
      ? `<span style="font-size:9px;background:#ffe600;color:#333;border-radius:3px;padding:1px 4px;margin-left:4px;font-weight:600;vertical-align:middle;">ML</span>`
      : '';
    
    html += `<div class="autocomplete-item" data-index="${i}" onmousedown="selectAutocomplete(${i})">
      ${cover}
      <div class="autocomplete-info">
        <div class="autocomplete-title">${escapeHtml(item.title)}${sourceBadge}</div>
        <div class="autocomplete-author">${escapeHtml(author)}</div>
        ${pages ? `<div class="autocomplete-pages">${pages}</div>` : ''}
      </div>
    </div>`;
  });
  
  results.innerHTML = html;
  results.classList.add("open");
  results._items = items;
}

function selectAutocomplete(index) {
  const results = document.getElementById("titleAutocomplete");
  const item = results._items && results._items[index];
  if (!item) return;
  
  document.getElementById("newTitle").value = item.title;
  document.getElementById("newAuthor").value = (item.author_name || [])[0] || '';
  if (item.number_of_pages_median) {
    document.getElementById("newPages").value = item.number_of_pages_median;
  }
  
  // Chuta um gênero baseado em subjects (opcional)
  guessGenreFromSubjects(item.subject || []);
  
  // Salva a capa — prioridade: Open Library > Amazon > Google > ML
  // (OL e Amazon retornam capas planas 2D; ML costuma ser foto 3D do livro)
  const key = coverKey(item.title, (item.author_name || [])[0] || '');
  if (!state.covers) state.covers = {};
  
  if (item.cover_i) {
    // Open Library direto pelo ID (capa plana limpa)
    state.covers[key] = `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`;
  } else if (item.amz_cover) {
    state.covers[key] = item.amz_cover;
  } else if (item.isbn13 || item.isbn10) {
    const isbn = item.isbn13 || item.isbn10;
    state.covers[key] = `https://images-na.ssl-images-amazon.com/images/P/${isbn}.01.LZZZZZZZ.jpg`;
  } else if (item.cover_url) {
    state.covers[key] = item.cover_url;
  }
  
  if (item.number_of_pages_median) {
    state.bookPages = state.bookPages || {};
    state.bookPages[key] = item.number_of_pages_median;
  }
  saveState();
  
  results.classList.remove("open");
}

function guessGenreFromSubjects(subjects) {
  const select = document.getElementById("newGenre");
  if (!select) return;
  const joined = (subjects || []).join(" ").toLowerCase();

  // Suspense/horror tem prioridade sobre romance — muitos thrillers são vendidos
  // dentro de "ficção romântica" mas o gênero "verdadeiro" é suspense
  const mapping = [
    { keys: ['suspense', 'thriller', 'mystery', 'mistério', 'misterio', 'crime', 'detective', 'detetive', 'policial', 'investiga'], genre: 'suspense' },
    { keys: ['witch', 'bruxa', 'bruxaria', 'gothic', 'gótico', 'gotico', 'horror', 'terror', 'occult', 'oculto', 'sombri', 'sobrenatural'], genre: 'bruxaria' },
    { keys: ['fantasy', 'fantasia', 'magic', 'magia', 'fairy', 'fada', 'dragon', 'dragão', 'dragao', 'elf', 'elfo', 'épica', 'epica', 'mitolog'], genre: 'fantasia' },
    { keys: ['romance', 'love stor', 'romântic', 'romantic', 'chick lit', 'paixão', 'paixao', 'amor'], genre: 'romance' },
  ];
  
  for (const m of mapping) {
    if (m.keys.some(k => joined.includes(k))) {
      if (select.querySelector(`option[value="${m.genre}"]`)) {
        select.value = m.genre;
      }
      return;
    }
  }
}

// ============ GERENCIAR GÊNEROS ============
async function loadGenresFromDb() {
  if (!config.setupDone || config.skipSync) return;
  try {
    const rows = await supabaseFetch("genres?select=*&order=sort_order");
    if (rows && Array.isArray(rows) && rows.length > 0) {
      // Mescla: defaults + customs
      GENRES = { ...DEFAULT_GENRES };
      PALETTE = { ...DEFAULT_PALETTE };
      rows.forEach(row => {
        GENRES[row.id] = {
          name: row.name,
          emoji: row.emoji || '📚',
          color: row.color || 'c-rose',
          preview: row.preview || '',
          custom: true,
        };
        if (row.palette && Array.isArray(row.palette)) {
          PALETTE[row.id] = row.palette;
        } else {
          // Usa a paleta da cor escolhida
          const colorOpt = COLOR_OPTIONS.find(c => c.id === row.color);
          PALETTE[row.id] = colorOpt ? colorOpt.palette : DEFAULT_PALETTE.romance;
        }
      });
    }
  } catch(e) {
    // Se a tabela genres não existir ainda, não quebra — só usa defaults
    console.log("genres não disponível:", e.message);
  }
}

function openGenresModal() {
  closeMenu();
  renderGenresList();
  renderColorPicker();
  document.getElementById("newGenreEmoji").value = "";
  document.getElementById("newGenreName").value = "";
  document.getElementById("newGenrePreview").value = "";
  selectedColor = null;
  // Pre-select gender in profile section
  if (currentUser && currentUser.gender) {
    selectProfileGender(currentUser.gender);
  }
  document.getElementById("genresModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeGenresModal() {
  document.getElementById("genresModal").classList.remove("open");
  document.body.style.overflow = "";
  renderAll();
}

function renderGenresList() {
  const container = document.getElementById("genresList");
  let html = `<div style="font-family: 'Instrument Serif', serif; font-style: italic; font-size: 16px; color: var(--ink-soft); margin-bottom: 12px;">seus gêneros</div>`;
  
  Object.entries(GENRES).forEach(([id, g]) => {
    const isDefault = !!DEFAULT_GENRES[id];
    const bookCount = state.books.filter(b => b.g === id).length;
    html += `<div class="genre-list-item" id="gli-${id}">
      <div class="genre-list-emoji">${g.emoji}</div>
      <div class="genre-list-info">
        <div class="genre-list-name">${escapeHtml(g.name)}</div>
        <div class="genre-list-meta">${bookCount} livro${bookCount !== 1 ? 's' : ''}${isDefault ? ' · padrão' : ''}</div>
      </div>
      <div class="genre-list-actions">
        <button class="sess-btn" onclick="openEditGenre('${id}')" aria-label="Editar" title="Editar">✏</button>
        <button class="sess-btn del" onclick="deleteGenre('${id}')" aria-label="Excluir" title="Excluir" ${bookCount > 0 ? 'disabled style="opacity:0.35;cursor:not-allowed;"' : ''}>✕</button>
      </div>
    </div>`;
  });
  
  container.innerHTML = html;
}

function openEditGenre(id) {
  const g = GENRES[id];
  if (!g) return;
  const item = document.getElementById(`gli-${id}`);
  if (!item) return;
  
  // Monta inline editor
  item.innerHTML = `
    <div style="display:flex; gap:8px; flex:1; flex-wrap:wrap; align-items:flex-end;">
      <input type="text" value="${escapeHtml(g.emoji)}" id="egi-emoji-${id}" maxlength="4"
        style="width:52px; text-align:center; font-size:18px; padding:6px; border:1.5px solid var(--cream-dark); border-radius:8px; background:var(--cream); font-family:inherit;">
      <div style="flex:1; min-width:120px;">
        <div style="font-size:11px; color:var(--ink-soft); margin-bottom:3px;">Nome</div>
        <input type="text" value="${escapeHtml(g.name)}" id="egi-name-${id}"
          style="width:100%; padding:6px 10px; border:1.5px solid var(--cream-dark); border-radius:8px; background:var(--cream); font-family:inherit; font-size:14px;">
      </div>
      <div style="flex:1; min-width:140px;">
        <div style="font-size:11px; color:var(--ink-soft); margin-bottom:3px;">Descrição curta</div>
        <input type="text" value="${escapeHtml(g.preview || '')}" id="egi-preview-${id}" placeholder="uma frase sobre esse gênero"
          style="width:100%; padding:6px 10px; border:1.5px solid var(--cream-dark); border-radius:8px; background:var(--cream); font-family:inherit; font-size:14px;">
      </div>
      <div style="display:flex; gap:6px; margin-top:4px;">
        <button class="sess-btn" onclick="saveEditGenre('${id}')" style="background:var(--ink);color:var(--cream);">✓</button>
        <button class="sess-btn" onclick="renderGenresList()">✕</button>
      </div>
    </div>
  `;
}

async function saveEditGenre(id) {
  const nameEl = document.getElementById(`egi-name-${id}`);
  const emojiEl = document.getElementById(`egi-emoji-${id}`);
  const previewEl = document.getElementById(`egi-preview-${id}`);
  if (!nameEl) return;
  
  const name = nameEl.value.trim();
  const emoji = emojiEl.value.trim() || GENRES[id].emoji;
  const preview = previewEl.value.trim();
  
  if (!name) { alert("O nome não pode ficar vazio ✦"); return; }
  
  GENRES[id].name = name;
  GENRES[id].emoji = emoji;
  GENRES[id].preview = preview;
  
  // Persiste no banco se for custom
  try {
    await supabaseFetch(`genres?id=eq.${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ name, emoji, preview: preview || null }),
    });
  } catch(e) { console.error(e); }
  
  renderGenresList();
  renderAll();
}

let selectedColor = null;

function renderColorPicker() {
  const picker = document.getElementById("colorPicker");
  let html = "";
  COLOR_OPTIONS.forEach(opt => {
    html += `<div class="color-option ${selectedColor === opt.id ? 'selected' : ''}" 
      style="background: ${opt.bg};" 
      onclick="selectColor('${opt.id}')"
      data-color="${opt.id}">${opt.name}</div>`;
  });
  picker.innerHTML = html;
}

function selectColor(id) {
  selectedColor = id;
  renderColorPicker();
}

async function addGenre() {
  const name = document.getElementById("newGenreName").value.trim();
  const emoji = document.getElementById("newGenreEmoji").value.trim() || '📚';
  const preview = document.getElementById("newGenrePreview").value.trim();
  
  if (!name) { alert("Coloca um nome ✦"); return; }
  if (!selectedColor) { alert("Escolhe uma cor ✦"); return; }
  
  // Gera ID a partir do nome
  const id = name.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .substring(0, 40);
  
  if (!id) { alert("Nome inválido ✦"); return; }
  if (GENRES[id]) { alert("Já existe um gênero com esse nome ✦"); return; }
  
  const colorOpt = COLOR_OPTIONS.find(c => c.id === selectedColor);
  if (!colorOpt) return;
  
  // Adiciona localmente
  GENRES[id] = {
    name: name,
    emoji: emoji,
    color: selectedColor,
    preview: preview || '',
    custom: true,
  };
  PALETTE[id] = colorOpt.palette;
  
  // Salva no banco
  try {
    setSyncStatus("syncing", "↻ salvando gênero");
    await supabaseFetch("genres", {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        name: name,
        emoji: emoji,
        color: selectedColor,
        preview: preview || null,
        palette: colorOpt.palette,
        sort_order: Object.keys(GENRES).length,
      }),
    });
    setSyncStatus("synced", "✦ sincronizado");
  } catch(e) {
    console.error(e);
    setSyncStatus("error", "⚠ gênero não sincronizou");
  }
  
  // Limpa form
  document.getElementById("newGenreEmoji").value = "";
  document.getElementById("newGenreName").value = "";
  document.getElementById("newGenrePreview").value = "";
  selectedColor = null;
  
  renderGenresList();
  renderColorPicker();
}

async function deleteGenre(id) {
  const bookCount = state.books.filter(b => b.g === id).length;
  if (bookCount > 0) {
    alert(`Não é possível excluir "${GENRES[id].name}" pois há ${bookCount} livro${bookCount!==1?'s':''} nesse gênero. Mova ou exclua os livros primeiro.`);
    return;
  }
  if (!confirm(`Excluir o gênero "${GENRES[id].name}"?`)) return;
  
  delete GENRES[id];
  delete PALETTE[id];
  
  // Remove do banco só se não for default (defaults não estão na tabela genres)
  try {
    await supabaseFetch(`genres?id=eq.${id}`, { method: 'DELETE' });
  } catch(e) { console.error(e); }
  
  renderGenresList();
  renderAll();
}

// Modais de edição não fecham ao clicar fora — somente via botão cancelar/fechar

// ============ MENU ============
function toggleMenu(e) {
  if (e) e.stopPropagation();
  document.getElementById("menu").classList.toggle("open");
}
function closeMenu() { document.getElementById("menu").classList.remove("open"); }
document.addEventListener("click", (e) => {
  if (!e.target.closest(".menu") && !e.target.closest(".icon-btn")) { closeMenu(); }
});

// ============ EXPORT HTML ============
function exportHtml() {
  closeMenu();
  const existing = document.getElementById("__embedded_state__");
  if (existing) existing.remove();
  
  const clone = document.documentElement.cloneNode(true);
  const bodyClone = clone.querySelector("body");
  const stateScript = document.createElement("script");
  stateScript.id = "__embedded_state__";
  stateScript.type = "application/json";
  stateScript.textContent = JSON.stringify(state).replace(/<\/scr/gi, "<\\/scr");
  bodyClone.insertBefore(stateScript, bodyClone.firstChild);
  
  const html = "<!DOCTYPE html>\n" + clone.outerHTML;
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.href = url;
  a.download = `minha-estante-${todayISO()}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ============ COVER PICKER ============
let coverPickerCurrentBook = null;

function updateCurrentCoverPreview(book) {
  const preview = document.getElementById("currentCoverPreview");
  if (!preview) return;
  preview.innerHTML = coverFallbackHTML(book, book.g);
  const cached = getBookCover(book);
  if (cached) {
    preview.innerHTML = `<img src="${escapeHtml(cached)}" alt="">`;
    const img = preview.querySelector("img");
    if (img) img.onerror = () => { preview.innerHTML = coverFallbackHTML(book, book.g); };
  } else {
    const key = coverKey(book.t, book.a);
    if (hasFixedCover(book) || (state.covers && state.covers[key] === "NONE")) return;
    // Busca se não tiver, sem travar o modal
    fetchCover(book.t, book.a).then(url => {
      if (!url) return;
      setBookCover(book, url);
      preview.innerHTML = `<img src="${escapeHtml(url)}" alt="" loading="lazy" decoding="async">`;
      saveState();
      pushBook(book);
    });
  }
}

async function openCoverPicker(e) {
  if (e) e.preventDefault();
  if (!editingBookId) return;
  const book = getBookById(editingBookId);
  if (!book) return;
  coverPickerCurrentBook = book;

  document.getElementById("coverPickerBook").textContent = `"${book.t}" — ${book.a}`;
  document.getElementById("customCoverUrl").value = "";
  document.getElementById("coverPickerModal").classList.add("open");
  document.body.style.overflow = "hidden";

  const grid = document.getElementById("coverPickerGrid");
  grid.innerHTML = `<div class="cover-picker-empty">buscando primeiro na Amazon ✦</div>`;

  const title = book.t;
  const author = book.a;
  const covers = [];
  const seenUrls = new Set();
  const isbnCandidates = [];
  const addIsbn = (isbn) => {
    const clean = String(isbn || '').replace(/[^0-9X]/gi, '');
    if ((clean.length === 10 || clean.length === 13) && !isbnCandidates.includes(clean)) {
      isbnCandidates.push(clean);
    }
  };
  const addCover = (url, source, extra = {}) => {
    if (!url || seenUrls.has(url)) return;
    seenUrls.add(url);
    covers.push({ url, source, ...extra });
  };
  const addCoverValidated = (url, source, extra = {}) => new Promise(resolve => {
    loadCoverWithValidation(url, validUrl => {
      addCover(validUrl, source, extra);
      resolve(true);
    }, () => resolve(false));
  });
  const showNow = () => {
    if (covers.length > 0) renderCoverPicker(covers);
  };

  // 1) Coleta ISBN e mostra Amazon primeiro.
  try {
    const fields = "cover_i,language,title,isbn";
    const q = `title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&limit=10&fields=${fields}`;
    const resp = await apiFetch(`https://openlibrary.org/search.json?${q}`);
    if (resp.ok) {
      const data = await resp.json();
      (data.docs || []).forEach(doc => {
        (doc.isbn || []).forEach(addIsbn);
      });
    }
  } catch(e) { console.warn('[picker] ISBN Open Library falhou:', e); }

  try {
    const q = `intitle:${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}`;
    const resp = await apiFetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=10`);
    if (resp.ok) {
      const data = await resp.json();
      (data.items || []).forEach(item => {
        const info = item.volumeInfo || {};
        (info.industryIdentifiers || []).forEach(id => addIsbn(id.identifier));
      });
    }
  } catch(e) { console.warn('[picker] ISBN Google Books falhou:', e); }

  for (const isbn of isbnCandidates.slice(0, 8)) {
    await addCoverValidated(`https://images-na.ssl-images-amazon.com/images/P/${isbn}.01.LZZZZZZZ.jpg`, 'Amazon');
  }
  showNow();

  // 2) Se Amazon não trouxer opção ou para complementar, busca Google/Open Library/Mercado Livre.
  grid.querySelector('.cover-picker-empty') && (grid.innerHTML = `<div class="cover-picker-empty">buscando outras opções ✦</div>`);

  const googleBooksPromise = (async () => {
    try {
      const q = `intitle:${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}`;
      const resp = await apiFetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=10&langRestrict=pt`);
      if (resp.ok) {
        const data = await resp.json();
        (data.items || []).forEach(item => {
          const info = item.volumeInfo || {};
          if (info.imageLinks) {
            const links = info.imageLinks;
            let url = links.extraLarge || links.large || links.medium || links.thumbnail || links.smallThumbnail;
            if (url) {
              url = url.replace(/^http:/, 'https:').replace(/&edge=curl/, '').replace(/&zoom=\d+/, '');
              addCover(url, 'Google', { lang: info.language, title: info.title });
            }
          }
        });
      }
    } catch(e) { console.warn('[picker] Google Books falhou:', e); }
    showNow();
  })();

  const openLibraryPromise = (async () => {
    try {
      const fields = "cover_i,language,title,isbn";
      const q = `title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&limit=10&fields=${fields}`;
      const resp = await apiFetch(`https://openlibrary.org/search.json?${q}`);
      if (resp.ok) {
        const data = await resp.json();
        (data.docs || []).forEach(doc => {
          if (doc.cover_i) {
            addCover(`https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`, 'Open Library', {
              lang: (doc.language || [])[0],
              title: doc.title,
            });
          }
        });
      }
    } catch(e) { console.warn('[picker] Open Library falhou:', e); }
    showNow();
  })();

  // Mercado Livre removido do seletor de capas para evitar 403 no console e cards vazios.

  await Promise.allSettled([googleBooksPromise, openLibraryPromise]);
  renderCoverPicker(covers);
}

function renderCoverPicker(covers) {
  const grid = document.getElementById("coverPickerGrid");
  if (!covers || covers.length === 0) {
    grid.innerHTML = `<div class="cover-picker-empty">
      nenhuma capa encontrada ✦<br>
      <small style="font-size:12px; opacity:0.7;">tente colar uma URL manualmente abaixo</small>
    </div>`;
    return;
  }
  
  const currentUrl = getBookCover(coverPickerCurrentBook);
  
  grid.innerHTML = covers.map((c, i) => {
    const isSelected = c.url === currentUrl ? ' selected' : '';
    return `<div class="cover-picker-item${isSelected}" onclick="selectCoverFromPicker('${c.url.replace(/'/g, "\\'")}')">
      <img src="${c.url}" alt="" loading="lazy" decoding="async" onerror="this.parentElement.style.display='none'">
      <div class="source-badge">${c.source}</div>
    </div>`;
  }).join('');
}

function selectCoverFromPicker(url) {
  if (!coverPickerCurrentBook) return;
  setBookCover(coverPickerCurrentBook, url, { manual: true });
  saveState();
  // Sincroniza capa com o Supabase pra aparecer em outros dispositivos
  pushBook(coverPickerCurrentBook);

  // Marca visual
  document.querySelectorAll('.cover-picker-item').forEach(el => el.classList.remove('selected'));
  if (event && event.currentTarget) event.currentTarget.classList.add('selected');

  // Atualiza preview no modal de edição
  updateCurrentCoverPreview(coverPickerCurrentBook);

  // Fecha com delay pra feedback visual
  setTimeout(() => {
    closeCoverPicker();
    renderAll(); // Re-renderiza cards com nova capa
  }, 300);
}

function applyCustomCover(e) {
  if (e) e.preventDefault();
  if (!coverPickerCurrentBook) return;
  const url = document.getElementById("customCoverUrl").value.trim();
  if (!url) { alert("Cola uma URL válida ✦"); return; }
  if (!url.match(/^https?:\/\//)) { alert("URL precisa começar com http:// ou https:// ✦"); return; }
  
  setBookCover(coverPickerCurrentBook, url, { manual: true });
  saveState();
  // Sincroniza capa com o Supabase pra aparecer em outros dispositivos
  pushBook(coverPickerCurrentBook);
  
  updateCurrentCoverPreview(coverPickerCurrentBook);
  closeCoverPicker();
  renderAll();
}

function closeCoverPicker() {
  document.getElementById("coverPickerModal").classList.remove("open");
  document.body.style.overflow = "";
  coverPickerCurrentBook = null;
}

document.getElementById("coverPickerModal").addEventListener("click", (e) => {
  if (e.target.id === "coverPickerModal") closeCoverPicker();
});

document.getElementById("customCoverUrl").addEventListener("keydown", (e) => {
  if (e.key === "Enter") applyCustomCover(e);
});

// ============ INIT ============
state = loadState();
migrateBookData();
saveState();
// Sempre abre na aba "Lendo", independente do que estava salvo
state.filter = "reading";

async function init() {
  // Aviso se rodando via file:// (fetch bloqueado pelo browser)
  if (location.protocol === 'file:') {
    setSyncStatus("error", "⚠ abra via HTTPS");
  }

  // 1. Garante credenciais: usa as embutidas se válidas, senão continua sem sync
  if (!config.setupDone) {
    if (EMBEDDED_SUPABASE_URL && EMBEDDED_SUPABASE_KEY && EMBEDDED_SUPABASE_KEY !== "SUA_CHAVE_AQUI") {
      config.supabaseUrl = EMBEDDED_SUPABASE_URL;
      config.supabaseKey = EMBEDDED_SUPABASE_KEY;
      config.setupDone   = true;
      saveConfig();
    } else {
      // Sem credenciais configuradas: marca como skipSync e vai pro login
      config.setupDone = true;
      config.skipSync  = true;
      saveConfig();
    }
  }

  // 2. Tenta retomar sessão salva.
  // Se voltar, continua o init para sincronizar com o Supabase.
  if (!currentUser) {
    setSyncStatus("syncing", "↻ verificando sessão");
    const resumed = await tryAutoLogin();
    if (!resumed) {
      setSyncStatus("offline", "faça login");
      showLogin();
      return;
    }
  }

  // 3. Usuário logado — sincroniza dados
  // Se temos credenciais embutidas válidas, nunca fica só local
  if (EMBEDDED_SUPABASE_URL && EMBEDDED_SUPABASE_KEY && EMBEDDED_SUPABASE_KEY !== "SUA_CHAVE_AQUI") {
    config.skipSync = false;
  }
  if (config.skipSync) {
    setSyncStatus("offline", "só local");
    renderAll();
    return;
  }

  setSyncStatus("syncing", "↻ carregando");
  // Mantém a estante local visível enquanto o Supabase carrega.
  // Isso é só visual: não envia o local antigo para o banco.
  if (state.books && state.books.length) renderAll();

  await loadGenresFromDb();

  try {
    const userId = currentUser.id;

    // 1. Verifica livros com user_id correto
    const rows = await supabaseFetch(`books?user_id=eq.${encodeURIComponent(userId)}&select=id&limit=1`);

    if (Array.isArray(rows) && rows.length === 0) {
      // 2. Nenhum livro com esse user_id — pode ser que existam livros órfãos (user_id null)
      //    Isso acontece quando livros foram adicionados antes do login estar ativo
      const orphans = await supabaseFetch(`books?user_id=is.null&select=id&limit=1`);

      if (Array.isArray(orphans) && orphans.length > 0) {
        // Adota os livros órfãos: atualiza user_id para o usuário atual
        setSyncStatus("syncing", "↻ vinculando livros");
        await supabaseFetch(`books?user_id=is.null`, {
          method: 'PATCH',
          body: JSON.stringify({ user_id: userId }),
          headers: { 'Prefer': 'return=minimal' },
        });
      } else {
        // Realmente não tem nenhum livro — estante nova
        await seedInitialBooks();
        return;
      }
    }

    // 3. Puxa todos os livros do usuário
    await syncFromSupabase();
  } catch (e) {
    console.error(e);
    setSyncStatus("error", "⚠ erro de sync");
  }

  // 4. Retoma timer em andamento
  if (timerState && timerState.bookId) {
    const book = getBookById(timerState.bookId);
    if (book) {
      setTimeout(() => {
        if (confirm(`Você tinha uma sessão em andamento de "${book.t}". Retomar?`)) {
          openTimer();
        } else {
          timerState = null;
          saveTimerState();
        }
      }, 500);
    } else {
      timerState = null;
      saveTimerState();
    }
  }
}

init();
