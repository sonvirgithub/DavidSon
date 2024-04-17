import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Cart.module.css";
import {  removeItemFromFavorites } from "../../features/user/userSlice";

const  Favorites = () => {
  const {  favorites } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  console.log(favorites, "favorites");
  
  const removeItem = (id) => {
    dispatch(removeItemFromFavorites(id))
  }
  
  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your favorites</h2>
      {!favorites.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {favorites.map((item) => {
              const { title, category, images, price, id, quantity } = item;

              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{category.name}</div>
                  </div>
                  <div className={styles.price}>{price}$</div>
                  <div className={styles.quantity}>

                  </div>

                  <div className={styles.total}>{price * quantity}$</div>
                  <div className={styles.close} onClick={()=>removeItem(item.id)}>
                    <svg className="icon">
                      <use
                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

        </>
      )}
    </section>
  );
};

export default Favorites;
