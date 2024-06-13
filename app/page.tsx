"use client"

import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={'/about'} data-disable-nprogress={false}>
        <Button>
          درباره ما 1
        </Button>
      </Link>

      <Button onClick={() => router.push('/about')}>
        درباره ما 2
      </Button>


      <div className="flex gap-4 items-center">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-6 h-6 text-tiny" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" size="sm" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
      </div>
    </main>
  );
}
