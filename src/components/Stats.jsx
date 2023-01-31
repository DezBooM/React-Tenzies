function Stats({ roll, time }) {
  return (
    <li className="text-xl first:text-[#FFD700] even:text-[#c0c0c5] last:text-[#cd7f32]">
      {roll} rolls, {time.m >= 10 ? time.m : "0" + time.m}:
      {time.s >= 10 ? time.s : "0" + time.s}:
      {time.ms >= 10 ? time.ms : "0" + time.ms}
    </li>
  )
}

export default Stats
