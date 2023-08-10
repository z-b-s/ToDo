export default function InputField({text, handleInput, handleSubmit}) {
  return (
    <label className="flex justify-center gap-4">
      <input className="bg-inherit p-2 border-2 rounded-lg text-[#F6F8E2] border-[#9CCD62] outline-none w-96" type="text" value={text} onChange={(e) => handleInput(e.target.value)} />
      <button className="p-2 border-2 rounded-lg border-[#9CCD62] text-[#F6F8E2]" onClick={handleSubmit}>Add Todo</button>
    </label>
  )
}