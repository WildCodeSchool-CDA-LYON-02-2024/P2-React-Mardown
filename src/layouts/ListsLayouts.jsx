import { Button } from "../components/Button.jsx";
import {useState} from "react";
import '../assets/lists.layout.css';
/**
 * This layout return unordered or ordered list
 */
export function ListsLayouts({mdRef, markdown, setMarkdown}) {
    const [activeList, setActiveList] = useState(false);
    const [nbOrdered, setNbOrdered] = useState(1);
    const isEmptyMarkdown = () => markdown === '';
    const handleListChange = (e) => {
        console.log(e);
        isEmptyMarkdown() ? setMarkdown(e) : setMarkdown(markdown + '\n' + e);
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
                            <Button label="Ordered" onClick={ () => {
                                setNbOrdered(nbOrdered + 1);
                                handleListChange(nbOrdered + '. ')
                            } }/>
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    );
}