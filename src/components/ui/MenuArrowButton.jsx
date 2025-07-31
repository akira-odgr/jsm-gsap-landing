export const MenuArrowButton = ({ goToSlide, arrow, children }) => {
    return (
        <button className="text-left" onClick={goToSlide}>
            <span>{children}</span>
            <img src={arrow} alt="left-arrow" aria-hidden="true" />
        </button>
    );
};
