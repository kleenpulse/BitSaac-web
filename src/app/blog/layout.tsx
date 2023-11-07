import BlogCtxProvider from "@/context/BlogContext"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bitsaac | Blog",
  description: "Generated by create next app",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <BlogCtxProvider>{children}</BlogCtxProvider>
}
