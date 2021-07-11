import dynamic from "next/dynamic";
import init, {format_username, User} from "../wasm_test";

export default dynamic({loader: async () => {
  await init();

  const user = new User("John", "Peter");
  
  console.log(format_username(user));

  return function Index() {
    return <h1>loaded</h1>
  }
}})