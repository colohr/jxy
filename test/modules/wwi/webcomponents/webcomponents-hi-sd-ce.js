(function () {
	/*
	 
	 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 Code distributed by Google as part of the polymer project is also
	 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	 
	 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
	 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 Code distributed by Google as part of the polymer project is also
	 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	 
	 Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
	 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 Code distributed by Google as part of the polymer project is also
	 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	 
	 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
	 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 Code distributed by Google as part of the polymer project is also
	 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	 */
	'use strict';
	const loads = new Set();
	var jb = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
	(function () {
		function k() {
			var a = this;
			this.m = {};
			this.g = document.documentElement;
			var b = new sa;
			b.rules = [];
			this.h = t.set(this.g, new t(b));
			this.i = !1;
			this.b = this.a = null;
			kb(function () {a.c()})
		}
		
		function D() {
			this.customStyles = [];
			this.enqueued = !1
		}
		
		function lb() {}
		
		function ca(a) {
			this.cache = {};
			this.c = void 0 === a ? 100 : a
		}
		
		function q() {}
		
		function t(a, b, c, d, e) {
			this.F = a || null;
			this.b = b || null;
			this.sa = c || [];
			this.M = null;
			this.V = e || "";
			this.a = this.C = this.G = null
		}
		
		function r() {}
		
		function sa() {
			this.end = this.start = 0;
			this.rules = this.parent =
				this.previous = null;
			this.cssText = this.parsedCssText = "";
			this.atRule = !1;
			this.type = 0;
			this.parsedSelector = this.selector = this.keyframesName = ""
		}
		
		function Pc(a) {
			function b(b, c) {
				Object.defineProperty(b, "innerHTML", {
					enumerable: c.enumerable, configurable: !0, get: c.get, set: function (b) {
						var d = this, e = void 0;
						m(this) && (e = [], L(this, function (a) {a !== d && e.push(a)}));
						c.set.call(this, b);
						if (e)for (var f = 0; f < e.length; f++) {
							var g = e[f];
							1 === g.__CE_state && a.disconnectedCallback(g)
						}
						this.ownerDocument.__CE_hasRegistry ? a.c(this) : a.j(this);
						return b
					}
				})
			}
			
			function c(b, c) {
				u(b, "insertAdjacentElement", function (b, d) {
					var e = m(d);
					b = c.call(this, b, d);
					e && a.a(d);
					m(b) && a.b(d);
					return b
				})
			}
			
			mb ? u(Element.prototype, "attachShadow", function (a) {return this.__CE_shadowRoot = a = mb.call(this, a)}) : console.warn("Custom Elements: `Element#attachShadow` was not patched.");
			if (ua && ua.get) b(Element.prototype, ua); else if (va && va.get) b(HTMLElement.prototype, va); else {
				var d = wa.call(document, "div");
				a.o(function (a) {
					b(a, {
						enumerable: !0, configurable: !0, get: function () {
							return nb.call(this,
								!0).innerHTML
						}, set: function (a) {
							var b = "template" === this.localName ? this.content : this;
							for (d.innerHTML = a; 0 < b.childNodes.length;)xa.call(b, b.childNodes[0]);
							for (; 0 < d.childNodes.length;)da.call(b, d.childNodes[0])
						}
					})
				})
			}
			u(Element.prototype, "setAttribute", function (b, c) {
				if (1 !== this.__CE_state)return ob.call(this, b, c);
				var d = ya.call(this, b);
				ob.call(this, b, c);
				c = ya.call(this, b);
				a.attributeChangedCallback(this, b, d, c, null)
			});
			u(Element.prototype, "setAttributeNS", function (b, c, d) {
				if (1 !== this.__CE_state)return pb.call(this,
					b, c, d);
				var e = ea.call(this, b, c);
				pb.call(this, b, c, d);
				d = ea.call(this, b, c);
				a.attributeChangedCallback(this, c, e, d, b)
			});
			u(Element.prototype, "removeAttribute", function (b) {
				if (1 !== this.__CE_state)return qb.call(this, b);
				var c = ya.call(this, b);
				qb.call(this, b);
				null !== c && a.attributeChangedCallback(this, b, c, null, null)
			});
			u(Element.prototype, "removeAttributeNS", function (b, c) {
				if (1 !== this.__CE_state)return rb.call(this, b, c);
				var d = ea.call(this, b, c);
				rb.call(this, b, c);
				var e = ea.call(this, b, c);
				d !== e && a.attributeChangedCallback(this,
					c, d, e, b)
			});
			sb ? c(HTMLElement.prototype, sb) : tb ? c(Element.prototype, tb) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
			ub(a, Element.prototype, {Ia: Qc, append: Rc});
			Sc(a, {ab: Tc, $a: Uc, lb: Vc, remove: Wc})
		}
		
		function Sc(a, b) {
			var c = Element.prototype;
			c.before = function (c) {
				for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f];
				f = d.filter(function (a) {return a instanceof Node && m(a)});
				b.ab.apply(this, d);
				for (var g = 0; g < f.length; g++)a.a(f[g]);
				if (m(this))for (f = 0; f < d.length; f++)g = d[f],
				g instanceof Element && a.b(g)
			};
			c.after = function (c) {
				for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f];
				f = d.filter(function (a) {return a instanceof Node && m(a)});
				b.$a.apply(this, d);
				for (var g = 0; g < f.length; g++)a.a(f[g]);
				if (m(this))for (f = 0; f < d.length; f++)g = d[f], g instanceof Element && a.b(g)
			};
			c.replaceWith = function (c) {
				for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f];
				var f = d.filter(function (a) {return a instanceof Node && m(a)}), g = m(this);
				b.lb.apply(this, d);
				for (var h = 0; h < f.length; h++)a.a(f[h]);
				if (g)for (a.a(this), f = 0; f < d.length; f++)g = d[f], g instanceof Element && a.b(g)
			};
			c.remove = function () {
				var c = m(this);
				b.remove.call(this);
				c && a.a(this)
			}
		}
		
		function Xc(a) {
			function b(b, d) {
				Object.defineProperty(b, "textContent", {
					enumerable: d.enumerable,
					configurable: !0,
					get: d.get,
					set: function (b) {
						if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b); else {
							var c = void 0;
							if (this.firstChild) {
								var e = this.childNodes, h = e.length;
								if (0 < h && m(this))for (var c = Array(h), l = 0; l < h; l++)c[l] = e[l]
							}
							d.set.call(this, b);
							if (c)for (b = 0; b < c.length; b++)a.a(c[b])
						}
					}
				})
			}
			
			u(Node.prototype, "insertBefore", function (b, d) {
				if (b instanceof DocumentFragment) {
					var c = Array.prototype.slice.apply(b.childNodes);
					b = vb.call(this, b, d);
					if (m(this))for (d = 0; d < c.length; d++)a.b(c[d]);
					return b
				}
				c = m(b);
				d = vb.call(this, b, d);
				c && a.a(b);
				m(this) && a.b(b);
				return d
			});
			u(Node.prototype, "appendChild", function (b) {
				if (b instanceof DocumentFragment) {
					var c = Array.prototype.slice.apply(b.childNodes);
					b = da.call(this, b);
					if (m(this))for (var e = 0; e < c.length; e++)a.b(c[e]);
					return b
				}
				c = m(b);
				e = da.call(this, b);
				c && a.a(b);
				m(this) &&
				a.b(b);
				return e
			});
			u(Node.prototype, "cloneNode", function (b) {
				b = nb.call(this, b);
				this.ownerDocument.__CE_hasRegistry ? a.c(b) : a.j(b);
				return b
			});
			u(Node.prototype, "removeChild", function (b) {
				var c = m(b), e = xa.call(this, b);
				c && a.a(b);
				return e
			});
			u(Node.prototype, "replaceChild", function (b, d) {
				if (b instanceof DocumentFragment) {
					var c = Array.prototype.slice.apply(b.childNodes);
					b = wb.call(this, b, d);
					if (m(this))for (a.a(d), d = 0; d < c.length; d++)a.b(c[d]);
					return b
				}
				var c = m(b), f = wb.call(this, b, d), g = m(this);
				g && a.a(d);
				c && a.a(b);
				g &&
				a.b(b);
				return f
			});
			za && za.get ? b(Node.prototype, za) : a.o(function (a) {
				b(a, {
					enumerable: !0,
					configurable: !0,
					get: function () {
						for (var a = [], b = 0; b < this.childNodes.length; b++)a.push(this.childNodes[b].textContent);
						return a.join("")
					},
					set: function (a) {
						for (; this.firstChild;)xa.call(this, this.firstChild);
						da.call(this, document.createTextNode(a))
					}
				})
			})
		}
		
		function Yc(a) {
			u(Document.prototype, "createElement", function (b) {
				if (this.__CE_hasRegistry) {
					var c = a.f(b);
					if (c)return new c.constructor
				}
				b = wa.call(this, b);
				a.g(b);
				return b
			});
			u(Document.prototype, "importNode", function (b, c) {
				b = Zc.call(this, b, c);
				this.__CE_hasRegistry ? a.c(b) : a.j(b);
				return b
			});
			u(Document.prototype, "createElementNS", function (b, c) {
				if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
					var d = a.f(c);
					if (d)return new d.constructor
				}
				b = $c.call(this, b, c);
				a.g(b);
				return b
			});
			ub(a, Document.prototype, {Ia: ad, append: bd})
		}
		
		function ub(a, b, c) {
			b.prepend = function (b) {
				for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f];
				f = d.filter(function (a) {
					return a instanceof
						Node && m(a)
				});
				c.Ia.apply(this, d);
				for (var g = 0; g < f.length; g++)a.a(f[g]);
				if (m(this))for (f = 0; f < d.length; f++)g = d[f], g instanceof Element && a.b(g)
			};
			b.append = function (b) {
				for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f];
				f = d.filter(function (a) {return a instanceof Node && m(a)});
				c.append.apply(this, d);
				for (var g = 0; g < f.length; g++)a.a(f[g]);
				if (m(this))for (f = 0; f < d.length; f++)g = d[f], g instanceof Element && a.b(g)
			}
		}
		
		function cd(a) {
			window.HTMLElement = function () {
				function b() {
					var b = this.constructor, d = a.H(b);
					if (!d)throw Error("The custom element being constructed was not registered with `customElements`.");
					var e = d.constructionStack;
					if (!e.length)return e = wa.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = d, a.g(e), e;
					var d = e.length - 1, f = e[d];
					if (f === xb)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
					e[d] = xb;
					Object.setPrototypeOf(f, b.prototype);
					a.g(f);
					return f
				}
				
				b.prototype = dd.prototype;
				return b
			}()
		}
		
		function w(a) {
			this.f = !1;
			this.a = a;
			this.h = new Map;
			this.g = function (a) {return a()};
			this.b = !1;
			this.c =
				[];
			this.i = new Aa(a, document)
		}
		
		function yb() {
			var a = this;
			this.b = this.a = void 0;
			this.f = new Promise(function (b) {
				a.b = b;
				a.a && b(a.a)
			})
		}
		
		function Aa(a, b) {
			this.b = a;
			this.a = b;
			this.J = void 0;
			this.b.c(this.a);
			"loading" === this.a.readyState && (this.J = new MutationObserver(this.f.bind(this)), this.J.observe(this.a, {
				childList: !0,
				subtree: !0
			}))
		}
		
		function z() {
			this.m = new Map;
			this.l = new Map;
			this.i = [];
			this.h = !1
		}
		
		function n(a, b) {
			if (a !== zb)throw new TypeError("Illegal constructor");
			a = document.createDocumentFragment();
			a.__proto__ =
				n.prototype;
			a.i(b);
			return a
		}
		
		function B(a) {
			this.root = a;
			this.$ = "slot"
		}
		
		function Q(a) {
			if (!a.__shady || void 0 === a.__shady.firstChild) {
				a.__shady = a.__shady || {};
				a.__shady.firstChild = Ba(a);
				a.__shady.lastChild = Ca(a);
				Ab(a);
				for (var b = a.__shady.childNodes = X(a), c = 0, d; c < b.length && (d = b[c]); c++)d.__shady = d.__shady || {}, d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, Bb(d)
			}
		}
		
		function ed(a) {
			var b = a && a.J;
			b && (b.Z.delete(a.Xa), b.Z.size || (a.Ya.__shady.T = null))
		}
		
		function fd(a,
		            b) {
			a.__shady = a.__shady || {};
			a.__shady.T || (a.__shady.T = new fa);
			a.__shady.T.Z.add(b);
			var c = a.__shady.T;
			return {Xa: b, J: c, Ya: a, takeRecords: function () {return c.takeRecords()}}
		}
		
		function fa() {
			this.a = !1;
			this.addedNodes = [];
			this.removedNodes = [];
			this.Z = new Set
		}
		
		function E(a) {return "ShadyRoot" === a.Ua}
		
		function R(a) {
			a = a.getRootNode();
			if (E(a))return a
		}
		
		function Da(a, b) {
			if (a && b)for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length && (e = c[d]); d++) {
				var f = Object.getOwnPropertyDescriptor(b, e);
				f && Object.defineProperty(a,
					e, f)
			}
		}
		
		function Ea(a, b) {
			for (var c = [], d = 1; d < arguments.length; ++d)c[d - 1] = arguments[d];
			for (d = 0; d < c.length; d++)Da(a, c[d]);
			return a
		}
		
		function gd(a, b) {for (var c in b)a[c] = b[c]}
		
		function Cb(a) {
			Fa.push(a);
			Ga.textContent = Db++
		}
		
		function Eb(a) {
			Ha || (Ha = !0, Cb(ga));
			Y.push(a)
		}
		
		function ga() {
			Ha = !1;
			for (var a = !!Y.length; Y.length;)Y.shift()();
			return a
		}
		
		function hd(a, b) {
			var c = b.getRootNode();
			return a.map(function (a) {
				var b = c === a.target.getRootNode();
				if (b && a.addedNodes) {
					if (b = Array.from(a.addedNodes).filter(function (a) {
							return c ===
								a.getRootNode()
						}), b.length)return a = Object.create(a), Object.defineProperty(a, "addedNodes", {
						value: b,
						configurable: !0
					}), a
				} else if (b)return a
			}).filter(function (a) {return a})
		}
		
		function Fb(a) {
			switch (a) {
				case "&":
					return "&amp;";
				case "<":
					return "&lt;";
				case ">":
					return "&gt;";
				case '"':
					return "&quot;";
				case "\u00a0":
					return "&nbsp;"
			}
		}
		
		function Gb(a) {
			for (var b = {}, c = 0; c < a.length; c++)b[a[c]] = !0;
			return b
		}
		
		function Ia(a, b) {
			"template" === a.localName && (a = a.content);
			for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g; e < f && (g = d[e]); e++) {
				var h;
				a:{
					var l;
					h = g;
					l = a;
					var W = b;
					switch (h.nodeType) {
						case Node.ELEMENT_NODE:
							for (var k = h.localName, m = "<" + k, q = h.attributes, n = 0; l = q[n]; n++)m += " " + l.name + '="' + l.value.replace(id, Fb) + '"';
							m += ">";
							h = jd[k] ? m : m + Ia(h, W) + "</" + k + ">";
							break a;
						case Node.TEXT_NODE:
							h = h.data;
							h = l && kd[l.localName] ? h : h.replace(ld, Fb);
							break a;
						case Node.COMMENT_NODE:
							h = "\x3c!--" + h.data + "--\x3e";
							break a;
						default:
							throw window.console.error(h), Error("not implemented");
					}
				}
				c += h
			}
			return c
		}
		
		function M(a) {
			A.currentNode = a;
			return A.parentNode()
		}
		
		function Ba(a) {
			A.currentNode =
				a;
			return A.firstChild()
		}
		
		function Ca(a) {
			A.currentNode = a;
			return A.lastChild()
		}
		
		function Hb(a) {
			A.currentNode = a;
			return A.previousSibling()
		}
		
		function Ib(a) {
			A.currentNode = a;
			return A.nextSibling()
		}
		
		function X(a) {
			var b = [];
			A.currentNode = a;
			for (a = A.firstChild(); a;)b.push(a), a = A.nextSibling();
			return b
		}
		
		function Jb(a) {
			x.currentNode = a;
			return x.parentNode()
		}
		
		function Kb(a) {
			x.currentNode = a;
			return x.firstChild()
		}
		
		function Lb(a) {
			x.currentNode = a;
			return x.lastChild()
		}
		
		function Mb(a) {
			x.currentNode = a;
			return x.previousSibling()
		}
		
		function Nb(a) {
			x.currentNode = a;
			return x.nextSibling()
		}
		
		function Ob(a) {
			var b = [];
			x.currentNode = a;
			for (a = x.firstChild(); a;)b.push(a), a = x.nextSibling();
			return b
		}
		
		function Pb(a) {return Ia(a, function (a) {return X(a)})}
		
		function Qb(a) {
			if (a.nodeType !== Node.ELEMENT_NODE)return a.nodeValue;
			a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);
			for (var b = "", c; c = a.nextNode();)b += c.nodeValue;
			return b
		}
		
		function I(a, b, c) {
			for (var d in b) {
				var e = Object.getOwnPropertyDescriptor(a, d);
				e && e.configurable || !e && c ? Object.defineProperty(a,
					d, b[d]) : c && console.warn("Could not define", d, "on", a)
			}
		}
		
		function N(a) {
			I(a, Rb);
			I(a, Ja);
			I(a, Ka)
		}
		
		function Sb(a, b, c) {
			Bb(a);
			c = c || null;
			a.__shady = a.__shady || {};
			b.__shady = b.__shady || {};
			c && (c.__shady = c.__shady || {});
			a.__shady.previousSibling = c ? c.__shady.previousSibling : b.lastChild;
			var d = a.__shady.previousSibling;
			d && d.__shady && (d.__shady.nextSibling = a);
			(d = a.__shady.nextSibling = c) && d.__shady && (d.__shady.previousSibling = a);
			a.__shady.parentNode = b;
			c ? c === b.__shady.firstChild && (b.__shady.firstChild = a) : (b.__shady.lastChild =
				a, b.__shady.firstChild || (b.__shady.firstChild = a));
			b.__shady.childNodes = null
		}
		
		function Tb(a) {
			var b = a.__shady && a.__shady.parentNode, c, d = R(a);
			if (b || d) {
				c = Ub(a);
				if (b) {
					a.__shady = a.__shady || {};
					b.__shady = b.__shady || {};
					a === b.__shady.firstChild && (b.__shady.firstChild = a.__shady.nextSibling);
					a === b.__shady.lastChild && (b.__shady.lastChild = a.__shady.previousSibling);
					var e = a.__shady.previousSibling, f = a.__shady.nextSibling;
					e && (e.__shady = e.__shady || {}, e.__shady.nextSibling = f);
					f && (f.__shady = f.__shady || {}, f.__shady.previousSibling =
						e);
					a.__shady.parentNode = a.__shady.previousSibling = a.__shady.nextSibling = void 0;
					void 0 !== b.__shady.childNodes && (b.__shady.childNodes = null)
				}
				if (e = d) {
					for (var g, e = d.na(), f = 0; f < e.length; f++) {
						var h = e[f], l;
						a:{
							for (l = h; l;) {
								if (l == a) {
									l = !0;
									break a
								}
								l = l.parentNode
							}
							l = void 0
						}
						if (l)for (h = h.assignedNodes({flatten: !0}), l = 0; l < h.length; l++) {
							g = !0;
							var W = h[l], k = M(W);
							k && S.call(k, W)
						}
					}
					e = g
				}
				b = b && d && b.localName === d.A.$;
				if (e || b) d.X = !1, ha(d)
			}
			La(a);
			return c
		}
		
		function Ma(a, b, c) {
			if (a = a.__shady && a.__shady.T) b && a.addedNodes.push(b), c &&
			a.removedNodes.push(c), a.nb()
		}
		
		function Na(a) {
			if (a && a.nodeType) {
				a.__shady = a.__shady || {};
				var b = a.__shady.ta;
				void 0 === b && (E(a) ? b = a : b = (b = a.parentNode) ? Na(b) : a, document.documentElement.contains(a) && (a.__shady.ta = b));
				return b
			}
		}
		
		function Vb(a, b, c) {
			var d, e = c.A.$;
			if (a.nodeType !== Node.DOCUMENT_FRAGMENT_NODE || a.__noInsertionPoint) a.localName === e && (Q(b), Q(a), d = !0); else for (var e = a.querySelectorAll(e), f = 0, g, h; f < e.length && (g = e[f]); f++)h = g.parentNode, h === a && (h = b), h = Vb(g, h, c), d = d || h;
			return d
		}
		
		function Wb(a) {
			return (a =
					a && a.__shady && a.__shady.root) && a.qa()
		}
		
		function La(a) {
			if (a.__shady && void 0 !== a.__shady.ta)for (var b = a.childNodes, c = 0, d = b.length, e; c < d && (e = b[c]); c++)La(e);
			a.__shady = a.__shady || {};
			a.__shady.ta = void 0
		}
		
		function Ub(a) {
			a = a.parentNode;
			if (Wb(a))return ha(a.__shady.root), !0
		}
		
		function ha(a) {
			a.ma = !0;
			a.update()
		}
		
		function Xb(a, b) {"slot" === b ? Ub(a) : "slot" === a.localName && "name" === b && (a = R(a)) && a.update()}
		
		function Yb(a, b, c) {
			var d = [];
			Zb(a.childNodes, b, c, d);
			return d
		}
		
		function Zb(a, b, c, d) {
			for (var e = 0, f = a.length, g; e < f && (g =
				a[e]); e++) {
				var h;
				if (h = g.nodeType === Node.ELEMENT_NODE) {
					h = g;
					var l = b, k = c, ta = d, m = l(h);
					m && ta.push(h);
					k && k(m) ? h = m : (Zb(h.childNodes, l, k, ta), h = void 0)
				}
				if (h)break
			}
		}
		
		function $b(a) {
			a = a.getRootNode();
			E(a) && a.Ja()
		}
		
		function ac(a, b, c) {
			if (c) {
				var d = c.__shady && c.__shady.parentNode;
				if (void 0 !== d && d !== a || void 0 === d && M(c) !== a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
			}
			if (c === b)return b;
			b.nodeType !== Node.DOCUMENT_FRAGMENT_NODE &&
			((d = b.__shady && b.__shady.parentNode) ? (Ma(d, null, b), Tb(b)) : (b.parentNode && S.call(b.parentNode, b), La(b)));
			var d = c, e = R(a), f;
			e && (b.__noInsertionPoint && !e.ma && (e.X = !0), f = Vb(b, a, e)) && (e.X = !1);
			if (a.__shady && void 0 !== a.__shady.firstChild)if (Ab(a), a.__shady = a.__shady || {}, void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null), b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
				for (var g = b.childNodes, h = 0; h < g.length; h++)Sb(g[h], a, d);
				b.__shady = b.__shady || {};
				g = void 0 !== b.__shady.firstChild ? null : void 0;
				b.__shady.firstChild =
					b.__shady.lastChild = g;
				b.__shady.childNodes = g
			} else Sb(b, a, d);
			var g = f, h = e && e.A.$ || "",
				l = b.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !b.__noInsertionPoint && h && b.querySelector(h);
			f = l && l.parentNode.nodeType !== Node.DOCUMENT_FRAGMENT_NODE;
			((l = l || b.localName === h) || a.localName === h || g) && e && ha(e);
			(e = Wb(a)) && ha(a.__shady && a.__shady.root);
			if (!(e || l && !f || a.__shady.root || d && E(d.parentNode) && d.parentNode.K)) {
				if (c && (d = R(c))) {
					var k;
					if (c.localName === d.A.$)a:{
						d = c.assignedNodes({flatten: !0});
						e = Na(c);
						f = 0;
						for (g = d.length; f <
						g && (k = d[f]); f++)if (e.aa(c, k))break a;
						k = void 0
					} else k = c;
					c = k
				}
				k = E(a) ? a.host : a;
				c ? Oa.call(k, b, c) : bc.call(k, b)
			}
			Ma(a, b);
			return b
		}
		
		function cc(a, b) {
			if (a.ownerDocument !== document)return Pa.call(document, a, b);
			var c = Pa.call(document, a, !1);
			if (b) {
				a = a.childNodes;
				b = 0;
				for (var d; b < a.length; b++)d = cc(a[b], !0), c.appendChild(d)
			}
			return c
		}
		
		function Qa(a, b) {
			var c = [], d = a;
			for (a = a === window ? window : a.getRootNode(); d;)c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode;
			c[c.length - 1] === document && c.push(window);
			return c
		}
		
		function dc(a, b) {
			if (!E)return a;
			a = Qa(a, !0);
			for (var c = 0, d, e, f, g; c < b.length; c++)if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (g = a.indexOf(f), e = f), !E(f) || -1 < g)return d
		}
		
		function Ra(a) {
			function b(b, d) {
				b = new a(b, d);
				b.ia = d && !!d.composed;
				return b
			}
			
			gd(b, a);
			b.prototype = a.prototype;
			return b
		}
		
		function ec(a, b, c) {if (c = b.w && b.w[a.type] && b.w[a.type][c])for (var d = 0, e; (e = c[d]) && a.target !== a.relatedTarget && (e.call(b, a), !a.Sa); d++);}
		
		function md(a) {
			var b = a.composedPath(),
				c;
			Object.defineProperty(a, "currentTarget", {get: function () {return c}, configurable: !0});
			for (var d = b.length - 1; 0 <= d; d--)if (c = b[d], ec(a, c, "capture"), a.ja)return;
			Object.defineProperty(a, "eventPhase", {get: function () {return Event.AT_TARGET}});
			for (var e, d = 0; d < b.length; d++)if (c = b[d], !d || c.shadowRoot && c.shadowRoot === e)if (ec(a, c, "bubble"), c !== window && (e = c.getRootNode()), a.ja)break
		}
		
		function fc(a, b, c, d, e, f) {
			for (var g = 0; g < a.length; g++) {
				var h = a[g], l = h.type, k = h.capture, m = h.once, n = h.passive;
				if (b === h.node && c === l && d ===
					k && e === m && f === n)return g
			}
			return -1
		}
		
		function gc(a, b, c) {
			if (b) {
				var d, e, f;
				"object" === typeof c ? (d = !!c.capture, e = !!c.once, f = !!c.passive) : (d = !!c, f = e = !1);
				var g = c && c.ka || this, h = b.W;
				if (h) {if (-1 < fc(h, g, a, d, e, f))return} else b.W = [];
				h = function (d) {
					e && this.removeEventListener(a, b, c);
					d.__target || hc(d);
					var f;
					g !== this && (f = Object.getOwnPropertyDescriptor(d, "currentTarget"), Object.defineProperty(d, "currentTarget", {
						get: function () {return g},
						configurable: !0
					}));
					if (d.composed || -1 < d.composedPath().indexOf(g))if (d.target === d.relatedTarget) d.eventPhase ===
					Event.BUBBLING_PHASE && d.stopImmediatePropagation(); else if (d.eventPhase === Event.CAPTURING_PHASE || d.bubbles || d.target === g) {
						var h = "object" === typeof b && b.handleEvent ? b.handleEvent(d) : b.call(g, d);
						g !== this && (f ? (Object.defineProperty(d, "currentTarget", f), f = null) : delete d.currentTarget);
						return h
					}
				};
				b.W.push({node: this, type: a, capture: d, once: e, passive: f, qb: h});
				Sa[a] ? (this.w = this.w || {}, this.w[a] = this.w[a] || {
						capture: [],
						bubble: []
					}, this.w[a][d ? "capture" : "bubble"].push(h)) : (this instanceof Window ? ic : jc).call(this,
					a, h, c)
			}
		}
		
		function kc(a, b, c) {
			if (b) {
				var d, e, f;
				"object" === typeof c ? (d = !!c.capture, e = !!c.once, f = !!c.passive) : (d = !!c, f = e = !1);
				var g = c && c.ka || this, h = void 0, l;
				l = null;
				try {l = b.W} catch (W) {}
				l && (e = fc(l, g, a, d, e, f), -1 < e && (h = l.splice(e, 1)[0].qb, l.length || (b.W = void 0)));
				(this instanceof Window ? lc : mc).call(this, a, h || b, c);
				h && Sa[a] && this.w && this.w[a] && (a = this.w[a][d ? "capture" : "bubble"], h = a.indexOf(h), -1 < h && a.splice(h, 1))
			}
		}
		
		function nd() {for (var a in Sa)window.addEventListener(a, function (a) {a.__target || (hc(a), md(a))}, !0)}
		
		function hc(a) {
			a.__target = a.target;
			a.za = a.relatedTarget;
			if (C.S) {
				var b = nc, c = Object.getPrototypeOf(a);
				if (!c.hasOwnProperty("__patchProto")) {
					var d = Object.create(c);
					d.sb = c;
					Da(d, b);
					c.__patchProto = d
				}
				a.__proto__ = c.__patchProto
			} else Da(a, nc)
		}
		
		function Z(a, b) {return {index: a, U: [], Y: b}}
		
		function od(a, b, c, d) {
			var e = 0, f = 0, g = 0, h = 0, l = Math.min(b - e, d - f);
			if (0 == e && 0 == f)a:{
				for (g = 0; g < l; g++)if (a[g] !== c[g])break a;
				g = l
			}
			if (b == a.length && d == c.length) {
				for (var h = a.length, k = c.length, m = 0; m < l - g && pd(a[--h], c[--k]);)m++;
				h = m
			}
			e += g;
			f +=
				g;
			b -= h;
			d -= h;
			if (!(b - e || d - f))return [];
			if (e == b) {
				for (b = Z(e, 0); f < d;)b.U.push(c[f++]);
				return [b]
			}
			if (f == d)return [Z(e, b - e)];
			l = e;
			g = f;
			d = d - g + 1;
			h = b - l + 1;
			b = Array(d);
			for (k = 0; k < d; k++)b[k] = Array(h), b[k][0] = k;
			for (k = 0; k < h; k++)b[0][k] = k;
			for (k = 1; k < d; k++)for (m = 1; m < h; m++)if (a[l + m - 1] === c[g + k - 1]) b[k][m] = b[k - 1][m - 1]; else {
				var n = b[k - 1][m] + 1, q = b[k][m - 1] + 1;
				b[k][m] = n < q ? n : q
			}
			l = b.length - 1;
			g = b[0].length - 1;
			d = b[l][g];
			for (a = []; 0 < l || 0 < g;)l ? g ? (h = b[l - 1][g - 1], k = b[l - 1][g], m = b[l][g - 1], n = k < m ? k < h ? k : h : m < h ? m : h, n == h ? (h == d ? a.push(0) : (a.push(1), d =
				h), l--, g--) : n == k ? (a.push(3), l--, d = k) : (a.push(2), g--, d = m)) : (a.push(3), l--) : (a.push(2), g--);
			a.reverse();
			b = void 0;
			l = [];
			for (g = 0; g < a.length; g++)switch (a[g]) {
				case 0:
					b && (l.push(b), b = void 0);
					e++;
					f++;
					break;
				case 1:
					b || (b = Z(e, 0));
					b.Y++;
					e++;
					b.U.push(c[f]);
					f++;
					break;
				case 2:
					b || (b = Z(e, 0));
					b.Y++;
					e++;
					break;
				case 3:
					b || (b = Z(e, 0)), b.U.push(c[f]), f++
			}
			b && l.push(b);
			return l
		}
		
		function pd(a, b) {return a === b}
		
		function oc(a) {
			$b(a);
			return a.__shady && a.__shady.assignedSlot || null
		}
		
		function J(a, b) {
			for (var c = Object.getOwnPropertyNames(b),
				     d = 0; d < c.length; d++) {
				var e = c[d], f = Object.getOwnPropertyDescriptor(b, e);
				f.value ? a[e] = f.value : Object.defineProperty(a, e, f)
			}
		}
		
		function qd() {
			var a = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;
			J(window.Node.prototype, rd);
			J(window.Window.prototype, sd);
			J(window.Text.prototype, td);
			J(window.DocumentFragment.prototype, Ta);
			J(window.Element.prototype, pc);
			J(window.Document.prototype, qc);
			window.HTMLSlotElement && J(window.HTMLSlotElement.prototype, rc);
			J(a.prototype, ud);
			C.S && (N(window.Node.prototype),
				N(window.Text.prototype), N(window.DocumentFragment.prototype), N(window.Element.prototype), N(a.prototype), N(window.Document.prototype), window.HTMLSlotElement && N(window.HTMLSlotElement.prototype))
		}
		
		function sc(a) {
			var b = vd.has(a);
			a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
			return !b && a
		}
		
		function m(a) {
			var b = a.isConnected;
			if (void 0 !== b)return b;
			for (; a && !(a.__CE_isImportDocument || a instanceof Document);)a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
			return !(!a || !(a.__CE_isImportDocument ||
			a instanceof Document))
		}
		
		function Ua(a, b) {
			for (; b && b !== a && !b.nextSibling;)b = b.parentNode;
			return b && b !== a ? b.nextSibling : null
		}
		
		function L(a, b, c) {
			c = c ? c : new Set;
			for (var d = a; d;) {
				if (d.nodeType === Node.ELEMENT_NODE) {
					var e = d;
					b(e);
					var f = e.localName;
					if ("link" === f && "import" === e.getAttribute("rel")) {
						d = e.import;
						if (d instanceof Node && !c.has(d))for (c.add(d), d = d.firstChild; d; d = d.nextSibling)L(d, b, c);
						d = Ua(a, e);
						continue
					} else if ("template" === f) {
						d = Ua(a, e);
						continue
					}
					if (e = e.__CE_shadowRoot)for (e = e.firstChild; e; e = e.nextSibling)L(e,
						b, c)
				}
				d = d.firstChild ? d.firstChild : Ua(a, d)
			}
		}
		
		function u(a, b, c) {a[b] = c}
		
		function Va(a) {
			a = a.replace(F.cb, "").replace(F.port, "");
			var b = tc, c = a, d = new sa;
			d.start = 0;
			d.end = c.length;
			for (var e = d, f = 0, g = c.length; f < g; f++)if ("{" === c[f]) {
				e.rules || (e.rules = []);
				var h = e, k = h.rules[h.rules.length - 1] || null, e = new sa;
				e.start = f + 1;
				e.parent = h;
				e.previous = k;
				h.rules.push(e)
			} else"}" === c[f] && (e.end = f + 1, e = e.parent || d);
			return b(d, a)
		}
		
		function tc(a, b) {
			var c = b.substring(a.start, a.end - 1);
			a.parsedCssText = a.cssText = c.trim();
			a.parent && ((c =
				b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = wd(c), c = c.replace(F.Ha, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = !c.indexOf("@"), a.atRule) ? c.indexOf("@media") ? c.match(F.jb) && (a.type = H.ha, a.keyframesName = a.selector.split(F.Ha).pop()) : a.type = H.MEDIA_RULE : a.type = c.indexOf("--") ? H.STYLE_RULE : H.va);
			if (c = a.rules)for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++)tc(f, b);
			return a
		}
		
		function wd(a) {
			return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
				a =
					c;
				for (c = 6 - a.length; c--;)a = "0" + a;
				return "\\" + a
			})
		}
		
		function uc(a, b, c) {
			c = void 0 === c ? "" : c;
			var d = "";
			if (a.cssText || a.rules) {
				var e = a.rules, f;
				if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));
				if (f) {
					f = 0;
					for (var g = e.length, h; f < g && (h = e[f]); f++)d = uc(h, b, d)
				} else b ? b = a.cssText : (b = a.cssText, b = b.replace(F.Ca, "").replace(F.Ga, ""), b = b.replace(F.kb, "").replace(F.pb, "")), (d = b.trim()) && (d = "  " + d + "\n")
			}
			d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));
			return c
		}
		
		function vc(a) {
			y = a && a.shimcssproperties ?
				!1 : p || !(navigator.userAgent.match("AppleWebKit/601") || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"))
		}
		
		function T(a, b) {
			if (!a)return "";
			"string" === typeof a && (a = Va(a));
			b && U(a, b);
			return uc(a, y)
		}
		
		function ia(a) {
			!a.__cssRules && a.textContent && (a.__cssRules = Va(a.textContent));
			return a.__cssRules || null
		}
		
		function wc(a) {return !!a.parent && a.parent.type === H.ha}
		
		function U(a, b, c, d) {
			if (a) {
				var e = !1, f = a.type;
				if (d && f === H.MEDIA_RULE) {
					var g = a.selector.match(xd);
					g && (window.matchMedia(g[1]).matches ||
					(e = !0))
				}
				f === H.STYLE_RULE ? b(a) : c && f === H.ha ? c(a) : f === H.va && (e = !0);
				if ((a = a.rules) && !e)for (var e = 0, f = a.length, h; e < f && (h = a[e]); e++)U(h, b, c, d)
			}
		}
		
		function Wa(a, b, c, d) {
			var e = document.createElement("style");
			b && e.setAttribute("scope", b);
			e.textContent = a;
			xc(e, c, d);
			return e
		}
		
		function xc(a, b, c) {
			b = b || document.head;
			b.insertBefore(a, c && c.nextSibling || b.firstChild);
			O ? a.compareDocumentPosition(O) === Node.DOCUMENT_POSITION_PRECEDING && (O = a) : O = a
		}
		
		function yc(a, b) {
			var c = a.indexOf("var(");
			if (-1 === c)return b(a, "", "", "");
			var d;
			a:{
				var e = 0;
				d = c + 3;
				for (var f = a.length; d < f; d++)if ("(" === a[d]) e++; else if (")" === a[d] && !--e)break a;
				d = -1
			}
			e = a.substring(c + 4, d);
			c = a.substring(0, c);
			a = yc(a.substring(d + 1), b);
			d = e.indexOf(",");
			return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a)
		}
		
		function ja(a, b) {p ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b)}
		
		function P(a) {
			var b = a.localName, c = "";
			b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);
			return {is: b, V: c}
		}
		
		function zc(a) {
			for (var b = 0; b < a.length; b++) {
				var c = a[b];
				if (c.target !== document.documentElement && c.target !== document.head)for (var d = 0; d < c.addedNodes.length; d++) {
					var e = c.addedNodes[d];
					if (e.nodeType === Node.ELEMENT_NODE) {
						var f = e.getRootNode(), g;
						g = e;
						var h = [];
						g.classList ? h = Array.from(g.classList) : g instanceof window.SVGElement && g.hasAttribute("class") && (h = g.getAttribute("class").split(/\s+/));
						g = h;
						h = g.indexOf(v.c);
						(g = -1 < h ? g[h + 1] : "") && f === e.ownerDocument ? v.a(e, g, !0) : f.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
							(f = f.host) && (f = P(f).is, g !== f && (g && v.a(e, g, !0), v.a(e, f)))
					}
				}
			}
		}
		
		function yd(a) {if (a = ka[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1}
		
		function Ac(a) {return a._applyShimCurrentVersion === a._applyShimNextVersion}
		
		function zd(a) {
			a._applyShimValidatingVersion = a._applyShimNextVersion;
			a.b || (a.b = !0, Ad.then(function () {
				a._applyShimCurrentVersion = a._applyShimNextVersion;
				a.b = !1
			}))
		}
		
		function kb(a) {
			requestAnimationFrame(function () {
				Bc ?
					Bc(a) : (Xa || (Xa = new Promise(function (a) {Ya = a}), "complete" === document.readyState ? Ya() : document.addEventListener("readystatechange", function () {"complete" === document.readyState && Ya()})), Xa.then(function () {a && a()}))
			})
		}
		
		(function (a) {
			function b(a, b) {
				if ("function" === typeof window.CustomEvent)return new CustomEvent(a, b);
				var c = document.createEvent("CustomEvent");
				c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
				return c
			}
			
			function c(a) {
				if (m)return a.ownerDocument !== document ? a.ownerDocument : null;
				var b = a.__importDoc;
				if (!b && a.parentNode) {
					b = a.parentNode;
					if ("function" === typeof b.closest) b = b.closest("link[rel=import]"); else for (; !h(b) && (b = b.parentNode););
					a.__importDoc = b
				}
				return b
			}
			
			function d(a) {
				var b = document.querySelectorAll("link[rel=import]:not(import-dependency)"), c = b.length;
				if (c)for (var d = 0, e = b.length, f; d < e && (f = b[d]); d++)g(f, function () {--c || a()}); else a()
			}
			
			function e(a) {
				function b() {"loading" !== document.readyState && document.body && (document.removeEventListener("readystatechange", b), a())}
				
				document.addEventListener("readystatechange",
					b);
				b()
			}
			
			function f(a) {e(function () {return d(function () {return a && a()})})}
			
			function g(a, b) {
				if (a.__loaded) b && b(); else if ("script" !== a.localName || a.src) {
					var c = function (d) {
						a.removeEventListener(d.type, c);
						a.__loaded = !0;
						b && b()
					};
					a.addEventListener("load", c);
					w && "style" === a.localName || a.addEventListener("error", c)
				} else a.__loaded = !0, b && b()
			}
			
			function h(a) {return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel}
			
			function k() {
				var a = this;
				this.a = {};
				this.b = 0;
				this.f = new MutationObserver(function (b) {return a.l(b)});
				this.f.observe(document.head, {childList: !0, subtree: !0});
				this.c(document)
			}
			
			var m = "import" in document.createElement("link"), n = null;
			!1 === "currentScript" in document && Object.defineProperty(document, "currentScript", {
				get: function () {return n || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null)},
				configurable: !0
			});
			var q = /(^\/)|(^#)|(^[\w-\d]*:)/, r = /(url\()([^)]*)(\))/g, t = /(@import[\s]+(?!url\())([^;]*)(;)/g,
				v = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g, p = {
					eb: function (a,
					              b) {
						a.href && a.setAttribute("href", p.ua(a.getAttribute("href"), b));
						a.src && a.setAttribute("src", p.ua(a.getAttribute("src"), b));
						if ("style" === a.localName) {
							var c = p.Ka(a.textContent, b, r);
							a.textContent = p.Ka(c, b, t)
						}
					}, Ka: function (a, b, c) {
						return a.replace(c, function (a, c, d, e) {
							a = d.replace(/["']/g, "");
							b && (a = p.La(a, b));
							return c + "'" + a + "'" + e
						})
					}, ua: function (a, b) {return a && q.test(a) ? a : p.La(a, b)}, La: function (a, b) {
						if (void 0 === p.la) {
							p.la = !1;
							try {
								var c = new URL("b", "http://a");
								c.pathname = "c%20d";
								p.la = "http://a/c%20d" === c.href
							} catch (Yd) {}
						}
						if (p.la)return (new URL(a,
							b)).href;
						c = p.Wa;
						c || (c = document.implementation.createHTMLDocument("temp"), p.Wa = c, c.xa = c.createElement("base"), c.head.appendChild(c.xa), c.wa = c.createElement("a"));
						c.xa.href = b;
						c.wa.href = a;
						return c.wa.href || a
					}
				}, y = {
					async: !0, load: function (a, b, c) {
						if (a)if (a.match(/^data:/)) {
							a = a.split(",");
							var d = a[1], d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d);
							b(d)
						} else {
							var e = new XMLHttpRequest;
							e.open("GET", a, y.async);
							e.onload = function () {
								var a = e.getResponseHeader("Location");
								a && !a.indexOf("/") && (a = (location.origin ||
									location.protocol + "//" + location.host) + a);
								var d = e.response || e.responseText;
								304 === e.status || !e.status || 200 <= e.status && 300 > e.status ? b(d, a) : c(d)
							};
							e.send()
						} else c("error: href must be specified")
					}
				}, w = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);
			k.prototype.c = function (a) {
				a = a.querySelectorAll("link[rel=import]");
				for (var b = 0, c = a.length; b < c; b++)this.h(a[b])
			};
			k.prototype.h = function (a) {
				var b = this, c = a.href;
				if (void 0 !== this.a[c]) {
					var d = this.a[c];
					d && d.__loaded && (a.import = d, this.g(a))
				} else this.b++,
					this.a[c] = "pending", y.load(c, function (a, d) {
					a = b.m(a, d || c);
					b.a[c] = a;
					b.b--;
					b.c(a);
					b.i()
				}, function () {
					b.a[c] = null;
					b.b--;
					b.i()
				})
			};
			k.prototype.m = function (a, b) {
				if (!a)return document.createDocumentFragment();
				w && (a = a.replace(v, function (a, b, c) {return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a}));
				var c = document.createElement("template");
				c.innerHTML = a;
				if (c.content) a = c.content; else for (a = document.createDocumentFragment(); c.firstChild;)a.appendChild(c.firstChild);
				
				if(c.content) stamp_custom_element(c)
				
				if (c = a.querySelector("base")) b = p.ua(c.getAttribute("href"),
					b), c.removeAttribute("href");
				for (var c = a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]'), d = 0, e = 0, f = c.length, h; e < f && (h = c[e]); e++)g(h), p.eb(h, b), h.setAttribute("import-dependency", ""), "script" === h.localName && !h.src && h.textContent && (h.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(h.textContent +
						("\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n"))), h.textContent = "", d++);
				return a
			};
			
			function stamp_custom_element(c){
				let all = Array.from(c.content.querySelectorAll('*'))
				if(all.length === 2){
					let template_element = all[0]
					if(template_element.localName === 'template' && template_element.hasAttribute('id')){
						let script_element = all[1]
						if(script_element.localName === 'script'){
							script_element.setAttribute('id',template_element.getAttribute('id'))
						}
					}
				}
			}
			
			k.prototype.i = function () {
				var a = this;
				if (!this.b) {
					this.f.disconnect();
					this.flatten(document);
					var b = !1, c = !1, d = function () {
						c && b && (a.c(document), a.b || (a.f.observe(document.head, {
							childList: !0,
							subtree: !0
						}), a.j()))
					};
					this.v(function () {
						c = !0;
						d()
					});
					this.o(function () {
						b = !0;
						d()
					})
				}
			};
			k.prototype.flatten = function (a) {
				a = a.querySelectorAll("link[rel=import]");
				for (var b = 0, c = a.length, d; b < c && (d = a[b]); b++) {
					var e = this.a[d.href];
					(d.import = e) && e.nodeType ===
					Node.DOCUMENT_FRAGMENT_NODE && (this.a[d.href] = d, d.readyState = "loading", d.import = d, this.flatten(e), d.appendChild(e))
				}
			};
			k.prototype.o = function (a) {
				function b(e) {
					if (e < d) {
						var f = c[e], h = document.createElement("script");
						f.removeAttribute("import-dependency");
						for (var k = 0, l = f.attributes.length; k < l; k++)h.setAttribute(f.attributes[k].name, f.attributes[k].value);
						n = h;
						let id = f.hasAttribute('id') ? f.getAttribute('id'):f.getAttribute('src')
						if(id === null || !loads.has(id)){
							loads.add(id);
							f.parentNode.replaceChild(h, f);
							g(h, function () {
								n = null;
								b(e + 1)
							})
						}else{
							n = null;
							b(e + 1)
						}
						
					} else a()
				}
				
				var c = document.querySelectorAll("script[import-dependency]"), d = c.length;
				b(0)
			};
			k.prototype.v = function (a) {
				var b = document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),
					d = b.length;
				if (d)for (var e = w && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]"), f = {}, h = 0, k = b.length; h < k && (f.u = b[h]); f = {u: f.u}, h++) {
					if (g(f.u, function (b) {
							return function () {
								b.u.removeAttribute("import-dependency");
								--d || a()
							}
						}(f)), e && f.u.parentNode !== document.head) {
						var l = document.createElement(f.u.localName);
						l.__appliedElement = f.u;
						l.setAttribute("type",
							"import-placeholder");
						f.u.parentNode.insertBefore(l, f.u.nextSibling);
						for (l = c(f.u); l && c(l);)l = c(l);
						l.parentNode !== document.head && (l = null);
						document.head.insertBefore(f.u, l);
						f.u.removeAttribute("type")
					}
				} else a()
			};
			k.prototype.j = function () {for (var a = document.querySelectorAll("link[rel=import]"), b = a.length - 1, c; 0 <= b && (c = a[b]); b--)this.g(c)};
			k.prototype.g = function (a) {
				a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState = "complete"), a.dispatchEvent(b(a.import ? "load" : "error", {
					bubbles: !1,
					cancelable: !1,
					detail: void 0
				})))
			};
			k.prototype.l = function (a) {
				for (var b = 0; b < a.length; b++) {
					var c = a[b];
					if (c.addedNodes)for (var d = 0; d < c.addedNodes.length; d++) {
						var e = c.addedNodes[d];
						e && e.nodeType === Node.ELEMENT_NODE && (h(e) ? this.h(e) : this.c(e))
					}
				}
			};
			if (m) {
				for (var u = document.querySelectorAll("link[rel=import]"), z = 0, B = u.length, A; z < B && (A = u[z]); z++)A.import && "loading" === A.import.readyState || (A.__loaded = !0);
				u = function (a) {
					a = a.target;
					h(a) && (a.__loaded = !0)
				};
				document.addEventListener("load", u, !0);
				document.addEventListener("error", u, !0)
			} else {
				var x =
					Object.getOwnPropertyDescriptor(Node.prototype, "baseURI");
				Object.defineProperty((!x || x.configurable ? Node : Element).prototype, "baseURI", {
					get: function () {
						var a = h(this) ? this : c(this);
						return a ? a.href : x && x.get ? x.get.call(this) : (document.querySelector("base") || window.location).href
					}, configurable: !0, enumerable: !0
				});
				e(function () {return new k})
			}
			f(function () {
				return document.dispatchEvent(b("HTMLImportsLoaded", {
					cancelable: !0,
					bubbles: !0,
					detail: void 0
				}))
			});
			a.useNative = m;
			a.whenReady = f;
			a.importForElement = c
		})(window.HTMLImports =
			window.HTMLImports || {});
		var C = window.ShadyDOM || {};
		C.gb = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
		var Za = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
		C.S = !!(Za && Za.configurable && Za.get);
		C.Fa = C.force || !C.gb;
		var V = Element.prototype,
			Cc = V.matches || V.matchesSelector || V.mozMatchesSelector || V.msMatchesSelector || V.oMatchesSelector || V.webkitMatchesSelector,
			Ga = document.createTextNode(""), Db = 0, Fa = [];
		(new MutationObserver(function () {
			for (; Fa.length;)try {Fa.shift()()} catch (a) {
				throw Ga.textContent =
					Db++, a;
			}
		})).observe(Ga, {characterData: !0});
		var Y = [], Ha;
		ga.list = Y;
		fa.prototype.nb = function () {
			var a = this;
			this.a || (this.a = !0, Cb(function () {a.b()}))
		};
		fa.prototype.b = function () {
			if (this.a) {
				this.a = !1;
				var a = this.takeRecords();
				a.length && this.Z.forEach(function (b) {b(a)})
			}
		};
		fa.prototype.takeRecords = function () {
			if (this.addedNodes.length || this.removedNodes.length) {
				var a = [{
					addedNodes: this.addedNodes,
					removedNodes: this.removedNodes
				}];
				this.addedNodes = [];
				this.removedNodes = [];
				return a
			}
			return []
		};
		var bc = Element.prototype.appendChild,
			Oa = Element.prototype.insertBefore, S = Element.prototype.removeChild, Dc = Element.prototype.setAttribute,
			Ec = Element.prototype.removeAttribute, $a = Element.prototype.cloneNode,
			Pa = Document.prototype.importNode, jc = Element.prototype.addEventListener,
			mc = Element.prototype.removeEventListener, ic = Window.prototype.addEventListener,
			lc = Window.prototype.removeEventListener, ab = Element.prototype.dispatchEvent, Bd = Object.freeze({
				appendChild: bc, insertBefore: Oa, removeChild: S, setAttribute: Dc, removeAttribute: Ec, cloneNode: $a,
				importNode: Pa, addEventListener: jc, removeEventListener: mc, wb: ic, xb: lc, dispatchEvent: ab
			}), id = /[&\u00A0"]/g, ld = /[&\u00A0<>]/g,
			jd = Gb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
			kd = Gb("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
			A = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
			x = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1), Cd = Object.freeze({
				parentNode: M,
				firstChild: Ba,
				lastChild: Ca,
				previousSibling: Hb,
				nextSibling: Ib,
				childNodes: X,
				parentElement: Jb,
				firstElementChild: Kb,
				lastElementChild: Lb,
				previousElementSibling: Mb,
				nextElementSibling: Nb,
				children: Ob,
				innerHTML: Pb,
				textContent: Qb
			}),
			bb = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"),
			la = document.implementation.createHTMLDocument("inert").createElement("div"),
			cb = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"), Rb = {
				parentElement: {
					get: function () {
						var a =
							this.__shady && this.__shady.parentNode;
						a && a.nodeType !== Node.ELEMENT_NODE && (a = null);
						return void 0 !== a ? a : Jb(this)
					}, configurable: !0
				},
				parentNode: {
					get: function () {
						var a = this.__shady && this.__shady.parentNode;
						return void 0 !== a ? a : M(this)
					}, configurable: !0
				},
				nextSibling: {
					get: function () {
						var a = this.__shady && this.__shady.nextSibling;
						return void 0 !== a ? a : Ib(this)
					}, configurable: !0
				},
				previousSibling: {
					get: function () {
						var a = this.__shady && this.__shady.previousSibling;
						return void 0 !== a ? a : Hb(this)
					}, configurable: !0
				},
				className: {
					get: function () {
						return this.getAttribute("class") ||
							""
					}, set: function (a) {this.setAttribute("class", a)}, configurable: !0
				},
				nextElementSibling: {
					get: function () {
						if (this.__shady && void 0 !== this.__shady.nextSibling) {
							for (var a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;)a = a.nextSibling;
							return a
						}
						return Nb(this)
					}, configurable: !0
				},
				previousElementSibling: {
					get: function () {
						if (this.__shady && void 0 !== this.__shady.previousSibling) {
							for (var a = this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;)a = a.previousSibling;
							return a
						}
						return Mb(this)
					}, configurable: !0
				}
			}, Ja =
				{
					childNodes: {
						get: function () {
							var a;
							if (this.__shady && void 0 !== this.__shady.firstChild) {
								if (!this.__shady.childNodes) {
									this.__shady.childNodes = [];
									for (var b = this.firstChild; b; b = b.nextSibling)this.__shady.childNodes.push(b)
								}
								a = this.__shady.childNodes
							} else a = X(this);
							a.item = function (b) {return a[b]};
							return a
						}, configurable: !0
					},
					childElementCount: {get: function () {return this.children.length}, configurable: !0},
					firstChild: {
						get: function () {
							var a = this.__shady && this.__shady.firstChild;
							return void 0 !== a ? a : Ba(this)
						}, configurable: !0
					},
					lastChild: {
						get: function () {
							var a = this.__shady && this.__shady.lastChild;
							return void 0 !== a ? a : Ca(this)
						}, configurable: !0
					},
					textContent: {
						get: function () {
							if (this.__shady && void 0 !== this.__shady.firstChild) {
								for (var a = [], b = 0, c = this.childNodes, d; d = c[b]; b++)d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);
								return a.join("")
							}
							return Qb(this)
						},
						set: function (a) {
							if (this.nodeType !== Node.ELEMENT_NODE) this.nodeValue = a; else {
								for (; this.firstChild;)this.removeChild(this.firstChild);
								this.appendChild(document.createTextNode(a))
							}
						},
						configurable: !0
					},
					firstElementChild: {
						get: function () {
							if (this.__shady && void 0 !== this.__shady.firstChild) {
								for (var a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;)a = a.nextSibling;
								return a
							}
							return Kb(this)
						}, configurable: !0
					},
					lastElementChild: {
						get: function () {
							if (this.__shady && void 0 !== this.__shady.lastChild) {
								for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;)a = a.previousSibling;
								return a
							}
							return Lb(this)
						}, configurable: !0
					},
					children: {
						get: function () {
							var a;
							this.__shady && void 0 !== this.__shady.firstChild ?
								a = Array.prototype.filter.call(this.childNodes, function (a) {return a.nodeType === Node.ELEMENT_NODE}) : a = Ob(this);
							a.item = function (b) {return a[b]};
							return a
						}, configurable: !0
					},
					innerHTML: {
						get: function () {
							var a = "template" === this.localName ? this.content : this;
							return this.__shady && void 0 !== this.__shady.firstChild ? Ia(a) : Pb(a)
						},
						set: function (a) {
							for (var b = "template" === this.localName ? this.content : this; b.firstChild;)b.removeChild(b.firstChild);
							for (bb && bb.set ? bb.set.call(la, a) : la.innerHTML = a; la.firstChild;)b.appendChild(la.firstChild)
						},
						configurable: !0
					}
				}, Fc = {
				shadowRoot: {
					get: function () {return this.__shady && this.__shady.root || null},
					set: function (a) {
						this.__shady = this.__shady || {};
						this.__shady.root = a
					},
					configurable: !0
				}
			}, Ka = {
				activeElement: {
					get: function () {
						var a;
						a = cb && cb.get ? cb.get.call(document) : C.S ? void 0 : document.activeElement;
						if (a && a.nodeType) {
							var b = !!E(this);
							if (this === document || b && this.host !== a && this.host.contains(a)) {
								for (b = R(a); b && b !== this;)a = b.host, b = R(a);
								a = this === document ? b ? null : a : b === this ? a : null
							} else a = null
						} else a = null;
						return a
					},
					set: function () {}, configurable: !0
				}
			},
			Bb = C.S ? function () {} : function (a) {a.__shady && a.__shady.Va || (a.__shady = a.__shady || {}, a.__shady.Va = !0, I(a, Rb, !0))},
			Ab = C.S ? function () {} : function (a) {a.__shady && a.__shady.Ta || (a.__shady = a.__shady || {}, a.__shady.Ta = !0, I(a, Ja, !0), I(a, Fc, !0))},
			ma = null, Dd = {
				blur: !0,
				focus: !0,
				focusin: !0,
				focusout: !0,
				click: !0,
				dblclick: !0,
				mousedown: !0,
				mouseenter: !0,
				mouseleave: !0,
				mousemove: !0,
				mouseout: !0,
				mouseover: !0,
				mouseup: !0,
				wheel: !0,
				beforeinput: !0,
				input: !0,
				keydown: !0,
				keyup: !0,
				compositionstart: !0,
				compositionupdate: !0,
				compositionend: !0,
				touchstart: !0,
				touchend: !0,
				touchmove: !0,
				touchcancel: !0,
				pointerover: !0,
				pointerenter: !0,
				pointerdown: !0,
				pointermove: !0,
				pointerup: !0,
				pointercancel: !0,
				pointerout: !0,
				pointerleave: !0,
				gotpointercapture: !0,
				lostpointercapture: !0,
				dragstart: !0,
				drag: !0,
				dragenter: !0,
				dragleave: !0,
				dragover: !0,
				drop: !0,
				dragend: !0,
				DOMActivate: !0,
				DOMFocusIn: !0,
				DOMFocusOut: !0,
				keypress: !0
			}, nc = {
				get composed() {
					!1 !== this.isTrusted && void 0 === this.ia && (this.ia = Dd[this.type]);
					return this.ia || !1
				},
				composedPath: function () {
					this.ya ||
					(this.ya = Qa(this.__target, this.composed));
					return this.ya
				},
				get target() {return dc(this.currentTarget, this.composedPath())},
				get relatedTarget() {
					if (!this.za)return null;
					this.Aa || (this.Aa = Qa(this.za, !0));
					return dc(this.currentTarget, this.Aa)
				},
				stopPropagation: function () {
					Event.prototype.stopPropagation.call(this);
					this.ja = !0
				},
				stopImmediatePropagation: function () {
					Event.prototype.stopImmediatePropagation.call(this);
					this.ja = this.Sa = !0
				}
			}, Sa = {focus: !0, blur: !0}, Ed = Ra(window.Event), Fd = Ra(window.CustomEvent), Gd =
				Ra(window.MouseEvent), Hd = "function" === typeof Event ? Event : function (a, b) {
				b = b || {};
				var c = document.createEvent("Event");
				c.initEvent(a, !!b.bubbles, !!b.cancelable);
				return c
			};
		B.prototype.fb = function () {return this.root.querySelectorAll("slot")};
		B.prototype.ra = function (a) {return a.localName && "slot" == a.localName};
		B.prototype.pa = function () {return this.root.qa() ? this.g(this.c()) : []};
		B.prototype.c = function () {
			for (var a = [], b = 0, c = this.root.host.firstChild; c; c = c.nextSibling)a[b++] = c;
			return a
		};
		B.prototype.g = function (a) {
			for (var b =
				[], c = this.root.na(), d = 0, e = c.length, f; d < e && (f = c[d]); d++) {
				this.f(f, a);
				var g = f.parentNode;
				(g = g && g.__shady && g.__shady.root) && g.qa() && b.push(g)
			}
			for (c = 0; c < a.length; c++)if (d = a[c]) d.__shady = d.__shady || {}, d.__shady.assignedSlot = void 0, (e = M(d)) && S.call(e, d);
			return b
		};
		B.prototype.f = function (a, b) {
			var c = a.__shady.assignedNodes;
			c && this.Ba(a, !0);
			a.__shady.assignedNodes = [];
			for (var d = !1, e = !1, f = 0, g = b.length, h; f < g; f++)(h = b[f]) && this.h(h, a) && (h.__shady.oa != a && (d = !0), this.b(h, a), b[f] = void 0, e = !0);
			if (!e)for (b = a.childNodes,
				            e = 0; e < b.length; e++)h = b[e], h.__shady.oa != a && (d = !0), this.b(h, a);
			if (c) {
				for (h = 0; h < c.length; h++)c[h].__shady.oa = null;
				a.__shady.assignedNodes.length < c.length && (d = !0)
			}
			this.i(a);
			d && this.a(a)
		};
		B.prototype.Ba = function (a, b) {
			var c = a.__shady.assignedNodes;
			if (c)for (var d = 0; d < c.length; d++) {
				var e = c[d];
				b && (e.__shady.oa = e.__shady.assignedSlot);
				e.__shady.assignedSlot === a && (e.__shady.assignedSlot = null)
			}
		};
		B.prototype.h = function (a, b) {
			b = (b = b.getAttribute("name")) ? b.trim() : "";
			a = (a = a.getAttribute && a.getAttribute("slot")) ?
				a.trim() : "";
			return a == b
		};
		B.prototype.b = function (a, b) {
			b.__shady.assignedNodes.push(a);
			a.__shady.assignedSlot = b
		};
		B.prototype.i = function (a) {
			var b = a.__shady.assignedNodes;
			a.__shady.L = [];
			for (var c = 0, d; c < b.length && (d = b[c]); c++)if (this.ra(d)) {
				var e = d.__shady.L;
				if (e)for (var f = 0; f < e.length; f++)a.__shady.L.push(e[f])
			} else a.__shady.L.push(b[c])
		};
		B.prototype.a = function (a) {
			ab.call(a, new Hd("slotchange"));
			a.__shady.assignedSlot && this.a(a.__shady.assignedSlot)
		};
		B.prototype.aa = function (a) {return !a.__shady.assignedSlot};
		var zb = {};
		n.prototype = Object.create(DocumentFragment.prototype);
		n.prototype.i = function (a) {
			this.Ua = "ShadyRoot";
			Q(a);
			Q(this);
			a.shadowRoot = this;
			this.host = a;
			this.ma = this.K = !1;
			this.A = new B(this);
			this.update()
		};
		n.prototype.update = function () {
			var a = this;
			this.K || (this.K = !0, Eb(function () {return a.Ja()}))
		};
		n.prototype.h = function () {
			for (var a = this, b = this; b;)b.K && (a = b), b = b.Za();
			return a
		};
		n.prototype.Za = function () {
			var a = this.host.getRootNode();
			if (E(a))for (var b = this.host.childNodes, c = 0, d; c < b.length; c++)if (d = b[c],
					this.A.ra(d))return a
		};
		n.prototype.Ja = function () {this.K && this.h()._render()};
		n.prototype._render = function () {
			this.ma = this.K = !1;
			this.X || this.f();
			this.X = !1;
			this.pa();
			this.j()
		};
		n.prototype.pa = function () {for (var a = this.A.pa(), b = 0; b < a.length; b++)a[b]._render()};
		n.prototype.f = function () {
			var a = this.a;
			if (a)for (var b = 0, c; b < a.length; b++)c = a[b], c.getRootNode() !== this && this.A.Ba(c);
			a = this.a = this.A.fb();
			for (b = 0; b < a.length; b++)c = a[b], c.__shady = c.__shady || {}, Q(c), Q(c.parentNode)
		};
		n.prototype.j = function () {this.g()};
		n.prototype.g = function () {
			this.c(this.host, this.b(this.host));
			for (var a = this.na(), b = 0, c = a.length, d, e; b < c && (d = a[b]); b++)e = d.parentNode, e !== this.host && e !== this && this.c(e, this.b(e))
		};
		n.prototype.b = function (a) {
			var b = [];
			a = (a.__shady && a.__shady.root || a).childNodes;
			for (var c = 0; c < a.length; c++) {
				var d = a[c];
				if (this.A.ra(d))for (var e = d.__shady.L || (d.__shady.L = []), f = 0; f < e.length; f++) {
					var g = e[f];
					this.aa(d, g) && b.push(g)
				} else b.push(d)
			}
			return b
		};
		n.prototype.aa = function (a, b) {return this.A.aa(a, b)};
		n.prototype.c = function (a,
		                          b) {
			for (var c = X(a), d = od(b, b.length, c, c.length), e = 0, f = 0, g; e < d.length && (g = d[e]); e++) {
				for (var h = 0, k; h < g.U.length && (k = g.U[h]); h++)M(k) === a && S.call(a, k), c.splice(g.index + f, 1);
				f -= g.Y
			}
			for (e = 0; e < d.length && (g = d[e]); e++)for (f = c[g.index], h = g.index; h < g.index + g.Y; h++)k = b[h], Oa.call(a, k, f), c.splice(h, 0, k)
		};
		n.prototype.qa = function () {return !(!this.a || !this.a.length)};
		n.prototype.na = function () {
			this.a || this.f();
			return this.a
		};
		n.prototype.addEventListener = function (a, b, c) {
			"object" !== typeof c && (c = {capture: !!c});
			c.ka = this;
			this.host.addEventListener(a, b, c)
		};
		n.prototype.removeEventListener = function (a, b, c) {
			"object" !== typeof c && (c = {capture: !!c});
			c.ka = this;
			this.host.removeEventListener(a, b, c)
		};
		n.prototype.getElementById = function (a) {return this.querySelector("#" + a)};
		(function (a) {
			I(a, Ja, !0);
			I(a, Ka, !0)
		})(n.prototype);
		var sd = {addEventListener: gc.bind(window), removeEventListener: kc.bind(window)}, rd = {
				addEventListener: gc,
				removeEventListener: kc,
				appendChild: function (a) {return ac(this, a)},
				insertBefore: function (a, b) {
					return ac(this,
						a, b)
				},
				removeChild: function (a) {
					if (a.parentNode !== this)throw Error("The node to be removed is not a child of this node: " + a);
					if (!Tb(a)) {
						var b = E(this) ? this.host : this, c = M(a);
						b === c && S.call(b, a)
					}
					Ma(this, null, a);
					return a
				},
				replaceChild: function (a, b) {
					this.insertBefore(a, b);
					this.removeChild(b);
					return a
				},
				cloneNode: function (a) {
					var b;
					if ("template" == this.localName) b = $a.call(this, a); else if (b = $a.call(this, !1), a) {
						a = this.childNodes;
						for (var c = 0, d; c < a.length; c++)d = a[c].cloneNode(!0), b.appendChild(d)
					}
					return b
				},
				getRootNode: function () {return Na(this)},
				get isConnected() {
					var a = this.ownerDocument;
					if (a && a.contains && a.contains(this) || (a = a.documentElement) && a.contains && a.contains(this))return !0;
					for (a = this; a && !(a instanceof Document);)a = a.parentNode || (a instanceof n ? a.host : void 0);
					return !!(a && a instanceof Document)
				},
				dispatchEvent: function (a) {
					ga();
					return ab.call(this, a)
				}
			}, td = {get assignedSlot() {return oc(this)}}, Ta = {
				querySelector: function (a) {return Yb(this, function (b) {return Cc.call(b, a)}, function (a) {return !!a})[0] || null},
				querySelectorAll: function (a) {
					return Yb(this,
						function (b) {return Cc.call(b, a)})
				}
			},
			rc = {assignedNodes: function (a) {if ("slot" === this.localName)return $b(this), this.__shady ? (a && a.flatten ? this.__shady.L : this.__shady.assignedNodes) || [] : []}},
			pc = Ea({
				setAttribute: function (a, b) {
					ma || (ma = window.ShadyCSS && window.ShadyCSS.ScopingShim);
					ma && "class" === a ? ma.setElementClass(this, b) : (Dc.call(this, a, b), Xb(this, a))
				},
				removeAttribute: function (a) {
					Ec.call(this, a);
					Xb(this, a)
				},
				attachShadow: function (a) {
					if (!this)throw"Must provide a host.";
					if (!a)throw"Not enough arguments.";
					return new n(zb, this)
				},
				get slot() {return this.getAttribute("slot")},
				set slot(a) {this.setAttribute("slot", a)},
				get assignedSlot() {return oc(this)}
			}, Ta, rc);
		Object.defineProperties(pc, Fc);
		var qc = Ea({
			importNode: function (a, b) {return cc(a, b)},
			getElementById: function (a) {return this.querySelector("#" + a)}
		}, Ta);
		Object.defineProperties(qc, {_activeElement: Ka.activeElement});
		var Id = HTMLElement.prototype.blur, ud = Ea({
			blur: function () {
				var a = this.shadowRoot;
				(a = a && a.activeElement) ? a.blur() : Id.call(this)
			}
		});
		C.Fa && (window.ShadyDOM =
			{
				inUse: C.Fa,
				patch: function (a) {return a},
				isShadyRoot: E,
				enqueue: Eb,
				flush: ga,
				settings: C,
				filterMutations: hd,
				observeChildren: fd,
				unobserveChildren: ed,
				nativeMethods: Bd,
				nativeTree: Cd
			}, window.Event = Ed, window.CustomEvent = Fd, window.MouseEvent = Gd, nd(), qd(), window.ShadowRoot = n);
		var vd = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
		z.prototype.I = function (a, b) {
			this.m.set(a, b);
			this.l.set(b.constructor, b)
		};
		z.prototype.f = function (a) {return this.m.get(a)};
		z.prototype.H = function (a) {return this.l.get(a)};
		z.prototype.o = function (a) {
			this.h = !0;
			this.i.push(a)
		};
		z.prototype.j = function (a) {
			var b = this;
			this.h && L(a, function (a) {return b.g(a)})
		};
		z.prototype.g = function (a) {
			if (this.h && !a.__CE_patched) {
				a.__CE_patched = !0;
				for (var b = 0; b < this.i.length; b++)this.i[b](a)
			}
		};
		z.prototype.b = function (a) {
			var b = [];
			L(a, function (a) {return b.push(a)});
			for (a = 0; a < b.length; a++) {
				var c = b[a];
				1 === c.__CE_state ? this.connectedCallback(c) : this.v(c)
			}
		};
		z.prototype.a = function (a) {
			var b = [];
			L(a, function (a) {return b.push(a)});
			for (a = 0; a < b.length; a++) {
				var c = b[a];
				1 === c.__CE_state && this.disconnectedCallback(c)
			}
		};
		z.prototype.c = function (a, b) {
			b = b ? b : new Set;
			var c = this, d = [];
			L(a, function (a) {
				if ("link" === a.localName && "import" === a.getAttribute("rel")) {
					var e = a.import;
					e instanceof Node && "complete" === e.readyState ? (e.__CE_isImportDocument = !0, e.__CE_hasRegistry = !0) : a.addEventListener("load", function () {
						var d = a.import;
						d.__CE_documentLoadHandled || (d.__CE_documentLoadHandled = !0, d.__CE_isImportDocument = !0, d.__CE_hasRegistry = !0, b.delete(d), c.c(d,
							b))
					})
				} else d.push(a)
			}, b);
			if (this.h)for (a = 0; a < d.length; a++)this.g(d[a]);
			for (a = 0; a < d.length; a++)this.v(d[a])
		};
		z.prototype.v = function (a) {
			if (void 0 === a.__CE_state) {
				var b = this.f(a.localName);
				if (b) {
					b.constructionStack.push(a);
					var c = b.constructor;
					try {try {if (new c !== a)throw Error("The custom element constructor did not produce the element being upgraded.");} finally {b.constructionStack.pop()}} catch (f) {throw a.__CE_state = 2, f;}
					a.__CE_state = 1;
					a.__CE_definition = b;
					if (b.attributeChangedCallback)for (b = b.observedAttributes,
						                                    c = 0; c < b.length; c++) {
						var d = b[c], e = a.getAttribute(d);
						null !== e && this.attributeChangedCallback(a, d, null, e, null)
					}
					m(a) && this.connectedCallback(a)
				}
			}
		};
		z.prototype.connectedCallback = function (a) {
			var b = a.__CE_definition;
			b.connectedCallback && b.connectedCallback.call(a)
		};
		z.prototype.disconnectedCallback = function (a) {
			var b = a.__CE_definition;
			b.disconnectedCallback && b.disconnectedCallback.call(a)
		};
		z.prototype.attributeChangedCallback = function (a, b, c, d, e) {
			var f = a.__CE_definition;
			f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) &&
			f.attributeChangedCallback.call(a, b, c, d, e)
		};
		Aa.prototype.c = function () {this.J && this.J.disconnect()};
		Aa.prototype.f = function (a) {
			var b = this.a.readyState;
			"interactive" !== b && "complete" !== b || this.c();
			for (b = 0; b < a.length; b++)for (var c = a[b].addedNodes, d = 0; d < c.length; d++)this.b.c(c[d])
		};
		yb.prototype.c = function () {
			if (this.a)throw Error("Already resolved.");
			this.a = void 0;
			this.b && this.b(void 0)
		};
		w.prototype.define = function (a, b) {
			var c = this;
			if (!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");
			if (!sc(a))throw new SyntaxError("The element name '" + a + "' is not valid.");
			if (this.a.f(a))throw Error("A custom element with name '" + a + "' has already been defined.");
			if (this.f)throw Error("A custom element is already being defined.");
			this.f = !0;
			var d, e, f, g, h;
			try {
				var k = function (a) {
					var b = m[a];
					if (void 0 !== b && !(b instanceof Function))throw Error("The '" + a + "' callback must be a function.");
					return b
				}, m = b.prototype;
				if (!(m instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");
				d = k("connectedCallback");
				e = k("disconnectedCallback");
				f = k("adoptedCallback");
				g = k("attributeChangedCallback");
				h = b.observedAttributes || []
			} catch (ta) {return} finally {this.f = !1}
			this.a.I(a, {
				localName: a,
				constructor: b,
				connectedCallback: d,
				disconnectedCallback: e,
				adoptedCallback: f,
				attributeChangedCallback: g,
				observedAttributes: h,
				constructionStack: []
			});
			this.c.push(a);
			this.b || (this.b = !0, this.g(function () {return c.j()}))
		};
		w.prototype.j = function () {
			if (!1 !== this.b)for (this.b = !1, this.a.c(document); 0 < this.c.length;) {
				var a =
					this.c.shift();
				(a = this.h.get(a)) && a.c()
			}
		};
		w.prototype.get = function (a) {if (a = this.a.f(a))return a.constructor};
		w.prototype.whenDefined = function (a) {
			if (!sc(a))return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
			var b = this.h.get(a);
			if (b)return b.f;
			b = new yb;
			this.h.set(a, b);
			this.a.f(a) && -1 === this.c.indexOf(a) && b.c();
			return b.f
		};
		w.prototype.l = function (a) {
			this.i.c();
			var b = this.g;
			this.g = function (c) {return a(function () {return b(c)})}
		};
		window.CustomElementRegistry = w;
		w.prototype.define =
			w.prototype.define;
		w.prototype.get = w.prototype.get;
		w.prototype.whenDefined = w.prototype.whenDefined;
		w.prototype.polyfillWrapFlushCallback = w.prototype.l;
		var wa = window.Document.prototype.createElement, $c = window.Document.prototype.createElementNS,
			Zc = window.Document.prototype.importNode, ad = window.Document.prototype.prepend,
			bd = window.Document.prototype.append, nb = window.Node.prototype.cloneNode,
			da = window.Node.prototype.appendChild, vb = window.Node.prototype.insertBefore,
			xa = window.Node.prototype.removeChild,
			wb = window.Node.prototype.replaceChild,
			za = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
			mb = window.Element.prototype.attachShadow,
			ua = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
			ya = window.Element.prototype.getAttribute, ob = window.Element.prototype.setAttribute,
			qb = window.Element.prototype.removeAttribute, ea = window.Element.prototype.getAttributeNS,
			pb = window.Element.prototype.setAttributeNS, rb = window.Element.prototype.removeAttributeNS,
			tb = window.Element.prototype.insertAdjacentElement,
			Qc = window.Element.prototype.prepend, Rc = window.Element.prototype.append,
			Tc = window.Element.prototype.before, Uc = window.Element.prototype.after,
			Vc = window.Element.prototype.replaceWith, Wc = window.Element.prototype.remove, dd = window.HTMLElement,
			va = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
			sb = window.HTMLElement.prototype.insertAdjacentElement, xb = new function () {},
			na = window.customElements;
		if (!na || na.forcePolyfill || "function" != typeof na.define || "function" != typeof na.get) {
			var aa =
				new z;
			cd(aa);
			Yc(aa);
			Xc(aa);
			Pc(aa);
			document.__CE_hasRegistry = !0;
			var Jd = new w(aa);
			Object.defineProperty(window, "customElements", {configurable: !0, enumerable: !0, value: Jd})
		}
		var H = {STYLE_RULE: 1, ha: 7, MEDIA_RULE: 4, va: 1E3}, F = {
			cb: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
			port: /@import[^;]*;/gim,
			Ca: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
			Ga: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
			kb: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
			pb: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
			jb: /^@[^\s]*keyframes/,
			Ha: /\s+/g
		}, p = !(window.ShadyDOM && window.ShadyDOM.inUse), y;
		window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? y = window.ShadyCSS.nativeCss : window.ShadyCSS ? (vc(window.ShadyCSS), window.ShadyCSS = void 0) : vc(window.WebComponents && window.WebComponents.flags);
		var oa = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};{])+)|\{([^\}]*)\}(?:(?=[;\s}])|$))/gi,
			pa = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, Kd = /(--[\w-]+)\s*([:,;)]|$)/gi,
			Ld = /(animation\s*:)|(animation-name\s*:)/, xd = /@media[^(]*(\([^)]*\))/,
			Md = /\{[^}]*\}/g, O = null;
		r.prototype.a = function (a, b, c) {a.__styleScoped ? a.__styleScoped = null : this.i(a, b || "", c)};
		r.prototype.i = function (a, b, c) {
			a.nodeType === Node.ELEMENT_NODE && this.v(a, b, c);
			if (a = "template" === a.localName ? (a.content || a.tb).childNodes : a.children || a.childNodes)for (var d = 0; d < a.length; d++)this.i(a[d], b, c)
		};
		r.prototype.v = function (a, b, c) {
			if (b)if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b)); else if (a.getAttribute) {
				var d =
					a.getAttribute(Nd);
				c ? d && (b = d.replace("style-scope", "").replace(b, ""), ja(a, b)) : ja(a, (d ? d + " " : "") + "style-scope " + b)
			}
		};
		r.prototype.b = function (a, b, c) {
			var d = a.__cssBuild;
			p || "shady" === d ? b = T(b, c) : (a = P(a), b = this.O(b, a.is, a.V, c) + "\n\n");
			return b.trim()
		};
		r.prototype.O = function (a, b, c, d) {
			var e = this.f(b, c);
			b = this.h(b);
			var f = this;
			return T(a, function (a) {
				a.c || (f.R(a, b, e), a.c = !0);
				d && d(a, b, e)
			})
		};
		r.prototype.h = function (a) {return a ? Od + a : ""};
		r.prototype.f = function (a, b) {return b ? "[is=" + a + "]" : a};
		r.prototype.R = function (a,
		                          b, c) {this.j(a, this.g, b, c)};
		r.prototype.j = function (a, b, c, d) {a.selector = a.B = this.l(a, b, c, d)};
		r.prototype.l = function (a, b, c, d) {
			var e = a.selector.split(Gc);
			if (!wc(a)) {
				a = 0;
				for (var f = e.length, g; a < f && (g = e[a]); a++)e[a] = b.call(this, g, c, d)
			}
			return e.join(Gc)
		};
		r.prototype.g = function (a, b, c) {
			var d = this, e = !1;
			a = a.trim();
			a = a.replace(Pd, function (a, b, c) {return ":" + b + "(" + c.replace(/\s/g, "") + ")"});
			a = a.replace(Qd, db + " $1");
			return a = a.replace(Rd, function (a, g, h) {
				e || (a = d.H(h, g, b, c), e = e || a.stop, g = a.bb, h = a.value);
				return g + h
			})
		};
		r.prototype.H = function (a, b, c, d) {
			var e = a.indexOf(eb);
			0 <= a.indexOf(db) ? a = this.N(a, d) : 0 !== e && (a = c ? this.m(a, c) : a);
			c = !1;
			0 <= e && (b = "", c = !0);
			var f;
			c && (f = !0, c && (a = a.replace(Sd, function (a, b) {return " > " + b})));
			a = a.replace(Td, function (a, b, c) {return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]'});
			return {value: a, bb: b, stop: f}
		};
		r.prototype.m = function (a, b) {
			a = a.split(Hc);
			a[0] += b;
			return a.join(Hc)
		};
		r.prototype.N = function (a, b) {
			var c = a.match(Ic);
			return (c = c && c[2].trim() || "") ? c[0].match(Jc) ? a.replace(Ic, function (a, c, f) {
				return b +
					f
			}) : c.split(Jc)[0] === b ? c : Ud : a.replace(db, b)
		};
		r.prototype.P = function (a) {
			a.selector = a.parsedSelector;
			this.o(a);
			this.j(a, this.I)
		};
		r.prototype.o = function (a) {a.selector === Vd && (a.selector = "html")};
		r.prototype.I = function (a) {return a.match(eb) ? this.g(a, Kc) : this.m(a.trim(), Kc)};
		jb.Object.defineProperties(r.prototype, {
			c: {
				configurable: !0,
				enumerable: !0,
				get: function () {return "style-scope"}
			}
		});
		var Pd = /:(nth[-\w]+)\(([^)]+)\)/, Kc = ":not(.style-scope)", Gc = ",",
			Rd = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=\[])+)/g, Jc = /[[.:#*]/,
			db = ":host", Vd = ":root", eb = "::slotted", Qd = new RegExp("^(" + eb + ")"),
			Ic = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Sd = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
			Td = /(.*):dir\((?:(ltr|rtl))\)/, Od = ".", Hc = ":", Nd = "class", Ud = "should_not_match", v = new r;
		t.get = function (a) {return a ? a.__styleInfo : null};
		t.set = function (a, b) {return a.__styleInfo = b};
		t.prototype.c = function () {return this.F};
		t.prototype._getStyleRules = t.prototype.c;
		var Lc = function (a) {
			return a.matches || a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector ||
				a.oMatchesSelector || a.webkitMatchesSelector
		}(window.Element.prototype), Wd = navigator.userAgent.match("Trident");
		q.prototype.R = function (a) {
			var b = this, c = {}, d = [], e = 0;
			U(a, function (a) {
				b.c(a);
				a.index = e++;
				b.P(a.s.cssText, c)
			}, function (a) {d.push(a)});
			a.b = d;
			a = [];
			for (var f in c)a.push(f);
			return a
		};
		q.prototype.c = function (a) {
			if (!a.s) {
				var b = {}, c = {};
				this.b(a, c) && (b.D = c, a.rules = null);
				b.cssText = this.O(a);
				a.s = b
			}
		};
		q.prototype.b = function (a, b) {
			var c = a.s;
			if (c) {if (c.D)return Object.assign(b, c.D), !0} else {
				for (var c = a.parsedCssText,
					     d; a = oa.exec(c);) {
					d = (a[2] || a[3]).trim();
					if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
					d = !0
				}
				return d
			}
		};
		q.prototype.O = function (a) {return this.N(a.parsedCssText)};
		q.prototype.N = function (a) {return a.replace(Md, "").replace(oa, "")};
		q.prototype.P = function (a, b) {
			for (var c; c = Kd.exec(a);) {
				var d = c[1];
				":" !== c[2] && (b[d] = !0)
			}
		};
		q.prototype.ea = function (a) {for (var b = Object.getOwnPropertyNames(a), c = 0, d; c < b.length; c++)d = b[c], a[d] = this.a(a[d], a)};
		q.prototype.a = function (a, b) {
			if (a)if (0 <= a.indexOf(";")) a = this.f(a, b); else {
				var c =
					this;
				a = yc(a, function (a, e, f, g) {
					if (!e)return a + g;
					(e = c.a(b[e], b)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = c.a(b[f] || f, b) || f;
					return a + (e || "") + g
				})
			}
			return a && a.trim() || ""
		};
		q.prototype.f = function (a, b) {
			a = a.split(";");
			for (var c = 0, d, e; c < a.length; c++)if (d = a[c]) {
				pa.lastIndex = 0;
				if (e = pa.exec(d)) d = this.a(b[e[1]], b); else if (e = d.indexOf(":"), -1 !== e) {
					var f = d.substring(e), f = f.trim(), f = this.a(f, b) || f;
					d = d.substring(0, e) + f
				}
				a[c] = d && d.lastIndexOf(";") === d.length - 1 ? d.slice(0, -1) : d || ""
			}
			return a.join(";")
		};
		q.prototype.I = function (a, b) {
			var c = "";
			a.s || this.c(a);
			a.s.cssText && (c = this.f(a.s.cssText, b));
			a.cssText = c
		};
		q.prototype.H = function (a, b) {
			var c = a.cssText, d = a.cssText;
			null == a.Ea && (a.Ea = Ld.test(c));
			if (a.Ea)if (null == a.ba) {
				a.ba = [];
				for (var e in b)d = b[e], d = d(c), c !== d && (c = d, a.ba.push(e))
			} else {
				for (e = 0; e < a.ba.length; ++e)d = b[a.ba[e]], c = d(c);
				d = c
			}
			a.cssText = d
		};
		q.prototype.da = function (a, b) {
			var c = {}, d = this, e = [];
			U(a, function (a) {
				a.s || d.c(a);
				var f = a.B || a.parsedSelector;
				b && a.s.D && f && Lc.call(b, f) && (d.b(a, c), a = a.index, f = parseInt(a /
					32, 10), e[f] = (e[f] || 0) | 1 << a % 32)
			}, null, !0);
			return {D: c, key: e}
		};
		q.prototype.ga = function (a, b, c, d) {
			b.s || this.c(b);
			if (b.s.D) {
				var e = P(a);
				a = e.is;
				var e = e.V, e = a ? v.f(a, e) : "html", f = b.parsedSelector, g = ":host > *" === f || "html" === f,
					h = 0 === f.indexOf(":host") && !g;
				"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));
				"shadow" === c && (g = ":host > *" === f || "html" === f, h = h && !g);
				if (g || h) c = e, h && (p && !b.B && (b.B = v.l(b, v.g, v.h(a), e)), c = b.B || e), d({
					ob: c,
					ib: h,
					vb: g
				})
			}
		};
		q.prototype.ca = function (a, b) {
			var c = {}, d =
				{}, e = this, f = b && b.__cssBuild;
			U(b, function (b) {e.ga(a, b, f, function (f) {Lc.call(a.ub || a, f.ob) && (f.ib ? e.b(b, c) : e.b(b, d))})}, null, !0);
			return {mb: d, hb: c}
		};
		q.prototype.fa = function (a, b, c) {
			var d = this, e = P(a), f = v.f(e.is, e.V),
				g = new RegExp("(?:^|[^.#[:])" + (a.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
				e = t.get(a).F, h = this.h(e, c);
			return v.b(a, e, function (a) {
				d.I(a, b);
				p || wc(a) || !a.cssText || (d.H(a, h), d.l(a, g, f, c))
			})
		};
		q.prototype.h = function (a, b) {
			a = a.b;
			var c = {};
			if (!p && a)for (var d = 0, e = a[d]; d < a.length; e = a[++d])this.j(e,
				b), c[e.keyframesName] = this.i(e);
			return c
		};
		q.prototype.i = function (a) {return function (b) {return b.replace(a.f, a.a)}};
		q.prototype.j = function (a, b) {
			a.f = new RegExp(a.keyframesName, "g");
			a.a = a.keyframesName + "-" + b;
			a.B = a.B || a.selector;
			a.selector = a.B.replace(a.keyframesName, a.a)
		};
		q.prototype.l = function (a, b, c, d) {
			a.B = a.B || a.selector;
			d = "." + d;
			for (var e = a.B.split(","), f = 0, g = e.length, h; f < g && (h = e[f]); f++)e[f] = h.match(b) ? h.replace(c, d) : d + " " + h;
			a.selector = e.join(",")
		};
		q.prototype.o = function (a, b, c) {
			var d = a.getAttribute("class") ||
				"", e = d;
			c && (e = d.replace(new RegExp("\\s*x-scope\\s*" + c + "\\s*", "g"), " "));
			e += (e ? " " : "") + "x-scope " + b;
			d !== e && ja(a, e)
		};
		q.prototype.v = function (a, b, c, d) {
			b = d ? d.textContent || "" : this.fa(a, b, c);
			var e = t.get(a), f = e.a;
			f && !p && f !== d && (f._useCount--, 0 >= f._useCount && f.parentNode && f.parentNode.removeChild(f));
			p ? e.a ? (e.a.textContent = b, d = e.a) : b && (d = Wa(b, c, a.shadowRoot, e.b)) : d ? d.parentNode || (Wd && -1 < b.indexOf("@media") && (d.textContent = b), xc(d, null, e.b)) : b && (d = Wa(b, c, null, e.b));
			d && (d._useCount = d._useCount || 0, e.a != d && d._useCount++,
				e.a = d);
			return d
		};
		q.prototype.m = function (a, b) {
			var c = ia(a), d = this;
			a.textContent = T(c, function (a) {
				var c = a.cssText = a.parsedCssText;
				a.s && a.s.cssText && (c = c.replace(F.Ca, "").replace(F.Ga, ""), a.cssText = d.f(c, b))
			})
		};
		jb.Object.defineProperties(q.prototype, {
			g: {
				configurable: !0,
				enumerable: !0,
				get: function () {return "x-scope"}
			}
		});
		var K = new q, fb = {}, qa = window.customElements;
		if (qa && !p) {
			var Xd = qa.define;
			qa.define = function (a, b, c) {
				var d = document.createComment(" Shady DOM styles for " + a + " "), e = document.head;
				e.insertBefore(d,
					(O ? O.nextSibling : null) || e.firstChild);
				O = d;
				fb[a] = d;
				return Xd.call(qa, a, b, c)
			}
		}
		ca.prototype.a = function (a, b, c) {
			for (var d = 0; d < c.length; d++) {
				var e = c[d];
				if (a.D[e] !== b[e])return !1
			}
			return !0
		};
		ca.prototype.b = function (a, b, c, d) {
			var e = this.cache[a] || [];
			e.push({D: b, styleElement: c, C: d});
			e.length > this.c && e.shift();
			this.cache[a] = e
		};
		ca.prototype.fetch = function (a, b, c) {
			if (a = this.cache[a])for (var d = a.length - 1; 0 <= d; d--) {
				var e = a[d];
				if (this.a(e, b, c))return e
			}
		};
		if (!p) {
			var Mc = new MutationObserver(zc), Nc = function (a) {
				Mc.observe(a,
					{childList: !0, subtree: !0})
			};
			if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Nc(document); else {
				var gb = function () {Nc(document.body)};
				window.HTMLImports ? window.HTMLImports.whenReady(gb) : requestAnimationFrame(function () {
					if ("loading" === document.readyState) {
						var a = function () {
							gb();
							document.removeEventListener("readystatechange", a)
						};
						document.addEventListener("readystatechange", a)
					} else gb()
				})
			}
			lb = function () {zc(Mc.takeRecords())}
		}
		var ka = {}, Ad = Promise.resolve(), Xa = null, Bc = window.HTMLImports &&
			window.HTMLImports.whenReady || null, Ya, ra = null, ba = null;
		D.prototype.Da = function () {!this.enqueued && ba && (this.enqueued = !0, kb(ba))};
		D.prototype.b = function (a) {a.__seenByShadyCSS || (a.__seenByShadyCSS = !0, this.customStyles.push(a), this.Da())};
		D.prototype.a = function (a) {return a.__shadyCSSCachedStyle ? a.__shadyCSSCachedStyle : a.getStyle ? a.getStyle() : a};
		D.prototype.c = function () {
			for (var a = this.customStyles, b = 0; b < a.length; b++) {
				var c = a[b];
				if (!c.__shadyCSSCachedStyle) {
					var d = this.a(c);
					if (d) {
						var e = d.__appliedElement;
						if (e)for (var f = 0; f < d.attributes.length; f++) {
							var g = d.attributes[f];
							e.setAttribute(g.name, g.value)
						}
						d = e || d;
						ra && ra(d);
						c.__shadyCSSCachedStyle = d
					}
				}
			}
			return a
		};
		D.prototype.addCustomStyle = D.prototype.b;
		D.prototype.getStyleForCustomStyle = D.prototype.a;
		D.prototype.processStyles = D.prototype.c;
		Object.defineProperties(D.prototype, {
			transformCallback: {
				get: function () {return ra},
				set: function (a) {ra = a}
			}, validateCallback: {
				get: function () {return ba}, set: function (a) {
					var b = !1;
					ba || (b = !0);
					ba = a;
					b && this.Da()
				}
			}
		});
		var Oc = new ca;
		k.prototype.H = function () {lb()};
		k.prototype.ca = function (a) {
			var b = this.m[a] = (this.m[a] || 0) + 1;
			return a + "-" + b
		};
		k.prototype.Pa = function (a) {return ia(a)};
		k.prototype.Ra = function (a) {return T(a)};
		k.prototype.R = function (a) {
			a = a.content.querySelectorAll("style");
			for (var b = [], c = 0; c < a.length; c++) {
				var d = a[c];
				b.push(d.textContent);
				d.parentNode.removeChild(d)
			}
			return b.join("").trim()
		};
		k.prototype.ea = function (a) {return (a = a.content.querySelector("style")) ? a.getAttribute("css-build") || "" : ""};
		k.prototype.prepareTemplate =
			function (a, b, c) {
				if (!a.f) {
					a.f = !0;
					a.name = b;
					a.extends = c;
					ka[b] = a;
					var d = this.ea(a), e = this.R(a);
					c = {is: b, extends: c, rb: d};
					p || v.a(a.content, b);
					this.c();
					var f = pa.test(e) || oa.test(e);
					pa.lastIndex = 0;
					oa.lastIndex = 0;
					e = Va(e);
					f && y && this.a && this.a.transformRules(e, b);
					a._styleAst = e;
					a.g = d;
					d = [];
					y || (d = K.R(a._styleAst));
					if (!d.length || y) b = this.da(c, a._styleAst, p ? a.content : null, fb[b]), a.a = b;
					a.c = d
				}
			};
		k.prototype.da = function (a, b, c, d) {
			b = v.b(a, b);
			if (b.length)return Wa(b, a.is, c, d)
		};
		k.prototype.ga = function (a) {
			var b = P(a), c = b.is,
				b = b.V, d = fb[c], c = ka[c], e, f;
			c && (e = c._styleAst, f = c.c);
			return t.set(a, new t(e, d, f, 0, b))
		};
		k.prototype.O = function () {!this.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (this.a = window.ShadyCSS.ApplyShim, this.a.invalidCallback = yd)};
		k.prototype.P = function () {
			var a = this;
			!this.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (this.b = window.ShadyCSS.CustomStyleInterface, this.b.transformCallback = function (b) {a.v(b)}, this.b.validateCallback = function () {
				requestAnimationFrame(function () {
					(a.b.enqueued || a.i) &&
					a.f()
				})
			})
		};
		k.prototype.c = function () {
			this.O();
			this.P()
		};
		k.prototype.f = function () {
			this.c();
			if (this.b) {
				var a = this.b.processStyles();
				this.b.enqueued && (y ? this.Na(a) : (this.o(this.g, this.h), this.I(a)), this.b.enqueued = !1, this.i && !y && this.styleDocument())
			}
		};
		k.prototype.styleElement = function (a, b) {
			var c = P(a).is, d = t.get(a);
			d || (d = this.ga(a));
			this.j(a) || (this.i = !0);
			b && (d.M = d.M || {}, Object.assign(d.M, b));
			if (y) {
				if (d.M) {
					b = d.M;
					for (var e in b)null === e ? a.style.removeProperty(e) : a.style.setProperty(e, b[e])
				}
				if (((e = ka[c]) ||
					this.j(a)) && e && e.a && !Ac(e)) {
					if (Ac(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) this.c(), this.a && this.a.transformRules(e._styleAst, c), e.a.textContent = v.b(a, d.F), zd(e);
					p && (c = a.shadowRoot) && (c.querySelector("style").textContent = v.b(a, d.F));
					d.F = e._styleAst
				}
			} else this.o(a, d), d.sa && d.sa.length && this.N(a, d)
		};
		k.prototype.l = function (a) {return (a = a.getRootNode().host) ? t.get(a) ? a : this.l(a) : this.g};
		k.prototype.j = function (a) {return a === this.g};
		k.prototype.N = function (a, b) {
			var c = P(a).is, d = Oc.fetch(c,
				b.G, b.sa), e = d ? d.styleElement : null, f = b.C;
			b.C = d && d.C || this.ca(c);
			e = K.v(a, b.G, b.C, e);
			p || K.o(a, b.C, f);
			d || Oc.b(c, b.G, e, b.C)
		};
		k.prototype.o = function (a, b) {
			var c = this.l(a), d = t.get(c), c = Object.create(d.G || null), e = K.ca(a, b.F);
			a = K.da(d.F, a).D;
			Object.assign(c, e.hb, a, e.mb);
			this.fa(c, b.M);
			K.ea(c);
			b.G = c
		};
		k.prototype.fa = function (a, b) {
			for (var c in b) {
				var d = b[c];
				if (d || 0 === d) a[c] = d
			}
		};
		k.prototype.styleDocument = function (a) {this.styleSubtree(this.g, a)};
		k.prototype.styleSubtree = function (a, b) {
			var c = a.shadowRoot;
			(c || this.j(a)) &&
			this.styleElement(a, b);
			if (b = c && (c.children || c.childNodes))for (a = 0; a < b.length; a++)this.styleSubtree(b[a]); else if (a = a.children || a.childNodes)for (b = 0; b < a.length; b++)this.styleSubtree(a[b])
		};
		k.prototype.Na = function (a) {
			for (var b = 0; b < a.length; b++) {
				var c = this.b.getStyleForCustomStyle(a[b]);
				c && this.Ma(c)
			}
		};
		k.prototype.I = function (a) {
			for (var b = 0; b < a.length; b++) {
				var c = this.b.getStyleForCustomStyle(a[b]);
				c && K.m(c, this.h.G)
			}
		};
		k.prototype.v = function (a) {
			var b = this, c = ia(a);
			U(c, function (a) {
				p ? v.o(a) : v.P(a);
				y && (b.c(),
				b.a && b.a.transformRule(a))
			});
			y ? a.textContent = T(c) : this.h.F.rules.push(c)
		};
		k.prototype.Ma = function (a) {
			if (y && this.a) {
				var b = ia(a);
				this.c();
				this.a.transformRules(b);
				a.textContent = T(b)
			}
		};
		k.prototype.getComputedStyleValue = function (a, b) {
			var c;
			y || (c = (t.get(a) || t.get(this.l(a))).G[b]);
			return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : ""
		};
		k.prototype.Qa = function (a, b) {
			var c = a.getRootNode();
			b = b ? b.split(/\s/) : [];
			c = c.host && c.host.localName;
			if (!c) {
				var d = a.getAttribute("class");
				if (d)for (var d =
					d.split(/\s/), e = 0; e < d.length; e++)if (d[e] === v.c) {
					c = d[e + 1];
					break
				}
			}
			c && b.push(v.c, c);
			y || (c = t.get(a)) && c.C && b.push(K.g, c.C);
			ja(a, b.join(" "))
		};
		k.prototype.Oa = function (a) {return t.get(a)};
		k.prototype.flush = k.prototype.H;
		k.prototype.prepareTemplate = k.prototype.prepareTemplate;
		k.prototype.styleElement = k.prototype.styleElement;
		k.prototype.styleDocument = k.prototype.styleDocument;
		k.prototype.styleSubtree = k.prototype.styleSubtree;
		k.prototype.getComputedStyleValue = k.prototype.getComputedStyleValue;
		k.prototype.setElementClass =
			k.prototype.Qa;
		k.prototype._styleInfoForNode = k.prototype.Oa;
		k.prototype.transformCustomStyleForDocument = k.prototype.v;
		k.prototype.getStyleAst = k.prototype.Pa;
		k.prototype.styleAstToString = k.prototype.Ra;
		k.prototype.flushCustomStyles = k.prototype.f;
		Object.defineProperties(k.prototype, {
			nativeShadow: {get: function () {return p}},
			nativeCss: {get: function () {return y}}
		});
		var G = new k, hb, ib;
		window.ShadyCSS && (hb = window.ShadyCSS.ApplyShim, ib = window.ShadyCSS.CustomStyleInterface);
		window.ShadyCSS = {
			ScopingShim: G,
			prepareTemplate: function (a,
			                           b, c) {
				G.f();
				G.prepareTemplate(a, b, c)
			},
			styleSubtree: function (a, b) {
				G.f();
				G.styleSubtree(a, b)
			},
			styleElement: function (a) {
				G.f();
				G.styleElement(a)
			},
			styleDocument: function (a) {
				G.f();
				G.styleDocument(a)
			},
			getComputedStyleValue: function (a, b) {return G.getComputedStyleValue(a, b)},
			nativeCss: y,
			nativeShadow: p
		};
		hb && (window.ShadyCSS.ApplyShim = hb);
		ib && (window.ShadyCSS.CustomStyleInterface = ib);
		(function () {
			var a = window.customElements, b = window.HTMLImports;
			window.WebComponents = window.WebComponents || {};
			if (a && a.polyfillWrapFlushCallback) {
				var c,
					d = function () {
						if (c) {
							var a = c;
							c = null;
							a();
							return !0
						}
					}, e = b.whenReady;
				a.polyfillWrapFlushCallback(function (a) {
					c = a;
					e(d)
				});
				b.whenReady = function (a) {e(function () {d() ? b.whenReady(a) : a()})}
			}
			b.whenReady(function () {
				requestAnimationFrame(function () {
					window.WebComponents.ready = !0;
					document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: !0}))
				})
			})
		})();
		(function () {
			var a = document.createElement("style");
			a.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
			var b = document.querySelector("head");
			b.insertBefore(a, b.firstChild)
		})()
	})();
}).call(self)
//# sourceMappingURL=webcomponents-hi-sd-ce.js.map
