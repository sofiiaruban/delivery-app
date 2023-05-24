import { Product } from "../AppRouter";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  category: string | Product;
  clickHandler: React.MouseEventHandler<HTMLLIElement>;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  clickHandler,
}) => {
  const categoryText = category.toString();

  return (
    <li className={styles.listItem} onClick={clickHandler}>
      {categoryText}
    </li>
  );
};
export default CategoryCard;
