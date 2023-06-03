

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div >
            {options.map((option) => (
                <button
                   
                  
                    onClick={onLeaveFeedback}
                    name={option}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};



export default FeedbackOptions;