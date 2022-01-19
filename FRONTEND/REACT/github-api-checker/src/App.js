

export const App = () => {
    const [selectedUser, setSelectedUser] = useState<string | null>(null)
    return <div className={s.container}>
        <div>
            <div>
                <input placeholder="search" /> <button>find</button>
            </div>
            <ul>
                { ['Dimych', 'Artem']
                    .map(u => <li className={selectedUser === u ? s.selected : ''} onClick={() => { document.title = u }}>
                        {u}
                    </li>) }
            </ul>
        </div>
    </div>
}

export default App;
