import './App.css';

function Box({color}){
  return (
    <div className="colorBox" style={{backgroundColor: color}}></div>
  )
}

function BoxBox({numberOfBoxes}) {
  numberOfBoxes = 9
  return (
    <>
    <div className="boxBox">

    {/* Next Goal: Figure out how to deploy Boxes via variable numberOfBoxes, rather than hard coding them. Obv it's a for loop. Just need to figure out the proper syntax within React */}

      <Box color="#666b75" />
      <Box color="#666b75" />
      <Box color="#666b75" />
      <Box color="#666b75" />
      <Box color="#666b75" />
      <Box color="#666b75" />
      <Box color="#666b75" />
      <Box color="#666b75" />
      <Box color="#666b75" />
    </div>
    </>
  )
}


export default function App() {
  return (
    <>
    <div className="App">
      <BoxBox numberOfBoxes="9"/>
    </div>
    </>

  );
}
