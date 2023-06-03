
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div >
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Total: {positivePercentage.toFixed(2)}%</span>
        </div>
    );
};



