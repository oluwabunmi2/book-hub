
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import { Book } from '../hooks/useBooks';
import getCroppedImageUrl from '../services/image-url';
import PlatformIconList from './PlatformIconList';

interface Props {
  book: Book;
}

const BookCard: React.FC<Props> = ({ book }) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(book.background_image)} alt={book.name} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={book.parent_platforms?.map((p) => p.platform)} />
        </HStack>
        <Heading fontSize="2xl">
          {book.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default BookCard;
