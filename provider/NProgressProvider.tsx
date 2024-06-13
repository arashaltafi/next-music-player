'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

// npm i next-nprogress-bar
// https://www.npmjs.com/package/next-nprogress-bar
const NProgressProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#fffd00"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default NProgressProvider;

// doc
/*
    <Link href="#test" data-disable-nprogress={true}>
        Test Link
    </Link>

    <button onClick={(e) => e.preventDefault()} data-prevent-nprogress={true}>
        preventDefault
    </button>

*/