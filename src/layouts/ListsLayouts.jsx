import { Button } from "../components/Button.jsx";
import {useState} from "react";
import '../assets/lists.layout.css';
/**
 * This layout return unordered or ordered list
 */
export function ListsLayouts({mdRef, markdown, setMarkdown}) {
    const [activeList, setActiveList] = useState(false);
    const isEmptyMarkdown = () => markdown === '';
    const handleListChange = (e) => {
        console.log(e);
        isEmptyMarkdown() ? setMarkdown(e) : setMarkdown(markdown + '\n\n' + e);
        mdRef?.current.focus();
    }
    return (
        <div className="containerButtonList">
            <Button label="Listes" onClick={ () => setActiveList(!activeList) } />
            {
                activeList
                ?
                    <div className="containerList">
                        <div>
                            <Button label="Unordered" onClick={ () => handleListChange('- ') }/>
                        </div>
                        <div>
                            <Button label="Ordered" onClick={ () => handleListChange('1. ') }/>
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    );
}