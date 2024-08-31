import React from 'react'
import ReactDOM from 'react-dom/client'
import './index3.css'

interface programmingLanguage {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
}

const programmingLanguages: programmingLanguage[] = [
    {
        id: 1,
        name: "JavaScript",
        description: "JavaScriptです。Webブラウザ上で動きます。",
        imgUrl: "https://recursionist.io/img/feature-1.png",
    },
    {
        id: 2,
        name: "Java",
        description: "Javaです。主に特にクライアント/サーバモデルのWebアプリケーションで使用",
        imgUrl: "https://recursionist.io/img/feature-2.png",
    },
    {
        id: 3,
        name: "Python",
        description: "Pythonです。データサイエンスやウェブ開発、自動化スクリプトなど幅広い用途で使用されます。",
        imgUrl: "https://recursionist.io/img/feature-3.png",
    },
]

const ProgramingCard: React.FC<programmingLanguage> = (props) => {
    const { name, description, imgUrl } = props;

    return (
        <div className='cardContainer'>
            <div className='imgBox'>
                <img src={imgUrl}/>
            </div>
            <div className='programingName'>
                <h2>{name}</h2>
            </div>
            <div className='programingDescription'>
                <p>{description}</p>
            </div>
        </div>
    );
}

const App: React.FC = () => {
    return (
        <div>
            <h1>Programming Languages List</h1>
            <div className='cards'>
                {programmingLanguages.map((info) => (
                    <ProgramingCard
                        key={info.id}
                        {...info}
                    />
                ))}
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)
