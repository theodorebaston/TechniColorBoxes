import Box from './box.js'

export default function BoxBox() {
    const boxes = [1,2,3,4,5,6,7,8,9]
    boxes.length = 9;

    return (
        <>
            <div className="boxBox">
                {boxes.map(() => (
                    <Box color="#666b75" />
                ))}
            </div>
        </>
    );
  }