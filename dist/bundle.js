(()=>{"use strict";const e=function(e){const t=document.createElement("a");return t.style.marginRight="15px",t.href=e.href,t.textContent=e.label,t.onclick=function(e){e.preventDefault(),i({path:new URL(e.target.href).pathname}),r()},t},t=function(){const t=function(){const t=e({href:"/home",label:"Home"}),n=e({href:"/input-product",label:"Input Product"}),a=e({href:"/favorite",label:"Favorite"}),o=e({href:"/search-contact",label:"Search Contact"}),c=e({href:"/about",label:"About"}),i=document.createElement("div");return i.append(t),i.append(c),i.append(n),i.append(o),i.append(a),i}(),n=document.createElement("p");n.textContent="Cari product Anda :";const a=document.createElement("div");return a.append(t),a.append(n),a.append(function(){const e=document.createElement("input");e.id="input",e.value=c.inputValue,e.oninput=function(e){i({inputValue:e.target.value})},e.placeholder="Input your name";const t=document.createElement("button");t.disabled=c.isLoading,t.textContent="Clear",t.onclick=function(){i({inputValue:""})};const n=document.createElement("div");return n.append(e),n.append(t),n}()),a.append(function(){const e=document.createElement("div"),t=document.createElement("button");t.textContent="<--Prev",t.disabled=c.skipItem<=0||c.isLoading,t.onclick=()=>{i({skipItem:c.skipItem-c.limitItem})};const n=document.createElement("button");n.textContent="Next--\x3e";const a=c.total-c.limitItem;n.disabled=c.skipItem>=a||c.isLoading,n.onclick=()=>{i({skipItem:c.skipItem+c.limitItem})};const o=document.createElement("label");o.textContent="Limit",o.style.marginLeft="20px";const l=document.createElement("select");return l.disabled=c.isLoading,l.onchange=e=>{i({limitItem:Number(e.target.value)})},[2,5,10,20,30].forEach((e=>{const t=document.createElement("option");t.textContent=e,t.value=e,l.appendChild(t)})),l.value=c.limitItem,e.style.marginTop="20px",e.appendChild(t),e.appendChild(n),e.appendChild(o),e.append(l),e}()),a.append(function(){const e=document.createElement("ul");if(e.textContent="Daftar Produk",e.style.fontSize="20px",c.isLoading){const t=document.createElement("h1");t.textContent="Loading...",e.append(t)}else if(""!==c.errorMessage){const t=document.createElement("h1");t.textContent=c.errorMessage,e.append(t)}else if(0===c.products.length){const t=document.createElement("h1");t.textContent="produk tidak ada",e.append(t)}else c.products.forEach((t=>{const n=document.createElement("li");n.textContent=t.title;const a=document.createElement("span");a.textContent=t.category,e.append(n),e.append(a)}));const t=document.createElement("div");return t.append(e),t}()),a},n=function(e){const t=document.createElement("p");t.textContent=`${e.firstName} ${e.maidenName} ${e.lastName}`;const n=document.createElement("p");n.textContent=e.email;const a=document.createElement("button");a.textContent="add to favorite",a.onclick=function(){i({favoriteContacts:c.favoriteContacts.concat({id:e.id,firstName:e.firstName,lastName:e.lastName,maidenName:e.maidenName,email:e.email})})};const o=document.createElement("button");o.textContent="remove from favorite",o.onclick=function(){i({favoriteContacts:c.favoriteContacts.filter((({id:t})=>t!=e.id))})};const l=c.favoriteContacts.some((({id:t})=>e.id===t)),r=document.createElement("li");return r.appendChild(t),r.appendChild(n),r.appendChild(l?o:a),r},a=function(){const a=t(),o=function(){const t=e({href:"/home",label:"Kembali ke Home"}),n=document.createElement("h1");n.textContent="Ini Halaman About";const a=document.createElement("div");return a.append(t),a.append(n),a}(),l=function(){const t=e({href:"/home",label:"Kembali ke Home"}),n=document.createElement("form");n.style.display="table-caption",n.style.marginTop="20px";const a=document.createElement("label");a.textContent="Nama Barang";const o=document.createElement("input");o.placeholder="ketik nama barang",o.type="text";const l=document.createElement("label");l.texsettContent="Harga";const r=document.createElement("input");r.placeholder="ketik harga";const m=document.createElement("input");m.value="Submit",m.type="submit",n.addEventListener("submit",(e=>{if(e.preventDefault(),i({inputName:o.value,inputPrice:r.value}),c.inputName&&""!==c.inputPrice){let e={nameItem:c.inputName,priceItem:c.inputPrice};i({inputProducts:c.inputProducts.concat(e)})}}));const p=document.createElement("h3");p.textContent="List barang";const d=document.createElement("ul");d.style.width="200px",c.inputProducts.forEach(((e,t)=>{const n=document.createElement("li");n.style.display="flex",n.style.justifyContent="space-between";const a=document.createElement("p");a.style.margin="0",a.textContent=e.nameItem;const o=document.createElement("span");o.textContent=e.priceItem;const l=document.createElement("button");l.textContent="Hapus",l.onclick=()=>{const e=c.inputProducts,n=t;if(n>=0&&n<e.length){const t=e.filter(((e,t)=>t!==n));i({inputProducts:t})}},d.appendChild(n),n.appendChild(a),n.appendChild(o),n.appendChild(l)}));const u=document.createElement("div");return u.append(t),u.append(n),u.append(p),u.append(d),n.appendChild(a),n.appendChild(o),n.appendChild(l),n.appendChild(r),n.appendChild(m),u}(),r=function(){const t=e({href:"/search-contact",label:"Kembali ke Search Contact"}),a=document.createElement("ol");a.append(...c.favoriteContacts.map((e=>n({id:e.id,firstName:e.firstName,maidenName:e.maidenName,lastName:e.lastName,email:e.email}))));const o=document.createElement("p");o.textContent="No data found";const i=document.createElement("div");return i.appendChild(t),0===c.favoriteContacts.length?i.appendChild(o):i.appendChild(a),i}(),m=function(){const t=e({href:"/home",label:"Kembali ke Home"}),a=e({href:"/favorite",label:"Favorite"}),o=document.createElement("ol");o.append(...c.contacts.map((e=>n({id:e.id,firstName:e.firstName,maidenName:e.maidenName,lastName:e.lastName,email:e.email}))));const l=document.createElement("input");l.id="search",l.placeholder="Search a name",l.value=c.inputValueFavorite,l.oninput=function(e){i({inputValueFavorite:e.target.value})};const r=document.createElement("button");r.textContent="Reset",r.onclick=function(){i({inputValueFavorite:""})};const m=document.createElement("p");m.textContent="No data found";const p=document.createElement("p");p.textContent=c.errorMessage;const d=document.createElement("p");d.textContent="Loading...";const u=document.createElement("div");u.appendChild(t),u.appendChild(a);const s=document.createElement("div");return u.append(s),s.append(l),s.append(r),c.isLoading?u.appendChild(d):""!==c.errorMessage?u.appendChild(p):0===c.contacts.length?u.appendChild(m):u.appendChild(o),u}(),p=function(){const t=e({href:"/home",label:"Kembali ke Home"}),n=document.createElement("h1");n.textContent="Not Found Page";const a=document.createElement("div");return a.append(t),a.append(n),a}();return"/home"===c.path?a:"/input-product"===c.path?l:"/favorite"===c.path?r:"/search-contact"===c.path?m:"/about"===c.path?o:p};let o,c={inputValue:localStorage.getItem("inputValue")??"",path:location.pathname,products:[],limitItem:5,skipItem:0,total:0,isLoading:!1,errorMessage:"",inputProducts:JSON.parse(localStorage.getItem("productItem"))||[],inputPrice:"",inputName:"",inputValueFavorite:localStorage.getItem("inputValueFavorite")??"",contacts:[],favoriteContacts:JSON.parse(localStorage.getItem("favoriteContacts"))??[]};function i(e){const t={...c},n={...c,...e};c=n,r(),l(t,n)}function l(e,t){if(e.inputProducts!==t.inputProducts&&localStorage.setItem("productItem",JSON.stringify(t.inputProducts)),e.inputValue!==t.inputValue&&i({skipItem:0}),e.inputValue!==t.inputValue||e.skipItem!==t.skipItem||e.limitItem!==t.limitItem){localStorage.setItem("inputValue",t.inputValue);const e=`https://dummyjson.com/products/search?limit=${t.limitItem}&skip=${t.skipItem}&select=title,category&q=${t.inputValue}`;i({isLoading:!0}),fetch(e).then((e=>e.ok?e.json():Promise.reject({status:e.status}))).then((e=>{i({products:e.products,total:e.total,errorMessage:"",isLoading:!1})})).catch((e=>{i({errorMessage:"error fetching",isLoading:!1,products:[]})}))}e.path!==t.path&&history.pushState(null,"",t.path),e.inputValueFavorite!=t.inputValueFavorite&&(localStorage.setItem("inputValueFavorite",t.inputValueFavorite),o&&clearTimeout(o),i({isLoading:!0}),o=setTimeout((()=>{fetch(`https://dummyjson.com/users/search?q=${t.inputValueFavorite}`).then((e=>e.json())).then((e=>i({contacts:e.users,errorMessage:""}))).catch((e=>i({contacts:[],errorMessage:e.message}))).finally((()=>i({isLoading:!1})))}),600)),e.favoriteContacts!=t.favoriteContacts&&localStorage.setItem("favoriteContacts",JSON.stringify(t.favoriteContacts))}function r(){const e=document.getElementById("root"),t=a(),n=document.activeElement.id,o=document.activeElement.selectionStart,c=document.activeElement.selectionEnd;if(e.innerHTML="",e.append(t),n){const e=document.getElementById(n);e.focus(),e.selectionStart=o,e.selectionEnd=c}}r(),l({},c)})();