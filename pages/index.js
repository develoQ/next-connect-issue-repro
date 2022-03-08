import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const f = async() => {
      const res1 = await fetch("/api/hello1");
      console.log(await res1.json())
      const res2 = await fetch("/api/hello2");
      console.log(await res2.json())
    }
    f()
  },[])
  return (
    <div>
      test
    </div>
  )
}
