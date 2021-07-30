import React from 'react'
import { CoolButtonActive } from '../../Home/styles'

const CoolBoxActive = ({idx, text, all, setAll, active, setActive}) => {

    const active2all = () => {
        /* remove selected box.*/
        let newActive = active.slice()
        newActive.splice(idx, 1)
        setActive(newActive)
        /* add box to all. */
        let newAll = all.slice()
        newAll.push(text);
        setAll(newAll)
    }
    return (
        <CoolButtonActive onClick={active2all}>{text}</CoolButtonActive>
    )

}

export default CoolBoxActive