const dishes=[
  {
    "id": 1,
    "name": "چلوکباب کوبیده",
    "cat": "کباب",
    "price": 325000,
    "desc": "دو سیخ کوبیدهٔ زعفرانی، برنج ایرانی و گوجهٔ کبابی",
    "tag": "محبوب",
    "img": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 2,
    "name": "زرشک‌پلو با مرغ",
    "cat": "غذای اصلی",
    "price": 285000,
    "desc": "مرغ آرام‌پز، زرشک تفت‌داده و برنج زعفرانی",
    "tag": "پیشنهاد آشپز",
    "img": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 3,
    "name": "باقالی‌پلو با ماهیچه",
    "cat": "غذای اصلی",
    "price": 495000,
    "desc": "ماهیچهٔ نرم و جاافتاده با باقالی‌پلو و شوید تازه",
    "tag": "ویژه",
    "img": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 4,
    "name": "جوجه‌کباب زعفرانی",
    "cat": "کباب",
    "price": 310000,
    "desc": "مرغ مزه‌دارشده با زعفران، لیمو و دورچین فصل",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1532634896-26909d0d4b8b?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 5,
    "name": "قورمه‌سبزی",
    "cat": "غذای اصلی",
    "price": 260000,
    "desc": "خورش جاافتاده با سبزی معطر، لوبیا و لیموعمانی",
    "tag": "دست‌پخت خانه",
    "img": "https://images.unsplash.com/photo-1547592180-86f6f8d9d1c4?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 6,
    "name": "میرزاقاسمی",
    "cat": "پیش‌غذا",
    "price": 125000,
    "desc": "بادمجان دودی، گوجهٔ رسیده و تخم‌مرغ",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 7,
    "name": "کشک بادمجان",
    "cat": "پیش‌غذا",
    "price": 135000,
    "desc": "بادمجان، کشک، نعناع‌داغ و پیازداغ",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 8,
    "name": "سالاد شیرازی",
    "cat": "سالاد و مخلفات",
    "price": 85000,
    "desc": "خیار، گوجه و پیاز با آب‌لیموی تازه",
    "tag": "تازه",
    "img": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 9,
    "name": "دوغ سنتی",
    "cat": "نوشیدنی",
    "price": 45000,
    "desc": "دوغ خنک با نعناع خشک و عطر دلنشین",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 10,
    "name": "شربت زعفران",
    "cat": "نوشیدنی",
    "price": 65000,
    "desc": "زعفران، گلاب و کمی عسل؛ خنک و خوش‌عطر",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1513558161293-cafd765edfd7?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 11,
    "name": "بستنی سنتی",
    "cat": "دسر",
    "price": 95000,
    "desc": "بستنی زعفرانی با پسته و خامهٔ سنتی",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 12,
    "name": "فرنی گلاب",
    "cat": "دسر",
    "price": 75000,
    "desc": "دسر لطیف با گلاب، دارچین و خلال پسته",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 13,
    "name": "چلوکباب برگ",
    "cat": "کباب",
    "price": 425000,
    "desc": "فیلهٔ گوساله مزه‌دارشده با کره و برنج زعفرانی",
    "tag": "ویژه",
    "img": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 14,
    "name": "کباب سلطانی",
    "cat": "کباب",
    "price": 560000,
    "desc": "ترکیب برگ و کوبیده با برنج ایرانی و گوجهٔ کبابی",
    "tag": "امضای خانه",
    "img": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 15,
    "name": "کباب چنجه",
    "cat": "کباب",
    "price": 440000,
    "desc": "تکه‌های نرم گوشت گریل‌شده با فلفل و لیموی تازه",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 16,
    "name": "کباب ترش گیلانی",
    "cat": "کباب",
    "price": 390000,
    "desc": "گوشت مزه‌دارشده با سبزی محلی، گردو و رب انار",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 17,
    "name": "جوجه‌کباب استخوانی",
    "cat": "کباب",
    "price": 345000,
    "desc": "جوجهٔ زعفرانی با پوست برشته و دورچین سبزیجات",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1532634896-26909d0d4b8b?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 18,
    "name": "چلوکباب بختیاری",
    "cat": "کباب",
    "price": 415000,
    "desc": "ترکیب مرغ و گوشت گریل‌شده با برنج کره‌ای",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 19,
    "name": "قیمه سیب‌زمینی",
    "cat": "غذای اصلی",
    "price": 245000,
    "desc": "خورش قیمهٔ جاافتاده با لپه و سیب‌زمینی خلالی",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1547592180-86f6f8d9d1c4?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 20,
    "name": "فسنجان با مرغ",
    "cat": "غذای اصلی",
    "price": 335000,
    "desc": "خورش گردو و انار با مرغ لطیف و طعم ملس",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 21,
    "name": "آلبالوپلو با مرغ",
    "cat": "غذای اصلی",
    "price": 315000,
    "desc": "برنج خوش‌رنگ با آلبالوی ترش‌وشیرین و مرغ",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 22,
    "name": "ته‌چین مرغ",
    "cat": "غذای اصلی",
    "price": 295000,
    "desc": "ته‌چین زعفرانی با مرغ ریش‌ریش و ماست چکیده",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 23,
    "name": "عدس‌پلو با کشمش",
    "cat": "غذای اصلی",
    "price": 220000,
    "desc": "عدس‌پلوی معطر با کشمش، پیازداغ و دارچین",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 24,
    "name": "سبزی‌پلو با ماهی",
    "cat": "غذای اصلی",
    "price": 365000,
    "desc": "ماهی مزه‌دارشده کنار سبزی‌پلوی معطر و لیمو",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 25,
    "name": "سوپ جو",
    "cat": "پیش‌غذا",
    "price": 95000,
    "desc": "سوپ گرم و خامه‌ای با جو، هویج و سبزی تازه",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 26,
    "name": "ماست و خیار",
    "cat": "پیش‌غذا",
    "price": 65000,
    "desc": "ماست چکیده با خیار، نعناع و کشمش",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 27,
    "name": "بورانی اسفناج",
    "cat": "پیش‌غذا",
    "price": 85000,
    "desc": "اسفناج تازه و ماست با سیر ملایم",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 28,
    "name": "زیتون پرورده",
    "cat": "پیش‌غذا",
    "price": 90000,
    "desc": "زیتون، گردو، رب انار و سبزی معطر شمالی",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 29,
    "name": "سالاد فصل",
    "cat": "سالاد و مخلفات",
    "price": 95000,
    "desc": "کاهو، گوجه، خیار و هویج با سس سبک",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 30,
    "name": "سالاد انار و گردو",
    "cat": "سالاد و مخلفات",
    "price": 145000,
    "desc": "سبزیجات تازه با دانه‌های انار و گردوی خردشده",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 31,
    "name": "سبزی خوردن و پنیر",
    "cat": "سالاد و مخلفات",
    "price": 75000,
    "desc": "سبزی روز، پنیر ایرانی و گردو",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 32,
    "name": "آب‌دوغ‌خیار",
    "cat": "غذای اصلی",
    "price": 185000,
    "desc": "غذای خنک سنتی با ماست، سبزی و گردو؛ مناسب فصل گرم",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 33,
    "name": "شربت بهارنارنج",
    "cat": "نوشیدنی",
    "price": 65000,
    "desc": "نوشیدنی خنک با عطر بهارنارنج و آب‌لیموی تازه",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1513558161293-cafd765edfd7?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 34,
    "name": "لیموناد خانگی",
    "cat": "نوشیدنی",
    "price": 70000,
    "desc": "لیموترش تازه، نعناع و شیرینی متعادل",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1513558161293-cafd765edfd7?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 35,
    "name": "چای ایرانی",
    "cat": "نوشیدنی",
    "price": 40000,
    "desc": "چای دم‌کشیدهٔ ایرانی با نبات",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 36,
    "name": "کاکائو و خرما",
    "cat": "دسر",
    "price": 85000,
    "desc": "خرمای شیرین با روکش کاکائو و مغز گردو",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 37,
    "name": "شله‌زرد",
    "cat": "دسر",
    "price": 80000,
    "desc": "دسر برنج و زعفران با گلاب و دارچین",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 38,
    "name": "کیک خرما و گردو",
    "cat": "دسر",
    "price": 110000,
    "desc": "کیک خانگی با خرما، گردو و عطر دارچین",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85"
  },
  {
    "id": 39,
    "name": "باقلوا و چای",
    "cat": "دسر",
    "price": 120000,
    "desc": "باقلوا با مغز پسته، همراه چای ایرانی",
    "tag": "",
    "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85"
  }
 ];
const defaultDishes=dishes.map(d=>({...d}));
try{const saved=localStorage.getItem("khanehTaamMenu");if(saved){const parsed=JSON.parse(saved);if(Array.isArray(parsed)&&parsed.length)dishes.splice(0,dishes.length,...parsed)}}catch(e){}
let selectedCategory="همه",cart={};const $=id=>document.getElementById(id);const money=n=>new Intl.NumberFormat('fa-IR').format(n)+" تومان";
function renderDishes(){let allBtn=document.querySelector('[data-category="همه"]');if(allBtn)allBtn.innerHTML="همهٔ منو <span>"+new Intl.NumberFormat("fa-IR").format(dishes.length)+"</span>";let q=$("searchInput").value.trim();let list=dishes.filter(d=>(selectedCategory==="همه"||d.cat===selectedCategory)&&(`${d.name} ${d.desc} ${d.cat}`).includes(q));let sort=$("sortSelect").value;if(sort==="low")list.sort((a,b)=>a.price-b.price);if(sort==="high")list.sort((a,b)=>b.price-a.price);$("resultsCount").textContent=new Intl.NumberFormat('fa-IR').format(list.length)+" انتخاب برای تو";$("dishGrid").innerHTML=list.length?list.map(d=>`<article class="dish-card"><div class="dish-image"><img loading="lazy" src="${d.img}" alt="${d.name}">${d.tag?`<span class="dish-tag">${d.tag}</span>`:""}</div><div class="dish-content"><div class="dish-top"><h3>${d.name}</h3></div><p class="dish-desc">${d.desc}</p><div class="dish-bottom"><span class="price">${money(d.price)}</span><button class="add-btn" data-add="${d.id}" aria-label="افزودن ${d.name}">+</button></div></div></article>`).join(""):`<div class="empty-results">غذایی با این مشخصات پیدا نشد. جست‌وجوی دیگری را امتحان کن.</div>`;document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>add(+b.dataset.add));}
function add(id){cart[id]=(cart[id]||0)+1;renderCart();toast("به سبد سفارش اضافه شد")}
function renderCart(){let entries=Object.entries(cart).filter(([id,q])=>q>0);let count=entries.reduce((s,[id,q])=>s+q,0);$("cartCount").textContent=new Intl.NumberFormat('fa-IR').format(count);$("cartTotal").textContent=money(entries.reduce((s,[id,q])=>s+dishes.find(d=>d.id===+id).price*q,0));$("cartItems").innerHTML=entries.length?entries.map(([id,q])=>{let d=dishes.find(x=>x.id===+id);return `<div class="cart-item"><img src="${d.img}" alt=""><div><h4>${d.name}</h4><small>${money(d.price)}</small><div class="quantity"><button data-dec="${id}" aria-label="کم کردن">−</button><span>${new Intl.NumberFormat('fa-IR').format(q)}</span><button data-inc="${id}" aria-label="زیاد کردن">+</button></div></div><button class="remove" data-remove="${id}" aria-label="حذف">×</button></div>`}).join(""):`<div class="empty-cart">سبد شما هنوز خالی است.<small>از منو یک طعم دوست‌داشتنی انتخاب کن.</small></div>`;document.querySelectorAll("[data-inc]").forEach(b=>b.onclick=()=>{cart[b.dataset.inc]++;renderCart()});document.querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>{let id=b.dataset.dec;cart[id]--;if(cart[id]<=0)delete cart[id];renderCart()});document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{delete cart[b.dataset.remove];renderCart()});}
function openCart(){$("cartDrawer").classList.add("open");$("overlay").classList.add("open");$("cartDrawer").setAttribute("aria-hidden","false")}function closeCart(){$("cartDrawer").classList.remove("open");$("overlay").classList.remove("open");$("cartDrawer").setAttribute("aria-hidden","true")}
let toastTimer;function toast(msg){$("toast").textContent=msg;$("toast").classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>$("toast").classList.remove("show"),2100)}
function openAdmin(){$("adminPanel").classList.add("open");renderAdmin()}
function closeAdmin(){$("adminPanel").classList.remove("open")}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function persistMenu(){localStorage.setItem("khanehTaamMenu",JSON.stringify(dishes));renderDishes();renderCart();renderAdmin()}
function renderAdmin(){const el=$("adminRows");if(!el)return;el.innerHTML=dishes.map(d=>`<div class="admin-row"><div><strong>${esc(d.name)}</strong><small>${esc(d.cat)} · ${money(d.price)}</small></div><div class="admin-actions"><button data-edit="${d.id}">ویرایش</button><button class="danger" data-del="${d.id}">حذف</button></div></div>`).join("");$("adminCount").textContent=new Intl.NumberFormat("fa-IR").format(dishes.length)+" آیتم";el.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>editDish(+b.dataset.edit));el.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{if(confirm("این آیتم حذف شود؟")){let i=dishes.findIndex(d=>d.id===+b.dataset.del);if(i>=0)dishes.splice(i,1);persistMenu()}})}
function editDish(id){const d=id?dishes.find(x=>x.id===id):{id:Math.max(0,...dishes.map(x=>x.id))+1,name:"",cat:"غذای اصلی",price:0,desc:"",tag:"",img:""};$("dishId").value=d.id;$("dishName").value=d.name;$("dishCategory").value=d.cat;$("dishPrice").value=d.price;$("dishDesc").value=d.desc;$("dishTag").value=d.tag||"";$("dishImage").value=d.img||"";$("dishEditor").classList.add("open")}
function closeDish(){ $("dishEditor").classList.remove("open") }
$("openAdmin").onclick=openAdmin;$("closeAdmin").onclick=closeAdmin;$("addDish").onclick=()=>editDish(0);$("cancelDish").onclick=closeDish;
$("dishForm").onsubmit=e=>{e.preventDefault();const d={id:+$("dishId").value,name:$("dishName").value.trim(),cat:$("dishCategory").value,price:Math.max(0,+$("dishPrice").value||0),desc:$("dishDesc").value.trim(),tag:$("dishTag").value.trim(),img:$("dishImage").value.trim()};const i=dishes.findIndex(x=>x.id===d.id);if(i>=0)dishes[i]=d;else dishes.push(d);persistMenu();closeDish();toast("منو ذخیره شد")};
$("exportMenu").onclick=()=>{const blob=new Blob([JSON.stringify(dishes,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="khaneh-taam-menu.json";a.click();URL.revokeObjectURL(a.href)};
$("importMenu").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const data=JSON.parse(r.result);if(!Array.isArray(data)||!data.every(d=>d.name&&d.cat&&Number.isFinite(+d.price)))throw 0;dishes.splice(0,dishes.length,...data);persistMenu();toast("منو وارد شد")}catch(err){alert("فایل JSON منو معتبر نیست")}};r.readAsText(f);e.target.value=""};
$("categories").onclick=e=>{let b=e.target.closest("[data-category]");if(!b)return;selectedCategory=b.dataset.category;document.querySelectorAll(".category").forEach(x=>x.classList.toggle("active",x===b));renderDishes()};$("searchInput").oninput=renderDishes;$("sortSelect").onchange=renderDishes;$("openCart").onclick=openCart;$("closeCart").onclick=closeCart;$("overlay").onclick=closeCart;$("featuredAdd").onclick=()=>add(2);$("checkout").onclick=()=>toast(Object.keys(cart).length?"این نسخه نمایشی است؛ سفارش واقعی ثبت نمی‌شود.":"اول یک غذا به سبد اضافه کن.");$("mobileMenu").onclick=()=>{document.querySelector("#menu").scrollIntoView({behavior:"smooth"});toast("برای انتخاب غذا، دسته‌بندی دلخواهت را لمس کن.")};renderDishes();renderCart();