import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello Word!</h1>

      <div className="pt-[4.75rm] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-20">Something</Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
