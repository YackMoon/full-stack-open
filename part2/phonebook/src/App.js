import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Jack Young',
            id: 1
        }
    ])
    const [newName, setNewName] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            id: persons.length + 1,
        }

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(personObject))
            setNewName('')
        }
    }

        const handlePersonChange = (event) => {
            setNewName(event.target.value)
        }

        return (
            <div>
                <h2>Phonebook</h2>
                <form onSubmit={addPerson}>
                    <div>
                        name: <input
                            value={newName}
                            onChange={handlePersonChange} />
                    </div>
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
                <h2>Numbers</h2>
                <ul>
                    {persons.map(person => <li key={person.name}>{person.name}</li>)}
                </ul>
            </div>
        )
    }

    export default App