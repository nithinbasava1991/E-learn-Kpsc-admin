import{r as c,h as F,j as e,M as D,b as t,G as r,a6 as N,T as o,a7 as p,a8 as l,f}from"./index-BHN5gOPI.js";import{f as W}from"./McqApi-CZxC3cno.js";import{R as b,a as x}from"./RadioGroup-D2F41alc.js";const B=()=>{const[n,w]=c.useState(0),[m,g]=c.useState(""),[u,S]=c.useState([]);c.useState(1);const[s,k]=c.useState([]),[R,A]=c.useState({}),z={"Content-type":"application/json",Authorization:"Bearer "+JSON.parse(sessionStorage.getItem("user")).accessToken},j=i=>{g(i.target.value)},h=()=>{if(!m){alert("Please select an answer before proceeding");return}A(i=>({...i,[n]:m})),S(i=>[...i,n+1]),n<s.length-1?(w(i=>i+1),g("")):alert("You've reached the end of the questions.")};F();const v=Array.from({length:s.length},(i,a)=>a+1),C=async()=>{try{const a=(await W(z)).data;if(console.log(a),a){const y=a.map(d=>({mcqId:d.mcqId,question:d.question,a:d.a,b:d.b,c:d.c,d:d.d}));k(y)}}catch(i){console.error("Error fetching questions:",i)}};return c.useEffect(()=>{C()},[]),e.jsxs(D,{children:[e.jsx(t,{children:e.jsxs(r,{container:!0,alignItems:"center",children:[e.jsx(r,{item:!0,xs:12,md:6,sx:{textAlign:{md:"start",xs:"center"},fontSize:"1.3rem",fontWeight:600,color:"steelblue"},children:"Start MCQ Practice Test"}),e.jsx(r,{item:!0,xs:12,md:6,sx:{textAlign:{md:"start",xs:"center"},fontSize:"1.2rem",fontWeight:600,mt:{xs:6,md:0},mb:{xs:2,md:0}},children:"Test 1"})]})}),e.jsx(N,{sx:{mt:2,mb:-2}}),e.jsx(t,{sx:{pt:4,pl:{xs:1,md:1.5},mr:{xs:-1,md:0}},children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsxs(r,{item:!0,xs:12,md:2,sx:{background:"#FAC898",height:{md:"120px",xs:"auto"}},children:[e.jsx(t,{sx:{textAlign:"left",fontSize:"1.1rem",fontWeight:600},children:"Sections"}),e.jsxs(r,{container:!0,spacing:1,children:[e.jsxs(r,{item:!0,xs:12,sx:{mt:2},children:["Quantitative Aptitude"," "]}),e.jsxs(r,{item:!0,xs:12,children:["(Pages 1 to 40)"," "]})]})]}),e.jsxs(r,{item:!0,xs:12,md:7.5,sx:{textAlign:"start",fontSize:"1.1rem",fontWeight:600,display:"flex",flexDirection:"column",justifyContent:"space-between",mb:10,ml:-2},children:[e.jsxs(r,{item:!0,xs:12,sx:{textAlign:"start",fontSize:"1.1rem",fontWeight:600,display:"flex",flexDirection:"row",alignItems:{xs:"flex-start",sm:"flex-start"},justifyContent:"space-between",mb:2},children:[e.jsxs(t,{sx:{mb:{xs:2,md:0},textAlign:"center",display:{sm:"flex",xs:"none"},p:-2},children:["Page No. 1 ",e.jsx(o,{children:"(Total Pages: 40)"})]}),e.jsx(r,{container:!0,spacing:2,children:e.jsx(r,{item:!0,xs:12,display:{xs:"none",sm:"block"},children:e.jsxs(t,{sx:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:0,width:"100%",mb:2},children:[e.jsx(t,{sx:{background:"#FFBE3D",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center"},children:"Mark for Review & Next"}),e.jsx(t,{sx:{background:"#F56545",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center"},children:"Clear Response"}),e.jsx(t,{sx:{background:"#0047ab",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center",cursor:"pointer"},onClick:h,children:"Save & Next"})]})})})]}),e.jsxs(t,{sx:{mt:2,ml:{md:2,xs:0}},children:[e.jsx(t,{sx:{display:{xs:"none",sm:"block"}},children:s.length>0&&e.jsxs(t,{sx:{mt:2,ml:{md:2,xs:0}},children:[e.jsx(o,{sx:{fontWeight:600,fontSize:"1.2rem"},children:"Question"}),e.jsx(o,{sx:{fontSize:"0.9rem"},children:"(Correct Answer 1 Mark, Wrong Answer -0.25 Marks)"}),e.jsxs(o,{sx:{mt:2,fontSize:"1rem",fontWeight:600},children:[n+1,". ",s[n].question]}),e.jsx(o,{sx:{mt:3,fontWeight:600},children:"Answer Options:"}),e.jsx(p,{component:"fieldset",children:e.jsxs(b,{name:"answer-options",value:m,onChange:j,children:[e.jsx(l,{value:s[n].a,control:e.jsx(x,{}),label:`A. ${s[n].a}`}),e.jsx(l,{value:s[n].b,control:e.jsx(x,{}),label:`B. ${s[n].b}`}),e.jsx(l,{value:s[n].c,control:e.jsx(x,{}),label:`C. ${s[n].c}`}),e.jsx(l,{value:s[n].d,control:e.jsx(x,{}),label:`D. ${s[n].d}`})]})})]})}),e.jsxs(t,{sx:{display:{sm:"flex",xs:"none"},flexDirection:"row",alignItems:"flex-start",gap:0,width:"100%",mt:4,mb:-4},children:[e.jsx(t,{sx:{background:"#FFBE3D",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center"},children:"Mark for Review & Next"}),e.jsx(t,{sx:{background:"#F56545",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center"},children:"Clear Response"}),e.jsx(t,{sx:{background:"#0047ab",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center",cursor:"pointer"},onClick:h,children:"Save & Next"}),e.jsx(t,{sx:{background:"green",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center"},children:"Submit"})]})]})]}),e.jsx(r,{item:!0,xs:12,sx:{display:{xs:"block",sm:"none"},mt:-15},children:e.jsxs(t,{sx:{textAlign:"center",fontSize:"1.1rem"},children:["Page No. 1 ",e.jsx(o,{children:"(Total Pages: 40)"})]})}),e.jsx(r,{item:!0,xs:12,display:{xs:"block",sm:"none"},children:e.jsxs(t,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:0,mt:-6,mb:2,ml:-2},children:[e.jsx(t,{sx:{background:"#FFBE3D",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center",width:"100%"},children:"Mark for Review & Next"}),e.jsx(t,{sx:{background:"#F56545",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center",width:"100%"},children:"Clear Response"}),e.jsx(t,{sx:{background:"#0047ab",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center",width:"100%",cursor:"pointer"},onClick:h,children:"Save & Next"})]})})," ",e.jsx(t,{sx:{display:{sm:"none",xs:"block"}},children:s.length>0&&e.jsxs(t,{sx:{mt:2,ml:{md:2,xs:0}},children:[e.jsx(o,{sx:{fontWeight:600,fontSize:"1.2rem"},children:"Question"}),e.jsx(o,{sx:{fontSize:"0.9rem"},children:"(Correct Answer 1 Mark, Wrong Answer -0.25 Marks)"}),e.jsxs(o,{sx:{mt:2,fontSize:"1rem",fontWeight:600},children:[n+1,". ",s[n].question]}),e.jsx(o,{sx:{mt:3,fontWeight:600},children:"Answer Options:"}),e.jsx(p,{component:"fieldset",children:e.jsxs(b,{name:"answer-options",value:m,onChange:j,children:[e.jsx(l,{value:s[n].a,control:e.jsx(x,{}),label:`A. ${s[n].a}`}),e.jsx(l,{value:s[n].b,control:e.jsx(x,{}),label:`B. ${s[n].b}`}),e.jsx(l,{value:s[n].c,control:e.jsx(x,{}),label:`C. ${s[n].c}`}),e.jsx(l,{value:s[n].d,control:e.jsx(x,{}),label:`D. ${s[n].d}`})]})})]})}),e.jsxs(t,{sx:{display:{xs:"flex",sm:"none"},flexDirection:"column",alignItems:"flex-start",gap:0,width:"100%",mt:4,mb:-4},children:[e.jsx(t,{sx:{background:"#FFBE3D",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center",width:"100%"},children:"Mark for Review & Next"}),e.jsx(t,{sx:{background:"#F56545",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center",width:"100%"},children:"Clear Response"}),e.jsx(t,{onClick:h,sx:{background:"#0047ab",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center",width:"100%",cursor:"pointer"},children:"Save & Next"}),e.jsx(t,{sx:{background:"green",padding:"0.2rem",color:"white",fontSize:"0.8rem",flex:1,textAlign:"center",width:"100%"},children:"Submit"})]}),e.jsxs(r,{item:!0,xs:12,md:2.5,sx:{textAlign:"center",fontSize:"1.1rem",fontWeight:600,background:"#FAC898",mt:{xs:8,sm:0},ml:{md:2,xs:0}},children:[e.jsx(t,{children:" 00:29:45"}),e.jsx(t,{sx:{fontSize:"0.7rem"},children:"(Time Remaining)"}),e.jsx(t,{sx:{display:"flex",justifyContent:"flex-start"},children:e.jsx(f,{variant:"contained",sx:{mt:2,color:"#fff",background:"green","&:hover":{background:"darkgreen"},width:"120%",ml:-2},children:"Submit"})}),e.jsx(t,{sx:{display:"flex",justifyContent:"flex-start"},children:e.jsx(f,{variant:"contained",sx:{color:"#fff",background:"#0047ab","&:hover":{background:"#0047ab"},width:"120%",ml:-2},children:"Change View"})}),e.jsx(t,{sx:{display:"flex",justifyContent:"flex-start"},children:e.jsx(f,{variant:"contained",sx:{color:"#fff",background:"#F56545","&:hover":{background:"#F56545"},width:"120%",ml:-2},children:"Exit"})}),e.jsx(t,{sx:{display:"flex",justifyContent:"flex-start"},children:e.jsx(f,{variant:"contained",sx:{color:"#fff",background:"black","&:hover":{background:"black"},width:"120%",ml:-2,fontSize:"1rem"},children:"Pages"})}),e.jsxs(t,{children:[e.jsx(t,{sx:{fontSize:"0.95rem",mb:4,mt:2},children:"Number of Questions Attended"}),e.jsx(r,{container:!0,spacing:1,sx:{mb:2},children:v.map((i,a)=>e.jsx(r,{item:!0,xs:1.8,sx:{textAlign:"center",fontSize:"0.8rem",ml:"2px",mt:"2px",backgroundColor:u.includes(i)?"green":"transparent",color:u.includes(i)?"white":"inherit",height:"35px"},children:i},a))})]})]})]})})]})};export{B as default};
