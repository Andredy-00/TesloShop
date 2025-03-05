import { ProductGrid, Title } from "@/components";
import { Category } from "@/components/interfaces";
import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;

interface PageProps {
  params: Promise<{
    id: Category;
  }>;
}

export default async function CategoryIdPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  if (!["men", "women", "kid", "unisex"].includes(id)) {
    return <div>Error: Invalid Category</div>;
  }

  const products = seedProducts.filter(product => product.gender === id);

  const labels: Record<Category, string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "Unisex"
  };

  return (
    <>
      <Title
        title={`Artículos para ${labels[id as Category]}`}
        subtiitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
