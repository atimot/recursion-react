import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Cardコンポーネントの型定義
interface CardProps {
    children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="card">
            <h3>Card</h3>
            {children}
        </div>
    )
}

// Profileコンポーネントの型定義
interface ProfileProps {
    person: Person;
}
const Profile: React.FC<ProfileProps> = ({ person }) => {
    return (
        <>
            <p>name : {person.name}</p>
            <p>age : {person.age}</p>
            <p>sex : {person.sex}</p>
            <p>profession : {person.profession}</p>
        </>
    )
}

// Titleコンポーネントの型定義
interface TitleProps {
    text: string;
}
const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <h1 className="title">
            {text}
        </h1>
    )
}

// Peopleのデータ型定義
interface Person {
    name: string;
    age: number;
    sex: string;
    profession: string;
}
const people: Person[] = [
    {
        'name': 'daichi',
        'age': 25,
        'sex': 'men',
        'profession': 'engineer'
    },
    {
        'name': 'rika',
        'age': 25,
        'sex': 'women',
        'profession': 'engineer'
    }
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Title text={"Profile Card"} />
        <div className="container">
            {people.map(person => (
                <Card key={person.name}>
                    <Profile person={person}/>
                </Card>
            ))}
        </div>
    </>
)