import {useState} from "react";

function App() {
    const [count, setCount] = useState<number>(0);

    return (
        <main>
            <h1>Nur React Template</h1>
            <div>
                <button onClick={() => {
                    return setCount((count) => {
                        return count + 1;
                    });
                }}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
        </main>
    );
}

export {App};
