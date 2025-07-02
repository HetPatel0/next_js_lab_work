import Navgation_bar from "@/components/navgation_bar";

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navgation_bar />
      <div style={{ paddingLeft: "18rem" }}>{children}</div>
    </div>
  );
}
