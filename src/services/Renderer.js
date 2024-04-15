import { createElement } from "react";
import { joinBase } from "./Helpers";

class Renderer {
    /**
     * TODO:
     *  - Find how to call renderer without out react systems
     *  - Find how to passed markdown to html
     *  - Change hot reload state of html component
     */
    constructor(options = {}) {
        this.elId = 0;
        this.options = options;
        // const { renderer } = options;
        // if (renderer && typeof renderer === 'object') {
        //     Object.entries(renderer).forEach(([key, value]) => {
        //         const rendererName = key;
        //         const rendererFunction = value;

        //         if (!this[rendererName] || rendererName === 'elementId' || typeof rendererFunction !== 'function') {
        //             return;
        //         }

        //         // const originalFunction = this[rendererName];

        //         this[rendererName] = (...args) => {
        //             this.incrementElId();
        //             return rendererFunction.apply(this, args);
        //         }
        //     })
        // }
        this.init();
    }
    init() {
        if (this.options.renderer && typeof renderer === 'object') {
            Object.entries(this.options.renderer).forEach(([key, value]) => {
                const rendererName = key;
                const rendererFunction = value;

                if (!this[rendererName] || rendererName === 'elementId' || typeof rendererFunction !== 'function') {
                    return;
                }

                // const originalFunction = this[rendererName];

                this[rendererName] = (...args) => {
                    this.incrementElId();
                    return rendererFunction.apply(this, args);
                }
            })
        }
    }

    h(el, children = null, props = {}) {
        const elProps = {key: `react-md-${this.elementId}`};

        this.incrementElId();
        return createElement(el, { ...props, ...elProps }, children);
    }

    incrementElId() {
        this.elId += 1;
    }

    get elementId() {
        return this.elId;
    }

    heading(children, level) {
        return this.h(`h${level}`, children);
    }

    paragraph(children) {
        return this.h('p', children);
    }

    link(href, text) {
        const url = joinBase(href, this.options.baseURL);
        const target = this.options.openLinksInNewTab ? '_blank' : null;
        return this.h('a', text, { href: url, target });
    }

    image(src, alt, title = null) {
        const url = joinBase(src, this.options.baseURL);
        return this.h('img', null, { src: url, alt, title });
    }

    codespan(code, lang = null) {
        const className = lang ? `${this.options.langPrefix}${lang}` : null;
        return this.h('code', code, { className });
    }

    code(code, lang) {
        return this.h('pre', this.codespan(code, lang));
    }

    blockquote(children) {
        return this.h('blockquote', children);
    }

    list(children, ordered) {
        return this.h(ordered ? 'ol' : 'ul', children);
    }

    listItem(children) {
        return this.h('li', children);
    }

    checkbox(checked) {
        return this.h('input', null, { type: 'checkbox', disabled: true, checked });
    }

    table(children) {
        return this.h('table', children);
    }

    tableHeader(children) {
        return this.h('thead', children);
    }

    tableBody(children) {
        return this.h('tbody', children)
    }

    tableRow(children) {
        return this.h('tr', children);
    }
    /** 
     * TODO Say how to construct it 
     * | VAL | VAL 2 |
     * |:---:|:-----:|
     * | VAL | VAL 2 |
     */
    tableCell(children, flags) {
        const tag = flags.header ? 'th' : 'td';
        /** TODO how to say if table is called inside markdown ??? */
        return this.h(tag, children, { align: flags.align })
    }

    strong(children) {
        return this.h('strong', children);
    }

    em(children) {
        return this.h('em', children);
    }

    del(children) {
        return this.h('del', children);
    }

    text(text) {
        return text;
    }

    html(html) {
        return html;
    }

    hr() {
        return this.h('hr');
    }

    br() {
        return this.h('br');
    }

}

export default Renderer;