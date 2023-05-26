import Input from "../components/Input";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./ShoppingCart.module.css";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import OrderedProductCard, {
  OrderedProductCardProps,
} from "../components/OrderedProductCard";
import SubmitButton from "../components/SubmitButton";

const ShoppingCart: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [products, setProducts] = useState<Array<OrderedProductCardProps>>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const setUserFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formData);
  useEffect(() => {
    const userRef = doc(db, "users", "user1");
    const getProducts = async () => {
      try {
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const productsData: Record<string, OrderedProductCardProps> =
            userData.products;
          const productsArray: OrderedProductCardProps[] =
            Object.values(productsData);

          setProducts(productsArray);
          calculateTotalPrice(productsArray);
        } else {
          console.log("User document not found");
        }
      } catch (error) {
        console.error("Error retrieving products: ", error);
      }
    };

    getProducts();
  }, []);

  const calculateTotalPrice = (productsArray: OrderedProductCardProps[]) => {
    const totalPrice = productsArray.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotalPrice(totalPrice);
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const updatedProducts = products.map((product) => {
      if (product.title === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setProducts(updatedProducts);
    calculateTotalPrice(updatedProducts);
  };

  const updateFirebaseQuantity = async (
    productId: string,
    newQuantity: number
  ) => {
    console.log(`Product ID: ${productId}, New Quantity: ${newQuantity}`);

    try {
      const userRef = doc(db, "users", "user1");
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const productsData: OrderedProductCardProps[] = Object.values(
          userData.products
        );

        const updatedProductsData = productsData.map((product) => {
          if (product.title === productId) {
            return { ...product, quantity: newQuantity };
          }
          return product;
        });

        await updateDoc(userRef, { products: updatedProductsData });
      } else {
        console.log("User document not found");
      }
    } catch (error) {
      console.error("Error updating quantity: ", error);
    }
  };

  const submitHandle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userRef = doc(db, "users", "user1");
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        await updateDoc(userRef, {
          formData: formData,
          totalPrice: totalPrice,
        });
        console.log("Form data and total order price updated in Firebase.");
      } else {
        console.log("User document not found");
      }
    } catch (error) {
      console.error("Error updating form data and total order price: ", error);
    }
  };
  return (
    <form className={styles.form} onSubmit={submitHandle}>
      <div>
        <section className={styles.inputInfo}>
          <Input
            inputName="name"
            inputType="text"
            setUserFormData={setUserFormData}
          />
          <Input
            inputName="email"
            inputType="email"
            setUserFormData={setUserFormData}
          />
          <Input
            inputName="phone"
            inputType="tel"
            setUserFormData={setUserFormData}
          />
          <Input
            inputName="address"
            inputType="text"
            setUserFormData={setUserFormData}
          />
        </section>
        <section className={styles.orderedProducts}>
          {products.map((product) => (
            <OrderedProductCard
              key={product.title}
              src={product.src}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
              handleQuantityChange={handleQuantityChange}
              updateFirebaseQuantity={updateFirebaseQuantity}
            />
          ))}
        </section>
      </div>

      <span>Total price: {totalPrice} &#8372;</span>
      <SubmitButton />
    </form>
  );
};
export default ShoppingCart;
