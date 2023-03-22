const Persons = ({ persons, toggleDeletePerson }) => {
    return (
        <ul>
            {persons.map(person =>
            <li key={person.name}>{person.name} {person.number}
                <button onClick={() => toggleDeletePerson(person.id)}>delete</button>
            </li>)}
        </ul>
    )
}

export default Persons