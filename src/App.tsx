import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList";

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
      <header className="py-8 bg-green-600">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-white uppercase font-bold text-2xl">Contador de calorías</h1>
          <button className="px-6 py-3 bg-black text-white uppercase font-bold rounded-md">Reinciar app</button>
        </div>
      </header>

      <section className="bg-green-400">
        <div className="max-w-5xl mx-auto py-20">
          <Form
            dispatch={dispatch}
          />
        </div>
      </section>

      <section className="bg-neutral-100">
        <div className="p-10 mx-auto max-w-4xl">
          <ActivityList
            activities={state.activities}
          />
        </div>
      </section>
    </>
  )
}

export default App
