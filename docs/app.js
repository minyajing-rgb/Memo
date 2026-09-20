(() => {
  const body = document.body;
  const cartKey = "memo-cart-v2";
  const readCart = () => JSON.parse(localStorage.getItem(cartKey) || "[]");
  const writeCart = items => { localStorage.setItem(cartKey, JSON.stringify(items)); renderCart(); };
  const money = n => "$" + Number(n).toFixed(0);

  document.querySelector(".menu-toggle")?.addEventListener("click", e => {
    const nav = document.querySelector(".nav");
    const open = nav.classList.toggle("mobile-open");
    e.currentTarget.setAttribute("aria-expanded", String(open));
    Object.assign(nav.style, open ? {
      display:"flex",position:"absolute",top:"72px",left:"0",right:"0",padding:"22px 5vw",
      background:"#fffaf8",flexDirection:"column",alignItems:"flex-start",borderBottom:"1px solid rgba(33,25,36,.12)"
    } : {display:""});
  });

  document.querySelectorAll("[data-campaign], .mood-card img, .feature-card img, .story-card img").forEach(img => {
    img.addEventListener("error", () => {
      img.style.display = "none";
      img.parentElement?.classList.add("image-missing");
    });
  });

  document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      card.hidden = f !== "all" && card.dataset.category !== f;
    });
  }));

  function addItem(name, price) {
    const cart = readCart();
    const found = cart.find(x => x.name === name);
    if (found) found.qty += 1;
    else cart.push({name, price:Number(price), qty:1});
    writeCart(cart);
    body.classList.add("cart-open");
  }

  document.querySelectorAll("[data-add]").forEach(btn => btn.addEventListener("click", () => addItem(btn.dataset.add, btn.dataset.price)));
  document.querySelectorAll("[data-open-cart]").forEach(btn => btn.addEventListener("click", () => body.classList.add("cart-open")));
  document.querySelectorAll("[data-close-cart]").forEach(btn => btn.addEventListener("click", () => body.classList.remove("cart-open")));

  function renderCart() {
    const cart = readCart();
    document.querySelectorAll("[data-cart-count]").forEach(el => el.textContent = cart.reduce((s,x)=>s+x.qty,0));
    const root = document.querySelector("[data-cart-items]");
    if (!root) return;
    if (!cart.length) root.innerHTML = '<p class="empty">Your bag is waiting for a good mood ♡</p>';
    else root.innerHTML = cart.map((x,i) => '<div class="cart-line"><div><b>'+x.name+'</b><small>MEMO Season 01</small></div><span>'+money(x.price*x.qty)+' × '+x.qty+'</span><button data-remove="'+i+'" aria-label="Remove">−</button></div>').join("");
    root.querySelectorAll("[data-remove]").forEach(btn => btn.addEventListener("click", () => {
      const next = readCart(); const i=Number(btn.dataset.remove); next[i].qty -= 1; if(next[i].qty<=0) next.splice(i,1); writeCart(next);
    }));
    const total = cart.reduce((s,x)=>s+x.price*x.qty,0);
    const t = document.querySelector("[data-cart-total]"); if(t) t.textContent = money(total);
  }

  document.getElementById("clubForm")?.addEventListener("submit", e => {
    e.preventDefault();
    const input = document.getElementById("clubEmail");
    localStorage.setItem("memo-club-email", input.value);
    document.getElementById("clubStatus").textContent = "You’re in the Good Mood Club ♡";
    input.value = "";
  });

  renderCart();
})();