const free = "bg-rose-200 text-neutral-900"
const hold = "bg-neutral-900 text-rose-200 shadow-inset"

function Die({ value, isHeld, handleClick }) {
  const style = isHeld ? hold : free

  return (
    <div
      className={`cursor-pointer mt-4 text-4xl w-12 h-12 flex justify-center items-center shadow-custom rounded-md ${style}`}
      onClick={handleClick}
    >
      {value}
    </div>
  )
}

export default Die
