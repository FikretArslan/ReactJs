import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Container } from "reactstrap";

const Useeffect = () => {
  const [counter, setCounter] = useState(0);

  useEffect( ()=>{
    document.title=`Hello ${counter}`;
  }, [counter] );

  


  return (
    <Container className="text-center mt-5">
      <h2>{counter} kere tıkladınız</h2>
      <Button onClick={() => setCounter((prev) => prev + 1)}>Click me</Button>
    </Container>
  );
};

export default Useeffect;
