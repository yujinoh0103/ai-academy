import { Outlet } from "react-router";

export function AuthTemplate({ children }: any) {
  return (
    <div>
      Auth Template <Outlet />
    </div>
  );
}
