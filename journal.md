# Supabase Project Links

* <https://supabase.com/dashboard/projects>
* <https://supabase.com/docs/guides/api>
* <https://supabase.com/docs>

```bash
npx supabase login
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
