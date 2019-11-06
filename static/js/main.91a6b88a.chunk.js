(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{243:function(e,t,a){},304:function(e,t,a){},353:function(e,t,a){e.exports=a(544)},358:function(e,t,a){},372:function(e,t){},374:function(e,t){},409:function(e,t){},410:function(e,t){},543:function(e,t,a){},544:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"addTodo",function(){return R}),a.d(n,"editTodo",function(){return P}),a.d(n,"deleteTodo",function(){return M}),a.d(n,"completeTodo",function(){return H}),a.d(n,"completeAllTodos",function(){return L}),a.d(n,"clearCompleted",function(){return A});var r,o,l=a(0),c=a.n(l),i=a(18),s=a.n(i),u=a(48),f=a(32),d=a(50),m=a(49),p=a(51),g=(a(358),a(22)),E=a(578),b=a(579),O=a(580),y=a(581),h=a(582),j=a(583),w=a(99),v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(g.a)(a)),a.state={isOpen:!1},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return c.a.createElement(E.a,{dark:!0,expand:"md",style:{background:"#213969"}},c.a.createElement(b.a,{href:"/"},c.a.createElement("span",{className:"siteTitle"},"ONE PLANNER")),c.a.createElement(O.a,{onClick:this.toggle}),c.a.createElement(y.a,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(h.a,{className:"siteNav",navbar:!0},c.a.createElement(j.a,{to:"/today",tag:w.b},"today's plan"),c.a.createElement(j.a,{to:"/planner",tag:w.b},"planner"),c.a.createElement(j.a,{to:"/past",tag:w.b},"past"))))}}]),t}(l.Component),k=a(91),_=a(25),N=a(53),C=a(28),S="ADD_TODO",D="EDIT_TODO",T="DELETE_TODO",R=function(e){return{type:S,payload:e}},P=function(e,t){return{type:D,id:e,payload:t}},M=function(e){return{type:T,id:e}},H=function(e){return{type:"COMPLETE_TODO",id:e}},L=function(){return{type:"COMPLETE_ALL_TODOS"}},A=function(){return{type:"CLEAR_COMPLETED"}},F=a(93),J=a(315),x=a(584),I=a(6),W=a(591),z=a(592),Y=a(594),B=a(593),K=a(280),V=a(67),X=a(588),U=a(589),G=a(309),Z=a(193),q=a(194),Q=a(587),$=a(585),ee=a(586),te=a(318),ae=a.n(te),ne=a(319),re=a.n(ne),oe=a(234),le=a.n(oe),ce=a(320),ie=a.n(ce),se=a(232),ue=a.n(se),fe=a(321),de=a.n(fe),me=a(317),pe=a.n(me),ge=a(316),Ee=a.n(ge),be=a(590),Oe=a(595),ye=(a(243),a(369),Object(x.a)(function(e){return{title_paper:{backgroundColor:$.a[50],padding:e.spacing(3,2)},card:{width:270},open_tasks_card:{backgroundColor:$.a[50],padding:e.spacing(3,2)},followup_task_card_header:{backgroundColor:Z.a[400]},card_content:{backgroundColor:Z.a[100],height:110},font_style:{fontFamily:["Montserrat","sans-serif"]},action_font_style:{fontFamily:["Karla","sans-serif"]},card_action:{justifyContent:"flex-start"},title:{fontSize:14},avatar_red:{backgroundColor:q.a[500]},avatar_blue:{backgroundColor:$.a[500]},avatar_orange:{backgroundColor:ee.a[500]},button_start:{color:"black"},button_complete:{margin:e.spacing(1),background:"#388e3c",color:"white"},button_show_other_tasks:{color:"black",margin:e.spacing(1)},expand:{marginLeft:"auto"},expandOpen:{transform:"rotate(180deg)"},root:{padding:e.spacing(3,2)}}})),he=Object(I.a)({root:{backgroundColor:(r="color",o={default:q.a[500],blue:$.a[500],red:q.a[500],green:Q.a[500],orange:ee.a[500]},function(e){return o[e[r]]})}})(function(e){var t=e.classes,a=(e.color,Object(J.a)(e,["classes","color"]));return c.a.createElement(X.a,Object.assign({"aria-label":"recipe",className:t.root},a))});var je=a(322),we=Object(je.a)([function(e){return e.todos}],function(e){return e});var ve=Object(N.b)(function(e){return{allTodos:we(e)}},function(e){return Object(_.a)({dispatch:e},Object(C.b)(n,e))})(function(e){var t=ye(),a=Object(l.useState)(!1),n=Object(F.a)(a,2),r=n[0],o=n[1],i=Object(l.useState)("Show"),s=Object(F.a)(i,2),u=s[0],f=s[1];function d(e,a,n){var l=m(e),i=m(a),s=m(n),f=[];Array.prototype.push.apply(f,l),Array.prototype.push.apply(f,i),Array.prototype.push.apply(f,s);var d=m(f),p=function(e){var t,a=e.length,n=E(e,"Work").length,r=R();return a>0?S()?(0==n?t="Plan your day at work.":(t="You have "+n+" ",t+=1==n?"task":"tasks",t+=" at work."),t+=" "+r+" hours left."):(t="You have "+a+" ",t+=1==a?"task":"tasks",t+=" for the day.",n>0&&(t+=" "+n+" work tasks left.")):t=C()?"Good Morning! Plan your day for today and get started.":T()?"No open tasks now!":R()+" hours left at work. Everything done for now!",t}(d);return c.a.createElement("div",null,function(e){return c.a.createElement(U.a,{justify:"space-between",container:!0,className:t.title_paper},c.a.createElement(U.a,{item:!0},c.a.createElement(V.a,{variant:"h4",component:"h4",className:t.font_style},e)),c.a.createElement(U.a,{item:!0},c.a.createElement(G.a,{size:"medium",color:"primary",className:t.font_style,label:(new Date).toDateString()})))}(p),c.a.createElement(K.a,{className:t.button_show_other_tasks,startIcon:c.a.createElement(Ee.a,null),onClick:function(){return o(!r)},hidden:!S()},c.a.createElement(V.a,{className:t.action_font_style},u," non-work tasks")),c.a.createElement(U.a,{className:t.root,container:!0,spacing:5,alignItems:"center"},d.map(g)))}function m(e){var t=[],a=D()?"BEFORE_WORK":T()?"AFTER_WORK":"AT_WORK",n=p(E(e,"Work")),r=p(E(e,"Home")),o=p(E(e,"Personal"));return"AT_WORK"==a?(Array.prototype.push.apply(t,n),Array.prototype.push.apply(t,r),Array.prototype.push.apply(t,o)):"BEFORE_WORK"==a?(Array.prototype.push.apply(t,r),Array.prototype.push.apply(t,n),Array.prototype.push.apply(t,o)):(Array.prototype.push.apply(t,o),Array.prototype.push.apply(t,r),Array.prototype.push.apply(t,n)),t}function p(e){var t=[],a=O(e,"InProgress"),n=O(e,"Pending"),r=b(a,"High"),o=b(a,"Medium"),l=b(a,"Low"),c=b(n,"High"),i=b(n,"Medium"),s=b(n,"Low");return Array.prototype.push.apply(t,r),Array.prototype.push.apply(t,o),Array.prototype.push.apply(t,l),Array.prototype.push.apply(t,c),Array.prototype.push.apply(t,i),Array.prototype.push.apply(t,s),t}function g(e){var a=JSON.parse(e.payload);if(!S()||0!=r||"Work"==a.category)return a.effort<.5?function(e){var a=JSON.parse(e.payload);return c.a.createElement(U.a,{key:e.id,item:!0},c.a.createElement(be.a,{direction:"right",in:"true",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement(W.a,{className:t.card,raised:!0},c.a.createElement(z.a,{className:t.followup_task_card_header,avatar:y(a.category),title:c.a.createElement(V.a,{variant:"h5",component:"h5",className:t.font_style},"Follow-up")}),c.a.createElement(B.a,{className:t.card_content},c.a.createElement(V.a,{variant:"h5",component:"h2",className:t.font_style},a.title)),c.a.createElement(Y.a,{disableSpacing:!0},c.a.createElement(K.a,{className:t.button_start,startIcon:c.a.createElement(ue.a,null),onClick:function(){return _(e.id,"Completed",a)}},c.a.createElement(V.a,{className:t.action_font_style},"Done"))))))}(e):function(e){var a=JSON.parse(e.payload);return c.a.createElement(U.a,{key:e.id,item:!0},c.a.createElement(be.a,{direction:"right",in:"false",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement(W.a,{className:t.card,raised:!0},c.a.createElement(z.a,{avatar:y(a.category),action:c.a.createElement("div",{align:"right"},h(a),v(a.effort),c.a.createElement("br",null),j(a.priority))}),c.a.createElement(B.a,{className:t.card_content},c.a.createElement(V.a,{variant:"h5",component:"h2",className:t.font_style},a.title)),c.a.createElement(Y.a,{disableSpacing:!0},function(e,a,n){return"Pending"==a?c.a.createElement(U.a,{container:!0,spacing:1},c.a.createElement(U.a,{container:!0,justify:"space-between"},c.a.createElement(K.a,{className:t.button_start,startIcon:c.a.createElement(ie.a,null),onClick:function(){return _(e,"InProgress",n)}},c.a.createElement(V.a,{className:t.action_font_style},"Start"))),c.a.createElement(U.a,{item:!0,xs:12},w(n.effort,n.workLog,!1))):"InProgress"==a?c.a.createElement(U.a,{container:!0,spacing:1},c.a.createElement(U.a,{container:!0,justify:"space-between"},c.a.createElement(K.a,{className:t.button_start,startIcon:c.a.createElement(de.a,null),onClick:function(){return _(e,"Pending",n)}},c.a.createElement(V.a,{className:t.action_font_style},"Pause")),c.a.createElement(K.a,{className:t.button_start,startIcon:c.a.createElement(ue.a,null),onClick:function(){return _(e,"Completed",n)}},c.a.createElement(V.a,{className:t.action_font_style},"Complete"))),c.a.createElement(U.a,{item:!0,xs:12},w(n.effort,n.workLog,!0))):void 0}(e.id,a.status,a)))))}(e)}function E(e,t){return e.filter(function(e){return JSON.parse(e.payload).category==t})}function b(e,t){return e.filter(function(e){return JSON.parse(e.payload).priority==t})}function O(e,t){return e.filter(function(e){return JSON.parse(e.payload).status==t})}function y(e){var t;return"Work"==e?(t="blue",c.a.createElement(he,{color:t}," ",c.a.createElement(pe.a,{color:"action"})," ")):"Home"==e?(t="orange",c.a.createElement(he,{color:t}," ",c.a.createElement(ae.a,{color:"action"})," ")):"Personal"==e?(t="green",c.a.createElement(he,{color:t}," ",c.a.createElement(re.a,{color:"action"})," ")):void 0}function h(e){if(!H(e.deadline)){var a=N(e.deadline),n=1==a||-1==a?"day":"days";return a<0?(n=1==(a*=-1)?"day":"days",n+=" left",c.a.createElement("div",null,c.a.createElement(G.a,{className:t.font_style,size:"small",color:"default",label:a+" "+n}),c.a.createElement("br",null))):(n+=" late",c.a.createElement("div",null,c.a.createElement(G.a,{className:t.font_style,size:"small",color:"secondary",label:a+" "+n}),c.a.createElement("br",null)))}}function j(e){var a;return"High"==e&&(a="secondary"),"Medium"==e&&(a="primary"),"Low"==e&&(a="default"),c.a.createElement(G.a,{variant:"outlined",className:t.font_style,size:"small",color:a,label:e+" Priority"})}function w(e,t,a){var n=k(t),r=60*e,o=(100*n/r).toFixed(0);return o>=100?c.a.createElement(Oe.a,{color:"danger",value:"100"},n+" mins spent"):a?c.a.createElement(Oe.a,{multi:!0},c.a.createElement(Oe.a,{bar:!0,animated:!0,color:"success",value:o},o+"%"),c.a.createElement(Oe.a,{bar:!0,value:100-o},r-n+" mins left")):c.a.createElement("div",null,c.a.createElement(Oe.a,{multi:!0},c.a.createElement(Oe.a,{bar:!0,color:"success",value:o},o+"%"),c.a.createElement(Oe.a,{bar:!0,value:100-o},r-n+" mins left")))}function v(e){var a,n="hours",r=e;return e>=3&&(a="secondary"),e<3&&(a="primary"),e<1&&(a="default"),1==e&&(n="hour"),e<1&&(r=60*e,n="minutes"),c.a.createElement(G.a,{size:"small",className:t.font_style,color:a,icon:c.a.createElement(le.a,null),label:r+" "+n})}function k(e){for(var t=0,a=0;a<e.length;a++){var n=new Date(e[a].start_time),r=new Date;"end_time"in e[a]&&(r=new Date(e[a].end_time)),t+=r.getTime()-n.getTime()}return(t/6e4).toFixed(0)}function _(t,a,n){if(n.status=a,"InProgress"==a){var r={start_time:new Date};n.workLog.push(r)}else for(var o=0;o<n.workLog.length;o++)"end_time"in n.workLog[o]||(n.workLog[o].end_time=new Date);!function(t,a){a.deadline=function(e){if(e.toString().length<12)return e;var t=e.getDate(),a=e.getMonth()+1;return e.getFullYear()+"-"+(a<=9?"0"+a:a)+"-"+(t<=9?"0"+t:t)}(a.deadline);var n=JSON.stringify(a);e.dispatch(P(t,n))}(t,n)}Object(l.useEffect)(function(){f(r?"Hide":"Show")});var N=function(e){var t=e.split("-"),a=new Date(t[0],t[1]-1,t[2]),n=new Date;return Math.floor((n.getTime()-a.getTime())/864e5).toFixed(0)},C=function(){var e=new Date,t=new Date;return t.setHours(11),t.setMinutes(59),e.getTime()<=t.getTime()},S=function(){var e=new Date,t=new Date;t.setHours(8),t.setMinutes(0);var a=new Date;return a.setHours(18),a.setMinutes(0),e.getTime()>=t.getTime()&&e.getTime()<=a.getTime()},D=function(){var e=new Date,t=new Date;return t.setHours(8),t.setMinutes(0),e.getTime()<t.getTime()},T=function(){var e=new Date,t=new Date;return t.setHours(18),t.setMinutes(0),e.getTime()>=t.getTime()},R=function(){var e=new Date,t=new Date;return t.setHours(18),t.setMinutes(0),t.getHours()-e.getHours()},M=function(e){var t=new Date,a=e.split("-"),n=new Date(a[0],a[1]-1,a[2]);return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),n<t},H=function(e){var t=new Date,a=e.split("-"),n=new Date(a[0],a[1]-1,a[2]);return n.getDate()==t.getDate()&&n.getMonth()==t.getMonth()&&n.getFullYear()==t.getFullYear()},L=function(e){return e.filter(function(e){return M(JSON.parse(e.payload).deadline)&&"Completed"!=JSON.parse(e.payload).status})},A=function(e){return e.filter(function(e){return!M(JSON.parse(e.payload).deadline)&&!H(JSON.parse(e.payload).deadline)&&"Completed"!=JSON.parse(e.payload).status})},J=function(e){return e.filter(function(e){return H(JSON.parse(e.payload).deadline)})},x=function(e){return e.filter(function(e){return"Completed"!=JSON.parse(e.payload).status})};return c.a.createElement("div",{className:"task-list"},function(e){var t=J(e),a=x(t);return d(L(e),a,A(e))}(e.allTodos))}),ke=a(163),_e=Object(x.a)(function(e){return{completed_tasks_card:{backgroundColor:Z.a[200],color:Q.a[900],padding:e.spacing(3,2)},completed_card:{width:270,background:Q.a[900],color:"white"},completed_card_content:{height:80},font_style:{fontFamily:["Montserrat","sans-serif"]},root:{padding:e.spacing(3,2)}}});var Ne=Object(N.b)(function(e){return{allTodos:we(e)}},function(e){return Object(_.a)({dispatch:e},Object(C.b)(n,e))})(function(e){var t=_e();function a(e){var a=JSON.parse(e.payload);return c.a.createElement(U.a,{key:a.id,item:!0},c.a.createElement(be.a,{direction:"left",in:"true",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement(W.a,{className:t.completed_card,raised:!0},c.a.createElement(B.a,{className:t.completed_card_content},c.a.createElement(V.a,{variant:"h5",component:"h2",className:t.font_style},a.title)),c.a.createElement(Y.a,null,c.a.createElement(G.a,{size:"small",className:t.font_style,label:a.category})))))}var n=function(e){return e.filter(function(e){return function(e){var t=new Date,a=e.split("-"),n=new Date(a[0],a[1]-1,a[2]);return n.getDate()==t.getDate()&&n.getMonth()==t.getMonth()&&n.getFullYear()==t.getFullYear()}(JSON.parse(e.payload).deadline)})},r=function(e){return e.filter(function(e){return"Completed"==JSON.parse(e.payload).status})};return c.a.createElement("div",{className:"task-list"},function(e){var o=n(e);return function(e){if(e.length>0)return c.a.createElement("div",null,c.a.createElement(ke.a,{className:t.completed_tasks_card,elevation:!1},c.a.createElement(V.a,{variant:"h4",component:"h4",className:t.font_style},"Completed "+e.length+" tasks today..")),c.a.createElement(U.a,{className:t.root,container:!0,spacing:5},e.map(a)))}(r(o))}(e.allTodos))}),Ce=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(ve,null),c.a.createElement(Ne,null))}}]),t}(l.Component),Se=a(601),De=a(606),Te=a(607),Re=a(608),Pe=a(610),Me=a(611),He=a(612),Le=a(619),Ae=a(604),Fe=a(605),Je=a(614),xe=a(618),Ie=a(602),We=a(603),ze=a(613),Ye=a(609),Be=a(600),Ke=a(226),Ve=a.n(Ke),Xe=a(164),Ue=a.n(Xe),Ge=a(174),Ze=a.n(Ge),qe=a(184),Qe=a.n(qe),$e=a(175),et=a.n($e),tt=a(182),at=a.n(tt),nt=a(115),rt=a.n(nt),ot=a(114),lt=a.n(ot),ct=a(176),it=a.n(ct),st=a(177),ut=a.n(st),ft=a(179),dt=a.n(ft),mt=a(180),pt=a.n(mt),gt=a(181),Et=a.n(gt),bt=a(185),Ot=a.n(bt),yt=a(178),ht=a.n(yt),jt=a(183),wt=a.n(jt),vt=a(186),kt=a.n(vt),_t=a(599),Nt=a(554),Ct=a(302),St=a(617),Dt=a(615),Tt=a(616),Rt=a(328),Pt=a.n(Rt),Mt=(a(304),Object(x.a)(function(e){return{fab:{margin:e.spacing(1)},root:{padding:e.spacing(3,2)}}}));var Ht=Object(N.b)(function(e){return{allTodos:we(e)}},function(e){return Object(_.a)({dispatch:e},Object(C.b)(n,e))})(function(e){var t=Mt(),a={Add:Object(l.forwardRef)(function(e,t){return c.a.createElement(Ze.a,Object.assign({},e,{ref:t}))}),Check:Object(l.forwardRef)(function(e,t){return c.a.createElement(et.a,Object.assign({},e,{ref:t}))}),Clear:Object(l.forwardRef)(function(e,t){return c.a.createElement(lt.a,Object.assign({},e,{ref:t}))}),Delete:Object(l.forwardRef)(function(e,t){return c.a.createElement(it.a,Object.assign({},e,{ref:t}))}),DetailPanel:Object(l.forwardRef)(function(e,t){return c.a.createElement(rt.a,Object.assign({},e,{ref:t}))}),Edit:Object(l.forwardRef)(function(e,t){return c.a.createElement(ut.a,Object.assign({},e,{ref:t}))}),Export:Object(l.forwardRef)(function(e,t){return c.a.createElement(ht.a,Object.assign({},e,{ref:t}))}),Filter:Object(l.forwardRef)(function(e,t){return c.a.createElement(dt.a,Object.assign({},e,{ref:t}))}),FirstPage:Object(l.forwardRef)(function(e,t){return c.a.createElement(pt.a,Object.assign({},e,{ref:t}))}),LastPage:Object(l.forwardRef)(function(e,t){return c.a.createElement(Et.a,Object.assign({},e,{ref:t}))}),NextPage:Object(l.forwardRef)(function(e,t){return c.a.createElement(rt.a,Object.assign({},e,{ref:t}))}),PreviousPage:Object(l.forwardRef)(function(e,t){return c.a.createElement(at.a,Object.assign({},e,{ref:t}))}),ResetSearch:Object(l.forwardRef)(function(e,t){return c.a.createElement(lt.a,Object.assign({},e,{ref:t}))}),Search:Object(l.forwardRef)(function(e,t){return c.a.createElement(wt.a,Object.assign({},e,{ref:t}))}),SortArrow:Object(l.forwardRef)(function(e,t){return c.a.createElement(Qe.a,Object.assign({},e,{ref:t}))}),ThirdStateCheck:Object(l.forwardRef)(function(e,t){return c.a.createElement(Ot.a,Object.assign({},e,{ref:t}))}),ViewColumn:Object(l.forwardRef)(function(e,t){return c.a.createElement(kt.a,Object.assign({},e,{ref:t}))})},n=Object(l.useState)([]),r=Object(F.a)(n,2),o=r[0],i=r[1],s=Object(l.useState)("Title"),u=Object(F.a)(s,2),f=u[0],d=(u[1],Object(l.useState)(!1)),m=Object(F.a)(d,2),p=m[0],g=m[1],E=Object(l.useState)(!1),b=Object(F.a)(E,2),O=b[0],y=b[1];function h(e){var t=JSON.parse(e.payload);return{id:e.id,title:t.title,priority:t.priority,category:t.category,effort:""+t.effort,deadline:""+t.deadline,workLog:t.workLog,status:t.status}}function j(){y(!O)}function w(e){i(Object(_.a)({},o,{title:e.target.value}))}function v(e){i(Object(_.a)({},o,{followup:e.target.checked}))}function k(e){i(Object(_.a)({},o,{priority:e}))}function N(e){i(Object(_.a)({},o,{effort:e}))}function C(e){i(Object(_.a)({},o,{category:e}))}function S(e){i(Object(_.a)({},o,{deadline:e.target.value}))}function D(e){if(e.toString(),e.toString().length<12)return e;var t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear()+"-"+(a<=9?"0"+a:a)+"-"+(t<=9?"0"+t:t);return console.log("Formatted: "+n),n}function T(){return new Date}function H(t){g(!0),o.status="Pending",o.hasOwnProperty("deadline")||(o.deadline=D(T())),1==o.followup&&(o.effort=.1),o.hasOwnProperty("workLog")||(o.workLog=[]),t.preventDefault();var a=JSON.stringify(o);console.log(a),e.dispatch(R(a)),g(!1),i({title:"",deadline:D(T()),status:"",followup:!1})}Date.prototype.toJSON=function(){var e=-this.getTimezoneOffset()/60,t=e>=0?"+":"-",a=Math.abs(e)<10?"0":"",n=new Date(this.getFullYear(),this.getMonth(),this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds(),this.getMilliseconds());return n.setHours(this.getHours()+e),n.toISOString().replace("Z","")+t+a+Math.abs(e).toString()+":00"};var L=function(e){return e.filter(function(e){return"Completed"!=JSON.parse(e.payload).status||!function(e){var t=new Date,a=e.split("-"),n=new Date(a[0],a[1]-1,a[2]);return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),n<t}(JSON.parse(e.payload).deadline)})};function A(e){return c.a.createElement(Nt.a,null,c.a.createElement(Ct.a,{primary:e.start_time,secondary:e.end_time}))}return c.a.createElement("div",{className:"task-list"},c.a.createElement(U.a,{justify:"space-between",container:!0,className:t.root},c.a.createElement(U.a,{item:!0},c.a.createElement(V.a,{variant:"h4",component:"h4"},"You have ",e.allTodos.filter(function(e){return"Completed"!=JSON.parse(e.payload).status}).length," open tasks.")),c.a.createElement(U.a,{item:!0},c.a.createElement("div",null,c.a.createElement("center",null,c.a.createElement(Be.a,{className:"btn",color:"secondary",size:"small","aria-label":"add"},c.a.createElement(Ve.a,{color:"white",onClick:j})),c.a.createElement(xe.a,{isOpen:O,size:"lg"},c.a.createElement(Se.a,{onSubmit:H},c.a.createElement(Ie.a,null,"Add Task"),c.a.createElement(We.a,null,c.a.createElement(Ae.a,{outline:!0,color:"secondary"},c.a.createElement(Fe.a,null,c.a.createElement(De.a,null,c.a.createElement(Te.a,null,c.a.createElement(Re.a,{className:"TaskField",type:"text",name:"taskTitle",id:"taskTitle",placeholder:f,value:o.title,onChange:w}))),c.a.createElement("br",null),c.a.createElement(De.a,null,c.a.createElement(Te.a,null,c.a.createElement(Ye.a,{onChange:v,checked:o.followup,value:"followup",color:"primary"}),"Is Follow-up task?")),c.a.createElement("br",null),c.a.createElement(De.a,null,c.a.createElement(Te.a,null,c.a.createElement(Pe.a,null,c.a.createElement(Me.a,{color:"secondary",className:"TaskField",outline:!0,disabled:!0},"takes"),c.a.createElement(Me.a,{color:"info",outline:!0,onClick:function(){return N(.5)},active:.5===o.effort,disabled:o.followup},"0.5"),c.a.createElement(Me.a,{color:"info",outline:!0,onClick:function(){return N(1)},active:1===o.effort,disabled:o.followup},"1"),c.a.createElement(Me.a,{color:"info",outline:!0,onClick:function(){return N(2)},active:2===o.effort,disabled:o.followup},"2"),c.a.createElement(Me.a,{color:"info",outline:!0,onClick:function(){return N(3)},active:3===o.effort,disabled:o.followup},"3"),c.a.createElement(Me.a,{color:"info",outline:!0,onClick:function(){return N(4)},active:4===o.effort,disabled:o.followup},"4"),c.a.createElement(Me.a,{color:"info",outline:!0,onClick:function(){return N(5)},active:5===o.effort,disabled:o.followup},"5"),c.a.createElement(Me.a,{color:"info",outline:!0,onClick:function(){return N(6)},active:6===o.effort,disabled:o.followup},"6"),c.a.createElement(Me.a,{color:"secondary",className:"TaskField",outline:!0,disabled:!0},"hours"))),c.a.createElement(Te.a,null,c.a.createElement(He.a,null,c.a.createElement(Le.a,{className:"TaskField",addonType:"prepend"},"complete it by"),c.a.createElement(Re.a,{className:"TaskField",type:"date",name:"taskDeadline",id:"taskDeadline",defaultValue:D(T()),value:o.deadline,onChange:S})))),c.a.createElement("br",null),c.a.createElement(De.a,null,c.a.createElement(Te.a,null,c.a.createElement(Pe.a,null,c.a.createElement(Me.a,{color:"secondary",className:"TaskField",outline:!0,disabled:!0},"priority"),c.a.createElement(Me.a,{color:"danger",outline:!0,onClick:function(){return k("High")},active:"High"===o.priority},"High"),c.a.createElement(Me.a,{color:"warning",outline:!0,onClick:function(){return k("Medium")},active:"Medium"===o.priority},"Medium"),c.a.createElement(Me.a,{color:"info",outline:!0,onClick:function(){return k("Low")},active:"Low"===o.priority},"Low"))),c.a.createElement(Te.a,null,c.a.createElement(Pe.a,null,c.a.createElement(Me.a,{color:"secondary",className:"TaskField",outline:!0,disabled:!0},"category"),c.a.createElement(Me.a,{color:"danger",outline:!0,onClick:function(){return C("Work")},active:"Work"===o.category},"Work"),c.a.createElement(Me.a,{color:"warning",outline:!0,onClick:function(){return C("Home")},active:"Home"===o.category},"Home"),c.a.createElement(Me.a,{color:"info",outline:!0,onClick:function(){return C("Personal")},active:"Personal"===o.category},"Personal"))))))),c.a.createElement(ze.a,{className:"float-left"},p?c.a.createElement(Je.a,{color:"primary",className:"SubmitButton"}):c.a.createElement(Me.a,{color:"primary",size:"lg",className:"SubmitButton"},"Submit")," ",c.a.createElement(Me.a,{color:"danger",size:"lg",onClick:j},"Close")))))))),function(t){var n={columns:[{title:"Title",field:"title"},{title:"Priority",field:"priority",lookup:{High:"High",Medium:"Medium",Low:"Low"}},{title:"Category",field:"category",lookup:{Work:"Work",Home:"Home",Personal:"Personal"}},{title:"Effort",field:"effort",filtering:!1},{title:"Deadline",field:"deadline",type:"date",filtering:!1},{title:"Worklog",field:"workLog",filtering:!1,render:function(e){return function(e){var t=e.workLog;return c.a.createElement(St.a,null,c.a.createElement(Dt.a,{expandIcon:c.a.createElement(Pt.a,null)},e.workLog.length+" Entries"),c.a.createElement(Tt.a,null,c.a.createElement(_t.a,null,t.map(A))))}(e)}},{title:"Status",field:"status",lookup:{Pending:"Pending",InProgress:"InProgress",Completed:"Completed"}}],data:function(e){return e.map(h)}(L(t))};return c.a.createElement(Ue.a,{title:"",columns:n.columns,data:n.data,icons:a,options:{headerStyle:{background:"lightgray",color:"#213969"},search:!1,toolbar:!1,filtering:!0,actionsColumnIndex:-1,paging:!1,maxBodyHeight:1e3},editable:{isEditable:function(e){return"Completed"!=e.status},onRowUpdate:function(t,a){return new Promise(function(n){setTimeout(function(){n(),function(t,a){a.deadline=D(a.deadline);var n=JSON.stringify(a);e.dispatch(P(t,n))}(a.id,t)},600)})},onRowDelete:function(t){return new Promise(function(a){setTimeout(function(){var n;a(),n=t.id,e.dispatch(M(n))},600)})}},actions:[function(t){return{icon:"check",tooltip:"Complete task",onClick:function(t,a){return new Promise(function(t){setTimeout(function(){t(),a.status="Completed",function(t,a){var n=JSON.stringify(a);e.dispatch(P(t,n))}(a.id,a)},600)})},disabled:"Completed"==t.status}}]})}(e.allTodos))}),Lt=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(Ht,null))}}]),t}(l.Component),At=Object(x.a)(function(e){return{fab:{margin:e.spacing(1)},root:{padding:e.spacing(3,2)}}});var Ft=Object(N.b)(function(e){return{allTodos:we(e)}},function(e){return Object(_.a)({dispatch:e},Object(C.b)(n,e))})(function(e){At();var t={Add:Object(l.forwardRef)(function(e,t){return c.a.createElement(Ze.a,Object.assign({},e,{ref:t}))}),Check:Object(l.forwardRef)(function(e,t){return c.a.createElement(et.a,Object.assign({},e,{ref:t}))}),Clear:Object(l.forwardRef)(function(e,t){return c.a.createElement(lt.a,Object.assign({},e,{ref:t}))}),Delete:Object(l.forwardRef)(function(e,t){return c.a.createElement(it.a,Object.assign({},e,{ref:t}))}),DetailPanel:Object(l.forwardRef)(function(e,t){return c.a.createElement(rt.a,Object.assign({},e,{ref:t}))}),Edit:Object(l.forwardRef)(function(e,t){return c.a.createElement(ut.a,Object.assign({},e,{ref:t}))}),Export:Object(l.forwardRef)(function(e,t){return c.a.createElement(ht.a,Object.assign({},e,{ref:t}))}),Filter:Object(l.forwardRef)(function(e,t){return c.a.createElement(dt.a,Object.assign({},e,{ref:t}))}),FirstPage:Object(l.forwardRef)(function(e,t){return c.a.createElement(pt.a,Object.assign({},e,{ref:t}))}),LastPage:Object(l.forwardRef)(function(e,t){return c.a.createElement(Et.a,Object.assign({},e,{ref:t}))}),NextPage:Object(l.forwardRef)(function(e,t){return c.a.createElement(rt.a,Object.assign({},e,{ref:t}))}),PreviousPage:Object(l.forwardRef)(function(e,t){return c.a.createElement(at.a,Object.assign({},e,{ref:t}))}),ResetSearch:Object(l.forwardRef)(function(e,t){return c.a.createElement(lt.a,Object.assign({},e,{ref:t}))}),Search:Object(l.forwardRef)(function(e,t){return c.a.createElement(wt.a,Object.assign({},e,{ref:t}))}),SortArrow:Object(l.forwardRef)(function(e,t){return c.a.createElement(Qe.a,Object.assign({},e,{ref:t}))}),ThirdStateCheck:Object(l.forwardRef)(function(e,t){return c.a.createElement(Ot.a,Object.assign({},e,{ref:t}))}),ViewColumn:Object(l.forwardRef)(function(e,t){return c.a.createElement(kt.a,Object.assign({},e,{ref:t}))})};function a(e){var t=JSON.parse(e.payload);return{id:e.id,title:t.title,category:t.category,effort:""+t.effort,deadline:""+t.deadline}}Date.prototype.toJSON=function(){var e=-this.getTimezoneOffset()/60,t=e>=0?"+":"-",a=Math.abs(e)<10?"0":"",n=new Date(this.getFullYear(),this.getMonth(),this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds(),this.getMilliseconds());return n.setHours(this.getHours()+e),n.toISOString().replace("Z","")+t+a+Math.abs(e).toString()+":00"};var n=function(e){return e.filter(function(e){return"Completed"==JSON.parse(e.payload).status&&function(e){var t=new Date,a=e.split("-"),n=new Date(a[0],a[1]-1,a[2]);return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),n<t}(JSON.parse(e.payload).deadline)})};return c.a.createElement("div",{className:"task-list"},function(e){var r={columns:[{title:"Title",field:"title",grouping:!1},{title:"Category",field:"category",lookup:{Work:"Work",Home:"Home",Personal:"Personal"}},{title:"Effort",field:"effort",filtering:!1},{title:"Deadline",field:"deadline",type:"date",filtering:!1,defaultGroupOrder:0}],data:function(e){return e.map(a)}(n(e))};return c.a.createElement(Ue.a,{title:"",columns:r.columns,data:r.data,icons:t,options:{headerStyle:{background:"lightgray",color:"#213969"},search:!1,toolbar:!1,filtering:!0,actionsColumnIndex:-1,paging:!0,maxBodyHeight:1e3,grouping:!0}})}(e.allTodos))}),Jt=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(Ft,null))}}]),t}(l.Component),xt=(l.Component,function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement(k.d,null,c.a.createElement(k.b,{path:"/today",component:Ce}),c.a.createElement(k.b,{path:"/planner",component:Lt}),c.a.createElement(k.b,{path:"/past",component:Jt}),c.a.createElement(k.a,{exact:!0,from:"/",to:"today"})))}}]),t}(l.Component)),It=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"colorlib-page"},c.a.createElement("div",{id:"container-wrap"},c.a.createElement(v,null),c.a.createElement(xt,null)))}}]),t}(l.Component),Wt=(a(540),a(236)),zt=a(329),Yt=a(330),Bt=a.n(Yt),Kt=a(331),Vt=[];var Xt=Object(C.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return[].concat(Object(Kt.a)(e),[{id:e.reduce(function(e,t){return Math.max(t.id,e)},-1)+1,payload:t.payload}]);case D:return e.map(function(e){return e.id===t.id?Object(_.a)({},e,{payload:t.payload}):e});case T:return e.filter(function(e){return e.id!==t.id});default:return e}}}),Ut=(a(543),{key:"root",storage:Bt.a}),Gt=Object(Wt.a)(Ut,Xt),Zt=Object(C.e)(Gt,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),qt=Object(Wt.b)(Zt);s.a.render(c.a.createElement(N.a,{store:Zt},c.a.createElement(zt.a,{loading:null,persistor:qt},c.a.createElement(w.a,null,c.a.createElement(It,null)))),document.getElementById("root"))}},[[353,1,2]]]);
//# sourceMappingURL=main.91a6b88a.chunk.js.map