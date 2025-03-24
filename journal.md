## TODO

* Set up on local and resolve all setup related issues ✅
* Initial setup of backend microservice with django & spring
* Browse through the video and fix the image display issue
* Build the dashboard and integrate it into project
* decouple connection from [frontend -> supabase] to [frontend -> backend -> supabase] NB: for the sake of MVP Launch in 3 Months to switch to purely [frontend -> backend] communication once live
* Set up docker-compose for backend api communication
* Introduce necessary technologies for project
* Deploy to platform for user testing
* set up unit testing and integration testing

# Supabase Project Links

* <https://supabase.com/dashboard/projects>
* <https://supabase.com/docs/guides/api>
* <https://supabase.com/docs>

```bash
npx supabase login
npx supabase gen types typescript --project-id Your Supabase Project ID --schema public > database.types.ts
```

07/03/2025
The setup has been fixed. The error by default on load is normal because user is not logged in.
NB: When the user logs in the error dissapears. So it's not an issue

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient, useSessionContext, useUser as useSupaUser} from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { User } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
