import ProductCard from './ProductCard';
import EmptyState from '../common/EmptyState';

export default function ProductGrid({
  products = [],
  onResetFilters,
  emptyTitle = 'No Products Found',
  emptyDescription = 'Try adjusting your search query or selecting a different category.',
}) {
  if (!products || products.length === 0) {
    return (
      <div className="py-12">
        <EmptyState
          title={emptyTitle}
          description={emptyDescription}
          onClear={onResetFilters}
          clearLabel="View All Products"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
