interface tProps {
    text: string,
    colorType: string; // Define a prop to determine color type

}



function Buttons({ text, colorType }: tProps) {

    let buttonColor;

    if (colorType === 'primary') {
        buttonColor = 'bg-gradient-to-br from-blue-400 to-green-600';
    } else if (colorType === 'secondary') {
        buttonColor = 'bg-gradient-to-br from-orange-400 to-pink-600';
    } else {
        buttonColor = 'bg-gradient-to-br from-pink-400 to-pink-800'; // Default color
    }

    return (


        <button
            className={`mt-8 h-12 w-48 font-semibold text-white rounded-md hover:border
                     hover:border-white p-2 ${buttonColor}`}
        >
            {text}
        </button>
    )
}
export default Buttons