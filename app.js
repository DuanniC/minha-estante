
// APP.JS LIMPO (SEM MERCADO LIVRE / CORS PROXY)

async function fetchGoogleBooks(query){
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
  const data = await res.json();
  return (data.items || []).map(item => ({
    title: item.volumeInfo.title,
    cover: item.volumeInfo.imageLinks?.thumbnail
  })).filter(b => b.cover);
}

async function fetchOpenLibrary(query){
  const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
  const data = await res.json();
  return (data.docs || []).map(d => ({
    title: d.title,
    cover: d.cover_i ? `https://covers.openlibrary.org/b/id/${d.cover_i}-M.jpg` : null
  })).filter(b => b.cover);
}

async function getCovers(query){
  const sources = [fetchGoogleBooks, fetchOpenLibrary];
  for (const fn of sources){
    try {
      const result = await fn(query);
      if (result.length) return result;
    } catch(e){
      console.warn("Erro na fonte:", e);
    }
  }
  return [];
}

// trava capa manual
function setManualCover(book, url){
  book.coverUrl = url;
  book.coverManual = true;
}

// exemplo uso
window.getCovers = getCovers;
