interface CategoryProps {
  category: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ category }) => {
  return <li>{category}</li>;
};
export default CategoryCard;
