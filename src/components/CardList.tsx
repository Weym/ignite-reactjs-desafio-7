import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageURL, setImageURL] = useState('');

  function handleViewImage(url: string) {
    setImageURL(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing="40px" maxWidth="960px">
        {cards.map(card => {
          const { id, url } = card;

          return (
            <Card key={id} viewImage={() => handleViewImage(url)} data={card} />
          );
        })}
      </SimpleGrid>
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imageURL} />
    </>
  );
}
