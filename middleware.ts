import { authMiddleware } from "@clerk/nextjs";

// from the clerk document
export default authMiddleware({
  publicRoutes: ["/api/:path*"], //so that our get routes will be publicly accessible, otherwise it will throw the unauthorized error
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
