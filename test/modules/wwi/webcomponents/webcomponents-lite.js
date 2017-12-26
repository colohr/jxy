(function () {
	/*
	 
	 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
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
	 */
	'use strict';
	const loads = new Set();
	var qb = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
	(function () {
		function k() {
			var a = this;
			this.s = {};
			this.g = document.documentElement;
			var b = new za;
			b.rules = [];
			this.h = u.set(this.g, new u(b));
			this.i = !1;
			this.b = this.a = null;
			rb(function () {a.c()})
		}
		
		function L() {
			this.customStyles = [];
			this.enqueued = !1
		}
		
		function sb() {}
		
		function ja(a) {
			this.cache = {};
			this.c = void 0 === a ? 100 : a
		}
		
		function n() {}
		
		function u(a, b, c, d, e) {
			this.H = a || null;
			this.b = b || null;
			this.Ba = c || [];
			this.R = null;
			this.$ = e || "";
			this.a = this.F = this.J = null
		}
		
		function p() {}
		
		function za() {
			this.end = this.start = 0;
			this.rules = this.parent =
				this.previous = null;
			this.cssText = this.parsedCssText = "";
			this.atRule = !1;
			this.type = 0;
			this.parsedSelector = this.selector = this.keyframesName = ""
		}
		
		function Zc(a) {
			function b(b, c) {
				Object.defineProperty(b, "innerHTML", {
					enumerable: c.enumerable, configurable: !0, get: c.get, set: function (b) {
						var d = this, e = void 0;
						m(this) && (e = [], Q(this, function (a) {a !== d && e.push(a)}));
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
				v(b, "insertAdjacentElement", function (b, d) {
					var e = m(d);
					b = c.call(this, b, d);
					e && a.a(d);
					m(b) && a.b(d);
					return b
				})
			}
			
			tb ? v(Element.prototype, "attachShadow", function (a) {return this.__CE_shadowRoot = a = tb.call(this, a)}) : console.warn("Custom Elements: `Element#attachShadow` was not patched.");
			if (Aa && Aa.get) b(Element.prototype, Aa); else if (Ba && Ba.get) b(HTMLElement.prototype, Ba); else {
				var d = Ca.call(document, "div");
				a.u(function (a) {
					b(a, {
						enumerable: !0, configurable: !0, get: function () {
							return ub.call(this,
								!0).innerHTML
						}, set: function (a) {
							var b = "template" === this.localName ? this.content : this;
							for (d.innerHTML = a; 0 < b.childNodes.length;)Da.call(b, b.childNodes[0]);
							for (; 0 < d.childNodes.length;)ka.call(b, d.childNodes[0])
						}
					})
				})
			}
			v(Element.prototype, "setAttribute", function (b, c) {
				if (1 !== this.__CE_state)return vb.call(this, b, c);
				var d = Ea.call(this, b);
				vb.call(this, b, c);
				c = Ea.call(this, b);
				a.attributeChangedCallback(this, b, d, c, null)
			});
			v(Element.prototype, "setAttributeNS", function (b, c, d) {
				if (1 !== this.__CE_state)return wb.call(this,
					b, c, d);
				var e = la.call(this, b, c);
				wb.call(this, b, c, d);
				d = la.call(this, b, c);
				a.attributeChangedCallback(this, c, e, d, b)
			});
			v(Element.prototype, "removeAttribute", function (b) {
				if (1 !== this.__CE_state)return xb.call(this, b);
				var c = Ea.call(this, b);
				xb.call(this, b);
				null !== c && a.attributeChangedCallback(this, b, c, null, null)
			});
			v(Element.prototype, "removeAttributeNS", function (b, c) {
				if (1 !== this.__CE_state)return yb.call(this, b, c);
				var d = la.call(this, b, c);
				yb.call(this, b, c);
				var e = la.call(this, b, c);
				d !== e && a.attributeChangedCallback(this,
					c, d, e, b)
			});
			zb ? c(HTMLElement.prototype, zb) : Ab ? c(Element.prototype, Ab) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
			Bb(a, Element.prototype, {Sa: $c, append: ad});
			bd(a, {pb: cd, ob: dd, zb: ed, remove: fd})
		}
		
		function bd(a, b) {
			var c = Element.prototype;
			c.before = function (c) {
				for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f];
				f = d.filter(function (a) {return a instanceof Node && m(a)});
				b.pb.apply(this, d);
				for (var g = 0; g < f.length; g++)a.a(f[g]);
				if (m(this))for (f = 0; f < d.length; f++)g = d[f],
				g instanceof Element && a.b(g)
			};
			c.after = function (c) {
				for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f];
				f = d.filter(function (a) {return a instanceof Node && m(a)});
				b.ob.apply(this, d);
				for (var g = 0; g < f.length; g++)a.a(f[g]);
				if (m(this))for (f = 0; f < d.length; f++)g = d[f], g instanceof Element && a.b(g)
			};
			c.replaceWith = function (c) {
				for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f];
				var f = d.filter(function (a) {return a instanceof Node && m(a)}), g = m(this);
				b.zb.apply(this, d);
				for (var h = 0; h < f.length; h++)a.a(f[h]);
				if (g)for (a.a(this), f = 0; f < d.length; f++)g = d[f], g instanceof Element && a.b(g)
			};
			c.remove = function () {
				var c = m(this);
				b.remove.call(this);
				c && a.a(this)
			}
		}
		
		function gd(a) {
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
			
			v(Node.prototype, "insertBefore", function (b, d) {
				if (b instanceof DocumentFragment) {
					var c = Array.prototype.slice.apply(b.childNodes);
					b = Cb.call(this, b, d);
					if (m(this))for (d = 0; d < c.length; d++)a.b(c[d]);
					return b
				}
				c = m(b);
				d = Cb.call(this, b, d);
				c && a.a(b);
				m(this) && a.b(b);
				return d
			});
			v(Node.prototype, "appendChild", function (b) {
				if (b instanceof DocumentFragment) {
					var c = Array.prototype.slice.apply(b.childNodes);
					b = ka.call(this, b);
					if (m(this))for (var e = 0; e < c.length; e++)a.b(c[e]);
					return b
				}
				c = m(b);
				e = ka.call(this, b);
				c && a.a(b);
				m(this) &&
				a.b(b);
				return e
			});
			v(Node.prototype, "cloneNode", function (b) {
				b = ub.call(this, b);
				this.ownerDocument.__CE_hasRegistry ? a.c(b) : a.j(b);
				return b
			});
			v(Node.prototype, "removeChild", function (b) {
				var c = m(b), e = Da.call(this, b);
				c && a.a(b);
				return e
			});
			v(Node.prototype, "replaceChild", function (b, d) {
				if (b instanceof DocumentFragment) {
					var c = Array.prototype.slice.apply(b.childNodes);
					b = Db.call(this, b, d);
					if (m(this))for (a.a(d), d = 0; d < c.length; d++)a.b(c[d]);
					return b
				}
				var c = m(b), f = Db.call(this, b, d), g = m(this);
				g && a.a(d);
				c && a.a(b);
				g &&
				a.b(b);
				return f
			});
			Fa && Fa.get ? b(Node.prototype, Fa) : a.u(function (a) {
				b(a, {
					enumerable: !0,
					configurable: !0,
					get: function () {
						for (var a = [], b = 0; b < this.childNodes.length; b++)a.push(this.childNodes[b].textContent);
						return a.join("")
					},
					set: function (a) {
						for (; this.firstChild;)Da.call(this, this.firstChild);
						ka.call(this, document.createTextNode(a))
					}
				})
			})
		}
		
		function hd(a) {
			v(Document.prototype, "createElement", function (b) {
				if (this.__CE_hasRegistry) {
					var c = a.f(b);
					if (c)return new c.constructor
				}
				b = Ca.call(this, b);
				a.g(b);
				return b
			});
			v(Document.prototype, "importNode", function (b, c) {
				b = id.call(this, b, c);
				this.__CE_hasRegistry ? a.c(b) : a.j(b);
				return b
			});
			v(Document.prototype, "createElementNS", function (b, c) {
				if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
					var d = a.f(c);
					if (d)return new d.constructor
				}
				b = jd.call(this, b, c);
				a.g(b);
				return b
			});
			Bb(a, Document.prototype, {Sa: kd, append: ld})
		}
		
		function Bb(a, b, c) {
			b.prepend = function (b) {
				for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f];
				f = d.filter(function (a) {
					return a instanceof
						Node && m(a)
				});
				c.Sa.apply(this, d);
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
		
		function md(a) {
			window.HTMLElement = function () {
				function b() {
					var b = this.constructor, d = a.K(b);
					if (!d)throw Error("The custom element being constructed was not registered with `customElements`.");
					var e = d.constructionStack;
					if (!e.length)return e = Ca.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = d, a.g(e), e;
					var d = e.length - 1, f = e[d];
					if (f === Eb)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
					e[d] = Eb;
					Object.setPrototypeOf(f, b.prototype);
					a.g(f);
					return f
				}
				
				b.prototype = nd.prototype;
				return b
			}()
		}
		
		function r(a) {
			this.f = !1;
			this.a = a;
			this.h = new Map;
			this.g = function (a) {return a()};
			this.b = !1;
			this.c =
				[];
			this.i = new Ga(a, document)
		}
		
		function Fb() {
			var a = this;
			this.b = this.a = void 0;
			this.c = new Promise(function (b) {
				a.b = b;
				a.a && b(a.a)
			})
		}
		
		function Ga(a, b) {
			this.b = a;
			this.a = b;
			this.M = void 0;
			this.b.c(this.a);
			"loading" === this.a.readyState && (this.M = new MutationObserver(this.f.bind(this)), this.M.observe(this.a, {
				childList: !0,
				subtree: !0
			}))
		}
		
		function z() {
			this.s = new Map;
			this.o = new Map;
			this.i = [];
			this.h = !1
		}
		
		function q(a, b) {
			if (a !== Gb)throw new TypeError("Illegal constructor");
			a = document.createDocumentFragment();
			a.__proto__ =
				q.prototype;
			a.i(b);
			return a
		}
		
		function H(a) {
			this.root = a;
			this.fa = "slot"
		}
		
		function V(a) {
			if (!a.__shady || void 0 === a.__shady.firstChild) {
				a.__shady = a.__shady || {};
				a.__shady.firstChild = Ha(a);
				a.__shady.lastChild = Ia(a);
				Hb(a);
				for (var b = a.__shady.childNodes = da(a), c = 0, d; c < b.length && (d = b[c]); c++)d.__shady = d.__shady || {}, d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, Ib(d)
			}
		}
		
		function od(a) {
			var b = a && a.M;
			b && (b.ea.delete(a.hb), b.ea.size || (a.mb.__shady.Y = null))
		}
		
		function pd(a,
		            b) {
			a.__shady = a.__shady || {};
			a.__shady.Y || (a.__shady.Y = new ma);
			a.__shady.Y.ea.add(b);
			var c = a.__shady.Y;
			return {hb: b, M: c, mb: a, takeRecords: function () {return c.takeRecords()}}
		}
		
		function ma() {
			this.a = !1;
			this.addedNodes = [];
			this.removedNodes = [];
			this.ea = new Set
		}
		
		function C(a) {return "ShadyRoot" === a.eb}
		
		function W(a) {
			a = a.getRootNode();
			if (C(a))return a
		}
		
		function Ja(a, b) {
			if (a && b)for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length && (e = c[d]); d++) {
				var f = Object.getOwnPropertyDescriptor(b, e);
				f && Object.defineProperty(a,
					e, f)
			}
		}
		
		function Ka(a, b) {
			for (var c = [], d = 1; d < arguments.length; ++d)c[d - 1] = arguments[d];
			for (d = 0; d < c.length; d++)Ja(a, c[d]);
			return a
		}
		
		function qd(a, b) {for (var c in b)a[c] = b[c]}
		
		function Jb(a) {
			La.push(a);
			Ma.textContent = Kb++
		}
		
		function Lb(a) {
			Na || (Na = !0, Jb(na));
			ea.push(a)
		}
		
		function na() {
			Na = !1;
			for (var a = !!ea.length; ea.length;)ea.shift()();
			return a
		}
		
		function rd(a, b) {
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
		
		function Mb(a) {
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
		
		function Nb(a) {
			for (var b = {}, c = 0; c < a.length; c++)b[a[c]] = !0;
			return b
		}
		
		function Oa(a, b) {
			"template" === a.localName && (a = a.content);
			for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g; e < f && (g = d[e]); e++) {
				var h;
				a:{
					var l;
					h = g;
					l = a;
					var B = b;
					switch (h.nodeType) {
						case Node.ELEMENT_NODE:
							for (var k = h.localName, G = "<" + k, m = h.attributes, n = 0; l = m[n]; n++)G += " " + l.name + '="' + l.value.replace(sd, Mb) + '"';
							G += ">";
							h = td[k] ? G : G + Oa(h, B) + "</" + k + ">";
							break a;
						case Node.TEXT_NODE:
							h = h.data;
							h = l && ud[l.localName] ? h : h.replace(vd, Mb);
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
		
		function R(a) {
			D.currentNode = a;
			return D.parentNode()
		}
		
		function Ha(a) {
			D.currentNode =
				a;
			return D.firstChild()
		}
		
		function Ia(a) {
			D.currentNode = a;
			return D.lastChild()
		}
		
		function Ob(a) {
			D.currentNode = a;
			return D.previousSibling()
		}
		
		function Pb(a) {
			D.currentNode = a;
			return D.nextSibling()
		}
		
		function da(a) {
			var b = [];
			D.currentNode = a;
			for (a = D.firstChild(); a;)b.push(a), a = D.nextSibling();
			return b
		}
		
		function Qb(a) {
			E.currentNode = a;
			return E.parentNode()
		}
		
		function Rb(a) {
			E.currentNode = a;
			return E.firstChild()
		}
		
		function Sb(a) {
			E.currentNode = a;
			return E.lastChild()
		}
		
		function Tb(a) {
			E.currentNode = a;
			return E.previousSibling()
		}
		
		function Ub(a) {
			E.currentNode = a;
			return E.nextSibling()
		}
		
		function Vb(a) {
			var b = [];
			E.currentNode = a;
			for (a = E.firstChild(); a;)b.push(a), a = E.nextSibling();
			return b
		}
		
		function Wb(a) {return Oa(a, function (a) {return da(a)})}
		
		function Xb(a) {
			if (a.nodeType !== Node.ELEMENT_NODE)return a.nodeValue;
			a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);
			for (var b = "", c; c = a.nextNode();)b += c.nodeValue;
			return b
		}
		
		function M(a, b, c) {
			for (var d in b) {
				var e = Object.getOwnPropertyDescriptor(a, d);
				e && e.configurable || !e && c ? Object.defineProperty(a,
					d, b[d]) : c && console.warn("Could not define", d, "on", a)
			}
		}
		
		function S(a) {
			M(a, Yb);
			M(a, Pa);
			M(a, Qa)
		}
		
		function Zb(a, b, c) {
			Ib(a);
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
		
		function $b(a) {
			var b = a.__shady && a.__shady.parentNode, c, d = W(a);
			if (b || d) {
				c = ac(a);
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
					for (var g, e = d.ta(), f = 0; f < e.length; f++) {
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
							var B = h[l], k = R(B);
							k && X.call(k, B)
						}
					}
					e = g
				}
				b = b && d && b.localName === d.C.fa;
				if (e || b) d.ca = !1, oa(d)
			}
			Ra(a);
			return c
		}
		
		function Sa(a, b, c) {
			if (a = a.__shady && a.__shady.Y) b && a.addedNodes.push(b), c &&
			a.removedNodes.push(c), a.Bb()
		}
		
		function Ta(a) {
			if (a && a.nodeType) {
				a.__shady = a.__shady || {};
				var b = a.__shady.Ca;
				void 0 === b && (C(a) ? b = a : b = (b = a.parentNode) ? Ta(b) : a, document.documentElement.contains(a) && (a.__shady.Ca = b));
				return b
			}
		}
		
		function bc(a, b, c) {
			var d, e = c.C.fa;
			if (a.nodeType !== Node.DOCUMENT_FRAGMENT_NODE || a.__noInsertionPoint) a.localName === e && (V(b), V(a), d = !0); else for (var e = a.querySelectorAll(e), f = 0, g, h; f < e.length && (g = e[f]); f++)h = g.parentNode, h === a && (h = b), h = bc(g, h, c), d = d || h;
			return d
		}
		
		function cc(a) {
			return (a =
					a && a.__shady && a.__shady.root) && a.za()
		}
		
		function Ra(a) {
			if (a.__shady && void 0 !== a.__shady.Ca)for (var b = a.childNodes, c = 0, d = b.length, e; c < d && (e = b[c]); c++)Ra(e);
			a.__shady = a.__shady || {};
			a.__shady.Ca = void 0
		}
		
		function ac(a) {
			a = a.parentNode;
			if (cc(a))return oa(a.__shady.root), !0
		}
		
		function oa(a) {
			a.sa = !0;
			a.update()
		}
		
		function dc(a, b) {"slot" === b ? ac(a) : "slot" === a.localName && "name" === b && (a = W(a)) && a.update()}
		
		function ec(a, b, c) {
			var d = [];
			fc(a.childNodes, b, c, d);
			return d
		}
		
		function fc(a, b, c, d) {
			for (var e = 0, f = a.length, g; e < f && (g =
				a[e]); e++) {
				var h;
				if (h = g.nodeType === Node.ELEMENT_NODE) {
					h = g;
					var l = b, B = c, k = d, G = l(h);
					G && k.push(h);
					B && B(G) ? h = G : (fc(h.childNodes, l, B, k), h = void 0)
				}
				if (h)break
			}
		}
		
		function gc(a) {
			a = a.getRootNode();
			C(a) && a.Ta()
		}
		
		function hc(a, b, c) {
			if (c) {
				var d = c.__shady && c.__shady.parentNode;
				if (void 0 !== d && d !== a || void 0 === d && R(c) !== a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
			}
			if (c === b)return b;
			b.nodeType !== Node.DOCUMENT_FRAGMENT_NODE &&
			((d = b.__shady && b.__shady.parentNode) ? (Sa(d, null, b), $b(b)) : (b.parentNode && X.call(b.parentNode, b), Ra(b)));
			var d = c, e = W(a), f;
			e && (b.__noInsertionPoint && !e.sa && (e.ca = !0), f = bc(b, a, e)) && (e.ca = !1);
			if (a.__shady && void 0 !== a.__shady.firstChild)if (Hb(a), a.__shady = a.__shady || {}, void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null), b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
				for (var g = b.childNodes, h = 0; h < g.length; h++)Zb(g[h], a, d);
				b.__shady = b.__shady || {};
				g = void 0 !== b.__shady.firstChild ? null : void 0;
				b.__shady.firstChild =
					b.__shady.lastChild = g;
				b.__shady.childNodes = g
			} else Zb(b, a, d);
			var g = f, h = e && e.C.fa || "",
				l = b.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !b.__noInsertionPoint && h && b.querySelector(h);
			f = l && l.parentNode.nodeType !== Node.DOCUMENT_FRAGMENT_NODE;
			((l = l || b.localName === h) || a.localName === h || g) && e && oa(e);
			(e = cc(a)) && oa(a.__shady && a.__shady.root);
			if (!(e || l && !f || a.__shady.root || d && C(d.parentNode) && d.parentNode.N)) {
				if (c && (d = W(c))) {
					var B;
					if (c.localName === d.C.fa)a:{
						d = c.assignedNodes({flatten: !0});
						e = Ta(c);
						f = 0;
						for (g = d.length; f <
						g && (B = d[f]); f++)if (e.ga(c, B))break a;
						B = void 0
					} else B = c;
					c = B
				}
				B = C(a) ? a.host : a;
				c ? Ua.call(B, b, c) : ic.call(B, b)
			}
			Sa(a, b);
			return b
		}
		
		function jc(a, b) {
			if (a.ownerDocument !== document)return Va.call(document, a, b);
			var c = Va.call(document, a, !1);
			if (b) {
				a = a.childNodes;
				b = 0;
				for (var d; b < a.length; b++)d = jc(a[b], !0), c.appendChild(d)
			}
			return c
		}
		
		function Wa(a, b) {
			var c = [], d = a;
			for (a = a === window ? window : a.getRootNode(); d;)c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode;
			c[c.length - 1] === document && c.push(window);
			return c
		}
		
		function kc(a, b) {
			if (!C)return a;
			a = Wa(a, !0);
			for (var c = 0, d, e, f, g; c < b.length; c++)if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (g = a.indexOf(f), e = f), !C(f) || -1 < g)return d
		}
		
		function Xa(a) {
			function b(b, d) {
				b = new a(b, d);
				b.oa = d && !!d.composed;
				return b
			}
			
			qd(b, a);
			b.prototype = a.prototype;
			return b
		}
		
		function lc(a, b, c) {if (c = b.B && b.B[a.type] && b.B[a.type][c])for (var d = 0, e; (e = c[d]) && a.target !== a.relatedTarget && (e.call(b, a), !a.bb); d++);}
		
		function wd(a) {
			var b = a.composedPath(),
				c;
			Object.defineProperty(a, "currentTarget", {get: function () {return c}, configurable: !0});
			for (var d = b.length - 1; 0 <= d; d--)if (c = b[d], lc(a, c, "capture"), a.pa)return;
			Object.defineProperty(a, "eventPhase", {get: function () {return Event.AT_TARGET}});
			for (var e, d = 0; d < b.length; d++)if (c = b[d], !d || c.shadowRoot && c.shadowRoot === e)if (lc(a, c, "bubble"), c !== window && (e = c.getRootNode()), a.pa)break
		}
		
		function mc(a, b, c, d, e, f) {
			for (var g = 0; g < a.length; g++) {
				var h = a[g], l = h.type, B = h.capture, k = h.once, G = h.passive;
				if (b === h.node && c === l && d ===
					B && e === k && f === G)return g
			}
			return -1
		}
		
		function nc(a, b, c) {
			if (b) {
				var d, e, f;
				"object" === typeof c ? (d = !!c.capture, e = !!c.once, f = !!c.passive) : (d = !!c, f = e = !1);
				var g = c && c.qa || this, h = b.aa;
				if (h) {if (-1 < mc(h, g, a, d, e, f))return} else b.aa = [];
				h = function (d) {
					e && this.removeEventListener(a, b, c);
					d.__target || oc(d);
					var f;
					g !== this && (f = Object.getOwnPropertyDescriptor(d, "currentTarget"), Object.defineProperty(d, "currentTarget", {
						get: function () {return g},
						configurable: !0
					}));
					if (d.composed || -1 < d.composedPath().indexOf(g))if (d.target ===
						d.relatedTarget) d.eventPhase === Event.BUBBLING_PHASE && d.stopImmediatePropagation(); else if (d.eventPhase === Event.CAPTURING_PHASE || d.bubbles || d.target === g) {
						var h = "object" === typeof b && b.handleEvent ? b.handleEvent(d) : b.call(g, d);
						g !== this && (f ? (Object.defineProperty(d, "currentTarget", f), f = null) : delete d.currentTarget);
						return h
					}
				};
				b.aa.push({node: this, type: a, capture: d, once: e, passive: f, Eb: h});
				Ya[a] ? (this.B = this.B || {}, this.B[a] = this.B[a] || {
						capture: [],
						bubble: []
					}, this.B[a][d ? "capture" : "bubble"].push(h)) : (this instanceof
				Window ? pc : qc).call(this, a, h, c)
			}
		}
		
		function rc(a, b, c) {
			if (b) {
				var d, e, f;
				"object" === typeof c ? (d = !!c.capture, e = !!c.once, f = !!c.passive) : (d = !!c, f = e = !1);
				var g = c && c.qa || this, h = void 0, l;
				l = null;
				try {l = b.aa} catch (B) {}
				l && (e = mc(l, g, a, d, e, f), -1 < e && (h = l.splice(e, 1)[0].Eb, l.length || (b.aa = void 0)));
				(this instanceof Window ? sc : tc).call(this, a, h || b, c);
				h && Ya[a] && this.B && this.B[a] && (a = this.B[a][d ? "capture" : "bubble"], h = a.indexOf(h), -1 < h && a.splice(h, 1))
			}
		}
		
		function xd() {
			for (var a in Ya)window.addEventListener(a, function (a) {
				a.__target ||
				(oc(a), wd(a))
			}, !0)
		}
		
		function oc(a) {
			a.__target = a.target;
			a.Ia = a.relatedTarget;
			if (y.X) {
				var b = uc, c = Object.getPrototypeOf(a);
				if (!c.hasOwnProperty("__patchProto")) {
					var d = Object.create(c);
					d.Gb = c;
					Ja(d, b);
					c.__patchProto = d
				}
				a.__proto__ = c.__patchProto
			} else Ja(a, uc)
		}
		
		function fa(a, b) {return {index: a, Z: [], da: b}}
		
		function yd(a, b, c, d) {
			var e = 0, f = 0, g = 0, h = 0, l = Math.min(b - e, d - f);
			if (0 == e && 0 == f)a:{
				for (g = 0; g < l; g++)if (a[g] !== c[g])break a;
				g = l
			}
			if (b == a.length && d == c.length) {
				for (var h = a.length, k = c.length, A = 0; A < l - g && zd(a[--h], c[--k]);)A++;
				h = A
			}
			e += g;
			f += g;
			b -= h;
			d -= h;
			if (!(b - e || d - f))return [];
			if (e == b) {
				for (b = fa(e, 0); f < d;)b.Z.push(c[f++]);
				return [b]
			}
			if (f == d)return [fa(e, b - e)];
			l = e;
			g = f;
			d = d - g + 1;
			h = b - l + 1;
			b = Array(d);
			for (k = 0; k < d; k++)b[k] = Array(h), b[k][0] = k;
			for (k = 0; k < h; k++)b[0][k] = k;
			for (k = 1; k < d; k++)for (A = 1; A < h; A++)if (a[l + A - 1] === c[g + k - 1]) b[k][A] = b[k - 1][A - 1]; else {
				var G = b[k - 1][A] + 1, m = b[k][A - 1] + 1;
				b[k][A] = G < m ? G : m
			}
			l = b.length - 1;
			g = b[0].length - 1;
			d = b[l][g];
			for (a = []; 0 < l || 0 < g;)l ? g ? (h = b[l - 1][g - 1], k = b[l - 1][g], A = b[l][g - 1], G = k < A ? k < h ? k : h : A < h ? A : h, G == h ? (h == d ? a.push(0) :
				(a.push(1), d = h), l--, g--) : G == k ? (a.push(3), l--, d = k) : (a.push(2), g--, d = A)) : (a.push(3), l--) : (a.push(2), g--);
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
					b || (b = fa(e, 0));
					b.da++;
					e++;
					b.Z.push(c[f]);
					f++;
					break;
				case 2:
					b || (b = fa(e, 0));
					b.da++;
					e++;
					break;
				case 3:
					b || (b = fa(e, 0)), b.Z.push(c[f]), f++
			}
			b && l.push(b);
			return l
		}
		
		function zd(a, b) {return a === b}
		
		function vc(a) {
			gc(a);
			return a.__shady && a.__shady.assignedSlot || null
		}
		
		function J(a, b) {
			for (var c = Object.getOwnPropertyNames(b),
				     d = 0; d < c.length; d++) {
				var e = c[d], f = Object.getOwnPropertyDescriptor(b, e);
				f.value ? a[e] = f.value : Object.defineProperty(a, e, f)
			}
		}
		
		function Ad() {
			var a = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;
			J(window.Node.prototype, Bd);
			J(window.Window.prototype, Cd);
			J(window.Text.prototype, Dd);
			J(window.DocumentFragment.prototype, Za);
			J(window.Element.prototype, wc);
			J(window.Document.prototype, xc);
			window.HTMLSlotElement && J(window.HTMLSlotElement.prototype, yc);
			J(a.prototype, Ed);
			y.X && (S(window.Node.prototype),
				S(window.Text.prototype), S(window.DocumentFragment.prototype), S(window.Element.prototype), S(a.prototype), S(window.Document.prototype), window.HTMLSlotElement && S(window.HTMLSlotElement.prototype))
		}
		
		function zc(a) {
			var b = Fd.has(a);
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
		
		function $a(a, b) {
			for (; b && b !== a && !b.nextSibling;)b = b.parentNode;
			return b && b !== a ? b.nextSibling : null
		}
		
		function Q(a, b, c) {
			c = c ? c : new Set;
			for (var d = a; d;) {
				if (d.nodeType === Node.ELEMENT_NODE) {
					var e = d;
					b(e);
					var f = e.localName;
					if ("link" === f && "import" === e.getAttribute("rel")) {
						d = e.import;
						if (d instanceof Node && !c.has(d))for (c.add(d), d = d.firstChild; d; d = d.nextSibling)Q(d, b, c);
						d = $a(a, e);
						continue
					} else if ("template" === f) {
						d = $a(a, e);
						continue
					}
					if (e = e.__CE_shadowRoot)for (e = e.firstChild; e; e = e.nextSibling)Q(e,
						b, c)
				}
				d = d.firstChild ? d.firstChild : $a(a, d)
			}
		}
		
		function v(a, b, c) {a[b] = c}
		
		function ab(a) {
			a = a.replace(N.rb, "").replace(N.port, "");
			var b = Ac, c = a, d = new za;
			d.start = 0;
			d.end = c.length;
			for (var e = d, f = 0, g = c.length; f < g; f++)if ("{" === c[f]) {
				e.rules || (e.rules = []);
				var h = e, l = h.rules[h.rules.length - 1] || null, e = new za;
				e.start = f + 1;
				e.parent = h;
				e.previous = l;
				h.rules.push(e)
			} else"}" === c[f] && (e.end = f + 1, e = e.parent || d);
			return b(d, a)
		}
		
		function Ac(a, b) {
			var c = b.substring(a.start, a.end - 1);
			a.parsedCssText = a.cssText = c.trim();
			a.parent && ((c =
				b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = Gd(c), c = c.replace(N.Ra, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = !c.indexOf("@"), a.atRule) ? c.indexOf("@media") ? c.match(N.xb) && (a.type = I.na, a.keyframesName = a.selector.split(N.Ra).pop()) : a.type = I.MEDIA_RULE : a.type = c.indexOf("--") ? I.STYLE_RULE : I.Ea);
			if (c = a.rules)for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++)Ac(f, b);
			return a
		}
		
		function Gd(a) {
			return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
				a =
					c;
				for (c = 6 - a.length; c--;)a = "0" + a;
				return "\\" + a
			})
		}
		
		function Bc(a, b, c) {
			c = void 0 === c ? "" : c;
			var d = "";
			if (a.cssText || a.rules) {
				var e = a.rules, f;
				if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));
				if (f) {
					f = 0;
					for (var g = e.length, h; f < g && (h = e[f]); f++)d = Bc(h, b, d)
				} else b ? b = a.cssText : (b = a.cssText, b = b.replace(N.Ma, "").replace(N.Qa, ""), b = b.replace(N.yb, "").replace(N.Db, "")), (d = b.trim()) && (d = "  " + d + "\n")
			}
			d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));
			return c
		}
		
		function Cc(a) {
			w = a && a.shimcssproperties ?
				!1 : t || !(navigator.userAgent.match("AppleWebKit/601") || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"))
		}
		
		function Y(a, b) {
			if (!a)return "";
			"string" === typeof a && (a = ab(a));
			b && Z(a, b);
			return Bc(a, w)
		}
		
		function pa(a) {
			!a.__cssRules && a.textContent && (a.__cssRules = ab(a.textContent));
			return a.__cssRules || null
		}
		
		function Dc(a) {return !!a.parent && a.parent.type === I.na}
		
		function Z(a, b, c, d) {
			if (a) {
				var e = !1, f = a.type;
				if (d && f === I.MEDIA_RULE) {
					var g = a.selector.match(Hd);
					g && (window.matchMedia(g[1]).matches ||
					(e = !0))
				}
				f === I.STYLE_RULE ? b(a) : c && f === I.na ? c(a) : f === I.Ea && (e = !0);
				if ((a = a.rules) && !e)for (var e = 0, f = a.length, h; e < f && (h = a[e]); e++)Z(h, b, c, d)
			}
		}
		
		function bb(a, b, c, d) {
			var e = document.createElement("style");
			b && e.setAttribute("scope", b);
			e.textContent = a;
			Ec(e, c, d);
			return e
		}
		
		function Ec(a, b, c) {
			b = b || document.head;
			b.insertBefore(a, c && c.nextSibling || b.firstChild);
			T ? a.compareDocumentPosition(T) === Node.DOCUMENT_POSITION_PRECEDING && (T = a) : T = a
		}
		
		function Fc(a, b) {
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
			a = Fc(a.substring(d + 1), b);
			d = e.indexOf(",");
			return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a)
		}
		
		function qa(a, b) {t ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b)}
		
		function U(a) {
			var b = a.localName, c = "";
			b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);
			return {is: b, $: c}
		}
		
		function Gc(a) {
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
						h = g.indexOf(x.c);
						(g = -1 < h ? g[h + 1] : "") && f === e.ownerDocument ? x.a(e, g, !0) : f.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
							(f = f.host) && (f = U(f).is, g !== f && (g && x.a(e, g, !0), x.a(e, f)))
					}
				}
			}
		}
		
		function Id(a) {if (a = ra[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1}
		
		function Hc(a) {return a._applyShimCurrentVersion === a._applyShimNextVersion}
		
		function Jd(a) {
			a._applyShimValidatingVersion = a._applyShimNextVersion;
			a.b || (a.b = !0, Kd.then(function () {
				a._applyShimCurrentVersion = a._applyShimNextVersion;
				a.b = !1
			}))
		}
		
		function rb(a) {
			requestAnimationFrame(function () {
				Ic ?
					Ic(a) : (cb || (cb = new Promise(function (a) {db = a}), "complete" === document.readyState ? db() : document.addEventListener("readystatechange", function () {"complete" === document.readyState && db()})), cb.then(function () {a && a()}))
			})
		}
		
		(function () {
			if (!function () {
					var a = document.createEvent("Event");
					a.initEvent("foo", !0, !0);
					a.preventDefault();
					return a.defaultPrevented
				}()) {
				var a = Event.prototype.preventDefault;
				Event.prototype.preventDefault = function () {
					this.cancelable && (a.call(this), Object.defineProperty(this, "defaultPrevented",
						{get: function () {return !0}, configurable: !0}))
				}
			}
			var b = /Trident/.test(navigator.userAgent);
			if (!window.CustomEvent || b && "function" !== typeof window.CustomEvent) window.CustomEvent = function (a, b) {
				b = b || {};
				var c = document.createEvent("CustomEvent");
				c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
				return c
			}, window.CustomEvent.prototype = window.Event.prototype;
			if (!window.Event || b && "function" !== typeof window.Event) {
				var c = window.Event;
				window.Event = function (a, b) {
					b = b || {};
					var c = document.createEvent("Event");
					c.initEvent(a, !!b.bubbles, !!b.cancelable);
					return c
				};
				if (c)for (var d in c)window.Event[d] = c[d];
				window.Event.prototype = c.prototype
			}
			if (!window.MouseEvent || b && "function" !== typeof window.MouseEvent) {
				b = window.MouseEvent;
				window.MouseEvent = function (a, b) {
					b = b || {};
					var c = document.createEvent("MouseEvent");
					c.initMouseEvent(a, !!b.bubbles, !!b.cancelable, b.view || window, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget);
					return c
				};
				if (b)for (d in b)window.MouseEvent[d] =
					b[d];
				window.MouseEvent.prototype = b.prototype
			}
			Array.from || (Array.from = function (a) {return [].slice.call(a)});
			Object.assign || (Object.assign = function (a, b) {
				for (var c = [].slice.call(arguments, 1), d = 0, e; d < c.length; d++)if (e = c[d])for (var f = a, k = e, m = Object.getOwnPropertyNames(k), n = 0; n < m.length; n++)e = m[n], f[e] = k[e];
				return a
			})
		})(window.WebComponents);
		(function () {
			function a() {}
			
			var b = "undefined" === typeof HTMLTemplateElement;
			/Trident/.test(navigator.userAgent) && function () {
				var a = Document.prototype.importNode;
				Document.prototype.importNode =
					function () {
						var b = a.apply(this, arguments);
						if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
							var c = this.createDocumentFragment();
							c.appendChild(b);
							return c
						}
						return b
					}
			}();
			var c = Node.prototype.cloneNode, d = Document.prototype.createElement, e = Document.prototype.importNode,
				f = function () {
					if (!b) {
						var a = document.createElement("template"), c = document.createElement("template");
						c.content.appendChild(document.createElement("div"));
						a.content.appendChild(c);
						a = a.cloneNode(!0);
						return 0 === a.content.childNodes.length || 0 === a.content.firstChild.content.childNodes.length ||
							!(document.createDocumentFragment().cloneNode() instanceof DocumentFragment)
					}
				}();
			if (b) {
				var g = function (a) {
						switch (a) {
							case "&":
								return "&amp;";
							case "<":
								return "&lt;";
							case ">":
								return "&gt;";
							case "\u00a0":
								return "&nbsp;"
						}
					}, h = function (b) {
						Object.defineProperty(b, "innerHTML", {
							get: function () {
								for (var a = "", b = this.content.firstChild; b; b = b.nextSibling)a += b.outerHTML || b.data.replace(q, g);
								return a
							}, set: function (b) {
								l.body.innerHTML = b;
								for (a.b(l); this.content.firstChild;)this.content.removeChild(this.content.firstChild);
								for (; l.body.firstChild;)this.content.appendChild(l.body.firstChild)
							}, configurable: !0
						})
					}, l = document.implementation.createHTMLDocument("template"), k = !0,
					A = document.createElement("style");
				A.textContent = "template{display:none;}";
				var m = document.head;
				m.insertBefore(A, m.firstElementChild);
				a.prototype = Object.create(HTMLElement.prototype);
				var n = !document.createElement("div").hasOwnProperty("innerHTML");
				a.O = function (b) {
					if (!b.content) {
						b.content = l.createDocumentFragment();
						for (var c; c = b.firstChild;)b.content.appendChild(c);
						if (n) b.__proto__ = a.prototype; else if (b.cloneNode = function (b) {return a.a(this, b)}, k)try {h(b)} catch (me) {k = !1}
						a.b(b.content)
					}
				};
				h(a.prototype);
				a.b = function (b) {
					b = b.querySelectorAll("template");
					for (var c = 0, d = b.length, e; c < d && (e = b[c]); c++)a.O(e)
				};
				document.addEventListener("DOMContentLoaded", function () {a.b(document)});
				Document.prototype.createElement = function () {
					var b = d.apply(this, arguments);
					"template" === b.localName && a.O(b);
					return b
				};
				var q = /[&\u00A0<>]/g
			}
			if (b || f) a.a = function (a, b) {
				var d = c.call(a, !1);
				this.O &&
				this.O(d);
				b && (d.content.appendChild(c.call(a.content, !0)), this.ya(d.content, a.content));
				return d
			}, a.prototype.cloneNode = function (b) {return a.a(this, b)}, a.ya = function (a, b) {
				if (b.querySelectorAll) {
					b = b.querySelectorAll("template");
					a = a.querySelectorAll("template");
					for (var c = 0, d = a.length, e, f; c < d; c++)f = b[c], e = a[c], this.O && this.O(f), e.parentNode.replaceChild(f.cloneNode(!0), e)
				}
			}, Node.prototype.cloneNode = function (b) {
				var d;
				if (this instanceof DocumentFragment)if (b) d = this.ownerDocument.importNode(this, !0); else return this.ownerDocument.createDocumentFragment();
				else d = c.call(this, b);
				b && a.ya(d, this);
				return d
			}, Document.prototype.importNode = function (b, c) {
				if ("template" === b.localName)return a.a(b, c);
				var d = e.call(this, b, c);
				c && a.ya(d, b);
				return d
			}, f && (window.HTMLTemplateElement.prototype.cloneNode = function (b) {return a.a(this, b)});
			b && (window.HTMLTemplateElement = a)
		})();
		!function (a, b) {"object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.Jb ? define(b) : a.ES6Promise = b()}(window, function () {
			function a(a, b) {
				C[aa] = a;
				C[aa +
				1] = b;
				aa += 2;
				2 === aa && (E ? E(g) : N())
			}
			
			function b() {return function () {return process.Mb(g)}}
			
			function c() {return "undefined" != typeof D ? function () {D(g)} : f()}
			
			function d() {
				var a = 0, b = new L(g), c = document.createTextNode("");
				return b.observe(c, {characterData: !0}), function () {c.data = a = ++a % 2}
			}
			
			function e() {
				var a = new MessageChannel;
				return a.port1.onmessage = g, function () {return a.port2.postMessage(0)}
			}
			
			function f() {
				var a = setTimeout;
				return function () {return a(g, 1)}
			}
			
			function g() {
				for (var a = 0; a < aa; a += 2)(0, C[a])(C[a + 1]), C[a] =
					void 0, C[a + 1] = void 0;
				aa = 0
			}
			
			function h() {
				try {
					var a = require("vertx");
					return D = a.Ob || a.Nb, c()
				} catch (Jc) {return f()}
			}
			
			function l(b, c) {
				var d = arguments, e = this, f = new this.constructor(m);
				void 0 === f[K] && Kc(f);
				var g = e.m;
				return g ? !function () {
					var b = d[g - 1];
					a(function () {return ga(g, f, b, e.l)})
				}() : v(e, f, b, c), f
			}
			
			function k(a) {
				if (a && "object" == typeof a && a.constructor === this)return a;
				var b = new this(m);
				return t(b, a), b
			}
			
			function m() {}
			
			function n(a) {try {return a.then} catch (Jc) {return P.error = Jc, P}}
			
			function q(a, b, c, d) {
				try {
					a.call(b,
						c, d)
				} catch (Nd) {return Nd}
			}
			
			function p(b, c, d) {
				a(function (a) {
					var b = !1,
						e = q(d, c, function (d) {b || (b = !0, c !== d ? t(a, d) : r(a, d))}, function (c) {b || (b = !0, O(a, c))});
					!b && e && (b = !0, O(a, e))
				}, b)
			}
			
			function u(a, b) {b.m === M ? r(a, b.l) : b.m === J ? O(a, b.l) : v(b, void 0, function (b) {return t(a, b)}, function (b) {return O(a, b)})}
			
			function x(a, b, c) {b.constructor === a.constructor && c === l && b.constructor.resolve === k ? u(a, b) : c === P ? (O(a, P.error), P.error = null) : void 0 === c ? r(a, b) : "function" == typeof c ? p(a, b, c) : r(a, b)}
			
			function t(a, b) {
				a === b ? O(a, new TypeError("You cannot resolve a promise with itself")) :
					"function" == typeof b || "object" == typeof b && null !== b ? x(a, b, n(b)) : r(a, b)
			}
			
			function w(a) {
				a.Ka && a.Ka(a.l);
				z(a)
			}
			
			function r(b, c) {b.m === I && (b.l = c, b.m = M, 0 !== b.W.length && a(z, b))}
			
			function O(b, c) {b.m === I && (b.m = J, b.l = c, a(w, b))}
			
			function v(b, c, d, e) {
				var f = b.W, g = f.length;
				b.Ka = null;
				f[g] = c;
				f[g + M] = d;
				f[g + J] = e;
				0 === g && b.m && a(z, b)
			}
			
			function z(a) {
				var b = a.W, c = a.m;
				if (0 !== b.length) {
					for (var d, e, f = a.l, g = 0; g < b.length; g += 3)d = b[g], e = b[g + c], d ? ga(c, d, e, f) : e(f);
					a.W.length = 0
				}
			}
			
			function H() {this.error = null}
			
			function ga(a, b, c, d) {
				var e = "function" ==
					typeof c, f = void 0, g = void 0, h = void 0, ga = void 0;
				if (e) {
					var l;
					try {l = c(d)} catch (Od) {l = (Q.error = Od, Q)}
					if (f = l, f === Q ? (ga = !0, g = f.error, f.error = null) : h = !0, b === f)return void O(b, new TypeError("A promises callback cannot return that same promise."))
				} else f = d, h = !0;
				b.m !== I || (e && h ? t(b, f) : ga ? O(b, g) : a === M ? r(b, f) : a === J && O(b, f))
			}
			
			function Pd(a, b) {try {b(function (b) {t(a, b)}, function (b) {O(a, b)})} catch (Ld) {O(a, Ld)}}
			
			function Kc(a) {
				a[K] = R++;
				a.m = void 0;
				a.l = void 0;
				a.W = []
			}
			
			function ba(a, b) {
				this.lb = a;
				this.I = new a(m);
				this.I[K] ||
				Kc(this.I);
				Lc(b) ? (this.kb = b, this.length = b.length, this.ba = b.length, this.l = Array(this.length), 0 === this.length ? r(this.I, this.l) : (this.length = this.length || 0, this.jb(), 0 === this.ba && r(this.I, this.l))) : O(this.I, Error("Array Methods must be provided an Array"))
			}
			
			function F(a) {
				this[K] = R++;
				this.l = this.m = void 0;
				this.W = [];
				if (m !== a) {
					if ("function" != typeof a)throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
					if (this instanceof F) Pd(this, a); else throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
				}
			}
			
			var eb = void 0,
				Lc = eb = Array.isArray ? Array.isArray : function (a) {return "[object Array]" === Object.prototype.toString.call(a)},
				aa = 0, D = void 0, E = void 0, y = (eb = "undefined" != typeof window ? window : void 0) || {},
				L = y.MutationObserver || y.WebKitMutationObserver,
				y = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
				C = Array(1E3), N = void 0,
				N = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? b() : L ? d() : y ? e() : eb ||
				"function" != typeof require ? f() : h(), K = Math.random().toString(36).substring(16), I = void 0,
				M = 1, J = 2, P = new H, Q = new H, R = 0;
			return ba.prototype.jb = function () {for (var a = this.length, b = this.kb, c = 0; this.m === I && c < a; c++)this.ib(b[c], c)}, ba.prototype.ib = function (a, b) {
				var c = this.lb, d = c.resolve;
				d === k ? (d = n(a), d === l && a.m !== I ? this.va(a.m, b, a.l) : "function" != typeof d ? (this.ba--, this.l[b] = a) : c === F ? (c = new c(m), x(c, a, d), this.wa(c, b)) : this.wa(new c(function (b) {return b(a)}), b)) : this.wa(d(a), b)
			}, ba.prototype.va = function (a, b,
			                               c) {
				var d = this.I;
				d.m === I && (this.ba--, a === J ? O(d, c) : this.l[b] = c);
				0 === this.ba && r(d, this.l)
			}, ba.prototype.wa = function (a, b) {
				var c = this;
				v(a, void 0, function (a) {return c.va(M, b, a)}, function (a) {return c.va(J, b, a)})
			}, F.g = function (a) {return (new ba(this, a)).I}, F.h = function (a) {
				var b = this;
				return new b(Lc(a) ? function (c, d) {for (var e = a.length, f = 0; f < e; f++)b.resolve(a[f]).then(c, d)} : function (a, b) {return b(new TypeError("You must pass an array to race."))})
			}, F.resolve = k, F.i = function (a) {
				var b = new this(m);
				return O(b, a),
					b
			}, F.f = function (a) {E = a}, F.c = function (b) {a = b}, F.b = a, F.prototype = {
				constructor: F,
				then: l,
				"catch": function (a) {return this.then(null, a)}
			}, F.a = function () {
				var a = void 0;
				if ("undefined" != typeof global) a = global; else if ("undefined" != typeof self) a = self; else try {a = Function("return this")()} catch (Md) {throw Error("polyfill failed because global object is unavailable in this environment");}
				var b = a.Promise;
				if (b) {
					var c = null;
					try {c = Object.prototype.toString.call(b.resolve())} catch (Md) {}
					if ("[object Promise]" === c && !b.Kb)return
				}
				a.Promise =
					F
			}, F.Promise = F, F.a(), F
		});
		(function (a) {
			function b(a, b) {
				if ("function" === typeof window.CustomEvent)return new CustomEvent(a, b);
				var c = document.createEvent("CustomEvent");
				c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
				return c
			}
			
			function c(a) {
				if (k)return a.ownerDocument !== document ? a.ownerDocument : null;
				var b = a.__importDoc;
				if (!b && a.parentNode) {
					b = a.parentNode;
					if ("function" === typeof b.closest) b = b.closest("link[rel=import]"); else for (; !h(b) && (b = b.parentNode););
					a.__importDoc = b
				}
				return b
			}
			
			function d(a) {
				var b =
					document.querySelectorAll("link[rel=import]:not(import-dependency)"), c = b.length;
				if (c)for (var d = 0, e = b.length, f; d < e && (f = b[d]); d++)g(f, function () {--c || a()}); else a()
			}
			
			function e(a) {
				function b() {"loading" !== document.readyState && document.body && (document.removeEventListener("readystatechange", b), a())}
				
				document.addEventListener("readystatechange", b);
				b()
			}
			
			function f(a) {e(function () {return d(function () {return a && a()})})}
			
			function g(a, b) {
				if (a.__loaded) b && b(); else if ("script" !== a.localName || a.src) {
					var c = function (d) {
						a.removeEventListener(d.type,
							c);
						a.__loaded = !0;
						b && b()
					};
					a.addEventListener("load", c);
					u && "style" === a.localName || a.addEventListener("error", c)
				} else a.__loaded = !0, b && b()
			}
			
			function h(a) {return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel}
			
			function l() {
				var a = this;
				this.a = {};
				this.b = 0;
				this.f = new MutationObserver(function (b) {return a.o(b)});
				this.f.observe(document.head, {childList: !0, subtree: !0});
				this.c(document)
			}
			
			var k = "import" in document.createElement("link"), m = null;
			!1 === "currentScript" in document && Object.defineProperty(document,
				"currentScript", {
					get: function () {return m || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null)},
					configurable: !0
				});
			var n = /(^\/)|(^#)|(^[\w-\d]*:)/, q = /(url\()([^)]*)(\))/g, r = /(@import[\s]+(?!url\())([^;]*)(;)/g,
				t = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g, p = {
					sb: function (a, b) {
						a.href && a.setAttribute("href", p.Da(a.getAttribute("href"), b));
						a.src && a.setAttribute("src", p.Da(a.getAttribute("src"), b));
						if ("style" === a.localName) {
							var c = p.Ua(a.textContent, b, q);
							a.textContent =
								p.Ua(c, b, r)
						}
					}, Ua: function (a, b, c) {
						return a.replace(c, function (a, c, d, e) {
							a = d.replace(/["']/g, "");
							b && (a = p.Va(a, b));
							return c + "'" + a + "'" + e
						})
					}, Da: function (a, b) {return a && n.test(a) ? a : p.Va(a, b)}, Va: function (a, b) {
						if (void 0 === p.ra) {
							p.ra = !1;
							try {
								var c = new URL("b", "http://a");
								c.pathname = "c%20d";
								p.ra = "http://a/c%20d" === c.href
							} catch (ba) {}
						}
						if (p.ra)return (new URL(a, b)).href;
						c = p.gb;
						c || (c = document.implementation.createHTMLDocument("temp"), p.gb = c, c.Ga = c.createElement("base"), c.head.appendChild(c.Ga), c.Fa = c.createElement("a"));
						c.Ga.href = b;
						c.Fa.href = a;
						return c.Fa.href || a
					}
				}, x = {
					async: !0, load: function (a, b, c) {
						if (a)if (a.match(/^data:/)) {
							a = a.split(",");
							var d = a[1], d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d);
							b(d)
						} else {
							var e = new XMLHttpRequest;
							e.open("GET", a, x.async);
							e.onload = function () {
								var a = e.getResponseHeader("Location");
								a && !a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a);
								var d = e.response || e.responseText;
								304 === e.status || !e.status || 200 <= e.status && 300 > e.status ? b(d, a) : c(d)
							};
							e.send()
						} else c("error: href must be specified")
					}
				},
				u = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);
			l.prototype.c = function (a) {
				a = a.querySelectorAll("link[rel=import]");
				for (var b = 0, c = a.length; b < c; b++)this.h(a[b])
			};
			l.prototype.h = function (a) {
				var b = this, c = a.href;
				if (void 0 !== this.a[c]) {
					var d = this.a[c];
					d && d.__loaded && (a.import = d, this.g(a))
				} else this.b++, this.a[c] = "pending", x.load(c, function (a, d) {
					a = b.s(a, d || c);
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
			l.prototype.s = function (a, b) {
				if (!a)return document.createDocumentFragment();
				u && (a = a.replace(t, function (a, b, c) {return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a}));
				var c = document.createElement("template");
				c.innerHTML = a;
				if (c.content) a = c.content; else for (a = document.createDocumentFragment(); c.firstChild;)a.appendChild(c.firstChild);
				
				if(c.content) stamp_custom_element(c)
				
				if (c = a.querySelector("base")) b = p.Da(c.getAttribute("href"), b), c.removeAttribute("href");
				for (var c = a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]'),
					     d = 0, e = 0, f = c.length, h; e < f && (h = c[e]); e++)g(h), p.sb(h, b), h.setAttribute("import-dependency", ""), "script" === h.localName && !h.src && h.textContent && (h.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(h.textContent + ("\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n"))), h.textContent = "", d++);
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
			
			l.prototype.i = function () {
				var a = this;
				if (!this.b) {
					this.f.disconnect();
					this.flatten(document);
					var b = !1, c = !1, d = function () {
						c && b && (a.c(document), a.b || (a.f.observe(document.head, {childList: !0, subtree: !0}),
							a.j()))
					};
					this.A(function () {
						c = !0;
						d()
					});
					this.u(function () {
						b = !0;
						d()
					})
				}
			};
			l.prototype.flatten = function (a) {
				a = a.querySelectorAll("link[rel=import]");
				for (var b = 0, c = a.length, d; b < c && (d = a[b]); b++) {
					var e = this.a[d.href];
					(d.import = e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (this.a[d.href] = d, d.readyState = "loading", d.import = d, this.flatten(e), d.appendChild(e))
				}
			};
			l.prototype.u = function (a) {
				function b(e) {
					if (e < d) {
						var f = c[e], h = document.createElement("script");
						f.removeAttribute("import-dependency");
						for (var l = 0, k = f.attributes.length; l <
						k; l++)h.setAttribute(f.attributes[l].name, f.attributes[l].value);
						m = h;
						let id = f.hasAttribute('id') ? f.getAttribute('id'):f.getAttribute('src')
						if(id === null || !loads.has(id)){
							loads.add(id);
							f.parentNode.replaceChild(h, f);
							g(h, function () {
								m = null;
								b(e + 1)
							})
						}else{
							m = null;
							b(e + 1)
						}
						
					} else a()
				}
				
				var c = document.querySelectorAll("script[import-dependency]"), d = c.length;
				b(0)
			};
			l.prototype.A = function (a) {
				var b = document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),
					d = b.length;
				if (d)for (var e = u && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]"), f = {}, h = 0, l = b.length; h < l && (f.w = b[h]); f = {w: f.w},
					h++) {
					if (g(f.w, function (b) {
							return function () {
								b.w.removeAttribute("import-dependency");
								--d || a()
							}
						}(f)), e && f.w.parentNode !== document.head) {
						var k = document.createElement(f.w.localName);
						k.__appliedElement = f.w;
						k.setAttribute("type", "import-placeholder");
						f.w.parentNode.insertBefore(k, f.w.nextSibling);
						for (k = c(f.w); k && c(k);)k = c(k);
						k.parentNode !== document.head && (k = null);
						document.head.insertBefore(f.w, k);
						f.w.removeAttribute("type")
					}
				} else a()
			};
			l.prototype.j = function () {
				for (var a = document.querySelectorAll("link[rel=import]"),
					     b = a.length - 1, c; 0 <= b && (c = a[b]); b--)this.g(c)
			};
			l.prototype.g = function (a) {
				a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState = "complete"), a.dispatchEvent(b(a.import ? "load" : "error", {
					bubbles: !1,
					cancelable: !1,
					detail: void 0
				})))
			};
			l.prototype.o = function (a) {
				for (var b = 0; b < a.length; b++) {
					var c = a[b];
					if (c.addedNodes)for (var d = 0; d < c.addedNodes.length; d++) {
						var e = c.addedNodes[d];
						e && e.nodeType === Node.ELEMENT_NODE && (h(e) ? this.h(e) : this.c(e))
					}
				}
			};
			if (k) {
				for (var v = document.querySelectorAll("link[rel=import]"), z = 0,
					     C = v.length, y; z < C && (y = v[z]); z++)y.import && "loading" === y.import.readyState || (y.__loaded = !0);
				v = function (a) {
					a = a.target;
					h(a) && (a.__loaded = !0)
				};
				document.addEventListener("load", v, !0);
				document.addEventListener("error", v, !0)
			} else {
				var w = Object.getOwnPropertyDescriptor(Node.prototype, "baseURI");
				Object.defineProperty((!w || w.configurable ? Node : Element).prototype, "baseURI", {
					get: function () {
						var a = h(this) ? this : c(this);
						return a ? a.href : w && w.get ? w.get.call(this) : (document.querySelector("base") || window.location).href
					},
					configurable: !0, enumerable: !0
				});
				e(function () {return new l})
			}
			f(function () {
				return document.dispatchEvent(b("HTMLImportsLoaded", {
					cancelable: !0,
					bubbles: !0,
					detail: void 0
				}))
			});
			a.useNative = k;
			a.whenReady = f;
			a.importForElement = c
		})(window.HTMLImports = window.HTMLImports || {});
		(function () {
			window.WebComponents = window.WebComponents || {flags: {}};
			var a = document.querySelector('script[src*="webcomponents-lite.js"]'), b = /wc-(.+)/, c = {};
			if (!c.noOpts) {
				location.search.slice(1).split("&").forEach(function (a) {
					a = a.split("=");
					var d;
					a[0] && (d = a[0].match(b)) && (c[d[1]] = a[1] || !0)
				});
				if (a)for (var d = 0, e; e = a.attributes[d]; d++)"src" !== e.name && (c[e.name] = e.value || !0);
				c.log && c.log.split ? (a = c.log.split(","), c.log = {}, a.forEach(function (a) {c.log[a] = !0})) : c.log = {}
			}
			window.WebComponents.flags = c;
			if (a = c.shadydom) window.ShadyDOM = window.ShadyDOM || {}, window.ShadyDOM.force = a;
			(a = c.register || c.ce) && window.customElements && (window.customElements.forcePolyfill = a)
		})();
		var y = window.ShadyDOM || {};
		y.ub = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
		var fb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
		y.X = !!(fb && fb.configurable && fb.get);
		y.Pa = y.force || !y.ub;
		var ca = Element.prototype,
			Mc = ca.matches || ca.matchesSelector || ca.mozMatchesSelector || ca.msMatchesSelector || ca.oMatchesSelector || ca.webkitMatchesSelector,
			Ma = document.createTextNode(""), Kb = 0, La = [];
		(new MutationObserver(function () {for (; La.length;)try {La.shift()()} catch (a) {throw Ma.textContent = Kb++, a;}})).observe(Ma, {characterData: !0});
		var ea = [], Na;
		na.list = ea;
		ma.prototype.Bb = function () {
			var a =
				this;
			this.a || (this.a = !0, Jb(function () {a.b()}))
		};
		ma.prototype.b = function () {
			if (this.a) {
				this.a = !1;
				var a = this.takeRecords();
				a.length && this.ea.forEach(function (b) {b(a)})
			}
		};
		ma.prototype.takeRecords = function () {
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
		var ic = Element.prototype.appendChild, Ua = Element.prototype.insertBefore, X = Element.prototype.removeChild,
			Nc = Element.prototype.setAttribute,
			Oc = Element.prototype.removeAttribute, gb = Element.prototype.cloneNode,
			Va = Document.prototype.importNode, qc = Element.prototype.addEventListener,
			tc = Element.prototype.removeEventListener, pc = Window.prototype.addEventListener,
			sc = Window.prototype.removeEventListener, hb = Element.prototype.dispatchEvent, Qd = Object.freeze({
				appendChild: ic,
				insertBefore: Ua,
				removeChild: X,
				setAttribute: Nc,
				removeAttribute: Oc,
				cloneNode: gb,
				importNode: Va,
				addEventListener: qc,
				removeEventListener: tc,
				Pb: pc,
				Qb: sc,
				dispatchEvent: hb
			}), sd = /[&\u00A0"]/g,
			vd = /[&\u00A0<>]/g,
			td = Nb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
			ud = Nb("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
			D = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
			E = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1), Rd = Object.freeze({
				parentNode: R,
				firstChild: Ha,
				lastChild: Ia,
				previousSibling: Ob,
				nextSibling: Pb,
				childNodes: da,
				parentElement: Qb,
				firstElementChild: Rb,
				lastElementChild: Sb,
				previousElementSibling: Tb,
				nextElementSibling: Ub,
				children: Vb,
				innerHTML: Wb,
				textContent: Xb
			}),
			ib = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"),
			sa = document.implementation.createHTMLDocument("inert").createElement("div"),
			jb = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"), Yb = {
				parentElement: {
					get: function () {
						var a = this.__shady && this.__shady.parentNode;
						a && a.nodeType !== Node.ELEMENT_NODE && (a = null);
						return void 0 !==
						a ? a : Qb(this)
					}, configurable: !0
				},
				parentNode: {
					get: function () {
						var a = this.__shady && this.__shady.parentNode;
						return void 0 !== a ? a : R(this)
					}, configurable: !0
				},
				nextSibling: {
					get: function () {
						var a = this.__shady && this.__shady.nextSibling;
						return void 0 !== a ? a : Pb(this)
					}, configurable: !0
				},
				previousSibling: {
					get: function () {
						var a = this.__shady && this.__shady.previousSibling;
						return void 0 !== a ? a : Ob(this)
					}, configurable: !0
				},
				className: {
					get: function () {return this.getAttribute("class") || ""}, set: function (a) {
						this.setAttribute("class",
							a)
					}, configurable: !0
				},
				nextElementSibling: {
					get: function () {
						if (this.__shady && void 0 !== this.__shady.nextSibling) {
							for (var a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;)a = a.nextSibling;
							return a
						}
						return Ub(this)
					}, configurable: !0
				},
				previousElementSibling: {
					get: function () {
						if (this.__shady && void 0 !== this.__shady.previousSibling) {
							for (var a = this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;)a = a.previousSibling;
							return a
						}
						return Tb(this)
					}, configurable: !0
				}
			}, Pa = {
				childNodes: {
					get: function () {
						var a;
						if (this.__shady &&
							void 0 !== this.__shady.firstChild) {
							if (!this.__shady.childNodes) {
								this.__shady.childNodes = [];
								for (var b = this.firstChild; b; b = b.nextSibling)this.__shady.childNodes.push(b)
							}
							a = this.__shady.childNodes
						} else a = da(this);
						a.item = function (b) {return a[b]};
						return a
					}, configurable: !0
				},
				childElementCount: {get: function () {return this.children.length}, configurable: !0},
				firstChild: {
					get: function () {
						var a = this.__shady && this.__shady.firstChild;
						return void 0 !== a ? a : Ha(this)
					}, configurable: !0
				},
				lastChild: {
					get: function () {
						var a = this.__shady &&
							this.__shady.lastChild;
						return void 0 !== a ? a : Ia(this)
					}, configurable: !0
				},
				textContent: {
					get: function () {
						if (this.__shady && void 0 !== this.__shady.firstChild) {
							for (var a = [], b = 0, c = this.childNodes, d; d = c[b]; b++)d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);
							return a.join("")
						}
						return Xb(this)
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
						if (this.__shady &&
							void 0 !== this.__shady.firstChild) {
							for (var a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;)a = a.nextSibling;
							return a
						}
						return Rb(this)
					}, configurable: !0
				},
				lastElementChild: {
					get: function () {
						if (this.__shady && void 0 !== this.__shady.lastChild) {
							for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;)a = a.previousSibling;
							return a
						}
						return Sb(this)
					}, configurable: !0
				},
				children: {
					get: function () {
						var a;
						this.__shady && void 0 !== this.__shady.firstChild ? a = Array.prototype.filter.call(this.childNodes, function (a) {
							return a.nodeType ===
								Node.ELEMENT_NODE
						}) : a = Vb(this);
						a.item = function (b) {return a[b]};
						return a
					}, configurable: !0
				},
				innerHTML: {
					get: function () {
						var a = "template" === this.localName ? this.content : this;
						return this.__shady && void 0 !== this.__shady.firstChild ? Oa(a) : Wb(a)
					},
					set: function (a) {
						for (var b = "template" === this.localName ? this.content : this; b.firstChild;)b.removeChild(b.firstChild);
						for (ib && ib.set ? ib.set.call(sa, a) : sa.innerHTML = a; sa.firstChild;)b.appendChild(sa.firstChild)
					},
					configurable: !0
				}
			}, Pc = {
				shadowRoot: {
					get: function () {
						return this.__shady &&
							this.__shady.root || null
					}, set: function (a) {
						this.__shady = this.__shady || {};
						this.__shady.root = a
					}, configurable: !0
				}
			}, Qa = {
				activeElement: {
					get: function () {
						var a;
						a = jb && jb.get ? jb.get.call(document) : y.X ? void 0 : document.activeElement;
						if (a && a.nodeType) {
							var b = !!C(this);
							if (this === document || b && this.host !== a && this.host.contains(a)) {
								for (b = W(a); b && b !== this;)a = b.host, b = W(a);
								a = this === document ? b ? null : a : b === this ? a : null
							} else a = null
						} else a = null;
						return a
					}, set: function () {}, configurable: !0
				}
			}, Ib = y.X ? function () {} : function (a) {
				a.__shady &&
				a.__shady.fb || (a.__shady = a.__shady || {}, a.__shady.fb = !0, M(a, Yb, !0))
			},
			Hb = y.X ? function () {} : function (a) {a.__shady && a.__shady.cb || (a.__shady = a.__shady || {}, a.__shady.cb = !0, M(a, Pa, !0), M(a, Pc, !0))},
			ta = null, Sd = {
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
			}, uc = {
				get composed() {
					!1 !== this.isTrusted && void 0 === this.oa && (this.oa = Sd[this.type]);
					return this.oa || !1
				},
				composedPath: function () {
					this.Ha || (this.Ha = Wa(this.__target, this.composed));
					return this.Ha
				},
				get target() {return kc(this.currentTarget, this.composedPath())},
				get relatedTarget() {
					if (!this.Ia)return null;
					this.Ja || (this.Ja = Wa(this.Ia, !0));
					return kc(this.currentTarget, this.Ja)
				},
				stopPropagation: function () {
					Event.prototype.stopPropagation.call(this);
					this.pa = !0
				},
				stopImmediatePropagation: function () {
					Event.prototype.stopImmediatePropagation.call(this);
					this.pa = this.bb = !0
				}
			}, Ya = {focus: !0, blur: !0}, Td = Xa(window.Event), Ud = Xa(window.CustomEvent), Vd = Xa(window.MouseEvent),
			Wd = "function" === typeof Event ? Event : function (a,
			                                                     b) {
				b = b || {};
				var c = document.createEvent("Event");
				c.initEvent(a, !!b.bubbles, !!b.cancelable);
				return c
			};
		H.prototype.tb = function () {return this.root.querySelectorAll("slot")};
		H.prototype.Aa = function (a) {return a.localName && "slot" == a.localName};
		H.prototype.xa = function () {return this.root.za() ? this.g(this.c()) : []};
		H.prototype.c = function () {
			for (var a = [], b = 0, c = this.root.host.firstChild; c; c = c.nextSibling)a[b++] = c;
			return a
		};
		H.prototype.g = function (a) {
			for (var b = [], c = this.root.ta(), d = 0, e = c.length, f; d < e && (f = c[d]); d++) {
				this.f(f,
					a);
				var g = f.parentNode;
				(g = g && g.__shady && g.__shady.root) && g.za() && b.push(g)
			}
			for (c = 0; c < a.length; c++)if (d = a[c]) d.__shady = d.__shady || {}, d.__shady.assignedSlot = void 0, (e = R(d)) && X.call(e, d);
			return b
		};
		H.prototype.f = function (a, b) {
			var c = a.__shady.assignedNodes;
			c && this.La(a, !0);
			a.__shady.assignedNodes = [];
			for (var d = !1, e = !1, f = 0, g = b.length, h; f < g; f++)(h = b[f]) && this.h(h, a) && (h.__shady.ua != a && (d = !0), this.b(h, a), b[f] = void 0, e = !0);
			if (!e)for (b = a.childNodes, e = 0; e < b.length; e++)h = b[e], h.__shady.ua != a && (d = !0), this.b(h, a);
			if (c) {
				for (h = 0; h < c.length; h++)c[h].__shady.ua = null;
				a.__shady.assignedNodes.length < c.length && (d = !0)
			}
			this.i(a);
			d && this.a(a)
		};
		H.prototype.La = function (a, b) {
			var c = a.__shady.assignedNodes;
			if (c)for (var d = 0; d < c.length; d++) {
				var e = c[d];
				b && (e.__shady.ua = e.__shady.assignedSlot);
				e.__shady.assignedSlot === a && (e.__shady.assignedSlot = null)
			}
		};
		H.prototype.h = function (a, b) {
			b = (b = b.getAttribute("name")) ? b.trim() : "";
			a = (a = a.getAttribute && a.getAttribute("slot")) ? a.trim() : "";
			return a == b
		};
		H.prototype.b = function (a, b) {
			b.__shady.assignedNodes.push(a);
			a.__shady.assignedSlot = b
		};
		H.prototype.i = function (a) {
			var b = a.__shady.assignedNodes;
			a.__shady.P = [];
			for (var c = 0, d; c < b.length && (d = b[c]); c++)if (this.Aa(d)) {
				var e = d.__shady.P;
				if (e)for (var f = 0; f < e.length; f++)a.__shady.P.push(e[f])
			} else a.__shady.P.push(b[c])
		};
		H.prototype.a = function (a) {
			hb.call(a, new Wd("slotchange"));
			a.__shady.assignedSlot && this.a(a.__shady.assignedSlot)
		};
		H.prototype.ga = function (a) {return !a.__shady.assignedSlot};
		var Gb = {};
		q.prototype = Object.create(DocumentFragment.prototype);
		q.prototype.i =
			function (a) {
				this.eb = "ShadyRoot";
				V(a);
				V(this);
				a.shadowRoot = this;
				this.host = a;
				this.sa = this.N = !1;
				this.C = new H(this);
				this.update()
			};
		q.prototype.update = function () {
			var a = this;
			this.N || (this.N = !0, Lb(function () {return a.Ta()}))
		};
		q.prototype.h = function () {
			for (var a = this, b = this; b;)b.N && (a = b), b = b.nb();
			return a
		};
		q.prototype.nb = function () {
			var a = this.host.getRootNode();
			if (C(a))for (var b = this.host.childNodes, c = 0, d; c < b.length; c++)if (d = b[c], this.C.Aa(d))return a
		};
		q.prototype.Ta = function () {this.N && this.h()._render()};
		q.prototype._render = function () {
			this.sa = this.N = !1;
			this.ca || this.f();
			this.ca = !1;
			this.xa();
			this.j()
		};
		q.prototype.xa = function () {for (var a = this.C.xa(), b = 0; b < a.length; b++)a[b]._render()};
		q.prototype.f = function () {
			var a = this.a;
			if (a)for (var b = 0, c; b < a.length; b++)c = a[b], c.getRootNode() !== this && this.C.La(c);
			a = this.a = this.C.tb();
			for (b = 0; b < a.length; b++)c = a[b], c.__shady = c.__shady || {}, V(c), V(c.parentNode)
		};
		q.prototype.j = function () {this.g()};
		q.prototype.g = function () {
			this.c(this.host, this.b(this.host));
			for (var a = this.ta(),
				     b = 0, c = a.length, d, e; b < c && (d = a[b]); b++)e = d.parentNode, e !== this.host && e !== this && this.c(e, this.b(e))
		};
		q.prototype.b = function (a) {
			var b = [];
			a = (a.__shady && a.__shady.root || a).childNodes;
			for (var c = 0; c < a.length; c++) {
				var d = a[c];
				if (this.C.Aa(d))for (var e = d.__shady.P || (d.__shady.P = []), f = 0; f < e.length; f++) {
					var g = e[f];
					this.ga(d, g) && b.push(g)
				} else b.push(d)
			}
			return b
		};
		q.prototype.ga = function (a, b) {return this.C.ga(a, b)};
		q.prototype.c = function (a, b) {
			for (var c = da(a), d = yd(b, b.length, c, c.length), e = 0, f = 0, g; e < d.length && (g =
				d[e]); e++) {
				for (var h = 0, k; h < g.Z.length && (k = g.Z[h]); h++)R(k) === a && X.call(a, k), c.splice(g.index + f, 1);
				f -= g.da
			}
			for (e = 0; e < d.length && (g = d[e]); e++)for (f = c[g.index], h = g.index; h < g.index + g.da; h++)k = b[h], Ua.call(a, k, f), c.splice(h, 0, k)
		};
		q.prototype.za = function () {return !(!this.a || !this.a.length)};
		q.prototype.ta = function () {
			this.a || this.f();
			return this.a
		};
		q.prototype.addEventListener = function (a, b, c) {
			"object" !== typeof c && (c = {capture: !!c});
			c.qa = this;
			this.host.addEventListener(a, b, c)
		};
		q.prototype.removeEventListener =
			function (a, b, c) {
				"object" !== typeof c && (c = {capture: !!c});
				c.qa = this;
				this.host.removeEventListener(a, b, c)
			};
		q.prototype.getElementById = function (a) {return this.querySelector("#" + a)};
		(function (a) {
			M(a, Pa, !0);
			M(a, Qa, !0)
		})(q.prototype);
		var Cd = {addEventListener: nc.bind(window), removeEventListener: rc.bind(window)}, Bd = {
			addEventListener: nc,
			removeEventListener: rc,
			appendChild: function (a) {return hc(this, a)},
			insertBefore: function (a, b) {return hc(this, a, b)},
			removeChild: function (a) {
				if (a.parentNode !== this)throw Error("The node to be removed is not a child of this node: " +
					a);
				if (!$b(a)) {
					var b = C(this) ? this.host : this, c = R(a);
					b === c && X.call(b, a)
				}
				Sa(this, null, a);
				return a
			},
			replaceChild: function (a, b) {
				this.insertBefore(a, b);
				this.removeChild(b);
				return a
			},
			cloneNode: function (a) {
				var b;
				if ("template" == this.localName) b = gb.call(this, a); else if (b = gb.call(this, !1), a) {
					a = this.childNodes;
					for (var c = 0, d; c < a.length; c++)d = a[c].cloneNode(!0), b.appendChild(d)
				}
				return b
			},
			getRootNode: function () {return Ta(this)},
			get isConnected() {
				var a = this.ownerDocument;
				if (a && a.contains && a.contains(this) || (a = a.documentElement) &&
					a.contains && a.contains(this))return !0;
				for (a = this; a && !(a instanceof Document);)a = a.parentNode || (a instanceof q ? a.host : void 0);
				return !!(a && a instanceof Document)
			},
			dispatchEvent: function (a) {
				na();
				return hb.call(this, a)
			}
		}, Dd = {get assignedSlot() {return vc(this)}}, Za = {
			querySelector: function (a) {return ec(this, function (b) {return Mc.call(b, a)}, function (a) {return !!a})[0] || null},
			querySelectorAll: function (a) {return ec(this, function (b) {return Mc.call(b, a)})}
		}, yc = {
			assignedNodes: function (a) {
				if ("slot" === this.localName)return gc(this),
					this.__shady ? (a && a.flatten ? this.__shady.P : this.__shady.assignedNodes) || [] : []
			}
		}, wc = Ka({
			setAttribute: function (a, b) {
				ta || (ta = window.ShadyCSS && window.ShadyCSS.ScopingShim);
				ta && "class" === a ? ta.setElementClass(this, b) : (Nc.call(this, a, b), dc(this, a))
			}, removeAttribute: function (a) {
				Oc.call(this, a);
				dc(this, a)
			}, attachShadow: function (a) {
				if (!this)throw"Must provide a host.";
				if (!a)throw"Not enough arguments.";
				return new q(Gb, this)
			}, get slot() {return this.getAttribute("slot")}, set slot(a) {this.setAttribute("slot", a)},
			get assignedSlot() {return vc(this)}
		}, Za, yc);
		Object.defineProperties(wc, Pc);
		var xc = Ka({
			importNode: function (a, b) {return jc(a, b)},
			getElementById: function (a) {return this.querySelector("#" + a)}
		}, Za);
		Object.defineProperties(xc, {_activeElement: Qa.activeElement});
		var Xd = HTMLElement.prototype.blur, Ed = Ka({
			blur: function () {
				var a = this.shadowRoot;
				(a = a && a.activeElement) ? a.blur() : Xd.call(this)
			}
		});
		y.Pa && (window.ShadyDOM = {
			inUse: y.Pa,
			patch: function (a) {return a},
			isShadyRoot: C,
			enqueue: Lb,
			flush: na,
			settings: y,
			filterMutations: rd,
			observeChildren: pd,
			unobserveChildren: od,
			nativeMethods: Qd,
			nativeTree: Rd
		}, window.Event = Td, window.CustomEvent = Ud, window.MouseEvent = Vd, xd(), Ad(), window.ShadowRoot = q);
		var Fd = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
		z.prototype.L = function (a, b) {
			this.s.set(a, b);
			this.o.set(b.constructor, b)
		};
		z.prototype.f = function (a) {return this.s.get(a)};
		z.prototype.K = function (a) {return this.o.get(a)};
		z.prototype.u = function (a) {
			this.h =
				!0;
			this.i.push(a)
		};
		z.prototype.j = function (a) {
			var b = this;
			this.h && Q(a, function (a) {return b.g(a)})
		};
		z.prototype.g = function (a) {
			if (this.h && !a.__CE_patched) {
				a.__CE_patched = !0;
				for (var b = 0; b < this.i.length; b++)this.i[b](a)
			}
		};
		z.prototype.b = function (a) {
			var b = [];
			Q(a, function (a) {return b.push(a)});
			for (a = 0; a < b.length; a++) {
				var c = b[a];
				1 === c.__CE_state ? this.connectedCallback(c) : this.A(c)
			}
		};
		z.prototype.a = function (a) {
			var b = [];
			Q(a, function (a) {return b.push(a)});
			for (a = 0; a < b.length; a++) {
				var c = b[a];
				1 === c.__CE_state && this.disconnectedCallback(c)
			}
		};
		z.prototype.c = function (a, b) {
			b = b ? b : new Set;
			var c = this, d = [];
			Q(a, function (a) {
				if ("link" === a.localName && "import" === a.getAttribute("rel")) {
					var e = a.import;
					e instanceof Node && "complete" === e.readyState ? (e.__CE_isImportDocument = !0, e.__CE_hasRegistry = !0) : a.addEventListener("load", function () {
						var d = a.import;
						d.__CE_documentLoadHandled || (d.__CE_documentLoadHandled = !0, d.__CE_isImportDocument = !0, d.__CE_hasRegistry = !0, b.delete(d), c.c(d, b))
					})
				} else d.push(a)
			}, b);
			if (this.h)for (a = 0; a < d.length; a++)this.g(d[a]);
			for (a = 0; a <
			d.length; a++)this.A(d[a])
		};
		z.prototype.A = function (a) {
			if (void 0 === a.__CE_state) {
				var b = this.f(a.localName);
				if (b) {
					b.constructionStack.push(a);
					var c = b.constructor;
					try {try {if (new c !== a)throw Error("The custom element constructor did not produce the element being upgraded.");} finally {b.constructionStack.pop()}} catch (f) {throw a.__CE_state = 2, f;}
					a.__CE_state = 1;
					a.__CE_definition = b;
					if (b.attributeChangedCallback)for (b = b.observedAttributes, c = 0; c < b.length; c++) {
						var d = b[c], e = a.getAttribute(d);
						null !== e && this.attributeChangedCallback(a,
							d, null, e, null)
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
			f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, c, d, e)
		};
		Ga.prototype.c = function () {
			this.M &&
			this.M.disconnect()
		};
		Ga.prototype.f = function (a) {
			var b = this.a.readyState;
			"interactive" !== b && "complete" !== b || this.c();
			for (b = 0; b < a.length; b++)for (var c = a[b].addedNodes, d = 0; d < c.length; d++)this.b.c(c[d])
		};
		Fb.prototype.resolve = function (a) {
			if (this.a)throw Error("Already resolved.");
			this.a = a;
			this.b && this.b(a)
		};
		r.prototype.define = function (a, b) {
			var c = this;
			if (!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");
			if (!zc(a))throw new SyntaxError("The element name '" + a +
				"' is not valid.");
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
			} catch (A) {return} finally {this.f = !1}
			this.a.L(a, {
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
		r.prototype.j = function () {
			if (!1 !== this.b)for (this.b = !1, this.a.c(document); 0 < this.c.length;) {
				var a = this.c.shift();
				(a = this.h.get(a)) && a.resolve(void 0)
			}
		};
		r.prototype.get = function (a) {if (a = this.a.f(a))return a.constructor};
		r.prototype.whenDefined = function (a) {
			if (!zc(a))return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
			var b = this.h.get(a);
			if (b)return b.c;
			b = new Fb;
			this.h.set(a, b);
			this.a.f(a) && -1 === this.c.indexOf(a) && b.resolve(void 0);
			return b.c
		};
		r.prototype.o = function (a) {
			this.i.c();
			var b = this.g;
			this.g = function (c) {return a(function () {return b(c)})}
		};
		window.CustomElementRegistry = r;
		r.prototype.define = r.prototype.define;
		r.prototype.get = r.prototype.get;
		r.prototype.whenDefined = r.prototype.whenDefined;
		r.prototype.polyfillWrapFlushCallback = r.prototype.o;
		var Ca = window.Document.prototype.createElement, jd = window.Document.prototype.createElementNS,
			id = window.Document.prototype.importNode, kd = window.Document.prototype.prepend,
			ld = window.Document.prototype.append, ub = window.Node.prototype.cloneNode,
			ka = window.Node.prototype.appendChild, Cb = window.Node.prototype.insertBefore,
			Da = window.Node.prototype.removeChild, Db = window.Node.prototype.replaceChild,
			Fa = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
			tb = window.Element.prototype.attachShadow,
			Aa = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
			Ea = window.Element.prototype.getAttribute, vb = window.Element.prototype.setAttribute,
			xb = window.Element.prototype.removeAttribute, la = window.Element.prototype.getAttributeNS,
			wb = window.Element.prototype.setAttributeNS, yb = window.Element.prototype.removeAttributeNS,
			Ab = window.Element.prototype.insertAdjacentElement, $c = window.Element.prototype.prepend,
			ad = window.Element.prototype.append, cd = window.Element.prototype.before,
			dd = window.Element.prototype.after, ed = window.Element.prototype.replaceWith,
			fd = window.Element.prototype.remove, nd = window.HTMLElement,
			Ba = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
			zb = window.HTMLElement.prototype.insertAdjacentElement, Eb = new function () {},
			ua = window.customElements;
		if (!ua || ua.forcePolyfill || "function" != typeof ua.define || "function" != typeof ua.get) {
			var ha = new z;
			md(ha);
			hd(ha);
			gd(ha);
			Zc(ha);
			document.__CE_hasRegistry = !0;
			var Yd = new r(ha);
			Object.defineProperty(window, "customElements", {configurable: !0, enumerable: !0, value: Yd})
		}
		var I = {STYLE_RULE: 1, na: 7, MEDIA_RULE: 4, Ea: 1E3}, N = {
			rb: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
			port: /@import[^;]*;/gim,
			Ma: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
			Qa: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
			yb: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
			Db: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
			xb: /^@[^\s]*keyframes/,
			Ra: /\s+/g
		}, t = !(window.ShadyDOM &&
		window.ShadyDOM.inUse), w;
		window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? w = window.ShadyCSS.nativeCss : window.ShadyCSS ? (Cc(window.ShadyCSS), window.ShadyCSS = void 0) : Cc(window.WebComponents && window.WebComponents.flags);
		var va = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};{])+)|\{([^\}]*)\}(?:(?=[;\s}])|$))/gi,
			wa = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, Zd = /(--[\w-]+)\s*([:,;)]|$)/gi,
			$d = /(animation\s*:)|(animation-name\s*:)/, Hd = /@media[^(]*(\([^)]*\))/, ae = /\{[^}]*\}/g,
			T = null;
		p.prototype.a = function (a, b, c) {a.__styleScoped ? a.__styleScoped = null : this.i(a, b || "", c)};
		p.prototype.i = function (a, b, c) {
			a.nodeType === Node.ELEMENT_NODE && this.A(a, b, c);
			if (a = "template" === a.localName ? (a.content || a.Hb).childNodes : a.children || a.childNodes)for (var d = 0; d < a.length; d++)this.i(a[d], b, c)
		};
		p.prototype.A = function (a, b, c) {
			if (b)if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b)); else if (a.getAttribute) {
				var d = a.getAttribute(be);
				c ? d && (b = d.replace("style-scope", "").replace(b, ""), qa(a, b)) : qa(a, (d ? d + " " : "") + "style-scope " + b)
			}
		};
		p.prototype.b = function (a, b, c) {
			var d = a.__cssBuild;
			t || "shady" === d ? b = Y(b, c) : (a = U(a), b = this.T(b, a.is, a.$, c) + "\n\n");
			return b.trim()
		};
		p.prototype.T = function (a, b, c, d) {
			var e = this.f(b, c);
			b = this.h(b);
			var f = this;
			return Y(a, function (a) {
				a.c || (f.V(a, b, e), a.c = !0);
				d && d(a, b, e)
			})
		};
		p.prototype.h = function (a) {return a ? ce + a : ""};
		p.prototype.f = function (a, b) {return b ? "[is=" + a + "]" : a};
		p.prototype.V = function (a, b, c) {
			this.j(a, this.g,
				b, c)
		};
		p.prototype.j = function (a, b, c, d) {a.selector = a.D = this.o(a, b, c, d)};
		p.prototype.o = function (a, b, c, d) {
			var e = a.selector.split(Qc);
			if (!Dc(a)) {
				a = 0;
				for (var f = e.length, g; a < f && (g = e[a]); a++)e[a] = b.call(this, g, c, d)
			}
			return e.join(Qc)
		};
		p.prototype.g = function (a, b, c) {
			var d = this, e = !1;
			a = a.trim();
			a = a.replace(de, function (a, b, c) {return ":" + b + "(" + c.replace(/\s/g, "") + ")"});
			a = a.replace(ee, kb + " $1");
			return a = a.replace(fe, function (a, g, h) {
				e || (a = d.K(h, g, b, c), e = e || a.stop, g = a.qb, h = a.value);
				return g + h
			})
		};
		p.prototype.K = function (a,
		                          b, c, d) {
			var e = a.indexOf(lb);
			0 <= a.indexOf(kb) ? a = this.S(a, d) : 0 !== e && (a = c ? this.s(a, c) : a);
			c = !1;
			0 <= e && (b = "", c = !0);
			var f;
			c && (f = !0, c && (a = a.replace(ge, function (a, b) {return " > " + b})));
			a = a.replace(he, function (a, b, c) {return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]'});
			return {value: a, qb: b, stop: f}
		};
		p.prototype.s = function (a, b) {
			a = a.split(Rc);
			a[0] += b;
			return a.join(Rc)
		};
		p.prototype.S = function (a, b) {
			var c = a.match(Sc);
			return (c = c && c[2].trim() || "") ? c[0].match(Tc) ? a.replace(Sc, function (a, c, f) {return b + f}) : c.split(Tc)[0] ===
			b ? c : ie : a.replace(kb, b)
		};
		p.prototype.U = function (a) {
			a.selector = a.parsedSelector;
			this.u(a);
			this.j(a, this.L)
		};
		p.prototype.u = function (a) {a.selector === je && (a.selector = "html")};
		p.prototype.L = function (a) {return a.match(lb) ? this.g(a, Uc) : this.s(a.trim(), Uc)};
		qb.Object.defineProperties(p.prototype, {
			c: {
				configurable: !0,
				enumerable: !0,
				get: function () {return "style-scope"}
			}
		});
		var de = /:(nth[-\w]+)\(([^)]+)\)/, Uc = ":not(.style-scope)", Qc = ",",
			fe = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=\[])+)/g, Tc = /[[.:#*]/, kb = ":host", je = ":root",
			lb = "::slotted", ee = new RegExp("^(" + lb + ")"), Sc = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
			ge = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, he = /(.*):dir\((?:(ltr|rtl))\)/, ce = ".", Rc = ":",
			be = "class", ie = "should_not_match", x = new p;
		u.get = function (a) {return a ? a.__styleInfo : null};
		u.set = function (a, b) {return a.__styleInfo = b};
		u.prototype.c = function () {return this.H};
		u.prototype._getStyleRules = u.prototype.c;
		var Vc = function (a) {
			return a.matches || a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector ||
				a.webkitMatchesSelector
		}(window.Element.prototype), ke = navigator.userAgent.match("Trident");
		n.prototype.V = function (a) {
			var b = this, c = {}, d = [], e = 0;
			Z(a, function (a) {
				b.c(a);
				a.index = e++;
				b.U(a.v.cssText, c)
			}, function (a) {d.push(a)});
			a.b = d;
			a = [];
			for (var f in c)a.push(f);
			return a
		};
		n.prototype.c = function (a) {
			if (!a.v) {
				var b = {}, c = {};
				this.b(a, c) && (b.G = c, a.rules = null);
				b.cssText = this.T(a);
				a.v = b
			}
		};
		n.prototype.b = function (a, b) {
			var c = a.v;
			if (c) {if (c.G)return Object.assign(b, c.G), !0} else {
				for (var c = a.parsedCssText, d; a = va.exec(c);) {
					d =
						(a[2] || a[3]).trim();
					if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
					d = !0
				}
				return d
			}
		};
		n.prototype.T = function (a) {return this.S(a.parsedCssText)};
		n.prototype.S = function (a) {return a.replace(ae, "").replace(va, "")};
		n.prototype.U = function (a, b) {
			for (var c; c = Zd.exec(a);) {
				var d = c[1];
				":" !== c[2] && (b[d] = !0)
			}
		};
		n.prototype.ka = function (a) {for (var b = Object.getOwnPropertyNames(a), c = 0, d; c < b.length; c++)d = b[c], a[d] = this.a(a[d], a)};
		n.prototype.a = function (a, b) {
			if (a)if (0 <= a.indexOf(";")) a = this.f(a, b); else {
				var c = this;
				a = Fc(a,
					function (a, e, f, g) {
						if (!e)return a + g;
						(e = c.a(b[e], b)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = c.a(b[f] || f, b) || f;
						return a + (e || "") + g
					})
			}
			return a && a.trim() || ""
		};
		n.prototype.f = function (a, b) {
			a = a.split(";");
			for (var c = 0, d, e; c < a.length; c++)if (d = a[c]) {
				wa.lastIndex = 0;
				if (e = wa.exec(d)) d = this.a(b[e[1]], b); else if (e = d.indexOf(":"), -1 !== e) {
					var f = d.substring(e), f = f.trim(), f = this.a(f, b) || f;
					d = d.substring(0, e) + f
				}
				a[c] = d && d.lastIndexOf(";") === d.length - 1 ? d.slice(0, -1) : d || ""
			}
			return a.join(";")
		};
		n.prototype.L =
			function (a, b) {
				var c = "";
				a.v || this.c(a);
				a.v.cssText && (c = this.f(a.v.cssText, b));
				a.cssText = c
			};
		n.prototype.K = function (a, b) {
			var c = a.cssText, d = a.cssText;
			null == a.Oa && (a.Oa = $d.test(c));
			if (a.Oa)if (null == a.ha) {
				a.ha = [];
				for (var e in b)d = b[e], d = d(c), c !== d && (c = d, a.ha.push(e))
			} else {
				for (e = 0; e < a.ha.length; ++e)d = b[a.ha[e]], c = d(c);
				d = c
			}
			a.cssText = d
		};
		n.prototype.ja = function (a, b) {
			var c = {}, d = this, e = [];
			Z(a, function (a) {
				a.v || d.c(a);
				var f = a.D || a.parsedSelector;
				b && a.v.G && f && Vc.call(b, f) && (d.b(a, c), a = a.index, f = parseInt(a / 32, 10),
					e[f] = (e[f] || 0) | 1 << a % 32)
			}, null, !0);
			return {G: c, key: e}
		};
		n.prototype.ma = function (a, b, c, d) {
			b.v || this.c(b);
			if (b.v.G) {
				var e = U(a);
				a = e.is;
				var e = e.$, e = a ? x.f(a, e) : "html", f = b.parsedSelector, g = ":host > *" === f || "html" === f,
					h = 0 === f.indexOf(":host") && !g;
				"shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));
				"shadow" === c && (g = ":host > *" === f || "html" === f, h = h && !g);
				if (g || h) c = e, h && (t && !b.D && (b.D = x.o(b, x.g, x.h(a), e)), c = b.D || e), d({
					Cb: c,
					wb: h,
					Lb: g
				})
			}
		};
		n.prototype.ia = function (a, b) {
			var c = {}, d = {}, e = this,
				f = b && b.__cssBuild;
			Z(b, function (b) {e.ma(a, b, f, function (f) {Vc.call(a.Ib || a, f.Cb) && (f.wb ? e.b(b, c) : e.b(b, d))})}, null, !0);
			return {Ab: d, vb: c}
		};
		n.prototype.la = function (a, b, c) {
			var d = this, e = U(a), f = x.f(e.is, e.$),
				g = new RegExp("(?:^|[^.#[:])" + (a.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
				e = u.get(a).H, h = this.h(e, c);
			return x.b(a, e, function (a) {
				d.L(a, b);
				t || Dc(a) || !a.cssText || (d.K(a, h), d.o(a, g, f, c))
			})
		};
		n.prototype.h = function (a, b) {
			a = a.b;
			var c = {};
			if (!t && a)for (var d = 0, e = a[d]; d < a.length; e = a[++d])this.j(e, b),
				c[e.keyframesName] = this.i(e);
			return c
		};
		n.prototype.i = function (a) {return function (b) {return b.replace(a.f, a.a)}};
		n.prototype.j = function (a, b) {
			a.f = new RegExp(a.keyframesName, "g");
			a.a = a.keyframesName + "-" + b;
			a.D = a.D || a.selector;
			a.selector = a.D.replace(a.keyframesName, a.a)
		};
		n.prototype.o = function (a, b, c, d) {
			a.D = a.D || a.selector;
			d = "." + d;
			for (var e = a.D.split(","), f = 0, g = e.length, h; f < g && (h = e[f]); f++)e[f] = h.match(b) ? h.replace(c, d) : d + " " + h;
			a.selector = e.join(",")
		};
		n.prototype.u = function (a, b, c) {
			var d = a.getAttribute("class") ||
				"", e = d;
			c && (e = d.replace(new RegExp("\\s*x-scope\\s*" + c + "\\s*", "g"), " "));
			e += (e ? " " : "") + "x-scope " + b;
			d !== e && qa(a, e)
		};
		n.prototype.A = function (a, b, c, d) {
			b = d ? d.textContent || "" : this.la(a, b, c);
			var e = u.get(a), f = e.a;
			f && !t && f !== d && (f._useCount--, 0 >= f._useCount && f.parentNode && f.parentNode.removeChild(f));
			t ? e.a ? (e.a.textContent = b, d = e.a) : b && (d = bb(b, c, a.shadowRoot, e.b)) : d ? d.parentNode || (ke && -1 < b.indexOf("@media") && (d.textContent = b), Ec(d, null, e.b)) : b && (d = bb(b, c, null, e.b));
			d && (d._useCount = d._useCount || 0, e.a != d && d._useCount++,
				e.a = d);
			return d
		};
		n.prototype.s = function (a, b) {
			var c = pa(a), d = this;
			a.textContent = Y(c, function (a) {
				var c = a.cssText = a.parsedCssText;
				a.v && a.v.cssText && (c = c.replace(N.Ma, "").replace(N.Qa, ""), a.cssText = d.f(c, b))
			})
		};
		qb.Object.defineProperties(n.prototype, {
			g: {
				configurable: !0,
				enumerable: !0,
				get: function () {return "x-scope"}
			}
		});
		var P = new n, mb = {}, xa = window.customElements;
		if (xa && !t) {
			var le = xa.define;
			xa.define = function (a, b, c) {
				var d = document.createComment(" Shady DOM styles for " + a + " "), e = document.head;
				e.insertBefore(d,
					(T ? T.nextSibling : null) || e.firstChild);
				T = d;
				mb[a] = d;
				return le.call(xa, a, b, c)
			}
		}
		ja.prototype.a = function (a, b, c) {
			for (var d = 0; d < c.length; d++) {
				var e = c[d];
				if (a.G[e] !== b[e])return !1
			}
			return !0
		};
		ja.prototype.b = function (a, b, c, d) {
			var e = this.cache[a] || [];
			e.push({G: b, styleElement: c, F: d});
			e.length > this.c && e.shift();
			this.cache[a] = e
		};
		ja.prototype.fetch = function (a, b, c) {
			if (a = this.cache[a])for (var d = a.length - 1; 0 <= d; d--) {
				var e = a[d];
				if (this.a(e, b, c))return e
			}
		};
		if (!t) {
			var Wc = new MutationObserver(Gc), Xc = function (a) {
				Wc.observe(a,
					{childList: !0, subtree: !0})
			};
			if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Xc(document); else {
				var nb = function () {Xc(document.body)};
				window.HTMLImports ? window.HTMLImports.whenReady(nb) : requestAnimationFrame(function () {
					if ("loading" === document.readyState) {
						var a = function () {
							nb();
							document.removeEventListener("readystatechange", a)
						};
						document.addEventListener("readystatechange", a)
					} else nb()
				})
			}
			sb = function () {Gc(Wc.takeRecords())}
		}
		var ra = {}, Kd = Promise.resolve(), cb = null, Ic = window.HTMLImports &&
			window.HTMLImports.whenReady || null, db, ya = null, ia = null;
		L.prototype.Na = function () {!this.enqueued && ia && (this.enqueued = !0, rb(ia))};
		L.prototype.b = function (a) {a.__seenByShadyCSS || (a.__seenByShadyCSS = !0, this.customStyles.push(a), this.Na())};
		L.prototype.a = function (a) {return a.__shadyCSSCachedStyle ? a.__shadyCSSCachedStyle : a.getStyle ? a.getStyle() : a};
		L.prototype.c = function () {
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
						ya && ya(d);
						c.__shadyCSSCachedStyle = d
					}
				}
			}
			return a
		};
		L.prototype.addCustomStyle = L.prototype.b;
		L.prototype.getStyleForCustomStyle = L.prototype.a;
		L.prototype.processStyles = L.prototype.c;
		Object.defineProperties(L.prototype, {
			transformCallback: {
				get: function () {return ya},
				set: function (a) {ya = a}
			}, validateCallback: {
				get: function () {return ia}, set: function (a) {
					var b = !1;
					ia || (b = !0);
					ia = a;
					b && this.Na()
				}
			}
		});
		var Yc = new ja;
		k.prototype.K = function () {sb()};
		k.prototype.ia = function (a) {
			var b = this.s[a] = (this.s[a] || 0) + 1;
			return a + "-" + b
		};
		k.prototype.Za = function (a) {return pa(a)};
		k.prototype.ab = function (a) {return Y(a)};
		k.prototype.V = function (a) {
			a = a.content.querySelectorAll("style");
			for (var b = [], c = 0; c < a.length; c++) {
				var d = a[c];
				b.push(d.textContent);
				d.parentNode.removeChild(d)
			}
			return b.join("").trim()
		};
		k.prototype.ka = function (a) {return (a = a.content.querySelector("style")) ? a.getAttribute("css-build") || "" : ""};
		k.prototype.prepareTemplate =
			function (a, b, c) {
				if (!a.f) {
					a.f = !0;
					a.name = b;
					a.extends = c;
					ra[b] = a;
					var d = this.ka(a), e = this.V(a);
					c = {is: b, extends: c, Fb: d};
					t || x.a(a.content, b);
					this.c();
					var f = wa.test(e) || va.test(e);
					wa.lastIndex = 0;
					va.lastIndex = 0;
					e = ab(e);
					f && w && this.a && this.a.transformRules(e, b);
					a._styleAst = e;
					a.g = d;
					d = [];
					w || (d = P.V(a._styleAst));
					if (!d.length || w) b = this.ja(c, a._styleAst, t ? a.content : null, mb[b]), a.a = b;
					a.c = d
				}
			};
		k.prototype.ja = function (a, b, c, d) {
			b = x.b(a, b);
			if (b.length)return bb(b, a.is, c, d)
		};
		k.prototype.ma = function (a) {
			var b = U(a), c = b.is,
				b = b.$, d = mb[c], c = ra[c], e, f;
			c && (e = c._styleAst, f = c.c);
			return u.set(a, new u(e, d, f, 0, b))
		};
		k.prototype.T = function () {!this.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (this.a = window.ShadyCSS.ApplyShim, this.a.invalidCallback = Id)};
		k.prototype.U = function () {
			var a = this;
			!this.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (this.b = window.ShadyCSS.CustomStyleInterface, this.b.transformCallback = function (b) {a.A(b)}, this.b.validateCallback = function () {
				requestAnimationFrame(function () {
					(a.b.enqueued || a.i) &&
					a.f()
				})
			})
		};
		k.prototype.c = function () {
			this.T();
			this.U()
		};
		k.prototype.f = function () {
			this.c();
			if (this.b) {
				var a = this.b.processStyles();
				this.b.enqueued && (w ? this.Xa(a) : (this.u(this.g, this.h), this.L(a)), this.b.enqueued = !1, this.i && !w && this.styleDocument())
			}
		};
		k.prototype.styleElement = function (a, b) {
			var c = U(a).is, d = u.get(a);
			d || (d = this.ma(a));
			this.j(a) || (this.i = !0);
			b && (d.R = d.R || {}, Object.assign(d.R, b));
			if (w) {
				if (d.R) {
					b = d.R;
					for (var e in b)null === e ? a.style.removeProperty(e) : a.style.setProperty(e, b[e])
				}
				if (((e = ra[c]) ||
					this.j(a)) && e && e.a && !Hc(e)) {
					if (Hc(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) this.c(), this.a && this.a.transformRules(e._styleAst, c), e.a.textContent = x.b(a, d.H), Jd(e);
					t && (c = a.shadowRoot) && (c.querySelector("style").textContent = x.b(a, d.H));
					d.H = e._styleAst
				}
			} else this.u(a, d), d.Ba && d.Ba.length && this.S(a, d)
		};
		k.prototype.o = function (a) {return (a = a.getRootNode().host) ? u.get(a) ? a : this.o(a) : this.g};
		k.prototype.j = function (a) {return a === this.g};
		k.prototype.S = function (a, b) {
			var c = U(a).is, d = Yc.fetch(c,
				b.J, b.Ba), e = d ? d.styleElement : null, f = b.F;
			b.F = d && d.F || this.ia(c);
			e = P.A(a, b.J, b.F, e);
			t || P.u(a, b.F, f);
			d || Yc.b(c, b.J, e, b.F)
		};
		k.prototype.u = function (a, b) {
			var c = this.o(a), d = u.get(c), c = Object.create(d.J || null), e = P.ia(a, b.H);
			a = P.ja(d.H, a).G;
			Object.assign(c, e.vb, a, e.Ab);
			this.la(c, b.R);
			P.ka(c);
			b.J = c
		};
		k.prototype.la = function (a, b) {
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
		k.prototype.Xa = function (a) {
			for (var b = 0; b < a.length; b++) {
				var c = this.b.getStyleForCustomStyle(a[b]);
				c && this.Wa(c)
			}
		};
		k.prototype.L = function (a) {
			for (var b = 0; b < a.length; b++) {
				var c = this.b.getStyleForCustomStyle(a[b]);
				c && P.s(c, this.h.J)
			}
		};
		k.prototype.A = function (a) {
			var b = this, c = pa(a);
			Z(c, function (a) {
				t ? x.u(a) : x.U(a);
				w && (b.c(),
				b.a && b.a.transformRule(a))
			});
			w ? a.textContent = Y(c) : this.h.H.rules.push(c)
		};
		k.prototype.Wa = function (a) {
			if (w && this.a) {
				var b = pa(a);
				this.c();
				this.a.transformRules(b);
				a.textContent = Y(b)
			}
		};
		k.prototype.getComputedStyleValue = function (a, b) {
			var c;
			w || (c = (u.get(a) || u.get(this.o(a))).J[b]);
			return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : ""
		};
		k.prototype.$a = function (a, b) {
			var c = a.getRootNode();
			b = b ? b.split(/\s/) : [];
			c = c.host && c.host.localName;
			if (!c) {
				var d = a.getAttribute("class");
				if (d)for (var d =
					d.split(/\s/), e = 0; e < d.length; e++)if (d[e] === x.c) {
					c = d[e + 1];
					break
				}
			}
			c && b.push(x.c, c);
			w || (c = u.get(a)) && c.F && b.push(P.g, c.F);
			qa(a, b.join(" "))
		};
		k.prototype.Ya = function (a) {return u.get(a)};
		k.prototype.flush = k.prototype.K;
		k.prototype.prepareTemplate = k.prototype.prepareTemplate;
		k.prototype.styleElement = k.prototype.styleElement;
		k.prototype.styleDocument = k.prototype.styleDocument;
		k.prototype.styleSubtree = k.prototype.styleSubtree;
		k.prototype.getComputedStyleValue = k.prototype.getComputedStyleValue;
		k.prototype.setElementClass =
			k.prototype.$a;
		k.prototype._styleInfoForNode = k.prototype.Ya;
		k.prototype.transformCustomStyleForDocument = k.prototype.A;
		k.prototype.getStyleAst = k.prototype.Za;
		k.prototype.styleAstToString = k.prototype.ab;
		k.prototype.flushCustomStyles = k.prototype.f;
		Object.defineProperties(k.prototype, {
			nativeShadow: {get: function () {return t}},
			nativeCss: {get: function () {return w}}
		});
		var K = new k, ob, pb;
		window.ShadyCSS && (ob = window.ShadyCSS.ApplyShim, pb = window.ShadyCSS.CustomStyleInterface);
		window.ShadyCSS = {
			ScopingShim: K,
			prepareTemplate: function (a,
			                           b, c) {
				K.f();
				K.prepareTemplate(a, b, c)
			},
			styleSubtree: function (a, b) {
				K.f();
				K.styleSubtree(a, b)
			},
			styleElement: function (a) {
				K.f();
				K.styleElement(a)
			},
			styleDocument: function (a) {
				K.f();
				K.styleDocument(a)
			},
			getComputedStyleValue: function (a, b) {return K.getComputedStyleValue(a, b)},
			nativeCss: w,
			nativeShadow: t
		};
		ob && (window.ShadyCSS.ApplyShim = ob);
		pb && (window.ShadyCSS.CustomStyleInterface = pb);
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
//# sourceMappingURL=webcomponents-lite.js.map
