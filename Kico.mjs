// Kico: KIBI Codices //
// Developed ⌨⃝ 2020 Ms Leaf Adventure [aka kibigo!] //

// The author(s) of the following code have dedicated it, to the fullest extent, to the public domain. //
// No warrantees of any kind, express or implied, are provided regarding this software or its use. //
// You employ it at your own risk. //

// · ⚧ · ☣ · ☠ · ☣ · ⚧ · //

export default (( ) => { // strict IIFE, though unnecessary
	"use strict";
	var undefined // initializes to… well… undefined (alright thereʼs no point in this)
	const
		$ϕ = Symbol("phony")
		, $℘ = Object.defineProperty.bind(Object)
		, $℘s = Object.defineProperties.bind(Object)
		, $ꝛ = String.raw.bind(String)
		, HEX = $ꝛ`[0-9A-Fa-f]`
		, UCHAR = $ꝛ`\\u(?:${ HEX }{4})|\\U(?:${ HEX }{8})`
		, IRIREF = $ꝛ`<(?:[^\x00-\x20<>\x22\x7B\x7D|^\x60\\]|${ UCHAR })*>`
		, PN_CHARS_BASE = $ꝛ`[A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}]`
		, PN_CHARS_U = $ꝛ`${ PN_CHARS_BASE }|_`
		, PN_CHARS = $ꝛ`${ PN_CHARS_U }|[-0-9\xB7\u0300-\u036F\u203F-\u2040]`
		, PN_PREFIX = $ꝛ`(?:${ PN_CHARS_BASE })(?:(?:${ PN_CHARS }|\.)*(?:${ PN_CHARS }))?`
		, PNAME_NS = $ꝛ`(?:${ PN_PREFIX })?:`
		, PERCENT = $ꝛ`%(?:${ HEX }){2}`
		, PN_LOCAL_ESC = $ꝛ`\\[-_~.!$&'()*+,;=/?#@%]`
		, PLX = $ꝛ`${ PERCENT }|${ PN_LOCAL_ESC }`
		, PN_LOCAL = $ꝛ`(?:${ PN_CHARS_U }|[:0-9]|${ PLX })(?:(?:${ PN_CHARS }|[.:]|${ PLX })*(?:${ PN_CHARS }|:|${ PLX }))?`
		, PNAME_LN = $ꝛ`(?:${ PNAME_NS })(?:${ PN_LOCAL })`
		, BLANK_NODE_LABEL = $ꝛ`_:(?:${ PN_CHARS_U }|[0-9])(?:(?:${ PN_CHARS }|\.)*(?:${ PN_CHARS }))?`
		, LANGTAG = $ꝛ`@[a-zA-Z]+(?:-[a-zA-Z0-9]+)*`
		, EOL = $ꝛ`[\x0D\x0A]+`
		, INTEGER = $ꝛ`[+-]?[0-9]+`
		, DECIMAL = $ꝛ`[+-]?[0-9]*\.[0-9]+`
		, EXPONENT = $ꝛ`[eE][+-]?[0-9]+`
		, DOUBLE = $ꝛ`[+-]?(?:[0-9]+\.[0-9]*(?:${ EXPONENT })|\.[0-9]+(?:${ EXPONENT })|[0-9]+(?:${ EXPONENT }))`
		, ECHAR = $ꝛ`\\[tbnrf"'\\]`
		, STRING_LITERAL_QUOTE = $ꝛ`"(?:[^\x22\x5C\x0A\x0D]|${ ECHAR }|${ UCHAR })*"`
		, STRING_LITERAL_SINGLE_QUOTE = $ꝛ`'(?:[^\x27\x5C\x0A\x0D]|${ ECHAR }|${ UCHAR })*'`
		, STRING_LITERAL_LONG_SINGLE_QUOTE = $ꝛ`'''(?:(?:'|'')?(?:[^'\\]|${ ECHAR }|${ UCHAR }))*'''`
		, STRING_LITERAL_LONG_QUOTE = $ꝛ`"""(?:(?:"|"")?(?:[^"\\]|${ ECHAR }|${ UCHAR }))*"""`
		, WS = $ꝛ`[\x20\x09\x0D\x0A]`
		, ANON = $ꝛ`\[(?:${ WS })*\]`
		, A͢ = $℘s(Array.from.bind(Array),
			{ [Symbol.hasInstance]: { value: $ => $ instanceof Array }
			, prototype: { value: Array.prototype } })
		, O͢ = Object
		, RX͢ = RegExp
		, S͢ = String
		, add3 = function add3 (sbj, p, obj) {
			const $sbj = this[𝒫](sbj) ? this[sbj] : this[sbj] = new ꞰR (sbj)
			$sbj.addPredicate(p, obj)
			return $sbj }
		, addP = function addPredicate ( ꝺ, p, obj ) { // add object to predicate for data
			if ( !O͢.isExtensible(this) )
				throw ꞆƐ͢(l10n`NONEXTENSIBLE_ADD_PREDICATE`)
			else if ( obj != Ꝋ ) {
				const
					$ℹ = new ꞰÑN (p)
					, exists = ꝺ[𝒫]($ℹ)
					, provided = nObj(obj)
				if ( exists ) {
					const
						existing = ꝺ[$ℹ]
					if ( provided instanceof Set )
						provided.forEach(this.addPredicate.bind(this, $ℹ))
					else if ( !Ↄ̲.call(existing, provided) )
						if ( existing instanceof Set ) existing.add(provided)
						else (ꝺ[$ℹ] = new Set([ existing ])).add(provided)
					else {
						this.deletePredicate($ℹ, provided)
						this.addPredicate($ℹ, provided) } }
				else ꝺ[$ℹ] = provided }
			return this }
		, clearP = function clearPredicate ( ꝺ, p ) { // clear predicate on data
			if ( O͢.isSealed(this) ) throw ꞆƐ͢(l10n`SEALED_CLEAR_PREDICATE`)
			else {
				const
					$ℹ = new ꞰÑN (p)
					, exists = ꝺ[𝒫]($ℹ)
				if ( exists ) {
					delete ꝺ[$ℹ]
					return true }
				else return false } }
		, deleteP = function deletePredicate ( ꝺ, p, obj ) { // delete object from predicate on data
			if ( O͢.isSealed(this) ) throw ꞆƐ͢(l10n`SEALED_DELETE_PREDICATE`)
			else {
				const
					$ℹ = new ꞰÑN (p)
					, exists = ꝺ[𝒫]($ℹ)
				if ( exists ) {
					const
						existing = ꝺ[$ℹ]
						, provided = nObj(obj)
					if ( existing instanceof Set ) {
						let ꝟꝵ = false
						A͢(existing).forEach($ => {
							if ( Ↄ̲.call(provided, $) ) {
								existing.delete($)
								ꝟꝵ = true } })
						return ꝟꝵ }
					else if ( Ↄ̲.call(provided, existing) ) return delete ꝺ[$ℹ]
					else return false }
				else return false } }
		, fromNT = function fromNT ( $, ...$s ) { // convert N‑Triples to Codex
			const
				$rsrcs = n3.call(this, $, ...$s)
				ꝵ = A͢($rsrcs)
					.filter(rsrc => rsrc.a(__PN`skos:ConceptScheme`) &&
						rsrc.hasPredicate(__PN`skos:hasTopConcept`))
					.map(rsrc => new ꞰCX (rsrc, rsrcs))
				return ꝵ.length < 1 ? Ꝋ
					: ꝵ.length == 1 ? ꝵ[0]
					: new Set(ꝵ) }
		, fromTurtle = function fromTurtle ( $, ...$s ) { // convert Turtle to Codex
			const
				$rsrcs = ꞇꞇl.call(this, $, ...$s)
				ꝵ = A͢($rsrcs)
					.filter(rsrc => rsrc.a(__PN`skos:ConceptScheme`) &&
						rsrc.hasPredicate(__PN`skos:hasTopConcept`))
					.map(rsrc => new ꞰCX (rsrc, rsrcs))
				return ꝵ.length < 1 ? Ꝋ
					: ꝵ.length == 1 ? ꝵ[0]
					: new Set(ꝵ) }
		, getP = function getPredicate ( ꝺ, p ) { // get objects for predicate on data
			const
				$ℹ = new ꞰÑN (p)
				, exists = ꝺ[𝒫]($ℹ)
			return exists ? nObj(ꝺ[$ℹ]) : Ꝋ }
		, hasP = function hasPredicate ( ꝺ, p ) { // check existence of predicate on data
			return ꝺ[𝒫](new ꞰÑN (p)) }
		, htm4ÐˢDoc = function html ( strs, ...elts ) { // must be bound to a document
			const fm̃t = this.createDocumentFragment()
			let ꝟndx
			for ( ꝟndx = 0 ; ꝟndx < strs[Ɫ] ; ꝟndx++ ) {
				const
					elt = elts[ꝟndx]
					, str = strs[ꝟndx]
				if ( str ) fm̃t.appendChild(this.createTextNode(str))
				if ( typeof elt == "string") fm̃t.appendChild(this.createTextNode(elt))
				else if ( elt.ownerDocument == this ) fm̃t.appendChild(elt)
				else if ( elt ) {
					const { attributes, content, handler, localName, namespaceURI } = elt
					if ( localName ) {
						const elt = fm̃t.appendChild(
							this.createElementNS(namespaceURI == Ꝋ
								? "http://www.w3.org/1999/xhtml"
								: namespaceURI, tagName))
						if ( attributes != Ꝋ ) Object
							.keys(attributes)
							.forEach(attr => elt.setAttribute(attr, attributes[attr]))
						if ( content instanceof Node ) elt.appendChild(content)
						if ( typeof handler == "function" ) handler.call(element) } } }
			return fm̃t }
		, l10n = function l10n ( { raw }, ...repls ) {
				const strs = this == Ꝋ || this.LOCALIZATION_STRINGS == Ꝋ
					? ꞰCX.LOCALIZATION_STRINGS
					: this.LOCALIZATION_STRINGS
				return strs ? S͢(strs[raw[0]] || "")
					.replace(/\$0*([1-9][0-9]*)/g, (N, Ⅰ) => repls[+Ⅰ - 1])
					: "" }
		, n3 = function fromNT ( $, ...$s ) {// make Set of Resources from RDF N‑Triples string or template
			/*
			Note:
			The N‑Triples specification grammar does not permit lines with only whitespace.
			However, Example 1 in the N‑Triples specification clearly shows them as allowed, so they are permitted here.
			*/
			const
				$WHITESPACE = $ꝛ`(?:[\x20\x09]|#(?:(?!${ EOL })[^])*)*`
				, $src = typeof $ == "string" ? $ : $[𝒫]("raw") ? S͢.raw($, ...$s) : S͢($)
				, empty = RX͢($ꝛ`(?:(?:${ $WHITESPACE })(?:${ EOL }))*(?:${ $WHITESPACE })`, "uy")
				, whitespace = RX͢($WHITESPACE, "uy")
				, ꝯſꝸ = ꝯſꝸr.bind(
					{ get ndx ( ) { return ꝟndx }
					, set ndx ( $ ) { ꝟndx = $ }
					, ñ: "RDF N‑Triples"
					, src: $src })
				, ꝿ = new ꞰꝾ
			let ꝟndx = 0
			ꝯſꝸ(empty)
			while ( ꝟndx < $src[Ɫ] ) {
				const sbj = ꝯſꝸ(RX͢($ꝛ`${ IRIREF }|${ BLANK_NODE_LABEL }`, "uy"))
				ꝯſꝸ(whitespace)
				const p = ꝯſꝸ(RX͢($ꝛ`${ IRIREF }`, "uy"))
				ꝯſꝸ(whitespace)
				const obj = ꝯſꝸ(RX͢($ꝛ`${ IRIREF }|${ BLANK_NODE_LABEL }|(?:${ STRING_LITERAL_QUOTE })(?:(?:${ $WHITESPACE })(?:\^\^(?:${ $WHITESPACE })(?:${ IRIREF })|${ LANGTAG }))?`, "uy"))
				ꝯſꝸ(whitespace)
				ꝯſꝸ(RX͢($ꝛ`\.(?:${ $WHITESPACE })(?:${ EOL })`, "uy"))
				ꝿ.add(new Ʞ3 (ꞇObj(sbj), ꞇObj(p), ꞇObj(obj)))
				ꝯſꝸ(empty) }
			return ꝿ }
		, n3Obj = function fromNT ( $ ) { // make object from N‑Triples
			if ( !RX͢($ꝛ`^${ IRIREF }|${ BLANK_NODE_LABEL }|(?:${ STRING_LITERAL_QUOTE })${ whitespace }(?:\^\^${ whitespace }(?:${ IRIREF })|${ LANGTAG })?$`).test( $ ) )
					throw ꞆƐ͢(l10n`INVALID_NODE${ "RDF N‑Triples" }${ $ }`)
				return ꞇObj($) }
		, nObj = function fromValue ($) { // return a new valid object from given
			return $ == Ꝋ ? __PN`rdf:nil`
				: ["BlankNode", "NamedNode"].some(tꞆ => hasꞆ.call($, tꞆ))
				? ꞰT[Ꝕ].clone.call($)
				: $ instanceof URL ? new ꞰÑN ($)
				: $ instanceof ꞰR ? nSbj($.subject)
				: $ instanceof Set ? A͢($).reduce(( ꝵ, ĩ ) => {
					const addl = nObj(ĩ)
					return addl instanceof Set
						? addl.forEach(Set[Ꝕ].add.bind(ꝵ))
						: ꝵ.add(addl) }, new Set)
				: $ instanceof A͢ ? $.map(nObj)
			// TK: Dates
			// TK: Binary
				: typeof $ == "number" ? Number.isInteger($) ? new ꞰL (S͢($), __PN`xsd:integer`)
					: $ == Infinity ? new ꞰL ("INF", __PN`xsd:double`)
					: $ == -Infinity ? new ꞰL ("-INF", __PN`xsd:double`)
					: new ꞰL (S͢($), __PN`xsd:double`)
				: typeof $ == "boolean" ? new ꞰL (S͢($), __PN`xsd:boolean`)
				: new ꞰL ($) }
		, nSbj = $ => $ == Ꝋ ? __PN`rdf:nil`
			: ["BlankNode", "NamedNode"].some(tꞆ => hasꞆ.call($, tꞆ))
			? ꞰT[Ꝕ].clone.call($)
			:  $ instanceof ꞰR ? nSbj($.subject)
			: S͢[Ꝕ][ẞ].call($, 0, 2) == "_:" ? new ꞰBN ( S͢[Ꝕ][ẞ].call($, 2) )
			: new ꞰÑN ( $ )
		, phony = Ʞ => { // creates a phony class, modifying the original to point to it
			if ( Ʞ[𝒫]($ϕ) ) return Ʞ[$ϕ]
			else {
				const
					$ꝕ = Object.getPrototypeOf(Ʞ)
					, Ↄ = function ( ) {
						if ( new.target ) throw ꞆƐ͢(l10n`ILLEGAL_CONSTRUCTOR`)
						else throw ꞆƐ͢(l10n`REQUIRES_NEW${ Ʞ.name }`) }
				Object.setPrototypeOf(Ↄ, Object.create(
					$ꝕ !== Ꝋ && $ꝕ != Function[Ꝕ] ? phony($ꝕ) : Function[Ꝕ],
					{ toString: { [Ꝯ]: 1, [Ꝟ]: ( ) =>
						"function ${ Ʞ.name }() {\n    [hidden code]\n}", [ꝶ]: 1 } }))
				$℘(Ʞ, $ϕ, { [Ꝟ]: Ʞ[Ꝕ].constructor = Ↄ })
				return Reflect.ownKeys(Ʞ).reduce(( Ↄ, $ ) =>
					$℘(Ↄ, $, Object.getOwnPropertyDescriptor(Ʞ, $)), Ↄ) } }
		, pxÑ = function prefixedName ( $, ...$s ) { // make IRI from prefixed string or template
			const ñ = typeof $ == "string" ? $ : $[𝒫]("raw") ? S͢.raw($, ...$s) : S͢($)
			if ( RX͢(`^${ PNAME_LN }|${ PNAME_NS }$`, "u").test(ñ) ) {
				const
					$ndx = ñ.indexOf(":")
					, $ꝯ = ꞰCX.context
					, ꝯ = $ꝯ == Ꝋ ? _ꝯ : $ꝯ
					, loclꝯ = this == Ꝋ ? Ꝋ
						: this != Ꝋ
						&& typeof this.context == "object"
						&& !(this.context instanceof ꞰRDFN) ? this.context : this
					, loclñ = ñ[ẞ]($ndx + 1).replace(/\\[^]/g, x => x[1])
					, px = ñ[ẞ](0, $ndx)
					, _xp = loclꝯ != Ꝋ && loclꝯ[𝒫](px) ? loclꝯ[px]
						: ꝯ != Ꝋ && ꝯ[𝒫](px) ? ꝯ[px] : Ꝋ
				if ( _xp == Ꝋ ) throw ꞆƐ͢(l10n`PNAME_UNDEFINED${ px }`)
				else
					try { return new ꞰÑN (`${ _xp }${ loclñ }`) }
					catch ( ɛ ) { throw ꞆƐ͢(l10n`PNAME_EXPANSION_ERROR${ px }`) } }
			else throw ꞆƐ͢(l10n`PNAME_SYNTAX_ERROR${ ñ }`) }
		, rmm3 = function rmm3 (sbj, p, obj) {
			if ( sbj == Ꝋ ) {
				let ꝟꝵ = false
				O͢.values(this).forEach($sbj => ꝟꝵ = ꝟꝵ || rmm3.call(this, $sbj, p, obj)) }
			else if ( this[𝒫](sbj) ) {
				const $sbj = this[sbj]
				if ( p == Ꝋ ) {
					if ( obj == Ꝋ ) {
						try { delete this[$sbj] }
						catch { return false } }
					else {
						let ꝟꝵ = false
						A͢($sbj.predicates).forEach($p => ꝟꝵ = ꝟꝵ || $sbj.deletePredicate($p, $obj))
						return ꝟꝵ } }
				else return obj == Ꝋ ? $sbj.clearPredicate() : $sbj.deletePredicate(p, obj) }
			else return false }
		, turtify = $ => { // make RDF Turtle from object
			// TK: Resources
			if ( $ instanceof URL || $ instanceof ꞰÑN ) {
				const ñꝞ = S͢($)
				if ( ñꝞ == __PN`rdf:type` ) return 'a'
				else {
					const
						ꝯ = Codex.context
						, px = ꝯ == Ꝋ ? Ꝋ : O͢.keys(ꝯ).find(px => {
							const xp = ꝯ[px]
							return xp == ñꝞ[ẞ](0, xp[Ɫ]) })
					return px
						? `${ px }:${ ñꝞ.substring(ꝯ[px].length).replace(/>/g, "\\u003E") }`
						: `<${ ñꝞ.replace(/>/g, "\\u003E") }>` } }
			else return $ instanceof Set ? A͢($).map(turtify).join(", ")
				: $ instanceof Array ? `( ${ $.map(turtify).join(" ") } )`
				: $ instanceof ꞰRDFN ? $.toTurtle()
				: typeof $ == "number" && !Number.isInteger($)
				? S͢(new ꞰL ($, __PN`xsd:double`))
				: `"${ String[Ꝕ].replace.call($, /["\\\n\r]/g, $$ =>
					({ "\"": $ꝛ`\"`, "\\": $ꝛ`\\`, "\n": $ꝛ`\n`, "\r": $ꝛ`\r` }[$$])) }"` }
		, hasꞆ = function ( $ ) {
			if ( this == Ꝋ ) return false
			else {
				const tꞆ = this.termType
				return S͢(tꞆ == Ꝋ ? this.interfaceName : tꞆ) == $ } }
		, unpack = $ => $ == Ꝋ ? [ ] // Turn an object into a flat array
			: typeof $[Symbol.iterator] == "function"
			? A͢($).reduce((ꝵ, ĩ) => ꝵ.concat(unpack(ĩ)), [ ])
			: [ $ ]
		, Ↄ̲ = function ( $, strict ) { // does this fuzzily equal / contain given
			const
				ðˢ = nObj(this)
				, ĩ = nObj($)
			return ðˢ instanceof ꞰT ? ĩ instanceof ꞰT && ðˢ.equals(ĩ)
				: ðˢ instanceof A͢ ? ĩ instanceof A͢ && !ðˢ
					.map(( ðˢĩ, ndx ) => Ↄ̲.call(ðˢĩ, ĩ[ndx], strict))
					.some($ => !$)
				: ðˢ instanceof Set ? strict
					? ĩ instanceof Set && ðˢ.size == ĩ.size
						? !A͢(ĩ)
							.map(ĩĩ => Ↄ̲.call(ðˢ, ĩĩ, 1))
							.some($ => !$)
						: ðˢ.size == 1 && ðˢ.has(ĩ) ||  Ↄ̲.call(A͢(ðˢ)[0], ĩ, 1)
					: ðˢ.has(ĩ) || A͢(ðˢ).some(ðˢĩ => Ↄ̲.call(ðˢĩ, ĩ))
				: this === $ } // never should reach this point
		, Ɫ = "length"
		, ẞ = "substring"
		, ℹ = function ( $, ...$s ) { // make NamedNode from string or template
			if ( $ instanceof URL || $ instanceof ꞰÑN ) return new ꞰÑN ($)
			else {
				const
					$base = this == Ꝋ || this.baseURI == Ꝋ ? "" : S͢(this.baseURI)
					, $src = (typeof $ == "string" ? $ : $[𝒫]("raw") ? S͢.raw($, ...$s)
						: S͢($)).replace(/\\(?:U([0-9A-Fa-f]{8})|u([0-9A-Fa-f]{4}))/g,
						(N, Ⅰ, Ⅱ) => S͢.fromCodePoint(parseInt(Ⅰ || Ⅱ, 0x10)))
				return new ꞰÑN (/^[A-Za-z][-0-9A-Z+.a-z]*:/u.test($src) ? $src
					: $src[0] == "/" ? `${ $base.match(/^[^?#\x2F]*/gu)[0] }${ $src }`
					: $src[0] == "?" ? `${ $base.match(/^[^?#]*/gu)[0] }${ $src }`
					: $src[0] == "#" ? `${ $base.match(/^[^#]*/gu)[0] }${ $src }`
					: `${ $base.match(/^[^?#]+(?=\x2F)|[^?#\x2F]*/gu)[0] }/${ $src }`) } }
		, Ꝋ = undefined
		, Ꝕ = "prototype"
		, Ꝟ = "value"
		, Ꝯ = "configurable"
		, ꝯſꝸr = function ($) { // consume and return
			const
				{ ndx: $ndx
				, src: $src } = this
			let ꝟndx = $ndx
			if ($ instanceof RX͢) {
				$.lastIndex = ꝟndx
				if ( !$.test($src) )
					throw ꞆƐ͢(l10n`EXPECTED_MATCH_AT${ this.ñ }${ $ }${ ꝟndx }`)
				ꝟndx = $.lastIndex }
			else {
				const ɫ = $[Ɫ]
				if ( $src[ẞ](ꝟndx, ꝟndx + ɫ) != $ )
					throw ꞆƐ͢(l10n`EXPECTED_MATCH_AT${ this.ñ }${ `'${ $ }'` }${ ꝟndx }`)
				ꝟndx += ɫ }
			return $src[ẞ]($ndx, this.ndx = ꝟndx) }
		, ꝯﬆʞ = function ( dꞰ ) {
			const
				$Ʞ = this.constructor
				, Ʞ = $Ʞ === Ꝋ ? Ꝋ : $Ʞ[Symbol.species] // not permitted to be null
			return Ʞ == Ꝋ ? dꞰ : Ʞ[𝒫]($ϕ) ? dꞰ : Ʞ }
		, ꝴ = "enumerated"
		, ꝶ = "writable"
		, ꞆƐ͢ = TypeError
		, ꞇObj = function fromTurtle ( $, ...$s ) { // make object from RDF Turtle
			const
				$WHITESPACE = $ꝛ`(?:${ WS }|#(?:(?!${ EOL })[^])*)*`
				, $src = typeof $ == "string" ? $ : $[𝒫]("raw") ? S͢.raw($, ...$s) : S͢($)
				, ɫ = $src[Ɫ]
				if ( RX͢($ꝛ`^(?:${ IRIREF }|${ PNAME_LN }|${ PNAME_NS })$`, "u").test($src) )
					return $src[0] == "<" ? ℹ.call(this, $src.slice(1, -1)) : pxÑ.call(this, $src)
				else if ( RX͢($ꝛ`^(?:${ BLANK_NODE_LABEL }|${ ANON })$`, "u").test($src) )
					return new ꞰBN ($src[0] == "_" ? $src[ẞ](2) : "")
				else if ( RX͢($ꝛ`^(?:${ DOUBLE }|${ DECIMAL }|${ INTEGER })$`, "u").test($src) )
					return !/[.e]/i.test($src) ? new ꞰL ($src, null, __PN`xsd:integer`)
						: /e/i.test($src) ? new ꞰL ($src, null, __PN`xsd:double`)
						: new ꞰL ($src, null, __PN`xsd:decimal`)
				else if ( RX͢($ꝛ`^(?:true|false)$`, "u").test($src) )
					return new ꞰL ($src, null, __PN`xsd:boolean`)
				else {
					const match = (RX͢($ꝛ`^(?:(${ STRING_LITERAL_LONG_SINGLE_QUOTE }|${ STRING_LITERAL_LONG_QUOTE })|(${ STRING_LITERAL_QUOTE }|${ STRING_LITERAL_SINGLE_QUOTE }))(?:(?:${ $WHITESPACE })(?:(${ LANGTAG })|\^\^(?:${ $WHITESPACE })(${ IRIREF }|${ PNAME_LN }|${ PNAME_NS })))?$`, "u").exec($src))
					if ( match ) {
						const
							$ꝺꞆ = match[4]
							, ñꝞ = ((match[2] || "").slice(1, -1)
								|| (match[1] || "").slice(3, -3))
								.replace(/\\[tbnrf\x22\x27\x5C]/gu, $ => (
									{ "\\t": "\t"
									, "\\b": "\b"
									, "\\n": "\n"
									, "\\r": "\r"
									, "\\f": "\f"
									, "\\\x22": "\x22"
									, "\\\x27": "\x27"
									, "\\\x5C": "\x5C" }[$])).replace(
									/\\(?:U([0-9A-Fa-f]{8})|u([0-9A-Fa-f]{4}))/g,
									(N, Ⅰ, Ⅱ) => S͢.fromCodePoint(parseInt(Ⅰ || Ⅱ, 0x10)))
							, ɫᵹ = (match[3] || "")[ẞ](1)
							, ꝺꞆℹ = $ꝺꞆ == Ꝋ ? __PN`xsd:string` : ꞇObj.call(this, $ꝺꞆ)
						return new ꞰL (ñꝞ, ɫᵹ, ꝺꞆℹ) }
					else throw ꞆƐ͢(l10n`INVALID_NODE${ "RDF Turtle" }${ $ }`) } }
		, ꞇꞇl = function fromTurtle ( $, ...$s ) { // make Graph from RDF Turtle string or template
			const
				$WHITESPACE = $ꝛ`(?:${ WS }|#(?:(?!${ EOL })[^])*)*`
				, $src = typeof $ == "string" ? $ : $[𝒫]("raw") ? S͢.raw($, ...$s) : S͢($)
				, $ꝯ = this == Ꝋ || this.context == Ꝋ ? Ꝋ : this.context
				, bidM = { }
				, directive = RX͢($ꝛ`@prefix(?:${ $WHITESPACE })(?:${ PNAME_NS })(?:${ $WHITESPACE })(?:${ IRIREF })(?:${ $WHITESPACE })\.|@base(?:${ $WHITESPACE })(?:${ IRIREF })|[Pp][Rr][Ee][Ff][Ii][Xx](?:${ $WHITESPACE })(?:${ PNAME_NS })(?:${ $WHITESPACE })(?:${ IRIREF })|[Bb][Aa][Ss][Ee](?:${ $WHITESPACE })(?:${ IRIREF })`, "uy")
				, whitespace = RX͢($WHITESPACE, "uy")
				, ꝯ = $ꝯ == Ꝋ ? { } : O͢.keys($ꝯ).reduce((ꝯ, px) => ꝯ[px] = $ꝯ[px], { })
				, ꝯſꝸ = ꝯſꝸr.bind(
					{ get ndx ( ) { return ꝟndx }
					, set ndx ( $ ) { ꝟndx = $ }
					, ñ: "RDF Turtle"
					, src: $src })
				, ꝯſꝸDirective = ( ) => {
					const sparql = $src[ꝟndx] != "@"
					if ( !sparql ) ꝯſꝸ("@")
					if ( $src[ꝟndx].toUpperCase() == "P" ) {
						ꝯſꝸ(/prefix/iuy)
						ꝯſꝸ(whitespace)
						const px = ꝯſꝸ(RX͢(PNAME_NS, "uy")).slice(0, -1)
						ꝯſꝸ(whitespace)
						ꝯ[px] = ꝯſꝸT()
						if ( !sparql ) {
							ꝯſꝸ(whitespace)
							ꝯſꝸ(".") } }
					else {
						ꝯſꝸ(/base/iuy)
						ꝯſꝸ(whitespace)
						ꝟbℹ = ꝯſꝸT()
						if ( !sparql ) {
							ꝯſꝸ(whitespace)
							ꝯſꝸ(".") } } }
				, ꝯſꝸPObjs = ( ) => {
					let $ꝟcontinue = 1
					while ( $ꝟcontinue ) {
						const p = (( ) => {
							try { return ꝯſꝸT() }
							catch ( ɛ ) {
								try {
									ꝯſꝸ("a")
									return __PN`rdf:type`
								}
								catch ( ɛ ) {
									throw ꞆƐ͢(l10n`TTL_INVALID_TERM${ ꝟndx }`) } } })()
						let ꝟcontinue = 1
						if ( !(p instanceof ꞰÑN) ) throw ꞆƐ͢(l10n`TTL_UNNAMED_PREDICATE${ ꝟndx }`)
						ꝯſꝸ(whitespace)
						while ( ꝟcontinue ) {
							const obj = ꝯſꝸT()
							ꝿ.add(new Ʞ3 (ꝟsbj, p, obj))
							try { ꝯſꝸ(RX͢($ꝛ`${ $WHITESPACE },${ $WHITESPACE }`, "uy")) }
							catch ( ɛ ) { ꝟcontinue = 0 } }
						try { ꝯſꝸ(RX͢($ꝛ`(${ $WHITESPACE };${ $WHITESPACE })+`, "uy")) }
						catch ( ɛ ) { $ꝟcontinue = 0 }
						if ( ".]".includes($src[ꝟndx]) ) $ꝟcontinue = 0 } }
				, ꝯſꝸT = ( ) => {
					const
						$matcher =
							[ RX͢($ꝛ`${ IRIREF }|${ PNAME_LN }|${ PNAME_NS }`, "uy")
							, RX͢($ꝛ`${ BLANK_NODE_LABEL }|${ ANON }`, "uy")
							, RX͢($ꝛ`(?:${ STRING_LITERAL_LONG_SINGLE_QUOTE }|${ STRING_LITERAL_LONG_QUOTE }|${ STRING_LITERAL_QUOTE }|${ STRING_LITERAL_SINGLE_QUOTE })(?:(?:${ $WHITESPACE })(?:${ LANGTAG }|\^\^(?:${ $WHITESPACE })(?:${ IRIREF }|${ PNAME_LN }|${ PNAME_NS })))?`, "uy")
							, RX͢($ꝛ`${ DOUBLE }|${ DECIMAL }|${ INTEGER }`, "uy")
							, RX͢($ꝛ`true|false`, "uy") ].find($ => {
								$.lastIndex = ꝟndx
								return $.test($src) })
						, $ndx = $matcher == Ꝋ ? Ꝋ : $matcher.lastIndex
					if ( $ndx != Ꝋ ) {
						const
							$n = ꞇObj.call(
								{ baseURI: ꝟbℹ, context: ꝯ },
								$src[ẞ](ꝟndx, ꝟndx = $ndx))
							, ñꝞ = $n.nominalValue
						return $n instanceof ꞰBN ? ñꝞ == "" ? new ꞰBN (++ꝟbid)
								: bidM[𝒫](ñꝞ) ? new ꞰBN (bidM[ñꝞ])
								: new ꞰBN (bidM[ñꝞ] = ++ꝟbid)
							: $n }
					else if ( $src[ꝟndx] == "(" ) {
						ꝯſꝸ("(")
						ꝯſꝸ(whitespace)
						const c = [ ]
						try {
							while ( 1 ) {
								c.push(ꝯſꝸT())
								ꝯſꝸ(whitespace) } }
						catch ( ɛ ) { }
						ꝯſꝸ(")")
						return new ꞰBNC (c, ++ꝟbid) }
					else if ( $src[ꝟndx] == "[" ) {
						ꝯſꝸ("[")
						ꝯſꝸ(whitespace)
						const sbj = ꝟsbj
						const n = ꝟsbj = new ꞰBN (++ꝟbid)
						ꝯſꝸPObjs()
						ꝟsbj = sbj
						ꝯſꝸ(whitespace)
						ꝯſꝸ("]")
						return n }
					else throw ꞆƐ͢(l10n`TTL_INVALID_TERM${ ꝟndx }`) }
				, ꝯſꝸTriples = ( ) => {
					const anon = RX͢(ANON, "uy")
					anon.lastIndex = ꝟndx
					if ( $src[ꝟndx] == "[" && !anon.test($src) ) {
						ꝟsbj = ꝯſꝸT()
						ꝯſꝸ(whitespace)
						if ( $src[ꝟndx] != "." ) {
							ꝯſꝸPObjs()
							ꝯſꝸ(whitespace) }
						ꝯſꝸ(".") }
					else {
						const sbj = ꝯſꝸT()
						if ( sbj instanceof ꞰBNC ) ꝿ.addAll(sbj.graph)
						else if ( sbj instanceof ꞰL )
							throw ꞆƐ͢(l10n`TTL_LITERAL_SUBJECT${ ꝟndx }`)
						ꝟsbj = sbj
						ꝯſꝸ(whitespace)
						ꝯſꝸPObjs()
						ꝯſꝸ(whitespace)
						ꝯſꝸ(".") } }
				, ꝿ = new ꞰꝾ
			let
				ꝟbℹ = this == Ꝋ || this.baseURI == Ꝋ ? Ꝋ : this.baseURI
				, ꝟbid = 0
				, ꝟndx = 0
				, ꝟsbj
			ꝯſꝸ(whitespace)
			for ( directive.lastIndex = ꝟndx ; ꝟndx < $src[Ɫ] ; directive.lastIndex = ꝟndx ) {
				directive.test($src) ? ꝯſꝸDirective() : ꝯſꝸTriples()
				ꝯſꝸ(whitespace) }
			return ꝿ }
		, 𝒫 = "hasOwnProperty"
		, ꞰT = class Term { // Provided by RDF/JS
			constructor ( iÑ ) {
				return $℘s(this,
					{ termType: { [ꝴ]: 1, [Ꝟ]: S͢(iÑ) }
					, value: { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: "" } }) }
			static get [Symbol.species] ( ) { return this }
			[Symbol.toPrimitive] ( hint ) { return S͢(this.value) }
			get [Symbol.toStringTag] ( ) { return S͢(this.termType) }
			clone ( ) {
				if ( this == Ꝋ ) return Ꝋ
				else {
					const tꞆ = S͢(this.termType)
					return ["BlankNode", "Literal", "NamedNode", "RDFNode"]
						.indexOf(tꞆ) >= 0
						? ꞰRDFN[Ꝕ].clone.call(this)
						: O͢.create(ꝯﬆʞ.call(this, ꞰRDFN)[Ꝕ],
							{ termType: { [ꝴ]: 1, [Ꝟ]: S͢(tꞆ) }
							, value: { [ꝴ]: 1, [Ꝟ]: S͢(this.value) } }) } }
			equals ( other ) { return other != Ꝋ && hasꞆ.call(other, S͢(this.termType)) }
			toString ( ) { return S͢(this.value) } }
		, ꞰRDFN = class RDFNode extends ꞰT { // Provided by RDF Interfaces
			constructor ( interfaceName ) {
				super(interfaceName)
				return $℘s(this, {
					interfaceName: { [ꝴ]: 1, [Ꝟ]: S͢(interfaceName) }
					, nominalValue: { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: null }
					, value: { [Ꝯ]: 0, get ( ) {
						const ñꝞ = this.nominalValue
						return ñꝞ == Ꝋ ? "" : S͢(ñꝞ) } } }) }
			get [Symbol.toStringTag] ( ) { return S͢(this.interfaceName) }
			[Symbol.toPrimitive] ( hint ) { return ꞰRDFN[Ꝕ].toString.call(this) }
			clone ( ) {
				if ( this == Ꝋ ) return Ꝋ
				else {
					const
						$iÑ = this.interfaceName
						, $ñꝞ = this.nominalValue
						, iÑ = S͢($iÑ === Ꝋ ? this.termType : $iÑ) // intentional ===
						, ñꝞ = S͢($ñꝞ === Ꝋ ? this.value : $ñꝞ) // intentional ===
					return iÑ == "Literal" ? ꞰL[Ꝕ].clone.call(this)
						: iÑ == "BlankNode" && this instanceof Array
						? ꞰBNC[Ꝕ].clone.call(this)
						: O͢.create(ꝯﬆʞ.call(this, ꞰRDFN)[Ꝕ],
							{ interfaceName: { [ꝴ]: 1, [Ꝟ]: iÑ }
							, nominalValue: { [ꝴ]: 1, [Ꝟ]: ñꝞ }
							, termType: { [ꝴ]: 1, [Ꝟ]: iÑ }
							, value: { [Ꝯ]: 0, get ( ) {
								const ñꝞ = this.nominalValue
								return ñꝞ == Ꝋ ? "" : S͢(ñꝞ) } } }) } }
			equals ( toCompare ) {
				if (toCompare != Ꝋ && typeof toCompare == "object") {
					const n = ꞰRDFN[Ꝕ].clone.call(toCompare)
					return S͢(this.interfaceName) == n.interfaceName
						&& S͢(this.nominalValue) == n.nominalValue
						&& (S͢(this.interfaceName) != "Literal"
							|| S͢(this.language) == n.language
							&& S͢(this.datatype) == n.datatype) }
				else return toCompare === ꞰRDFN[Ꝕ].valueOf.call(this) }
			toNT ( ) { return hasꞆ.call(this, "NamedNode") ? ꞰÑN[Ꝕ].toNT.call(this)
				: hasꞆ.call(this, "Literal") ? ꞰL[Ꝕ].toNT.call(this)
				: hasꞆ.call(this, "BlankNode") ? ꞰBN[Ꝕ].toNT.call(this)
				: null }
			toString ( ) { return hasꞆ.call(this, "BlankNode") ? `_:${ this.nominalValue }`
				: S͢(this.nominalValue) }
			toTurtle ( ) { return hasꞆ.call(this, "NamedNode") ? ꞰÑN[Ꝕ].toTurtle.call(this)
				: hasꞆ.call(this, "Literal") ? ꞰL[Ꝕ].toTurtle.call(this)
				: hasꞆ.call(this, "BlankNode") ? ꞰBN[Ꝕ].toTurtle.call(this)
				: null }
			valueOf ( ) { return hasꞆ.call(this, "Literal") ? ꞰL[Ꝕ].valueOf.call(this) : S͢(this.nominalValue) } }
		, ꞰÑN = class NamedNode extends ꞰRDFN { // Provided by RDF/JS and RDF Interfaces
			constructor ( value ) {
				const $ℹ = S͢(value)
				if ( /(?![-:\x2F?#\[\]@!$&\x27()*+,;=0-9A-Za-z._~\xA0-\uD7FF\uE000-\uFDCF\uFDF0-\uFFEF\u{10000}-\u{1FFFD}\u{20000}-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}\u{50000}-\u{5FFFD}\u{60000}-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}\u{90000}-\u{9FFFD}\u{A0000}-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}\u{D0000}-\u{DFFFD}\u{E0000}-\u{EFFFD}\u{F0000}-\u{FFFFD}\u{100000}-\u{10FFFD}]|%[0-9A-Fa-f]{2})[^]/u.test( $ℹ ) )
					throw ꞆƐ͢(l10n`NAMED_NODE_IRI_ERROR`)
				try { new URL ($ℹ) }
				catch ( ɛ ) { throw ꞆƐ͢(l10n`NAMED_NODE_IRI_ERROR`) }
				super("NamedNode")
				return $℘(this, "nominalValue", { [Ꝯ]: 0, [Ꝟ]: $ℹ }) }
			doc ( ) {
				const
					ñꝞ = S͢(this.value)
					, _ndx = ñꝞ.indexOf("#")
				return new (ꝯﬆʞ.call(this, ꞰÑN)) (_ndx < 0 ? ñꝞ : ñꝞ[ẞ](0, _ndx)) }
			dir ( ) {
				const
					ñꝞ = S͢(this.value)
					, matcher = /[^#]+\x2F/uy
				return new (ꝯﬆʞ.call(this, ꞰÑN)) (matcher.test(ñꝞ)
					? ñꝞ[ẞ](0, matcher.lastIndex)
					: ñꝞ) }
			equals ( other ) {
				const n = ꞰT[Ꝕ].clone.call(other)
				return ꞰT[Ꝕ].equals.call(this, n) && S͢(this.value) == n.value }
			id ( ) {
				const
					ñꝞ = S͢(this.value)
					, _ndx = ñꝞ.indexOf("#")
				return _ndx != -1 ? ñꝞ[ẞ](_ndx + 1) : null }
			toNT ( ) { return `<${ S͢[Ꝕ].replace.call(this.nominalValue, />/g, "\u003E") }>` }
			toTurtle ( ) { return ꞰÑN[Ꝕ].toNT.call(this) } }
		, ꞰBN = class BlankNode extends ꞰRDFN { // Provided by RDF/JS and RDF Interfaces
			constructor ( value ) {
				super("BlankNode")
				return $℘(this, "nominalValue", { [Ꝯ]: 0, [Ꝟ]:
					hasꞆ.call(value, "BlankNode") ? (( ) => {
						const ñꝞ = this.nominalValue
						return S͢(ñꝞ == Ꝋ ? this.value : ñꝞ) })() : S͢(value) }) }
			equals ( other ) {
				return ꞰT[Ꝕ].equals.call(this, other) && S͢(this.value) == other.value }
			toNT ( ) { return `_:${ this.nominalValue }` }
			toTurtle ( ) { return ꞰBN[Ꝕ].toNT.call(this) } }
		, ꞰBNC = class BlankNodeCollection extends $℘(Array, $ϕ, { [Ꝟ]: Array }) {
			constructor ( iterator, bid ) {
				if ( iterator == Ꝋ ) return __PN`rdf:nil`
				else if ( typeof iterator == "number" )
					if ( iterator > 0 ) super(iterator) // Array species support
					else return __PN`rdf:nil`
				else {
					const c = A͢(iterator)
					if ( c[Ɫ] > 0 ) super(...c)
					else return __PN`rdf:nil` }
				return $℘s(this,
					{ graph: { [ꝴ]: 1, get ( ) {
						const
							$iterator = this[Symbol.iterator]()
							, first = $iterator.next().value
							, rest = new ꞰBNC ($iterator, `${ bid }.rest`)
							, ꝿ = new ꞰꝾ
						if ( first != Ꝋ ) ꝿ.addResource((new ꞰR (this))
							.addPredicate(__PN`rdf:first`, first)
							.addPredicate(__PN`rdf:rest`, rest))
						return ꝿ } }
					, interfaceName: { [ꝴ]: 1, [Ꝟ]: "BlankNode" }
					, nominalValue: { [ꝴ]: 1, [Ꝟ]: S͢(bid) }
					, termType: { [ꝴ]: 1, [Ꝟ]: "BlankNode" }
					, triples: { [ꝴ]: 1, get ( ) {
						const
							$iterator = this[Symbol.iterator]()
							, first = $iterator.next().value
							, rest = new ꞰBNC ($iterator, `${ bid }.rest`)
							, ꝵ = [ ]
						if ( first != Ꝋ ) {
							ꝵ.push(new Ʞ3 (this, __PN`rdf:first`, first))
							ꝵ.push(new Ʞ3 (this, __PN`rdf:rest`, rest))
							if ( first instanceof ꞰBNC ) ꝵ.splice(Infinity, 0, ...first.triples) }
						return rest instanceof ꞰBNC ? ꝵ.concat(rest.triples) : ꝵ } }
					, value: { [ꝴ]: 1, get ( ) {
						const ñꝞ = this.nominalValue
						return ñꝞ == Ꝋ ? "" : S͢(ñꝞ) } } }) }
			clone ( ) {
				if ( this == Ꝋ ) return Ꝋ
				else {
					const $ñꝞ = this.nominalValue
					return new (ꝯﬆʞ.call(this, ꞰBNC)) (this, S͢($ñꝞ === Ꝋ ? this.value : $ñꝞ)) } }
			equals ( other ) {
				return ꞰT[Ꝕ].equals.call(this, other) && S͢(this.value) == other.value }
			toNT ( ) { return ꞰBN[Ꝕ].toNT.call(this) }
			toString ( ) { return ꞰBN[Ꝕ].toString.call(this) }
			toTurtle ( ) { return ꞰBN[Ꝕ].toTurtle.call(this) } }
		, ꞰL = class Literal extends ꞰRDFN { // Provided by RDF/JS and RDF Interfaces
			constructor ( value, language, datatype ) {
				const
					ꝺꞆℹ = new ꞰÑN (datatype == Ꝋ
						? value.datatype == Ꝋ ? __PN`xsd:string` : value.datatype
						: datatype)
					, ɫᵹ = S͢(language == Ꝋ
						? value.language == Ꝋ ? "" : value.language
						: language).toLowerCase()
				super("Literal")
				return $℘s(this,
					{ datatype: { [ꝴ]: 1, [Ꝟ]: ɫᵹ ? __PN`rdf:langString` : ꝺꞆℹ }
					, language: { [ꝴ]: 1, [Ꝟ]: ɫᵹ }
					, nominalValue: { [Ꝯ]: 0, [Ꝟ]: S͢(value) } }) }
			[Symbol.toPrimitive] ( hint ) { // get native primitive type
				const
					ꝺꞆ = S͢(this.datatype)
					, usedHint = ["number", "string"].indexOf(hint) < 0 ? "default" : hint
					, ñꝞ = S͢(this.nominalValue)
				return ["number", "default"].indexOf(usedHint) >= 0
					? [ __PNS`xsd:decimal`
					, __PNS`xsd:integer`
					, __PNS`xsd:long`
					, __PNS`xsd:int`
					, __PNS`xsd:short`
					, __PNS`xsd:byte`
					, __PNS`xsd:nonNegativeInteger`
					, __PNS`xsd:positiveInteger`
					, __PNS`xsd:unsignedLong`
					, __PNS`xsd:unsignedInt`
					, __PNS`xsd:unsignedShort`
					, __PNS`xsd:unsignedByte`
					, __PNS`xsd:nonPositiveInteger`
					, __PNS`xsd:negativeInteger` ].indexOf( ꝺꞆ ) >= 0
						? +ñꝞ
						: ꝺꞆ == __PNS`xsd:float` || ꝺꞆ == __PNS`xsd:double`
						? ñꝞ == "+INF" || ñꝞ == "INF"
							? Infinity
							: ñꝞ == "-INF"
							? -Infinity
							: +ñꝞ
						: usedHint == "default" && ꝺꞆ == __PN`xsd:boolean`
						? !(ñꝞ == "false" || ñꝞ == "0")
						: ñꝞ
					: ñꝞ }
			clone ( ) {
				if ( this == Ꝋ ) return Ꝋ
				else {
					const ɫᵹ = S͢(this.language == Ꝋ ? "" : this.language).toLowerCase()
					return O͢.create(ꝯﬆʞ.call(this, ꞰL)[Ꝕ],
						{ datatype: { [ꝴ]: 1, [Ꝟ]: ɫᵹ ? __PN`rdf:langString` : new ꞰÑN (this.datatype) }
						, interfaceName: { [ꝴ]: 1, [Ꝟ]: "Literal" }
						, language: { [ꝴ]: 1, [Ꝟ]: ɫᵹ }
						, nominalValue: { [ꝴ]: 1, [Ꝟ]: S͢(this.nominalValue) }
						, termType: { [ꝴ]: 1, [Ꝟ]: "Literal" }
						, value: { [Ꝯ]: 0, get ( ) {
							const ñꝞ = this.nominalValue
							return ñꝞ == Ꝋ ? "" : S͢(ñꝞ) } } }) } }
			equals ( other ) { return ꞰT[Ꝕ].equals.call(this, other)
				&& this.value === other.value
				&& this.language === other.language
				&& this.datatype.equals(other.datatype) }
			toNT ( ) {
				const ɫᵹ = this.language
				return typeof ɫᵹ == "string" && ɫᵹ != ""
					? `"${ turtify(S͢(this.nominalValue)) }"@${ ɫᵹ }`
					: `"${ turtify(S͢(this.nominalValue)) }"^^${ new ꞰÑN (this.datatype).toNT() }` }
			toTurtle ( ) { // get RDF Turtle
				const
					ꝺꞆ = S͢(this.datatype)
					, ñꝞ = S͢(this.nominalValue)
				return ꝺꞆ == __PNS`xsd:integer`
					? ñꝞ
					: ꝺꞆ == __PNS`xsd:decimal`
					? ñꝞ.includes(".") ? ñꝞ : `${ ñꝞ }.0`
					: ꝺꞆ == __PNS`xsd:double`
					&& [ "INF", "+INF", "-INF", "NaN" ].indexOf(ñꝞ) < 0
					? /e/i.test(ñꝞ) ? ñꝞ: `${ ñꝞ }e1`
					: ꝺꞆ == __PNS`xsd:boolean`
					? ñꝞ == "true" || ñꝞ == "1" ? "true" : "false"
					: ꞰL[Ꝕ].toNT.call(this) }
			valueOf ( scope ) { // get native type
				const
					ꝺꞆ = S͢(this.datatype)
					, ñꝞ = S͢(this.nominalValue)
				if ( ꝺꞆ == __PNS`xsd:anyURI` )
					return new URL (ñꝞ)
				else if ( ꝺꞆ == __PNS`xsd:base64Binary` )
					try {
						const $atob = scope == Ꝋ ? atob : scope.atob
						bStr = (typeof $atob != "function" ? atob : $atob)(ñꝞ)
						return A͢[Ꝕ].reduce.call(bStr, ( view, char, ndx ) =>
							(view.setUint16(ndx * 2, char.charCodeAt(0)), view),
							new DataView (new ArrayBuffer (bStr[Ɫ] * 2))).buffer }
					catch ( ɛ ) { return this[Symbol.toPrimitive]("default") }
				else if ( ꝺꞆ == __PNS`xsd:hexBinary` )
					return Uint8Array.from(ñꝞ.split(/(?=(?:[^]{2})*$)/),
						pair => parseInt(pair, 16)).buffer
				// TK: XML and HTML literals
				else if ( ꝺꞆ == __PNS`rdf:XMLLiteral` )
					try {
						const $document = scope == Ꝋ ? document : scope.document
						}
					catch ( ɛ ) { return this[Symbol.toPrimitive]("default") }
				else if ( ꝺꞆ == __PNS`rdf:HTML` )
					try {
						const $document = scope == Ꝋ ? document : scope.document
						}
					catch ( ɛ ) { return this[Symbol.toPrimitive]("default") }
				// TK: Dates
				else return this[Symbol.toPrimitive]("default") } }
		, ꞰV = class Variable extends ꞰT { // Provided by RDF/JS
			constructor ( value ) {
				super("Variable")
				return $℘(this, "value", { [Ꝯ]: 0, [Ꝟ]: S͢(value) }) }
			equals ( other ) {
				return ꞰT[Ꝕ].equals.call(this, other) && this.value === other.value } }
		, ꞰDG = class DefaultGraph extends ꞰT { // Provided by RDF/JS
			constructor ( ) {
				super("DefaultGraph")
				return $℘(this, "value", { [Ꝯ]: 0, [Ꝟ]: "" }) }
			equals ( other ) { return ꞰT[Ꝕ].equals.call(this, other) } }
		, Ʞ4 = class Quad {
			constructor ( subject, predicate, object, graph ) {
				const
					gr = ["DefaultGraph", "NamedNode", "BlankNode", "Variable"]
						.some(tꞆ => hasꞆ.call(graph, tꞆ))
						? ꞰT[Ꝕ].clone.call(graph)
						: new ꞰV (graph)
					, obj = ["NamedNode", "Literal", "BlankNode", "Variable"]
						.some(tꞆ => hasꞆ.call(object, tꞆ))
						? ꞰT[Ꝕ].clone.call(object)
						: new ꞰV (object)
					, p = ["NamedNode", "Variable"]
						.some(tꞆ => hasꞆ.call(predicate, tꞆ))
						? ꞰT[Ꝕ].clone.call(predicate)
						: new ꞰV (predicate)
					, sbj = ["NamedNode", "BlankNode", "Variable"]
						.some(tꞆ => hasꞆ.call(subject, tꞆ))
						? ꞰT[Ꝕ].clone.call(subject)
						: new ꞰV (subject)
				return $℘s(this,
					{ graph: { [ꝴ]: 1, [Ꝟ]: gr }
					, object: { [ꝴ]: 1, [Ꝟ]: obj }
					, predicate: { [ꝴ]: 1, [Ꝟ]: p }
					, subject: { [ꝴ]: 1, [Ꝟ]: sbj } }) }
			static get [Symbol.species] ( ) { return this }
			clone ( ) {
				if ( this == Ꝋ ) return Ꝋ
				else {
					const gr = this.graph
					return O͢.create(ꝯﬆʞ.call(this,
						gr == Ꝋ || hasꞆ.call(gr, "DefaultGraph") ? Ʞ3 : Ʞ4)[Ꝕ],
						{ graph: { [ꝴ]: 1, [Ꝟ]: ꞰT[Ꝕ].clone.call(this.graph) }
						, object: { [ꝴ]: 1, [Ꝟ]: ꞰT[Ꝕ].clone.call(this.object) }
						, predicate: { [ꝴ]: 1, [Ꝟ]: ꞰT[Ꝕ].clone.call(this.predicate) }
						, subject: { [ꝴ]: 1, [Ꝟ]: ꞰT[Ꝕ].clone.call(this.subject) } }) } }
			equals ( other ) {
				return other != Ꝋ
					&& this.subject.equals(other.subject)
					&& this.predicate.equals(other.predicate)
					&& this.object.equals(other.object)
					&& this.graph.equals(other.graph) }
			toNQ ( ) {
				const gr = this.graph
				return gr == Ꝋ || hasꞆ.call(gr, "DefaultGraph") ? Ʞ3[Ꝕ].toNT.call(this)
				: `${ this.subject.toNT() } ${ this.predicate.toNT() } ${ this.object.toNT() } ${ this.graph.toNT() } .` }
			toString ( ) { return S͢(this.toNQ()) } }
		, Ʞ3 = class Triple extends Ʞ4 {
			constructor ( subject, predicate, object ) {
				super(subject, predicate, object, new ꞰDG) }
			equals ( other ) {
				return other != Ꝋ
					&& this.subject.equals(other.subject)
					&& this.predicate.equals(other.predicate)
					&& this.object.equals(other.object) }
			toNT ( ) { return `${ this.subject.toNT() } ${ this.predicate.toNT() } ${ this.object.toNT() } .` }
			toString ( ) { return S͢(this.toNT()) } }
		, ꞰꝹF = class DataFactory {
			constructor ( ) {
				let ꝟbid = 0
				$℘(this, "blankNode", { [Ꝟ]: value => {
					if (Number.isInteger(+value)) ꝟbid = +value + 1
					return ꞰꝹF[Ꝕ].blankNode(value == Ꝋ ? ++ꝟbid : value) } }) }
			blankNode ( value ) { return new ꞰBN (value) }
			defaultGraph ( ) { return new ꞰDG }
			fromQuad ( original ) { return Ʞ4[Ꝕ].clone.call(original) }
			fromTerm ( original ) { return ꞰT[Ꝕ].clone.call(original) }
			literal ( value, languageOrDatatype ) {
				return typeof languageOrDatatype == "string"
				? new ꞰL (value, languageOrDatatype)
				: new ꞰL (value, null, languageOrDatatype) }
			namedNode ( value ) { return new ꞰÑN (value) }
			quad ( subject, predicate, object, graph ) {
				return new Ʞ4 (subject, predicate, object, graph == Ꝋ ? new ꞰDG : graph) } }
		, ꞰR = class Resource { // subject node with predicate+object pairs
			constructor ( subject ) {
				const
					sbj = nSbj(subject)
					, ꝺ = { }
				return $℘s(this,
					{ addPredicate: { [Ꝟ]: addP.bind(this, ꝺ) }
					, clearPredicate: { [Ꝟ]: clearP.bind(this, ꝺ) }
					, deletePredicate: { [Ꝟ]: deleteP.bind(this, ꝺ) }
					, getPredicate: { [Ꝟ]: getP.bind(this, ꝺ) }
					, graph: { [ꝴ]: 1, get: ( ) => O͢.keys(ꝺ)
						.reduce((ꝿ, $) => ꝿ.add(new Ʞ3 (sbj, new ꞰÑN ($), ꝺ[$])), new ꞰꝾ) }
					, hasPredicate: { [Ꝟ]: hasP.bind(this, ꝺ) }
					, predicates: { [ꝴ]: 1, get: ( ) => O͢.keys(ꝺ)
						.map($ => new ꞰÑN ($))[Symbol.iterator]() }
					, subject: { [ꝴ]: 1, [Ꝟ]: sbj }
					, triples: { [ꝴ]: 1, get: ( ) => O͢.keys(ꝺ).reduce((ꝵ, $) => {
						const $obj = ꝺ[$]
						if ( $obj instanceof Set )
							for ( const obj of $obj ) {
								if ( obj instanceof ꞰBNC )
									ꝵ.splice(Infinity, 0, ...A͢(obj.triples))
								ꝵ.push(new Ʞ3 (sbj, new ꞰÑN ($), obj)) }
						else {
							if ( $obj instanceof ꞰBNC )
								ꝵ.splice(Infinity, 0, ...A͢($obj.triples))
							ꝵ.push(new Ʞ3 (sbj, new ꞰÑN ($), $obj)) }
						return ꝵ }, [ ])[Symbol.iterator]() } }) }
			static get [Symbol.species] ( ) { return this }
			get [Symbol.toStringTag] ( ) { return "Resource" }
			a ( Ꞇ ) { return Ↄ̲.call(this.getPredicate(__PN`rdf:type`), new ꞰÑN (Ꞇ)) }
			addPredicate ( p, obj ) {
				return this[𝒫]("addPredicate") ? this.addPredicate(p, obj) : this }
			clearPredicate ( p, obj ) {
				return this[𝒫]("clearPredicate") ? this.clearPredicate(p, obj) : false }
			clone ( ) {
				if ( this == Ꝋ ) return Ꝋ
				else {
					return A͢(this.predicates).reduce(
						(ꝵ, $) => ꝵ.addPredicate($, this.getPredicate($)),
						new (ꝯﬆʞ.call(this, ꞰR)) (this.subject)) } }
			deletePredicate ( p, obj ) {
				return this[𝒫]("deletePredicate") ? this.deletePredicate(p, obj) : false }
			equals ( other ) { return this.subject.equals(other.subject) }
			getPredicate ( p, obj ) {
				return this[𝒫]("getPredicate") ? this.getPredicate(p, obj) : Ꝋ }
			hasPredicate ( p, obj ) {
				return this[𝒫]("hasPredicate") ? this.hasPredicate(p, obj) : false }
			toString ( ) { `[resource <${ this.name }>]` } }
		, ꞰꝾ = class Graph {
			constructor ( actions ) {
				const
					actns = actions == Ꝋ ? [ ]
						: A͢(actions).map(({ action, test }) => new Ʞ3A (action, test))
					, rsrcM = { }
				return $℘s(this,
					{ actions: { [ꝴ]: 1, get: () =>
						actns.map(({ action, test }) => new Ʞ3A (action, test)) }
					, add: { [Ꝟ]: triple => {
						const { subject, predicate, object } = triple
						add3.call(rsrcM, subject, predicate, object)
						actns.forEach(({ run }) => run(triple, this))
						return this } }
					, addAction: { [Ꝟ]: ( action, run ) => {
						const
							{ $action, $test } = action
							, actn = new Ʞ3A ($action, $test)
						actns.push(actn)
						if ( run ) this.toArray().forEach($3 => actn.run($3, this))
						return this } }
					, getResource: { [Ꝟ]: subject => {
						const sbj = nSbj(subject)
						rsrcM[𝒫](sbj) ? rsrcM[sbj] : Ꝋ } }
					, hasResource: { [Ꝟ]: subject => rsrcM[𝒫](nSbj(subject)) }
					, removeMatches: { [Ꝟ]: ( subject, predicate, object ) =>
						(rmm3.call(rsrcM, subject, predicate, object), this) }
					, resources: { [ꝴ]: 1, get: ( ) => O͢.values(rsrcM).map($ => $.clone())[Symbol.iterator]() }
					, triples: { [ꝴ]: 1, get: ( ) => O͢.values(rsrcM).reduce((ꝵ, $) =>
						ꝵ.concat(A͢($.triples)), [])[Symbol.iterator]() } }) }
			static get [Symbol.species] ( ) { return this }
			add ( triple ) { return this[𝒫]("add") ? this.add(triple) : this }
			addAll ( graph ) {
				graph.toArray().forEach($3 => this.add($3))
				return this }
			addAction ( action, run ) {
				return this[𝒫]("addAction") ? this.addAction(action, run) : this }
			addResource ( resource ) {
				A͢(resource.triples).forEach($3 => this.add($3))
				return this }
			clearResource ( resource ) {
				return this.removeMatches(nSbj(resource), null, null) }
			clone ( ) {
				if ( this == Ꝋ ) return Ꝋ
				else {
					return (new (ꝯﬆʞ.call(this, ꞰꝾ))).addAll(this) } }
			deleteResource ( resource ) {
				A͢(resource.triples).forEach($3 => this.add($3))
				return this }
			every ( callback ) {
				return this.toArray().every($3 => (new Ʞ3F (callback)).test($3)) }
			filter ( callback ) {
				const ꝿ = new (ꝯﬆʞ.call(this, ꞰꝾ))
				this.forEach($3 => { if ( (new Ʞ3F (callback)).test($3) ) ꝿ.add($3) })
				return ꝿ }
			forEach ( callback ) {
				return this.toArray().forEach($3 => (new Ʞ3C (callback)).run($3, this)) }
			getResource ( resource ) {
				return this[𝒫]("getResource") ? this.getResource(resource) : Ꝋ }
			hasResource ( resource ) {
				return this[𝒫]("hasResource") ? this.getResource(resource) : false }
			isomorphic ( other ) { // this is not solvable in polynomial time
				const
					$3s = A͢(other.triples).map($ => $℘(Ʞ3[Ꝕ].clone.call($), "matched",
						{ [Ꝟ]: false, [ꝶ]: 1 }))
					, bidM = { }
					, ðˢ3s = A͢(this.triples).map($ => $℘(Ʞ3[Ꝕ].clone.call($), "matched",
						{ [Ꝟ]: false, [ꝶ]: 1 }))
				for ( const $3 of $3s ) {
					const { subject: $sbj, object: $obj } = $3
					if ( !hasꞆ.call($sbj, "BlankNode") && !hasꞆ.call($obj, "BlankNode") ) {
						const match = ðˢ3s.find(ðˢ3 =>
							ðˢ3.equals(new Ʞ3 ($sbj, $3.predicate, $obj)))
						if ( match == Ꝋ ) return false
						else match.matched = $3.matched = true } }
				const
					$b3s = $3s.filter($ => !$.matched)
					, $bids = A͢($b3s.reduce((ꝵ, { subject: $sbj, object: $obj }) => {
						if ( hasꞆ.call($sbj, "BlankNode") ) ꝵ.add($sbj.value)
						if ( hasꞆ.call($obj, "BlankNode") ) ꝵ.add($obj.value)
						return ꝵ }, new Set))
					, ðˢb3s = ðˢ3s.filter($ => !$.matched)
					, ðˢbids = A͢(ðˢb3s.reduce((ꝵ, { subject: $sbj, object: $obj }) => {
						if ( hasꞆ.call($sbj, "BlankNode") ) ꝵ.add($sbj.value)
						if ( hasꞆ.call($obj, "BlankNode") ) ꝵ.add($obj.value)
						return ꝵ }, new Set))
					, ɫ = ðˢbids[Ɫ]
				if ( ɫ == 0 ) return true
				if ( $bids[Ɫ] != ɫ ) return false
				function* allMEntries ( prefix, abids, bbids ) {
					if ( abids[Ɫ] <= 0 ) yield prefix
					else {
						const abid = abids[0]
						for ( let ꝟndx = 0 ; ꝟndx < bbids[Ɫ] ; ꝟndx++ )
							yield* allMEntries(prefix.concat([ [ abid, bbids[ꝟndx] ] ]),
								abids.slice(1),
								bbids.slice(0, ꝟndx).concat(bbids.slice(ꝟndx + 1))) } }
				tryMap: for ( const mEntries of allMEntries([ ], $bids, ðˢbids) ) {
					const m = new Map (mEntries)
					for ( const $b3 of $b3s ) {
						const
							{ subject: $sbj, object: $obj } = $b3
							, sbj = hasꞆ.call($sbj, "BlankNode")
								? new ꞰBN (m.get($sbj.value))
								: $sbj
							, obj = hasꞆ.call($obj, "BlankNode")
								? new ꞰBN (m.get($obj.value))
								: $obj
							, _match = ðˢb3s.find(ðˢb3 =>
								ðˢb3.equals(new Ʞ3 (sbj, $b3.predicate, obj)))
							if ( _match == Ꝋ ) continue tryMap
							else _match.matched = true }
					const ðˢxb3s = ðˢb3s.filter($ => !$.matched) // possible duplicates in this
					for ( const ðˢxb3 of ðˢxb3s ) {
						if ( !ðˢxb3s.some($ => $.matched && $.equals(ðˢxb3)) )
							return false }
					return true }
				return false }
			match ( subject, predicate, object, limit ) {
				const ꝿ = new ꝯﬆʞ.call(this, ꞰꝾ)
				let ꝟcnt = 0
				return this.toArray().forEach($3 => {
					if ( (limit == Ꝋ || limit == 0 || limit >= ++ꝟcnt)
						&& (subject === null || $3.equals(subject))
						&& (predicate == null || $3.equals(predicate))
						&& (object == null || $3.equals(object)) ) ꝿ.add($3) }) }
			merge ( graph ) { return ꞰꝾ[Ꝕ].clone.call(this).addAll(graph) }
			remove ( triple ) {
				const { subject, predicate, object } = triple
				return this.removeMatches(subject, predicate, object) }
			removeMatches ( subject, predicate, object ) {
				return this[𝒫]("removeMatches")
				? this.removeMatches(subject, predicate, object)
				: false }
			some ( callback ) {
				return this.toArray().some($3 => (new TripleFilter (callback)).test($3)) }
			toArray ( ) { return A͢(this.triples) }
			toNT ( ) {
				return A͢(this.triples)
					.map(Function[Ꝕ].call.bind(Ʞ3[Ꝕ].toNT))
					.join("\n") }
			toString ( ) { return this.toNT() } }
		, ꞰꝾV = class GraphView {
			constructor ( graph, subject ) {
				const ꝿ = graph instanceof Graph ? graph : (new ꞰꝾ).addAll(graph)
				return $℘s(this,
					{ graph: { [ꝴ]: 1, [Ꝟ]: ꝿ }
					, resource: { [ꝴ]: 1, [Ꝟ]: ꞰꝾ[Ꝕ].getResource.bind(ꝿ, nSbj(subject)) } }) }
			view ( predicate ) {
				const rsrc = this.resource
				return rsrc == Ꝋ ? new Set : new Set (A͢(rsrc.getPredicate(predicate))
					.filter($ => ["BlankNode", "NamedNode"].indexOf($.termType) >= 0)
					.map($ => new ꞰꝾV (this.graph, $))) } }
		, Ʞ3F = class TripleFilter { // cannot modify passed triple
			constructor ( test ) {
				const $tester = test.test
				return $℘(this, "test", { [ꝴ]: 1, [Ꝟ]: triple =>
					!!($tester != Ꝋ ? $tester(Ʞ3[Ꝕ].clone.call(triple))
						: test(Ʞ3[Ꝕ].clone.call(triple))) }) } }
		, Ʞ3C = class TripleCallback { // cannot modify passed triple, but can modify graph
			constructor ( run ) {
				const $runner = run.run
				return $℘(this, "run", { [ꝴ]: 1, [Ꝟ]: ( triple, graph ) =>
					$runner != Ꝋ ? $runner(Ʞ3[Ꝕ].clone.call(triple), graph)
						: run(Ʞ3[Ꝕ].clone.call(triple), graph) }) } }
		, Ʞ3A = class TripleAction {
			constructor ( test, action ) {
				const
					$action = new TripleCallback (action)
					, $test = new TripleFilter (test)
				return $℘s(this,
					{ action: { [ꝴ]: 1, get: ( ) => $action }
					, test: { [ꝴ]: 1, get: ( ) => $test } }) }
			run ( triple, graph ) { if ( this.test(triple) ) this.action(triple, graph) } }
		, ꞰPXM = class PrefixMap {
			addAll ( prefixes, override ) {
				O͢.keys(prefixes).forEach($ => {
					if ( override || !this[𝒫]($) )
						$℘(this, $, { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: prefixes[$], [ꝶ]: 1 }) })
				return this }
			get ( prefix ) { return this[prefix] }
			remove ( prefix ) { delete this[prefix] }
			resolve ( curie ) { return pxÑ.call(this, curie) }
			set ( prefix, iri ) { this[prefix] = iri }
			setDefault ( iri ) { this[""] = iri }
			shrink ( iri ) { // use turtify instead
				const
					$ñꝞ = S͢($)
					, px = O͢.keys(this).find(px => {
						const xp = this[px]
						return xp == $ñꝞ[ẞ](0, xp[Ɫ]) })
				return px ? `${ px }:${ ñꝞ.substring(this[px].length) }` : ñꝞ } }
		, ꞰTM = class TermMap {
			addAll ( terms, override ) {
				O͢.keys(terms).forEach($ => {
					if ( override || !this[𝒫]($) )
						$℘(this, $, { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: terms[$], [ꝶ]: 1 }) })
				return this }
			get ( term ) { return this[term] }
			remove ( term ) { delete this[term] }
			resolve ( term ) { return this[𝒫](term) ? this[term] : `${ this[""] }term` }
			set ( term, iri ) { this[term] = iri }
			setDefault ( iri ) { this[""] = iri }
			shrink ( iri ) { return O͢.keys(this).find($ => this[$] == term) || term } }
		, ꞰP = class Profile {
			constructor ( ) {
				return $℘s(this,
					{ prefixes: { [ꝴ]: 1, [Ꝟ]: new ꞰPXM }
					, terms: { [ꝴ]: 1, [Ꝟ]: new ꞰTM } }) }
			importProfile ( profile, override ) {
				this.prefixes.addAll(profile.prefixes, override)
				this.terms.addAll(profile.terms, override)
				return this }
			resolve ( toresolve ) {
				const $ = S͢(toresolve)
				return $.includes(":") ? prefixes.resolve(toresolve) : terms.resolve(toresolve) }
			setDefaultPrefix ( iri ) { prefixes.setDefault(iri) }
			setDefaultVocabulary ( iri ) { terms.setDefault(iri) }
			setPrefix ( prefix, iri ) { prefixes.set(prefix, iri) }
			setTerm ( term, iri ) { terms.set(term, iri) } }
		, ꞰRDFENV = class RDFEnvironment extends ꞰP {
			constructor ( ) {
				const $ꝯ = ꞰCX.context
				super()
				this.prefixes.addAll($ꝯ == Ꝋ ? _ꝯ : $ꝯ)
				return $℘(this, "dataFactory", { [ꝴ]: 1, [Ꝟ]: new ꞰꝹF }) }
			createAction ( test, action ) { return new Ʞ3A (test, action) }
			createBlankNode ( ) { return this.dataFactory.blankNode() }
			createGraph ( triples ) {
				const ꝵ = new ꞰꝾ
				if ( triples != Ꝋ ) triples.forEach(ꞰꝾ[Ꝕ].add.bind(ꝵ))
				return ꝵ }
			createLiteral ( value, language, datatype ) {
				return new ꞰL (value, language, datatype) }
			createNamedNode ( value ) { return new ꞰÑN (value) }
			createPrefixMap ( empty ) {
				const ꝵ = new ꞰPXM
				if ( !empty ) ꝵ.addAll(this)
				return ꝵ }
			createProfile ( empty ) {
				const ꝵ = new ꞰP
				if ( !empty ) ꝵ.importProfile(this)
				return ꝵ }
			createTermMap ( empty ) {
				const ꝵ = new ꞰTM
				if ( !empty ) ꝵ.addAll(this)
				return ꝵ }
			createTriple ( subject, predicate, object ) {
				try { return new Ʞ3 (subject, predicate, object) }
				catch ( ɛ ) { return null } } }
		, ꞰCX = class Codex extends ꞰꝾV { // codex resource
			constructor ( graph, subject ) {
				super(graph, subject) }
			toHTML ( doc ) { // get HTML text
				const html = htm4ÐˢDoc.bind(doc == Ꝋ ? document : doc)
				return html`${
					{ localName: "div"
					, attributes: { "class": "CODEX" }
					, content: html`${ this.makeLabel( doc ) }` } }` } }
		, _ꝯ = Object.freeze(
			{ as: ℹ`https://www.w3.org/ns/activitystreams#`
			, cc: ℹ`http://creativecommons.org/ns#`
			, csvw: ℹ`http://www.w3.org/ns/csvw#`
			, ctag: ℹ`http://commontag.org/ns#`
			, dc: ℹ`http://purl.org/dc/terms/`
			, dc11: ℹ`http://purl.org/dc/elements/1.1/`
			, dcat: ℹ`http://www.w3.org/ns/dcat#`
			, dcterms: ℹ`http://purl.org/dc/terms/`
			, dqv: ℹ`http://www.w3.org/ns/dqv#`
			, duv: ℹ`http://www.w3.org/ns/duv#`
			, earl: ℹ`http://www.w3.org/ns/earl#`
			, foaf: ℹ`http://xmlns.com/foaf/0.1/`
			, gr: ℹ`http://purl.org/goodrelations/v1#`
			, grddl: ℹ`http://www.w3.org/2003/g/data-view#`
			, ical: ℹ`http://www.w3.org/2002/12/cal/icaltzd#`
			, ldp: ℹ`http://www.w3.org/ns/ldp#`
			, ma: ℹ`http://www.w3.org/ns/ma-ont#`
			, oa: ℹ`http://www.w3.org/ns/oa#`
			, og: ℹ`http://ogp.me/ns#`
			, ordl: ℹ`http://www.w3.org/ns/ordl/2/`
			, org: ℹ`http://www.w3.org/ns/org#`
			, owl: ℹ`http://www.w3.org/2002/07/owl#`
			, prov: ℹ`http://www.w3.org/ns/prov#`
			, qb: ℹ`http://purl.org/linked-data/cube#`
			, rdf: ℹ`http://www.w3.org/1999/02/22-rdf-syntax-ns#`
			, rdfa: ℹ`http://www.w3.org/ns/rdfa#`
			, rdfs: ℹ`http://www.w3.org/2000/01/rdf-schema#`
			, rev: ℹ`http://purl.org/stuff/rev#`
			, rif: ℹ`http://www.w3.org/2007/rif#`
			, rr: ℹ`http://www.w3.org/ns/r2rml#`
			, schema: ℹ`http://schema.org/`
			, sd: ℹ`http://www.w3.org/ns/sparql-service-description#`
			, sioc: ℹ`http://rdfs.org/sioc/ns#`
			, skos: ℹ`http://www.w3.org/2004/02/skos/core#`
			, skosxl: ℹ`http://www.w3.org/2008/05/skos-xl#`
			, ssn: ℹ`http://www.w3.org/ns/ssn/`
			, sosa: ℹ`http://www.w3.org/ns/sosa/`
			, time: ℹ`http://www.w3.org/ns/time#`
			, v: ℹ`http://rdf.data-vocabulary.org/#`
			, vcard: ℹ`http://www.w3.org/2006/vcard/ns#`
			, void: ℹ`http://rdfs.org/ns/void#`
			, wdr: ℹ`http://www.w3.org/2007/05/powder#`
			, wdrs: ℹ`http://www.w3.org/2007/05/powder-s#`
			, xhv: ℹ`http://www.w3.org/1999/xhtml/vocab#`
			, xml: ℹ`http://www.w3.org/XML/1998/namespace`
			, xsd: ℹ`http://www.w3.org/2001/XMLSchema#` })
		, __PN = pxÑ.bind(_ꝯ)
		, __PNS = $ => S͢(pxÑ.call(_ꝯ, $))
	return $℘s(ꞰCX,
		{ BlankNode: { [Ꝯ]: 1, [Ꝟ]: phony(ꞰBN) }
		, Codex: { [Ꝯ]: 1, [Ꝟ]: phony(ꞰCX) }
		, DataFactory: { [Ꝯ]: 1, [Ꝟ]: phony(ꞰꝹF) }
		, DefaultGraph: { [Ꝯ]: 1, [Ꝟ]: phony(ꞰDG) }
		, Graph: { [Ꝯ]: 1, [Ꝟ]: $℘s(phony(ꞰꝾ),
			{ baseURI: { [ꝴ]: 1, get: ( ) => ꞰCX.baseURI, set: $ => ꞰCX.baseURI = $ }
			, context: { [ꝴ]: 1, get: ( ) => ꞰCX.context }
			, fromNT: { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: n3 }
			, fromTurtle: { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: ꞇꞇl } }) }
		, GraphView: { [Ꝯ]: 1, [Ꝟ]: phony(ꞰꝾV) }
		, Literal: { [Ꝯ]: 1, [Ꝟ]: phony(ꞰL) }
		, LOCALIZATION_STRINGS: { [Ꝯ]: 1, [Ꝟ]:
			{ BLANK_NODE_ID_ERROR: "Invalid BlankNode identifier."
			, EXPECTED_MATCH_AT: "$1 parser expected a match for $2 at position $3."
			, INVALID_CONSTRUCTOR: "Invalid constructor."
			, INVALID_NODE: "'$2' is not a valid $1 node."
			, KICO: "Kico"
			, KICO_LONG: "KIBI Codices"
			, KICO_VERSION: "1.01"
			, NAMED_NODE_IRI_ERROR: "NamedNode must have a valid IRI name."
			, NONEXTENSIBLE_ADD_PREDICATE: "Cannot add predicate: Object is not extensible."
			, PNAME_EXPANSION_ERROR: "Prefix $1 did not resolve to a valid IRI."
			, PNAME_UNDEFINED: "Prefix $1 was not defined."
			, PNAME_SYNTAX_ERROR: "Prefixed name $1 does not match Turtle syntax."
			, REQUIRES_NEW: "Constructor $1 requires 'new'."
			, SEALED_CLEAR_PREDICATE: "Cannot clear predicate: Object is sealed."
			, SEALED_DELETE_PREDICATE: "Cannot delete predicate: Object is sealed."
			, TTL_LITERAL_SUBJECT: "RDF Turtle parser received a literal for a subject at position $1."
			, TTL_UNNAMED_PREDICATE: "RDF Turtle parser received a predicate at position $1 which is not a named node."
			, TTL_INVALID_TERM: "RDF Turtle parser expected a term at position $1, but none was found." } }
		, NamedNode: { [Ꝯ]: 1, [Ꝟ]: phony(ꞰÑN) }
		, PrefixMap: { [Ꝯ]: 1, [Ꝟ]: phony(ꞰPXM) }
		, Profile: { [Ꝯ]: 1, [Ꝟ]: phony(ꞰP) }
		, Quad: { [Ꝯ]: 1, [Ꝟ]: phony(Ʞ4) }
		, Resource: { [Ꝯ]: 1, [Ꝟ]: $℘s(ꞰR,
			{ baseURI: { [ꝴ]: 1, get: ( ) => ꞰCX.baseURI, set: $ => ꞰCX.baseURI = $ }
			, context: { [ꝴ]: 1, get: ( ) => ꞰCX.context }
			, fromNT: { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: function fromNT ( $, ...$s ) {
				return n3.call(this, $, ...$s).resources } }
			, fromTurtle: { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: function fromNT ( $, ...$s ) {
				return ꞇꞇl.call(this, $, ...$s).resources } } }) }
		, RDFEnvironment: { [Ꝯ]: 1, [Ꝟ]: ꞰRDFENV }
		, RDFNode: { [Ꝯ]: 1, [Ꝟ]: $℘s(ꞰRDFN,
			{ baseURI: { [ꝴ]: 1, get: ( ) => ꞰCX.baseURI, set: $ => ꞰCX.baseURI = $ }
			, context: { [ꝴ]: 1, get: ( ) => ꞰCX.context }
			, fromNT: { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: n3Obj }
			, fromTurtle: { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: ꞇObj }
			, fromValue: { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: nObj } }) }
		, Term: { [Ꝯ]: 1, [Ꝟ]: phony(ꞰT) }
		, TermMap: { [Ꝯ]: 1, [Ꝟ]: phony(ꞰTM) }
		, Triple: { [Ꝯ]: 1, [Ꝟ]: phony(Ʞ3) }
		, TripleAction: { [Ꝯ]: 1, [Ꝟ]: phony(Ʞ3A) }
		, TripleCallback: { [Ꝯ]: 1, [Ꝟ]: phony(Ʞ3C) }
		, TripleFilter: { [Ꝯ]: 1, [Ꝟ]: phony(Ʞ3F) }
		, Variable: { [Ꝯ]: 1, [Ꝟ]: phony(ꞰV) }
		, baseURI: { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: null, [ꝶ]: 1 }
		, context: { [Ꝯ]: 1, [ꝴ]: 1, [Ꝟ]: _ꝯ }
		, fromNT: { [Ꝯ]: 1, [Ꝟ]: fromNT }
		, fromTurtle: { [Ꝯ]: 1, [Ꝟ]: fromTurtle }
		, l10n: { [Ꝯ]: 1, [Ꝟ]: l10n }
		, prefixedName: { [Ꝯ]: 1, [Ꝟ]: pxÑ }
		, turtify: { [Ꝯ]: 1, [Ꝟ]: turtify } }) })()
