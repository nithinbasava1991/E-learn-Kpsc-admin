import{r as o,u as B,d as k,j as t,M as E,T as l,b as m,G as b,C as N,e as T,f as p}from"./index-BHN5gOPI.js";import{I as F}from"./InfoOutlined-CYAz9j-c.js";import{e as V,g as P}from"./DashboardApi-CWqEGjuB.js";import{A as R}from"./Alert-Bdc_UWwK.js";const O=()=>{const[n,f]=o.useState([]),[d,y]=o.useState(!1),[u,j]=o.useState(null),[h,a]=o.useState(null),C=B(),{categoryId:i,categoryName:S}=C.state||{},c=JSON.parse(sessionStorage.getItem("user")),g={"Content-Type":"application/json",Authorization:`Bearer ${c==null?void 0:c.accessToken}`},w=k(),v=async()=>{try{const e=await V(g,i),s=(e==null?void 0:e.data)||[];f(s)}catch(e){console.error("Error fetching subcategories:",e),a("Failed to fetch subcategories. Please try again later.")}};o.useEffect(()=>{i&&v()},[i]);const D=()=>y(!0),I=(e,s)=>{e.stopPropagation(),j(u===s?null:s)},A=async(e,s)=>{a(null);try{const r=await P(g,e),x=(r==null?void 0:r.data)||[];x.length>0?w("subjects",{state:{subCategoryId:e,subCategoryName:s,details:x}}):a("No subjects found for this subcategory.")}catch(r){console.error("Error fetching subjects:",r),a("Failed to fetch subjects. Please try again later.")}};return t.jsxs(t.Fragment,{children:[t.jsxs(E,{children:[t.jsxs(l,{variant:"h3",gutterBottom:!0,children:["Subcategory Details for ",S||"Unknown Category"]}),h&&t.jsx(m,{sx:{mb:2},children:t.jsx(R,{severity:"error",children:h})})]}),t.jsx(b,{container:!0,spacing:2,children:(d?n:n.slice(0,4)).map(e=>t.jsx(b,{item:!0,xs:12,sm:6,md:6,children:t.jsx(N,{sx:{border:"1px solid #ccc",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out","&:hover":{transform:"scale(1.03)",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.2)",cursor:"pointer"},margin:{sm:2,xs:0},mt:{xs:2,sm:2}},onClick:()=>A(e.subCategoryId,e.subCategoryName),children:t.jsxs(T,{children:[e.videoUrl&&t.jsx("iframe",{title:"YouTube Video",src:`https://www.youtube.com/embed/${e.videoUrl}`,frameBorder:"0",allowFullScreen:!0,style:{width:"100%",height:"250px",marginBottom:"1rem"}}),t.jsxs(l,{variant:"h4",sx:{mb:1},children:[e.subCategoryName,t.jsx(p,{sx:{ml:1,minWidth:0,padding:0,borderRadius:"50%",backgroundColor:"transparent","&:hover":{backgroundColor:"action.hover"}},onClick:s=>I(s,e.subCategoryId),children:t.jsx(F,{sx:{fontSize:24}})})]}),u===e.subCategoryId&&t.jsx(l,{variant:"body2",sx:{mt:1},children:e.description})]})})},e.subCategoryId))}),n.length>4&&!d&&t.jsx(m,{sx:{textAlign:{sm:"right",xs:"center"},mt:2,mr:2},children:t.jsx(p,{variant:"contained",color:"primary",onClick:D,children:"View All"})})]})};export{O as default};
