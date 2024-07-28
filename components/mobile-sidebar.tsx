"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";


const MobileSidebar = () => {
    const [isMounted, setToMounted] = useState(false);


        // To get rid of hydration errors while rendering in React.
    useEffect(() => {
        setToMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon"
                className="md:hidden">
                    <Menu />
                </Button >
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}

export default MobileSidebar;