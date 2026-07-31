window.bablic=window.bablic||{};bablic.Site='65329703b457cd000198118f';bablic.j=function(){};bablic.version=3.9;bablic.conf=[1785168220942,"en",0,0,1,1,1,1,[[0,0,0,0,"es","Español",0,0,["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],0,0,[1,4,2,3],[],[],"es",[],{}],[0,0,0,0,"fr","Français",0,0,["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],0,0,[1,4,2,3],[],[],"fr-FR",[],{}],[0,0,1,0,"ar","العربية",0,0,["يناير/ كانون الثاني","فبراير/ شباط","مارس/ آذار","أبريل/ نيسان","مايو/ أيار","يونيو/ حزيران","يوليو/ تموز","أغسطس/ آب","سبتمبر/ أيلول","أكتوبر/ تشرين الأول","نوفمبر/ تشرين الثاني","ديسمبر/ كانون الأول"],0,0,[1,4,2,3,5],[],[],"ar-AR",[],{}],[0,0,0,0,"pt","Português",0,0,["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],0,0,[1,4,2,3],[],[],"pt-PT",[],{}],[0,0,0,0,"hi","मानक हिन्दी",0,0,["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्टूबर","नवम्बर","दिसम्बर"],0,0,[1,4,2,3],[],[],"hi-IN",[],{}],[0,0,0,0,"de","Deutsch",0,0,["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],0,0,[1,4,2,3],[],[],"de-DE",[],{}],[0,0,0,0,"ko","한국어",0,0,["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],0,0,[1,4,2,3],[],[],"ko-KR",[],{}],[0,0,0,"www.aquatech.com/","en","English","en_us",0,["January","February","March","April","May","June","July","August","September","October","November","December"],0,0,[],0,0,"en",[],{"dir":"ltr","name":"English","originalName":"English","prefix":null,"iso":"en","months":["January","February","March","April","May","June","July","August","September","October","November","December"],"days":[],"dateFormat":"","timeFormat":"","quantityFormat":"","percentFormat":"","durationFormat":""}]],[[1,0,1,3,0,0,[5,350,"px",0],["#01AEDA","#262e30","#ffffff","#262626"],0,0,0,0],[1,0,1,2,0,0,[5,20,"px",0],["#01AEDA","#262e30","#ffffff","#262626"],0,0,0,0]],1,"#wpadminbar,#wp-admin-bar-my-account,.gm-style,.gm-sm,.pac-container","",0,0,0,0,"aquatech.com/",0,{},[],[],[["www.aquatech.com"]],0,"",0,"en",1,["es","fr","ar","pt","hi","de","ko","tr","th"],0,[],0,1,0,3.9,["_v",1.2]];var bablic = window.bablic || window._bab || {};
(function(){
    var loadAll = function (bablic, WIN) {

    if(bablic.ignoreAll)
        return;
    // get the parent editor window object
    var EDITOR_FRAME;
    var EDITOR;
    // get Bablic Top
    var winObject = WIN;
    do {
        winObject = winObject.parent;
        try {
            if (winObject.VisualEditor) {
                EDITOR = winObject.VisualEditor;
                EDITOR_FRAME = winObject;
            }
        }
        catch (e) {}
    }
    while (winObject.parent !== winObject);

    if(bablic.Mutation && bablic.Site) {
        bablic.isActivated = true;
        console.log('Bablic already loaded');

        try {
            if (EDITOR && EDITOR.snippetDetected)
                EDITOR.snippetDetected();
            else if (bablic.preview) {
                var interval = setInterval(function () {
                    var editorFrame;
                    for(var i=0; i<window.frames.length; i++){
                        var f = window.frames[i];
                        try {
                            if (f && f.editor && f.editor.snippetDetected) {
                                editorFrame = f;
                                break;
                            }
                        }
                        catch(e){}
                    }

                    if (!editorFrame)
                        return;
                    clearInterval(interval);
                    editorFrame.editor.snippetDetected();
                }, 300);

            }
        }
        catch(e){}
        return;
    }

    var HAS_LOCAL_STORAGE = false;
    try{
        HAS_LOCAL_STORAGE = !!WIN.localStorage;
    }catch (e){
        HAS_LOCAL_STORAGE = false;
    }



    var DOC = WIN.document;
    var LOC = WIN.location;
    var PROXY = bablic.proxy = /pipe(\.staging)?\.bablic\.com$/.test(LOC.hostname);
    var strundefined = 'undefined';
    if(PROXY && DOC.domain != 'bablic.com') {
        try {
            DOC.domain = 'bablic.com';
        }
        catch (e) {}
    }
    try {
        DOC.getElementById("BABLIC_CHECK") && (bablic.preview = true);
        EDITOR && (bablic.preview = true);
    }
    catch(e){}
;
window.bablic = window.bablic || {};
var Modernizr;
(function(){

    var lastMod = window.Modernizr;
    try {
        /*! modernizr 3.3.1 (Custom Build) | MIT *
         * https://modernizr.com/download/?-cssanimations-csstransforms-csstransitions-indexeddb-input-localstorage-touchevents-domprefixes-hasevent-prefixes-testallprops !*/
        !function (e, t, n) {
            function r(e, t) {
                return typeof e === t
            }

            function o() {
                var e, t, n, o, i, s, a;
                for (var u in y)if (y.hasOwnProperty(u)) {
                    if (e = [], t = y[u], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))for (n = 0; n < t.options.aliases.length; n++)e.push(t.options.aliases[n].toLowerCase());
                    for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++)s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), x.push((o ? "" : "no-") + a.join("-"))
                }
            }

            function i(e) {
                return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
                    return t + n.toUpperCase()
                }).replace(/^-/, "")
            }

            function s() {
                return "function" != typeof t.createElement ? t.createElement(arguments[0]) : z ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
            }

            function a(e, t) {
                return !!~("" + e).indexOf(t)
            }

            function u(e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            }

            function l(e, t, n) {
                var o;
                for (var i in e)if (e[i] in t)return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? u(o, n || t) : o);
                return !1
            }

            function f() {
                var e = t.body;
                return e || (e = s(z ? "svg" : "body"), e.fake = !0), e
            }

            function d(e, n, r, o) {
                var i, a, u, l, d = "modernizr", c = s("div"), p = f();
                if (parseInt(r, 10))for (; r--;)u = s("div"), u.id = o ? o[r] : d + (r + 1), c.appendChild(u);
                return i = s("style"), i.type = "text/css", i.id = "s" + d, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), c.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = T.style.overflow, T.style.overflow = "hidden", T.appendChild(p)), a = n(c, e), p.fake ? (p.parentNode.removeChild(p), T.style.overflow = l, T.offsetHeight) : c.parentNode.removeChild(c), !!a
            }

            function c(e) {
                return e.replace(/([A-Z])/g, function (e, t) {
                    return "-" + t.toLowerCase()
                }).replace(/^ms-/, "-ms-")
            }

            function p(t, r) {
                var o = t.length;
                if (e && "CSS" in e && "supports" in e.CSS) {
                    for (; o--;)if (e.CSS.supports(c(t[o]), r))return !0;
                    return !1
                }
                if (e && "CSSSupportsRule" in e) {
                    for (var i = []; o--;)i.push("(" + c(t[o]) + ":" + r + ")");
                    return i = i.join(" or "), d("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
                        return "absolute" == getComputedStyle(e, null).position
                    })
                }
                return n
            }

            function m(e, t, o, u) {
                function l() {
                    d && (delete O.style, delete O.modElem)
                }

                if (u = r(u, "undefined") ? !1 : u, !r(o, "undefined")) {
                    var f = p(e, o);
                    if (!r(f, "undefined"))return f
                }
                for (var d, c, m, v, h, y = ["modernizr", "tspan", "samp"]; !O.style && y.length;)d = !0, O.modElem = s(y.shift()), O.style = O.modElem.style;
                for (m = e.length, c = 0; m > c; c++)if (v = e[c], h = O.style[v], a(v, "-") && (v = i(v)), O.style[v] !== n) {
                    if (u || r(o, "undefined"))return l(), "pfx" == t ? v : !0;
                    try {
                        O.style[v] = o
                    } catch (g) {
                    }
                    if (O.style[v] != h)return l(), "pfx" == t ? v : !0
                }
                return l(), !1
            }

            function v(e, t, n, o, i) {
                var s = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + _.join(s + " ") + s).split(" ");
                return r(t, "string") || r(t, "undefined") ? m(a, t, o, i) : (a = (e + " " + S.join(s + " ") + s).split(" "), l(a, t, n))
            }

            function h(e, t, r) {
                return v(e, n, n, t, r)
            }

            var y = [], g = {
                _version: "3.3.1",
                _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
                _q: [],
                on: function (e, t) {
                    var n = this;
                    setTimeout(function () {
                        t(n[e])
                    }, 0)
                },
                addTest: function (e, t, n) {
                    y.push({name: e, fn: t, options: n})
                },
                addAsyncTest: function (e) {
                    y.push({name: null, fn: e})
                }
            }, Modernizr = function () {
            };
            Modernizr.prototype = g, Modernizr = new Modernizr, Modernizr.addTest("localstorage", function () {
                var e = "modernizr";
                try {
                    return localStorage.setItem(e, e), localStorage.removeItem(e), !0
                } catch (t) {
                    return !1
                }
            });
            var C = g._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
            g._prefixes = C;
            var x = [], w = "Moz O ms Webkit", S = g._config.usePrefixes ? w.toLowerCase().split(" ") : [];
            g._domPrefixes = S;
            var _ = g._config.usePrefixes ? w.split(" ") : [];
            g._cssomPrefixes = _;
            var b = function (t) {
                var r, o = C.length, i = e.CSSRule;
                if ("undefined" == typeof i)return n;
                if (!t)return !1;
                if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in i)return "@" + t;
                for (var s = 0; o > s; s++) {
                    var a = C[s], u = a.toUpperCase() + "_" + r;
                    if (u in i)return "@-" + a.toLowerCase() + "-" + t
                }
                return !1
            };
            g.atRule = b;
            var T = t.documentElement, z = "svg" === T.nodeName.toLowerCase(), E = function () {
                function e(e, t) {
                    var o;
                    return e ? (t && "string" != typeof t || (t = s(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = s("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1
                }

                var r = !("onblur" in t.documentElement);
                return e
            }();
            g.hasEvent = E;
            var A = s("input"),
                P = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "), L = {};
            Modernizr.input = function (t) {
                for (var n = 0, r = t.length; r > n; n++)L[t[n]] = !!(t[n] in A);
                return L.list && (L.list = !(!s("datalist") || !e.HTMLDataListElement)), L
            }(P);
            var k = g.testStyles = d;
            Modernizr.addTest("touchevents", function () {
                var n;
                if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0; else {
                    var r = ["@media (", C.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                    k(r, function (e) {
                        n = 9 === e.offsetTop
                    })
                }
                return n
            });
            var N = {elem: s("modernizr")};
            Modernizr._q.push(function () {
                delete N.elem
            });
            var O = {style: N.elem.style};
            Modernizr._q.unshift(function () {
                delete O.style
            }), g.testAllProps = v, g.testAllProps = h, Modernizr.addTest("cssanimations", h("animationName", "a", !0)), Modernizr.addTest("csstransforms", function () {
                return -1 === navigator.userAgent.indexOf("Android 2.") && h("transform", "scale(1)", !0)
            }), Modernizr.addTest("csstransitions", h("transition", "all", !0));
            var j, q = g.prefixed = function (e, t, n) {
                return 0 === e.indexOf("@") ? b(e) : (-1 != e.indexOf("-") && (e = i(e)), t ? v(e, t, n) : v(e, "pfx"))
            };
            try {
                j = q("indexedDB", e)
            } catch (D) {
            }
            Modernizr.addTest("indexeddb", !!j), j && Modernizr.addTest("indexeddb.deletedatabase", "deleteDatabase" in j), o(), delete g.addTest, delete g.addAsyncTest;
            for (var R = 0; R < Modernizr._q.length; R++)Modernizr._q[R]();
            e.Modernizr = Modernizr
        }(window, document);

    }catch(e){
        Modernizr = {touchevents:false};
    }
    Modernizr = bablic.Modernizr = window.Modernizr;
    window.Modernizr = lastMod;
})();
;


var d = DOC;

var $;
(function(){
    if(!d.contains)
        d.contains = function(element){
            do{
                if(element.tagName == 'HTML')
                    return true;
                element = element.parentNode;
            }
            while(element);
            return false;
        };
    if (!Array.prototype.findIndex)
        Array.prototype.findIndex = function(predicate) {
            for (var i = 0; i < this.length; i++) {
                if (predicate(this[i]))
                    return i;
            }
            return -1;
        };
    if (!Array.prototype.find)
        Array.prototype.find = function(predicate) {
            for (var i = 0; i < this.length; i++) {
                if (predicate(this[i]))
                    return this[i];
            }
            return null;
        };
    if (!Array.prototype.includes)
        Array.prototype.includes = function(item) {
            return this.indexOf(item) > -1;
        };
    if (!String.prototype.includes)
        String.prototype.includes = function(search, start) {
            return this.indexOf(search, start) > -1;
        };
    var EmptyClass = function(){};
    var htmlColl = typeof(HTMLCollection) == strundefined ? EmptyClass : HTMLCollection;
    var nodeList = typeof(NodeList) == strundefined ? EmptyClass : NodeList;
    var jQuery;
    jQuery = function(value,context){
        if(!(this instanceof jQuery))
            return new jQuery(value,context);
        if(!value)
            return;
        var element;
        if(typeof(value) == 'string') {
            if(value[0] == '<')
                element = htmlToDom(value);
            else
                element = (context || d).querySelectorAll(value);
        }
        else if(value instanceof jQuery)
            return value;
        else if(value === WIN || (value.self && value.self == value))
            element = [value];
        else if(value.nodeType)
            element = [value];
        else if(Array.isArray(value) || value instanceof htmlColl || value.constructor.name == 'HTMLCollection' || value instanceof nodeList || value === d || typeof(value.length) == 'number')
            element = value;

        this.element = element;
    };
    var trimPre = /^\s+/, trimSuf = /\s+$/;
    var trim = function(str){
        if(str.trim)
            return str.trim();
        return str.replace(trimPre,'').replace(trimSuf,'');
    };
    if(!String.prototype.trim)
        String.prototype.trim = function(){
            return this.replace(trimPre,'').replace(trimSuf,'');
        };
    var htmlToDom = function(html){
        tmp.innerHTML = trim(html);
        return tmp.childNodes[0];
    };
    var tmp = d.createElement('div');
    var _extend = function(to,from){
        for(var key in from){
            to[key] = from[key];
        }
    };
    jQuery.extend = function(target,srouce) {
        for(var i=1;i<arguments.length;i++){
            _extend(target,arguments[i]);
        }
        return target;
    };
    jQuery.each = function(arr,iterator){
        if(typeof(arr.length) != 'undefined') {
            for (var i = 0; i < arr.length; i++)
                iterator(i, arr[i]);
        }
        else {
            for(var key in arr){
                iterator(key,arr[key]);
            }
        }
        return arr;
    };
    jQuery.map = function(arr,iterator){
        var ret = new Array();
        if(typeof(arr.length) != 'undefined') {
            for (var i = 0; i < arr.length; i++) {
                var mapped = iterator(arr[i], i);
                if (mapped === null)
                    continue;
                if (Array.isArray(mapped))
                    Array.prototype.push.apply(ret, mapped);
                else
                    ret.push(mapped);
            }
        }
        else {
            for(var key in arr){
                ret.push(iterator(arr[key],key));
            }
        }
        return ret;
    };
    jQuery.grep = function(arr,iterator){
        var ret = new Array();
        for(var i=0; i<arr.length; i++){
            if(iterator(arr[i]))
                ret.push(arr[i]);
        }
        return ret;
    };
    jQuery.isEmptyObject = function(value){
        return !value || Object.keys(value).length == 0;
    };
    jQuery.isArray = function(arr){
        return Array.isArray(arr);
    };
    jQuery.byTag = function(tag,doc){
        return new jQuery((doc || d).getElementsByTagName(tag));
    };
    jQuery.byId = function(id,doc){
        return new jQuery((doc || d).getElementById(id));
    };
    jQuery.byClass = function(c,doc){
        return new jQuery('.' + c,doc);
    };
    jQuery.makeArray = function(args){
        return Array.prototype.slice.apply(args,[]);
    };
    jQuery.inArray = function(item,arr){
        if(arr.indexOf)
            return arr.indexOf(item);
        for(var i=0; i<arr.length; i++){
            if(arr[i] === item)
                return i;
        }
        return -1;
    };
    jQuery.trim = trim;
    var rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi,

        // Used by jQuery.camelCase as callback to replace()
        fcamelCase = function( all, letter ) {
            return letter.toUpperCase();
        };
    jQuery.camelCase = 	function( string ) {
        return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
    };

    jQuery.window = {
        width:function(){
            return WIN.innerWidth;
        },
        height:function(){
            return WIN.innerHeight;
        }
    };

    function single(jquery){
        if(!jquery.element)
            return null;
        return typeof(jquery.element.length) == 'number' ? jquery.element[0] : jquery.element;
    }


    var removeEvent = d.removeEventListener ?
        function( elem, type, handle ) {
            if ( elem.removeEventListener ) {
                elem.removeEventListener( type, handle, false );
            }
        } :
        function( elem, type, handle ) {
            var name = "on" + type;
            if ( elem.detachEvent ) {
                if ( typeof elem[ name ] === strundefined ) {
                    elem[ name ] = null;
                }
                elem.detachEvent( name, handle );
            }
        };

    var getText = function(elem){
        var node,
            ret = "",
            i = 0,
            nodeType = elem.nodeType;

        if ( !nodeType ) {
            // If no nodeType, this is expected to be an array
            while ( (node = elem[i++]) ) {
                // Do not traverse comment nodes
                ret += getText( node );
            }
        } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
            // Use textContent for elements
            // innerText usage removed for consistency of new lines (jQuery #11153)
            if ( typeof elem.textContent === "string" ) {
                return elem.textContent;
            } else {
                // Traverse its children
                for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
                    ret += getText( elem );
                }
            }
        } else if ( nodeType === 3 || nodeType === 4 ) {
            return elem.nodeValue;
        }
        // Do not include comment or processing instruction nodes

        return ret;
    };


    jQuery.prototype.length = function(){
        if(!this.element)
            return 0;
        return typeof(this.element.length) == 'number' ? this.element.length : (this.element ? 1 : 0);
    };
    jQuery.prototype.parent = function(){
        var element = single(this);
        if(!element)
            return new jQuery();
        var parent = element.parentElement;
        return new jQuery(parent);
    };
    jQuery.prototype.hasParent = function(selector){
        var element = single(this);
        if(!element)
            return false;
        while(element.parentNode){
            if(is(element.parentNode,selector))
                return true;
            element = element.parentNode;
        }
        return false;
    };
    jQuery.prototype.parents = function(selector){
        var parents = [];
        var element = single(this);
        if(!element)
            return parents;
        while(element.parentNode){
            if(!selector || is(element.parentNode,selector))
                parents.push(element.parentNode);
            element = element.parentNode;
        }
        return parents;
    };
    jQuery.prototype.children = function(sel){
        var children = [];
        this.each(function(){
            var thisChildren = jQuery.grep(this.childNodes,function(c){
                return c.nodeType == 1 && (!sel || (new jQuery(c)).is(sel));
            });
            children = children.concat(thisChildren);
        });
        return new jQuery(children);
    };
    jQuery.prototype.filter = function(sel){
        var filtered = [];
        this.each(function(){
            if(is(this,sel))
                filtered.push(this);
        });
        return new jQuery(filtered);
    };

    jQuery.prototype.attr = function(key,value){
        if(typeof(value) == strundefined) {
            var element = single(this);
            return element ? element.getAttribute(key) : '';
        }
        this.each(function(){
            if(value === '')
                this.removeAttribute(key);
            else
                this.setAttribute(key,value === true ? '' : value);
        });
        return this;
    };
    jQuery.prototype.add = function(element){
        var newElements = [element];
        this.each(function() {
            newElements.push(this);
        });
        this.element = newElements;
        return this;
    }
    jQuery.prototype.get = function(i){
        return typeof(this.element.length) == 'number' ? this.element[i] : this.element;
    };

    jQuery.prototype.html = function(value){
        var element = single(this);
        if(!element)
            return this;
        if(typeof(value) == strundefined)
            return element.innerHTML;
        element.innerHTML = value;
        return this;
    };
    jQuery.prototype.each = function(func){
        if(!this.element)
            return this;
        if(typeof(this.element.length) == 'number'){
            for(var i=0; i<this.element.length; i++)
                func.apply(this.element[i],[i]);
        }
        else
            func.apply(this.element,[0]);
        return this;
    };
    jQuery.prototype.remove = function(){
        this.each(function(){
            if(!this.parentNode)
                return;
            this.parentNode.removeChild(this);
        });
        return this;
    };
    jQuery.prototype.appendTo = function(target){
        var j = new jQuery(target);
        var element = single(j);
        if(!element)
            return this;
        this.each(function(){
            element.appendChild(this);
        });
        return this;
    };
    jQuery.prototype.insertBefore = function(target){
        var j = new jQuery(target);
        var element = single(j);
        if(!element)
            return this;
        var parent = element.parentNode;
        if(!parent)
            return this;
        this.each(function(){
            parent.insertBefore(this,element);
        });
        return this;
    };
    jQuery.prototype.append = function(content){
        var j = new jQuery(content);
        var element = single(j);
        if(!element)
            return this;
        var me = single(this);
        if(!me)
            return this;
        me.appendChild(element);
        return this;
    };
    jQuery.prototype.on = function(type,eventHandle){
        this.each(function(){
            // Bind the global event handler to the element
            if ( this.addEventListener ) {
                this.addEventListener( type, eventHandle, false );

            } else if ( this.attachEvent ) {
                this.attachEvent( "on" + type, eventHandle );
            }
        });
        return this;
    };
    jQuery.prototype.once = function(type,eventHandle){
        this.each(function(){
            var handler = function(e){
                removeEvent(this, type, handler);
                return eventHandle.apply(this,arguments);
            };
            // Bind the global event handler to the element
            if ( this.addEventListener ) {
                this.addEventListener( type, handler, false );

            } else if ( this.attachEvent ) {
                this.attachEvent( "on" + type, handler );
            }
        });
        return this;
    };
    jQuery.prototype.off = function(type,eventHandle){
        this.each(function(){
            removeEvent(this,type,eventHandle);
        });
        return this;
    };
    jQuery.prototype.width = function(){
        var element = single(this);
        if(!element)
            return 0;
        return element.clientWidth;
    };
    jQuery.prototype.height = function(){
        var element = single(this);
        if(!element)
            return 0;
        return element.clientHeight;
    };
    jQuery.prototype.is = function(sel){
        var element = single(this);
        if(!element)
            return false;
        return is(element,sel);
    };
    var is = function(element,sel){
        element.matches = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || element.oMatchesSelector;
        if(!element.matches)
            return false;
        return element.matches(sel);
    }
    jQuery.prototype.toArray = function(){
        if(!this.element)
            return [];
        if(typeof(this.element.length) == 'number'){
            if(Array.isArray(this.element))
                return this.element;
            return jQuery.makeArray(this.element);
        }
        return [this.element];
    };
    jQuery.prototype.addClass = function(newClass){
        this.each(function(){
            var className = this.className || '';
            if(typeof(className) != 'string'){
                className = className.baseVal;
            }
            var classes = className.split(' ');
            var c = {};
            for(var i=0; i<classes.length; i++){
                var t = trim(classes[i]);
                if(!t)
                    continue;
                c[t] = true;
            }
            c[newClass] = true;
            this.className = Object.keys(c).join(' ');
        });
        return this;
    }
    jQuery.prototype.removeClass = function(newClass){
        this.each(function(){
            var className = this.className || '';
            if(typeof(className) != 'string'){
                className = className.baseVal;
            }
            var classes = className.split(' ');
            var c = {};
            for(var i=0; i<classes.length; i++){
                var t = trim(classes[i]);
                c[t] = true;
            }
            delete c[newClass];
            this.className = Object.keys(c).join(' ');
        });
        return this;
    }


    /// CSS


    var
        ralpha = /alpha\([^)]*\)/i,
        ropacity = /opacity\s*=\s*([^)]*)/,
        pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source,

    // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
    // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
        rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

        cssShow = { position: "absolute", visibility: "hidden", display: "block" },
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        },

        cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


// return a css property mapped to a potentially vendor prefixed property
    function vendorPropName( style, name ) {

        // shortcut for names that are not vendor prefixed
        if ( name in style ) {
            return name;
        }

        // check for vendor prefixed names
        var capName = name.charAt(0).toUpperCase() + name.slice(1),
            origName = name,
            i = cssPrefixes.length;

        while ( i-- ) {
            name = cssPrefixes[ i ] + capName;
            if ( name in style ) {
                return name;
            }
        }

        return origName;
    }



    var getStyles, curCSS,
        rposition = /^(top|right|bottom|left)$/;

    var rmargin = (/^margin/);

    var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );


    if ( WIN.getComputedStyle ) {
        getStyles = function( elem ) {
            // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
            // IE throws on elements created in popups
            // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
            if ( elem.ownerDocument.defaultView && elem.ownerDocument.defaultView.opener ) {
                return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
            }

            if(bablic.getStyle)
                return bablic.getStyle.call(WIN, elem, null);
            return WIN.getComputedStyle( elem, null );
        };

        curCSS = function( elem, name, computed ) {
            var width, minWidth, maxWidth, ret,
                style = getElementStyle(elem);

            computed = computed || getStyles( elem );

            // getPropertyValue is only needed for .css('filter') in IE9, see #12537
            ret = computed ? (computed._getProp ? computed._getProp(name) : computed.getPropertyValue( name )) || computed[ name ] : undefined;

            if ( computed ) {

                if ( ret === "") {
                    ret = jQuery.style( elem, name );
                }

                // A tribute to the "awesome hack by Dean Edwards"
                // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
                // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
                // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
                if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

                    // Remember the original values
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;

                    // Put in the new values to get a computed value out
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;

                    // Revert the changed values
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }

            // Support: IE
            // IE returns zIndex value as an integer.
            return ret === undefined ?
                ret :
            ret + "";
        };
    } else if ( d.documentElement.currentStyle ) {
        getStyles = function( elem ) {
            return elem.currentStyle;
        };

        curCSS = function( elem, name, computed ) {
            var left, rs, rsLeft, ret,
                style = getElementStyle(elem);

            computed = computed || getStyles( elem );
            ret = computed ? computed[ name ] : undefined;

            // Avoid setting ret to empty string here
            // so we don't default to auto
            if ( ret == null && style && style[ name ] ) {
                ret = style[ name ];
            }

            // From the awesome hack by Dean Edwards
            // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

            // If we're not dealing with a regular pixel number
            // but a number that has a weird ending, we need to convert it to pixels
            // but not position css attributes, as those are proportional to the parent element instead
            // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
            if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

                // Remember the original values
                left = style.left;
                rs = elem.runtimeStyle;
                rsLeft = rs && rs.left;

                // Put in the new values to get a computed value out
                if ( rsLeft ) {
                    rs.left = elem.currentStyle.left;
                }
                style.left = name === "fontSize" ? "1em" : ret;
                ret = style.pixelLeft + "px";

                // Revert the changed values
                style.left = left;
                if ( rsLeft ) {
                    rs.left = rsLeft;
                }
            }

            // Support: IE
            // IE returns zIndex value as an integer.
            return ret === undefined ?
                ret :
            ret + "" || "auto";
        };
    }



    _extend(jQuery, {
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },
        cssProps:{

        },
        // Get and set the style property on a DOM Node
        style: function( elem, name, value, extra ) {
            // Don't set styles on text and comment nodes
            if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !getElementStyle(elem) ) {
                return;
            }

            // Make sure that we're working with the right name
            var ret, type, hooks,
                origName = jQuery.camelCase( name ),
                style = getElementStyle(elem);

            name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

            // Check if we're setting a value
            if ( value !== undefined ) {
                type = typeof value;

                // convert relative number strings (+= or -=) to relative numbers. #7345
                if ( type === "string" && (ret = rrelNum.exec( value )) ) {
                    value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
                    // Fixes bug #9237
                    type = "number";
                }

                // Make sure that null and NaN values aren't set. See: #7116
                if ( value == null || value !== value ) {
                    return;
                }

                // If a number was passed in, add 'px' to the (except for certain CSS properties)
                if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
                    value += "px";
                }

                // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
                // but it would mean to define eight (for every problematic property) identical functions
                if ( value === "" && name.indexOf("background") === 0 ) {
                    style[ name ] = "inherit";
                }
                style[ name ] = value;
            } else {
                // Otherwise just get the value from the style object
                return style[ name ];
            }
        },

        css: function( elem, name, extra, styles ) {
            var num, val,
                origName = jQuery.camelCase( name );

            // Make sure that we're working with the right name
            name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( getElementStyle(elem), origName ) );

            // Otherwise, if a way to get the computed value exists, use that
            if ( val === undefined ) {
                val = curCSS( elem, name, styles );
            }

            //convert "normal" to computed value
            if ( val === "normal" && name in cssNormalTransform ) {
                val = cssNormalTransform[ name ];
            }

            // Return, converting to number if forced or a qualifier was provided and val looks numeric
            if ( extra === "" || extra ) {
                num = parseFloat( val );
                return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
            }
            return val;
        }
    });

    jQuery.prototype.css = function(name,value){
        if(value === undefined){
            var element = single(this);
            if(!element)
                return null;
            return jQuery.css(element,name);
        }
        this.each(function(){
            jQuery.style(this,name,value);        });
        return this;
    };
    jQuery.prototype.find = function(selector){
        var newElements = [];
        this.each(function() {
            jQuery(selector, this).each(function() {
                newElements.push(this);
            });
        })
        return jQuery(newElements);
    }
    jQuery.prototype.hide = function(){
        return this.css('display','none');
    };
    jQuery.prototype.show = function(){
        return this.css('display','block');
    };
    jQuery.prototype.text = function(value){
        if(typeof(value) == strundefined) {
            var element = single(this);
            if (!element)
                return '';
            return getText(element);
        }
        else{
            this.each(function(){
                while(this.firstChild)
                    this.removeChild(this.firstChild);
                var text = DOC.createTextNode(value);
                this.appendChild(text);
            });
            return this;
        }

    };
    function getElementStyle(elem) {
        if ('_babstyle' in elem) return elem._babstyle;
        return elem.style;
    }

    $ = jQuery;
    bablic.$ = $;

})();
;
function escapeRegexNoWildcard(str) {
    return (str+'').replace(/([.?+^$[\]\\/(){}|-])/g, "\\$1");
}

function createLocaleRegex(locales, folders) {
    var folderNames = [];
    var localeAdded = {};
    if (folders) {
        for (var folderKey in folders) {
            folderNames.push(escapeRegexNoWildcard(folderKey));
            localeAdded[folders[folderKey]] = 1;
        }
    }
    if (locales) {
        for (var i = 0; i < locales.length; i++) {
            if (!localeAdded[locales[i]]) {
                folderNames.push(locales[i]);
            }
        }
    }
    return folderNames.length ? RegExp('^(\\/(' + folderNames.join('|') + '))(?:\\/|$)','i') : SUB_DIR;
}
/**
 *
 * @param parsedUrl
 * Built from the current request, browser location object
 * @param localeDetection
 * From snippet Meta
 * @param localeConfigs
 * From snippet Meta
 * @param cookieLocale
 * From cookie
 * @param siteDefaultLocale
 * From snippet Meta
 * @param detectedLocale
 * From HTTP Header (Accept-Language) or Window.navigator
 * @param isProxy
 * Ignore
 * @param explicitLocale
 * Ignore
 * @returns {*}
 */
function getLocaleByURL(parsedUrl,localeDetection,localeConfigs,cookieLocale,siteDefaultLocale,detectedLocale,isProxy,explicitLocale,subDirBase,folders,locales, originalLocale, handler, ignoreQs){
    if(!originalLocale && locales)
        originalLocale = locales[locales.length-1];
    if(!originalLocale && siteDefaultLocale)
        originalLocale = siteDefaultLocale;
    if (handler) {
        return handler(parsedUrl, cookieLocale, siteDefaultLocale, detectedLocale) || originalLocale;
    }
    switch(localeDetection) {
        case 'querystring':
            if(parsedUrl.query&& typeof(parsedUrl.query) == 'object')
                return parsedUrl.query.locale;
            var matches = /locale=([^&]+)/.exec(parsedUrl.query || '');
            if(matches && matches.length == 2 && matches[1])
                return matches[1];
            return explicitLocale || cookieLocale || detectedLocale || siteDefaultLocale;
        case "subdomain": {
            var localeRegex = locales ? locales.join('|') : '\\w\\w?\\w(?:-\\w\\w)?';
            if (typeof parent != "undefined" && parent && parent.Site && parent.Site.locale) return parent.Site.locale;
            var regex = isProxy ? RegExp('(?:^|-)(' + localeRegex + ')-(?:b\\-[mt]\\-)?[0-9a-f]{24,25}-pipeq?', 'i') :
                RegExp('^(?:www\\.)?(' + localeRegex + ')\\.', 'i');
            var matches = regex.exec(parsedUrl.hostname);
            if (matches && matches.length > 1 && matches[1])
                return matches[1];
            return siteDefaultLocale;
        }
        case "subdir": {
            var localeRegex = createLocaleRegex(locales, folders);

            var pathname = parsedUrl.pathname;
            if (subDirBase)
                pathname = pathname.replace(subDirBase, '');
            var match = localeRegex.exec(pathname);
            if (match) {
                if (folders && locales && folders[match[2]])
                    return getLocaleFromFolder(folders[match[2]], locales) || siteDefaultLocale;
                return match[2];
            }
            if (explicitLocale)
                return explicitLocale;
            if (cookieLocale)
                return cookieLocale;
            return detectedLocale || siteDefaultLocale;
        }
        case "tld":
            var matches = /\.(\w\w?\w)$/.exec(parsedUrl.hostname);
            if(matches && matches.length>1 && matches[1])
                return matches[1];
            return null;
        case "custom":
            var parseDomainRule = function(str) {
                if (Array.isArray(str)) {
                    return RegExp(str.map(function(s) { return escapeRegexNoWildcard(s).replace(/\*/g, '.*'); }).join('|'), 'i');
                } else {
                    return RegExp(escapeRegexNoWildcard(str).replace(/\*/g, '.*'), 'i');
                }
            };

            var localeToReturn = null;
            for(var locale in localeConfigs){
                var urlPattern = localeConfigs[locale];
                if(urlPattern && parseDomainRule(urlPattern).test(parsedUrl.href)) {
                    localeToReturn = locale;
                    break;
                }
            }

            if (!localeToReturn || localeToReturn === originalLocale) {
                // if has locale parameter in query and previous locale selected is original
                if (parsedUrl.query && !ignoreQs){
                    var matches = /locale=([^&]+)/.exec(parsedUrl.query || '');
                    if (matches && matches.length == 2 && matches[1]) {
                        return matches[1];
                    }
                }

            }
            return localeToReturn || explicitLocale || originalLocale;
        case "hash":
            var matches = /^#!locale=(\w\w?\w(?:_\w\w)?)$/.exec(parsedUrl.hash || '');
            if(matches && matches.length > 1 && matches[1])
                return matches[1];
            return cookieLocale || detectedLocale || siteDefaultLocale;
        default:
            return cookieLocale;
    }
}

function getPackageFromPath(packages,path){
    if(!packages)
        return 0;
    // perfect match
    for(var packageKey in packages){
        var arr = packages[packageKey];
        if(arr && arr.indexOf && arr.indexOf(path) > -1)
            return Number(packageKey);
    }
    var maxLength = 0, maxPackage = 0;
    for(var packageKey in packages){
        var pathList = packages[packageKey];
        if (!pathList.length) continue;
        var length = 0;
        for(var i=pathList.length-1; i>=0; i--){
            if(path.indexOf(pathList[i]) == 0){
                length = pathList[i].length;
                break;
            }
        }
        if(length && length > maxLength){
            maxLength = length;
            maxPackage = Number(packageKey);
        }
    }
    return maxPackage;
}
function parseDomainRule(str, partialMatch) {
    return new RegExp((partialMatch ? "" : "^") + (str + "").replace(/([.?+^$[\]\\(){}|-])/g, "\\$1").replace(/\*/g, ".*") + (partialMatch ? "" : "$"), "i");
}
function checkDomainRule(domain, str, partialMatch) {
    if (!str)
        return false;
    if (str.includes("*"))
        return parseDomainRule(str, partialMatch).test(domain);
    return partialMatch ? domain.lastIndexOf(str) > -1 && domain.lastIndexOf(str) === domain.length - str.length : domain === str;
}

function matchDomainRule(domain, rules) {
    if (!rules || !domain) return -1;
    var simpleCheck = rules.findIndex(function (domainList) {
        return domainList === domain || domainList[0] === domain;
    });
    if (simpleCheck > -1) {
        return simpleCheck;
    }
    var checkRule = function(domainRule) { return checkDomainRule(domain, domainRule); }
    return rules.findIndex(function(domainList) {
        return domainList.find && domainList.find(checkRule);
    });
}

function getOtherDomain(currentDomain, mountDomains){
    var groupIndex = matchDomainRule(currentDomain, mountDomains);
    if (groupIndex <= 0)
        return '';
    return groupIndex + '';
}


var SUB_DIR = /^(\/(\w\w?\w([-|_]\w\w)?))(?:\/|$)/;

var EXTRACT_SUB = /^\/?@([^@]+)@/;



function getLocaleFromFolder(folderLocale,locales){
    var index = locales.indexOf(folderLocale);
    if(index > -1)
        return locales[index];
    folderLocale = folderLocale.split("_")[0];
    for(var i=0; i<locales.length; i++){
        var currentLocale = locales[i].split("_")[0];
        if(currentLocale == folderLocale)
            return locales[i];
    }
    return '';
}

function normalizePath(fullPath,localeDetection,separateByQueryString,separateByHash,spa,locales,qsParams,domain,subDirBase,folders,isFolder, previewUrl){
    if(spa)
        return '*';

    if (previewUrl){
        fullPath = fullPath.replace(previewUrl, "");
    }

    var subMatch = EXTRACT_SUB.exec(fullPath);
    if(subMatch)
        fullPath = fullPath.replace(EXTRACT_SUB,'');
    var sub = subMatch ? '@' + subMatch[1].toUpperCase() + '@' : '';
    fullPath = fullPath.toLowerCase();
    var parts = fullPath.split('#');
    var hash = separateByHash && parts[1] ? '#' + parts[1] : '';
    var noHash = parts[0];
    parts = noHash.split('?');
    var path = parts[0];
    var qs = parts[1];


    if(subDirBase)
        path = path.replace(subDirBase,'');
    var localeRegex = createLocaleRegex(locales, folders);
    var match = localeRegex.exec(path);
    if(match && (locales.indexOf(match[2]) > -1 || (folders && folders[match[2]])))
        path = path.substr(match[1].length);

    if (!isFolder && path[path.length - 1] != '/' && !/\/.*?\.[^/]*$/.test(path))
        path += '/';
    if(!isFolder && path === '')
        path = '/';

    if(separateByQueryString && qsParams && qsParams.length && qs){
        var qsParts = qs.split('&');
        var tuples = [];
        for(var i=0; i<qsParts.length; i++) {
            var tuple = qsParts[i].split('=');
            if(tuple[0] == 'locale')
                continue;
            tuples.push([decodeURIComponent(tuple[0]),tuple[1] && decodeURIComponent(tuple[1])]);
        }
        qsParams = qsParams.map(function(param) { return param.toLowerCase(); });
        // filter allowed params
        tuples = tuples.filter(function(t){
            return qsParams && qsParams.indexOf(t[0]) > -1;
        });
        // sort by key
        tuples.sort(function(a,b){
            return a[0] == b[0] ? 0 : (a[0] > b[0] ? 1 : -1);
        });
        if (tuples.length > 0) {
            qs = '?' + tuples.map(function (obj) {
                return encodeURIComponent(obj[0]) + '=' + encodeURIComponent(obj[1]);
            }).join('&');
        } else {
            qs = '';
        }
    }
    else
        qs = '';

    return sub + path + qs + hash;
}


function convertToPreviewByType(path, previewUrl, type) {
    if (previewUrl) {
        switch (type)  {
            case "duda":
                var url = previewUrl + path + "?preview=true";
                return url;
        }
    }
    return null;
}

function isPageExcluded(path,excludePages,includePages,localeConf){
    var excludeValue = getExcludedPath(path,excludePages);
    var includeValue = getExcludedPath(path,includePages);
    var excludeLocaleValue = localeConf ? getExcludedPath(path,localeConf.excludePages) : 0;
    var includeLocaleValue = localeConf ? getExcludedPath(path,localeConf.includePages) : 0;
    var excludeMaxValue = excludeValue > excludeLocaleValue ? excludeValue : excludeLocaleValue;
    var includeMaxValue = includeValue > includeLocaleValue ? includeValue : includeLocaleValue;
    return excludeMaxValue > includeMaxValue;
}
function getExcludedPath(path,list){
    if(!list || !list.indexOf)
        return 0;
    for(var i=0; i<list.length; i++){
        if(NOT_FOLDER_REGEX.test(list[i])){
            if(list[i] == path)
                return 9999999999;
        }
        else if(path.indexOf(list[i] + '/') == 0)
            return list[i].length + 1;
    }
    return 0;
}

var NOT_FOLDER_REGEX = /(\.[^/]*|\/|\?.*|#.*)$/;

function isPathFolder(path){
    return !NOT_FOLDER_REGEX.test(path);
}


var BEnumRegex = /^BEnum\((.*?)\)/;

function encodeObject(schema,obj){
    if(obj === null || obj === undefined)
        return 0;

    if(schema === null)
        return obj;

    if(typeof(schema) != 'object') {
        var enumMatch = BEnumRegex.exec(schema);
        if(enumMatch){
            var map = JSON.parse(enumMatch[1]);
            for(var key in map){
                if(map[key] == obj)
                    return Number(key);
            }
            return 0;
        }
        if(schema == 'Boolean')
            return obj?1:0;
        return obj;
    }
    if(schema[0] == '__obj__'){
        var encoded = [];
        for(var i=1; i<schema.length; i++){
            var field = schema[i]
            encoded.push(encodeObject(field[1],obj[field[0]]));
        }
        return encoded;
    }
    var arr = [];
    for(var j=0; j<obj.length; j++){
        arr.push(encodeObject(schema[0],obj[j]));
    }
    return arr;
}
function decodeObject(schema,obj){
    if(obj === 0 && schema != 'Number')
        obj = null;

    if(schema === null)
        return obj;
    if(typeof(schema) != 'object') {
        var enumMatch = BEnumRegex.exec(schema);
        if(enumMatch){
            var map = JSON.parse(enumMatch[1]);
            return map[obj] || map[0];
        }
        if(schema === 'Boolean')
            return !!obj;
        return obj;
    }
    if(!obj)
        return {};
    var decoded
    if(schema[0] == '__obj__'){
        decoded = {};
        for(var i=1; i<schema.length; i++){
            var field = schema[i];
            decoded[field[0]] = decodeObject(field[1],obj[i-1]);
        }
        return decoded;
    }
    decoded = [];
    for(var j=0; j<obj.length; j++){
        decoded[j] = decodeObject(schema[0],obj[j]);
    }
    return decoded;
}

function encodeWithVersion(obj,schema,version){
    var encoded = encodeObject(schema,obj);
    encoded.push(['_v',version]);
    return encoded;
}

function decodeWithVersion(encoded,schema,version){
    var versionItem = encoded[encoded.length-1];
    if(versionItem[0] != '_v')
        return null;
    if(versionItem[1] != version)
        return null;

    encoded.pop();
    var conf = decodeObject(schema,encoded);
    encoded.push(versionItem);
    return conf;

}


try {
    if (typeof(module) == 'object' || typeof(ENGINE_PACKAGE) == 'boolean') {
        module.exports = {
            getLocaleByURL:getLocaleByURL,
            normalizePath:normalizePath,
            getOtherDomain:getOtherDomain,
            matchDomainRule:matchDomainRule,
            encodeObject:encodeObject,
            encodeWithVersion:encodeWithVersion,
            decodeObject:decodeObject,
            decodeWithVersion:decodeWithVersion,
            getPackageFromPath:getPackageFromPath,
            isPageExcluded:isPageExcluded,
            isPathFolder:isPathFolder,
            convertToPreviewByType:convertToPreviewByType,
        };
    }
}
catch(e){console.error(e);}
;
var decodeConf,encodeConf, encodePing, decodeSnippetData;

(function () {


    var NEW_SNIPPET_HTML_REGEX = /snippet\/([0-9a-f]{24})\.js/;
    var CONF_SCHEMA = ["__obj__",["timestamp","Number"],["orig","String"],["localeDetection","BEnum({\"0\":\"querystring\",\"1\":\"subdomain\",\"2\":\"hash\",\"3\":\"tld\",\"4\":\"custom\",\"5\":\"none\",\"6\":\"subdir\"})"],["edit","Boolean"],["fallback","Boolean"],["ajaxWidget","Boolean"],["meta","Boolean"],["alt","Boolean"],["locales",[["__obj__",["legacy","Boolean"],["www","Boolean"],["dir","BEnum({\"0\":\"ltr\",\"1\":\"rtl\"})"],["url","String"],["key","String"],["name","String"],["flag","String"],["font","String"],["months",["String"]],["dateFormat","String"],["timeFormat","String"],["engines",["Number"]],["excludePages",["String"]],["includePages",["String"]],["iso","String"],["days",["String"]],["formats",null]]]],["widget",[["__obj__",["show","Boolean"],["embedded","String"],["logo","Boolean"],["size","Number"],["widgetType","BEnum({\"0\":\"labels\",\"1\":\"flags\",\"2\":\"letters\",\"3\":\"flagsHoriz\",\"4\":\"lettersHoriz\"})"],["expanded","Boolean"],["position",["__obj__",["corner","Number"],["distance","Number"],["unit","String"],["fixed","Boolean"]]],["colors",["String"]],["hideCurrent","Boolean"],["css","String"],["target","String"],["style","String"]]]],["bidi","Boolean"],["exclude","String"],["include","String"],["markup",null],["includeQueryString","Boolean"],["includeHash","Boolean"],["singlePageApp","Boolean"],["domain","String"],["mountSubs",["String"]],["packages",null],["excludePages",["String"]],["includePages",["String"]],["domains",["String"]],["mbd","Boolean"],["j","String"],["keywords",null],["default","String"],["autoDetect","Boolean"],["localeKeys",["String"]],["customUrls",null],["qsParams",["String"]],["isHybrid","Boolean"],["reportHtml","Boolean"],["previewUrl","String"],["version","Number"]];

    var CONF_VERSION = 1.2;

    var PING_SCHEMA = ["__obj__",["timestamp","Number"],["snippetTimestamp","Number"],["error","String"],["locale","String"],["original","String"],["didHide","Boolean"],["confTime","Number"],["translationTime","Number"],["hiddenTime","Number"],["detected","String"],["page","String"],["detectedLocale","String"],["hasLocalStorage","Boolean"],["hasIndexDB","Boolean"],["path","String"],["nonBlocking","Boolean"],["version","Number"],["parseVersion","Number"]];

    var SNIPPET_SCHEMA = {
        1: ["__obj__",["timestamp","Number"],["original","String"],["localeKeys",["String"]],["localeDetection","BEnum({\"0\":\"querystring\",\"1\":\"subdomain\",\"2\":\"hash\",\"3\":\"tld\",\"4\":\"custom\",\"5\":\"none\",\"6\":\"subdir\"})"],["includeQueryString","Boolean"],["includeHash","Boolean"],["singlePageApp","Boolean"],["customUrls",null],["noCDN","Boolean"],["noLocalStorage","Boolean"],["noCookies","Boolean"]],
        2: ["__obj__",["timestamp","Number"],["original","String"],["default","String"],["autoDetect","Boolean"],["localeKeys",["String"]],["localeDetection","BEnum({\"0\":\"querystring\",\"1\":\"subdomain\",\"2\":\"hash\",\"3\":\"tld\",\"4\":\"custom\",\"5\":\"none\",\"6\":\"subdir\"})"],["includeQueryString","Boolean"],["includeHash","Boolean"],["singlePageApp","Boolean"],["customUrls",null],["noCDN","Boolean"],["noLocalStorage","Boolean"],["noCookies","Boolean"],["qsParams",["String"]],["domain","String"],["mountSubs",["String"]],["getLocaleHandler","String"],["rewriteUrlHandler","String"],["previewUrl","String"]]
    };

    decodeConf = function(encoded) {
        return decodeWithVersion(encoded, CONF_SCHEMA, CONF_VERSION);
    };

    encodeConf = function(decoded){
        return encodeWithVersion(decoded,CONF_SCHEMA,CONF_VERSION);
    };

    encodePing = function(ping) {
        return encodeObject(PING_SCHEMA, ping);
    };

    decodeSnippetData = function(encoded) {
        if(encoded.length == 14) {
            var data = decodeWithVersion(encoded, SNIPPET_SCHEMA[2], Number(1));
            if (data)
                return data;
        }
        for (var version in SNIPPET_SCHEMA) {
            var data = decodeWithVersion(encoded, SNIPPET_SCHEMA[version], Number(version));
            if (data)
                return data;
        }
        return null;
    };

    if (window.bablic) {
        var scripts = document.getElementsByTagName('SCRIPT');
        for (var i = 0; i < scripts.length; i++) {
            if (!bablic.Site && scripts[i].getAttribute('src') && scripts[i].getAttribute('src').indexOf("/snippet/") > -1) {
                var siteAttr = NEW_SNIPPET_HTML_REGEX.exec(scripts[i].getAttribute('src'));
                var siteId = siteAttr[1];
                bablic.Site = siteId;
            }

            if (!bablic.Site && scripts[i].getAttribute('data-bablic'))
                bablic.Site = scripts[i].getAttribute('data-bablic');

            if (!bablic.data && scripts[i].getAttribute('data-bablic-m')) {
                var meta = scripts[i].getAttribute('data-bablic-m');
                if (meta) {
                    //try{
                    meta = meta.replace(/[“”]/g,'').replace(/[‘’]/g,"'");
                    try {
                        meta = JSON.parse(meta.replace(/'/g, '"'));
                        meta = decodeSnippetData(meta);
                        bablic.data = meta;
                    } catch(e){
                        console.error("malformed code snippet", e);
                    }
                    //}
                    //catch(e){}
                }
            }
            var src = scripts[i].getAttribute('src');
            if(src && /(cdn2|staging)\.bablic\.com/.test(src)){
                var params = {};
                $.each((src.split('?')[1] || '').split('&'),function(i,param){
                    var parts = param.split('=');
                    var key = decodeURIComponent(parts[0]).replace('amp;','');
                    params[key] = decodeURIComponent(parts[1]);
                });
                if(params.site && !bablic.Site)
                    bablic.Site = params.site;
                if (!bablic.data && params.meta) {
                    try{
                        meta = JSON.parse(params.meta.replace(/'/g, '"'));
                        meta = decodeSnippetData(meta);
                        bablic.data = meta;
                    }
                    catch(e){ bablic.error(e)}
                }
            }
        }
    }
})();;
(function(){

    var getPrefix = function () {
        if(!WIN.getComputedStyle)
            return {};
        var styles = WIN.getComputedStyle(DOC.DOCElement, ''),
            pre = (Array.prototype.slice
                .call(styles)
                .join('')
                .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
            )[1],
            dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
        return {
            dom: dom,
            lowercase: pre,
            css: '-' + pre + '-',
            js: pre[0].toUpperCase() + pre.substr(1)
        };
    }


    var _prefix;
    bablic.$.prototype.animate = function(style,options,callback){
        if(!bablic.Modernizr.csstransitions)
            return setTimeout(callback,0);
        this.each(function(){
            var element = this;
            if(element._babStop)
                element._babStop();
            var prefix = _prefix || (_prefix = getPrefix());
            var duration = options.duration || '.5s';
            var transition = Object.keys(style).map(function(key){
                return key + ' ' + duration;
            }).join(',');
            element._babStop = function(){
                clearTimeout(to);
                callback = null;
                onFinish();
            };

            var onFinish = function(){
                element.style[prefix.lowercase + 'Transition'] = '';
                element.style['transition'] = '';

                new Array('transitionEnd',prefix.lowercase + 'TransitionEnd').forEach(function(e){
                    $(element).off(e,onFinish);
                });
                delete element._babStop;
                callback && callback();
                callback = null;
            };
            new Array('transitionEnd',prefix.lowercase + 'TransitionEnd').forEach(function(e){
                    $(element).on(e,onFinish);
                });
            element.style[prefix.lowercase + 'Transition'] = transition;
            element.style['transition'] = transition;
            var to = setTimeout(function(){
                for(var key in style){
                    element.style[key] = style[key];
                }
            },0);
        });
        return this;
    };
})();;
var bablicHash;
(function () {

// Base 64
    if (!WIN.atob && !WIN.btoa)(function (win) {
        var t = "=",
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

        function s(e, t) {
            var n = e.charCodeAt(t);

            if (n > 255) {
                throw "INVALID_CHARACTER_ERR: DOM Exception 5";
            }

            return n;
        }

        function o(e) {
            if (arguments.length !== 1) {
                throw "SyntaxError: exactly one argument required";
            }

            e = String(e);

            var r, i,
                o = [],
                u = e.length - e.length % 3;

            if (!e.length) {
                return e;
            }

            for (r = 0; r < u; r += 3) {
                i = s(e, r) << 16 | s(e, r + 1) << 8 | s(e, r + 2);
                o[o.length] = n.charAt(i >> 18);
                o[o.length] = n.charAt(i >> 12 & 63);
                o[o.length] = n.charAt(i >> 6 & 63);
                o[o.length] = n.charAt(i & 63);
            }

            switch (e.length - u) {
                case 1:
                    i = s(e, r) << 16;
                    o[o.length] = n.charAt(i >> 18) + n.charAt(i >> 12 & 63) + t + t;
                    break;
                case 2:
                    i = s(e, r) << 16 | s(e, r + 1) << 8;
                    o[o.length] = n.charAt(i >> 18) + n.charAt(i >> 12 & 63) + n.charAt(i >> 6 & 63) + t;
                    break;
            }

            for (var i = 0, len = o.length, res = ""; i < len;)
                res += o[i++];

            return res;
        }

        win.btoa = o;

    })(WIN);

// Hashing
// SHA 1
    function base64_sha1(a) {
        return WIN.btoa(rstr_sha1(str2rstr_utf8(a || '')));
    }

    function rstr_sha1(a) {
        return binb2rstr(binb_sha1(rstr2binb(a), a.length * 8))
    }



    function str2rstr_utf8(c) {
        var b = "";
        var d = -1;
        var a, e;
        while (++d < c.length) {
            a = c.charCodeAt(d);
            e = d + 1 < c.length ? c.charCodeAt(d + 1) : 0;
            if (55296 <= a && a <= 56319 && 56320 <= e && e <= 57343) {
                a = 65536 + ((a & 1023) << 10) + (e & 1023);
                d++
            }
            if (a <= 127) {
                b += String.fromCharCode(a)
            } else {
                if (a <= 2047) {
                    b += String.fromCharCode(192 | ((a >>> 6) & 31), 128 | (a & 63))
                } else {
                    if (a <= 65535) {
                        b += String.fromCharCode(224 | ((a >>> 12) & 15), 128 | ((a >>> 6) & 63), 128 | (a & 63))
                    } else {
                        if (a <= 2097151) {
                            b += String.fromCharCode(240 | ((a >>> 18) & 7), 128 | ((a >>> 12) & 63), 128 | ((a >>> 6) & 63), 128 | (a & 63))
                        }
                    }
                }
            }
        }
        return b
    }

    function rstr2binb(b) {
        var a = Array(b.length >> 2);
        for (var c = 0; c < a.length; c++) {
            a[c] = 0
        }
        for (var c = 0; c < b.length * 8; c += 8) {
            a[c >> 5] |= (b.charCodeAt(c / 8) & 255) << (24 - c % 32)
        }
        return a
    }

    function binb2rstr(b) {
        var a = "";
        for (var c = 0; c < b.length * 32; c += 8) {
            a += String.fromCharCode((b[c >> 5] >>> (24 - c % 32)) & 255)
        }
        return a
    }

    function binb_sha1(v, o) {
        v[o >> 5] |= 128 << (24 - o % 32);
        v[((o + 64 >> 9) << 4) + 15] = o;
        var y = Array(80);
        var u = 1732584193;
        var s = -271733879;
        var r = -1732584194;
        var q = 271733878;
        var p = -1009589776;
        for (var l = 0; l < v.length; l += 16) {
            var n = u;
            var m = s;
            var k = r;
            var h = q;
            var f = p;
            for (var g = 0; g < 80; g++) {
                if (g < 16) {
                    y[g] = v[l + g]
                } else {
                    y[g] = bit_rol(y[g - 3] ^ y[g - 8] ^ y[g - 14] ^ y[g - 16], 1)
                }
                var z = safe_add(safe_add(bit_rol(u, 5), sha1_ft(g, s, r, q)), safe_add(safe_add(p, y[g]), sha1_kt(g)));
                p = q;
                q = r;
                r = bit_rol(s, 30);
                s = u;
                u = z
            }
            u = safe_add(u, n);
            s = safe_add(s, m);
            r = safe_add(r, k);
            q = safe_add(q, h);
            p = safe_add(p, f)
        }
        return Array(u, s, r, q, p)
    }

    function sha1_ft(e, a, g, f) {
        if (e < 20) {
            return (a & g) | ((~a) & f)
        }
        if (e < 40) {
            return a ^ g ^ f
        }
        if (e < 60) {
            return (a & g) | (a & f) | (g & f)
        }
        return a ^ g ^ f
    }

    function sha1_kt(a) {
        return (a < 20) ? 1518500249 : (a < 40) ? 1859775393 : (a < 60) ? -1894007588 : -899497514
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return (b << 16) | (c & 65535)
    }

    function bit_rol(a, b) {
        return (a << b) | (a >>> (32 - b))
    }
    ;
// End Hashing

    var hashCache = {};

    bablicHash = function (val) {
        var ret = hashCache[val];
        if(typeof(ret) == 'string')
            return ret;
        var ret = base64_sha1(val);
        hashCache[val] = ret;
        return ret;
    };

})();


bablic.hash = bablicHash;;

var root_path = '//' + (bablic.debugServer || 'e2.bablic.com');
var editorPath = bablic.debugServer ? '//' + bablic.debugServer : 'https://legacy.bablic.com';
var fetchFromCDN, ajaxPost,ajaxGet,getPageTranslationURL,turnOffCDN;
var build_query_string;

(function(Date,Array,bablic){

  //  var TIME_TO_NOT_USE_CDN = bablic.tcdn || 1000*60*60*12;
    // for ie 8
    if(!Date.now)
        Date.now = function(){return Number(new Date())};
    if(!Array.isArray)
        Array.isArray = function(a) { return a && a.constructor == Array};
    if(!Array.prototype.indexOf)
        Array.prototype.indexOf = function(a) { for(var i=0; i<this.length; i++) { if(this[i] == a) return i;} return -1;};
    var cacheBreaker = null;

    var CDN_PATH = bablic.cdnServer || 'c.bablic.com';
    var CONF_CDN_PATH = bablic.confCdnServer || 'c.bablic.com';
    // var STORAGE_PATH = bablic.storageServer || 'bablic.s3.amazonaws.com/ldata';


    turnOffCDN = function(){
        cacheBreaker = Date.now();
        // CDN_PATH = STORAGE_PATH;
        // CONF_CDN_PATH = STORAGE_PATH;
    };

    getPageTranslationURL = function(path){
        if(path.indexOf('conf') > -1)
            return '//' + CONF_CDN_PATH + path + '.json?t=' + (LDATA ? LDATA.timestamp : '');
        else
            return '//' + CDN_PATH + path + '.json?t=' + (LDATA ? LDATA.timestamp : '');
    };

    fetchFromCDN = function(path,cbk){
        var url = getPageTranslationURL(path);
        ajaxGet(url,null,function(rsp){
            cbk(null,rsp);
        },function(err){
            cbk(err);
        });

    };
	
	var makeXHR = function(method,url,data,success,error,withCredentials,trials){
		success = success || function () {
            bablic.log('bablic POST success');
        };
        error = error || function (rsp) {
            bablic.log('bablic POST request failed ' + rsp.responseText || rsp);
        };
		trials = trials || 0;
        var isAbs = url.indexOf('//') > -1;
		var paramPrefix = url.indexOf('?') > -1 ? '&' : '?';
		var httpsPrefix = (withCredentials ? 'https:' : '');
		if (WIN.XDomainRequest) {
            if (!WIN.JSON)
                return error('not supported');

            var xdr = new XDomainRequest();
            if(withCredentials && !parent.SESSION_KEY) {
                xdr.withCredentials = "true";
            }
            xdr.open(method, (isAbs ? url : (bablic.preview ? editorPath : httpsPrefix + root_path) + url + paramPrefix + build_query_string()));
            xdr.onload = function () {
                setTimeout(function () {
                    if (xdr.contentType == 'application/json') {
                        var J = JSON.parse(xdr.responseText);
                        if (J == null || typeof (J) == 'undefined') {
                            J = JSON.parse(data.firstChild.textContent);
                        }
                        success(J);
                    }
                    else
                        success(xdr.responseText);
                }, 1);
            };
            xdr.onerror = function () {
                error(xdr);
            };
			if(data)
				xdr.send(JSON.stringify(data));
			else
				xdr.send();

        }
		else {
			var xhr = new XMLHttpRequest();

			xhr.open(method, (isAbs ? url : (bablic.preview ? editorPath : httpsPrefix + root_path) + url + paramPrefix + build_query_string()));
			if(method == 'POST') {
                xhr.setRequestHeader("Content-type", 'application/json');
            }
			if(withCredentials && !parent.SESSION_KEY) {
                xhr.withCredentials = "true";
                xhr.setRequestHeader("x-with-credentials", '1');
            }
			xhr.onreadystatechange = function () {
				if (xhr.readyState != 4)
					return;
				var rsp = xhr.responseText;
				if(typeof(rsp) == 'string' && /^\s*(\{|\[|"|[0-9])/.test(rsp)){
					try {
						rsp = JSON.parse(rsp);
					}
					catch(e){}
				}
				if (xhr.status < 200 || xhr.status >= 300) {
					var shouldNotTryAgain = (xhr.status >= 400 && xhr.status <= 409) || xhr.status == 500;
					if(!shouldNotTryAgain && (trials++) < 2)
						return setTimeout(function(){ makeXHR(method,url,data,success,error,withCredentials,trials);},(xhr.status == 429 ? 1500 : 100)*trials);
					return error(rsp || xhr.status || 'failed');
				}
				success(rsp);
			};
			if(data)
				xhr.send(JSON.stringify(data));
			else
				xhr.send();
		}
	};

    ajaxPost = function (url, data, success, withCredentials, error) {
		return makeXHR('POST',url,data,success,error,withCredentials);
    };
    ajaxGet = function(url,data,success,error, withCredentials, trials){
		return makeXHR('GET',url,null,success,error, withCredentials, trials);
    };

    /**
     * Bablic general query string
     * @return {String}
     */
    build_query_string = function () {
        return 's=' + bablic.Site + (bablic.locale ? '&l=' + bablic.locale : '' ) + (bablic.package && !bablic.dedicated ? '&package=' + bablic.package : '') + '&uri=' + encodeURIComponent(pageUri()) + '&v=' + bablic.version + (bablic.localeURL ? '&ld=' + bablic.localeURL : '') + (bablic.preview ? '&preview=' + encodeURIComponent(bablic.preview) : '') + (bablic.previewMode ? '&previewMode=' + encodeURIComponent(bablic.previewMode) : '')
            + (cacheBreaker ? '&_c=' + cacheBreaker : '');
    }

})(Date,Array,bablic);
;

(function(bablic){


    function formatString(source, params) {
        if ( arguments.length === 1 ) {
            return function() {
                var args = $.makeArray(arguments);
                args.unshift(source);
                return formatString.apply( this, args );
            };
        }
        if ( arguments.length > 2 && params.constructor !== Array  ) {
            params = $.makeArray(arguments).slice(1);
        }
        if ( params.constructor !== Array ) {
            params = [ params ];
        }
        $.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n).replace('%s',n);
        });
        return source;
    }

    /**
     * Simple gettext with source and params, params can arguments or array
     * return String
     */
    var __ = bablic.getText = bablic.__ = function(source,params, dontRecord) {
        params = params || [];
        if ( arguments.length > 2 && params.constructor !== Array  ) {
            params = $.makeArray(arguments).slice(1);
        }
        if ( params.constructor !== Array ) {
            params = [ params ];
        }
        return formatString( getText(source, null, dontRecord),params);
    };

    /**
     * Simple gettext with source and params, params can arguments or array
     * Send markup to engine / translators
     * return String
     */
    bablic.getTextWithMarkup = function(source,markup,params) {
        params = params || [];
        if ( arguments.length > 3 && params.constructor !== Array  ) {
            params = $.makeArray(arguments).slice(2);
        }
        if (params.constructor !== Array ) {
            params = [ params ];
        }
        return formatString( getText(source,markup),params);
    };

    /**
     * Plural gettext
     * @param single_source
     * single version i.e : 'you have one message'
     * @param plural_source
     * plural version i.e: 'you have %d messages'
     * @param count
     * number to define plural by, and to replace %d with (if exists in strings)
     * @param params
     * additional params to format, as arguments or as array
     * @return String
     */
    bablic.__n = bablic.getTextPlural = function(single_source,plural_source,count,params) {
        params = params || [];
        if ( arguments.length > 4 && params && params.constructor !== Array  ) {
            params = $.makeArray(arguments).slice(3);
        }
        if ( params.constructor !== Array ) {
            params = [ params ];
        }
        var single = getText(single_source);
        var plural = getText(plural_source);
        return count == 1 ? formatString(single.replace(/%\s*?d/g,count),params) : formatString(plural.replace(/%\s*?d/g,count || 0),params);
    };

    var textEngineId;

    /**
     * localize text for js developer use
     * @param source
     * Text to localize
     * @param markup
     * markup for translators
     * @return localized string
     */
    function getText(source,markup, dontRecord) {
        if(!LDATA || !LDATA.content)  {
            bablic.log('translation not loaded yet');
            return source;
        }

        if(!Text)
            return source;

        markup = markup || {};
        if(!Text.stripText && Text.prepare)
            Text.prepare();

        // create fake text node
        var fakeNode = {nodeType:3, nodeValue:source,nodeName:'#text'};

        processNodeWithEngine(fakeNode,{tagName:'P',_fake:true},markup,Text.index,null,null,dontRecord);


        // send new content report
        if (LDATA.report)
            send_ldata_report(false);
        if (LDATA.usage)
            send_usage_report();
        //if(WIN.omg && WIN.omg.initContent)
        //    WIN.omg.initContent();

        return fakeNode._nodeValue || fakeNode.nodeValue;
    };

    var _alert = WIN.alert;
    WIN['alert'] = function(){
        var message = __.apply(null,arguments);
        return _alert(message);
    };

    bablic.alert = function(){
        return _alert.apply(WIN,arguments);
    };

    var _confirm = WIN.confirm;
    WIN.confirm = function(){
        var message = __.apply(null,arguments);
        return _confirm(message);
    };
    bablic.confirm = function(){
        return _confirm.apply(WIN,arguments);
    };

    var _prompt = WIN.prompt;
    WIN.prompt = function(){
        var message = __.apply(null,arguments);
        return _prompt(message);
    };
    bablic.prompt = function(){
        return _prompt.apply(WIN,arguments);
    };


})(bablic);
;
var Mutation = bablic.Mutation = {};
var attributeObserver;
var setNodeValue = function(node, value) {
    node.nodeValue = value;
};
var turnObserverOn, turnObserverOff;
(function (bablic) {
    Mutation.events = bablic._e || {};

    WIN.MutationObserver = WIN.MutationObserver
        || WIN.WebKitMutationObserver
        || WIN.MozMutationObserver;
    var _observer = WIN.MutationObserver;


    var lastBablic = 0;

    function detectPingPong(caller) {
        caller._lp = Date.now();
        if (Date.now() - lastBablic < 200) {
            caller._pp = caller._pp || 0;
            caller._pp++;
            if (caller._pp > 20)
                return true;
        } else {
            if (caller._pp > 20 && Date.now() - lastBablic < 1000)
                return true;
            caller._pp = 0;
        }
    }

// Attribute Observer
    if (_observer) {

        var ua = WIN.navigator.userAgent;
        var isIE = /MSIE|Trident/.test(ua);

        if (!isIE) {
            function _callback(observeCallback) {
                if (!observeCallback)
                    return observeCallback;
                return function (mutation) {
                    if (detectPingPong(observeCallback))
                        return;
                    return observeCallback.apply(this, arguments);
                };
            }

            try {
                // Store reference to original observer
                var OriginalMutationObserver = _observer;
                
                // Simple wrapper that ensures new is always used
                var BablicMutationObserver = function(callback) {
                    // Force constructor call regardless of how this function was called
                    if (!(this instanceof BablicMutationObserver)) {
                        return new BablicMutationObserver(callback);
                    }
                    
                    // Create the real observer with wrapped callback
                    var wrappedCallback = _callback ? _callback(callback) : callback;
                    var realObserver = new OriginalMutationObserver(wrappedCallback);
                    
                    // Delegate all methods to the real observer
                    this.observe = realObserver.observe.bind(realObserver);
                    this.disconnect = realObserver.disconnect.bind(realObserver);
                    this.takeRecords = realObserver.takeRecords.bind(realObserver);
                    
                    return this;
                };
                
                // Set up proper prototype chain
                BablicMutationObserver.prototype = Object.create(OriginalMutationObserver.prototype);
                BablicMutationObserver.prototype.constructor = BablicMutationObserver;
                
                WIN.MutationObserver = BablicMutationObserver;
                
            } catch (e) {
                // Fallback: keep original observer if wrapping fails
                WIN.MutationObserver = _observer;
            }
        }

        //var attributesToObserve = {};
        var observer = new _observer(function (mutation) {
            if (bablic.mutation_listen_off > 0)
                return;
            for (var i = 0; i < mutation.length; i++) {
                // if (!mutation[i].attributeName || !(mutation[i].attributeName in attributesToObserve))
                //     continue;
                var element = mutation[i].target;
                if (!element)
                    continue;
                if (mutation[i].attributeName.indexOf('bablic') > -1)
                    continue;
                var node = element.attributes[mutation[i].attributeName];
                if (!node)
                    continue;
                if (!DOC.contains(element))
                    continue;
                if (readNodeAttr(node, 'bablic_last_value', element) != getNodeValue(node))
                    return processElement(element, true);
            }
        });
        attributeObserver = function (element, node) {

            var attributesToObserve = element._babi = element._babi || {};
            if (attributesToObserve[node.nodeName]) {
                return;
            }
            attributesToObserve[node.nodeName] = true;

            // if (element._babi)
            //     return;
            //element._babi = true;
            setTimeout(function () {
                observer.observe(element, {
                    attributeFilter: [node.nodeName],
                    attributes: true
                });
            }, 1);
        }
    }
    else {
        attributeObserver = function (element, node) {
            var int = readNodeAttr(node, '_babi', element);
            if (int)
                clearInterval(int);
            int = setInterval(function () {
                if (readNodeAttr(node, 'bablic_replaced_value', element) != getNodeValue(node))
                    mutationCallbackSingle(element);
            }, 200);
            setNodeAttr(node, '_babi', int, element);
        }
    }

    Mutation.on = function (key, func) {
        $.each(key.trim().split(/\s+/), function (i, key) {
            Mutation.events[key] = Mutation.events[key] || [];
            Mutation.events[key].push(func);
            if (key == 'locale' && LDATA && bablic.getLocale && bablic.getLocale())
                setTimeout(function () {
                    func(bablic.getLocale())
                }, 0);
        });
    };

    Mutation.once = function (key, func) {
        Mutation.events[key] = Mutation.events[key] || [];
        var wrapper = function () {
            try {
                func();
            }
            catch (e) {
            }
            Mutation.unbind(key, wrapper);
        };
        Mutation.events[key].push(wrapper);
    };

    Mutation.unbind = function (key, func) {
        Mutation.events[key] = Mutation.events[key] || [];
        var index = Mutation.events[key].indexOf(func);
        if (index > -1)
            Mutation.events[key].splice(index, 1);
    }

    Mutation.emit = function (key, args) {
        Mutation.events[key] = Mutation.events[key] || [];
        var ret;
        for (var i = 0; i < Mutation.events[key].length; i++) {
            try {
                var thisRet = Mutation.events[key][i].apply(bablic, args);
                if (typeof(thisRet) != 'undefined')
                    ret = thisRet;
            } catch (e) {
            }
        }
        return ret;
    };

    var timeouts = [];

    Mutation.rush = function () {
        var handles = timeouts.map(function (to) {
            return to.h;
        });
        handles.forEach(function (func) {
            func();
        });
    }

    Mutation.clearTimeout = function (t) {
        var timeout = $.grep(timeouts, function (timeout) {
            return timeout.t == t;
        })[0];
        if (timeout)
            timeout.c();
    };

    Mutation.observeHead = function (handler) {
        if (!_observer)
            return;

        var listenTags = {LINK: 1, STYLE: 1};
        var observer = new _observer(function (mutations) {
            for (var i = 0; i < mutations.length; i++) {
                var nodes = mutations[i].addedNodes;
                if (nodes && nodes.length) {
                    for (var j = 0; j < nodes.length; j++) {
                        if (nodes[j].tagName in listenTags && !/bablic/.test(nodes[j].id || ''))
                            return handler();
                    }
                }
            }
        });

        var config = {childList: true};
        observer.observe($.byTag('head').get(0), config);
    };

    /**
     * Returns the length of path of this element from root
     * @param element
     * Return -1 if element should be ignored
     */
    function getElementDepth(element) {
        var i = 0;
        while (element) {
            if (element._babSt)
                return -1;
            i++;
            element = element.parentElement;
        }
        return i;
    }

    var listening = false;
    Mutation.listen = function () {
        if (listening)
            return;
        //if (!bablic.isIE) {
        // listen to DOM events
        if (_observer) {
            var elementObserver = new _observer(function (mutation) {
                if (!LDATA || !LDATA.content)
                    return;
                if (bablic.noMutationListening)
                    return;
                if (bablic.mutation_listen_off > 0)
                    return;
                var elements = {};
                var maxDepth = 0;
                var minDepth = 100000;
                // collect mutated elements
                for (var i = 0; i < mutation.length; i++) {
                    var element = mutation[i].target;
                    if (!element)
                        continue;
                    // if already registered for processing, ignore
                    if (element._babSt)
                        continue;
                    // if not in document, ignore
                    if (!DOC.contains(element))
                        continue;

                    // deal only with elements that Bablic already processed
                    if (element.nodeType != 1)
                        element = element.parentNode;
                    while (element && element.parentElement && element.nodeType == 1 && !('bablic_last_value' in element) && element !== DOC.body && element.tagName !== 'HEAD')
                        element = element.parentElement;

                    // get depth of element
                    var depth = getElementDepth(element);
                    // -1 is to ignore element
                    if (depth === -1)
                        continue;
                    // mark element for processing. 1 is that this element will be processed but we haven't decided on which tick, 2 is will be processed on future tick
                    element._babSt = 1;
                    // remember depth of element
                    if (depth > maxDepth)
                        maxDepth = depth;
                    if (depth < minDepth)
                        minDepth = depth;
                    elements[depth] = elements[depth] || [];
                    elements[depth].push(element);
                }
                if (!maxDepth)
                    return;
                // get most root element
                var allElements = elements[minDepth];
                // make sure other elements are not decendends of other stalled elements
                if (maxDepth !== minDepth) {
                    for (var depth in elements) {
                        depth = Number(depth);
                        if (depth === minDepth) {
                            continue;
                        }
                        var levelElements = elements[depth];
                        for (var i = 0; i < levelElements.length; i++) {
                            var iterateElement = levelElements[i];
                            var ignore = false;
                            for (var j = depth; j > minDepth; j--) {
                                if (iterateElement.parentElement._babSt) {
                                    ignore = true;
                                    break;
                                }
                                iterateElement = iterateElement.parentElement;
                            }
                            if (ignore)
                                continue;
                            allElements.push(levelElements[i]);
                        }
                    }
                }
                mutationCallback(allElements);
            });

            turnObserverOff = function() {
                elementObserver.disconnect();
            };
            turnObserverOn = function() {
                elementObserver.observe(DOC.body, {characterData: true, childList: true, subtree: true});
            };
            turnObserverOn();
        } else {
            var singleCallback = function (e) {
                var parent = e.srcElement || e.relatedNode || (e.originalEvent && e.originalEvent.srcElement) || (e.originalEvent && e.originalEvent.relatedNode);
                mutationCallbackSingle(parent);
            };
            turnObserverOff = function() {
                $(DOC.documentElement).off('DOMNodeInserted', singleCallback).off('DOMCharacterDataModified', singleCallback);
            };
            turnObserverOn = function() {
                $(DOC.documentElement).on('DOMNodeInserted', singleCallback).on('DOMCharacterDataModified', singleCallback);
            };
            turnObserverOn();
        }

        setInterval(function () {
            if (!LDATA || !LDATA.content)
                return;
            processElement(DOC.documentElement);
        }, 5000);

        listening = true;

    };


    /**
     * try to minimize the element processing, by suppressing "animation like" events
     * suppress events that aqcure
     */



    var THROTTLE_GLOBAL_WINDOW = 5000;
    var THROTTLE_GLOBAL_MAX= 30;
    var THROTTLE_ELEMENT_WINDOW = 1000;
    var THROTTLE_ELEMENT_MAX = 2;

    var lastFired = Date.now();

    /**
     * Calculate the new average call per window, given a new call
     * @param lastAverageCount
     * The last average call count
     * @param lastValidTime
     * The time the last average was calculated
     * @param timeWindow in millis
     * The time window
     */
    function calculateThrottle(lastAverageCount, lastValidTime, timeWindow) {
        var averageFirstLimit = Math.max(lastValidTime - timeWindow, Date.now() - timeWindow);
        var lastPortion = (lastValidTime - averageFirstLimit) / timeWindow;
        if(lastPortion < 0)
            return 1;
        return lastAverageCount * lastPortion + 1;
    }

    /**
     * Updates a call, and returns the average count of calls in timeWindow for this node
     * @param node
     * @returns averate calls in time window
     */
    function pushThrottled(node, timeWindow) {
        if (!node._babTh) {
            node._babTh = Date.now();
            node._babTc = 1;
            return 1;
        }
        node._babTc = calculateThrottle(node._babTc, node._babTh, timeWindow);
        node._babTh = Date.now();
        return node._babTc;
    }


    var stalledQueue = [];

    var globalThrottle = {};

    function throttleEvent(sender) {
        if(bablic.noMutationThrottle)
            return false;
        var glob = pushThrottled(globalThrottle, THROTTLE_GLOBAL_WINDOW);
        if(glob > THROTTLE_GLOBAL_MAX){
            bablic.log('canceled because short time');
            return true;
        }
        var perElement = pushThrottled(sender, THROTTLE_ELEMENT_WINDOW);
        if (perElement > THROTTLE_ELEMENT_MAX) {
            bablic.log('canceled because short time');
            return true;
        }
        return false;
    }

    var BULK_PULL = 10;
    var consumeQueueInner = function () {
        consumeQueueTimeout = started = null;
        var nodes = stalledQueue;
        stalledQueue = [];
        if (nodes.length > 80)
            return processElement(document.body);
        var step = function () {
            var bulk = nodes.splice(0, BULK_PULL);
            if (!bulk.length)
                return;
            for(var i=0; i<bulk.length; i++) {
                if (bulk[i].parentElement && bulk[i]._babSt) {
                    processElement(bulk[i]);
                    delete bulk[i]._babSt;
                }
            }
            setTimeout(step, 0);
        };
        step();
    };

    var consumeQueueTimeout, started;
    var consumeQueue = function () {

        if (started && Date.now() - started > 1500 - 250)
            return;

        if (consumeQueueTimeout)
            clearTimeout(consumeQueueTimeout);

        if (!started)
            started = Date.now();

        consumeQueueTimeout = setTimeout(consumeQueueInner, 250);
    };

    // var mutation_queue = {};

    /**
     * Consumes the mustation listening queue
     */
        // function consumeQueue() {
        //     var funcs = [];
        //     var i = 0;
        //     // put all tasks in array
        //     for (var key in mutation_queue) {
        //         funcs.push((function (node) {
        //             return function () {
        //                 // perform task and call next task on next tick
        //                 if (node.parentElement)
        //                     processElement(node);
        //                 if (i < funcs.length)
        //                     setTimeout(funcs[i++], 0);
        //             };
        //         })(mutation_queue[key]));
        //     }
        //     mutation_queue = {};
        //     if (funcs.length)
        //         funcs[i++]();
        //     consumeTimeout = null;
        //     consumeTimeoutFirst = Date.now();
        // }

        // var counter = 0;
        //
        // var consumeTimeout;
        //
        // var consumeTimeoutFirst = Date.now();
        //
        //
        // var FORCE_TIMEOUT = 300;

    var mutationCallbackSingle = function (element) {
            if (!LDATA || !LDATA.content)
                return;
            if (bablic.mutation_listen_off > 0)
                return;
            if (element && (element.tagName || "").toUpperCase() == 'SPAN' && element.id == 'bablicLink' && parent.parentNode)
                return element.parentNode.removeChild(element);

            if (bablic.noMutationListening)
                return;

            if (!element || element == WIN)
                return;

            if (element.nodeType != 1)
                element = element.parentNode;

            while (element && element.parentElement && element.nodeType == 1 && !('bablic_last_value' in element) && element != DOC.body && element.tagName != 'HEAD')
                element = element.parentElement;

            mutationCallback([element]);
        }
    /**
     * Mutation event handler
     */
    var mutationCallback = Mutation.callback = function (elements) {

        // emit the mutation event
        Mutation.emit('mutation');

        var after = Date.now() - lastBablic;
        lastBablic = Date.now();

        var processed = 0;
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (!throttleEvent(element)) {
                if (element._babSt)
                    delete element._babSt;
                processElement(element);
                processed++;
                continue;
            }
            if (!(element._babSt === 2)) {
                element._babSt = 2;
                stalledQueue.push(element);
            }

        }
        bablic.log("mutation", processed + '/' + elements.length, after);
        if(processed > 0)
            lastFired = Date.now();
        if(processed < elements.length)
            consumeQueue();
        //
        // // If there were no mutation in last 10 milliseconds -> process the element synchronicaly without waiting
        // if (!throttleEvent(parent)) {
        //     bablic.log('sync handle');
        //     processElement(parent);
        //     return;
        // }
        // if (!parent.bablicId)
        //     parent.bablicId = Date.now() + '.' + counter++;
        // mutation_queue[parent.bablicId] = parent;
        //
        // if (consumeTimeout) {
        //     if (Date.now() - consumeTimeoutFirst < FORCE_TIMEOUT) {
        //         clearTimeout(consumeTimeout);
        //         consumeTimeout = setTimeout(consumeQueue, 50);
        //     }
        //     else
        //         consumeQueue();
        // }
        // else
        //     consumeTimeout = setTimeout(consumeQueue, 50);
    };


    try {
        var prop = Object.getOwnPropertyDescriptor(Node.prototype, "nodeValue");
        if (prop && prop.set) {
            var _setter = prop.set;
            prop.set = function (val) {
                var changed = this.nodeValue != val;
                _setter.apply(this, arguments);
                if (changed && this && this.parentElement && this.parentElement.ownerDocument)
                    mutationCallbackSingle(this);
            };
            Object.defineProperty(Node.prototype, "nodeValue", prop);
            Object.defineProperty(Node.prototype, "_nodeValue", {
                get: prop.get,
                set: _setter,
            });
            setNodeValue = function(node, value) {
                node._nodeValue = value;
            }
        }

    } catch (e) {}

})(bablic);
;
var prefetchOnFirstView;

(function (bablic) {


    function prefetchLink(url) {
        if ($('head link[rel=prefetch][href="' + url + '"]').length())
            return;
        $('head').append('<link bablic-exclude rel="prefetch" href="' + url + '" />');
    }


    prefetchOnFirstView = function () {
        if (bablic.proxy)
            return;
        $.each(bablic.locales, function (i, locale) {
            var path = normalizedCurrentPath();
            var pathname = '/page?s=' + bablic.Site + '&l=' + locale.key + '&page=' + encodeURIComponent(path);
            var url = getPageTranslationURL(pathname);
            url = LOC.protocol + jsonpURL(url, pathname);
            prefetchLink(url);
            bablic.log('prefetch', url);

            pathname = '/conf?s=' + bablic.Site + '&l=' + locale.key;
            url = getPageTranslationURL(pathname);
            url = LOC.protocol + jsonpURL(url, pathname);
            prefetchLink(url);
            bablic.log('prefetch', url);

        });
    }
})(bablic);;

var LocalDB;

var USE_LOCAL_DB = (!PROXY && !bablic.preview) || location.search.indexOf('testBablicLS') != -1;
var USE_INDEXED_DB = USE_LOCAL_DB;
var _c1 = "continu";
(function(bablic){
    var CONTINUE = _c1 + "e";

    var localStorageAdapter;
    var getLocalStorage = function(){
        try {
            if (WIN.localStorage)
                return WIN.localStorage;
        }catch (e){
            console.log("cant get local storage");
        }
        if(localStorageAdapter)
            return localStorageAdapter;

        localStorageAdapter = {
            getItem:function(key){
                return LocalDB.cookie.getCookie(key);
            },
            setItem:function(key,value){
                LocalDB.cookie.setCookie(key,value);
            }
        };
        return localStorageAdapter;

    };

    var indexDBByLocale = {},indexDBGetterByLocale = {};
    function getIndexDB(cbk){
        if(!bablic.locale || !WIN.indexedDB)
            return cbk(new Error('No indexed db'));
        if(bablic.locale in indexDBByLocale)
            return cbk(null,indexDBByLocale[bablic.locale]);

        if(bablic.locale in indexDBGetterByLocale)
            return indexDBGetterByLocale[bablic.locale].push(cbk);

        var locale = bablic.locale;

        try {
            var version = 4;
            var request = indexedDB.open('bablic_' + locale, version);
            indexDBGetterByLocale[locale] = [];
            var timeout = setTimeout(function(){
                dbCreated('Timeout');
                console.log('cant load indexeddb');
            },5000);
            var dbCreated = function(error,db){
                if(db)
                    indexDBByLocale[locale] = db;
                clearTimeout(timeout);
                if(error)
                    LocalDB.setSync('dbdown',Math.floor(Date.now()/1000));
                if(!cbk)
                    return;
                cbk(error,db);
                indexDBGetterByLocale[locale].forEach(function(handler){
                    handler(error,db);
                });
                delete indexDBGetterByLocale[locale];
                cbk = null;
            };
            // Run migrations if necessary
            request.onupgradeneeded = function (e) {
                var db = e.target.result;
                if(!db)
                    return cbk(new Error('Not created'));
                e.target.transaction.onerror = cbk;
                var store = db.createObjectStore('a', {keyPath: 'id'});
                store.createIndex('page', 'page', {unique: false, multiEntry: true});
            };

            request.onsuccess = function (e) {
                dbCreated(null,e.target.result);
            };
            request.onerror = function(e){
                dbCreated(e);
            };
        }
        catch(ex){
            cbk(ex);
        }

    }


    LocalDB = {
        cookie: {
            setCookie: function (c_name, value, exdays) {
                if(value.length > 1000)
                    return;
                var exdate = new Date();
                exdate.setDate(exdate.getDate() + exdays);
                var domain = '';
                var data = bablic.conf || bablic.data || {};
                var homeDomain = data.domain;
                if(homeDomain) {
                    var index = homeDomain.indexOf('/');
                    if(index>-1)
                        homeDomain = homeDomain.substr(0,index);
                }
                if(homeDomain && LOC.hostname.indexOf(homeDomain) > -1)
                    domain = ';domain=' + homeDomain;
                var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString()) + '; path=/' + domain;
                DOC.cookie = c_name + "=" + c_value;
            },
            getCookie: function (c_name) {
                var i, x, y, ARRcookies = DOC.cookie.split(";");
                for (i = ARRcookies.length-1; i >= 0; i--) {
                    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                    x = x.replace(/^\s+|\s+$/g, "");
                    if (x == c_name)
                        return unescape(y);
                }
            },
            clear:function(c_name){
                var exdate = new Date(Date.now() - 360000000);
                DOC.cookie = c_name + '=; expires=' + exdate.toUTCString() + '; path=/';
            }
        },
        getSync:function(key,force,override){
            try{
                if(force)
                    return LocalDB.cookie.getCookie('bab_' + key);
                if(!USE_LOCAL_DB && !override)
                    return null;
                return getLocalStorage().getItem('bab_' + key);
            }
            catch(e){
                bablic.error('LocalDB Failed',e);
            }
        },
        setSync:function(key,value,force,override){
            try {
                if(force)
                    return LocalDB.cookie.setCookie('bab_' + key,value,365);
                if(!USE_LOCAL_DB && !override)
                    return;
                getLocalStorage().setItem('bab_' + key, value);
            }
            catch(e){bablic.error('LocalDB failed',e)};
        },
        getConf:function(){
            return JSON.parse(LocalDB.getSync('bablic') || "null");
        },
        setConf:function(conf){
            LocalDB.setSync('bablic',JSON.stringify(conf));
        },
        getByIds:function(ids,cbk){
            if(!USE_INDEXED_DB)
                return cbk(true);

            try {
                getIndexDB(function (err, db) {
                    if (err || !db)
                        return cbk(err);


                    try {
                        var transaction = db.transaction(['a'], 'readonly');
                        var store = transaction.objectStore('a');

                        var results = {};
                        parallelEach(ids,function(id,cbk){
                            var req = store.get(id);

                            req.onsuccess = function(e) {
                                var res = e.target.result;
                                if(res)
                                    results[id] = res.value;
                                cbk();
                            };

                            req.onerror = function(e) {
                                cbk();
                            };
                        },function(err){
                            cbk(err,results);
                        });
                    }
                    catch(e){
                        cbk(e);
                    }
                });
            }
            catch(e){
                cbk(e);
            }
        },
        getByPage:function(page,cbk){
            if(!USE_LOCAL_DB)
                return cbk(true);
            try{
                if(WIN.localStorage){
                    var str = localStorage.getItem('bab_p_' + page);
                    if(str)
                        return cbk(null,JSON.parse(str));
                }
            }
            catch(e){bablic.error(e);}
            if(!USE_INDEXED_DB)
                return cbk(true);
            try {
                getIndexDB(function (err, db) {
                    if (err || !db)
                        return cbk(err);


                    try {
                        var transaction = db.transaction(['a'], 'readonly');
                        var store = transaction.objectStore('a');
                        var index = store.index('page');

                        var singleKeyRange = IDBKeyRange.only(page);
                        var results = {};

                        var setTrue = false;
                        index.openCursor(singleKeyRange).onsuccess = function (event) {
                            var cursor = event.target.result;
                            if (cursor) {
                                if(cursor.value.id != '__set__')
                                    results[cursor.value.id] = cursor.value.value;
                                else
                                    setTrue = true;
                                cursor[CONTINUE]();
                            }

                        };
                        transaction.oncomplete = function () {
                            if(!setTrue && $.isEmptyObject(results))
                                return cbk('not found',results,db);
                            cbk(null, results, db);
                        }
                    }
                    catch(e){
                        cbk(e);
                    }
                });
            }
            catch(e){
                cbk(e);
            }
        },
        setByPage:function(items,page){
            if(!USE_LOCAL_DB)
                return;
            try{
                if(WIN.localStorage && items.length < 1000){
                    var str = JSON.stringify(items);
                    localStorage.setItem('bab_p_' + page,str);
                    return;
                }
            }
            catch(e){bablic.error(e);}
            if(!USE_INDEXED_DB)
                return;
            if($.isEmptyObject(items))
                items['__set__'] = 'true';
            LocalDB.getByPage(page, function (err, results, db) {
                if (!db || !results)
                    return bablic.error(err);

                var tasks = [],contentsToPut = [];
                for (var key in items) {
                    if (!(key in results)) {
                        (function(key,value){
                            tasks.push(function(cbk){
                                var transaction = db.transaction(['a'], 'readonly');
                                var store = transaction.objectStore('a');
                                store.get(key).onsuccess = function (event) {
                                    var content = event.target.result;
                                    if (!content) {
                                        content = {id: key, value: value, page: [page]};
                                    }
                                    else {
                                        if (content.page.indexOf(page) > -1)
                                            return;
                                        content.page.push(page);
                                    }
                                    contentsToPut.push(content);
                                    cbk();
                                };
                            });
                        })(key,items[key]);
                    }

                }
                parallel(tasks,function(err){
                    if(err)
                        return bablic.error(err);
                    var transaction = db.transaction(['a'], 'readwrite');
                    var store = transaction.objectStore('a');
                    contentsToPut.forEach(function(c){
                        store.put(c);
                    });
                    transaction.oncomplete = function(e){
                        bablic.log(e);
                    };
                    transaction.onerror = function(e){
                        bablic.error(e);
                    }
                });

            });
        },
        clearSync:function(key, force){
            if(WIN.localStorage)
                localStorage.removeItem('bab_' + key);
            LocalDB.cookie.clear('bab_' + key);
        },
        clearAll:function(cbk){
            var keys = ['bablic','unused'];
            $.each(bablic.locales || [],function(i,locale){
                keys.push('global' + locale.key);
                keys.push('home_' + locale.key);
                $.each(Object.keys((LDATA && LDATA.packages) || {}),function(i,p){
                    keys.push('p_' + locale.key + '_' + p);
                    keys.push('@' + locale.key + '_' + p);
                });
            });
            $.each(keys,function(i,key){
                LocalDB.clearSync(key);
            });
            if(!WIN.indexedDB)
                return cbk && cbk();
            parallelEach(bablic.locales || [],function(locale,cbk){
                try {
                    var req = indexedDB.deleteDatabase('bablic_' + locale.key);
                    req.onsuccess = function () {
                        bablic.log("Deleted database successfully");
                        delete indexDBByLocale[locale.key];
                        cbk && cbk();
                        cbk = null;
                    };
                    req.onerror = function () {
                        bablic.error("Couldn't delete database");
                        cbk && cbk();
                        cbk = null;
                    };
                    req.onblocked = function () {
                        bablic.error("Couldn't delete database due to the operation being blocked");
                        cbk && cbk();
                        cbk = null;
                    };
                    setTimeout(function(){
                        if(!cbk)
                            return;
                        bablic.error("timeout in deleting db");
                        cbk();
                        cbk = null;
                    }, 1000);
                }
                catch(e){
                    cbk && cbk();
                    cbk = null;
                }
            },cbk);
        }
    };

    bablic.cookie = LocalDB.cookie;

    if(USE_LOCAL_DB) {
        var dbDown = LocalDB.getSync('dbdown');
        if(dbDown && Number(dbDown) > (Date.now()-1000*60*5)/1000)
            USE_INDEXED_DB = false;
        else
            USE_INDEXED_DB = true;
    };
})(WIN._bab || bablic);

;
var hideWidget, showFlags,getFlag;
(function (bablic) {
    var _functionToString = WIN.Function && Function.prototype.toString;

    function printFunction(func){
        if(_functionToString)
            return _functionToString.apply(func);
        return func.toString();
    }

    var SIZES = {
        1: 16,
        2: 24,
        3: 32,
        4: 48,
        5: 64,
        6: 128
    };

    var EMBEDDED_WIDGET = '<ul class="bablic-flags-menu"> {@_.l} <li {{_.selected ? "class=\\\"selected\\\"":""}}> <a target="_top" data-locale="{{_.key}}" href="{{_.href}}" title="{{_.name}}"> <img src="{{_.flag}}" alt="{{_.name}}"> </a> </li> {/?} </ul> ';

    var WIDGET_TYPES = {
        'flags': {
            html: '<ul class="size{{_.c.size}} corner{{_.c.position.corner}} {{_.c.expanded?"expanded":""}} {{_.c.widgetType.indexOf("Horiz")>-1?"horizontal":"vertical"}}"> {@_.l} <li {{_.selected ? "class=\\\"selected\\\"":""}}> <a class="item" target="_top" data-locale="{{_.key}}" href="{{_.href}}" title="{{_._name}}" style="font-size:{{Math.floor(_.parent.sizeNum*0.5*_.factor)+3}}px;" aria-label="Translate to {{_._name}}"> {?_.parent.c.widgetType.indexOf("flags")>-1} <img src="{{_.parent.p}}{{_._flag}}" alt="{{_._name}}"> {/?} {?_.parent.c.widgetType.indexOf("flags")==-1} {{_._prefix}} {/?} </a> </li> {/@} {?_.c.logo&&!_.expired} <li class="logo"><a target="_top" href="https://legacy.bablic.com/?utm_source=LangWidget&utm_medium=LangWidget&utm_campaign=LangWidget" title="Powered by Bablic"><img alt="{{_.keyword}}" src="{{_.p}}//uploads.bablic.com/flags/theme/{{_.c.colors[0]=="#01B0F0"?"dark":"blue"}}/{{_.sizeNum}}.png"></a></li> {/?} {?_.expired} <li class="logo"><img onclick="window.top.location.href=\'http://legacy.bablic.com\'" title="Bablic trial expired!" class="notice_icon" src="//uploads.bablic.com/resources/notice_icon.png"></li> {/?} </ul>',
            css: 'body{ direction:ltr; } .notice_icon { width: 100%; } ul{ position:absolute; {{_.c.position.corner%8>3?"bottom:0":"top:0"}}; list-style: none; margin:0; {?!_.c.expanded} transition: height 300ms,width 300ms; -webkit-transition: height 300ms,width 300ms; -moz-transition: height 300ms,width 300ms; -ms-transition: height 300ms,width 300ms; -o-transition: height 300ms,width 300ms; {/?} background-color: {{_.c.colors[0]}}; overflow:hidden; left:0; right:auto; } ul.vertical{ width: {{_.sizeNum}}px; height: {{_.sizeNum}}px; padding:4px 6px; } ul.horizontal{ width: {{_.sizeNum+14}}px; height: {{_.sizeNum+8}}px; padding:0; } ul.corner2,ul.corner3,ul.corner4,ul.corner5{ right:0; left:auto; } a.item{ color:{{_.c.colors[1]}}; text-decoration:none; font-family:Arial; text-transform:uppercase; display:block; text-align:center; line-height:{{_.sizeNum}}px; white-space: nowrap; } ul.corner1,ul.corner2{ border-radius: 0 0 5px 5px; } ul.corner3,ul.corner4{ border-radius: 5px 0 0 5px; } ul.corner5,ul.corner6{ border-radius: 5px 5px 0 0; } ul.corner7,ul.corner8{ border-radius: 0 5px 5px 0; } ul li{ height: {{_.sizeNum}}px; width:{{_.sizeNum}}px; display:none; float:left; } ul.horizontal li{ padding:4px 7px; } ul.corner2 li,ul.corner3 li,ul.corner4 li,ul.corner5 li{ float:right; } ul.expanded li,ul li.selected{ display:block; } ul li a img{ height:100%; } ul li.logo a img{ width:70%; height:70%; //top:15%; //left:15%; padding:15%; position:relative; }',
            js: function f() {
    var bablic = parent._bab || parent.bablic;
    bablic.trigger('widget');
    var $ = bablic.$;
    var ul = $(document.getElementsByTagName("ul"));
    bablic.resizeWidget(ul.width(), ul.height());
    var loadedAt = Date.now();
    var onClick = function(e){
        if (parent.isInClickElement && parent.isInClickElement(e.clientX, e.clientY)){
            e.preventDefault();
            return;
        }

        if(e.ctrlKey || e.shiftKey || e.altKey)
            return true;
        var locale = $(this).attr('data-locale');
        if(!locale) {
            // to open logo
            return true;
        }
        e.preventDefault();
        //console.log('before',opened,suppress,Date.now());
        // suppress click on dropdown on mobile
        if (hasOpened && !bablic.widgetConf.expanded && bablic.Modernizr.touchevents && (!opened || (Date.now()-suppress)<500)) {
            suppress = null;
            return false;
        }
        // suppress if widget was just loaded
        if(bablic.Modernizr.touchevents && (Date.now() - loadedAt)<800){
            suppress = null;
            return false;
        }
        //console.log('after suppress',locale);

        if (!locale)
            return bablic.logo();
        //console.log('to locale');
        bablic.redirectTo(locale,null,e);
    };
    $.byTag('a',document).on('click',onClick);

    var opened, suppress,
        padding = (parseInt(ul.css('padding-top')) + parseInt(ul.css('padding-bottom'))) || 0,
        paddingHoriz = (parseInt(ul.css('padding-left')) + parseInt(ul.css('padding-right'))) || 0,
        numberOfLocales = ul.children('li').length(),
        columns = Math.ceil(numberOfLocales/15),
        closed_height = ul.height() || 0,
            closed_width = ul.width() || 0,
            open_height,open_width;
    var hasOpened = numberOfLocales > 1;
    var isHorizontal = bablic.widgetConf.widgetType.indexOf('Horiz') > -1;
    if(isHorizontal){
        open_height = (closed_height-padding)* columns + padding;
        open_width = (closed_width-paddingHoriz)*Math.ceil(numberOfLocales/columns)+paddingHoriz;
    }
    else {
        open_height = (closed_height-padding)* Math.ceil(numberOfLocales/columns) + padding;
        open_width = (closed_width-paddingHoriz)*columns+paddingHoriz;
    }
    if(!open_width)
        bablic.error('No width');

    var openWidget = function(){
        if(opened)
            return;
        bablic.trigger('expand');
        bablic.resizeWidget(open_width, open_height);
        ul.css('height',open_height-padding).css('width',open_width-paddingHoriz);
        $.byTag("li", document).css('display','block');
        opened = true;
        suppress = Date.now();
        if (hoverTO)
            clearTimeout(hoverTO);
        hoverTO = null;
    };
    var closeWidget = function(){
        bablic.trigger('collapse');
        opened = false;
        suppress = null;
        ul.css('height',closed_height-padding).css('width',closed_width-paddingHoriz);

        $.byTag("li", document).css('display','');
        if(bablic.Modernizr && !bablic.Modernizr.csstransitions)
            return bablic.resizeWidget(closed_width, closed_height);

        hoverTO = setTimeout(function () {
            hoverTO = null;
            bablic.resizeWidget(closed_width, closed_height);
        }, 500);

    };
    var hoverTO;
    window.expand = openWidget;
    window.collapse = closeWidget;
    if (bablic.widgetConf.expanded) {
        bablic.resizeWidget(open_width, open_height);
        ul.css('height',open_height-padding).css('width',open_width-paddingHoriz);
        return;
    }
    window.onClickOutside = closeWidget;
    ul.on('mouseenter', openWidget).on('mouseleave', closeWidget);
    if(bablic.Modernizr.touchevents)
        $.byTag("a", document).on('touchstart',function(e){
            ul.off('mouseenter', openWidget).off('mouseleave', closeWidget);
            var ret = onClick.apply(this,[e]);
            if(ret === false)
                return openWidget.apply(this,[e]);
            return ret;
        });


    var collapseTimeout;
    var startCollapse = function() {
        keepExpanded();
        collapseTimeout = setTimeout(closeWidget, 200);
    };
    var keepExpanded = function() {
        clearTimeout(collapseTimeout);
    };

    $.byTag('a',document).on('focus', function() {
        keepExpanded();
        openWidget();
    }).on('blur', startCollapse);
}

        },
        labels: {
            html: '<div id="widget" class="size{{_.c.size}} corner{{_.c.position.corner}} {{_.c.logo?"with-logo":""}} {{_.c.expanded?"expanded":""}} {{_.expired?"is-expired":""}}"> <div id="current"> <a target="_top" data-locale="{{_.s.key}}" href="{{_.s.href}}" title="{{_.s._name}}" style="font-size:{{(_.factor||1)*100}}%" aria-label="Remain in current language ({{_.s._name}})">{{_.s._name}}</a> {?_.expired} <img class="expired" onclick="handleExpired();" title="Bablic trial is expired!" src="//uploads.bablic.com/resources/notice_icon.png"> {/?} </div> <div id="list" class="size{{_.c.size}} corner{{_.c.position.corner}} {{_.c.logo?"logo":"logo"}}"> {?_.c.logo && _.c.position.corner > 3} <a class="logo" href="https://legacy.bablic.com/?utm_source=LangWidget&utm_medium=LangWidget&utm_campaign=LangWidget" target="_blank"> <img alt="{{_.keyword}}" src="{{_.p}}//uploads.bablic.com/flags/logo/TWD-x{{_.c.size<4?15:35}}.png"/> </a> {/?} {@_.l} <a target="_top" data-locale="{{_.key}}" href="{{_.href}}" title="{{_._name}}" style="font-size:{{(_.factor||1)*100}}%" aria-label="Translate to {{_._name}}" >{{_._name}}</a> {/@} {?_.c.logo && _.c.position.corner < 3} <a class="logo" href="https://legacy.bablic.com/?utm_source=LangWidget&utm_medium=LangWidget&utm_campaign=LangWidget" target="_blank"> <img alt="{{_.keyword}}" src="{{_.p}}//uploads.bablic.com/flags/logo/TWD-x{{_.c.size<4?15:35}}.png"/> </a> {/?} {?_.expired} <img class="expired" onclick="handleExpired();" title="Bablic trial is expired!" src="//uploads.bablic.com/resources/notice_icon.png"> {/?} </ul> </div> ',
            css: 'body { direction:ltr; font-family: sans-serif; color: {{_.c.colors[2]}}; font-weight:bold; width:400px; height:1000px; } div,a{ display:block; } a,a:visited,a:focus,a:active,.desktop a:hover{ color: inherit; text-decoration: none; } a:focus { outline: none; box-shadow: inset 0.5px 0 0 4px {{_.c.colors[1]}}; } #widget{ position:fixed; overflow:hidden; border-radius:{{_.c.size+1}}px; box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.2); font-size:{{_.c.size*3+6}}px; line-height:{{_.c.size*9+15}}px; } #widget #list{ visibility:hidden; } #widget.active #list{ display:none; visibility:visible; } #widget.expanded.active #list{ display:block; } #widget.expanded #current{ display:none; } a{ text-align:center; padding:0 {{_.c.size*8+2}}px; min-width: {{_.c.size*10+10}}px; border-bottom:1px solid {{_.c.colors[3]}}; margin-bottom:-1px; position:relative; white-space:nowrap; } a:before{ content:""; display:block; position:absolute; top:0; left:0; right:0; bottom:0; background:{{_.c.colors[0]}}; opacity:0.95; z-index:-1; } a:hover:before { background:{{_.c.colors[1]}}; opacity:1; } a:focus:before { background:{{_.c.colors[1]}}; opacity: 1; } {?_.c.size>2} a.logo{ padding:0 23px; } {/?} a.logo:before{ background:rgb(1, 174, 218); } a.logo:after{ content: ""; background-image: url(https://uploads.bablic.com/flags/logo/unbabel.png); position: absolute; width: 56px; height: 13px; background-size: cover; bottom: 3px; left: 0px; right: 0; margin: auto; display:none; } {?_.c.size>2} a.logo:after{ display:block; } {/?} {?_.c.size==4} a.logo:after{ width: 62px; height: 13px; bottom: 4px; } {/?} {?_.c.size==5} a.logo:after{ width: 69px; height: 14px; bottom: 6px; } {/?} a.logo img{ height:{{_.c.size*4+3}}px; } #widget.corner1,#widget.corner2 { top:0; border-top-left-radius:0; border-top-right-radius:0; } #widget.corner1{ left:1px; } #widget.corner2{ right:1px; } #widget.corner5,#widget.corner6 { bottom:0; border-bottom-left-radius:0; border-bottom-right-radius:0; } #widget.corner5{ right:1px; } #widget.corner6{ left:1px; } .expired{ max-width: 20px; max-height: 20px; display: block; position: absolute; top: 0; right: 0; }',
            js: function f() {
    var bablic = parent._bab || parent.bablic;
    var $ = bablic.$;
    var d = document;
    var element = $.byId('widget',d);
    var expanded = bablic.widgetConf.expanded;
    var opened_box = $.byId('list', d);
    var closed_box = !expanded && $.byId('current',d);
    var hasOpened = opened_box.children('a').length() > 1;
    var opened, suppress;
    var hasTouch = 'ontouchstart' in d.body;
    var mobile = hasTouch;
    var now = function() { return Date.now();};
    $.byTag('a',d).on('click',function(e){
        if (parent.isInClickElement && parent.isInClickElement(e.clientX, e.clientY)){
            e.preventDefault();
            return;
        }

        if(e.ctrlKey || e.shiftKey || e.altKey)
            return true;
        // suppress click on dropdown on mobile
        if (hasOpened && !expanded && mobile && (!opened || (now()-suppress)<500)) {
            suppress = null;
            e.preventDefault();
            return false;
        }
        var locale = $(this).attr('data-locale');

        if (!locale)
            return;
        e.preventDefault();
        bablic.redirectTo(locale,null,e);
    });

    var resize = function(){
        bablic.resizeWidget(opened || expanded ? openedWidth : closedWidth + 2, opened || expanded? openedHeight : closedHeight + 1);
    };
    var expand = window.expand = function(){
        element.addClass('expanded');
        opened = true;
        suppress = Date.now();
        resize();
    };

    var collapse = window.collapse = function(){
        element.removeClass('expanded');
        opened = false;
        suppress = null;
        resize();
    };

    if(expanded)
        element.addClass('expanded');
    else {
        window.onClickOutside = collapse;
        closed_box.on('mouseover', expand);
        opened_box.on('mouseleave', collapse);

        var collapseTimeout;
        var startCollapse = function() {
            if (mobile) {
                return;
            }
            keepExpanded();
            collapseTimeout = setTimeout(collapse, 200);
        };
        var keepExpanded = function() {
            if (mobile) {
                return;
            }
            clearTimeout(collapseTimeout);
        };
        closed_box.children('a').on('focus', function() {
            if (mobile) {
                return;
            }
            expand();
            opened_box.children('a').get(0).focus();
        }).on('blur', startCollapse);
        opened_box.children('a').on('focus', keepExpanded).on('blur', startCollapse);
    }

    var ts = null;
    $(d).on('touchstart',function(){
        ts = now();
        mobile = true;
    });
    $(d).on('mousemove',function(){
        // check if this is ready a mouse or just a fake touch
        if(!mobile || (ts && now() - ts < 500))
            return;

        mobile = false;
    });

    var closedWidth,closedHeight, openedWidth, openedHeight, interval = 1;
    function calculateSize() {
        var reflowIt = opened_box.get(0).offsetHeight;
        if(!expanded)
            reflowIt += closed_box.get(0).offsetHeight;
        openedWidth = opened_box.width();
        openedHeight = opened_box.height();

        if(!expanded) {
            opened_box.get(0).style.display = "none";
            reflowIt = opened_box.get(0).offsetHeight;
            closedWidth = closed_box.width();
            closedHeight = closed_box.height();
            opened_box.get(0).style.display = "";
            reflowIt = opened_box.get(0).offsetHeight;
        }
        if(!openedWidth || !openedHeight) {
            setTimeout(calculateSize, interval++);
        } else {
            element.addClass('active');
            d.body.style.width = 'auto';
            d.body.style.height = 'auto';
            resize();
        }
    }

    calculateSize();

}

        }
    };
    WIDGET_TYPES.labels2 = WIDGET_TYPES.labels;
    WIDGET_TYPES.flagsHoriz = WIDGET_TYPES.letters = WIDGET_TYPES.lettersHoriz = WIDGET_TYPES.flags;
    var FOREACH_REGEX = /\{@([^\s]+)\}((?:.|\n)*?)\{\/@}/g;
    var VAR_REGEX = /\{\{(.*?)\}\}/g;
    var IF_REGEX = /\{\?(.*?)\}((?:.|\n)*?)\{\/\?\}/g;

    var originalSrcDocProp = null;
    try {
        originalSrcDocProp = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'srcdoc');
    } catch (e) {}
    /**
     * Renders the template using the data in context
     * @param context
     * @param template
     * @returns HTML String
     */
    function renderTags(context, template) {
        var getVar = function (expression) {
            try {
                // 1. Tokenize: Extract strings, paths, numbers, and operators
                var tokens = expression.match(/("(?:\\.|[^"])*"|'(?:\\.|[^'])*')|([a-zA-Z_$][a-zA-Z\d._$]*)|(-?\d+(\.\d+)?)|(\|\||&&|[><]=?|==|!=|[?:!%+\-*/()\[\],])/g);
                if (!tokens) return undefined;

                // 2. Resolve Tokens
                var resolved = [];
                for (var i = 0; i < tokens.length; i++) {
                    var t = tokens[i];

                    // FIX: Handle String Literals and unescape internal quotes
                    if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
                        // Remove outer quotes and replace \" with " and \' with '
                        resolved.push(t.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'"));
                        continue;
                    }

                    // Handle Numbers
                    if (/^-?[\d.]+$/.test(t)) {
                        resolved.push(parseFloat(t));
                        continue;
                    }

                    // Handle Known Operators
                    if (/^(\|\||&&|[><]=?|==|!=|[?:!%+\-*/()\[\],])$/.test(t)) {
                        resolved.push(t);
                        continue;
                    }

                    var pathStr = t.startsWith('_.') ? t.slice(2) : t;
                    if (pathStr.startsWith('context.')) pathStr = pathStr.slice(8);

                    // Generic Method Call Detection
                    if (tokens[i + 1] === '(') {
                        var methodParts = pathStr.split('.');
                        var methodName = methodParts.pop();
                        var remainingPath = methodParts.join('.');

                        var targetObj = (methodParts[0] === 'Math') ? Math : 
                            (remainingPath === "" ? context : remainingPath.split('.').reduce(function(obj, key) {
                                return (obj && typeof obj === 'object' && key in obj) ? obj[key] : undefined;
                            }, context));

                        var args = [];
                        i += 2; 
                        while (i < tokens.length && tokens[i] !== ')') {
                            var argToken = tokens[i];
                            if (argToken.startsWith('"') || argToken.startsWith("'")) {
                                // Also unescape strings passed as arguments
                                args.push(argToken.slice(1, -1).replace(/\\"/g, '"').replace(/\\'/g, "'"));
                            } else if (/^-?[\d.]+$/.test(argToken)) {
                                args.push(parseFloat(argToken));
                            } else {
                                args.push(argToken.split('.').reduce(function(obj, key) {
                                    return (obj && typeof obj === 'object' && key in obj) ? obj[key] : undefined;
                                }, context));
                            }
                            i++; 
                            if (tokens[i] === ',') i++;
                        }

                        if (targetObj && typeof targetObj[methodName] === 'function') {
                            resolved.push(targetObj[methodName].apply(targetObj, args));
                        } else {
                            resolved.push(undefined);
                        }
                        continue;
                    }

                    // Standard Property Resolution
                    var val = pathStr.split('.').reduce(function(obj, key) {
                        return (obj && typeof obj === 'object' && key in obj) ? obj[key] : undefined;
                    }, context);
                    
                    resolved.push((typeof val === 'string' && !isNaN(val) && val.trim() !== "") ? parseFloat(val) : val);
                }

                // 3. Shunting-Yard (Standard logic for math and ternary)
                var precedence = { 
                    '?': 1, ':': 1, '||': 2, '&&': 3, '==': 4, '!=': 4, '>': 5, '<': 5, '>=': 5, '<=': 5, 
                    '+': 6, '-': 6, '*': 7, '/': 7, '%': 7, '[': 8 
                };
                var output = [], ops = [];

                resolved.forEach(function(token) {
                    if (token === '(' || token === '[') {
                        ops.push(token);
                    } else if (token === ')') {
                        while (ops.length && ops[ops.length - 1] !== '(') output.push(ops.pop());
                        ops.pop();
                    } else if (token === ']') {
                        while (ops.length && ops[ops.length - 1] !== '[') output.push(ops.pop());
                        output.push(ops.pop()); 
                    } else if (precedence[token] !== undefined) {
                        var isRightAssoc = (token === '?' || token === ':');
                        while (ops.length && ops[ops.length - 1] !== '(' && ops[ops.length - 1] !== '[' && (
                            (isRightAssoc ? precedence[ops[ops.length - 1]] > precedence[token] 
                                        : precedence[ops[ops.length - 1]] >= precedence[token])
                        )) {
                            output.push(ops.pop());
                        }
                        ops.push(token);
                    } else {
                        output.push(token);
                    }
                });
                while (ops.length) output.push(ops.pop());

                // 4. Evaluation
                var stack = [];
                output.forEach(function(token) {
                    if (precedence[token] === undefined) {
                        stack.push(token);
                    } else if (token === '[') {
                        var index = stack.pop();
                        var array = stack.pop();
                        stack.push((array && typeof array === 'object') ? array[index] : undefined);
                    } else if (token === ':') {
                        // Marker
                    } else if (token === '?') {
                        var falseVal = stack.pop();
                        var trueVal = stack.pop();
                        var condition = stack.pop();
                        stack.push(condition ? trueVal : falseVal);
                    } else {
                        var b = stack.pop(), a = stack.pop();
                        switch (token) {
                            case '||': stack.push(a || b); break;
                            case '&&': stack.push(a && b); break;
                            case '+':  stack.push(a + b); break;
                            case '-':  stack.push(a - b); break;
                            case '*':  stack.push(a * b); break;
                            case '/':  stack.push(a / b); break;
                            case '%':  stack.push(a % b); break;
                            case '==': stack.push(a == b); break;
                            case '!=': stack.push(a != b); break;
                            case '>':  stack.push(a > b); break;
                            case '<':  stack.push(a < b); break;
                            case '>=': stack.push(a >= b); break;
                            case '<=': stack.push(a <= b); break;
                        }
                    }
                });

                return stack[0];
            } catch (e) {
                console.warn("Evaluation failed: " + expression, e);
                return undefined;
            }
        };

        return template
            .replace(FOREACH_REGEX, function (match, collectionVar, inner) {
                var localesHTML = [];
                var collection = getVar(collectionVar);
                if (Array.isArray(collection)) {
                    for (var i = 0; i < collection.length; i++) {
                        var item = Object.assign({}, collection[i]);
                        item.parent = context;
                        localesHTML.push(renderTags(item, inner));
                    }
                }
                return localesHTML.join('');
            })
            .replace(IF_REGEX, function (match, varName, inner) {
                return getVar(varName) ? renderTags(context, inner) : '';
            })
            .replace(VAR_REGEX, function (match, varName) {
                var result = getVar(varName);
                return result !== undefined ? String(result) : '';
            });
    }

    /**
     * @param widgetConf
     * {
 *      widgetType:'flags',
 *      expanded:false,
 *      colors:[''],
 *      position:{ corner:1, distance:120,unit:'px'},
 *      logo:true,
 *      size : 1
 * }
     * corner
     * 1 : top left going right,
     * 2 : top right going left
     *
     * 3 : top right going down
     * 4: bottom right going up
     *
     * 5: bottom right going left
     * 6: bottom left going right
     *
     * 7: bottom left going up
     * 8: top left going down
     *
     * 1: 16px, 24px, 32px, 48px, 64px, 128px
     * @param locales
     * [
     *      {
 *          key:'fr',
 *          name:'French',
 *          flag:'//s3.sasdasd.com/asdas.png',
 *          href: '',
 *          selected:true
 *      }
     * ]
     * @returns {string}
     */
    function renderWidget(widgetConf, locales) {

        var wconf = widgetConf || {};
        var html = WIDGET_TYPES[wconf.widgetType || 'flags'].html;
        var keywordI = bablic.Site ? (bablic.Site.charCodeAt(bablic.Site.length - 1)) % 3 : 0;

        var context = {
            expired:bablic.expired,
            c: wconf,
            l: locales,
            s: widgetConf.hideCurrent ? locales[0] : targetLocale,
            sizeNum: SIZES[wconf.size],
            size: wconf.size,
            p: LOC.protocol,
            keyword: ({0: 'Website translation', 1: 'Website localization', 2: 'Translate Your Website'})[keywordI],
            rgba: function (i, opacity) {
                var hex = this.c.colors[i];
                // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
                var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                    return r + r + g + g + b + b;
                });

                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                if (!result)
                    return hex;
                return 'rgba(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ',' + opacity + ')';
            }
        };

        var renderedHTML = renderTags(context, html);

        var getZoomNum = function(element){
            var z = $(element).css('zoom') || '1';
            if(z[z.length-1] == '%')
                z = Number(z.substr(0,z.length-1))/100;
            else
                z = Number(z);
            z = z || 1;
            if(element.parentElement)
                return z * getZoomNum(element.parentElement);
            return z;
        };

        // send locale.name to css for the title property that provides tooltip info
        var css = renderTags(context, WIDGET_TYPES[wconf.widgetType].css);
        var zoom = WIN.BABLIC_ZOOM || 1;
        //zoom *= getZoomNum(DOC.body);
        // if(zoom != 1)
        //     css += '\nhtml{zoom:' + zoom.toFixed(4) + ';}';
        if(wconf.css)
            css += wconf.css;

        var js = printFunction(WIDGET_TYPES[wconf.widgetType].js);
        return '<!DOCTYPE html>\
                <html style="overflow:hidden;direction:ltr;zoom:' + zoom.toFixed(4) + ';" dir="ltr" class="' + (bablic.mobile ? 'mobile' : 'desktop') + '">\
                    <head>\
                        <style>' + css + '<\/style>\
                    <\/head>\
                <body style="margin:0">' + renderedHTML +
            '<script>(' + js + ')();<\/script><\/body>\
        </html>';
    }

    var chromeBugTimeout = null;

    function injectWidget(positionData, renderedHTML, target, outerStyle) {
        var sideFrame = DOC.createElement('iframe');

        sideFrame.setAttribute('bablic-exclude', 'true');
        sideFrame.id = 'bablicFlagsWidget';
        sideFrame.title = "Change Language";
        sideFrame.style.position = positionData.fixed || target ? 'absolute' : 'fixed';

        sideFrame.style.width = 400;
        sideFrame.style.height = 1000;
        sideFrame.style.margin = 0;
        sideFrame.style.border = 'none';
        sideFrame.style.display = 'block';
        sideFrame.style.opacity = 1;
        setZIndex(sideFrame);

        var distance = positionData.distance + positionData.unit;
        var corner = positionData.corner;

        // flip corner
        switch (corner) {

            // top left going right
            case 1:
                sideFrame.style.top = 0;
                sideFrame.style.left = distance;
                break;

            // top right going left
            case 2:
                sideFrame.style.top = 0;
                sideFrame.style.right = distance;
                break;

            // top right going down
            case 3:
                sideFrame.style.top = distance;
                sideFrame.style.right = 0;
                break;

            // bottom right going up
            case 4:
                sideFrame.style.right = 0;
                sideFrame.style.bottom = distance;
                break;

            // bottom right going left
            case 5:
                sideFrame.style.right = distance;
                sideFrame.style.bottom = 0;
                break;

            // bottom left going right
            case 6:
                sideFrame.style.left = distance;
                sideFrame.style.bottom = 0;
                break;

            // bottom left going up
            case 7:
                sideFrame.style.left = 0;
                sideFrame.style.bottom = distance;
                break;

            // top left going down
            case 8:
                sideFrame.style.top = distance;
                sideFrame.style.left = 0;
                break;

            default:
                bablic.error('This corner is not defined ' + positionData.corner);
                break;
        }
        if (outerStyle)
            sideFrame.style += outerStyle;

        var loaded = false;
        if('srcdoc' in sideFrame){
            // injects the html into the iframe
            sideFrame.srcdoc = renderedHTML;
            if (sideFrame.srcdoc !== renderedHTML && originalSrcDocProp &&
                originalSrcDocProp !== Object.getOwnPropertyDescriptor(sideFrame, 'srcdoc')) {
                originalSrcDocProp.set.call(sideFrame, renderedHTML);
            }
            loaded = true;
            // fix for chrome back bug
            if(chromeBugTimeout)
                clearTimeout(chromeBugTimeout);
            chromeBugTimeout = setTimeout(function(){
                chromeBugTimeout = null;
                if(sideFrame && sideFrame.contentDocument && sideFrame.contentDocument.body && !sideFrame.contentDocument.body.innerHTML)
                    sideFrame.srcdoc = renderedHTML;
            },500);
        }
        var targetElement = DOC.body;
        if (target) {
            targetElement = DOC.querySelector(target);
            if (!targetElement)
                return;
        }
        var extFrame = $('#bablicEditorSideBarWrapper,#bablicEditorSideBar');
        if(extFrame.length())
            targetElement.insertBefore(sideFrame,extFrame.get(0));
        else
            targetElement.appendChild(sideFrame);
        if(!loaded) {
            try {
                sideFrame.contentWindow.document.open();
                sideFrame.contentWindow.document.write(renderedHTML);
                sideFrame.contentWindow.document.close();
            }
            catch (ex) {
                setTimeout(function () {
                    if (!sideFrame.contentWindow)
                        return;
                    try {
                        sideFrame.contentWindow.document.open();
                        sideFrame.contentWindow.document.write(renderedHTML);
                        sideFrame.contentWindow.document.close();
                    }
                    catch (e) {
                        sideFrame.contentWindow.location.href = "data:text/html;charset=utf-8," + encodeURIComponent(renderedHTML);
                    }
                }, 500);
            }
        }
        return sideFrame;
    }

    function resizeWidget(width, height) {
        var sideFrame = DOC.getElementById('bablicFlagsWidget');
        if (!sideFrame)
            return;
        if (height !== null)
            sideFrame.style.height = height + 'px';
        if (width !== null)
            sideFrame.style.width = width + 'px';
    }


    var addedPadding = 0, resizeInt;


    function updateScrollPadding() {
        var newIsMobile = !!((Modernizr.touchevents && $.window.width() < 700) || (EDITOR && EDITOR.device() == 'mobile'));
        if (newIsMobile != MOBILE) {
            MOBILE = bablic.mobile = newIsMobile;
            showFlags();
        }
        var padding = hasAutoHidingScrollBar() ? detectScrollbarWidth() : 0;
        if (padding == addedPadding)
            return;
        var inc = padding - addedPadding;
        addedPadding = padding;
        var iframeElement = DOC.getElementById('bablicFlagsWidget');
        if (!iframeElement)
            return;
        var widgetElement = iframeElement && iframeElement.contentWindow && iframeElement.contentWindow.document && iframeElement.contentWindow.document.getElementsByTagName('ul')[0];
        if (!widgetElement)
            return;
        var addedSide = ['top', 'right', 'bottom', 'left'][Math.floor(bablic.widgetConf.position.corner / 2)];
        if (addedSide != 'left' && addedSide != 'right')
            return;
        var current = parseInt($(widgetElement).css('padding-' + addedSide) || '');
        $(widgetElement).css('padding-' + addedSide, (current + inc) + 'px');
        $(iframeElement).css('width', parseInt($(iframeElement).width()) + inc);
    }

    function hasAutoHidingScrollBar() {
        if (!WIN.innerHeight || !WIN.innerWidth || !DOC || !DOC.body)
            return false;
        //         has vertical scroll bar
        if ((DOC.body.clientHeight <= WIN.innerHeight) && !(DOC.body.scrollHeight > WIN.innerHeight))
            return false;

        if ($('html').css('overflow') == 'hidden' || $('html').css('overflow-y') == 'hidden')
            return false;
        // scroll bar takes room
        var html = DOC.getElementsByTagName('html')[0] || DOC.body;
        if (!html)
            return false;
        return WIN.innerWidth == html.clientWidth;
    }

    var scrollWidth = null;

    function detectScrollbarWidth() {
        if (scrollWidth !== null)
            return scrollWidth;
        // Create the measurement node
        var scrollDiv = bablic.$('<div style="width:100px; height:100px; overflow:scroll; position:absolute; top:-99999px" class="bablic-scrollbar-measure" bablic-exclude></div>').appendTo('body');
        if (scrollDiv.length == 0) return 0;
        var div = scrollDiv.get(0);
        scrollWidth = div.offsetWidth - div.clientWidth;

        scrollDiv.remove();
        return scrollWidth;
    }

    hideWidget = function () {
        bablic.setMutationListen(false);
        $('#bablicFlagsWidget').remove();
        bablic.setMutationListen(true);
    }

    var registerLoadEvent, flagsLoaded = false, showFlagsInt;
    showFlags = function (widgetConf, mobile) {
        if(!LDATA || !bablic.locales)
            return;
        if(!widgetConf){
            widgetConf = (LDATA.widget && LDATA.widget[mobile || MOBILE ? 1 : 0]);
            if(!widgetConf)
                return;
            if(WidgetSettings)
                widgetConf = $.extend({}, widgetConf, WidgetSettings);
        }
        if(bablic.hideWidget)
            return;
        if (!DOC.body) {
            if (!registerLoadEvent && !flagsLoaded) {
                $(DOC).on('DOMContentLoaded', function () {
                    showFlags();
                });
                showFlagsInt = setInterval(function () {
                    showFlags();
                }, 500);
                registerLoadEvent = true;
            }
            return;
        }
        if (showFlagsInt)
            clearInterval(showFlagsInt);
        flagsLoaded = true;
        bablic.widgetConf = widgetConf;
        $.each(bablic.locales, function (i, locale) {
            var conf = LocaleSettings[locale.key] || {};
            locale._flag = conf.flag || locale.flag || '//uploads.bablic.com/flags/' + SIZES[widgetConf.size] + '/' + locale.key + '.png';
            if(locale._flag.length <= 5)
                locale._flag = '//uploads.bablic.com/flags/' + SIZES[widgetConf.size] + '/' + locale._flag + '.png';
            locale._name = conf.name || locale.name;
            locale.href = conf.href || bablic.getLink(locale.key,null, null, locale.legacy,locale);
            locale.selected = locale.key == bablic.locale;
            locale._prefix = locale.prefix || locale._name.substr(0, 2);
            locale.factor = /zh|hi/.test(locale.key) ? 0.66 : 1;
        });
        bablic.setMutationListen(false);
        $('#bablicFlagsWidget').remove();
        bablic.setMutationListen(true);

        var locales = $.grep(bablic.locales,function(l){
            var conf = LocaleSettings[l.key];
            if(!conf)
                return true;
            return !conf.hidden;
        });
        // no menu to show
        if(locales.length == 0)
            return;

        if(locales.length == 1){
            // no other language to navigate to
            if(locales[0] == targetLocale)
                return;
        }
        if(!widgetConf.expanded) {
            var indexOfCurrent = locales.indexOf(targetLocale);
            if(indexOfCurrent > -1)
                locales.splice(indexOfCurrent, 1);
            if (!widgetConf.hideCurrent) {
                if (widgetConf.position.corner % 8 < 4 || widgetConf.widgetType != 'labels')
                    locales.unshift(targetLocale);
                else
                    locales.push(targetLocale);
            }
            else
                locales[0].selected = true;
        }
        else if(widgetConf.hideCurrent){
            var indexOfCurrent = locales.indexOf(targetLocale);
            if(indexOfCurrent > -1)
                locales.splice(indexOfCurrent, 1);
        }

        bablic.setMutationListen(false);

        if (!widgetConf.show) {
            if (!widgetConf.embedded)
                return bablic.setMutationListen(true);

            var placeholder = $(widgetConf.embedded);
            if (!placeholder.length()) {
                bablic.error('can\'t find target element ' + widgetConf.embedded);
                return bablic.setMutationListen(true);
            }
            // embed widget
            var html = renderTags({c: widgetConf, l: locales}, EMBEDDED_WIDGET);
            placeholder.html(html);
            return bablic.setMutationListen(true);
        }


        if(targetLocale.engines.indexOf(5) > -1 && widgetConf.position) {
            var corner = widgetConf.position._corner || widgetConf.position.corner;
            widgetConf.position._corner = corner;
            corner = (((11 - corner) - 1) % 8) + 1;
            widgetConf.position.corner = corner;
        }
        else if(widgetConf.position._corner)
            widgetConf.position.corner = widgetConf.position._corner;

        var iframeHTML = renderWidget(widgetConf, locales);
        var iframe = injectWidget(widgetConf.position, iframeHTML, widgetConf.target, widgetConf.style);
        if (WIN.addEventListener) {
            WIN.removeEventListener('resize', updateScrollPadding);
            WIN.addEventListener("resize", updateScrollPadding);
        }
        $.byTag('body').off('resize', updateScrollPadding).on('resize', updateScrollPadding);

        triggerEvent('afterWidgetRender', [iframe]);
        if (resizeInt)
            clearInterval(resizeInt);
        resizeInt = setInterval(updateScrollPadding, 2000);
        bablic.setMutationListen(true);
    }

    $(DOC).on('click', function (e) {
        var widget = DOC && DOC.getElementById('bablicFlagsWidget');
        if (!widget || !widget.contentWindow || !widget.contentWindow.onClickOutside)
            return;

        if (e.target && e.target.id == 'bablicFlagsWidget')
            return;

        widget.contentWindow.onClickOutside();
    });

    getFlag = function(key,size){
        size = size || (bablic.widgetConf ? bablic.widgetConf.size : 2);
        return '//uploads.bablic.com/flags/' + SIZES[size] + '/' + key + '.png'
    };

    bablic.showFlags = showFlags;
    bablic.resizeWidget = resizeWidget;

    if (EDITOR && EDITOR.isInClickElement) {
        window.isInClickElement = function(x, y){
            var widget = DOC && DOC.getElementById('bablicFlagsWidget');
            x = x + widget.offsetLeft;
            y = y + widget.offsetTop;
            var isInElement = EDITOR.isInClickElement(x,y);
            if (isInElement){
                EDITOR.onWidgetRightClick(widget, x, y);
            }
            return isInElement;
        }
    }

    bablic.logo = function () {
        setTimeout(function () {
            $('#bablic_dialogContainer,#bablic_dialogContainer *').on('click', function () {
                popup.css('opacity', 0);
                setTimeout(function () {
                    popup.remove();
                }, 400);
            });
        }, 10);
        var popup = $('<div id="bablic_dialogContainer" data-bablic-exclude style="background: #000; background: rgba(0,0,0,0.8); background: -webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.8) 100%); background: -moz-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.8) 100%); background: -ms-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.8) 100%); background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.45) 1%, rgba(0,0,0,0.8) 100%); ' +
        'filter: alpha(opacity = 80); position: fixed; right: 0; top: 0 !important; z-index: 999999999999999; overflow-x: auto; overflow-y: scroll; opacity:0; -webkit-transition: 400ms opacity ease; -moz-transition: 400ms opacity ease; transition: 400ms opacity ease; overflow: hidden; ' +
        'width:100%; height:100%; display:block; border-radius: 10px;"><div id="bablic_dialogTemplate" style="padding:0; top:0; bottom:0; box-shadow: 0 0 10px #bfc0c0, 0 0 10px #bfc0c0, 0 0 10px #bfc0c0, 0 0 10px #bfc0c0; border: 1px solid #0081a8; z-index:300; width:470px; height:120px;  max-width:90%; max-height:90%; position:absolute; left:0; right:0; margin:auto;' +
        '"><div class="bablic-close-popup" style="position: absolute; cursor: pointer; display: block; ' +
        'background: url(\'//legacy.bablic.com/images/2/blue-x.png\') no-repeat; width:18px; height:18px; top:0; right:0;' +
        '"></div>' +
        '<iframe class="bablic_iframe" style="width:100%; height:100%; border:0;" src="//legacy.bablic.com/banner?site=' + bablic.Site + '" frameborder="no"></iframe>' +
        '</div></div>').appendTo('body');
        setTimeout(function () {
            popup.css('opacity', 1);
        }, 1);
    }

})(bablic);
;

var bidiInline;

(function(){
// holds all BiDi procedures

var BiDi = {

    stripNumRegex:/(\d+)(.*)/,

    // checks wheter or not we need to transform the direction
    needTransform:function () {
        return (originalLocale.dir && originalLocale.dir == 'rtl') != (targetLocale && targetLocale.dir == 'rtl') ?
            (targetLocale.dir || 'ltr') : null;
    },

    // css attributes to replace from ltr to rtl
    replace_css_attr:{
        'margin-left':'margin-right',
        'left':'right',
        'padding-left':'padding-right'
    },

    defs:{
        'margin-left':0,'margin-right':0,'padding-right':0,'padding-left':0,
        top:0, left:0,
        float:'','text-align':''
    },

    // css attrbiutes for which to replace the values from ltr to trl
    replace_css_value:{
        'text-align':{left:'right'},
        float:{left:'right'}
    },

    // attributes for which to replace the values from ltr to rtl
    replace_attr_value:{
//        dir:{ ltr:'rtl'}
    },

    // take an element and transform it to rtl if toRtl or ltr
    bidiElement:function (ui, toRtl) {
        if(ui.bablic_bidid || ui.nodeType != 1)
            return;
        ui.bablic_bidid = true;
        var self = this;
        var ui = $(ui);
        $.each(self.replace_css_attr, function (key, value) {
            var change_rtl = false;
            var change_ltr = false;
            var change_rtl_value;
            if (ui.css(key) && Number(/\d+/.exec(ui.css(key)))) {
                change_rtl = true;
                change_rtl_value = ui.css(key);
            }
            if (ui.css(value) && Number(/\d+/.exec(ui.css(value)))) {
                ui.css(key, ui.css(value));
                ui.css(value, self.defs[value]);
                change_ltr = true;
            }
            if(change_rtl) {
                ui.css(value, change_rtl_value);
                if(!change_ltr)
                    ui.css(key, self.defs[key]);
            }
        });
        var right_zero = ui.css('right') && Number(/\d+/.exec(ui.css('right'))+'') === 0;
        var left_zero = ui.css('left') && Number(/\d+/.exec(ui.css('left'))+'') === 0;
        if(right_zero){
            ui.css('left','0px');
            if(!left_zero)
                ui.css('right','auto');
            else
                ui.css('right','0px');
        }
        else if(left_zero) {
            ui.css('right','0px');
            ui.css('left','auto');
        }

        $.each(this.replace_css_value, function (key, value) {
            if (ui.css(key)) {
                $.each(value, function (inner_key, inner_value) {
                    var change_rtl = false;
                    var change_rtl_value;
                    if (ui.css(key) == inner_key)
                        change_rtl = true;
                    if (ui.css(key) == inner_value) {
                        ui.css(key, inner_key);
                    }
                    if(change_rtl)
                        ui.css(key, inner_value);
                });
            }
        });

        $.each(this.replace_attr_value, function (key, value) {
            if (ui.attr(key)) {
                $.each(value, function (inner_key, inner_value) {
                    var change_rtl = false;
                    if (ui.attr(key) == inner_key)
                        change_rtl = true;
                    if (ui.attr(key) == inner_value)
                        ui.attr(key, inner_key);
                    if(change_rtl)
                        ui.attr(key, inner_value);
                });
            }
        });

/*        if(ui.css('background-image') != 'none' && /url\(/.test(ui.css('background-image'))) {
            var value;
            var x = ui.css('background-position-x');
            if(x == 'left')
                value = 'right';
            if(x == 'right')
                value = 'left';
            var parts = self.stripNumRegex.exec(x);
            if(parts){
                if(parts[2] == '%' || parts[1] == '0')
                    value = (100 - Number(parts[1])) + '%';
//                if(parts[2] == 'px')
//                    value = (ui.width() - Number(parts[1])) + 'px';
            }
            if(value)
                ui.css('background-position-x',value);
        }
		*/
//        var text_align_replace = {
//            left:'right',
//            'center':'center',
//            right:'left'
//        };
//        if(ui.css('text-align') != bablic.$(ui.parent()).css('text-align')){
//            ui.css('text-align',text_align_replace[ui.css('text-align')]);
//        }
    },
    RTL_REGEX: /(left|right)/g,
    MARGIN_PADDING_REGEX : /(margin|padding)[\s\t\n\r]*:[\s\t\n\r]*([0-9.]+(?:px|em|pt|%|))[\s\t\n\r]+([0-9.]+(?:px|em|pt|%|))[\s\t\n\r]+([0-9.]+(?:px|em|pt|%|))[\s\t\n\r]+([0-9.]+(?:px|em|pt|%|))/g,
    bidiInline:function(ui){
        if(ui.bablic_bidid || ui.nodeType != 1)
            return;
        ui.bablic_bidid = true;
        var styleAttr = ui.attributes['style'];
        if(!styleAttr)
            return;
        var css = styleAttr.nodeValue;
        if(!css)
            return;
        css = css.replace(this.RTL_REGEX,function(g){
            return g == 'left' ? 'right' : 'left';
        });
        css = css.replace(this.MARGIN_PADDING_REGEX,'$1:$2 $5 $4 $3');
        styleAttr.nodeValue = css;
    }
};

    bidiInline = function(node){
        return BiDi.bidiInline(node);
    }
})();
;
var HasTextMarkup = bablic.integrateI18n || false;

new_content = {};
usage_report = {};
var LDATA;               // all localization needed data from server
var Engines = {};

var processElement;
var savedContentNodes = [];
var jsNodes = {};
var IS_PROPERTIES_SUPPORTED;

var addMarkupByCode, removeMarkupByCode, excludeByCode, includeByCode, readNodeAttr, setNodeAttr, readNodeAttrIf, setNodeAttrIf, domTraverse, mergeContentNodes, flushMergedNodes, getNodeValue, processNodeWithEngine, node_to_location, addOMGScript, triggerEvent;
var _forceTraverse = false;
var translateAttr;
var EMPTY_REGEX = /^\s*$/;
var overrideHTMLAccess;
var isElementExcluded;

(function (bablic) {
    if(!bablic)
        throw new Error("Problem in loading");

    var bablic_generic_markup_regex = /^(?:data\-)?bablic\-(.+)$/;

    var bablic_id_counter = 0;


    //var EDITOR_PATH = 'https://app.bablic.com/dist';
    var EDITOR_PATH = 'https://legacy.bablic.com/dist';
    if (bablic.debugServer)
        EDITOR_PATH = '//' + bablic.debugServer + '/dist';


// Bablic Help Procudures


// jsonp implemenations


    processElement = bablic.processElement = function (parent,specificElement) {
        if (!LDATA || !LDATA.engines || !LDATA.content || !DOC.body || !Object.keys(LDATA.engines).length)
            return;

        if(WIN.angular)
            HAS_ANGULAR = true;

//        if (!DOC.body.getAttribute('bablic-exclude')) {
            var keepSavedContents = savedContentNodes;
            savedContentNodes = [];
            domTraverse(parent, bablic.UseInclude,specificElement);
            mergeContentNodes(keepSavedContents);
//        }
        if (LDATA.fallback || LDATA.report)
            send_ldata_report();
        if (LDATA.usage)
            send_usage_report();
    };


    var codeMarkup = {};

    addMarkupByCode = function (mark, sel, value) {
        if (!mark || !sel)
            return;
        codeMarkup[mark] = codeMarkup[mark] || {};
        if(typeof(sel) == 'string')
            (codeMarkup[mark].sels = codeMarkup[mark].sels || {})[sel] = value;
        else
            (codeMarkup[mark].el = codeMarkup[mark].el || {}).push([sel,value]);
    };

    function removeMarkup(attr,sel){
        if(!codeMarkup[attr])
            return false;
        if(typeof(sel) == 'string'){
            if(!codeMarkup[attr].sels || !(sel in codeMarkup[attr].sels))
                return false;
            delete (codeMarkup[attr]).sels[sel];
            return true;
        }
        if(!codeMarkup[attr].el)
            return false;
        var item = $.grep(codeMarkup[attr].el,function(e){
            return e[0] == sel;
        })[0];
        if(!item)
            return false;
        var index = codeMarkup[attr].el.indexOf(item);
        codeMarkup[attr].el.splice(index,1);
        return true;
    }

    removeMarkupByCode = removeMarkup;

    /**
     * Excludes an element from translation
     * @sel CSS selector, jquery object, or Dom node
     */
    excludeByCode = function (sel) {
        if(!removeMarkup('include',sel))
            addMarkupByCode('exclude', sel, true);
    };

    /**
     * Includes an element for translation
     * @sel CSS selector, jquery object, or Dom node
     */
    includeByCode = function (sel) {
        if(!removeMarkup('exclude',sel))
            addMarkupByCode('include', sel, true);
    };


    /**
     * Applies the code markup on the selectors inside the scope of the element
     * @param root element
     */
    function applyCodeMarkup() {
        for (var key in codeMarkup) {
            var mark = codeMarkup[key];
            if(!mark)
                continue;
            var sels = mark.sels;
            if(sels) {
                for (var sel in sels) {
                    try {
                        $(sel).attr('bablic-' + key, sels[sel] || true).addClass('bablic-code-markup');
                    }
                    catch(e){}
                }
            }
            var elements = mark.el;
            if(elements) {
                for (var i = 0; i < elements.length; i++) {
                    $(elements[i][0]).attr('bablic-' + key, elements[i][1] || true).addClass('bablic-code-markup');
                }
            }
        }
    }

    IS_PROPERTIES_SUPPORTED = true;
    try {
        DOC.createTextNode('stam')['a'] = 0;
    }
    catch (e) {
        IS_PROPERTIES_SUPPORTED = false;
    }

    readNodeAttr = !IS_PROPERTIES_SUPPORTED ? function (node, key, element) {
        if (node.nodeType == 1 || node.nodeType == 9)
            return node[key];
        element = element || node.parentNode || node.ownerElement;
        var node_key = node.nodeName;
        if (node_key == '#text') {
            var index = 0;
            while (node.previousSiblin) {
                node = node.previousSibling;
                index++;
            }
            node_key = '#text' + index;
        }
        return element[node_key + '_b_' + key];
    } : function (node, key, element) {
        if (node.nodeType == 2)
            return element['ba_' + node.nodeName + '_' + key];
        return node[key];
    };

    setNodeAttr = !IS_PROPERTIES_SUPPORTED ? function (node, key, value, element) {
        if (node.nodeType == 1 || node.nodeType == 9) {
            node[key] = value;
            return;
        }
        element = element || node.parentNode || node.ownerElement;
        var node_key = node.nodeName;
        if (node_key == '#text') {
            var index = 0;
            while (node.previousSiblin) {
                node = node.previousSibling;
                index++;
            }
            node_key = '#text' + index;
        }
        element[node_key + '_b_' + key] = value;
    } : function (node, key, value, element) {
        if (node.nodeType == 2)
            return element['ba_' + node.nodeName + '_' + key] = value;
        node[key] = value;
    };
    setNodeAttrIf = IS_PROPERTIES_SUPPORTED ? setNodeAttr : function () {
    };
    readNodeAttrIf = IS_PROPERTIES_SUPPORTED ? readNodeAttr : function () {
    };



    /**
     * Read bablic markup from node element
     * @param node
     * @return {*}
     */
    function readMarkup(node) {
        // use cache markup if available
        var markup =  {};//readNodeAttr(node, 'bablicMarkup');
        //if (markup)
        //    return markup;
        //else
        //    markup = {};
        if (node.attributes) {
            $.each(node.attributes, function (index, attr) {

                var match = bablic_generic_markup_regex.exec(attr.nodeName);
                if (match)
                    markup[match[1]] = attr.value;
                // support translate="no" tags
                if (attr.nodeName === "translate") {
                    if (attr.value === "no")
                        markup['exclude'] = true;
                    else if (attr.value === "yes")
                        markup["include"] = true;
                }
            });
        }

        if ('generated-text' in markup || 'generated-button' in markup){
            markup['exclude'] = true;
        }

//        setNodeAttr(node, 'bablicMarkup', markup);
        return markup;
    }

    var ATTR_REGEX = /(\w+)(?:=["']?([^"']*)["']?)?/g;

    function readMarkupFromString(str) {
        var attrs = {};
        var m;
        while (m = ATTR_REGEX.exec(str)) {
            attrs[m[1]] = m[2];
        }
        return attrs;
    };
    var noTraverseTags = {
        TEXTAREA: 1,
        SVG: 1,
        IFRAME: 1,
    };
    /**
     * walk upwards and collect markup
     * @param childNode
     * node to walk upwards from
     * @param has_include
     * in explicit include mode
     * @return {Object}
     * markup
     */
    function readMarkupFromParents(childNode, has_include, forceCheckAllElements) {
        if (!childNode.parentNode)
            return {};
        // use cache parent markup, if exists
        if (childNode.parentNode.bablicTotalMarkup)
            return childNode.parentNode.bablicTotalMarkup;
        var all_markup = {exclude: has_include};
        var parents = $(childNode).parents();
        for (var i = 0; i < parents.length; i++) {
            var node = parents[parents.length - 1 - i];
            if (!forceCheckAllElements &&
                (node.tagName in noTraverseTags || (node.getAttribute && node.getAttribute('contenteditable') == 'true')))
                return null;
            var markup = readMarkup(node);
            for(var key in markup){
                var value = markup[key];
                if (key == 'exclude')
                    value = true;
                else if (key == 'include') {
                    key = 'exclude';
                    value = false;
                }
                all_markup[key] = value;
            }
        }

        childNode.parentNode.bablicTotalMarkup = all_markup;
        return all_markup;
    }

    function getIndex(arr,item){
        for(var i=0; i<arr.length; i++) {
            if (arr[i] === item)
                return i;
        }
        return -1;
    }

    function readPathIdFromParents(childNode){
        var stack = [];
        var node = childNode;
        while(node.parentElement){
            var thisIndex = getIndex(node.parentNode.childNodes,node);
            stack.unshift(thisIndex);
            node = node.parentElement;
        }
        return stack;
    }

    var COMMENT_REGEX = /^\s*(\/?)bablic((?:.|\n)*)/;


    isElementExcluded = function (element) {
        // get a child of a target element
        var childElement = element.firstChild;
        // if no child element, create a text node
        var removeChild = false;
        if (!childElement) {
            removeChild = true;
            childElement = DOC.createTextNode('');
            element.appendChild(childElement);
        }
        // check if parent element of child element is excluded
        var markup = readMarkupFromParents(childElement, false, true);
        // remove the child element if it was created
        if (removeChild) {
            element.removeChild(childElement);
        }
        // return if markup of element contains the exclude as true
        return markup.exclude;
        // General markup example: <div bablic-something="1"></div>
        // DIV markup: {something: "1"}
        // Exclude/Include markup example:
        // <div bablic-exclude> Something <span bablic-include></span></div>
        // SPAN markup: {exclude: false}
    }

// - Traverses the dom (children first - parents later)
// - Qaulifing using engines
// - replacing contents
// - collecting new content
    domTraverse = function (root, has_include, specificNode) {
        if (!root)
            return;

        triggerEvent('beforeChange');
        var ret = triggerEvent('beforeProcess',[root]);
        if(ret === false)
            return;



        // turn off mutation listen
        bablic.setMutationListen(false);
        var node = root;

        // read markup from ancestors (important if invoked by mutation)
        var parents_markup = readMarkupFromParents(root, has_include);
        if (!parents_markup) {
            bablic.setMutationListen(true);
            return;
        }

        var pathStack = readPathIdFromParents(root);

        applyCodeMarkup();
        // show only bablic-include tags or not
        var include_node = parents_markup.exclude ? null : root;
        var exclude_node = parents_markup.exclude ? root : null;
        var include_stack = [];
        var exclude_stack = [];
        var generic_markup = [];
        var generic_markup_hash = {_hash: true};
        var comment_node = [];
        var segStack = [];
        // build the generic markup stack & hash
        for(var key in parents_markup){
            var value = parents_markup[key];
            if (key != 'exclude') {
                generic_markup.push({key: key, value: value, node: root});
                generic_markup_hash[key] = generic_markup_hash[key] || [];
                generic_markup_hash[key].push(value);
            }
        }

        readCommentNodesFromSiblings(root);

        function readCommentNodesFromSiblings(node) {
            var sib = node;
            // go to oldest sibling
            while (sib.previousSibling) {
                sib = sib.previousSibling;
            }

            // until reach current node (excluded)
            while (sib != node) {
                if (sib.nodeType == 8) {
                    var m = COMMENT_REGEX.exec(sib.nodeValue);
                    if (m) {
                        // is closing comment
                        if (m[1]) {
                            if (comment_node.length)
                                popMarkup(comment_node.pop());
                            else
                                bablic.error('Cant find start comment tag');
                        }
                        else {
                            comment_node.push(sib);
                            // check markup
                            var markup = readMarkupFromString(m[2]);
                            pushMarkup(sib, markup);
                        }
                    }
                }
                sib = sib.nextSibling;
            }
        }

        var seg = null;
        if(!specificNode && typeof(CompositeEngine) != 'undefined' && LDATA.engines[Text.index]) {
            if((root.tagName || "").toUpperCase() == 'HTML')
                CompositeEngine.mapSegments(document.body);
            else
                CompositeEngine.mapSegments(root);
            var trySegNode = root;
            do{
                if(readNodeAttr(trySegNode,'_seg')){
                    seg = trySegNode;
                    if(include_node == root)
                        include_node = trySegNode;
                    if(exclude_node == root)
                        exclude_node = trySegNode;
                    node = root = trySegNode;
                    // setNodeAttr(node, "bablic_last_value", null);
                    break;
                }
                trySegNode = trySegNode.parentNode;
            }
            while(trySegNode && trySegNode.parentNode);
        }

        // Handle markup reading on specific node
        // pushes markup to stack
        function pushMarkup(node, markup) {
            for(var key in markup){
                var value = markup[key];
                if (key == 'exclude') {
                    if (!exclude_node) {
                        exclude_node = node;
                        if (include_node) {
                            include_stack.push(include_node);
                            include_node = null;
                        }
                    }
                }
                else if (key == 'include') {
                    if (!include_node) {
                        include_node = node;
                        if (exclude_node) {
                            exclude_stack.push(exclude_node);
                            exclude_node = null;
                        }
                    }
                }
                else {
                    generic_markup.push({node: node, key: key, value: value});
                    generic_markup_hash[key] = generic_markup_hash[key] || [];
                    generic_markup_hash[key].push(value);
                }
            }
        }

        // Handles markup removal when done with node
        // pops markup from stack
        function popMarkup(node) {
            // if when traversing upwards or sideways encounter a markup nodes -> pop them from the stack
            if (node == include_node) {
                include_node = null;
                exclude_node = exclude_stack.length ? exclude_stack.pop() : null;
            }
            if (node == exclude_node) {
                exclude_node = null;
                include_node = include_stack.length ? include_stack.pop() : null;
            }
            while (generic_markup.length && generic_markup[generic_markup.length - 1].node == node) {
                var popped = generic_markup.pop();
                generic_markup_hash[popped.key].pop();
                if (!generic_markup_hash[popped.key].length)
                    delete generic_markup_hash[popped.key];
            }

        }

        function isEmptyNode(node){
            return node.nodeType === 3 && (!node.nodeValue || EMPTY_REGEX.test(node.nodeValue));
        }

        // handle a node before traversing his children
        // 1) check direction
        // 2) check markup
        function beforeNode(index) {
            if(isEmptyNode(node))
                return true;
            pathStack.push(index);
            if (node.nodeType != 1) {
                // check is comment node
                if (node.nodeType != 8)
                    return;
                var m = COMMENT_REGEX.exec(node.nodeValue);
                if (!m)
                    return;
                // is closing comment
                if (m[1]) {
                    if (comment_node.length)
                        popMarkup(comment_node.pop());
                    else
                        bablic.error('Cant find start comment tag');
                }
                else {
                    comment_node.push(node);
                    // check markup
                    var markup = readMarkupFromString(m[2]);
                    pushMarkup(node, markup);
                }
                return;

            }
            if(HAS_ANGULAR && (bablic.version <= 3.2 || bablic.version == 3.4)){
                if (
                        //(!window.angular ||
                        // (angular.element && (!angular.element(element).scope() || !angular.element(element).scope().$state) &&
                    $(node).hasParent('[ng-controller]:not(.ng-scope),[ng-module]:not(.ng-scope)') ||
                    ($(node).parent().is('[ui-view]') && !$(node).is('.ng-scope'))//))
                //)
                //)
                ) {
                    pathStack.pop();
                    return true;
                }
            }
            if(readNodeAttr(node,'_seg')) {
                if(seg)
                    segStack.push(seg);
                seg = node;
            }

            // 2) check markup
            //  read markup from node
            //var markup = getCodeMarkup(node);
            //jQuery.extend(markup,readMarkup(node));
            var markup = readMarkup(node);
            pushMarkup(node, markup);
        };

        // handle a node after you've handled his children
        function afterNode() {
            var nodeWasTranslated;
            // process the node if on include
            if (include_node) {
                nodeWasTranslated = processNode(node, generic_markup_hash, node.nodeType == 1 ? node : node.parentNode, seg,pathStack,specificNode);
            }
            else {
                node._babEx = true;
                if(LDATA.bidi && node.nodeType == 1)
                    Bidi.exclude(node);
            }
            pathStack.pop();
            if (node.nodeType != 1) {
                if(nodeWasTranslated)
                    lastParentTranslated = node.parentNode;
                return;
            }
            if(nodeWasTranslated || node == lastParentTranslated){
                if(node._babLis) {
                    try {
                        node._babLis();
                    }catch(e){bablic.error(e);}
                }
                lastParentTranslated = node.parentNode;
            }
            if(seg && seg == node)
                seg = segStack.pop();
            // if bidi is needed, do it
            popMarkup(node);
        };

        if(specificNode){
            var index = 0;
            var parent = root.parentElement;
            for(var i=0; i<parent.childNodes.length; i++){
                if(parent.childNodes[i] == root){
                    index = i;
                    break;
                }
            }
            beforeNode(index);
            afterNode();
        }
        else {
            var lastParentTranslated = null;
            var currentIndex = 0;
            while (node != null) {
                var skip = beforeNode(currentIndex);
                // 1) traverse child if exists
                if (!skip && ((node.shadowRoot && node.shadowRoot.hasChildNodes()) || node.hasChildNodes()) && !(node.tagName in noTraverseTags) && !(node.getAttribute && node.getAttribute('contenteditable') == 'true') && !('phrase' in generic_markup_hash) && !('exclude' in generic_markup_hash)) {
                    if (node.shadowRoot && node.shadowRoot.hasChildNodes()){
                        node = node.shadowRoot.firstChild;
                    }else {
                        node = node.firstChild;
                    }
                    currentIndex = 0;
                }
                else {
                    // 2) go to sibling, if exists
                    if (node.nextSibling && node != root) {
                        skip || afterNode();
                        skip || currentIndex++;
                        node = node.nextSibling;
                    }
                    else {
                        // 3) go upwards until you find uncles or until the top
                        while (node.nextSibling == null && node != root) {
                            skip || afterNode();
                            skip = false;

                            // if node has a host, its a shadow root
                            if (node.host && node.host instanceof Node && node.host !== node){
                                if (node.host.hasChildNodes()) {
                                    node = node.host.firstChild;
                                }else {
                                    node = node.host;
                                }
                            }else {
                                node = node.parentNode;
                            }
                            currentIndex = pathStack[pathStack.length - 1] || 0;
                        }
                        afterNode();
                        // if reached the top go out
                        if (node == root)
                            break;
                        // else go to sibling
                        node = node.nextSibling;
                        currentIndex++;
                    }
                }
            }
        }
        // turn mutation listen on
        bablic.setMutationListen(true);
    };

    var stamDiv = $('<div></div>');
    function htmlToText(html){
        if(!html || html.indexOf('&') == -1)
            return html;
        return stamDiv.text(html).html();
    }
    function mergeContentNodesThrottled(report){
        if(!allLists.length)
            return;
        var HAS_OMG = report && WIN.omg && !!omg.initContent2;
        // filter translated nodes mistaken as original ones
        var oldContentByHash = {};
        // flip content hash
        for (var old_key in LDATA.content) {
            if(LDATA.content[old_key] && LDATA.content[old_key].toLowerCase)
                oldContentByHash[LDATA.content[old_key].toLowerCase()] = old_key;
        }
        if (bablic.preview) {
            for (var old_key in PREVIOUSLY_USED_CONTENT) {
                if(PREVIOUSLY_USED_CONTENT[old_key] && PREVIOUSLY_USED_CONTENT[old_key].toLowerCase)
                    oldContentByHash[PREVIOUSLY_USED_CONTENT[old_key].toLowerCase()] = old_key;
            }
        }
        // gather all new content nodes
        var newContentNodes = [];
        for(var i=0; i<allLists.length; i++){
            newContentNodes = newContentNodes.concat(allLists[i]);
        }
        allLists = [];
        // filter mistaken ones
        var toRecycle = [];
        newContentNodes = $.grep(newContentNodes,function (c) {
            if (!c.content)
                return true;
            var text = htmlToText(c.content.toLowerCase());
            if (text in oldContentByHash && oldContentByHash[text] != c.hash) {
                c.hash = oldContentByHash[text];
                toRecycle.push(c);
                return false;
            }
            return true;
        });
        // merge old nodes, that are still in DOC
        // clean hanging nodes
        var removedContentsByHash = {}, remainingContentByHash = {};
        savedContentNodes.forEach(function (c) {
            var isHanging = !c.node._br && !DOC.contains(c.element);
            var unique = c.hash + '_' + c.node.nodeType;
            if (isHanging) {
                removedContentsByHash[unique] = removedContentsByHash[unique] || [];
                removedContentsByHash[unique].push(c);
                return;
            }
            remainingContentByHash[unique] = c;
            newContentNodes.push(c);
        });
        // try to recycle hanging nodes
        for (var i=0; i<toRecycle.length; i++) {
            var hash = toRecycle[i].hash;
            var node = toRecycle[i].node;
            var unique = hash + '_' + node.nodeType;
            var element = toRecycle[i].element;
            // check if there are removed nodes we can use to link this node to
            var existingContentNodes = removedContentsByHash[unique];
            var existingContentNode;
            if(!existingContentNodes || !existingContentNodes.length) {
                // if there are no removed nodes, try to clone an existing node
                var remainingContentNode = remainingContentByHash[unique];
                if(remainingContentNode)
                    existingContentNode = $.extend({},remainingContentNode);
                else {
                    // there are no removed nodes, and now existing nodes.
                    // try looking for JS issues
                    var jsNode = jsNodes[hash];
                    if(!jsNode)
                        continue;
                    existingContentNode = $.extend({}, jsNode);
                }
            }
            else {
                existingContentNode = existingContentNodes.pop();
            }
            existingContentNode.node = node;
            existingContentNode.element = element;
            // return to saved content nodes
            newContentNodes.push(existingContentNode);

        }

        if (HAS_OMG) {
            var removes = omg.initContent2(newContentNodes);
            if(removes) {
                removes.forEach(function (remove) {
                    newContentNodes.splice(newContentNodes.indexOf(remove), 1);
                });
            }
        }

        savedContentNodes = newContentNodes;
    }


    flushMergedNodes = function(){
        if(!mergeContentNodesTimeout)
            return;
        clearTimeout(mergeContentNodesTimeout);
        mergeContentNodesTimeout = null;
        mergeContentNodesThrottled(true);
    };
    var mergeContentNodesTimeout, mergeContentNodesStart, allLists = [];
    mergeContentNodes = function (oldContentNodes) {
        if (!savedContentNodes.length) {
            savedContentNodes = oldContentNodes;
            return;
        }
        var newContentNodes = savedContentNodes;
        savedContentNodes = oldContentNodes;
        allLists.push(newContentNodes);
        if(mergeContentNodesTimeout){
            if(Date.now() - mergeContentNodesStart > 2000)
                return;

            clearTimeout(mergeContentNodesTimeout);
        }
        else
            mergeContentNodesStart = Date.now();

        mergeContentNodesTimeout = setTimeout(function(){
            mergeContentNodesTimeout = null;
            mergeContentNodesThrottled(true);
        },300);
    }

    bablic._pull = function () {
        mergeContentNodesThrottled();
        return savedContentNodes;
    };

    var EMPTY_TAGS = {'SCRIPT':1,'STYLE':1,'LINK':1};

    getNodeValue = function (node, isBlock) {
        if(node.nodeType == 1){
            if(node.tagName in EMPTY_TAGS)
                return '';
            if(isBlock || node.attributes['bablic-block'] || node._babCe)
                return node.textContent;
            return $.map(node.childNodes, function (node) {
                return node.nodeType == 3 ? node.nodeValue : null;
            }).join(' ');
        }
        return node.nodeType == 2 ? node.value : node.nodeValue;
    };

    var CHAR_FROM_INDEX = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    function overrideGetterSetter(object, property, getter, setter) {
        var ownObjectProto = Object.getPrototypeOf(object);
        // exit if bad property
        if (!object[property]) {
            return;
        }

        while (!Object.getOwnPropertyDescriptor(ownObjectProto, property)) {
            ownObjectProto = Object.getPrototypeOf(ownObjectProto);
        }

        var ownProperty = Object.getOwnPropertyDescriptor(ownObjectProto, property);
        var newDesc = {};
        if(getter) {
            newDesc.get = function() {
                return getter.call(this, ownProperty.get);
            };
        }
        if(setter) {
            newDesc.set = function(val) {
                setter.call(this, val, ownProperty.set);
            };
        }
        Object.defineProperty(object, property, newDesc);
    }

    overrideHTMLAccess = function overrideHTMLAccess(element, htmlGetter) {
        if(element._babOv)
            element._babOv = true;
        overrideGetterSetter(element, "innerHTML", htmlGetter, function(val, setter) {
            setter.call(this, val);
        });
    };


    function pathToStr(stack){
        if(!stack)
            return '';
        var mapped = new Array(stack.length);
        for(var i=0; i<stack.length; i++){
            mapped[i] = CHAR_FROM_INDEX[stack[i]];
        }
        return mapped.join('.');
    }

    /**
     * Attributes to check for
     * @type {Object}
     */
    var LISTEN_ATTRIBUTES = {value: '', src: '',srcset:'', placeholder: '', alt: '', title: '',
        content: '', href: '', 'data-before': '', 'data-after': '', label: '', 'aria-label': 1};

    function handlerWrapper(element,func){
        return function() {
            try {
                func.apply(element);
            }
            catch(e){console.error(e.stack);}
        };
    }

    translateAttr = function(attr, val){
        if(!attr)
            return;
        attr = attr.toLowerCase();
        if(val !== false)
            LISTEN_ATTRIBUTES[attr] = '';
        else
            delete LISTEN_ATTRIBUTES[val];
        Text.addAttr(attr, val);
    };

    function getSelectorListener(element,event){
        if(element._babE && element._babE[event])
            return handlerWrapper(element,element._babE[event]);
        if(element.nodeType != 1) {
            if(element.parentElement)
                return getSelectorListener(element.parentElement, event);
            return;
        }
        if(!element.matches)
            return;
        if(!bablic._sels || !bablic._sels[event])
            return;
        var handlers = bablic._sels[event];
        for(var i=0; i<handlers.length;i++){
            if(element.matches(handlers[i][0]))
                return handlerWrapper(element,handlers[i][1]);
        }
    }
    /***
     * Process a node with a specific engine.
     * Qualify the node using the enging
     * If node is qualified, check if translation exists
     * If so , replace using engine
     * If not, add to new content list
     *
     * Anyway, is on OMG mode add to list
     * @param node
     * @param element
     * @param markup
     * @param engine_key
     */
    processNodeWithEngine = function (node, element, markup, engine_key, seg,pathStack, dontRecord) {
        // Qualify using engine
        var pre = getSelectorListener(node,'pre' + engine_key);
        var wrapUp = getSelectorListener(node,'post' + engine_key);
        if(pre)
            pre();
        var content_items = Engines[engine_key].qualifier.call(Engines[engine_key], node, targetLocale, originalLocale, markup, element,seg);
        if (!content_items)
            return wrapUp && wrapUp();
        if (markup["exclude-unless"]) {
            content_items = content_items.filter(function(item) { return item.content === markup["exclude-unless"]; });
        }
        var not_translated = [];
        var needsTranslate = false;
        var single_object = !$.isArray(content_items);
        if (single_object)
            content_items = [content_items];
        else if (!content_items.length)
            return wrapUp && wrapUp();
        var is_translated = false;

        var markupTags = node.nodeType != 2 && bablic.preview && markup.tags && $.grep(markup.tags.trim().toLowerCase().split(/\s*,\s*/),function(tag){return tag;});


        // find translations
        var translations = $.map(content_items, function (content_item) {
            //if (!content_item) return;
            if (!content_item.id) {
                is_translated = true;
                return content_item.content;
            }
            if ('translated' in markup) {
                return content_item.content;
            }

            //setNodeAttr(node, 'hash', content_item.id, element);
            var content_key = engine_key + '_' + content_item.id;
            if(bablic.preview){
                var allTags = (markupTags || []).concat(content_item.tags || []);
                content_item.tags = allTags;
                var newTags = false;
                allTags.forEach(function(t){
                    if(!TAGS[content_key] || !TAGS[content_key][t]) {
                        newTags = true;
                        TAGS[content_key] = TAGS[content_key] || {};
                        TAGS[content_key][t] = 1;
                    }
                });
                if(newTags && content_item.a)
                    delete LDATA.content[content_key];
                if(content_item.a && content_item.key && !BY_KEYS[content_item.key])
                    delete LDATA.content[content_key];
            }
            if (!(content_key in LDATA.content)) {
                var foundBC = false;
                if(content_item.bc){
                    for(var bcIndex=0; bcIndex<content_item.bc.length; bcIndex++){
                        if((engine_key + '_' + content_item.bc[bcIndex]) in LDATA.content){
                            content_key = engine_key + '_' + content_item.bc[bcIndex];
                            foundBC = true;
                            content_item.bcHash = content_item.bc[bcIndex];
                            break;
                        }
                    }
                }
                if(!foundBC) {
                    not_translated.push(content_item);
                    if(content_item.wrapped)
                        is_translated = true;
                    return content_item.content;
                }
            }
            var t = LDATA.content[content_key];
            if (t != '__empty__' && t != content_item.content) {
                usage_report[content_key] = (usage_report[content_key] || 0) + 1;
                is_translated = true;
                return t;
            }
            return content_item.content;
        });
        var completeOriginal;
        if (LDATA.edit || SUPPORT_AJAX_NAVIGATE && engine_key == '1')
            completeOriginal = node.nodeType == 1 ? $(node).html() : (node.nodeType == 2 ? node.value : node.nodeValue);
        var hasDates = !is_translated && $.grep(content_items, function (contentItem) {
                var format =  contentItem.q || contentItem.d || contentItem.t;
                if (!format)
                    return false;
                if (!contentItem.vars)
                    return false;
                return format[0] != contentItem.vars[0];
            }).length;
        // Replace translation
        if ((is_translated || hasDates || content_items[0].i18n) && !element._babIg) {
            Engines[engine_key].replacer.call(Engines[engine_key], node, single_object ? translations[0] : translations, single_object ? content_items[0] : content_items, targetLocale, originalLocale, markup, element,seg);
            if (node.nodeType == 2)
                attributeObserver(element, node);

        }
        if(wrapUp)
            wrapUp();
        var path;
        // Detect new untranslated content
        if (!dontRecord && not_translated.length && (!readNodeAttr(node, 'bablic_replaced' + engine_key, element) || getNodeValue(node) !== readNodeAttr(node, 'bablic_replaced_value' +  + engine_key, element))) {
            $.each(not_translated, function (i, content_item) {
                if(!LDATA.edit && !content_item.a)
                    return;
                // if not add it to new_content
                new_content[engine_key] = new_content[engine_key] || {};
                path = path || pathToStr(pathStack);
                var new_content_item = new_content[engine_key][content_item.id] || {
                        content: content_item.content,
                        elements: [],
                        nodes: [],
                        markup: {},
                        key: content_item.key,
                        i: newContentCounter++,
                        a: false,
                        h: content_item.h,
                        path: path,
                        tags:{},
                        v: content_item.vars,
                    };
                if(bablic.preview) {
                    var tags = content_item.tags || [];
                    $.each(tags, function (i, tag) {
                        new_content_item.tags[tag] = 1;
                    });


                    if ("force" in markup){
                        new_content_item.tags["force"] = 1;
                    }
                }

                if (!content_item.h)
                    delete new_content_item.h;
                if(content_item.bc)
                    new_content_item.bc = content_item.bc;
                new_content_item.a = new_content_item.a || content_item.a;
                new_content_item.nodes.push(node);
                new_content_item.elements.push(element);
                new_content[engine_key][content_item.id] = new_content_item;
            });
            needsTranslate = true;
        }


        // If in OMG mode, add to list
        if ((LDATA.edit || (SUPPORT_AJAX_NAVIGATE && LDATA.ajaxWidget )) && (!readNodeAttr(node, 'bablic_replaced' + engine_key, element) ||
            getNodeValue(node) !== readNodeAttr(node, 'bablic_replaced_value', element))) {
            if (node.nodeType == 2) {
                var elm = node.parentNode || element;
                elm.bablic_attrs = elm.bablic_attrs || [];
                elm.bablic_attrs.push(node);
            }
            $.each(content_items, function (contentItemIndex, content_item) {
                if(!LDATA.edit && !is_translated && !hasDates && !content_item.a)
                    return;
                if (engine_key == '1' && node.nodeType == 1) {
                    content_item.oVal = Engines[engine_key].oVal;
                    content_item.tree = Engines[engine_key].tree;
                }
                if(element && element._fake) {
                    jsNodes[engine_key + '_' + (content_item.bcHash || content_item.id || '')] = {
                        hash: engine_key + '_' + (content_item.bcHash || content_item.id || ''),
                        content: content_item.content,
                        original: markup.translated || content_item.content,
                        vars: content_item.vars,
                        tags:content_item.tags,
                        d: content_item.d,
                        t: content_item.t,
                        c: content_item.c,
                        h: content_item.h,
                        completeOriginal: completeOriginal,
                        translation: translations[contentItemIndex],
                        restore: function (node, element) {
                            if(!is_translated && !hasDates)
                                return;
                            bablic.setMutationListen(false);
                            if (Engines[engine_key].restore) {
                                pre && pre();
                                Engines[engine_key].restore(this, node, element, content_items, translations, markup);
                                wrapUp && wrapUp();
                            }
                            setNodeAttr(node, 'bablic_last_value', getNodeValue(node), element);
                            bablic.setMutationListen(true);
                        },
                        replace: function (node, element, translation, previousLocale) {
                            bablic.setMutationListen(false);
                            is_translated = true;
                            this.restore(node, element);
                            translations[contentItemIndex] = translation;
                            pre && pre();
                            Engines[engine_key].replacer.call(Engines[engine_key], node, single_object ? translations[0] : translations, single_object ? content_items[0] : content_items, targetLocale, originalLocale, markup, element, null, previousLocale);
                            wrapUp && wrapUp();
                            setNodeAttr(node, 'bablic_last_value', getNodeValue(node), element);
                            bablic.setMutationListen(true);
                        },
                        engine: Engines[engine_key]
                    };
                    return;
                }
                path = path || pathToStr(pathStack);
                savedContentNodes.push({
                    node: node,
                    composite:content_item.tree,
                    content:content_item.content,
                    oVal: content_item.oVal,
                    isAttr: node.nodeType == 2,
                    element: node.nodeType == 1 ? node : node.parentNode || element,
                    hash: engine_key + '_' + (content_item.bcHash || content_item.id || ''),
                    original: markup.translated || content_item.content,
                    vars: content_item.vars,
                    tags: content_item.tags,
                    path: path,
                    a: content_item.a,
                    d: content_item.d,
                    t: content_item.t,
                    c: content_item.c,
                    h: content_item.h,
                    fi: content_item.fi,
                    completeOriginal: completeOriginal,
                    translation: translations[contentItemIndex],
                    restore: function (node, element) {
                        if(!is_translated && !hasDates)
                            return;
                        bablic.setMutationListen(false);
                        if (Engines[engine_key].restore) {
                            pre && pre();
                            Engines[engine_key].restore(this, node, element, content_items, translations, markup);
                            wrapUp && wrapUp();
                        }
                        setNodeAttr(node, 'bablic_last_value', getNodeValue(node), element);
                        bablic.setMutationListen(true);
                    },
                    replace: function (node, element, translation, previousLocale) {
                        bablic.setMutationListen(false);
                        is_translated = true;
                        this.restore(node, element);
                        translations[contentItemIndex] = translation;
                        pre && pre();
                        Engines[engine_key].replacer.call(Engines[engine_key], node, single_object ? translations[0] : translations, single_object ? content_items[0] : content_items, targetLocale, originalLocale, markup, element, null, previousLocale);
                        wrapUp && wrapUp();
                        setNodeAttr(node, 'bablic_last_value', getNodeValue(node), element);
                        bablic.setMutationListen(true);
                    },
                    engine: Engines[engine_key]
                });
            });
        }
        if (not_translated.length == 0) {
            setNodeAttr(node, 'bablic_replaced' + engine_key, true, element);
            setNodeAttr(node, 'bablic_replaced_value', getNodeValue(node), element);
        }
        return is_translated;
    };

    var GUI_MARKUPS = {include: true, exclude: true, bidi: true, phrase: true,unique:true,id:true};

    function cleanComments(str) {
        return (str||'').replace(/<!\-\-.*\-\->/g, '');
    }
    /**
     * Process a node with all engines:
     * Check if process is needed
     * Prepare markup object
     * Process with all engines
     * Set node processed
     * Process attributes

     * @param node
     * @param markup_hash
     * @param element
     */
    function processNode(node, markup_hash, element,seg,pathStack,force) {
        if(node._babSt)
            delete node._babSt;
        //    * Check if process is needed
        if(HAS_ANGULAR && ((node.nodeValue && node.nodeValue.indexOf('{{') > -1) || (seg == node && cleanComments(node.innerHTML).indexOf('{{') > -1)))
            return;

        var nodeWasTranslated = false;

        if (force || _forceTraverse || readNodeAttr(node, 'bablic_last_value', element) !== getNodeValue(node, seg === node)) {

            // * Prepare markup object
            var markup = markup_hash || {};
            if (markup_hash && markup_hash._hash) {
                markup = {};
                for(var key in markup_hash){
                    var value = markup_hash[key];
                    if (value && value.length)
                        markup[key] = value[value.length - 1];
                }
            }

            // * Process with all engines
            for (var key in LDATA.engines) {
                var ret = processNodeWithEngine(node, element, markup, key, seg,pathStack);
                nodeWasTranslated = nodeWasTranslated || ret;
            }

            // * Set node processed
            setNodeAttr(node, 'bablic_last_value', getNodeValue(node, seg === node), element);
        }
        // * Process attributes
        if (node.nodeType == 1 && node.attributes) {
            if(pathStack)
                pathStack.push(0);
            for (var i = 0; i < node.attributes.length; i++) {
                var shouldCheckAttribute = (node.attributes[i].nodeName || '').toLowerCase() in LISTEN_ATTRIBUTES;
                if (!shouldCheckAttribute && HasTextMarkup) {
                    shouldCheckAttribute = bablic.integrateI18n.qualify(node.attributes[i].value);
                }
                if (shouldCheckAttribute) {
                    if(pathStack)
                        pathStack[pathStack.length-1] = i;
                    var ret = processNode(node.attributes[i], markup, node,null,pathStack,force);
                    nodeWasTranslated = nodeWasTranslated || ret;
                }
            }
            if(pathStack)
                pathStack.pop();
        }
        return nodeWasTranslated;
    }


// finds domNode location
    node_to_location = function (node, element, id) {
        if (!element || element.nodeType != 1)
            return {};
        element.setAttribute('bablic-content-id',id);
    };


    addOMGScript = function () {
        if (WIN.omg || bablic.previewMode)
            return;
        bablic.setMutationListen(false);

        var s = DOC.getElementsByTagName('SCRIPT')[0];

        if (LDATA.edit) {
            var scriptTag = DOC.createElement('SCRIPT');
            var path = '/js/omg3.min.js';
            //if(bablic.version > 3.1)
            //    path = '/js/omg' + bablic.version + '.min.js';
            scriptTag.src = EDITOR_PATH + path;
            //scriptTag.src = '//dev.bablic.com/js/omg3.min.js';
            s.parentNode.insertBefore(scriptTag, s);

            var styleTag = DOC.createElement('LINK');
            styleTag.href = EDITOR_PATH + '/css/omg3.css';
            styleTag.rel = "stylesheet";
            styleTag.type = "text/css";
            styleTag.className = 'bablicOMGStyle';
            styleTag.setAttribute('bablic-exclude', 'true');

            var s = DOC.getElementsByTagName('HEAD')[0];
            s.appendChild(styleTag);

        }
        bablic.setMutationListen(true);


    };


    var newContentCounter = 0;
    /**
     * Trigger event on DOM, attached to DOC
     */
    triggerEvent = function (eventName, args) {
        var event;
        if(WIN.CustomEvent) {
            var cleanArgs = [];
            try {
                if(args)
                    cleanArgs = JSON.parse(JSON.stringify(args));
            }
            catch(e){}
            if(typeof(CustomEvent) === 'function') {
                event = new CustomEvent('bablic' + eventName, {detail: cleanArgs});
            }
            else{
                event = document.createEvent("CustomEvent");
                event.initCustomEvent('bablic' + eventName, false, false, cleanArgs);
            }
        }
        else if (DOC.createEvent) {
            event = DOC.createEvent("HTMLEvents");
            event.initEvent('bablic' + eventName, true, true);
        } else {
            event = DOC.createEventObject();
            event.eventType = 'bablic' + eventName;
        }

        if (DOC.createEvent)
            DOC.dispatchEvent(event);
        else {
            try {
                DOC.fireEvent("on" + event.eventType, event);
            }
            catch (ex) {
                //bablic.log('cant fire event ' + event.eventType, ex);
            }
        }
        return Mutation.emit(eventName, args);
    };


// End Bablic Help Procedures


})(bablic);
;
var CompositeEngine = (function () {
    var CHECK_FLOAT = /left|right/;
    var NODE_WITH_TEXT = /[^-\s]/;
    var DISPLAY_IN_FLOAT = null;
    var PRIORITY_TAGS = {
        B: 5,
        STRONG: 5,
        U: 6,
        A: 10,
        IMG: 11,
        BUTTON: 12
    };
    var DEFAULT_PRIORITY = 0;
    var ORDER_AGNOSTIC_TAGS = {
        STRONG: 1,
        B: 1,
        U: 1,
        H1: 1,
        H2: 1,
        H3: 1,
        H4: 1,
        H5: 1,
        H6: 1,
        H7: 1
    };

    var TextNode = function (text) {
        this.text = text;
    };
    TextNode.prototype.isEmpty = function () {
        return !NODE_WITH_TEXT.test(this.text);
    };
    TextNode.prototype.toString = function () {
        return this.text;
    };
    TextNode.prototype.getType = function () {
        return '';
    };

    var BR = function () {
    };
    BR.prototype.toString = function () {
        return '<br>';
    };
    BR.prototype.getType = function () {
        return 'BR';
    };
    BR.prototype.isEmpty = function () {
        return true;
    }

    var COMMENT = function (text) {
        this.text = text;
    };
    COMMENT.prototype.getType = function () {
        return 'COMMENT';
    };
    COMMENT.prototype.setIndex = function (index) {
        this.i = index;
    };
    COMMENT.prototype.isEmpty = function () {
        return true;
    }

    COMMENT.prototype.toString = function () {
        return '<!-- comment' + (this.i || '') + ' -->';
    };

    var EXCLUDED_TAGS = {"SCRIPT": 1, "SVG": 1, "STYLE": 1};
    var Tree = function (element, parent) {
        this.element = element;
        this.children = [];
        this.block = element.hasAttribute('bablic-block') || element.hasAttribute('data-bablic-block');
        if (element.hasAttribute('bablic-exclude') && element.getAttribute('bablic-exclude') !== 'false') {
            this.excluded = true;
            this.var = true;
        }
        else if (element.hasAttribute('data-bablic-exclude') && element.getAttribute('data-bablic-exclude') !== 'false') {
            this.excluded = true;
            this.var = true;
        }
        else if (element.tagName in EXCLUDED_TAGS)
            this.excluded = true;
        else if (parent && this.block)
            this.excludedChild = true;
        if (bablic.mobile && isSafari && (element.tagName || "").toUpperCase() == "A" && /^([0-9+\s]{7,30})$/.test(element.innerHTML.trim())) {
            this.pass = true;
        }
    };
    Tree.prototype.append = function (child) {
        if (this.excluded || this.excludedChild)
            return;
        this.children.push(child);
    };
    Tree.prototype.setIndex = function (index) {
        if (this.pass || this.getType() in ORDER_AGNOSTIC_TAGS)
            return;
        this.i = index;
    };
    Tree.prototype.getType = function () {
        return this.element.tagName;
    };
    var EMPTY_BY_DEFAULT = false;
    Tree.prototype.isEmpty = function () {
        if (this.excludedChild && EMPTY_BY_DEFAULT)
            return true;
        if (!this.children.length)
            return true;
        for (var i = 0; i < this.children.length; i++) {
            var node = this.children[i];
            if (node instanceof BR || node instanceof COMMENT)
                continue;
            if (!node.isEmpty())
                return false;
        }
        return EMPTY_BY_DEFAULT;
    };
    Tree.prototype.getTrimTop = function () {
        if (this.excluded)
            return 0;
        var trimTop = 0;
        for (var i = 0; i < this.children.length; i++) {
            if (!this.children[i].isEmpty() || this.children[i].block ||
                this.children[i].var) {
                trimTop = i;
                break;
            }
        }
        return trimTop;
    };
    Tree.prototype.getTrimBottom = function (trimTop) {
        var trimBottom = trimTop;
        if (this.excluded)
            return trimBottom;
        for (var i = this.children.length - 1; i > trimTop; i--) {
            if (!this.children[i].isEmpty() || this.children[i].block ||
                this.children[i].var) {
                trimBottom = i;
                break;
            }
        }
        return trimBottom;
    };
    /**
     * Count how many elements in tree of each tag (recursively)
     * @param countPerTag
     * Will increment result on this dict
     */
    Tree.prototype.countTags = function (countPerTag) {
        if (this.excluded)
            return;
        if (this.isEmpty())
            return;

        var trimTop = this._tt = this.getTrimTop();
        var trimBottom = this._tb = this.getTrimBottom(trimTop);
        if (trimBottom < trimTop || this.pass)
            return;
        var notEmptyElements = 0, firstChildElement, notEmptyTextNodes = 0;
        var childTags = [];
        for (var i = trimTop; i <= trimBottom; i++) {
            var child = this.children[i];
            if (!child)
                continue;
            if (child instanceof Tree) {
                var tag = child.getType();
                if (!child.pass) {
                    childTags.push(tag);
                }
                child.countTags(countPerTag);
            } else if (child instanceof COMMENT)
                countPerTag['COMMENT'] = (countPerTag['COMMENT'] || 0) + 1;
            if (notEmptyTextNodes || notEmptyElements > 1)
                continue;
            if (child instanceof BR || child instanceof COMMENT)
                continue;
            if (child instanceof TextNode) {
                if (!child.isEmpty())
                    notEmptyTextNodes++;
                continue;
            }
            if (!child.isEmpty()) {
                notEmptyElements++;
                firstChildElement = child;
            }
        }
        this._nee = notEmptyElements, this._fce = firstChildElement, this._net = notEmptyTextNodes;
        if (notEmptyElements <= 1 && notEmptyTextNodes == 0) {
            if (!firstChildElement) {
                this.skip = true;
            } else {
                this.singleChild = firstChildElement;
                if (childTags[0]) {
                    var childTagPriority = PRIORITY_TAGS[childTags[0]] || 0;
                    var myTag = this.getType();
                    var myTagPriority = PRIORITY_TAGS[myTag] || DEFAULT_PRIORITY;
                    if (childTagPriority > myTagPriority) {
                        this.skip = true;
                        countPerTag[childTags[0]] = (countPerTag[childTags[0]] || 0) + 1;
                    } else {
                        this.singleChild.skip = true;
                        countPerTag[myTag] = (countPerTag[myTag] || 0) + 1;
                    }
                }
            }
        } else {
            $.each(childTags, function (i, tag) {
                countPerTag[tag] = (countPerTag[tag] || 0) + 1;
            });
        }

    };
    /**
     * Set the proper index for decendent in the tree
     * @param countPerTag
     * how many elements for each tag
     * @param indexPerTag
     * A dict to save the current index for each tag
     */
    Tree.prototype.setIndexes = function (countPerTag, indexPerTag) {
        if (this.excluded)
            return;
        if (this._nee == 0 && this._net == 0)
            return;
        if (this._tb < this._tt)
            return;
        if (this.singleChild) {
            if (this.skip && !this.singleChild.skip) {
                var tag = this.singleChild.getType();
                if (countPerTag[tag] > 1) {
                    var index = (indexPerTag[tag] = (indexPerTag[tag] || 0) + 1);
                    this.singleChild.setIndex(index);
                }
            }
            return this.singleChild.setIndexes(countPerTag, indexPerTag);
        }
        for (var i = this._tt; i <= this._tb; i++) {
            var child = this.children[i];
            if (child instanceof Tree || child instanceof COMMENT) {
                if (!child.skip && !child.pass) {
                    var tag = child.getType();
                    if (countPerTag[tag] > 1) {
                        var index = (indexPerTag[tag] = (indexPerTag[tag] || 0) + 1);
                        child.setIndex(index);
                    }
                } else if (bablic.version <= 3.6 && bablic.version != 3.5)
                    continue;
                if (child instanceof Tree)
                    child.setIndexes(countPerTag, indexPerTag);
            }
        }
    };

    Tree.prototype.toString = function () {
        if (this.hidden)
            return '';
        var noTags = this.skip || this.pass;
        var type = this.getType().toLowerCase();
        var tag = noTags ? null : type;
        if (tag && this.i)
            tag += this.i;
        if (this.excluded || this.isEmpty())
            return noTags ? '' : '<' + tag + '/>';

        var trimTop = this._tt, trimBottom = this._tb;
        if (trimBottom < trimTop)
            return noTags ? '' : '<' + tag + '/>';


        if (this.singleChild) {
            if (noTags)
                return this.singleChild.toString();
            return '<' + tag + '>' + this.singleChild.toString() + '</' + tag + '>';
        }

        var str = new Array(trimBottom - trimTop + 1);
        for (var i = trimTop; i <= trimBottom; i++) {
            var child = this.children[i];
            str.push(child.toString());
        }
        return noTags ? str.join('') : '<' + tag + '>' + str.join('') + '</' + tag + '>';
    };
    Tree.prototype.collectChildren = function (childByType, childByAlt, ordinal) {
        if (this.excluded)
            return;
        if (this.singleChild) {
            if (this.skip)
                this.singleChild._p = this._p || this;
            if (this.skip && !this.singleChild.skip) {
                var tag = this.singleChild.getType();
                childByAlt[tag] = childByAlt[tag] || [];
                childByAlt[tag].push(this.singleChild);
                if (this.singleChild.i) {
                    tag += this.singleChild.i;
                }
                childByType[tag] = childByType[tag] || [];
                this.singleChild._ordinal = ordinal++;
                childByType[tag].push(this.singleChild);
            }
            return this.singleChild.collectChildren(childByType, childByAlt, ordinal);
        }
        // if empty, no need to do anything
        if (this.isEmpty())
            return;
        var trimTop = this._tt, trimBottom = this._tb;
        if (trimBottom < trimTop)
            return;
        for (var i = trimTop; i <= trimBottom; i++) {
            var child = this.children[i];
            if (child instanceof Tree || child instanceof COMMENT) {
                if (!child.skip) {
                    child._ordinal = ordinal++;
                    var tag = child.getType();
                    childByAlt[tag] = childByAlt[tag] || [];
                    childByAlt[tag].push(child);
                    if (child.i) {
                        tag += child.i;
                    }
                    childByType[tag] = childByType[tag] || [];
                    childByType[tag].push(child);
                }
                if (child instanceof Tree)
                    child.collectChildren(childByType, childByAlt, ordinal);
            }
        }
    };

    Tree.prototype.getChildren = function (tag) {
        var childByType = {};
        this.collectChildren(childByType, {}, 0);
        return (childByType[tag] || []).map(function (child) {
            return child.element;
        }).filter(function (e) {
            return e;
        });
    };

    // Tree.prototype.saveUnused = function (childByType) {
    //     if (!Object.keys(childByType).length)
    //         return;
    //     if (this.excluded)
    //         return;
    //     for (var i = 0; i < this.children.length; i++) {
    //         if (this.children[i] instanceof Tree)
    //             this.children[i].saveUnused(childByType);
    //     }
    //     // keep unused elements
    //     for (var type in childByType) {
    //         var child;
    //         do {
    //             child = childByType[type].shift();
    //             if (child && child.element && this.children.indexOf(child) > -1) {
    //                 var elementToKeep = child._p && child._p != this ? child._p.element : child.element;
    //                 elementToKeep.setAttribute('hidden', '');
    //                 child.hidden = true;
    //                 if (this._ab)
    //                     this.element.insertBefore(this._ab, elementToKeep);
    //                 else
    //                     this.element.appendChild(elementToKeep);
    //             }
    //         }
    //         while (child)
    //     }
    // };

    Tree.prototype.copyFromElement = function (element, childByType, respectTags) {
        if (this.excluded)
            return;
        if (this.singleChild && this.singleChild.skip) {
            return this.singleChild.copyFromElement(element, childByType, respectTags);
        }

        // if empty, no need to do anything
        // if (this.isEmpty())
        //     return;


        var trimTop = this._tt, trimBottom = this._tb;
        if (trimBottom < trimTop)
            return;

        if (!this.element.hasChildNodes())
            this.element.appendChild(DOC.createTextNode(''));
        var firstChildNode = this.element.firstChild, lastChildNode = this.element.lastChild;

        for (var i = 0; i < trimTop; i++) {
            if (!firstChildNode.nextSibling)
                break;
            firstChildNode = firstChildNode.nextSibling;
        }
        for (var i = this.children.length - 1; i > trimBottom; i--) {
            if (!lastChildNode.previousSibling)
                break;
            lastChildNode = lastChildNode.previousSibling;
        }
        var originalElement = this.element;
        var nextChildIndex = trimTop;
        // remove node, unless it's an element, in this case we'll keep it for now
        // var virtuallyRemoveNode = function (toRemove) {
        //     if (toRemove.nodeType !== 1 || toRemove.tagName === "BR")
        //         originalElement.removeChild(toRemove);
        // };
        // add element. If the element was not really removed, use it
        var virtuallyAddElement = function (toAdd) {
            // get which element to insert toAdd before
            var before;
            var ignoreNode = false;
            if (addAfterNode) {
                before = addAfterNode.nextSibling;
            } else {
                before = originalElement.firstChild;
            }

            if (before) {
                // try to use current element instead of adding
                if (toAdd.nodeType === 1) {
                    // if exact element, do nothing
                    if (before !== toAdd) {
                        // if elements are BR, just use original
                        if ((before.tagName || "").toUpperCase() !== "BR" || (toAdd.tagName || "").toUpperCase() !== "BR") {
                            // if elements are not BR, add element
                            if (!toAdd.contains(originalElement)) {
                                originalElement.insertBefore(toAdd, before);
                            } else {
                                ignoreNode = true;
                            }
                        } else {
                            toAdd = before;
                        }
                    }
                } else {
                    // if same node type, use this node
                    if (before.nodeType === toAdd.nodeType) {
                        if (before.nodeValue !== toAdd.nodeValue)
                            setNodeValue(before, toAdd.nodeValue);
                        toAdd = before;
                    } else {
                        if (!toAdd.contains(originalElement)) {
                            originalElement.insertBefore(toAdd, before);
                        } else {
                            ignoreNode = true
                        }
                    }
                }
            } else {
                originalElement.appendChild(toAdd);
            }
            // add next elements after this new element
            if (!ignoreNode) {
                addAfterNode = toAdd;
            }
        };
        var addAfterNode = firstChildNode.previousSibling;
        // remove all children between first and last include first
        // var removeNode = firstChildNode;
        // while (removeNode != lastChildNode) {
        //     var saved = removeNode;
        //     removeNode = removeNode.nextSibling;
        //     virtuallyRemoveNode(saved);
        // }
        // save last position and remove last node also
        var addBeforeNode = lastChildNode.nextSibling;
        // this._ab = addBeforeNode;
//        virtuallyRemoveNode(lastChildNode);
        // walk over all elements in translation
        var node = element.firstChild;
        while (node) {
            if (node.nodeType == 3) {
                virtuallyAddElement(DOC.createTextNode(node.nodeValue));
            } else if (node.nodeType == 8) {
                var comment = (childByType[node.nodeValue || 'COMMENT'] || []).shift();
                comment = comment && comment.text;
                virtuallyAddElement(DOC.createComment(comment || node.nodeValue));
            } else if ((node.tagName || "").toUpperCase() == 'BR') {
                virtuallyAddElement(DOC.createElement("BR"));
            } else {
                // find child to use for translation
                var child;
                if (respectTags) {
                    // search using the children tags
                    var altTag = node.tagName.replace(/\d+$/, '').toUpperCase();
                    var forType = childByType[(node.tagName||"").toUpperCase()];
                    child = forType && forType.shift();
                    if (!child) {
                        forType = childByType[altTag];
                        child = forType && forType.shift();
                    }

                    if (forType && !forType.length)
                        delete childByType[(node.tagName||"").toUpperCase()];
                } else {
                    do {
                        nextChildIndex++;
                    }
                    // just get next child in line of type tree
                    while (this.children[nextChildIndex - 1] && !(this.children[nextChildIndex - 1] instanceof Tree));
                    child = this.children[nextChildIndex - 1];
                }
                // check if we found target child
                if (!child) {
                    // add element ad hoc
                    var toAdd = generateElementFromTranslation(node);
                    node = node.nextSibling;
                    virtuallyAddElement(toAdd);
                    continue;
                }
                // use target child to show translation
                var elementToAdd = child._p && child._p != this && !child._p.element.contains(this.element) ? child._p.element : child.element;
                elementToAdd.removeAttribute('hidden');
                child.hidden = false;
                copyAttributesFromTranslations(elementToAdd, node);
                child.copyFromElement(node, childByType, respectTags);
                virtuallyAddElement(elementToAdd);

            }
            node = node.nextSibling;
        }
        // now we have to hide or remove all the elements we haven't used in the new translation
        addAfterNode = addAfterNode || originalElement.firstChild;
        if (!addAfterNode || addAfterNode == addBeforeNode) {
            return;
        }
        var iterateElement = addAfterNode.nextSibling;
        while(iterateElement && iterateElement != addBeforeNode) {
            var toRemove = iterateElement;
            iterateElement = iterateElement.nextSibling;
            // if node is element, just hide it
            if (toRemove.nodeType === 1 && (toRemove.tagName||"").toUpperCase() !== "BR") {
                toRemove.hidden = true;
                toRemove.setAttribute("hidden", "");
            }
            else {
                // remove the node
                originalElement.removeChild(toRemove);
            }
        }
    };

    function generateElementFromTranslation(element) {
        var altTag = element.tagName.replace(/\d+$/, '').toUpperCase();
        var tagName = altTag == 'H' ? (element.tagName||"").toUpperCase() : altTag;
        var newElement = DOC.createElement(tagName);
        for (var i = 0; i < element.attributes.length; i++) {
            try {
                newElement.setAttribute(element.attributes[i].name, element.attributes[i].value);
            } catch (e) {
            }
        }
        var child = element.firstChild;
        while (child) {
            var nextOne = child.nextSibling;
            if (child.nodeType == 1)
                newElement.appendChild(generateElementFromTranslation(child));
            else
                newElement.appendChild(child);
            child = nextOne;
        }
        return newElement
    }

    var BAD_ATTRIBUTE = /[<'">]|^[\d]/;

    function copyAttributesFromTranslations(originalElement, translatedElement) {
        for (var i = 0; i < translatedElement.attributes.length; i++) {
            if (BAD_ATTRIBUTE.test(translatedElement.attributes[i].name))
                continue;
            originalElement.setAttribute(translatedElement.attributes[i].name, translatedElement.attributes[i].value);
        }
    }

    function getTreeContent(tree) {
        var countPerTag = {};
        tree.skip = true;
        tree.countTags(countPerTag);
        var indexPerTag = {};
        tree.setIndexes(countPerTag, indexPerTag);
        return tree.toString();
    }

    var noTraverseTags = {
        'TEXTAREA': 1,
        'SVG': 1,
        STYLE: 1,
        SCRIPT: 1,
        CODE: 1,
        OBJECT: 1,
        VIDEO: 1,
        AUDIO: 1,
        CANVAS: 1,
        IFRAME: 1
    };

    function traverse(root, beforeHandler, afterHandler) {
        var node = root;
        while (node != null) {
            var skip = beforeHandler && beforeHandler(node);
            // 1) traverse child if exists
            if (!skip && ((node.shadowRoot && node.shadowRoot.hasChildNodes()) || node.hasChildNodes()) && !(node.tagName && node.tagName.toUpperCase() in noTraverseTags)) {
                if (node.shadowRoot && node.shadowRoot.hasChildNodes()){
                    node = node.shadowRoot.firstChild;
                }else {
                    node = node.firstChild;
                }
            } else {
                // 2) go to sibling, if exists
                if (node.nextSibling && node != root) {
                    skip || (afterHandler && afterHandler(node));
                    node = node.nextSibling;
                } else {
                    // 3) go upwards until you find uncles or until the top
                    while (node.nextSibling == null && node != root) {
                        skip || (afterHandler && afterHandler(node));
                        skip = false;
                        // go up

                        // if node has a host, its a shadow root
                        if (node.host && node.host instanceof Node && node.host !== node){
                            if (node.host.hasChildNodes()) {
                                node = node.host.firstChild;
                            }else {
                                node = node.host;
                            }
                        }else {
                            node = node.parentNode;
                        }
                    }
                    skip || (afterHandler && afterHandler(node));
                    // if reached the top go out
                    if (node == root)
                        break;
                    // else go to sibling
                    node = node.nextSibling;
                }
            }
        }
    }

    function isDisplayInFloat() {
        var stamSpan = document.createElement('SPAN');
        stamSpan.setAttribute('bablic-exclude', '');
        stamSpan.style.visibility = 'hidden';
        stamSpan.style.float = 'left';
        document.body.appendChild(stamSpan);
        var display = $(stamSpan).css('display');
        document.body.removeChild(stamSpan);
        return display === 'block';
    }

    var displayByTagName = {};

    function checkIfNoneDisplayIsInline(element) {
        if (!DOC.body)
            return true;
        var tag = element.tagName.toUpperCase();
        if (tag in displayByTagName)
            return displayByTagName[tag];
        var dummy = DOC.createElement(tag);
        DOC.body.appendChild(dummy);
        var isInline = ($(dummy).css('display') || "").indexOf("inline") > -1;
        DOC.body.removeChild(dummy);
        displayByTagName[tag] = isInline;
        return isInline;
    }

    function checkInline(element) {
        if (typeof (element._babDisp) == 'boolean')
            return element._babDisp;
        var jq = $(element);
        var display = jq.css('display');
        var isInline = display.indexOf("inline") > -1;
        if (!isInline && display === "none") {
            isInline = checkIfNoneDisplayIsInline(element);
        }
        if (isInline)
            element._babDisp = DISPLAY_IN_FLOAT || !CHECK_FLOAT.test(jq.css('float'));
        else
            element._babDisp = false;
        return element._babDisp;
    }

    function mapSegments(root) {
        if (DISPLAY_IN_FLOAT === null)
            DISPLAY_IN_FLOAT = isDisplayInFloat();
        if (bablic.version < 3.7 || bablic.version >= 9) {
            noTraverseTags = {'TEXTAREA': 1, 'SVG': 1};
            ORDER_AGNOSTIC_TAGS = {};
            EMPTY_BY_DEFAULT = false;
        } else
            EMPTY_BY_DEFAULT = true;

        if (bablic.version < 3.8 && bablic.version >= 9)
            DEFAULT_PRIORITY = undefined;

        // go upwards until you find
        while (root.parentNode && (root.tagName||"").toUpperCase() != 'BODY' && !readNodeAttr('_seg') && checkInline(root))
            root = root.parentNode;
        // scope params
//        var currentBlock = root, numberOfElements = 0, textNodes = 0, isComposite = false, brNodes = 0;
        var stack = [], current;
        //var node = root.firstChild;
        var currentParentBlocks = [];
        traverse(root, function beforeNode(node) {
            if (node.nodeType != 1)
                return;
            if ((node.tagName || "").toUpperCase() == 'BR')
                return;
            // if markup block
            var hasBlock = node.hasAttribute('bablic-block');
            var blockValue = hasBlock && node.getAttribute('bablic-block');
            if (hasBlock && blockValue !== 'false') {
                setNodeAttr(node, '_seg', true);
                if (current)
                    current.text = true;
                currentParentBlocks.push(node);
                return;
            }
            // if parent is block, ignore this element
            if (currentParentBlocks.length) {
                return;
            }
            // either start a new stack, or add to the stack
            if (((node.tagName || "").toUpperCase() == 'OPTION' || !checkInline(node)) && blockValue !== 'false')
                stack = [];
            else if (!current)
                return;
            current = {text: false, elements: false, composite: false};
            stack.push(current);
        }, function afterNode(node) {
            if (!current)
                return;
            if (currentParentBlocks.length) {
                if (currentParentBlocks[currentParentBlocks.length - 1] === node)
                    currentParentBlocks.pop();
                return;
            }
            if (node.nodeType == 3) {
                // if found text, mark the text on the current state,
                // if already found elements, mark as composite
                if (current.composite)
                    return;
                if (NODE_WITH_TEXT.test(node.nodeValue)) {
                    current.text = true;
                    if (current.elements)
                        current.composite = true;
                }
            } else {
                // ignore comments
                if (node.nodeType != 1)
                    return;
                if ((node.tagName || "").toUpperCase() == 'BR') {
                    // if found text, mark the elements on the current state
                    if (current.text)
                        current.elements = true;
                    return;
                }
                // summarize this state
                var elementState = stack.pop();
                current = stack[stack.length - 1];
                if (!current) {
                    // this is the block element
                    if (elementState.composite) {
                        setNodeAttr(node, '_seg', true);
                    }
                } else {
                    // if composite, parent is also composite
                    if (elementState.composite)
                        current.composite = true;
                    // if we found text on this element
                    else if (elementState.text) {
                        // if there's already text on the parent, composite
                        if (current.text)
                            current.composite = true;
                        else {
                            current.text = true;
                            current.elements = true;
                        }
                    }
                }
            }
        });
    }


    function buildDOMTree(element) {
        var stack = [];
        var tree;
        traverse(element, function beforeNode(node) {
            var currentParent = stack[stack.length - 1];
            if (node.nodeType == 3) {
                var text = new TextNode(node.nodeValue);
                currentParent.append(text);
            } else if (node.nodeType == 8) {
                var comment = new COMMENT(node.nodeValue);
                currentParent.append(comment);
            } else if (node.nodeType == 1) {
                if ((node.tagName || "").toUpperCase() == 'BR') {
                    var br = new BR();
                    currentParent.append(br);
                } else {
                    if (node != element) {
                        var child = new Tree(node, tree);
                        currentParent.append(child);
                        currentParent = child;
                    } else {
                        tree = new Tree(node);
                        currentParent = tree;
                    }
                    stack.push(currentParent);
                }
            }
        }, function afterNode(node) {
            if (node.nodeType != 1 || (node.tagName || "").toUpperCase() == 'BR')
                return;
            stack.pop();
        });
        return tree;
    }

    function replaceDOMTree(tree, translated) {
        var virtualTree = DOC.createElement('div');
        try {
            var t = translated.replace(/<([^>]*?)\/>/g, '<$1></$1>');
            while(true) {
                var regex = /<(?:!--\s*(.*?)\s*--|(\/?)(.*?)(\/?))>/g;
                var match;
                var needAgain = false;
                while (match = regex.exec(t)) {
                    if (match[3] && match[3].indexOf("<") > -1) {
                        t = t.substr(0, match.index) + "&lt;" + t.substr(match.index + 1);
                        needAgain = true;
                        break;
                    }
                }
                if (!needAgain)
                    break;
            }
            virtualTree.innerHTML = t;
        } catch (e) {
            console.error('Bad translation HTML', translated);
            return;
        }
        var childByType = {};
        var childByAlt = {};
        tree.collectChildren(childByType, childByAlt, 0);
        //var collectedVirtualTags = [];
//        var countByTag = {};
        var countByAlt = {};
        var iter = virtualTree.firstElementChild;
        while (iter && iter !== virtualTree) {
            var tag = (iter.tagName ||"").toUpperCase();
            if (tag != 'BR') {
                var alt = tag.replace(/\d+$/, '');
                countByAlt[alt] = (countByAlt[alt] || 0) + 1;
            }
            // if (alt != tag) {
            //     countByTag[tag] = (countByTag[tag] || 0) + 1;
            // }
            //collectedVirtualTags.push(tag);
            if (iter.firstElementChild) {
                iter = iter.firstElementChild;
            } else {//if (iter.nextElementSibling) {
                while (!iter.nextElementSibling && iter != virtualTree) {
                    iter = iter.parentElement;
                }
                if (iter == virtualTree) {
                    break;
                }
                iter = iter.nextElementSibling;
            }
        }
        var respectTags = true;
        for (var key in countByAlt) {
            if (key in ORDER_AGNOSTIC_TAGS)
                continue;
            if (countByAlt[key] !== (childByAlt[key] || []).length) {
                respectTags = false;
                break;
            }
        }
        // TODO, add pairing logic
        // var bestPairingScore = 0;
        // var EXACT_MATCH = 100;
        // var GENERIC_MATCH = 200;
        // var FUNCTIONAL_MATCH = 300;
        // var bestPairs = collectedVirtualTags.map(function(tag, i) {
        //     var altTag = tag.tagName.replace(/\d+$/, '');
        //     return childByType[tag];
        //     scores[GENERIC_MATCH] = childByType[altTag];
        // });
        tree.copyFromElement(virtualTree, childByType, respectTags);
        // tree.saveUnused(childByType);
    }

    return {
        mapSegments: mapSegments,
        buildDOMTree: buildDOMTree,
        replaceDOMTree: replaceDOMTree,
        getTreeContent: getTreeContent
    };
})();




;

(function(bablic) {
    var FORMAT_GROUP_NAMES = {
        hours:1,
        minutes:2,
        pm:3,
        onlyHours:4,
        onlyHoursPM:5,
        numberDateDayOrMonth:6,
        numberDateMonthOrDay:7,
        numberDateYear:8,
        textDateDayBeforeMonth:9,
        textDateDayBeforeMonthSuffix:10,
        textDateMonth:11,
        textDateYear1:12,
        textDateDayAfterMonth:13,
        textDateDayAfterMonthSuffix:14,
        textDateYear2:15,
    };
    var pm = /p/i;
    function escapeChars(format,escapes){
        return format.replace(/_%(.*?)%_/g,function(a0,a1){
            escapes.push(a1);
            return 'ESC';
        });
    }
    function unEscapeChars(text,escapes){
        return text.replace(/ESC/g,function(a0,a1){
            return escapes.shift();
        });
    }

    var dbm = true;
    var _mnth;
    var regex;
    function backwardVariableFormatter(params, evalFunc) {
        var mnth = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        };

        _mnth = {};
        $.each(mnth, function (num, month) {
            _mnth[month.toLowerCase()] = num;
            _mnth[month.toLowerCase().substr(0, 3)] = num;
        });
        if (params.months)
            $.each(params.months, function (index, month) {
                _mnth[month.toLowerCase()] = index + 1;
                _mnth[month.toLowerCase().substr(0, 3)] = index + 1;
            });
        dbm = !params.monthBeforeDay;
        var monthNames = Object.keys(_mnth);


        //                   Time    hours
        //                                      Minutes
        //                                                  AM/PM
        regex = RegExp('\\b(?:([0-2]?\\d):([0-5]\\d)\\s*(am|pm)?|' +
            // only hour        AM/PM
            '(?:([0-2]?\\d)\\s*(am|pm))|' +
            // numberDateDayOrMonth
            //                   numberDateMonthOrDay
            //                                    numberDateYear                                                                                                                                                                                                                Simple number                                                      URL
            '(\\d?\\d)[\\/\\-.](\\d?\\d)[\\/\\-.](\\d\\d(?:\\d\\d))?|' +
            //   textDateDayBeforeMonth
            //             textDateDayBeforeMonthSuffix
            //                                  textDateMonth
            //                                                                               textDateYear1
            //                                                                                                  textDateDayAfterMonth
            //                                                                                                          textDateDayAfterMonthSuffix
            //                                                                                                                                                      textDateYear2
            '(?:(\\d\\d?)(st|nd|rd|th)?\\s+)?(\\b(?:' + monthNames.join('|') + ')\\b)(?:\\s*[,\\s]\\s*(\\d\\d\\d\\d)|\\s+(\\d\\d?)(st|nd|rd|th)?(?:\\s*[,\\s]\\s*(\\d\\d(?:\\d\\d))?)?)?|' +
            //     Number
            '\\d(?:[0-9+\\-.,\\^]*\\d)?(?:e\\+\\d+)?|(-?\\s?\\d{1,3}(?:\\s\\d{3})*(?:\\.\\d+))|' +
            //     URL
            'https?:\\/\\/[^\\s<]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}' + '|' +
            // {{ var name }}
            '\\{\\{(\\s*(?:[^}]+)\\s*)\\}\\}' +
            ')', 'ig');

        this.processText = function (text, formats) {
            var nums = [];
            var dates;
            var times;
            var regexMatch;
            var t = [];
            var lI = 0;
            var i = 0;
            while (regexMatch = regex.exec(text)) {
                nums.push(regexMatch[0]);
                if (formats.timeFormat && (regexMatch[FORMAT_GROUP_NAMES.hours] || regexMatch[FORMAT_GROUP_NAMES.onlyHours])) {
                    // time
                    times = times || {};
                    var hours = Number(regexMatch[FORMAT_GROUP_NAMES.hours] || regexMatch[FORMAT_GROUP_NAMES.onlyHours]);
                    var minutes = Number(regexMatch[FORMAT_GROUP_NAMES.minutes]);
                    if ((regexMatch[FORMAT_GROUP_NAMES.pm] && pm.test(regexMatch[FORMAT_GROUP_NAMES.pm])) ||
                        (regexMatch[FORMAT_GROUP_NAMES.onlyHoursPM] && pm.test(regexMatch[FORMAT_GROUP_NAMES.onlyHoursPM])))
                        hours += 12;
                    var escapes = [];
                    var format = escapeChars(formats.timeFormat, escapes);
                    if (isNaN(minutes))
                        times[i] = format.replace(/[:]?mm?/, '');
                    else
                        times[i] = format.replace('mm', minutes < 10 ? '0' + minutes : minutes).replace(':m', ':' + minutes);
                    if (pm.test(times[i])) {
                        var hasPM = hours > 11;
                        if (hasPM)
                            hours -= 12;
                        times[i] = times[i].replace(/PM?/, hasPM ? "PM" : "AM").replace(/pm?/, hasPM ? "pm" : "am");
                    }
                    times[i] = times[i].replace('hh', hours < 10 ? '0' + hours : hours).replace('h', hours);
                    times[i] = unEscapeChars(times[i], escapes);
                }
                //              if numbered date
                else if (regexMatch[FORMAT_GROUP_NAMES.numberDateDayOrMonth] || regexMatch[FORMAT_GROUP_NAMES.textDateMonth]) {
                    if (regexMatch[FORMAT_GROUP_NAMES.textDateMonth] && regexMatch[FORMAT_GROUP_NAMES.textDateMonth] == regexMatch[0]) {
                        nums.pop();
                        continue;
                    }

                    // date
                    dates = dates || {};
                    var year, month, day, suffix;
                    if (regexMatch[FORMAT_GROUP_NAMES.numberDateDayOrMonth]) {
                        if (dbm) {
                            day = Number(regexMatch[FORMAT_GROUP_NAMES.numberDateDayOrMonth]);
                            month = Number(regexMatch[FORMAT_GROUP_NAMES.numberDateMonthOrDay]);
                        } else {
                            day = Number(regexMatch[FORMAT_GROUP_NAMES.numberDateMonthOrDay]);
                            month = Number(regexMatch[FORMAT_GROUP_NAMES.numberDateDayOrMonth]);
                        }
                        year = Number(regexMatch[FORMAT_GROUP_NAMES.numberDateYear]);
                    } else {
                        month = Number(_mnth[regexMatch[FORMAT_GROUP_NAMES.textDateMonth].toLowerCase()]);
                        day = Number(regexMatch[FORMAT_GROUP_NAMES.textDateDayBeforeMonth] || regexMatch[FORMAT_GROUP_NAMES.textDateDayAfterMonth]);
                        year = Number(regexMatch[FORMAT_GROUP_NAMES.textDateYear1] || regexMatch[FORMAT_GROUP_NAMES.textDateYear2]);
                        // in case day is before month name and year is after
                        if (!year && regexMatch[FORMAT_GROUP_NAMES.textDateDayAfterMonth] && regexMatch[FORMAT_GROUP_NAMES.textDateDayBeforeMonth]) {
                            day = Number(regexMatch[FORMAT_GROUP_NAMES.textDateDayBeforeMonth]);
                            year = Number(regexMatch[FORMAT_GROUP_NAMES.textDateDayAfterMonth]);
                        }
                        suffix = regexMatch[FORMAT_GROUP_NAMES.textDateDayBeforeMonthSuffix] || regexMatch[FORMAT_GROUP_NAMES.textDateDayAfterMonthSuffix];
                    }
                    if (year < 100)
                        year = (year < 20 ? 2000 : 1900) + year;
                    if (formats.dateFormat) {
                        var escapes = [];
                        var format = escapeChars(formats.dateFormat, escapes);
                        if (format.indexOf('${') > -1) {
                            format = format.replace(/\$\{([^}]*)\}/g, function (a0, a1) {
                                return evalFunc('(function(d,m,y){ return ' + a1 + '; })(' + day + ',' + month + ',' + year + ')');
                            });
                        } else {
                            if (!day)
                                format = format.replace(/d+(th|\s|\.|,|\-|\/)+/, '');
                            if (!month)
                                format = format.replace(/m+(\s|\.|,|\-|\/)+/, '');
                            if (!year)
                                format = format.replace(/(\s|\.|,|\-|\/)+y+/, '');
                        }
                        var reg = /mmmm|mmm|mm|m|dd|d|yyyy|yy|th/g;
                        dates[i] = unEscapeChars(format.replace(reg, function (a) {
                            switch (a) {
                                case 'mmmm':
                                    return '{month' + month + '}';//self.mnth[month];
                                case 'mmm':
                                    return '{mon' + month + '}';//(self.mnth[month] || '').substr(0, 3);
                                case 'mm':
                                    return month < 10 ? '0' + month : month;
                                case 'm':
                                    return month;
                                case 'dd':
                                    return day < 10 ? '0' + day : day;
                                case 'd':
                                    return day;
                                case 'yyyy':
                                    return year || '';
                                case 'yy':
                                    return year ? year % 100 : '';
                                case 'th':
                                    //var least = day % 10;
                                    return '';// least == 1  ? 'st' : ( least == 2 ? 'th' : (least == 3 ? 'rd' : 'th'));
                            }
                        }), escapes);
                    } else if (regexMatch[FORMAT_GROUP_NAMES.textDateMonth]) {
                        var date = nums[i];
                        if (suffix)
                            date = date.replace(suffix, '');

                        // replace only month name
                        dates[i] = date.replace(regexMatch[FORMAT_GROUP_NAMES.textDateMonth], '{month' + month + '}');
                    }
                }
                t.push(text.substr(lI, regexMatch.index - lI), '{' + i++ + '}');
                lI = regexMatch.index + regexMatch[0].length;
            }
            if (lI < text.length)
                t.push(text.substr(lI));
            text = t.join('');
            return {text: text, nums: nums, d: dates, t: times};
        };
        this.injectMonths = function(text, months) {
            return text.replace(/\{mon(th)?(\d+)}/g, function(_, full, m) {
                var m = (months[Number(m)-1] || "");
                return full ? m : m.substring(0, 3);
            });
        }
    }
    bablic.VariableFormatter = backwardVariableFormatter;
})(bablic);;



var Text = Engines['1'] = (function () {

    var BABLIC_INLINE_MARKUP_VAR = /__vs\(([^)]+)\)__((?:.|\s)*?[^)]*)__ve/ig;
    var BABLIC_INLINE_MARKUP_VAR_NEW = /__vs(.*?)__vm_((?:.|\s)*?)__ve/ig;

    var compact = /\s+/g;
    var CHECK_INLINE = /^(?:inline|none)$/i;
    var HAS_COMPOSITE = typeof(CompositeEngine) != 'undefined';
    var SHOPIFY_REGEX = /powr\-map/i;
    var HAS_LINES = /\S\s*__nl__\s*\S/;
    var CLEAN_TAGS = false;
    var identicalSymbolsRegex = null;
    var IGNORE_TEXT = /[,\/\\'”«»"[\]()+*:&%$~#@<>{}^]{8}/;

    function getUniqueId(uniqueId,content){
        return content + uniqueId;
    }

    var div;
    function htmlToText(html){
        if(!div)
            div = $('<div></div>');
        if(!html || html.indexOf('&') == -1)
            return html;
        return div.html(html).text();
    }
                              // start of                                   1st char which is not english
    var asianLiterals = /(?:^|[.,\-\/\\'”«»"[\]()+*:&%#@!?<>{}\s\r\n^])[^\-.,\/\\'”«»"[\]()+*:&%#@!?<>0-9{}\s\r\n^؋ƒ₼៛¥₡₱£€₾¢₹﷼₪₩₭₨₮₦₽฿₺₴₫a-z]/i;

    var asianLocales = {'zh_cn':1,'zh_tw':1,'ja':1};
    var attrs = {'title': true, 'placeholder': true, label: true, 'aria-label': true};
    var Self = {
        index: 1,
        name: 'text',
        addAttr:function(attr, val){
            if(val !== false)
                attrs[attr] = true;
            else
                delete attrs[attr];
        },
        /**
         * To be qualified - a node must be a text node, or an attribute from a list of attributes
         * if the phrase markup is on, also a node element will be quialified
         *
         * To be qualified - text string must contain at least one word
         * A word must start with two word characters
         *
         * - Phrases are detected in lower case, case is maintained
         * - Phrases prefix and suffix which are not word characters are trimmed
         * - Numbers inside phrases are automatically idendified as variables
         */
        prepare: function () {
            if(bablic.version > 3.6)
                CLEAN_TAGS = true;

            var self = this;
            var CURRENCIES = '';
            //bablic.version >= 3.5 ? (["Lek", "؋", "\\$", "ƒ", "₼", "p\\.", "BZ\\$", "\\$b", "KM", "P", "лв", "R\\$", "៛", "¥", "₡", "kn", "₱", "Kč", "kr", "RD\\$", "£", "€", "₾", "¢", "Q", "L", "Ft", "₹", "Rp", "﷼",
            //    "₪", "J\\$", "₩", "₭", "Ls", "Lt", "ден", "RM", "₨", "₮", "MT", "C\\$", "₦", "B\/\\.", "Gs", "S\/\\.", "zł", "lei", "₽", "Дин\\.", "S", "CHF", "NT\\$",
            //    "฿", "TT\\$", "₺", "₴", "\\$U", "Bs", "₫", "Z\\$"].join('|')) : '';

            self.CURRENCIES = CURRENCIES;

            self.hasLiterals = bablic.version > 3.6 ?
                // start phrase                                    // first character
                /(?:^|[.,\-\/\\'”«»"[\]()+*:&%#@!?<>{}\s\r\n^])[^\-.,\/\\'”«»"[\]()+*:&%#@!?<>0-9{}\s\r\n^؋ƒ₼៛¥₡₱£€₾¢₹﷼₪₩₭₨₮₦₽฿₺₴₫]+[\-&\s\r\n]*[^\-.,\/\\'”«»"[\]()+*:&%#@!?<>0-9{}\s\r\n^؋ƒ₼៛¥₡₱£€₾¢₹﷼₪₩₭₨₮₦₽฿₺₴₫]+/
            :
                /(?:^|[.,\-\/\\'”«»"[\]()+*:&%#@!?<>{}\s\r\n^])[^\-.,\/\\'”«»"[\]()+*:&%#@!?<>0-9{}\s\r\n^]+[\-&\s\r\n]*[^\-.,\/\\'”«»"[\]()+*:&%#@!?<>0-9{}\s\r\n^]+/;


            if (LDATA.alt || (LDATA.conf && LDATA.conf.a))
                attrs['alt'] = true;
            self.i = {button: 0, submit: 0, reset: 0
            //    ,radio:0,checkbox:1
            };
            self.s = {
                product: {
                    name: 0,
                    description: 0,
                },
                article: {
                    headline:0,
                    description:0,
                    articleBody:0,
                    name:0,
                }
            };
            self.m = {
                description: 0,
                title: 0,
                'st:title': 0,
                'st:section': 0,
                'og:description': 0,
                'og:title': 0,
                'twitter:title': 0,
                'twitter:description': 0,
                'og:site_name': 0
            };
            self.split = /(?:\s+[|]\s+|{nl}|{ct[^}]*})/;
            self.trim = /^[\s\r\n^]*((?:.|\s)*?)[\s\r\n^]*$/;

            self.f = new bablic.VariableFormatter({
                months: (originalLocale && originalLocale.months),
                monthBeforeDay: LDATA.mbd,
            }, eval);
            if (targetLocale && targetLocale.months) {
                self.mnth = targetLocale.months;
            }

            self.need_bidi = /(?:^|[0-9.,\/\\'[\]()+*:&%#@!?<>{}^])(?:$|[0-9.,\/\\'[\]()+*:&%#@!?<>{}^])/;
            self.exclude = /<(?:.|\s)*?exclude(?:.|\s)*?>(?:.|\s)*?<(?:.|\s)*?>/ig;
            self.SEG_DEP = 2;
            self.SEG_STEP = /((?:.|\s)*?){(?:t(\d+)|(nl)|(ct[^}]*))}/g;
            self.itags = {
                SCRIPT: 1,
                STYLE: 1,
                HEAD: 1,
                NOSCRIPT: 1,
                SVG: 1,
                SYMBOL: 1,
                CODE: 1,
                VAR: 1,
                PATH: 1,
                CANVAS: 1,
                LINK: 1
            };
            self.extractNums = function (text, formats) {
                return self.f.processText(text, formats || (targetLocale && targetLocale.formats) || {});
            };
            self.stripText = function (text,noVars,uniqueId,hash,dontSplit,cleanTags, key, i18n, splitBy) {
                var match = self.trim.exec(text);
                var text = match && match[1];
                if (!text)
                    return null;
                if (splitBy && splitBy.length > 2 && splitBy[0] === "/" && splitBy[splitBy.length-1] === "/") {
                    splitBy = new RegExp(splitBy.substring(1, splitBy.length-1));
                }
                var hasContent = false;
                // if using unique, don't split
                var parts = $.map(uniqueId || dontSplit ? [text] : text.split(splitBy || self.split), function (p) {
                    p = self.trim.exec(p)[1];
                    if (!p)
                        return null;
                    if (IGNORE_TEXT.test(p.replace(/\.+/g, '.')))
                        return null;
                    var m = noVars ? {text:p,nums:[]} : self.extractNums(p);
                    if(i18n) {
                        m = {text:p,nums:[], d: {}};
                        m.text = p.replace(BABLIC_INLINE_MARKUP_VAR, function(all, attrName, varValue){
                            m.nums.push(varValue);
                            return "{" + (m.nums.length-1) + "}";
                        }).replace(BABLIC_INLINE_MARKUP_VAR_NEW, function(all, attrs, varValue) {
                            m.nums.push(varValue);
                            return "{" + (m.nums.length-1) + "}";
                        });
                    }


                    var hasLiterals = self.hasLiterals.test(m.text);
                    if(!hasLiterals && originalLocale.key in asianLocales)
                        hasLiterals = asianLiterals.test(m.text);
                    if (hasLiterals && LDATA.block && LDATA.block.test)
                        hasLiterals = !LDATA.block.test(m.text);
                    if(m.text.indexOf('BESbswy') > -1)
                        hasLiterals = false;
                    if(hasLiterals && WIN.Shopify)
                        hasLiterals = !SHOPIFY_REGEX.test(m.text);

                    if (!m.q && !m.d && !m.t && !hasLiterals)
                        return m.nums.length ? [
                            {content:m.text,id:hash || bablicHash(uniqueId ? getUniqueId(uniqueId,m.text) : m.text),a:false,vars:m.nums,tags:['visible']},
                            {content:p,id:hash || bablicHash(uniqueId ? getUniqueId(uniqueId,p) : p),a:false,tags:['visible']}
                            ] : null;
                    var l = 0;
                    for (var i = 0; i < m.nums.length; i++)
                        l += m.nums[i].length;
                    if (p.length == l || !hasLiterals)
                        return {content: m.text, vars: m.nums, d: m.d, t: m.t, q: m.q, a: false};
                    hasContent = true;
                    var uniqueContent = m.text.toLowerCase().replace(compact, ' ').replace(/σ([^a-zα-ω]|$)/g,'ς$1');
                    if(identicalSymbolsRegex)
                        uniqueContent = uniqueContent.replace(identicalSymbolsRegex,"");
                    if(cleanTags && CLEAN_TAGS){
                        uniqueContent = uniqueContent.replace(/\s*<[^>]*>\s*/g,'<>');
                    }
                    if(key)
                        uniqueContent = bablic.hashByKey ? key : (key + "_" + uniqueContent);
                    return {
                        id: hash || bablicHash(uniqueId ? getUniqueId(uniqueId,uniqueContent) : uniqueContent),
                        content: m.text,
                        vars: Object.keys(m.nums).length && m.nums,
                        v:uniqueId,
                        d: m.d,
                        t: m.t,
                        q: m.q,
                        // automatically record every content, except for on TextMarkup hybrid mode
                        a: !HasTextMarkup || i18n,
                        tags:['visible']
                    };
                });
                return parts.length && parts;
            };

            /**
             * Is this element is a segmented text phrase, or just a container for other phrases
             * If this element contains child elements which are display block, it is not a container
             * If it contains only one element
             * @param element
             * @param DomNode
             * @returns {boolean}
             */
            self.isSeg = function (element) {
                if (CHECK_INLINE.test($(element).css('display'))) {
                    element = element.parentNode;
                    if (CHECK_INLINE.test($(element).css('display')))
                        return false;
                }
                var numberOfElements = 0, hasText = false;
                for (var i = 0; i < element.childNodes.length; i++) {
                    var childNode = element.childNodes[i];
                    if (childNode.nodeType != 1) {
                        if (childNode.nodeType == 3 && /[^-\s]/.test(childNode.nodeValue))
                            hasText = true;
                        continue;
                    }
                    numberOfElements++;
                    if (!CHECK_INLINE.test($(childNode).css('display')))
                        return false;
                }
                return !!(numberOfElements > 1 || (numberOfElements > 0 && hasText));
            }
        },
        qualifier: function (DomNode, locale, orig_locale, markup, element, seg) {
            markup = markup || {};
            var splitBy = markup.split;
            if (element && element.tagName && element.tagName.toUpperCase() in this.itags) {
                if (this.s && 'SCRIPT' === (DomNode.tagName ||"").toUpperCase() && DomNode.getAttribute("type") === "application/ld+json") {
                    var p = $(DomNode).html();
                    try{
                        var structuredData = JSON.parse(p);
                        structuredData = Array.isArray(structuredData) ? structuredData : (structuredData["@graph"] || [structuredData]);
                        var rets = [];
                        var self = this;
                        structuredData.forEach(function (schema) {
                            if (schema["@type"]){
                                var loweredType = schema["@type"].toLowerCase();
                                if (loweredType in self.s){
                                    for (var prop in self.s[loweredType]){
                                        if (schema[prop]){
                                            var ret = self.stripText(schema[prop], 'no-vars' in markup , markup.unique, markup.id, true);
                                            if (ret){
                                                ret = ret[0];
                                                ret.h = true;
                                                ret.a = true;
                                                ret.fi = loweredType + "." + prop;
                                                ret.tags = ['structured-data'];
                                                rets.push(ret);
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        return rets;

                    }catch (e) {
                    }
                }
                return null;
            }
            var self = this;
            if(HasTextMarkup) {
                // ignore text node if we are in TextMarkupMode
                if (DomNode.nodeType === 3 && !element._fake) {
                    if (!bablic.i18nHybrid || bablic.integrateI18n.qualify(element.innerHTML)) {
                        return null;
                    }
                }
                var html = DomNode === element ? DomNode.innerHTML : (element._fake ? DomNode.nodeValue : DomNode.value);
                // should we process using text markup or normally?
                // if we are on hybrid mode, and we don't see markup tags in HTML, continue normally?
                // otherwise, do strictly i18n translation
                if (!bablic.i18nHybrid || bablic.integrateI18n.qualify(html)) {
                    var inlineSegments = bablic.integrateI18n.parse(html);
                    var segments = [];
                    inlineSegments.forEach(function (segment) {
                        var newMarkup = segment.attributes;
                        var ret = self.stripText(segment.content, 'no-vars' in markup || 'no-vars' in newMarkup, newMarkup.unique || markup.unique, newMarkup.id || markup.id, true, false,
                            newMarkup.key, true);
                        if (ret) {
                            ret = ret[0];
                            ret.markup = newMarkup;
                            ret.key = newMarkup.key;
                            ret.wrapped = true;
                            ret.a = true;
                            ret.i18n = true;
                            ret.tags = ["i18n"];
                            segments.push(ret);
                        }
                    });
                    if (segments.length) {
                        DomNode._babCe = true;
                        return segments;
                    }
                    return null;
                }
            }
            var noVars = ('no-vars' in markup), uniqueId = markup.unique, hash = markup.id;
            if (!HAS_COMPOSITE && element && DomNode == element.firstChild) {
                if(markup.block)
                    setNodeAttr(element,'_seg',markup.block != 'false');
                else if (typeof(readNodeAttr(element, '_seg')) == 'undefined')
                    setNodeAttr(element, '_seg', this.isSeg(element));
            }
            this.tree = null;

            switch (DomNode.nodeType) {
                case 3:
                    if (HAS_COMPOSITE) {
                        if (seg)
                            return null;
                    }
                    else {
                        if (element && readNodeAttr(element, '_seg'))
                            return null;
                    }
                    var nodeValue = DomNode.nodeValue;
                    if((element.tagName || "").toUpperCase() == 'TITLE' && markup.translated) {
                        // nodeValue = markup.translated;
                        setNodeValue(DomNode, markup.translated);
                        noVars = true;
                    }
                    var ret = self.stripText(nodeValue,noVars,uniqueId,hash, null, null, null, null, splitBy);
                    if (ret && setNodeAttrIf)
                        setNodeAttrIf(DomNode, 'bablic_c', ret);
                    if (ret) {
                        if ((element.tagName || "").toUpperCase() == 'TITLE')
                            $.each(ret, function (i, r) {
                                r.h = true;
                                r.tags = ['visible','meta'];
                            });
                    }
                    return ret;
                case 2:
                    var attrname = (DomNode.nodeName || '').toLowerCase();
                    if (attrname === markup.attribute || attrname in attrs ||
                        (attrname == 'value' && element && (element.tagName || '').toLowerCase() == 'input' && element.attributes['type'] &&
                        (element.attributes['type'].value || '').toLowerCase() in this.i)) {
                        if ((element.tagName || '').toLowerCase() == 'iframe')
                            return;
                        if(DomNode.value[0] == '#' && DomNode.value.indexOf(' ') == -1)
                                return null;
                        var ret = self.stripText(DomNode.value,noVars,uniqueId,hash, null, null, null, null, splitBy);
                        if (ret && attrname != 'value' && attrname != 'placeholder')
                            $.each(ret, function (i, r) {
                                r.h = true;
                                if(attrname == 'alt')
                                    r.tags = ['alt'];
                            });
                        return ret;
                    }
                    return null;
                case 1:
                    if (this.m && 'META' === (DomNode.tagName||"").toUpperCase()) {
                        var name = (DomNode.getAttribute('name') || '').toLowerCase() || (DomNode.getAttribute('property') || '').toLowerCase() || (DomNode.getAttribute('itemprop') || '').toLowerCase();
                        if (name in this.m) {
                            var value = markup.translated || DomNode.getAttribute('content') || DomNode.getAttribute('value');
                            var ret = self.stripText(value,bablic.version <= 3.7 ? true : noVars,uniqueId,hash, null, null, null, null, splitBy);
                            if (!ret)
                                return null;
                            $.each(ret, function (i, r) {
                                r.h = true;
                                r.a = true;
                                r.tags = ['meta'];
                            });
                            return ret;
                        }
                        return null;
                    }
                    if ('phrase' in markup) {
                        var p = $(DomNode).html();
                        if (markup.phrase && markup.phrase != 'true' && markup.phrase != 'false')
                            return [{id: hash || bablicHash(markup.phrase), content: p, a: true, v: markup.phrase}];
                        if(uniqueId)
                            return [{id: hash || bablicHash(uniqueId), content: p, a: true, v: uniqueId}];
                        var e = [];
                        var m;
                        while (m = self.exclude.exec(p)) {
                            e.push(m[0]);
                        }
                        $.each(e, function (i, m) {
                            p = p.replace(m, '{' + i + '}');
                        });
                        return [{id: hash || bablicHash(p.toLowerCase()), content: p, vars: e.length && e, a: true}];
                    }
                    if(element.readOnly && ((element.tagName || "").toUpperCase() == "INPUT" || element.tagName === "TEXTAREA")
                        && !element.attributes["value"]){
                        return self.stripText(element.value,noVars,uniqueId,hash, null, null, null, null, splitBy);
                    }
                    if (HAS_COMPOSITE) {
                        if (seg == element) {
                            var tree = CompositeEngine.buildDOMTree(element);
                            if (tree.isEmpty())
                                return null;
                            var str = CompositeEngine.getTreeContent(tree);
                            // if(str && bablic.mobile && isSafari) {
                            //     str = str.replace(/<a(?:\d+)?>([0-9+\s]{7,30})<\/a(?:\d+)?>/gi, '$1');
                            // }
                            var ret = self.stripText(str,noVars,uniqueId,hash,true,true, null, null, splitBy);
                            if (!ret)
                                return null;
                            this.tree = tree;
                            this.oVal = str;
                            element._babCe = true;
                            return ret;
                        }
                        return null;
                    }
                    if (readNodeAttr(element, '_seg')) {
                        var i = 0;
                        var segs = [];
                        var children = {};
                        this._seg = false;
                        var it = element.firstChild;
                        var lastText = true;
                        while (it) {
                            if (it.nodeType == 3) {
                                lastText = true;
                                segs.push(it.nodeValue);
                            }
                            else if (it.nodeType == 8) {
                                lastText = true;
                                segs.push('{ct' + (it.nodeValue || '').replace(/}/g, '__close__') + '}');
                            }
                            else if ((it.tagName || "").toUpperCase() == 'BR') {
                                lastText = true;
                                segs.push('{nl}');
                            }
                            else {
                                if (lastText)
                                    segs.push('{t' + (++i) + '}');
                                (children[i] = children[i] || []).push(it);
                                lastText = false;
                            }
                            it = it.nextSibling;
                        }
                        var text = segs.join('');
                        this.oVal = text;
                        var ret = self.stripText(text,noVars,uniqueId,hash, null, null, null, null, splitBy);
                        if (ret && ret.length)
                            $.each(ret, function (i, r) {
                                if (r) r.c = children;
                            });
                        return ret;
                    }
                    return null;
            }
        },
        replacer: function (DomNode, translations, contents, locale, orig_locale, markup, element, seg, previousLocale) {
            if(HasTextMarkup && contents[0].i18n) {
                // var newHtml = [];
                var html = DomNode === element ? DomNode.innerHTML : (element._fake ? DomNode.nodeValue : DomNode.value);
                var newHtml = bablic.integrateI18n.translate(html, contents, translations).replace(/__nl__/g, '\n');
                if(DomNode === element)
                    element.innerHTML = newHtml;
                else if(element._fake)
                    DomNode.nodeValue = newHtml;
                else
                    DomNode.value = newHtml;
                return;
            }
            var old_value = DomNode.nodeType != 1 ?
                (DomNode.nodeType == 2 ? DomNode.value : DomNode.nodeValue) :
                ('phrase' in markup || ((DomNode.tagName || "").toUpperCase() == 'SCRIPT' && DomNode.getAttribute("type") === "application/ld+json")  ?
                    $(DomNode).html() :
                    ((DomNode.tagName || "").toUpperCase() == 'META' ?
                        DomNode.getAttribute('content') || DomNode.getAttribute('value') || '' :
                        (DomNode.readOnly && ((DomNode.tagName || "").toUpperCase() == "INPUT" || (DomNode.tagName || "").toUpperCase() === "TEXTAREA")
                            ? DomNode.value : this.oVal)));
            var isElm = DomNode.nodeType == 1;
            var hasLines = false;
            var hasLiteralLineBreaks = old_value.includes('\n');
            var composite = this.tree;
            var self = this;
            $.each(contents, function (i, c) {
                var t = translations[i];
                t = t.replace(/^(__nl__)+/, '').replace(/(__nl__)+$/, '');
                hasLines = hasLines || HAS_LINES.test(t);
                var o = c.content;
                if (c.tmp && o == t)
                    o = t = c.tmp;
                if (c.vars)
                    $.each(c.vars, function (i, n) {
                        var formatted = (c.t && c.t[i]) || (c.d && c.d[i]) || (c.q && c.q[i]);
                        if (previousLocale) {
                            var newFormat = self.extractNums(n, locale && locale.formats);
                            formatted = (newFormat.t || newFormat.d || c.q || [])[0];
                        }
                        var out =  formatted || n;

                        // check for custom format
                        // var customFormatMatch = /\{\d+\|([^}]+)}/.exec(t);
                        // var customFormat = customFormatMatch && customFormatMatch[1];
                        // if (c.t && customFormat){
                        //     out = self.extractNums(n, {timeFormat: customFormat}).t[i];
                        // }
                        if (c.d) {
                            // if (customFormat) {
                            //     out = self.extractNums(n, {dateFormat: customFormat}).d[i];
                            // }
                            out = self.f.injectMonths(out, self.mnth);
                        }
                        // if (c.q && customFormat){
                        //     if (customFormat.includes("%")){
                        //         out = self.extractNums(n, {percentFormat: customFormat}).q[i];
                        //     }else {
                        //         out = self.extractNums(n, {quantityFormat: customFormat}).q[i];
                        //     }
                        // }
                        t = t.replace(RegExp('\\{' + i + '\\}', 'g'), out);
                        o = o.replace(RegExp('\\{' + i + '\\}', 'g'), n);
                    });
                if(composite && contents.length == 1)
                    old_value = t;
                else
                    old_value = (old_value + "").replace(o, t);
            });
            if (!this.tree) {
                var hasBreaks = false;
                var preserveLineBreaks = false;
                if (hasLiteralLineBreaks && !hasLines) {
                    var white = $(element).css('white-space');
                    if (white === 'pre-line' || white === 'pre-wrap' || white === 'pre') {
                        preserveLineBreaks = true;
                    }
                }
                if (!preserveLineBreaks) {
                    old_value = old_value.replace(/\n/g, '');
                }
                old_value = old_value.replace(/__nl__/g, '\n');
                if(!HAS_COMPOSITE && hasLines){
                    hasBreaks = true;
                }
                if(HAS_COMPOSITE && old_value.indexOf('<br>') > -1){
                    hasBreaks = true;
                    old_value = old_value.replace(/\n/g, '').replace(/<br>/g, '\n');
                }
                if(hasBreaks){
                    var white = $(element).css('white-space');
                    if (white != 'pre' && white != 'pre-line' && white != 'nowrap' && !element.style.whiteSpace) {
                        element.style.whiteSpace = 'pre-line';
                        element._bWS = DomNode;
                        for (var n = 0; n < element.childNodes.length; n++) {
                            var node = element.childNodes[n];
                            if (node.nodeType != 3)
                                continue;
                            if (node == DomNode)
                                continue;
                            setNodeValue(node, node.nodeValue.replace(/^\s+/g, ' ').replace(/\s+$/g, ' '));
                        }
                    }
                }
            }
            else{
                old_value = old_value.replace(/__nl__/g, '\n');
                if (element._bWS == DomNode) {
                    element.style.whiteSpace = '';
                    delete element._bWS;
                }
            }

            if (!isElm) {
                if (DomNode.nodeType == 2) {
                    var translated = htmlToText(old_value);
                    if(DomNode.nodeName == 'placeholder' && element.value == DomNode.value)
                        element.value = translated;
                    DomNode.value = translated;
                }
                else {
                    //var replaceElm = false;
                    //if(HAS_HTML.test(old_value)) {
                    //    if(readNodeAttr(element,'_babElm'))
                    //        replaceElm = true;
                    //    else if(element.innerHTML.trim() == DomNode.nodeValue.trim()){
                    //        replaceElm = true;
                    //        setNodeAttr(element,'_babElm',true)
                    //    }
                    //}
                    //if(replaceElm) {
                    //    $(element).html(old_value);
                    //    DomNode.nodeValue = old_value;
                    //}
                    //else
                        // DomNode.nodeValue = htmlToText(old_value);//this.div ? this.div.html(old_value).text() : old_value;
                    setNodeValue(DomNode, htmlToText(old_value));
                }
            }
            else {
                if ('phrase' in markup || 'SCRIPT' === (DomNode.tagName|| "").toUpperCase() && DomNode.getAttribute("type") === "application/ld+json")
                    $(DomNode).html(old_value);
                else {
                    if ((DomNode.tagName || "").toUpperCase() == 'META')
                        DomNode.setAttribute('content', old_value);
                    else if(element.readOnly && ((element.tagName || "").toUpperCase() == "INPUT" || (element.tagName || "").toUpperCase() == "TEXTAREA")) {
                        element.readOnly = false;
                        element.value = old_value;
                        element.readOnly = true;
                    }
                    else{
                        if (HAS_COMPOSITE) {
                            var tree = this.tree;
                            if (!tree)
                                return console.error('Problem with segment manipulating', DomNode);

                            CompositeEngine.replaceDOMTree(tree, old_value);
                            return;
                        }
                        /**
                         * Strategy:
                         * 1) Collect all nodes, by type, remove them from the parent
                         * 2) Arrange nodes by their original order
                         * 3) Parsing the translated content, iterativly adding nodes
                         * 4) Save un-used elements for later
                         */
                        var isEdit = LDATA.edit || doesSupportAjaxReplace();
                        // Step 1: collect inner elements and remove them from parent
                        var elmNodes = {};
                        var brNodes = [], comments = [], textNodes = [];
                        var iterateNode = DomNode.firstChild;
                        var i = 0, allNodes = [];
                        var lastText = true;
                        while (iterateNode) {
                            var next = iterateNode.nextSibling;
                            if (iterateNode.nodeType == 3) {
                                // collect text node
                                textNodes.push(iterateNode);
                                lastText = true;
                            }
                            else if (iterateNode.nodeType == 8) {
                                // collect comment
                                comments.push(iterateNode);
                                lastText = true;
                            }
                            else if (iterateNode.nodeType == 1) {
                                if ((iterateNode.tagName || "").toUpperCase() == 'BR') {
                                    // collect BR node
                                    brNodes.push(iterateNode);
                                    lastText = true;
                                }
                                else {
                                    // collect element
                                    if (lastText)
                                        elmNodes[++i] = [iterateNode];
                                    else
                                        elmNodes[i].push(iterateNode);
                                    lastText = false;
                                    if (isEdit) {
                                        if (!iterateNode.order)
                                            iterateNode.order = [i, elmNodes[i].length - 1];
                                        allNodes.push(iterateNode);
                                    }
                                }
                                if (isEdit && iterateNode.nodeType == 1)
                                    iterateNode.removeAttribute('hidden');

                            }
                            if (iterateNode)
                                DomNode.removeChild(iterateNode);
                            iterateNode = next;
                        }
                        if (isEdit) {
                            // 2) Arrange nodes by their original order
                            elmNodes = {};
                            allNodes.forEach(function (childNode) {
                                elmNodes[childNode.order[0]] = elmNodes[childNode.order[0]] || [];
                                elmNodes[childNode.order[0]][childNode.order[1]] = childNode;
                            });
                        }
                        old_value = old_value.replace(/<tn?(\d+)>.*?<\/tn?\d+>/g,'{t$1}');
                        // 3) Parsing the translated content, iterativly adding nodes
                        var match;
                        while (match = this.SEG_STEP.exec(old_value + '{t0}')) {
                            var text = match[1];
                            var tagIndex = match[2];
                            // first write text node
                            if (text) {
                                var textNode = textNodes.shift() || DOC.createTextNode(text);
                                // textNode.nodeValue = text;
                                setNodeValue(textNode, text);
                                DomNode.appendChild(textNode);
                            }
                            // insert the next elements
                            if (!tagIndex) {
                                // not a normal element
                                // a BR or a comment
                                if (match[3]) {
                                    // insert BR element
                                    var br = brNodes.shift() || DOC.createElement('BR');
                                    DomNode.appendChild(br);
                                }
                                else {
                                    // insert comment
                                    var commentText = match[4].substr(2).replace(/__close__/g, '}');
                                    var comment = comments.shift() || DOC.createComment(commentText);
                                    DomNode.appendChild(comment);
                                }
                            }
                            else if (tagIndex != '0') {
                                // insert list of elements
                                var elmChilds = elmNodes[tagIndex];
                                if (elmChilds) {
                                    $.each(elmChilds, function (i, child) {
                                        DomNode.appendChild(child);
                                    });
                                }
                            }
                        }
                        // 4) Save un-used elements for later
                        if (isEdit) {
                            for (var key in elmNodes) {
                                for (var i = 0; i < elmNodes[key].length; i++) {
                                    if (elmNodes[key][i].parentNode != DomNode) {
                                        elmNodes[key][i].setAttribute('hidden', '');
                                        DomNode.appendChild(elmNodes[key][i]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (element && LDATA.bidi_elements) {
                var text = $.trim(isElm ? $(DomNode).html() : (DomNode.nodeType == 2 ? DomNode.value : DomNode.nodeValue));
                if (this.need_bidi.test(text) && this.hasLiterals.test(text)) {
                    $(element).css('direction', LDATA.bidi_elements);
                    element.dir = LDATA.bidi_elements;
                }
            }

        },
        restore: function (omgPack, node, element, contentElements, translations, markup) {
            if(HasTextMarkup && contentElements[0].i18n) {
                if(node == element)
                    element.innerHTML = omgPack.completeOriginal;
                else
                    node.value = omgPack.completeOriginal;
                return;
            }
            if (node.nodeType == 1) {
                //bablic.$(node).html(this.completeOriginal);
                this.oVal = omgPack.oVal;
                this.tree = omgPack.tree;
                if (!this.oVal && contentElements.length)
                    this.oVal = contentElements[0].oVal;
                if (!this.tree && contentElements.length)
                    this.tree = contentElements[0].tree;
                var originalTranslations = contentElements.map(function (c,i) {
                    c._cnt = c.content;
                    c._d = c.d;
                    c._t = c.t;
                    c.d = {};
                    c.t = {};
                    c.content = translations[i];
                    return c._cnt;
                });

                this.replacer(node, originalTranslations, contentElements, targetLocale, originalLocale, markup, element);
                contentElements.forEach(function(c) {
                    c.content = c._cnt;
                    c.d = c._d;
                    c.t = c._t;
                    delete c._cnt;
                    delete c._d;
                    delete c._t;
                });
            }
            else if (node.nodeType == 2) {
                if(node.nodeName == 'placeholder' && element.value == node.value)
                    element.value = omgPack.completeOriginal;
                node.value = omgPack.completeOriginal;
            }
            else {
                // node.nodeValue = omgPack.completeOriginal;
                setNodeValue(node, omgPack.completeOriginal);
            }
        }
    }
    return Self;
})();
;
var CSS = Engines['2'] = {
    index:2,
    name:'css',
    qualifier:function (node, locale, orig_locale) {
        if (node.nodeType == 1 && (node.tagName || "").toUpperCase() == 'HEAD') {
            return {id:bablicHash(bablic.Site), content:'<style type=\'text/css\' id=\'bablic_site_css\' bablic-exclude></style>',a:true};
        }
        return null;
    },
    replacer:function (DomNode, translated, content, locale, orig_locale, markup) {
        var elm = $.byId('bablic_site_css');
        if(!elm.length())
            $(DomNode).append(translated);
        else{
            var clean = translated.replace(/<.*?>/g,'');
            if(elm.html() == clean)
                return;
            elm.html(clean);
        }

    },
    restore:function(ContentItem,node,element){
        $.byId('bablic_site_css').remove();
    }
};;

var IMAGE_META = {'og:image':1,'st:image':1,'twitter:image':1};
var Images = Engines['3'] = {
    index:3,
    name:'images',
    prepare:function(){
        this.r = /url\("?(.+?)"?\)/;
    },

    qualifier:function (node, locale, orig_locale,m,el) {
        if (node.nodeType == 2 && (node.nodeName.toLowerCase() == 'src') && ((el.tagName || "").toUpperCase() == 'IMG' || ((el.tagName || "").toUpperCase() == 'INPUT' && el.getAttribute('type') == 'image') ) && el.parentNode && el.parentNode.tagName != 'HEAD') {
            if(bablic.version >= 3.9 && el.attributes['srcset'])
                return null;
            return cleanSrc(node.value, null, node);
        } else if (node.nodeType == 1){
            var src = null,meta=false;
            if((node.tagName || "").toUpperCase() == 'META' && node.getAttribute('property') in IMAGE_META) {
                src = node.getAttribute('content');
                meta = true;
            }
            else {
                var u = $(node).css('background-image');
                var match = u && this.r.exec(u);
                src = match && match[1];
            }
            return cleanSrc(src,meta);
        }
        else if(node.nodeType == 2 && node.nodeName.toLowerCase() == 'srcset' && ((el.tagName || "").toUpperCase() == 'IMG' || (el.tagName || "").toUpperCase() == 'SOURCE')) {
            var srcSet = node.value.trim().split(/\s*,\s*/).map(function (res) {
                return res.split(/\s+/);
            });
            var oldNodes = bablic.version < 3.9 ? $.grep(srcSet.map(function(tuple) { return cleanSrc(tuple[0]); }),function(node){ return node; }) : [];
            srcSet.sort(function(a,b){
                return parseFloat(b[1]) - parseFloat(a[1]);
            });
            var generalNode = cleanSrc(srcSet[0][0],false,node);
            if(generalNode)
                oldNodes.unshift(generalNode);
            return oldNodes;
        }
        return null;
    },
    replacer:function (node, translated,content, target, original, markup, element) {
        if(!Array.isArray(translated) && CLOUDINARY_REGEX.test(translated) && content){
            var parts = content.content.replace(/^(https?:)?\/\//i,'').split('/');
            var params = parts[4];
            if(params.indexOf('_') > -1 && parts.length > 5) {
                parts = translated.replace(/^(https?:)?\/\//i,'').split('/');
                parts.splice(4, 0, params);
                translated = '//' + parts.join('/');
            }
        }
        if (node.nodeType == 2){
            if(node.nodeName.toLowerCase() == 'srcset'){

                var changed = false;
                var translation;
                var srcSet = node.value.trim().split(/\s*,\s+/).map(function (res,i) {
                    return res.split(/\s+/);
                });
                if(CLOUDINARY_REGEX.test(translated[0])){
                    parts = translated[0].replace(/^(https?:)?\/\//i,'').split('/');
                    var preParts = parts.slice(0,4).join('/');
                    var restParts = parts.slice(4).join('/');
                    var translation = srcSet.map(function(tuple,i){
                        if (!tuple[0]) return tuple[0];
                        var params = (tuple[1] || '').trim().split(/\s+/);
                        var cloudParams = $.grep(params.map(function(param){
                            if(param[param.length-1] == 'w')
                                return 'w_' + param.substr(0,param.length-1);
                            if(param[param.length-1] == 'h')
                                return 'h_' + param.substr(0,param.length-1);
                        }),function(p) { return p});
                        cloudParams.push('f_auto','q_80');
                        return '//' + preParts + '/' + cloudParams.join(',') + '/' + restParts + ' '  + (tuple[1] || "");
                    }).join(', ');
                    changed = translation != node.value;
                }
                else {
                    translation = srcSet.map(function (parts, i) {
                        if (!parts[0]) return parts[0];
                        var origin = normalizeImageUrl(parts[0]);
                        var tc = normalizeImageUrl(translated[i]);
                        changed = changed || origin != tc;
                        parts[0] = translated[i] || translated[0] || parts[0];
                        return parts.join(' ');
                    }).join(', ');
                }

                if(changed) {
                    if(content)
                        replacedImages[content.id] = node.value;
                    node._babSrcset = node.value;
                    var srcAttr = element.attributes['src'];
                    if(srcAttr){
                        var srcTranslated = getSelectedSource(srcAttr.value, node.value, translation);
                        if(srcTranslated && srcTranslated != srcAttr.value)
                            srcAttr.value = srcTranslated;
                    }
                    node.value = translation;
                }
            }
            else{
                if (node.value != translated) {
                    if (content)
                        replacedImages[content.id] = node.value;


                    if (CLOUDINARY_REGEX.test(translated)){
                        var match = RESPONSIVE_IMG_REGEX.exec(node.value);
                        if (match && match[1]) {
                            parts = translated.replace(/^(https?:)?\/\//i,'').split('/');
                            parts.splice(4, 0, match[1]);
                            translated = '//' + parts.join('/');
                        }
                    }

                    node.value = translated;
                }
                else {
                    var srcSetAttr = element.attributes['srcset'];
                    if(srcSetAttr && srcSetAttr._babSrcset && srcSetAttr.value.indexOf('bablic') > -1){
                        var translatedSrc = getSelectedSource(node.value, srcSetAttr._babSrcset,  srcSetAttr.value);
                        if(translatedSrc && translatedSrc != node.value) {
                            node.value = translatedSrc;
                        }
                    }
                }
            }
        }
        else{
            var src = this.r.exec($(node).css('background-image'));
            if(src && src[1] != translated) {
                if(content)
                    replacedImages[content.id] = src[1];
                node.style.setProperty('background-image', 'url("' + translated + '")', 'important');
                if(!node._babBck && node.attributes['style']){
                    node._babBck = true;
                    attributeObserver(node,node.attributes['style']);
                }
            }
        }
    },
    restore:function(omgPack,node,element,contentElements,translations,markup){
        if(node.nodeName.toLowerCase() == 'srcset')
            this.replacer(node,$.map(contentElements,function(c){ return c.content;}),null,null,null,markup,element);
        else
            this.replacer(node,contentElements[0].content,null,null,null,markup, element);
    }
};
var replacedImages = {};

function normalizeImageUrl(url) {
    return (url || '').split('#')[0].replace(/^https?\:/i,'');
}

function getSelectedSource(src,srcSetOrigin, translation){
    var srcSetParts = srcSetOrigin.trim().split(/\s*,\s*/).map(function (res,i) {
        return res.split(/\s+/);
    });

    var index = -1;
    src = normalizeImageUrl(src);
    for(var i=0; i<srcSetParts.length; i++){
        if(normalizeImageUrl(srcSetParts[i][0]) == src){
            index = i;
            break;
        }
    }
    if(index < 0)
        index = 0;
    var pack = translation.trim().split(/\s*,\s+/).map(function (res,i) {
        return res.split(/\s+/);
    })[index];
    return pack ? pack[0] : null;
}

var BLANK_REGEX = /\b(blank|empty)\b\.(gif|png|jpe?g)$/i;
var CLOUDINARY_REGEX = /cloudinary/;
var RESPONSIVE_IMG_REGEX = /\/(w_\d+,h_\d+),/;
function cleanSrc(src,meta,node){
    if (src && src != 'none'){
        if(WIN.BABLIC_RESTORE)
            src = BABLIC_RESTORE(src);
        else if(WIN.BABLIC_R)
            src = src.replace(BABLIC_R,BABLIC_V);
        var key = src.replace(/^(?:https?:)?\/\//i,'');
        if(!LDATA.conf || !LDATA.conf.iq)
            key = key.split('?')[0];

        if(BLANK_REGEX.test(key))
            return null;
        // if(key.indexOf('uploads.bablic.com') > -1 && LDATA.content){
        //     for(var contentKey in LDATA.content){
        //         if(contentKey[0] != '3')
        //             continue;
        //         if(LDATA.content[contentKey] == '__empty__')
        //             continue;
        //         var original = replacedImages[contentKey.substr(2)];
        //         if(!original)
        //             continue;
        //         var parts = LDATA.content[contentKey].split(/\/|\./);
        //         var id = parts[parts.length-2];
        //         var regex = RegExp('(?:\\/\\/)?uploads.bablic.com\\/uploads\\/' + bablic.Site + '\\/' + id + '(.*?)\\.png','i');
        //         if(!regex.test(key))
        //             continue;
        //         parts = original.split('.');
        //         var ext = parts.pop();
        //         var toReplace = parts.join('.') + '$1.' + ext;
        //         key = key.replace(regex,toReplace);
        //         src = src.replace(regex,toReplace);
        //         if(node)
        //             node.value = node.value.replace(regex,toReplace);
        //         break;
        //     }
        // }
        var oldKey = key;
        var url = {};
        try {
            url = new URL(src);
        }catch(e){
            url = { hostname:"" };
        }
        var host = url.hostname;
        var domains = LDATA.domains && LDATA.domains.length ? LDATA.domains : [LOC.hostname];

        if (matchDomainRule(host, domains) > -1){
            key = url.pathname + (LDATA.conf && LDATA.conf.iq ? "" : url.search);
        }
        else if(WIN.BABLIC_RESTORE) {
            var realDomain = BABLIC_RESTORE(LOC.hostname);
            if(key.indexOf(realDomain) > -1)
                key = key.replace(realDomain,'');
        }

        var forceCloudinary = false;
        var bc = [];
        if(key != oldKey)
            bc.push(bablicHash(oldKey));
        if(CLOUDINARY_REGEX.test(src)){
            var parts = key.split('/');
            if(parts[4] && parts[4].indexOf('_') > -1 && parts.length > 5) {
                parts.splice(4, 1);
                bc.push(bablicHash(key));
                key = parts.join('/');
            }
        }else{
            var match = RESPONSIVE_IMG_REGEX.exec(src);
            if (match && match[1]){
                key = src.replace(match[0], "");
                bc.push(bablicHash(key));
                forceCloudinary = true;
            }
        }
        if(node && (node.nodeName.toLowerCase() == 'srcset' || forceCloudinary)){
            key += '#srcset';
            src += '#srcset';
        }
        src = parseURL(src).href;

        return { id:bablicHash(key), content:src,m:meta,bc:bc};
    }
    return null;
};
var UrlEngine, reverseKeywordByLocale, keywordsByLocale, generateOriginalPath, generateTranslatedPath;

function isInDomain(host) {
    if (!host)
        return false;
    if (host.indexOf('bablic.com') > -1)
        return true;
    var domains;
    if (LDATA.domains && LDATA.domains.length)
        domains = LDATA.domains;
    else {
        var parts = LOC.hostname.split('.');
        domains = [[parts.slice(parts.length - 2).join('.')]];
    }
    return matchDomainRule(host, domains) > -1;
}




function processKeywords(keywords, locales) {
    if (!keywords || !locales) {
        return;
    }
    keywordsByLocale = {};
    reverseKeywordByLocale = {};
    locales.forEach(function (locale) {
        var proper = {};
        var reverse = {};
        for (var keyword in keywords) {
            if (!keywords[keyword][locale]) {
                continue;
            }
            proper[keyword] = keywords[keyword][locale];
            reverse[keywords[keyword][locale]] = keyword;
        }
        keywordsByLocale[locale] = proper;
        reverseKeywordByLocale[locale] = reverse;
    });
}

(function () {
    var DOWNLOAD_REGEX = /\.(jpe?g|png|zip|apk|crx|rar|z7|tar|gz|mp3|avi|mpeg|bmp|wav|pdf|docx?|xml|xlsx?|kml|svg|eot|woff|woff2|pptx?|txt|rtf|mp4|webm)$/i;
    var fakeAnchor = DOC.createElement('A');
    var SRC_ELEMENTS = { IFRAME: 1, SOURCE: 1 };

    function processKeywordsToOriginal(url, locale) {
        if (!reverseKeywordByLocale || !reverseKeywordByLocale[locale])
            return null;
        var urlParts = url.split("?");
        var pathname = urlParts[0];
        var pathParts = pathname.split('.');
        var ext = pathParts.length > 1 ? '.' + pathParts[pathParts.length - 1] : '';
        var pathNoExt = pathParts.length > 1 ? pathParts.slice(0, pathParts.length - 1).join('.') : pathname;
        var reversed = reverseKeywordByLocale[locale];
        var original = pathNoExt.split("/").map(function (p) {
            return reversed[p] || p;
        }).join("/");
        if (original != pathNoExt) {
            urlParts[0] = original + ext;
            return urlParts.join("?");
        } else {
            return url;
        }
    }
    function processTranslatedKeywords(url, locale) {
        if (!keywordsByLocale || !keywordsByLocale[locale])
            return null;
        var urlParts = url.split("?");
        var pathname = urlParts[0];
        var pathParts = pathname.split('.');
        var ext = pathParts.length > 1 ? '.' + pathParts[pathParts.length - 1] : '';
        var pathNoExt = pathParts.length > 1 ? pathParts.slice(0, pathParts.length - 1).join('.') : pathname;
        var proper = keywordsByLocale[locale];
        var translated = pathNoExt.split("/").map(function (p) {
            return proper[p] || p;
        }).join("/");
        if (translated != pathNoExt) {
            urlParts[0] = translated + ext;
            return urlParts.join("?");
        } else {
            return null;
        }
    }

    generateOriginalPath = function (url, locale) {
        return processKeywordsToOriginal(url, locale);
    };

    generateTranslatedPath = function(url, locale) {
        return processTranslatedKeywords(url, locale);
    };

    UrlEngine = Engines['4'] = {
        index: 4,
        name: 'url',
        qualifier: function (DomNode, locale, orig_locale, markup) {
            if (DomNode.nodeType != 1)
                return null;
            if (markup && markup['url'] == 'ignore')
                return null;
            var tag = (DomNode.tagName||"").toUpperCase();
            // gather element url in A element
            var aElement, isForm, isIFrame, isMeta, isSrc;
            if (tag == 'A' && DomNode.attributes['href'] && DomNode.attributes['href'].value !== '' && DomNode.attributes['href'].value[0] != '#') {
                if (DomNode.getAttribute('rel') == 'alternate')
                    return null;
                aElement = DomNode;
                try {
                    var a = aElement.href;
                } catch (e) {
                    return null;
                }
            } else if (SRC_ELEMENTS[tag] && (DomNode.src || DomNode.attributes["data-src"])) {
                fakeAnchor.setAttribute('href', DomNode.src || DomNode.attributes["data-src"].value);
                aElement = fakeAnchor;
                isSrc = true;
                isIFrame = tag === 'IFRAME';
            } else if (tag == 'FORM' && DomNode.getAttribute('action')) {
                fakeAnchor.setAttribute('href', DomNode.getAttribute('action'));
                aElement = fakeAnchor;
                isForm = true;
            } else if (tag == 'META' && DomNode.getAttribute('property') == 'og:url') {
                fakeAnchor.setAttribute('href', DomNode.getAttribute('content'));
                aElement = fakeAnchor;
                isMeta = true;
            } else
                return null;
            if (HasTextMarkup) {
                var segments = bablic.integrateI18n.parse(aElement.href);
                if (segments && segments.length === 1) {
                    var segment = segments[0];
                    var key = segment.attributes.key;
                    // set normal href
                    aElement.setAttribute('href', segment.content);
                    return [{
                        id: bablicHash(segment.content + '_' + key),
                        content: segment.content,
                        oVal: {form: isForm, frame: isIFrame, src: isSrc, abs: segment.content.includes('//'), m: isMeta},
                    }];
                }
            }
            var hostname = aElement.hostname;
            // check to see if url is external to website
            var ld = LDATA.localeDetection || LDATA.localeDetection;

            var isExternal = false, isDifferentProtocol = false;
            switch (aElement.protocol) {
                case 'tel:':
                case 'callto:':
                case 'sms:':
                case 'mailto:':
                    // emails are external links
                    isDifferentProtocol = true;
                    break;
                case 'http:':
                case 'https:':
                    // links that are to a domain which is not a subdomain of this website are external
                    isExternal = !isInDomain(aElement.hostname);
                    if (!isForm && !isSrc && !isMeta && (aElement.getAttribute('download') || DOWNLOAD_REGEX.test(aElement.pathname)))
                        isDifferentProtocol = true;
                    break;
                default:
                    return null;
            }
            var customURL = false;
            // do not confuse custom domains with external url
            if (ld == 'custom' && bablic.originalLocale &&
                bablic.originalLocale.url &&
                bablic.originalLocale.url.indexOf(aElement.hostname) == 0 &&
                aElement.hash !== "#language"
            ) {
                isExternal = false;
                hostname = '';
                customURL = true;
            }

            if (LDATA && LDATA.previewUrl && !isExternal){
                return null;
            }

            // if external, create content from node, to be edited in editor
            if (isExternal || isDifferentProtocol) {
                var extContent = aElement.getAttribute('href');
                var extId = hostname + getPathname(aElement) + (aElement.search || '');

                if (WIN.BABLIC_RESTORE) {
                    extContent = BABLIC_RESTORE(extContent);
                    extId = BABLIC_RESTORE(extId);
                } else if (WIN.BABLIC_R) {
                    extContent = extContent.replace(BABLIC_R, BABLIC_V);
                    extId = extId.replace(BABLIC_R, BABLIC_V);
                }

                var ignoreParams = ['origin'];
                if (hostname.indexOf('youtu') > -1) {
                    ignoreParams.push('widgetid', 'widget.referrer');
                }
                if (window.dmAPI) {
                    ignoreParams.push("preview", "locale");
                }
                for (var i=0; i<ignoreParams.length; i++) {
                    var r = RegExp('&' + ignoreParams[i] + '=[^&=]*', 'i');
                    var r2 = RegExp('\\?' + ignoreParams[i] + '=[^&=]*&?', 'i');
                    extContent = extContent.replace(r, '').replace(r2, '?');
                    extId = extId.replace(r, '').replace(r2, '?');
                }
                return [{
                    id: bablicHash(extId),
                    content: extContent,
                    oVal: {form: isForm, frame: isIFrame, src: isSrc, abs: true, m: isMeta}
                }];
            }

            // make url replacement on A element
            if (markup && 'switch' in markup)
                return null;
            if (aElement.getAttribute('href')[0] == '#')
                return null;

            var path = getPathname(aElement) + (aElement.search || '');

            var isAbs = false;
            var replaceInline = false;
            // For subdir mode, we need to replace urls to include the sub dir
            // except if we are on preview
            // and except for img and video elements
            if (ld == 'subdir' && !bablic.preview && (!isSrc || isIFrame)) {
                if (aElement.hostname != LOC.hostname)
                    return null;
                if (aElement.protocol != LOC.protocol)
                    return null;
                var locales = bablic.folders ? Object.keys(bablic.folders) : LDATA.localeKeys;
                var regex = RegExp('^' + escapeRegex(bablic.subDirBase || '') + '(\\/(?:' + locales.join('|') + '))*\\/');
                var match = regex.exec(path);
                if (match)
                    path = path.replace(match[0], '/');
                replaceInline = true;
            } else if ((ld == 'subdomain' && isInDomain(aElement.hostname))
                || customURL) {
                isAbs = true;
                replaceInline = true;
            } else {

                if (WIN.BABLIC_REPLACE) {
                    // fix links in Visual Editor
                    var replaced = BABLIC_REPLACE(aElement.href);
                    if (replaced != aElement.href)
                    //return [{content:'',oVal:{form:isForm,frame:isIFrame,abs:isAbs,m:isMeta}}];
                        replaceInline = true;
                }

                if (ld == 'querystring' && !LDATA.ajaxWidget && !bablic.noUrl) {
                    path = path.replace(/[?&]locale=\w\w?\w(_\w\w)?/, '').replace(/\?$/, '');
                    replaceInline = true;
                }
            }
            if ((keywordsByLocale && keywordsByLocale[locale]) || LDATA.rewriteUrlHandler)
                replaceInline = true;
            var idContent = path;
            // translate internal links
            var subDomain = aElement.hostname && getCurrentOtherDomain(aElement.hostname);
            if (subDomain) {
                idContent = "@" + subDomain.toLowerCase() + "@" + path;
                if (WIN.BABLIC_RESTORE)
                    path = BABLIC_RESTORE(aElement.hostname) + path;
                else
                    path = aElement.hostname + path;
            }
            var contents = [{
                id: bablicHash(idContent),
                content: path,
                oVal: {form: isForm, frame: isIFrame, src: isSrc, abs: isAbs, m: isMeta, href: aElement.getAttribute("href")}
            }];
            if (replaceInline)
                contents.push({content: ''});
            return contents;

        },
        replacer: function (node, translations, contentObjs, locale) {
            var aElement;
            var translated = translations[0];
            var content = contentObjs[0].oVal;
            if (content.src || content.form || content.m)
                aElement = fakeAnchor;
            else
                aElement = node;
            if (translated && (!contentObjs[0].content || translated !== contentObjs[0].content)) {
                if (aElement.hash && translated.indexOf('#') == -1)
                    translated = translated + aElement.hash;
                aElement.setAttribute('href', translated);
                if (translated.indexOf('://') > -1)
                    content.abs = true;
                // if(content.frame) {
                //     node.setAttribute('src', translated);
                // }
                // else {
                //     node.setAttribute('href', translated);
                // }
            }
            if (contentObjs.length > 1) {
                var ld = LDATA.localeDetection || LDATA.localeDetection;
                if (WIN.BABLIC_REPLACE && ld != 'subdomain' && ld != 'custom') {
                    if (aElement.protocol != LOC.protocol && WIN.top.VisualEditor) {
                        var domain = aElement.hostname;
                        var protocol = aElement.protocol;
                        var path = getPathname(aElement) + aElement.search + aElement.hash;
                        aElement.addEventListener('click', function (e) {
                            e.preventDefault();
                            top.VisualEditor.redirectTop({protocol: protocol, domain: domain, path: path});
                        });
                    } else
                        aElement.href = BABLIC_REPLACE(aElement.href);
                } else {
                    // check if absolute or relative
                    var newHref = bablic.getLink(locale.key, aElement.hostname, aElement.href);
                    // check if old element was absolute, then new should also be
                    if (aElement.getAttribute('href').indexOf('://') > -1) {
                        aElement.href = newHref;
                    } else {
                        // if old was relative, write absolute only if needed
                        var parsed = parseURL(newHref);
                        if (parsed.protocol === aElement.protocol && parsed.hostname === aElement.hostname) {
                            aElement.href = parsed.pathname + parsed.query + parsed.hash;
                        } else
                            aElement.href = newHref;
                    }
                }
            }
            if (!content.form && !content.src && !content.m)
                return null;

            var videoElement = (node.tagName || "").toUpperCase() === 'SOURCE' ? node.parentElement : null;
            // modify url on element which is not Anchor (frame,form)
            var targetAttribute = content.form ? 'action' : (content.m ? 'content' : 'src');
            if (!content.abs)
                node.setAttribute(targetAttribute, getPathname(aElement) + (aElement.search || '') + (aElement.hash || ''));
            else {
                if (content.frame) {
                    if (bablic.recreateIframes) {
                        // create new iframe and switch between them (because of a chrome bug)
                        if (node._babRepFrame) {
                            node._babRepFrame.style.setProperty('display', '');
                            if (node._babRepFrame.src !== aElement.href) {
                                node._babRepFrame.setAttribute(targetAttribute, aElement.href);
                            }
                        } else {
                            var newN = document.createElement('IFRAME');
                            for (var i = 0; i < node.attributes.length; i++) {
                                if (node.attributes[i].name == targetAttribute)
                                    continue;
                                try {
                                    newN.setAttribute(node.attributes[i].name, node.attributes[i].value);
                                } catch (e) {
                                }
                            }
                            newN.setAttribute(targetAttribute, aElement.href);
                            node.parentElement.insertBefore(newN, node);
                            node._babRepFrame = newN;
                        }
                        node.style.setProperty('display', 'none', 'important');
                    } else {
                        // handle data-src scenario
                        if (!node.src)
                            node.setAttribute("data-src", aElement.href);
                        else {
                            try {
                                node.contentWindow.location.replace(aElement.href);
                            } catch (e) {
                                node.setAttribute(targetAttribute, aElement.href);
                            }
                        }
                    }
                } else {
                    var wasPlaying = false;
                    if (videoElement && videoElement.paused === false) {
                        try {
                            videoElement.pause();
                        } catch (e) {}
                        wasPlaying = true;
                    }
                    node.setAttribute(targetAttribute, aElement.href);
                    if (videoElement) {
                        try {
                            videoElement.load();
                            if (wasPlaying) {
                                videoElement.play();
                            }
                        } catch (e) {}
                    }
                }
            }
        },
        restore: function (ContentItem, node, element, content_items, translations) {
            if (content_items[0].oVal.src) {
                if (content_items[0].oVal.frame && node._babRepFrame) {
                    // just switch iframes again
                    node._babRepFrame.style.setProperty('display', 'none', 'important');
                    node.style.setProperty('display', '');
                    return;
                } else
                    fakeAnchor.setAttribute('href', node.src);
            } else if (content_items[0].oVal.form)
                fakeAnchor.setAttribute('href', node.getAttribute('action'));
            var orig = content_items[0].oVal.href || content_items[0].content;
            var contentItems = $.map(content_items, function (cnt, i) {
                return {oVal: cnt.oVal, content: translations[i], id: cnt.id};
            });
            this.replacer(node, [orig], contentItems, originalLocale);
        }
    };
})();

function getPathname(a) {
    var path = a.pathname;
    if (path[0] != '/')
        return '/' + path;
    return path;
}
;

var Bidi;
var isSafari;
var flipBackgroundPosition = true;
(function () {
    var URL_REGEX = /url\(\s*['"]?(.+?)['"]?\s*\)/g;
    var NO_CORS_REGEX = /(squarespace|shopifycdn)\.com/;
    var IGNORE_CSS = /googleapis\.com|gravatar\.com|typekit/i;
    var wasActivated = false;
    var isActivated = false;
    var globalStyleOverriden = false;
    var flipElement;
    var currentDir = null;
    var global = 0;
    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var TARGET_CSS_CLASS = WIN.CSS2Properties ? CSS2Properties : CSSStyleDeclaration;
    var TEST_NO_STYLE_OVERRIDE = false;
    Bidi = Engines['5'] = {
        index: 5,
        name: 'bidi',

        qualifier: function (node, locale, orig_locale, markup) {
            if(!isActivated)
                return;
            if(markup && markup.bidi === 'false' || (node.tagName || "").toUpperCase() == 'SVG') {
                if(node.nodeType == 1)
                    this.exclude(node);
                return null;
            }
            if(node.nodeType == 1 && node.attributes['dir'] && node.attributes['dir'].value != orig_locale.dir && (node.tagName || "").toUpperCase() != 'HTML' && node.tagName != 'BODY'){
                this.exclude(node);
                return null;
            }
            if(node.className && node.className.indexOf && node.className.indexOf('bablic') > -1)
                return null;
            if(node.id && node.id.indexOf && node.id.indexOf('bablic') > -1)
                return null;
            if ((node.nodeType == 1 && (node.tagName || "").toUpperCase() == 'LINK' && (node.getAttribute('rel') || '').toLowerCase() == 'stylesheet' && (node.className || '').indexOf('bablic') == -1 && (node.id || '').indexOf('bablic') == -1)){
                if(IGNORE_CSS.test(node.href))
                    return null;
                if(node._babQ)
                    return null;
                node._babQ = true;
                return {content:'',id:''};
            }
            else if((node.nodeType == 1 && (node.tagName || "").toUpperCase() == 'STYLE' && (node.className || '').indexOf('bablic') == -1 && (node.id || '').indexOf('bablic') == -1)){
                if (node._babQ) {
                    if (typeof(node._babQ) !== "number" || node._babQ === node.innerHTML.length) {
                        return null;
                    }
                }
                node._babQ = true;
                delete node._babRestored;
                return {content:'',id:''};
            }
            else if(node.nodeType == 1)
                this.element(node);
            return null;
        },
        replacer: function (node) {
            if((node.tagName || "").toUpperCase() == 'LINK' && !node.sheet && !node._br){
                var rev = node._babRev = ++global;
                node.addEventListener('load',function(){
                    if(rev !== node._babRev)
                        return;
                    Bidi.replacer(node);
                });
                return;
            }
            if(node._babRestored === false)
                return;

            var buildVirtualSheet = function(cssText){
                var style = DOC.createElement('STYLE');
                style.setAttribute('bablic-exclude', '');
                style.setAttribute('type', 'text/css');
                style.setAttribute('media','print');
                setInnerHTML(style,cssText);
                if(!style.sheet || !style.sheet.cssRules)
                    DOC.head.appendChild(style);
                return style;
            };

            var resolveCSSImports = function(cssText, shouldMirror, cbk){
                var waitFors = [];
                var id = 0;
                cssText = cssText.replace(/@import\s+(?:(?:url\(\s*["']?)|"|')(.+?)(?:(?:["']?\s*\))|"|')(?:\s+([^;]*?))?;/g, function(a0, url, mediaQueries) {
                    if (IGNORE_CSS.test(url))
                        return a0;

                    var token = '__REPLACE' + (id++) + '__';
                    waitFors.push(function(cbk){
                        getLinkCSS(url,function(innerCSSText){
                            if(shouldMirror){
                                var importStyleNode = buildVirtualSheet(innerCSSText);
                                innerCSSText = mirrorStyleSheet(importStyleNode.sheet);
                                if(importStyleNode.parentNode)
                                    importStyleNode.parentNode.removeChild(importStyleNode);
                            }
                            cssText = cssText.replace(token,mediaQueries ? '@media ' + mediaQueries + '{' + innerCSSText + '}\n' : innerCSSText + '\n');
                            cbk();
                        });
                    });
                    return token;
                });
                if(!waitFors.length)
                    return cbk(cssText);
                parallel(waitFors,function(){
                    cbk(cssText);
                });
            };

            var getLinkCSS = function(path, cbk){
                var urlParts = parseURL(path);
                var replaceURLs = createURLFixes(path);
                var onCSSText = function(cssText){
                    cssText = replaceURLs(cssText);
                    resolveCSSImports(cssText, false, cbk);
                };
                // skip xhr for some cases
                if(NO_CORS_REGEX.test(urlParts.href) || LocalDB.getSync('cors-' + urlParts.href))
                    return ajaxGet('//e2.bablic.com/api/engine/access?url=' + encodeURIComponent(urlParts.href), null, onCSSText,function(){
                        onCSSText("");
                    },false,2);
                ajaxGet(urlParts.href,null,onCSSText,function(){
                    ajaxGet('//e2.bablic.com/api/engine/access?url=' + encodeURIComponent(urlParts.href), null, onCSSText,function(){
                        onCSSText("");
                    },false,2);
                    LocalDB.setSync('cors-' + urlParts.href,'1');
                },false,2);
            };

            var styleNode = (node.tagName || "").toUpperCase() == 'STYLE' ? node : node._babBidid;
            if(styleNode) {
                var css = mirrorStyleSheet(styleNode.sheet);
                resolveCSSImports(css, true, function(css){
                    setInnerHTML(styleNode,css);
                    styleNode._babRestored = false;
                    styleNode._babQ = styleNode.innerHTML.length;
                });
                return;
            }
            var href = node.getAttribute('href');
            if(!href)
                return;
            node.setAttribute('crossorigin','anonymous');
            var hasRules = false;
            try{
                hasRules = node.sheet && node.sheet.cssRules;
            }
            catch(e){}
            if(hasRules) {
                var style = DOC.createElement('STYLE');
                style.setAttribute('bablic-exclude', '');
                style.setAttribute('type', 'text/css');
                style.setAttribute('data-source', node.getAttribute('href'));
                var media = node.getAttribute('media');
                if(media)
                    style.setAttribute('media',media);
                var inlineReplaceURLs = createURLFixes(href);
                var css = inlineReplaceURLs(mirrorStyleSheet(node.sheet));
                resolveCSSImports(css,true, function(css){
                    if (!node.parentNode)
                        return;
                    setInnerHTML(style, css);
                    style._babRestored = false;
                    node._babBidid = style;
                    node.setAttribute('media', 'print');
                    node.parentNode.insertBefore(style, node);
                });
                return;
            }
            if(node.bablicLoading)
                return;

            node.bablicLoading = true;

            var shouldHide = bablic.hidden;
            shouldHide && setHidden(true);
            var parentTag = node.parentElement.tagName.toUpperCase();
            // should new style be added inline, or at the end
            var addInline = parentTag === 'HEAD' || parentTag === 'BODY';
            getLinkCSS(href,function(originalStyle){
                var style = DOC.createElement('STYLE');
                style.setAttribute('bablic-exclude', '');
                style.setAttribute('type', 'text/css');
                style.setAttribute('data-source', node.getAttribute('href'));
                style.setAttribute('media','print');
                setInnerHTML(style,originalStyle);
                style._babRestored = false;
                node._babBidid = style;
                var media = node.getAttribute('media');
                if(!node.parentNode)
                    return;
                //node.parentNode.insertBefore(style,node);
                // add new style element, after link or at body end
                if (addInline) {
                    node.parentNode.insertBefore(style,node);
                } else {
                    DOC.body.appendChild(style);
                }

                node._br = true;
                // if inline, remove link element, otherwise just disable it
                if (addInline) {
                    node.parentNode.removeChild(node);
                } else {
                    node.setAttribute('media', 'print');
                }
                setInnerHTML(style,mirrorStyleSheet(style.sheet));
                if(media)
                    style.setAttribute('media',media);
                else
                    style.removeAttribute('media');
                shouldHide && setHidden(false);
            });
        },
        restore: function (pack, node) {
            var style = (node.tagName || "").toUpperCase() == 'STYLE' ? node : node._babBidid;
            if(!style){
                node._babRev = ++global;
                return;
            }

            if(style._babRestored !== false)
                return;
            var transformedCSS = restoreStyleSheet(style.sheet);
            style._babRestored = true;
            setInnerHTML(style,transformedCSS);
        },
        element:function(element){
            if(element._babBidi)
                return;
            if(element.attributes['style'])
                mirrorCSSDeclaration(element.style);
            if(!globalStyleOverriden)
                flipElement(element,true);
            element._babBidi = true;
        },
        exclude:function(element){
            element.setAttribute('data-x-bidi','');
            if(element._babBidi){
                delete element._babBidi;
                if(!globalStyleOverriden)
                    flipElement(element,false);
                if(element.attributes['style'])
                    mirrorCSSDeclaration(element.style);
            }
        },
        activate:function(){
            if(wasActivated) {
                var elements = DOC.querySelectorAll('[style]:not([data-x-bidi])');
                for(var i=0; i<elements.length; i++){
                    if(elements[i].getAttribute('bablic-exclude'))
                        Bidi.exclude(elements[i]);
                    else
                        Bidi.element(elements[i]);
                }
                isActivated = true;
                return;
            }
            isActivated = true;
            wasActivated = true;


            // Modernizing

            var canOverrideStyleProperties = false;
            var canOverrideElementStyle = false;
            var canSetElementStyle = false;
            var canObserve = !!WIN.MutationObserver;
            var hasIteratorSymbol = WIN.Symbol && WIN.Symbol.iterator;

            globalStyleOverriden = !TEST_NO_STYLE_OVERRIDE && overrideGetter(HTMLElement.prototype,'style',function(originalGetter){
                var styleObject = originalGetter.apply(this);
                if(canOverrideStyleProperties || !isActivated || !this._babBidi) {
                    if (isActivated)
                        styleObject._babParent = this;
                    return styleObject;
                }
                else {
                    return new AdapterCSSDeclaration(styleObject);
                }
            });

            if(!globalStyleOverriden) {
                try {
                    var div = DOC.createElement('div');
                    var fakeStyle = {};
                    canOverrideElementStyle = overrideGetter(div, 'style', function () {
                        return fakeStyle;
                    },true);
                    if(div.style == fakeStyle)
                        canOverrideElementStyle = true;
                    if(!canOverrideElementStyle){
                        div.style = fakeStyle;
                        if(div.style == fakeStyle)
                            canSetElementStyle = true;
                    }
                }
                catch(e){}
            }
            else{
                try{
                    if(Object.defineProperties) {
                        var testDesc = getPropertyDescriptor(TARGET_CSS_CLASS.prototype,'left');
                        if(testDesc && testDesc.configurable === false)
                            canOverrideStyleProperties = false;
                        else{
                            testDesc = {
                                configurable:true,
                                get:function(){
                                    return this.getPropertyValue('left');
                                },
                                set:function(value){
                                    return this.setProperty('left',value);
                                }
                            };
                            Object.defineProperty(TARGET_CSS_CLASS.prototype,'left',testDesc);
                            canOverrideStyleProperties = getPropertyDescriptor(TARGET_CSS_CLASS.prototype,'left').get == testDesc.get;
                        }
                    }
                    if (canOverrideStyleProperties) {
                        // try to override cssText property also
                        var cssTestDescriptor = getPropertyDescriptor(TARGET_CSS_CLASS.prototype, "cssText");
                        if (cssTestDescriptor) {
                            if (cssTestDescriptor.configurable === false) {
                                canOverrideStyleProperties = false;
                            } else {
                                Object.defineProperty(TARGET_CSS_CLASS.prototype, "cssText", {
                                    configurable: true,
                                    get: function () {
                                        if (!isActivated || !this._babParent || !this._babParent._babBidi) {
                                            return cssTestDescriptor.get.call(this);
                                        }
                                        var self = this;
                                        return Array.from(this).map(function (a) {
                                            var priority = self.getPropertyPriority(a);
                                            return a + ':' + self.getPropertyValue(a) + (priority ? '!' + priority : '');
                                        }).join(';');
                                    },
                                    set: function (value) {
                                        if (!isActivated || !this._babParent || !this._babParent._babBidi) {
                                            return cssTestDescriptor.set.call(this, value);
                                        }
                                        var self = this;
                                        // ignore strings, urls, ...
                                        var keeps = [];
                                        var keepReplace = function (a0) {
                                            keeps.push(a0);
                                            return '_bk_';
                                        };
                                        var restoreReplace = function (s) {
                                            return s.replace(/_bk_/g, function () {
                                                return keeps.shift();
                                            });
                                        };
                                        value = value
                                            .replace(/url\(.*?\)/ig, keepReplace)
                                            .replace(/".*?"/g, keepReplace)
                                            .replace(/'.*?'/g, keepReplace);
                                        value.split(';').forEach(function (a) {
                                            a = a.trim();
                                            var parts = a.split(':');
                                            var attr = parts[0];
                                            var value = parts[1];
                                            attr = restoreReplace(attr.trim());
                                            if (!attr) return;
                                            value = value || '';
                                            parts = value.split('!');
                                            var priority = parts[1];
                                            value = restoreReplace(parts[0]);
                                            self.setProperty(attr.trim(), value.trim(), priority);
                                        });
                                    },
                                });
                            }
                        }
                    }
                    if(!canOverrideStyleProperties){
                        var getter = TARGET_CSS_CLASS.prototype.__lookupGetter__('width');
                        if(getter){
                            TARGET_CSS_CLASS.prototype.__defineGetter__('width',function(){});
                            if(TARGET_CSS_CLASS.prototype.__lookupGetter__('width') != getter){
                                canOverrideElementStyle = true;
                                TARGET_CSS_CLASS.prototype.__defineGetter__('width',getter);
                            }
                        }
                    }
                }
                catch(e){}
            }

            if(!canOverrideStyleProperties && !canOverrideElementStyle && !canSetElementStyle && !canObserve){
                isActivated = false;
                wasActivated = false;
                return;
            }

            var mustObserve = !canOverrideStyleProperties && !canOverrideElementStyle && !canSetElementStyle;

            if(canOverrideStyleProperties)
                bablic.log('BIDI: will override css attributes globaly');
            else if(canOverrideElementStyle || canSetElementStyle)
                bablic.log('BIDI: will override css attributes per element');
            else
                bablic.log('BIDI: will observe style attribute changes');

            var _setProp = TARGET_CSS_CLASS.prototype.setProperty;
            TARGET_CSS_CLASS.prototype.setProperty = function(prop, value, priority,element){
                if(!isActivated || (globalStyleOverriden && !this._babParent) || (this._babParent && !this._babParent._babBidi)) {
                    if(priority)
                        return _setProp.call(this, prop, value, priority);
                    else // fix IE problem when priority is undefined
                        return _setProp.call(this,prop, value);
                }
                if(mustObserve){
                    this._babOrig = this._babOrig || {};
                    this._babOrig[prop] = value;
                }
                if(isSafari && prop == 'left' && (this._babParent || element) && (this._babParent || element) == DOC.body){
                    this._babRight = value;
                    value = '0';
                }

                prop = replaceProp(prop);
                var replacedValue = replaceValue(prop, value);
                if(priority)
                    _setProp.call(this,prop, replacedValue, priority);
                else // fix IE problem when priority is undefined
                    _setProp.call(this,prop, replacedValue);
                return value;
            };

            var _getProp = TARGET_CSS_CLASS.prototype.getPropertyValue;
            TARGET_CSS_CLASS.prototype.getPropertyValue = function(prop,element){
                if(!isActivated || (globalStyleOverriden && !this._babParent) || (this._babParent && !this._babParent._babBidi))
                    return _getProp.call(this,prop);
                if(isSafari && prop == 'left' && (this._babParent || element) && (this._babParent || element) == DOC.body)
                    return this._babRight || '';


                prop = replaceProp(prop);
                var value =  _getProp.call(this,prop);
                value = replaceValue(prop, value);
                return value;
            };
            TARGET_CSS_CLASS.prototype._getProp = _getProp;
            var _getPriority = TARGET_CSS_CLASS.prototype.getPropertyPriority;
            TARGET_CSS_CLASS.prototype.getPropertyPriority = function(prop){
                if(!isActivated || (globalStyleOverriden && !this._babParent) || (this._babParent && !this._babParent._babBidi))
                    return _getPriority.call(this,prop);
                return _getPriority.call(this,replaceProp(prop));
            };
            var _removeProp = TARGET_CSS_CLASS.prototype.removeProperty;
            TARGET_CSS_CLASS.prototype.removeProperty = function(prop){
                if(!isActivated || (globalStyleOverriden && !this._babParent) || (this._babParent && !this._babParent._babBidi))
                    return _removeProp.call(this,prop);
                return _removeProp.call(this,replaceProp(prop));
            };



            try {
                var replaceAttrs = ['left', 'right', 'padding', 'margin', 'float','text-align',
                    'padding-left', 'padding-right', 'margin-left', 'margin-right',
                    'border-radius', 'border-left', 'border-left-color', 'border-left-style', 'border-left-width', 'border-right', 'border-right-color', 'border-right-style', 'border-right-width',
                    'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius',
                    'text-align-last'];
                var vendorAttrs = ['transform', 'transform-style', 'transform-origin', 'transition', 'transition-property'];
                var prefix = (function () {
                    var styles = WIN.getComputedStyle(DOC.documentElement, ''),
                        pre = (Array.prototype.slice
                            .call(styles)
                            .join('')
                            .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
                        )[1],
                        dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
                    return {
                        dom: dom,
                        lowercase: pre,
                        css: '-' + pre + '-',
                        js: pre[0].toUpperCase() + pre.substr(1)
                    };
                })();
                vendorAttrs.forEach(function (attr) {
                    replaceAttrs.push(attr);
                    if (prefix.lowercase)
                        replaceAttrs.push(prefix.css + attr);
                });
                var replaceAttrAlternatives = {float:['cssFloat']};
                var attrLength = replaceAttrs.length;
                for(var i=0; i<attrLength; i++){
                    var attr = replaceAttrs[i];
                    var words = attr.split('-');
                    if (words.length > 1) {
                        var camelCase = words.shift() + words.map(function (word) {
                                return word[0].toUpperCase() + word.substr(1);
                            }).join('');
                        replaceAttrAlternatives[attr] = [camelCase];
                        if (attr[0] == '-') {
                            camelCase = words.shift() + words.map(function (word) {
                                return word[0].toUpperCase() + word.substr(1);
                            }).join('');
                            replaceAttrAlternatives[attr].push(camelCase);
                        }
                    }

                }
                var replaceAttrObj = {};
                replaceAttrs.forEach(function(attr){
                    replaceAttrObj[attr] = 1;
                });


                if(canOverrideStyleProperties) {
                    var props = {};
                    replaceAttrs.forEach(function (attr) {
                        var descriptor = {
                            get: function () {
                                return this.getPropertyValue(attr);
                            },
                            set: function (val) {
                                this.setProperty(attr, val + '');
                            },
                            configurable:true
                        };
                        props[attr] = descriptor;
                        if(attr in replaceAttrAlternatives)
                            replaceAttrAlternatives[attr].forEach(function(alt){
                                props[alt] = descriptor;
                            });
                    });

                    overrideProperties(TARGET_CSS_CLASS.prototype,props);
                }
                else if(canOverrideElementStyle || canSetElementStyle){

                    var stamDiv = DOC.createElement('div');

                    var AdapterCSSDeclaration = function(originalStyle){
                        this.s = originalStyle;
                    };
                    // TODO add Proxy implementation ,whenever it will be usefull

                    if(hasIteratorSymbol){
                        AdapterCSSDeclaration.prototype[Symbol.iterator] = function(){
                            var index = 0;
                            return {
                                next: function() {
                                    return { value: this.s[++index], done: !(index in this.s) }
                                }
                            };
                        };
                    }

                    for(var key in TARGET_CSS_CLASS.prototype){
                        try{
                            if(typeof(TARGET_CSS_CLASS.prototype[key]) != 'function')
                                continue;
                        }
                        catch(e){
                            continue;
                        }
                        AdapterCSSDeclaration.prototype[key] = TARGET_CSS_CLASS.prototype[key];
                    }

                    var properties = {};
                    for(var key in stamDiv.style){
                        if(typeof(stamDiv.style[key]) == 'function')
                            continue;
                        properties[key] = (function (key) {
                            if(key in replaceAttrObj){
                                var des = {
                                    get: function () {
                                        return this.s.getPropertyValue(key);
                                    },
                                    set: function (value) {
                                        this.s.setProperty(key,value + '');
                                    },
                                    configurable:true
                                };
                                if(attr in replaceAttrAlternatives)
                                    replaceAttrAlternatives[attr].forEach(function(alt){
                                        properties[alt] = des;
                                    });
                                return des;
                            }
                            if(key == 'length'){
                                return {
                                    get:function(){
                                        var ret = this.s.length;
                                        // make sure all properties until this length are defined
                                        this._babItr = this._babItr || 0;
                                        for(var i=this._babItr; i<ret; i++){
                                            overrideGetter(this,i + '', (function(i){
                                                return function() {
                                                    return this.s[i];
                                                };
                                            })(i),true);
                                        }
                                        return ret;
                                    },
                                    configurable:true
                                };
                            }
                            return {
                                get: function () {
                                    return this.s[key];
                                },
                                set: function (value) {
                                    this.s[key] = value;
                                },
                                configurable:true
                            };
                        })(key);
                    }
                    overrideProperties(AdapterCSSDeclaration.prototype, properties);


                    flipElement = function(element, on){
                        if(on) {
                            if(!element._babStyl) {
                                element.style._babParent = element;
                                element._babStyl = new AdapterCSSDeclaration(element.style);
                            }

                            var flipped = element._babStyl;
                            if(canOverrideElementStyle) {
                                overrideGetter(element, 'style', function () {
                                    return flipped;
                                },true);
                            }
                            else if(canSetElementStyle)
                                element.style = flipped;
                        }
                        else {
                            if(!element._babStyl)
                                return;
                            if(canOverrideElementStyle) {
                                overrideGetter(element, 'style', function () {
                                    return element._babStyl.s;
                                },true);
                            }
                            else if(canSetElementStyle)
                                element.style = element._babStyl.s;
                        }
                    }
                }
                else if(canObserve){
                    var observeConf = {attributes:true,attributeFilter:['style']};
                    flipElement = function(element, on){
                        if(on){
                            if(!element._babObs){
                                element._babObs = new WIN.MutationObserver(function(){
                                    var actionsNeeded = [];
                                    for(var i=0; i<element.style.length; i++){
                                        var attr = element.style[i];
                                        if(attr in replaceAttrObj){
                                            var newValue = getPropValueFromStyle(element.style, attr);
                                            var lastValue =  element.style._babOrig ?  element.style._babOrig[attr] : '';
                                            if(lastValue != newValue) {
                                                actionsNeeded.push([attr, newValue,lastValue]);
                                            }
                                        }
                                    }
                                    if(actionsNeeded.length){
                                        element._babObs.disconnect();
                                        for(var i=0; i<actionsNeeded.length; i++){
                                            element.style[actionsNeeded[i][0]] = actionsNeeded[i][2];
                                            element.style.setProperty(actionsNeeded[i][0], actionsNeeded[i][1], undefined,element);
                                        }
                                        element._babObs.observe(element,observeConf);
                                    }
                                });
                                element._babObs.observe(element,observeConf);
                            }
                        }
                        else {
                            if(!element._babObs)
                                return;
                            element._babObs.disconnect();
                        }
                    }
                }
            }
            catch(e){
                bablic.error('Error overriding CSS style attributes ' + e.message);
            }

            var _getRect = Element.prototype.getBoundingClientRect;
            Element.prototype.getBoundingClientRect = function(){
                var rect = _getRect.call(this);
                if(!isActivated || !this._babBidi)
                    return rect;
                var width = DOC.documentElement.offsetWidth;
                if(!rect)
                    return rect;
                return {
                    top:rect.top,
                    bottom:rect.bottom,
                    width:rect.width,
                    height:rect.height,
                    left:width - rect.right,
                    right:width - rect.left
                }
            };

            Element.prototype._babgetBoundingClientRect = _getRect;

            overrideGetter(HTMLElement.prototype,'offsetLeft',function(originalGetter){
                var left = originalGetter.apply(this);
                if(!isActivated || !this._babBidi)
                    return left;
                var parent = this.offsetParent;
                var parentWidth = parent ? parent.clientWidth : DOC.documentElement.clientWidth;
                return parentWidth - this.clientWidth - left;
            });



            var _getComputedStyle = WIN.getComputedStyle;
            bablic.getStyle = _getComputedStyle;
            WIN.getComputedStyle = function(element){
                var style = _getComputedStyle.apply(this,arguments);
                if(!isActivated || !element || !element._babBidi)
                    return style;
                style._babParent = element;
                return style;
            };

            var flipGetter = function(originalGetter){
                var x = originalGetter.apply(this);
                if(!isActivated)
                    return x;
                // check if element is excluded from bidi
                var element = this.target;
                while(element) {
                    if (element.hasAttribute && element.hasAttribute("data-x-bidi"))
                        return x;
                    element = element.parentElement;
                }
                return DOC.documentElement.clientWidth - x;
            };

            var overrideEvents = function(eventClass) {
                overrideGetter(eventClass.prototype, 'pageX', flipGetter);
                overrideGetter(eventClass.prototype, 'clientX', flipGetter);
            };
            if (!bablic.skipMirrorMouseEvents) {

                if (typeof(MouseEvent) !== "undefined")
                    overrideEvents(MouseEvent);
                if (typeof(TouchEvent) !== "undefined")
                    overrideEvents(TouchEvent);
                if (typeof(Touch) !== "undefined")
                    overrideEvents(Touch);
            }
        },
        deactivate:function(){
            isActivated = false;
            var elements = DOC.querySelectorAll('[style]');
            for(var i=0; i<elements.length; i++){
                if(!elements[i]._babBidi)
                    continue;
                delete elements[i]._babBidi;
                if(!globalStyleOverriden)
                    flipElement(elements[i],false);
                mirrorCSSDeclaration(elements[i].style);
            }
        },
        setDir:function(dir){
            var originalDir = originalLocale.dir || 'ltr';
            currentDir = currentDir || originalDir;
            if(dir == currentDir)
                return;
            var hasBidi = targetLocale.engines.includes(5);
            if(dir != originalDir) {
                if (!isActivated && hasBidi) {
                    this.activate();
                    var css =
                        'html{direction:' + dir + ';} ' +
                        'polyline{transform: scale(-1,1);transform-origin: 50% 50%;} ' +
                        '.bidi-flip{transform: scale(-1,1);transform-origin: 50% 50%;}' +
                        '[bablic-exclude],[data-bablic-exclude],[data-bablic-bidi="false"],[bablic-bidi="false"]{direction:' + originalDir + ';} ' +
                        '[bablic-include],[data-bablic-include],[data-bablic-bidi="true"],[bablic-bidi="true"]{direction:' + dir + ';} ' +
                        '[dir=ltr]:not([data-x-bidi]){ direction:rtl;} [dir=rtl]:not([data-x-bidi]){ direction:ltr;}';
                    var $style = $.byId('bablic_rtl_css');
                    if ($style.length())
                        $style.html(css);
                    else {
                        setHidden(true, true);
                        $.byTag('head').append('<style type=\'text/css\' id=\'bablic_rtl_css\' bablic-exclude>' + css + '</style>');
                        bablic.on('translated', function () {
                            setHidden();
                        });
                    }
                }
                if (!hasBidi) {
                    $.byId('bablic_rtl_css').html("");
                }
            }
            else {
                if (isActivated) {
                    this.deactivate();
                }
                $.byId('bablic_rtl_css').html('html{direction:' + dir + ';}');
            }
            currentDir = dir;
        }
    };



    function createURLFixes(href){
        var urlParts = parseURL(href);
        var sourcePath = urlParts.hostname == LOC.hostname && href.indexOf('//') == -1 ?
            href.substring(0, href.lastIndexOf('/') + 1) :
            '//' + urlParts.hostname + urlParts.pathname.substring(0, urlParts.pathname.lastIndexOf('/') + 1);
        return function(str){
            return fixRelativeURLs(str, urlParts, sourcePath);
        };
    }

    function fixRelativeURLs(cssText, urlParts, sourcePath){
        return cssText.replace(/url\(\s*['"]?(.+?)['"]?\s*\)/g, function(a0, a1) {
            if (a1.indexOf('//') > -1)
                return a0;
            if (a1.indexOf('data:') == 0)
                return a0;
            if (a1[0] == '/')
                return "url('//" + urlParts.hostname + a1 + "')";
            return "url('" + sourcePath + a1 + "')";
        });
    }

    function getPropertyDescriptor(object, name) {
        if (!object || !Object.getOwnPropertyDescriptor) return null;
        var descriptor = Object.getOwnPropertyDescriptor(object, name);
        return descriptor || getPropertyDescriptor(object.__proto__, name);
    }

    function overrideGetter(object,name,func, noOrig){
        try {
            var descriptor = getPropertyDescriptor(object, name);
            if (descriptor) {
                if(descriptor.configurable === false)
                    return false;
                var getter = descriptor.get;
                var orig = $.extend({}, descriptor);
                descriptor.get = function () {
                    return func.call(this, getter);
                };
                Object.defineProperty(object, name, descriptor);
                Object.defineProperty(object, '_bab' + name, orig);
                return true;
            }

            var objGetter = object.__lookupGetter__ && object.__lookupGetter__(name);
            if (objGetter) {
                var newGetter = function () {
                    return func.call(this, objGetter);
                };
                object.__defineGetter__(name, newGetter);
                object.__defineGetter__(name, '_bab' + objGetter);
                return true;
            }
            if(noOrig){
                try {
                    if(Object.getOwnPropertyDescriptor) {
                        Object.defineProperty(object, name, {get: func,configurable:true});
                        return true;
                    }
                }
                catch(e){}
                object.__defineGetter__(name, func);
                return true;
            }
        }
        catch(e){bablic.error('error overriding ' + name + ' ' + e.message);}
    }

    function overrideProperties(object, properties){
        try {
            if(Object.defineProperties)
                Object.defineProperties(object, properties);
            else if(object.__defineGetter__) {
                for(var key in properties){
                    object.__defineGetter__(key,properties[key].get);
                    object.__defineSetter__(key,properties[key].set);
                    if(object.__lookupGetter__(key) != properties[key].get)
                        return false;
                }
            }
        }
        catch(e){}
    }

    var LEFT_RIGHT_REGEX = /\b([Ll]eft|[Rr]ight)\b/;
    var LEFT_RIGHT_MAP = {
        left:'right',
        right:'left',
        Left:'Right',
        Right:'Left'
    };
    var MARGIN_PADDING_REGEX = /([\-0-9.]+(?:px|em|pt|%|)|auto)[\s\t\n\r]+([\-0-9.]+(?:px|em|pt|%|)|auto)[\s\t\n\r]+([\-0-9.]+(?:px|em|pt|%|)|auto)[\s\t\n\r]+([\-0-9.]+(?:px|em|pt|%|)|auto)/ig;

    var TRANSFORM = /transform/i;
    var TRANSFORM_ORIGIN = /transform-origin/i;

    var TRANSLATE = /translate(X|3d)?\(\s*(\-)?([0-9\.]+)/;
    var ROTATE = /rotate(X)?\(\s*(\-)?([0-9\.]+)/;

    function replaceProp(prop){
        // if(isSafari && prop.indexOf('background-repeat-') > -1){
        //     return 'background-repeat';
        // }
        //
        return prop.replace(LEFT_RIGHT_REGEX,function(a0){
            return LEFT_RIGHT_MAP[a0];
        });
    }


    var contentValueSelectorMap = {};

    function replaceLast(string, pairs){
        for(var i=0; i<pairs.length; i++) {
            var toReplace = pairs[i][0];
            var replaceBy = pairs[i][1];
            var index = string.lastIndexOf(toReplace);
            if (index == -1)
                continue;
            return string.replace(RegExp(escapeRegex(toReplace),'g'),replaceBy);
        }
        return string;
    }
    var INVERSE_WORDS = [['left','right'],['next','previous'],['prev','next']];
    var INVERSE_CONTENT = /[<>\(\)\[\]\{\}]/g;
    var INVERSE_CONTENT_MAP = {'>':'<','<':'>','(':')',')':'(','[':']',']':'[','{':'}','}':'{'};
    var STRING_CONTENT = /^\s*(?:(?:"([^"]+)")|(?:'([^']+)'))\s*$/;
    function tryReplaceContentValue(value, cssText, cssRules){
        if(!value)
            return value;
        var match = STRING_CONTENT.exec(value);
        if(!match)
            return value;
        var inner = match[1] || match[2];
        if(isSafari || (inner.length > 1 && inner[0] != '\\')) {
            return value.replace(INVERSE_CONTENT,function(symbol){
                return INVERSE_CONTENT_MAP[symbol];
            });
        }
        if (!cssText) {
            return value;
        }
        var selectorText = cssText.split('{')[0].trim();
        var inverses = [];
        for(var i=0; i<INVERSE_WORDS.length; i++){
            var pair = INVERSE_WORDS[i];
            var inverseSelectorText = replaceLast(selectorText,[pair,[pair[1],pair[0]]]);
            if(inverseSelectorText != selectorText){
                if(inverseSelectorText in contentValueSelectorMap)
                    return contentValueSelectorMap[inverseSelectorText];
                inverses.push(inverseSelectorText);
            }
        }
        if(!cssRules)
            return value;

        for(i=0; i<inverses.length; i++){
            var inverse = inverses[i];
            var styleRule = $.grep(cssRules,function(rule){
                return rule.selectorText == inverse;
            })[0];
            if(!styleRule)
                continue;
            var content = styleRule.style.content;
            if(!content)
                continue;
            match =  STRING_CONTENT.exec(content);
            if(!match)
                continue;
            inner = match[1] || match[2];
            if(inner.length > 1 && inner[0] != '\\')
                continue;
            contentValueSelectorMap[selectorText] = value;
            contentValueSelectorMap[inverse] = content;
            return content;
        }
        return value;
    }

    var PERCENT_REGEX = /^[\-0-9.]+%/;
    var UNIT_REGEX = /^[\-0-9.]+(px|pt|cm|in|em|rem|vw|vh)/;

    function replaceValue(prop, value, cssText, cssRules){
        if(typeof(value) != 'string')
            return value;
        if(prop == 'direction'){
            if(value == 'ltr')
                return 'rtl';
            else if(value == 'rtl')
                return 'ltr';
            return value;
        }
        if(prop == 'margin' || prop == 'padding')
            return value.replace(MARGIN_PADDING_REGEX,'$1 $4 $3 $2');
        if(prop == 'border-radius')
            return value.replace(MARGIN_PADDING_REGEX,'$2 $1 $4 $3');
        if(prop == 'content')
            return tryReplaceContentValue(value, cssText, cssRules);
        // if(isSafari && prop == 'background-position-y' && value.indexOf('top') > -1)
        //     value = value.replace('top ','') || '0';
        if(!isSafari && flipBackgroundPosition && prop == 'background-position-x') {
            value = value.trim();
            if(PERCENT_REGEX.test(value)) {
                return (100 - Number(value.substr(0, value.length - 1))) + '%';
            } else if(UNIT_REGEX.test(value)) {
                return 'calc(100% - ' + value + ")";
            }
            //var parts = value.split(/\s+/);
            //if(parts.length == 1 && /[0-9]/.test(parts[0]) && !isSprite(cssText,cssRules))
            //    return 'calc(100% - ' + value + ')';
        }
        if(!isSafari && flipBackgroundPosition && prop == 'background-position') {
            value = value.trim();
            var axis = value.split(/\s+/);
            if(PERCENT_REGEX.test(value)){
                var x = axis[0];
                var y = axis[1] || axis[0];
                return (100 - Number(x.substr(0,x.length-1))) + '% ' + y;
            } else if(UNIT_REGEX.test(value)) {
                return 'calc(100% - ' + axis[0] + ") " + axis[1];
            }
            //if(parts.length <= 2 && /[0-9]/.test(parts[0]))
            //    return 'right ' + parts.join(' ');
        }


        if(prop == 'animation-name' || prop == 'animation'){
            var valueParts = value.split(/\s+/);
            var keyframeName = valueParts.shift();
            return [keyframeName + '-bablic-bidi'].concat(valueParts).join(' ');
        }
        if(TRANSFORM_ORIGIN.test(prop)){
            value = value.trim();
            var axis = value.split(/\s+/);
            if(PERCENT_REGEX.test(value) || parseFloat(axis[0]) === 0){
                var x = axis[0];
                axis[0] = (100 - parseFloat(x)) + '%';
                return axis.join(' ');
            }
        }
        else if(TRANSFORM.test(prop)){
            return value.replace(TRANSLATE,function(a0,translateType,negative, num){
                return 'translate' + (translateType || '') + '(' + (negative || num == '0' ? '' : '-') + num;
            }).replace(ROTATE,function(a0,translateType,negative, num){
                return 'rotate' + (translateType || '') + '(' + (negative || num == '0' ? '' : '-') + num;
            })
        }
        var urls = [];
        return value.replace(URL_REGEX,function(url){
            urls.push(url);
            return '__SAVE__';
        }).replace(LEFT_RIGHT_REGEX,function(a0){
            return a0 == 'left' ? 'right' : (a0 == 'Left' ? 'Right' : (a0 == 'Right' ? 'Left' : 'left'));
        }).replace(/__SAVE__/g,function(){
            return urls.shift();
        });
    }

    function getPropValueFromStyle(style, prop) {
        if (style._getProp) return style._getProp(prop);
        return style.getPropertyValue(prop);
    }
    function mirrorCSSDeclaration(style){
        var removes = [];
        var additions = {};
        for (var i = style.length-1; i >= 0; i--) {
            var prop = style[i];
            var value = getPropValueFromStyle(style, prop);
            var newProp = replaceProp(prop);
            var newValue = replaceValue(prop, value);
            if(prop != newProp) {
                removes.push(prop);
                var priority = style.getPropertyPriority(prop);
                additions[newProp] = [newValue,priority];
            }
            else if(newValue != value)
                style.setProperty(prop, newValue, style.getPropertyPriority(prop));
        }
        removes.forEach(function(attr){
            style.removeProperty(attr);
        });
        for(var prop in additions){
            style.setProperty(prop,additions[prop][0],additions[prop][1]);
        }
    }

    var DECONSTRUCTED_PROPS = {
        'background-repeat-y':['background-repeat-x','background-repeat'],
        'background-position-y':['background-position-x','background-position']
    };
    function getPropShorthand(prop) {
        if (prop.startsWith("border-") && !prop.includes("radius"))
            return "border";
        if (prop.startsWith("background-") && !prop.startsWith("background-position"))
            return "background";
        return null;
    }
    function duplicateCSSStyleToString(style, cssText, cssRules){
        var lines = [];
        var wasChanged = false;
        var ignore = {};
        for (var i = style.length-1; i >= 0; i--) {
            var prop = style[i];
            if(prop in ignore)
                continue;
            var value = getPropValueFromStyle(style, prop);
            var shortend = getPropShorthand(prop);
            if (!value && shortend && !ignore[shortend] && !cssText.includes(prop + ":")) {
                ignore[shortend] = true;
                prop = shortend;
                value = getPropValueFromStyle(style, shortend);
            }
            // safari split the style when reading, but doesn't support this when set it (go figure)
            if(isSafari && value != "unset" && value != "initial" && prop in DECONSTRUCTED_PROPS){
                var originProp = DECONSTRUCTED_PROPS[prop][1];
                var additionProp = DECONSTRUCTED_PROPS[prop][0];
                var additionValue = getPropValueFromStyle(style, additionProp);
                if(additionValue && additionValue != "unset" && additionValue != "initial") {
                    ignore[additionProp] = true;
                    prop = originProp;
                    value = value + ' ' + additionValue;
                }
            }
            var newProp = replaceProp(prop);
            var newValue = replaceValue(prop, value, cssText, cssRules);
            if(!wasChanged) {
                if(newValue != value || (isSafari && prop.indexOf('-') == -1 && value == 'initial'))
                    wasChanged = true;
                else if(newProp != prop){
                    if(getPropValueFromStyle(style, prop) != getPropValueFromStyle(style, newProp))
                        wasChanged = true;
                }
            }
            var priority = style.getPropertyPriority(prop) ? ' !important' : '';
            if(newProp == 'content' && newValue.length == 1){
                var char = newValue.charCodeAt(0);
                if(char > 255){
                    newValue = '\\' + char.toString(16);
                    if(isSafari) {
                        newValue = '"' + newValue + '"';
                        wasChanged = true;
                    }
                }
            }
            lines.push(newProp + ':' + newValue + priority + ';');
        }
        if(!wasChanged)
            return null;
        return lines.join(' ');
    }

    function restoreStyleSheet(styleSheet){
        var lines = [];
        try {
            for (var i = 0; i < styleSheet.cssRules.length; i++) {
                var rule = styleSheet.cssRules[i];
                var type = rule.type;
                switch (type) {
                    // STYLE
                    case 1:
                        if (rule.selectorText.indexOf(':not([data-x-bidi]') > -1)
                            break;
                        var cleaned = rule.selectorText
                            .replace(/\s:not\(\.bab\-s\)/g, ' *').replace(/\s\[data\-x\-bidi\]/g, ' *')
                            .replace(/:not\(\.bab\-s\)/g, '').replace(/\[data\-x\-bidi\]/g, '')
                            .split(/\s*,\s*/)
                            .map(function(selector){
                                return selector || '*';
                            })
                            .join(',');
                        lines.push(cleaned + '{' + getOnlyStyleCSS(rule) + '}');
                        break;
                    // MEDIA
                    case 4:
                        var mediaText = rule.conditionText || (rule.media ? rule.media.mediaText : '');
                        if (!mediaText)
                            return getRuleCSS(rule);
                        lines.push('@media ' + mediaText + '{' + restoreStyleSheet(rule) + '}');
                        break;
                    // SUPPORTS
                    case 12:
                        lines.push('@supports ' + rule.conditionText + '{' + restoreStyleSheet(rule) + '}');
                        break;
                    // DOCUMENT
                    case 13:
                        lines.push('@document ' + rule.conditionText + '{' + restoreStyleSheet(rule) + '}');
                        break;
                    // KEYFRAMES
                    case 7:
                        var name = rule.name;
                        if (name.indexOf('-bablic-bidi') > -1)
                            break;

                    default:
                        lines.push(getRuleCSS(rule));
                        break;
                }
            }
        }
        catch(e){bablic.error(e);}
        return lines.join('\n');
    }

    function getRuleCSS(rule){
        try {
            return rule.cssText || (rule.getCssText ? rule.getCssText() : '');
        }
        catch(e){
            switch(rule.type){
                case 7:
                    return '@keyframes ' + rule.name + '{' + $.map(rule.cssRules,function(rule){ return rule.keyText + ' {' + rule.style.cssText + '}'}) + '}';
                case 8:
                    return rule.keyText + ' ' + '{' + rule.style.cssText + '}';
            }
        }
    }

    var INNER_CSS_REGEX = /\{(.+)\}/;
    function getOnlyStyleCSS(rule){
        if(isSafari) {
            var hasInitial = false;
            var hasContent = false;
            for(var i=0; i<rule.style.length; i++){
                var prop = rule.style[i];
                if(getPropValueFromStyle(rule.style, prop) == 'initial' && prop.indexOf('-') == -1)
                    hasInitial = true;
                if(prop == 'content')
                    hasContent = true;
                if(hasInitial && hasContent)
                    break;
            }
            if(hasInitial || hasContent){
                var lines = [];
                for(i=0; i<rule.style.length; i++){
                    var prop = rule.style[i];
                    var priority = rule.style.getPropertyPriority(prop) ? ' !important' : '';
                    var value = getPropValueFromStyle(rule.style, prop);
                    if(prop == 'content' && value.length == 1){
                        if(value.charCodeAt(0) > 255)
                            value = '"\\' + value.charCodeAt(0).toString(16) + '"';
                        else
                            value = '"' + value + '"';
                    }
                    lines.push(prop + ':' + value + priority + ' ;');
                }
                return lines.join('\n');
            }
        }
        var css = getRuleCSS(rule);
        var match = INNER_CSS_REGEX.exec(css);
        if(!match)
            return '';
        return match[1];
    }

    function mirrorStyleSheet(styleSheet){
        if(!styleSheet.cssRules)
            return '';
        var lines = [];
        try {
            for (var i = 0; i < styleSheet.cssRules.length; i++) {
                var rule = styleSheet.cssRules[i];
                var type = rule.type;
                switch (type) {
                    // STYLE
                    case 1:
                        var translatedCSS = duplicateCSSStyleToString(rule.style, rule.cssText, styleSheet.cssRules);
                        var selectors = $.grep(rule.selectorText.split(',').map(function (s) {
                            return s.trim();
                        }),function (s) {
                            return s;
                        });
                        var excludedSelectors = [];
                        var includedSelectors = [];
                        var allSelectors = [];
                        selectors.forEach(function (s) {
                            // split selector to ancestor parts
                            var parts = $.grep(s.split(/\s+/),function (p) {
                                return p;
                            });
                            // take out lowest child
                            var lastPart = parts.pop();
                            var mem = [];
                            // get pseudo part of child
                            var pseudoParts = lastPart.replace(/\[.*?\]/g,function(attr){
                                var quotes = [];
                                mem.push(attr.replace(/"[^"]"/g,function(quote){
                                    quotes.push(quote);
                                    return '__QUOTE__';
                                }).replace(/\\?:/g,'\\:').replace('__QUOTE__',function(){
                                    return quotes.shift() || '""';
                                }));
                                return '__ATTR__';
                            }).replace(/\\:/g, '__P__').split(':').map(function(part) {
                                return part.replace(/__ATTR__/g, function () {
                                    return mem.shift() || '';
                                }).replace(/__P__/g, '\\:');
                            });
                            // take out the actual element selector from the begining
                            var elementSelector = pseudoParts.shift();
                            if (!translatedCSS) {
                                var lastPartAll = [elementSelector + ':not(.bab-s)'].concat(pseudoParts).join(':');
                                allSelectors.push([].concat(parts, [lastPartAll]).join(' '));
                                return;
                            }
                            var lastPartExcluded = [elementSelector + '[data-x-bidi]'].concat(pseudoParts).join(':');
                            excludedSelectors.push([].concat(parts, [lastPartExcluded]).join(' '));
                            var lastPartIncluded = [elementSelector + ':not([data-x-bidi])'].concat(pseudoParts).join(':');
                            includedSelectors.push([].concat(parts, [lastPartIncluded]).join(' '));
                        });
                        if (!translatedCSS) {
                            lines.push(allSelectors.join(',') + '{' + getOnlyStyleCSS(rule) + '}');
                            break;
                        }
                        lines.push(excludedSelectors.join(',') + '{' + getOnlyStyleCSS(rule) + '}');
                        lines.push(includedSelectors.join(',') + '{' + translatedCSS + '}');
                        break;
                    // IMPORT
                    case 3:
                        var sheet = rule.sheet || rule.styleSheet;
                        var hasRules = false;
                        try{
                            hasRules = sheet.cssRules;
                        }
                        catch(e){}
                        if(IGNORE_CSS.test(rule.href) || !hasRules){
                            lines.push(rule.cssText);
                            break;
                        }
                        var replaceURLs = createURLFixes(rule.href);
                        var mirroredCSS = replaceURLs(mirrorStyleSheet(sheet));
                        if (rule.media && rule.media.mediaText) {
                            lines.push('@media ' + rule.media.mediaText + '{' + mirroredCSS + '}');
                            break;
                        }
                        lines.push(mirroredCSS);
                        break;
                    // MEDIA
                    case 4:
                        var mediaText = rule.conditionText || (rule.media ? rule.media.mediaText : '');
                        if (!mediaText)
                            return getRuleCSS(rule);
                        lines.push('@media ' + mediaText + '{' + mirrorStyleSheet(rule) + '}');
                        break;
                    // SUPPORTS
                    case 12:
                        lines.push('@supports ' + rule.conditionText + '{' + mirrorStyleSheet(rule) + '}');
                        break;
                    // DOCUMENT
                    case 13:
                        lines.push('@document ' + rule.conditionText + '{' + mirrorStyleSheet(rule) + '}');
                        break;
                    // KEYFRAMES
                    case 7:
                        var name = rule.name;
                        var changed = false;
                        lines.push(getRuleCSS(rule));
                        var newKeyframes = Array.prototype.map.call(rule.cssRules, function (rule) {
                            var translatedStyle = duplicateCSSStyleToString(rule.style);
                            if (!translatedStyle)
                                return getRuleCSS(rule);
                            changed = true;
                            return rule.keyText + ' ' + '{' + duplicateCSSStyleToString(rule.style) + '}';
                        }).join(' ');
                        lines.push('@keyframes ' + name + '-bablic-bidi{' + newKeyframes + '}');
                        break;
                    default:
                        lines.push(getRuleCSS(rule));
                        break;
                }
            }
        }
        catch(e){ bablic.error(e);}
        return lines.join('\n');
    }

    function setInnerHTML(element, css){
        bablic.setMutationListen(false);
        try{
            element.innerHTML = css;
        }
        catch(e){
            // try with text nodes
            var node = DOC.createTextNode();
            setNodeValue(node, css);
//             node.nodeValue = css;
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            element.appendChild(node);
        }
        bablic.setMutationListen(true);
    }


    Bidi.restoreStyleSheet = restoreStyleSheet;
})();
;
var detectBrowserLocale, pageUri, normalizedCurrentPath, normalizeSomePath, doesSupportAjaxReplace, LocaleSettings,WidgetSettings, bablicDTO, getCurrentOtherDomain;
var isBot;
var explicitPage = bablic.page;
var _d1 = "defaul";
var _s1 = "switc";
var myDiv;
function parseURL(url) {
    myDiv = myDiv || DOC.createElement('div');
    var div = myDiv;
    div.innerHTML = "<a></a>";
    div.firstChild.href = url; // Ensures that the href is properly escaped
    div.innerHTML = div.innerHTML; // Run the current innerHTML back through the parser
    var a = div.firstChild;
    return {
        protocol:a.protocol || LOC.protocol,
        href: a.href,
        pathname: a.pathname[0] == '/' ? a.pathname : '/' + a.pathname,
        hostname: a.hostname || LOC.hostname,
        query: a.search || '',
        search:a.search || '',
        hash: a.hash || ''
    };
}

function escapeRegex(str) {
    return (str+'').replace(/([.*?+^$[\]\\/(){}|-])/g, "\\$1");
}
function getFolder(locale,folders){
    for(var folder in folders){
        if(folders[folder] == locale)
            return folder;
    }
    locale = locale.split("_")[0];
    for(var folder in folders){
        var folderLocale = folders[folder].split("_")[0];
        if(folderLocale == locale)
            return folder;
    }
    return locale;
}

(function (bablic) {
    var DEFAULT = _d1 + "t";
    var SWITCH = _s1 + "h";
// Bablic Globals
    bablic.version = 3.9;

    var IGNORE = /^\/wp\-(login|admin)/i;
// Help Functions
    bablic.getLocale = function () {
        return bablic.locale;
    };

    isBot = function(){
        return navigator && navigator.userAgent && /bot|crawler|yandex|bing|baidu|spider|facebook|twitter|80legs|google|seo|search/i.test(navigator.userAgent);
    };

    bablic.detectLocale = function (conf,options) {
        conf = conf || LDATA || bablic.conf;
        options = options || {};
        var data = conf || bablic.data || {};
        var localeDetection = PROXY ? 'subdomain' : (bablic.localeURL || data.localeDetection);

        if (!localeDetection && bablic.previewMode){
            localeDetection = "querystring";
        }

        if (!localeDetection)
            return null;
        var uri = 'http://' + pageUri();
        var parsed = parseURL(uri);

        var localeConfigs = bablic.customUrls || data.customUrls || {};
        if (conf && !bablic.customUrls) {
            for (var i = 0; i < conf.locales.length; i++) {
                localeConfigs[conf.locales[i].key] = conf.locales[i].url;
            }
        }
        var localeKeys = (conf && conf.locales && $.map(conf.locales,function(locale){
                return locale.key;
            })) || data.localeKeys;
        var orig = data.orig || data.original || bablic.original;
        localeKeys && localeKeys.push(orig);
        var localeByBrowser = null;
        if(data.autoDetect !== false && !options.bare && !nonBlocking) {
            if(localeKeys && !isBot()) {
                var browserLocales = detectBrowserLocale(true);
                for (var i = 0; i < browserLocales.length; i++) {
                    if(localeKeys.indexOf(browserLocales[i]) > -1) {
                        localeByBrowser = browserLocales[i];
                        break;
                    }
                    var sameLngLocales = $.grep(browserLocales, function(locale) {
                        if(locale[0] != browserLocales[i][0] || locale[1] != browserLocales[i][1])
                            return false;
                        return localeKeys.indexOf(locale) > -1;
                    });
                    if(sameLngLocales.length) {
                        localeByBrowser = sameLngLocales[0];
                        break;
                    }
                    for (var j = 0; j < localeKeys.length; j++) {
                        if (localeKeys[j][0] == browserLocales[i][0] && localeKeys[j][1] == browserLocales[i][1]) {
                            localeByBrowser = localeKeys[j];
                            break;
                        }
                    }
                    if(localeByBrowser)
                        break;
                }
            }
        }
        var cookieLocale = bablic.locale;

        var wixCookie = bablic.cookie && bablic.cookie.getCookie("wixLanguage");
        if (localeDetection == 'custom' && wixCookie && wixCookie != cookieLocale){
            cookieLocale = wixCookie;
        }

        var detectedLocale =
            options.bare ? getLocaleByURL(parsed, localeDetection, localeConfigs) :
            getLocaleByURL(parsed, localeDetection, localeConfigs,bablic.locale, data[DEFAULT] || orig, localeByBrowser, bablic.proxy,bablic.explicitLocale,bablic.subDirBase,bablic.folders,localeKeys, originalLocale,null,bablic.ignoreQs);
        // if selected language is not supported, try to match to a different language that on that family
        if(localeKeys && localeKeys.indexOf(detectedLocale) == -1 && !PROXY){
            for(var i=0; i<localeKeys.length; i++){
                if(localeKeys[i][0] == detectedLocale[0] && localeKeys[i][1] == detectedLocale[1]){
                    detectedLocale = localeKeys[i];
                    break;
                }
            }
        }

        // if selected language is hidden by API, revert to original language
        if((!LDATA || !LDATA.edit) && LocaleSettings[detectedLocale] && LocaleSettings[detectedLocale].hidden) {
            return findFallbackLocale();
        }
        // if language selected is original,
        if(!LDATA && !bablic.preview && options && options.initial && !nonBlocking && detectedLocale == orig && localeDetection == 'custom'){
            // #language has means that user redirected to original language (because cookie is not shared between domains, this is the way we communicate this)
            if(location.hash == '#language') {
                // original language was chosen explicitly, no need to override it
                if (WIN.history && WIN.history.replaceState)
                    WIN.history.replaceState(null, null, location.pathname + (location.search || ''));
                else
                    location.hash = '';
            }
            // go back to the chosen language from the cookie, if exists.
            else if(cookieLocale && cookieLocale != detectedLocale && localeConfigs[cookieLocale]){
                if(performRedirect(bablic.getLink(cookieLocale)))
                    return 0;
            }
            // if no cookie, this is the initial visit of the website, and we do redirects based on the detected locale
            else if(!cookieLocale){
                // if detected locale has domain, redirect to that domain
                if(data.autoDetect !== false && localeByBrowser && localeByBrowser != detectedLocale && localeConfigs[localeByBrowser]) {
                    if(performRedirect(bablic.getLink(localeByBrowser)))
                        return 0;
                }
                // if detected locale is not part of this website languages, and we have default locale which is not the original locale, redirect to the default locale
                else if(!localeByBrowser && detectedLocale == orig && data[DEFAULT] && data[DEFAULT] != orig && localeConfigs[data[DEFAULT]]){
                    if(performRedirect(bablic.getLink(data[DEFAULT])))
                        return 0;
                }
            }
        }

        return detectedLocale;
    };

    detectBrowserLocale = function (multiple) {
        if(multiple) {
            if(WIN.navigator.languages && WIN.navigator.languages[0])
                return WIN.navigator.languages;
            return [detectBrowserLocale()];
        }
        var language = WIN.navigator.userLanguage || WIN.navigator.language || (WIN.navigator.languages && WIN.navigator.languages[0]);
        if (!language)
            return null;
        return language.replace('-','_').toLowerCase();
    };


    getCurrentOtherDomain = function(host){
        if(typeof(getOtherDomain) == 'undefined')
            return '';
        var data = (LDATA && LDATA.domains && LDATA) || bablic.conf || bablic.data || {};
        var mountSubs = data.domains;
        var currentDomain = host || LOC.hostname;
        if(WIN.BABLIC_RESTORE)
            currentDomain = BABLIC_RESTORE(currentDomain);
        else if(WIN.BABLIC_R)
            currentDomain = currentDomain.replace(BABLIC_R, BABLIC_V);
        return getOtherDomain(currentDomain, mountSubs);
    }



// get page uri as should be passed to bablic server
    pageUri = function (noDomain) {
        var page = LOC.pathname + LOC.search + LOC.hash;
        page = generateOriginalPath(page, bablic.locale) || page;
        return (noDomain ? '' : (LOC.hostname + LOC.port)) + (explicitPage || page);
    };

    normalizedCurrentPath = function (isAsync) {
        if(explicitPage)
            return explicitPage;
        var conf = LDATA || bablic.conf;
        var data = bablic.data || LDATA || bablic.conf || {};
        var localeKeys = (conf && conf.locales && $.map(conf.locales,function(locale){
            return locale.key;
        })) || data.localeKeys;
        if (!localeKeys)
            return pageUri(true) + (isAsync ? '__async__' : '');
        var subPrefix = getCurrentOtherDomain();
        subPrefix = subPrefix ? '@' + subPrefix.toLowerCase().replace(/[.@]/g,'-') + '@' : '';

        var previewUrl;
        if (data.previewUrl){
            var parsed = parseURL(data.previewUrl);
            previewUrl = parsed.pathname;
        }

        return subPrefix + normalizePath(pageUri(true), bablic.localeURL || data.localeDetection, data.includeQueryString, data.includeHash, data.singlePageApp, localeKeys,data.qsParams,data.domain,bablic.subDirBase,bablic.folders, null, previewUrl) + (isAsync ? '__async__' : '');
    };

    normalizeSomePath = function(path){
        var data = bablic.data || LDATA || bablic.conf || {};
        var conf = LDATA || bablic.conf;
        var localeKeys = (conf && conf.locales && $.map(conf.locales,function(locale){
            return locale.key;
        })) || data.localeKeys;
        if (!localeKeys)
            return path;
        return normalizePath(path, bablic.localeURL || data.localeDetection, data.includeQueryString, data.includeHash, data.singlePageApp, localeKeys,data.qsParams,data.domain,bablic.subDirBase,bablic.folders, true);
    };

    bablic.getCurrentOtherDomain = getCurrentOtherDomain;
    bablic.useLocalDB = typeof(bablic.useLocalDB) == 'boolean' ? bablic.useLocalDB : false;

    bablic.mutation_listen_off = 0; // supresses mutation listeing if greater than 0

    bablic.setMutationListen = function (listen) {
        if (listen && bablic.mutation_listen_off === 1)
            turnObserverOn && turnObserverOn();
        else if(!listen && bablic.mutation_listen_off === 0)
            turnObserverOff && turnObserverOff();
        bablic.mutation_listen_off += listen ? -1 : 1;
    };

    bablic.suppress = function (func) {
        bablic.setMutationListen(false);
        func();
        bablic.setMutationListen(true);
    };

    bablic.translateAttribute = function(attr,val){
        translateAttr(attr, val);
    };


    var SUB_DIR = /^(\/(\w\w?\w(_\w\w)?))(?:\/|$)/;


    function generateTranslatedLink(url, locale, options, meta) {
        var parsed = parseURL(url);
        options = options || {};
        var protocol = parsed.protocol || '';
        var hostname = parsed.hostname;
        var pathname = parsed.pathname || '/';
        if(bablic.locale !== locale) {
            pathname = generateOriginalPath(pathname, bablic.locale) || pathname;
            pathname = generateTranslatedPath(pathname, locale) || pathname;
        }
        var search = parsed.search || '';
        var hash = parsed.hash || '';
        var returnFull = options.returnFull && !!hostname;
        if (!returnFull && (hostname !== LOC.hostname || protocol !== LOC.protocol)) {
            returnFull = true;
        }
        var localeDetection = meta.localeDetection;
        var original = meta.original;
        if (options.subDir)
            localeDetection = 'subdir';
        if (localeDetection == 'custom' && !(meta.customUrls && meta.customUrls[locale]))
            localeDetection = 'querystring';
        switch (localeDetection) {
            case 'custom':
                var customUrl = meta.customUrls[locale];

                if (customUrl){
                    if (/[?&]locale=([^&]+)/.test(search)) {
                        search = search.replace(/([?&]locale=)([^&]+)/, '');
                    }
                }

                var confDomain = customUrl.indexOf('/') > -1 ? customUrl.substr(0, customUrl.indexOf('/')) : customUrl;
                if(!returnFull && meta.original == locale && !isBot()) {
                    hash = '#language';
                }
                return protocol + '//' + confDomain + pathname + search + hash;

            case 'querystring':
                if (/[?&]locale=([^&/]+)/.test(search))
                    search = search.replace(/([?&]locale=)([^&/]+)/, '$1' + locale);
                else {
                    if (search)
                        search = search + '&locale=' + locale;
                    else
                        search = '?locale=' + locale;
                }
                if (returnFull)
                    return protocol + '//' + hostname + pathname + search + hash;
                return pathname + search + hash;
            case 'subdir':
                var locales = options.folders ? Object.keys(options.folders) : meta.localeKeys;
                // remove sub dir base and locales, if any exists
                var regex = RegExp('^(?:' + escapeRegex(options.subDirBase || '') + ')?(\\/(?:' + locales.join('|') + '))*(?:\\/|$)');
                var match = regex.exec(pathname);
                if (match)
                    pathname = pathname.replace(match[0], '/');

                var prefix = '';
                if (options.folders)
                    prefix = '/' + getFolder(locale, options.folders);
                else if (locale != original && (!options.ignoreSub || options.ignoreSub.indexOf(pathname.toLowerCase()) == -1) && !IGNORE.test(pathname))
                    prefix = '/' + locale;
                if (options.subDirBase && (!options.subDirOptional || locale != original))
                    prefix = options.subDirBase + prefix;
                if (returnFull)
                    return protocol + '//' + hostname + prefix + pathname + search + hash;
                return prefix + pathname + search + hash;
            case 'hash':
                if (returnFull)
                    return protocol + '//' + hostname + pathname + search + '#locale=' + locale;
                return '#locale_' + locale;
        }
        return 'javascript:bablic.setLanguage("' + locale + '");';
    }

    bablic.getLink = function (locale, current_host, current_href, _1, localeConf, _3,_4,_5, returnFull) {

        var conf = LDATA || bablic.conf;
        var data = conf || bablic.data || {};
        var original = data.original || data.orig || bablic.original;
        var subDirBase = bablic.subDirBase;
        var subDirOptional = bablic.subDirOptional;
        var localeDetection = bablic.localeURL || (conf && conf.localeDetection) || (bablic.data && bablic.data.localeDetection);
        // for Visual Editor
        if(localeDetection === 'subdomain') {
            var separator = conf && conf.edit ? '_' : '.';
            var separatorRegex = conf && conf.edit ? '_' : '\\.';
            var matches = RegExp('(www' + separatorRegex + ')?(?:(?:\\w\\w?\\w(?:_\\w\\w)?)' + separatorRegex + ')?(.+?)$').exec(current_host || LOC.host);
            var host = (localeConf && localeConf.www ? 'www' + separator : '') + ((localeConf && localeConf.s && localeConf.s + separator) || (locale == original ? '' : locale + separator))
                + matches[2];
            return (current_href || LOC.href).replace(current_host || LOC.host, host);
        }
        var localeKeys = (conf && conf.locales && $.map(conf.locales,function(locale){
            return locale.key;
        })) || data.localeKeys;
        var meta = {
            original: original,
            localeDetection: localeDetection,
            localeKeys: localeKeys || [],
        };
        if (localeDetection == 'custom') {
            if (bablic.customUrls && bablic.customUrls[locale]) {
                meta.customUrls = bablic.customUrls;
            } else {
                meta.customUrls = {};
                var localeData;
                if (data.locales) {
                    localeData = $.grep(data.locales, function (localeConf) {
                        return localeConf.key == locale;
                    })[0];
                }
                if (localeData) {
                    // means this domain wasnt defined , therefore it works using querystring with original url
                    if (!localeData.url){
                        var originalLocale = $.grep(data.locales, function (localeConf) {
                            return localeConf.key == original;
                        })[0];
                        var currentUrl = parseURL(current_href || LOC.href);

                        var protocol = currentUrl.protocol || 'https';
                        var pathname = currentUrl.pathname || '/';
                        var search = currentUrl.search || '';
                        var hash = currentUrl.hash || '';

                        var hostname = originalLocale.url.indexOf('/') > -1 ? originalLocale.url.substr(0, originalLocale.url.indexOf('/')) : originalLocale.url;

                        current_href = protocol + "//" + hostname  + pathname + search + hash;
                    }else{
                        meta.customUrls[locale] = localeData.url;
                    }
                } else if (data.customUrls){
                    meta.customUrls[locale] = data.customUrls[locale];
                }
            }
        }

        return generateTranslatedLink(current_href || LOC.href, locale, {
            returnFull: returnFull,
            subDirBase: subDirBase,
            subDirOptional: subDirOptional,
            subDir: localeDetection === 'subdir',
            folders: bablic.folders,
            ignoreSub: bablic.ignoreSub,
        }, meta);
    };


    function getElementsOrSelector(elementsOrSelector) {
        if(!document.querySelectorAll || bablic.preview)
            return [];
        var allElements;
        if(typeof(elementsOrSelector) == 'string')
            allElements = Array.prototype.slice.apply(document.querySelectorAll(elementsOrSelector + ',' + elementsOrSelector + ' *'));
        else {
            if(!elementsOrSelector.length)
                elementsOrSelector = [elementsOrSelector];
            allElements = [];
            for(var i=0; i<elementsOrSelector.length; i++){
                allElements.push(elementsOrSelector[i]);
                Array.prototype.push.apply(allElements,elementsOrSelector[i].querySelectorAll('*'));
            }
        }
        return allElements;
    }

    function processSavedNodes(elementsOrSelector,shouldProcess){
        if(!document.querySelectorAll || bablic.preview)
            return;
        var allElements = getElementsOrSelector(elementsOrSelector);
        var filteredElements = [];

        for(var i=0; i<allElements.length; i++){
            if(!shouldProcess && !allElements[i]._babIg) {
                allElements[i]._babIg = true;
                filteredElements.push(allElements[i]);
            }
            else if(shouldProcess && allElements[i]._babIg) {
                delete allElements[i]._babIg;
                filteredElements.push(allElements[i]);
            }
        }
        if(!filteredElements.length || !LDATA || !LDATA.content || !savedContentNodes)
            return;

        bablic.setMutationListen(false);
        for (var i = 0; i < savedContentNodes.length; i++) {
            var node = savedContentNodes[i].node;
            var element = savedContentNodes[i].element;
            //if (savedContentNodes[i].engine == Engines['5'])
            //    continue;
            if(filteredElements.indexOf(element) == -1)
                continue;
            if (!shouldProcess) {
                savedContentNodes[i].restore(node, element);
                continue;
            }
            if(locked)
                continue;
            var translated = LDATA.content[savedContentNodes[i].hash];
            if (translated && translated != '__empty__')
                savedContentNodes[i].replace(node, element, translated);
        }
        for(var i=0; i<watchedElements.length; i++){
            try{
                watchedElements[i]._babLis();
            }
            catch(ex){bablic.error(ex);}
        }
        bablic.setMutationListen(true);
    }

    function handleWix() {
        // if wix site
        if (WIN.wixBiSession) {
            if (WIN.boltInstance && WIN.boltInstance.setResizeCounter) {
                var randomCounter = Math.floor(Math.random() * 200000) + 1;
                WIN.boltInstance.setResizeCounter(randomCounter);
            } else if (WIN.rendered && WIN.rendered._requestRelayout){
                WIN.rendered._requestRelayout();
            } else {
                WIN.$(WIN).resize();
            }
        }
    }

    var locked = false, changeRev = 0;
    function switchLocaleAjax(locale, link,shouldTraverse) {

        if(locale == bablic.locale)
            return;
        if(locked)
            return;
        delete bablic.explicitLocale;
        link = link || bablic.getLink(locale);
        var getLDATA = function (cbk) {
            if (locale in localeLDATAs) {
                LDATA = localeLDATAs[locale];
                if(LDATA.content) {
                    bablic.locale = locale;
                    underlineLocale = locale;
                    siteConfReceived(LDATA);
                    triggerEvent('locale', [locale]);
                    return cbk();
                }
            }

            LDATA = $.extend({}, LDATA,{content:{}});
            bablic.locale = locale;
            underlineLocale = locale;
            locked = true;
            var rev = ++fetchRevision;
            fetchSequence(rev,function (err, stats, translations) {
                locked = false;
                if(rev != fetchRevision)
                    return;
                if (translations)
                    translationReceived(translations, true);
                cbk(err);
                ping({
                    shouldHide:false,
                    stats:stats,
                    detectedLocale:bablic.detectedLocale,
                    path:normalizedCurrentPath()});
            });
        };
        var previousLocale = targetLocale;
        var wasOrig = !bablic._processed;
        var isOrig = locale == bablic.original;
        if(link.indexOf('javascript:') == -1 && !bablic.noReplaceState) {
            var parsed = parseURL(link);
            if (bablic.replaceState)
                bablic.replaceState(null, null, parsed.pathname + (parsed.query || '') + (parsed.hash || ''));
            else
                history.replaceState(null, null, parsed.pathname + (parsed.query || '') + (parsed.hash || ''));
        }
        getLDATA(function () {
            //updateBablicHead();
            //initEngines();
            if (wasOrig) {
                var keepSavedContents = savedContentNodes;
                savedContentNodes = [];
                runHeadEngines(true);
                bablic._processed = true;
                domTraverse($.byTag('html').get(0), bablic.UseInclude);
                mergeContentNodes(keepSavedContents);
                triggerEvent('translated',[bablicDTO()]);
                handleWix();
                return;
            }
            if (!savedContentNodes)
                return bablic.error('Error on ajax navigate');

            // use this revision to make sure no node is replaced and later restored (because a node can have more then 1 savedContentNodes)
            bablic.setMutationListen(false);
            var _changeRev = changeRev++;
            for (var i = 0; i < savedContentNodes.length; i++) {
                var currentNode = savedContentNodes[i];
                var node = currentNode.node;
                var element = currentNode.element;
                //if (savedContentNodes[i].engine == Engines['5'])
                //    continue;
                if (isOrig || element._babIg || (currentNode.engine.index != 2 && !LDATA.engines[currentNode.engine.index])) {
                    currentNode.restore(node, element);
                    continue;
                }



                var translated = LDATA.content[currentNode.hash];
                var isTranslated = typeof(translated) == "string" && translated != '__empty__';
                if (isTranslated || currentNode.hash.length <= 3) {
                    currentNode.replace(node, element, isTranslated ? translated : currentNode.content, previousLocale);
                    node._b_rev = _changeRev;
                }
                else if (node._b_rev != _changeRev)
                    currentNode.restore(node, element);
            }


            if(shouldTraverse){
                var keepSavedContents = savedContentNodes;
                savedContentNodes = [];
                runHeadEngines(true);
                _forceTraverse = true;
                domTraverse($.byTag('html').get(0), bablic.UseInclude);
                _forceTraverse = false;
                mergeContentNodes(keepSavedContents);
            }
            for(var i=0; i<watchedElements.length; i++){
                try{
                    watchedElements[i]._babLis();
                }
                catch(ex){bablic.error(ex);}
            }
            bablic.setMutationListen(true);
            triggerEvent('translated',[bablicDTO()]);

            handleWix();

            if ((LDATA.fallback && !LDATA.edit))
                send_ldata_report(true);
        });
    }

    doesSupportAjaxReplace = function (force) {
        return WIN.history && WIN.history.replaceState && IS_PROPERTIES_SUPPORTED && LDATA && (LDATA.ajaxWidget || force) && !LDATA.edit && (force || (LDATA.localeDetection != 'subdomain' && LDATA.localeDetection != 'custom' && LDATA.localeDetection != 'tld'));
    };

    bablic.setLanguage = bablic.redirectTo = function (locale,options,e) {
        if(options && options instanceof Event) {
            e = options;
            options = null;
        }
        var retValue = e ? false : void(0);
        if(bablic._locked)
            return retValue;
        var engineCount = targetLocale && targetLocale.engines.length;
        var localeConf = locales &&  $.grep(locales,function(l){
                return l.key == locale;
            })[0];
        targetLocale = localeConf;
        if(!targetLocale){
            targetLocale = locales &&  $.grep(locales,function(l){
                return l.key[0] == locale[0] && l.key[1] == locale[1];
            })[0];
            if(targetLocale)
                locale = targetLocale.key;
            if(!targetLocale)
                targetLocale = locales &&  $.grep(locales,function(l){
                    if(!l.iso)
                        return;
                    var country = l.iso.split('-')[1];
                    if(!country)
                        return;
                    return country.toLowerCase() == locale;
                })[0];
            if(targetLocale)
                locale = targetLocale.key;
        }

        if(WIN.omg && WIN.omg.EditorSite) {
            try{
                EDITOR.switchLocale(locale);
                return retValue;
            }
            catch(e){
                // probably using the extension
            }
        }
        if((!LDATA || !LDATA.edit) && bablic.languages.get(locale).hidden) {
            console.log('language is hidden');
            return retValue;
        }
        if(!LDATA && bablic.locale === locale)
            return retValue;
        options = options || {};
        var forceRedirect = options.forceRedirect || bablic.forceRefresh;
        if (locale != bablic.locale) {
            var proceed = triggerEvent('beforeLocaleChange', [locale]);
            if (proceed === false)
                return retValue;
        }
        LocalDB.setSync('locale', locale,true);
        LocalDB.setSync('explicit', locale, true);
        var needTraverse = (targetLocale && targetLocale.engines.length) > engineCount;
        var link = bablic.getLink(locale);
        if(e && e.target && e.target.href && (e.shiftKey || e.ctrlKey || e.altKey)) {
            var fullHref = $('<a href="' + link + '" />').get(0).href;
            if(fullHref == e.target.href)
                return true;
        }
        if (!forceRedirect && doesSupportAjaxReplace() && targetLocale) {
            switchLocaleAjax(locale, link,needTraverse);
            return retValue;
        }

        if (options.addPreviewHash){
            var currentUrl = parseURL(link);
            link = currentUrl.protocol + "//" + currentUrl.hostname  + currentUrl.pathname + currentUrl.search + "#previewMode";
        }

        LOC.href = link;
        bablic.locale = locale;
        underlineLocale = locale;
        return retValue;
    };

    bablic.widget = {
        get:function(){
            return WidgetSettings || bablic.widgetConf || {};
        },
        update:function(conf){
            WidgetSettings = conf;
            bablic.showFlags();
            return this;
        },
        hide:function(){
            var conf =  this.get();
            conf.show=false;
            return this.update(conf);
        },
        show:function(){
            var conf =  this.get();
            conf.show=true;
            return this.update(conf);
        },
        element:function(){
            return $('#bablicFlagsWidget').get(0);
        },
        expand:function(){
            var element= this.element();
            if(element && element.contentWindow && element.contentWindow.expand)
                element.contentWindow.expand();
            return this;
        },
        collapse:function(){
            var element= this.element();
            if(element && element.contentWindow && element.contentWindow.collapse)
                element.contentWindow.collapse();
            return this;
        },
        _switch:function(elementOrSelector,options, dontTryAgain){
            var $ui = $(elementOrSelector);
            if(!$ui.length() && !dontTryAgain) {
                if(typeof(elementOrSelector) == 'string') {
                    bablic.selector(elementOrSelector).exclude();
                    onReady(function () {
                        bablic.widget[SWITCH](elementOrSelector, options, true);
                    });
                }
                return this;
            }
            $ui.attr('bablic-exclude',true);
            var $links = $ui.filter('a');
            var alt;
            $ui.off('click').on('click',function(e){
                if(!alt) {
                    onLocaleChanged(bablic.getLocale());
                    if(!alt)
                        return;
                    return;
                }
                if((this.tagName || "").toUpperCase() == 'A') {
                    if (e.ctrlKey || e.shiftKey || e.altKey)
                        return true;
                    e.preventDefault();
                }
                bablic.redirectTo(alt.key);
            });
            var onLocaleChanged = function(locale){
                var conf = bablic.languages.get();
                alt = $.grep(conf,function(c) {
                    return (!c.hidden || (LDATA && LDATA.edit)) && c.key != locale;
                })[0];
                if(!alt)
                    return;
                $ui.text(options && options.fullName ? alt.name : alt.name.split("_")[0].toUpperCase());
                $links.attr('href',bablic.getLink(alt.key));
            };

            bablic.on('locale',onLocaleChanged);
        },
        done:function(){
            return bablic;
        }
    };
    bablic.widget[SWITCH] = bablic.widget._switch;

    bablic._sels = {};
    bablic.element = function(elmArrayOrSelector){
        return {
            translate:function(){
                processSavedNodes(elmArrayOrSelector,true);
                return this;
            },
            restore:function(){
                processSavedNodes(elmArrayOrSelector,false);
                return this;
            },
            overrideGetter:function() {
                var desc = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML");
                bablic.setMutationListen(false);
                processSavedNodes(elmArrayOrSelector,false);
                var allElements = getElementsOrSelector(elmArrayOrSelector);
                allElements.forEach(function(element) {
                    element._html = desc.get.call(element);
                });
                processSavedNodes(elmArrayOrSelector,true);
                bablic.setMutationListen(true);
                this.pre(function() {
                    var html = desc.get.call(this);
                    if(html != this._translated)
                        this._html = html;
                });
                this.post(function() {
                    this._translated = desc.get.call(this);
                });
                allElements.forEach(function(element) {
                    overrideHTMLAccess(element,function(getter) {
                        if(targetLocale != originalLocale && this._html)
                            return this._html;
                        return getter.call(this);
                    });
                });
                return this;
            },
            done:function(){
                return bablic;
            },
            on:function(event,handler){
                if(!document.querySelectorAll)
                    return this;
                var allElements = typeof(elmArrayOrSelector) == 'string' ? document.querySelectorAll(elmArrayOrSelector) : (elmArrayOrSelector.length ? elmArrayOrSelector : [elmArrayOrSelector]);
                for(var i=0; i<allElements.length; i++){
                    allElements[i]._babE = allElements[i]._babE || {};
                    allElements[i]._babE[event] = handler;
                }
                return this;
            },
            off:function(event,handler){
                if(!document.querySelectorAll)
                    return this;
                var allElements = typeof(elmArrayOrSelector) == 'string' ? document.querySelectorAll(elmArrayOrSelector) : (elmArrayOrSelector.length ? elmArrayOrSelector : [elmArrayOrSelector]);
                for(var i=0; i<allElements.length; i++){
                    if(!event)
                        delete allElements[i]._babE;
                    else{
                        if(!allElements[i]._babE)
                            continue;
                        if(!handler)
                            delete allElements[i]._babE[event];
                        else if(allElements[i]._babE[event]){
                            var index = allElements[i]._babE[event].indexOf(handler);
                            if(index > -1)
                                allElements[i]._babE[event].splice(index,1);
                        }
                    }
                }
                return this;
            },
            pre:function(handler){
                return bablic.element(elmArrayOrSelector).on('pre1',handler);
            },
            post:function(handler){
                return bablic.element(elmArrayOrSelector).on('post1',handler);
            },
            watch:function(handler){
                var allElements = typeof(elmArrayOrSelector) == 'string' ? document.querySelectorAll(elmArrayOrSelector) : (elmArrayOrSelector.length ? elmArrayOrSelector : [elmArrayOrSelector]);
                $.each(allElements,function(i,element){
                    bablic.watch(element,handler);
                });
                return this;
            },
            exclude:function(){
                bablic.setMutationListen(false);
                var allElements = typeof(elmArrayOrSelector) == 'string' ? document.querySelectorAll(elmArrayOrSelector) : (elmArrayOrSelector.length ? elmArrayOrSelector : [elmArrayOrSelector]);
                $.each(allElements,function(i,element){
                    if(element.hasAttribute('bablic-include'))
                        return element.removeAttribute('bablic-include');
                    element.setAttribute('bablic-exclude','');
                });
                bablic.setMutationListen(true);
                return this;
            },
            include:function(elmArrayOrSelector){
                bablic.setMutationListen(false);
                var allElements = typeof(elmArrayOrSelector) == 'string' ? document.querySelectorAll(elmArrayOrSelector) : (elmArrayOrSelector.length ? elmArrayOrSelector : [elmArrayOrSelector]);
                $.each(allElements,function(i,element){
                    if(element.hasAttribute('bablic-exclude'))
                        return element.removeAttribute('bablic-exclude');
                    element.setAttribute('bablic-include','');
                });
                bablic.setMutationListen(true);
                return this;
            },
            markup:function(key,value){
                bablic.setMutationListen(false);
                $(elmArrayOrSelector).attr('bablic-' + key,value || true);
                bablic.setMutationListen(true);
                return this;
            },
            bidi:function(mode){
                bablic.setMutationListen(false);
                var nodes = $(elmArrayOrSelector);
                nodes.attr('bablic-bidi',mode ? 'true' : 'false');
                nodes.each(function(){
                    if(mode)
                        Bidi.element(this);
                    else
                        Bidi.exclude(this);
                });
                bablic.setMutationListen(true);
                return this;
            }
        };
    };
    bablic.selector = function(selector){
        return {
            on:function(event,handler){
                bablic._sels[event] = bablic._sels[event] || [];
                bablic._sels[event].push([selector, handler]);
                return this;
            },
            pre:function(handler){
                return this.on('pre1',handler);
            },
            post:function(handler){
                return this.on('post1',handler);
            },
            exclude:function(){
                excludeByCode(selector);
                return this;
            },
            include:function(){
                includeByCode(selector);
                return this;
            },
            markup:function(key,value){
                addMarkupByCode(key,selector,value);
                return this;
            },
            bidi:function(mode){
                addMarkupByCode('bidi', selector,mode ? 'true' : 'false');
                bablic.element(selector).bidi(mode);
                return this;
            },
            done:function(){
                return bablic;
            }
        };
    };
    $.extend(bablic.element,{
        translate:function(elmArrayOrSelector){
            processSavedNodes(elmArrayOrSelector,true);
            return this;
        },
        restore:function(elmArrayOrSelector){
            processSavedNodes(elmArrayOrSelector,false);
            return this;
        }
    });

    bablic.isEditor = function(){
        return !!bablic.preview;
    };

    LocaleSettings = {};
    function getLocaleSettings(locale){
        var conf = LocaleSettings[locale];
        if(!conf)
            conf = (LocaleSettings[locale] = {});
        return conf;
    }

    function findFallbackLocale() {
        if(!bablic.languages.get(bablic.original).hidden)
            return bablic.original;
        var notHiddenLocale = $.grep(bablic.languages.get(), function(l) {
            return !l.hidden;
        })[0];

        if(notHiddenLocale)
            return notHiddenLocale.key;
        return bablic.original;
    }

    bablic.languages = {
        get:function(code){
            if(!code){
                return $.map(bablic.locales || [],function(locale){
                    var conf = getLocaleSettings(locale.key);
                    return {
                        key:locale.key,
                        name:conf.name || locale.name,
                        flag:conf.flag || locale.flag,
                        href:conf.href || bablic.getLink(locale.key),
                        hidden:conf.hidden || false
                    };
                });
            }
            var conf = getLocaleSettings(code);
            var locale = $.grep(bablic.locales || [],function(locale){ return locale.key == code; })[0];
            if(!locale)
                return {
                    key:code,
                    name:conf.name,
                    flag:conf.flag,
                    href:conf.flag,
                    hidden:conf.hidden || false
                };
            return {
                key:locale.key,
                name:conf.name || locale.name,
                flag:conf.flag || locale.flag,
                href:conf.href || bablic.getLink(locale.key),
                hidden:conf.hidden || false
            };
        },
        update:function(newSettings){
            if(!newSettings)
                return this;
            if(!newSettings.key)
                return this;
            var last = this.get(newSettings.key);
            var conf = getLocaleSettings(newSettings.key);
            if(newSettings.name != last.name)
                conf.name = newSettings.name;
            if(newSettings.flag != last.flag)
                conf.flag = newSettings.flag;
            if(newSettings.href != last.href)
                conf.href = newSettings.href;

            if(newSettings.hidden != last.hidden) {
                if (newSettings.hidden) {

                    //if (newSettings.key != bablic.original) {
                        conf.hidden = true;
                        if (bablic.locale == newSettings.key) {
                            var altLanguage = findFallbackLocale();

                            if(LDATA && LDATA.edit){

                            }
                            else {
                                if (doesSupportAjaxReplace())
                                    switchLocaleAjax(altLanguage);
                                else {
                                    var link = bablic.getLink(altLanguage);
                                    var parsed = parseURL(link);
                                    if(parsed.href != LOC.href)
                                        LOC.href = link;
                                }
                            }
                        }
                    //}
                }
                else
                    conf.hidden = false;
            }
            bablic.showFlags();
            return this;
        },
        flag:function(key,size){
            if(!key)
                return '';
            return getFlag(key,size);
        },
        hide:function(locale){
            var conf = this.get(locale);
            conf && (conf.hidden=true);
            return this.update(conf);
        },
        show:function(locale){
            var conf = this.get(locale);
            conf && (conf.hidden=false);
            return this.update(conf);
        },
        url:function(key,url){
            return bablic.getLocale(key,null,url);
        },
        done:function(){
            return bablic;
        }
    };

    var watchedElements = [];
    bablic.watch = function(element,handler){
        if(element) {
            element._babLis = handler;
            watchedElements.push(element);
            if('bablic_last_value' in element)
                setTimeout(handler,0);
        }
    };

    // Alias
    bablic.hideLanguage = function(locale){
        return bablic.languages.hide(locale);
    };

    bablic.trigger = triggerEvent;

// End engine Help Functions

// for IE
    if (!WIN.console) {
        WIN.console = {
            log: function (str) {
            }, error: function (str) {
            }
        };
    }
    if (!Object.keys)
        Object.keys = function (obj) {
            var a = [];
            for (var key in obj) a.push(key);
            return a;
        };

    if (bablic.debugServer)
        bablic.debug = true;

    bablic.log = bablic.debug ? function (stuff) {
        WIN.console.log.apply ? WIN.console.log.apply(console, arguments) : WIN.console.log(arguments[0]);
    } : function () {
    };
    bablic.error = bablic.debug ? function (stuff) {
        WIN.console.error.apply ? WIN.console.error.apply(console, arguments) : WIN.console.error(arguments[0]);
    } : function () {
    };


    bablic.markup = addMarkupByCode;
    bablic.exclude = excludeByCode;
    bablic.include = includeByCode;

    bablic.on = bablic.Mutation.on;
    bablic.off = bablic.Mutation.unbind;

    bablic.setPage = function(page){
        if (page == bablic.getPage()) return;
        explicitPage = page;
        onStateChanges && onStateChanges();
    };

    bablic.getPage = function(){
        return explicitPage || normalizedCurrentPath();
    };

    bablic.openInlineEditor = function() {
        if (WIN.initBablicI18nEditor) {
            return WIN.initBablicI18nEditor(bablic.Site, bablic.version);
        }
        const s = DOC.createElement('script');
        s.src = 'https://legacy.bablic.com/js/inline-editor-main.min.js';
        s.onload = function() {
            WIN.initBablicI18nEditor(bablic.Site, bablic.version);
        };
        DOC.body.appendChild(s);
    };

    bablic.registerKey = function () {
        $(DOC).on("keydown", function (e) {
            if (!e.shiftKey || !e.altKey || (e.keyCode != 66 && e.keyCode != 76))
                return;
            e.preventDefault();
            if (WIN.initBablicI18nEditor) {
                return WIN.initBablicI18nEditor(bablic.Site, bablic.version);
            }

            if (bablic.editThisSite)
                return bablic.editThisSite();

            bablic.on('sdkload', function () {
                bablic.editThisSite();
            });
            const s = DOC.createElement('script');
            s.src = 'https://cdn2.bablic.com/addons/sdk.js';
            DOC.body.appendChild(s);
        });
    }


    bablicDTO = function(){
        return {Site:bablic.Site,locale:bablic.locale,version:bablic.version,original:bablic.original};
    };

    bablic.ajax = ajaxGet;


})(bablic);
;

var send_usage_report, send_ldata_report, setZIndex, runHeadEngines, siteConfReceived, translationReceived,
    fetchSequence, parallel, parallelEach, getConf, getPageTranslations, onReady;
var locale, locales, targetLocale, originalLocale, MOBILE, ping, nonBlocking;
var HAS_ANGULAR = false;
var SUPPORT_AJAX_NAVIGATE = false;
var fetchRevision = 0;
var underlineLocale;
var localeLDATAs = {};
var performRedirect;
var TAGS = {};
var BY_KEYS = {};
var onStateChanges;
var setHidden;
var MACHINES = {};
var HOLD_BABLIC = false;
var PREVIOUSLY_USED_CONTENT = {};
(function (bablic) {
    var isBablicInlineEdit = LOC.search.includes('bablic-edit=true') || (
        HAS_LOCAL_STORAGE && localStorage.getItem('bab-inline'));
    var NON_VISUAL_TAGS = {SCRIPT:0,LINK:0,NOSCRIPT:0,STYLE:0};
    var check = DOC.querySelectorAll("#BABLIC_CHECK");
    if (isBablicInlineEdit) {
        bablic.preview = true;
    }

    if (check.length) {
        bablic.preview = true;
        try {
            for (var i = 0; i < check.length; i++) {
                if (check[i].parentNode)
                    check[i].parentNode.removeChild(check[i]);
            }
        }
        catch (e) {
        }
    }

    if (LOC.hash && LOC.hash.indexOf('bablicExtension') > -1)
        bablic.preview = true;

    if (!bablic.preview) {
        var previewCookie = LocalDB.getSync('previewMode');
        if (previewCookie && previewCookie == "1") {
            bablic.previewMode = true;
        }

        if (LOC.hash && LOC.hash.indexOf('previewMode') > -1) {
            bablic.previewMode = true;
            LocalDB.setSync('previewMode', "1");
            history.replaceState(null, null, ' ');
        }
    } else if (EDITOR && EDITOR_FRAME.location.pathname.includes("/preview")) {
        bablic.previewMode = true;
        LocalDB.setSync('previewMode', "1");
    }

    var usage_report_sent = false;

    var shouldShowWidget = true;

    /**
     * On fallback response
     * @param responseData
     */
    function fallback_callback(responseData) {
        if (!responseData)
            return;
        bablic.log('fallabck response: ');
        bablic.log(responseData);

        var HAS_OMG = WIN.omg && !!omg.translationReceived;
        var updated = false;
        var updatedHashes = {};
        var deletedHash = responseData.deleted;
        delete responseData.deleted;
        if (deletedHash) {
            setTimeout(function () {
                updateNotExistingContents(deletedHash);
            }, 1);
        }

        // add fallback response to content
        for (var key in responseData) {
            if (responseData[key] == '__empty__')
                continue;
            if (!LDATA.content[key] || LDATA.content[key] == '__empty__' || LDATA.content[key] != responseData[key]) {
                updated = true;
                LDATA.content[key] = responseData[key];
                updatedHashes[key] = responseData[key];
                if (HAS_OMG)
                    omg.translationReceived(key, responseData[key]);
            }
        }
        // traverse the dom again to add fetched response
        if (!updated)
            return;
        flushMergedNodes();
        if (!savedContentNodes.length) {
            var keepSavedContents = savedContentNodes;
            savedContentNodes = [];
            _forceTraverse = true;
            if (!DOC.body.getAttribute('bablic-exclude'))
                domTraverse($.byTag('html').get(0), bablic.UseInclude);
            runHeadEngines();
            _forceTraverse = false;
            mergeContentNodes(keepSavedContents);
        }
        else {
            bablic.setMutationListen(false);
            for (var i = 0; i < savedContentNodes.length; i++) {
                if (!(savedContentNodes[i].hash in updatedHashes))
                    continue;
                var node = savedContentNodes[i].node;
                var element = savedContentNodes[i].element;
                savedContentNodes[i].replace(node, element, updatedHashes[savedContentNodes[i].hash]);
            }
            bablic.setMutationListen(true);
        }

        // show page
        showPage2();
    }


    var ASYNC_FETCH_OFF = true;
    /**
     * Sends fallback request to server with content ids
     * @param ids
     */
    var fallback_sent;

    function getNotExistingContents() {
        if (notExistingContents)
            return notExistingContents;
        notExistingContents = {};
        var str = LocalDB.getSync('unused', false, true);
        if (str) {
            var arr = str.split(',');
            arr.forEach(function (hash) {
                notExistingContents[hash] = 1;
            });
        }
        return notExistingContents;
    }

    function updateNotExistingContents(arr) {
        notExistingContents = notExistingContents || {};
        var length = Object.keys(notExistingContents).length;
        arr.forEach(function (key) {
            notExistingContents[key] = 1;
        });
        if (length != Object.keys(notExistingContents).length)
            LocalDB.setSync('unused', Object.keys(notExistingContents).join(','), false, true);
    }

    function generateSelector(el){
        if (!(el instanceof Element))
            return;
        var path = [];
        while (el.nodeType === Node.ELEMENT_NODE) {
            var selector = el.nodeName.toLowerCase();
            if (el.id) {
                selector += '#' + el.id;
                path.unshift(selector);
                break;
            } else {
                var sib = el, nth = 1;
                while (sib = sib.previousElementSibling) {
                    if (sib.nodeName.toLowerCase() == selector)
                        nth++;
                }
                if (nth != 1)
                    selector += ":nth-of-type("+nth+")";
            }
            path.unshift(selector);
            el = el.parentNode;
        }
        return path.join(" > ");
    }

    // todo: try not use this code
    function resetBeenThere(root){
        var node = root;
        while (node != null) {
            node._babBeenThere = false;
            // 1) traverse child if exists
            if (node.hasChildNodes()) {
                node = node.firstChild;
            } else {
                // 2) go to sibling, if exists
                if (node.nextSibling && node != root) {
                    node = node.nextSibling;
                } else {
                    // 3) go upwards until you find uncles or until the top
                    while (node.nextSibling == null && node != root) {
                        node = node.parentNode;
                    }
                    // if reached the top go out
                    if (node == root)
                        break;
                    // else go to sibling
                    node = node.nextSibling;
                }
            }
        }

    }
    function htmlEscape(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    var selfClosingTags = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
    function isSingleClosing(elem) {
        return selfClosingTags.indexOf( elem.tagName.toLowerCase() ) !== -1;
    }

    // filter out empty child nodes;
    function getChildNodesCount(node){
        var nodesCount = 0;
        for (var i=0; i<node.childNodes.length;i++){
            if (node.childNodes[i].textContent.trim()){
                nodesCount++;
            }
        }
        return nodesCount;
    }

    function traverseDom(root) {
        var node = root;
        var html = [];
        var secondReport = lastReportId;
        // use to track opened/closed brackets
        var openTags = 0;
        var IGNORE_TYPES = ["TITLE","META","SCRIPT"]
        var IGNORE_IDS = ["bablicFlagsWidget", "wg-style-trans"];
        var IGNORE_CLASSES = ["bablicHideStyle", "bablicOMGStyle"]

        while (node != null) {
            var record = true;

            if (node.nodeType == Node.COMMENT_NODE ||
                ((node.tagName || "").toUpperCase() == "LINK" && node.rel && node.rel.toLowerCase().indexOf("stylesheet") == -1) ||
                ((node.tagName || "").toUpperCase() == "STYLE" && node.id.indexOf("bablic") != -1) ||
                (node.classList && IGNORE_CLASSES.some(function(className){ return node.classList.contains(className); })) ||
                (node.tagName && IGNORE_TYPES.indexOf(node.tagName) > -1) ||
                (node.id && IGNORE_IDS.indexOf(node.id) > -1) ||
                ((node.tagName || "").toUpperCase() == "IFRAME" && node.parentNode && (node.parentNode.tagName || "").toUpperCase() == "HEAD")){
                record = false;
            }

            // excluding floating/fixed iframes like chats
            if (record && (node.tagName || "").toUpperCase() == "IFRAME"){
                var style = WIN.getComputedStyle(node);
                if (style.position == "fixed" || style.float == "left" || style.float == "right") {
                    record = false;
                }
            }

            if (record) {
                // if text type
                if (node.nodeType == 3) {
                    // try get original value before translation was set
                    var originalNode = savedContentNodes.filter(function(c){return c.node == node;});
                    var lastVal = node.textContent;
                    if (originalNode && originalNode.length){
                        lastVal = originalNode[0].completeOriginal;
                    }

                    var skipText = false;

                    // dont copy style content because it was copied from parent
                    if (node.parentNode && (node.parentNode.tagName || "").toUpperCase() == "STYLE"){
                        skipText = true;
                    }

                    // record content only if first time or value changed
                    if (!skipText && (!node._babBeenThere || node._babLastVal != lastVal)) {
                        secondReport && !openTags && html.push("<\!-- path-value:"+ generateSelector(node.parentNode) + " -->");
                        html.push(lastVal);
                        secondReport && !openTags && html.push("<\!-- /path-value:"+ node.parentNode.getAttribute("hash") + " -->");
                        node._babLastVal = lastVal;
                        node._babBeenThere = true;
                    }
                } else {
                    // if exclude attribute has found, add exclude div to html
                    if (!node._babBeenThere && node.parentNode != document.head &&
                         node.attributes && node.attributes["bablic-exclude"]){
                        var rect = node.getBoundingClientRect();
                        node.excluded = true;
                        node._babBeenThere = true;
                        html.push("<excluded-content style='width:"+rect.width+"px;height:"+rect.height+"px;line-height:"+ rect.height +"px;'></excluded-content>");
                    }
                    // element node - if first time or number of nodes were changed
                    else if (!node._babBeenThere || (node.hasChildNodes() && getChildNodesCount(node) != node._babNumChildNodes)) {
                        // if no children, mark been here otherwise will be marked at closing
                        if (!node.hasChildNodes()) {
                            node._babBeenThere = true;
                        } else {
                            // in case children number was changed, reset all node
                            if (node._babBeenThere){
                                resetBeenThere(node);
                            }
                            node._babNumChildNodes = getChildNodesCount(node);
                        }
                        secondReport && !openTags && html.push("<\!-- path-node:"+ generateSelector(node) + " -->");
                        if (secondReport && node.hasChildNodes()){
                            openTags++;
                        }
                        var attrs = [].map.call(node.attributes, function(el) {
                            return el;
                        });
                        var styleFromSheet = "";
                        // if copy style from sheet and not using HTML to prevent
                        if ((node.tagName || "").toUpperCase() == "STYLE" && node.sheet && node.sheet.cssRules && !node.getAttribute("origin-url")){
                            var dir = targetLocale.dir || "ltr";
                            if (dir == "rtl"){
                                styleFromSheet = Bidi.restoreStyleSheet(node.sheet);
                            }else {
                                for (var i = 0; i < node.sheet.cssRules.length; i++) {
                                    styleFromSheet += node.sheet.cssRules[i].cssText;
                                }
                            }
                        }
                        html.push("<" + node.tagName.toLowerCase() + " " + attrs.map(function (a) {
                            if (a.value.indexOf("{") > -1 && a.value.indexOf("}") > -1){
                                return null;
                            }
                            return a.name + "=\""  + htmlEscape(a.value.replace(/\s+/g, " ")) + "\"";
                        }).join(" ") + (isSingleClosing(node) ? " />" : (node.hasChildNodes() ? ">" + styleFromSheet : ">"+styleFromSheet+"</" + node.tagName.toLowerCase() + ">")));
                    }
                }
            }

            // 1) traverse child if exists
            if (record && !node.excluded && node.hasChildNodes() && node.tagName != "SCRIPT") {
                node = node.firstChild;
            } else {
                // 2) go to sibling, if exists
                if (node.nextSibling && node != root) {
                    node = node.nextSibling;
                } else {
                    // 3) go upwards until you find uncles or until the top
                    while (node.nextSibling == null && node != root) {
                        node = node.parentNode;
                        if (!node._babBeenThere) {
                            node.tagName && html.push("</" + node.tagName.toLowerCase() + ">");
                            node._babBeenThere = true;
                            if (secondReport){
                                openTags--;
                            }
                            secondReport && !openTags && html.push("<\!-- /path-node -->");
                        }
                    }
                    // if reached the top go out
                    if (node == root)
                        break;
                    // else go to sibling
                    node = node.nextSibling;
                }
            }
        }

        return html.join("");
    }

    var notExistingContents = null;

    function send_fallback_request(engineContent, isSync) {
        if (ASYNC_FETCH_OFF)
            isSync = true;
        var locale = bablic.locale;
        // checks if fallback request has already been sent
        var fallback_ids = {};
        for (var id in engineContent) {
            if (engineContent[id] && engineContent[id].f != locale) {
                fallback_ids['1_' + id] = null;
                engineContent[id].f = locale;
                $.each(engineContent[id].bc || [], function (i, bc) {
                    fallback_ids['1_' + bc] = true;
                });
            }
        }
        var ids = Object.keys(fallback_ids);
        if (!ids.length)
            return;
        LocalDB.getByIds(ids, function (err, localResults) {
            if (err)
                bablic.error(err);
            var results = {};
            if (localResults) {
                results = localResults;
                for (var key in localResults) {
                    results[key] = localResults[key];
                    delete fallback_ids[key];
                }
            }
            ids = Object.keys(fallback_ids);
            if (!ids.length)
                return fallback_callback(results);
            fallback_sent = true;
            ajaxPost('/api/engine/fallback', {content: ids, async: !isSync}, function (response) {
                if (response.approvedHashes){
                    LDATA.approvedHashes = response.approvedHashes;
                }
                if (response.recordPolicy){
                    LDATA.recordPolicy = response.recordPolicy;
                    delete response.recordPolicy;
                }
                if (response.report){
                    LDATA.report = response.report;
                    delete response.report;
                }

                if (tempContent){
                    if (LDATA.report) {
                        if (tempContent && Object.keys(tempContent).length) {
                            for (var key in tempContent) {
                                new_content[1] = new_content[1] || {};
                                new_content[1][key] = tempContent[key];
                            }
                        }
                    }
                    tempContent = {};
                }


                $.extend(results, response);
                fallback_callback(results);
                LocalDB.setByPage(response, normalizedCurrentPath(!isSync));
                for (var id in response) {
                    delete fallback_ids[id];
                }
                var newNotExistingContents = Object.keys(fallback_ids).map(function (id) {
                    return id.substr(3)
                });
                setTimeout(function () {
                    updateNotExistingContents(newNotExistingContents);
                }, 1);
            });
        });
    }

    var send_usage_timeout, firstTimeout, sentReport = {};
    var tempContent = {};

    send_usage_report = function () {
        if ($.isEmptyObject(usage_report))
            return;

        if (firstTimeout && Date.now() - firstTimeout > 20000)
            return;
        if (send_usage_timeout)
            clearTimeout(send_usage_timeout);

        if (!firstTimeout)
            firstTimeout = Date.now();
        send_usage_timeout = setTimeout(function () {
            firstTimeout = null;
            send_usage_timeout = null;
            if (usage_report) {
                var used = [];
                var unused = [];
                if (!usage_report_sent) {
                    for (var key in LDATA.content) {
                        if (key[0] != '1')
                            continue;
                        if (key in usage_report)
                            used.push(key.substr(2));
                        else
                            unused.push(key.substr(2));
                    }
                }
                else {
                    used = Object.keys(usage_report).map(function (key) {
                        return key.substr(2);
                    });
                }
                ajaxPost('/api/engine/usage', {used: used, unused: unused});
                usage_report = {};
                usage_report_sent = true;
            }
        }, 7000);
    }

    var send_report_timeout, MAX_SEND = 500;
    var last_report_count, MAX_REQUEST_SIZE = 200000, MAX_PLACES = 2, MAX_FALLBACK_REQUEST = 500;

    var ignoreNotTranslated = {};
    var lastReportId;
    var cleanHashMarkups = function(){
        var elements = document.querySelectorAll('[hash]');
        for (var i=0;i<elements.length;i++){
            elements[i].removeAttribute("hash");
        }
    }
    var hasOnGoingReport;
    var sendReportThrottled = function (isSync) {
        if (hasOnGoingReport){
            return;
        }
        if (LDATA.machine) {
            var notTranslated = [];
            for (var key in LDATA.content) {
                var parts = key.split('_');
                if (parts[0] == '1' && LDATA.content[key] == '__empty__' && !ignoreNotTranslated[key]) {
                    notTranslated.push(parts[1]);
                    ignoreNotTranslated[key] = true;
                }
            }
            if (!$.isEmptyObject(notTranslated)) {
                bablic.Mutation.emit('machine');
                ajaxPost('/api/engine/machine', {content: notTranslated}, function (content) {
                    bablic.Mutation.emit('afterMachine');
                    if (content){
                        fallback_callback(content);
                    }
                    if (Object.keys(content).length > 0) {
                        if (bablic.ldata){
                            bablic.ldata.machines = bablic.ldata.machines || {};
                            $.extend(bablic.ldata.machines , content);
                        }

                        LocalDB.clearAll();
                    }
                });
            }
        }
        if ($.isEmptyObject(new_content)) {
            return;
        }

        getNotExistingContents();
        if (notExistingContents && new_content[1]) {
            for (var key in notExistingContents) {
                delete new_content[1][key];
            }
            if ($.isEmptyObject(new_content[1])) {
                delete new_content[1];
                if ($.isEmptyObject(new_content))
                    return;
                return;
            }
        }


        var reverseLDATA;

        var getReverseLDATA = function () {
            if (reverseLDATA)
                return reverseLDATA;

            reverseLDATA = {};
            for (var key in LDATA.content) {
                reverseLDATA[LDATA.content[key]] = key;
            }
            if (PREVIOUSLY_USED_CONTENT) {
                for (var key in PREVIOUSLY_USED_CONTENT) {
                    reverseLDATA[PREVIOUSLY_USED_CONTENT[key]] = key;
                }
            }
            return reverseLDATA;
        };
        // check which of those contents is really new
        var new_content_ids = {}, cleanedCount = 0;
        for (var engineIndex in new_content) {
            if (engineIndex == '3' || engineIndex == '4' || engineIndex == '2')
                continue;
            var engineContent = new_content[engineIndex];
            for (var key in engineContent) {
                var fullKey = engineIndex + '_' + key;
                if (fullKey in sentReport)
                    continue;
                // if was translation since added
                if (LDATA.content[fullKey])
                    continue;
                var newC = engineContent[key];
                if (!newC)
                    continue;
                if (!newC.a)
                    continue;
                if (CLEAN_TEXT.test(newC.content))
                    continue;
                var found = false;
                var reverse = getReverseLDATA();
                if (!newC.key && newC.content in reverse)
                    found = true;
                else {
                    for (var j = 0; j < newC.nodes.length; j++) {
                        if (bablic.preview && readNodeAttr(newC.nodes[j], 'bablic_dirty', newC.elements[j])) {
                            found = true;
                            break;
                        }

                        if (readNodeAttr(newC.nodes[j], 'bablic_replaced' + engineIndex, newC.elements[j]) && readNodeAttr(newC.nodes[j], 'bablic_replaced_value' + engineIndex, newC.elements[j]) == getNodeValue(newC.nodes[j])) {
                            found = true;
                            break;
                        }
                    }
                }
                if (!found) {
                    new_content_ids[engineIndex] = new_content_ids[engineIndex] || {};
                    new_content_ids[engineIndex][key] = newC;
                    cleanedCount++;
                }
                // used only for fallback, no need to gather anymore
                if (!LDATA.report) {
                    // keep the content when report will be true after ping request
                    tempContent[key] = engineContent[key];
                    engineContent[key] = null;
                }
            }
        }
        // check if there's really new content
        if (!cleanedCount) {
            new_content = {};
            return;
        }

        // try to fetch translation by fallback
        if (!LDATA.edit && LDATA.fallback && new_content_ids[1] && Object.keys(new_content_ids[1]).length < MAX_FALLBACK_REQUEST)
            send_fallback_request(new_content_ids[1], isSync);
        if (!LDATA.report) {
            return;
        }
        if (cleanedCount == last_report_count)
            return;
        last_report_count = cleanedCount;
        clearTimeout(send_report_timeout);
        send_report_timeout = setTimeout(function () {
            if (!LDATA.content)
                return;
            var sizeCount = 0;
            var max_send = bablic.sendPerRequest || MAX_SEND;
            var max_request = bablic.maxRequest || MAX_REQUEST_SIZE;
            var wasLimited = false;
            // for a new content creates context (location, size...)
            var content_to_send = {}, totalSending = 0;
            var limitScan = !WIN.SCAN;
            for (var engineIndex in new_content_ids) {
                var total = 0;
                var engineIds = new_content_ids[engineIndex];
                for (var key in engineIds) {
                    if (limitScan && total > max_send) {
                        wasLimited = true;
                        break;
                    }
                    total++;
                    var fullKey = engineIndex + '_' + key;
                    if (fullKey in LDATA.content)
                        continue;

                    if (LDATA.recordPolicy == "default" && (!LDATA.approvedHashes || !LDATA.approvedHashes.includes(key))){
                        continue;
                    }

                    sentReport[fullKey] = 1;
                    var contentObj = engineIds[key];
                    if (contentObj) {
                        var content_item = {
                            content: contentObj.content,
                            i: contentObj.i,
                            c: contentObj.c,
                            v: contentObj.v,
                            h: contentObj.h,
                            path: contentObj.path,
                            tags: Object.keys(contentObj.tags),
                            key: contentObj.key
                        };
                        if (contentObj.m)
                            content_item.m = true;
                        if (contentObj.markup && !$.isEmptyObject(contentObj.markup))
                            content_item.markup = contentObj.markup;
                        if (contentObj.bc)
                            content_item.bc = contentObj.bc;
                        if (contentObj.nodes) {
                            for (var j = 0; j < contentObj.nodes.length; j++) {
                                setNodeAttr(contentObj.nodes[j], 'bablic_replaced' + engineIndex, true, contentObj.elements[j]);
                                setNodeAttr(contentObj.nodes[j], 'bablic_replaced_value', getNodeValue(contentObj.nodes[j]), contentObj.elements[j]);
                                //if (content_item.places.length < MAX_PLACES && contentObj.nodes[j] && contentObj.elements[j])
                                //    content_item.places.push(node_to_location(contentObj.nodes[j], contentObj.elements[j], fullKey));
                            }
                        }
                        if (limitScan) {
                            sizeCount += WIN.JSON && WIN.JSON.stringify ? JSON.stringify(content_item).length : content_item.content.length * 2;
                            if (sizeCount > max_request) {
                                wasLimited = true;
                                break;
                            }
                        }
                        content_to_send[engineIndex] = content_to_send[engineIndex] || {};
                        content_to_send[engineIndex][key] = content_item;
                        totalSending++;
                    }
                }
            }

            // send LDATA report
            if (!$.isEmptyObject(content_to_send)) {
                bablic.Mutation.emit('sendReport');
                if (LDATA.owner && !LDATA.edit) {
                    if (LDATA.scanning)
                        startScanningMessage();
                    else if (totalSending > 5)
                        startDetectMessage();
                }

                var html;
                var reportUrl;
                if (LDATA.reportHtml && LDATA.recordPolicy != "permissive" && new_content && new_content[1]){
                    var keys = Object.keys(new_content[1]);
                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        if (new_content[1][key].elements && new_content[1][key].elements.length){
                            for (var j = 0; j < new_content[1][key].elements.length; j++) {
                                var node = new_content[1][key].nodes[j];
                                if (node){
                                    var el = node.nodeType == Node.ATTRIBUTE_NODE ? (node.nodeName == "placeholder" ? node.ownerElement : null) :
                                             node.nodeType == Node.TEXT_NODE ? node.parentNode : node;
                                    if (el && el.parentElement != document.head) {
                                        var existingAttr = el.getAttribute('hash');
                                        if (existingAttr) {
                                            el.setAttribute('hash', existingAttr + "," + key.replace("1_", ""));
                                        } else {
                                            el.setAttribute('hash', key.replace("1_", ""));
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var htmlNode;
                    for (var i=0;i<document.childNodes.length;i++){
                        if (document.childNodes[i].nodeName == "HTML"){
                            htmlNode = document.childNodes[i];
                            break;
                        }
                    }
                    if (htmlNode){
                        html = traverseDom(htmlNode);
                        html = html.replace(/\s+/g, " ");
                    }

                    if (LDATA.previewUrl){
                        reportUrl = convertToPreviewByType(LOC.pathname, LDATA.previewUrl,"duda")
                    } else if (WIN.BABLIC_RESTORE)
                        reportUrl = BABLIC_RESTORE(LOC.href);
                    else
                        reportUrl = LOC.href;
                }

                hasOnGoingReport = true;
                ajaxPost('/api/engine/report', {
                    content: content_to_send,
                    html: html,
                    reportUrl: reportUrl,
                    lastReportId: lastReportId,
                }, function (content) {
                    if (LDATA.reportHtml && LDATA.recordPolicy != "permissive") {
                        cleanHashMarkups();
                        if (content && content.report && !lastReportId) {
                            lastReportId = content.report;
                        } else {
                            // problem with save
                            resetBeenThere(document);
                        }
                    }
                    hasOnGoingReport = false;

                    last_report_count = 0;
                    bablic.Mutation.emit('afterReport', [isSync]);
                    if (content)
                        fallback_callback(content);

                    WIN.omg && WIN.omg.afterContentReported(content_to_send, content);

                }, false, function (e) {
                    hasOnGoingReport = false;
                    bablic.Mutation.emit('afterReport', [isSync]);
                });

                var leftContents = {};
                if (wasLimited) {
                    Object.keys(new_content_ids || {}).forEach(function (engineId) {
                        Object.keys(new_content_ids[engineId] || {}).forEach(function (key) {
                            var fullKey = engineIndex + '_' + key;
                            if (!content_to_send[engineId][key] && !(fullKey in LDATA.content)) {
                                leftContents[engineId] = leftContents[engineId] || {};
                                leftContents[engineId][key] = new_content[engineId][key];
                            }
                        })
                    })
                }

                new_content = leftContents;
            }else {
                new_content = {};
            }
        }, WIN.SCAN ? 1 : 500);
    };


    var sendReportFuncTO, sendReportStart, MAX_THROTTLE_TIME = 2000, REPORT_THROTTLE_TIME = 200;

// send ldata report with all new content to translate
    send_ldata_report = function (isSync) {
        if (!IS_PROPERTIES_SUPPORTED)
            return;

        if (isSync)
            return sendReportThrottled(true);
        if (ASYNC_FETCH_OFF)
            isSync = true;

        // throttle report sending
        // if a report is already ongoing
        if (sendReportFuncTO) {
            // if max time has passed, don't do anything
            if (Date.now() - sendReportStart > MAX_THROTTLE_TIME)
                return;
            // otherwise stop the ongoing report
            clearTimeout(sendReportFuncTO);
        }
        else // register the time the report started
            sendReportStart = Date.now();
        // start send report
        sendReportFuncTO = setTimeout(function () {
            sendReportFuncTO = null;
            sendReportThrottled(isSync);
        }, REPORT_THROTTLE_TIME);
    };

    var onClose;

    function startScanningMessage() {
        var gotIt = LocalDB.getSync('scanningMessage');
        if (gotIt)
            return;
        showMessage('scanningMessage');
        onClose = function () {
            LocalDB.setSync('scanningMessage', 'true');
        }
    }


    function showLimitHomeMessage() {
        var gotIt = LocalDB.getSync('limitHomeMessage');
        if (gotIt)
            return;
        showMessage('limitHome');
        onClose = function () {
            LocalDB.setSync('limitHomeMessage', '1');
        }
    }

    function startDetectMessage() {
        var gotIt = LocalDB.getSync('newContentDetected');
        if (gotIt)
            return;
        showMessage('newContentDetected');
        onClose = function () {
            LocalDB.setSync('newContentDetected', 'true');
        }
    }

    function showTurnedOffMessage() {
        var gotIt = LocalDB.getSync('turnedOff');
        if (gotIt)
            return;

        showMessage('turnedOff');
        onClose = function () {
            LocalDB.setSync('turnedOff', 'true');
        }
    }

    setZIndex = function (frame) {
        var z = [99999999999999999, 999999999999999, 999999999999, 9999999];
        for (var i = 0; i < z.length; i++) {
            try {
                frame.style.zIndex = z[i];
                return;
            }
            catch (e) {
            }
        }
    };
    function showMessage(type) {
        if ($.byId('bablicMessage').length())
            return;
        var xhr = WIN.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                var iframe = DOC.createElement('iframe');
                iframe.id = "bablicMessage";
                iframe.className = "bablicMessage";
                iframe.setAttribute('bablc-exclude', 'true');
                iframe.width = "100%";
                iframe.height = "52px";
                iframe.style.border = 'none';
                iframe.style.position = 'fixed';
                iframe.style.top = 0;
                iframe.style.left = 0;
                setZIndex(iframe);
                var body = DOC.body;
                body.insertBefore(iframe, body.firstChild);

                var html = xhr.responseText;
                try {
                    iframe.contentWindow.document.open();
                    iframe.contentWindow.document.write(html);
                    iframe.contentWindow.document.close();
                }
                catch (e) {
                    iframe.contentWindow.location.href = "data:text/html;charset=utf-8," + encodeURIComponent(html);
                }
                $(iframe).on('click', function () {
                    iframe.parentNode.removeChild(iframe);
                });
            }
        };
        xhr.open('GET', LOC.protocol + '//uploads.bablic.com/html/' + type + '.html', true);
        xhr.send();
    }

    function closeMessage() {
        $.byClass('bablicMessage').remove();
        onClose && onClose();
        onClose = null;
    }

    function addMessageShadow() {
        $.byClass('bablicMessage').css('box-shadow', "0px 0px 15px #178FC2");
    }

    function removeMessageShadow() {
        $.byClass('bablicMessage').css('box-shadow', "");
    }


    bablic._m = [closeMessage, addMessageShadow, removeMessageShadow];

    var hiddenCount = 0;

    setHidden = function (hide, reallyHide) {
        if (hide) {
            if (!bablic.hidden) {
                if (reallyHide) {
                    hidePage();
                    hiddenCount++;
                }
                else
                    bablic.log('can hide after already shown');
            }
            else
                hiddenCount++;
        }
        else {
            hiddenCount--;
            showPage2();
        }
    };

    function hidePage() {
        if (bablic.hidden || bablic.hidingStyle)
            return;
        hiddenStart = Date.now();
        bablic.hidden = true;
        //if (DOC.body)
        //    DOC.body.style.visibility = 'hidden';
        //else {
        try {
            bablic.hidingStyle = DOC.createElement('style');
            bablic.hidingStyle.className = 'bablicHideTag';
            bablic.hidingStyle.type = "text/css";
            bablic.hidingStyle.innerHTML = 'body,body *{visibility: hidden; !important}';
            bablic.hidingStyle.setAttribute('bablic-exclude', '');
            var s = DOC.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(bablic.hidingStyle, s);
        }
        catch (e) {
        }
//        }
    }

// show page function ( should be available even if bablic script doesn't load)
    var showPage2 = function () {
        if (hiddenCount > 0)
            return;
        if (!hiddenTime)
            hiddenTime = Date.now() - hiddenStart;

        var link = DOC.getElementById('bablicLink');
        if (link && link.parentNode)
            link.parentNode.removeChild(link);
        bablic.setMutationListen(false);
        if (bablic.hidingStyle && bablic.hidingStyle.parentNode) {
            bablic.hidingStyle.parentNode.removeChild(bablic.hidingStyle);
            bablic.hidingStyle = null;
        }
        $('.bablicHideStyle,.bablicHideTag').remove();
        bablic.setMutationListen(true);
    };


    var onReadyCalled = false;
    nonBlocking = isNonBlocking();
    var onReadyEvents = [];
    if (!nonBlocking) {
        var addListener = DOC.addEventListener || DOC.attachEvent,
            removeListener = DOC.removeEventListener || DOC.detachEvent;
        var eventName = DOC.addEventListener ? "DOMContentLoaded" : "onreadystatechange";


        var onReadyHandler = function () {
            removeListener.call(DOC, eventName, onReadyHandler, false);
            if (onReadyCalled)
                return;
            onReadyCalled = true;
            var exp;
            for (var i = 0; i < onReadyEvents.length; i++) {
                try {
                    onReadyEvents[i]();
                }
                catch (e) {
                    exp = exp || e;
                }
            }
            if (exp)
                throw exp;
        };
        addListener.call(DOC, eventName, onReadyHandler, false);
    }
    else
        onReadyCalled = true;

    onReady = function (callback) {
        if (onReadyCalled)
            return callback();

        onReadyEvents.push(callback);
    };


    function initEngines() {
        var engines = targetLocale.engines || [];
        LDATA.engines = {};
        for (var i = 0; i < engines.length; i++) {
            if (Engines[engines[i]]) {
                LDATA.engines[engines[i]] = Engines[engines[i]];
            }
        }

        for (var engine_id in LDATA.engines) {
            if (LDATA.engines[engine_id].prepare)
                LDATA.engines[engine_id].prepare.call(LDATA.engines[engine_id]);
        }

        LDATA._e = {};
        if (LDATA.engines && '2' in LDATA.engines) {
            LDATA._e['2'] = LDATA.engines['2'];
            delete LDATA.engines['2'];
        }

    }

    // performs redirect
    // makes sure we are not in redirect loop
    performRedirect = function (targetUrl){
        // is no local storage, don't redirect
        if(!USE_LOCAL_DB)
            return true;
        // get last redirect
        var lastRedirect = LocalDB.getSync('lr');
        if(lastRedirect){
            // check that last redirect was not in the last 10 seconds
            lastRedirect = Number(lastRedirect);
            if(Date.now() - lastRedirect < 1000*10)
                return false;
        }
        // set current timestamp to be last redirect
        LocalDB.setSync('lr', Date.now() + '');
        // perform actual redirect
        LOC.href = targetUrl;
        return true;
    };

    function updateBablicHead() {
        if (WIN.angular)
            HAS_ANGULAR = true;

        // TODO remove this
        bablic.ldata = LDATA;

        SUPPORT_AJAX_NAVIGATE = doesSupportAjaxReplace(true);
        locales = bablic.locales = LDATA.locales;
        locale = LDATA.locale || '';
        targetLocale = $.grep(locales, function (l) {
            return l.key == locale;
        })[0];
        originalLocale = $.grep(locales, function (l) {
                return l.key == LDATA.orig;
            })[0] || $.grep(locales, function (l) {
                return l.key[0] == LDATA.orig[0] && l.key[1] == LDATA.orig[1];
            })[0];
        if (!originalLocale)
            originalLocale = locales[locales.length - 1];
        if (!targetLocale) {
            targetLocale = $.grep(locales, function (l) {
                    return l.key[0] == locale[0] && l.key[1] == locale[1];
                })[0] || originalLocale;
            locale = targetLocale.key;
            LDATA.locale = locale;
        }
        MOBILE = bablic.mobile = (Modernizr.touchevents && $.window.width() < 700);
        try {
            if (WIN.top.editor && WIN.top.editor.device() == 'mobile')
                MOBILE = bablic.mobile = true;
        }
        catch (e) {

        }
        bablic.locale = LDATA.locale;
        underlineLocale = LDATA.locale;
        bablic.targetLocale = targetLocale;
        bablic.originalLocale = originalLocale;
        bablic.original = LDATA.orig;
        localeLDATAs[bablic.locale] = LDATA;
        bablic.dontUseCookie = bablic.dontUseCookie || LDATA.dontUseCookie;

        if (bablic.locale) {
            if (!WIN.SCAN && (bablic.localeURL == 'subdir' || LDATA.localeDetection == 'subdir') &&
                LOC.pathname.indexOf('/' + bablic.locale + '/') == -1) {
                if (bablic.locale != bablic.original) {
                    if(doesSupportAjaxReplace() && !bablic.noReplaceState) {
                        if (bablic.replaceState)
                            bablic.replaceState(null, null, bablic.getLink(bablic.locale));
                        else if (WIN.history && WIN.history.replaceState)
                            WIN.history.replaceState(null, null, bablic.getLink(bablic.locale));
                    } else {
                        performRedirect(bablic.getLink(bablic.locale));
                    }
                }
//                setTimeout(prefetchOnFirstView, 2000);
            }
            LocalDB.setSync('locale', bablic.locale, true);
        }

        bablic.localeDetection = LDATA.localeDetection;
        LocalDB.setSync('original', LDATA.def || LDATA.orig, true);

        bablic.setMutationListen(false);

        /*** we will show the widget if
         * 1) This it the top frame
         * 2) The parent is Bablic Editor
         * 3) The parent is not
         *
         * We will hide the widget if
         * 1) This is an iframe, and the parent frame has bablic in it and isn't the Bablic Editor
         * 2) This is an iframe, and the parent frame is not accessable, and this domain is not the root domain
         */

        if (shouldShowWidget)
            bablic.showFlags();

        if (!bablic.preview)
            markupSEO();

        // Init bidi
        //bablic.BiDi.init();
        if (LDATA.bidi)
            Bidi.setDir(targetLocale.dir || 'ltr');


        $.byId('bablic_font_css').remove();

        if (targetLocale) {
            var customFontCSS = '';
            if (targetLocale.font) {
                var parts = targetLocale.font.split("#");
                if(parts.length > 1) {
                    customFontCSS = "@import url('" + parts[0] + "');\n *{font-family: \"" + parts[1] + "\", sans-serif !important; }";
                } else {
                    customFontCSS = "*{font-family: \"" + parts[0] + "\", sans-serif !important; }";
                }
            }
            $.byTag('head').append('<style type=\'text/css\' id=\'bablic_font_css\' bablic-exclude>' +
                customFontCSS +
                (bablic.locale != bablic.original ? '.bablic-hide-all,' : '') + '.bablic-hide-' + bablic.locale + '{display:none !important;} ' +
                '</style>');
            if (!$.byId('bablicDefault').length()) {
                var head = $.byTag('head').get(0);
                var first = head.firstElementChild;
                $('<style bablic-exclude id="bablicDefault">input{display:inline-block;}</style>').insertBefore(first);
            }
        }

        bablic.setMutationListen(true);

    }


    runHeadEngines = function () {
        // handle CSS engine separately, OPTIMIZATION
        bablic.setMutationListen(false);
        if (LDATA._e && '2' in LDATA._e) {
            LDATA.engines['2'] = LDATA._e['2'];
            var head = DOC.getElementsByTagName('HEAD')[0];
            if (readNodeAttr(head, 'bablic_last_value', head) !== getNodeValue(head)) {
                processNodeWithEngine(head, head, {}, '2');
                setNodeAttr(head, 'bablic_last_value', getNodeValue(head), head);
            }
            delete LDATA.engines['2'];
        }
        bablic.setMutationListen(true);
    };

    function markupSEO() {
        onReady(function () {
            if (bablic.noSEO || LDATA.localeDetection === "querystring")
                return;
            bablic.setMutationListen(false);
            var iso = targetLocale && targetLocale.iso ? targetLocale.iso : bablic.locale;
            $.byTag('html').attr('lang', iso);
            var $meta = $('head meta[http-equiv="Content-Language"]');
            if (!$meta.length())
                $meta = $('<meta http-equiv="Content-Language">').appendTo('head');
            $('meta[property="og:locale"]').attr('content', iso);
            $meta.attr('content', iso);
            var canonicals = [['link[rel="canonical"]', 'href'], ['meta[property="og:url"]', 'content']];
            $.each(canonicals, function (i, pair) {
                var $canonical = new $(pair[0]);
                var link = $canonical.attr(pair[1]);
                if (link) {
                    var parsed = parseURL(link);
                    var localizedURL = bablic.getLink(bablic.locale, parsed.hostname, link, null, null, null, null, null, true);
                    $canonical.attr(pair[1], localizedURL);
                }
            });
            bablic.setMutationListen(true);
        });
    }

    function seoAlternateLink(locale, href, iso) {
        if (LDATA.edit || LDATA.localeDetection === "querystring")
            return;
        if (bablic.noSEO)
            return;
        var hreflang = iso || locale;
        var $link = $('link[hreflang="' + hreflang + '"]');
        if (locale !== hreflang && !$link.length()) {
            $link = $('link[hreflang="' + locale + '"]');
        }
        if (!$link.length()) {
            $('<link rel="alternate" href="' + href + '" hreflang="' + hreflang + '">').appendTo('head');
        }
        if (locale === bablic.original) {
            $link = $('link[hreflang="x-default"]');
            if (!$link.length()) {
                $('<link rel="alternate" href="' + href + '" hreflang="x-default">').appendTo('head');
            }
        }
    }

    function getPackageFromCurrentPath() {
        if (!LDATA || !LDATA.packages)
            return 0;
        var path = normalizedCurrentPath();
        return getPackageFromPath(LDATA.packages, path);
    }

// GET Locale


// Fetch Content
    if (!bablic.Site && bablic.Account)
        bablic.Site = bablic.Account;

    bablic.explicitLocale = bablic.locale;

    if (!bablic.locale && !bablic.dontUseCookie)
        bablic.locale = LocalDB.getSync('locale', true);

    if (bablic.conf) {
        bablic._conf = bablic.conf;
        bablic.conf = decodeConf(bablic.conf);
    }
    bablic.original = LocalDB.getSync('original', true) || bablic.original || (bablic.conf && bablic.conf.orig) || (bablic.data && bablic.data.original);
    var BLOCK;

    siteConfReceived = function (conf) {
        var previousContent = LDATA && LDATA.content;
        var previousLocale = LDATA && LDATA.locale;
        var previousTimestamp = LDATA && LDATA.timestamp;
        LDATA = conf;

        //// TODO, remove this
        //LDATA.bidi = true;
        //LDATA.locales.forEach(function(locale){
        //    if(locale.key == 'ar' || locale.key == 'he')
        //        locale.engines.push(5);
        //});

        LDATA.locale = bablic.locale;
        if (previousLocale && bablic.locale == previousLocale) {
            LDATA.content = previousContent;
            if (previousTimestamp)
                LDATA.timestamp = Math.max(LDATA.timestamp, previousTimestamp);
        }
        if (bablic.localeURL)
            LDATA.localeDetection = bablic.localeURL;
        if (bablic.customUrls)
            LDATA.customUrls = bablic.customUrls;
        var block = Number(LocalDB.getSync('block', true));
        if (block && LDATA.timestamp <= block)
            BLOCK = true;
        // var domains = LDATA.domains;
        // var thisHost = (LOC.hostname || '').replace('www.', '');
        // if (bablic.version >= 3.9 && !bablic.preview && domains && thisHost && !WIN.SCAN && LOC.hostname.indexOf('checkout') == -1 && LOC.hostname.indexOf('cart') == -1) {
        //     var allowed = false;
        //     for (var i = 0; i < domains.length; i++) {
        //         var domain = domains[i];
        //         if (domain[0] == '*') {
        //             domain = domain.substr(2);
        //             var index = thisHost.lastIndexOf(domain);
        //             if (index > -1 || index == thisHost.length - domain.length) {
        //                 allowed = true;
        //                 break;
        //             }
        //         }
        //         else if (domain.replace('www.', '') == thisHost) {
        //             allowed = true;
        //             break;
        //         }
        //     }
        //     if (!allowed) {
        //         console.error('BABLIC: this domain is not allowed by your website configuration');
        //         //BLOCK = true;
        //     }
        // }
        if (BLOCK) {
            hideWidget();
            return;
        }
        LDATA.localeKeys = $.map(LDATA.locales, function (l) {
            return l.key;
        });
        if (LDATA.j) {
            try {
                const customScript = new Function(LDATA.j);
                customScript();
            }
            catch (e) {
                console.error('Error executing site custom script:', e);
            }
        }
        if (bablic.lc && !bablic._lc) {
            bablic._lc = String.prototype.localeCompare;
            String.prototype.localeCompare = function (str, locale, options, dont) {
                if (dont || targetLocale === originalLocale) {
                    return bablic._lc.apply(this, arguments);
                }
                return bablic._lc.call(bablic.__(this,null,true), bablic.__(str,null,true), bablic.locale, options);
            };
        }
        if( LDATA.keywords) {
            processKeywords(LDATA.keywords, LDATA.localeKeys);
        }

        updateBablicHead();

        initEngines();


        // Use pre-defined markup
        if (LDATA.exclude)
            excludeByCode(LDATA.exclude);
        if (LDATA.include)
            includeByCode(LDATA.include);
        if (LDATA.markup) {
            for (var key in LDATA.markup) {
                var value = LDATA.markup[key];
                if (!$.isArray(value))
                    value = [value];
                for (var i = 0; i < value.length; i++)
                    addMarkupByCode(key, value[i].sel, value[i].val);
            }
        }

        var page = normalizedCurrentPath();
        if (bablic.subDirBase)
            page = bablic.subDirBase + page;
        /**
         * Page is excluded if:
         * in the excludedPages we find a path that the page fit to, and the length of the path is higher then a path we find in the includePages list
         */
        bablic.setMutationListen(false);
        $.each(LDATA.locales, function (i, locale) {
            var hidden = false;
            if (!locale.formats) {
                locale.formats = {};
            }
            if (locale.dateFormat) {
                locale.formats.dateFormat = locale.dateFormat;
            }
            if (locale.timeFormat) {
                locale.formats.timeFormat = locale.timeFormat;
            }
            if(locale.key !== bablic.original) {
                var excludePages = LDATA.excludePages && $.map(LDATA.excludePages, normalizeSomePath);
                var includePages = LDATA.includePages && $.map(LDATA.includePages, normalizeSomePath);
                locale.excludePages = locale.excludePages && $.map(locale.excludePages, normalizeSomePath);
                locale.includePages = locale.includePages && $.map(locale.includePages, normalizeSomePath);
                hidden = isPageExcluded(page, excludePages, includePages, locale);
                if (hidden)
                    bablic.languages.hide(locale.key);
            }
            if (!hidden && !bablic.noHrefLangs)
                seoAlternateLink(locale.key, bablic.getLink(locale.key, null, null, null, null, null, null, null, true), locale.iso);
        });
        bablic.setMutationListen(true);
    };

    translationReceived = function (translation, dontProcessDOM) {
        if (!LDATA)
            return;
        if (BLOCK)
            return;
        if (!DOC.body)
            return;
        LDATA.content = translation;

        if (LDATA.draft){
            $.extend(LDATA.content, LDATA.draft);
        }

        migrateTranslationResponse(LDATA);

        if (!$.isEmptyObject(LDATA.engines)) {
            if (!dontProcessDOM) {
                bablic._processed = true;

                var keepSavedContents = savedContentNodes;
                savedContentNodes = [];
                runHeadEngines(true);
                // traverse
                if (!DOC.body.getAttribute('bablic-exclude'))
                    domTraverse($.byTag('html').get(0), bablic.UseInclude);
                mergeContentNodes(keepSavedContents);

                // send new content report
                if ((LDATA.fallback && !LDATA.edit) || LDATA.report)
                    send_ldata_report(true);
                if (LDATA.usage)
                    send_usage_report();


                // show page
                //if (!fallback_sent)
            }

            if (!bablic.dontListenToMutations) {
                bablic.Mutation.listen();
                Mutation.observeHead(function () {
                    if (!LDATA || !LDATA.locale)
                        return;
                    runHeadEngines(true);
                });
            }
        }
        // open OMG script if on editing
        if (LDATA.edit || LDATA.suggest) {
            addOMGScript();
        }


    }

    function loadAsyncTranslation() {
        getPageTranslations(function (err, translations) {
            if (err)
                return bablic.error(err);

            fallback_callback(translations);
        });
    }

    var hiddenTime, hiddenStart;

    var fetchedPackages = {};
    getPageTranslations = function (cbk, noCache) {
        if (bablic.locale && bablic.locale == bablic.original)
            return cbk(null, {});
        if (!LDATA)
            return cbk('no conf');

        var packageKey = getPackageFromCurrentPath();
        bablic.package = packageKey;
        if (bablic.dedicated || (packageKey == 0 && LDATA && LDATA.packages && Object.keys(LDATA.packages).length > 5)) {

            var page = normalizedCurrentPath();
            var cacheKey = LocalDB.getSync('@' + bablic.locale + '_' + page);
            if (noCache || !cacheKey || Number(cacheKey) < LDATA.timestamp - 1000) {
                var locale = bablic.locale;
                ajaxGet('//' + (bablic.dedicated || 'd3j4i2vulccply.cloudfront.net') + '?s=' + bablic.Site + '&l=' + locale + '&p=' + encodeURIComponent(page) + '&ts=' + (LDATA ? LDATA.timestamp : ''), null, function (translations) {
                    if (translations)
                        translations = decodeTranslationResponse(translations);

                    cbk(null, translations);
                    if (!translations || !LDATA)
                        return;

                    saveTranslationToLocaleStorage(locale, page, translations);
                    LocalDB.setSync('@' + locale + '_' + page, LDATA.timestamp);
                }, cbk);
            }
            else {
                fetchTranslationFromLocalStorage(bablic.locale, page, function (err, translations) {
                    if (err)
                        return getPageTranslations(cbk, true);

                    cbk(null, translations);
                });
            }
            return;
        }

        if ((bablic.locale + packageKey) in fetchedPackages)
            return cbk(null, fetchedPackages[bablic.locale + packageKey]);

        var cacheKey = LocalDB.getSync('@' + bablic.locale + '_' + packageKey);
        if (!cacheKey || Number(cacheKey) < LDATA.timestamp - 1000)
            return getPageTranslationsFromCDN(packageKey, cbk);

        // get page translation from local

        fetchTranslationFromLocalStorage(bablic.locale, packageKey, function (err, translations) {
            if (err)
                return getPageTranslationsFromCDN(packageKey, cbk);

            cbk(null, translations);
        });
    };


    function fetchTranslationFromLocalStorage(locale, packageKey, cbk) {
        var start = Date.now();
        LocalDB.getByPage(locale + '_' + packageKey, function (err, tc) {
            bablic.log('indexdb ', Date.now() - start);
            if (tc)
                fetchedPackages[locale + "_" + packageKey] = tc;
            cbk(err, tc);
        });
    }

    function saveTranslationToLocaleStorage(locale, path, translations) {
        LocalDB.setByPage(translations, locale + '_' + path);
    }


    function decodeTranslationResponse(response, fromEditor) {
        var parsed = {};
        for (var engineId in response) {
            for (var hashed in response[engineId]) {
                if (hashed == '__' || hashed == 'tags' || hashed == 'keys')
                    continue;
                var val = response[engineId][hashed];
                if (fromEditor) {
                    var wasMachine = false;
                    if (Array.isArray(val)) {
                        wasMachine = val[0];
                        val = val[1];
                    }
                    if (wasMachine) {
                        MACHINES[hashed] = true;
                    } else {
                        delete MACHINES[hashed];
                    }
                }
                parsed[engineId + '_' + hashed] = val;
            }
            if (response[engineId]['__']) {
                var empties = response[engineId]['__'].split(',');
                for (var i = 0; i < empties.length; i++) {
                    var emptyKey = engineId + '_' + empties[i];
                    if (!(emptyKey in parsed))
                        parsed[emptyKey] = '__empty__';
                }
            }
            var tags = response[engineId]['tags'];
            if (tags) {
                for (var tag in tags) {
                    tags[tag].forEach(function (h) {
                        TAGS[engineId + '_' + h] = TAGS[engineId + '_' + h] || {};
                        TAGS[engineId + '_' + h][tag] = 1;
                    });
                }
            }
            var byKeys = response[engineId]['keys'];
            if(byKeys) {
                BY_KEYS = byKeys;
            }
        }
        return parsed;
    }

    function getPageTranslationsFromCDN(packageKey, cbk) {
        var locale = bablic.locale;
        fetchFromCDN('/sites/' + bablic.Site + '/package.' + packageKey + '.' + locale, function (err, translations) {
            if (err)
                return cbk(err);
            if (translations)
                translations = decodeTranslationResponse(translations);

            cbk(null, translations);
            if (!translations || !LDATA)
                return;

            fetchedPackages[packageKey] = translations;
            saveTranslationToLocaleStorage(locale, packageKey, translations);
            LocalDB.setSync('@' + locale + '_' + packageKey, LDATA.timestamp);
        });
    }

    function getConfFromCDN(rev, cbk) {
        fetchFromCDN('/sites/' + bablic.Site + '/conf', function (err, rsp) {
            if (err)
                return cbk(err);
            if (rev == fetchRevision) {
                var conf = decodeConf(rsp);
                conf.locale = bablic.locale;
                var lastTS = conf.timestamp;
                siteConfReceived(conf);
                if (lastTS != conf.timestamp)
                    rsp[0] = conf.timestamp;
            }
            cbk();
            if (rev == fetchRevision)
                LocalDB.setConf(rsp);
        });
    }

    getConf = function (rev, cbk) {
        // first get from local db
        var conf = LocalDB.getConf() || bablic._conf;
        if (conf === 4000) {
            cbk(4000);
            // hide original language still
            $.byId("bablic_font_css").remove();
            $.byTag('head').append('<style type=\'text/css\' id=\'bablic_font_css\' bablic-exclude>' +
                (bablic.locale != bablic.original ? '.bablic-hide-all,' : '') + '.bablic-hide-' + bablic.locale + '{display:none !important;} ' +
                '</style>');
            return;
        }
        if (conf) {
            if (Array.isArray(conf))
                conf = decodeConf(conf);
            if (conf) {
                if(!LocalDB.getSync('limitHome', true) || isHomePage(true)) {
                    bablic.locale = conf.locale = bablic.detectLocale(conf);
                    underlineLocale = conf.locale;
                }
            }
        }
        if (!conf)
            return getConfFromCDN(rev, cbk);

        if (rev == fetchRevision)
            siteConfReceived(conf);
        cbk();
    }

    fetchSequence = function (rev, cbk, noHome) {
        var start = Date.now(), stats = {};
        if (bablic.preview || bablic.previewMode) {
            // clear content so new elements will be reported again
           if (LDATA && LDATA.content) {
               stashPreviousContent(LDATA.content);
               LDATA.content = {};
           }
            ajaxGet('/api/engine/editor', null, function (response) {
                stats.translationTime = stats.confTime = Date.now() - start;
                if (rev === fetchRevision) {
                    if (response.bablic && response.bablic.code) {
                        EDITOR.handleConfError(response.bablic);
                        return;
                    }
                    siteConfReceived(response.conf);
                }
                triggerEvent('locale', [bablic.locale]);
                if (response.translations)
                    response.translations = decodeTranslationResponse(response.translations, true);

                if (MACHINES && Object.keys(MACHINES).length && bablic.ldata){
                    bablic.ldata.machines = bablic.ldata.machines || {};
                    $.extend(bablic.ldata.machines, MACHINES);
                }

                if (response.draft){
                    bablic.ldata.draft = bablic.ldata.draft || {};
                    $.extend(bablic.ldata.draft, response.draft);
                }


                bablic.package = getPackageFromCurrentPath();
                cbk(null, stats, response.translations);
            }, function (error) {
                console.error(error);
            }, true);
            return;
        }
        if (bablic.dedicated && bablic.locale != bablic.original) {
            var translations;
            parallel([
                function (cbk) {
                    getConf(rev, function (err) {
                        if (err)
                            return cbk(err);
                        stats.confTime = Date.now() - start;
                        triggerEvent('locale', [bablic.locale]);
                        cbk();
                    });
                },
                function (cbk) {

                    getPageTranslations(function (err, t) {
                        if (err)
                            return cbk(err);
                        translations = t;
                        stats.translationTime = Date.now() - start;
                        cbk();
                    });
                }
            ], function (err) {
                if (err)
                    return cbk(err);
                cbk(null, stats, translations);
            });
            return;
        }
        var locale = bablic.locale;

        if (!noHome && locale != bablic.original && !WIN.SCAN && isHomePage()) {
            var homeTranslations = LocalDB.getSync('home_' + locale);
            if (homeTranslations) {
                try {
                    homeTranslations = JSON.parse(homeTranslations);
                }
                catch (e) {
                    homeTranslations = null;
                }
            }
            if (homeTranslations) {
                getConf(rev, function (err) {
                    if (err)
                        return cbk(err);
                    stats.translationTime = stats.confTime = Date.now() - start;
                    homeTranslations = decodeTranslationResponse(homeTranslations);
                    triggerEvent('locale', [locale]);
                    cbk(null, stats, homeTranslations);
                });
            }
            else {
                fetchFromCDN('/sites/' + bablic.Site + '/home.' + locale, function (err, response) {
                    if (err) {
                        bablic.error(err);
                        return fetchSequence(rev, cbk, true);
                    }
                    stats.translationTime = stats.confTime = Date.now() - start;
                    if (rev == fetchRevision) {
                        var conf = decodeConf(response.conf);
                        conf.locale = locale;
                        var lastTS = conf.timestamp;
                        siteConfReceived(conf);
                        if (lastTS != conf.timestamp)
                            response.conf[0] = conf.timestamp;
                        triggerEvent('locale', [locale]);
                    }
                    var translations = decodeTranslationResponse(response.translations);
                    cbk(null, stats, translations);

                    if (rev == fetchRevision) {
                        LocalDB.setConf(response.conf);
                        LocalDB.setSync('home_' + locale, JSON.stringify(response.translations));
                    }
                });
            }
            return;
        }
        getConf(rev, function (err) {
            if (err)
                return cbk(err);
            stats.confTime = Date.now() - start;
            triggerEvent('locale', [locale]);
            start = Date.now();
            getPageTranslations(function (err, translations) {
                if (err)
                    return cbk(err);
                stats.translationTime = Date.now() - start;
                cbk(null, stats, translations);
            });
        });
    }

    function isHomePage(detectAlsoIndex) {
        var domain = bablic.getCurrentOtherDomain && bablic.getCurrentOtherDomain();
        if (domain)
            return false;
        var homePath = (bablic.conf && bablic.conf.domain) || (bablic.data && bablic.data.domain);
        if (homePath && homePath.indexOf('/') > -1)
            homePath = homePath.substr(homePath.indexOf('/'));
        else
            homePath = "/";
        var path = normalizedCurrentPath();
        if (bablic.subDirBase)
            path = bablic.subDirBase + path;
        if (detectAlsoIndex) {
            return path == homePath.toLowerCase() || path == '/' || path.indexOf('/index.') == 0;
        }
        return path == homePath.toLowerCase();
    }

    function limitToHomePage(isOwner) {
        if(isHomePage(true))
            return;
        bablic.widget.hide();
        if (bablic.locale !== bablic.original) {
            bablic.log('limit to home page');
            var locale = bablic.locale;
            bablic.languages.hide(locale);
            LocalDB.setSync('locale', locale);
        }
        if(isOwner) {
            showLimitHomeMessage();
        }
    }

    ping = function (params) {
        var err = params.err
            , shouldHide = params.shouldHide
            , stats = params.stats
            , detectedLocale = params.detectedLocale
            , path = params.path;

        if (bablic.preview || bablic.previewMode) {
            LDATA.report = true;
            LDATA.owner = true;
            LDATA.usage = true;
            LDATA.machine = true;
            send_ldata_report(true);
            send_usage_report();
            return;
        }
        if (isBot()) {
            return;
        }
        ajaxPost('/api/engine/pling', encodePing({
            timestamp: LDATA && Math.round(LDATA.timestamp / 1000),
            snippetTimestamp: bablic.snippetTimestamp,
            error: err,
            locale: bablic.locale,
            original: bablic.original,
            didHide: shouldHide,
            confTime: stats && stats.confTime,
            translationTime: stats && stats.translationTime,
            hiddenTime: hiddenTime,
            detected: detectBrowserLocale(),
            page: pageUri(),
            detectedLocale: detectedLocale,
            hasLocalStorage: HAS_LOCAL_STORAGE,
            hasIndexDB: !!WIN.indexedDB,
            path: path,
            nonBlocking: nonBlocking,
            version: bablic.version,
            parseVersion: bablic.parseVersion,
        }), function (rsp) {
            // // TODO, turn on this feature
            // if(rsp.limitHome)
            //     rsp.limitHome = false;
            // if (rsp.locale && !rsp.limitHome && bablic.locale != rsp.locale)
            //     rsp.clear = true;
            // if (rsp.locale && !rsp.limitHome) {
            //     bablic.locale = rsp.locale;
            //     underlineLocale = rsp.locale;
            // }
            if (rsp.error) {
                bablic.widget.hide();
                if(bablic.locale !== bablic.original)
                    bablic.languages.hide(bablic.locale);
                if (rsp.error == 4000 && rsp.owner)
                    showTurnedOffMessage();
                LocalDB.setConf(4000);
                fetchedPackages = {};
                return;
            }
            if (rsp.machine && LDATA)
                LDATA.machine = true;
            if (rsp.owner && LDATA)
                LDATA.owner = rsp.owner;
            if (rsp.clear || rsp.error) {
                turnOffCDN();
                var wasFallback;
                if (LDATA) {
                    wasFallback = LDATA.fallback;
                    LDATA.timestamp = rsp.ts;
                    LDATA.report = false;
                    LDATA.fallback = false;
                }
                fetchedPackages = {};
                bablic._conf = null;
                LocalDB.clearAll(function () {
                    if (rsp.error)
                        return;
                    var rev = ++fetchRevision;
                    fetchSequence(rev, function (err, stats, translations) {
                        if (err)
                            bablic.error('Error fetching 2nd time', err);
                        if (rsp.report)
                            LDATA.report = true;
                        if (rsp.usage)
                            LDATA.usage = true;
                        LDATA.fallback = wasFallback;
                        if (translations && rev == fetchRevision) {
                            if (LDATA.content)
                                fallback_callback(translations);
                            else
                                translationReceived(translations);
                        }

                        if (shouldShowWidget)
                            bablic.showFlags();
                    });
                });
            }
            if (rsp.block) {
                if (LDATA) {
                    LDATA.timestamp = rsp.block;
                    var conf = encodeConf(LDATA);
                    LocalDB.setConf(conf);
                    LocalDB.setSync('block', rsp.block, true);
                    if (bablic.locale != bablic.original)
                        bablic.redirectTo(bablic.original);
                    if (LDATA.widget) {
                        if (LDATA.widget[0])
                            LDATA.widget[0].show = false;
                        if (LDATA.widget[1])
                            LDATA.widget[1].show = false;
                    }
                    hideWidget();
                    fetchedPackages = {};
                }
                if (rsp.owner) {
                    if(rsp.reason === "expired")
                        showMessage('trialExpired');
                    else if(rsp.reason === "quota")
                        showMessage('quota');
                }
            }
            else
                LocalDB.setSync('block', '', true);
            if (rsp.limitHome) {
                LocalDB.setSync('limitHome', '1', true);
                limitToHomePage(rsp.owner);
            } else if(LocalDB.getSync('limitHome', true)){
                LocalDB.setSync('limitHome', '', true);
                if(!isHomePage(true))
                    LOC.reload();
            }
            if (rsp.expired) {
                bablic.expired = true;
                if (shouldShowWidget)
                    bablic.showFlags();
                if (rsp.owner) {
                    showMessage('trialExpired');
                }
            }

            if (rsp.scanning && LDATA)
                LDATA.scanning = true;

            if (rsp.recordPolicy){
                LDATA.recordPolicy = rsp.recordPolicy;
            }
            if (rsp.report && !rsp.clear) {
                LDATA.report = true;
                send_ldata_report(true);
            }


            if (rsp.usage && !rsp.clear) {
                LDATA.usage = true;
                send_usage_report();
            }
        }, true);
    };

    var shouldnt_work = function () {
        // is in Duda editor
        if (window.Parameters && Parameters.isRuntimeServer === false && window.editorParent && editorParent.document) return true;
        if (window.Squarespace) {
            try {
                if (parent.location.pathname.indexOf('/config') > -1)
                    return true;
                if (parent != top && top.location.pathname.indexOf('/config') > -1)
                    return true;
            }
            catch (e) {
            }
            return false;
        }
        try {
            if (top.location.href.indexOf("shopify.com/admin") > -1) {
                return true;
            }
            else if (window.Weebly && (parent.location.pathname.indexOf('/editor/preview') > -1)) {
                return true;
            }
        } catch (e) {
        }
        return false;
    };

    var checkIframeSituation = function () {
        try {
            var baseDomain = (bablic.conf && bablic.conf.domain) || (bablic.data && bablic.data.domain);
            var p = WIN.parent;
            if (p && p != WIN) {
                var isAccessible = true;
                try {
                    var a = null;
                    a = WIN.parent.location.hostname;
                    a.indexOf('/');
                }
                catch (e) {
                    isAccessible = false;
                }
                if (isAccessible && p.bablic && !p.bablic.isAdmin) {
                    shouldShowWidget = false;
	                p.bablic.on('locale', function (locale) {
	                    if (locale != bablic.locale)
	                        bablic.redirectTo(locale);
	                });
                    bablic.widget.hide();
                }
                else if (!isAccessible && baseDomain) {
                    var baseDomain = baseDomain.split('/')[0];
                    if (LOC.hostname.lastIndexOf(baseDomain) != LOC.hostname.length - baseDomain.length) {
                        shouldShowWidget = false;
                        var onMessage = function (evt) {
                            try {
                                if (typeof(evt.data) != 'string')
                                    return;
                                var data = JSON.parse(evt.data);
                                if (data.type != 'locale')
                                    return;
                                if (!data.locale)
                                    return;
                                if (data.locale != bablic.locale)
                                    bablic.redirectTo(data.locale);
                            }
                            catch (e) {
                            }
                        };
                        if (WIN.addEventListener)
                            WIN.addEventListener("message", onMessage, false);
                        else
                            WIN.attachEvent("onmessage", onMessage);
                        p.postMessage(JSON.stringify({type: 'ping', site: bablic.Site}), "*");
                    }
                }
            }

            if (shouldShowWidget) {
                var onMessage = function (evt) {
                    try {
                        var data = JSON.parse(evt.data);
                        if (data.type != 'ping')
                            return;
                        var source = evt.source;
                        if (source == WIN)
                            return;
                        bablic.on('locale', function (code) {
                            source.postMessage(JSON.stringify({type: 'locale', locale: code}), "*");
                        });
                    }
                    catch (e) {
                    }
                };
                if (WIN.addEventListener)
                    WIN.addEventListener("message", onMessage, false);
                else
                    WIN.attachEvent("onmessage", onMessage);

            }
        }
        catch (e) {
            bablic.error(e);
        }
    }

    function isNonBlocking() {
        // if no body yet, that means we are in the head, use blocking
        if (!DOC.body)
            return false;
        // if the last child is not our script, use we are in non-blocking
        var lastChild = DOC.body.lastElementChild;
        if (!lastChild || lastChild.tagName !== 'SCRIPT' || lastChild.src.indexOf('bablic.com') === -1)
            return true;
        if (!NON_VISUAL_TAGS)
            return true;
        // if any of the previous siblings is a visual element, we are in non-blocking
        while(lastChild) {
            if (lastChild.tagName && !(lastChild.tagName in NON_VISUAL_TAGS)) {
                return true;
            }
            lastChild = lastChild.previousElementSibling;
        }
        // that means that this script is the last element in the body, and all elements before are non visual
        return false;
    }

    function checker() {
        try {
            if (!document.querySelector)
                return 1;
            var scripts = document.querySelectorAll('head script:not([src])');
            if (!scripts)
                return 1;

            for (var i = 0; i < scripts.length; i++) {
                var script = scripts[i];
                if (script._babChk)
                    continue;
                if (script.innerHTML.indexOf('shopify-bablic-check') > -1)
                    return 1;
                if (script.innerHTML.indexOf("window.addEventListener('load', asyncLoad')") > -1)
                    return -1;
                script._babChk = 1;
            }
            if (document.body && document.body.childNodes && document.body.childNodes.length)
                return -1;
            return 0;
        }
        catch (e) {
            return 1;
        }
    }


    bablic.start = function () {
        if(bablic.integrateI18n && !explicitPage)
            return;
        if (isBablicInlineEdit) {
            if (HAS_LOCAL_STORAGE) {
                localStorage.setItem('bab-inline', '1');
            }
            onReady(function () {
                bablic.openInlineEditor();
            });
        }
        if (shouldnt_work())
            return bablic._locked = true;
        // if (bablic.Site === "63e2491ec2db760001861fb9")
        //     bablic.ignoreQs = 1;
        // if (bablic.waitForChecker) {
        //     var checkerInt = setInterval(function () {
        //         var val = checker();
        //         if (val == 0)
        //             return;
        //         clearInterval(checkerInt);
        //         if (val == -1) {
        //             bablic.widget.hide();
        //             bablic.redirectTo(bablic.original);
        //         }
        //     }, 100);
        // }
        if (DOC.getElementsByTagName('HEAD')[0] && DOC.getElementsByTagName('HEAD')[0].attributes['bablic-status'] && LDATA) {
            bablic.Mutation.listen();
            // open OMG script if on editing
            if (LDATA.edit || LDATA.suggest) {
                addOMGScript();
            }
            triggerEvent('done', [bablicDTO()]);
            return;
        }

        checkIframeSituation();

        /***
         * Sequence
         * 1) Check if need to hide page (if page should be translated or we don't know)
         *
         * 2.1) Get Site Conf
         * 2.2) Get Page Content
         *
         * 3) Show translation on page
         * 4) Show page, trigger done events
         */
        var detectedLocale = bablic.detectLocale(null, {initial: true});
        if (detectedLocale === 0)
            return;
        if(LocalDB.getSync('limitHome', true) && !isHomePage(true)) {
            detectedLocale = bablic.original;
        }
        bablic.detectedLocale = detectedLocale;
        bablic.locale = detectedLocale || bablic.locale;

        if (bablic.__defineSetter__) {
            if (bablic.preview) {
                underlineLocale = bablic.locale;
                bablic.__defineSetter__('locale', function () {
                });
                bablic.__defineGetter__('locale', function () {
                    return underlineLocale;
                });
            }
            var _localeURL = bablic.localeURL;
            bablic.__defineSetter__('localeURL', function () {
                console.log("cannot set localeURL after script load", (new Error()).stack);
            });
            bablic.__defineGetter__('localeURL', function () {
                return _localeURL;
            });
        }

        var shouldHide = !bablic.dontHide && !nonBlocking && !(bablic.locale && bablic.original && bablic.locale[0] == bablic.original[0] && bablic.locale[1] == bablic.original[1]);

        if (shouldHide && WIN.navigator && navigator.appVersion && navigator.appVersion.indexOf('Chrome/62') > -1)
            shouldHide = false;

        bablic.loaded = true;
        if (shouldHide)
            hidePage();
        // check session exists

        var rev = ++fetchRevision;
        var start = Date.now();
        setTimeout(function () {
            fetchSequence(rev, function (err, stats, translations) {
                bablic.log('fetch time', Date.now() - start);
                start = Date.now();
                onReady(function () {
                    bablic.log('dom load', Date.now() - start);
                    if (translations && rev == fetchRevision) {
                        start = Date.now();
                        translationReceived(translations);
                        bablic.log('process time', Date.now() - start);
                    }

                    if (shouldHide)
                        showPage2();

                    if (err)
                        bablic.error(err);

                    bablic.setMutationListen(false);

                    triggerEvent('done', [bablicDTO()]);
                    triggerEvent('translated', [bablicDTO()]);
                    $.byTag('head').attr('bablic-status', 'loaded');

                    if (!WIN.JSON || !JSON.stringify || !JSON.parse) {
                        // add the JSON script
                        var bab = DOC.createElement('script');
                        bab.type = 'text/javascript';
                        bab.async = true;
                        bab.src = ('https:' == LOC.protocol ? 'https://' : 'http://') + CDN_PATH + '/js/json.min.js';
                        var s = DOC.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(bab, s);
                    }

                    bablic.setMutationListen(true);
                    if (bablic.locales && shouldShowWidget && LDATA.widget && LDATA.widget[0] && LDATA.widget[0].show)
                        setInterval(function () {
                            var shownLanguages = $.grep(bablic.locales, function (l) {
                                var conf = LocaleSettings[l.key];
                                if (!conf)
                                    return true;
                                return !conf.hidden;
                            });
                            if (!shownLanguages.length || (shownLanguages.length == 1 && shownLanguages[0] == originalLocale))
                                return;
                            if (!$.byId('bablicFlagsWidget').length() && (!bablic.widgetConf || bablic.widgetConf.show))
                                bablic.showFlags(bablic.widgetConf);
                        }, 1000);


                    if (!ASYNC_FETCH_OFF)
                        setTimeout(loadAsyncTranslation, 1000);


                    var path = normalizedCurrentPath();
                    bablic.log('hidden time ' + hiddenTime);
                    if (stats) {
                        bablic.log('conf time ' + stats.confTime);
                        bablic.log('translation time ' + stats.translationTime);
                    }
                    ping({
                        err: err,
                        shouldHide: shouldHide,
                        stats: stats,
                        detectedLocale: detectedLocale,
                        path: path
                    });


                });
            });
        }, 0);

        if (shouldHide) {
            setTimeout(function () {
                showPage2();
            }, 4000);
        }

        if (bablic.registerKey)
            bablic.registerKey();


        var HISTORY = WIN.history;

        if (HISTORY && HISTORY.pushState && HISTORY.pushState.bind && !isBot()) {

            onStateChanges = function () {
                try {
                    var previousStateTranslations = LDATA.content;
                    var afterPageChanged = function() {
                        var locale = LDATA.locale;
                        var rev = ++fetchRevision;
                        var newContentCount = 0;
                        for (var key in new_content)
                            newContentCount += Object.keys(new_content[key]).length;
                        fetchSequence(rev, function (err, stats, translations) {
                            if (!translations)
                                return;
                            if (rev != fetchRevision)
                                return;
                            for (var key in translations) {
                                if (!(key in previousStateTranslations) || previousStateTranslations[key] == '__empty__')
                                    previousStateTranslations[key] = translations[key];
                            }
                            if (locale != LDATA.locale)
                                return;
                            LDATA.content = previousStateTranslations;
                            var keepSavedContents = savedContentNodes;
                            savedContentNodes = [];
                            var afterNewContentCount = 0;
                            for (var key in new_content)
                                afterNewContentCount += Object.keys(new_content[key]).length;

                            _forceTraverse = bablic.preview || afterNewContentCount > newContentCount;
                            domTraverse($.byTag('html').get(0), bablic.UseInclude);
                            _forceTraverse = false;
                            mergeContentNodes(keepSavedContents);
                            // make the record send the already loaded items too
                            if (bablic.preview) {
                                flushMergedNodes();
                                var newText = new_content[1];
                                savedContentNodes.forEach(function (savedNode) {
                                    if (!savedNode.a) return;
                                    var hash = savedNode.hash;
                                    if (hash in LDATA.content) return;
                                    var parts = hash.split("_");
                                    if (parts[0] !== "1") return;
                                    var onlyHash = parts[1];
                                    var exists = newText[onlyHash];
                                    if (!exists) {
                                        newText[onlyHash] = {
                                            // TODO, try remove this _new and see what happens
                                            _new: true,
                                            content: savedNode.content,
                                            elements: [savedNode.element],
                                            nodes: [savedNode.node],
                                            markup: {},
                                            a: true,
                                            tags: {},
                                        };
                                    }
                                });
                                sentReport = {};
                            }
                            ping({});
                        });
                    };
                    if (bablic.preview && WIN.omg) {
                        previousStateTranslations = {};
                        var raceEnded = false;
                        var raceGoal = function() {
                            if (raceEnded ) return;
                            raceEnded = true;
                            afterPageChanged();
                        };
                        omg.onPageChanged(raceGoal);
                        setTimeout(raceGoal, 10000);
                    } else {
                        afterPageChanged();
                    }

                }
                catch (e) {
                    bablic.error(e);
                }
            };

            var _pushState = HISTORY.pushState;
            var _replaceState = HISTORY.replaceState;
            bablic.pushState = _pushState.bind(HISTORY);
            bablic.replaceState = _replaceState.bind(HISTORY);

            try {
                HISTORY.pushState = function () {
                    if (!LDATA)
                        return _pushState.apply(HISTORY, arguments);
                    var before = normalizedCurrentPath();
                    var ret = _pushState.apply(HISTORY, arguments);
                    triggerEvent("pageChange");
                    var after = normalizedCurrentPath();
                    if (before == after)
                        return ret;
                    var url = arguments[2];
                    if (typeof(url) == 'string')
                        onStateChanges();
                    return ret;
                };
                HISTORY.replaceState = function () {
                    if (!LDATA)
                        return _pushState.apply(HISTORY, arguments);
                    var before = normalizedCurrentPath();
                    var ret = _replaceState.apply(HISTORY, arguments);
                    triggerEvent("pageChange");
                    var after = normalizedCurrentPath();
                    if (before == after)
                        return ret;
                    var url = arguments[2];
                    if (typeof(url) == 'string')
                        onStateChanges();
                    return ret;
                }
            }
            catch (ex) {
            }
        }
    };


    function migrateTranslationResponse(ldata) {
        var content = ldata.content;
        var newContent = {}, replaced = false;
        for (var key in content) {
            if (key.length == 42) {
                replaced = true;
                var parts = key.split('_');
                var hashed = parts[1];
                var str = [];
                for (i = 0; i < 20; i++) {
                    str.push(String.fromCharCode((parseInt(hashed[i * 2], 16) << 4) + parseInt(hashed[i * 2 + 1], 16)));
                }
                var base64 = WIN.btoa(str.join(''));
                newContent[parts[0] + '_' + base64] = content[key];
            }
            else
                newContent[key] = content[key];
        }
        if (replaced)
            ldata.content = newContent;
    }


//// get this page LDATA
//function refetchLDATA(cbk) {
//    fetchSequence(function(){
//
//    })
//}

//bablic.injectLDATA = function (ldata) {
//    //bablic.$ = bablic.jQuery = jQuery;
//    //bablic.jqueryLoad();
//    LDATA = ldata;
//    ldataReceived();
//};


    parallel = function (funcs, final) {
        var returned = funcs.length, results = new Array(funcs.length);
        if (!funcs.length)
            return final(null, results);
        for (var i = 0; i < funcs.length; i++) {
            (function (i) {
                funcs[i](function (err, response) {
                    if (err) {
                        final && final(err);
                        final = null;
                        return;
                    }
                    results[i] = response;
                    if (--returned === 0) {
                        final && final(null, results);
                        final = null;
                    }
                });
            })(i);
        }
    }

    parallelEach = function (arr, func, final) {
        return parallel($.map(arr, function (item) {
            return function (cbk) {
                func(item, cbk);
            };
        }), final);
    };

    //var liveChats = {
    //    zopim: function (locale) {
    //        if (!WIN.$zopim)
    //            return;
    //        $zopim.livechat.setLanguage(locale);
    //    }
    //};

    var CLEAN_TEXT = /Google\s+Imagery|BESbewy/i;

    function turnOffLJZ() {
        document.body.setAttribute('notranslate', 'notranslate');
        $.byId('localize-widget').remove();
        var onInserted = function (e) {
            if (e.target && e.target.id == 'localize-widget' && e.target.parentNode) {
                e.target.parentNode.removeChild(e.target);
                $(DOC.body).off('DOMNodeInserted', onInserted);
            }
        };
        $(DOC.body).on('DOMNodeInserted', onInserted);
    }

    function stashPreviousContent(content) {
        PREVIOUSLY_USED_CONTENT = PREVIOUSLY_USED_CONTENT || {};
        for (var key in content) {
            PREVIOUSLY_USED_CONTENT[key] = content[key];
        }
    }
    var minimized = false;
    var opened = false;
    onReady(function () {
        if (window.Localize)
            turnOffLJZ();
        if (window.google && window.google.translate)
            delete window.google.translate;
        $.byClass('goog-te-gadget').remove();


        if (bablic.previewMode){
            var body = WIN.top.document.body || DOC.body;
            var host = bablic.debug ? "https://staging.bablic.com" : "https://legacy.bablic.com";
            var existingIframe = WIN.top.document.getElementById("bablicFloatingHeader");
            var iframe;
            if (existingIframe){
                iframe = existingIframe;
                if (iframe.style.height != "60px"){
                    opened = true;
                }
                if (iframe.style.width != "1000px"){
                    minimized = true;
                }
            }else {
                iframe = DOC.createElement('iframe');
                iframe.id = "bablicFloatingHeader";
                iframe.className = "bablicFloatingHeader";

                iframe.allowTransparency = "true";
                iframe.frameBorder = "0";
                iframe.setAttribute('bablc-exclude', 'true');
                iframe.style.backgroundColor = "background-color:transparent";
                iframe.style.position = "fixed";
                iframe.style.width = "1000px";
                iframe.style.bottom = "30px";
                iframe.style.top = "auto";
                iframe.style.left = "0";
                iframe.style.right = "0";
                iframe.style.margin = "auto auto";
                iframe.style.borderRadius = "30px";
                iframe.style.height = "60px";
                iframe.style.boxShadow = "0 1px 3px 0px rgb(0 0 0 / 40%)";

                var l = (bablic.locale && bablic.locale != bablic.original  ? '?locale=' + bablic.locale : "");

                iframe.src = host + "/editor/preview/header" + l;

                setZIndex(iframe);
                body.insertBefore(iframe, body.firstChild);
            }

            var winTop = WIN.top;

            function handleMessage(e) {
                if (e.data == "minimize"){
                    if (minimized) {
                        minimized = false;
                        iframe.style.width = "1000px";
                    }else{
                        minimized = true;
                        iframe.style.width = "220px";
                    }
                }else if (e.data == "menuOpen"){
                    if (opened) {
                        opened = false;
                        iframe.style.height = "60px";
                        iframe.style.boxShadow = "rgb(0 0 0 / 40%) 0px 1px 3px 0px"
                    }else{
                        opened = true;
                        iframe.style.height = "300px";
                        iframe.style.boxShadow = "none"
                    }
                } else if (e.data == "exit"){
                    LocalDB.clearSync('previewMode');
                    if (winTop.location.href.indexOf("bablic") > -1) {
                        winTop.location = host + "/adminpanel?site=" + bablic.Site;
                    }else{
                        LOC.reload();
                    }

                } else if (e.data == "visual"){
                    LocalDB.clearSync('previewMode');
                    LOC.href = host + "/editor";
                } else if (e.data && e.data.method == "changeLocale"){
                    if (winTop.EditorHeader){
                        var page = pageUri(true);
                        if (page && page != "blank"){
                            winTop.VisualEditor.page = page;
                        }
                        winTop.EditorHeader.switchLocale(e.data.key);
                    }else{
                        var shouldAddPreviewHash = bablic.localeDetection != "querystring";
                        bablic && bablic.redirectTo(e.data.key, {forceRedirect:true, addPreviewHash: shouldAddPreviewHash})
                    }

                    // simulate close
                    handleMessage({data: "menuOpen"});
                }
            }
            WIN.top.addEventListener('message', handleMessage, false);
        }

    });


    $(DOC).on('click', function (e) {
        if (e.target && e.target.attributes && e.target.attributes['bablic-generated-button']){
            var $text = $(e.target).parent().children("[bablic-generated-text]");
            if ($text && $text.element){
                var text = $text.element[0].innerHTML;
                var hash = bablicHash(text.trim().toLowerCase());
                ajaxPost('/api/engine/user-content',{
                    content: {
                        hashed_content: hash,
                        text: text,
                    }
                },function(response){
                    if (response && response.t){
                        $text.element[0].innerHTML = response.t;
                        $(e.target).hide();
                    }
                });
            }
        }
    });

    bablic.search = function(text, cbk){
        if (!cbk || !text || text.length < 4 || text.length > 30){
            return text;
        }

        ajaxPost('/api/engine/search',{
            content: {
                text: text,
            }
        },function(response){
            cbk & cbk(response.t);
        });
    }


    if (window.Text && window.Text.prototype && !window.Text.prototype.getBoundingClientRect) {
        var fakeRect = {width: 0};
        window.Text.prototype.getBoundingClientRect = function () {
            return fakeRect;
        }
    }
    WIN._bab = bablic;
})(bablic);
;
(function(bablic){
onReady(function(){
    setTimeout(function(){
        bablic.on('locale',function(){
            var language = bablic.getLocale();
            if(WIN.$zopim && WIN.$zopim.livechat){
                WIN.$zopim.livechat.setLanguage(language.substr(0,2));
            }
        });
    },2000);
});
})(bablic);
;
(function(){
    if(bablic.checkout !== false && WIN.Shopify && LOC.pathname.indexOf('/checkouts/') > -1){
        if(LOC.search.indexOf('locale=') == -1){
            var isFirst = true;
            bablic.on('locale',function(){
                if(!isFirst)
                    return;
                isFirst = false;
                var last = nonBlocking;
                nonBlocking = false;
                var locale = bablic.detectLocale();
                nonBlocking = last;
                if(locale && (!Shopify.Checkout.locale || Shopify.Checkout.locale[0] != locale[0] || Shopify.Checkout.locale[1] != locale[1]))
                    bablic.redirectTo(locale);
            });
        }
    }


    var bablicToShopifyLocales = {
        pt: "pt_PT",
        en_us: "en",
    }

    function formatToShopifyLocale(locale) {
        locale = bablicToShopifyLocales[locale] || locale;

        if (locale.includes("_")) {
            var countryCode = locale.split("_")[0];
            var regionCode = locale.split("_")[1];
            locale = countryCode.toLowerCase() + "-" + regionCode.toUpperCase();
        }

        return locale;
    }

    function updateShopifyCart(){
        var locale = bablic.getLocale();
        var form;

        form = $.byTag('form').filter('[action*="account"]');
        form.each(function(){
            var thisForm = this;
            var baseDomain = (bablic.conf && bablic.conf.domain) || (bablic.data && bablic.data.domain);
            if(bablic.localeDetection == 'custom' && baseDomain) {
                var sleshIndex = baseDomain.indexOf('/');
                if(sleshIndex > -1)
                    baseDomain = baseDomain.substr(0,sleshIndex);

                var actionURL = thisForm.getAttribute('action');
                var parsed = parseURL(actionURL);
                if (actionURL && parsed.hostname != LOC.hostname && parsed.hostname == baseDomain){
                    thisForm.setAttribute('action',parsed.protocol + '//' + LOC.hostname + parsed.pathname + parsed.query + parsed.hash);
                }
            }
            if(!this.querySelector)
                return;

            var languageInput = this.querySelector('input.bablicCustomerLocale');
            if(languageInput)
                languageInput.setAttribute('value','babl#' + locale + 'babl#');
            else
                $(thisForm).append('<input type="hidden" class="bablicCustomerLocale" name="customer[tags][locale]" value="babl#' + locale + 'babl#" />');
        });
        if(bablic.checkout !== false) {
            form = $.byTag('form').filter('[action^="/checkout"],[action^="/cart"]');
            form.each(function () {
                var thisForm = $(this);
                if (this.querySelector) {
                    var languageInput = this.querySelector('input[name="attributes[language]"]');
                    if (languageInput)
                        languageInput.setAttribute('value', locale);
                    else
                        $(thisForm).append('<input type="hidden" name="attributes[language]" value="' + locale + '" />');
                }

                var oldAction = thisForm.attr('action');
                var parsed = parseURL(oldAction);
                var search = parsed.query ? parsed.query.replace(/locale=[^&]*&?/, '') : '?';
                if (search[search.length - 1] == '?' || search[search.length - 1] == '&') {
                    search += 'locale=' + formatToShopifyLocale(locale);
                }else {
                    search += '&locale=' + formatToShopifyLocale(locale);
                }


                var newAction = parsed.pathname + search;
                if (oldAction == newAction)
                    return;

                var bta = thisForm.children('.bta-loading');
                if (bta.length() && bta.css('display') !== 'none')
                    return;
                thisForm.attr('action', newAction);
            });
            var buttons = $('button[onclick]');
            buttons.each(function () {
                var button = $(this);
                var onclick = button.attr('onclick');
                var replaced = onclick.replace(/(['"])(\/(?:checkout|cart)\b.*)(['"])/g, function (a0, opening, url, closing) {
                    var parsed = parseURL(url);
                    var search = parsed.query ? parsed.query.replace(/locale=[^&]*&?/, '') : '?';
                    if (search[search.length - 1] == '?' || search[search.length - 1] == '&'){
                        search += 'locale=' + formatToShopifyLocale(locale);
                    }else {
                        search += '&locale=' + formatToShopifyLocale(locale);
                    }
                    return opening + parsed.pathname + search + parsed.hash + closing;
                });
                if (replaced != onclick)
                    button.attr('onclick', replaced);
            });
            var achors = $('a[href^="/checkout"],a[href^="/cart"]');
            achors.each(function () {
                var anchor = $(this);
                var href = anchor.attr('href');
                var parsed = parseURL(href);
                var search = parsed.query ? parsed.query.replace(/locale=[^&]*&?/, '') : '?';
                if (search[search.length - 1] == '?' || search[search.length - 1] == '&'){
                    search += 'locale=' + formatToShopifyLocale(locale);
                }else {
                    search += '&locale=' + formatToShopifyLocale(locale);
                }
                var newHref = parsed.pathname + search;
                if (href == newHref)
                    return;
                anchor.attr('href', newHref);
            });
        }
    }

    onReady(function(){
        if(!WIN.Shopify)
            return;
        var wrapper = function() {
            bablic.setMutationListen(false);
            updateShopifyCart();
            bablic.setMutationListen(true);
        };

        bablic.on('locale',wrapper);
        setInterval(wrapper,1000*4);
        //(function() {
        //    var $ = bablic.$;
        //    var isProduct = $('meta[property="og:type"][content="product"]').length() > 0;
        //    var productDesc = $('#product-description .rte').get(0);
        //    if (isProduct && productDesc) {
        //        bablic.element('meta[property="og:description"],meta[property="twitter:description"]').exclude();
        //        bablic.on('translated', () => {
        //            var text = productDesc.innerText;
        //            $('meta[property="og:description"]').attr('content', text);
        //            $('meta[property="twitter:description"]').attr('content', text.substr(0, 225));
        //        })
        //    }
        //})();
    });
})();
;
function updateWixWidgets() {
    if (!targetLocale){
        return;
    }

    var isPrimaryLanguage = targetLocale !== originalLocale;
    var locale = targetLocale.key.split('_')[0];
    var iframes = $('iframe[src*="ecom.wix.com"]');
    iframes.each(function() {
        var iframe = this;
        var src = $(iframe).attr('src');
        var parts = src.split('#');
        var all = parts[0];
        var hash = parts[2];
        parts = all.split("?");
        var path = parts[0];
        var qs = parts[1];
        if (!qs) {
            return;
        }
        var params = {};
        qs.split('&')
            .map(function (pair) { return pair.split('='); })
            .forEach(function(pair) {
                params[pair[0]] = params[pair[1]];
            });
        if (params['lang'] && params['lang'].split('-')[0] !== locale) {
            params['lang'] = locale;
            params['locale'] = locale;
            params['isPrimaryLanguage'] = isPrimaryLanguage ? 'true' : 'false';
            qs = Object.keys(params).map(function(key) { return key + '=' + params[key]; }).join('&');
            all = path + '?' + qs;
            $(iframe).attr('src', hash ? all + '#' + hash : all);
        }
    });
}


onReady(function() {
    if (!WIN.rendererModel  || !bablic.on) {
        return;
    }
    var wrapper = function() {
        bablic.setMutationListen(false);
        updateWixWidgets();
        bablic.setMutationListen(true);
    };

    bablic.on("locale", wrapper);
    bablic.on("done", wrapper);
    setInterval(wrapper, 1000 * 4);
});
;
(function(){
    function updateSubblyButtons(){
        var locale = bablic.getLocale();

        if(bablic.checkout !== false && locale) {
            var buttons = $('a.subbly-cart,a.subbly-login');
            buttons.each(function () {
                var button = $(this);
                var href = button.attr('href');

                var parsed = parseURL(href);
                var search = parsed.query ? parsed.query.replace(/locale=[^&]*&?/, '') : '?';
                search = search.replace(RegExp(encodeURIComponent("?") + "locale"+encodeURIComponent("=")+"[^&]*&?"), '');


                if (search[search.length - 1] == '?' || search[search.length - 1] == '&') {
                    search += 'locale=' + locale;
                }else {
                    search += '&locale=' + locale;
                }


                var newAction = parsed.protocol + "//" + parsed.hostname + parsed.pathname + search + parsed.hash;
                if (href == newAction)
                    return;


                button.attr('href', newAction);
            });
        }
    }

    onReady(function(){
        if(!WIN.accountsUrl || !WIN.accountsIframeUrl || bablic.preview)
            return;
        var wrapper = function() {
            bablic.setMutationListen(false);
            updateSubblyButtons();
            bablic.setMutationListen(true);
        };

        bablic.on('locale',wrapper);
        setInterval(wrapper,1000*4);
    });
})();
;
(function(){
    function toGoogleLocale(locale) {
        if (locale === "he")
            locale = "iw";
        if (locale === "en_us")
            locale = "en";
        if (locale.includes("_")) {
            var parts = locale.split("_");
            var lang = parts[0];
            var country = parts[1];
            if (lang === "zh" || lang === "pt" || locale === "fr_ca" || locale === "en_gb")
                locale = lang + "-" + country.toUpperCase();
            else
                locale = lang;
        }
        return locale;
    }

    function updateRecaptchaLang() {
        var locale = bablic.getLocale();
        $("iframe[src*='recaptcha']").each(function () {
            // if element excluded, ignore integration code
            if (isElementExcluded(this)) {
                return;
            }
            var src = this.src;
            if (!src) return;
            var match = /hl=(.*?)&/.exec(src);
            if (!match) return;
            var oldLocale = match[1];
            var googleLocale = toGoogleLocale(locale);
            if (oldLocale === googleLocale)
                return;
            var newSrc = src.replace(match[0], "hl=" + googleLocale + "&");
            this.src = newSrc;
        });
    }

    onReady(function(){
        var wrapper = function() {
            bablic.setMutationListen(false);
            updateRecaptchaLang();
            bablic.setMutationListen(true);
        };
        bablic.on('locale',wrapper);
        setInterval(wrapper,1000*4);
    });
})();
;
    if (bablic.Site && !bablic.loaded) {
        bablic.start();
    }

    triggerEvent('load',[bablicDTO()]);

};

loadAll(bablic, window);

var _open = window.open;
var docs = [];
window.open = function() {
    var win = _open.apply(this, arguments);
    var docToRemove;
    var interval = 20;
    var timeoutRef;
    var start = Date.now();
    var wait = function() {
        if (Date.now() - start > 10000)
            return;
        interval *= 1.2;
        timeoutRef = setTimeout(onTimeout, Math.floor(interval));
    };
    var onTimeout = function() {
        try {
            if (!win.document)
                return wait();
            if (docs.indexOf(win.document) > -1) {
                docToRemove = win.document;
                return wait();
            }
            if (!win.document.body || !win.location || !win.location.hostname)
                return wait();
            clearInterval(interval);
            win.bablic = {
                Site: bablic.Site,
                localeURL: bablic.localeURL,
                folders: bablic.folders,
                data: bablic.data,
                conf: bablic.conf,
            };
            loadAll(win.bablic, win);
            if (docToRemove) {
                var index = docs.indexOf(docToRemove);
                if (index > -1)
                    docs.splice(index, 1);
            }

            docs.push(win.document);
            wait();
        } catch (e) {}
    };
    wait();
    // });
    return win;
};
})();