import Card from "./Card";


function App() {

  const data = {
  image: '../../.learn/assets/Dylan.png?raw=true',
  cardTitle: 'Bob Dylan',
  cardDescription:
    'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
  button: {
    url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
    label: 'Go to wikipedia',
  },
};


  return <Card  info={data}/>;
}

export default App;
