import mealsImg from '../../assets/meals.jpeg';
import classes from './Header.module.css';
import CartButton from './HeaderCartButton';
const HeaderComponent = props => {
  return (
    <>
      <header className={classes.header}>
        <h1>Restoran</h1>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="Food image" />
      </div>
    </>
  );
};
export default HeaderComponent;
