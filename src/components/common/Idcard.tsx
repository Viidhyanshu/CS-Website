"use client";

import Card from "@/src/components/ui/TeamCard"; 

export default function Page() {
  return (
    <Card
      image="https://images.pexels.com/photos/34408249/pexels-photo-34408249.jpeg"
      name="John Doe"
      role="Lead Developer"
      socials={{
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        github: "https://github.com/johndoe"
      }}
      className="w-[400px] h-[600px]"
    />
  );
}
