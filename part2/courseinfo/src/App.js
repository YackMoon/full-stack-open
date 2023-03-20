const Header = ({ name }) => {
    console.log('Header component ',name)
    return (
        <h1>{name}</h1>
    )
}

const Part = ({ part, exercises }) => {
    return (
        <p>{part} {exercises}</p>
    )
}

const Content = ({ parts }) => {
    console.log('Content component ',parts)
    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
        </div>
    )
}

const Total = ({ parts }) => {
    console.log('Total component ', parts)
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <h2>Number of exercises {total}</h2>
    )
}

const Course = ({ course }) => {
    console.log('Course component ',course)
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return <Course course={course} />
}


export default App;
