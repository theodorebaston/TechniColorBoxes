import './App.css';

function Box({color}){
  return (
    <div className="color-box" style={{backgroundColor: color}}></div>
  )
}

export default function App() {
  return (
    <>
    <div className="App">
      <div className="box-box">
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
    </div>
    </>

  );
}
