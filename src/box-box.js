import Box from './box.js'

export default function BoxBox() {
    
    function BoxesArray() {
        // This function will eventually determine a number of boxes based on the user's screen size.
        return [1,2,3,4,5,6,7,8,9]
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