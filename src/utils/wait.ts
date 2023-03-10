const wait = async (delay = 1000) =>
  await new Promise((res) => {
    setTimeout(() => res(true), delay)
  })

export default wait
