import ClientComponent from "@/components/client-component";
import ClientComponentWithChildren from "@/components/client-component-with-children";
import ServerComponent from "@/components/server-component";

export default function Home() {
  return (
    // <ClientComponent />
    <ClientComponentWithChildren>
      <ServerComponent />
    </ClientComponentWithChildren>
  );
}
