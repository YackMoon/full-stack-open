const Header = ({ name }) => {
    console.log('Header component ', name)
    return (
        <h2>{name}</h2>
    )
}

const Part = ({ part, exercises }) => {
    console.log('part', part, 'exercises', exercises)
    return (
        <p>{part} {exercises}</p>
    )
}

const Content = ({ parts }) => {
    console.log('Content component ', parts)
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
        <h3>total of {total} exercises</h3>
    )
}

const Course = ({ course }) => {
    console.log('Course component ', course)
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course => <Course key={course.id} course={course} />)}
        </div>
    )
}


export default App;