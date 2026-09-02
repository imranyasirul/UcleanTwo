
const Images = ({onClick,source, alt,className}) => {
  return (
    <img onClick={onClick} src={source} alt={alt} className={className}/>
  )
}

export default Images