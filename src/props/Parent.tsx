import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <div>
      <ChildAsFC color="red" onClick={() => console.log('Click')}>
        text
      </ChildAsFC>
    </div>
  );
};
export default Parent;
