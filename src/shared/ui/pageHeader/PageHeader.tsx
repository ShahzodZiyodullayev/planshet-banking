import { Box, Button, Divider, Flex, Space, Title } from "@mantine/core";
import React from "react";

interface PageHeaderProps {
  title: string;
  buttonName?: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, buttonName }) => {
  return (
    <Box>
      <Flex
        mih={50}
        w="100%"
        gap="md"
        justify="space-between"
        align="center"
        wrap="wrap">
        <Title order={3}>{title}</Title>
        <Button variant="filled" color="red">
          {buttonName}
        </Button>
      </Flex>
      <Divider />
    </Box>
  );
};

export default PageHeader;
