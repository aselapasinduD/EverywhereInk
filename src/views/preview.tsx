interface props {
    className?: String;
}

const Preview = (props: props) => {
    const { className } = props;
    return(
        <div className={`notebook px-[8px] ${className}`}>
            Preview
        </div>
    );
}

export default Preview;