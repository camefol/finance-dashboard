import { redirect } from "next/navigation";
import Menu from "@/components/app/menu/menu";

export default function AppIndexPage() {
    return (
        <main>
            <Menu />
        </main>
    )
}