(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],Array(19).concat([function(e,t,a){e.exports=a.p+"static/media/profilepic.2eb05cd7.jpg"},function(e,t,a){e.exports=a.p+"static/media/campsite-finder-logo.208bfabf.png"},function(e,t,a){e.exports=a.p+"static/media/campsite-finder-screenshot-1.79b5b927.png"},function(e,t,a){e.exports=a.p+"static/media/campsite-finder-screenshot-2.cc9bb9b1.png"},function(e,t,a){e.exports=a.p+"static/media/campsite-finder-screenshot-3.d485f318.png"},function(e,t,a){e.exports=a.p+"static/media/project-boolean-logo.0dce6994.png"},function(e,t,a){e.exports=a.p+"static/media/project-boolean-screenshot-1.f5e10f14.png"},function(e,t,a){e.exports=a.p+"static/media/project-boolean-screenshot-2.28326fde.png"},function(e,t,a){e.exports=a.p+"static/media/project-boolean-screenshot-3.3c50d166.png"},function(e,t,a){e.exports=a.p+"static/media/inquire-logo.e36abbfb.png"},function(e,t,a){e.exports=a.p+"static/media/inquire-screenshot-1.1a3d64bc.png"},function(e,t,a){e.exports=a.p+"static/media/inquire-screenshot-2.18fa4b5e.png"},function(e,t,a){e.exports=a.p+"static/media/inquire-screenshot-3.d3c64355.png"},function(e,t,a){e.exports=a.p+"static/media/GitHub_Logo.064ace47.png"},function(e,t,a){e.exports=a.p+"static/media/LI-Logo.c24cde28.png"},,function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),l=a.n(r),s=(a(40),a(6)),c=a(1);var i=function(e){var t=e.to,a=e.newTab,n=e.text;return a?o.a.createElement("div",{className:"flex-auto text-center",id:"resume-linkBtn"},o.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"bg-navyBlue px-4 py-2 rounded-lg"},n)):o.a.createElement("div",{className:"flex-auto text-center",id:"resume-linkBtn"},o.a.createElement("a",{href:t,className:"bg-navyBlue px-4 py-2 rounded-lg"},n))},m=a(19),u=a.n(m),d={view:"https://docs.google.com/document/d/1FAhLfMIWzPaPbqHQfpG83LzAm3j4BUq4rOgi8BgQ1lo/edit?usp=sharing",download:"https://docs.google.com/document/d/1FAhLfMIWzPaPbqHQfpG83LzAm3j4BUq4rOgi8BgQ1lo/export?format=doc"};var p=function(){return o.a.createElement("main",{className:"mx-auto my-4 w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3"},o.a.createElement("h2",{className:"text-2xl py-2"},"About Me"),o.a.createElement("img",{src:u.a,className:"w-64 my-4 mx-auto shadow-md",alt:"Profile"}),o.a.createElement("p",{className:"py-2 px-2 text-justify leading-relaxed"},"As a full-stack web developer, I use experience with multiple technologies to create intentional and engaging sites and applications.  Previous experience in leadership roles provides me with strong teamwork and communication skills necessary for working well in a group.  I pride myself in my sense of initiative for learning, my work ethic, and my ability to finish projects on time."),o.a.createElement("p",{className:"py-2 px-2 text-justify leading-relaxed"},"Proficient in front-end technologies such as HTML, CSS and Javascript, back-end technologies such as MySQL and MongoDB, and libraries such as ReactJS, to make myself well rounded in my abilities to work with full stack applications."),o.a.createElement("h3",{className:"text-xl py-4"},"My resume"),o.a.createElement("article",{className:"flex flex-row mt-2 text-warmYellow"},o.a.createElement(i,{to:d.view,text:"View",newTab:"true"}),o.a.createElement(i,{to:d.download,text:"Download"})))},h=a(9),f=a(10),g=a(12),b=a(11);var x=function(e){var t=e.project,a=e.openOverlay;return o.a.createElement("article",{id:t.id,className:"bg-navyBlue rounded-md cursor-pointer mx-auto my-4 p-4 h-80 w-80 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105",onClick:a.bind(this)},o.a.createElement("h3",{className:"text-xl pb-4"},t.name),o.a.createElement("figure",{className:"flex items-center mx-auto align-middle h-48 w-48"},o.a.createElement("img",{className:"w-48","data-project":t.name,src:t.logo,alt:"".concat(t.name," Logo")})))};var y=function(e){var t=e.buttonCount;return console.log(t),t?o.a.createElement("div",{className:"flex flex-row justify-center items-center my-4"},o.a.createElement("button",{className:"border-l-2 border-b-2 h-4 w-4 transform rotate-45",id:"back"}),t.map((function(e,t){return o.a.createElement("button",{className:"mx-2 h-2 w-2 bg-white rounded-full",id:"imageNumber",name:t,key:t})})),o.a.createElement("button",{className:"border-r-2 border-t-2 h-4 w-4 transform rotate-45",id:"forward"})):o.a.createElement("div",null)};var v=function(e){var t=e.state,a=e.manipulateOverlay;return console.log(t),o.a.createElement("section",{id:"margin",className:"".concat(t.visibility," fixed flex items-center justify-center top-0 left-0 h-full w-full"),onClick:a},o.a.createElement("div",{className:"flex flex-col h-2/3 w-full sm:rounded sm:w-5/6 lg:w-2/3 bg-rustyRed opacity-100 overflow-y-auto"},o.a.createElement("h2",{id:"close",className:"self-end text-white text-xl mx-2 cursor-pointer"},"\u2a2f"),o.a.createElement("a",{className:"block self-center text-3xl text-white my-4",href:t.overlayProject.deploy,target:"_blank",rel:"noopener noreferrer"},t.overlayProject.name),o.a.createElement("article",{className:"flex flex-col justify-center items-center mt-4 h-3/4"},o.a.createElement("img",{className:"max-h-full sm:max-h-20",id:"screenshot",src:t.overlayProject.screenshots?t.overlayProject.screenshots[t.carouselSlide]:"https://via.placeholder.com/150",alt:"".concat(t.overlayProject.name," Screenshots")}),o.a.createElement(y,{buttonCount:t.overlayProject.screenshots})),o.a.createElement("p",{className:"m-4"},t.overlayProject.description),o.a.createElement("p",{className:"m-4"},t.overlayProject.technologies),o.a.createElement("a",{className:"block m-4 self-end",href:t.overlayProject.github,target:"_blank",rel:"noopener noreferrer"},"Github Repository")))},w=a(20),E=a.n(w),N=a(21),k=a.n(N),j=a(22),S=a.n(j),P=a(23),T=a.n(P),O=a(24),B=a.n(O),H=a(25),M=a.n(H),C=a(26),L=a.n(C),q=a(27),A=a.n(q),G=a(28),J=a.n(G),I=a(29),D=a.n(I),Q=a(30),_=a.n(Q),z=a(31),R=a.n(z),W=[{id:0,name:"InQuire",deploy:"https://inquire-6846.herokuapp.com/",github:"https://github.com/damianjuan/Project-3/tree/master",logo:J.a,screenshots:[D.a,_.a,R.a],description:"Create a wide variety of surveys from free response to multiple choice.  Copy the survey link to send it to others,\n            and view the results with graphical representations of the responses.  This web application was designed with safety and security in\n            mind, so it is not required to log in to take surveys, and no personal data is ever saved by the site.",technologies:"Technologies used: HTML, SASS, JavaScript, Git/GitHub"},{id:1,name:"Project Boolean",deploy:"https://project-boolean.herokuapp.com/",github:"https://github.com/HuhnDaniel/project-boolean/tree/master",logo:B.a,screenshots:[M.a,L.a,A.a],description:"Create a form consisting of true and false questions to send to others, then view the results to see the numerical totals of each response.",technologies:"Technologies used: HTML, CSS, JavaScript, NodeJS, Bootstrap, Heroku, JawsDB, Git/GitHub"},{id:2,name:"Campsite Finder",deploy:"https://huhndaniel.github.io/campsite-finder/",github:"https://github.com/HuhnDaniel/campsite-finder/tree/master",logo:E.a,screenshots:[k.a,S.a,T.a],description:"Use this web based application to find campsites near you, search by city name, search by state, or search for a campsite by name.\n            You will be provided with a list of campsites based on your parameters, which you can select from to see site details.",technologies:"Technologies used: HTML, TailwindCSS, JavaScript, MERN Stack, Heroku, JawsDB, Git/GitHub"}],F=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={overlayProject:{},visibility:"invisible",carouselSlide:0},e.openOverlay=function(t){e.setState({overlayProject:W[t.currentTarget.id],visibility:"visible"})},e.manipulateOverlay=function(t){switch(console.log(t.target.id),t.target.id){case"margin":case"close":e.setState({overlayProject:{},visibility:"invisible",carouselSlide:0});break;case"forward":e.setState({carouselSlide:e.state.carouselSlide===e.state.overlayProject.screenshots.length-1?0:e.state.carouselSlide+1});break;case"back":e.setState({carouselSlide:0===e.state.carouselSlide?e.state.overlayProject.screenshots.length-1:e.state.carouselSlide-1});break;case"imageNumber":e.setState({carouselSlide:parseInt(t.target.name)})}},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("main",{className:"mx-auto my-4 w-5/6"},o.a.createElement("h2",{className:"text-2xl py-2"},"Portfolio"),o.a.createElement("section",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"},W.map((function(t){return o.a.createElement(x,{project:t,openOverlay:e.openOverlay,key:t.id})}))),o.a.createElement(v,{state:this.state,manipulateOverlay:this.manipulateOverlay}))}}]),a}(n.Component),U=a(32),Y=a.n(U),V=a(33),$=a.n(V);var K=function(){return o.a.createElement("main",{className:"mx-auto my-4 w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/3"},o.a.createElement("h2",{className:"text-2xl py-2"},"Contact Me"),o.a.createElement("article",{className:"flex flex-row"},o.a.createElement("a",{className:"flex-1 self-center",href:"https://www.linkedin.com/in/danielmoody-huhn/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:"w-32 mx-auto",id:"linkedin-logo",src:$.a,alt:"Linkedn link"})),o.a.createElement("a",{className:"flex-1 self-center",href:"https://github.com/HuhnDaniel",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:"w-32 mx-auto",id:"github-logo",src:Y.a,alt:"GitHub link"}))),o.a.createElement("h3",{className:"text-xl py-4"},"Email me: ",o.a.createElement("a",{className:"text-blue-500",href:"mailto:danielphuhn@gmail.com"},"danielphuhn@gmail.com")))};var X=function(){return o.a.createElement("ul",{className:"flex-auto flex flex-row"},o.a.createElement("li",{className:"flex-auto text-center text-2xl p-4"},o.a.createElement(s.b,{to:"/"},"About")),o.a.createElement("li",{className:"flex-auto text-center text-2xl p-4"},o.a.createElement(s.b,{to:"/portfolio"},"Portfolio")),o.a.createElement("li",{className:"flex-auto text-center text-2xl p-4"},o.a.createElement(s.b,{to:"/contact"},"Contact")))};var Z=function(e){var t=e.handleMenuToggle,a=e.menuToggle;return o.a.createElement("div",{className:"flex-auto"},o.a.createElement("h1",{className:"text-center text-3xl font-semibold p-4 cursor-pointer md:hidden","data-toggle":a,onClick:t},"\u2630"),o.a.createElement("div",{className:"hidden md:block"},o.a.createElement(X,null)))},ee=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={menuToggle:"hidden"},e.handleMenuToggle=function(t){"hidden"===t.target.attributes.getNamedItem("data-toggle").value?e.setState({menuToggle:"block"}):e.setState({menuToggle:"hidden"})},e}return Object(f.a)(a,[{key:"render",value:function(){return o.a.createElement("header",{className:"bg-navyBlue text-warmYellow"},o.a.createElement("div",{className:"flex flex-row"},o.a.createElement(s.b,{className:"flex-auto text-center text-3xl p-4",to:"/"},"Daniel Moody-Huhn"),o.a.createElement(Z,{handleMenuToggle:this.handleMenuToggle,menuToggle:this.state.menuToggle})),o.a.createElement("div",{className:"".concat(this.state.menuToggle," md:hidden"),id:"mobile-menu"},o.a.createElement(X,null)))}}]),a}(n.Component);var te=function(){return o.a.createElement(s.a,null,o.a.createElement(ee,null),o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/portfolio",component:F}),o.a.createElement(c.a,{exact:!0,path:"/contact",component:K}),o.a.createElement(c.a,{exact:!0,path:"/*",component:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[35,1,2]]]);
//# sourceMappingURL=main.d6b12503.chunk.js.map