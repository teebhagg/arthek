import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>Arthek</SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <SheetClose asChild>
            <Button variant="link">
              <Link href={"/"}>Home</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="link">
              <Link href={"/about-me"}>About me</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="link">
              <Link href={"/my-works"}>My works</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="rounded-full">
              <Link href={"/contact"}>Contact</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
