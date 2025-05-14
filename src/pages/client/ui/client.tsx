import { PageHeader } from "@/shared/ui/pageHeader";
import { Container } from "@mantine/core";

const Client = () => {
  return <Container w={'100%'} px="md" className="border">
  <PageHeader title={"Клиенты"} buttonName={"Добавить"}/>
  </Container>;
};

export default Client;
