import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, Box } from "@chakra-ui/react";
import 'react-dropzone-uploader/dist/styles.css';
import { useDropzone } from 'react-dropzone';
import { PiImagesSquare } from 'react-icons/pi';

interface ModalAnexarImagensProps {
    isOpen: boolean;
    onClose: () => void;
    files: File[];
    onFileChange: (newFiles: File[]) => void;
}

export function ModalAnexarImagens({ isOpen, onClose, files, onFileChange }: ModalAnexarImagensProps) {
    const onDrop = (acceptedFiles: File[]) => {
        const newFiles = [...files, ...acceptedFiles];
        onFileChange(newFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const removeFile = (index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        onFileChange(newFiles);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={'2xl'}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader
                    display={'flex'}
                    flexDir={'row'}
                >
                    <PiImagesSquare size={30} />
                    Upload de Imagens
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div {...getRootProps()} style={{ border: '2px dashed #eaeaea', borderRadius: '4px', padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
                        <input {...getInputProps()} />
                        <p>Arraste e solte as imagens aqui ou clique para selecionar</p>
                    </div>
                    <br />
                    {files.map((file, index) => (
                        <Box
                            key={index}
                            display={'flex'}
                            flexDir={'row'}
                            alignItems={'center'}
                            gap={2}
                            p={2}
                            mb={2}
                            borderRadius={'base'}
                            border={'1px solid #49479d'}
                        >
                            <span>{file.name}</span>
                            <Button
                                size={'sm'}
                                colorScheme='red'
                                borderRadius={'100'}
                                onClick={() => removeFile(index)}
                            >
                                Remover
                            </Button>
                        </Box>
                    ))}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
