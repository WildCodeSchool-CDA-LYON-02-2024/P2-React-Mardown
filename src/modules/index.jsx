const arrayMarkdown = [
    {
        id: 1,
        val: '#',
        htmlElement: '<h1>'
    },
    {
        id: 1,
        val: '#',
        htmlElement: '<h1>'
    },
    {
        id: 2,
        val: '##',
        htmlElement: '<h2>'
    },
    {
        id: 3,
        val: '###',
        htmlElement: '<h3>'
    },
    {
        id: 4,
        val: '####',
        htmlElement: '<h3>'
    },
    {
        id: 5,
        val: '#####',
        htmlElement: '<h3>'
    },
    {
        id: 6,
        val: '######',
        htmlElement: '<h3>'
    }
];

export const verifyNullContent = content => content !== null;
export const runMarkdown = content => {
    for(let i = 0; i <= content.length; i++) {
        for (let i = 0; i <= arrayMarkdown.length; i++) {
            if(new RegExp(`/${arrayMarkdown[i].val}/`).test(content[i])) {
                console.log(content[i]);
            }
        }
    }
}