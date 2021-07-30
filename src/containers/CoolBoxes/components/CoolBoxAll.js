import React from 'react'
import { CoolButtonAll } from '../../Home/styles'

const CoolBoxAll = ({idx, text, all, setAll, active, setActive}) => {

    const all2active = () => {
        /* remove selected box.*/
        let newAll = all.slice()
        newAll.splice(idx, 1)
        setAll(newAll)
        /* add box to active. */
        let newActive = active.slice()
        newActive.push(text);
        setActive(newActive)
    }
    return (
        <CoolButtonAll onClick={all2active}>{text}</CoolButtonAll>
    )

}

export default CoolBoxAll