import styles from "./CategoryCard.module.css";

interface CategoryProps {
  category: any;
}

const CategoryCard: React.FC<CategoryProps> = ({ category }) => {
  return (
    <li className={styles.listItem} key={category}>
      {category}
    </li>
  );
};
export default CategoryCard;
