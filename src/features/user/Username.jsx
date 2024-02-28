import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);
  //ye hook basically hume allow karega ye state ko access krne k liye!! toh ye state recieve karega puri!! fir hume usme se jo nikalna hai wo nikaal lo!!
  //toh yaha se toh humne state access krli get karli matlab

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
