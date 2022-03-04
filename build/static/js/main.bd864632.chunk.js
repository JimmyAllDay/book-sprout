(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/sprout-logo.8c627c56.svg"},23:function(e,t,a){e.exports=a(38)},28:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),s=a.n(r),i=a(5),c=a(6),l=a(8),u=a(7),d=a(9),h=(a(28),a(2)),m=a(19),b=a.n(m),f=a(21),p=a(10),k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={shown:!1},e.setIsShown=e.setIsShown.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"setIsShown",value:function(e){this.setState({shown:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"list-books-title"},o.a.createElement("div",{className:"nav-container"},o.a.createElement("div",{className:"nav-title"},o.a.createElement(p.b,{to:"/"},o.a.createElement("h1",null,"Book Sprout")),o.a.createElement("p",{className:"nav-subtitle"},"Grow your knowledge")),o.a.createElement("div",{className:"sprout-logo"},o.a.createElement("img",{src:b.a,alt:"sprout logo"})),o.a.createElement("div",{className:"question-icon-container"},o.a.createElement(f.a,{onMouseEnter:function(){return e.setIsShown(!0)},onMouseLeave:function(){return e.setIsShown(!1)},className:"question-icon"}),this.state.shown&&o.a.createElement("div",{className:"tool-tip tool-tip-anim"},o.a.createElement("span",null,"Book Sprout")," is a branded component built with the Udacity MyReads API. To grow your reading list, use a searchable term on the searchpage, find your book, and click the book shelf changer button to add it to a category. Thanks to the API, state persists across uses."))))}}]),t}(n.Component),v=a(22),E=function(e){var t=e.title.toLowerCase().split(" ").join(""),a=e.booksMap.filter(function(e){return e.props.shelf.toLowerCase()===t});return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},e.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},0===a.length?"Add a book to this shelf":a)))},g=function(e){return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:e.shelf,onChange:function(t){e.bookListHandler(e.id),e.bookShelfHandler(t.target.value,e.id),function(e,t){var a={method:"PUT",headers:{Authorization:"JimmyAllDayWantsBooksData","Content-Type":"application/json"},body:JSON.stringify({shelf:e})};fetch("https://reactnd-books-api.udacity.com/books/".concat(t),a).catch(function(e){console.error("Error:",e)})}(t.target.value,e.id)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))},O=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,a=e.title,n=e.authors;return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'.concat(t,'")')}}),o.a.createElement(g,{shelf:this.props.shelf,id:this.props.id,bookShelfHandler:this.props.bookShelfHandler,bookListHandler:this.props.bookListHandler})),o.a.createElement("div",{className:"book-title"},a),o.a.createElement("div",{className:"book-authors"},n)))}}]),t}(n.Component),y=function(e){return o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},e.foundBooks))},j=["Android","Artificial Intelligence","Astronomy","Austen","Baseball","Basketball","Bhagat","Biography","Brief","Business","Camus","Cervantes","Christie","Classics","Comics","Cook","Cricket","Cycling","Desai","Design","Development","Digital Marketing","Drama","Drawing","Dumas","Education","Everything","Fantasy","Film","Finance","First","Fitness","Football","Future","Games","Gandhi","Homer","Horror","Hugo","Ibsen","Javascript","Journey","Kafka","King","Lahiri","Larsson","Learn","Literary Fiction","Make","Manage","Marquez","Money","Mystery","Negotiate","Painting","Philosophy","Photography","Poetry","Production","Programming","React","Redux","River","Robotics","Rowling","Satire","Science Fiction","Shakespeare","Singh","Swimming","Tale","Thrun","Time","Tolstoy","Travel","Ultimate","Virtual Reality","Web Development","iOS"],H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onFocusHandler=function(){a.setState({shown:!0})},a.closeListHandler=function(){a.setState({shown:!1})},a.filterTerms=function(e,t){var n=e.target.value.trim().toLowerCase(),o=t.filter(function(e){return e.toLowerCase().includes(n)});return a.setState({userSearch:o})},a.userInputHandler=function(e){a.setState({userInput:e},function(){a.props.getBooks(a.state.userInput)})},a.clickHandler=function(e){a.setState({userInput:e,userSearch:[e]},function(){a.props.getBooks(a.state.userInput)})},a.state={userInput:"",shown:!1,searchTerms:j,userSearch:j},a.onFocusHandler=a.onFocusHandler.bind(Object(h.a)(Object(h.a)(a))),a.closeListHandler=a.closeListHandler.bind(Object(h.a)(Object(h.a)(a))),a.filterTerms=a.filterTerms.bind(Object(h.a)(Object(h.a)(a))),a.userInputHandler=a.userInputHandler.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("div",{className:"search-books",onFocus:function(){return e.onFocusHandler(e.state.searchTerms)}},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(p.b,{to:"/"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"search",placeholder:"Enter search term",value:this.state.userInput,onChange:function(t){e.userInputHandler(t.target.value),e.filterTerms(t,e.state.searchTerms)}}))),this.state.shown&&o.a.createElement(S,{className:"datalist",searchTerms:this.state.userSearch,clickHandler:this.clickHandler,hideDivHandler:this.closeListHandler}))),o.a.createElement(y,{bookShelfHandler:this.props.bookShelfHandler,bookListHandler:this.props.bookListHandler,foundBooks:this.props.foundBooks}))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a.wrapperRef=o.a.createRef(),a.setWrapperRef=a.setWrapperRef.bind(Object(h.a)(Object(h.a)(a))),a.handleClickOutside=a.handleClickOutside.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderList",value:function(){var e=this;return this.props.searchTerms.map(function(t,a){return o.a.createElement("div",{key:a,className:"datalist-term",value:t,onClick:function(t){e.props.clickHandler(t.target.getAttribute("value").toString()),e.props.hideDivHandler()}},t)})}},{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.current.contains(e.target)&&this.props.hideDivHandler()}},{key:"render",value:function(){return o.a.createElement("div",{ref:this.wrapperRef,className:"search-datalist",style:{border:"black solid 1px"}},this.props.searchTerms.length>0?this.renderList():o.a.createElement("p",null,"No search terms with that search string. Try another."))}}]),t}(n.Component),w=H,N=function(){return o.a.createElement("div",{className:"open-search"},o.a.createElement(p.b,{to:"/search"},o.a.createElement("div",{className:"search-button"},"Add a book")))},L=a(1),B=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).validateSearch=function(t){t.trim(),""!==t&&e.setState(function(){return{search:t}})},e.getBooks=function(t){var a=e.state.foundBooks.splice(0,e.state.foundBooks.length),n=function(){e.setState({noBooks:a})},o={method:"POST",headers:{Authorization:e.authHeader,"Content-Type":"application/json"},body:JSON.stringify({query:t,maxResults:20})};""!==t&&fetch("".concat(e.initURL,"/search"),o).then(function(e){return e.json()}).then(function(t){t.error||t.books.error||t.books===[]?n():function(t){var a=function(e,t){return e.filter(function(e){return!t.find(function(t){return t.id===e.id})})},n=a(t,e.state.books),o=a(e.state.books,t),r=a(n.concat(e.state.books),o);e.setState(function(){return{foundBooks:r}})}(t.books)}).catch(null),""===t&&n()},e.bookListHandler=function(t){var a=null;e.state.foundBooks.forEach(function(n){n.id===t&&(a=e.state.foundBooks.indexOf(n))});var n=e.state.foundBooks.splice(a,1),o=function(e,t){var a=[];if(t.length>0){var n=t[0].id;e.forEach(function(t,o){return n===t.id?e.splice(o,-1):a.push(t)})}else e.forEach(function(e){a.push(e)});return a.concat(t)}(e.state.books,n);e.setState({books:o})},e.state={books:[],search:"",foundBooks:[]},e.initURL="https://reactnd-books-api.udacity.com",e.authHeader="JimmyAllDayWantsBooksData",e.options={headers:{Authorization:e.authHeader}},e.getBooks=e.getBooks.bind(Object(h.a)(Object(h.a)(e))),e.bookShelfHandler=e.bookShelfHandler.bind(Object(h.a)(Object(h.a)(e))),e.bookListHandler=e.bookListHandler.bind(Object(h.a)(Object(h.a)(e))),e.validateSearch=e.validateSearch.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(this.initURL,"/books"),this.options).then(function(e){return e.json()}).then(function(t){e.setState(function(){return{books:t.books}})})}},{key:"bookShelfHandler",value:function(e,t){this.setState(function(a){return{books:a.books.map(function(a){return a.id===t?Object(v.a)({},a,{shelf:e}):a})}})}},{key:"render",value:function(){var e=this,t=function(t){return t.map(function(t){return o.a.createElement(O,{key:t.id,id:t.id,image:t.imageLinks?t.imageLinks.smallThumbnail:null,title:t.title,authors:t.authors,shelf:t.shelf?t.shelf:"none",bookShelfHandler:e.bookShelfHandler,bookListHandler:e.bookListHandler})})},a=["Want to Read","Currently Reading","Read"];return o.a.createElement("div",{className:"bookshelf"},o.a.createElement(L.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",{className:"list-books-content"},(n=t(e.state.books),a.map(function(e){return o.a.createElement(E,{key:e,booksMap:n,title:e})})),o.a.createElement(N,null));var n}}),o.a.createElement(L.a,{path:"/search",render:function(){return o.a.createElement(w,{bookShelfHandler:e.bookShelfHandler,bookListHandler:e.bookListHandler,foundBooks:t(e.state.foundBooks),getBooks:e.getBooks})}}))}}]),t}(n.Component),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"list-books"},o.a.createElement(k,null),o.a.createElement(B,null)))}}]),t}(o.a.Component);a(36);s.a.render(o.a.createElement(p.a,null,o.a.createElement(C,null)),document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.bd864632.chunk.js.map