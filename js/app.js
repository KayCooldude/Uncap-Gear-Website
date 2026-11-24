const CATS=["Camera","Lens","Accessories","Monitors","Video Transmission","Power & Batteries","Lighting","Lighting Accessories","Sound/Audio","Stands","Camera Stabilisation","Textiles"];
/* Per item: img = product photo (assets/images/name.jpg), gif = 360° GIF (assets/gifs/name.gif). Leave empty to show the category illustration. */
const COMPANY_EMAIL="hello@uncapgear.example"; /* CHANGE: the address that receives quotations */
const QUOTE_ENDPOINT=""; /* optional: URL of a server or form service that emails the PDF automatically */
const P=[
["Camera","Sony FX3 body",950,1],["Camera","Canon C70 body",1200,0],
["Lens","Sigma 24–70mm f/2.8",450,1],["Lens","Sony 85mm f/1.4 GM",520,0],
["Accessories","Matte box kit",280,0],["Accessories","Follow focus",350,1],
["Monitors","SmallHD 7\" monitor",300,0],["Monitors","Atomos Ninja V",320,1],
["Video Transmission","Hollyland Mars 4K",600,0],["Video Transmission","Teradek Bolt 500",1400,0],
["Power & Batteries","V-mount battery 98Wh",90,1],["Power & Batteries","Dual V-mount charger",60,0],
["Lighting","Aputure 300d II",650,1],["Lighting","Amaran 200x S",420,0],
["Lighting Accessories","Light Dome II softbox",180,0],["Lighting Accessories","Barn door set",90,0],
["Sound/Audio","Rode Wireless Pro",260,1],["Sound/Audio","Sennheiser MKH 416 + boom",380,0],
["Stands","C-stand with arm",120,0],["Stands","Heavy-duty tripod",250,1],
["Camera Stabilisation","DJI RS 3 Pro",480,1],["Camera Stabilisation","Steadicam shoulder rig",700,0],
["Textiles","Black duvetyne 3×3m",110,0],["Textiles","Diffusion silk 2×2m",95,0]
].map((a,i)=>({id:i,cat:a[0],name:a[1],price:a[2],top:a[3],gif:"",img:"",views:[],yt:"",desc:"",how:null}));
const ICONS={"Camera": "<rect x=\"8\" y=\"30\" width=\"84\" height=\"52\" rx=\"8\"/><rect x=\"30\" y=\"18\" width=\"26\" height=\"14\" rx=\"3\"/><circle cx=\"50\" cy=\"56\" r=\"20\" fill=\"#c8f854\"/><circle cx=\"50\" cy=\"56\" r=\"12\"/>", "Lens": "<rect x=\"24\" y=\"28\" width=\"52\" height=\"44\" rx=\"6\"/><rect x=\"12\" y=\"36\" width=\"12\" height=\"28\" rx=\"2\"/><rect x=\"76\" y=\"36\" width=\"12\" height=\"28\" rx=\"2\"/><path d=\"M38 28v44M50 28v44M62 28v44\" stroke=\"#c8f854\" stroke-width=\"3\"/>", "Accessories": "<rect x=\"22\" y=\"24\" width=\"56\" height=\"52\" rx=\"5\"/><rect x=\"34\" y=\"36\" width=\"32\" height=\"28\" rx=\"2\" fill=\"#c8f854\"/><rect x=\"8\" y=\"44\" width=\"14\" height=\"12\" rx=\"2\"/><rect x=\"78\" y=\"44\" width=\"14\" height=\"12\" rx=\"2\"/>", "Monitors": "<rect x=\"10\" y=\"20\" width=\"80\" height=\"52\" rx=\"5\"/><rect x=\"17\" y=\"27\" width=\"66\" height=\"38\" rx=\"2\" fill=\"#c8f854\"/><path d=\"M44 36l16 10-16 10z\"/><rect x=\"38\" y=\"76\" width=\"24\" height=\"5\" rx=\"2\"/>", "Video Transmission": "<circle cx=\"50\" cy=\"24\" r=\"7\"/><path d=\"M50 30v52\" stroke=\"currentColor\" stroke-width=\"7\" fill=\"none\"/><g stroke=\"currentColor\" stroke-width=\"5\" stroke-linecap=\"round\" fill=\"none\"><path d=\"M34 34A22 22 0 0 1 34 14\"/><path d=\"M66 14A22 22 0 0 1 66 34\"/><path d=\"M26 42A34 34 0 0 1 26 6\"/><path d=\"M74 6A34 34 0 0 1 74 42\"/></g><rect x=\"34\" y=\"80\" width=\"32\" height=\"6\" rx=\"2\"/>", "Power & Batteries": "<rect x=\"14\" y=\"32\" width=\"64\" height=\"42\" rx=\"6\"/><rect x=\"78\" y=\"45\" width=\"9\" height=\"16\" rx=\"2\"/><path d=\"M52 38l-16 20h13l-5 14 18-22H49z\" fill=\"#c8f854\"/>", "Lighting": "<circle cx=\"48\" cy=\"40\" r=\"28\"/><circle cx=\"48\" cy=\"40\" r=\"15\" fill=\"#c8f854\"/><rect x=\"42\" y=\"68\" width=\"12\" height=\"16\" rx=\"2\"/><rect x=\"30\" y=\"82\" width=\"36\" height=\"5\" rx=\"2\"/>", "Lighting Accessories": "<path d=\"M18 26h64L70 66H30z\"/><path d=\"M34 38h32M32 50h36\" stroke=\"#c8f854\" stroke-width=\"3\"/><rect x=\"46\" y=\"66\" width=\"8\" height=\"18\"/><rect x=\"32\" y=\"82\" width=\"36\" height=\"5\" rx=\"2\"/>", "Sound/Audio": "<rect x=\"37\" y=\"12\" width=\"26\" height=\"46\" rx=\"13\"/><path d=\"M26 46a24 24 0 0 0 48 0\" stroke=\"currentColor\" stroke-width=\"5\" fill=\"none\"/><rect x=\"47\" y=\"70\" width=\"6\" height=\"14\"/><rect x=\"33\" y=\"82\" width=\"34\" height=\"5\" rx=\"2\"/><path d=\"M44 24h12M44 32h12M44 40h12\" stroke=\"#c8f854\" stroke-width=\"3\"/>", "Stands": "<circle cx=\"50\" cy=\"14\" r=\"8\"/><path d=\"M50 20v28M50 48L22 88M50 48L78 88M50 48V88\" stroke=\"currentColor\" stroke-width=\"6\" stroke-linecap=\"round\" fill=\"none\"/>", "Camera Stabilisation": "<path d=\"M22 66a30 30 0 0 1 56 0\" stroke=\"currentColor\" stroke-width=\"7\" fill=\"none\" stroke-linecap=\"round\"/><rect x=\"34\" y=\"30\" width=\"32\" height=\"24\" rx=\"5\"/><circle cx=\"50\" cy=\"42\" r=\"6\" fill=\"#c8f854\"/><rect x=\"43\" y=\"66\" width=\"14\" height=\"22\" rx=\"4\"/>", "Textiles": "<path d=\"M16 26c11-9 21 9 34 0s23 9 34 0v50c-11 9-21-9-34 0s-23 9-34 0z\"/><path d=\"M28 42c12 8 22-8 44 0M28 58c12 8 22-8 44 0\" stroke=\"#c8f854\" stroke-width=\"3\" fill=\"none\"/>"};
const ico=c=>`<svg viewBox="0 0 100 100" fill="currentColor">${ICONS[c]||ICONS.Camera}</svg>`;
const $=s=>document.querySelector(s),R=n=>"R"+n.toLocaleString("en-ZA");
let cart={},cat="All",q="";
try{cart=JSON.parse(localStorage.getItem("uq")||"{}")}catch(e){}
const save=()=>{try{localStorage.setItem("uq",JSON.stringify(cart))}catch(e){}};
const card=p=>`<article class="card"><button class="thumb" data-v="${p.id}" aria-label="View ${p.name} details">${p.gif||p.img?`<img src="${p.gif||p.img}" alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover">`:ico(p.cat)}<i>View</i></button><div class="cb"><small>${p.cat}</small><h3><button class="nm" data-v="${p.id}">${p.name}</button></h3><div class="price">${R(p.price)} <span>/ day</span></div><button class="add" data-a="${p.id}">Add to quotation</button></div></article>`;
function renderCat(){
  $("#filters").innerHTML=["All",...CATS].map(c=>`<button class="chip ${c===cat?"on":""}" data-c="${c}" aria-pressed="${c===cat}">${c}</button>`).join("");
  const l=P.filter(p=>(cat==="All"||p.cat===cat)&&p.name.toLowerCase().includes(q));
  $("#catGrid").innerHTML=l.length?l.map(card).join(""):'<p class="empty">No gear matches. Try another category or search.</p>';if(typeof reveal==="function")reveal("#catGrid");
}
function renderHome(){
  
  $("#catTiles").innerHTML=CATS.map(c=>`<button class="ctile" data-k="${c}"><span class="timg">${ico(c)}</span><span class="pill">${c}</span></button>`).join("");
  $("#hiredGrid").innerHTML=P.filter(p=>p.top).map(card).join("");
  const w=CATS.join("  ·  ");$("#marq").innerHTML=(w+"  ·  ").repeat(4);
}
/* dates */
const iso=d=>d.toISOString().slice(0,10),addD=(s,n)=>{const d=new Date(s+"T00:00");d.setDate(d.getDate()+n);return iso(d)};
const diff=(a,b)=>Math.round((new Date(b+"T00:00")-new Date(a+"T00:00"))/864e5);
$("#start").value=iso(new Date());$("#start").min=iso(new Date());
const syncEnd=()=>{$("#end").value=addD($("#start").value,Math.max(1,+$("#days").value||1)-1)};syncEnd();
$("#start").oninput=()=>{syncEnd();renderQ()};
$("#days").oninput=()=>{syncEnd();renderQ()};
$("#end").oninput=()=>{const n=diff($("#start").value,$("#end").value)+1;if(n>=1)$("#days").value=n;renderQ()};
function renderQ(){
  const ids=Object.keys(cart),days=Math.max(1,+$("#days").value||1);
  $("#badge").textContent=ids.reduce((s,i)=>s+cart[i],0);
  $("#qItems").innerHTML=ids.length?ids.map(i=>{const p=P[i];return`<div class="row"><div class="mini">${ico(p.cat)}</div><div><b class="pn">${p.name}</b><br><small style="color:var(--muted)">${p.cat} · ${R(p.price)} / day</small><br><span class="qty"><button data-m="${i}" aria-label="Fewer">−</button><span>${cart[i]}</span><button data-p="${i}" aria-label="More">+</button></span> <button class="rm" data-r="${i}">Remove</button></div><strong>${R(p.price*cart[i]*days)}</strong></div>`}).join(""):'<p class="empty">Your quotation is empty.<br><a href="#catalogue">Browse the rental catalogue</a> to add gear.</p>';
  const daily=ids.reduce((s,i)=>s+P[i].price*cart[i],0),fees=+$("#cm").value+ +$("#dm").value,sub=daily*days,vat=Math.round((sub+fees)*.15);
  $("#sum").innerHTML=`<div><span>Gear per day</span><span>${R(daily)}</span></div><div><span>× ${days} day${days>1?"s":""}</span><span>${R(sub)}</span></div><div><span>Delivery / collection</span><span>${R(fees)}</span></div><div><span>VAT (15%)</span><span>${R(vat)}</span></div><div class="t"><span>Total</span><span>${R(sub+fees+vat)}</span></div>`;
  save();
}
["cm","dm"].forEach(i=>$("#"+i).onchange=renderQ);
const DESC={"Camera": "A professional camera body for film, video and stills. Rent it by the day for shoots of any size, ready to pair with your lenses and accessories.", "Lens": "A quality lens to shape the look of your image. Choose it for sharpness, depth of field and low-light performance.", "Accessories": "Rigging and support accessories that make your camera setup more practical on set.", "Monitors": "A bright, accurate monitor for framing, focus and exposure checks while you shoot.", "Video Transmission": "A wireless video system that sends a live feed from the camera to monitors for directors, clients and focus pullers.", "Power & Batteries": "Reliable power to keep your camera, lights and accessories running through a full shoot day.", "Lighting": "A powerful, controllable light for interviews, drama, product and event work.", "Lighting Accessories": "Modifiers that soften, shape and control your light for a more flattering result.", "Sound/Audio": "Clean audio gear for dialogue, interviews and on-set recording.", "Stands": "Sturdy support for lights, flags, microphones and cameras.", "Camera Stabilisation": "Stabilisation gear for smooth, steady handheld and moving shots.", "Textiles": "Production fabrics for controlling light, backgrounds and reflections on set."};
const HOW={"Camera": ["Fully charge the batteries and format your memory cards before the shoot.", "Attach your lens and check it locks into place.", "Set resolution, frame rate and shutter angle before you start recording.", "Check focus and exposure on a monitor, then record a short test clip.", "Power down, remove the cards and clean the body before returning it."], "Lens": ["Switch the camera off before changing lenses.", "Align the mount marks and twist until it clicks.", "Set the aperture and focus mode, then check focus on a close detail.", "Keep the caps on whenever the lens is not in use.", "Clean only with a lens cloth and blower."], "Accessories": ["Mount the base plate or rig on a stable surface first.", "Tighten all clamps and rods by hand, then check nothing moves.", "Balance the weight so the camera does not tilt.", "Do a quick movement test before the take."], "Monitors": ["Mount the monitor on an arm or cage and power it up.", "Connect the camera's HDMI or SDI cable and lock it in place.", "Turn on focus peaking, false colour or the waveform.", "Adjust brightness for your shooting conditions."], "Video Transmission": ["Charge the transmitter and receiver, and attach the antennas.", "Connect the transmitter to the camera's video output.", "Power on both units and pair them on the same channel.", "Keep a clear line of sight and test the signal before recording."], "Power & Batteries": ["Charge fully before the shoot and check the indicator.", "Slide the battery onto the plate until it locks.", "Rotate your spare batteries so they wear evenly.", "Never cover the vents or charge on soft surfaces."], "Lighting": ["Set up the stand first and make sure it is stable and sandbagged.", "Mount the light and connect power.", "Set brightness and colour temperature, then aim.", "Let the unit cool before packing."], "Lighting Accessories": ["Fit the modifier to the light's mount until it clicks in.", "Place it close to the subject for softer light.", "Use barn doors or flags to control spill.", "Let the light cool before removing the modifier."], "Sound/Audio": ["Insert fresh or fully charged batteries.", "Mount the microphone and connect it to the recorder or camera.", "Set the input level so peaks stay in the safe range.", "Monitor with headphones and run a test recording."], "Stands": ["Open the legs fully and lock each leg clamp.", "Level the head and tighten all knobs.", "Use sandbags on the legs when lights or flags are mounted.", "Lower the height before moving the stand."], "Camera Stabilisation": ["Mount the camera and balance it before powering on.", "Power on the stabiliser and run its setup.", "Choose the follow mode that suits your shot.", "Move with bent knees and smooth steps."], "Textiles": ["Choose the fabric for the job: black to block, diffusion to soften.", "Attach it to a frame or stands with clamps.", "Keep it clear of hot lights.", "Fold it neatly and keep it dry for return."]};
/* product detail: views, description, how to use */
function showP(id,vi){
  const p=P[id],imgs=p.views.length?p.views:(p.img?[p.img]:null);
  const tabs=imgs?[...imgs.map((u,i)=>["View "+(i+1),u]),["360°",p.gif||"spin"]]:[["Front",""],["Side","rotateY(-55deg)"],["Top","rotateX(55deg)"],["Back","scaleX(-1)"],["360°","spin"]];
  const cur=tabs[vi]||tabs[0],v=cur[1];
  const stage=v==="spin"?(p.gif?`<img src="${p.gif}" alt="${p.name} 360° view">`:`<div class="spin3">${ico(p.cat)}</div>`):(imgs?`<img src="${v}" alt="${p.name}">`:`<div class="ill" style="transform:${v}">${ico(p.cat)}</div>`);
  const yt=p.yt||"https://www.youtube.com/results?search_query="+encodeURIComponent(p.name+" tutorial");
  $("#pd").innerHTML=`<button class="x" onclick="dlg.close()" aria-label="Close">×</button><div class="pdg"><div><div class="stage">${stage}</div><div class="thumbs">${tabs.map((t,i)=>`<button class="${i===tabs.indexOf(cur)?"on":""}" data-w="${id},${i}">${t[0]}</button>`).join("")}</div></div>
  <div class="pinfo"><small>${p.cat}</small><h2>${p.name}</h2><div class="price">${R(p.price)} <span>/ day</span></div><p>${p.desc||DESC[p.cat]}</p>${imgs?"":'<p class="hint">Illustrative views. Add product photos and a 360° GIF to show the real item.</p>'}<button class="btn" style="border:0;margin-top:8px" data-a="${p.id}">Add to quotation</button></div>
  <div class="how"><h3>How to use</h3><ol>${(p.how||HOW[p.cat]).map(x=>`<li>${x}</li>`).join("")}</ol><a class="btn" target="_blank" rel="noopener" href="${yt}">Watch the video tutorial on YouTube</a></div></div>`;
}
function toast(t){const e=$("#toast");e.textContent=t;e.classList.add("s");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("s"),1800)}
document.addEventListener("click",e=>{
  const t=e.target.closest("button");if(!t)return;const d=t.dataset;
  if(d.a!==undefined){cart[d.a]=(cart[d.a]||0)+1;renderQ();toast(P[d.a].name+" added to quotation")}
  if(d.c){cat=d.c;renderCat()}
  if(d.p!==undefined){cart[d.p]++;renderQ()}
  if(d.m!==undefined){if(--cart[d.m]<1)delete cart[d.m];renderQ()}
  if(d.r!==undefined){delete cart[d.r];renderQ()}
  if(d.v!==undefined){showP(+d.v,0);if(!dlg.open)dlg.showModal()}
  if(d.w!==undefined){const[a,b]=d.w.split(",");showP(+a,+b)}
  if(d.k){cat=d.k;renderCat();document.getElementById("catalogue").scrollIntoView({behavior:"smooth"})}
});
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
$("#search").oninput=e=>{q=e.target.value.toLowerCase();renderCat()};
$("#send").onclick=()=>{
  const ids=Object.keys(cart),err=$("#err"),ok=$("#ok");err.textContent="";ok.textContent="";
  const name=$("#cn").value.trim(),email=$("#ce").value.trim();
  if(!ids.length){err.textContent="Add at least one item before sending a quotation.";return}
  if(!name||!/^\S+@\S+\.\S+$/.test(email)){err.textContent="Please enter your name and a valid email address.";return}
  if(!(window.jspdf&&window.jspdf.jsPDF)){err.textContent="The PDF tool could not load. Check your internet connection and try again.";return}
  const days=Math.max(1,+$("#days").value||1),daily=ids.reduce((s,i)=>s+P[i].price*cart[i],0),fees=+$("#cm").value+ +$("#dm").value,sub=daily*days,vat=Math.round((sub+fees)*.15);
  const c={ids,days,daily,fees,sub,vat,total:sub+fees+vat};
  const info={name,email,phone:$("#cp").value.trim(),notes:$("#cx").value.trim(),start:$("#start").value,end:$("#end").value,cm:$("#cm").selectedOptions[0].text,dm:$("#dm").selectedOptions[0].text};
  const ref="UQ-"+Date.now().toString().slice(-6),m=n=>"R"+Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ");
  const d=new window.jspdf.jsPDF({unit:"pt",format:"a4"}),W=595,M=40;
  d.setFillColor(200,248,84);d.rect(0,0,W,76,"F");d.setTextColor(10,10,10);d.setFont("helvetica","bold");d.setFontSize(24);d.text("UNCAP GEAR",M,46);
  d.setFontSize(12);d.text("RENTAL QUOTATION",W-M,38,{align:"right"});d.setFont("helvetica","normal");d.setFontSize(10);d.text(ref+"  |  "+new Date().toLocaleDateString("en-ZA"),W-M,54,{align:"right"});
  let y=108;d.setFontSize(11);
  const kv=(k,v)=>{d.setFont("helvetica","bold");d.text(k,M,y);d.setFont("helvetica","normal");d.text(String(v),M+110,y);y+=16};
  kv("Name",info.name);kv("Email",info.email);if(info.phone)kv("Phone",info.phone);kv("Collection date",info.start);kv("Drop-off date",info.end);kv("Rental days",days);kv("Collection",info.cm);kv("Return",info.dm);
  if(info.notes){const l=d.splitTextToSize(info.notes,W-2*M-110);d.setFont("helvetica","bold");d.text("Notes",M,y);d.setFont("helvetica","normal");d.text(l,M+110,y);y+=16*l.length}
  y+=16;
  const head=()=>{d.setFillColor(10,10,10);d.rect(M,y-13,W-2*M,22,"F");d.setTextColor(200,248,84);d.setFont("helvetica","bold");d.setFontSize(10);d.text("Item",M+8,y+2);d.text("Qty",330,y+2,{align:"right"});d.text("Per day",420,y+2,{align:"right"});d.text("Total",W-M-8,y+2,{align:"right"});d.setTextColor(10,10,10);d.setFont("helvetica","normal");d.setFontSize(10.5);y+=26};
  head();
  ids.forEach(i=>{const p=P[i],q=cart[i];if(y>760){d.addPage();y=50;head()}d.text(d.splitTextToSize(p.name,260)[0],M+8,y);d.text(String(q),330,y,{align:"right"});d.text(m(p.price),420,y,{align:"right"});d.text(m(p.price*q*days),W-M-8,y,{align:"right"});d.setDrawColor(220);d.line(M,y+7,W-M,y+7);y+=22});
  if(y>640){d.addPage();y=60}
  y+=10;
  const tot=(k,v)=>{d.setFont("helvetica","normal");d.setFontSize(11);d.text(k,340,y);d.text(v,W-M-8,y,{align:"right"});y+=18};
  tot("Gear per day",m(daily));tot("x "+days+" day"+(days>1?"s":""),m(sub));tot("Delivery / collection",m(fees));tot("VAT (15%)",m(vat));
  y+=4;d.setFillColor(200,248,84);d.rect(330,y-16,W-M-330,26,"F");d.setFont("helvetica","bold");d.setFontSize(14);d.text("TOTAL",340,y+2);d.text(m(c.total),W-M-8,y+2,{align:"right"});
  d.setFont("helvetica","normal");d.setFontSize(9);d.setTextColor(95,95,95);d.text("Estimate only. Final pricing and availability are confirmed by Uncap Gear. VAT at 15% is included in the total.",M,812);
  const file=new File([d.output("blob")],ref+".pdf",{type:"application/pdf"});
  d.save(ref+".pdf");
  const lines=ids.map(i=>"- "+cart[i]+" x "+P[i].name).join("\n");
  const body="Hello Uncap Gear,\n\nPlease find my quotation "+ref+" (PDF attached).\n\nName: "+name+"\nEmail: "+email+(info.phone?"\nPhone: "+info.phone:"")+"\nCollection: "+info.start+"\nDrop-off: "+info.end+" ("+days+" day"+(days>1?"s":"")+")\n\n"+lines+"\n\nTotal: "+m(c.total)+(info.notes?"\n\nNotes: "+info.notes:"")+"\n";
  const mail=()=>{location.href="mailto:"+COMPANY_EMAIL+"?subject="+encodeURIComponent("Quotation request "+ref+" - "+name)+"&body="+encodeURIComponent(body);ok.textContent="Your PDF was downloaded and an email to Uncap Gear was opened. Please attach the PDF "+ref+".pdf to it and send."};
  if(QUOTE_ENDPOINT){const fd=new FormData();fd.append("ref",ref);fd.append("name",name);fd.append("email",email);fd.append("phone",info.phone);fd.append("notes",info.notes);fd.append("total",m(c.total));fd.append("message",body);fd.append("quotation",file);
    fetch(QUOTE_ENDPOINT,{method:"POST",body:fd}).then(r=>{if(!r.ok)throw 0;ok.textContent="Quotation "+ref+" was sent to Uncap Gear. A PDF copy was downloaded to your device."}).catch(mail)}else mail();
};
$("#cf").onsubmit=e=>{e.preventDefault();e.target.reset();toast("Message sent. We'll reply within a day.")};
/* highlight the menu link of the section in view */
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll("nav a").forEach(a=>a.classList.toggle("on",a.dataset.p===e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll(".page").forEach(p=>spy.observe(p));
/* scroll reveal for cards, panels and text (plays once per element) */
const SEL=".sec-h p,.filters,.search,.panel,.card,.ctile";
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add("in");io.unobserve(t);setTimeout(()=>{t.classList.remove("rv","in");t.style.transitionDelay=""},1600)}}),{threshold:.12});
function reveal(sc){document.querySelectorAll(sc).forEach(r=>r.querySelectorAll(SEL).forEach(el=>{if(el.closest(".hero,dialog")||el.classList.contains("rv"))return;el.classList.add("rv");el.style.transitionDelay=[...el.parentNode.children].indexOf(el)%4*90+180+"ms";io.observe(el)}))}
$("#ann").textContent=("Rent by the day  ·  Collect in store or get it delivered  ·  Build your quotation in minutes  ·  ").repeat(8);
/* section animations: replay every time a section scrolls into view */
document.querySelectorAll(".sec-h h2").forEach(h=>{let k=0;h.innerHTML=h.textContent.trim().split(" ").map(w=>`<span class="w"><i style="--k:${k++}">${w}</i></span>`).join(" ")});
const sio=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle("in",e.isIntersecting)),{rootMargin:"0px 0px -12% 0px"});
document.querySelectorAll(".wrap,.cats").forEach(w=>{w.classList.add("sx");sio.observe(w)});
const bar=document.createElement("div");bar.className="pbar";document.body.append(bar);
addEventListener("scroll",()=>{bar.style.transform="scaleX("+scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)+")"},{passive:true});
renderHome();renderCat();renderQ();reveal("body");

/* category slider */
(function(){const tr=$("#catTiles"),pv=$("#cPrev"),nx=$("#cNext");
const upd=()=>{pv.disabled=tr.scrollLeft<4;nx.disabled=tr.scrollLeft>tr.scrollWidth-tr.clientWidth-4};
pv.onclick=()=>tr.scrollBy({left:-tr.clientWidth,behavior:"smooth"});
nx.onclick=()=>tr.scrollBy({left:tr.clientWidth,behavior:"smooth"});
tr.addEventListener("scroll",upd,{passive:true});addEventListener("resize",upd);upd();
let dn=false,sx=0,sl=0,mv=false;
tr.addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse")return;dn=true;sx=e.clientX;sl=tr.scrollLeft});
addEventListener("pointerup",()=>dn=false);
tr.addEventListener("pointermove",e=>{if(dn&&Math.abs(e.clientX-sx)>6){tr.style.scrollSnapType="none";tr.style.scrollBehavior="auto";mv=true;tr.scrollLeft=sl-(e.clientX-sx)}});
tr.addEventListener("pointerup",()=>{tr.style.scrollSnapType="";tr.style.scrollBehavior=""});
tr.addEventListener("click",e=>{if(mv){e.stopPropagation();e.preventDefault();mv=false}},true);})();
