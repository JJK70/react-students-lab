const Student = (props) => {
  return (
    <div>
      <h1>
        {props.student.name}
      </h1>
      <h2>
        {props.student.bio}
      </h2>

        )}
    </div>
  )
}

export default Student