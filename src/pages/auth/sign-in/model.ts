import { routes } from "@/shared/routing";
import { chainAnonymous } from "@/shared/session";

export const currentRoute = routes.auth.signInByEmail;

export const anonymousRoute = chainAnonymous(currentRoute, {
  otherwise: routes.home.open,
});
