function Option ({ props , id}) {
  return (
    <>
      <option value={props} key={id}>{props}</option>
    </>
  )
}
export default Option