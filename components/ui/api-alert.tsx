import { Copy, Server } from "lucide-react";
import { toast } from "react-hot-toast";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// we re gon use this alert in our api such as the product, category, etc(for ex in the store settings we use it for the env var and in the product we use it for the api route)
interface ApiAlertProps {
  title: string;
  description: string;
  variant: 'public' | 'admin', //the routes will be pub - get route or for the admin (patch and delete)
};


const textMap: Record<ApiAlertProps["variant"], string> = {
  public: 'Public',
  admin: 'Admin'
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = { // so in the record the 1st str can be of var, and the 2nd of choice of badge props variant
  public: 'secondary',
  admin: 'destructive'
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
  variant = "public"
}) => {
  // copy fn when we click the copy icon
  const onCopy = (description: string) => {
    navigator.clipboard.writeText(description);
    toast.success('API Route copied to clipboard.');
  }

  return ( 
    <Alert>
      <Server className="h-4 w-4" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}
        <Badge variant={variantMap[variant]}>
          {textMap[variant]}
        </Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        {/* the code is the native html elem */}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description} 
        </code>
        <Button variant="outline" size="sm" onClick={() => onCopy(description)}>
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
   );
};
