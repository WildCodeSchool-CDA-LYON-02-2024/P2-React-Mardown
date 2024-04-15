import { useState } from "react";

function FormComponent({theme, toggleTheme}) {
    const [backgroundColor, setBackgroundColor] = useState(theme.backgroundColor);
    const [textColor, setTextColor] = useState(theme.textColor);
    const [linkColor, setLinkColor] = useState(theme.linkColor);
    const [codeBackgroundColor, setCodeBackgroundColor] = useState(theme.codeBackgroundColor);
    const onChangeData = (e) => {
        e.preventDefault();
        toggleTheme({
            backgroundColor: backgroundColor,
            textColor: textColor,
            linkColor: linkColor,
            codeBackgroundColor: codeBackgroundColor,
        })
    };
    return (
        <form onSubmit={onChangeData}>
            <input type="text" name="backgroundColor" placeholder="backgroundColor"
                   onChange={(e) => setBackgroundColor(e.target.value)}/>
            <input type="text" name="textColor" placeholder="textColor"
                   onChange={(e) => setTextColor(e.target.value)}/>
            <input type="text" name="linkColor" placeholder="linkColor"
                   onChange={(e) => setLinkColor(e.target.value)}/>
            <input type="text" name="codeBackgroundColor" placeholder="codeBackgroundColor"
                   onChange={(e) => setCodeBackgroundColor(e.target.value)}/>
            <input type="submit" value="Valider"/>
        </form>
    );
}

export default FormComponent;