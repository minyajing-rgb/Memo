(() => {
  const key="memo-cart-v1";
  const money=n=>"¥"+Number(n).toLocaleString("zh-CN");
  const get=()=>JSON.parse(localStorage.getItem(key)||"[]");
  const set=(items)=>{localStorage.setItem(key,JSON.stringify(items)); renderCart(); updateCount();};
  const add=(product,color,size)=>{
    const items=get();
    const found=items.find(x=>x.id===product.id&&x.color===color&&x.size===size);
    if(found) found.qty+=1; else items.push({id:product.id,name:product.name,price:product.price,color,size,qty:1});
    set(items); openCart();
  };
  const updateCount=()=>{
    const count=get().reduce((s,x)=>s+x.qty,0);
    document.querySelectorAll("[data-cart-count]").forEach(el=>el.textContent=count);
  };
  const renderCart=()=>{
    const root=document.querySelector("[data-cart-items]"); if(!root)return;
    const items=get(); root.innerHTML=items.length?items.map((x,i)=>`
      <div class="cart-line">
        <div><b>${x.name}</b><small>${x.color} · ${x.size}</small></div>
        <div class="cart-qty"><button data-minus="${i}">−</button><span>${x.qty}</span><button data-plus="${i}">+</button></div>
        <strong>${money(x.price*x.qty)}</strong>
      </div>`).join(""):'<p class="empty-cart">Your bag is waiting for a good mood.</p>';
    const total=items.reduce((s,x)=>s+x.price*x.qty,0);
    const t=document.querySelector("[data-cart-total]"); if(t)t.textContent=money(total);
    root.querySelectorAll("[data-minus]").forEach(b=>b.onclick=()=>{const arr=get(),i=+b.dataset.minus;arr[i].qty--;if(arr[i].qty<=0)arr.splice(i,1);set(arr)});
    root.querySelectorAll("[data-plus]").forEach(b=>b.onclick=()=>{const arr=get(),i=+b.dataset.plus;arr[i].qty++;set(arr)});
  };
  const openCart=()=>document.body.classList.add("cart-open");
  const closeCart=()=>document.body.classList.remove("cart-open");
  window.MEMOCart={add,open:openCart,close:closeCart,get};
  document.addEventListener("DOMContentLoaded",()=>{
    updateCount(); renderCart();
    document.querySelectorAll("[data-open-cart]").forEach(b=>b.onclick=openCart);
    document.querySelectorAll("[data-close-cart]").forEach(b=>b.onclick=closeCart);
    const checkout=document.querySelector("[data-checkout]");
    if(checkout) checkout.onclick=()=>{
      if(!get().length)return;
      alert("MEMO checkout preview is ready. Stripe/payment link will be connected after merchant account configuration.");
    };
  });
})();