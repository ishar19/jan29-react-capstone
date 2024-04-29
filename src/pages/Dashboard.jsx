import { Notes, News, UserInfo } from "../components";

export default function Dashboard() {
  return (
    <>
      <p>Dashboard page</p>
      <UserInfo />
      <Notes />
      <News />
    </>
  );
}