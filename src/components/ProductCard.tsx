import AddToCartButton from "./AddToCartButton";
import styles from "./ProductCard.module.css";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export interface ProductCardProp {
  src: string;
  title: string;
  price: number;
  quantity?: number;
}

const ProductCard: React.FC<ProductCardProp> = ({ src, title, price }) => {
  const clickHandler = async (title: string, src: string, price: number) => {
    const userRef = doc(db, "users", "user1");

    try {
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const productsData: Record<string, ProductCardProp> = userData.products;
        if (productsData.hasOwnProperty(title)) {
          const productToUpdate = productsData[title];
          const newQuantity = productToUpdate.quantity
            ? productToUpdate.quantity + 1
            : 1;
          productToUpdate.quantity = newQuantity;

          const updatedProductsData = {
            ...productsData,
            [title]: productToUpdate,
          };

          await updateDoc(userRef, { products: updatedProductsData });
        } else {
          await updateDoc(userRef, {
            products: {
              ...productsData,
              [title]: { src, title, price, quantity: 1 },
            },
          });
        }
      } else {
        await setDoc(userRef, {
          name: "",
          email: "",
          phone: "",
          address: "",
          products: {
            [title]: { src, title, price, quantity: 1 },
          },
        });
      }
      alert("Product added successfully or quantity updated");
    } catch (error) {
      console.error("Error adding/updating product: ", error);
    }
  };
  const MAX_TITLE_SIZE = 40;
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={src} />
      </div>
      <h3>
        {title.length > MAX_TITLE_SIZE
          ? title.slice(0, MAX_TITLE_SIZE) + "..."
          : title}
      </h3>
      <div className={styles.cardDetails}>
        <span> {price} &#8372;</span>
        <AddToCartButton clickHandler={() => clickHandler(title, src, price)} />
      </div>
    </div>
  );
};
export default ProductCard;
