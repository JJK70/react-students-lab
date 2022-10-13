const Score = (props) => {
  console.log(props)
  return (
    <>
      <h4>Date:{props.score.date}</h4>
      <h3>Score: {props.score.score}</h3>
    </>
  )
}

export default Score