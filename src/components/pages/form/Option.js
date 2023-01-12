function Option ({ props, key}) {
  return (
    <>
      <option value={props} key={key} >{props}</option>
    </>
  )
}
export default Option