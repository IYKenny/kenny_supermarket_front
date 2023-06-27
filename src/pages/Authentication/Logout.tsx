import { useEffect } from "react";
import useAuth from "../../apis/useAuth";

export default function Logout() {
    const { logout }: any = useAuth();

    useEffect(() => {
        logout();
    },[])

    return (
        <>
        </>
    )
}