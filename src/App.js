import Profile from "./props/Profile";

function App() {
const data = {
FullName: "Beyonce Knowles" , 
Bio: "she's an american song writter , singer , actors , producer she is marring to Jay-z and tey have 3 kids " ,
pro: "Singin and Dancing",
};

const handleName=(x)=>alert(x);

  return (
    <div>
<Profile  data={data} handleName={handleName} >
<img src="beyonce.jpg" width={500} />
</Profile>
    </div>
  );
}

export default App;
