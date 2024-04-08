import { useState } from "react"
import { categories } from "../data/categories"

export default function Form() {
    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0
    })

  return (
    <form
        className="space-y-5 bg-white shadow p-10 rounded-md"
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoría:</label>
            <select 
                className="border border-slate-300 p-2 rounded-md w-full bg-white"
                id="category"
                value={activity.category}
            >
                {categories.map(category => (
                    <option 
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Actividad:</label>
            <input 
                id="name"
                type="text"
                className="border border-slate-300 p-2 rounded-md"
                placeholder="Ej. Comida, Jugo de Naranja, Ejercicio, Ensalada, etc..."
                value={activity.name}
            />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorias:</label>
            <input 
                type="number"
                id="calories"
                className="border border-slate-300 p-2 rounded-md"
                placeholder="Ej. 300 o 500"
                value={activity.calories}
            />
        </div>

        <input
            type="submit"
            className="bg-gray-800 text-white w-full p-4 font-bold uppercase cursor-pointer"
            value="Guardar comida o guardar ejercicio"
        />
    </form>
  )
}