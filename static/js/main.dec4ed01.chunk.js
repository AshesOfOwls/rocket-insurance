(this["webpackJsonprocket-insurance"]=this["webpackJsonprocket-insurance"]||[]).push([[0],{100:function(e,n,t){e.exports={inputWrapper:"InputBase_inputWrapper__gwWFH",input:"InputBase_input__1vIYa"}},101:function(e,n,t){e.exports={quoteRow:"QuoteRow_quoteRow__1w1f5",shrink:"QuoteRow_shrink__1y-P4"}},102:function(e,n,t){e.exports={quotesListTable:"QuotesList_quotesListTable__n-jTm"}},126:function(e,n,t){e.exports={avatar:"Avatar_avatar__328LA"}},127:function(e,n,t){e.exports={createQuoteButton:"RatingInformation_createQuoteButton__1hgre"}},128:function(e,n,t){e.exports={root:"App_root__28qQO",app:"App_app__13Yue"}},155:function(e,n){},158:function(e,n,t){},159:function(e,n,t){},178:function(e,n,t){},179:function(e,n,t){"use strict";t.r(n);var r,o=t(3),a=t.n(o),c=t(93),i=t.n(c),s=t(95),l=t.n(s),u=t(119),d=t(53),j=t(73),b=t(184),p=t(181),h=t(51),_=t(120),O=t(2),m=Object(h.d)(r||(r=Object(d.a)(["\n  type Quote {\n    quoteId: ID\n    rating_address: RatingAddress\n    policy_holder: PolicyHolder\n    variable_options: VariableOptions\n    variable_selections: VariableSelections\n    premium: Integer\n  }\n\n  type RatingAddress {\n    line_1: String\n    line_2: String\n    city: String\n    region: String\n    postal: String\n  }\n  \n  type PolicyHolder {\n    first_name: String\n    last_name: String\n  }\n\n  type VariableOptions {\n    deductible: Deductible\n    asteroid_collision: AsteroidCollision\n  }\n\n  type Deductible {\n    title: String\n    description: String\n    values: [Integer]\n  }\n\n  type AsteroidCollision {\n    title: String\n    description: String\n    values: [Integer]\n  }\n\n  type VariableSelections {\n    deductible: Integer\n    asteroid_collision: Integer\n  }\n"]))),x=new _.RestLink({uri:"https://fed-challenge-api.sure.now.sh/api/v1",responseTransformer:function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.json().then((function(e){return e.quote})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}),f=new j.a({link:x,cache:new b.a,connectToDevTools:!0,typeDefs:m}),g=function(e){var n=e.children;return Object(O.jsx)(p.a,{client:f,children:n})},y=t(44),v=t(6),T=(t(158),t(159),function(e){var n=e.children;return Object(O.jsx)(O.Fragment,{children:n})}),C=t.p+"static/media/logo.838f9047.svg",q=t(10),I=t(21),k=t(36),Q=t(40),S=t.n(Q),w=t(78),N=t.n(w),R=["children"],E=["children"],B=["children"],L=["children"],A=["children"],P=["children"],H=function(e){var n,t=e.Element,r=void 0===t?"p":t,o=e.children,a=e.bold,c=e.uppercase,i=e.textType,s=void 0===i?"body":i,l=e.style;return Object(O.jsx)(r,{className:S()([N.a[s]],(n={},Object(k.a)(n,N.a.bold,a),Object(k.a)(n,N.a.uppercase,c),n)),style:l,children:o})},F=function(e){var n=e.children,t=Object(I.a)(e,R);return Object(O.jsx)(H,Object(q.a)(Object(q.a)({Element:"p"},t),{},{textType:"labelText",children:n}))},D=function(e){var n=e.children,t=Object(I.a)(e,E);return Object(O.jsx)(H,Object(q.a)(Object(q.a)({Element:"p"},t),{},{textType:"buttonText",bold:!0,children:n}))},W=function(e){var n=e.children,t=Object(I.a)(e,B);return Object(O.jsx)(H,Object(q.a)(Object(q.a)({Element:"h1"},t),{},{textType:"h1",bold:!0,children:n}))},V=function(e){var n=e.children,t=Object(I.a)(e,L);return Object(O.jsx)(H,Object(q.a)(Object(q.a)({Element:"h3"},t),{},{textType:"h3",bold:!0,children:n}))},M=function(e){var n=e.children,t=Object(I.a)(e,A);return Object(O.jsx)(H,Object(q.a)(Object(q.a)({Element:"h4"},t),{},{textType:"h4",bold:!0,children:n}))},z=function(e){var n=e.children,t=Object(I.a)(e,P);return Object(O.jsx)(H,Object(q.a)(Object(q.a)({Element:"h5"},t),{},{textType:"h5",bold:!0,children:n}))},J=t(64),Y=t.n(J),G=t(123),X=t(32),Z=t(47),$=t(97),K=t(98),U=[].concat(Object(X.a)(Object.entries($.a)),Object(X.a)(Object.entries(K.a))),ee=[];U.forEach((function(e){ee.push(e[1])})),Z.b.add($.a,K.a);var ne,te,re=t(79),oe=t.n(re),ae=function(e){var n=e.name,t=void 0===n?"check-square":n,r=e.size,o=void 0===r?"medium":r,a=e.spin;return Object(O.jsx)("div",{className:S()(oe.a.icon,oe.a[o],Object(k.a)({},oe.a.spin,a)),children:Object(O.jsx)(G.a,{icon:t})})},ce=function(e){var n=e.children,t=e.onClick,r=e.buttonType,o=void 0===r?"primary":r,a=e.size,c=void 0===a?"medium":a,i=e.disabled,s=e.loading;return Object(O.jsx)("button",{onClick:t,type:"button",className:S()(Y.a.button,Y.a[o],Y.a[c],Object(k.a)({},Y.a.disabled,i)),disabled:i,children:Object(O.jsx)(D,{children:s?Object(O.jsx)(ae,{name:"spinner",size:"small",spin:!0}):n})})},ie=t(80),se=t.n(ie),le=function(e){var n=Object(v.f)();return Object(O.jsxs)("div",{className:se.a.header,children:[Object(O.jsxs)("div",{className:se.a.logoWrapper,onClick:function(){return n("/home")},children:[Object(O.jsx)("img",{src:C,className:se.a.logo,alt:"logo"}),Object(O.jsx)(z,{children:"Rocket Insurance"})]}),Object(O.jsx)("div",{children:Object(O.jsx)(ce,{onClick:function(){return n("/rating")},size:"small",children:"Rating Information"})})]})},ue=t(30),de=function(e){return Object(O.jsxs)(T,{children:[Object(O.jsx)(le,{}),Object(O.jsx)(ue.Grid,{children:Object(O.jsx)(ue.Row,{children:Object(O.jsx)(ue.Col,{children:Object(O.jsx)(v.b,{})})})})]})},je=t(99),be=t.n(je),pe=function(e){var n=Object(v.f)();return Object(O.jsxs)("div",{className:be.a.home,children:[Object(O.jsx)(W,{style:{margin:"15px 0"},children:"Rocket Insurance"}),Object(O.jsx)("img",{src:C,className:be.a.appLogo,alt:"logo"}),Object(O.jsx)(M,{style:{margin:"15px 0"},children:"Sometimes Newton happens. Sign up now!"}),Object(O.jsx)(ce,{onClick:function(){return n("/rating")},children:"BLAST OFF!"})]})},he=t(182),_e=["onCompleted","onError"],Oe=function(e,n){var t=n.onCompleted,r=void 0===t?function(){}:t,o=n.onError,a=void 0===o?function(){}:o,c=Object(I.a)(n,_e);return Object(he.a)(e,Object(q.a)(Object(q.a)({onError:function(e){return a(e)},onCompleted:function(e){return r({data:e})}},c),{},{fetchPolicy:"cache-only"}))},me=Object(h.d)(ne||(ne=Object(d.a)(["\n  query Quotes {\n    quotes: QuoteFull\n  }\n"]))),xe=function(){var e=Oe(me,{}),n=e.data;return e.loading?null:n&&n.quotes&&n.quotes||[]},fe=t(13),ge=t(124),ye=t.n(ge),ve=t(183),Te=["onCompleted","onError"],Ce=function(e,n){var t=n.onCompleted,r=void 0===t?function(){}:t,o=n.onError,a=void 0===o?function(){}:o,c=Object(I.a)(n,Te);return Object(ve.a)(e,Object(q.a)({onError:function(e){return a(e)},onCompleted:function(e){return r({data:e})}},c))},qe=Object(h.d)(te||(te=Object(d.a)(['\n  fragment QuoteInput on REST {\n    ...PolicyHolder\n    address {\n      ...Address\n    }\n  }\n\n  fragment Address on any { \n    line_1\n    line_2\n    city\n    region\n    postal\n  }\n\n  fragment PolicyHolder on any {\n    last_name\n    first_name\n  }\n\n  fragment VariableOptions on Quote {\n    deductible {\n      title\n      description\n      values\n    }\n    asteroid_collision {\n      title\n      description\n      values\n    }\n  }\n\n  fragment VariableSelections on Quote {\n    deductible\n    asteroid_collision\n  }\n\n  fragment QuoteParts on Quote {\n    quoteId\n    policy_holder: PolicyHolder\n    rating_address: Address\n    variable_options: VariableOptions\n    variable_selections: VariableSelections\n    premium\n  }\n\n  mutation CreateQuote($input: QuoteInput!) {\n    createQuote(input: $input) @rest(\n        method: "POST",\n        type: "Quote",\n        path: "/quotes"\n      ) {\n      ...QuoteParts\n    }\n  }\n']))),Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},n=Ce(qe,{update:function(e,n){var t=n.data;if(t&&t.createQuote){var r=t.createQuote,o=e.readQuery({query:me})||{quotes:[]};e.writeQuery({query:me,data:{quotes:[].concat(Object(X.a)(o.quotes),[r])}})}},onCompleted:e});return n},ke=function(e){var n=e.text;return Object(O.jsx)("label",{children:Object(O.jsx)(F,{children:n})})},Qe=t(100),Se=t.n(Qe),we=function(e){var n=e.value,t=e.onChange,r=e.type,o=e.disabled,a=e.label;return Object(O.jsxs)("div",{className:Se.a.inputWrapper,children:[a&&Object(O.jsx)(ke,{text:a}),Object(O.jsx)("input",{className:S()(Se.a.input),value:n,onChange:function(e){t(e,e.currentTarget.value)},type:r,disabled:o})]})},Ne=function(e){return Object(O.jsx)(we,Object(q.a)({},e))},Re=function(){var e=Object(o.useState)(!1),n=Object(fe.a)(e,2),t=n[0],r=n[1],a=Object(o.useState)("Jack"),c=Object(fe.a)(a,2),i=c[0],s=c[1],l=Object(o.useState)("Sparrow"),u=Object(fe.a)(l,2),d=u[0],j=u[1],b=function(){r(!1)},p=Ie((function(){b()})),h=Object(fe.a)(p,2),_=h[0],m=h[1].loading;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ce,{onClick:function(){return r(!0)},children:"Create a Quote"}),Object(O.jsxs)(ye.a,{isOpen:t,onRequestClose:b,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:[Object(O.jsx)(V,{style:{marginBottom:20},children:"Create a Quote"}),Object(O.jsx)(Ne,{label:"First Name",onChange:function(e,n){return s(n)},value:i}),Object(O.jsx)(Ne,{label:"Last Name",onChange:function(e,n){return j(n)},value:d}),Object(O.jsx)(ce,{onClick:function(){_({variables:{input:{first_name:i,last_name:d,address:{line_1:"123 Mulberry Lane",line_2:"3B",city:"Brooklyn",region:"NY",postal:"11211"}}}})},disabled:m||!i||!d,loading:m,children:"Create"})]})]})},Ee=t(125),Be=t.n(Ee),Le=t(126),Ae=t.n(Le),Pe=function(e){var n=e.firstName,t=e.lastName,r=Be()({seed:n+t,luminosity:"dark"}),o=n[0],a=t[0];return Object(O.jsxs)("div",{className:Ae.a.avatar,style:{backgroundColor:r},children:[o,a]})},He=t(101),Fe=t.n(He),De=function(e){var n=e.quote;return n?Object(O.jsxs)("tr",{className:Fe.a.quoteRow,children:[Object(O.jsx)("td",{className:Fe.a.shrink,children:Object(O.jsx)(Pe,{firstName:n.policy_holder.first_name,lastName:n.policy_holder.last_name})}),Object(O.jsx)("td",{children:n.quoteId})]},n.quoteId):null},We=t(102),Ve=t.n(We),Me=function(e){var n=e.quotes;return n&&n.length?Object(O.jsx)("div",{className:Ve.a.quotesList,children:Object(O.jsxs)("table",{className:Ve.a.quotesListTable,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{}),Object(O.jsx)("th",{children:"Name"})]})}),Object(O.jsx)("tbody",{children:n&&n.map((function(e){return Object(O.jsx)(De,{quote:e})}))})]})}):null},ze=t(127),Je=t.n(ze),Ye=function(e){var n=xe();return Object(O.jsx)("div",{children:Object(O.jsxs)(ue.Grid,{children:[Object(O.jsxs)(ue.Row,{children:[Object(O.jsx)(ue.Col,{xs:8,children:Object(O.jsx)(V,{children:"Active Quotes:"})}),Object(O.jsx)(ue.Col,{xs:4,className:Je.a.createQuoteButton,children:Object(O.jsx)(Re,{})})]}),Object(O.jsx)(ue.Row,{children:Object(O.jsx)(ue.Col,{xs:12,children:Object(O.jsx)(Me,{quotes:n})})})]})})},Ge=[{path:"/home",element:Object(O.jsx)(pe,{})},{path:"/",element:Object(O.jsx)(v.a,{to:"/home"})},{path:"/",element:Object(O.jsx)(de,{}),children:[{path:"/rating",element:Object(O.jsx)(Ye,{})}]}],Xe=function(){return Object(v.h)(Ge)},Ze=t(128),$e=t.n(Ze);function Ke(){return Object(O.jsx)("div",{className:$e.a.app,children:Object(O.jsx)(Xe,{})})}var Ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,185)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),a(e),c(e)}))};t(178);i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(y.a,{children:Object(O.jsx)(g,{children:Object(O.jsx)(Ke,{})})})}),document.getElementById("root")),Ue()},64:function(e,n,t){e.exports={button:"Button_button__1EPUx",primary:"Button_primary__10wIM",secondary:"Button_secondary__1rwRo",small:"Button_small__s7vt_",disabled:"Button_disabled__21T4o"}},78:function(e,n,t){e.exports={body:"Typography_body__8m-MI",labelText:"Typography_labelText__epKSJ",buttonText:"Typography_buttonText__mZteb",small:"Typography_small__3wXte",h1:"Typography_h1__1Jdui",h2:"Typography_h2__3lGIL",h3:"Typography_h3__2v2Di",h4:"Typography_h4__Ejkuq",h5:"Typography_h5__104qR",bold:"Typography_bold__gPMvT",uppercase:"Typography_uppercase__1ypBz"}},79:function(e,n,t){e.exports={icon:"Icon_icon__3Qhyv",small:"Icon_small__3pSY_",medium:"Icon_medium__2aom0",large:"Icon_large__3zgZX",spin:"Icon_spin__3eeWj"}},80:function(e,n,t){e.exports={header:"Header_header__30E71",logo:"Header_logo__WwD6M",logoWrapper:"Header_logoWrapper__2kHjB"}},99:function(e,n,t){e.exports={home:"Home_home__1Dk8M",appLogo:"Home_appLogo__3r87T","App-logo-spin":"Home_App-logo-spin__3puk-"}}},[[179,1,2]]]);
//# sourceMappingURL=main.dec4ed01.chunk.js.map