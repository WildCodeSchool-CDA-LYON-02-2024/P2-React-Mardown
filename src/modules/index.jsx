const arrayMarkdown = [
    /** TITLE */
    {
        val: '#',
        child: null,
        htmlElement: '<h1>'
    },
    {
        val: '##',
        startHtmlElement: '<h2>',
        child: null,
        endHtmlElement: '</h2>'
    },
    {
        val: '###',
        startHtmlElement: '<h3>',
        child: null,
        endHtmlElement: '</h3>'
    },
    {
        val: '####',
        startHtmlElement: '<h4>',
        child: null,
        endHtmlElement: '</h4>'
    },
    {
        val: '#####',
        startHtmlElement: '<h5>',
        child: null,
        endHtmlElement: '</h5>'
    },
    {
        val: '######',
        startHtmlElement: '<h6>',
        child: null,
        endHtmlElement: '</h6>'
    },
    /** LISTS */
    {
        val: '-',
        startHtmlElement: '<ul>',
        child: [{
            startHtmlElement: '<li>',
            endHtmlElement: '</li>'
        }],
        endHtmlElement: '</ul>'
    },
    {
        val: '[0-9]',
        startHtmlElement: '<ol>',
        child: [{
            startHtmlElement: '<li>',
            endHtmlElement: '</li>'
        }],
        endHtmlElement: '</ol>'
    }
];

export const verifyNullContent = content => content !== null;
export function createList(mdArray, value, elements) {
    return {mdArray, value, elements};
}
export const runMarkdown = content => {
    let j = 0;
    let elements = [];
    for(let i = 0; i <= content.length; i++) {
        do{
            if(new RegExp(arrayMarkdown[j].val).test(content[i])) {
                console.log(content[i]);
                if(arrayMarkdown[j].htmlElement !== '<ul>' || arrayMarkdown[j].htmlElement !== '<ol>')
                    elements.push({
                        start: arrayMarkdown[j].startHtmlElement,
                        val: content[i],
                        end: arrayMarkdown[j].endHtmlElement
                    })
                else
                    createList(arrayMarkdown, content[i], elements);
            }
            j += 1;
        } while(j <= arrayMarkdown.length);
    }
    return elements;
}