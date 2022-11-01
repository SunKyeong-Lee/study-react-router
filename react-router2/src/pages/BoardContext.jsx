import { useParams } from "react-router-dom";

const BoardContext = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>BoardContext 입니다 : {id}</h2>
    </div>
  );
};

export default BoardContext;
