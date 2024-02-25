interface props {
    className?: String;
}

const Notebook = (props: props) => {
    const { className } = props;
    return(
        <div className={`notebook px-[8px] ${className}`}>
            <h1>Notebooks</h1>
        </div>
    );
}

export default Notebook;