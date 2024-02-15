import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
const SettingPage = async () => {
  const session = await auth();
  return (
    <>
      <div>{JSON.stringify(session)}</div>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button>signOut</Button>
      </form>
    </>
  );
};

export default SettingPage;
