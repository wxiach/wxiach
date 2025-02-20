import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function SiteAvatar() {
  return (
    <Avatar className="size-20">
      <AvatarImage
        className="object-cover"
        src="https://cdn.jsdelivr.net/gh/wxiach/image/8b4a768486bb65ffd2dcf727c7e7825c.jpeg"
        alt="@shadcn"
      />
    </Avatar>
  );
}
