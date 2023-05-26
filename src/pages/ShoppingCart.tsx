import Input from "../components/Input";
import { ChangeEvent, useEffect, useState } from "react";
import styles from "./ShoppingCart.module.css";
import { doc, getDoc } from "firebase/firestore";
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

  const setUserFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
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
        } else {
          console.log("User document not found");
        }
      } catch (error) {
        console.error("Error retrieving products: ", error);
      }
    };

    getProducts();
  }, []);
  const submitHandle = () => {};
  const handleQuantityChange = (quantity: number) => {};
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
            />
          ))}
        </section>
      </div>

      <span>Total price:</span>
      <SubmitButton />
    </form>
  );
};
export default ShoppingCart;
