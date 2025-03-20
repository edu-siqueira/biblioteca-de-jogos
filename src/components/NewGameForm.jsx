import PropTypes from "prop-types"
import { useState } from "react"
import TextInput from "./TextInput"

NewGameForm.PropTypes = {
    addGame: PropTypes.func
}

export default function NewGameForm({ addGame }) {
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({title, cover})
        setTitle('')
        setCover('')
    }

    return (
        <form onSubmit={handleSubmit}>
        <TextInput id='title' value={title} setValue={setTitle} label='Titulo: ' />
        <TextInput id='cover' value={cover} setValue={setCover} label='Capa: ' />
        <button type="submit">Adicionar a Biblioteca</button>
      </form>
    )
}