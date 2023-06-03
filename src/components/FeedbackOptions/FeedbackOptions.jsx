

export const FeedbackOptions = ({ options, addFeedback }) => {
    return (
        <div >
            {options.map((option) => (
                <button
                    key={option}                 
                    onClick={addFeedback}
                    name={option}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};



