function Stats({ roll, time  }) {
  
  return (
    <li className="text-xl">{roll} rolls, {time.m >= 10 ? time.m : "0" + time.m}:
                                          {time.s >= 10 ? time.s : "0" + time.s}:
                                          {time.ms >= 10 ? time.ms : "0" + time.ms}</li>
  )
}

export default Stats