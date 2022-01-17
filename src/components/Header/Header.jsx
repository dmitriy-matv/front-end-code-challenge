import classes from "./Header.module.scss"

export const Header = ({ name }) => {
  return (
    <header className={classes.wrapper}>
      {/* <div className={classes.name_wrapper}><h1 className={classes.title}>Rehash Code Challange</h1></div> */}
      <h1 className={classes.title}>Rehash Code Challange</h1>
      <h2 className={classes.name}>{name}</h2>
    </header>
  )
}