import { RingLoader } from "react-spinners"

const classes = {
    display: "block",
    margin: "100px auto"
}

const Spinner = ( {loading} ) => {
  return (
    <RingLoader 
    color="#324ea8"
    loading={loading}
    cssOverride={classes}
    size={100}
    />
  )
}

export default Spinner