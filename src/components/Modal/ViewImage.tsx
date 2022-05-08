import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay opacity="0.5" />
      <ModalContent
        bgColor="pGray.900"
        display="flex"
        alignItems="center"
        width="auto"
        height="auto"
        maxHeight="600px"
        maxWidth="900px"
      >
        <ModalBody padding="0" width="100%" height="100%">
          <Image
            src={imgUrl}
            width="100%"
            height="100%"
            maxHeight="600px"
            maxWidth="900px"
          />
        </ModalBody>
        <ModalFooter
          backgroundColor="pGray.800"
          width="100%"
          justifyContent="flex-start"
          fontSize="14px"
          color="pGray.50"
        >
          <Link href={imgUrl} target="_blank">
            <a>Abrir original</a>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
