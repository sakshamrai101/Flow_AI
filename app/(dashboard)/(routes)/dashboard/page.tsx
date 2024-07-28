"use client";

import { Card } from "@/components/ui/card";
import { ArrowBigRight, CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";



const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },

  {
    label: "Generate Images",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },


  {
    label: "Generate Videos",
    icon: VideoIcon,
    href: "/video",
    color: "text-red-600",
  },

  {
    label: "Generate Audio",
    icon: MusicIcon,
    href: "/audio",
    color: "text-emerald-700",
  },


  {
    label: "Generate Code",
    icon: CodeIcon,
    href: "/code",
    color: "yellow-700",
  },

]

const DashboardPage = () => {
  const router = useRouter();
  return (
  <div>
    <div className="mb-8 space-y-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Welcome to Flow.ai
      </h2>
      <p className="text-muted-foreground font-light text-sm 
      md:text-lg text-center">
        Boost your power of content creation with the magic of AI. 
        
      </p>
    </div>
    <div className="px-4 md:px-20 lg:px-32 space-y-4">
      {tools.map((tool) => (
        <Card 
        onClick={() => router.push(tool.href)}
        key={tool.href}
        className="p-4 border-black/5 flex items-centre 
        justify-between hover:shadow-md transition cursor-pointer ">
          <div className="flex items-center gap-x-4">
            <div className={cn("p-2, w-fit, rounded-md", tool.bgColor)}>
              <tool.icon className={cn("w-8 h-8", tool.color)} />
            </div>

            <div className="font-semibold">
              {tool.label}
            </div>
          </div>
          <ArrowBigRight className="w-5 h-5"/>
        </Card>
      ))}
    </div>
  </div>
  )
}

export default DashboardPage;
