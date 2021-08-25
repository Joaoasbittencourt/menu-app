import { Container, Heading, HStack, Text, Box, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { store } from "../data/products";

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const selectedProduct = store.products.find(
    (product) => product.id === parseInt(id)
  );
  return (
    <Container>
      <Image
        width="600px"
        backgroundPosition="center center"
        src={selectedProduct?.imgUrl}
      />
      <Heading size="lg" fontWeight="bold">
        {selectedProduct?.title}
      </Heading>
      <Text>{selectedProduct?.price}</Text>
    </Container>
  );
}
