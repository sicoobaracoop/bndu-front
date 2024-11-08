import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    isCurrent?: boolean;
    number: number;
    onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent = false, number, onPageChange }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                borderRadius={'100'}
                fontSize={"xs"}
                width="4"
                bg="purple.900"
                color={"white"}
                _hover={{
                    bg: "purple.950",
                }}
                _disabled={{
                    bgColor: 'blue.400',
                    cursor: 'default'
                }}>
                {number}
            </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize={"xs"}
            width="4"
            bg="gray.50"
            _hover={{
                bgColor: 'gray.100',
            }}
            onClick={() => onPageChange(number)}
        >
            {number}
        </Button>
    )
}