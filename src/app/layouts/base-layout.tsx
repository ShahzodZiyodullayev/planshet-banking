import {Container} from "@mantine/core";
import {Outlet} from "react-router-dom";

const BaseLayout = () => {
    return (
        <Container size="lg">
            <Outlet/>
        </Container>
    )
}
export default BaseLayout
