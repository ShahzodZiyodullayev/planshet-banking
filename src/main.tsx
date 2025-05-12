import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'

import {Root} from "@/app/Root.tsx";
// import {store} from "@/app/store";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            {/*<Provider store={store}>*/}
            <Root/>
            {/*</Provider>*/}
        </QueryClientProvider>
    </StrictMode>,
)
