import Box from './box.js'

export default function BoxBox() {
    let number = 105;
    function BoxesArray() {
        // This function will eventually determine a number of boxes based on the user's screen size.
        const boxesArray = [];
        for (let i = 0; i < number; i++) {
            boxesArray[i] = i + 1
        }

        return boxesArray
    }
    
    const boxes = BoxesArray()

    return (
        <>
            <div className="boxBox">
                {boxes.map((id) => (
                    <Box key={id} />
                ))}
            </div>
        </>
    );
  }