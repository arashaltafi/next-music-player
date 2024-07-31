import styles from "@/styles/pagination.module.css";

type PaginationProps = {
    currentPage: number;
    totalPage: number;
    setPageNumber?: (pageNumber: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
    currentPage,
    totalPage,
    setPageNumber,
}) => {
    const setPageNumberFunc = (value: number) => {
        if (
            value <= totalPage &&
            value > 0 &&
            setPageNumber != undefined &&
            Number(currentPage) !== Number(value)
        ) {
            setPageNumber(value);
        }
    };

    return (
        <div className={`${styles.paginationParent} select-none`}>
            {totalPage > 0 ? (
                <>
                    {totalPage === 1 ? (
                        <div
                            key={1}
                            className={`${styles.paginationNumber} ${currentPage === 1 ? `${styles.currentPage}` : ``
                                }`}
                        >
                            1
                        </div>
                    ) : totalPage === 2 ? (
                        <>
                            <div
                                key={1}
                                onClick={() => setPageNumberFunc(1)}
                                className={`${styles.paginationNumber} ${currentPage === 1 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                1
                            </div>
                            <div
                                key={2}
                                onClick={() => setPageNumberFunc(2)}
                                className={`${styles.paginationNumber} ${currentPage === 2 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                2
                            </div>
                        </>
                    ) : totalPage === 3 ? (
                        <>
                            <div
                                key={1}
                                onClick={() => setPageNumberFunc(1)}
                                className={`${styles.paginationNumber} ${currentPage === 1 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                1
                            </div>
                            <div
                                key={2}
                                onClick={() => setPageNumberFunc(2)}
                                className={`${styles.paginationNumber} ${currentPage === 2 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                2
                            </div>
                            <div
                                key={3}
                                onClick={() => setPageNumberFunc(3)}
                                className={`${styles.paginationNumber} ${currentPage === 3 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                3
                            </div>
                        </>
                    ) : totalPage === 4 ? (
                        <>
                            <div
                                key={1}
                                onClick={() => setPageNumberFunc(1)}
                                className={`${styles.paginationNumber} ${currentPage === 1 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                1
                            </div>
                            <div
                                key={2}
                                onClick={() => setPageNumberFunc(2)}
                                className={`${styles.paginationNumber} ${currentPage === 2 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                2
                            </div>
                            <div
                                key={3}
                                onClick={() => setPageNumberFunc(3)}
                                className={`${styles.paginationNumber} ${currentPage === 3 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                3
                            </div>
                            <div
                                key={4}
                                onClick={() => setPageNumberFunc(4)}
                                className={`${styles.paginationNumber} ${currentPage === 4 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                4
                            </div>
                        </>
                    ) : totalPage === 5 ? (
                        <>
                            <div
                                key={1}
                                onClick={() => setPageNumberFunc(1)}
                                className={`${styles.paginationNumber} ${currentPage === 1 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                1
                            </div>
                            <div
                                key={2}
                                onClick={() => setPageNumberFunc(2)}
                                className={`${styles.paginationNumber} ${currentPage === 2 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                2
                            </div>
                            <div
                                key={3}
                                onClick={() => setPageNumberFunc(3)}
                                className={`${styles.paginationNumber} ${currentPage === 3 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                3
                            </div>
                            <div
                                key={4}
                                onClick={() => setPageNumberFunc(4)}
                                className={`${styles.paginationNumber} ${currentPage === 4 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                4
                            </div>
                            <div
                                key={5}
                                onClick={() => setPageNumberFunc(5)}
                                className={`${styles.paginationNumber} ${currentPage === 5 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                5
                            </div>
                        </>
                    ) : totalPage === 6 ? (
                        <>
                            <div
                                key={1}
                                onClick={() => setPageNumberFunc(1)}
                                className={`${styles.paginationNumber} ${currentPage === 1 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                1
                            </div>
                            <div
                                key={2}
                                onClick={() => setPageNumberFunc(2)}
                                className={`${styles.paginationNumber} ${currentPage === 2 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                2
                            </div>
                            <div
                                key={3}
                                onClick={() => setPageNumberFunc(3)}
                                className={`${styles.paginationNumber} ${currentPage === 3 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                3
                            </div>
                            <div
                                key={4}
                                onClick={() => setPageNumberFunc(4)}
                                className={`${styles.paginationNumber} ${currentPage === 4 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                4
                            </div>
                            <div
                                key={5}
                                onClick={() => setPageNumberFunc(5)}
                                className={`${styles.paginationNumber} ${currentPage === 5 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                5
                            </div>
                            <div
                                key={6}
                                onClick={() => setPageNumberFunc(6)}
                                className={`${styles.paginationNumber} ${currentPage === 6 ? `${styles.currentPage}` : ``
                                    }`}
                            >
                                6
                            </div>
                        </>
                    ) : currentPage === 1 ? (
                        <>
                            <div
                                key={1}
                                onClick={() => setPageNumberFunc(1)}
                                className={`${styles.paginationNumber} ${styles.currentPage}`}
                            >
                                1
                            </div>
                            <div
                                key={2}
                                onClick={() => setPageNumberFunc(2)}
                                className={`${styles.paginationNumber}`}
                            >
                                2
                            </div>
                            <div
                                key={3}
                                onClick={() => setPageNumberFunc(3)}
                                className={`${styles.paginationNumber}`}
                            >
                                3
                            </div>
                            <div
                                key={totalPage + 5}
                                className={`${styles.paginationNumber} ${styles.betweenPages}`}
                            >
                                ...
                            </div>
                            <div
                                key={totalPage - 1}
                                onClick={() => setPageNumberFunc(totalPage - 1)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage - 1}
                            </div>
                            <div
                                key={totalPage}
                                onClick={() => setPageNumberFunc(totalPage)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage}
                            </div>
                        </>
                    ) : currentPage === 2 ? (
                        <>
                            <div
                                key={1}
                                onClick={() => setPageNumberFunc(1)}
                                className={`${styles.paginationNumber}`}
                            >
                                1
                            </div>
                            <div
                                key={2}
                                onClick={() => setPageNumberFunc(2)}
                                className={`${styles.paginationNumber} ${styles.currentPage}`}
                            >
                                2
                            </div>
                            <div
                                key={3}
                                onClick={() => setPageNumberFunc(3)}
                                className={`${styles.paginationNumber}`}
                            >
                                3
                            </div>
                            <div
                                key={4}
                                onClick={() => setPageNumberFunc(4)}
                                className={`${styles.paginationNumber}`}
                            >
                                4
                            </div>
                            <div
                                key={totalPage + 5}
                                className={`${styles.paginationNumber} ${styles.betweenPages}`}
                            >
                                ...
                            </div>
                            <div
                                key={totalPage - 1}
                                onClick={() => setPageNumberFunc(totalPage - 1)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage - 1}
                            </div>
                            <div
                                key={totalPage}
                                onClick={() => setPageNumberFunc(totalPage)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage}
                            </div>
                        </>
                    ) : currentPage === 3 ? (
                        <>
                            <div
                                key={1}
                                onClick={() => setPageNumberFunc(1)}
                                className={`${styles.paginationNumber}`}
                            >
                                1
                            </div>
                            <div
                                key={2}
                                onClick={() => setPageNumberFunc(2)}
                                className={`${styles.paginationNumber} `}
                            >
                                2
                            </div>
                            <div
                                key={3}
                                onClick={() => setPageNumberFunc(3)}
                                className={`${styles.paginationNumber} ${styles.currentPage}`}
                            >
                                3
                            </div>
                            <div
                                key={4}
                                onClick={() => setPageNumberFunc(4)}
                                className={`${styles.paginationNumber}`}
                            >
                                4
                            </div>
                            <div
                                key={totalPage + 5}
                                className={`${styles.paginationNumber} ${styles.betweenPages}`}
                            >
                                ...
                            </div>
                            <div
                                key={totalPage - 1}
                                onClick={() => setPageNumberFunc(totalPage - 1)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage - 1}
                            </div>
                            <div
                                key={totalPage}
                                onClick={() => setPageNumberFunc(totalPage)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage}
                            </div>
                        </>
                    ) : currentPage === totalPage - 2 ? (
                        <>
                            <div
                                key={1}
                                onClick={() => setPageNumberFunc(1)}
                                className={`${styles.paginationNumber}`}
                            >
                                1
                            </div>
                            <div
                                key={2}
                                onClick={() => setPageNumberFunc(2)}
                                className={`${styles.paginationNumber}`}
                            >
                                2
                            </div>
                            <div
                                key={3}
                                onClick={() => setPageNumberFunc(3)}
                                className={`${styles.paginationNumber}`}
                            >
                                3
                            </div>
                            <div
                                key={totalPage + 5}
                                className={`${styles.paginationNumber} ${styles.betweenPages}`}
                            >
                                ...
                            </div>
                            <div
                                key={totalPage - 3}
                                onClick={() => setPageNumberFunc(totalPage - 3)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage - 3}
                            </div>
                            <div
                                key={totalPage - 2}
                                onClick={() => setPageNumberFunc(totalPage - 2)}
                                className={`${styles.paginationNumber} ${styles.currentPage}`}
                            >
                                {totalPage - 2}
                            </div>
                            <div
                                key={totalPage - 1}
                                onClick={() => setPageNumberFunc(totalPage - 1)}
                                className={`${styles.paginationNumber} `}
                            >
                                {totalPage - 1}
                            </div>
                            <div
                                key={totalPage}
                                onClick={() => setPageNumberFunc(totalPage)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage}
                            </div>
                        </>
                    ) : currentPage === totalPage - 1 ? (
                        <>
                            <div
                                key={1}
                                onClick={() => setPageNumberFunc(1)}
                                className={`${styles.paginationNumber}`}
                            >
                                1
                            </div>
                            <div
                                key={2}
                                onClick={() => setPageNumberFunc(2)}
                                className={`${styles.paginationNumber}`}
                            >
                                2
                            </div>
                            <div
                                key={3}
                                onClick={() => setPageNumberFunc(3)}
                                className={`${styles.paginationNumber}`}
                            >
                                3
                            </div>
                            <div
                                key={totalPage + 5}
                                className={`${styles.paginationNumber} ${styles.betweenPages}`}
                            >
                                ...
                            </div>
                            <div
                                key={totalPage - 2}
                                onClick={() => setPageNumberFunc(totalPage - 2)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage - 2}
                            </div>
                            <div
                                key={totalPage - 1}
                                onClick={() => setPageNumberFunc(totalPage - 1)}
                                className={`${styles.paginationNumber} ${styles.currentPage}`}
                            >
                                {totalPage - 1}
                            </div>
                            <div
                                key={totalPage}
                                onClick={() => setPageNumberFunc(totalPage)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage}
                            </div>
                        </>
                    ) : currentPage === totalPage ? (
                        <>
                            <div
                                key={1}
                                onClick={() => setPageNumberFunc(1)}
                                className={`${styles.paginationNumber}`}
                            >
                                1
                            </div>
                            <div
                                key={2}
                                onClick={() => setPageNumberFunc(2)}
                                className={`${styles.paginationNumber}`}
                            >
                                2
                            </div>
                            <div
                                key={3}
                                onClick={() => setPageNumberFunc(3)}
                                className={`${styles.paginationNumber}`}
                            >
                                3
                            </div>
                            <div
                                key={totalPage + 5}
                                className={`${styles.paginationNumber} ${styles.betweenPages}`}
                            >
                                ...
                            </div>
                            <div
                                key={totalPage - 1}
                                onClick={() => setPageNumberFunc(totalPage - 1)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage - 1}
                            </div>
                            <div
                                key={totalPage}
                                onClick={() => setPageNumberFunc(totalPage)}
                                className={`${styles.paginationNumber} ${styles.currentPage}`}
                            >
                                {totalPage}
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                onClick={() => setPageNumberFunc(1)}
                                className={`${styles.paginationNumber}`}
                                key={1}
                            >
                                1
                            </div>
                            <div
                                onClick={() => setPageNumberFunc(2)}
                                className={`${styles.paginationNumber}`}
                                key={2}
                            >
                                2
                            </div>
                            <div
                                key={totalPage + 1}
                                className={`${styles.paginationNumber} ${styles.betweenPages}`}
                            >
                                ...
                            </div>
                            <div
                                key={currentPage - 1}
                                onClick={() => setPageNumberFunc(currentPage - 1)}
                                className={`${styles.paginationNumber}`}
                            >
                                {currentPage - 1}
                            </div>
                            <div
                                key={currentPage}
                                onClick={() => setPageNumberFunc(currentPage)}
                                className={`${styles.paginationNumber} ${styles.currentPage}`}
                            >
                                {currentPage}
                            </div>
                            <div
                                key={currentPage + 1}
                                onClick={() => setPageNumberFunc(currentPage + 1)}
                                className={`${styles.paginationNumber}`}
                            >
                                {currentPage + 1}
                            </div>
                            {currentPage !== totalPage - 3 ? (
                                <div
                                    key={totalPage + 2}
                                    className={`${styles.paginationNumber} ${styles.betweenPages}`}
                                >
                                    ...
                                </div>
                            ) : (
                                <></>
                            )}
                            <div
                                key={totalPage - 1}
                                onClick={() => setPageNumberFunc(totalPage - 1)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage - 1}
                            </div>
                            <div
                                key={totalPage}
                                onClick={() => setPageNumberFunc(totalPage)}
                                className={`${styles.paginationNumber}`}
                            >
                                {totalPage}
                            </div>
                        </>
                    )}
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default PaginationComponent;