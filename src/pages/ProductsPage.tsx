import { Container, Heading, HStack } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { store } from "../data/products";

export function ProductsPage() {
  return (
    <>
      <HStack p={4} borderBottom="1px solid" borderColor="gray.300">
        <Heading size="lg" fontWeight="bold">
          {store.title}
        </Heading>
      </HStack>
      <Container>
        {store.products.map((p) => (
          <ProductCard
            id={p.id}
            key={p.title}
            imgUrl={p.imgUrl}
            title={p.title}
            price={p.price}
            category={p.category}
          />
        ))}
      </Container>
    </>
  );
}
